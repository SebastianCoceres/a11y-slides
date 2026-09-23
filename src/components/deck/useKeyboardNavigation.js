import { useEffect, useRef } from 'react';

const DOUBLE_ESCAPE_WINDOW_MS = 500;

export function useKeyboardNavigation({
  next,
  prev,
  goTo,
  total,
  indexOpen,
  onToggleIndex,
  onCloseIndex,
  onToggleTheme,
}) {
  const lastEscapeAtRef = useRef(0);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.repeat) return;

      if (event.key === 'Escape') {
        event.preventDefault();

        if (indexOpen) {
          onCloseIndex();
          lastEscapeAtRef.current = 0;
          return;
        }

        const now = Date.now();
        if (now - lastEscapeAtRef.current < DOUBLE_ESCAPE_WINDOW_MS) {
          onToggleIndex();
          lastEscapeAtRef.current = 0;
        } else {
          lastEscapeAtRef.current = now;
        }
        return;
      }

      if (indexOpen) {
        return;
      }

      if (event.target.closest('input, textarea, [contenteditable]')) return;

      switch (event.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          event.preventDefault();
          next();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          event.preventDefault();
          prev();
          break;
        case 'Home':
          event.preventDefault();
          goTo(0);
          break;
        case 'End':
          event.preventDefault();
          goTo(total - 1);
          break;
        case 't':
        case 'T':
          if (!onToggleTheme || event.ctrlKey || event.metaKey || event.altKey) break;
          event.preventDefault();
          onToggleTheme();
          break;
        default:
          break;
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev, goTo, total, indexOpen, onToggleIndex, onCloseIndex, onToggleTheme]);
}
