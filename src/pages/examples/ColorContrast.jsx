import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ExampleLayout from './ExampleLayout';

const TAKEN_USERNAME = 'usuario_incorrecto';

function useUsernameValidation() {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);
  const isInvalid = touched && value.trim() === TAKEN_USERNAME;

  return {
    value,
    isInvalid,
    onChange: (event) => setValue(event.target.value),
    onBlur: () => setTouched(true),
  };
}

function BadExample() {
  const field = useUsernameValidation();

  return (
    <div>
      <label htmlFor="bad-username" className="mb-1 block text-sm text-gray-400">
        Nombre de usuario
      </label>
      <input
        id="bad-username"
        type="text"
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        placeholder="Probá con usuario_incorrecto"
        className={`w-full rounded border p-2 text-sm text-gray-400 outline-none ${
          field.isInvalid ? 'border-red-400' : 'border-gray-300'
        }`} />
      <p className="mt-2 text-xs text-gray-400">
        Sin mensaje de error visible: si escribís <code>usuario_incorrecto</code> y salís del campo, solo cambia el color del borde.
      </p>
    </div>
  );
}

function GoodExample() {
  const field = useUsernameValidation();

  return (
    <div>
      <Label htmlFor="good-username" className="mb-1 block text-sm text-gray-900">
        Nombre de usuario
      </Label>
      <div className="relative">
        <Input
          id="good-username"
          type="text"
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          placeholder="Probá con usuario_incorrecto"
          aria-invalid={field.isInvalid}
          aria-describedby={field.isInvalid ? 'good-username-error' : undefined}
          className="pr-9 text-gray-900" />
        {field.isInvalid && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <AlertCircle className="h-5 w-5 text-red-600" aria-hidden="true" />
          </div>
        )}
      </div>
      {field.isInvalid && (
        <p id="good-username-error" className="mt-2 text-sm font-medium text-red-700">
          Este nombre de usuario ya está en uso.
        </p>
      )}
      <p className="mt-2 text-xs text-gray-500">
        Escribí <code>usuario_incorrecto</code> y salí del campo: el error se anuncia con color, ícono y texto.
      </p>
    </div>
  );
}

const TITLE = 'Contraste de color y dependencia del color';
const DESCRIPTION =
  'La información de error nunca debe depender únicamente del color: usuarios con baja visión o daltonismo necesitan texto y contraste suficiente.';

export function ColorContrastBad() {
  return <ExampleLayout title={TITLE} description={DESCRIPTION} bad={<BadExample />} />;
}

export function ColorContrastGood() {
  return <ExampleLayout title={TITLE} description={DESCRIPTION} good={<GoodExample />} />;
}
