import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

function BadExample() {
  return (
    <div className="w-full max-w-xl rounded-lg border border-slate-200 bg-white p-6">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-400">Comentarios destacados</p>
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
          MG
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Marina Gómez</p>
          <p className="mt-1 text-sm text-gray-700">
            Su comentario sobre Aurea fue: "It just works" — cliente desde 2022.
          </p>
        </div>
      </div>
    </div>
  );
}

function GoodExample() {
  return (
    <div className="w-full max-w-xl rounded-lg border border-slate-200 bg-white p-6">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-400">Comentarios destacados</p>
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
          MG
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Marina Gómez</p>
          <p className="mt-1 text-sm text-gray-700">
            Su comentario sobre Aurea fue: <span lang="en">"It just works"</span> — cliente desde 2022.
          </p>
        </div>
      </div>
    </div>
  );
}

export function PartsLanguageBad() {
  return (
    <AppShell
      active="Reportes"
      title="Reporte de satisfacción"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            La frase en inglés está suelta dentro de un párrafo en español, sin ningún atributo{' '}
            <code>lang</code> que la distinga. Un lector de pantalla configurado en español sigue usando
            la voz y las reglas de pronunciación en español para leerla, y "It just works" sale como una
            sucesión de sonidos irreconocibles en inglés.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function PartsLanguageGood() {
  return (
    <AppShell
      active="Reportes"
      title="Reporte de satisfacción"
      info={
        <InfoBlock title="Idioma de la frase marcado">
          <p className="text-sm text-gray-700">
            La frase en inglés está envuelta en <code>{'<span lang="en">'}</code>. El lector de pantalla
            detecta el cambio de idioma y pasa a la voz y fonética en inglés solo para ese fragmento,
            antes de volver al español para el resto del párrafo (WCAG 3.1.2, Idioma de las partes).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
