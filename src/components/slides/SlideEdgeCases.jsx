import { Slide, Stack } from '@revealjs/react';

export default function SlideEdgeCases() {
  return (
    <Stack>
      <Slide>
        <h2 className="text-4xl text-orange-300 mb-8">5. Casos Límite y Resiliencia</h2>
        <p className="text-2xl mb-6 text-gray-300">El verdadero valor de la UI se demuestra en cómo resiste a la realidad:</p>
        <ul className="text-xl text-left space-y-4">
          <li><strong>Contenido Dinámico:</strong> Nombres largos, precios con 4 decimales.</li>
          <li><strong>Escalabilidad:</strong> ¿Código preparado para A/B testing o espagueti condicional?</li>
          <li><strong>Manejo de Sesión:</strong> ¿Borramos todo el carrito o refrescamos en 2do plano?</li>
        </ul>
      </Slide>
      <Slide>
        <h2 className="text-4xl text-orange-300 mb-8">Flujos Complejos a Dominar</h2>
        <div className="flex flex-wrap gap-4 justify-center text-xl">
          <span className="bg-gray-700 px-4 py-2 rounded-full">Work Queues</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">Approval Flows</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">Wizards</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">Bulk Actions</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">Conflict Resolution</span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">Audit Timeline</span>
        </div>
      </Slide>
    </Stack>
  );
}
