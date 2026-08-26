import AppShell from './AppShell';
import InfoBlock from './InfoBlock';

function PromoBanner({ children }) {
  return (
    <div className="flex h-32 w-full items-center overflow-hidden rounded-xl bg-gradient-to-br from-brand to-brand-light px-6">
      {children}
    </div>
  );
}

function BadExample() {
  return (
    <div>
      <PromoBanner>
        <span className="w-full text-center text-xs font-medium text-white/60">[ banner-promo.png ]</span>
      </PromoBanner>
      <p className="mt-2 text-xs text-slate-400">
        El título, el descuento y la fecha están "horneados" dentro del PNG — no hay texto real en el
        HTML.
      </p>
    </div>
  );
}

function GoodExample() {
  return (
    <div>
      <PromoBanner>
        <div>
          <p className="text-lg font-bold text-white">Cyber Inventario</p>
          <p className="text-sm text-white/80">30% off en reposición automática hasta el domingo</p>
        </div>
      </PromoBanner>
      <p className="mt-2 text-xs text-slate-400">Mismo fondo, texto real en HTML.</p>
    </div>
  );
}

export function ImagesOfTextBad() {
  return (
    <AppShell
      active="Dashboard"
      title="Promociones"
      info={
        <InfoBlock variant="warning" title="No hay texto que agarrar">
          <p className="text-sm text-gray-700">
            "Cyber Inventario", el descuento y la fecha están dibujados dentro del PNG. No se pueden
            seleccionar, no los traduce el navegador, no aparecen en un Ctrl+F y no reescalan con el resto
            de la tipografía del sitio.
          </p>
        </InfoBlock>
      }>
      <BadExample />
    </AppShell>
  );
}

export function ImagesOfTextGood() {
  return (
    <AppShell
      active="Dashboard"
      title="Promociones"
      info={
        <InfoBlock title="El fondo puede ser imagen, el texto no">
          <p className="text-sm text-gray-700">
            El degradé o la foto de fondo pueden seguir siendo imagen. El texto (título, descuento, fecha)
            va como texto real en el DOM: así se puede seleccionar, traducir, buscar con Ctrl+F y se
            reescala con el resto de la tipografía del sitio.
          </p>
        </InfoBlock>
      }>
      <GoodExample />
    </AppShell>
  );
}
