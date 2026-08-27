import { useState } from 'react';
import { MoreVertical, Share2, Copy, Download, Archive, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

function ReportCard({ children }) {
  return (
    <div className="w-96 rounded-lg border border-slate-200 bg-white p-5">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-900">Ventas — Q3</p>
          <p className="text-xs text-gray-500">Generado el 14/08/2026</p>
        </div>
        {children}
      </div>
      <div className="h-28 rounded bg-slate-50" />
    </div>
  );
}

const FLAT_ACTIONS = [
  { icon: Share2, label: 'Compartir' },
  { icon: Copy, label: 'Duplicar' },
  { icon: Download, label: 'Descargar reporte' },
  { icon: Archive, label: 'Archivar' },
  { icon: Trash2, label: 'Eliminar' },
];

function BadExample() {
  const [open, setOpen] = useState(false);

  return (
    <ReportCard>
      <div className="relative">
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-7 w-7 items-center justify-center rounded text-gray-400 hover:bg-slate-100">
          <MoreVertical className="h-4 w-4" />
        </button>
        {open && (
          <div className="absolute right-0 z-10 mt-1 w-48 rounded-md border border-slate-200 bg-white py-1 shadow-lg">
            {FLAT_ACTIONS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-slate-50">
                <Icon className="h-3.5 w-3.5 text-gray-400" />
                {label}
              </div>
            ))}
          </div>
        )}
      </div>
    </ReportCard>
  );
}

function GoodExample() {
  return (
    <ReportCard>
      <div className="flex items-center gap-2">
        <Button size="sm">
          <Download data-icon="inline-start" />
          Descargar
        </Button>
        <details className="relative">
          <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-md border border-slate-200 text-gray-500 hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
            <MoreVertical className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Más acciones del reporte</span>
          </summary>
          <div className="absolute right-0 z-10 mt-1 w-44 rounded-md border border-slate-200 bg-white py-1 shadow-lg">
            <button type="button" className="flex min-h-10 w-full items-center gap-2 px-3 py-1.5 text-left text-sm text-gray-700 hover:bg-slate-50">
                <Share2 className="h-3.5 w-3.5 text-gray-400" />
                Compartir
            </button>
            <button type="button" className="flex min-h-10 w-full items-center gap-2 px-3 py-1.5 text-left text-sm text-gray-700 hover:bg-slate-50">
                <Copy className="h-3.5 w-3.5 text-gray-400" />
                Duplicar
            </button>
            <button type="button" className="flex min-h-10 w-full items-center gap-2 px-3 py-1.5 text-left text-sm text-gray-700 hover:bg-slate-50">
                <Archive className="h-3.5 w-3.5 text-gray-400" />
                Archivar
            </button>
            <div className="my-1 border-t border-slate-100" />
            <button type="button" className="flex min-h-10 w-full items-center gap-2 px-3 py-1.5 text-left text-sm text-red-600 hover:bg-red-50">
                <Trash2 className="h-3.5 w-3.5" />
                Eliminar
            </button>
          </div>
        </details>
      </div>
    </ReportCard>
  );
}

export function InclusiveDesignBad() {
  return (
    <AppShell
      active="Reportes"
      title="Ventas — Q3"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            Las opciones del menú ("Compartir", "Duplicar"...) son <code>div</code> sin rol, sin{' '}
            <code>onClick</code> y sin foco — no son botones, son texto con estilo de botón. No se pueden
            activar ni con mouse ni con teclado; solo parecen interactivas.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function InclusiveDesignGood() {
  return (
    <AppShell
      active="Reportes"
      title="Ventas — Q3"
      info={
        <InfoBlock title="Elementos reales, no solo con la apariencia">
          <p className="text-sm text-gray-700">
            Cada opción es un <code>button</code> real, con <code>min-h-10</code> (dentro del mínimo de
            WCAG 2.5.8) y accesible por teclado. El disparador usa <code>summary</code> con{' '}
            <code>aria-hidden</code> en el ícono y un <code>sr-only</code> que describe la acción ("Más
            acciones del reporte") en vez de depender solo del ícono.
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
