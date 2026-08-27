import { useRef, useState } from 'react';
import { ChevronDown, ChevronUp, GripVertical } from 'lucide-react';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

const INITIAL_KPIS = [
  { id: 'kpi-1', label: 'Ingresos del mes' },
  { id: 'kpi-2', label: 'Facturas vencidas' },
  { id: 'kpi-3', label: 'Rotación de inventario' },
  { id: 'kpi-4', label: 'Satisfacción de clientes' },
];

function useDraggableList(initial) {
  const [items, setItems] = useState(initial);
  const dragIndexRef = useRef(null);

  const reorder = (from, to) => {
    setItems((list) => {
      const next = [...list];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
  };

  const onDragStart = (index) => () => {
    dragIndexRef.current = index;
  };

  const onDragOver = (event) => event.preventDefault();

  const onDrop = (index) => () => {
    const from = dragIndexRef.current;
    dragIndexRef.current = null;
    if (from === null || from === index) return;
    reorder(from, index);
  };

  return { items, setItems, onDragStart, onDragOver, onDrop };
}

function BadExample() {
  const { items, onDragStart, onDragOver, onDrop } = useDraggableList(INITIAL_KPIS);

  return (
    <ol className="w-80 divide-y divide-slate-100 rounded-lg border border-slate-200 bg-white">
      {items.map((item, index) => (
        <li
          key={item.id}
          draggable
          onDragStart={onDragStart(index)}
          onDragOver={onDragOver}
          onDrop={onDrop(index)}
          className="flex cursor-grab items-center gap-3 px-4 py-3 text-sm text-gray-800 active:cursor-grabbing">
          <GripVertical className="h-4 w-4 shrink-0 text-slate-400" />
          <span className="font-medium text-gray-500">{index + 1}.</span>
          {item.label}
        </li>
      ))}
    </ol>
  );
}

function GoodExample() {
  const { items, setItems, onDragStart, onDragOver, onDrop } = useDraggableList(INITIAL_KPIS);

  const move = (index, direction) => {
    const target = index + direction;
    if (target < 0 || target >= items.length) return;
    setItems((list) => {
      const next = [...list];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  };

  return (
    <ol className="w-80 divide-y divide-slate-100 rounded-lg border border-slate-200 bg-white">
      {items.map((item, index) => (
        <li
          key={item.id}
          draggable
          onDragStart={onDragStart(index)}
          onDragOver={onDragOver}
          onDrop={onDrop(index)}
          className="flex cursor-grab items-center gap-3 px-4 py-3 text-sm text-gray-800 active:cursor-grabbing">
          <GripVertical className="h-4 w-4 shrink-0 text-slate-400" />
          <span className="font-medium text-gray-500">{index + 1}.</span>
          <span className="flex-1">{item.label}</span>
          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={() => move(index, -1)}
              disabled={index === 0}
              aria-label={`Subir "${item.label}"`}
              className="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 disabled:opacity-30">
              <ChevronUp className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => move(index, 1)}
              disabled={index === items.length - 1}
              aria-label={`Bajar "${item.label}"`}
              className="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 disabled:opacity-30">
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function DragMovementsBad() {
  return (
    <AppShell
      active="Reportes"
      title="KPIs prioritarios"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            La única forma de cambiar el orden de los KPIs es arrastrarlos y soltarlos. Quien no puede
            sostener un arrastre preciso —por temblor, uso de switch, o control por voz— no tiene ninguna
            forma de reordenar esta lista.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function DragMovementsGood() {
  return (
    <AppShell
      active="Reportes"
      title="KPIs prioritarios"
      info={
        <InfoBlock title="Alternativa sin arrastre">
          <p className="text-sm text-gray-700">
            Cada fila suma botones "Subir"/"Bajar" que logran el mismo reordenamiento sin arrastrar nada.
            El drag and drop sigue disponible como atajo opcional (WCAG 2.5.7, Movimientos de arrastre).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
