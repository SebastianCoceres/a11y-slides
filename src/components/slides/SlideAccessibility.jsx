import { Slide } from '@revealjs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusCircle, AlertCircle } from 'lucide-react';

export default function SlideAccessibility() {
  return (
    <Slide>
      <h2 className="text-4xl text-yellow-300 mb-8">3. Accesibilidad</h2>
      
      <div className="grid grid-cols-2 gap-8 text-left">
        {/* Atajos perjudiciales */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Atajos vs Semántica</h3>
          <div className="flex gap-6 mb-4 items-center">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-red-400 uppercase font-bold">Happy Path (Por defecto)</span>
              <button className="bg-blue-600 p-3 rounded shadow hover:bg-blue-500 w-fit">
                <PlusCircle className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs text-green-400 uppercase font-bold">Iteración guiada</span>
              <Button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center gap-2">
                <PlusCircle className="w-5 h-5" />
                <span>Añadir Proyecto</span>
              </Button>
            </div>
          </div>
          <p className="text-sm text-gray-400">La IA a menudo genera botones con íconos sin `aria-label` o texto, al buscar la ruta más rápida.</p>
        </div>

        {/* Uso del Color */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Información solo por Color</h3>
          <div className="flex flex-col gap-4 mb-4">
            <div>
              <span className="text-xs text-red-400 uppercase font-bold block mb-1">Happy Path (Sin validación)</span>
              <input type="text" defaultValue="usuario_incorrecto" className="w-full bg-gray-900 border border-red-500 p-2 rounded text-sm text-gray-300" />
            </div>
            <div>
              <span className="text-xs text-green-400 uppercase font-bold block mb-1">Validación mediante Skills</span>
              <div className="relative">
                <Input defaultValue="usuario_incorrecto" className="bg-gray-900 border-red-500 pr-10 text-gray-300" />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                </div>
              </div>
              <p className="text-xs text-red-400 mt-1 font-medium">Este nombre de usuario ya está en uso.</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
