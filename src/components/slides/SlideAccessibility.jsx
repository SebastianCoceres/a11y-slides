import { Slide } from '@/components/deck';
import { ArrowUpRight, MousePointer2, Keyboard } from 'lucide-react';

const linkClasses =
  'inline-flex items-center gap-2 rounded-lg border border-yellow-300/40 px-4 py-2 text-sm font-semibold text-yellow-300 transition-colors hover:bg-yellow-300/10';

function ExampleLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClasses}>
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}

export function SlideColorUsage() {
  return (
    <Slide>
      <h2 className="text-3xl text-yellow-300 mb-2">Uso de color adecuado</h2>
      <p className="text-base text-gray-400 mb-4 italic">No es un feature, es un requerimiento.</p>

      <ul className="max-w-3xl mx-auto text-left text-gray-300 list-disc pl-5 space-y-1.5 mb-6">
        <li>Un error comunicado solo con un borde rojo es invisible para daltonismo o baja visión.</li>
        <li>La versión accesible suma contraste AA, ícono y mensaje de texto explícito.</li>
        <li>Considerar protanopia, deuteranopia, tritanopia y acromatopsia: nunca depender solo del color.</li>
      </ul>

      <div className="flex justify-center gap-4">
        <ExampleLink href="/ejemplos/contraste-color">Ver ejemplo interactivo</ExampleLink>
        <ExampleLink href="/ejemplos/daltonismo">Simular daltonismo</ExampleLink>
      </div>
    </Slide>
  );
}

export function SlideTypography() {
  return (
    <Slide>
      <h2 className="text-3xl text-yellow-300 mb-6">Tipografía legible</h2>

      <ul className="max-w-3xl mx-auto text-left text-gray-300 list-disc pl-5 space-y-1.5 mb-6">
        <li>Texto diminuto, sin interlineado y bajo contraste exige un esfuerzo innecesario para leer.</li>
        <li>Jerarquía clara, tamaño legible e interlineado de 1.5 hacen que el texto se lea sin esfuerzo.</li>
      </ul>

      <div className="flex justify-center">
        <ExampleLink href="/ejemplos/tipografia">Ver ejemplo interactivo</ExampleLink>
      </div>
    </Slide>
  );
}

export function SlideKeyboardNav() {
  return (
    <Slide>
      <h2 className="text-3xl text-yellow-300 mb-6">Navegación por teclado</h2>
      <div className="flex items-center justify-center gap-4 mb-6 text-gray-400">
        <MousePointer2 className="w-6 h-6" /> <span className="line-through text-red-400">Dependencia del ratón</span>
        <span className="mx-4 text-2xl">vs</span>
        <Keyboard className="w-6 h-6 text-green-400" /> <span className="text-green-400 font-bold">Navegabilidad 100% teclado</span>
      </div>

      <p className="max-w-3xl mx-auto text-gray-300 mb-6">
        Un <code>&lt;div onClick&gt;</code> no recibe foco de teclado ni se activa con Enter/Espacio. Un{' '}
        <code>&lt;button&gt;</code> nativo con <code>aria-label</code> sí es enfocable, accesible por teclado y anunciado por lectores de pantalla.
      </p>

      <div className="flex justify-center">
        <ExampleLink href="/ejemplos/navegacion-teclado">Ver ejemplo interactivo</ExampleLink>
      </div>
    </Slide>
  );
}

export function SlideAltText() {
  return (
    <Slide>
      <h2 className="text-3xl text-yellow-300 mb-6">Texto alternativo para imágenes</h2>

      <ul className="max-w-3xl mx-auto text-left text-gray-300 list-disc pl-5 space-y-1.5 mb-6">
        <li>Sin <code>alt</code>, un lector de pantalla anuncia el nombre del archivo o nada útil.</li>
        <li>Un <code>alt</code> descriptivo y específico comunica qué muestra la imagen. Si es decorativa, <code>alt=""</code> para que el lector la ignore.</li>
      </ul>

      <div className="flex justify-center">
        <ExampleLink href="/ejemplos/texto-alternativo">Ver ejemplo interactivo</ExampleLink>
      </div>
    </Slide>
  );
}

export function SlideFocusTrap() {
  return (
    <Slide>
      <h2 className="text-3xl text-yellow-300 mb-6">Focus trap</h2>

      <ul className="max-w-3xl mx-auto text-left text-gray-300 list-disc pl-5 space-y-1.5 mb-6">
        <li>Un modal sin focus trap deja escapar el foco, no cierra con <code>Escape</code> y no devuelve el foco al <code>trigger</code>.</li>
        <li>Un modal accesible cicla el foco dentro suyo, hace auto-focus, cierra con <code>Escape</code> y devuelve el foco al elemento original.</li>
      </ul>

      <div className="flex justify-center">
        <ExampleLink href="/ejemplos/focus-trap">Ver ejemplo interactivo</ExampleLink>
      </div>
    </Slide>
  );
}
