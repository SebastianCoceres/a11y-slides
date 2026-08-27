import { LayoutDashboard, Receipt, Package, Users } from 'lucide-react';
import InfoBlock from './InfoBlock';

const NAV_ICONS = {
  Dashboard: LayoutDashboard,
  Facturas: Receipt,
  Pedidos: Package,
  Contactos: Users,
};

const ORDER_A = ['Dashboard', 'Facturas', 'Pedidos', 'Contactos'];
const ORDER_B_SHUFFLED = ['Facturas', 'Contactos', 'Dashboard', 'Pedidos'];

function MiniNav({ label, items }) {
  return (
    <div className="w-56 rounded-lg border border-slate-200 bg-white p-4">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">{label}</p>
      <nav aria-label={label} className="space-y-1">
        {items.map((item) => {
          const Icon = NAV_ICONS[item];
          return (
            <div key={item} className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm font-medium text-slate-600">
              <Icon className="h-4 w-4 shrink-0" strokeWidth={2} />
              {item}
            </div>
          );
        })}
      </nav>
    </div>
  );
}

function Layout({ children, info }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white p-12">
      <div className="grid w-full max-w-4xl grid-cols-1 items-start gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          <div className="mb-6 text-left">
            <p className="text-xs font-semibold tracking-wide text-indigo-500 uppercase">Aurea</p>
            <h1 className="mt-1 text-xl font-bold text-slate-900">Navegación consistente entre páginas</h1>
          </div>
          <div className="flex flex-wrap items-start gap-8">{children}</div>
        </div>
        {info}
      </div>
    </div>
  );
}

export function ConsistentNavigationBad() {
  return (
    <Layout
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            Los mismos cuatro ítems aparecen en distinto orden en cada página: "Página A" los lista
            Dashboard, Facturas, Pedidos, Contactos; "Página B" los reordena a Facturas, Contactos,
            Dashboard, Pedidos. Quien aprendió dónde está cada uno tiene que volver a buscarlo al cambiar
            de página.
          </p>
        </InfoBlock>
      }>
      <MiniNav label="Página A — Dashboard" items={ORDER_A} />
      <MiniNav label="Página B — Pedidos" items={ORDER_B_SHUFFLED} />
    </Layout>
  );
}

export function ConsistentNavigationGood() {
  return (
    <Layout
      info={
        <InfoBlock title="Mismo orden en todas las páginas">
          <p className="text-sm text-gray-700">
            Dashboard, Facturas, Pedidos y Contactos aparecen exactamente en el mismo orden en ambas
            páginas. La posición de cada ítem se vuelve predecible y se puede navegar de memoria (WCAG
            3.2.3, Navegación consistente).
          </p>
        </InfoBlock>
      }>
      <MiniNav label="Página A — Dashboard" items={ORDER_A} />
      <MiniNav label="Página B — Pedidos" items={ORDER_A} />
    </Layout>
  );
}
