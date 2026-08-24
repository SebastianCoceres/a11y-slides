import { Slide } from '@/components/deck';
import { Card, CardContent } from '@/components/ui/card';
import { MonitorSmartphone, Lightbulb, ShieldCheck, TestTube2, LayoutGrid } from 'lucide-react';

const tools = [
  { icon: MonitorSmartphone, title: 'DevTools', desc: 'Inspección de contraste, orden del foco y árbol de accesibilidad del navegador.' },
  { icon: Lightbulb, title: 'Lighthouse', desc: 'Auditoría automatizada de accesibilidad, performance y buenas prácticas.' },
  { icon: ShieldCheck, title: 'axe-core', desc: 'Motor de reglas WCAG para detectar violaciones de accesibilidad en el DOM.' },
  { icon: TestTube2, title: 'Playwright', desc: 'Tests end-to-end que validan accesibilidad como parte del pipeline de CI.' },
];

export default function SlideTools() {
  return (
    <Slide>
      <h2 className="text-4xl text-cyan-300 mb-6">¿Qué herramientas podemos usar?</h2>

      <Card className="bg-gray-800 border-gray-700 shadow-none max-w-3xl mx-auto mb-8">
        <CardContent className="p-5 flex items-start gap-3 text-left">
          <LayoutGrid className="w-6 h-6 text-cyan-300 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-white font-bold mb-1">Componentes antes que páginas</h3>
            <p className="text-sm text-gray-400">
              Doce modales distintos porque cada equipo construyó el suyo: un bug de teclado se arregla doce
              veces, o aparece en el módulo equivocado, en el peor momento del sprint. Un solo componente bien
              hecho se corrige una vez y el arreglo se replica solo.
            </p>
          </div>
        </CardContent>
      </Card>

      <p className="text-lg text-gray-400 mb-6 italic">Con lo que ya tenemos instalado:</p>
      <div className="grid grid-cols-4 gap-6">
        {tools.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="bg-gray-800 border-gray-700 shadow-none">
            <CardContent className="p-6 text-left">
              <Icon className="w-6 h-6 text-cyan-300 mb-3" />
              <h3 className="text-white font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-400">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Slide>
  );
}
