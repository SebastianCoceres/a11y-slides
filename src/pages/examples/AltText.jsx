import { useEffect, useRef, useState } from 'react';
import ExampleLayout from './ExampleLayout';

const PLACEHOLDER_SRC =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="200"><rect width="320" height="200" fill="#d1d5db"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="#6b7280">IMG</text></svg>'
  );

function useAnnouncedName(ref) {
  const [announced, setAnnounced] = useState('');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const alt = el.getAttribute('alt');

    if (alt === null) {
      setAnnounced('"imagen" — sin atributo alt, el lector recurre al nombre de archivo o la ignora');
    } else if (alt.trim() === '') {
      setAnnounced('(nada — alt vacío, tratada como decorativa)');
    } else {
      setAnnounced(`"${alt}"`);
    }
  }, [ref]);

  return announced;
}

function BadExample() {
  const imgRef = useRef(null);
  const announced = useAnnouncedName(imgRef);

  return (
    <div>
      <img ref={imgRef} src={PLACEHOLDER_SRC} className="rounded border border-gray-300" />
      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
        Lo que anunciaría un lector de pantalla
      </p>
      <code className="mt-1 block rounded bg-gray-100 p-2 text-sm text-gray-700">{announced}</code>
    </div>
  );
}

function GoodExample() {
  const imgRef = useRef(null);
  const announced = useAnnouncedName(imgRef);

  return (
    <div>
      <img
        ref={imgRef}
        src={PLACEHOLDER_SRC}
        alt="Equipo de producto celebrando el lanzamiento alrededor de una laptop en la oficina"
        className="rounded border border-gray-300" />
      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
        Lo que anunciaría un lector de pantalla
      </p>
      <code className="mt-1 block rounded bg-gray-100 p-2 text-sm text-gray-700">{announced}</code>
    </div>
  );
}

export default function AltText() {
  return (
    <ExampleLayout
      title="Texto alternativo en imágenes"
      description="El atributo alt define el nombre accesible de una imagen. Sin él, un lector de pantalla no tiene forma confiable de describirla."
      bad={<BadExample />}
      good={<GoodExample />} />
  );
}
