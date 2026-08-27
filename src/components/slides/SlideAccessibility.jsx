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
        Un texto con poco contraste cansa la vista de cualquiera, tenga o no
        problemas de visión.
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

export function SlideSingleCharShortcuts() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Atajos de un carácter</h2>
      <p className="text-base text-gray-400 italic">
        Un atajo de una sola tecla no debería dispararse mientras alguien escribe en un campo de texto.
      </p>
      <WcagRef>WCAG 2.1.4 — Atajos de un solo carácter (A)</WcagRef>
    </Slide>
  );
}

export function SlideAdjustableTimeout() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Tiempo ajustable</h2>
      <p className="text-base text-gray-400 italic">
        Una sesión que se cierra sola a los 10 segundos no te da tiempo de terminar nada — dale a la
        persona el control del reloj, no al revés.
      </p>
      <WcagRef>WCAG 2.2.1 — Tiempo ajustable (A)</WcagRef>
    </Slide>
  );
}

export function SlidePausableCarousel() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Movimiento controlable</h2>
      <p className="text-base text-gray-400 italic">
        Si algo se mueve solo cada 2.5 segundos y no hay forma de pararlo, quien lee más lento o se marea
        con el movimiento pierde el mensaje.
      </p>
      <WcagRef>WCAG 2.2.2 — Pausar, detener, ocultar (A)</WcagRef>
    </Slide>
  );
}

export function SlideSkipLinks() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Evitar bloques repetidos</h2>
      <p className="text-base text-gray-400 italic">
        Sin un mecanismo para saltear la navegación, cada página cuesta lo mismo: tabular por todo el menú
        antes de llegar al contenido.
      </p>
      <WcagRef>WCAG 2.4.1 — Evitar bloques (A)</WcagRef>
    </Slide>
  );
}

export function SlidePageTitle() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Título de página</h2>
      <p className="text-base text-gray-400 italic">
        Una pestaña que siempre dice "App" no distingue nada — ni para vos con diez pestañas abiertas, ni
        para un lector de pantalla que la anuncia al cambiar el foco.
      </p>
      <WcagRef>WCAG 2.4.2 — Título de página (A)</WcagRef>
    </Slide>
  );
}

export function SlideFocusOrder() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Orden del foco</h2>
      <p className="text-base text-gray-400 italic">
        Un CSS que reordena visualmente sin tocar el DOM rompe el tab order: lo que se ve no es por dónde
        pasa el teclado.
      </p>
      <WcagRef>WCAG 2.4.3 — Orden del foco (A)</WcagRef>
    </Slide>
  );
}

export function SlideLinkPurpose() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Propósito del enlace</h2>
      <p className="text-base text-gray-400 italic">
        "Ver más" repetido tres veces no dice nada fuera de su contexto visual — y un lector de pantalla en
        modo lista de enlaces no tiene ese contexto.
      </p>
      <WcagRef>WCAG 2.4.4 — Propósito del enlace, en contexto (A)</WcagRef>
    </Slide>
  );
}

export function SlideMultipleWays() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Múltiples vías</h2>
      <p className="text-base text-gray-400 italic">
        Scrollear una lista de cientos de ítems no es una forma de encontrar algo, es un castigo sin
        buscador.
      </p>
      <WcagRef>WCAG 2.4.5 — Múltiples vías (AA)</WcagRef>
    </Slide>
  );
}

export function SlideDescriptiveLabels() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Etiquetas descriptivas</h2>
      <p className="text-base text-gray-400 italic">
        "Campo 1" y "Dato" son técnicamente válidos y comunican cero: la etiqueta tiene que decir qué pide,
        no ocupar el lugar de una.
      </p>
      <WcagRef>WCAG 2.4.6 — Encabezados y etiquetas (AA)</WcagRef>
    </Slide>
  );
}

export function SlideVisibleFocus() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Foco visible</h2>
      <p className="text-base text-gray-400 italic">
        Sacar el outline sin poner nada en su lugar deja a quien navega con teclado sin saber dónde está
        parado.
      </p>
      <WcagRef>WCAG 2.4.7 — Foco visible (AA)</WcagRef>
    </Slide>
  );
}

export function SlideFocusNotObscured() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Foco no ocultado</h2>
      <p className="text-base text-gray-400 italic">
        Un header sticky sin scroll-margin tapa exactamente el elemento que acabás de enfocar — el foco
        existe, pero no se ve.
      </p>
      <WcagRef>WCAG 2.4.11 — Foco no ocultado, mínimo (AA)</WcagRef>
    </Slide>
  );
}

export function SlidePointerGestures() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Gestos con alternativa</h2>
      <p className="text-base text-gray-400 italic">
        Un swipe da por sentado una trayectoria que no todo dispositivo puede trazar — sin un botón
        equivalente, esa galería queda inaccesible.
      </p>
      <WcagRef>WCAG 2.5.1 — Gestos del puntero (A)</WcagRef>
    </Slide>
  );
}

export function SlidePointerCancellation() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Cancelación del puntero</h2>
      <p className="text-base text-gray-400 italic">
        Disparar una acción destructiva al presionar, en vez de al soltar, le saca a la persona la última
        chance de arrepentirse.
      </p>
      <WcagRef>WCAG 2.5.2 — Cancelación del puntero (A)</WcagRef>
    </Slide>
  );
}

export function SlideLabelInName() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Etiqueta en el nombre</h2>
      <p className="text-base text-gray-400 italic">
        Si el botón dice "Buscar" pero su nombre accesible es otro, el control por voz que dice "click en
        Buscar" simplemente no lo encuentra.
      </p>
      <WcagRef>WCAG 2.5.3 — Etiqueta en el nombre (A)</WcagRef>
    </Slide>
  );
}

export function SlideDragMovements() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Arrastre con alternativa</h2>
      <p className="text-base text-gray-400 italic">
        Si reordenar una lista exige arrastrar con precisión, quien no puede sostener ese gesto queda
        directamente sin forma de hacerlo.
      </p>
      <WcagRef>WCAG 2.5.7 — Movimientos de arrastre (AA)</WcagRef>
    </Slide>
  );
}

export function SlideThreeFlashes() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Tres destellos</h2>
      <p className="text-base text-gray-400 italic">
        Contenido que destella más de tres veces por segundo puede inducir convulsiones en personas con
        epilepsia fotosensible. No lo simulamos en vivo por seguridad de quienes están mirando.
      </p>
      <WcagRef>WCAG 2.3.1 — Tres destellos o por debajo del umbral (A)</WcagRef>
    </Slide>
  );
}

export function SlideMotionActivation() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Activación por movimiento</h2>
      <p className="text-base text-gray-400 italic">
        Agitar o inclinar el dispositivo para deshacer una acción excluye a quien tiene el celular fijo en
        un soporte o un temblor que dispara el gesto sin querer — necesita un botón equivalente y poder
        desactivarse.
      </p>
      <WcagRef>WCAG 2.5.4 — Activación por movimiento (A)</WcagRef>
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
