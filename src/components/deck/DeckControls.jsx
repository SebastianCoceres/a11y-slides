import { ChevronLeft, ChevronRight, Moon, Sun } from 'lucide-react';

const BUTTON_CLASS =
  'rounded-full bg-deck-ink/10 p-3 text-deck-muted backdrop-blur transition-colors hover:bg-deck-ink/20';

export function DeckControls({ prev, next, index, total, theme, onToggleTheme }) {
  const isFirst = index === 0;
  const isLast = index === total - 1;

  return (
    <div className="fixed bottom-6 right-6 z-10 flex flex-row gap-2">
      {onToggleTheme && (
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
          title="Cambiar tema (T)"
          className={BUTTON_CLASS}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      )}
      <button
        type="button"
        onClick={prev}
        disabled={isFirst}
        aria-label="Diapositiva anterior"
        className={`${BUTTON_CLASS} ${isFirst ? 'pointer-events-none opacity-30' : ''}`}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={next}
        disabled={isLast}
        aria-label="Diapositiva siguiente"
        className={`${BUTTON_CLASS} ${isLast ? 'pointer-events-none opacity-30' : ''}`}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
