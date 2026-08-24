export default function ExampleLayout({ title, description, bad, good, children }) {
  const hasBoth = bad && good;

  return (
    <div className="fixed inset-0 overflow-y-auto bg-white text-gray-900">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <header className="mb-8 border-b border-gray-200 pb-6">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {description && <p className="mt-2 text-base text-gray-600">{description}</p>}
        </header>

        {hasBoth && (
          <div className="grid gap-8 md:grid-cols-2">
            <section aria-labelledby="example-bad-heading" className="rounded-xl border-2 border-red-200 bg-red-50/40 p-6">
              <h2 id="example-bad-heading" className="mb-4 text-sm font-bold uppercase tracking-wide text-red-700">
                Malo
              </h2>
              {bad}
            </section>

            <section aria-labelledby="example-good-heading" className="rounded-xl border-2 border-green-200 bg-green-50/40 p-6">
              <h2 id="example-good-heading" className="mb-4 text-sm font-bold uppercase tracking-wide text-green-700">
                Bueno
              </h2>
              {good}
            </section>
          </div>
        )}

        {!hasBoth && (bad || good)}

        {children}
      </div>
    </div>
  );
}
