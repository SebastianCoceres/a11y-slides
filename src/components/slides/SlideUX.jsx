import { Slide, Stack } from '@revealjs/react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function SlideUX() {
  return (
    <Stack>
      {/* Diapositiva 1: Jerarquía y Formularios */}
      <Slide>
        <div className="h-full overflow-y-auto pr-2">
        <h2 className="text-4xl text-green-300 mb-8">1. Experiencia de Usuario (UX)</h2>
        <p className="text-xl italic mb-6 text-gray-400">"Funciona" no significa "usable".</p>

        <p className="text-sm text-gray-500 mb-4">Ejemplo: reserva de un hotel — el mismo formulario, tres formas de organizarlo.</p>

        <div className="grid grid-cols-3 gap-6 text-left">
          {/* Panel 1: Todo Junto (mal) */}
          <div className="bg-gray-800 p-5 rounded-xl border border-red-500/50">
            <div className="text-red-400 font-bold mb-3 uppercase text-xs tracking-wider">Todo Junto</div>
            <div className="space-y-2">
              <div className="flex gap-2">
                <input type="date" className="w-1/2 bg-gray-700 p-2 rounded text-xs text-gray-300 border-none" />
                <input type="date" className="w-1/2 bg-gray-700 p-2 rounded text-xs text-gray-300 border-none" />
              </div>
              <input type="number" placeholder="Huéspedes" className="w-full bg-gray-700 p-2 rounded text-xs text-gray-300 border-none" />
              <select className="w-full bg-gray-700 p-2 rounded text-xs text-gray-300 border-none">
                <option>Habitación estándar</option>
                <option>Suite</option>
              </select>
              <label className="flex items-center gap-2 text-xs text-gray-400"><input type="checkbox" /> Desayuno incluido</label>
              <label className="flex items-center gap-2 text-xs text-gray-400"><input type="checkbox" /> Parking</label>
              <input type="text" placeholder="Nombre" className="w-full bg-gray-700 p-2 rounded text-xs text-gray-300 border-none" />
              <input type="email" placeholder="Email" className="w-full bg-gray-700 p-2 rounded text-xs text-gray-300 border-none" />
              <button className="w-full bg-blue-600 text-white p-2 rounded text-xs mt-1">Reservar</button>
            </div>
            <p className="text-xs text-gray-400 mt-3">Todo mezclado, sin jerarquía, alta carga cognitiva.</p>
          </div>

          {/* Panel 2: Organizado, sin wizard (intermedio) */}
          <div className="bg-gray-800 p-5 rounded-xl border border-amber-500/50">
            <div className="text-amber-400 font-bold mb-3 uppercase text-xs tracking-wider">Organizado, Sin Pasos</div>
            <div className="space-y-3">
              <div className="space-y-1">
                <Label className="text-gray-400 text-[11px]">Fechas y huéspedes</Label>
                <div className="flex gap-2">
                  <input type="date" className="w-1/2 bg-gray-700 p-2 rounded text-xs text-gray-300 border-none" />
                  <input type="date" className="w-1/2 bg-gray-700 p-2 rounded text-xs text-gray-300 border-none" />
                </div>
                <input type="number" placeholder="Huéspedes" className="w-full bg-gray-700 p-2 rounded text-xs text-gray-300 border-none" />
              </div>
              <div className="space-y-1 pt-2 border-t border-gray-700">
                <Label className="text-gray-400 text-[11px]">Habitación y extras</Label>
                <select className="w-full bg-gray-700 p-2 rounded text-xs text-gray-300 border-none">
                  <option>Habitación estándar</option>
                  <option>Suite</option>
                </select>
                <label className="flex items-center gap-2 text-xs text-gray-400"><input type="checkbox" /> Desayuno incluido</label>
              </div>
              <div className="space-y-1 pt-2 border-t border-gray-700">
                <Label className="text-gray-400 text-[11px]">Tus datos</Label>
                <input type="text" placeholder="Nombre" className="w-full bg-gray-700 p-2 rounded text-xs text-gray-300 border-none" />
              </div>
              <button className="w-full bg-amber-600 text-white p-2 rounded text-xs mt-1">Reservar</button>
            </div>
            <p className="text-xs text-gray-400 mt-3">Agrupado y claro, pero todo cae en una sola pantalla.</p>
          </div>

          {/* Panel 3: Selección por pasos (bien) */}
          <Card className="bg-gray-950 border-green-500/50">
            <CardContent className="p-5">
              <div className="text-green-400 font-bold mb-3 uppercase text-xs tracking-wider">Selección por Pasos</div>

              <div className="flex items-center gap-1 mb-4 text-[10px] text-gray-400">
                <span className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center text-gray-300">1</span>
                <span>Fechas</span>
                <span className="flex-1 h-px bg-gray-700 mx-1" />
                <span className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">2</span>
                <span className="text-green-300">Habitación</span>
                <span className="flex-1 h-px bg-gray-700 mx-1" />
                <span className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center text-gray-300">3</span>
                <span>Datos</span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="p-2 rounded border border-green-500 bg-green-950/40 text-xs text-gray-200">Habitación Estándar — $80/noche</div>
                <div className="p-2 rounded border border-gray-700 text-xs text-gray-400">Suite — $140/noche</div>
              </div>

              <div className="bg-gray-900 rounded-lg p-3 text-[11px] text-gray-400 space-y-1 mb-3">
                <div className="flex justify-between"><span>Fechas</span><span className="text-gray-200">12–15 Ago</span></div>
                <div className="flex justify-between"><span>Huéspedes</span><span className="text-gray-200">2</span></div>
                <div className="flex justify-between"><span>Habitación</span><span className="text-gray-200">Estándar</span></div>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold text-xs">
                Continuar
              </Button>
              <p className="text-xs text-gray-400 mt-3">Progreso guiado, contexto siempre visible.</p>
            </CardContent>
          </Card>
        </div>
        </div>
      </Slide>

      {/* Diapositiva 2: Estados */}
      <Slide>
        <h2 className="text-4xl text-green-300 mb-8">Gestión de Estados</h2>
        <p className="text-xl text-left mb-8 text-gray-300">Más allá de un simple spinner de <code>loading</code>:</p>
        
        <div className="grid grid-cols-3 gap-6 text-sm text-left">
          {/* Skeleton con shadcn */}
          <Card className="bg-gray-950 border-gray-800">
            <CardContent className="p-4">
              <div className="font-bold text-gray-400 mb-4">Skeleton (Carga)</div>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-10 w-10 rounded-full bg-gray-800" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-2 w-full bg-gray-800" />
                  <Skeleton className="h-2 w-4/5 bg-gray-800" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Empty State */}
          <Card className="bg-gray-950 border-gray-800 flex flex-col items-center justify-center text-center h-40">
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="text-gray-500 mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
              </div>
              <div className="font-bold text-gray-300">Sin datos</div>
              <p className="text-xs text-gray-500 mt-1">Aún no hay registros.</p>
            </CardContent>
          </Card>

          {/* Error Parcial con shadcn Alert */}
          <div className="flex flex-col gap-2">
            <div className="font-bold text-yellow-400 ml-1">Error Parcial</div>
            <Alert variant="destructive" className="bg-yellow-950 border-yellow-600 text-yellow-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              <AlertTitle className="mb-1 text-sm font-bold">Advertencia</AlertTitle>
              <AlertDescription className="text-xs">
                No pudimos cargar la gráfica secundaria, pero tus datos principales están listos.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </Slide>
    </Stack>
  );
}
