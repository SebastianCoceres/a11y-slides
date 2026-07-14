import { Slide } from '@revealjs/react';

export default function SlideAccessibility() {
  return (
    <Slide>
      <h2 className="text-4xl text-yellow-300 mb-8">3. Accesibilidad</h2>
      <ul className="text-2xl text-left space-y-6">
        <li><strong>Atajos perjudiciales:</strong> La IA busca lo más corto (ej. botón sin texto, modales sin focus trap).</li>
        <li><strong>Uso del Color:</strong>
          <ul className="list-disc ml-8 mt-2 text-gray-400">
            <li>Contraste insuficiente.</li>
            <li>Inconsistencia.</li>
            <li>Transmitir información <strong>exclusivamente</strong> por color (falla en daltonismo).</li>
          </ul>
        </li>
      </ul>
    </Slide>
  );
}
