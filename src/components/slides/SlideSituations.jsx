import { Slide, Stack } from '@/components/deck';
import {
  Baby,
  Bandage,
  VolumeX,
  Sun,
  Wifi,
  Snowflake,
  Mic,
  Glasses,
  PersonStanding,
  Languages,
  Footprints,
} from 'lucide-react';

const situationsPageOne = [
  { icon: Baby, situation: 'Sostener un bebé en brazos y usar solo una mano', helps: 'Botones grandes, áreas táctiles amplias, navegación sencilla' },
  { icon: Bandage, situation: 'Tener una lesión temporal (brazo enyesado, dedo vendado)', helps: 'Navegación por teclado, atajos, controles fáciles de pulsar' },
  { icon: VolumeX, situation: 'Estar en un lugar ruidoso o en una biblioteca silenciosa', helps: 'Transcripciones y subtítulos para no depender del sonido' },
  { icon: Sun, situation: 'Estar al sol y no ver bien la pantalla', helps: 'Alto contraste y buen tamaño de texto' },
  { icon: Wifi, situation: 'Tener una conexión lenta', helps: 'Páginas ligeras, imágenes optimizadas, carga progresiva' },
  { icon: Snowflake, situation: 'Llevar guantes (invierno o trabajo)', helps: 'Botones grandes y gestos sencillos' },
];

const situationsPageTwo = [
  { icon: Mic, situation: 'Conducir o cocinar usando asistentes de voz', helps: 'Compatibilidad con lectores de pantalla y control por voz' },
  { icon: Glasses, situation: 'Romperse las gafas o haber olvidado las lentillas', helps: 'Posibilidad de ampliar el texto sin perder funcionalidad' },
  { icon: PersonStanding, situation: 'Ser una persona mayor con pérdida de visión o destreza', helps: 'Tipografía legible, buen contraste, interfaces simples' },
  { icon: Languages, situation: 'Estar aprendiendo el idioma', helps: 'Lenguaje claro, íconos comprensibles y estructura consistente' },
  { icon: Footprints, situation: 'Usar el móvil mientras se camina', helps: 'Interfaz simple, botones accesibles y navegación predecible' },
];

function SituationRow({ icon: Icon, situation, helps }) {
  return (
    <div className="flex items-center gap-4 bg-gray-800 border border-gray-700 rounded-lg px-5 py-3">
      <div className="shrink-0 bg-purple-500/10 text-purple-300 rounded-full p-2">
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-gray-200 text-sm flex-1">{situation}</span>
      <span className="text-purple-200 text-sm flex-1 text-right">{helps}</span>
    </div>
  );
}

export default function SlideSituations() {
  return (
    <Stack>
      <Slide>
        <h2 className="text-4xl text-purple-300 mb-2">¿Por qué nos interesa aplicarla?</h2>
        <p className="text-lg text-gray-400 mb-8 italic">Todos podemos experimentar una discapacidad temporal o situacional.</p>
        <div className="space-y-3 max-w-4xl mx-auto">
          {situationsPageOne.map((row) => (
            <SituationRow key={row.situation} {...row} />
          ))}
        </div>
      </Slide>

      <Slide>
        <h2 className="text-4xl text-purple-300 mb-8">Situaciones y ayudas de accesibilidad</h2>
        <div className="space-y-3 max-w-4xl mx-auto">
          {situationsPageTwo.map((row) => (
            <SituationRow key={row.situation} {...row} />
          ))}
        </div>
      </Slide>
    </Stack>
  );
}
