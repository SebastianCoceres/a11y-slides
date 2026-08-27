import { MessageCircle } from 'lucide-react';
import InfoBlock from './InfoBlock';

const HELP_POSITION_CLASSES = {
  'bottom-left': 'bottom-3 left-3',
  'top-right': 'top-3 right-3',
  'bottom-right': 'bottom-3 right-3',
};

function MiniPage({ label, helpPosition }) {
  return (
    <div className="relative h-48 w-56 rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">{label}</p>
      <div className="mt-3 space-y-2">
        <div className="h-2.5 w-3/4 rounded bg-slate-100" />
        <div className="h-2.5 w-1/2 rounded bg-slate-100" />
        <div className="h-2.5 w-2/3 rounded bg-slate-100" />
      </div>
      <button
        type="button"
        aria-label="Abrir ayuda"
        className={`absolute flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500 text-white shadow ${HELP_POSITION_CLASSES[helpPosition]}`}>
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}

function Layout({ children, info }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white p-12">
      <div className="grid w-full max-w-4xl grid-cols-1 items-start gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          <div className="mb-6 text-left">
            <p className="text-xs font-semibold tracking-wide text-indigo-500 uppercase">Aurea</p>
            <h1 className="mt-1 text-xl font-bold text-slate-900">Ayuda consistente entre páginas</h1>
          </div>
          <div className="flex flex-wrap items-start gap-8">{children}</div>
        </div>
        {info}
      </div>
    </div>
  );
}

export function ConsistentHelpBad() {
  return (
    <Layout
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            El botón de ayuda cambia de esquina entre páginas: abajo a la izquierda en "Página A", arriba
            a la derecha en "Página B". Quien depende de la ubicación memorizada del botón — por ejemplo
            navegando con aumento de pantalla, donde solo ve una porción a la vez — tiene que buscarlo de
            nuevo cada vez.
          </p>
        </InfoBlock>
      }>
      <MiniPage label="Página A — Dashboard" helpPosition="bottom-left" />
      <MiniPage label="Página B — Pedidos" helpPosition="top-right" />
    </Layout>
  );
}

export function ConsistentHelpGood() {
  return (
    <Layout
      info={
        <InfoBlock title="Mismo lugar en todas las páginas">
          <p className="text-sm text-gray-700">
            El botón de ayuda aparece siempre abajo a la derecha, en ambas páginas. Su posición relativa
            se vuelve predecible en toda la aplicación (WCAG 3.2.6, Ayuda consistente).
          </p>
        </InfoBlock>
      }>
      <MiniPage label="Página A — Dashboard" helpPosition="bottom-right" />
      <MiniPage label="Página B — Pedidos" helpPosition="bottom-right" />
    </Layout>
  );
}
