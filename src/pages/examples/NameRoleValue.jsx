import { useState } from 'react';
import { cn } from '@/lib/utils';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

function SwitchTrack({ checked }) {
  return (
    <span
      className={cn(
        'relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors',
        checked ? 'bg-indigo-600' : 'bg-slate-300',
      )}>
      <span
        className={cn(
          'inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform',
          checked ? 'translate-x-6' : 'translate-x-1',
        )}
      />
    </span>
  );
}

function BadExample() {
  const [checked, setChecked] = useState(true);

  return (
    <div className="w-80 rounded-lg border border-slate-200 bg-white p-5">
      <p className="text-sm font-semibold text-gray-900">Configuración</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-700">Notificaciones activas</span>
        <div className="cursor-pointer" onClick={() => setChecked((current) => !current)}>
          <SwitchTrack checked={checked} />
        </div>
      </div>
    </div>
  );
}

function GoodExample() {
  const [checked, setChecked] = useState(true);

  return (
    <div className="w-80 rounded-lg border border-slate-200 bg-white p-5">
      <p className="text-sm font-semibold text-gray-900">Configuración</p>
      <div className="mt-4 flex items-center justify-between">
        <span id="good-notifications-label" className="text-sm text-gray-700">Notificaciones activas</span>
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          aria-labelledby="good-notifications-label"
          onClick={() => setChecked((current) => !current)}
          className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2">
          <SwitchTrack checked={checked} />
        </button>
      </div>
    </div>
  );
}

export function NameRoleValueBad() {
  return (
    <AppShell
      active="Dashboard"
      title="Configuración"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            El switch es un <code>&lt;div onClick&gt;</code> con estilos que lo hacen lucir como una pastilla
            deslizable, pero no tiene <code>role</code>, ni <code>aria-checked</code>, ni es focuseable por
            teclado (no es un <code>&lt;button&gt;</code> ni tiene <code>tabIndex</code>). Un lector de
            pantalla no anuncia nombre, rol ni estado, y no se puede activar sin mouse.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function NameRoleValueGood() {
  return (
    <AppShell
      active="Dashboard"
      title="Configuración"
      info={
        <InfoBlock title="Nombre, rol y estado expuestos">
          <p className="text-sm text-gray-700">
            El mismo control visual ahora es un <code>&lt;button role="switch"&gt;</code>: focuseable por
            teclado, con <code>aria-checked</code> reflejando el estado y <code>aria-labelledby</code>{' '}
            dándole nombre accesible. Un lector de pantalla anuncia "Notificaciones activas, switch,
            activado" (WCAG 4.1.2, Nombre, rol, valor).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
