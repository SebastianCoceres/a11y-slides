import { Slide } from '@/components/deck';

export function SlideDeuteranopia() {
  return (
    <Slide>
      <h2 className="text-3xl text-yellow-300 mb-2">Deuteranopia</h2>
      <p className="text-base text-gray-400 mb-4 italic">Sensibilidad reducida al verde. Es el tipo más común de daltonismo.</p>

      <ul className="max-w-3xl mx-auto text-left text-gray-300 list-disc pl-5 space-y-1.5 mb-6">
        <li>El rojo y el verde se confunden: ambos se perciben como un tono amarillento parecido.</li>
        <li>Un estado "aprobado" en verde y "rechazado" en rojo, sin ícono ni texto, se leen igual.</li>
      </ul>
    </Slide>
  );
}

export function SlideProtanopia() {
  return (
    <Slide>
      <h2 className="text-3xl text-yellow-300 mb-2">Protanopia</h2>
      <p className="text-base text-gray-400 mb-4 italic">Sensibilidad reducida al rojo.</p>

      <ul className="max-w-3xl mx-auto text-left text-gray-300 list-disc pl-5 space-y-1.5 mb-6">
        <li>El rojo se percibe apagado y oscuro: puede confundirse con un verde oscuro o directamente con gris.</li>
        <li>Una alerta roja de "vencido" puede pasar desapercibida como un detalle neutro más de la pantalla.</li>
      </ul>
    </Slide>
  );
}

export function SlideTritanopia() {
  return (
    <Slide>
      <h2 className="text-3xl text-yellow-300 mb-2">Tritanopia</h2>
      <p className="text-base text-gray-400 mb-4 italic">Sensibilidad reducida al azul. Muy poco común.</p>

      <ul className="max-w-3xl mx-auto text-left text-gray-300 list-disc pl-5 space-y-1.5 mb-6">
        <li>El azul y el verde se confunden entre sí, igual que el amarillo con el violeta.</li>
        <li>Un link celeste sobre un fondo verdoso pierde el contraste que lo distingue como interactivo.</li>
      </ul>
    </Slide>
  );
}

export function SlideAcromatopsia() {
  return (
    <Slide>
      <h2 className="text-3xl text-yellow-300 mb-2">Monocromacia (Acromatopsia)</h2>
      <p className="text-base text-gray-400 mb-4 italic">Visión en escala de grises. Ocurre en aproximadamente 1 de cada 33.000 personas.</p>

      <ul className="max-w-3xl mx-auto text-left text-gray-300 list-disc pl-5 space-y-1.5 mb-6">
        <li>Ningún color comunica nada: todo depende de la forma, el texto y el contraste de luminancia.</li>
        <li>Un gráfico que solo distingue sus valores por color queda directamente ilegible.</li>
      </ul>
    </Slide>
  );
}
