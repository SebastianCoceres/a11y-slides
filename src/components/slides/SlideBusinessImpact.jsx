import { Slide } from "@/components/deck";
import { Users, Headset, Code2, UserPlus, Rocket, History } from "lucide-react";
import slideCatalog from "@/data/slideCatalog.json";

const impacts = [
  {
    icon: Code2,
    role: "Desarrollo",
    text: "Aplicarlo desde el diseño es más rápido que parchearlo después.",
  },
  {
    icon: Users,
    role: "Usuarios",
    text: "La app se vuelve más fácil de usar y predecible en su comportamiento.",
  },
  {
    icon: UserPlus,
    role: "Onboarding",
    text: "Un código con estos principios ya incorporados es más fácil de replicar.",
  },
  {
    icon: Code2,
    role: "Negocio y alcance",
    text: "Amplía el mercado direccionable y abre puertas a clientes que exigen cumplimiento legal.",
  },
  {
    icon: Code2,
    role: "Legal y riesgo",
    text: "Previene multas y bloqueos normativos.",
  },
  {
    icon: Headset,
    role: "Soporte",
    text: 'Menos llamadas a soporte por problemas "simples".',
  },
];

export function SlideBusinessImpact() {
  const info = slideCatalog.businessImpact;
  return (
    <Slide id="businessImpact">
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="text-5xl text-brand-light mb-3">{info.title}</h2>
        <p className="text-lg italic text-gray-400 mb-10">
          Encuentren la suya en esta lista.
        </p>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
          {impacts.map(({ icon: Icon, role, text }) => (
            <div
              key={role}
              className="flex gap-3 border-t border-white/10 pt-4"
            >
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-indigo-300" />
              <p className="text-base text-gray-300">
                <strong className="mb-0.5 block text-white">{role}</strong>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

const earlyBenefits = [
  "Arrancar temprano es barato.",
  "El costo se diluye entre sprints.",
  "El patrón accesible se normaliza desde el primer componente.",
];

const legacyDifficulties = [
  "Los cambios hay que auditarlos con más cuidado.",
  "Cada cambio es candidato a romper algo.",
  "Cuestión de tiempo y recursos.",
];

export function SlideEarlyVsLegacy() {
  const info = slideCatalog.earlyVsLegacy;
  return (
    <Slide id="earlyVsLegacy">
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="text-5xl text-brand-light mb-10">{info.title}</h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
              <Rocket className="h-5 w-5 shrink-0 text-brand-light" />
              Desde el día uno
            </div>
            <ul className="space-y-4">
              {earlyBenefits.map((text) => (
                <li
                  key={text}
                  className="border-t border-white/10 pt-3 text-base text-gray-300"
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:border-l sm:border-white/10 sm:pl-10">
            <div className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
              <History className="h-5 w-5 shrink-0 text-gray-400" />A último
              momento
            </div>
            <ul className="space-y-4">
              {legacyDifficulties.map((text) => (
                <li
                  key={text}
                  className="border-t border-white/10 pt-3 text-base text-gray-400"
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
}
