import { Slide } from '@/components/deck';
import { Eye, Keyboard, MessageSquareText, ShieldCheck } from 'lucide-react';
import slideCatalog from '@/data/slideCatalog.json';

function PrincipleSlide({ id, letter, icon: Icon, children }) {
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
          <div className="mb-6 flex items-center gap-4">
            <Icon className="size-9 text-brand-light" strokeWidth={2} />
            <h2 className="text-5xl text-brand-light">{info.title}</h2>
          </div>
          <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-gray-300">{children}</div>
        </div>
      </div>
    </Slide>
  );
}

export function SlidePrinciplePerceptible() {
  return (
    <PrincipleSlide id="principlePerceptible" letter="P" icon={Eye}>
      <p>
        La información y los componentes de la interfaz tienen que poder percibirse, sea cual sea el
        sentido disponible en ese momento. No es "que se vea bien": es que el dato llegue por al menos
        una vía — vista, oído, o tacto a través de un lector de pantalla — sin depender de una sola.
      </p>
      <p>
        Un estado que solo existe en un color, un aviso que solo suena, un texto que solo vive dentro de
        una imagen: los tres rompen este principio antes de que entre en juego cualquier discapacidad
        permanente. Alcanza con estar al sol, tener el sonido apagado, o una conexión que no cargó la
        imagen.
      </p>
    </PrincipleSlide>
  );
}

export function SlidePrincipleOperable() {
  return (
    <PrincipleSlide id="principleOperable" letter="O" icon={Keyboard}>
      <p>
        Los controles de la interfaz tienen que poder manejarse con teclado, con voz, o con cualquier
        otro dispositivo de entrada — no solo con mouse o con un gesto de precisión.
      </p>
      <p>
        Un botón que solo reacciona al hover, un límite de tiempo que no se puede extender, un gesto que
        exige una trayectoria exacta: son barreras operativas. No dependen de cómo se ve la pantalla, sino
        de con qué se puede interactuar con ella.
      </p>
    </PrincipleSlide>
  );
}

export function SlidePrincipleComprehensible() {
  return (
    <PrincipleSlide id="principleComprehensible" letter="U" icon={MessageSquareText}>
      <p>
        La información y el comportamiento de la interfaz tienen que ser predecibles. Que algo "se
        entienda" no es un detalle de UX: es una condición de accesibilidad.
      </p>
      <p>
        Un error sin explicación, un menú que cambia de lugar entre pantallas, un cambio de contexto que
        la persona no pidió — todo eso rompe el modelo mental que ya se había hecho del producto, y obliga
        a reaprenderlo cada vez.
      </p>
    </PrincipleSlide>
  );
}

export function SlidePrincipleRobust() {
  return (
    <PrincipleSlide id="principleRobust" letter="R" icon={ShieldCheck}>
      <p>
        El contenido tiene que funcionar con una amplia variedad de navegadores y tecnologías asistivas.
        Un componente puede verse perfecto y no existir para la única API que importa acá: el árbol de
        accesibilidad.
      </p>
      <p>
        Robusto significa que cada control expone su nombre, su rol y su valor ahí, sin importar qué lo
        termine leyendo: un lector de pantalla, un control por voz, o cada vez más, un agente de software.
      </p>
    </PrincipleSlide>
  );
}
