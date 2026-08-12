import { ChevronLeft, ChevronRight } from 'lucide-react';

export function DeckControls({ prev, next, index, total }) {
  const isFirst = index === 0;
  const isLast = index === total - 1;

  return (
    <div className="fixed bottom-6 right-6 z-10 flex flex-row gap-2">
      <button
        type="button"
        onClick={prev}
        disabled={isFirst}
        aria-label="Diapositiva anterior"
        className={`rounded-full bg-white/10 p-3 text-[#93a1a1] backdrop-blur transition-colors hover:bg-white/20 ${
          isFirst ? 'pointer-events-none opacity-30' : ''
        }`}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={next}
        disabled={isLast}
        aria-label="Diapositiva siguiente"
        className={`rounded-full bg-white/10 p-3 text-[#93a1a1] backdrop-blur transition-colors hover:bg-white/20 ${
          isLast ? 'pointer-events-none opacity-30' : ''
        }`}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
