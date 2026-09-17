import { Slide } from "@/components/deck";
import { Eye, Keyboard, MessageSquareText, ShieldCheck } from "lucide-react";
import slideCatalog from "@/data/slideCatalog.json";

const PRINCIPLES_PREVIEW = [
  { letter: "P", icon: Eye, es: "Perceptible", en: "Perceivable" },
  { letter: "O", icon: Keyboard, es: "Operable", en: "Operable" },
  {
    letter: "U",
    icon: MessageSquareText,
    es: "Comprensible",
    en: "Understandable",
  },
  { letter: "R", icon: ShieldCheck, es: "Robusto", en: "Robust" },
];

export function SlidePrinciplesIntro() {
  const info = slideCatalog.principlesIntro;
  return (
    <Slide id="principlesIntro">
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="text-5xl text-brand-light mb-3">{info.title}</h2>
        <p className="mb-10 text-lg text-gray-400">
          Los criterios de A y AA se agrupan en estas cuatro categorías.
        </p>
        <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-4">
          {PRINCIPLES_PREVIEW.map(({ letter, icon: Icon, es, en }) => (
            <div key={letter} className="border-t border-white/10 pt-5">
              <div className="mb-3 flex items-center gap-2">
                <Icon
                  className="h-5 w-5 shrink-0 text-brand-light"
                  strokeWidth={2}
                />
                <span className="font-mono text-3xl font-black text-brand-light">
                  {letter}
                </span>
              </div>
              <div className="text-lg font-bold text-white">{es}</div>
              <div className="text-sm text-gray-500">{en}</div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

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
          <p className="mb-6 text-sm text-gray-400">{english}</p>
          <div className="max-w-xl text-2xl leading-snug text-gray-200 sm:text-3xl">
            {children}
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function SlidePrinciplePerceptible() {
  return (
    <PrincipleSlide
      id="principlePerceptible"
      letter="P"
      english="Perceivable"
      icon={Eye}
    >
      <p>La información no debería depender de un único sentido</p>
    </PrincipleSlide>
  );
}

export function SlidePrincipleOperable() {
  return (
    <PrincipleSlide
      id="principleOperable"
      letter="O"
      english="Operable"
      icon={Keyboard}
    >
      <p>
        Los controles tienen que poder usarse sin depender de una única forma de
        interacción.
      </p>
    </PrincipleSlide>
  );
}

export function SlidePrincipleComprehensible() {
  return (
    <PrincipleSlide
      id="principleComprehensible"
      letter="U"
      english="Understandable"
      icon={MessageSquareText}
    >
      <p>
        La interfaz tiene que ser fácil de entender y, sobre todo, comportarse
        como el usuario espera.
      </p>
    </PrincipleSlide>
  );
}

export function SlidePrincipleRobust() {
  return (
    <PrincipleSlide
      id="principleRobust"
      letter="R"
      english="Robust"
      icon={ShieldCheck}
    >
      <p>
        El contenido debe ser lo suficientemente fiable como para ser
        interpretado de forma correcta.
      </p>
    </PrincipleSlide>
  );
}
