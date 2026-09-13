import { Slide } from "@/components/deck";
import { Puzzle, ShieldAlert, ScanSearch, BookOpen, FolderGit2 } from "lucide-react";
import slideCatalog from "@/data/slideCatalog.json";

export function SlideSecondAudience() {
  const info = slideCatalog.secondAudience;
  return (
    <Slide id="secondAudience">
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="text-5xl text-brand-light mb-8">{info.title}</h2>
        <p className="text-2xl text-gray-300 mb-10">
          Hoy la mayoría del tráfico que llega a un sitio ya no es humano.
        </p>
        <div className="mb-8 flex flex-wrap items-baseline gap-5">
          <span className="text-8xl font-black leading-none text-white">57%</span>
          <p className="max-w-xs text-base text-gray-400">
            del tráfico HTTP a contenido web ya es de agentes automatizados, no personas
            <span className="mt-1 block text-xs text-gray-600">Cloudflare Radar, 2026</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-x-14 gap-y-5 border-t border-white/10 pt-6">
          <div>
            <div className="text-2xl font-bold text-white">95.9%</div>
            <p className="max-w-xs text-sm text-gray-500">
              de los sitios más visitados falla al menos un criterio WCAG — WebAIM Million, 2026
            </p>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">400M → 1.000M</div>
            <p className="max-w-xs text-sm text-gray-500">
              usuarios semanales de ChatGPT, feb. 2025 - ago. 2026 — OpenAI / TechCrunch
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export function SlideSecondAudienceMechanism() {
  const info = slideCatalog.secondAudienceMechanism;
  return (
    <Slide id="secondAudienceMechanism">
      <div className="mx-auto max-w-3xl text-left">
        <h2 className="text-5xl text-brand-light mb-8">{info.title}</h2>
        <p className="max-w-xl text-2xl leading-relaxed text-gray-200">
          Un agente no lee píxeles ni HTML: lee el mismo árbol de accesibilidad que ya usa un lector de
          pantalla.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-white/10 pt-8 sm:grid-cols-2">
          <div>
            <div className="text-4xl font-bold text-gray-500">Cientos de miles</div>
            <p className="mt-2 text-sm text-gray-600">
              de tokens para interpretar el HTML crudo de una página
            </p>
          </div>
          <div>
            <div className="text-6xl font-black text-white">~200-400</div>
            <p className="mt-2 text-sm text-gray-400">
              tokens por snapshot del árbol de accesibilidad — Playwright MCP
            </p>
          </div>
        </div>
      </div>
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
    desc: "El mismo axe-core de la sección anterior, empaquetado como MCP oficial: analiza una página y devuelve el fix de código listo para revisar, aplicar o rechazar. Funciona con Claude Code, Copilot, Cursor y Windsurf.",
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
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="text-5xl text-brand-light mb-10">{info.title}</h2>
        <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
          {tools.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border-t border-white/10 pt-5">
              <div className="mb-1.5 flex items-center gap-2 text-lg font-bold text-white">
                <Icon className="h-5 w-5 shrink-0 text-cyan-300" />
                {title}
              </div>
              <p className="text-sm text-gray-400">{desc}</p>
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
        <h2 className="text-5xl text-brand-light mb-10">{info.title}</h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1fr_1.3fr] sm:items-start">
          <div>
            <div className="mb-2 flex items-center gap-2 text-lg font-semibold text-gray-500">
              <ScanSearch className="h-5 w-5" />
              Una herramienta de auditoría
            </div>
            <p className="text-base text-gray-500">
              Lighthouse, axe-core o Accessibility Insights reportan el síntoma en la página ya
              renderizada: "este botón no tiene nombre accesible". No saben si vive en un componente que
              se repite cuarenta veces o si es un caso único.
            </p>
          </div>
          <div>
            <div className="mb-2 flex items-center gap-2 text-2xl font-bold text-white">
              <FolderGit2 className="h-6 w-6 text-brand-light" />
              Un agente con el repositorio
            </div>
            <p className="text-xl leading-relaxed text-gray-200">
              Ve el mismo síntoma, pero también el componente fuente, cuántas páginas lo importan, y si
              el mismo problema ya se arregló en otro lado del código. Puede proponer el fix una sola
              vez, en la fuente — no una vez por página.
            </p>
          </div>
        </div>
        <p className="mt-8 max-w-2xl text-base italic text-gray-500">
          Arreglar en la fuente, una sola vez, en vez de parchear página por página — solo que ahora hay
          alguien que efectivamente puede ver el componente.
        </p>
      </div>
    </Slide>
  );
}
