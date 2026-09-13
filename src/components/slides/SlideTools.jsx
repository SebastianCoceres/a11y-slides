import { Slide } from '@/components/deck';
import { Card, CardContent } from '@/components/ui/card';
import {
  Blocks,
  Gauge,
  Lightbulb,
  MonitorSmartphone,
  ScanEye,
  ShieldCheck,
  TestTube2,
  FlaskConical,
  Zap,
} from 'lucide-react';
import slideCatalog from '@/data/slideCatalog.json';

function ToolCard({ icon: Icon, title, desc, source }) {
  return (
    <Card className="bg-gray-800 border-gray-700 shadow-none">
      <CardContent className="p-6 text-left">
        <Icon className="w-6 h-6 text-cyan-300 mb-3" />
        <h3 className="text-white font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-400">{desc}</p>
        {source && <p className="mt-2 text-xs text-gray-600">{source}</p>}
      </CardContent>
    </Card>
  );
}

function ToolsSlide({ id, eyebrow, cols, children }) {
  const info = slideCatalog[id];
  return (
    <Slide id={id}>
      <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">{eyebrow}</p>
      <h2 className="text-4xl text-brand-light mb-8">{info.title}</h2>
      <div className={`grid gap-6 mx-auto ${cols}`}>{children}</div>
    </Slide>
  );
}

export function SlideToolsDevTools() {
  return (
    <ToolsSlide id="toolsDevTools" eyebrow="Lo más básico" cols="grid-cols-1 max-w-xl">
      <ToolCard
        icon={MonitorSmartphone}
        title="DevTools del navegador"
        desc="Ya viene instalado. El panel Accessibility muestra nombre, rol y valor de cualquier nodo, el color picker calcula el ratio de contraste al vuelo, y el toggle del árbol de accesibilidad muestra de un vistazo qué quedó afuera — todo lo que ya vimos en el anexo del árbol de accesibilidad."
      />
    </ToolsSlide>
  );
}

export function SlideToolsLighthouse() {
  return (
    <ToolsSlide id="toolsLighthouse" eyebrow="Auditoría automatizada" cols="grid-cols-2 max-w-4xl">
      <ToolCard
        icon={Lightbulb}
        title="Lighthouse"
        desc="Integrado en DevTools y disponible como CLI. Audita accesibilidad, performance, buenas prácticas y SEO en un solo reporte con puntaje 0-100 — el punto de partida para saber qué tan lejos está un sitio existente."
      />
      <ToolCard
        icon={Gauge}
        title="PageSpeed Insights"
        desc="El hermano de Lighthouse: corre el mismo motor, pero como servicio web de Google — no hace falta tener el proyecto local. Suma datos reales de usuarios (CrUX) a los datos de laboratorio."
      />
    </ToolsSlide>
  );
}

export function SlideToolsA11yEngines() {
  return (
    <ToolsSlide id="toolsA11yEngines" eyebrow="Motores dedicados a accesibilidad" cols="grid-cols-2 max-w-4xl">
      <ToolCard
        icon={ScanEye}
        title="Accessibility Insights for Web"
        desc="Extensión de Microsoft: FastPass corre un chequeo automatizado en segundos, y el modo Assessment guía paso a paso los criterios que solo se pueden verificar a mano (orden del foco, tab-stops)."
        source="github.com/microsoft/accessibility-insights-web"
      />
      <ToolCard
        icon={ShieldCheck}
        title="axe-core"
        desc="El motor de reglas WCAG de Deque. No es una herramienta con interfaz propia: es la librería que corre por debajo de Lighthouse, de esta misma extensión, y de todo lo que viene en la próxima diapositiva."
        source="github.com/dequelabs/axe-core"
      />
    </ToolsSlide>
  );
}

export function SlideToolsTesting() {
  return (
    <ToolsSlide id="toolsTesting" eyebrow="Para que no se rompa de nuevo" cols="grid-cols-3 max-w-5xl">
      <ToolCard
        icon={TestTube2}
        title="Playwright"
        desc="Tests end-to-end multi-navegador. Con @axe-core/playwright corre las reglas de axe sobre cada página como parte del mismo test que ya valida funcionalidad."
      />
      <ToolCard
        icon={FlaskConical}
        title="Cypress"
        desc="Mismo enfoque end-to-end, otro runner. El plugin cypress-axe integra axe-core directo en los comandos de Cypress que el equipo ya escribe."
      />
      <ToolCard
        icon={Zap}
        title="Vitest"
        desc="Tests a nivel de componente, no de página completa. Con vitest-axe se audita un componente aislado antes de que llegue a integrarse en ningún lado."
      />
    </ToolsSlide>
  );
}

export function SlideToolsRecommendation() {
  const info = slideCatalog.toolsRecommendation;
  return (
    <Slide id="toolsRecommendation">
      <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">Una recomendación, no una herramienta</p>
      <h2 className="text-4xl text-brand-light mb-8">{info.title}</h2>
      <Card className="bg-gray-800 border-gray-700 shadow-none max-w-3xl mx-auto">
        <CardContent className="p-6 flex items-start gap-3 text-left">
          <Blocks className="w-6 h-6 text-cyan-300 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-white font-bold mb-1">Componentes antes que páginas</h3>
            <p className="text-sm text-gray-400">
              Doce modales distintos porque cada equipo construyó el suyo: un bug de teclado se arregla doce
              veces, o aparece en el módulo equivocado, en el peor momento del sprint. Un solo componente bien
              hecho se corrige una vez y el arreglo se replica solo — ninguna de las herramientas anteriores
              reemplaza esa decisión de arquitectura.
            </p>
          </div>
        </CardContent>
      </Card>
    </Slide>
  );
}
