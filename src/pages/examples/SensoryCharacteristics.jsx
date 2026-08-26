import { Check } from 'lucide-react';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

function OrderSummary() {
  return (
    <div className="w-80 rounded-lg border border-slate-200 bg-white p-5">
      <p className="text-sm font-semibold text-slate-900">Pedido #4521</p>
      <p className="mt-1 text-xs text-slate-400">3 ítems · $142.300</p>
    </div>
  );
}

function BadExample() {
  return (
    <div className="w-80 space-y-4">
      <OrderSummary />
      <p className="text-sm text-gray-600">
        Para confirmar el pedido, hacé clic en el botón redondo verde de la derecha.
      </p>
      <div className="flex justify-end">
        <button
          type="button"
          aria-label="Confirmar pedido"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-success text-white hover:bg-success/90">
          <Check className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

function GoodExample() {
  return (
    <div className="w-80 space-y-4">
      <OrderSummary />
      <p className="text-sm text-gray-600">Para confirmar el pedido, hacé clic en "Confirmar pedido".</p>
      <div className="flex justify-end">
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-lg bg-success px-4 py-2 text-sm font-semibold text-white hover:bg-success/90">
          <Check className="h-4 w-4" />
          Confirmar pedido
        </button>
      </div>
    </div>
  );
}

export function SensoryCharacteristicsBad() {
  return (
    <AppShell
      active="Pedidos"
      title="Confirmar pedido"
      info={
        <InfoBlock variant="warning" title="Por qué falla">
          <p className="text-sm text-gray-700">
            La instrucción dice "redondo verde de la derecha": son pistas de forma, color y posición.
            Funcionan para quien ve bien y el layout no cambia, pero fallan con daltonismo, baja visión, o
            apenas el diseño se adapta a otro tamaño de pantalla.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function SensoryCharacteristicsGood() {
  return (
    <AppShell
      active="Pedidos"
      title="Confirmar pedido"
      info={
        <InfoBlock title="La instrucción tiene que sobrevivir sin forma, color ni posición">
          <p className="text-sm text-gray-700">
            "Redondo", "verde" y "de la derecha" dejan de servir apenas cambia el layout (mobile, zoom) o
            quien lee no percibe el color. Referenciar el control por su texto visible funciona siempre.
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
