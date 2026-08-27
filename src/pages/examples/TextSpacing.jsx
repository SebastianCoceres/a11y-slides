import { useState } from 'react';
import { AlignJustify } from 'lucide-react';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

const NOTE =
  'El cliente pidió reprogramar la entrega para la semana próxima debido a una demora en el despacho aduanero.';

function SpacingToggle({ spaced, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={spaced}
      className="mb-4 flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm hover:bg-slate-50">
      <AlignJustify className="h-3.5 w-3.5" />
      {spaced ? 'Espaciado por defecto' : 'Aplicar más espaciado'}
    </button>
  );
}

function BadExample() {
  const [spaced, setSpaced] = useState(false);
  return (
    <div className="w-72">
      <SpacingToggle spaced={spaced} onToggle={() => setSpaced((s) => !s)} />
      <div className="h-24 w-64 overflow-hidden rounded-lg border border-slate-200 bg-white p-4">
        <p
          className="text-sm text-slate-700"
          style={spaced ? { lineHeight: 2.2, letterSpacing: '0.14em', wordSpacing: '0.18em' } : undefined}>
          {NOTE}
        </p>
      </div>
    </div>
  );
}

function GoodExample() {
  const [spaced, setSpaced] = useState(false);
  return (
    <div className="w-72">
      <SpacingToggle spaced={spaced} onToggle={() => setSpaced((s) => !s)} />
      <div className="w-64 rounded-lg border border-slate-200 bg-white p-4">
        <p
          className="text-sm text-slate-700"
          style={spaced ? { lineHeight: 2.2, letterSpacing: '0.14em', wordSpacing: '0.18em' } : undefined}>
          {NOTE}
        </p>
      </div>
    </div>
  );
}

export function TextSpacingBad() {
  return (
    <AppShell
      active="Reportes"
      title="Nota del pedido"
      info={
        <InfoBlock variant="warning" title="El contenedor no cede">
          <p className="text-sm text-gray-700">
            El contenedor tiene una altura fija con <code>overflow: hidden</code>. Al aplicar más
            interlineado y espaciado entre letras, el texto no entra y las últimas líneas de la nota
            desaparecen.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function TextSpacingGood() {
  return (
    <AppShell
      active="Reportes"
      title="Nota del pedido"
      info={
        <InfoBlock title="Alcanza con no fijar la altura">
          <p className="text-sm text-gray-700">
            El criterio pide tolerar interlineado ×1.5, espacio entre párrafos ×2, entre letras 0.12em y
            entre palabras 0.16em sin perder contenido. Si el contenedor crece con el texto, ya lo cumple.
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
