import { Slide } from '@/components/deck';
import { Card, CardContent } from '@/components/ui/card';
import { Headset, Code2, UserPlus } from 'lucide-react';

const impacts = [
  {
    icon: Headset,
    role: 'Soporte',
    text: 'Menos tickets escalados como "bug" que en realidad ya sabíamos que iban a pasar.',
  },
  {
    icon: Code2,
    role: 'Desarrollo',
    text: 'Aplicarlo desde el diseño es más rápido que parchearlo después, sprint tras sprint.',
  },
  {
    icon: UserPlus,
    role: 'Onboarding',
    text: 'Un código con estos principios ya incorporados es más fácil de leer y de replicar.',
  },
];

export default function SlideBusinessImpact() {
  return (
    <Slide>
      <h2 className="text-4xl text-red-300 mb-2">Lo que nos ahorramos como equipo</h2>
      <p className="text-lg text-gray-400 mb-6 italic">Encuentren la suya en esta lista.</p>
      <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
        {impacts.map(({ icon: Icon, role, text }) => (
          <Card key={role} className="bg-gray-800 border-gray-700 shadow-none">
            <CardContent className="p-4 flex items-start gap-3 text-left">
              <Icon className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
              <span className="text-gray-300 text-sm">
                <strong className="text-white">{role}:</strong> {text}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-base text-red-200 italic">Prevenir es el piso de este argumento, no el techo.</p>
    </Slide>
  );
}
