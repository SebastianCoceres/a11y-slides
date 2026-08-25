import { Slide } from '@/components/deck';

function Kicker() {
  return (
    <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-orange-300/70">
      Más allá de lo básico
    </p>
  );
}

export function SlideCognitiveLoad() {
  return (
    <Slide>
      <Kicker />
      <h2 className="text-3xl text-orange-300 mb-2">Carga cognitiva</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Cuánto tiene que recordar y procesar una persona para completar una tarea.
      </p>
    </Slide>
  );
}

export function SlideMotorComplexity() {
  return (
    <Slide>
      <Kicker />
      <h2 className="text-3xl text-orange-300 mb-2">Complejidad motriz</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        No todos interactúan con una interfaz con la misma precisión, velocidad o margen de error.
      </p>
    </Slide>
  );
}

export function SlideInteractionFatigue() {
  return (
    <Slide>
      <Kicker />
      <h2 className="text-3xl text-orange-300 mb-2">Fatiga por interacción</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Cada interacción tiene un costo, y ese costo se multiplica cuando se repite cien veces por día.
      </p>
    </Slide>
  );
}

export function SlideConsistency() {
  return (
    <Slide>
      <Kicker />
      <h2 className="text-3xl text-orange-300 mb-2">Consistencia</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        La misma intención debe producir siempre el mismo comportamiento.
      </p>
    </Slide>
  );
}

export function SlideErrorPrevention() {
  return (
    <Slide>
      <Kicker />
      <h2 className="text-3xl text-orange-300 mb-2">Prevención de errores</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        No alcanza con explicar qué salió mal después de que la persona ya se equivocó.
      </p>
    </Slide>
  );
}

export function SlideErrorRecovery() {
  return (
    <Slide>
      <Kicker />
      <h2 className="text-3xl text-orange-300 mb-2">Recuperación de errores</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Los errores van a pasar igual. La pregunta es qué tan fácil es volver atrás.
      </p>
    </Slide>
  );
}

export function SlideInclusiveDesign() {
  return (
    <Slide>
      <Kicker />
      <h2 className="text-3xl text-orange-300 mb-2">Diseño inclusivo</h2>
      <p className="text-base text-gray-400 mb-4 italic">
        Quien usa nuestro software no está ahí para aprender cómo funciona. Está ahí para hacer su trabajo.
      </p>
    </Slide>
  );
}
