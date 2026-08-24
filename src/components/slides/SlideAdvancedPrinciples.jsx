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
      <ul className="max-w-3xl mx-auto text-left text-gray-300 list-disc pl-5 space-y-1.5 mb-6">
        <li>Un formulario de alta de cliente con 40 campos en una sola pantalla exige sostener en la cabeza qué falta y qué es obligatorio.</li>
        <li>Partir el proceso en pasos reduce lo que alguien tiene que recordar para hacer bien su trabajo.</li>
      </ul>
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
      <ul className="max-w-3xl mx-auto text-left text-gray-300 list-disc pl-5 space-y-1.5 mb-6">
        <li>Un botón chico es trivial con mouse, en un escritorio, sin apuro.</li>
        <li>Es un problema real con una mano ocupada, en una tablet, o moviéndose por el depósito.</li>
      </ul>
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
      <ul className="max-w-3xl mx-auto text-left text-gray-300 list-disc pl-5 space-y-1.5 mb-6">
        <li>Quince scrolls para encontrar el historial de un cliente, una vez, no es nada.</li>
        <li>Cien veces por día deja de ser un detalle de UX y se convierte en carga operativa.</li>
      </ul>
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
      <ul className="max-w-3xl mx-auto text-left text-gray-300 list-disc pl-5 space-y-1.5 mb-6">
        <li>"Guardar" en un lugar distinto en cada módulo obliga a reinterpretar la interfaz una y otra vez.</li>
        <li>Un componente reutilizable evita que cada equipo reimplemente foco, estados y semántica desde cero.</li>
      </ul>
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
      <ul className="max-w-3xl mx-auto text-left text-gray-300 list-disc pl-5 space-y-1.5 mb-6">
        <li>Si el máximo es 15, mostrar el error después de enviar el formulario ya es tarde.</li>
        <li>Impedir la entrada imposible evita datos incorrectos, tickets e investigación en logs tres días después.</li>
      </ul>
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
      <ul className="max-w-3xl mx-auto text-left text-gray-300 list-disc pl-5 space-y-1.5 mb-6">
        <li>"Registro eliminado correctamente" no alcanza si no hay forma de deshacerlo.</li>
        <li>Un sistema que permite recuperarse rápido es más accesible que uno que exige precisión perfecta.</li>
      </ul>
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
      <ul className="max-w-3xl mx-auto text-left text-gray-300 list-disc pl-5 space-y-1.5 mb-6">
        <li>El operario quiere gestionar el stock, la vendedora atender al cliente: nadie debería pararse a pensar qué espera el software de ellos.</li>
        <li>Diseñamos para situaciones reales: con prisa, con interrupciones, cansados, bajo presión.</li>
      </ul>
    </Slide>
  );
}
