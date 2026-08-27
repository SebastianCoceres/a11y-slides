import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

const MAX_STOCK = 15;

function BadExample() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const submit = () => {
    const n = Number(value);
    if (n > MAX_STOCK) {
      setError(`No podés cargar más de ${MAX_STOCK} unidades.`);
    } else {
      setError(null);
    }
  };

  return (
    <div className="w-80 rounded-lg border border-slate-200 bg-white p-5">
      <Label className="mb-1 block text-sm text-gray-700">Cantidad a cargar</Label>
      <Input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="0" />
      <Button onClick={submit} className="mt-4">Cargar</Button>
      {error && (
        <p className="mt-3 flex items-center gap-1.5 text-sm text-red-600">
          <AlertTriangle className="h-4 w-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

function GoodExample() {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState(null); // { kind: 'error' | 'success', message: string }
  const inputId = 'good-stock-quantity';
  const helpId = 'good-stock-quantity-help';
  const statusId = 'good-stock-quantity-status';

  const handleSubmit = (event) => {
    event.preventDefault();
    const quantity = Number(value);
    if (!Number.isFinite(quantity) || value === '' || quantity < 0 || quantity > MAX_STOCK) {
      setStatus({ kind: 'error', message: `Ingresá una cantidad entre 0 y ${MAX_STOCK}.` });
      return;
    }
    setStatus({ kind: 'success', message: 'Stock cargado correctamente.' });
  };

  return (
    <form className="w-80 rounded-lg border border-slate-200 bg-white p-5" onSubmit={handleSubmit} noValidate>
      <Label htmlFor={inputId} className="mb-1 block text-sm text-gray-700">Cantidad a cargar</Label>
      <Input
        id={inputId}
        name="quantity"
        type="number"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          setStatus(null);
        }}
        min="0"
        max={MAX_STOCK}
        required
        aria-invalid={status?.kind === 'error'}
        aria-describedby={`${helpId} ${status ? statusId : ''}`.trim()}
        placeholder="0"
      />
      <p id={helpId} className="mt-1.5 text-xs text-gray-500">Máximo {MAX_STOCK} unidades disponibles.</p>
      {status && (
        <p id={statusId} role={status.kind === 'error' ? 'alert' : 'status'} className="mt-2 text-sm text-gray-700">
          {status.message}
        </p>
      )}
      <Button type="submit" className="mt-4">Cargar</Button>
    </form>
  );
}

export function ErrorPreventionBad() {
  return (
    <AppShell
      active="Inventario"
      title="Cargar stock"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            El error aparece como texto suelto debajo del input, sin <code>aria-describedby</code> ni{' '}
            <code>aria-invalid</code> que lo asocien al campo, y solo se valida al hacer submit — nunca
            antes. Quien usa lector de pantalla no se entera de qué campo falló ni por qué.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function ErrorPreventionGood() {
  return (
    <AppShell
      active="Inventario"
      title="Cargar stock"
      info={
        <InfoBlock title="Error identificado y asociado al campo">
          <p className="text-sm text-gray-700">
            El input valida en tiempo real (<code>min</code>, <code>max</code>, <code>required</code>) y
            linkea el mensaje al campo con <code>aria-describedby</code> + <code>aria-invalid</code>, con{' '}
            <code>role="alert"</code> para que se anuncie apenas aparece (WCAG 3.3.1, Identificación de
            errores).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
