import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

const INITIAL_INVOICES = [
  { id: 'F-1042', client: 'Estudio Delgado', amount: '$184.500' },
  { id: 'F-1041', client: 'Grupo Iberá', amount: '$92.300' },
  { id: 'F-1039', client: 'Comercial Rioja', amount: '$310.750' },
];

function InvoiceTable({ invoices, action }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead scope="col">Factura</TableHead>
          <TableHead scope="col">Cliente</TableHead>
          <TableHead scope="col">Monto</TableHead>
          <TableHead scope="col" className="text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.client}</TableCell>
            <TableCell>{invoice.amount}</TableCell>
            <TableCell className="text-right">{action(invoice)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function BadExample() {
  const [invoices, setInvoices] = useState(INITIAL_INVOICES);

  const remove = (id) => {
    setInvoices((current) => current.filter((invoice) => invoice.id !== id));
  };

  return (
    <div className="w-full max-w-xl overflow-hidden rounded-lg border border-slate-200 bg-white">
      <InvoiceTable
        invoices={invoices}
        action={(invoice) => (
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={() => remove(invoice.id)}
            aria-label={`Eliminar factura ${invoice.id}`}>
            <Trash2 className="h-4 w-4 text-gray-500" />
          </Button>
        )}
      />
      {invoices.length === 0 && <p className="p-4 text-sm text-gray-500">No quedan facturas.</p>}
    </div>
  );
}

function GoodExample() {
  const [invoices, setInvoices] = useState(INITIAL_INVOICES);

  const remove = (id) => {
    setInvoices((current) => current.filter((invoice) => invoice.id !== id));
  };

  return (
    <div className="w-full max-w-xl overflow-hidden rounded-lg border border-slate-200 bg-white">
      <InvoiceTable
        invoices={invoices}
        action={(invoice) => (
          <Dialog>
            <DialogTrigger
              render={<Button variant="ghost" size="icon-sm" />}
              aria-label={`Eliminar factura ${invoice.id}`}>
              <Trash2 className="h-4 w-4 text-gray-500" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>¿Eliminar factura #{invoice.id}?</DialogTitle>
                <DialogDescription>Esta acción no se puede deshacer.</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>Cancelar</DialogClose>
                <DialogClose render={<Button variant="destructive" />} onClick={() => remove(invoice.id)}>
                  Eliminar
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      />
      {invoices.length === 0 && <p className="p-4 text-sm text-gray-500">No quedan facturas.</p>}
    </div>
  );
}

export function ConfirmDestructiveBad() {
  return (
    <AppShell
      active="Facturas"
      title="Facturas"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            El ícono de tacho borra la factura al primer click, sin ningún paso intermedio. Es una acción
            financiera e irreversible que se puede disparar por error (un click de más, un dedo que
            resbala) sin oportunidad de revisar ni cancelar.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function ConfirmDestructiveGood() {
  return (
    <AppShell
      active="Facturas"
      title="Facturas"
      info={
        <InfoBlock title="Confirmación explícita antes de borrar">
          <p className="text-sm text-gray-700">
            El click abre un <code>Dialog</code> que muestra qué se va a eliminar y advierte que no se puede
            deshacer; la factura solo se borra si la persona confirma "Eliminar" — "Cancelar" o cerrar el
            diálogo no cambia nada (WCAG 3.3.4, Prevención de errores).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
