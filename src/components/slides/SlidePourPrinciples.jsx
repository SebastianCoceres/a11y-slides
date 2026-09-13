import { Slide } from '@/components/deck';
import { Eye, Keyboard, MessageSquareText, ShieldCheck } from 'lucide-react';
import slideCatalog from '@/data/slideCatalog.json';

function PrincipleSlide({ id, letter, english, icon: Icon, children }) {
  const info = slideCatalog[id];
  return (
    <Slide id={id}>
      <div className="relative mx-auto max-w-4xl text-left">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 -top-24 select-none text-[18rem] font-black leading-none text-white/[0.05] sm:text-[22rem]"
        >
          {letter}
        </span>
        <div className="relative">
          <div className="mb-2 flex items-center gap-4">
            <Icon className="size-9 text-brand-light" strokeWidth={2} />
            <h2 className="text-5xl text-brand-light">{info.title}</h2>
          </div>
          <p className="mb-6 text-sm text-gray-500">{english}</p>
          <div className="max-w-xl text-2xl leading-snug text-gray-200 sm:text-3xl">{children}</div>
        </div>
      </div>
    </Slide>
  );
}

export function SlidePrinciplePerceptible() {
  return (
    <PrincipleSlide id="principlePerceptible" letter="P" english="Perceivable" icon={Eye}>
      <p>
        La información tiene que llegar por más de una vía — vista, oído o tacto — sin depender de una
        sola.
      </p>
    </PrincipleSlide>
  );
}

export function SlidePrincipleOperable() {
  return (
    <PrincipleSlide id="principleOperable" letter="O" english="Operable" icon={Keyboard}>
      <p>
        Todo control tiene que poder manejarse con teclado, con voz, o con cualquier entrada — no solo
        con mouse o con un gesto de precisión.
      </p>
    </PrincipleSlide>
  );
}

export function SlidePrincipleComprehensible() {
  return (
    <PrincipleSlide id="principleComprehensible" letter="U" english="Understandable" icon={MessageSquareText}>
      <p>
        La interfaz tiene que comportarse de manera predecible. Que algo "se entienda" no es un detalle
        de UX: es una condición de accesibilidad.
      </p>
    </PrincipleSlide>
  );
}

export function SlidePrincipleRobust() {
  return (
    <PrincipleSlide id="principleRobust" letter="R" english="Robust" icon={ShieldCheck}>
      <p>
        Cada control tiene que exponer su nombre, su rol y su valor al árbol de accesibilidad — sin
        importar qué lo termine leyendo.
      </p>
    </PrincipleSlide>
  );
}
