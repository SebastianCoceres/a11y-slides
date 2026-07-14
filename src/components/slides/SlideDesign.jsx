import { Slide } from '@revealjs/react';

export default function SlideDesign() {
  return (
    <Slide>
      <h2 className="text-4xl text-purple-300 mb-8">2. Diseño</h2>
      <div className="space-y-8 text-left text-2xl">
        <div>
          <strong className="text-white block mb-2">Generalismo:</strong>
          <p className="text-gray-400">La IA tiende a hacer que todo parezca "igual", dificultando la identidad de marca.</p>
        </div>
        <div>
          <strong className="text-white block mb-2">Inconsistencia:</strong>
          <p className="text-gray-400">Fallo frecuente cuando la generación de código no usa un <em>Design System</em> robusto.</p>
        </div>
      </div>
    </Slide>
  );
}
