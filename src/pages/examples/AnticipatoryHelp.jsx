import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

function validatePhone(raw) {
  const value = raw.trim();
  if (value === '') return 'Ingresá un teléfono.';
  if (!value.startsWith('+')) {
    return 'El teléfono debe incluir el código de país, por ejemplo +54 9 11 1234-5678.';
  }
  return null;
}

function StatusMessage({ id, status }) {
  if (!status) return null;
  return (
    <p
      id={id}
      role={status.kind === 'error' ? 'alert' : 'status'}
      className={`mt-2 flex items-center gap-1.5 text-sm ${status.kind === 'error' ? 'text-red-600' : 'text-gray-700'}`}>
      {status.kind === 'error' && <AlertTriangle className="h-4 w-4 shrink-0" />}
      {status.message}
    </p>
  );
}

function BadExample() {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState(null);
  const inputId = 'bad-contact-phone';
  const statusId = 'bad-contact-phone-status';

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    const message = validatePhone(newValue);
    setStatus(message ? { kind: 'error', message } : null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = validatePhone(value);
    setStatus(message ? { kind: 'error', message } : { kind: 'success', message: 'Contacto guardado.' });
  };

  return (
    <form className="w-80 rounded-lg border border-slate-200 bg-white p-5" onSubmit={handleSubmit} noValidate>
      <Label htmlFor={inputId} className="mb-1 block text-sm text-gray-700">Teléfono</Label>
      <Input
        id={inputId}
        type="tel"
        value={value}
        onChange={handleChange}
        placeholder="+54 9 11 1234-5678"
        aria-invalid={status?.kind === 'error'}
        aria-describedby={status ? statusId : undefined}
      />
      <StatusMessage id={statusId} status={status} />
      <Button type="submit" className="mt-4">Guardar contacto</Button>
    </form>
  );
}

function GoodExample() {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState(null);
  const inputId = 'good-contact-phone';
  const helpId = 'good-contact-phone-help';
  const statusId = 'good-contact-phone-status';

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    const message = validatePhone(newValue);
    setStatus(message ? { kind: 'error', message } : null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = validatePhone(value);
    setStatus(message ? { kind: 'error', message } : { kind: 'success', message: 'Contacto guardado.' });
  };

  return (
    <form className="w-80 rounded-lg border border-slate-200 bg-white p-5" onSubmit={handleSubmit} noValidate>
      <Label htmlFor={inputId} className="mb-1 block text-sm text-gray-700">Teléfono</Label>
      <Input
        id={inputId}
        type="tel"
        value={value}
        onChange={handleChange}
        aria-invalid={status?.kind === 'error'}
        aria-describedby={`${helpId} ${status ? statusId : ''}`.trim()}
      />
      <p id={helpId} className="mt-1.5 text-xs text-gray-500">Incluí el código de país. Ejemplo: +54 9 11 1234-5678.</p>
      <StatusMessage id={statusId} status={status} />
      <Button type="submit" className="mt-4">Guardar contacto</Button>
    </form>
  );
}

export function AnticipatoryHelpBad() {
  return (
    <AppShell
      active="Contactos"
      title="Nuevo contacto"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            El único indicio del formato esperado es el <code>placeholder</code> ("+54 9 11 1234-5678"),
            que desaparece apenas la persona empieza a escribir y no está asociado al campo con{' '}
            <code>aria-describedby</code>. Quien usa lector de pantalla nunca lo escucha, y el resto se
            entera del formato recién cuando falla.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function AnticipatoryHelpGood() {
  return (
    <AppShell
      active="Contactos"
      title="Nuevo contacto"
      info={
        <InfoBlock title="Instrucción visible y asociada">
          <p className="text-sm text-gray-700">
            El formato esperado se muestra en un texto permanente, vinculado al campo con{' '}
            <code>aria-describedby</code>, así todas las personas lo conocen antes de escribir — no
            recién después de un error (WCAG 3.3.2, Etiquetas o instrucciones).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
