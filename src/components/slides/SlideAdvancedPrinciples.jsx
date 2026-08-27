import { Slide } from "@/components/deck";
import slideCatalog from "@/data/slideCatalog.json";
import { WcagRef } from "./WcagRef";

function formatWcag(wcag) {
  return `WCAG ${wcag.code} — ${wcag.name} (${wcag.level})`;
}

function Kicker() {
  return (
    <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-orange-300/70">
      Más allá de lo básico
    </p>
  );
}

export function SlideAdvancedPrinciplesIntro() {
  const info = slideCatalog.advancedPrinciplesIntro;
  return (
    <Slide id="advancedPrinciplesIntro">
      <h2 className="text-4xl text-brand-light mb-6">{info.title}</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-4">
        Formas de mirar una interfaz que casi nunca aparecen en un checklist de
        accesibilidad.
      </p>
    </Slide>
  );
}

export function SlideCognitiveLoad() {
  const info = slideCatalog.cognitiveLoad;
  return (
    <Slide id="cognitiveLoad">
      <Kicker />
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Cuánto tiene que recordar y procesar una persona para completar una
        tarea.
      </p>
    </Slide>
  );
}

export function SlideMotorComplexity() {
  const info = slideCatalog.motorComplexity;
  return (
    <Slide id="motorComplexity">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        No todos interactúan con una interfaz con la misma precisión, velocidad
        o margen de error.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideInteractionFatigue() {
  const info = slideCatalog.interactionFatigue;
  return (
    <Slide id="interactionFatigue">
      <Kicker />
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Cada interacción tiene un costo, y ese costo se multiplica cuando se
        repite cien veces por día.
      </p>
    </Slide>
  );
}

export function SlidePageLanguage() {
  const info = slideCatalog.pageLanguage;
  return (
    <Slide id="pageLanguage">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Sin <code>lang="es"</code> en el documento, un lector de pantalla puede leer todo el contenido con
        las reglas fonéticas de otro idioma.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlidePartsLanguage() {
  const info = slideCatalog.partsLanguage;
  return (
    <Slide id="partsLanguage">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Una cita en inglés sin marcar se lee con fonética española — y se vuelve ruido.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideOnFocusChange() {
  const info = slideCatalog.onFocusChange;
  return (
    <Slide id="onFocusChange">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Tabular hasta un control no es una decisión — no debería cambiar nada.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideOnInputChange() {
  const info = slideCatalog.onInputChange;
  return (
    <Slide id="onInputChange">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Elegir una opción de un filtro no debería borrar lo que alguien estaba escribiendo.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideConsistentNavigation() {
  const info = slideCatalog.consistentNavigation;
  return (
    <Slide id="consistentNavigation">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Si el menú cambia de orden entre páginas, cada clic hay que pensarlo de nuevo.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideConsistency() {
  const info = slideCatalog.consistency;
  return (
    <Slide id="consistency">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        La misma intención debe producir siempre el mismo comportamiento.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideConsistentHelp() {
  const info = slideCatalog.consistentHelp;
  return (
    <Slide id="consistentHelp">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Un botón de ayuda que salta de esquina no ayuda, obliga a buscarlo.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideErrorPrevention() {
  const info = slideCatalog.errorPrevention;
  return (
    <Slide id="errorPrevention">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        No alcanza con explicar qué salió mal después de que la persona ya se
        equivocó.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideAnticipatoryHelp() {
  const info = slideCatalog.anticipatoryHelp;
  return (
    <Slide id="anticipatoryHelp">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Explicar la regla antes de que la rompan es mejor que explicarla
        después.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideErrorSuggestion() {
  const info = slideCatalog.errorSuggestion;
  return (
    <Slide id="errorSuggestion">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Un error que no dice qué falta obliga a adivinar; decir exactamente qué corregir no es opcional, es
        el criterio.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideConfirmDestructive() {
  const info = slideCatalog.confirmDestructive;
  return (
    <Slide id="confirmDestructive">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Una acción financiera irreversible sin paso de confirmación es un click de distancia de un
        desastre.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideRedundantEntry() {
  const info = slideCatalog.redundantEntry;
  return (
    <Slide id="redundantEntry">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Si el sistema ya tiene el dato, pedirlo de nuevo es trabajo extra sin ninguna razón técnica.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideAccessibleAuth() {
  const info = slideCatalog.accessibleAuth;
  return (
    <Slide id="accessibleAuth">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Bloquear el pegado no suma seguridad, solo rompe gestores de contraseñas y le suma una prueba
        cognitiva innecesaria al login.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideNameRoleValue() {
  const info = slideCatalog.nameRoleValue;
  return (
    <Slide id="nameRoleValue">
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Un div que parece un switch pero no expone rol ni estado es invisible para quien usa lector de
        pantalla, por más bonito que se vea.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideErrorRecovery() {
  const info = slideCatalog.errorRecovery;
  return (
    <Slide id="errorRecovery">
      <h2 className="text-3xl text-brand-light mb-2">
        {info.title}
      </h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Los errores van a pasar igual. La pregunta es qué tan fácil es volver
        atrás.
      </p>
      <WcagRef>{formatWcag(info.wcag)}</WcagRef>
    </Slide>
  );
}

export function SlideInclusiveDesign() {
  const info = slideCatalog.inclusiveDesign;
  return (
    <Slide id="inclusiveDesign">
      <Kicker />
      <h2 className="text-3xl text-brand-light mb-2">{info.title}</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Quien usa nuestro software no está ahí para aprender cómo funciona. Está
        ahí para hacer su trabajo.
      </p>
    </Slide>
  );
}
