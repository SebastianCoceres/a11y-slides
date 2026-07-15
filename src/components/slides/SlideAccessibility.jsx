import { Slide, Stack } from '@revealjs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusCircle, AlertCircle, MousePointer2, Keyboard, EyeOff } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function SlideAccessibility() {
  return (
    <Stack>
      {/* Diapositiva 1: Fundamentos (Color y Semántica) */}
      <Slide>
        <h2 className="text-4xl text-yellow-300 mb-8">3. Accesibilidad (a11y)</h2>
        <p className="text-xl text-gray-400 mb-6 italic">No es un feature, es un requerimiento.</p>
        
        <div className="grid grid-cols-2 gap-8 text-left">
          {/* Atajos perjudiciales */}
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Semántica y Contexto</h3>
            <div className="flex gap-6 mb-4 items-center">
              <div className="flex flex-col gap-2">
                <span className="text-xs text-red-400 uppercase font-bold">Botón Div (Malo)</span>
                <div className="bg-blue-600 p-3 rounded shadow hover:bg-blue-500 w-fit cursor-pointer text-white flex items-center justify-center">
                  <PlusCircle className="w-5 h-5" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs text-green-400 uppercase font-bold">Botón Nativo (Bueno)</span>
                <Button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center gap-2" aria-label="Añadir Proyecto">
                  <PlusCircle className="w-5 h-5" />
                  <span>Añadir</span>
                </Button>
              </div>
            </div>
            <p className="text-sm text-gray-400">Un `&lt;div onClick&gt;` pierde navegabilidad por teclado (Tab/Enter). Un Senior usa etiquetas semánticas y `aria-label` en íconos.</p>
          </div>

          {/* Uso del Color */}
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Información Más Allá del Color</h3>
            <div className="flex flex-col gap-4 mb-4">
              <div>
                <span className="text-xs text-red-400 uppercase font-bold block mb-1">Solo Color</span>
                <input type="text" defaultValue="usuario_incorrecto" className="w-full bg-gray-900 border border-red-500 p-2 rounded text-sm text-gray-300 outline-none focus:ring-1 focus:ring-red-500" />
              </div>
              <div>
                <span className="text-xs text-green-400 uppercase font-bold block mb-1">Color + Icono + Texto (aria-invalid)</span>
                <div className="relative">
                  <Input defaultValue="usuario_incorrecto" aria-invalid={true} aria-describedby="error-msg" className="bg-gray-900 border-red-500 pr-10 text-gray-300 focus-visible:ring-red-500" />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  </div>
                </div>
                <p id="error-msg" className="text-xs text-red-400 mt-1 font-medium">Este nombre de usuario ya está en uso.</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Diapositiva 2: Navegación por teclado (Focus Management) */}
      <Slide>
        <h2 className="text-4xl text-yellow-300 mb-8">Gestión del Foco (Focus Management)</h2>
        <div className="flex items-center justify-center gap-4 mb-8 text-gray-400">
          <MousePointer2 className="w-6 h-6" /> <span className="line-through text-red-400">Dependencia del Ratón</span> 
          <span className="mx-4 text-2xl">vs</span>
          <Keyboard className="w-6 h-6 text-green-400" /> <span className="text-green-400 font-bold">Navegabilidad 100% Teclado</span>
        </div>

        <div className="grid grid-cols-2 gap-8 text-left text-sm">
          <Card className="bg-gray-900 border-red-500/50">
            <CardContent className="p-6">
              <div className="text-red-400 font-bold mb-4 uppercase text-xs tracking-wider">Modal Inaccesible (DOM Trap)</div>
              <ul className="space-y-2 text-gray-400 list-disc pl-4">
                <li>El foco se escapa del modal a elementos ocultos debajo (z-index no bloquea el foco).</li>
                <li>No se puede cerrar con la tecla <code>Escape</code>.</li>
                <li>Al cerrar, el foco no vuelve al botón que lo abrió, forzando al usuario a empezar desde arriba.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-green-500/50">
            <CardContent className="p-6">
              <div className="text-green-400 font-bold mb-4 uppercase text-xs tracking-wider">Modal Radix / shadcn (Senior)</div>
              <ul className="space-y-2 text-gray-400 list-disc pl-4">
                <li>Implementa <strong>Focus Trap</strong> (el foco cicla dentro del modal).</li>
                <li>Auto-focus en el primer elemento interactivo.</li>
                <li>Retorno del foco automático al <code>trigger</code> original al desmontar.</li>
                <li>Soporte nativo para <code>Escape</code>.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Slide>
      
      {/* Diapositiva 3: Screen Readers y ARIA Live */}
      <Slide>
        <h2 className="text-4xl text-yellow-300 mb-8">El DOM Invisible (Screen Readers)</h2>
        
        <Card className="bg-gray-900 border-gray-700 max-w-3xl mx-auto text-left">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-4">
              <EyeOff className="w-8 h-8 text-yellow-400" />
              <div>
                <h4 className="text-white font-bold">Mutaciones Dinámicas (Notificaciones/Toasts)</h4>
                <p className="text-sm text-gray-400">Si un Toast aparece visualmente, el usuario vidente lo sabe. ¿Cómo se entera un usuario ciego?</p>
              </div>
            </div>

            <div className="space-y-4 font-mono text-sm">
              <div className="bg-gray-950 p-4 rounded border border-red-900/50">
                <span className="text-red-400 block mb-2">// Silencioso para Screen Readers</span>
                <pre className="text-gray-300 whitespace-pre-wrap">{`<div className="toast">
  Guardado correctamente
</div>`}</pre>
              </div>

              <div className="bg-gray-950 p-4 rounded border border-green-900/50">
                <span className="text-green-400 block mb-2">// Anunciado dinámicamente</span>
                <pre className="text-gray-300 whitespace-pre-wrap">
                  {'<div '}
                  <span className="text-yellow-300">{'aria-live="polite"'}</span>
                  {' className="toast">\n  Guardado correctamente\n</div>'}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </Slide>
    </Stack>
  );
}
