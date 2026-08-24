import AppShell from './AppShell';

const ORDERS = [
  { id: '#4521', cliente: 'Estudio Delgado', fecha: '14/08/2026', estado: 'Pendiente de envío', total: '$182.400' },
  { id: '#4522', cliente: 'Grupo Iberá', fecha: '14/08/2026', estado: 'Entregado', total: '$94.200' },
  { id: '#4523', cliente: 'Comercial Rioja', fecha: '13/08/2026', estado: 'En preparación', total: '$310.750' },
  { id: '#4524', cliente: 'Tech Norte SRL', fecha: '13/08/2026', estado: 'Pendiente de envío', total: '$58.900' },
  { id: '#4525', cliente: 'Distribuidora Sur', fecha: '12/08/2026', estado: 'Entregado', total: '$127.300' },
];

function BadExample() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-3 gap-3">
      {ORDERS.map((order) => (
        <div key={order.id} className="rounded-lg border border-slate-200 bg-white p-3">
          <p className="text-[11px] leading-none text-gray-400">Pedido {order.id}: {order.cliente}</p>
          <p className="text-[11px] leading-none text-gray-400">Fecha: {order.fecha}</p>
          <p className="text-[11px] leading-none text-gray-400">Estado: {order.estado}</p>
          <p className="text-[11px] leading-none text-gray-400">Total: {order.total}</p>
        </div>
      ))}
    </div>
  );
}

function GoodExample() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-3 gap-4">
      {ORDERS.map((order) => (
        <div key={order.id} className="rounded-lg border border-slate-200 bg-white p-4">
          <div className="flex items-baseline justify-between">
            <h3 className="text-sm font-bold text-gray-900">Pedido {order.id}</h3>
            <span className="text-sm font-semibold text-gray-900">{order.total}</span>
          </div>
          <p className="mt-1 text-sm text-gray-600">{order.cliente}</p>
          <div className="mt-2 flex items-center justify-between text-xs leading-relaxed text-gray-500">
            <span>{order.fecha}</span>
            <span>{order.estado}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function TypographyBad() {
  return (
    <AppShell active="Pedidos" title="Pedidos recientes">
      <BadExample />
    </AppShell>
  );
}

export function TypographyGood() {
  return (
    <AppShell active="Pedidos" title="Pedidos recientes">
      <GoodExample />
    </AppShell>
  );
}
