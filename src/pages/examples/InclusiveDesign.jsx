import { useState } from 'react';
import { MoreVertical, Share2, Copy, Download, Archive, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppShell from './AppShell';

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
  const [open, setOpen] = useState(false);

  return (
    <ReportCard>
      <div className="flex items-center gap-2">
        <Button size="sm">
          <Download data-icon="inline-start" />
          Descargar
        </Button>
        <div className="relative">
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-gray-500 hover:bg-slate-50">
            <MoreVertical className="h-4 w-4" />
          </button>
          {open && (
            <div className="absolute right-0 z-10 mt-1 w-44 rounded-md border border-slate-200 bg-white py-1 shadow-lg">
              <div className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-slate-50">
                <Share2 className="h-3.5 w-3.5 text-gray-400" />
                Compartir
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-slate-50">
                <Copy className="h-3.5 w-3.5 text-gray-400" />
                Duplicar
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-slate-50">
                <Archive className="h-3.5 w-3.5 text-gray-400" />
                Archivar
              </div>
              <div className="my-1 border-t border-slate-100" />
              <div className="flex items-center gap-2 px-3 py-1.5 text-sm text-red-600 hover:bg-red-50">
                <Trash2 className="h-3.5 w-3.5" />
                Eliminar
              </div>
            </div>
          )}
        </div>
      </div>
    </ReportCard>
  );
}

export function InclusiveDesignBad() {
  return (
    <AppShell active="Reportes" title="Ventas — Q3">
      <BadExample />
    </AppShell>
  );
}

export function InclusiveDesignGood() {
  return (
    <AppShell active="Reportes" title="Ventas — Q3">
      <GoodExample />
    </AppShell>
  );
}
