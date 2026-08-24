import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppShell from './AppShell';

function Field({ order, label, id }) {
  return (
    <div>
      <div className="mb-1 flex items-center gap-2">
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">
          {order}
        </span>
        <Label htmlFor={id} className="text-sm text-gray-700">
          {label}
        </Label>
      </div>
      <Input id={id} />
    </div>
  );
}

function BadExample() {
  return (
    <div className="pt-3 pl-3">
      <div className="flex gap-8">
        <div className="flex w-48 flex-col gap-6">
          <Field order={1} label="Nombre" id="bad-nombre" />
          <Field order={2} label="Email" id="bad-email" />
          <Field order={3} label="Empresa" id="bad-empresa" />
          <Field order={4} label="Dirección" id="bad-direccion" />
        </div>
        <div className="flex w-48 flex-col gap-6">
          <Field order={5} label="Apellido" id="bad-apellido" />
          <Field order={6} label="Teléfono" id="bad-telefono" />
          <Field order={7} label="Cargo" id="bad-cargo" />
          <Field order={8} label="Ciudad" id="bad-ciudad" />
        </div>
      </div>
      <p className="mt-8 text-xs text-gray-500">
        Los números marcan el orden real de <kbd>Tab</kbd>. Probá: hacé clic en "Nombre" y tocá <kbd>Tab</kbd> —
        el foco salta de columna en columna en vez de seguir la fila.
      </p>
    </div>
  );
}

function GoodExample() {
  return (
    <div className="pt-3 pl-3">
      <div className="grid w-full max-w-md grid-cols-2 gap-6">
        <Field order={1} label="Nombre" id="good-nombre" />
        <Field order={2} label="Apellido" id="good-apellido" />
        <Field order={3} label="Email" id="good-email" />
        <Field order={4} label="Teléfono" id="good-telefono" />
        <Field order={5} label="Empresa" id="good-empresa" />
        <Field order={6} label="Cargo" id="good-cargo" />
        <Field order={7} label="Dirección" id="good-direccion" />
        <Field order={8} label="Ciudad" id="good-ciudad" />
      </div>
      <p className="mt-8 text-xs text-gray-500">
        El orden del DOM sigue la fila visual: <kbd>Tab</kbd> avanza fila por fila, tal como se lee la pantalla.
      </p>
    </div>
  );
}

export function KeyboardNavBad() {
  return (
    <AppShell active="Contactos" section="Contactos" title="Nuevo contacto">
      <BadExample />
    </AppShell>
  );
}

export function KeyboardNavGood() {
  return (
    <AppShell active="Contactos" section="Contactos" title="Nuevo contacto">
      <GoodExample />
    </AppShell>
  );
}
