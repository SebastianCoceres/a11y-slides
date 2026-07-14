import { Slide } from '@revealjs/react';

export default function SlidePremise() {
  return (
    <Slide>
      <h2 className="text-4xl text-blue-300 mb-8">Premisa Principal</h2>
      <ul className="text-2xl text-left space-y-4">
        <li>La IA es excepcionalmente rápida ejecutando el <strong>"Happy Path"</strong> (la ruta ideal y sin fricciones).</li>
        <li>Si no se especifica lo contrario, la IA asume este camino por defecto. Aquí entra el <strong>Criterio Humano</strong> o los <strong>Visual Judges (Agentes Jueces)</strong> para rectificar y pulir.</li>
        <li>Mediante <strong>Skills</strong> (patrones predefinidos) e iteraciones, la IA se auto-corrige validando UX, accesibilidad y diseño.</li>
        <li className="text-blue-200 mt-4 font-semibold italic">No se trata de IA vs Humanos, sino de orquestar agentes y validación continua.</li>
      </ul>
    </Slide>
  );
}
