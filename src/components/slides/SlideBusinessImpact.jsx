import { Slide } from "@/components/deck";
import {
  Users,
  Headset,
  Code2,
  UserPlus,
  Rocket,
  History,
  TrendingUp,
  Scale,
} from "lucide-react";
import slideCatalog from "@/data/slideCatalog.json";

const impacts = [
  { icon: Code2, role: "Desarrollo", text: "Más barato desde el diseño" },
  {
    icon: UserPlus,
    role: "Onboarding",
    text: "Coincide con el buen diseño de software",
  },
  { icon: TrendingUp, role: "Negocio", text: "Más mercado y contratos" },
  { icon: Scale, role: "Legal", text: "Menos riesgo de demandas" },
  { icon: Headset, role: "Soporte", text: "Menos incidencias" },
  { icon: Users, role: "Usuarios", text: "Menos frustración, más confianza" },
];

export function SlideBusinessImpact() {
  const info = slideCatalog.businessImpact;
  return (
    <Slide id="businessImpact">
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="text-5xl text-brand-light mb-10">{info.title}</h2>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
          {impacts.map(({ icon: Icon, role, text }) => (
            <div
              key={role}
              className="flex gap-3 border-t border-white/10 pt-4"
            >
              <Icon className="mt-1.5 h-6 w-6 shrink-0 text-indigo-300" />
              <p className="text-xl text-gray-300">
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
  "Más barato",
  "El costo se reparte entre tareas",
  "Lo accesible se vuelve la norma",
];

const legacyDifficulties = [
  "Cada cambio hay que auditarlo",
  "Riesgo de romper algo",
  "Más lento, pero posible",
];

export function SlideEarlyVsLegacy() {
  const info = slideCatalog.earlyVsLegacy;
  return (
    <Slide id="earlyVsLegacy">
      <div className="mx-auto max-w-4xl text-left">
        <h2 className="text-5xl text-brand-light mb-10">{info.title}</h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2 text-2xl font-bold text-white">
              <Rocket className="h-5 w-5 shrink-0 text-brand-light" />
              Desde el día uno
            </div>
            <ul className="space-y-4">
              {earlyBenefits.map((text) => (
                <li
                  key={text}
                  className="border-t border-white/10 pt-3 text-2xl text-gray-300"
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:border-l sm:border-white/10 sm:pl-10">
            <div className="mb-4 flex items-center gap-2 text-2xl font-bold text-white">
              <History className="h-5 w-5 shrink-0 text-gray-400" />A último
              momento
            </div>
            <ul className="space-y-4">
              {legacyDifficulties.map((text) => (
                <li
                  key={text}
                  className="border-t border-white/10 pt-3 text-2xl text-gray-400"
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
