import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

const INVOICES = [
  { id: 'F-2451', client: 'Grupo Andina SRL', amount: '$184.300' },
  { id: 'F-2452', client: 'Comercial del Sur', amount: '$62.900' },
  { id: 'F-2453', client: 'Tecnipack S.A.', amount: '$310.150' },
];

function InvoiceTable({ invoices, trigger }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Factura</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead>Monto</TableHead>
          <TableHead className="text-right">Acción</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium text-gray-900">{invoice.id}</TableCell>
            <TableCell className="text-gray-600">{invoice.client}</TableCell>
            <TableCell className="text-gray-600">{invoice.amount}</TableCell>
            <TableCell className="text-right">
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label={`Eliminar factura ${invoice.id}`}
                className="text-red-600 hover:bg-red-50 hover:text-red-700"
                {...trigger(invoice.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
        {invoices.length === 0 && (
          <TableRow>
            <TableCell colSpan={4} className="text-center text-sm text-gray-400">No quedan facturas.</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

function BadExample() {
  const [invoices, setInvoices] = useState(INVOICES);
  const handleDelete = (id) => setInvoices((list) => list.filter((invoice) => invoice.id !== id));

  return (
    <div className="w-[26rem] rounded-lg border border-slate-200 bg-white p-5">
      <InvoiceTable invoices={invoices} trigger={(id) => ({ onPointerDown: () => handleDelete(id) })} />
      <p className="mt-3 text-xs text-gray-500">
        Probá: hacé click sostenido en el tacho y arrastrá el puntero afuera del botón antes de soltar.
      </p>
    </div>
  );
}

function GoodExample() {
  const [invoices, setInvoices] = useState(INVOICES);
  const handleDelete = (id) => setInvoices((list) => list.filter((invoice) => invoice.id !== id));

  return (
    <div className="w-[26rem] rounded-lg border border-slate-200 bg-white p-5">
      <InvoiceTable invoices={invoices} trigger={(id) => ({ onClick: () => handleDelete(id) })} />
      <p className="mt-3 text-xs text-gray-500">
        Probá lo mismo acá: arrastrar el puntero afuera antes de soltar cancela la eliminación.
      </p>
    </div>
  );
}

export function PointerCancellationBad() {
  return (
    <AppShell
      active="Facturas"
      title="Facturas emitidas"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            El botón borra la factura en <code>onPointerDown</code> — apenas se presiona, antes de soltar.
            Un puntero impreciso, un temblor o simplemente cambiar de opinión y arrastrar el dedo afuera no
            sirven de nada: la acción ya se disparó y no hay forma de cancelarla.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function PointerCancellationGood() {
  return (
    <AppShell
      active="Facturas"
      title="Facturas emitidas"
      info={
        <InfoBlock title="Acción cancelable">
          <p className="text-sm text-gray-700">
            El mismo botón dispara la acción en <code>onClick</code>, que el navegador solo confirma si el
            puntero se suelta sobre el propio elemento. Arrastrar afuera antes de soltar cancela la
            eliminación sin código adicional (WCAG 2.5.2, Cancelación del puntero).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
