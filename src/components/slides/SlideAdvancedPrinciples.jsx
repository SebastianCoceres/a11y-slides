import { Slide } from "@/components/deck";
import { WcagRef } from "./WcagRef";

function Kicker() {
  return (
    <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-orange-300/70">
      Más allá de lo básico
    </p>
  );
}

export function SlideAdvancedPrinciplesIntro() {
  return (
    <Slide>
      <h2 className="text-4xl text-brand-light mb-6">Más allá de lo básico</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-4">
        Formas de mirar una interfaz que casi nunca aparecen en un checklist de
        accesibilidad.
      </p>
    </Slide>
  );
}

export function SlideCognitiveLoad() {
  return (
    <Slide>
      <Kicker />
      <h2 className="text-3xl text-brand-light mb-2">Carga cognitiva</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Cuánto tiene que recordar y procesar una persona para completar una
        tarea.
      </p>
    </Slide>
  );
}

export function SlideMotorComplexity() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Complejidad motriz</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        No todos interactúan con una interfaz con la misma precisión, velocidad
        o margen de error.
      </p>
      <WcagRef>WCAG 2.5.8 — Tamaño del objetivo (mínimo) (AA)</WcagRef>
    </Slide>
  );
}

export function SlideInteractionFatigue() {
  return (
    <Slide>
      <Kicker />
      <h2 className="text-3xl text-brand-light mb-2">Fatiga por interacción</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Cada interacción tiene un costo, y ese costo se multiplica cuando se
        repite cien veces por día.
      </p>
    </Slide>
  );
}

export function SlidePageLanguage() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Idioma de la página</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Sin <code>lang="es"</code> en el documento, un lector de pantalla puede leer todo el contenido con
        las reglas fonéticas de otro idioma.
      </p>
      <WcagRef>WCAG 3.1.1 — Idioma de la página (A)</WcagRef>
    </Slide>
  );
}

export function SlidePartsLanguage() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Idioma de las partes</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Una cita en inglés sin marcar se lee con fonética española — y se vuelve ruido.
      </p>
      <WcagRef>WCAG 3.1.2 — Idioma de las partes (AA)</WcagRef>
    </Slide>
  );
}

export function SlideOnFocusChange() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Al recibir el foco</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Tabular hasta un control no es una decisión — no debería cambiar nada.
      </p>
      <WcagRef>WCAG 3.2.1 — Al recibir el foco (A)</WcagRef>
    </Slide>
  );
}

export function SlideOnInputChange() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Al recibir entrada de datos</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Elegir una opción de un filtro no debería borrar lo que alguien estaba escribiendo.
      </p>
      <WcagRef>WCAG 3.2.2 — Al recibir entrada de datos (A)</WcagRef>
    </Slide>
  );
}

export function SlideConsistentNavigation() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Navegación consistente</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Si el menú cambia de orden entre páginas, cada clic hay que pensarlo de nuevo.
      </p>
      <WcagRef>WCAG 3.2.3 — Navegación consistente (AA)</WcagRef>
    </Slide>
  );
}

export function SlideConsistency() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Consistencia</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        La misma intención debe producir siempre el mismo comportamiento.
      </p>
      <WcagRef>WCAG 3.2.4 — Identificación consistente (AA)</WcagRef>
    </Slide>
  );
}

export function SlideConsistentHelp() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Ayuda consistente</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Un botón de ayuda que salta de esquina no ayuda, obliga a buscarlo.
      </p>
      <WcagRef>WCAG 3.2.6 — Ayuda consistente (A)</WcagRef>
    </Slide>
  );
}

export function SlideErrorPrevention() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Prevención de errores</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        No alcanza con explicar qué salió mal después de que la persona ya se
        equivocó.
      </p>
      <WcagRef>WCAG 3.3.1 — Identificación de errores (A)</WcagRef>
    </Slide>
  );
}

export function SlideAnticipatoryHelp() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Ayuda anticipada</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Explicar la regla antes de que la rompan es mejor que explicarla
        después.
      </p>
      <WcagRef>WCAG 3.3.2 — Etiquetas o instrucciones (A)</WcagRef>
    </Slide>
  );
}

export function SlideErrorSuggestion() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Sugerí cómo corregir</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Un error que no dice qué falta obliga a adivinar; decir exactamente qué corregir no es opcional, es
        el criterio.
      </p>
      <WcagRef>WCAG 3.3.3 — Sugerencia ante errores (AA)</WcagRef>
    </Slide>
  );
}

export function SlideConfirmDestructive() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Confirmá antes de borrar</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Una acción financiera irreversible sin paso de confirmación es un click de distancia de un
        desastre.
      </p>
      <WcagRef>WCAG 3.3.4 — Prevención de errores: legal, financiero, datos (AA)</WcagRef>
    </Slide>
  );
}

export function SlideRedundantEntry() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">No repitas el dato</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Si el sistema ya tiene el dato, pedirlo de nuevo es trabajo extra sin ninguna razón técnica.
      </p>
      <WcagRef>WCAG 3.3.7 — Entrada redundante (A)</WcagRef>
    </Slide>
  );
}

export function SlideAccessibleAuth() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Dejá pegar la contraseña</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Bloquear el pegado no suma seguridad, solo rompe gestores de contraseñas y le suma una prueba
        cognitiva innecesaria al login.
      </p>
      <WcagRef>WCAG 3.3.8 — Autenticación accesible, mínimo (AA)</WcagRef>
    </Slide>
  );
}

export function SlideNameRoleValue() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">Parecer no es ser</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Un div que parece un switch pero no expone rol ni estado es invisible para quien usa lector de
        pantalla, por más bonito que se vea.
      </p>
      <WcagRef>WCAG 4.1.2 — Nombre, rol, valor (A)</WcagRef>
    </Slide>
  );
}

export function SlideErrorRecovery() {
  return (
    <Slide>
      <h2 className="text-3xl text-brand-light mb-2">
        Recuperación de errores
      </h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Los errores van a pasar igual. La pregunta es qué tan fácil es volver
        atrás.
      </p>
      <WcagRef>WCAG 4.1.3 — Mensajes de estado (AA)</WcagRef>
    </Slide>
  );
}

export function SlideInclusiveDesign() {
  return (
    <Slide>
      <Kicker />
      <h2 className="text-3xl text-brand-light mb-2">Diseño inclusivo</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Quien usa nuestro software no está ahí para aprender cómo funciona. Está
        ahí para hacer su trabajo.
      </p>
    </Slide>
  );
}
