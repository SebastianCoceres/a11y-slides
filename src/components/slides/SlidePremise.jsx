import { Slide } from '@/components/deck';

export default function SlidePremise() {
  return (
    <Slide>
      <h2 className="text-4xl text-blue-300 mb-8">Premisa Principal</h2>
      <ul className="text-2xl text-left text-gray-300 space-y-4">
        <li>
          Accesibilidad no es diseñar para <strong>"personas con discapacidad"</strong>. Es diseñar un producto
          que funcione para cualquiera, en cualquier condición.
        </li>
        <li>
          Y "cualquier condición" los incluye a ustedes: al que prueba su propio código con el brazo enyesado, al
          reflejo del sol pegándole a la pantalla en la oficina, al operario del depósito con la conexión lenta.
        </li>
        <li className="text-blue-200 mt-4 font-semibold italic">
          Nadie en esta sala es la persona sana, de buena vista y conexión, con tiempo de sobra las 24 horas
          del día. Esa persona no existe.
        </li>
      </ul>
    </Slide>
  );
}
