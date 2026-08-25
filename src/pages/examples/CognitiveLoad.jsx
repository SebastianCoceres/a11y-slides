import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import AppShell from "./AppShell";

const ALL_FIELDS = [
  "Nombre",
  "Apellido",
  "Email",
  "Teléfono",
  "Empresa",
  "CUIT",
  "Condición fiscal",
  "Dirección",
  "Ciudad",
  "Provincia",
  "Código postal",
  "Método de pago",
  "Límite de crédito",
  "Vendedor asignado",
];

const STEPS = [
  {
    title: "Datos generales",
    fields: ["Nombre", "Apellido", "Email", "Teléfono", "Empresa"],
  },
  {
    title: "Fiscal y facturación",
    fields: [
      "CUIT",
      "Condición fiscal",
      "Dirección",
      "Ciudad",
      "Provincia",
      "Código postal",
    ],
  },
  {
    title: "Comercial",
    fields: ["Método de pago", "Límite de crédito", "Vendedor asignado"],
  },
];

function MiniField({ label }) {
  return (
    <div>
      <Label className="mb-1 block text-xs text-gray-600">{label}</Label>
      <Input className="h-8 text-sm" />
    </div>
  );
}

function BadExample() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        {ALL_FIELDS.map((label) => (
          <MiniField key={label} label={label} />
        ))}
      </div>
      <Button className="mt-5">Guardar cliente</Button>
    </div>
  );
}

function GoodExample() {
  const [step, setStep] = useState(0);
  const current = STEPS[step];

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6">
      <div className="mb-6 flex items-start gap-2">
        {STEPS.map((s, i) => (
          <div key={s.title} className="flex flex-1 items-start gap-2">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  i <= step
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                {i + 1}
              </div>
              <span
                className={`text-center text-[11px] font-medium ${
                  i <= step ? "text-gray-900" : "text-gray-400"
                }`}
              >
                {s.title}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`mt-3 h-0.5 flex-1 ${i < step ? "bg-indigo-600" : "bg-slate-200"}`}
              />
            )}
          </div>
        ))}
      </div>

      <h3 className="mb-4 text-sm font-bold text-gray-900">{current.title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {current.fields.map((label) => (
          <MiniField key={label} label={label} />
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        <Button
          variant="outline"
          disabled={step === 0}
          onClick={() => setStep((s) => s - 1)}
        >
          Anterior
        </Button>
        {step < STEPS.length - 1 ? (
          <Button onClick={() => setStep((s) => s + 1)}>Siguiente</Button>
        ) : (
          <Button>Guardar cliente</Button>
        )}
      </div>
    </div>
  );
}

function GroupedExample() {
  return (
    <div className="space-y-5 rounded-lg border border-slate-200 bg-white p-6">
      {STEPS.map((group) => (
        <fieldset key={group.title} className="">
          <legend className="px-1 text-sm font-bold text-gray-900">
            {group.title}
          </legend>
          <div className="grid grid-cols-2 gap-4">
            {group.fields.map((label) => (
              <MiniField key={label} label={label} />
            ))}
          </div>
        </fieldset>
      ))}
      <Button>Guardar cliente</Button>
    </div>
  );
}

export function CognitiveLoadBad() {
  return (
    <AppShell active="Contactos" title="Alta de cliente">
      <BadExample />
    </AppShell>
  );
}

export function CognitiveLoadGood() {
  return (
    <AppShell active="Contactos" title="Alta de cliente">
      <GoodExample />
    </AppShell>
  );
}

export function CognitiveLoadGrouped() {
  return (
    <AppShell active="Contactos" title="Alta de cliente">
      <GroupedExample />
    </AppShell>
  );
}
