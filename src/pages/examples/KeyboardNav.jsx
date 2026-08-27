import { useId } from "react";
import { MoveHorizontal, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AppShell from "./AppShell";
import InfoBlock from "./InfoBlock";

const ACTIONS = ["Nuevo pedido", "Nueva factura", "Nuevo contacto"];

function NavActions() {
  return (
    <>
      {ACTIONS.map((label) => (
        <Button
          key={label}
          type="button"
          variant="outline"
          size="sm"
          className="w-full shrink-0 @lg:w-auto"
        >
          {label}
        </Button>
      ))}
    </>
  );
}

function SearchField({ id, className }) {
  return (
    <div className={`relative min-w-0 w-full ${className ?? ""}`}>
      <Search
        className="pointer-events-none absolute top-1/2 left-2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
        aria-hidden="true"
      />
      <Input
        id={id}
        type="search"
        aria-label="Buscar"
        placeholder="Buscar..."
        className="pl-7"
      />
    </div>
  );
}

function ResizableFrame({ children }) {
  return (
    <div className="w-fit max-w-full">
      <div
        className="@container max-w-full resize-x overflow-auto rounded-lg border border-slate-300 bg-white"
        style={{ width: 360, minWidth: 240 }}
      >
        {children}
      </div>
      <p className="mt-2 flex items-center gap-1.5 text-xs text-gray-500">
        <MoveHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
        Arrastrá el borde inferior derecho del recuadro para achicarlo o
        agrandarlo.
      </p>
    </div>
  );
}

function BadExample() {
  const searchId = useId();
  return (
    <ResizableFrame>
      <nav
        aria-label="Accesos rápidos"
        className="flex flex-col gap-2 p-4 @lg:flex-row @lg:items-center"
      >
        <SearchField
          id={searchId}
          className="@lg:order-last @lg:ml-auto @lg:w-56"
        />
        <NavActions />
      </nav>
    </ResizableFrame>
  );
}

function GoodExample() {
  const mobileSearchId = useId();
  const desktopSearchId = useId();
  return (
    <ResizableFrame>
      <nav aria-label="Accesos rápidos">
        <div className="flex flex-col gap-2 p-4 @lg:hidden">
          <SearchField id={mobileSearchId} />
          <NavActions />
        </div>
        <div className="hidden items-center gap-2 p-4 @lg:flex">
          <NavActions />
          <SearchField id={desktopSearchId} className="@lg:ml-auto @lg:w-56" />
        </div>
      </nav>
    </ResizableFrame>
  );
}

export function KeyboardNavBad() {
  return (
    <AppShell
      active="Dashboard"
      title="Accesos rápidos"
      info={
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            El buscador está primero en el DOM (para que en mobile aparezca
            arriba de todo) y en pantallas anchas se lo reubica visualmente al
            final con <code>order-last</code> + <code>ml-auto</code>. El orden
            de tabulación no cambia con el CSS: Tab sigue yendo primero al
            buscador aunque visualmente esté a la derecha.
          </p>
        </InfoBlock>
      }
    >
      <BadExample />
    </AppShell>
  );
}

export function KeyboardNavGood() {
  return (
    <AppShell
      active="Dashboard"
      title="Accesos rápidos"
      info={
        <InfoBlock title="Cada ancho tiene su propio orden de DOM">
          <p className="text-sm text-gray-700">
            En vez de reordenar con CSS, hay dos barras — una para mobile
            (buscador primero) y otra para desktop (acciones primero, buscador
            al final) — y solo una está visible según el ancho del contenedor.{" "}
            <code>display: none</code> saca la barra inactiva del árbol de
            accesibilidad, así que Tab siempre sigue el orden visual real (WCAG
            2.4.3, Orden de foco).
          </p>
        </InfoBlock>
      }
    >
      <GoodExample />
    </AppShell>
  );
}
