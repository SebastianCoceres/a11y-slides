import { useEffect, useState } from 'react';
import { FilePlus, Keyboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

function isEditableTarget(target) {
  if (!target) return false;
  return target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;
}

function BadExample() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState('');

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key.toLowerCase() === 'n') {
        setCount((c) => c + 1);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="w-96 rounded-lg border border-slate-200 bg-white p-5">
      <p className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
        <Keyboard className="h-4 w-4 shrink-0" />
        La tecla "N", en cualquier parte de la página, crea una factura nueva.
      </p>
      <p className="mt-3 text-2xl font-bold text-indigo-600">{count}</p>
      <p className="text-xs text-gray-500">facturas creadas por atajo</p>

      <div className="mt-5">
        <Label htmlFor="bad-shortcut-search" className="mb-1 block text-sm text-gray-700">Buscar factura</Label>
        <Input
          id="bad-shortcut-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Probá escribir "factura nueva" acá' />
      </div>
    </div>
  );
}

function GoodExample() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState('');

  const createInvoice = () => setCount((c) => c + 1);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key.toLowerCase() !== 'n') return;
      if (isEditableTarget(document.activeElement)) return;
      createInvoice();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="w-96 rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
          <Keyboard className="h-4 w-4 shrink-0" />
          Atajo "N" activo solo fuera de campos de texto
        </p>
        <Button type="button" size="sm" onClick={createInvoice}>
          <FilePlus className="h-4 w-4" />
          Nueva factura
        </Button>
      </div>
      <p className="mt-3 text-2xl font-bold text-indigo-600">{count}</p>
      <p className="text-xs text-gray-500">facturas creadas</p>

      <div className="mt-5">
        <Label htmlFor="good-shortcut-search" className="mb-1 block text-sm text-gray-700">Buscar factura</Label>
        <Input
          id="good-shortcut-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Escribí "factura nueva" sin que se dispare el atajo' />
      </div>
    </div>
  );
}

export function SingleCharShortcutsBad() {
  return (
    <AppShell
      active="Facturas"
      title="Atajo de teclado: nueva factura"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            El listener de teclado dispara la acción con solo apretar "N", sin chequear en qué elemento
            está el foco. Alguien que dicta texto por voz o escribe con dificultad motriz en el buscador
            crea facturas sin querer cada vez que su texto contiene esa letra.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function SingleCharShortcutsGood() {
  return (
    <AppShell
      active="Facturas"
      title="Atajo de teclado: nueva factura"
      info={
        <InfoBlock title="Atajo desactivado dentro de campos editables">
          <p className="text-sm text-gray-700">
            El mismo atajo revisa <code>document.activeElement</code> antes de actuar: si el foco está en
            un input, textarea o contenido editable, la tecla "N" se escribe normal. Además hay un botón
            visible equivalente, así el atajo nunca es la única forma de disparar la acción (WCAG 2.1.4,
            Atajos de un solo carácter).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
