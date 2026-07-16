import { Slide, Stack } from '@revealjs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusCircle, AlertCircle, MousePointer2, Keyboard, ImageOff } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function SlideAccessibility() {
  return (
    <Stack>
      {/* Diapositiva 1: Uso de color adecuado */}
      <Slide>
        <h2 className="text-4xl text-yellow-300 mb-2">Principios básicos: Uso de color adecuado</h2>
        <p className="text-lg text-gray-400 mb-6 italic">No es un feature, es un requerimiento.</p>

        <div className="grid grid-cols-2 gap-8 text-left">
          <div className="bg-gray-800 p-6 rounded-xl border border-red-500/50">
            <span className="text-xs text-red-400 uppercase font-bold block mb-4">Malo: contraste insuficiente + solo color</span>
            <div className="bg-gray-300 text-gray-400 p-3 rounded text-sm mb-4">Texto gris claro sobre fondo gris, casi ilegible.</div>
            <input type="text" defaultValue="usuario_incorrecto" className="w-full bg-gray-900 border border-red-500 p-2 rounded text-sm text-gray-300 outline-none" />
            <p className="text-xs text-gray-500 mt-2">El error solo se comunica con un borde rojo; sin texto, un usuario con daltonismo no lo detecta.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl border border-green-500/50">
            <span className="text-xs text-green-400 uppercase font-bold block mb-4">Bueno: contraste AA + color + icono + texto</span>
            <div className="bg-gray-900 text-gray-100 p-3 rounded text-sm mb-4 border border-gray-700">Texto con contraste alto, fácil de leer.</div>
            <div className="relative">
              <Input defaultValue="usuario_incorrecto" aria-invalid={true} aria-describedby="error-msg" className="bg-gray-900 border-red-500 pr-10 text-gray-300 focus-visible:ring-red-500" />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <AlertCircle className="h-5 w-5 text-red-500" />
              </div>
            </div>
            <p id="error-msg" className="text-xs text-red-400 mt-1 font-medium">Este nombre de usuario ya está en uso.</p>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-6">Considerar daltonismo (protanopia, deuteranopia, tritanopia, acromatopsia): la información nunca debe depender únicamente del color.</p>
      </Slide>

      {/* Diapositiva 2: Tipografía legible */}
      <Slide>
        <h2 className="text-4xl text-yellow-300 mb-8">Principios básicos: Tipografía legible</h2>

        <div className="grid grid-cols-2 gap-8 text-left">
          <div className="bg-gray-800 p-6 rounded-xl border border-red-500/50">
            <span className="text-xs text-red-400 uppercase font-bold block mb-4">Malo</span>
            <p className="text-[11px] leading-none text-gray-500 mb-2">Texto diminuto, interlineado apretado y bajo contraste hace que leer un párrafo completo sea un esfuerzo innecesario para cualquier persona, especialmente con visión borrosa.</p>
            <p className="text-[11px] leading-none text-gray-500">Sin jerarquía: todo el texto pesa y se ve igual.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl border border-green-500/50">
            <span className="text-xs text-green-400 uppercase font-bold block mb-4">Bueno</span>
            <h4 className="text-white font-bold text-lg mb-2">Título con jerarquía clara</h4>
            <p className="text-base leading-relaxed text-gray-300">Tamaño de fuente legible, interlineado de 1.5 y buen contraste para que el texto se lea sin esfuerzo, incluso con visión borrosa.</p>
          </div>
        </div>
      </Slide>

      {/* Diapositiva 3: Navegación por teclado */}
      <Slide>
        <h2 className="text-4xl text-yellow-300 mb-8">Principios básicos: Navegación por teclado</h2>
        <div className="flex items-center justify-center gap-4 mb-8 text-gray-400">
          <MousePointer2 className="w-6 h-6" /> <span className="line-through text-red-400">Dependencia del ratón</span>
          <span className="mx-4 text-2xl">vs</span>
          <Keyboard className="w-6 h-6 text-green-400" /> <span className="text-green-400 font-bold">Navegabilidad 100% teclado</span>
        </div>

        <div className="grid grid-cols-2 gap-8 text-left">
          <div className="bg-gray-800 p-6 rounded-xl border border-red-500/50">
            <span className="text-xs text-red-400 uppercase font-bold block mb-4">Malo</span>
            <div className="flex flex-col gap-2">
              <div className="bg-blue-600 p-3 rounded shadow hover:bg-blue-500 w-fit cursor-pointer text-white flex items-center justify-center">
                <PlusCircle className="w-5 h-5" />
              </div>
              <p className="text-sm text-gray-400 mt-2">Un <code>&lt;div onClick&gt;</code> no recibe foco de teclado ni se activa con Enter/Espacio.</p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl border border-green-500/50">
            <span className="text-xs text-green-400 uppercase font-bold block mb-4">Bueno</span>
            <div className="flex flex-col gap-2">
              <Button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center gap-2 w-fit" aria-label="Añadir Proyecto">
                <PlusCircle className="w-5 h-5" />
                <span>Añadir</span>
              </Button>
              <p className="text-sm text-gray-400 mt-2">Un <code>&lt;button&gt;</code> nativo con <code>aria-label</code> es enfocable, accesible por teclado y anunciado por lectores de pantalla.</p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Diapositiva 4: Texto alternativo para imágenes */}
      <Slide>
        <h2 className="text-4xl text-yellow-300 mb-8">Principios básicos: Texto alternativo para imágenes</h2>

        <div className="grid grid-cols-2 gap-8 text-left font-mono text-sm">
          <div className="bg-gray-950 p-6 rounded-xl border border-red-900/50">
            <span className="text-red-400 flex items-center gap-2 mb-4"><ImageOff className="w-4 h-4" /> Malo</span>
            <pre className="text-gray-300 whitespace-pre-wrap">{`<img src="foto-equipo.jpg" />`}</pre>
            <p className="text-xs text-gray-500 mt-4 font-sans">Sin <code>alt</code>, un lector de pantalla anuncia el nombre del archivo o nada útil.</p>
          </div>

          <div className="bg-gray-950 p-6 rounded-xl border border-green-900/50">
            <span className="text-green-400 flex items-center gap-2 mb-4">Bueno</span>
            <pre className="text-gray-300 whitespace-pre-wrap">{`<img
  src="foto-equipo.jpg"
  alt="Equipo de producto celebrando
  el lanzamiento en la oficina" />`}</pre>
            <p className="text-xs text-gray-500 mt-4 font-sans">Descriptivo y específico. Si la imagen es decorativa, <code>alt=""</code> para que el lector la ignore.</p>
          </div>
        </div>
      </Slide>

      {/* Diapositiva 5: Focus trap */}
      <Slide>
        <h2 className="text-4xl text-yellow-300 mb-8">Principios básicos: Focus trap</h2>

        <div className="grid grid-cols-2 gap-8 text-left text-sm">
          <Card className="bg-gray-900 border-red-500/50">
            <CardContent className="p-6">
              <div className="text-red-400 font-bold mb-4 uppercase text-xs tracking-wider">Malo: modal sin focus trap</div>
              <ul className="space-y-2 text-gray-400 list-disc pl-4">
                <li>El foco se escapa del modal a elementos ocultos debajo.</li>
                <li>No se puede cerrar con la tecla <code>Escape</code>.</li>
                <li>Al cerrar, el foco no vuelve al botón que lo abrió.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-green-500/50">
            <CardContent className="p-6">
              <div className="text-green-400 font-bold mb-4 uppercase text-xs tracking-wider">Bueno: modal con focus trap</div>
              <ul className="space-y-2 text-gray-400 list-disc pl-4">
                <li>El foco cicla dentro del modal (<strong>focus trap</strong>).</li>
                <li>Auto-focus en el primer elemento interactivo.</li>
                <li>Retorno automático del foco al <code>trigger</code> original al cerrar.</li>
                <li>Soporte nativo para <code>Escape</code>.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Slide>
    </Stack>
  );
}
