export function ProgressBar({ index, total }) {
  return (
    <div className="fixed bottom-0 left-0 z-10 h-1 w-full bg-white/10">
      <div
        className="h-full bg-[#268bd2] transition-[width] duration-300"
        style={{ width: `${((index + 1) / total) * 100}%` }}
      />
    </div>
  );
}
