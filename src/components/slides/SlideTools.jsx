import { Slide } from "@/components/deck";
import { Lightbulb, Gauge, ScanSearch, ShieldCheck } from "lucide-react";
import slideCatalog from "@/data/slideCatalog.json";

export function SlideToolsDevTools() {
  const info = slideCatalog.toolsDevTools;
  return (
    <Slide id="toolsDevTools">
      <div className="mx-auto max-w-3xl text-left">
        <h2 className="text-5xl text-brand-light mb-8">{info.title}</h2>
        <p className="text-2xl leading-relaxed text-gray-200">
          Ya viene instalado. El panel <strong className="text-white">Accessibility</strong> muestra
          nombre, rol y valor de cualquier nodo, el color picker calcula el contraste al vuelo, y el
          toggle del árbol de accesibilidad muestra de un vistazo qué quedó afuera.
        </p>
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
          <Lightbulb className="mt-1 h-7 w-7 shrink-0 text-teal-300" />
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
            <div className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
              <ScanSearch className="h-5 w-5 text-cyan-300" />
              Accessibility Insights for Web
            </div>
            <p className="text-base text-gray-400">
              Extensión de Microsoft: FastPass corre un chequeo automatizado en segundos, y Assessment
              guía paso a paso los criterios que solo se verifican a mano, como el orden del foco.
            </p>
          </div>
          <div className="sm:border-l sm:border-white/10 sm:pl-10">
            <div className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
              <ShieldCheck className="h-5 w-5 text-cyan-300" />
              axe-core (Deque)
            </div>
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
            <strong className="text-white">Playwright</strong> y{" "}
            <strong className="text-white">Cypress</strong> son runners end-to-end — con{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-lg text-teal-300">
              @axe-core/playwright
            </code>{" "}
            o{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-lg text-teal-300">
              cypress-axe
            </code>
            , cada test que ya valida funcionalidad corre además las reglas de axe sobre la página
            completa.
          </p>
          <p>
            <strong className="text-white">Vitest</strong> opera a otro nivel: con{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-lg text-teal-300">
              vitest-axe
            </code>{" "}
            audita un componente aislado antes de que llegue a integrarse en ninguna página.
          </p>
        </div>
      </div>
    </Slide>
  );
}

export function SlideToolsRecommendation() {
  return (
    <Slide id="toolsRecommendation">
      <div className="mx-auto max-w-4xl text-left">
        <p className="mb-6 text-3xl leading-[1.2] text-white sm:text-4xl">
          Doce modales distintos porque cada equipo construyó el suyo: un bug de teclado se arregla doce
          veces, o aparece en el módulo equivocado, en el peor momento del sprint.
        </p>
        <p className="text-2xl font-bold leading-relaxed text-brand-light">
          Un solo componente bien hecho se corrige una vez y el arreglo se replica solo.
        </p>
      </div>
    </Slide>
  );
}
