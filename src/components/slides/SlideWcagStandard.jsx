import { Slide } from "@/components/deck";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, ScrollText, Layers } from "lucide-react";
import slideCatalog from "@/data/slideCatalog.json";

const facts = [
  {
    icon: Globe,
    title: "W3C",
    desc: "World Wide Web Consortium: el organismo que estandariza la web desde 1994.",
  },
  {
    icon: ScrollText,
    title: "WCAG 2.2",
    desc: "Web Content Accessibility Guidelines: la guía técnica vigente, con criterios verificables.",
  },
  {
    icon: Layers,
    title: "Niveles A / AA / AAA",
    desc: "AA es el nivel exigido por normativas como la directiva UE 2019/882 y el Decreto-ley 1/2022.",
  },
];

export default function SlideWcagStandard() {
  const info = slideCatalog.wcagStandard;
  return (
    <Slide id="wcagStandard">
      <h2 className="inline-flex items-center gap-4 text-4xl text-brand-light mb-2">
        {info.title}
      </h2>
      <p className="text-lg text-gray-400 mb-8 italic">
        Son recomendaciones que establecen criterios para hacer el contenido
        webº más accesible
      </p>
      <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
        {facts.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="bg-gray-800 border-gray-700 shadow-none">
            <CardContent className="p-6 text-left">
              <Icon className="w-6 h-6 text-sky-300 mb-3" />
              <h3 className="text-white font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-400">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Slide>
  );
}
