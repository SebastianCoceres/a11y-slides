import { Slide } from '@/components/deck';
import { Accessibility, Baby, Bike, Luggage, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';

const BENEFICIARIES = [
  { Icon: Baby, label: 'Cochecitos', position: 'top-0 left-0', delay: 0 },
  { Icon: Luggage, label: 'Valijas', position: 'top-0 right-0', delay: 0.5 },
  { Icon: Bike, label: 'Ciclistas', position: 'bottom-0 left-0', delay: 1 },
  { Icon: ShoppingCart, label: 'Repartos', position: 'bottom-0 right-0', delay: 1.5 },
];

function RampVisual() {
  return (
    <div className="relative mx-auto aspect-video w-full max-w-md">
      <motion.div
        className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand shadow-[0_0_80px_-10px_var(--brand)]"
        animate={{ y: ['-50%', '-58%', '-50%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Accessibility className="size-9 text-white" strokeWidth={2} />
      </motion.div>
      {BENEFICIARIES.map(({ Icon, label, position, delay }) => (
        <motion.div
          key={label}
          className={`absolute ${position} flex flex-col items-center gap-2`}
          animate={{ y: [0, -14, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay,
          }}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/2 text-emerald-300">
            <Icon className="h-7 w-7" strokeWidth={1.5} />
          </span>
          <span className="text-xs text-gray-500">{label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function SlideAccessBenefits() {
  return (
    <Slide>
      <div className="grid items-center gap-16 text-left md:grid-cols-2">
        <div>
          <h2 className="text-4xl text-brand-light mb-2">Beneficios: el efecto rampa de acceso</h2>
          <p className="mb-4 text-lg italic text-gray-400">Diseñado para uno, terminan usándolo todos.</p>
          <p className="mb-4 text-gray-400">
            La rampa en la vereda se construyó para sillas de ruedas. Hoy la usan cochecitos, repartidores,
            ciclistas y cualquiera con las manos ocupadas.
          </p>
          <p className="text-gray-400">
            Eso es el efecto rampa de acceso: la accesibilidad beneficia a todos los usuarios, no solo a
            quienes tienen una discapacidad.
          </p>
        </div>
        <RampVisual />
      </div>
    </Slide>
  );
}
