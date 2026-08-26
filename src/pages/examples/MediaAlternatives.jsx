import { useState } from 'react';
import { Captions, FileText, Play, Radio } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

function VideoMock({ children, live }) {
  return (
    <div className="relative flex aspect-video w-full items-center justify-center rounded-lg bg-slate-900">
      <Play className="h-10 w-10 text-white/70" fill="currentColor" />
      {live && (
        <Badge variant="danger" className="absolute top-3 left-3">
          <Radio className="h-3 w-3" data-icon="inline-start" />
          En vivo
        </Badge>
      )}
      {children}
    </div>
  );
}

function BadExample() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <VideoMock>
          <span className="absolute right-3 bottom-3 rounded bg-black/60 px-1.5 py-0.5 text-xs text-white">
            12:34
          </span>
        </VideoMock>
        <p className="mt-2 text-sm font-semibold text-slate-900">Onboarding de ventas — Módulo 1</p>
      </div>
      <div>
        <VideoMock live />
        <p className="mt-2 text-sm font-semibold text-slate-900">Demo de producto</p>
      </div>
    </div>
  );
}

function GoodExample() {
  const [captions, setCaptions] = useState(true);
  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <VideoMock>
          <span className="absolute right-3 bottom-3 rounded bg-black/60 px-1.5 py-0.5 text-xs text-white">
            12:34
          </span>
          <button
            type="button"
            onClick={() => setCaptions((c) => !c)}
            aria-pressed={captions}
            aria-label="Subtítulos"
            className={cn(
              'absolute bottom-3 left-3 flex h-6 w-6 items-center justify-center rounded',
              captions ? 'bg-white text-slate-900' : 'bg-black/60 text-white',
            )}>
            <Captions className="h-3.5 w-3.5" />
          </button>
        </VideoMock>
        <div className="mt-2 flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-slate-900">Onboarding de ventas — Módulo 1</p>
          <a href="#" className="flex shrink-0 items-center gap-1 text-xs font-medium text-brand hover:underline">
            <FileText className="h-3 w-3" />
            Ver transcripción
          </a>
        </div>
        <p className="mt-0.5 text-xs text-slate-400">Incluye audiodescripción en la pista de audio.</p>
      </div>
      <div>
        <VideoMock live />
        <div className="mt-2 flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-slate-900">Demo de producto</p>
          <Badge variant="info">Subtítulos en vivo</Badge>
        </div>
      </div>
    </div>
  );
}

export function MediaAlternativesBad() {
  return (
    <AppShell
      active="Reportes"
      title="Capacitaciones"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            Ninguno de los dos videos tiene subtítulos, transcripción ni nota de audiodescripción, así que
            el contenido queda inaccesible para quien no puede oír el audio. La transmisión en vivo tampoco
            avisa si va a tener subtítulos en tiempo real.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function MediaAlternativesGood() {
  return (
    <AppShell
      active="Reportes"
      title="Capacitaciones"
      info={
        <InfoBlock title="Qué cubre cada elemento">
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>
              <strong>1.2.1/1.2.3</strong> — transcripción o audiodescripción del video grabado.
            </li>
            <li>
              <strong>1.2.2</strong> — subtítulos sincronizados en el video grabado.
            </li>
            <li>
              <strong>1.2.4</strong> — subtítulos en tiempo real en la transmisión en vivo.
            </li>
            <li>
              <strong>1.2.5</strong> — pista de audiodescripción en el video grabado.
            </li>
          </ul>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
