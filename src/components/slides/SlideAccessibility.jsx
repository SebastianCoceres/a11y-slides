import { Slide } from '@revealjs/react';

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
              <span className="text-xs text-red-400 uppercase font-bold">Malo</span>
              <button className="bg-blue-600 p-3 rounded shadow hover:bg-blue-500 w-fit">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs text-green-400 uppercase font-bold">Bueno</span>
              <button className="bg-blue-600 px-4 py-3 rounded shadow hover:bg-blue-500 flex items-center gap-2 w-fit text-white text-sm font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                <span>Añadir Proyecto</span>
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-400">La IA a menudo genera botones con íconos sin `aria-label` o texto, bloqueando a los lectores de pantalla.</p>
        </div>

        {/* Uso del Color */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Información solo por Color</h3>
          <div className="flex flex-col gap-4 mb-4">
            <div>
              <span className="text-xs text-red-400 uppercase font-bold block mb-1">Malo (Daltónicos no ven el error)</span>
              <input type="text" defaultValue="usuario_incorrecto" className="w-full bg-gray-900 border border-red-500 p-2 rounded text-sm text-gray-300" />
            </div>
            <div>
              <span className="text-xs text-green-400 uppercase font-bold block mb-1">Bueno</span>
              <div className="relative">
                <input type="text" defaultValue="usuario_incorrecto" className="w-full bg-gray-900 border border-red-500 p-2 rounded text-sm text-gray-300 pr-10" />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                </div>
              </div>
              <p className="text-xs text-red-400 mt-1">Este nombre de usuario ya está en uso.</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
