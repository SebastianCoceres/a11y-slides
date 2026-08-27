import { Button } from '@/components/ui/button';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

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
          <Button className="bg-slate-900 text-white hover:bg-slate-800">Actualizar</Button>
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
    <AppShell
      active="Dashboard"
      title="Consistencia entre módulos"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            "Editar factura" usa un botón outline arriba a la derecha con el texto "Guardar"; "Editar
            pedido" usa un botón sólido abajo a la izquierda con el texto "Actualizar". Misma acción, dos
            estilos, dos textos y dos posiciones distintas — quien aprendió a buscar el botón en un módulo
            tiene que reaprenderlo en el otro.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function ConsistencyGood() {
  return (
    <AppShell
      active="Dashboard"
      title="Consistencia entre módulos"
      info={
        <InfoBlock title="Misma acción, mismo lugar, mismo texto">
          <p className="text-sm text-gray-700">
            Ambos módulos usan el mismo componente <code>Button</code>, el mismo texto ("Guardar") y la
            misma posición (abajo a la derecha) — cumpliendo WCAG 3.2.4: componentes con la misma
            funcionalidad se identifican de forma consistente en toda la interfaz.
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
