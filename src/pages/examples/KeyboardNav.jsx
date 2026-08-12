import { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExampleLayout from './ExampleLayout';

function BadExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div
        onClick={() => setCount((current) => current + 1)}
        className="flex w-fit cursor-pointer items-center gap-2 rounded bg-blue-600 p-3 text-white shadow hover:bg-blue-500">
        <PlusCircle className="h-5 w-5" />
        <span>Añadir proyecto</span>
      </div>
      <p className="mt-3 text-sm text-gray-600">
        Proyectos añadidos: <strong>{count}</strong>
      </p>
      <p className="mt-2 text-sm text-gray-500">
        Es un <code>&lt;div onClick&gt;</code>: probá llegar hasta acá con <kbd>Tab</kbd> y activarlo con{' '}
        <kbd>Enter</kbd> o <kbd>Espacio</kbd>. No se puede.
      </p>
    </div>
  );
}

function GoodExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button
        onClick={() => setCount((current) => current + 1)}
        aria-label="Añadir proyecto"
        className="w-fit gap-2 bg-blue-600 text-white hover:bg-blue-500">
        <PlusCircle className="h-5 w-5" />
        <span>Añadir proyecto</span>
      </Button>
      <p className="mt-3 text-sm text-gray-600">
        Proyectos añadidos: <strong>{count}</strong>
      </p>
      <p className="mt-2 text-sm text-gray-500">
        Es un <code>&lt;button&gt;</code> nativo con <code>aria-label</code>: probá llegar con <kbd>Tab</kbd> y
        activarlo con <kbd>Enter</kbd> o <kbd>Espacio</kbd>. Funciona.
      </p>
    </div>
  );
}

export default function KeyboardNav() {
  return (
    <ExampleLayout
      title="Navegación por teclado"
      description="Todo elemento interactivo debe ser alcanzable y operable con teclado, sin depender del mouse."
      bad={<BadExample />}
      good={<GoodExample />} />
  );
}
