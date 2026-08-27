import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

const REPORTS = [
  { id: 1, nombre: 'Ventas del mes', periodo: 'Mensual' },
  { id: 2, nombre: 'Ventas del trimestre', periodo: 'Trimestral' },
  { id: 3, nombre: 'Cobranzas pendientes', periodo: 'Mensual' },
  { id: 4, nombre: 'Facturas vencidas', periodo: 'Mensual' },
  { id: 5, nombre: 'Stock crítico', periodo: 'Semanal' },
  { id: 6, nombre: 'Rotación de inventario', periodo: 'Trimestral' },
  { id: 7, nombre: 'Pedidos pendientes', periodo: 'Diario' },
  { id: 8, nombre: 'Clientes morosos', periodo: 'Mensual' },
  { id: 9, nombre: 'Facturación por vendedor', periodo: 'Trimestral' },
  { id: 10, nombre: 'Devoluciones', periodo: 'Mensual' },
];

function StickyHeader() {
  return (
    <div className="sticky top-0 z-10 flex h-9 items-center justify-between border-b border-slate-200 bg-slate-100 px-4 text-xs font-semibold tracking-wide text-gray-600 uppercase">
      <span>Reporte</span>
      <span>Período</span>
    </div>
  );
}

function ReportRow({ report, scrollMarginClass }) {
  return (
    <button
      type="button"
      className={`flex w-full items-center justify-between border-b border-slate-100 px-4 py-3 text-left text-sm outline-none last:border-0 hover:bg-slate-50 focus-visible:bg-indigo-50 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-inset ${scrollMarginClass ?? ''}`}>
      <span className="font-medium text-slate-900">{report.nombre}</span>
      <span className="text-xs text-gray-500">{report.periodo}</span>
    </button>
  );
}

function BadExample() {
  return (
    <div className="h-72 w-[28rem] overflow-y-auto rounded-lg border border-slate-200 bg-white">
      <StickyHeader />
      {REPORTS.map((report) => (
        <ReportRow key={report.id} report={report} />
      ))}
    </div>
  );
}

function GoodExample() {
  return (
    <div className="h-72 w-[28rem] overflow-y-auto rounded-lg border border-slate-200 bg-white">
      <StickyHeader />
      {REPORTS.map((report) => (
        <ReportRow key={report.id} report={report} scrollMarginClass="scroll-mt-9" />
      ))}
    </div>
  );
}

export function FocusNotObscuredBad() {
  return (
    <AppShell
      active="Reportes"
      title="Reportes"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            El encabezado de columnas queda <code>sticky top-0</code> sobre la lista. Probá tabular por
            los reportes: varios ítems reciben el foco pero terminan tapados detrás del encabezado, porque
            el navegador los desplaza justo hasta el borde superior del contenedor, no hasta un punto
            libre debajo del header.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function FocusNotObscuredGood() {
  return (
    <AppShell
      active="Reportes"
      title="Reportes"
      info={
        <InfoBlock title="scroll-margin-top reserva el espacio del header">
          <p className="text-sm text-gray-700">
            Cada fila tiene <code>scroll-mt-9</code>, el mismo alto que el encabezado sticky. Al
            enfocarse, el navegador deja ese margen libre arriba, así el ítem enfocado nunca queda tapado
            (WCAG 2.4.11, Foco no ocultado, mínimo).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
