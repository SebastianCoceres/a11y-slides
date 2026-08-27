import { BarChart3, Bell, Boxes, HelpCircle, LayoutDashboard, Package, Receipt, Search, Settings, Users } from 'lucide-react';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

const NAV_ITEMS = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Facturas', icon: Receipt },
  { label: 'Pedidos', icon: Package },
  { label: 'Contactos', icon: Users },
  { label: 'Inventario', icon: Boxes },
  { label: 'Reportes', icon: BarChart3 },
  { label: 'Configuración', icon: Settings },
  { label: 'Ayuda', icon: HelpCircle },
];

function DashboardContent() {
  return (
    <div className="w-96 rounded-lg border border-slate-200 bg-white p-5">
      <p className="text-sm font-semibold text-slate-900">Resumen del día</p>
      <p className="mt-1 text-sm text-gray-600">4 facturas nuevas, 2 pedidos pendientes de despacho.</p>
      <button
        type="button"
        className="mt-4 rounded-lg bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2">
        Ver reporte completo
      </button>
    </div>
  );
}

function NoSkipShell() {
  return (
    <div className="fixed inset-0 flex min-w-0 bg-white text-slate-900">
      <aside className="hidden w-60 shrink-0 flex-col bg-slate-950 md:flex">
        <div className="flex items-center gap-2.5 px-5 py-5">
          <div className="flex h-7 w-7 items-center justify-center rounded-[7px] bg-indigo-500 text-sm font-bold text-white">
            A
          </div>
          <span className="text-[15px] font-bold tracking-tight text-white">Aurea</span>
        </div>

        <nav aria-label="Secciones de la demo" className="flex-1 space-y-0.5 px-3">
          {NAV_ITEMS.map(({ label, icon: Icon }) => (
            <a
              key={label}
              href="#"
              onClick={(event) => event.preventDefault()}
              className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              <Icon className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden="true" />
              {label}
            </a>
          ))}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-slate-200 px-4 md:px-8">
          <div aria-hidden="true" className="flex items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-400">
            <Search className="h-3.5 w-3.5" />
            Buscar en dashboard...
          </div>
          <Bell aria-hidden="true" className="h-4 w-4 text-slate-400" />
        </header>

        <main className="flex-1 overflow-y-auto bg-slate-50/60 px-4 py-6 md:px-8 md:py-8">
          <div className="mb-6">
            <p className="text-xs font-semibold tracking-wide text-indigo-500 uppercase">Dashboard</p>
            <h1 className="mt-1 text-xl font-bold text-slate-900">Resumen del día</h1>
          </div>
          <div className="grid grid-cols-1 items-start gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
            <DashboardContent />
            <InfoBlock variant="warning" title="Qué falta">
              <p className="text-sm text-gray-700">
                Probá tabular desde el principio de la página: no hay ningún mecanismo para saltear el
                bloque de navegación. Hay que pasar por los 8 links del menú lateral, uno por uno, antes
                de llegar al botón "Ver reporte completo" del contenido — y ese bloque se repite igual en
                cada sección de la app.
              </p>
            </InfoBlock>
          </div>
        </main>
      </div>
    </div>
  );
}

export function SkipLinksBad() {
  return <NoSkipShell />;
}

export function SkipLinksGood() {
  return (
    <AppShell
      active="Dashboard"
      title="Resumen del día"
      info={
        <InfoBlock title='El link "Saltar al contenido" ya está ahí'>
          <p className="text-sm text-gray-700">
            Probá apretar Tab una sola vez apenas cargue esta pantalla: aparece un link "Saltar al
            contenido" que estaba oculto. Al activarlo, el foco salta directo al <code>main</code> sin
            pasar por los 6 items de navegación (WCAG 2.4.1, Evitar bloques).
          </p>
        </InfoBlock>
      }>
      <DashboardContent />
    </AppShell>
  );
}
