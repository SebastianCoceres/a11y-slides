import { useEffect, useRef, useState } from 'react';
import { Search } from 'lucide-react';
import slideCatalog from '@/data/slideCatalog.json';
import { Slide } from './Slide';

function extractSlideEntry(element, index) {
  try {
    const rendered = element.type(element.props);
    if (rendered?.type !== Slide) return null;
    const id = rendered.props?.id;
    const info = id && slideCatalog[id];
    if (!info) return null;
    return { index, label: info.title, wcag: info.wcag?.code || null };
  } catch (error) {
    console.error('extractSlideEntry failed', index, error);
    return null;
  }
}

export function SlideIndexOverlay({ open, slides, currentIndex, onSelect, onClose }) {
  const [query, setQuery] = useState('');
  const [highlighted, setHighlighted] = useState(0);
  const inputRef = useRef(null);
  const entriesRef = useRef(null);
  const currentRowRef = useRef(null);

  if (open && !entriesRef.current) {
    entriesRef.current = slides.map((element, i) => extractSlideEntry(element, i)).filter(Boolean);
  }

  useEffect(() => {
    if (!open) return;
    setQuery('');
    const entries = entriesRef.current || [];
    const currentRow = entries.findIndex((entry) => entry.index === currentIndex);
    setHighlighted(currentRow === -1 ? 0 : currentRow);
    inputRef.current?.focus();
    requestAnimationFrame(() => {
      currentRowRef.current?.scrollIntoView({ block: 'center' });
    });
  }, [open, currentIndex]);

  const entries = entriesRef.current || [];
  const q = query.trim().toLowerCase();
  const filtered = q
    ? entries.filter((entry) => entry.label.toLowerCase().includes(q) || String(entry.index + 1).includes(q))
    : entries;

  if (!open) return null;

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      onClose();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      setHighlighted((h) => Math.min(h + 1, filtered.length - 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setHighlighted((h) => Math.max(h - 1, 0));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const entry = filtered[highlighted];
      if (entry) onSelect(entry.index);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 pt-24 backdrop-blur-sm"
      onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Índice de diapositivas"
        onClick={(event) => event.stopPropagation()}
        className="flex max-h-[70vh] w-full max-w-xl flex-col overflow-hidden rounded-xl border border-white/10 bg-[#11141b] shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <Search className="h-4 w-4 shrink-0 text-white/40" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setHighlighted(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Buscar diapositiva..."
            className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
          />
        </div>
        <div className="overflow-y-auto py-1">
          {filtered.length === 0 && (
            <p className="px-4 py-6 text-center text-sm text-white/40">Sin resultados.</p>
          )}
          {filtered.map((entry, row) => (
            <button
              key={entry.index}
              ref={entry.index === currentIndex ? currentRowRef : null}
              type="button"
              onClick={() => onSelect(entry.index)}
              onMouseEnter={() => setHighlighted(row)}
              className={`flex w-full items-center justify-between gap-3 px-4 py-2 text-left text-sm transition-colors ${
                row === highlighted ? 'bg-white/10' : ''
              }`}>
              <span className="flex min-w-0 items-center gap-3">
                <span className="w-8 shrink-0 text-right text-xs tabular-nums text-white/30">
                  {entry.index + 1}
                </span>
                <span
                  className={`min-w-0 flex-1 truncate ${
                    entry.index === currentIndex ? 'font-semibold text-white' : 'text-white/70'
                  }`}>
                  {entry.label}
                </span>
                {entry.wcag && (
                  <span className="shrink-0 rounded-full bg-teal-500/15 px-2 py-0.5 text-[10px] font-medium tabular-nums text-teal-300">
                    {entry.wcag}
                  </span>
                )}
              </span>
              {entry.index === currentIndex && (
                <span className="shrink-0 rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-white/50">
                  Actual
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="border-t border-white/10 px-4 py-2 text-[11px] text-white/30">
          ↑↓ navegar · Enter ir · Esc cerrar
        </div>
      </div>
    </div>
  );
}
