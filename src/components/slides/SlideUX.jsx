import { Slide, Stack } from '@revealjs/react';

export default function SlideUX() {
  return (
    <Stack>
      <Slide>
        <h2 className="text-4xl text-green-300 mb-4">1. Experiencia de Usuario (UX)</h2>
        <p className="text-2xl italic mb-8 text-gray-400">"Funciona" no significa "usable".</p>
        <ul className="text-2xl text-left space-y-4">
          <li><strong>Jerarquía Visual:</strong> Guiar la atención de forma natural.</li>
          <li><strong>Formularios Eficientes:</strong> Agrupar info, usar progressive disclosure, reducir carga cognitiva.</li>
        </ul>
      </Slide>
      <Slide>
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
      </Slide>
    </Stack>
  );
}
