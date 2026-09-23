import { Slide } from "@/components/deck";
import { Accessibility, Baby, Bike, Luggage, ShoppingCart } from "lucide-react";
import { motion } from "motion/react";
import slideCatalog from "@/data/slideCatalog.json";

const BENEFICIARIES = [
  { Icon: Baby, label: "Cochecitos", position: "top-0 left-0", delay: 0 },
  { Icon: Luggage, label: "Maletas", position: "top-0 right-0", delay: 0.5 },
  { Icon: Bike, label: "Ciclistas", position: "bottom-0 left-0", delay: 1 },
  {
    Icon: ShoppingCart,
    label: "Repartos",
    position: "bottom-0 right-0",
    delay: 1.5,
  },
];

const ORIGINS = [
  { name: "Rampas", origin: "para sillas de ruedas" },
  { name: "Subtítulos", origin: "para personas sordas" },
  { name: "Control por voz", origin: "para baja movilidad" },
];

function RampVisual() {
  return (
    <div className="relative mx-auto aspect-video w-full max-w-md">
      <motion.div
        className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand shadow-[0_0_80px_-10px_var(--brand)]"
        animate={{ y: ["-50%", "-58%", "-50%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Accessibility className="size-9 text-white" strokeWidth={2} />
      </motion.div>
      {BENEFICIARIES.map(({ Icon, label, position, delay }) => (
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
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-deck-ink/10 bg-deck-ink/2 text-deck-accent">
            <Icon className="h-7 w-7" strokeWidth={1.5} />
          </span>
          <span className="text-xs text-deck-muted">{label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function SlideAccessBenefits() {
  const info = slideCatalog.accessBenefits;
  return (
    <Slide id="accessBenefits">
      <div className="grid items-center gap-16 text-left md:grid-cols-2">
        <div>
          <h2 className="text-4xl text-deck-title mb-3">{info.title}</h2>
          <p className="mb-8 text-2xl text-deck-body">
            Pensado para uno, lo usan todos.
          </p>
          <ul className="space-y-3">
            {ORIGINS.map(({ name, origin }) => (
              <li
                key={name}
                className="border-t border-deck-ink/10 pt-3 text-lg text-deck-muted"
              >
                <strong className="text-deck-ink">{name}</strong> — {origin}
              </li>
            ))}
          </ul>
        </div>
        <RampVisual />
      </div>
    </Slide>
  );
}
