import { Slide } from "@/components/deck";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bot,
  ShieldAlert,
  TrendingUp,
  Network,
  Puzzle,
  ScanSearch,
  BookOpen,
  FolderGit2,
} from "lucide-react";
import slideCatalog from "@/data/slideCatalog.json";

const metrics = [
  {
    icon: Bot,
    value: "57%",
    label:
      "del tráfico HTTP a contenido web ya es de agentes automatizados, no personas",
    source: "Cloudflare Radar, 2026",
  },
  {
    icon: ShieldAlert,
    value: "95.9%",
    label: "de los sitios más visitados falla al menos un criterio WCAG",
    source: "WebAIM Million, 2026",
  },
  {
    icon: TrendingUp,
    value: "400M → 1.000M",
    label:
      "usuarios semanales de ChatGPT (feb. 2025 - ago. 2026) — la app que llevó a esa escala la navegación agéntica basada en ARIA que probó en Atlas",
    source: "OpenAI / TechCrunch, 2025-2026",
  },
];

export function SlideSecondAudience() {
  const info = slideCatalog.secondAudience;
  return (
    <Slide id="secondAudience">
      <h2 className="text-4xl text-brand-light mb-6">{info.title}</h2>
      <p className="mx-auto mb-8 max-w-4xl text-3xl leading-relaxed text-gray-300">
        Hoy la mayoría del tráfico que llega a un sitio ya no es humano
      </p>
      <div className="mx-auto mb-8 grid max-w-5xl grid-cols-3 gap-4">
        {metrics.map(({ icon: Icon, value, label, source }) => (
          <Card key={value} className="bg-gray-800 border-gray-700 shadow-none">
            <CardContent className="p-6 text-left">
              <Icon className="mb-3 h-6 w-6 text-teal-300" />
              <div className="mb-2 text-4xl font-bold text-white">{value}</div>
              <p className="mb-2 text-sm text-gray-400">{label}</p>
              <p className="text-xs text-gray-600">{source}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Slide>
  );
}

export function SlideSecondAudienceMechanism() {
  const info = slideCatalog.secondAudienceMechanism;
  return (
    <Slide id="secondAudienceMechanism">
      <div className="mx-auto flex max-w-3xl items-center gap-4 mb-6">
        <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand/15 text-brand-light">
          <Network className="size-7" strokeWidth={2} />
        </span>
        <h2 className="text-4xl text-brand-light text-left">{info.title}</h2>
      </div>
      <div className="mx-auto max-w-3xl space-y-4 text-left text-lg leading-relaxed text-gray-300">
        <p>
          Estos agentes no leen píxeles ni el HTML entero de la página: leen el mismo árbol de
          accesibilidad que ya definimos al principio — nombre, rol y valor de cada nodo. Es la misma
          API paralela al DOM que usa un lector de pantalla, con un cliente más del otro lado.
        </p>
        <p>
          Playwright MCP, el servidor oficial de Microsoft para controlar un navegador desde un agente,
          devuelve ese árbol en vez de la página completa — y no es un detalle menor de implementación.
        </p>
      </div>
      <Card className="mx-auto mt-6 max-w-3xl bg-gray-800 border-gray-700 shadow-none">
        <CardContent className="p-6 text-left">
          <div className="mb-1 text-3xl font-bold text-white">~200-400 tokens</div>
          <p className="text-sm text-gray-400">
            por snapshot de accesibilidad, contra cientos de miles si el agente tuviera que leer el HTML
            crudo de una página real. La misma estructura que hace que un lector de pantalla no tenga que
            interpretar la página entera, ahora también hace que un agente la procese más rápido y más
            barato.
          </p>
        </CardContent>
      </Card>
    </Slide>
  );
}

const tools = [
  {
    icon: Puzzle,
    title: '"accessibility", la skill de Claude Code',
    desc: 'Instrucciones especializadas en WCAG 2.2 que se activan al pedir una auditoría o "hacer accesible" algo — ya vienen con el agente, sin instalar nada aparte.',
  },
  {
    icon: ShieldAlert,
    title: "Axe MCP Server (Deque)",
    desc: 'El mismo axe-core de la sección anterior, empaquetado como MCP oficial: analiza una página y devuelve el fix de código listo para revisar, aplicar o rechazar. Funciona con Claude Code, Copilot, Cursor y Windsurf.',
  },
  {
    icon: ScanSearch,
    title: "Chrome DevTools MCP / Playwright MCP",
    desc: "Le dan al agente una sesión de navegador real: puede navegar la página, leer su árbol de accesibilidad en vivo, y detectar fallas de navegación por teclado que un análisis estático no ve.",
  },
  {
    icon: BookOpen,
    title: "MCPs de documentación",
    desc: "Un agente puede traer la documentación vigente de una librería o de un criterio WCAG en el momento en que la necesita, en vez de confiar en lo que memorizó durante el entrenamiento.",
  },
];

export function SlideSecondAudienceTools() {
  const info = slideCatalog.secondAudienceTools;
  return (
    <Slide id="secondAudienceTools">
      <h2 className="text-4xl text-brand-light mb-8">{info.title}</h2>
      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
        {tools.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="bg-gray-800 border-gray-700 shadow-none">
            <CardContent className="p-6 text-left">
              <Icon className="w-6 h-6 text-cyan-300 mb-3" />
              <h3 className="text-white font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-400">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Slide>
  );
}

export function SlideSecondAudienceCodeProximity() {
  const info = slideCatalog.secondAudienceCodeProximity;
  return (
    <Slide id="secondAudienceCodeProximity">
      <h2 className="text-4xl text-brand-light mb-8">{info.title}</h2>
      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
        <Card className="bg-gray-800 border-gray-700 shadow-none">
          <CardContent className="p-6">
            <ScanSearch className="w-6 h-6 text-gray-500 mb-3" />
            <h3 className="text-white font-bold mb-2">Una herramienta de auditoría</h3>
            <p className="text-sm text-gray-400">
              Lighthouse, axe-core o Accessibility Insights reportan el síntoma en la página ya
              renderizada: "este botón no tiene nombre accesible". No saben si ese botón vive en un
              componente que se repite cuarenta veces o si es un caso único.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-brand shadow-none">
          <CardContent className="p-6">
            <FolderGit2 className="w-6 h-6 text-brand-light mb-3" />
            <h3 className="text-white font-bold mb-2">Un agente con el repositorio</h3>
            <p className="text-sm text-gray-400">
              Ve el mismo síntoma, pero también el componente fuente, cuántas páginas lo importan, y si
              el mismo problema ya se arregló en otro lado del código. Puede proponer el fix una sola vez,
              en la fuente — no una vez por página.
            </p>
          </CardContent>
        </Card>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-base italic text-gray-500">
        La misma idea de "componentes antes que páginas" de la sección anterior, ahora con alguien que
        efectivamente puede ver el componente.
      </p>
    </Slide>
  );
}
