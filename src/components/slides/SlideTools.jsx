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
  Eye,
} from "lucide-react";
import slideCatalog from "@/data/slideCatalog.json";

const DEVTOOLS_HIGHLIGHTS = [
  {
    Icon: ScanSearch,
    title: "Panel Accessibility",
    detail: "nombre, rol y valor",
  },
  {
    Icon: Workflow,
    title: "Árbol de accesibilidad",
    detail: "lo que lee un lector de pantalla",
  },
  {
    Icon: Palette,
    title: "Color picker",
    detail: "contraste en tiempo real",
  },
  {
    Icon: Eye,
    title: "Rendering",
    detail: "emula visión y movimiento reducido",
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
      className="relative mx-auto w-full max-w-md rotate-1 motion-safe:animate-float rounded-lg border border-black/10 bg-white text-slate-800 shadow-[0_40px_90px_-25px_rgba(0,0,0,0.7)]"
    >
      <span className="absolute -right-4 -top-4 flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
        4.6:1 AA ✓
      </span>

      <div className="flex items-center gap-4 rounded-t-lg border-b border-slate-200 bg-slate-50 px-3 pt-2 text-[11px] font-medium text-slate-400">
        <span className="pb-2">Elements</span>
        <span className="pb-2">Console</span>
        <span className="pb-2">Sources</span>
        <span className="border-b-2 border-blue-600 pb-2 text-blue-600">
          Accessibility
        </span>
      </div>

      <div className="border-b border-slate-100 bg-[#0c0e14] px-3 py-2 font-mono text-[11px] leading-relaxed text-slate-400">
        <div>
          <span className="rounded bg-blue-600/40 px-0.5 text-white">
            &lt;button <span className="text-orange-300">aria-label</span>=
            <span className="text-emerald-300">"Buscar"</span>&gt;
          </span>
        </div>
        <div className="pl-3 text-slate-600">
          &lt;svg aria-hidden="true"&gt;…&lt;/svg&gt;
        </div>
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
          <p className="text-3xl leading-snug text-gray-200">
            <strong className="text-white">Lighthouse</strong>: auditoría
            dentro de DevTools, de 0 a 100.
          </p>
        </div>
        <div className="ml-11 flex items-start gap-3 border-l border-white/10 pl-6">
          <Gauge className="mt-1 h-5 w-5 shrink-0 text-gray-500" />
          <p className="text-xl text-gray-400">
            <strong className="text-gray-300">PageSpeed Insights</strong>: lo
            mismo, sin depender de tu máquina.
          </p>
        </div>
      </div>
    </Slide>
  );
}

export function SlideToolsAccessibilityInsights() {
  const info = slideCatalog.toolsAccessibilityInsights;
  return (
    <Slide id="toolsAccessibilityInsights">
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="text-5xl text-brand-light mb-10">{info.title}</h2>
        <a
          href="https://github.com/microsoft/accessibility-insights-web"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-3 flex items-center gap-2 text-2xl font-bold text-white transition-colors hover:text-indigo-300"
        >
          <ScanSearch className="h-6 w-6 shrink-0 text-indigo-300" />
          Accessibility Insights for Web
          <ExternalLink className="h-5 w-5 shrink-0 text-gray-500" />
        </a>
        <dl className="mt-8 max-w-2xl space-y-4 text-2xl">
          <div className="border-t border-white/10 pt-4">
            <dt className="inline font-bold text-white">FastPass</dt>
            <dd className="inline text-gray-300"> — chequeo automático</dd>
          </div>
          <div className="border-t border-white/10 pt-4">
            <dt className="inline font-bold text-white">Assessment</dt>
            <dd className="inline text-gray-300">
              {" "}
              — guía los chequeos manuales
            </dd>
          </div>
        </dl>
      </div>
    </Slide>
  );
}

export function SlideToolsAxeCore() {
  const info = slideCatalog.toolsAxeCore;
  return (
    <Slide id="toolsAxeCore">
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="text-5xl text-brand-light mb-10">{info.title}</h2>
        <a
          href="https://github.com/dequelabs/axe-core"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-3 flex items-center gap-2 text-2xl font-bold text-white transition-colors hover:text-indigo-300"
        >
          <ShieldCheck className="h-6 w-6 shrink-0 text-indigo-300" />
          axe-core (Deque)
          <ExternalLink className="h-5 w-5 shrink-0 text-gray-500" />
        </a>
        <p className="max-w-2xl text-3xl leading-snug text-gray-200">
          El motor detrás de Lighthouse y Accessibility Insights.
        </p>
        <p className="mt-3 text-xl text-gray-400">
          Open source, para usar desde código.
        </p>
      </div>
    </Slide>
  );
}

function PlaywrightLogo({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M23.996 7.462c-.056.837-.257 2.135-.716 3.85-.995 3.715-4.27 10.874-10.42 9.227-6.15-1.65-5.407-9.487-4.412-13.201.46-1.716.934-2.94 1.305-3.694.42-.853.846-.289 1.815.523.684.573 2.41 1.791 5.011 2.488 2.601.697 4.706.506 5.583.352 1.245-.219 1.897-.494 1.834.455Zm-9.807 3.863s-.127-1.819-1.773-2.286c-1.644-.467-2.613 1.04-2.613 1.04Zm4.058 4.539-7.769-2.172s.446 2.306 3.338 3.153c2.862.836 4.43-.98 4.43-.981Zm2.701-2.51s-.13-1.818-1.773-2.286c-1.644-.469-2.612 1.038-2.612 1.038ZM8.57 18.23c-4.749 1.279-7.261-4.224-8.021-7.08C.197 9.831.044 8.832.003 8.188c-.047-.73.455-.52 1.415-.354.677.118 2.3.261 4.308-.28a11.28 11.28 0 0 0 2.41-.956c-.058.197-.114.4-.17.61-.433 1.618-.827 4.055-.632 6.426-1.976.732-2.267 2.423-2.267 2.423l2.524-.715c.227 1.002.6 1.987 1.15 2.838a5.914 5.914 0 0 1-.171.049Zm-4.188-6.298c1.265-.333 1.363-1.631 1.363-1.631l-3.374.888s.745 1.076 2.01.743Z" />
    </svg>
  );
}

const PLAYWRIGHT_A11Y_TEST = `import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("la home no tiene violaciones de a11y", async ({ page }) => {
  await page.goto("/");

  const results = await new AxeBuilder({ page }).analyze();

  expect(results.violations).toEqual([]);
});`;

export function SlideToolsTesting() {
  const info = slideCatalog.toolsTesting;
  return (
    <Slide id="toolsTesting">
      <div className="mx-auto max-w-3xl text-left">
        <div className="mb-8 flex items-center gap-4">
          <PlaywrightLogo className="h-9 w-9 shrink-0 text-indigo-300" />
          <h2 className="text-5xl text-brand-light">{info.title}</h2>
        </div>
        <p className="text-3xl leading-snug text-gray-200">
          axe sobre toda la app, en cada build.
        </p>
        <p className="mt-2 text-xl text-gray-400">
          En la pipeline, con un comando o en un hook de git.
        </p>
        <pre className="mt-6 overflow-x-auto rounded-lg border border-white/10 bg-white/5 p-4 font-mono text-sm leading-relaxed text-indigo-300">
          {PLAYWRIGHT_A11Y_TEST}
        </pre>
      </div>
    </Slide>
  );
}
