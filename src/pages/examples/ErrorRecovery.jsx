import { useEffect, useRef, useState } from 'react';
import { Trash2, CheckCircle2 } from 'lucide-react';
import AppShell from './AppShell';

const INITIAL_CONTACTS = [
  { id: 1, name: 'Estudio Delgado' },
  { id: 2, name: 'Grupo Iberá' },
  { id: 3, name: 'Comercial Rioja' },
];

function ContactRow({ name, onDelete, isAccessibleExample = false }) {
  return (
    <li className="flex items-center justify-between rounded border border-slate-100 px-3 py-2 text-sm">
      <span className="text-gray-700">{name}</span>
      <button
        type="button"
        onClick={onDelete}
        className={isAccessibleExample ? 'flex h-11 w-11 items-center justify-center text-gray-500 hover:text-red-600' : 'text-gray-400 hover:text-red-600'}
        aria-label={`Eliminar ${name}`}>
        <Trash2 className="h-4 w-4" />
      </button>
    </li>
  );
}

function BadExample() {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);
  const [toast, setToast] = useState(false);

  const remove = (id) => {
    setContacts((current) => current.filter((c) => c.id !== id));
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  return (
    <div className="w-80">
      <ul className="space-y-2">
        {contacts.map((c) => (
          <ContactRow key={c.id} name={c.name} onDelete={() => remove(c.id)} />
        ))}
      </ul>
      {toast && (
        <div className="mt-4 flex items-center gap-2 rounded-md bg-gray-800 px-3 py-2 text-sm text-white">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-green-400" />
          Contacto eliminado correctamente.
        </div>
      )}
    </div>
  );
}

function GoodExample() {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);
  const [removed, setRemoved] = useState(null);
  const undoRef = useRef(null);

  useEffect(() => {
    if (removed) undoRef.current?.focus();
  }, [removed]);

  const remove = (contact) => {
    setContacts((current) => current.filter((c) => c.id !== contact.id));
    setRemoved(contact);
  };

  const undo = () => {
    if (!removed) return;
    setContacts((current) => [...current, removed].sort((a, b) => a.id - b.id));
    setRemoved(null);
  };

  return (
    <div className="w-80">
      <ul className="space-y-2">
        {contacts.map((c) => (
          <ContactRow key={c.id} name={c.name} onDelete={() => remove(c)} isAccessibleExample />
        ))}
      </ul>
      {removed && (
        <div role="status" aria-live="polite" className="mt-4 flex items-center justify-between gap-2 rounded-md bg-gray-800 px-3 py-2 text-sm text-white">
          <span>"{removed.name}" eliminado.</span>
          <button ref={undoRef} type="button" onClick={undo} className="font-semibold text-indigo-300 hover:text-indigo-200">
            Deshacer
          </button>
        </div>
      )}
    </div>
  );
}

export function ErrorRecoveryBad() {
  return (
    <AppShell active="Contactos" title="Contactos">
      <BadExample />
    </AppShell>
  );
}

export function ErrorRecoveryGood() {
  return (
    <AppShell active="Contactos" title="Contactos">
      <GoodExample />
    </AppShell>
  );
}
