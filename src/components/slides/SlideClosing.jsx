import { Slide } from "@/components/deck";
import slideCatalog from "@/data/slideCatalog.json";

export default function SlideClosing() {
  const info = slideCatalog.closing;
  return (
    <Slide id="closing">
      <h2 className="text-4xl text-brand-light">{info.title}</h2>
    </Slide>
  );
}
