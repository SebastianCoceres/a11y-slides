import { useState } from 'react';
import { Pause, Play, Volume2 } from 'lucide-react';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

function Waveform({ playing }) {
  const bars = [6, 14, 9, 20, 11, 16, 7, 18, 10, 13];
  return (
    <div className="flex h-6 items-end gap-0.5">
      {bars.map((h, i) => (
        <span
          key={i}
          className={playing ? 'w-1 rounded-full bg-brand' : 'w-1 rounded-full bg-slate-200'}
          style={{ height: `${h}px` }} />
      ))}
    </div>
  );
}

function BadExample() {
  return (
    <div className="w-80 rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <Volume2 className="h-5 w-5 shrink-0 text-brand" />
        <div>
          <p className="text-sm font-semibold text-slate-900">Resumen semanal en audio</p>
          <p className="text-xs text-slate-400">Reproduciendo automáticamente…</p>
        </div>
      </div>
      <div className="mt-4">
        <Waveform playing />
      </div>
    </div>
  );
}

function GoodExample() {
  const [playing, setPlaying] = useState(true);
  return (
    <div className="w-80 rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? 'Pausar resumen' : 'Reproducir resumen'}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-white hover:bg-brand/90">
          {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
        <div>
          <p className="text-sm font-semibold text-slate-900">Resumen semanal en audio</p>
          <p className="text-xs text-slate-400">{playing ? 'Reproduciendo…' : 'En pausa'}</p>
        </div>
      </div>
      <div className="mt-4">
        <Waveform playing={playing} />
      </div>
    </div>
  );
}

export function AudioControlBad() {
  return (
    <AppShell
      active="Reportes"
      title="Resumen semanal"
      info={
        <InfoBlock variant="warning" title="Sin forma de pararlo">
          <p className="text-sm text-gray-700">
            El audio arranca solo al entrar a la pantalla y no hay ningún control visible para pausarlo,
            detenerlo o bajarle el volumen. Si alguien está usando un lector de pantalla, esta pista tapa
            todo lo que el lector intente anunciar.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function AudioControlGood() {
  return (
    <AppShell
      active="Reportes"
      title="Resumen semanal"
      info={
        <InfoBlock title="El control tiene que estar antes de los 3 segundos">
          <p className="text-sm text-gray-700">
            Si un audio autorreproducido dura más de 3 segundos, tiene que haber una forma visible de
            pausarlo, detenerlo o bajarle el volumen independiente del volumen del sistema — si no, tapa
            cualquier lector de pantalla que esté leyendo otra cosa en la misma página.
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
