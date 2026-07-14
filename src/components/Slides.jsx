import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/moon.css'; // Let's use the 'moon' dark theme as default

export default function Slides() {
  const deckRef = useRef(null);
  const deckInstance = useRef(null);

  useEffect(() => {
    if (deckRef.current && !deckInstance.current) {
      deckInstance.current = new Reveal(deckRef.current, {
        hash: true,
        controls: true,
        progress: true,
        center: true,
        transition: 'slide',
        embedded: false
      });

      deckInstance.current.initialize();
    }

    return () => {
      try {
        if (deckInstance.current) {
          deckInstance.current.destroy();
          deckInstance.current = null;
        }
      } catch (e) {
        console.warn('Reveal.js destroy called', e);
      }
    };
  }, []);

  return (
    <div className="reveal w-full h-full" ref={deckRef}>
      <div className="slides">
        
        {/* Slide 1: Título Principal */}
        <section>
          <h1 className="text-5xl font-bold text-blue-400 mb-6">El Frontend en la Era de la IA</h1>
          <h3 className="text-3xl text-gray-300">Criterio Humano vs Patrones</h3>
        </section>

        {/* Slide 2: Premisa Principal */}
        <section>
          <h2 className="text-4xl text-blue-300 mb-8">Premisa Principal</h2>
          <ul className="text-2xl text-left space-y-4">
            <li>El frontend requiere <strong>UX, accesibilidad, rendimiento y diseño</strong> guiados por criterio humano.</li>
            <li>La IA <strong>replica patrones</strong>, pero no "entiende" el contexto ni las necesidades reales.</li>
            <li>No es un problema de la IA, sino de <strong>cultura de producto y diseño</strong>.</li>
            <li className="text-blue-200 mt-4 font-semibold italic">La IA no reemplaza el criterio humano, lo complementa.</li>
          </ul>
        </section>

        {/* Slide 3: UX */}
        <section>
          <section>
            <h2 className="text-4xl text-green-300 mb-4">1. Experiencia de Usuario (UX)</h2>
            <p className="text-2xl italic mb-8 text-gray-400">"Funciona" no significa "usable".</p>
            <ul className="text-2xl text-left space-y-4">
              <li><strong>Jerarquía Visual:</strong> Guiar la atención de forma natural.</li>
              <li><strong>Formularios Eficientes:</strong> Agrupar info, usar progressive disclosure, reducir carga cognitiva.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-4xl text-green-300 mb-8">Gestión de Estados</h2>
            <p className="text-2xl text-left mb-4">Más allá de <code>loading</code> y <code>success</code>:</p>
            <ul className="grid grid-cols-2 gap-4 text-xl text-left">
              <li className="bg-gray-800 p-2 rounded">empty state</li>
              <li className="bg-gray-800 p-2 rounded">offline</li>
              <li className="bg-gray-800 p-2 rounded">permisos</li>
              <li className="bg-gray-800 p-2 rounded">error parcial</li>
              <li className="bg-gray-800 p-2 rounded">timeout</li>
              <li className="bg-gray-800 p-2 rounded">conflicto</li>
            </ul>
          </section>
        </section>

        {/* Slide 4: Diseño */}
        <section>
          <h2 className="text-4xl text-purple-300 mb-8">2. Diseño</h2>
          <div className="space-y-8 text-left text-2xl">
            <div>
              <strong className="text-white block mb-2">Generalismo:</strong>
              <p className="text-gray-400">La IA tiende a hacer que todo parezca "igual", dificultando la identidad de marca.</p>
            </div>
            <div>
              <strong className="text-white block mb-2">Inconsistencia:</strong>
              <p className="text-gray-400">Fallo frecuente cuando la generación de código no usa un <em>Design System</em> robusto.</p>
            </div>
          </div>
        </section>

        {/* Slide 5: Accesibilidad */}
        <section>
          <h2 className="text-4xl text-yellow-300 mb-8">3. Accesibilidad</h2>
          <ul className="text-2xl text-left space-y-6">
            <li><strong>Atajos perjudiciales:</strong> La IA busca lo más corto (ej. botón sin texto, modales sin focus trap).</li>
            <li><strong>Uso del Color:</strong>
              <ul className="list-disc ml-8 mt-2 text-gray-400">
                <li>Contraste insuficiente.</li>
                <li>Inconsistencia.</li>
                <li>Transmitir información <strong>exclusivamente</strong> por color (falla en daltonismo).</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Slide 6: Producto */}
        <section>
          <h2 className="text-4xl text-red-300 mb-8">4. Visión de Producto</h2>
          <ul className="text-2xl text-left space-y-6">
            <li><strong>CTAs Directos vs Retención:</strong> Ej. Solo "Cancelar" vs "Pausar", "Cambiar plan".</li>
            <li><strong>Especificidad vs Generalismo:</strong> "KPIs" genéricos vs <em>¿Qué decisión debe tomar el usuario aquí?</em></li>
            <li><strong>Cortoplacismo:</strong> Código rápido genera <strong>deuda técnica</strong> enorme sin base de experiencia.</li>
          </ul>
        </section>

        {/* Slide 7: Casos Límite */}
        <section>
          <section>
            <h2 className="text-4xl text-orange-300 mb-8">5. Casos Límite y Resiliencia</h2>
            <p className="text-2xl mb-6 text-gray-300">El verdadero valor de la UI se demuestra en cómo resiste a la realidad:</p>
            <ul className="text-xl text-left space-y-4">
              <li><strong>Contenido Dinámico:</strong> Nombres largos, precios con 4 decimales.</li>
              <li><strong>Escalabilidad:</strong> ¿Código preparado para A/B testing o espagueti condicional?</li>
              <li><strong>Manejo de Sesión:</strong> ¿Borramos todo el carrito o refrescamos en 2do plano?</li>
            </ul>
          </section>
          <section>
            <h2 className="text-4xl text-orange-300 mb-8">Flujos Complejos a Dominar</h2>
            <div className="flex flex-wrap gap-4 justify-center text-xl">
              <span className="bg-gray-700 px-4 py-2 rounded-full">Work Queues</span>
              <span className="bg-gray-700 px-4 py-2 rounded-full">Approval Flows</span>
              <span className="bg-gray-700 px-4 py-2 rounded-full">Wizards</span>
              <span className="bg-gray-700 px-4 py-2 rounded-full">Bulk Actions</span>
              <span className="bg-gray-700 px-4 py-2 rounded-full">Conflict Resolution</span>
              <span className="bg-gray-700 px-4 py-2 rounded-full">Audit Timeline</span>
            </div>
          </section>
        </section>

        {/* Slide 8: Checklist */}
        <section>
          <h2 className="text-4xl text-cyan-300 mb-8">✅ Checklist Humano</h2>
          <ul className="text-xl text-left space-y-3 grid grid-cols-2 gap-x-8">
            <li><span className="text-green-400">✔</span> ¿Guía la atención?</li>
            <li><span className="text-green-400">✔</span> ¿Reduce la carga cognitiva?</li>
            <li><span className="text-green-400">✔</span> ¿Respeta el Design System?</li>
            <li><span className="text-green-400">✔</span> ¿Cumple accesibilidad?</li>
            <li><span className="text-green-400">✔</span> ¿Responde al negocio?</li>
            <li><span className="text-green-400">✔</span> ¿Estados resueltos?</li>
            <li><span className="text-green-400">✔</span> ¿Microinteracciones?</li>
            <li><span className="text-green-400">✔</span> ¿Transmite confianza?</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
