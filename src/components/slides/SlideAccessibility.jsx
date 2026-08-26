import { Slide } from "@/components/deck";
import { MousePointer2, Keyboard } from "lucide-react";
import { WcagRef } from "./WcagRef";

export function SlideColorUsage() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Uso de color adecuado</h2>
      <p className="text-base text-gray-400 italic">
        Uno de cada doce varones tiene algún tipo de daltonismo.
      </p>
      <WcagRef>WCAG 1.4.1 — Uso del color (A)</WcagRef>
    </Slide>
  );
}

export function SlideTypography() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Tipografía legible</h2>
      <p className="text-base text-gray-400 italic">
        Un texto chico o con poco contraste cansa la vista de cualquiera, tenga
        o no problemas de visión.
      </p>
      <WcagRef>WCAG 1.4.3 — Contraste mínimo (AA)</WcagRef>
    </Slide>
  );
}

export function SlideKeyboardNav() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Navegación por teclado</h2>
      <p className="text-base text-gray-400 italic mb-6">
        El túnel carpiano y otras lesiones por esfuerzo repetitivo complican
        usar el mouse todo el día.
      </p>
      <div className="flex items-center justify-center gap-4 text-gray-400">
        <MousePointer2 className="w-6 h-6" />{" "}
        <span className="line-through text-red-400">Dependencia del ratón</span>
        <span className="mx-4 text-2xl">vs</span>
        <Keyboard className="w-6 h-6 text-green-400" />{" "}
        <span className="text-green-400 font-bold">
          Navegabilidad 100% teclado
        </span>
      </div>
      <WcagRef>WCAG 2.1.1 — Teclado (A)</WcagRef>
    </Slide>
  );
}

export function SlideAltText() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Texto alternativo</h2>
      <p className="text-base text-gray-400 italic">
        Tu contenido puede ser inaccesible para personas con discapacidad visual
      </p>
      <WcagRef>WCAG 1.1.1 — Contenido no textual (A)</WcagRef>
    </Slide>
  );
}

export function SlideFocusTrap() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Focus trap</h2>
      <p className="text-base text-gray-400 italic">
        Sin manejo de foco, un modal puede dejar a un usuario de teclado
        atrapado o perdido en la página.
      </p>
      <WcagRef>WCAG 2.1.2 — Sin trampas de teclado (A)</WcagRef>
    </Slide>
  );
}

export function SlideReducedMotion() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Movimiento reducido</h2>
      <p className="text-base text-gray-400 italic">
        Rebotes, parallax y auto-scroll pueden marear a quien tiene un trastorno
        vestibular o migrañas.
      </p>
      <WcagRef>WCAG 2.3.3 — Animación desde interacciones (AAA)</WcagRef>
    </Slide>
  );
}
