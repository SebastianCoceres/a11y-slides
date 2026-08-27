export function Slide({ id, children }) {
  return (
    <div
      id={id}
      className="deck-slide flex h-full w-full flex-col items-center justify-center overflow-y-auto px-12 py-16 text-center md:px-24 "
    >
      <div className="w-full max-w-6xl text-gray-400 text-balance">
        {children}
      </div>
    </div>
  );
}
