import ExampleLayout from './ExampleLayout';

function BadExample() {
  return (
    <div>
      <p className="mb-2 text-[11px] leading-none text-gray-400">
        Texto diminuto, interlineado apretado y bajo contraste hacen que leer un párrafo completo sea un esfuerzo
        innecesario para cualquier persona, especialmente con visión borrosa o en pantallas pequeñas.
      </p>
      <p className="text-[11px] leading-none text-gray-400">
        Sin jerarquía visual: título y cuerpo pesan y se ven exactamente igual, así que es difícil escanear la página.
      </p>
    </div>
  );
}

function GoodExample() {
  return (
    <div>
      <h3 className="mb-2 text-lg font-bold text-gray-900">Título con jerarquía clara</h3>
      <p className="text-base leading-relaxed text-gray-700">
        Tamaño de fuente legible, interlineado de 1.5 y buen contraste para que el texto se lea sin esfuerzo, incluso
        con visión borrosa o en pantallas pequeñas.
      </p>
    </div>
  );
}

export default function Typography() {
  return (
    <ExampleLayout
      title="Tipografía legible"
      description="El tamaño de fuente, el interlineado y la jerarquía visual determinan cuánto esfuerzo requiere leer un texto."
      bad={<BadExample />}
      good={<GoodExample />} />
  );
}
