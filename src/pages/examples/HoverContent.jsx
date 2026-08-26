import { useEffect, useState } from 'react';
import { HelpCircle, X } from 'lucide-react';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

function BadExample() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-72 rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-1.5">
        <p className="text-sm font-medium text-slate-700">Stock mínimo</p>
        <span className="relative flex" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
          <HelpCircle className="h-3.5 w-3.5 text-slate-400" />
          {open && (
            <span className="absolute bottom-full left-1/2 mb-2 w-48 -translate-x-1/2 rounded-md bg-slate-900 p-2 text-xs text-white">
              Cantidad debajo de la cual se dispara una reposición automática.
            </span>
          )}
        </span>
      </div>
      <p className="mt-1 text-lg font-semibold text-slate-900">15 unidades</p>
    </div>
  );
}

function GoodExample() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <div className="w-72 rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-1.5">
        <p className="text-sm font-medium text-slate-700">Stock mínimo</p>
        <span className="relative flex" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
          <button
            type="button"
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            aria-label="Qué significa stock mínimo"
            className="flex h-4 w-4 items-center justify-center text-slate-400 hover:text-slate-600">
            <HelpCircle className="h-3.5 w-3.5" />
          </button>
          {open && (
            <span
              role="tooltip"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              className="absolute bottom-full left-1/2 mb-2 w-52 -translate-x-1/2 rounded-md bg-slate-900 p-2.5 text-xs text-white">
              Cantidad debajo de la cual se dispara una reposición automática.
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-700 text-white">
                <X className="h-2.5 w-2.5" />
              </button>
            </span>
          )}
        </span>
      </div>
      <p className="mt-1 text-lg font-semibold text-slate-900">15 unidades</p>
    </div>
  );
}

export function HoverContentBad() {
  return (
    <AppShell
      active="Inventario"
      title="Configurar reposición"
      info={
        <InfoBlock variant="warning" title="Qué se pierde">
          <p className="text-sm text-gray-700">
            El tooltip solo aparece con el mouse sobre el ícono — no hay forma de alcanzarlo con teclado —
            y desaparece apenas el cursor sale de ahí, así que no da tiempo a moverlo hacia el texto para
            leerlo completo.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function HoverContentGood() {
  return (
    <AppShell
      active="Inventario"
      title="Configurar reposición"
      info={
        <InfoBlock title="Hoverable, dismissible, persistente">
          <p className="text-sm text-gray-700">
            El tooltip tiene que poder recibirse por foco de teclado (no solo mouse), quedarse abierto si
            el mouse se mueve hacia él, y cerrarse con Escape o un botón — sin que otra interacción lo
            tape.
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
