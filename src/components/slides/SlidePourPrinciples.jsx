import { Slide } from "@/components/deck";
import {
  Check,
  ChevronDown,
  CircleAlert,
  Eye,
  Keyboard,
  MessageSquareText,
  MousePointer2,
  ShieldCheck,
  Volume2,
  X,
} from "lucide-react";
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

const EXAMPLE_VARIANTS = {
  bad: { icon: X, label: "Antes", tone: "text-example-bad" },
  good: { icon: Check, label: "Después", tone: "text-example-good" },
};

// Mockups are plain divs on purpose (no real inputs/buttons) so they never
// steal keyboard focus from the deck's arrow-key navigation.
function Example({ variant, children }) {
  const { icon: Icon, label, tone } = EXAMPLE_VARIANTS[variant];
  return (
    <figure>
      <figcaption
        className={`mb-2 flex items-center gap-2 text-sm font-semibold ${tone}`}
      >
        <Icon className="size-4" strokeWidth={3} />
        {label}
      </figcaption>
      <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-base">
        {children}
      </div>
    </figure>
  );
}

function FieldLabel({ children }) {
  return <div className="mb-1.5 text-sm text-gray-300">{children}</div>;
}

function FakeInput({ className = "", children }) {
  return (
    <div
      className={`flex items-center justify-between rounded-md border px-3 py-2 text-gray-200 ${className}`}
    >
      {children}
    </div>
  );
}

function ScreenReaderBubble({ children }) {
  return (
    <div className="mt-3 flex items-start gap-2 rounded-md bg-black/30 px-3 py-2 text-sm text-gray-300">
      <Volume2 className="mt-0.5 size-4 shrink-0 text-brand-light" />
      <span className="italic">{children}</span>
    </div>
  );
}

function Keycap({ children }) {
  return (
    <kbd className="rounded border border-white/25 bg-white/10 px-1.5 py-0.5 font-mono text-xs text-gray-200">
      {children}
    </kbd>
  );
}

function PerceptibleBad() {
  return (
    <>
      <FieldLabel>Email</FieldLabel>
      <FakeInput className="border-example-bad">ana.gmail.com</FakeInput>
    </>
  );
}

function PerceptibleGood() {
  return (
    <>
      <FieldLabel>Email</FieldLabel>
      <FakeInput className="border-example-bad">
        ana.gmail.com
        <CircleAlert className="size-4 text-example-bad" />
      </FakeInput>
      <div className="mt-1.5 flex items-center gap-1.5 text-sm text-example-bad">
        <CircleAlert className="size-3.5" />
        Falta el @ en el email
      </div>
    </>
  );
}

function OperableBad() {
  return (
    <div className="flex items-center gap-4">
      <span className="relative text-gray-200">
        Categorías
        <MousePointer2 className="absolute -bottom-4 left-10 size-5 fill-white text-black" />
      </span>
      <span className="text-sm text-gray-500">Solo se abre con el mouse</span>
    </div>
  );
}

function OperableGood() {
  return (
    <div className="flex items-center gap-4">
      <span className="flex items-center gap-1 rounded-md px-2 py-1 text-gray-200 outline-2 outline-offset-2 outline-brand-light">
        Categorías
        <ChevronDown className="size-4" />
      </span>
      <span className="flex items-center gap-1.5 text-sm text-gray-500">
        <Keycap>Tab</Keycap> + <Keycap>Enter</Keycap>
      </span>
    </div>
  );
}

function ComprehensibleBad() {
  return (
    <>
      <FakeInput className="border-white/20 text-gray-500">Fecha</FakeInput>
      <div className="mt-1.5 text-sm text-example-bad">Error</div>
    </>
  );
}

function ComprehensibleGood() {
  return (
    <>
      <FieldLabel>Fecha de nacimiento</FieldLabel>
      <FakeInput className="border-white/20 text-gray-500">dd/mm/aaaa</FakeInput>
      <div className="mt-1.5 text-sm text-example-bad">
        Usa el formato dd/mm/aaaa, por ejemplo 21/03/1990
      </div>
    </>
  );
}

// Both variants look identical on screen — the difference only shows up in
// what a screen reader announces.
function CountrySelect() {
  return (
    <>
      <FieldLabel>País</FieldLabel>
      <FakeInput className="border-white/20">
        España
        <ChevronDown className="size-4 text-gray-400" />
      </FakeInput>
    </>
  );
}

function RobustBad() {
  return (
    <>
      <CountrySelect />
      <ScreenReaderBubble>"España"</ScreenReaderBubble>
    </>
  );
}

function RobustGood() {
  return (
    <>
      <CountrySelect />
      <ScreenReaderBubble>"País, cuadro combinado, España"</ScreenReaderBubble>
    </>
  );
}

function PrincipleSlide({ id, english, icon: Icon, bad, good, children }) {
  const info = slideCatalog[id];
  return (
    <Slide id={id}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 text-left lg:grid-cols-2">
        <div>
          <div className="mb-2 flex items-center gap-4">
            <Icon className="size-9 text-brand-light" strokeWidth={2} />
            <h2 className="text-5xl text-brand-light">{info.title}</h2>
          </div>
          <p className="mb-6 text-sm text-gray-400">{english}</p>
          <div className="text-2xl leading-snug text-gray-200 sm:text-3xl">
            {children}
          </div>
        </div>
        <div aria-hidden="true" className="space-y-5">
          <Example variant="bad">{bad}</Example>
          <Example variant="good">{good}</Example>
        </div>
      </div>
    </Slide>
  );
}

export function SlidePrinciplePerceptible() {
  return (
    <PrincipleSlide
      id="principlePerceptible"
      bad={<PerceptibleBad />}
      good={<PerceptibleGood />}
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
      bad={<OperableBad />}
      good={<OperableGood />}
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
      bad={<ComprehensibleBad />}
      good={<ComprehensibleGood />}
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
      bad={<RobustBad />}
      good={<RobustGood />}
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
