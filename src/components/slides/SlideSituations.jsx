import { Slide } from "@/components/deck";
import {
  Baby,
  Bandage,
  Sun,
  Wifi,
  Snowflake,
  Glasses,
  PersonStanding,
} from "lucide-react";
import slideCatalog from "@/data/slideCatalog.json";

const situations = [
  {
    icon: Sun,
    situation: "Sentir el reflejo del sol y no ver bien la pantalla",
    size: "text-2xl",
  },
  { icon: Wifi, situation: "Tener una conexión lenta", size: "text-lg" },
  {
    icon: Snowflake,
    situation: "Llevar guantes (invierno o trabajo)",
    size: "text-lg",
  },
  {
    icon: Glasses,
    situation: "Perderse o romperse las gafas",
    size: "text-xl",
  },
  {
    icon: PersonStanding,
    situation: "Envejecer viene con pérdida de visión y destreza",
    size: "text-2xl",
  },
  {
    icon: Baby,
    situation: "Sostener un bebé con una sola mano",
    size: "text-lg",
  },
  {
    icon: Bandage,
    situation: "Tener una lesión temporal (dedo vendado)",
    size: "text-xl",
  },
];

export default function SlideSituations() {
  const info = slideCatalog.situations;
  return (
    <Slide id="situations">
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="text-5xl text-brand-light mb-3">{info.title}</h2>
        <p className="text-lg italic text-gray-400 mb-12">
          Es para todo el mundo, en algún momento.
        </p>
        <div className="flex flex-wrap gap-x-10 gap-y-7">
          {situations.map(({ icon: Icon, situation, size }) => (
            <div key={situation} className={`flex items-center gap-3 ${size} text-gray-200`}>
              <Icon className="h-[1em] w-[1em] shrink-0 text-purple-300" strokeWidth={1.75} />
              <span>{situation}</span>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
