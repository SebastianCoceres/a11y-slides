import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

const PRODUCTS = [
  { sku: 'INV-001', nombre: 'Resma de papel A4', stock: 120 },
  { sku: 'INV-002', nombre: 'Cartucho de tinta negro', stock: 8 },
  { sku: 'INV-003', nombre: 'Cartucho de tinta color', stock: 5 },
  { sku: 'INV-004', nombre: 'Caja de biromes azules', stock: 60 },
  { sku: 'INV-005', nombre: 'Carpeta A4 con solapa', stock: 34 },
  { sku: 'INV-006', nombre: 'Caja de grampas estándar', stock: 200 },
  { sku: 'INV-007', nombre: 'Cinta adhesiva ancha', stock: 45 },
  { sku: 'INV-008', nombre: 'Etiquetas autoadhesivas', stock: 15 },
  { sku: 'INV-009', nombre: 'Tóner para impresora láser', stock: 3 },
  { sku: 'INV-010', nombre: 'Caja de folios oficio', stock: 90 },
  { sku: 'INV-011', nombre: 'Marcador permanente negro', stock: 25 },
  { sku: 'INV-012', nombre: 'Sobre mediano blanco', stock: 300 },
  { sku: 'INV-013', nombre: 'Silla de oficina ergonómica', stock: 4 },
  { sku: 'INV-014', nombre: 'Monitor 24" Full HD', stock: 6 },
  { sku: 'INV-015', nombre: 'Teclado inalámbrico', stock: 18 },
  { sku: 'INV-016', nombre: 'Mouse óptico USB', stock: 22 },
  { sku: 'INV-017', nombre: 'Auriculares con micrófono', stock: 10 },
  { sku: 'INV-018', nombre: 'Cable HDMI de 2 metros', stock: 40 },
];

function ProductTable({ products }) {
  return (
    <table className="w-full text-left text-sm">
      <thead>
        <tr className="border-b border-slate-200 text-xs font-semibold tracking-wide text-gray-500 uppercase">
          <th className="py-2 pr-4">SKU</th>
          <th className="py-2 pr-4">Producto</th>
          <th className="py-2 text-right">Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.sku} className="border-b border-slate-100 last:border-0">
            <td className="py-2 pr-4 text-gray-500">{product.sku}</td>
            <td className="py-2 pr-4 font-medium text-slate-900">{product.nombre}</td>
            <td className="py-2 text-right text-gray-700">{product.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function BadExample() {
  return (
    <div className="h-80 w-[30rem] overflow-y-auto rounded-lg border border-slate-200 bg-white p-5">
      <ProductTable products={PRODUCTS} />
    </div>
  );
}

function GoodExample() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTS;
    return PRODUCTS.filter(
      (product) => product.nombre.toLowerCase().includes(q) || product.sku.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="w-[30rem] rounded-lg border border-slate-200 bg-white p-5">
      <div className="relative mb-3">
        <Search
          className="pointer-events-none absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
          aria-hidden="true" />
        <Input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar por nombre o SKU..."
          aria-label="Buscar producto en el inventario"
          className="pl-8" />
      </div>
      <div className="h-72 overflow-y-auto">
        {filtered.length > 0 ? (
          <ProductTable products={filtered} />
        ) : (
          <p className="py-6 text-center text-sm text-gray-500">Sin resultados para "{query}".</p>
        )}
      </div>
    </div>
  );
}

export function MultipleWaysBad() {
  return (
    <AppShell
      active="Inventario"
      title="Inventario"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            La única forma de encontrar un producto es scrollear los 18 ítems uno por uno: no hay
            buscador, ni filtro, ni forma de saltar directo a uno. En un inventario real con cientos de
            SKUs, esto vuelve la tarea prácticamente inviable.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function MultipleWaysGood() {
  return (
    <AppShell
      active="Inventario"
      title="Inventario"
      info={
        <InfoBlock title="Buscador con filtro en tiempo real">
          <p className="text-sm text-gray-700">
            El input filtra la lista a medida que se escribe, por nombre o por SKU, así encontrar un
            producto no depende de memorizar en qué posición del scroll está (WCAG 2.4.5, Múltiples vías).
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
