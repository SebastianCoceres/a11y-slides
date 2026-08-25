import { Slide } from '@/components/deck';
import {
  Baby,
  Bandage,
  Sun,
  Wifi,
  Snowflake,
  Glasses,
  PersonStanding,
} from 'lucide-react';

const situations = [
  { icon: Sun, situation: 'Sentir el reflejo del sol y no ver bien la pantalla' },
  { icon: Wifi, situation: 'Tener una conexión lenta' },
  { icon: Snowflake, situation: 'Llevar guantes (invierno o trabajo)' },
  { icon: Glasses, situation: 'Romperse las gafas o haber olvidado las lentillas' },
  { icon: PersonStanding, situation: 'Ser una persona mayor con pérdida de visión o destreza' },
  { icon: Baby, situation: 'Sostener un bebé con una sola mano' },
  { icon: Bandage, situation: 'Tener una lesión temporal (dedo vendado)' },
];

export default function SlideSituations() {
  return (
    <Slide>
      <h2 className="text-4xl text-brand-light mb-2">¿Por qué nos interesa aplicarla?</h2>
      <p className="text-lg text-gray-400 mb-8 italic">
        Es literalmente todo el mundo, en algún momento del día.
      </p>
      <div className="grid grid-cols-4 gap-4 max-w-5xl mx-auto">
        {situations.map(({ icon: Icon, situation }) => (
          <div
            key={situation}
            className="flex flex-col items-center gap-3 bg-gray-800 border border-gray-700 rounded-lg p-5 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-300">
              <Icon className="w-5 h-5" />
            </span>
            <span className="text-gray-200 text-sm">{situation}</span>
          </div>
        ))}
      </div>
    </Slide>
  );
}
