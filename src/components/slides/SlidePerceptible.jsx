import { Slide } from "@/components/deck";
import slideCatalog from "@/data/slideCatalog.json";
import { WcagRef } from "./WcagRef";

function formatWcag(wcag) {
  return `WCAG ${wcag.code} — ${wcag.name} (${wcag.level})`;
}

export function SlideMediaAlternatives() {
  const info = slideCatalog.mediaAlternatives;
  return (
    <Slide id="mediaAlternatives">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Sin subtítulos ni transcripción, un video es tan accesible como un audio sin descripción.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideSemanticStructure() {
  const info = slideCatalog.semanticStructure;
  return (
    <Slide id="semanticStructure">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Si la estructura solo existe en el CSS, un lector de pantalla no la ve.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideMeaningfulSequence() {
  const info = slideCatalog.meaningfulSequence;
  return (
    <Slide id="meaningfulSequence">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        El orden visual no siempre es el orden que lee un lector de pantalla.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideSensoryCharacteristics() {
  const info = slideCatalog.sensoryCharacteristics;
  return (
    <Slide id="sensoryCharacteristics">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        "El botón redondo verde" no significa nada para quien no puede ver forma ni color.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideInputPurpose() {
  const info = slideCatalog.inputPurpose;
  return (
    <Slide id="inputPurpose">
      <h2 className="text-3xl text-brand-light mb-2">
        {info.title}
      </h2>
      <p className="text-base text-gray-400 italic">
        Sin autocomplete, cada formulario es un formulario nuevo para completar a mano.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideAudioControl() {
  const info = slideCatalog.audioControl;
  return (
    <Slide id="audioControl">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Un audio que arranca solo y no se puede pausar tapa cualquier lector de pantalla.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideTextResize() {
  const info = slideCatalog.textResize;
  return (
    <Slide id="textResize">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Si el texto se corta al agrandarlo, perdiste a cualquiera con baja visión.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideImagesOfText() {
  const info = slideCatalog.imagesOfText;
  return (
    <Slide id="imagesOfText">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Un texto metido en una imagen no se puede seleccionar, traducir ni agrandar.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideReflow() {
  const info = slideCatalog.reflow;
  return (
    <Slide id="reflow">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        A 320px de ancho, el scroll horizontal es el primer síntoma de un layout que no escala.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideNonTextContrast() {
  const info = slideCatalog.nonTextContrast;
  return (
    <Slide id="nonTextContrast">
      <h2 className="text-3xl text-brand-light mb-2">
        {info.title}
      </h2>
      <p className="text-base text-gray-400 italic">
        Un ícono o un borde con poco contraste es tan difícil de ver como texto con poco contraste.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideTextSpacing() {
  const info = slideCatalog.textSpacing;
  return (
    <Slide id="textSpacing">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Muchas personas con dislexia necesitan más interlineado — un contenedor rígido se lo impide.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideOrientation() {
  const info = slideCatalog.orientation;
  return (
    <Slide id="orientation">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Bloquear una pantalla en vertical u horizontal deja afuera a quien montó el celular en un soporte fijo, salvo que esa orientación sea esencial para la función (ej. un piano virtual).
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideHoverContent() {
  const info = slideCatalog.hoverContent;
  return (
    <Slide id="hoverContent">
      <h2 className="text-3xl text-brand-light mb-2">
        {info.title}
      </h2>
      <p className="text-base text-gray-400 italic">
        Un tooltip que desaparece antes de poder leerlo no cumple ninguna función.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}
