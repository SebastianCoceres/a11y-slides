import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

function BadExample() {
  return (
    <form className="w-80 rounded-lg border border-slate-200 bg-white p-5" onSubmit={(e) => e.preventDefault()}>
      <Label htmlFor="bad-email" className="mb-1 block text-sm text-gray-700">
        Email
      </Label>
      <Input id="bad-email" name="email" type="text" placeholder="nombre@empresa.com" />
      <Label htmlFor="bad-tel" className="mt-4 mb-1 block text-sm text-gray-700">
        Teléfono
      </Label>
      <Input id="bad-tel" name="tel" type="text" placeholder="11 5555-0100" />
      <Button className="mt-4">Guardar</Button>
    </form>
  );
}

function GoodExample() {
  return (
    <form className="w-80 rounded-lg border border-slate-200 bg-white p-5" onSubmit={(e) => e.preventDefault()}>
      <Label htmlFor="good-email" className="mb-1 block text-sm text-gray-700">
        Email
      </Label>
      <Input id="good-email" name="email" type="email" autoComplete="email" placeholder="nombre@empresa.com" />
      <Label htmlFor="good-tel" className="mt-4 mb-1 block text-sm text-gray-700">
        Teléfono
      </Label>
      <Input id="good-tel" name="tel" type="tel" autoComplete="tel" placeholder="11 5555-0100" />
      <Button className="mt-4">Guardar</Button>
    </form>
  );
}

export function InputPurposeBad() {
  return (
    <AppShell
      active="Contactos"
      title="Editar datos de contacto"
      info={
        <InfoBlock variant="warning" title="Cada formulario, de cero">
          <p className="text-sm text-gray-700">
            Sin <code>type</code> ni <code>autoComplete</code>, el navegador no sabe que ese campo es un
            email o un teléfono: no ofrece autocompletado, ni el teclado correcto en mobile, ni valida el
            formato antes de enviar.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function InputPurposeGood() {
  return (
    <AppShell
      active="Contactos"
      title="Editar datos de contacto"
      info={
        <InfoBlock title="Qué desbloquea autocomplete">
          <p className="text-sm text-gray-700">
            <code>type="email"</code> habilita el teclado correcto en mobile y valida el formato;{' '}
            <code>autoComplete="email"</code>/<code>"tel"</code> le dice al navegador y a los gestores de
            contraseñas qué dato de perfil ofrecer, para no volver a tipearlo a mano.
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
