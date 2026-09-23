import { Slide } from "@/components/deck";
import slideCatalog from "@/data/slideCatalog.json";

const TAKEAWAYS = [
  "Una propiedad de calidad",
  "Para humanos y máquinas",
  "Temprano y automatizado",
];

export default function SlideClosing() {
  const info = slideCatalog.closing;
  return (
    <Slide id="closing">
      <div className="mx-auto max-w-4xl text-left">
        <ul className="space-y-4">
          {TAKEAWAYS.map((text) => (
            <li
              key={text}
              className="border-t border-deck-ink/10 pt-4 text-4xl text-deck-ink"
            >
              {text}
            </li>
          ))}
        </ul>
        <h2 className="mt-14 text-5xl text-deck-title">{info.title}</h2>
      </div>
    </Slide>
  );
}
