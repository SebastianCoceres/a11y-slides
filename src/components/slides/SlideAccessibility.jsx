import { Slide } from '@/components/deck';
import { MousePointer2, Keyboard } from 'lucide-react';

export function SlideColorUsage() {
  return (
    <Slide>
      <h2 className="text-3xl text-yellow-300 mb-2">Uso de color adecuado</h2>
      <p className="text-base text-gray-400 mb-4 italic">Uno de cada doce varones tiene algún tipo de daltonismo.</p>

      <ul className="max-w-3xl mx-auto text-left text-gray-300 list-disc pl-5 space-y-1.5 mb-6">
        <li>Si el datatable marca "vencido" solo con rojo sobre verde, seleccionar varias filas puede tapar cuál era la problemática.</li>
        <li>Un ícono con texto evita la frustración de no saber por qué "Confirmar" está deshabilitado.</li>
      </ul>
    </Slide>
  );
}

export function SlideTypography() {
  return (
    <Slide>
      <h2 className="text-3xl text-yellow-300 mb-6">Tipografía legible</h2>

      <ul className="max-w-3xl mx-auto text-left text-gray-300 list-disc pl-5 space-y-1.5 mb-6">
        <li>Un operador revisando el ERP toda la mañana, con la vista cansada, no siempre identifica el problema como "tipografía".</li>
        <li>Simplemente se esfuerza más para leer, o termina llamando a soporte para confirmar algo que debería poder leer solo.</li>
      </ul>
    </Slide>
  );
}

export function SlideKeyboardNav() {
  return (
    <Slide>
      <h2 className="text-3xl text-yellow-300 mb-6">Navegación por teclado</h2>
      <div className="flex items-center justify-center gap-4 mb-6 text-gray-400">
        <MousePointer2 className="w-6 h-6" /> <span className="line-through text-red-400">Dependencia del ratón</span>
        <span className="mx-4 text-2xl">vs</span>
        <Keyboard className="w-6 h-6 text-green-400" /> <span className="text-green-400 font-bold">Navegabilidad 100% teclado</span>
      </div>

      <p className="max-w-3xl mx-auto text-gray-300 mb-6">
        El operador que carga 400 registros por día en el CRM usa <code>Tab</code> para recorrer los campos del
        formulario. Si el foco salta sin un orden lógico, tiene que volver atrás con el mouse. Un{' '}
        <code>&lt;button&gt;</code> nativo con orden de foco correcto le permite completar la misma tarea más
        rápido y sin interrupciones.
      </p>
    </Slide>
  );
}

export function SlideAltText() {
  return (
    <Slide>
      <h2 className="text-3xl text-yellow-300 mb-6">Texto alternativo para imágenes</h2>

      <ul className="max-w-3xl mx-auto text-left text-gray-300 list-disc pl-5 space-y-1.5 mb-6">
        <li>Un reporte puede mostrar información solo mediante un gráfico o una imagen.</li>
        <li>Con conexión lenta esa imagen puede no cargar: sin <code>alt</code>, se pierde todo el contexto que representaba.</li>
        <li>Un texto alternativo comunica ese contenido incluso cuando la imagen no está disponible.</li>
      </ul>
    </Slide>
  );
}

export function SlideFocusTrap() {
  return (
    <Slide>
      <h2 className="text-3xl text-yellow-300 mb-6">Focus trap</h2>

      <ul className="max-w-3xl mx-auto text-left text-gray-300 list-disc pl-5 space-y-1.5 mb-6">
        <li>Un modal sin focus trap deja escapar el foco: hay que volver al mouse para regresar a él.</li>
        <li>Con la etiqueta <code>dialog</code>, gran parte de este comportamiento ya se gestiona de forma nativa.</li>
      </ul>
    </Slide>
  );
}
