import { Slide } from "@/components/deck";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, ShieldAlert, TrendingUp } from "lucide-react";

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

export default function SlideClosing() {
  return (
    <Slide id="closing">
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
