import { useEffect, useRef, useState } from 'react';
import { Minus, Plus, Vibrate } from 'lucide-react';
import { cn } from '@/lib/utils';
import AppShell from './AppShell';

function useCounter(initial) {
  const [count, setCount] = useState(initial);
  return {
    count,
    inc: () => setCount((c) => c + 1),
    dec: () => setCount((c) => Math.max(0, c - 1)),
  };
}

// Simulates hand tremor: the visible cursor drifts around the real pointer
// position with a damped random walk, instead of tracking it 1:1.
function useTremorCursor() {
  const [active, setActive] = useState(false);
  const [renderPos, setRenderPos] = useState({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });
  const offsetRef = useRef({ x: 0, y: 0 });
  const velRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    function onMove(e) {
      targetRef.current = { x: e.clientX, y: e.clientY };
    }
    window.addEventListener('mousemove', onMove);

    function tick() {
      velRef.current.x = (velRef.current.x + (Math.random() - 0.5) * 5) * 0.85;
      velRef.current.y = (velRef.current.y + (Math.random() - 0.5) * 5) * 0.85;
      offsetRef.current.x += velRef.current.x;
      offsetRef.current.y += velRef.current.y;

      const maxRadius = 16;
      const dist = Math.hypot(offsetRef.current.x, offsetRef.current.y);
      if (dist > maxRadius) {
        offsetRef.current.x = (offsetRef.current.x / dist) * maxRadius;
        offsetRef.current.y = (offsetRef.current.y / dist) * maxRadius;
      }

      setRenderPos({
        x: targetRef.current.x + offsetRef.current.x,
        y: targetRef.current.y + offsetRef.current.y,
      });
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [active]);

  return { active, toggle: () => setActive((a) => !a), renderPos };
}

function TremorToggle({ active, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        'fixed top-1/2 right-6 z-[201] flex -translate-y-1/2 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold shadow-lg transition-colors',
        active ? 'bg-red-600 text-white' : 'border border-slate-200 bg-white text-gray-700 hover:bg-slate-50',
      )}>
      <Vibrate className="h-4 w-4" />
      {active ? 'Detener tremor' : 'Simular tremor'}
    </button>
  );
}

function MotorComplexityShell({ children }) {
  const { active, toggle, renderPos } = useTremorCursor();

  return (
    <>
      {active && <style>{'*, *::before, *::after { cursor: none !important; }'}</style>}
      <AppShell active="Inventario" title="Ajustar stock">
        {children}
      </AppShell>
      <TremorToggle active={active} onToggle={toggle} />
      {active && (
        <div
          className="pointer-events-none fixed z-[200] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-red-500 bg-red-500/20"
          style={{ left: renderPos.x, top: renderPos.y }} />
      )}
    </>
  );
}

function BadExample() {
  const { count, inc, dec } = useCounter(24);

  return (
    <div className="w-80 rounded-lg border border-slate-200 bg-white p-5">
      <p className="mb-1 text-sm font-semibold text-gray-900">Tornillos M6 (caja x100)</p>
      <p className="mb-4 text-xs text-gray-500">Depósito Norte — estantería B4</p>
      <div className="flex items-center gap-1">
        <button
          onClick={dec}
          className="flex h-5 w-5 items-center justify-center rounded bg-slate-200 text-slate-700 hover:bg-slate-300">
          <Minus className="h-3 w-3" />
        </button>
        <span className="w-8 text-center text-sm">{count}</span>
        <button
          onClick={inc}
          className="flex h-5 w-5 items-center justify-center rounded bg-slate-200 text-slate-700 hover:bg-slate-300">
          <Plus className="h-3 w-3" />
        </button>
      </div>
      <p className="mt-4 text-xs text-gray-500">Botones de 20px, pegados entre sí.</p>
    </div>
  );
}

function GoodExample() {
  const { count, inc, dec } = useCounter(24);

  return (
    <div className="w-80 rounded-lg border border-slate-200 bg-white p-5">
      <p className="mb-1 text-sm font-semibold text-gray-900">Tornillos M6 (caja x100)</p>
      <p className="mb-4 text-xs text-gray-500">Depósito Norte — estantería B4</p>
      <div className="flex items-center gap-3">
        <button
          onClick={dec}
          className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200">
          <Minus className="h-5 w-5" />
        </button>
        <span className="w-10 text-center text-lg font-semibold text-gray-900">{count}</span>
        <button
          onClick={inc}
          className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200">
          <Plus className="h-5 w-5" />
        </button>
      </div>
      <p className="mt-4 text-xs text-gray-500">Botones de 48px, con espacio de sobra entre sí.</p>
    </div>
  );
}

export function MotorComplexityBad() {
  return (
    <MotorComplexityShell>
      <BadExample />
    </MotorComplexityShell>
  );
}

export function MotorComplexityGood() {
  return (
    <MotorComplexityShell>
      <GoodExample />
    </MotorComplexityShell>
  );
}
