import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

function BadExample() {
  const [password, setPassword] = useState('');

  return (
    <form
      className="w-80 rounded-lg border border-slate-200 bg-white p-5"
      onSubmit={(event) => event.preventDefault()}>
      <Label htmlFor="bad-login-password" className="mb-1 block text-sm text-gray-700">Contraseña</Label>
      <Input
        id="bad-login-password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        onPaste={(event) => event.preventDefault()}
        autoComplete="off"
      />
      <p className="mt-1.5 text-xs text-gray-500">Por seguridad, no se permite pegar la contraseña.</p>
      <Button type="submit" className="mt-4">Ingresar</Button>
    </form>
  );
}

function GoodExample() {
  const [password, setPassword] = useState('');

  return (
    <form
      className="w-80 rounded-lg border border-slate-200 bg-white p-5"
      onSubmit={(event) => event.preventDefault()}>
      <Label htmlFor="good-login-password" className="mb-1 block text-sm text-gray-700">Contraseña</Label>
      <Input
        id="good-login-password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        autoComplete="current-password"
      />
      <Button type="submit" className="mt-4">Ingresar</Button>
    </form>
  );
}

export function AccessibleAuthBad() {
  return (
    <AppShell
      active="Dashboard"
      title="Iniciar sesión"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            El campo bloquea <code>onPaste</code> con <code>preventDefault()</code>, obligando a tipear la
            contraseña carácter por carácter. Esto rompe gestores de contraseñas y autocompletado del
            navegador, y le agrega a la persona una prueba cognitiva (recordar y transcribir) que no aporta
            ninguna seguridad real.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function AccessibleAuthGood() {
  return (
    <AppShell
      active="Dashboard"
      title="Iniciar sesión"
      info={
        <InfoBlock title="Pegar y autocompletar funcionan">
          <p className="text-sm text-gray-700">
            El input no intercepta el evento de pegado y declara <code>autoComplete="current-password"</code>,
            así que gestores de contraseñas y autocompletado funcionan sin fricción — el login no depende de
            que la persona memorice y transcriba nada (WCAG 3.3.8, Autenticación accesible).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
