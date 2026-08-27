import { ChevronRight } from 'lucide-react';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

const INVOICES = [
  { id: 'F-2601', cliente: 'Estudio Delgado', monto: '$182.400' },
  { id: 'F-2602', cliente: 'Grupo Iberá', monto: '$94.200' },
  { id: 'F-2603', cliente: 'Comercial Rioja', monto: '$310.750' },
];

function InvoiceRow({ invoice, children }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-100 py-3 last:border-0">
      <div>
        <p className="text-sm font-semibold text-slate-900">{invoice.id}</p>
        <p className="text-xs text-gray-500">
          {invoice.cliente} · {invoice.monto}
        </p>
      </div>
      {children}
    </div>
  );
}

function BadExample() {
  return (
    <div className="w-[26rem] rounded-lg border border-slate-200 bg-white p-5">
      {INVOICES.map((invoice) => (
        <InvoiceRow key={invoice.id} invoice={invoice}>
          <a
            href="#"
            onClick={(event) => event.preventDefault()}
            className="flex items-center gap-1 text-sm font-medium text-indigo-600 hover:underline">
            Ver más
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </InvoiceRow>
      ))}
    </div>
  );
}

function GoodExample() {
  return (
    <div className="w-[26rem] rounded-lg border border-slate-200 bg-white p-5">
      {INVOICES.map((invoice) => (
        <InvoiceRow key={invoice.id} invoice={invoice}>
          <a
            href="#"
            onClick={(event) => event.preventDefault()}
            aria-label={`Ver más sobre la factura ${invoice.id} de ${invoice.cliente}`}
            className="flex items-center gap-1 text-sm font-medium text-indigo-600 hover:underline">
            Ver más
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </InvoiceRow>
      ))}
    </div>
  );
}

export function LinkPurposeBad() {
  return (
    <AppShell
      active="Facturas"
      title="Facturas"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            Los tres links dicen exactamente lo mismo: "Ver más". Alguien que navega con lector de
            pantalla y pide el listado de enlaces de la página escucha "Ver más, Ver más, Ver más" sin
            ninguna forma de distinguir a qué factura corresponde cada uno.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function LinkPurposeGood() {
  return (
    <AppShell
      active="Facturas"
      title="Facturas"
      info={
        <InfoBlock title="Nombre accesible distinto por enlace">
          <p className="text-sm text-gray-700">
            El texto visible sigue diciendo "Ver más", pero cada link tiene un <code>aria-label</code>{' '}
            que agrega a qué factura se refiere. En el mismo listado de enlaces del lector de pantalla,
            ahora se distingue cada uno sin ambigüedad (WCAG 2.4.4, Propósito del enlace en contexto).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
