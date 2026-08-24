import { Slide } from '@/components/deck';

export default function SlideClosing() {
  return (
    <Slide>
      <p className="text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
        La pregunta no es si esto nos cuesta tiempo.
      </p>
      <p className="text-3xl text-yellow-300 font-bold max-w-4xl mx-auto leading-relaxed mt-6">
        La pregunta es si preferimos gastarlo ahora, o después, reproduciendo un error que podríamos haber
        evitado con un poco de atención al detalle.
      </p>
    </Slide>
  );
}
