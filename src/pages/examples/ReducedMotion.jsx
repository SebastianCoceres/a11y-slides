import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Bell, Code2, MessageSquare, Package, Receipt, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AppShell from "./AppShell";

const NOTIFICATIONS = [
  { id: "n1", icon: Package, title: "Pedido #4521 confirmado", time: "hace 2 min" },
  { id: "n2", icon: Receipt, title: "Factura #A-0091 vencida", time: "hace 15 min" },
  { id: "n3", icon: Bell, title: "Stock bajo: Cinta aisladora 3M", time: "hace 32 min" },
  { id: "n4", icon: MessageSquare, title: "Nuevo comentario en Pedido #4498", time: "hace 1 h" },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

function SolutionInfo() {
  return (
    <section className="mt-10 rounded-xl border-2 border-blue-200 bg-blue-50/40 p-6">
      <h2 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-blue-700">
        <Code2 className="h-4 w-4" aria-hidden="true" />
        Cómo se respeta la preferencia
      </h2>
      <p className="mb-3 text-sm text-gray-700">
        Con animaciones controladas por JS (como acá, con <code>motion/react</code>), hay que leer la
        preferencia con <code>matchMedia</code> y suscribirse a sus cambios:
      </p>
      <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-xs text-slate-100">
        <code>{`const query = window.matchMedia("(prefers-reduced-motion: reduce)");
let reduced = query.matches;

query.addEventListener("change", (event) => {
  reduced = event.matches;
});`}</code>
      </pre>
      <p className="mt-3 mb-3 text-sm text-gray-700">
        Si las animaciones son CSS puro, alcanza con la media query, sin JavaScript:
      </p>
      <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-xs text-slate-100">
        <code>{`.notification-card {
  animation: bounce-in 0.6s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .notification-card {
    animation: fade-in 0.15s ease-out;
  }
}`}</code>
      </pre>
      <p className="mt-3 text-xs text-gray-600">
        En ambos casos la fuente de verdad es la preferencia real del sistema operativo del usuario,
        no un control manual en la UI.
      </p>
    </section>
  );
}

function ReplayButton({ onReplay }) {
  return (
    <button
      type="button"
      onClick={onReplay}
      className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm hover:bg-slate-50"
    >
      <RotateCcw className="h-3.5 w-3.5" />
      Repetir animación
    </button>
  );
}

function NotificationCard({ icon: Icon, title, time, index, animated }) {
  return (
    <motion.li
      initial={animated ? { opacity: 0, scale: 0.6, y: -24, rotate: -6 } : { opacity: 0 }}
      animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
      transition={
        animated
          ? { type: "spring", stiffness: 260, damping: 12, delay: index * 0.15 }
          : { duration: 0.15, delay: index * 0.03 }
      }
      className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3"
    >
      <Icon className="h-4 w-4 shrink-0 text-brand" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-slate-800">{title}</p>
        <p className="text-xs text-slate-400">{time}</p>
      </div>
    </motion.li>
  );
}

function NotificationsPanel({ animated }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5">
      <div className="mb-4 flex items-center gap-2">
        <motion.span
          animate={animated ? { scale: [1, 1.18, 1] } : { scale: 1 }}
          transition={animated ? { repeat: Infinity, duration: 1.1 } : undefined}
        >
          <Badge variant="destructive">4 nuevas</Badge>
        </motion.span>
        <span className="text-xs text-slate-400">Centro de notificaciones</span>
      </div>
      <ul className="space-y-2">
        {NOTIFICATIONS.map((n, index) => (
          <NotificationCard key={n.id} {...n} index={index} animated={animated} />
        ))}
      </ul>
    </div>
  );
}

export function ReducedMotionBad() {
  const [replayKey, setReplayKey] = useState(0);
  return (
    <AppShell active="Dashboard" title="Centro de notificaciones">
      <div className="mb-4">
        <ReplayButton onReplay={() => setReplayKey((k) => k + 1)} />
        <p className="mt-2 text-xs text-slate-400">
          La preferencia del sistema operativo se ignora: las animaciones se reproducen siempre,
          esté activa o no.
        </p>
      </div>
      <NotificationsPanel key={replayKey} animated />
    </AppShell>
  );
}

export function ReducedMotionGood() {
  const reduced = usePrefersReducedMotion();
  const [replayKey, setReplayKey] = useState(0);
  return (
    <AppShell active="Dashboard" title="Centro de notificaciones">
      <div className="mb-4">
        <ReplayButton onReplay={() => setReplayKey((k) => k + 1)} />
        <p className="mt-2 text-xs text-slate-400">
          {reduced
            ? "Se respeta prefers-reduced-motion: sin rebotes ni parpadeos, solo un fundido breve."
            : "Preferencia del SO desactivada: se permite la animación completa."}
        </p>
      </div>
      <NotificationsPanel key={replayKey} animated={!reduced} />
      <SolutionInfo />
    </AppShell>
  );
}
