import { Slide } from "@/components/deck";
import { Brain, Ear, Eye, Hand, PersonStanding } from "lucide-react";
import { motion } from "motion/react";
import slideCatalog from "@/data/slideCatalog.json";

const SATELLITES = [
  { Icon: Eye, label: "Visión", position: "top-0 left-0", delay: 0 },
  { Icon: Ear, label: "Audición", position: "top-0 right-1/2", delay: 0.5 },
  { Icon: Hand, label: "Motricidad", position: "bottom-0 left-1/2", delay: 1 },
  {
    Icon: Brain,
    label: "Cognición",
    position: "bottom-1/2 right-0",
    delay: 1.5,
  },
];

function NumeronymBreakdown() {
  return (
    <div
      aria-hidden="true"
      className="mb-6 flex items-end justify-start gap-1.5"
    >
      <span className="text-6xl font-bold text-brand-light">A</span>
      <div className="relative px-1.5 pt-8">
        <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-sm font-bold text-brand">
          11
        </span>
        <svg
          viewBox="0 0 100 24"
          preserveAspectRatio="none"
          className="absolute left-0 top-5 h-5 w-full text-brand/70"
        >
          <path
            d="M2,22 Q50,-6 98,22"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-3xl tracking-wide text-gray-500">
          ccessibilit
        </span>
      </div>
      <span className="text-6xl font-bold text-brand-light">Y</span>
    </div>
  );
}

function FloatingVisual() {
  return (
    <div className="relative mx-auto aspect-video w-full max-w-md">
      {SATELLITES.map(({ Icon, label, position, delay }) => (
        <motion.div
          key={label}
          className={`absolute ${position} flex flex-col items-center gap-2`}
          animate={{ y: [0, -14, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/2 text-brand-light">
            <Icon className="h-7 w-7" strokeWidth={1.5} />
          </span>
          <span className="text-xs text-gray-500">{label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function SlidePremise() {
  const info = slideCatalog.premise;
  return (
    <Slide id="premise">
      <div className="grid items-center gap-16 text-left md:grid-cols-2">
        <div>
          <h2 className="inline-flex gap-4 mb-6 text-5xl text-brand-light">
            <motion.div
              className="m-auto flex size-16 items-center justify-center rounded-full bg-brand shadow-[0_0_80px_-10px_var(--brand)]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <PersonStanding
                className="size-24 text-white aspect-square"
                strokeWidth={2.5}
              />
            </motion.div>
            {info.title}
          </h2>
          <NumeronymBreakdown />
          <p className="mb-4 text-lg italic text-gray-400">
            A11Y es el numerónimo de "Accessibility" (A + 11 letras + Y).
          </p>
          <p className="text-lg italic text-gray-400">
            Es diseñar un producto que funcione para cualquiera, en cualquier
            condición.
          </p>
        </div>
        <FloatingVisual />
      </div>
    </Slide>
  );
}
