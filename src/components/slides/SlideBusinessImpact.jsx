import { Slide } from '@revealjs/react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, TrendingUp, Scale, Users, Heart, Coins, Rocket, Wrench, Zap } from 'lucide-react';

const impacts = [
  { icon: Award, text: 'Credibilidad y ventaja competitiva' },
  { icon: TrendingUp, text: 'Productos alineados con las exigencias del mercado' },
  { icon: Scale, text: 'Evitar litigios y sanciones legales (Directiva UE 2019/882, Decreto-ley 1/2022)' },
  { icon: Users, text: 'Incremento de la cuota de mercado' },
  { icon: Heart, text: 'Mejor experiencia de usuario y satisfacción del cliente' },
  { icon: Coins, text: 'Reducción de costos de atención al cliente' },
  { icon: Rocket, text: 'Mejor posicionamiento' },
  { icon: Wrench, text: 'Menos costos de desarrollo y mantenimiento aplicando buenas prácticas desde el inicio' },
  { icon: Zap, text: 'Productividad' },
];

export default function SlideBusinessImpact() {
  return (
    <Slide>
      <h2 className="text-4xl text-red-300 mb-2">¿Cómo afecta a la empresa?</h2>
      <p className="text-lg text-gray-400 mb-6 italic">Ya no es un nicho, es una experiencia universal.</p>
      <div className="grid grid-cols-3 gap-3">
        {impacts.map(({ icon: Icon, text }) => (
          <Card key={text} className="bg-gray-800 border-gray-700 shadow-none">
            <CardContent className="p-4 flex items-start gap-3 text-left">
              <Icon className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
              <span className="text-gray-300 text-sm">{text}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </Slide>
  );
}
