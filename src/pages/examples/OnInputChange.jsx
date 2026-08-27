import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

const ORDERS = [
  { id: '#4521', client: 'Constructora Sur', status: 'Pendiente' },
  { id: '#4522', client: 'Insumos del Litoral', status: 'Enviado' },
  { id: '#4523', client: 'Tornillos SRL', status: 'Entregado' },
  { id: '#4524', client: 'Metalúrgica Andina', status: 'Pendiente' },
  { id: '#4525', client: 'Distribuidora Norte', status: 'Enviado' },
];

const STATUS_OPTIONS = ['Todos', 'Pendiente', 'Enviado', 'Entregado'];

const STATUS_BADGE_VARIANT = {
  Pendiente: 'warning',
  Enviado: 'info',
  Entregado: 'success',
};

const selectClassName =
  'h-8 rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50';

function filterOrders(status) {
  return status === 'Todos' ? ORDERS : ORDERS.filter((order) => order.status === status);
}

function OrdersTable({ orders }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Pedido</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead>Estado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium text-slate-900">{order.id}</TableCell>
            <TableCell className="text-gray-600">{order.client}</TableCell>
            <TableCell>
              <Badge variant={STATUS_BADGE_VARIANT[order.status]}>{order.status}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function BadExample() {
  const [note, setNote] = useState('');
  const [status, setStatus] = useState('Todos');

  const handleChange = (event) => {
    setStatus(event.target.value);
    setNote('');
  };

  return (
    <div className="w-full max-w-2xl rounded-lg border border-slate-200 bg-white p-5">
      <Label htmlFor="bad-order-note" className="mb-1 block text-sm text-gray-700">
        Nota interna sobre el pedido en curso
      </Label>
      <Input
        id="bad-order-note"
        value={note}
        onChange={(event) => setNote(event.target.value)}
        placeholder="Ej: confirmar dirección de entrega" />

      <div className="mt-5 flex items-center justify-between gap-3">
        <Label htmlFor="bad-status-filter" className="text-sm text-gray-700">Estado del pedido</Label>
        <select id="bad-status-filter" value={status} onChange={handleChange} className={selectClassName}>
          {STATUS_OPTIONS.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <OrdersTable orders={filterOrders(status)} />
      </div>
    </div>
  );
}

function GoodExample() {
  const [note, setNote] = useState('');
  const [status, setStatus] = useState('Todos');
  const [pendingStatus, setPendingStatus] = useState('Todos');

  const applyFilter = () => setStatus(pendingStatus);

  return (
    <div className="w-full max-w-2xl rounded-lg border border-slate-200 bg-white p-5">
      <Label htmlFor="good-order-note" className="mb-1 block text-sm text-gray-700">
        Nota interna sobre el pedido en curso
      </Label>
      <Input
        id="good-order-note"
        value={note}
        onChange={(event) => setNote(event.target.value)}
        placeholder="Ej: confirmar dirección de entrega" />

      <div className="mt-5 flex items-center justify-between gap-3">
        <Label htmlFor="good-status-filter" className="text-sm text-gray-700">Estado del pedido</Label>
        <div className="flex items-center gap-2">
          <select
            id="good-status-filter"
            value={pendingStatus}
            onChange={(event) => setPendingStatus(event.target.value)}
            className={selectClassName}>
            {STATUS_OPTIONS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <Button type="button" size="sm" onClick={applyFilter}>Aplicar filtro</Button>
        </div>
      </div>

      <div className="mt-4">
        <OrdersTable orders={filterOrders(status)} />
      </div>
    </div>
  );
}

export function OnInputChangeBad() {
  return (
    <AppShell
      active="Pedidos"
      title="Pedidos"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            Cambiar el filtro dispara la acción en <code>onChange</code>, de inmediato, y de paso borra
            la nota que la persona estaba escribiendo arriba sin avisar. Elegir una opción de un combo
            nunca debería hacer perder datos no guardados.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function OnInputChangeGood() {
  return (
    <AppShell
      active="Pedidos"
      title="Pedidos"
      info={
        <InfoBlock title="El filtro espera una acción explícita">
          <p className="text-sm text-gray-700">
            Elegir un estado en el combo solo actualiza una selección pendiente; la lista y la nota no
            cambian hasta que la persona aprieta "Aplicar filtro" (WCAG 3.2.2, Al recibir entrada de
            datos).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
