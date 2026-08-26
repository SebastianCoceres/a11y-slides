import { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

function ZoomToggle({ zoomed, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="mb-4 flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm hover:bg-slate-50">
      <ZoomIn className="h-3.5 w-3.5" />
      {zoomed ? 'Volver a 100%' : 'Simular zoom 200%'}
    </button>
  );
}

function BadExample() {
  const [zoomed, setZoomed] = useState(false);
  return (
    <div className="w-72">
      <ZoomToggle zoomed={zoomed} onToggle={() => setZoomed((z) => !z)} />
      <div className="h-16 w-56 overflow-hidden rounded-lg border border-slate-200 bg-white px-3 py-2.5">
        <p className="truncate font-semibold text-slate-900" style={{ fontSize: zoomed ? '24px' : '12px' }}>
          Tornillos M6 (caja x100)
        </p>
        <p className="truncate text-slate-400" style={{ fontSize: zoomed ? '18px' : '10px' }}>
          Depósito Norte — estantería B4
        </p>
      </div>
    </div>
  );
}

function GoodExample() {
  const [zoomed, setZoomed] = useState(false);
  return (
    <div className="w-72">
      <ZoomToggle zoomed={zoomed} onToggle={() => setZoomed((z) => !z)} />
      <div className="w-56 rounded-lg border border-slate-200 bg-white px-3 py-2.5">
        <p className={zoomed ? 'text-2xl font-semibold text-slate-900' : 'text-sm font-semibold text-slate-900'}>
          Tornillos M6 (caja x100)
        </p>
        <p className={zoomed ? 'mt-1 text-base text-slate-400' : 'text-xs text-slate-400'}>
          Depósito Norte — estantería B4
        </p>
      </div>
    </div>
  );
}

export function TextResizeBad() {
  return (
    <AppShell
      active="Inventario"
      title="Ficha de producto"
      info={
        <InfoBlock variant="warning" title="Se corta a los 200%">
          <p className="text-sm text-gray-700">
            El contenedor tiene una altura fija y <code>overflow: hidden</code>. Al simular el zoom al
            200%, el texto crece pero el contenedor no, así que el nombre y la ubicación del producto se
            truncan o desaparecen.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function TextResizeGood() {
  return (
    <AppShell
      active="Inventario"
      title="Ficha de producto"
      info={
        <InfoBlock title="La altura fija es el problema, no el zoom">
          <p className="text-sm text-gray-700">
            El contenedor de la izquierda tiene una altura fija y <code>overflow: hidden</code>, así que a
            200% el texto se corta. Sacando la altura fija — que crezca con el contenido — alcanza para
            que el mismo texto siga siendo legible.
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
