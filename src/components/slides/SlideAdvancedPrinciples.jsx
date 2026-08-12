import { Slide } from '@/components/deck';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Battery, Repeat, ShieldAlert, MonitorSmartphone, LayoutGrid } from 'lucide-react';

const principles = [
  { icon: Brain, title: 'Carga cognitiva', desc: 'Simplificar, priorizar, particionar, dar feedback y usar microinteracciones.' },
  { icon: Battery, title: 'Fatiga por interacción', desc: 'Cada interacción tiene un costo cognitivo: scrolls, focos, navegaciones.' },
  { icon: Repeat, title: 'Consistencia', desc: 'Formularios, tablas, botones y mensajes deben comportarse de forma predecible y coherente.' },
  { icon: ShieldAlert, title: 'Prevención de errores', desc: 'Confirmaciones, validaciones, mensajes claros, autocompletado, máscaras, deshacer.' },
  { icon: MonitorSmartphone, title: 'Diseño inclusivo', desc: 'Pantallas pequeñas, varios monitores, edad, estrés, iluminación, multitarea.' },
  { icon: LayoutGrid, title: 'Componentes antes que páginas', desc: 'Tablas, modales, formularios: gran parte del trabajo vive a este nivel.' },
];

export default function SlideAdvancedPrinciples() {
  return (
    <Slide>
      <h2 className="text-4xl text-orange-300 mb-8">Principios avanzados</h2>
      <div className="grid grid-cols-3 gap-6">
        {principles.map(({ icon: Icon, title, desc }) => (
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
