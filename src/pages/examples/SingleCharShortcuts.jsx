import { useEffect, useState } from 'react';
import { FilePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

const RECENT_INVOICES = [
  { id: 'F-1058', client: 'Estudio Delgado', amount: '$142.300' },
  { id: 'F-1057', client: 'Grupo Iberá', amount: '$88.900' },
  { id: 'F-1056', client: 'Comercial Rioja', amount: '$310.750' },
];

function isEditableTarget(target) {
  if (!target) return false;
  return target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;
}

function RecentInvoicesTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Factura</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead className="text-right">Monto</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {RECENT_INVOICES.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium text-gray-900">{invoice.id}</TableCell>
            <TableCell className="text-gray-600">{invoice.client}</TableCell>
            <TableCell className="text-right text-gray-600">{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function NewInvoiceDialog({ open, onOpenChange, clientId, amountId }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nueva factura</DialogTitle>
          <DialogDescription>Completá los datos para emitir la factura.</DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          <div>
            <Label htmlFor={clientId} className="mb-1 block text-sm text-gray-700">Cliente</Label>
            <Input id={clientId} placeholder="Nombre del cliente" />
          </div>
          <div>
            <Label htmlFor={amountId} className="mb-1 block text-sm text-gray-700">Monto</Label>
            <Input id={amountId} type="number" placeholder="0" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancelar</DialogClose>
          <DialogClose render={<Button />}>Crear factura</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function BadExample() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key.toLowerCase() === 'n') {
        setOpen(true);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="w-[26rem] rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Buscar factura"
          placeholder="Buscar factura..."
          className="flex-1" />
        <Button type="button" size="sm" onClick={() => setOpen(true)}>
          <FilePlus className="h-4 w-4" />
          Nueva factura
        </Button>
      </div>
      <div className="mt-4 overflow-hidden rounded-md border border-slate-100">
        <RecentInvoicesTable />
      </div>
      <NewInvoiceDialog
        open={open}
        onOpenChange={setOpen}
        clientId="bad-invoice-client"
        amountId="bad-invoice-amount" />
    </div>
  );
}

function GoodExample() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key.toLowerCase() !== 'n') return;
      if (isEditableTarget(document.activeElement)) return;
      setOpen(true);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="w-[26rem] rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Buscar factura"
          placeholder="Buscar factura..."
          className="flex-1" />
        <Button type="button" size="sm" onClick={() => setOpen(true)}>
          <FilePlus className="h-4 w-4" />
          Nueva factura
        </Button>
      </div>
      <div className="mt-4 overflow-hidden rounded-md border border-slate-100">
        <RecentInvoicesTable />
      </div>
      <NewInvoiceDialog
        open={open}
        onOpenChange={setOpen}
        clientId="good-invoice-client"
        amountId="good-invoice-amount" />
    </div>
  );
}

export function SingleCharShortcutsBad() {
  return (
    <AppShell
      active="Facturas"
      title="Facturas"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            Un listener de teclado global abre "Nueva factura" con solo apretar "N", sin chequear en qué
            elemento está el foco. Probá escribir "factura nueva" en el buscador: cada "n" que tipeás abre
            el modal encima de lo que estabas escribiendo. Alguien que dicta texto por voz o escribe con
            dificultad motriz nunca logra completar la búsqueda.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function SingleCharShortcutsGood() {
  return (
    <AppShell
      active="Facturas"
      title="Facturas"
      info={
        <InfoBlock title="Atajo desactivado dentro de campos editables">
          <p className="text-sm text-gray-700">
            El mismo atajo revisa <code>document.activeElement</code> antes de actuar: si el foco está en
            un input, textarea o contenido editable, la tecla "N" se escribe normal en vez de abrir el
            modal. Probá escribir "factura nueva" en el buscador — esta vez llega completo. El botón "Nueva
            factura" sigue ahí para quien prefiera no usar el atajo (WCAG 2.1.4, Atajos de un solo
            carácter).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
