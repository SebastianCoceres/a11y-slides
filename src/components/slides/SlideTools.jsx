import { Slide } from "@/components/deck";
import {
  Lightbulb,
  Gauge,
  ScanSearch,
  ShieldCheck,
  Palette,
  Workflow,
  ChevronDown,
  Search,
  ExternalLink,
} from "lucide-react";
import slideCatalog from "@/data/slideCatalog.json";

const DEVTOOLS_HIGHLIGHTS = [
  {
    Icon: ScanSearch,
    title: "Panel Accessibility",
    detail: "nombre, rol y valor de cualquier nodo",
  },
  {
    Icon: Palette,
    title: "Color picker",
    detail: "ratio de contraste en tiempo real",
  },
  {
    Icon: Workflow,
    title: "Árbol de accesibilidad",
    detail: "un toggle, y ves qué quedó afuera",
  },
];

// Stylized recreation of the DevTools Elements + Accessibility pane — not a
// screenshot, since capturing the browser's own chrome is out of reach for
// page-automation tools. Purely decorative: the real information lives in
// DEVTOOLS_HIGHLIGHTS next to it.
function DevToolsPanelMock() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-md rotate-1 rounded-lg border border-black/10 bg-white text-slate-800 shadow-[0_40px_90px_-25px_rgba(0,0,0,0.7)]"
    >
      <span className="absolute -right-4 -top-4 flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
        4.6:1 AA ✓
      </span>

      <div className="flex items-center gap-4 rounded-t-lg border-b border-slate-200 bg-slate-50 px-3 pt-2 text-[11px] font-medium text-slate-400">
        <span className="pb-2">Elements</span>
        <span className="pb-2">Console</span>
        <span className="pb-2">Sources</span>
        <span className="border-b-2 border-blue-600 pb-2 text-blue-600">Accessibility</span>
      </div>

      <div className="border-b border-slate-100 bg-[#0c0e14] px-3 py-2 font-mono text-[11px] leading-relaxed text-slate-400">
        <div>
          <span className="rounded bg-blue-600/40 px-0.5 text-white">
            &lt;button <span className="text-orange-300">aria-label</span>=<span className="text-emerald-300">"Buscar"</span>&gt;
          </span>
        </div>
        <div className="pl-3 text-slate-600">&lt;svg aria-hidden="true"&gt;…&lt;/svg&gt;</div>
        <div>
          <span className="text-sky-400">&lt;/button&gt;</span>
        </div>
      </div>

      <div className="space-y-3 px-3 py-3 text-[12px]">
        <div>
          <p className="mb-1 flex items-center gap-1 font-semibold text-slate-600">
            <ChevronDown className="h-3 w-3" /> ARIA Attributes
          </p>
          <div className="flex justify-between pl-4 font-mono">
            <dt className="text-slate-400">aria-label</dt>
            <dd className="text-slate-800">"Buscar"</dd>
          </div>
        </div>

        <div>
          <p className="mb-1 flex items-center gap-1 font-semibold text-slate-600">
            <ChevronDown className="h-3 w-3" /> Computed Properties
          </p>
          <dl className="space-y-1 pl-4 font-mono">
            <div className="flex items-center justify-between">
              <dt className="font-semibold text-slate-500">Name</dt>
              <dd className="text-slate-800">"Buscar"</dd>
            </div>
            <div className="space-y-1 border-l border-slate-200 pl-3">
              <div className="flex justify-between text-slate-400">
                <dt>aria-label</dt>
                <dd className="text-slate-700">"Buscar"</dd>
              </div>
              <div className="flex justify-between text-slate-400">
                <dt>Contents</dt>
                <dd className="italic">Not specified</dd>
              </div>
            </div>
            <div className="flex justify-between pt-1">
              <dt className="text-slate-400">Role</dt>
              <dd className="text-slate-800">button</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-400">Focusable</dt>
              <dd className="text-emerald-600">true</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export function SlideToolsDevTools() {
  const info = slideCatalog.toolsDevTools;
  return (
    <Slide id="toolsDevTools">
      <div className="mx-auto grid max-w-5xl items-center gap-16 text-left md:grid-cols-2">
        <div>
          <h2 className="text-5xl text-brand-light mb-4">{info.title}</h2>
          <p className="mb-8 text-lg text-gray-400">Ya viene instalado. Lo recorremos en vivo.</p>
          <ul className="mb-8 space-y-5">
            {DEVTOOLS_HIGHLIGHTS.map(({ Icon, title, detail }) => (
              <li key={title} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-indigo-300" />
                <p className="text-xl text-gray-200">
                  <strong className="text-white">{title}</strong> — {detail}
                </p>
              </li>
            ))}
          </ul>

          {/* Elemento real, no decorativo — para seleccionar e inspeccionar en
              vivo con las DevTools reales durante la demo. El botón de lupa no
              tiene texto visible: su nombre accesible sale entero de
              aria-label, el ejemplo clásico de por qué ARIA importa.
              form + role="search" (en vez de un <div>) también saca este
              grupo del "Ignored": pasa a ser un landmark real, no genérico. */}
          <form
            role="search"
            onSubmit={(event) => event.preventDefault()}
            className="flex items-center gap-2"
          >
            <label htmlFor="tools-devtools-search" className="sr-only">
              Buscar
            </label>
            <input
              id="tools-devtools-search"
              type="search"
              placeholder="Buscar…"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-base text-gray-200 placeholder:text-gray-500 focus:border-brand/60 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Buscar"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand/50 bg-brand/10 text-brand-light transition-colors hover:bg-brand/20"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>
        <DevToolsPanelMock />
      </div>
    </Slide>
  );
}

export function SlideToolsLighthouse() {
  const info = slideCatalog.toolsLighthouse;
  return (
    <Slide id="toolsLighthouse">
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="text-5xl text-brand-light mb-10">{info.title}</h2>
        <div className="mb-6 flex items-start gap-4">
          <Lightbulb className="mt-1 h-7 w-7 shrink-0 text-indigo-300" />
          <p className="text-2xl leading-relaxed text-gray-200">
            <strong className="text-white">Lighthouse</strong> audita accesibilidad, performance,
            buenas prácticas y SEO en un solo reporte con puntaje 0-100 — integrado en DevTools y
            disponible como CLI.
          </p>
        </div>
        <div className="ml-11 flex items-start gap-3 border-l border-white/10 pl-6">
          <Gauge className="mt-0.5 h-5 w-5 shrink-0 text-gray-500" />
          <p className="text-base text-gray-400">
            <strong className="text-gray-300">PageSpeed Insights</strong> es su hermano: corre el mismo
            motor pero como servicio web de Google, sin necesidad de tener el proyecto local, y suma
            datos reales de usuarios a los datos de laboratorio.
          </p>
        </div>
      </div>
    </Slide>
  );
}

export function SlideToolsA11yEngines() {
  const info = slideCatalog.toolsA11yEngines;
  return (
    <Slide id="toolsA11yEngines">
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="text-5xl text-brand-light mb-10">{info.title}</h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <a
              href="https://github.com/microsoft/accessibility-insights-web"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 flex items-center gap-2 text-xl font-bold text-white transition-colors hover:text-indigo-300"
            >
              <ScanSearch className="h-5 w-5 shrink-0 text-indigo-300" />
              Accessibility Insights for Web
              <ExternalLink className="h-4 w-4 shrink-0 text-gray-500" />
            </a>
            <p className="text-base text-gray-400">
              Extensión de Microsoft: FastPass corre un chequeo automatizado en segundos, y Assessment
              guía paso a paso los criterios que solo se verifican a mano, como el orden del foco.
            </p>
          </div>
          <div className="sm:border-l sm:border-white/10 sm:pl-10">
            <a
              href="https://github.com/dequelabs/axe-core"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 flex items-center gap-2 text-xl font-bold text-white transition-colors hover:text-indigo-300"
            >
              <ShieldCheck className="h-5 w-5 shrink-0 text-indigo-300" />
              axe-core (Deque)
              <ExternalLink className="h-4 w-4 shrink-0 text-gray-500" />
            </a>
            <p className="text-base text-gray-400">
              No tiene interfaz propia: es el motor de reglas WCAG que corre por debajo de Lighthouse, de
              esta misma extensión, y de las herramientas de testing que siguen.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function SlideToolsTesting() {
  const info = slideCatalog.toolsTesting;
  return (
    <Slide id="toolsTesting">
      <div className="mx-auto max-w-3xl text-left">
        <h2 className="text-5xl text-brand-light mb-8">{info.title}</h2>
        <div className="space-y-5 text-2xl leading-relaxed text-gray-200">
          <p>
            <strong className="text-white">Playwright</strong> es un runner end-to-end — con{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-lg text-indigo-300">
              @axe-core/playwright
            </code>
            , cada test que ya valida funcionalidad corre además las reglas de axe sobre la página
            completa.
          </p>
        </div>
      </div>
    </Slide>
  );
}
