import { Slide } from "@/components/deck";
import slideCatalog from "@/data/slideCatalog.json";

const facts = [
  { value: "30+", label: "años de WCAG, publicada por el W3C desde 1994" },
  { value: "2.2", label: "versión vigente, con criterios verificables" },
  {
    value: "A · AA · AAA",
    label: "niveles de conformidad — AA es el exigido por normativas como la directiva UE 2019/882",
  },
];

export default function SlideWcagStandard() {
  const info = slideCatalog.wcagStandard;
  return (
    <Slide id="wcagStandard">
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="text-5xl text-brand-light mb-6">{info.title}</h2>
        <p className="max-w-2xl text-lg text-gray-300 mb-12">
          El W3C define las Web Content Accessibility Guidelines: recomendaciones que establecen
          criterios verificables para que el contenido web sea accesible.
        </p>
        <div className="grid grid-cols-1 gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
          {facts.map(({ value, label }) => (
            <div key={value}>
              <div className="font-mono text-4xl font-bold tabular-nums text-white">{value}</div>
              <p className="mt-2 text-sm text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
