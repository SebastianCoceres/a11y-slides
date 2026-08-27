import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
import AppShell from './AppShell';

function BadModal() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)} className="bg-red-600 text-white hover:bg-red-500">
        Eliminar factura #F-2451
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl">
            <h3 className="mb-2 text-base font-semibold text-gray-900">Eliminar factura #F-2451</h3>
            <p className="mb-4 text-sm text-gray-600">
              ¿Confirmás que querés eliminarla? Esta acción no se puede deshacer.
            </p>
            <Input placeholder="Motivo (opcional)" className="mb-4" />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="rounded border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
                Cancelar
              </button>
              <button
                onClick={() => setOpen(false)}
                className="rounded bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-500">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function NoEscapeModal() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key !== 'Tab') return;
      event.preventDefault();
      inputRef.current?.focus();
    }

    document.addEventListener('keydown', handleKeyDown, true);
    return () => document.removeEventListener('keydown', handleKeyDown, true);
  }, [open]);

  return (
    <div>
      <Button onClick={() => setOpen(true)} className="bg-red-600 text-white hover:bg-red-500">
        Eliminar factura #F-2451
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl">
            <h3 className="mb-2 text-base font-semibold text-gray-900">Eliminar factura #F-2451</h3>
            <p className="mb-4 text-sm text-gray-600">
              ¿Confirmás que querés eliminarla? Esta acción no se puede deshacer.
            </p>
            <Input ref={inputRef} placeholder="Motivo (opcional)" className="mb-4" />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="rounded border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
                Cancelar
              </button>
              <button
                onClick={() => setOpen(false)}
                className="rounded bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-500">
                Eliminar
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
      <DialogTrigger render={<Button className="bg-red-600 text-white hover:bg-red-500" />}>
        Eliminar factura #F-2451
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Eliminar factura #F-2451</DialogTitle>
          <DialogDescription>¿Confirmás que querés eliminarla? Esta acción no se puede deshacer.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-1.5">
          <Label htmlFor="good-delete-reason">Motivo (opcional)</Label>
          <Input id="good-delete-reason" name="delete-reason" />
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancelar</DialogClose>
          <DialogClose render={<Button className="bg-red-600 text-white hover:bg-red-500" />}>Eliminar</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function FocusTrapBad() {
  return (
    <AppShell active="Facturas" title="Factura #F-2451">
      <BadModal />
    </AppShell>
  );
}

export function FocusTrapNoEscape() {
  return (
    <AppShell active="Facturas" title="Factura #F-2451">
      <NoEscapeModal />
    </AppShell>
  );
}

export function FocusTrapGood() {
  return (
    <AppShell active="Facturas" title="Factura #F-2451">
      <GoodModal />
    </AppShell>
  );
}
