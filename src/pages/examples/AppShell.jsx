import { useState } from 'react';
import { LayoutDashboard, Receipt, Package, Users, BarChart3, Boxes, Settings, Search, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Facturas', icon: Receipt },
  { label: 'Pedidos', icon: Package },
  { label: 'Contactos', icon: Users },
  { label: 'Inventario', icon: Boxes },
  { label: 'Reportes', icon: BarChart3 },
];

function NavItem({ icon: Icon, label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0e14]',
        active ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-slate-200',
      )}>
      <Icon className="h-4 w-4 shrink-0" strokeWidth={2} />
      {label}
    </button>
  );
}

export default function AppShell({ active, title, children }) {
  const [currentSection, setCurrentSection] = useState(active);
  const onDemoSection = currentSection === active;

  return (
    <div className="fixed inset-0 flex bg-white text-slate-900" style={{ fontFeatureSettings: '"ss01"' }}>
      <aside className="flex w-60 shrink-0 flex-col bg-[#0c0e14]">
        <div className="flex items-center gap-2.5 px-5 py-5">
          <div className="flex h-7 w-7 items-center justify-center rounded-[7px] bg-indigo-500 text-sm font-bold text-white">
            A
          </div>
          <span className="text-[15px] font-bold tracking-tight text-white">Aurea</span>
        </div>

        <nav className="flex-1 space-y-0.5 px-3">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.label}
              {...item}
              active={item.label === currentSection}
              onClick={() => setCurrentSection(item.label)} />
          ))}
        </nav>

        <div className="mx-3 mb-3 flex items-center gap-2.5 rounded-md border-t border-white/5 px-3 pt-3">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-semibold text-slate-200">
            SC
          </div>
          <div className="min-w-0 leading-tight">
            <p className="truncate text-xs font-medium text-slate-200">Sebastián C.</p>
            <p className="truncate text-[11px] text-slate-500">Operaciones</p>
          </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-slate-200 px-8">
          <div className="flex items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-400">
            <Search className="h-3.5 w-3.5" />
            Buscar en {currentSection?.toLowerCase()}...
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <Bell className="h-4 w-4" />
            <Settings className="h-4 w-4" />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-slate-50/60">
          <div className="px-8 py-8">
            <div className="mb-6">
              <p className="text-xs font-semibold tracking-wide text-indigo-500 uppercase">{currentSection}</p>
              <h1 className="mt-1 text-xl font-bold text-slate-900">{onDemoSection ? title : currentSection}</h1>
            </div>
            {onDemoSection ? (
              children
            ) : (
              <div className="rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-400">
                Esta sección no forma parte de la demo.
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
