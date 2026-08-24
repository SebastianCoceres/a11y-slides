import { useState } from 'react';
import { WifiOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppShell from './AppShell';

const CHART_SRC =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180"><rect width="320" height="180" fill="#eef2ff"/><rect x="30" y="90" width="40" height="70" fill="#6366f1"/><rect x="100" y="50" width="40" height="110" fill="#6366f1"/><rect x="170" y="110" width="40" height="50" fill="#6366f1"/><rect x="240" y="70" width="40" height="90" fill="#6366f1"/></svg>'
  );
const BROKEN_SRC = '/no-existe-esta-imagen.jpg';

function useSlowConnection() {
  const [slow, setSlow] = useState(false);
  return { slow, toggle: () => setSlow((current) => !current) };
}

function BadExample() {
  const { slow, toggle } = useSlowConnection();

  return (
    <div className="w-80">
      <img
        src={slow ? BROKEN_SRC : CHART_SRC}
        className="h-[180px] w-[320px] rounded border border-gray-200 bg-gray-50 object-contain" />
      <Button onClick={toggle} variant="outline" size="sm" className="mt-3">
        <WifiOff data-icon="inline-start" />
        {slow ? 'Restaurar conexión' : 'Simular conexión lenta'}
      </Button>
      {slow && (
        <p className="mt-2 text-xs text-red-600">
          Sin <code>alt</code>, la imagen rota no dice nada sobre las ventas del trimestre.
        </p>
      )}
    </div>
  );
}

function GoodExample() {
  const { slow, toggle } = useSlowConnection();

  return (
    <div className="w-80">
      <img
        src={slow ? BROKEN_SRC : CHART_SRC}
        alt="Gráfico de barras: ventas por región, con el Centro liderando el trimestre"
        className="h-[180px] w-[320px] rounded border border-gray-200 bg-gray-50 object-contain" />
      <Button onClick={toggle} variant="outline" size="sm" className="mt-3">
        <WifiOff data-icon="inline-start" />
        {slow ? 'Restaurar conexión' : 'Simular conexión lenta'}
      </Button>
      {slow && (
        <p className="mt-2 text-xs text-green-700">
          Con <code>alt</code>, aunque la imagen no cargó, el contexto se entiende igual.
        </p>
      )}
    </div>
  );
}

export function AltTextBad() {
  return (
    <AppShell active="Reportes" section="Reportes" title="Ventas — Q3">
      <BadExample />
    </AppShell>
  );
}

export function AltTextGood() {
  return (
    <AppShell active="Reportes" section="Reportes" title="Ventas — Q3">
      <GoodExample />
    </AppShell>
  );
}
