import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

const INVOICES = [
  { id: 'F-2451', cliente: 'Estudio Delgado', monto: '$182.400', estado: 'Vencido' },
  { id: 'F-2452', cliente: 'Grupo Iberá', monto: '$94.200', estado: 'Al día' },
  { id: 'F-2453', cliente: 'Comercial Rioja', monto: '$310.750', estado: 'Vencido' },
];

function ViewportFrame({ children }) {
  return (
    <div className="w-[320px] rounded-lg border-2 border-dashed border-slate-300 p-3">
      <p className="mb-2 text-center text-xs font-medium text-slate-400">320px de ancho</p>
      {children}
    </div>
  );
}

function BadExample() {
  return (
    <ViewportFrame>
      <div className="overflow-x-auto rounded border border-slate-200">
        <table className="w-[560px] text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-left text-xs font-semibold tracking-wide text-slate-400 uppercase">
              <th className="px-3 py-2">Factura</th>
              <th className="px-3 py-2">Cliente</th>
              <th className="px-3 py-2">Monto</th>
              <th className="px-3 py-2">Estado</th>
            </tr>
          </thead>
          <tbody>
            {INVOICES.map((inv) => (
              <tr key={inv.id} className="border-b border-slate-100 last:border-0">
                <td className="px-3 py-2">{inv.id}</td>
                <td className="px-3 py-2">{inv.cliente}</td>
                <td className="px-3 py-2">{inv.monto}</td>
                <td className="px-3 py-2">{inv.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ViewportFrame>
  );
}

function GoodExample() {
  return (
    <ViewportFrame>
      <div className="space-y-2">
        {INVOICES.map((inv) => (
          <div key={inv.id} className="rounded border border-slate-200 p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-900">{inv.id}</span>
              <span className="text-sm font-medium text-slate-900">{inv.monto}</span>
            </div>
            <p className="mt-0.5 text-xs text-slate-400">{inv.cliente}</p>
            <p className="mt-1 text-xs text-slate-500">{inv.estado}</p>
          </div>
        ))}
      </div>
    </ViewportFrame>
  );
}

export function ReflowBad() {
  return (
    <AppShell
      active="Facturas"
      title="Facturas por cobrar"
      info={
        <InfoBlock variant="warning" title="320px no alcanza">
          <p className="text-sm text-gray-700">
            La tabla tiene un ancho mínimo de 560px. En un viewport de 320px eso obliga a scrollear en
            horizontal para ver el monto o el estado de cada factura — el dato más importante queda fuera
            de pantalla.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function ReflowGood() {
  return (
    <AppShell
      active="Facturas"
      title="Facturas por cobrar"
      info={
        <InfoBlock title="A 320px, la tabla se apila">
          <p className="text-sm text-gray-700">
            Un ancho mínimo fijo en la tabla obliga a scrollear para ver el monto o el estado. El mismo
            contenido, en tarjetas que se acomodan en una columna, no necesita scroll horizontal.
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
