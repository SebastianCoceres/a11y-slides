import { Trash2, Volume2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AppShell from "./AppShell";
import InfoBlock from "./InfoBlock";

const PRODUCTS = [
  {
    id: "p1",
    nombre: "Tornillos M6 (caja x100)",
    ubicacion: "Depósito Norte — estantería B4",
    stock: 24,
  },
  {
    id: "p2",
    nombre: "Guantes de nitrilo (caja x50)",
    ubicacion: "Depósito Sur — estantería A2",
    stock: 8,
  },
  {
    id: "p3",
    nombre: "Cinta aisladora 3M",
    ubicacion: "Depósito Norte — estantería C1",
    stock: 45,
  },
  {
    id: "p4",
    nombre: "Casco de seguridad",
    ubicacion: "Depósito Este — estantería D3",
    stock: 3,
  },
];

const THUMB_SRC =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><rect width="32" height="32" rx="6" fill="#e2e8f0"/><circle cx="12" cy="12" r="2.5" fill="#94a3b8"/><path d="M6 24l7-8 5 5 4-5 6 8" stroke="#94a3b8" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  );

function ProductTable({ good }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-10" />
          <TableHead>Producto</TableHead>
          <TableHead>Ubicación</TableHead>
          <TableHead className="text-right">Stock</TableHead>
          <TableHead className="w-10" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {PRODUCTS.map((p) => (
          <TableRow key={p.id}>
            <TableCell>
              <img
                src={THUMB_SRC}
                alt={good ? "" : p.nombre}
                className="h-8 w-8 rounded object-contain"
              />
            </TableCell>
            <TableCell>{p.nombre}</TableCell>
            <TableCell className="text-gray-500">{p.ubicacion}</TableCell>
            <TableCell className="text-right">{p.stock}</TableCell>
            <TableCell>
              <button
                aria-label={good ? `Eliminar ${p.nombre}` : undefined}
                className="text-gray-400 hover:text-red-600"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function Transcript({ good }) {
  return (
    <div className="mt-4 rounded-md bg-gray-900 p-3 font-mono text-xs text-gray-100">
      <p className="mb-2 flex items-center gap-1.5 font-sans text-gray-400">
        <Volume2 className="h-3.5 w-3.5" />
        Lo que anuncia un lector de pantalla
      </p>
      <div className="space-y-2">
        {PRODUCTS.map((p, i) => (
          <p key={p.id}>
            <span className="text-gray-500">Fila {i + 1}: </span>
            {good ? (
              <>
                "{p.nombre}. {p.ubicacion}. {p.stock}. Eliminar {p.nombre}, botón."
              </>
            ) : (
              <>
                "{p.nombre}, imagen. {p.nombre}. {p.ubicacion}. {p.stock}. botón."
              </>
            )}
          </p>
        ))}
      </div>
    </div>
  );
}

function Example({ good }) {
  return (
    <div>
      <ProductTable good={good} />
      <Transcript good={good} />
    </div>
  );
}

export function AltTextBad() {
  return (
    <AppShell
      active="Inventario"
      title="Productos"
      info={
        <InfoBlock variant="warning" title="Ícono decorativo, no silencioso">
          <p className="text-sm text-gray-700">
            El ícono de cada fila es un placeholder genérico, no una foto real del producto — pero tiene el
            mismo texto que la celda de al lado. Un lector de pantalla anuncia el nombre del producto dos
            veces por fila, y el botón de eliminar no dice a cuál producto corresponde.
          </p>
        </InfoBlock>
      }>
      <Example good={false} />
    </AppShell>
  );
}

export function AltTextGood() {
  return (
    <AppShell
      active="Inventario"
      title="Productos"
      info={
        <InfoBlock title='alt="" para lo decorativo'>
          <p className="text-sm text-gray-700">
            Como el ícono no aporta información que no esté ya en el texto de la fila, se marca{' '}
            <code>alt=""</code> para que el lector de pantalla lo saltee. El botón de eliminar suma un{' '}
            <code>aria-label</code> con el nombre del producto en vez de quedar mudo.
          </p>
        </InfoBlock>
      }>
      <Example good />
    </AppShell>
  );
}
