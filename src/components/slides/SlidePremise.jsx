import { Slide } from '@/components/deck';

export default function SlidePremise() {
  return (
    <Slide>
      <h2 className="text-4xl text-blue-300 mb-8">Premisa Principal</h2>
      <ul className="text-2xl text-left space-y-4">
        <li>Solemos pensar la accesibilidad solo desde la discapacidad, pero en realidad <strong>beneficia a todos los usuarios</strong>: personas con limitaciones temporales, personas mayores, o usuarios en distintos dispositivos y condiciones de uso.</li>
        <li>Accesibilidad es la práctica de diseñar y desarrollar productos, servicios y entornos <strong>utilizables por TODAS las personas</strong>.</li>
        <li>Empieza resolviendo limitaciones para algunas personas, pero las ventajas se extienden a todos.</li>
        <li className="text-blue-200 mt-4 font-semibold italic">Todos podemos experimentar una discapacidad temporal o situacional.</li>
      </ul>
    </Slide>
  );
}
