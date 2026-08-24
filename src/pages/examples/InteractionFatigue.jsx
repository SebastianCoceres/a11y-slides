import { useState } from 'react';
import { cn } from '@/lib/utils';
import AppShell from './AppShell';

const HISTORY = [
  { id: '#4518', fecha: '02/08/2026', total: '$64.200' },
  { id: '#4432', fecha: '19/07/2026', total: '$112.900' },
  { id: '#4301', fecha: '05/06/2026', total: '$38.500' },
];

function Section({ title, children }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5">
      <h3 className="mb-3 text-sm font-bold text-gray-900">{title}</h3>
      {children}
    </section>
  );
}

function HistoryList() {
  return (
    <ul className="space-y-2">
      {HISTORY.map((order) => (
        <li key={order.id} className="flex justify-between rounded border border-slate-100 px-3 py-2 text-sm">
          <span className="text-gray-700">Pedido {order.id}</span>
          <span className="text-gray-500">{order.fecha}</span>
          <span className="font-medium text-gray-900">{order.total}</span>
        </li>
      ))}
    </ul>
  );
}

function BadExample() {
  return (
    <div className="flex max-h-[420px] flex-col gap-4 overflow-y-auto pr-1">
      <Section title="Datos generales">
        <p className="text-sm text-gray-500">Estudio Delgado — CUIT 30-71234567-9 — Cliente desde 2021</p>
      </Section>
      <Section title="Direcciones">
        <p className="text-sm text-gray-500">Fiscal: Av. Corrientes 1234, CABA</p>
        <p className="mt-1 text-sm text-gray-500">Entrega: Ruta 8 km 45, Pilar</p>
      </Section>
      <Section title="Preferencias">
        <p className="text-sm text-gray-500">Facturación electrónica activada. Recordatorios por email.</p>
      </Section>
      <Section title="Condiciones comerciales">
        <p className="text-sm text-gray-500">Límite de crédito: $500.000. Método de pago: Transferencia.</p>
      </Section>
      <Section title="Vendedor asignado">
        <p className="text-sm text-gray-500">María Fernández — Zona Norte</p>
      </Section>
      <Section title="Historial de pedidos">
        <HistoryList />
      </Section>
      <p className="text-xs text-gray-400">↑ El historial está después de cinco secciones y quince scrolls al día.</p>
    </div>
  );
}

function GoodExample() {
  const [tab, setTab] = useState('Historial');
  const tabs = ['Perfil', 'Historial', 'Notas'];

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <div className="mb-4 flex gap-1 border-b border-slate-200">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              'border-b-2 px-3 py-2 text-sm font-medium',
              tab === t ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700',
            )}>
            {t}
          </button>
        ))}
      </div>

      {tab === 'Historial' && <HistoryList />}
      {tab === 'Perfil' && (
        <p className="text-sm text-gray-500">Estudio Delgado — CUIT 30-71234567-9 — Cliente desde 2021</p>
      )}
      {tab === 'Notas' && <p className="text-sm text-gray-500">Sin notas registradas.</p>}
    </div>
  );
}

export function InteractionFatigueBad() {
  return (
    <AppShell active="Contactos" title="Estudio Delgado">
      <BadExample />
    </AppShell>
  );
}

export function InteractionFatigueGood() {
  return (
    <AppShell active="Contactos" title="Estudio Delgado">
      <GoodExample />
    </AppShell>
  );
}
