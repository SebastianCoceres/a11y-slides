import { Slide } from "@/components/deck";
import { WcagRef } from "./WcagRef";

export function SlideMediaAlternatives() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Medios basados en tiempo</h2>
      <p className="text-base text-gray-400 italic">
        Sin subtítulos ni transcripción, un video es tan accesible como un audio sin descripción.
      </p>
      <WcagRef>WCAG 1.2.1–1.2.5 — Medios basados en tiempo (A/AA)</WcagRef>
    </Slide>
  );
}

export function SlideSemanticStructure() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Información y relaciones</h2>
      <p className="text-base text-gray-400 italic">
        Si la estructura solo existe en el CSS, un lector de pantalla no la ve.
      </p>
      <WcagRef>WCAG 1.3.1 — Información y relaciones (A)</WcagRef>
    </Slide>
  );
}

export function SlideMeaningfulSequence() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Secuencia significativa</h2>
      <p className="text-base text-gray-400 italic">
        El orden visual no siempre es el orden que lee un lector de pantalla.
      </p>
      <WcagRef>WCAG 1.3.2 — Secuencia significativa (A)</WcagRef>
    </Slide>
  );
}

export function SlideSensoryCharacteristics() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Características sensoriales</h2>
      <p className="text-base text-gray-400 italic">
        "El botón redondo verde" no significa nada para quien no puede ver forma ni color.
      </p>
      <WcagRef>WCAG 1.3.3 — Características sensoriales (A)</WcagRef>
    </Slide>
  );
}

export function SlideInputPurpose() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">
        Identificar el propósito de la entrada
      </h2>
      <p className="text-base text-gray-400 italic">
        Sin autocomplete, cada formulario es un formulario nuevo para completar a mano.
      </p>
      <WcagRef>WCAG 1.3.5 — Identificar el propósito de la entrada (AA)</WcagRef>
    </Slide>
  );
}

export function SlideAudioControl() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Control de audio</h2>
      <p className="text-base text-gray-400 italic">
        Un audio que arranca solo y no se puede pausar tapa cualquier lector de pantalla.
      </p>
      <WcagRef>WCAG 1.4.2 — Control de audio (A)</WcagRef>
    </Slide>
  );
}

export function SlideTextResize() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Cambio de tamaño del texto</h2>
      <p className="text-base text-gray-400 italic">
        Si el texto se corta al agrandarlo, perdiste a cualquiera con baja visión.
      </p>
      <WcagRef>WCAG 1.4.4 — Cambio de tamaño del texto (AA)</WcagRef>
    </Slide>
  );
}

export function SlideImagesOfText() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Imágenes de texto</h2>
      <p className="text-base text-gray-400 italic">
        Un texto metido en una imagen no se puede seleccionar, traducir ni agrandar.
      </p>
      <WcagRef>WCAG 1.4.5 — Imágenes de texto (AA)</WcagRef>
    </Slide>
  );
}

export function SlideReflow() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Reflow</h2>
      <p className="text-base text-gray-400 italic">
        A 320px de ancho, el scroll horizontal es el primer síntoma de un layout que no escala.
      </p>
      <WcagRef>WCAG 1.4.10 — Reflow (AA)</WcagRef>
    </Slide>
  );
}

export function SlideNonTextContrast() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">
        Contraste de elementos no textuales
      </h2>
      <p className="text-base text-gray-400 italic">
        Un ícono o un borde con poco contraste es tan difícil de ver como texto con poco contraste.
      </p>
      <WcagRef>WCAG 1.4.11 — Contraste de elementos no textuales (AA)</WcagRef>
    </Slide>
  );
}

export function SlideTextSpacing() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Espaciado de texto</h2>
      <p className="text-base text-gray-400 italic">
        Muchas personas con dislexia necesitan más interlineado — un contenedor rígido se lo impide.
      </p>
      <WcagRef>WCAG 1.4.12 — Espaciado de texto (AA)</WcagRef>
    </Slide>
  );
}

export function SlideOrientation() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Orientación</h2>
      <p className="text-base text-gray-400 italic">
        Bloquear una pantalla en vertical u horizontal deja afuera a quien montó el celular en un soporte fijo, salvo que esa orientación sea esencial para la función (ej. un piano virtual).
      </p>
      <WcagRef>WCAG 1.3.4 — Orientación (AA)</WcagRef>
    </Slide>
  );
}

export function SlideHoverContent() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">
        Contenido al pasar el cursor o enfocar
      </h2>
      <p className="text-base text-gray-400 italic">
        Un tooltip que desaparece antes de poder leerlo no cumple ninguna función.
      </p>
      <WcagRef>WCAG 1.4.13 — Contenido al pasar el cursor o enfocar (AA)</WcagRef>
    </Slide>
  );
}
