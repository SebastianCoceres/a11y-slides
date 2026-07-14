import { Slide, Stack } from '@revealjs/react';

export default function SlideUX() {
  return (
    <Stack>
      {/* Diapositiva 1: Jerarquía y Formularios */}
      <Slide>
        <h2 className="text-4xl text-green-300 mb-8">1. Experiencia de Usuario (UX)</h2>
        <p className="text-xl italic mb-6 text-gray-400">"Funciona" no significa "usable".</p>
        
        <div className="grid grid-cols-2 gap-8 text-left mt-8">
          {/* Ejemplo Malo */}
          <div className="bg-gray-800 p-6 rounded-xl border border-red-500/50">
            <div className="text-red-400 font-bold mb-4 uppercase text-sm tracking-wider">Malo: IA genérica</div>
            <div className="space-y-3">
              <input type="text" placeholder="Nombre" className="w-full bg-gray-700 p-2 rounded text-sm text-gray-300 border-none" />
              <input type="text" placeholder="Apellidos" className="w-full bg-gray-700 p-2 rounded text-sm text-gray-300 border-none" />
              <input type="email" placeholder="Email" className="w-full bg-gray-700 p-2 rounded text-sm text-gray-300 border-none" />
              <input type="password" placeholder="Contraseña" className="w-full bg-gray-700 p-2 rounded text-sm text-gray-300 border-none" />
              <button className="w-full bg-blue-600 text-white p-2 rounded text-sm mt-2">Enviar</button>
            </div>
            <p className="text-sm text-gray-400 mt-4">Formulario plano, sin agrupación, alta carga cognitiva.</p>
          </div>

          {/* Ejemplo Bueno */}
          <div className="bg-gray-800 p-6 rounded-xl border border-green-500/50">
            <div className="text-green-400 font-bold mb-4 uppercase text-sm tracking-wider">Bueno: Criterio Humano</div>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-400 block mb-1">Información Personal</label>
                <div className="flex gap-2">
                  <input type="text" placeholder="Nombre" className="w-1/2 bg-gray-700 p-2 rounded text-sm text-gray-300 border-none" />
                  <input type="text" placeholder="Apellidos" className="w-1/2 bg-gray-700 p-2 rounded text-sm text-gray-300 border-none" />
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1">Credenciales</label>
                <input type="email" placeholder="Email" className="w-full bg-gray-700 p-2 rounded text-sm text-gray-300 border-none mb-2" />
                <input type="password" placeholder="Contraseña" className="w-full bg-gray-700 p-2 rounded text-sm text-gray-300 border-none" />
              </div>
              <button className="w-full bg-green-600 hover:bg-green-500 text-white p-2 rounded text-sm font-semibold transition-colors">Crear Cuenta</button>
            </div>
            <p className="text-sm text-gray-400 mt-4">Agrupación visual, inputs proporcionales, CTA claro.</p>
          </div>
        </div>
      </Slide>

      {/* Diapositiva 2: Estados */}
      <Slide>
        <h2 className="text-4xl text-green-300 mb-8">Gestión de Estados</h2>
        <p className="text-xl text-left mb-8 text-gray-300">Más allá de un simple spinner de <code>loading</code>:</p>
        
        <div className="grid grid-cols-3 gap-6 text-sm text-left">
          {/* Skeleton */}
          <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
            <div className="font-bold text-gray-400 mb-4">Skeleton (Carga)</div>
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-600 h-10 w-10"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-2 bg-gray-600 rounded"></div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-600 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Empty State */}
          <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 flex flex-col items-center justify-center text-center h-40">
            <div className="text-gray-500 mb-2">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
            </div>
            <div className="font-bold text-gray-300">Sin datos</div>
            <p className="text-xs text-gray-500 mt-1">Aún no hay registros.</p>
          </div>

          {/* Error Parcial */}
          <div className="bg-gray-800 p-4 rounded-xl border border-yellow-500/50">
            <div className="font-bold text-yellow-400 mb-2">Error Parcial</div>
            <div className="bg-yellow-900/30 p-2 rounded text-yellow-200 text-xs flex items-start gap-2">
              <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              <span>No pudimos cargar la gráfica secundaria, pero tus datos principales están listos.</span>
            </div>
          </div>
        </div>
      </Slide>
    </Stack>
  );
}
