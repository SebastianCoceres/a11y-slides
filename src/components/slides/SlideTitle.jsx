import { Slide } from "@/components/deck";
import {
  ArrowRight,
  AudioLines,
  Check,
  Image as ImageIcon,
  Volume2,
} from "lucide-react";
import slideCatalog from "@/data/slideCatalog.json";

function DotGrid({ className }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 opacity-10 ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
        backgroundSize: "14px 14px",
      }}
    />
  );
}

// Each Cell is one tile of the fixed 3x3 grid that overlays the slide, all
// tiles the same size (equal grid tracks). It establishes a size container
// so its widget can be sized in `cqmin` (percentage of the tile's own
// smaller dimension) instead of viewport units, and centers it so the
// widget scales up to fill the tile — like object-contain — no matter the
// screen's own width/height ratio.
function Cell({ className = "", children }) {
  return (
    <div
      className={`hidden @container-size flex items-center justify-center opacity-40 blur-[0.5px] lg:flex ${className}`}
    >
      {children}
    </div>
  );
}

function Card({ className, children }) {
  return (
    <div
      className={`rounded-[3cqmin] border border-white/10 bg-white/2 ${className}`}
    >
      {children}
    </div>
  );
}

function TypographyCard() {
  return (
    <Card className="w-[90cqmin] p-[12cqmin]">
      <p className="text-[26cqmin] leading-none text-gray-500">Aa</p>
      <div className="mt-[7cqmin] space-y-[4cqmin]">
        <div className="h-[3cqmin] w-full rounded-full bg-white/15" />
        <div className="h-[3cqmin] w-2/3 rounded-full bg-white/10" />
      </div>
    </Card>
  );
}

function ColorSwatches() {
  return (
    <div aria-hidden="true" className="flex items-center gap-[7cqmin]">
      <span className="h-[19cqmin] w-[19cqmin] rounded-full border border-white/25" />
      <span className="flex h-[19cqmin] w-[19cqmin] items-center justify-center rounded-full bg-brand">
        <Check
          className="h-[9.5cqmin] w-[9.5cqmin] text-white"
          strokeWidth={3}
        />
      </span>
      <span className="h-[19cqmin] w-[19cqmin] rounded-full bg-teal-600/70" />
      <span className="h-[19cqmin] w-[19cqmin] rounded-full bg-gray-600/70" />
    </div>
  );
}

function TabFocusCard() {
  return (
    <div className="relative rounded-[5cqmin] border-2 border-dashed border-white/20 p-[9cqmin]">
      <span className="absolute right-[-2cqmin] top-[-2cqmin] h-[4.5cqmin] w-[4.5cqmin] rounded-xs bg-brand" />
      <span className="absolute bottom-[-2cqmin] right-[-2cqmin] h-[4.5cqmin] w-[4.5cqmin] rounded-xs bg-brand" />
      <span className="flex items-center gap-[3.5cqmin] rounded-full border border-white/20 px-[9.5cqmin] py-[5cqmin] text-[6.5cqmin] text-gray-300">
        Tab <ArrowRight className="h-[8cqmin] w-[8cqmin]" />
      </span>
    </div>
  );
}

function AltImageCard() {
  return (
    <Card className="relative flex h-[60cqmin] w-[85cqmin] items-center justify-center">
      <ImageIcon
        className="h-[20cqmin] w-[20cqmin] text-gray-600"
        strokeWidth={1.5}
      />
      <span className="absolute bottom-[-5cqmin] right-[-5cqmin] rounded-[2.5cqmin] border border-teal-500/40 bg-[#191919] px-[5cqmin] py-[2.5cqmin] font-mono text-[5cqmin] text-teal-400">
        ALT
      </span>
    </Card>
  );
}

function SearchFormCard() {
  return (
    <div className="flex w-[90cqmin] flex-col gap-[6cqmin]">
      <span className="rounded-[3.5cqmin] border border-white/15 px-[7cqmin] py-[4.5cqmin] text-left text-[6.5cqmin] text-gray-500">
        Buscar
      </span>
      <span className="flex items-center justify-between rounded-[3.5cqmin] border border-brand/50 px-[7cqmin] py-[4.5cqmin] text-[6.5cqmin] text-brand-light">
        Enviar <ArrowRight className="h-[8cqmin] w-[8cqmin]" />
      </span>
    </div>
  );
}

function AudioCard() {
  return (
    <div className="flex items-center gap-[6cqmin] rounded-[5cqmin] border-2 border-dashed border-white/20 px-[9cqmin] py-[7cqmin]">
      <Volume2 className="h-[11cqmin] w-[11cqmin] shrink-0 text-teal-400" />
      <AudioLines className="h-[13cqmin] w-[38cqmin] text-teal-500/80" />
    </div>
  );
}

function ChecklistRow({ done, width = "w-[38cqmin]" }) {
  return (
    <div className="flex items-center gap-[5cqmin]">
      {done ? (
        <span className="flex h-[8cqmin] w-[8cqmin] shrink-0 items-center justify-center rounded-full bg-brand">
          <Check
            className="h-[5cqmin] w-[5cqmin] text-white"
            strokeWidth={3.5}
          />
        </span>
      ) : (
        <span className="h-[8cqmin] w-[8cqmin] shrink-0 rounded-full border border-white/25" />
      )}
      <span
        className={`h-[2.5cqmin] rounded-full ${done ? "bg-white/25" : "bg-white/10"} ${width}`}
      />
    </div>
  );
}

function ChecklistCard() {
  return (
    <Card className="w-[90cqmin] space-y-[6cqmin] p-[9.5cqmin]">
      <ChecklistRow width="w-[38cqmin]" />
      <ChecklistRow done width="w-[55cqmin]" />
      <ChecklistRow width="w-[32cqmin]" />
    </Card>
  );
}

// Fixed 3x3 grid overlaying the whole slide, all 9 tracks equal size. Every
// decorative widget gets its own tile and is centered to fill it (see
// Cell) — the middle tile is left empty for the title, which Slide already
// centers on its own.
function DecorativeGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 grid grid-cols-3 grid-rows-3 gap-[1.5vw]">
      <Cell className="col-start-1 row-start-1">
        <TypographyCard />
      </Cell>
      <Cell className="col-start-1 row-start-2">
        <ColorSwatches />
      </Cell>
      <Cell className="col-start-1 row-start-3">
        <TabFocusCard />
      </Cell>

      <Cell className="col-start-3 row-start-1">
        <SearchFormCard />
      </Cell>
      <Cell className="col-start-3 row-start-2">
        <AudioCard />
      </Cell>
      <Cell className="col-start-3 row-start-3">
        <ChecklistCard />
      </Cell>

      <Cell className="col-start-2 row-start-3">
        <AltImageCard />
      </Cell>
    </div>
  );
}

export default function SlideTitle() {
  const info = slideCatalog.title;
  return (
    <Slide id="title">
      <DotGrid className="bottom-[6%] left-[24%]" />
      <DotGrid className="bottom-[4%] right-[3%]" />
      <DecorativeGrid />

      <h1 className="text-8xl text-brand-light">{info.title}</h1>
    </Slide>
  );
}
