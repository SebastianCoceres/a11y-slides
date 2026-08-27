import InfoBlock from './InfoBlock';

function BrowserWindow({ tabTitle }) {
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-lg border border-slate-300 shadow-sm">
      <div className="flex items-end gap-1 bg-slate-100 px-3 pt-2">
        <div className="flex max-w-[220px] items-center gap-2 rounded-t-md border border-b-0 border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700">
          <div className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] bg-indigo-500 text-[8px] font-bold text-white">
            A
          </div>
          <span className="truncate">{tabTitle}</span>
        </div>
      </div>
      <div className="border-b border-slate-200 bg-white px-3 py-2 text-xs text-slate-400">
        app.aurea.com/facturas
      </div>
      <div className="bg-white p-6">
        <p className="text-xs font-semibold tracking-wide text-indigo-500 uppercase">Facturas</p>
        <h1 className="mt-1 text-lg font-bold text-slate-900">Facturas por cobrar</h1>
        <p className="mt-3 text-sm text-gray-600">3 facturas pendientes de cobro por $585.450 en total.</p>
      </div>
    </div>
  );
}

export function PageTitleBad() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-50 p-8">
      <div className="grid w-full max-w-4xl grid-cols-1 items-center gap-10 xl:grid-cols-[minmax(0,1fr)_360px]">
        <BrowserWindow tabTitle="App" />
        <InfoBlock variant="warning" title="Qué falta">
          <p className="text-sm text-gray-700">
            La pestaña del navegador dice "App", sin importar en qué sección de Aurea estés. Con varias
            pestañas abiertas a la vez (Facturas, Inventario, Reportes), no hay forma de distinguir una de
            otra sin hacer clic en cada una para ver qué carga.
          </p>
        </InfoBlock>
      </div>
    </div>
  );
}

export function PageTitleGood() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-50 p-8">
      <div className="grid w-full max-w-4xl grid-cols-1 items-center gap-10 xl:grid-cols-[minmax(0,1fr)_360px]">
        <BrowserWindow tabTitle="Facturas – Aurea" />
        <InfoBlock title="Título descriptivo por página">
          <p className="text-sm text-gray-700">
            Cada sección setea su propio <code>document.title</code>, por ejemplo "Facturas – Aurea". Con
            varias pestañas abiertas se distinguen de un vistazo, y un lector de pantalla anuncia el
            nombre de la página apenas se activa esa pestaña (WCAG 2.4.2, Título de página).
          </p>
        </InfoBlock>
      </div>
    </div>
  );
}
