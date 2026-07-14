import { Slide } from '@revealjs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Pause, Headset } from 'lucide-react';

export default function SlideProduct() {
  return (
    <Slide>
      <h2 className="text-4xl text-red-300 mb-8">4. Visión de Producto</h2>
      
      <div className="grid grid-cols-2 gap-8 text-left mt-8">
        {/* CTAs Directos (Malo) */}
        <div className="bg-gray-800 p-6 rounded-xl border border-red-500/50 flex flex-col justify-between">
          <div>
            <div className="text-red-400 font-bold mb-4 uppercase text-sm tracking-wider">Happy Path Autónomo (Directo)</div>
            <div className="bg-gray-900 p-6 rounded-lg text-center border border-gray-700">
              <h4 className="text-white text-lg font-bold mb-2">Cancelar suscripción</h4>
              <p className="text-gray-400 text-sm mb-6">¿Estás seguro de que deseas irte?</p>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm">
                Cancelar Definitivamente
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-6">Cumple su objetivo literal rápido, pero carece de contexto de retención de usuarios.</p>
        </div>

        {/* Retención (Bueno) */}
        <Card className="bg-gray-950 border-green-500/50 flex flex-col justify-between shadow-none">
          <CardContent className="p-6">
            <div className="text-green-400 font-bold mb-4 uppercase text-sm tracking-wider">Validación: Skills de Producto (Retención)</div>
            <Card className="bg-gray-900 border-gray-800 shadow-none">
              <CardContent className="p-6">
                <h4 className="text-white text-lg font-bold mb-4 text-center">Antes de irte...</h4>
                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold">
                    <Pause className="w-4 h-4 mr-2" />
                    Pausar mi cuenta 3 meses
                  </Button>
                  <Button variant="secondary" className="w-full font-semibold bg-gray-800 text-white hover:bg-gray-700">
                    <Headset className="w-4 h-4 mr-2" />
                    Hablar con soporte
                  </Button>
                  <Button variant="ghost" className="w-full text-gray-400 hover:text-red-400 hover:bg-transparent text-xs underline">
                    Quiero cancelar definitivamente
                  </Button>
                </div>
              </CardContent>
            </Card>
            <p className="text-sm text-gray-400 mt-6">Responde a objetivos de negocio. Busca entender <em>qué decisión toma el usuario aquí</em>.</p>
          </CardContent>
        </Card>
      </div>
    </Slide>
  );
}
