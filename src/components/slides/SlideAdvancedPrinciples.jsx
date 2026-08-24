import { Slide } from '@/components/deck';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Move, Battery, Repeat } from 'lucide-react';
import { ShieldAlert, Undo2, MonitorSmartphone } from 'lucide-react';

const principlesPartOne = [
  { icon: Brain, title: 'Carga cognitiva', desc: 'Partir el proceso en pasos reduce lo que alguien tiene que sostener en la cabeza para hacer su trabajo.' },
  { icon: Move, title: 'Complejidad motriz', desc: 'Un botón chico o un drag-and-drop es trivial con mouse, y un problema real con una mano ocupada o en una tablet.' },
  { icon: Battery, title: 'Fatiga por interacción', desc: 'Quince scrolls para encontrar un dato, cien veces por día, es carga operativa, no un detalle de UX.' },
  { icon: Repeat, title: 'Consistencia', desc: 'Un componente reutilizable evita que cada equipo reimplemente foco, estados y semántica desde cero.' },
];

const principlesPartTwo = [
  { icon: ShieldAlert, title: 'Prevención de errores', desc: 'Impedir la entrada imposible es mejor que mostrar el error recién después de enviar el formulario.' },
  { icon: Undo2, title: 'Recuperación de errores', desc: '"Registro eliminado correctamente" no alcanza: hace falta poder deshacerlo y que quede claro qué pasó.' },
  { icon: MonitorSmartphone, title: 'Diseño inclusivo', desc: 'Diseñamos para situaciones reales: con prisa, con interrupciones, cansados, bajo presión.' },
];

export function SlideAdvancedPrinciplesPartOne() {
  return (
    <Slide>
      <h2 className="text-4xl text-orange-300 mb-8">Principios avanzados</h2>
      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
        {principlesPartOne.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="bg-gray-800 border-gray-700 shadow-none">
            <CardContent className="p-6 text-left">
              <Icon className="w-6 h-6 text-orange-300 mb-3" />
              <h3 className="text-white font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-400">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Slide>
  );
}

export function SlideAdvancedPrinciplesPartTwo() {
  return (
    <Slide>
      <h2 className="text-4xl text-orange-300 mb-8">Principios avanzados</h2>
      <div className="grid grid-cols-3 gap-6">
        {principlesPartTwo.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="bg-gray-800 border-gray-700 shadow-none">
            <CardContent className="p-6 text-left">
              <Icon className="w-6 h-6 text-orange-300 mb-3" />
              <h3 className="text-white font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-400">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Slide>
  );
}
