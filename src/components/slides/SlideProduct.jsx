import { Slide } from '@revealjs/react';

export default function SlideProduct() {
  return (
    <Slide>
      <h2 className="text-4xl text-red-300 mb-8">4. Visión de Producto</h2>
      <ul className="text-2xl text-left space-y-6">
        <li><strong>CTAs Directos vs Retención:</strong> Ej. Solo "Cancelar" vs "Pausar", "Cambiar plan".</li>
        <li><strong>Especificidad vs Generalismo:</strong> "KPIs" genéricos vs <em>¿Qué decisión debe tomar el usuario aquí?</em></li>
        <li><strong>Cortoplacismo:</strong> Código rápido genera <strong>deuda técnica</strong> enorme sin base de experiencia.</li>
      </ul>
    </Slide>
  );
}
