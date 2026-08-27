import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

const EMPTY_ADDRESS = { street: '', city: '' };

function AddressFields({ legend, idPrefix, value, onChange, disabled }) {
  const handleField = (field) => (event) => {
    onChange({ ...value, [field]: event.target.value });
  };

  return (
    <fieldset className="space-y-3">
      <legend className="mb-1 text-sm font-semibold text-gray-900">{legend}</legend>
      <div className="grid gap-1.5">
        <Label htmlFor={`${idPrefix}-street`}>Calle</Label>
        <Input id={`${idPrefix}-street`} value={value.street} onChange={handleField('street')} disabled={disabled} />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor={`${idPrefix}-city`}>Ciudad</Label>
        <Input id={`${idPrefix}-city`} value={value.city} onChange={handleField('city')} disabled={disabled} />
      </div>
    </fieldset>
  );
}

function BadExample() {
  const [billing, setBilling] = useState(EMPTY_ADDRESS);
  const [shipping, setShipping] = useState(EMPTY_ADDRESS);

  return (
    <form
      className="w-full max-w-md space-y-6 rounded-lg border border-slate-200 bg-white p-5"
      onSubmit={(event) => event.preventDefault()}>
      <AddressFields legend="Dirección de facturación" idPrefix="bad-billing" value={billing} onChange={setBilling} />
      <AddressFields legend="Dirección de envío" idPrefix="bad-shipping" value={shipping} onChange={setShipping} />
      <Button type="submit">Guardar direcciones</Button>
    </form>
  );
}

function GoodExample() {
  const [billing, setBilling] = useState(EMPTY_ADDRESS);
  const [shipping, setShipping] = useState(EMPTY_ADDRESS);
  const [sameAddress, setSameAddress] = useState(false);
  const checkboxId = 'good-same-address';

  useEffect(() => {
    if (sameAddress) setShipping(billing);
  }, [sameAddress, billing]);

  return (
    <form
      className="w-full max-w-md space-y-6 rounded-lg border border-slate-200 bg-white p-5"
      onSubmit={(event) => event.preventDefault()}>
      <AddressFields legend="Dirección de facturación" idPrefix="good-billing" value={billing} onChange={setBilling} />

      <div className="flex items-center gap-2">
        <Checkbox id={checkboxId} checked={sameAddress} onCheckedChange={setSameAddress} />
        <Label htmlFor={checkboxId}>Usar la misma dirección para el envío</Label>
      </div>

      <AddressFields
        legend="Dirección de envío"
        idPrefix="good-shipping"
        value={sameAddress ? billing : shipping}
        onChange={setShipping}
        disabled={sameAddress}
      />

      <Button type="submit">Guardar direcciones</Button>
    </form>
  );
}

export function RedundantEntryBad() {
  return (
    <AppShell
      active="Facturas"
      title="Direcciones de facturación y envío"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            Cuando la dirección de envío es igual a la de facturación, no hay ningún atajo: hay que
            retipear calle y ciudad de cero en la segunda sección, aunque el dato ya se cargó arriba.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function RedundantEntryGood() {
  return (
    <AppShell
      active="Facturas"
      title="Direcciones de facturación y envío"
      info={
        <InfoBlock title="La información ya provista se reutiliza">
          <p className="text-sm text-gray-700">
            El checkbox "Usar la misma dirección para el envío" copia los valores de facturación en tiempo
            real y deshabilita esos campos — nadie tiene que reingresar un dato que ya escribió en el mismo
            proceso (WCAG 3.3.7, Entrada redundante).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
