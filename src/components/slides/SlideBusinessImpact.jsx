import { Slide } from "@/components/deck";
import { Users, Headset, Code2, UserPlus } from "lucide-react";
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

export default function SlideBusinessImpact() {
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
            <div key={role} className="flex gap-3 border-t border-white/10 pt-4">
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
