import { Package, Receipt, Users } from 'lucide-react';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

const ACTIONS = [
  { label: 'Nueva factura', icon: Receipt },
  { label: 'Nuevo pedido', icon: Package },
  { label: 'Nuevo contacto', icon: Users },
];

function BadExample() {
  return (
    <div className="flex flex-wrap gap-3">
      {ACTIONS.map(({ label, icon: Icon }) => (
        <button
          key={label}
          type="button"
          className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm outline-none hover:bg-slate-50">
          <Icon className="h-4 w-4" aria-hidden="true" />
          {label}
        </button>
      ))}
    </div>
  );
}

function GoodExample() {
  return (
    <div className="flex flex-wrap gap-3">
      {ACTIONS.map(({ label, icon: Icon }) => (
        <button
          key={label}
          type="button"
          className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm outline-none hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">
          <Icon className="h-4 w-4" aria-hidden="true" />
          {label}
        </button>
      ))}
    </div>
  );
}

export function VisibleFocusBad() {
  return (
    <AppShell
      active="Dashboard"
      title="Acciones rápidas"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            Los botones tienen <code>outline-none</code> sin ningún reemplazo. Probá navegar con la tecla
            Tab de verdad: el foco avanza entre los tres botones, pero no hay ninguna señal visual de en
            cuál está parado — quien no usa mouse no tiene forma de saber qué va a activar con Enter.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function VisibleFocusGood() {
  return (
    <AppShell
      active="Dashboard"
      title="Acciones rápidas"
      info={
        <InfoBlock title="Anillo de foco visible al tabular">
          <p className="text-sm text-gray-700">
            Probá tabular de nuevo, con la tecla Tab: <code>focus-visible:ring-2</code> dibuja un anillo
            indigo alrededor del botón enfocado, solo cuando el foco llega por teclado y no al hacer clic
            con mouse — el mismo idiom que usa la navegación lateral de esta demo (WCAG 2.4.7, Foco
            visible).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
