import { Slide } from '@revealjs/react';
import { CheckCircle2 } from 'lucide-react';

export default function SlideChecklist() {
  const items = [
    '¿Guía la atención?',
    '¿Reduce la carga cognitiva?',
    '¿Respeta el Design System?',
    '¿Cumple accesibilidad?',
    '¿Responde al negocio?',
    '¿Estados resueltos?',
    '¿Microinteracciones?',
    '¿Transmite confianza?',
  ];

  return (
    <Slide>
      <h2 className="text-4xl text-cyan-300 mb-8">✅ Validación: Juez Visual / Humano</h2>
      <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-left text-xl">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 text-gray-200">
            <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </Slide>
  );
}
