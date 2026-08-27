import { useEffect } from 'react';

export function useKeyboardNavigation({ next, prev, goTo, total, indexOpen, onToggleIndex, onCloseIndex }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.repeat) return;

      if ((event.key === 'Control' && event.shiftKey) || (event.key === 'Shift' && event.ctrlKey)) {
        event.preventDefault();
        onToggleIndex();
        return;
      }

      if (indexOpen) {
        if (event.key === 'Escape') {
          event.preventDefault();
          onCloseIndex();
        }
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
        default:
          break;
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev, goTo, total, indexOpen, onToggleIndex, onCloseIndex]);
}
