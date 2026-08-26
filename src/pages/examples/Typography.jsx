import { cn } from "@/lib/utils";
import AppShell from "./AppShell";
import InfoBlock from "./InfoBlock";

const ORDERS = [
  {
    id: "#4521",
    cliente: "Estudio Delgado",
    fecha: "14/08/2026",
    estado: "Pendiente de envío",
    total: "$182.400",
  },
  {
    id: "#4522",
    cliente: "Grupo Iberá",
    fecha: "14/08/2026",
    estado: "Entregado",
    total: "$94.200",
  },
  {
    id: "#4523",
    cliente: "Comercial Rioja",
    fecha: "13/08/2026",
    estado: "En preparación",
    total: "$310.750",
  },
  {
    id: "#4524",
    cliente: "Tech Norte SRL",
    fecha: "13/08/2026",
    estado: "Pendiente de envío",
    total: "$58.900",
  },
  {
    id: "#4525",
    cliente: "Distribuidora Sur",
    fecha: "12/08/2026",
    estado: "Entregado",
    total: "$127.300",
  },
];

// Mismo tamaño, peso y layout en las dos variantes — la única variable es el color del texto,
// para aislar 1.4.3 (contraste) de cualquier otro atributo tipográfico.
function OrderCard({ order, primary, secondary }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="flex items-baseline justify-between">
        <h3 className={cn("text-sm font-bold", primary)}>Pedido {order.id}</h3>
        <span className={cn("text-sm font-semibold", secondary)}>
          {order.total}
        </span>
      </div>
      <p className={cn("mt-1 text-sm", secondary)}>{order.cliente}</p>
      <div
        className={cn(
          "mt-2 flex items-center justify-between text-xs",
          secondary,
        )}
      >
        <span>{order.fecha}</span>
        <span>{order.estado}</span>
      </div>
    </div>
  );
}

function BadExample() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-3 gap-4">
      {ORDERS.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
          primary="text-gray-900"
          secondary="text-gray-400"
        />
      ))}
    </div>
  );
}

function GoodExample() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-3 gap-4">
      {ORDERS.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
          primary="text-gray-900"
          secondary="text-gray-700"
        />
      ))}
    </div>
  );
}

export function TypographyBad() {
  return (
    <AppShell
      active="Pedidos"
      title="Pedidos recientes"
      info={
        <InfoBlock variant="warning" title="Por debajo del mínimo">
          <p className="text-sm text-gray-700">
            Texto claro sobre fondo blanco: da un contraste de ~2.5:1, por
            debajo del 4.5:1 mínimo que pide 1.4.3.
          </p>
        </InfoBlock>
      }
    >
      <BadExample />
    </AppShell>
  );
}

export function TypographyGood() {
  return (
    <AppShell
      active="Pedidos"
      title="Pedidos recientes"
      info={
        <InfoBlock title="Mismo layout, otro color">
          <p className="text-sm text-gray-700">
            El texto pasa a un tono más oscuro: ~17.7:1 para pedido, y ~10.3:1
            para fecha y estado
          </p>
        </InfoBlock>
      }
    >
      <GoodExample />
    </AppShell>
  );
}
