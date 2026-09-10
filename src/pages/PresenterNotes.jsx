import { useEffect, useMemo, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { NOTES_CHANNEL } from '@/components/deck/notesChannel';
import guionRaw from '../../GUION.md?raw';
import anexoRaw from '../../ANEXO.md?raw';

const ID_MARKER = /^<!--\s*id:(\w+)\s*-->\s*$/;
const DIVIDER = /^---\s*$/;
const HEADING = /^##\s+/;
const H1 = /^#\s+/;
const H2_TITLE = /^##\s+(.*)$/;

const markdownComponents = {
  h1: (props) => <h1 className="mb-2 text-2xl font-bold text-brand-light" {...props} />,
  h2: (props) => (
    <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-brand" {...props} />
  ),
  h3: (props) => <h3 className="mb-1 mt-3 text-sm font-semibold text-gray-200" {...props} />,
  p: (props) => <p className="mb-3 text-base leading-relaxed text-gray-300 last:mb-0" {...props} />,
  strong: (props) => <strong className="font-semibold text-white" {...props} />,
  ul: (props) => <ul className="mb-3 list-disc space-y-1 pl-5 text-gray-300 last:mb-0" {...props} />,
  ol: (props) => <ol className="mb-3 list-decimal space-y-1 pl-5 text-gray-300 last:mb-0" {...props} />,
  li: (props) => <li {...props} />,
  code: (props) => (
    <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-sm text-teal-300" {...props} />
  ),
  blockquote: (props) => (
    <blockquote className="border-l-2 border-white/20 pl-3 italic text-gray-500" {...props} />
  ),
  a: (props) => (
    <a className="text-teal-300 underline hover:text-teal-200" target="_blank" rel="noreferrer" {...props} />
  ),
};

const MONITOR_WIDTH = 1280;
const MONITOR_HEIGHT = 720;

function MiniMonitorPreview({ src, connected }) {
  const wrapperRef = useRef(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? 0;
      setScale(width / MONITOR_WIDTH);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full overflow-hidden rounded-md bg-black"
      style={{ aspectRatio: `${MONITOR_WIDTH} / ${MONITOR_HEIGHT}` }}
    >
      {connected && scale > 0 ? (
        <iframe
          key="mini-deck-preview"
          src={src}
          title="Vista previa en miniatura de la presentación"
          aria-hidden="true"
          tabIndex={-1}
          className="pointer-events-none absolute left-0 top-0 origin-top-left border-0"
          style={{ width: MONITOR_WIDTH, height: MONITOR_HEIGHT, transform: `scale(${scale})` }}
        />
      ) : (
        <div className="flex h-full items-center justify-center text-[11px] text-gray-600">
          {connected ? '' : 'Esperando presentación…'}
        </div>
      )}
    </div>
  );
}

function parseSections(markdown) {
  const lines = markdown.split('\n');
  const sections = [];
  let current = { id: null, lines: [] };

  const flush = () => {
    if (current.lines.some((line) => line.trim() !== '')) sections.push(current);
  };

  for (const line of lines) {
    if (DIVIDER.test(line)) {
      flush();
      current = { id: null, lines: [] };
      continue;
    }
    const marker = line.match(ID_MARKER);
    if (marker) {
      flush();
      current = { id: marker[1], lines: [] };
      continue;
    }
    if (HEADING.test(line)) {
      flush();
      current = { id: null, lines: [line] };
      continue;
    }
    current.lines.push(line);
  }
  flush();

  return sections.map((section) => ({ ...section, content: section.lines.join('\n').trim() }));
}

function parseAnexoSections(markdown) {
  const lines = markdown.split('\n');
  const sections = [];
  let current = null;

  for (const line of lines) {
    if (DIVIDER.test(line)) continue;
    const heading = line.match(H2_TITLE);
    if (heading) {
      if (current) sections.push(current);
      current = { title: heading[1].trim(), lines: [] };
      continue;
    }
    if (H1.test(line)) continue;
    if (current) current.lines.push(line);
  }
  if (current) sections.push(current);

  return sections
    .map((section) => ({ ...section, content: section.lines.join('\n').trim() }))
    .filter((section) => section.content !== '');
}

export default function PresenterNotes() {
  const sections = useMemo(() => parseSections(guionRaw), []);
  const anexoSections = useMemo(() => parseAnexoSections(anexoRaw), []);
  const [activeTopicId, setActiveTopicId] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [connected, setConnected] = useState(false);
  const sectionRefs = useRef({});
  const scrollContainerRef = useRef(null);
  const userScrollingRef = useRef(false);
  const autoScrollingRef = useRef(false);
  const scrollIdleTimeoutRef = useRef(null);

  useEffect(() => {
    const channel = new BroadcastChannel(NOTES_CHANNEL);
    channel.onmessage = (event) => {
      if (event.data?.type !== 'slide') return;
      setConnected(true);
      setActiveTopicId(event.data.topicId);
      setActiveIndex(event.data.index);
    };
    channel.postMessage({ type: 'requestState' });
    return () => channel.close();
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const handleScroll = () => {
      if (autoScrollingRef.current) return;
      userScrollingRef.current = true;
      clearTimeout(scrollIdleTimeoutRef.current);
      scrollIdleTimeoutRef.current = setTimeout(() => {
        userScrollingRef.current = false;
      }, 1000);
    };
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollIdleTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!activeTopicId || userScrollingRef.current) return;
    autoScrollingRef.current = true;
    sectionRefs.current[activeTopicId]?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    const settle = setTimeout(() => {
      autoScrollingRef.current = false;
    }, 700);
    return () => clearTimeout(settle);
  }, [activeTopicId]);

  return (
    <div className="flex h-screen flex-col bg-[#0c0e14] text-gray-300">
      <div className="flex shrink-0 items-center gap-2 border-b border-white/5 px-4 py-2 text-xs">
        <span className={`h-2 w-2 rounded-full ${connected ? 'bg-emerald-400' : 'bg-gray-600'}`} />
        <span className="text-gray-500">
          {connected ? 'Sincronizado con la presentación' : 'Esperando la presentación...'}
        </span>
      </div>

      <div className="grid flex-1 grid-cols-[2fr_1fr] overflow-hidden">
        <div ref={scrollContainerRef} className="overflow-y-auto px-6 py-8">
          <div className="mx-auto max-w-2xl space-y-5">
            {sections.map((section, i) =>
              section.id ? (
                <div
                  key={i}
                  ref={(el) => {
                    sectionRefs.current[section.id] = el;
                  }}
                  className={`rounded-xl border p-5 transition-colors ${
                    section.id === activeTopicId
                      ? 'border-brand bg-brand/10'
                      : 'border-white/5 bg-white/[0.02]'
                  }`}
                >
                  <ReactMarkdown components={markdownComponents}>{section.content}</ReactMarkdown>
                </div>
              ) : (
                <div key={i} className="px-1 pt-4 first:pt-0">
                  <ReactMarkdown components={markdownComponents}>{section.content}</ReactMarkdown>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="flex flex-col overflow-hidden border-l border-white/10">
          <div className="shrink-0 border-b border-white/10 p-3">
            <div className="mb-1.5 px-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-600">
              Vista en vivo
            </div>
            <MiniMonitorPreview
              src={`/presentacion/${(activeIndex ?? 0) + 1}`}
              connected={connected}
            />
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto p-4">
            <div className="mb-3 px-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-600">
              Anexos
            </div>
            <div className="space-y-4">
              {anexoSections.map((section, i) => (
                <div key={i} className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand">
                    {section.title}
                  </h3>
                  <ReactMarkdown components={markdownComponents}>{section.content}</ReactMarkdown>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
