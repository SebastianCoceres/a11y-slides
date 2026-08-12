export function Slide({ children }) {
  return (
    <div className="deck-slide flex h-full w-full flex-col items-center justify-center overflow-y-auto px-12 py-16 text-center md:px-24">
      <div className="w-full max-w-6xl">{children}</div>
    </div>
  );
}
