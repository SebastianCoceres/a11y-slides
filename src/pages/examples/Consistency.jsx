import { Button } from '@/components/ui/button';
import AppShell from './AppShell';

function Panel({ label, children }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">{label}</p>
      {children}
    </div>
  );
}

function BadExample() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Panel label="Editar factura">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Factura #F-2451</p>
          <button className="rounded border border-slate-300 px-3 py-1 text-xs text-gray-600 hover:bg-slate-50">
            Guardar
          </button>
        </div>
        <div className="mt-16 h-16 rounded bg-slate-50" />
      </Panel>
      <Panel label="Editar pedido">
        <p className="text-sm text-gray-500">Pedido #4521</p>
        <div className="mt-16 h-16 rounded bg-slate-50" />
        <div className="mt-4 flex justify-start">
          <Button className="bg-red-600 text-white hover:bg-red-500">Actualizar</Button>
        </div>
      </Panel>
    </div>
  );
}

function GoodExample() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Panel label="Editar factura">
        <p className="text-sm text-gray-500">Factura #F-2451</p>
        <div className="mt-16 h-16 rounded bg-slate-50" />
        <div className="mt-4 flex justify-end">
          <Button>Guardar</Button>
        </div>
      </Panel>
      <Panel label="Editar pedido">
        <p className="text-sm text-gray-500">Pedido #4521</p>
        <div className="mt-16 h-16 rounded bg-slate-50" />
        <div className="mt-4 flex justify-end">
          <Button>Guardar</Button>
        </div>
      </Panel>
    </div>
  );
}

export function ConsistencyBad() {
  return (
    <AppShell active="Dashboard" title="Consistencia entre módulos">
      <BadExample />
    </AppShell>
  );
}

export function ConsistencyGood() {
  return (
    <AppShell active="Dashboard" title="Consistencia entre módulos">
      <GoodExample />
    </AppShell>
  );
}
