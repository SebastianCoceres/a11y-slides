import { Copy, Pencil, Trash2 } from 'lucide-react';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

function BadExample() {
  return (
    <div className="w-80 rounded-lg border border-slate-200 bg-white p-5">
      <p className="text-sm font-semibold text-slate-900">Pedido #4521</p>
      <div className="mt-4 flex items-center gap-2">
        <button
          type="button"
          aria-label="Editar pedido"
          className="flex h-8 w-8 items-center justify-center rounded border border-slate-100 text-slate-300 hover:text-slate-400">
          <Pencil className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Duplicar pedido"
          className="flex h-8 w-8 items-center justify-center rounded border border-slate-100 text-slate-300 hover:text-slate-400">
          <Copy className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Eliminar pedido"
          className="flex h-8 w-8 items-center justify-center rounded border border-slate-100 text-slate-300 hover:text-slate-400">
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function GoodExample() {
  return (
    <div className="w-80 rounded-lg border border-slate-200 bg-white p-5">
      <p className="text-sm font-semibold text-slate-900">Pedido #4521</p>
      <div className="mt-4 flex items-center gap-2">
        <button
          type="button"
          aria-label="Editar pedido"
          className="flex h-8 w-8 items-center justify-center rounded border border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-900">
          <Pencil className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Duplicar pedido"
          className="flex h-8 w-8 items-center justify-center rounded border border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-900">
          <Copy className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Eliminar pedido"
          className="flex h-8 w-8 items-center justify-center rounded border border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-900">
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export function NonTextContrastBad() {
  return (
    <AppShell
      active="Pedidos"
      title="Detalle de pedido"
      info={
        <InfoBlock variant="warning" title="Por debajo de 3:1">
          <p className="text-sm text-gray-700">
            El borde y el ícono de cada botón usan <code>slate-300</code> sobre blanco: el contraste queda
            justo por debajo del 3:1 que necesita un elemento no textual para distinguirse del fondo.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function NonTextContrastGood() {
  return (
    <AppShell
      active="Pedidos"
      title="Detalle de pedido"
      info={
        <InfoBlock title="3:1 también aplica a íconos y bordes">
          <p className="text-sm text-gray-700">
            <code>slate-300</code> sobre blanco da justo por debajo de 3:1 — el mismo umbral que un ícono o
            un borde de control necesitan para distinguirse del fondo, aunque no sea texto.
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
