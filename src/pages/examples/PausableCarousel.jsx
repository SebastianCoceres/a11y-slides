import { useEffect, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

const ROTATION_MS = 2500;

const MESSAGES = [
  { title: 'Cerrá el mes 2x más rápido', body: 'Activá la conciliación automática de pagos.' },
  { title: 'Nuevo: reportes en un clic', body: 'Exportá el estado de cuenta directo a PDF.' },
  { title: 'Descuento por volumen', body: 'Hasta 15% off en el plan anual de Aurea.' },
];

function BadExample() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % MESSAGES.length), ROTATION_MS);
    return () => clearInterval(id);
  }, []);

  const message = MESSAGES[index];

  return (
    <div className="w-96 rounded-lg border border-slate-200 bg-white p-5">
      <div className="rounded-lg bg-indigo-50 p-4">
        <p className="text-sm font-semibold text-indigo-900">{message.title}</p>
        <p className="mt-1 text-xs text-indigo-700">{message.body}</p>
        <div className="mt-3 flex gap-1.5">
          {MESSAGES.map((m, i) => (
            <span key={m.title} className={cn('h-1.5 w-1.5 rounded-full', i === index ? 'bg-indigo-600' : 'bg-indigo-200')} />
          ))}
        </div>
      </div>
    </div>
  );
}

function GoodExample() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % MESSAGES.length), ROTATION_MS);
    return () => clearInterval(id);
  }, [paused]);

  const message = MESSAGES[index];

  return (
    <div className="w-96 rounded-lg border border-slate-200 bg-white p-5">
      <div role="region" aria-label="Novedades" className="relative rounded-lg bg-indigo-50 p-4">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          aria-label={paused ? 'Reanudar rotación automática' : 'Pausar rotación automática'}
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-indigo-600 shadow-sm hover:bg-indigo-100">
          {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </button>
        <p aria-live="polite" className="pr-10 text-sm font-semibold text-indigo-900">{message.title}</p>
        <p className="pr-10 text-xs text-indigo-700">{message.body}</p>
        <div className="mt-3 flex gap-1.5">
          {MESSAGES.map((m, i) => (
            <span key={m.title} className={cn('h-1.5 w-1.5 rounded-full', i === index ? 'bg-indigo-600' : 'bg-indigo-200')} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function PausableCarouselBad() {
  return (
    <AppShell
      active="Dashboard"
      title="Novedades"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            El banner rota solo cada {ROTATION_MS / 1000} segundos y no hay forma de detenerlo. Alguien que
            necesita más tiempo para leer el mensaje, o a quien el movimiento constante le distrae o marea,
            no tiene ningún control sobre esto.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function PausableCarouselGood() {
  return (
    <AppShell
      active="Dashboard"
      title="Novedades"
      info={
        <InfoBlock title="Rotación controlable">
          <p className="text-sm text-gray-700">
            El mismo banner ahora tiene un botón de pausa/reanudar visible que detiene el{' '}
            <code>setInterval</code>, con <code>aria-pressed</code> reflejando el estado (WCAG 2.2.2,
            Pausar, detener, ocultar).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
