import { Slide } from '@revealjs/react';

export default function SlideChecklist() {
  return (
    <Slide>
      <h2 className="text-4xl text-cyan-300 mb-8">✅ Checklist Humano</h2>
      <ul className="text-xl text-left space-y-3 grid grid-cols-2 gap-x-8">
        <li><span className="text-green-400">✔</span> ¿Guía la atención?</li>
        <li><span className="text-green-400">✔</span> ¿Reduce la carga cognitiva?</li>
        <li><span className="text-green-400">✔</span> ¿Respeta el Design System?</li>
        <li><span className="text-green-400">✔</span> ¿Cumple accesibilidad?</li>
        <li><span className="text-green-400">✔</span> ¿Responde al negocio?</li>
        <li><span className="text-green-400">✔</span> ¿Estados resueltos?</li>
        <li><span className="text-green-400">✔</span> ¿Microinteracciones?</li>
        <li><span className="text-green-400">✔</span> ¿Transmite confianza?</li>
      </ul>
    </Slide>
  );
}
