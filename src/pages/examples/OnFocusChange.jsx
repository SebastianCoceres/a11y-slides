import { useState } from 'react';
import { Label } from '@/components/ui/label';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

const SECTIONS = ['Pedidos', 'Facturas', 'Inventario', 'Contactos', 'Reportes'];

const selectClassName =
  'h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50';

function BadExample() {
  const [status, setStatus] = useState(null);

  const handleFocus = (event) => {
    setStatus(`Navegando a ${event.target.value}...`);
  };

  return (
    <div className="w-96 rounded-lg border border-slate-200 bg-white p-5">
      <Label htmlFor="bad-goto" className="mb-1 block text-sm text-gray-700">Ir a sección</Label>
      <select id="bad-goto" defaultValue="Pedidos" onFocus={handleFocus} className={selectClassName}>
        {SECTIONS.map((section) => (
          <option key={section}>{section}</option>
        ))}
      </select>
      {status && <p className="mt-3 text-sm text-indigo-600">{status}</p>}
      <div className="mt-6 rounded-md border border-slate-100 bg-slate-50 p-4 text-sm text-gray-500">
        Lista de pedidos recientes...
      </div>
    </div>
  );
}

function GoodExample() {
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    setStatus(`Navegando a ${event.target.value}...`);
  };

  return (
    <div className="w-96 rounded-lg border border-slate-200 bg-white p-5">
      <Label htmlFor="good-goto" className="mb-1 block text-sm text-gray-700">Ir a sección</Label>
      <select id="good-goto" defaultValue="Pedidos" onChange={handleChange} className={selectClassName}>
        {SECTIONS.map((section) => (
          <option key={section}>{section}</option>
        ))}
      </select>
      {status && <p role="status" className="mt-3 text-sm text-indigo-600">{status}</p>}
      <div className="mt-6 rounded-md border border-slate-100 bg-slate-50 p-4 text-sm text-gray-500">
        Lista de pedidos recientes...
      </div>
    </div>
  );
}

export function OnFocusChangeBad() {
  return (
    <AppShell
      active="Pedidos"
      title="Pedidos"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            El <code>select</code> dispara el cambio de contexto en <code>onFocus</code>. Alguien que
            navega con Tab llega al control, todavía no eligió nada, y la pantalla ya cambió. Se
            desorienta sin haber tomado ninguna decisión.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function OnFocusChangeGood() {
  return (
    <AppShell
      active="Pedidos"
      title="Pedidos"
      info={
        <InfoBlock title="Cambio de contexto solo tras elegir">
          <p className="text-sm text-gray-700">
            El cambio ocurre en <code>onChange</code>, después de que la persona elige explícitamente una
            opción. Recibir el foco nunca dispara nada por sí solo (WCAG 3.2.1, Al recibir el foco).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
