import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

function ResultsList() {
  return (
    <ul className="mt-4 divide-y divide-slate-100 border-t border-slate-100">
      <li className="flex items-center justify-between py-2.5 text-sm">
        <span className="font-medium text-gray-900">F-2451</span>
        <span className="text-gray-500">Grupo Andina SRL</span>
        <span className="text-gray-500">$184.300</span>
      </li>
      <li className="flex items-center justify-between py-2.5 text-sm">
        <span className="font-medium text-gray-900">F-2452</span>
        <span className="text-gray-500">Comercial del Sur</span>
        <span className="text-gray-500">$62.900</span>
      </li>
    </ul>
  );
}

function SearchBar({ ariaLabel }) {
  const [value, setValue] = useState('');

  return (
    <div className="flex items-center gap-2">
      <Label htmlFor="invoice-search" className="sr-only">Buscar facturas</Label>
      <Input
        id="invoice-search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Número de factura o cliente"
        className="w-56" />
      <Button type="button" aria-label={ariaLabel}>
        <Search className="h-4 w-4" />
        Buscar
      </Button>
    </div>
  );
}

function BadExample() {
  return (
    <div className="w-[26rem] rounded-lg border border-slate-200 bg-white p-5">
      <p className="mb-3 text-sm font-semibold text-gray-900">Facturas emitidas</p>
      <SearchBar ariaLabel="Consulta rápida" />
      <ResultsList />
    </div>
  );
}

function GoodExample() {
  return (
    <div className="w-[26rem] rounded-lg border border-slate-200 bg-white p-5">
      <p className="mb-3 text-sm font-semibold text-gray-900">Facturas emitidas</p>
      <SearchBar ariaLabel="Buscar facturas por número o cliente" />
      <ResultsList />
    </div>
  );
}

export function LabelInNameBad() {
  return (
    <AppShell
      active="Facturas"
      title="Buscador de facturas"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            El botón muestra el texto "Buscar", pero su nombre accesible es <code>aria-label="Consulta
            rápida"</code> — no contiene esa palabra. Alguien que controla la pantalla por voz y dice
            "click en Buscar" no encuentra ningún control con ese nombre.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function LabelInNameGood() {
  return (
    <AppShell
      active="Facturas"
      title="Buscador de facturas"
      info={
        <InfoBlock title="Nombre accesible con el texto visible">
          <p className="text-sm text-gray-700">
            El <code>aria-label</code> ahora empieza con el mismo texto visible del botón ("Buscar
            facturas..."), así el comando de voz "click en Buscar" encuentra el control (WCAG 2.5.3,
            Etiqueta en el nombre).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
