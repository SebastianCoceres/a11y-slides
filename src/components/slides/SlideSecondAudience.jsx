import { Slide } from "@/components/deck";
import { Puzzle, Plug, ScanSearch, FolderGit2 } from "lucide-react";
import slideCatalog from "@/data/slideCatalog.json";

export function SlideSecondAudience() {
  const info = slideCatalog.secondAudience;
  return (
    <Slide id="secondAudience">
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="text-5xl text-deck-title mb-10">{info.title}</h2>
        <div className="mb-10 flex flex-wrap items-baseline gap-5">
          <span className="text-gradient-brand font-mono text-8xl font-black leading-none">
            57%
          </span>
          <p className="max-w-xs text-xl text-deck-soft">
            del tráfico web ya no es humano
            <span className="mt-1 block text-xs text-deck-muted">
              Cloudflare Radar, 2026
            </span>
          </p>
        </div>
        <div className="flex flex-wrap gap-x-14 gap-y-5 border-t border-deck-ink/10 pt-6">
          <div>
            <div className="font-mono text-2xl font-bold tabular-nums text-deck-ink">
              95.9%
            </div>
            <p className="max-w-xs text-base text-deck-muted">
              de los sitios top falla WCAG
              <span className="mt-1 block text-xs">WebAIM Million, 2026</span>
            </p>
          </div>
          <div>
            <div className="font-mono text-2xl font-bold tabular-nums text-deck-ink">
              400M → 1.000M
            </div>
            <p className="max-w-xs text-base text-deck-muted">
              usuarios semanales de ChatGPT
              <span className="mt-1 block text-xs">
                OpenAI, feb. 2025 → ago. 2026
              </span>
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}

const DOM_NODES = [
  { x: 120, y: 14, label: "html" },
  { x: 50, y: 54, label: "div" },
  { x: 120, y: 54, label: "div" },
  { x: 190, y: 54, label: "div" },
  { x: 25, y: 96, label: "div" },
  { x: 65, y: 96, label: "span" },
  { x: 120, y: 96, label: "div" },
  { x: 100, y: 138, label: "div" },
  { x: 140, y: 138, label: "p" },
  { x: 190, y: 96, label: "div" },
];

const DOM_EDGES = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 4],
  [1, 5],
  [2, 6],
  [6, 7],
  [6, 8],
  [3, 9],
];

function DomTreeDiagram({ className }) {
  return (
    <svg
      viewBox="0 0 240 150"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
    >
      {DOM_EDGES.map(([from, to]) => (
        <line
          key={`${from}-${to}`}
          x1={DOM_NODES[from].x}
          y1={DOM_NODES[from].y}
          x2={DOM_NODES[to].x}
          y2={DOM_NODES[to].y}
          strokeWidth="1.25"
          opacity="0.6"
        />
      ))}
      {DOM_NODES.map(({ x, y, label }, i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="4" fill="currentColor" stroke="none" />
          <text
            x={x}
            y={y - 9}
            fontSize="7"
            fontFamily="monospace"
            fill="currentColor"
            textAnchor="middle"
          >
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}

const A11Y_NODES = [
  { x: 120, y: 22, label: "document" },
  { x: 55, y: 112, label: "heading" },
  { x: 185, y: 112, label: "botón: Enviar" },
];

function AccessibilityTreeDiagram({ className }) {
  return (
    <svg
      viewBox="0 0 240 150"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
    >
      <line x1="120" y1="22" x2="55" y2="112" strokeWidth="1.5" opacity="0.7" />
      <line
        x1="120"
        y1="22"
        x2="185"
        y2="112"
        strokeWidth="1.5"
        opacity="0.7"
      />
      {A11Y_NODES.map(({ x, y, label }, i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="5" fill="currentColor" stroke="none" />
          <text
            x={x}
            y={y + 20}
            fontSize="10"
            fontFamily="monospace"
            fill="currentColor"
            textAnchor="middle"
          >
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function SlideSecondAudienceMechanism() {
  const info = slideCatalog.secondAudienceMechanism;
  return (
    <Slide id="secondAudienceMechanism">
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="text-5xl text-deck-title mb-8">{info.title}</h2>
        <p className="max-w-xl text-2xl leading-relaxed text-deck-body">
          Un agente no lee píxeles ni HTML: lee el mismo árbol de accesibilidad
          que ya usa un lector de pantalla.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-10 border-t border-deck-ink/10 pt-8 sm:grid-cols-2">
          <div>
            <DomTreeDiagram className="h-36 w-full text-deck-muted" />
            <div className="mt-2 font-mono text-3xl font-bold text-deck-faint">
              Cientos de miles
            </div>
            <p className="mt-1 text-sm text-deck-muted">
              tokens de HTML crudo
            </p>
          </div>
          <div>
            <AccessibilityTreeDiagram className="h-36 w-full text-deck-title" />
            <div className="mt-2 font-mono text-5xl font-black tabular-nums text-deck-ink">
              ~200-400
            </div>
            <p className="mt-1 text-sm text-deck-muted">
              tokens por snapshot del árbol — Playwright MCP
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}

const LLM_EVAL_STATS = [
  { stat: "12%", label: "sin pedir accesibilidad" },
  { stat: "0%", label: "peor caso: home de e-commerce" },
  { stat: "60%", label: "con un recordatorio en el prompt" },
  { stat: "86%", label: "corriendo sus propios tests" },
];

export function SlideSecondAudienceLlmEval() {
  const info = slideCatalog.secondAudienceLlmEval;
  return (
    <Slide id="secondAudienceLlmEval">
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="text-5xl text-deck-title mb-10">{info.title}</h2>
        <div className="grid grid-cols-1 gap-x-12 gap-y-8 border-t border-deck-ink/10 pt-8 sm:grid-cols-2">
          {LLM_EVAL_STATS.map(({ stat, label }) => (
            <div key={label}>
              <div className="font-mono text-5xl font-black tabular-nums text-deck-ink">{stat}</div>
              <p className="mt-1 max-w-xs text-lg text-deck-muted">{label}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs uppercase tracking-wide text-deck-faint">
          8 modelos · 32 casos · Microsoft,{" "}
          <a
            href="https://microsoft.github.io/a11y-llm-eval-report/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-deck-ghost underline-offset-2 hover:text-deck-soft"
          >
            a11y-llm-eval-report
          </a>
          , 2026
        </p>
      </div>
    </Slide>
  );
}

const tools = [
  {
    icon: Puzzle,
    title: "Skills",
    desc: "El conocimiento de accesibilidad, para el agente",
  },
  {
    icon: Plug,
    title: "MCPs",
    desc: "Un navegador real, para ver lo que el análisis estático no ve",
  },
];

export function SlideSecondAudienceTools() {
  const info = slideCatalog.secondAudienceTools;
  return (
    <Slide id="secondAudienceTools">
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="text-5xl text-deck-title mb-10">{info.title}</h2>
        <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
          {tools.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border-t border-deck-ink/10 pt-6">
              <div className="mb-3 flex items-center gap-3 text-4xl font-bold text-deck-ink">
                <Icon className="h-8 w-8 shrink-0 text-deck-accent" />
                {title}
              </div>
              <p className="text-2xl leading-snug text-deck-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

export function SlideSecondAudienceCodeProximity() {
  const info = slideCatalog.secondAudienceCodeProximity;
  return (
    <Slide id="secondAudienceCodeProximity">
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="text-5xl text-deck-title mb-10">{info.title}</h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1fr_1.3fr] sm:items-start">
          <div>
            <div className="mb-2 flex items-center gap-2 text-lg font-semibold text-deck-muted">
              <ScanSearch className="h-5 w-5" />
              Una herramienta de auditoría
            </div>
            <p className="text-xl text-deck-muted">
              Ve el síntoma, no el código.
            </p>
          </div>
          <div>
            <div className="mb-2 flex items-center gap-2 text-2xl font-bold text-deck-ink">
              <FolderGit2 className="h-6 w-6 text-deck-title" />
              Un agente con el repositorio
            </div>
            <p className="text-2xl leading-snug text-deck-body">
              Ve el síntoma y el código: un solo fix, en la fuente.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}

const WEBMCP_TIMELINE = [
  { date: "ene 2025", label: "Nace MCP-B", href: "https://github.com/WebMCP-org" },
  { date: "ago 2025", label: "Google + Microsoft unifican la propuesta" },
  { date: "sept 2025", label: "El W3C la acepta" },
  { date: "feb 2026", label: "Se publica el spec" },
  { date: "hoy", label: "Origin trial en Chrome y Edge" },
];

export function SlideSecondAudienceWebmcp() {
  const info = slideCatalog.secondAudienceWebmcp;
  return (
    <Slide id="secondAudienceWebmcp">
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="text-5xl text-deck-title mb-3">{info.title}</h2>
        <p className="mb-10 text-xl text-deck-soft">
          El sitio declara funciones que un agente puede invocar.
        </p>
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-1.75 h-px bg-deck-ink/15"
          />
          <div className="relative grid grid-cols-5 gap-3">
            {WEBMCP_TIMELINE.map(({ date, label, href }, i) => {
              const isLast = i === WEBMCP_TIMELINE.length - 1;
              return (
                <div key={date} className="flex flex-col items-start">
                  <span
                    aria-hidden="true"
                    className={`h-3.5 w-3.5 rounded-full border-2 ${
                      isLast
                        ? "border-deck-title bg-deck-title"
                        : "border-deck-ink/40 bg-deck-bg"
                    }`}
                  />
                  <div
                    className={`mt-3 font-mono text-base font-bold ${isLast ? "text-deck-title" : "text-deck-ink"}`}
                  >
                    {date}
                  </div>
                  <p className="mt-1 text-xs leading-snug text-deck-muted">
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-deck-ghost underline-offset-2 hover:text-deck-soft"
                      >
                        {label}
                      </a>
                    ) : (
                      label
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <p className="mb-2 text-xs uppercase tracking-wide text-deck-muted">
              Imperativa
            </p>
            <pre className="overflow-x-auto rounded-lg border border-deck-ink/10 bg-deck-ink/5 p-4 font-mono text-xs leading-relaxed text-deck-accent">
              {`await document.modelContext
  .registerTool({
    name: "add-todo",
    description: "Add an item",
    async execute({ text }) {
      /* ... */
    }
  });`}
            </pre>
          </div>
          <div>
            <p className="mb-2 text-xs uppercase tracking-wide text-deck-muted">
              Declarativa
            </p>
            <pre className="overflow-x-auto rounded-lg border border-deck-ink/10 bg-deck-ink/5 p-4 font-mono text-xs leading-relaxed text-deck-accent">
              {/* name and required already exist on any accessible form —
                  WebMCP reuses them instead of inventing AI-only attributes. */}
              {`<form toolname="search-cars"
  tooldescription="Buscar por
    marca/modelo">
  <input `}
              <mark className="rounded bg-brand/30 px-0.5 font-bold text-deck-ink">
                name
              </mark>
              {`="make" `}
              <mark className="rounded bg-brand/30 px-0.5 font-bold text-deck-ink">
                required
              </mark>
              {`
    toolparamdescription="...">
  <button type=submit>Search</button>
</form>`}
            </pre>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function SlideSecondAudienceWebmcpFallback() {
  const info = slideCatalog.secondAudienceWebmcpFallback;
  return (
    <Slide id="secondAudienceWebmcpFallback">
      <div className="mx-auto max-w-3xl text-left">
        <h2 className="text-5xl text-deck-title mb-10">{info.title}</h2>
        <p className="text-3xl font-medium leading-snug text-deck-ink">
          "...it can fall back to{" "}
          <strong className="font-black">
            general-purpose browser automation
          </strong>
          ."
        </p>
        <p className="mt-10 max-w-xl border-t border-deck-ink/10 pt-6 text-base italic text-deck-muted">
          "...not designed to interact directly with a page's accessibility
          tree."
        </p>
        <p className="mt-4 text-xs uppercase tracking-wide text-deck-muted">
          — WebMCP spec, webmachinelearning/webmcp
        </p>
      </div>
    </Slide>
  );
}
