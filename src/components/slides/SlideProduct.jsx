import { Slide } from '@revealjs/react';

export default function SlideProduct() {
  return (
    <Slide>
      <h2 className="text-4xl text-red-300 mb-8">4. Visión de Producto</h2>
      
      <div className="grid grid-cols-2 gap-8 text-left mt-8">
        {/* CTAs Directos (Malo) */}
        <div className="bg-gray-800 p-6 rounded-xl border border-red-500/50 flex flex-col justify-between">
          <div>
            <div className="text-red-400 font-bold mb-4 uppercase text-sm tracking-wider">Código IA (Directo)</div>
            <div className="bg-gray-900 p-6 rounded-lg text-center border border-gray-700">
              <h4 className="text-white text-lg font-bold mb-2">Cancelar suscripción</h4>
              <p className="text-gray-400 text-sm mb-6">¿Estás seguro de que deseas irte?</p>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm">
                Cancelar Definitivamente
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-6">Pierde al cliente en el primer intento. Visión cortoplacista.</p>
        </div>

        {/* Retención (Bueno) */}
        <div className="bg-gray-800 p-6 rounded-xl border border-green-500/50 flex flex-col justify-between">
          <div>
            <div className="text-green-400 font-bold mb-4 uppercase text-sm tracking-wider">Criterio Humano (Retención)</div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h4 className="text-white text-lg font-bold mb-4 text-center">Antes de irte...</h4>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded text-sm flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Pausar mi cuenta 3 meses
                </button>
                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded text-sm flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  Hablar con soporte
                </button>
                <button className="w-full text-gray-500 hover:text-red-400 py-2 px-4 rounded text-xs mt-2 underline">
                  Quiero cancelar definitivamente
                </button>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-6">Responde a objetivos de negocio. Busca entender <em>qué decisión toma el usuario aquí</em>.</p>
        </div>
      </div>
    </Slide>
  );
}
