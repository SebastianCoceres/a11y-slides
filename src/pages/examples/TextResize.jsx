import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

// El alto en vh es la parte que rompe con el zoom real del navegador: al acercar el zoom, el
// viewport mide menos píxeles CSS, así que este contenedor se achica — pero el texto (en rem/px)
// no, porque esas unidades no dependen del viewport. Con un alto fijo en rem/px en vez de vh esto
// no se reproduce: contenedor y texto escalan juntos y nunca se corta (confirmado a mano).
function BadExample() {
  return (
    <div className="w-56 overflow-hidden rounded-lg border border-slate-200 bg-white px-3 py-2.5" style={{ height: '7vh' }}>
      <p className="truncate text-sm font-semibold text-slate-900">Tornillos M6 (caja x100)</p>
      <p className="truncate text-xs text-slate-400">Depósito Norte — estantería B4</p>
    </div>
  );
}

function GoodExample() {
  return (
    <div className="w-56 rounded-lg border border-slate-200 bg-white px-3 py-2.5">
      <p className="text-sm font-semibold text-slate-900">Tornillos M6 (caja x100)</p>
      <p className="text-xs text-slate-600">Depósito Norte — estantería B4</p>
    </div>
  );
}

export function TextResizeBad() {
  return (
    <AppShell
      active="Inventario"
      title="Ficha de producto"
      info={
        <InfoBlock variant="warning" title="Se corta a los 200%">
          <p className="text-sm text-gray-700">
            El contenedor mide su alto en <code>vh</code> con <code>overflow: hidden</code>. Al acercar
            el zoom real del navegador (Ctrl/Cmd y +) el viewport pasa a medir menos píxeles, así que ese
            alto se achica — pero el texto no, porque no depende del viewport. El nombre y la ubicación
            terminan cortados.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function TextResizeGood() {
  return (
    <AppShell
      active="Inventario"
      title="Ficha de producto"
      info={
        <InfoBlock title="Alto libre, no atado al viewport">
          <p className="text-sm text-gray-700">
            Mismo texto, mismo ancho — el contenedor no tiene un alto fijo en <code>vh</code>: crece con
            el contenido. Probalo con el zoom real del navegador (Ctrl/Cmd y +): a cualquier nivel, sigue
            legible.
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
