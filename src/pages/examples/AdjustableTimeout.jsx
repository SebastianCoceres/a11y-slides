import { useEffect, useState } from 'react';
import { AlertTriangle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

const TIMEOUT_SECONDS = 10;

function BadExample() {
  const [open, setOpen] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(TIMEOUT_SECONDS);
  const [sessionEnded, setSessionEnded] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    if (secondsLeft <= 0) {
      setOpen(false);
      setSessionEnded(true);
      return undefined;
    }
    const id = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [open, secondsLeft]);

  const simulate = () => {
    setSessionEnded(false);
    setSecondsLeft(TIMEOUT_SECONDS);
    setOpen(true);
  };

  return (
    <div className="w-96 rounded-lg border border-slate-200 bg-white p-5">
      <p className="text-sm font-semibold text-gray-900">Panel de facturación</p>
      <p className="mt-1 text-xs text-gray-500">Simulá una sesión a punto de expirar.</p>
      <Button onClick={simulate} className="mt-4">Simular sesión por expirar</Button>

      {sessionEnded && (
        <p className="mt-4 flex items-center gap-1.5 text-sm text-red-600">
          <AlertTriangle className="h-4 w-4 shrink-0" />
          Sesión cerrada automáticamente. El trabajo sin guardar se perdió.
        </p>
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl">
            <h3 className="mb-2 flex items-center gap-1.5 text-base font-semibold text-gray-900">
              <Clock className="h-4 w-4 shrink-0 text-red-600" />
              Tu sesión está por expirar
            </h3>
            <p className="text-sm text-gray-600">
              Se cerrará automáticamente en <span className="font-semibold text-gray-900">{secondsLeft}</span> segundos.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function GoodExample() {
  const [open, setOpen] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(TIMEOUT_SECONDS);
  const [extended, setExtended] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    if (secondsLeft <= 0) {
      setOpen(false);
      return undefined;
    }
    const id = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [open, secondsLeft]);

  const simulate = () => {
    setExtended(false);
    setSecondsLeft(TIMEOUT_SECONDS);
    setOpen(true);
  };

  const extendSession = () => {
    setSecondsLeft(TIMEOUT_SECONDS);
    setExtended(true);
  };

  return (
    <div className="w-96 rounded-lg border border-slate-200 bg-white p-5">
      <p className="text-sm font-semibold text-gray-900">Panel de facturación</p>
      <p className="mt-1 text-xs text-gray-500">Simulá una sesión a punto de expirar.</p>
      <Button onClick={simulate} className="mt-4">Simular sesión por expirar</Button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div
            role="alertdialog"
            aria-labelledby="session-warning-title"
            aria-describedby="session-warning-desc"
            className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl">
            <h3 id="session-warning-title" className="mb-2 flex items-center gap-1.5 text-base font-semibold text-gray-900">
              <Clock className="h-4 w-4 shrink-0 text-amber-600" />
              Tu sesión está por expirar
            </h3>
            <p id="session-warning-desc" className="text-sm text-gray-600">
              Se cerrará automáticamente en{' '}
              <output aria-live="polite" className="font-semibold text-gray-900">{secondsLeft} segundos</output>.
            </p>
            {extended && <p className="mt-2 text-xs text-emerald-600">Sesión extendida.</p>}
            <div className="mt-4 flex justify-end">
              <Button onClick={extendSession}>Extender sesión</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function AdjustableTimeoutBad() {
  return (
    <AppShell
      active="Dashboard"
      title="Aviso de sesión por expirar"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            La cuenta regresiva llega a cero y cierra la sesión sin dar ninguna forma de extenderla. Quien
            necesita más tiempo para leer o completar un formulario —por lectura lenta, un lector de
            pantalla o simplemente una interrupción— pierde el trabajo sin aviso previo real.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function AdjustableTimeoutGood() {
  return (
    <AppShell
      active="Dashboard"
      title="Aviso de sesión por expirar"
      info={
        <InfoBlock title="Tiempo extensible">
          <p className="text-sm text-gray-700">
            El aviso muestra un botón "Extender sesión" visible durante toda la cuenta regresiva, que
            resetea el timer sin cerrar nada. La cuenta regresiva se anuncia con <code>aria-live</code>{' '}
            (WCAG 2.2.1, Tiempo ajustable).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
