import { useState } from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

const MIN_LENGTH = 8;

function isValid(value) {
  return value.length >= MIN_LENGTH && /\d/.test(value);
}

function buildSpecificMessage(value) {
  const missingChars = Math.max(0, MIN_LENGTH - value.length);
  const missingNumber = !/\d/.test(value);
  const parts = [];
  if (missingChars > 0) {
    parts.push(missingChars === 1 ? 'te falta 1 carácter' : `te faltan ${missingChars} caracteres`);
  }
  if (missingNumber) {
    parts.push('necesitás al menos un número');
  }
  return `Todavía no cumple: ${parts.join(' y ')}.`;
}

function BadExample() {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState(null);
  const inputId = 'bad-contact-password';
  const statusId = 'bad-contact-password-status';

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (newValue === '') {
      setStatus(null);
      return;
    }
    setStatus(isValid(newValue) ? null : { kind: 'error', message: 'Contraseña inválida.' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid(value)) {
      setStatus({ kind: 'error', message: 'Contraseña inválida.' });
      return;
    }
    setStatus({ kind: 'success', message: 'Acceso configurado correctamente.' });
  };

  return (
    <form className="w-80 rounded-lg border border-slate-200 bg-white p-5" onSubmit={handleSubmit} noValidate>
      <Label htmlFor={inputId} className="mb-1 block text-sm text-gray-700">Nueva contraseña</Label>
      <Input
        id={inputId}
        type="password"
        value={value}
        onChange={handleChange}
        aria-invalid={status?.kind === 'error'}
        aria-describedby={status ? statusId : undefined}
      />
      {status && (
        <p
          id={statusId}
          role={status.kind === 'error' ? 'alert' : 'status'}
          className={`mt-2 flex items-center gap-1.5 text-sm ${status.kind === 'error' ? 'text-red-600' : 'text-gray-700'}`}>
          {status.kind === 'error' && <AlertTriangle className="h-4 w-4 shrink-0" />}
          {status.kind === 'success' && <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" />}
          {status.message}
        </p>
      )}
      <Button type="submit" className="mt-4">Guardar acceso</Button>
    </form>
  );
}

function GoodExample() {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState(null);
  const inputId = 'good-contact-password';
  const statusId = 'good-contact-password-status';

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (newValue === '') {
      setStatus(null);
      return;
    }
    setStatus(isValid(newValue) ? null : { kind: 'error', message: buildSpecificMessage(newValue) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid(value)) {
      setStatus({ kind: 'error', message: buildSpecificMessage(value) });
      return;
    }
    setStatus({ kind: 'success', message: 'Acceso configurado correctamente.' });
  };

  return (
    <form className="w-80 rounded-lg border border-slate-200 bg-white p-5" onSubmit={handleSubmit} noValidate>
      <Label htmlFor={inputId} className="mb-1 block text-sm text-gray-700">Nueva contraseña</Label>
      <Input
        id={inputId}
        type="password"
        value={value}
        onChange={handleChange}
        aria-invalid={status?.kind === 'error'}
        aria-describedby={status ? statusId : undefined}
      />
      {status && (
        <p
          id={statusId}
          role={status.kind === 'error' ? 'alert' : 'status'}
          className={`mt-2 flex items-center gap-1.5 text-sm ${status.kind === 'error' ? 'text-red-600' : 'text-gray-700'}`}>
          {status.kind === 'error' && <AlertTriangle className="h-4 w-4 shrink-0" />}
          {status.kind === 'success' && <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" />}
          {status.message}
        </p>
      )}
      <Button type="submit" className="mt-4">Guardar acceso</Button>
    </form>
  );
}

export function ErrorSuggestionBad() {
  return (
    <AppShell
      active="Contactos"
      title="Nuevo acceso de contacto"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            El error identifica que algo está mal, pero el mensaje ("Contraseña inválida") es genérico y no
            dice qué corregir. Da igual si falta un carácter o el número: quien lo lee tiene que adivinar qué
            regla incumplió.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function ErrorSuggestionGood() {
  return (
    <AppShell
      active="Contactos"
      title="Nuevo acceso de contacto"
      info={
        <InfoBlock title="Sugerencia específica y accionable">
          <p className="text-sm text-gray-700">
            El mensaje se recalcula en cada tecleo comparando el valor actual contra las reglas, y dice
            exactamente qué falta ("te faltan 3 caracteres y necesitás al menos un número") en vez de un
            genérico "inválida" (WCAG 3.3.3, Sugerencia ante errores).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
