import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppShell from './AppShell';

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

  const handleChange = (e) => {
    const raw = e.target.value;
    if (raw === '') return setValue('');
    const n = Math.max(0, Math.min(MAX_STOCK, Number(raw)));
    setValue(String(n));
  };

  return (
    <div className="w-80 rounded-lg border border-slate-200 bg-white p-5">
      <Label className="mb-1 block text-sm text-gray-700">Cantidad a cargar</Label>
      <Input type="number" value={value} onChange={handleChange} max={MAX_STOCK} placeholder="0" />
      <p className="mt-1.5 text-xs text-gray-500">Máximo {MAX_STOCK} unidades disponibles.</p>
      <Button className="mt-4">Cargar</Button>
    </div>
  );
}

export function ErrorPreventionBad() {
  return (
    <AppShell active="Inventario" title="Cargar stock">
      <BadExample />
    </AppShell>
  );
}

export function ErrorPreventionGood() {
  return (
    <AppShell active="Inventario" title="Cargar stock">
      <GoodExample />
    </AppShell>
  );
}
