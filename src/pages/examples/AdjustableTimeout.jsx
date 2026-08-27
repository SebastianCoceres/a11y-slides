import { useEffect, useState } from "react";
import { AlertTriangle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import AppShell from "./AppShell";
import InfoBlock from "./InfoBlock";

const HOLD_SECONDS = 30;
const WARNING_THRESHOLD = 10;

function BadExample() {
  const [secondsLeft, setSecondsLeft] = useState(HOLD_SECONDS);

  useEffect(() => {
    if (secondsLeft <= 0) return undefined;
    const id = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [secondsLeft]);

  const released = secondsLeft <= 0;

  return (
    <div className="relative w-96 rounded-lg border border-slate-200 bg-white p-5">
      <div
        aria-hidden="true"
        className="absolute top-3 right-3 flex items-center gap-1 text-xs font-medium text-gray-400"
      >
        <Clock className="h-3.5 w-3.5" />
        {released ? "0:00" : `0:${String(secondsLeft).padStart(2, "0")}`}
      </div>
      <p className="text-sm font-semibold text-gray-900">Nuevo pedido</p>
      <p className="mt-1 text-xs text-gray-500">Depósito Norte</p>
      <div className="mt-4 rounded-md border border-slate-100 bg-slate-50 p-3 text-sm">
        {released ? (
          <p className="flex items-center gap-1.5 text-red-600">
            <AlertTriangle className="h-4 w-4 shrink-0" />
            La reserva expiró. Los ítems fueron liberados.
          </p>
        ) : (
          <p className="text-gray-700">
            12 unidades de Tornillos M6 reservadas para este pedido.
          </p>
        )}
      </div>
    </div>
  );
}

function GoodExample() {
  const [secondsLeft, setSecondsLeft] = useState(HOLD_SECONDS);

  useEffect(() => {
    if (secondsLeft <= 0) return undefined;
    const id = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [secondsLeft]);

  const released = secondsLeft <= 0;
  const showWarning = !released && secondsLeft <= WARNING_THRESHOLD;

  const extend = () => setSecondsLeft(HOLD_SECONDS);

  return (
    <div className="relative w-96 rounded-lg border border-slate-200 bg-white p-5">
      <div
        aria-hidden="true"
        className={cn(
          "absolute top-3 right-3 flex items-center gap-1 text-xs font-medium",
          showWarning ? "text-amber-600" : "text-gray-400",
        )}
      >
        <Clock className="h-3.5 w-3.5" />
        {released ? "0:00" : `0:${String(secondsLeft).padStart(2, "0")}`}
      </div>
      <p className="text-sm font-semibold text-gray-900">Nuevo pedido</p>
      <p className="mt-1 text-xs text-gray-500">Depósito Norte</p>
      <div className="mt-4 rounded-md border border-slate-100 bg-slate-50 p-3 text-sm">
        {released ? (
          <p className="flex items-center gap-1.5 text-red-600">
            <AlertTriangle className="h-4 w-4 shrink-0" />
            La reserva expiró. Los ítems fueron liberados.
          </p>
        ) : (
          <p className="text-gray-700">
            12 unidades de Tornillos M6 reservadas para este pedido.
          </p>
        )}
      </div>

      {showWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div
            role="alertdialog"
            aria-labelledby="hold-warning-title"
            aria-describedby="hold-warning-desc"
            className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl"
          >
            <h3
              id="hold-warning-title"
              className="mb-2 flex items-center gap-1.5 text-base font-semibold text-gray-900"
            >
              <Clock className="h-4 w-4 shrink-0 text-amber-600" />
              Tu reserva está por expirar
            </h3>
            <p id="hold-warning-desc" className="text-sm text-gray-600">
              Se liberarán los ítems en{" "}
              <output
                aria-live="polite"
                className="font-semibold text-gray-900"
              >
                {secondsLeft} segundos
              </output>
              .
            </p>
            <div className="mt-4 flex justify-end">
              <Button onClick={extend}>Extender reserva</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function AdjustableTimeoutBad() {
  return (
    <AppShell
      active="Pedidos"
      title="Nuevo pedido"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            La reserva de stock se libera a los {HOLD_SECONDS} segundos sin
            ningún aviso previo ni forma de extenderla. Quien tarda en completar
            el pedido — por revisar datos, una interrupción, o necesitar más
            tiempo por cualquier motivo — pierde la reserva sin enterarse hasta
            que ya es tarde.
          </p>
        </InfoBlock>
      }
    >
      <BadExample />
    </AppShell>
  );
}

export function AdjustableTimeoutGood() {
  return (
    <AppShell
      active="Pedidos"
      title="Nuevo pedido"
      info={
        <InfoBlock title="Aviso con opción de extender">
          <p className="text-sm text-gray-700">
            A los {WARNING_THRESHOLD} segundos de vencer aparece un aviso con la
            opción "Extender reserva", que resetea el tiempo sin perder los
            ítems (WCAG 2.2.1, Tiempo ajustable).
          </p>
          <p className="mt-3 text-sm text-gray-700">
            Excepciones: este criterio no aplica si el límite es parte esencial
            de un evento en tiempo real (ej. una subasta) y no hay alternativa
            posible, si extenderlo invalidaría la actividad, o si el límite dura
            más de 20 horas.
          </p>
        </InfoBlock>
      }
    >
      <GoodExample />
    </AppShell>
  );
}
