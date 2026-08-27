import { Slide } from "@/components/deck";
import { MousePointer2, Keyboard } from "lucide-react";
import slideCatalog from "@/data/slideCatalog.json";
import { WcagRef } from "./WcagRef";

function formatWcag(wcag) {
  return `WCAG ${wcag.code} — ${wcag.name} (${wcag.level})`;
}

export function SlideColorUsage() {
  const info = slideCatalog.colorUsage;
  return (
    <Slide id="colorUsage">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Uno de cada doce varones tiene algún tipo de daltonismo.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideTypography() {
  const info = slideCatalog.typography;
  return (
    <Slide id="typography">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Un texto con poco contraste cansa la vista de cualquiera, tenga o no
        problemas de visión.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideKeyboardNav() {
  const info = slideCatalog.keyboardNav;
  return (
    <Slide id="keyboardNav">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
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
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideAltText() {
  const info = slideCatalog.altText;
  return (
    <Slide id="altText">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Tu contenido puede ser inaccesible para personas con discapacidad visual
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideFocusTrap() {
  const info = slideCatalog.focusTrap;
  return (
    <Slide id="focusTrap">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Sin manejo de foco, un modal puede dejar a un usuario de teclado
        atrapado o perdido en la página.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideSingleCharShortcuts() {
  const info = slideCatalog.singleCharShortcuts;
  return (
    <Slide id="singleCharShortcuts">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Un atajo de una sola tecla no debería dispararse mientras alguien escribe en un campo de texto.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideAdjustableTimeout() {
  const info = slideCatalog.adjustableTimeout;
  return (
    <Slide id="adjustableTimeout">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Una reserva que se libera sin aviso ni forma de extenderla no te da tiempo de terminar nada — dale
        a la persona el control del reloj, no al revés.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlidePausableCarousel() {
  const info = slideCatalog.pausableCarousel;
  return (
    <Slide id="pausableCarousel">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Si algo se mueve solo cada 2.5 segundos y no hay forma de pararlo, quien lee más lento o se marea
        con el movimiento pierde el mensaje.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideSkipLinks() {
  const info = slideCatalog.skipLinks;
  return (
    <Slide id="skipLinks">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Sin un mecanismo para saltear la navegación, cada página cuesta lo mismo: tabular por todo el menú
        antes de llegar al contenido.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlidePageTitle() {
  const info = slideCatalog.pageTitle;
  return (
    <Slide id="pageTitle">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Una pestaña que siempre dice "App" no distingue nada — ni para vos con diez pestañas abiertas, ni
        para un lector de pantalla que la anuncia al cambiar el foco.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideFocusOrder() {
  const info = slideCatalog.focusOrder;
  return (
    <Slide id="focusOrder">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Un CSS que reordena visualmente sin tocar el DOM rompe el tab order: lo que se ve no es por dónde
        pasa el teclado.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideLinkPurpose() {
  const info = slideCatalog.linkPurpose;
  return (
    <Slide id="linkPurpose">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        "Ver más" repetido tres veces no dice nada fuera de su contexto visual — y un lector de pantalla en
        modo lista de enlaces no tiene ese contexto.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideMultipleWays() {
  const info = slideCatalog.multipleWays;
  return (
    <Slide id="multipleWays">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Scrollear una lista de cientos de ítems no es una forma de encontrar algo, es un castigo sin
        buscador.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideDescriptiveLabels() {
  const info = slideCatalog.descriptiveLabels;
  return (
    <Slide id="descriptiveLabels">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        "Campo 1" y "Dato" son técnicamente válidos y comunican cero: la etiqueta tiene que decir qué pide,
        no ocupar el lugar de una.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideVisibleFocus() {
  const info = slideCatalog.visibleFocus;
  return (
    <Slide id="visibleFocus">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Sacar el outline sin poner nada en su lugar deja a quien navega con teclado sin saber dónde está
        parado.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideFocusNotObscured() {
  const info = slideCatalog.focusNotObscured;
  return (
    <Slide id="focusNotObscured">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Un header sticky sin scroll-margin tapa exactamente el elemento que acabás de enfocar — el foco
        existe, pero no se ve.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlidePointerGestures() {
  const info = slideCatalog.pointerGestures;
  return (
    <Slide id="pointerGestures">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Un swipe da por sentado una trayectoria que no todo dispositivo puede trazar — sin un botón
        equivalente, esa galería queda inaccesible.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlidePointerCancellation() {
  const info = slideCatalog.pointerCancellation;
  return (
    <Slide id="pointerCancellation">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Disparar una acción destructiva al presionar, en vez de al soltar, le saca a la persona la última
        chance de arrepentirse.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideLabelInName() {
  const info = slideCatalog.labelInName;
  return (
    <Slide id="labelInName">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Si el botón dice "Buscar" pero su nombre accesible es otro, el control por voz que dice "click en
        Buscar" simplemente no lo encuentra.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideDragMovements() {
  const info = slideCatalog.dragMovements;
  return (
    <Slide id="dragMovements">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Si reordenar una lista exige arrastrar con precisión, quien no puede sostener ese gesto queda
        directamente sin forma de hacerlo.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideThreeFlashes() {
  const info = slideCatalog.threeFlashes;
  return (
    <Slide id="threeFlashes">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Contenido que destella más de tres veces por segundo puede inducir convulsiones en personas con
        epilepsia fotosensible. No lo simulamos en vivo por seguridad de quienes están mirando.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideMotionActivation() {
  const info = slideCatalog.motionActivation;
  return (
    <Slide id="motionActivation">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Agitar o inclinar el dispositivo para deshacer una acción excluye a quien tiene el celular fijo en
        un soporte o un temblor que dispara el gesto sin querer — necesita un botón equivalente y poder
        desactivarse.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideReducedMotion() {
  const info = slideCatalog.reducedMotion;
  return (
    <Slide id="reducedMotion">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 italic">
        Rebotes, parallax y auto-scroll pueden marear a quien tiene un trastorno
        vestibular o migrañas.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}
