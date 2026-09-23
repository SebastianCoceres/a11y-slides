import { Slide } from "@/components/deck";
import slideCatalog from "@/data/slideCatalog.json";

const facts = [
  { value: "1999", label: "primera versión, W3C" },
  { value: "2.2", label: "versión vigente (2023)" },
  { value: "A · AA · AAA", label: "AA: lo que exige la normativa europea" },
];

export default function SlideWcagStandard() {
  const info = slideCatalog.wcagStandard;
  return (
    <Slide id="wcagStandard">
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="text-5xl text-brand-light mb-12">{info.title}</h2>
        <div className="grid grid-cols-1 gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
          {facts.map(({ value, label }) => (
            <div key={value}>
              <div className="font-mono text-4xl font-bold tabular-nums text-white">{value}</div>
              <p className="mt-2 text-base text-gray-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
