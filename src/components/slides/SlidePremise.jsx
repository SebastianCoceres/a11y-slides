import { Slide } from '@revealjs/react';

export default function SlidePremise() {
  return (
    <Slide>
      <h2 className="text-4xl text-blue-300 mb-8">Premisa Principal</h2>
      <ul className="text-2xl text-left space-y-4">
        <li>El frontend requiere <strong>UX, accesibilidad, rendimiento y diseño</strong> guiados por criterio humano.</li>
        <li>La IA <strong>replica patrones</strong>, pero no "entiende" el contexto ni las necesidades reales.</li>
        <li>No es un problema de la IA, sino de <strong>cultura de producto y diseño</strong>.</li>
        <li className="text-blue-200 mt-4 font-semibold italic">La IA no reemplaza el criterio humano, lo complementa.</li>
      </ul>
    </Slide>
  );
}
