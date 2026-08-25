import { Slide } from '@/components/deck';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Keyboard, MessageSquareText, ShieldCheck } from 'lucide-react';

const principles = [
  {
    icon: Eye,
    title: 'Perceptible',
    desc: 'La información y los componentes de la interfaz deben presentarse de forma que los usuarios puedan percibirlos.',
  },
  {
    icon: Keyboard,
    title: 'Operable',
    desc: 'Los componentes de navegación y controles deben ser manejables mediante teclado, voz u otros dispositivos.',
  },
  {
    icon: MessageSquareText,
    title: 'Comprensible',
    desc: 'La información y el funcionamiento de la interfaz deben ser claros, coherentes y fáciles de aprender.',
  },
  {
    icon: ShieldCheck,
    title: 'Robusto',
    desc: 'El contenido debe ser compatible con una amplia variedad de navegadores y tecnologías asistivas.',
  },
];

export default function SlidePourPrinciples() {
  return (
    <Slide>
      <h2 className="text-4xl text-brand-light mb-2">Principios básicos</h2>
      <p className="text-lg text-gray-400 mb-8 italic">
        Las cuatro columnas sobre las que se paran todos los criterios de WCAG.
      </p>
      <div className="grid grid-cols-4 gap-6 max-w-5xl mx-auto">
        {principles.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="bg-gray-800 border-gray-700 shadow-none">
            <CardContent className="p-6 text-left">
              <Icon className="w-6 h-6 text-teal-300 mb-3" />
              <h3 className="text-white font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-400">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Slide>
  );
}
