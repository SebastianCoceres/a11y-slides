import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

const ITEMS = [
  { desc: 'Tornillos M6 (caja x100)', cantidad: 4, precio: '$3.200', total: '$12.800' },
  { desc: 'Cinta aisladora 3M', cantidad: 12, precio: '$650', total: '$7.800' },
  { desc: 'Guantes de nitrilo (par)', cantidad: 20, precio: '$410', total: '$8.200' },
];

// Mismas clases base que src/components/ui/table.jsx aplica a th/td (h-10 px-2 / p-2, sin color de
// borde propio) para que este mock en divs quede visualmente idéntico al <Table> real de al lado.
function BadExample() {
  return (
    <div className="w-full max-w-xl rounded-lg border border-slate-200 bg-white">
      <div className="grid h-10 grid-cols-[1fr_80px_100px_100px] items-center border-b text-xs font-semibold tracking-wide text-slate-400 uppercase">
        <span className="px-2">Descripción</span>
        <span className="px-2 text-right">Cant.</span>
        <span className="px-2 text-right">Precio</span>
        <span className="px-2 text-right">Total</span>
      </div>
      {ITEMS.map((item) => (
        <div
          key={item.desc}
          className="grid grid-cols-[1fr_80px_100px_100px] items-center border-b text-sm text-slate-700 last:border-0">
          <span className="p-2">{item.desc}</span>
          <span className="p-2 text-right">{item.cantidad}</span>
          <span className="p-2 text-right">{item.precio}</span>
          <span className="p-2 text-right font-medium text-slate-900">{item.total}</span>
        </div>
      ))}
    </div>
  );
}

// El border-radius no se renderiza de forma confiable en <table> con border-collapse: separate
// (el default) en la mayoría de los navegadores, así que quien redondea y recorta es este div
// contenedor — el mismo truco que ya usa BadExample — y no el <Table> en sí.
function GoodExample() {
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-lg border border-slate-200 bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead scope="col" className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
              Descripción
            </TableHead>
            <TableHead
              scope="col"
              className="text-right text-xs font-semibold tracking-wide text-slate-400 uppercase">
              Cant.
            </TableHead>
            <TableHead
              scope="col"
              className="text-right text-xs font-semibold tracking-wide text-slate-400 uppercase">
              Precio
            </TableHead>
            <TableHead
              scope="col"
              className="text-right text-xs font-semibold tracking-wide text-slate-400 uppercase">
              Total
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ITEMS.map((item) => (
            <TableRow key={item.desc}>
              <TableCell>{item.desc}</TableCell>
              <TableCell className="text-right">{item.cantidad}</TableCell>
              <TableCell className="text-right">{item.precio}</TableCell>
              <TableCell className="text-right font-medium text-slate-900">{item.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export function SemanticStructureBad() {
  return (
    <AppShell
      active="Facturas"
      title="Detalle de factura F-2451"
      info={
        <InfoBlock variant="warning" title="Por qué falla">
          <p className="text-sm text-gray-700">
            Cada fila es un <code>div</code> alineado por CSS grid: visualmente es una tabla, pero en el
            DOM no hay relación entre "Total" y "$12.800". Un lector de pantalla anuncia números sueltos,
            sin saber a qué columna pertenecen.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function SemanticStructureGood() {
  return (
    <AppShell
      active="Facturas"
      title="Detalle de factura F-2451"
      info={
        <InfoBlock title="Qué cambia para un lector de pantalla">
          <p className="text-sm text-gray-700">
            Con <code>div</code>s, un lector de pantalla anuncia texto suelto sin relación entre columnas y
            filas. Con <code>&lt;table&gt;</code> y <code>&lt;th scope="col"&gt;</code>, al parar en una
            celda anuncia también el encabezado de su columna — por ejemplo "Total, $12.800".
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
