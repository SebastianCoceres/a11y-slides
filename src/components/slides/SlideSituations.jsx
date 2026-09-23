import { Slide } from "@/components/deck";
import { Baby, Sun, Snowflake, Glasses, PersonStanding } from "lucide-react";
import slideCatalog from "@/data/slideCatalog.json";

const situations = [
  { icon: Sun, situation: "Sol en la pantalla", size: "text-5xl" },
  { icon: Snowflake, situation: "Guantes de trabajo", size: "text-3xl" },
  { icon: Glasses, situation: "Gafas rotas", size: "text-4xl" },
  { icon: Baby, situation: "Un bebé en brazos", size: "text-3xl" },
  { icon: PersonStanding, situation: "Envejecer", size: "text-5xl" },
];

export default function SlideSituations() {
  const info = slideCatalog.situations;
  return (
    <Slide id="situations">
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="text-5xl text-brand-light mb-12">{info.title}</h2>
        <div className="flex flex-wrap items-center gap-x-12 gap-y-8">
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
