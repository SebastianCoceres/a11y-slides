import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

function Field({ label, id, placeholder, className }) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-1 block text-sm text-gray-700">
        {label}
      </Label>
      <Input id={id} placeholder={placeholder} />
    </div>
  );
}

function BadExample() {
  return (
    <div className="w-96 rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex flex-wrap gap-4">
        {/* El DOM dice Email → Nombre → Empresa; las clases order-* lo muestran Nombre → Empresa → Email */}
        <Field label="Email" id="bad-email" placeholder="nombre@empresa.com" className="order-3 w-full" />
        <Field label="Nombre" id="bad-nombre" placeholder="Juan" className="order-1 w-[calc(50%-8px)]" />
        <Field label="Empresa" id="bad-empresa" placeholder="Estudio Delgado" className="order-2 w-[calc(50%-8px)]" />
      </div>
      <Button className="mt-4">Guardar contacto</Button>
    </div>
  );
}

function GoodExample() {
  return (
    <div className="w-96 rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex flex-wrap gap-4">
        <Field label="Nombre" id="good-nombre" placeholder="Juan" className="w-[calc(50%-8px)]" />
        <Field label="Empresa" id="good-empresa" placeholder="Estudio Delgado" className="w-[calc(50%-8px)]" />
        <Field label="Email" id="good-email" placeholder="nombre@empresa.com" className="w-full" />
      </div>
      <Button className="mt-4">Guardar contacto</Button>
    </div>
  );
}

export function MeaningfulSequenceBad() {
  return (
    <AppShell
      active="Contactos"
      title="Nuevo contacto"
      info={
        <InfoBlock variant="warning" title="El orden visual engaña">
          <p className="text-sm text-gray-700">
            Las clases <code>order-*</code> muestran Nombre, Empresa, Email — pero el DOM sigue diciendo
            Email, Nombre, Empresa. Con Tab o un lector de pantalla, el formulario se completa en ese orden
            confuso, no en el que se ve en pantalla.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function MeaningfulSequenceGood() {
  return (
    <AppShell
      active="Contactos"
      title="Nuevo contacto"
      info={
        <InfoBlock title="Por qué importa el orden del DOM">
          <p className="text-sm text-gray-700">
            Clases como <code>order-1</code>/<code>order-2</code> solo cambian el orden visual. Un lector
            de pantalla o alguien navegando con Tab sigue el orden del DOM: acá pasaba de Email a Nombre a
            Empresa, aunque en pantalla se viera Nombre, Empresa, Email. La solución es que el orden del
            marcado ya sea el orden correcto.
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
