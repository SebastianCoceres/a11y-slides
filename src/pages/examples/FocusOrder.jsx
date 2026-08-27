import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

function Field({ label, id, placeholder, type = 'text', className }) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-1 block text-sm text-gray-700">
        {label}
      </Label>
      <Input id={id} type={type} placeholder={placeholder} />
    </div>
  );
}

function BadExample() {
  return (
    <div className="w-96 rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex flex-wrap gap-4">
        <Field label="Empresa" id="focusorder-bad-empresa" placeholder="Estudio Delgado" className="order-3 w-full" />
        <Field label="Nombre" id="focusorder-bad-nombre" placeholder="Juan Pérez" className="order-1 w-[calc(50%-8px)]" />
        <Field
          label="Teléfono"
          id="focusorder-bad-telefono"
          type="tel"
          placeholder="+54 9 11 1234-5678"
          className="order-2 w-[calc(50%-8px)]" />
      </div>
      <Button className="mt-4">Guardar contacto</Button>
    </div>
  );
}

function GoodExample() {
  return (
    <div className="w-96 rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex flex-wrap gap-4">
        <Field label="Nombre" id="focusorder-good-nombre" placeholder="Juan Pérez" className="w-[calc(50%-8px)]" />
        <Field
          label="Teléfono"
          id="focusorder-good-telefono"
          type="tel"
          placeholder="+54 9 11 1234-5678"
          className="w-[calc(50%-8px)]" />
        <Field label="Empresa" id="focusorder-good-empresa" placeholder="Estudio Delgado" className="w-full" />
      </div>
      <Button className="mt-4">Guardar contacto</Button>
    </div>
  );
}

export function FocusOrderBad() {
  return (
    <AppShell
      active="Contactos"
      title="Nuevo contacto"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            Probá tabular por el formulario. Las clases <code>order-*</code> muestran Nombre, Teléfono,
            Empresa en pantalla, pero el DOM sigue diciendo Empresa, Nombre, Teléfono. El foco arranca en
            el campo que visualmente está abajo de todo y después salta hacia arriba — un orden que no
            tiene sentido para quien navega con teclado o lector de pantalla.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function FocusOrderGood() {
  return (
    <AppShell
      active="Contactos"
      title="Nuevo contacto"
      info={
        <InfoBlock title="El DOM ya está en el orden correcto">
          <p className="text-sm text-gray-700">
            Probá tabular de nuevo: el foco pasa de Nombre a Teléfono a Empresa, exactamente como se ve en
            pantalla, porque ninguna clase <code>order-*</code> reordena el marcado visualmente (WCAG
            2.4.3, Orden del foco).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
