import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Bell, MessageSquare, Package, Receipt } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
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

  return [reduced, setReduced];
}

function PreferenceToggle({ reduced, onToggle }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={reduced}
      onClick={onToggle}
      className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm"
    >
      <span
        className={cn(
          "flex h-4 w-7 items-center rounded-full p-0.5 transition-colors",
          reduced ? "justify-end bg-brand" : "justify-start bg-slate-200",
        )}
      >
        <span className="h-3 w-3 rounded-full bg-white shadow" />
      </span>
      Reducir movimiento (preferencia del SO)
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
  const [reduced, setReduced] = useState(false);
  return (
    <AppShell active="Dashboard" title="Centro de notificaciones">
      <div className="mb-4">
        <PreferenceToggle reduced={reduced} onToggle={() => setReduced((r) => !r)} />
        <p className="mt-2 text-xs text-slate-400">
          La preferencia del sistema operativo se ignora: las animaciones se reproducen siempre,
          esté activa o no.
        </p>
      </div>
      <NotificationsPanel animated />
    </AppShell>
  );
}

export function ReducedMotionGood() {
  const [reduced, setReduced] = usePrefersReducedMotion();
  return (
    <AppShell active="Dashboard" title="Centro de notificaciones">
      <div className="mb-4">
        <PreferenceToggle reduced={reduced} onToggle={() => setReduced((r) => !r)} />
        <p className="mt-2 text-xs text-slate-400">
          {reduced
            ? "Se respeta prefers-reduced-motion: sin rebotes ni parpadeos, solo un fundido breve."
            : "Sin la preferencia activada, se permite la animación completa."}
        </p>
      </div>
      <NotificationsPanel animated={!reduced} />
    </AppShell>
  );
}
