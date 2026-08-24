import { useState } from 'react';
import { AlertTriangle, CheckCircle2, MonitorCog } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppShell from './AppShell';

function DevToolsInfo() {
  return (
    <section className="mt-10 rounded-xl border-2 border-blue-200 bg-blue-50/40 p-6">
      <h2 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-blue-700">
        <MonitorCog className="h-4 w-4" aria-hidden="true" />
        Probalo en vivo con las DevTools del navegador
      </h2>
      <ol className="list-decimal space-y-1 pl-5 text-sm text-gray-700">
        <li>Abrí las DevTools (<kbd>F12</kbd> o clic derecho → Inspeccionar).</li>
        <li>Abrí el menú <kbd>⋮</kbd> → <strong>More tools</strong> → <strong>Rendering</strong>.</li>
        <li>Buscá la sección <strong>Emulate vision deficiencies</strong>.</li>
        <li>Elegí Protanopia, Deuteranopia, Tritanopia o Achromatopsia y mirá esta página.</li>
      </ol>
      <p className="mt-3 text-xs text-gray-600">
        En Firefox: panel de Accesibilidad → ícono de simulación de visión, arriba a la derecha del panel.
      </p>
    </section>
  );
}

const INVOICES = [
  { id: 'F-2451', cliente: 'Estudio Delgado', monto: '$182.400', estado: 'vencido' },
  { id: 'F-2452', cliente: 'Grupo Iberá', monto: '$94.200', estado: 'al-dia' },
  { id: 'F-2453', cliente: 'Comercial Rioja', monto: '$310.750', estado: 'vencido' },
  { id: 'F-2454', cliente: 'Tech Norte SRL', monto: '$58.900', estado: 'al-dia' },
  { id: 'F-2455', cliente: 'Distribuidora Sur', monto: '$127.300', estado: 'al-dia' },
];

function useSelection() {
  const [selected, setSelected] = useState(new Set());

  const toggle = (id) => {
    setSelected((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    setSelected((current) =>
      current.size === INVOICES.length ? new Set() : new Set(INVOICES.map((invoice) => invoice.id)));
  };

  const vencidasSeleccionadas = INVOICES.filter(
    (invoice) => selected.has(invoice.id) && invoice.estado === 'vencido');

  return { selected, toggle, toggleAll, vencidasSeleccionadas };
}

function BadDataTable() {
  const { selected, toggle, toggleAll, vencidasSeleccionadas } = useSelection();

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">
              <Checkbox
                checked={selected.size === INVOICES.length}
                onCheckedChange={toggleAll}
                aria-label="Seleccionar todas" />
            </TableHead>
            <TableHead>Factura</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead className="text-right">Monto</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {INVOICES.map((invoice) => {
            const isSelected = selected.has(invoice.id);
            const rowClass = isSelected
              ? 'bg-blue-50 hover:bg-blue-50'
              : invoice.estado === 'vencido'
                ? 'bg-red-50 hover:bg-red-100'
                : 'bg-green-50 hover:bg-green-100';

            return (
              <TableRow key={invoice.id} className={rowClass}>
                <TableCell>
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={() => toggle(invoice.id)}
                    aria-label={`Seleccionar factura ${invoice.id}`} />
                </TableCell>
                <TableCell>{invoice.id}</TableCell>
                <TableCell>{invoice.cliente}</TableCell>
                <TableCell className="text-right">{invoice.monto}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <div className="mt-4">
        <Button disabled={vencidasSeleccionadas.length > 0}>Confirmar</Button>
        {vencidasSeleccionadas.length > 0 && (
          <Alert variant="destructive" className="mt-3">
            <AlertTriangle />
            <AlertTitle>No se puede confirmar</AlertTitle>
            <AlertDescription>
              Hay {vencidasSeleccionadas.length} factura(s) vencida(s) seleccionada(s). Deseleccionalas o resolvé la
              deuda antes de confirmar.
            </AlertDescription>
          </Alert>
        )}
      </div>

      <DevToolsInfo />
    </div>
  );
}

function GoodDataTable() {
  const { selected, toggle, toggleAll, vencidasSeleccionadas } = useSelection();

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">
              <Checkbox
                checked={selected.size === INVOICES.length}
                onCheckedChange={toggleAll}
                aria-label="Seleccionar todas" />
            </TableHead>
            <TableHead>Factura</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className="text-right">Monto</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {INVOICES.map((invoice) => {
            const isSelected = selected.has(invoice.id);

            return (
              <TableRow key={invoice.id} data-state={isSelected ? 'selected' : undefined}>
                <TableCell>
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={() => toggle(invoice.id)}
                    aria-label={`Seleccionar factura ${invoice.id}`} />
                </TableCell>
                <TableCell>{invoice.id}</TableCell>
                <TableCell>{invoice.cliente}</TableCell>
                <TableCell>
                  {invoice.estado === 'vencido' ? (
                    <Badge variant="danger">
                      <AlertTriangle data-icon="inline-start" />
                      Vencido
                    </Badge>
                  ) : (
                    <Badge variant="success">
                      <CheckCircle2 data-icon="inline-start" />
                      Al día
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">{invoice.monto}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <div className="mt-4">
        <Button disabled={vencidasSeleccionadas.length > 0}>Confirmar</Button>
        {vencidasSeleccionadas.length > 0 && (
          <Alert variant="destructive" className="mt-3">
            <AlertTriangle />
            <AlertTitle>No se puede confirmar</AlertTitle>
            <AlertDescription>
              Hay {vencidasSeleccionadas.length} factura(s) vencida(s) seleccionada(s). Deseleccionalas o resolvé la
              deuda antes de confirmar.
            </AlertDescription>
          </Alert>
        )}
      </div>

      <DevToolsInfo />
    </div>
  );
}

export function ColorContrastBad() {
  return (
    <AppShell active="Facturas" title="Facturas por cobrar">
      <BadDataTable />
    </AppShell>
  );
}

export function ColorContrastGood() {
  return (
    <AppShell active="Facturas" title="Facturas por cobrar">
      <GoodDataTable />
    </AppShell>
  );
}
