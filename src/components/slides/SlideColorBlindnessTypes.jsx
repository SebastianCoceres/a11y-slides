import pigment from '@/assets/pigment.jpg';
import ExampleLayout from '@/pages/examples/ExampleLayout';

// Standard Brettel/Viénot-style CVD simulation matrices (same ones used by
// tools like Coblis/Colorblindly). Black/white and alpha pass through
// untouched.
function CvdFilters() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <filter id="cvd-protanopia" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0.567 0.433 0     0 0
                    0.558 0.442 0     0 0
                    0     0.242 0.758 0 0
                    0     0     0     1 0" />
        </filter>
        <filter id="cvd-deuteranopia" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0.625 0.375 0   0 0
                    0.7   0.3   0   0 0
                    0     0.3   0.7 0 0
                    0     0     0   1 0" />
        </filter>
        <filter id="cvd-tritanopia" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0.95 0.05  0     0 0
                    0    0.433 0.567 0 0
                    0    0.475 0.525 0 0
                    0    0     0     1 0" />
        </filter>
        <filter id="cvd-acromatopsia" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0.299 0.587 0.114 0 0
                    0.299 0.587 0.114 0 0
                    0.299 0.587 0.114 0 0
                    0     0     0     1 0" />
        </filter>
      </defs>
    </svg>
  );
}

const TYPES = [
  {
    name: 'Visión típica',
    description: null,
    filterId: null,
  },
  {
    name: 'Deuteranopia',
    description: 'Sensibilidad reducida al verde. Es el tipo más común de daltonismo.',
    filterId: 'cvd-deuteranopia',
  },
  {
    name: 'Protanopia',
    description: 'Sensibilidad reducida al rojo.',
    filterId: 'cvd-protanopia',
  },
  {
    name: 'Tritanopia',
    description: 'Sensibilidad reducida al azul. Muy poco común.',
    filterId: 'cvd-tritanopia',
  },
  {
    name: 'Monocromacia (Acromatopsia)',
    description: 'Visión en escala de grises. Ocurre en aproximadamente 1 de cada 33.000 personas.',
    filterId: 'cvd-acromatopsia',
  },
];

export function SlideColorBlindnessTypes() {
  return (
    <ExampleLayout
      title="Tipos de deficiencia de visión del color"
      description="La misma imagen, tal como la ve cada tipo de daltonismo.">
      <CvdFilters />

      <div className="grid gap-6 sm:grid-cols-3">
        {TYPES.map((type) => (
          <div key={type.name} className="rounded-xl border border-gray-200 p-3">
            <img
              src={pigment}
              alt=""
              aria-hidden="true"
              className="aspect-4/3 w-full rounded-lg object-cover"
              style={type.filterId ? { filter: `url(#${type.filterId})` } : undefined} />
            <h3 className="mt-3 text-sm font-bold text-gray-900">{type.name}</h3>
            {type.description && <p className="mt-1 text-xs text-gray-600">{type.description}</p>}
          </div>
        ))}
      </div>
    </ExampleLayout>
  );
}
