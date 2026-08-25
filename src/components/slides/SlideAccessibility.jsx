import { Slide } from '@/components/deck';
import { MousePointer2, Keyboard } from 'lucide-react';

export function SlideColorUsage() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Uso de color adecuado</h2>
      <p className="text-base text-gray-400 italic">Uno de cada doce varones tiene algún tipo de daltonismo.</p>
    </Slide>
  );
}

export function SlideTypography() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Tipografía legible</h2>
      <p className="text-base text-gray-400 italic">
        Un texto chico o con poco contraste cansa la vista de cualquiera, tenga o no problemas de visión.
      </p>
    </Slide>
  );
}

export function SlideKeyboardNav() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Navegación por teclado</h2>
      <p className="text-base text-gray-400 italic mb-6">
        El túnel carpiano y otras lesiones por esfuerzo repetitivo complican usar el mouse todo el día.
      </p>
      <div className="flex items-center justify-center gap-4 text-gray-400">
        <MousePointer2 className="w-6 h-6" /> <span className="line-through text-red-400">Dependencia del ratón</span>
        <span className="mx-4 text-2xl">vs</span>
        <Keyboard className="w-6 h-6 text-green-400" /> <span className="text-green-400 font-bold">Navegabilidad 100% teclado</span>
      </div>
    </Slide>
  );
}

export function SlideAltText() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Texto alternativo para imágenes</h2>
      <p className="text-base text-gray-400 italic">
        Es lo único que tiene un lector de pantalla para describir una imagen.
      </p>
    </Slide>
  );
}

export function SlideFocusTrap() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Focus trap</h2>
      <p className="text-base text-gray-400 italic">
        Sin manejo de foco, un modal puede dejar a un usuario de teclado atrapado o perdido en la página.
      </p>
    </Slide>
  );
}
