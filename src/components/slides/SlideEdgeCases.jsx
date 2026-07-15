import { Slide, Stack } from '@revealjs/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, AlertTriangle, Workflow, ShieldCheck } from 'lucide-react';

export default function SlideEdgeCases() {
  return (
    <Stack>
      {/* Diapositiva 1: Introducción a la Resiliencia */}
      <Slide>
        <h2 className="text-4xl text-orange-300 mb-8">5. Casos Límite y Resiliencia</h2>
        <p className="text-2xl mb-6 text-gray-300 italic">El verdadero valor de la UI se demuestra cuando choca con la realidad.</p>
        <div className="grid grid-cols-2 gap-8 text-left mt-8">
          <Card className="bg-gray-800 border-red-500/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-red-400 w-6 h-6" />
                <h3 className="text-xl font-bold text-white">Mentalidad Junior (Frágil)</h3>
              </div>
              <ul className="text-gray-400 space-y-2 text-sm list-disc pl-4">
                <li>Diseña para el "Happy Path" y mock data perfecta.</li>
                <li>Asume conexiones de red instantáneas (0ms latency).</li>
                <li>Falla catastróficamente si el servidor devuelve un 500.</li>
                <li>Ignora el contenido dinámico (nombres largos, i18n).</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-green-500/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="text-green-400 w-6 h-6" />
                <h3 className="text-xl font-bold text-white">Mentalidad Senior (Resiliente)</h3>
              </div>
              <ul className="text-gray-400 space-y-2 text-sm list-disc pl-4">
                <li>Diseña defensivamente ("¿Qué pasa si esto falla?").</li>
                <li>Maneja estados de red lentos o intermitentes.</li>
                <li>Degradación elegante (Graceful Degradation).</li>
                <li>Construye layouts fluidos que soportan cualquier contenido.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Slide>

      {/* Diapositiva 2: Contenido Dinámico e I18n */}
      <Slide>
        <h2 className="text-4xl text-orange-300 mb-8">El Caos del Contenido Real</h2>
        
        <div className="grid grid-cols-2 gap-8 text-left">
          {/* Diseño Estricto vs Fluido */}
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <div className="flex items-center gap-2 mb-4 text-gray-400">
              <Globe className="w-5 h-5" /> <span>Internacionalización (i18n)</span>
            </div>
            
            <div className="space-y-6">
              {/* Botón Frágil */}
              <div>
                <span className="text-xs text-red-400 uppercase font-bold block mb-2">Frágil (Ancho Fijo)</span>
                <div className="flex gap-4 items-center">
                  <div className="w-[80px] bg-blue-600 text-white text-sm text-center py-2 overflow-hidden whitespace-nowrap">Save</div>
                  <div className="w-[80px] bg-blue-600 text-white text-sm text-center py-2 overflow-hidden whitespace-nowrap">Speichern</div>
                </div>
                <p className="text-xs text-gray-500 mt-2">El botón alemán se corta porque tiene `width: 80px` o padding incorrecto.</p>
              </div>

              {/* Layout Frágil */}
              <div>
                <span className="text-xs text-red-400 uppercase font-bold block mb-2">Flexbox sin Wrapping</span>
                <div className="flex bg-gray-900 p-3 border border-red-900 overflow-hidden">
                  <div className="bg-gray-700 p-2 mr-2 whitespace-nowrap">Dr. Huberto Alexander Montgomery III</div>
                  <Button size="sm" variant="destructive">Eliminar</Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">El nombre empuja al botón fuera de la pantalla en móviles.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex flex-col">
            <div className="text-green-400 font-bold mb-4 uppercase text-sm tracking-wider">Soluciones Senior</div>
            
            <div className="space-y-6 flex-1">
              <div>
                <span className="text-xs text-green-400 uppercase font-bold block mb-2">Resiliente (Min-Width / Padding)</span>
                <div className="flex gap-4 items-center">
                  <Button className="bg-blue-600 hover:bg-blue-500 text-white">Save</Button>
                  <Button className="bg-blue-600 hover:bg-blue-500 text-white">Speichern</Button>
                </div>
              </div>

              <div>
                <span className="text-xs text-green-400 uppercase font-bold block mb-2">Truncado y Flex-Wrap</span>
                <div className="flex justify-between items-center bg-gray-900 p-3 border border-green-900">
                  <div className="truncate mr-4 text-gray-300" title="Dr. Huberto Alexander Montgomery III">
                    Dr. Huberto Alexander Montgomery III
                  </div>
                  <Button size="sm" variant="destructive" className="shrink-0">Eliminar</Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">Uso de `truncate` (text-overflow) y `shrink-0` para proteger la UI.</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Diapositiva 3: Flujos Complejos y Estado Asíncrono */}
      <Slide>
        <h2 className="text-4xl text-orange-300 mb-8">Flujos y Estado Asíncrono</h2>
        
        <div className="grid grid-cols-2 gap-8 text-left mb-8">
          <Card className="bg-gray-900 border-red-500/50">
            <CardContent className="p-6">
              <h4 className="text-white font-bold mb-2">Actualización Pesimista (Básica)</h4>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-6 bg-gray-700 rounded-full flex items-center p-1 opacity-50 cursor-not-allowed">
                  <div className="w-4 h-4 bg-gray-400 rounded-full shadow-md"></div>
                </div>
                <span className="text-gray-400 text-sm">Esperando al servidor... (Bloqueado)</span>
              </div>
              <p className="text-xs text-gray-500">La UI se bloquea hasta que el servidor responde. Sensación de lentitud, mala UX en redes móviles.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-green-500/50">
            <CardContent className="p-6">
              <h4 className="text-white font-bold mb-2">Actualización Optimista (Avanzada)</h4>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-6 bg-green-500 rounded-full flex items-center p-1 justify-end cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
                </div>
                <span className="text-green-400 text-sm">¡Actualizado al instante!</span>
              </div>
              <p className="text-xs text-gray-500">Asumimos éxito instantáneo en UI. La petición va en background. Si falla, revertimos y mostramos un error (rollback silencioso).</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex items-center gap-2 mb-4 text-gray-400 justify-center">
            <Workflow className="w-5 h-5" /> <span>Patrones Avanzados (¿Estás listo?)</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <span className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-gray-300">Resolución de Conflictos (Colaborativo)</span>
            <span className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-gray-300">Autoguardado en Drafts (Borradores)</span>
            <span className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-gray-300">Polling Inteligente vs WebSockets</span>
            <span className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-gray-300">Sincronización Offline First</span>
          </div>
        </div>
      </Slide>
    </Stack>
  );
}
