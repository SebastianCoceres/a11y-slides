import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { cn } from "@/lib/utils";
import AppShell from "./AppShell";

const TABS = ["Perfil", "Historial", "Notas"];
const DEFAULT_TAB = "Historial";

const HISTORY = [
  { id: "#4518", fecha: "02/08/2026", total: "$64.200" },
  { id: "#4432", fecha: "19/07/2026", total: "$112.900" },
  { id: "#4301", fecha: "05/06/2026", total: "$38.500" },
];

function Section({ title, children }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5">
      <h3 className="mb-3 text-sm font-bold text-gray-900">{title}</h3>
      {children}
    </section>
  );
}

function HistoryList() {
  return (
    <ul className="space-y-2">
      {HISTORY.map((order) => (
        <li
          key={order.id}
          className="flex justify-between rounded border border-slate-100 px-3 py-2 text-sm"
        >
          <span className="text-gray-700">Pedido {order.id}</span>
          <span className="text-gray-500">{order.fecha}</span>
          <span className="font-medium text-gray-900">{order.total}</span>
        </li>
      ))}
    </ul>
  );
}

function BadExample() {
  return (
    <div className="flex flex-col gap-4 overflow-y-auto pr-1">
      <Section title="Datos generales">
        <p className="text-sm text-gray-500">
          Estudio Delgado — CUIT 30-71234567-9 — Cliente desde 2021
        </p>
      </Section>
      <Section title="Direcciones">
        <p className="text-sm text-gray-500">
          Fiscal: Av. Corrientes 1234, CABA
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Entrega: Ruta 8 km 45, Pilar
        </p>
      </Section>
      <Section title="Preferencias">
        <p className="text-sm text-gray-500">
          Facturación electrónica activada. Recordatorios por email.
        </p>
      </Section>
      <Section title="Condiciones comerciales">
        <p className="text-sm text-gray-500">
          Límite de crédito: $500.000. Método de pago: Transferencia.
        </p>
      </Section>
      <Section title="Vendedor asignado">
        <p className="text-sm text-gray-500">María Fernández — Zona Norte</p>
      </Section>
      <Section title="Notas">
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </Section>
      <Section title="Historial de pedidos">
        <HistoryList />
      </Section>
      <p className="text-xs text-gray-400">
        ↑ El historial está después de cinco secciones y quince scrolls al día.
      </p>
    </div>
  );
}

function GoodExample() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabRefs = useRef([]);
  const requestedTab = searchParams.get("tab");
  const tab = TABS.includes(requestedTab) ? requestedTab : DEFAULT_TAB;

  const setTab = (t) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.set("tab", t);
        return next;
      },
      { replace: true },
    );
  };

  const selectTab = (nextTab) => {
    setTab(nextTab);
    tabRefs.current[TABS.indexOf(nextTab)]?.focus();
  };

  const handleTabKeyDown = (event, index) => {
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % TABS.length;
    else if (event.key === "ArrowLeft") nextIndex = (index - 1 + TABS.length) % TABS.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = TABS.length - 1;
    else return;

    event.preventDefault();
    event.stopPropagation();
    selectTab(TABS[nextIndex]);
  };

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <div role="tablist" aria-label="Información del contacto" className="mb-4 flex gap-1 border-b border-slate-200">
        {TABS.map((t, index) => (
          <button
            key={t}
            ref={(node) => { tabRefs.current[index] = node; }}
            id={`contact-tab-${t}`}
            type="button"
            role="tab"
            aria-selected={tab === t}
            aria-controls={`contact-panel-${t}`}
            tabIndex={tab === t ? 0 : -1}
            onClick={() => setTab(t)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
            className={cn(
              "border-b-2 px-3 py-2 text-sm font-medium",
              tab === t
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "Historial" && (
        <div id="contact-panel-Historial" role="tabpanel" aria-labelledby="contact-tab-Historial">
          <HistoryList />
        </div>
      )}
      {tab === "Perfil" && (
        <div id="contact-panel-Perfil" role="tabpanel" aria-labelledby="contact-tab-Perfil" className="space-y-4">
          <Section title="Datos generales">
            <p className="text-sm text-gray-500">
              Estudio Delgado — CUIT 30-71234567-9 — Cliente desde 2021
            </p>
          </Section>
          <Section title="Direcciones">
            <p className="text-sm text-gray-500">
              Fiscal: Av. Corrientes 1234, CABA
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Entrega: Ruta 8 km 45, Pilar
            </p>
          </Section>
          <Section title="Preferencias">
            <p className="text-sm text-gray-500">
              Facturación electrónica activada. Recordatorios por email.
            </p>
          </Section>
        </div>
      )}
      {tab === "Notas" && (
        <div id="contact-panel-Notas" role="tabpanel" aria-labelledby="contact-tab-Notas">
          <Section title="Notas">
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Section>
        </div>
      )}
    </div>
  );
}

export function InteractionFatigueBad() {
  return (
    <AppShell active="Contactos" title="Estudio Delgado">
      <BadExample />
    </AppShell>
  );
}

export function InteractionFatigueGood() {
  return (
    <AppShell active="Contactos" title="Estudio Delgado">
      <GoodExample />
    </AppShell>
  );
}
