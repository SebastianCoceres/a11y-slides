import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

const PRODUCTS = [
  { name: 'Notebook 14" Ryzen 5', sku: 'SKU-1042', color: 'bg-blue-100 text-blue-700' },
  { name: 'Monitor 27" 144Hz', sku: 'SKU-2087', color: 'bg-emerald-100 text-emerald-700' },
  { name: 'Teclado mecánico TKL', sku: 'SKU-3311', color: 'bg-amber-100 text-amber-700' },
  { name: 'Mouse inalámbrico', sku: 'SKU-4456', color: 'bg-indigo-100 text-indigo-700' },
];

const SWIPE_THRESHOLD = 40;

function useSwipeIndex(length) {
  const [index, setIndex] = useState(0);
  const dragStartRef = useRef(null);

  const onPointerDown = (event) => {
    dragStartRef.current = event.clientX;
  };

  const onPointerMove = () => {
    // El seguimiento del arrastre en sí no importa acá: solo se resuelve al soltar.
  };

  const onPointerUp = (event) => {
    if (dragStartRef.current === null) return;
    const deltaX = event.clientX - dragStartRef.current;
    dragStartRef.current = null;
    if (deltaX > SWIPE_THRESHOLD) {
      setIndex((i) => Math.max(0, i - 1));
    } else if (deltaX < -SWIPE_THRESHOLD) {
      setIndex((i) => Math.min(length - 1, i + 1));
    }
  };

  return { index, setIndex, onPointerDown, onPointerMove, onPointerUp };
}

function BadExample() {
  const { index, onPointerDown, onPointerMove, onPointerUp } = useSwipeIndex(PRODUCTS.length);
  const product = PRODUCTS[index];

  return (
    <div className="w-80 rounded-lg border border-slate-200 bg-white p-5">
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        className={cn(
          'flex h-40 cursor-grab touch-pan-y items-center justify-center rounded-lg text-sm font-semibold select-none active:cursor-grabbing',
          product.color,
        )}>
        {product.name}
      </div>
      <p className="mt-3 text-xs text-gray-500">{product.sku} · {index + 1} de {PRODUCTS.length}</p>
      <p className="mt-1 text-xs text-gray-400">Deslizá la imagen con el mouse o el dedo para ver el resto de las fotos.</p>
    </div>
  );
}

function GoodExample() {
  const { index, setIndex, onPointerDown, onPointerMove, onPointerUp } = useSwipeIndex(PRODUCTS.length);
  const product = PRODUCTS[index];

  return (
    <div className="w-80 rounded-lg border border-slate-200 bg-white p-5">
      <div className="relative">
        <div
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          className={cn(
            'flex h-40 cursor-grab touch-pan-y items-center justify-center rounded-lg text-sm font-semibold select-none active:cursor-grabbing',
            product.color,
          )}>
          {product.name}
        </div>
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          aria-label="Foto anterior"
          className="absolute top-1/2 left-2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow hover:bg-white disabled:opacity-40">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => setIndex((i) => Math.min(PRODUCTS.length - 1, i + 1))}
          disabled={index === PRODUCTS.length - 1}
          aria-label="Foto siguiente"
          className="absolute top-1/2 right-2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow hover:bg-white disabled:opacity-40">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <p className="mt-3 text-xs text-gray-500">{product.sku} · {index + 1} de {PRODUCTS.length}</p>
      <p className="mt-1 text-xs text-gray-400">Arrastrá la imagen o usá las flechas para navegar.</p>
    </div>
  );
}

export function PointerGesturesBad() {
  return (
    <AppShell
      active="Pedidos"
      title="Fotos del producto"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            La única forma de cambiar de foto es arrastrar el puntero de un lado al otro. Quien usa un
            switch, un joystick adaptado o cualquier dispositivo que solo puede simular toques simples
            —sin trayectoria— no tiene manera de avanzar en la galería.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function PointerGesturesGood() {
  return (
    <AppShell
      active="Pedidos"
      title="Fotos del producto"
      info={
        <InfoBlock title="Alternativa de un solo toque">
          <p className="text-sm text-gray-700">
            Se agregan botones "anterior"/"siguiente" que hacen lo mismo con un solo toque, sin trayectoria.
            El arrastre sigue funcionando para quien lo prefiere (WCAG 2.5.1, Gestos del puntero).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
