import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

function BadExample() {
  return (
    <div className="w-80 rounded-lg border border-slate-200 bg-white p-5">
      <div className="mb-4">
        <Label htmlFor="descriptivelabels-bad-campo1" className="mb-1 block text-sm text-gray-700">
          Campo 1
        </Label>
        <Input id="descriptivelabels-bad-campo1" placeholder="Juan Pérez" />
      </div>
      <div>
        <Label htmlFor="descriptivelabels-bad-dato" className="mb-1 block text-sm text-gray-700">
          Dato
        </Label>
        <Input id="descriptivelabels-bad-dato" type="email" placeholder="juan@empresa.com" />
      </div>
      <Button className="mt-4">Guardar contacto</Button>
    </div>
  );
}

function GoodExample() {
  return (
    <div className="w-80 rounded-lg border border-slate-200 bg-white p-5">
      <div className="mb-4">
        <Label htmlFor="descriptivelabels-good-nombre" className="mb-1 block text-sm text-gray-700">
          Nombre completo
        </Label>
        <Input id="descriptivelabels-good-nombre" placeholder="Juan Pérez" />
      </div>
      <div>
        <Label htmlFor="descriptivelabels-good-email" className="mb-1 block text-sm text-gray-700">
          Correo electrónico
        </Label>
        <Input id="descriptivelabels-good-email" type="email" placeholder="juan@empresa.com" />
      </div>
      <Button className="mt-4">Guardar contacto</Button>
    </div>
  );
}

export function DescriptiveLabelsBad() {
  return (
    <AppShell
      active="Contactos"
      title="Formulario"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            El encabezado dice "Formulario" — no dice de qué formulario se trata — y las etiquetas
            "Campo 1" y "Dato" no describen qué información piden. Técnicamente cada input tiene su{' '}
            <code>label</code> asociado, pero ninguno de los dos textos comunica su propósito.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function DescriptiveLabelsGood() {
  return (
    <AppShell
      active="Contactos"
      title="Nuevo contacto"
      info={
        <InfoBlock title="Encabezado y etiquetas describen su propósito">
          <p className="text-sm text-gray-700">
            El encabezado dice exactamente qué se está haciendo ("Nuevo contacto") y cada etiqueta
            describe el dato que pide ("Nombre completo", "Correo electrónico"), sin necesidad de adivinar
            por el <code>placeholder</code> (WCAG 2.4.6, Encabezados y etiquetas).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
