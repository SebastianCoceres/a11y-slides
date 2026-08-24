import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import AppShell from './AppShell';

function useCounter(initial) {
  const [count, setCount] = useState(initial);
  return {
    count,
    inc: () => setCount((c) => c + 1),
    dec: () => setCount((c) => Math.max(0, c - 1)),
  };
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
    <AppShell active="Inventario" title="Ajustar stock">
      <BadExample />
    </AppShell>
  );
}

export function MotorComplexityGood() {
  return (
    <AppShell active="Inventario" title="Ajustar stock">
      <GoodExample />
    </AppShell>
  );
}
