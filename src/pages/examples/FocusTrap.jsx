import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ExampleLayout from './ExampleLayout';

function BadModal() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)} className="bg-red-600 text-white hover:bg-red-500">
        Abrir modal malo
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl">
            <h3 className="mb-2 text-base font-semibold text-gray-900">Confirmar acción</h3>
            <p className="mb-4 text-sm text-gray-600">
              Este modal no atrapa el foco: no maneja <kbd>Escape</kbd>, no hace auto-focus y no devuelve el foco al
              cerrarse.
            </p>
            <Input placeholder="Un campo dentro del modal" className="mb-4" />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="rounded border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
                Cancelar
              </button>
              <button
                onClick={() => setOpen(false)}
                className="rounded bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-500">
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function GoodModal() {
  return (
    <Dialog>
      <DialogTrigger render={<Button className="bg-green-600 text-white hover:bg-green-500" />}>
        Abrir modal bueno
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmar acción</DialogTitle>
          <DialogDescription>
            Este modal atrapa el foco dentro suyo, se cierra con <kbd>Escape</kbd> y devuelve el foco al botón que lo
            abrió.
          </DialogDescription>
        </DialogHeader>
        <Input placeholder="Un campo dentro del modal" />
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancelar</DialogClose>
          <DialogClose render={<Button className="bg-green-600 text-white hover:bg-green-500" />}>
            Confirmar
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const TITLE = 'Focus trap en modales';
const DESCRIPTION =
  'Un modal accesible atrapa el foco dentro de sí mismo, se cierra con Escape y devuelve el foco a quien lo abrió.';

export function FocusTrapBad() {
  return (
    <ExampleLayout
      title={TITLE}
      description={DESCRIPTION}
      bad={
        <div>
          <BadModal />
          <p className="mt-4 text-sm text-gray-600">
            Probá: abrí el modal, tocá <kbd>Tab</kbd> varias veces (el foco se escapa hacia el resto de la página) y
            tocá <kbd>Escape</kbd> (no pasa nada).
          </p>
        </div>
      } />
  );
}

export function FocusTrapGood() {
  return (
    <ExampleLayout
      title={TITLE}
      description={DESCRIPTION}
      good={
        <div>
          <GoodModal />
          <p className="mt-4 text-sm text-gray-600">
            Probá: abrí el modal, tocá <kbd>Tab</kbd> varias veces (el foco cicla dentro del modal) y tocá{' '}
            <kbd>Escape</kbd> (se cierra y el foco vuelve al botón).
          </p>
        </div>
      } />
  );
}
