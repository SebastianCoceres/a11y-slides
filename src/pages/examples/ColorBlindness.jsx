import { CheckCircle2, Clock, MonitorCog, XCircle } from 'lucide-react';
import ExampleLayout from './ExampleLayout';

const ORDERS_BAD = [
  { id: '#1042', status: 'green' },
  { id: '#1043', status: 'red' },
  { id: '#1044', status: 'amber' },
];

const ORDERS_GOOD = [
  { id: '#1042', status: 'approved' },
  { id: '#1043', status: 'rejected' },
  { id: '#1044', status: 'pending' },
];

const STATUS_DOT = {
  green: 'bg-green-500',
  red: 'bg-red-500',
  amber: 'bg-amber-500',
};

const STATUS_META = {
  approved: { label: 'Aprobado', dot: 'bg-green-500', Icon: CheckCircle2, iconColor: 'text-green-600' },
  rejected: { label: 'Rechazado', dot: 'bg-red-500', Icon: XCircle, iconColor: 'text-red-600' },
  pending: { label: 'Pendiente', dot: 'bg-amber-500', Icon: Clock, iconColor: 'text-amber-600' },
};

function BadOrderList() {
  return (
    <div>
      <ul className="space-y-2">
        {ORDERS_BAD.map((order) => (
          <li key={order.id} className="flex items-center gap-3 rounded border border-gray-200 bg-white px-4 py-2.5 text-sm">
            <span className={`h-3 w-3 shrink-0 rounded-full ${STATUS_DOT[order.status]}`} aria-hidden="true" />
            <span className="text-gray-700">Pedido {order.id}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-gray-600">
        El estado se comunica solo con el color del punto. Activá una simulación de daltonismo y probá distinguir cuál está aprobado y cuál rechazado.
      </p>
    </div>
  );
}

function GoodOrderList() {
  return (
    <div>
      <ul className="space-y-2">
        {ORDERS_GOOD.map((order) => {
          const meta = STATUS_META[order.status];
          const Icon = meta.Icon;
          return (
            <li key={order.id} className="flex items-center gap-3 rounded border border-gray-200 bg-white px-4 py-2.5 text-sm">
              <span className={`h-3 w-3 shrink-0 rounded-full ${meta.dot}`} aria-hidden="true" />
              <Icon className={`h-4 w-4 shrink-0 ${meta.iconColor}`} aria-hidden="true" />
              <span className="text-gray-700">Pedido {order.id}</span>
              <span className="ml-auto font-medium text-gray-900">{meta.label}</span>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-xs text-gray-600">
        Cada estado suma un ícono de forma distinta y el texto del estado: el color deja de ser la única pista.
      </p>
    </div>
  );
}

const SALES_BAD = [
  { region: 'Norte', value: 40, color: 'bg-red-500' },
  { region: 'Centro', value: 75, color: 'bg-green-500' },
  { region: 'Sur', value: 55, color: 'bg-amber-500' },
];

const SALES_GOOD = [
  { region: 'Norte', value: 40, color: 'bg-red-500', pattern: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.35) 0 4px, transparent 4px 8px)' },
  { region: 'Centro', value: 75, color: 'bg-green-500', pattern: 'none' },
  { region: 'Sur', value: 55, color: 'bg-amber-500', pattern: 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.35) 0 3px, transparent 3px 6px)' },
];

function BadChart() {
  return (
    <div>
      <div className="mb-3 flex gap-4 text-xs text-gray-600">
        {SALES_BAD.map((row) => (
          <span key={row.region} className="flex items-center gap-1.5">
            <span className={`h-2.5 w-2.5 rounded-sm ${row.color}`} aria-hidden="true" />
            {row.region}
          </span>
        ))}
      </div>
      <div className="flex h-32 items-end gap-4">
        {SALES_BAD.map((row) => (
          <div key={row.region} className={`w-12 rounded-t ${row.color}`} style={{ height: `${row.value}%` }} />
        ))}
      </div>
      <p className="mt-4 text-xs text-gray-600">
        Para saber qué barra es cuál región hay que memorizar el color y mirar la leyenda de arriba. Sin valores en la barra, y con daltonismo rojo-verde las barras se confunden.
      </p>
    </div>
  );
}

function GoodChart() {
  return (
    <div>
      <div className="flex items-end gap-6">
        {SALES_GOOD.map((row) => (
          <div key={row.region} className="flex flex-col items-center gap-1">
            <span className="text-xs font-semibold text-gray-900">{row.value}%</span>
            <div className="flex h-32 w-12 items-end">
              <div
                className={`w-full rounded-t ${row.color}`}
                style={{ height: `${row.value}%`, backgroundImage: row.pattern }} />
            </div>
            <span className="text-xs text-gray-700">{row.region}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-gray-600">
        Cada barra trae su valor y su nombre de región al lado, y una textura distinta además del color: no hace falta distinguir tonos para leer el gráfico.
      </p>
    </div>
  );
}

const CVD_TYPES = [
  { name: 'Deuteranopia', detail: 'Sensibilidad reducida al verde. Es el tipo más común.' },
  { name: 'Protanopia', detail: 'Sensibilidad reducida al rojo.' },
  { name: 'Tritanopia', detail: 'Sensibilidad reducida al azul. Muy poco común.' },
  { name: 'Monocromacia (acromatopsia)', detail: 'Visión en escala de grises. Ocurre en aproximadamente 1 de cada 33.000 personas.' },
];

export default function ColorBlindness() {
  return (
    <ExampleLayout
      title="Daltonismo: simular deficiencias de visión del color"
      description="1 de cada 12 hombres y 1 de cada 200 mujeres tiene alguna deficiencia de visión del color (CVD). Nunca comuniques información usando solo el color."
      bad={<BadOrderList />}
      good={<GoodOrderList />}
    >
      <section className="mt-10 rounded-xl border-2 border-blue-200 bg-blue-50/40 p-6">
        <h2 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-blue-700">
          <MonitorCog className="h-4 w-4" aria-hidden="true" />
          Probalo en vivo con las DevTools del navegador
        </h2>
        <ol className="list-decimal space-y-1 pl-5 text-sm text-gray-700">
          <li>Abrí las DevTools (<kbd>F12</kbd> o clic derecho → Inspeccionar).</li>
          <li>Abrí el menú <kbd>⋮</kbd> → <strong>More tools</strong> → <strong>Rendering</strong>.</li>
          <li>Buscá la sección <strong>Emulate vision deficiencies</strong>.</li>
          <li>Elegí Protanopia, Deuteranopia, Tritanopia o Achromatopsia y mirá esta página.</li>
        </ol>
        <p className="mt-3 text-xs text-gray-600">
          En Firefox: panel de Accesibilidad → ícono de simulación de visión, arriba a la derecha del panel.
        </p>
      </section>

      <section className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border-2 border-red-200 bg-red-50/40 p-6">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-red-700">Malo: gráfico solo por color</h2>
          <BadChart />
        </div>
        <div className="rounded-xl border-2 border-green-200 bg-green-50/40 p-6">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-green-700">Bueno: valor, texto y patrón</h2>
          <GoodChart />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-700">Tipos de deficiencia de visión del color</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {CVD_TYPES.map((type) => (
            <li key={type.name} className="rounded-lg border border-gray-200 bg-white p-4">
              <p className="font-semibold text-gray-900">{type.name}</p>
              <p className="mt-1 text-sm text-gray-600">{type.detail}</p>
            </li>
          ))}
        </ul>
      </section>
    </ExampleLayout>
  );
}
