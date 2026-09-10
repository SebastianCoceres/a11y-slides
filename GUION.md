# Accesibilidad web: de checklist a ventaja operativa

---

## Introducción

<!-- id:title -->

**Título — A11Y**

Esta charla trata sobre accesibilidad web: qué es, por qué afecta directamente el trabajo de un equipo de producto, y cómo aplicarla sin agregar procesos nuevos.

> Antes de seguir, conviene aclarar qué significa realmente esa sigla que acabamos de nombrar.

<!-- id:premise -->

**Premisa — ¿Qué es A11Y?**

A11Y es la abreviatura numérica de "Accessibility" (A + 11 letras + Y). Accesibilidad significa diseñar un producto que funcione para cualquier persona, en cualquier condición. No es una categoría de usuarios aparte: es una propiedad de calidad del software, en la misma familia que el rendimiento o la seguridad.

> Si es una propiedad de calidad, tiene que poder verificarse con un estándar — y ese estándar existe hace más de treinta años.

<!-- id:wcagStandard -->

**Estándar global — WCAG 2.2**

El W3C define las Web Content Accessibility Guidelines (WCAG) desde 1994. La versión vigente es la 2.2 (2023), con criterios verificables organizados en tres niveles de conformidad: A (mínimo), AA (el exigido por normativas como la directiva UE 2019/882) y AAA (óptimo, no siempre aplicable). Esta charla se apoya en los 55 criterios de nivel A y AA.

> Esos 55 criterios no están sueltos: se agrupan en cuatro principios, y ese agrupamiento es el que va a ordenar el resto de la charla.

<!-- id:pourPrinciples -->

**Principios básicos — POUR**

Los criterios de WCAG se agrupan en cuatro principios:

- **Perceptible** (Perceivable): la información debe poder percibirse, sea cual sea el sentido disponible.
- **Operable** (Operable): los controles deben poder manejarse con teclado, mouse, voz u otros dispositivos.
- **Comprensible** (Understandable): la información y el comportamiento de la interfaz deben ser predecibles.
- **Robusto** (Robust): el contenido debe funcionar con distintos navegadores y tecnologías asistivas.

El resto de la charla sigue este mismo orden.

> Con ese orden ya establecido, antes de entrar en los criterios uno por uno vale la pena mostrar por qué conviene invertir en esto.

<!-- id:accessBenefits -->

**Beneficios — El efecto rampa de acceso**

La rampa en la vereda se construyó para sillas de ruedas. Hoy la usan carritos de bebé, repartidores y ciclistas. Ese es el efecto rampa de acceso: una mejora diseñada para un caso específico termina beneficiando a la base de usuarios completa.

> Ese efecto rampa no es abstracto: pasa todos los días, en situaciones bien concretas que cualquiera del equipo puede atravesar.

<!-- id:situations -->

**Situaciones — ¿Por qué nos interesa aplicarla?**

La lista de situaciones que se muestra en esta diapositiva no describe casos excepcionales: describe circunstancias que cualquier persona del equipo puede atravesar en un día de trabajo normal (luz solar sobre la pantalla, una conexión lenta, una lesión temporal, cansancio visual). Accesibilidad es diseñar considerando esa variabilidad como la norma, no como la excepción.

> Y si esas situaciones son la norma, ignorarlas también tiene un costo que se puede medir en números concretos para el negocio.

<!-- id:businessImpact -->

**Impacto en el negocio — Lo que nos ahorramos como equipo**

Los beneficios de aplicar accesibilidad se distribuyen en toda la organización: menos tickets de soporte por problemas ya conocidos, menor costo de desarrollo al aplicar el criterio desde el diseño en lugar de corregirlo después, onboarding más rápido sobre un código consistente, ampliación del mercado direccionable y reducción de riesgo legal y normativo.

---

## Bloque 1 — Perceptible

La información y los componentes de la interfaz deben poder percibirse, independientemente del sentido con el que se acceda a ellos.

> Arrancamos entonces por el principio de percepción, con el ejemplo más conocido de todos: el texto alternativo.

<!-- id:altText -->

**Texto alternativo (1.1.1, A)**

Todo contenido no textual (imágenes, íconos, gráficos) requiere una alternativa textual equivalente. Mostrar comparación: sin texto alternativo, un lector de pantalla no comunica ninguna información sobre el elemento; con `alt` descriptivo, el contenido queda disponible incluso si la imagen no carga.

- **Qué está mal:** la imagen repite el nombre del producto (ya visible al lado) y el botón de eliminar no tiene nombre accesible — el lector solo dice "botón".
- **Solución:** `alt=""` en la imagen decorativa, `aria-label` con el nombre del producto en el botón.

> Eso cubre imágenes fijas. El mismo principio de alternativa textual aplica a contenido que se mueve en el tiempo: audio y video.

<!-- id:mediaAlternatives -->

**Medios basados en tiempo (1.2.1–1.2.5, A/AA)**

Contenido de audio o video grabado requiere alternativas equivalentes: transcripción para audio, subtítulos sincronizados y audiodescripción para video. Sin esas alternativas, el contenido queda inaccesible para quien no puede percibir el canal original.

- **Qué está mal:** ni el video grabado ni el en vivo tienen subtítulos, transcripción ni audiodescripción.
- **Solución:** subtítulos + transcripción + nota de audiodescripción en el grabado; badge "Subtítulos en vivo" en el streaming.

> Ya cubrimos contenido no textual; ahora el problema aparece incluso con texto real, cuando la estructura que lo organiza no existe en el marcado.

<!-- id:semanticStructure -->

**Información y relaciones (1.3.1, A)**

La estructura de una interfaz (encabezados, listas, relaciones entre campo y etiqueta) debe existir en el marcado semántico, no solamente en el estilo visual. Si la jerarquía se logra únicamente con CSS, una tecnología asistiva no puede reconstruirla.

- **Qué está mal:** la tabla es puro `<div>` con CSS grid — no hay relación real entre columna y valor.
- **Solución:** `<Table>`/`<TableHead scope="col">` reales — el lector asocia cada celda con su columna.

> Esa estructura real en el DOM se rompe de otra forma cuando el orden visual y el orden del marcado quedan desincronizados.

<!-- id:meaningfulSequence -->

**Secuencia significativa (1.3.2, A)**

El orden en el que el contenido se presenta a un lector de pantalla debe conservar el significado, incluso cuando no coincide con el orden visual logrado por CSS. Mostrar comparación: un formulario reordenado visualmente sin tocar el DOM produce una lectura fuera de orden.

- **Qué está mal:** el DOM va Email → Nombre → Empresa pero clases `order-*` lo muestran al revés.
- **Solución:** se saca el `order-*` y el marcado sigue el mismo orden que se ve.

> El orden es una forma de depender de lo visual; la siguiente es más directa todavía: instrucciones que dependen de forma, color o posición.

<!-- id:sensoryCharacteristics -->

**Características sensoriales (1.3.3, A)**

Las instrucciones no pueden depender exclusivamente de forma, color, tamaño o posición ("el botón redondo verde"). Deben incluir un identificador textual que no dependa de la percepción visual.

- **Qué está mal:** la instrucción dice "el botón redondo verde de la derecha" — depende de forma, color y posición.
- **Solución:** pasa a decir "Confirmar pedido", el texto visible del botón.

> Si las instrucciones no pueden depender solo de lo visual, tampoco puede depender la funcionalidad de una única orientación de pantalla.

<!-- id:orientation -->

**Orientación (1.3.4, AA)**

El contenido debe funcionar tanto en orientación vertical como horizontal, salvo que una orientación sea esencial para la función (por ejemplo, una aplicación de piano). Bloquear la orientación sin justificación excluye a quien usa el dispositivo en un soporte fijo.

> De la orientación pasamos a otro tipo de asistencia automática: que el navegador entienda qué dato pide cada campo.

<!-- id:inputPurpose -->

**Identificar el propósito de la entrada (1.3.5, AA)**

Los campos de datos personales comunes (nombre, teléfono, dirección) deben identificarse programáticamente mediante `autocomplete`. Sin ese atributo, cada formulario se completa manualmente, sin aprovechar el autocompletado del navegador o de un gestor de contraseñas.

- **Qué está mal:** Email y Teléfono son `type="text"` sin `autoComplete`.
- **Solución:** `type="email"`/`"tel"` + `autoComplete` — teclado correcto y autocompletado.

> Dejamos el autocompletado y volvemos a lo visual con el criterio más citado de todos: el uso del color.

<!-- id:colorUsage -->

**Uso de color adecuado (1.4.1, A)**

El color no puede ser el único medio para transmitir información o distinguir un estado. Uno de cada doce hombres presenta algún tipo de daltonismo; la diapositiva siguiente muestra cómo se percibe el mismo contenido bajo protanopia, deuteranopia, tritanopia y monocromacia. Mostrar comparación: un estado marcado solo con color rojo/verde frente al mismo estado reforzado con ícono y texto.

- **Qué está mal:** vencido/al día se distingue solo por el color de fondo de la fila.
- **Solución:** columna "Estado" con ícono + texto, además del color.

> Del color pasamos a otro canal sensorial: el audio, y qué pasa cuando arranca solo sin ningún control.

<!-- id:audioControl -->

**Control de audio (1.4.2, A)**

Todo audio que se reproduce automáticamente por más de tres segundos debe poder pausarse, detenerse o silenciarse. Un audio que arranca solo y no ofrece control interfiere con cualquier lector de pantalla activo en la página.

- **Qué está mal:** el audio arranca solo y no hay ningún control para pausarlo.
- **Solución:** botón con `aria-label` dinámico que pausa/reproduce.

> Dejando el audio de lado, volvemos a lo visual con algo que aparece en casi cualquier auditoría: el contraste de la tipografía.

<!-- id:typography -->

**Tipografía legible — Contraste mínimo (1.4.3, AA)**

El texto debe mantener una relación de contraste de al menos 4.5:1 con su fondo (3:1 para texto grande). Un contraste insuficiente exige un esfuerzo visual adicional a cualquier persona, tenga o no una condición de visión diagnosticada.

- **Qué está mal:** texto secundario en `text-gray-400` da ~2.5:1 de contraste.
- **Solución:** `text-gray-700` sube el contraste a ~10-17:1, mismo tamaño y layout.

> El contraste resuelve legibilidad a tamaño fijo; el siguiente criterio pregunta qué pasa cuando ese texto se agranda.

<!-- id:textResize -->

**Cambio de tamaño del texto (1.4.4, AA)**

El texto debe poder ampliarse hasta el 200% sin pérdida de contenido ni de funcionalidad. Si el texto se corta o superpone al agrandarlo, la interfaz queda inutilizable para baja visión.

- **Qué está mal:** alto fijo en `vh` + `overflow-hidden` recorta el texto al hacer zoom.
- **Solución:** sin alto fijo, el contenedor crece con el zoom en vez de cortar.

> Si el texto tiene que poder agrandarse, meter ese texto adentro de una imagen queda directamente descartado.

<!-- id:imagesOfText -->

**Imágenes de texto (1.4.5, AA)**

Debe usarse texto real en lugar de texto incrustado en una imagen, salvo casos esenciales como logotipos. Un texto renderizado como imagen no puede seleccionarse, traducirse, ni redimensionarse.

- **Qué está mal:** el banner es un `<span>` placeholder simulando texto "horneado" en una imagen.
- **Solución:** título y bajada pasan a ser `<p>` reales — seleccionable, buscable, reescalable.

> Texto real en vez de imagen resuelve un problema de escala; reflow es el mismo problema pero a nivel de todo el layout.

<!-- id:reflow -->

**Reflow (1.4.10, AA)**

El contenido debe adaptarse a un ancho de 320px sin generar scroll horizontal ni pérdida de información. La aparición de scroll horizontal a ese ancho es el primer síntoma de un layout que no escala.

- **Qué está mal:** tabla de 560px fija dentro de un recuadro de 320px obliga a scroll horizontal.
- **Solución:** se reemplaza por tarjetas apiladas en una sola columna, sin ancho mínimo.

> Ya vimos contraste de texto; ahora el mismo requisito pero aplicado a íconos y bordes, que también necesitan distinguirse del fondo.

<!-- id:nonTextContrast -->

**Contraste de elementos no textuales (1.4.11, AA)**

Íconos, bordes y estados de controles deben mantener al menos 3:1 de contraste contra su fondo. La misma exigencia de legibilidad aplicada al texto corresponde a cualquier elemento gráfico funcional.

- **Qué está mal:** bordes e íconos en gris clarísimo, muy por debajo del 3:1 mínimo.
- **Solución:** se sube el tono de borde e ícono por encima del umbral, más anillo de foco.

> Del contraste pasamos a otra forma de personalizar la lectura: qué pasa cuando alguien necesita más espacio entre letras y líneas.

<!-- id:textSpacing -->

**Espaciado de texto (1.4.12, AA)**

El contenido debe seguir siendo legible cuando una persona aumenta el interlineado o el espaciado entre letras y párrafos desde su navegador o su tecnología asistiva. Un contenedor de altura fija impide ese ajuste.

- **Qué está mal:** contenedor de altura fija corta las últimas líneas al aumentar el espaciado.
- **Solución:** sin altura fija, el bloque crece y el texto completo queda visible.

> Cerramos el bloque de percepción con un patrón muy común de interfaz: contenido que aparece solo con hover o con foco.

<!-- id:hoverContent -->

**Contenido al pasar el cursor o enfocar (1.4.13, AA)**

El contenido adicional que aparece con hover o focus (tooltips, menús) debe poder descartarse, debe ser persistente mientras el cursor permanece sobre él, y debe ser alcanzable con el puntero. Un tooltip que desaparece antes de poder leerse no cumple ninguna función.

- **Qué está mal:** el tooltip depende de un `<span>` con hover — no es focuseable ni tiene manejo de teclado.
- **Solución:** `<button>` real con `aria-describedby`, foco y cierre con Escape.

---

## Bloque 2 — Operable

Los componentes de navegación y los controles deben poder manejarse mediante teclado, voz u otros dispositivos, sin límites de tiempo ni gestos que excluyan a una parte de los usuarios.

> Con esto cerramos todo lo que hace a que la información se perciba. El segundo principio es que los controles se puedan operar, y arrancamos por el canal más básico: el teclado.

<!-- id:keyboardNav -->

**Navegación por teclado (2.1.1, A)**

Toda la funcionalidad debe estar disponible desde el teclado. Afecta a cualquier persona que no pueda o no quiera depender del mouse: lesiones por esfuerzo repetitivo, uso prolongado de formularios, o simplemente preferencia de flujo de trabajo.

- **Qué está mal:** el buscador se reordena solo con CSS — Tab sigue el DOM, no lo visual.
- **Solución:** dos barras separadas en el DOM (mobile/desktop) en vez de reordenar por CSS.

> El foco tiene que llegar a todos lados en el orden correcto; el siguiente problema es qué pasa cuando el foco entra a un componente y no puede salir.

<!-- id:focusTrap -->

**Focus trap — Sin trampas de teclado (2.1.2, A)**

El foco debe poder salir de cualquier componente usando exclusivamente el teclado. Mostrar tres variantes: sin manejo de foco (el foco se escapa detrás del modal), manejo parcial (el foco queda atrapado sin salida) y manejo correcto (el foco se gestiona con `<dialog>` nativo, incluyendo cierre con Escape).

- **Qué está mal:** sin manejo de foco el Tab se escapa del modal; con manejo casero, el foco queda atrapado sin salida.
- **Solución:** `Dialog` de shadcn/ui gestiona todo el ciclo de foco, incluido Escape.

> Ya vimos foco atrapado sin salida; ahora el problema inverso: un atajo de teclado que se dispara donde no debería.

<!-- id:singleCharShortcuts -->

**Atajos de un carácter (2.1.4, A)**

Un atajo compuesto por una sola tecla debe poder desactivarse, remapearse, o limitarse a cuando un control específico tiene el foco. Mostrar comparación: un atajo global sin esas condiciones se dispara mientras la persona escribe en cualquier campo de texto de la página.

- **Qué está mal:** la tecla "n" abre el modal aunque estés escribiendo en un input.
- **Solución:** se ignora el atajo si el foco está en un campo de texto.

> De atajos que interrumpen pasamos a otra forma de interrumpir: un límite de tiempo que corre sin que la persona pueda hacer nada.

<!-- id:adjustableTimeout -->

**Tiempo ajustable (2.2.1, A)**

Cuando existe un límite de tiempo, debe poder extenderse. Mostrar comparación con un caso de reserva de stock (patrón equivalente al de las plataformas de venta de entradas al reservar asientos): sin aviso ni opción de extender, la reserva se libera sin que la persona tenga oportunidad de reaccionar; con aviso a los últimos diez segundos y botón de extensión, el tiempo queda bajo control de la persona. Mencionar las excepciones del criterio: eventos en tiempo real esenciales sin alternativa posible, límites cuya extensión invalidaría la actividad, y límites superiores a veinte horas.

- **Qué está mal:** la reserva se libera a los 30 segundos sin ningún aviso previo.
- **Solución:** aviso a los 10 segundos con diálogo y botón "Extender reserva".

> El mismo problema de "algo que corre solo" aparece con contenido que se mueve o rota automáticamente, como un carrusel.

<!-- id:pausableCarousel -->

**Movimiento controlable — Pausar, detener, ocultar (2.2.2, A)**

Contenido que se mueve, parpadea o se actualiza automáticamente debe poder pausarse. Mostrar comparación: un carrusel que rota sin control disponible frente al mismo carrusel con botón de pausa.

- **Qué está mal:** el banner rota cada 2.5s sin control ni región en vivo.
- **Solución:** botón de pausa + `aria-live="polite"` para anunciar cada cambio.

> Del movimiento automático pasamos a un caso límite del mismo tema, uno que no vamos a demostrar en vivo por una razón de seguridad.

<!-- id:threeFlashes -->

**Tres destellos o por debajo del umbral (2.3.1, A)**

Ningún contenido puede destellar más de tres veces por segundo: puede inducir convulsiones en personas con epilepsia fotosensible. Este criterio se explica sin demostración en vivo, por razones de seguridad para la audiencia.

> En la misma línea de movimiento que puede afectar físicamente a alguien, están las animaciones que provocan mareo sin llegar a ser un destello.

<!-- id:reducedMotion -->

**Movimiento reducido (2.3.3, AAA)**

Rebotes, parallax y auto-scroll pueden provocar mareo en personas con trastornos vestibulares o migrañas. Respetar la preferencia del sistema operativo `prefers-reduced-motion` es la diferencia entre una interfaz utilizable y una que la persona debe abandonar.

- **Qué está mal:** las animaciones ignoran `prefers-reduced-motion` del sistema.
- **Solución:** un hook lee esa preferencia y cambia el spring por un fundido simple.

> Dejamos el movimiento y volvemos a la navegación por teclado, ahora con el costo de tener que pasar por el mismo menú en cada página.

<!-- id:skipLinks -->

**Evitar bloques repetidos (2.4.1, A)**

Debe existir un mecanismo para saltear bloques de contenido que se repiten en cada página, como la navegación principal. Sin ese mecanismo, cada página cuesta lo mismo: tabular por todo el menú antes de llegar al contenido.

- **Qué está mal:** hay que tabular 8 ítems de menú antes de llegar al contenido.
- **Solución:** link "saltar al contenido" (`sr-only`, visible al enfocar) directo al `id` principal.

> Saltar bloques repetidos ahorra tiempo dentro de una página; el título de la pestaña resuelve lo mismo pero entre páginas.

<!-- id:pageTitle -->

**Título de página (2.4.2, A)**

Cada página debe tener un título que describa su tema o propósito. Un título genérico no permite distinguir pestañas del navegador ni orienta a un lector de pantalla al cambiar de contexto.

- **Qué está mal:** el título de pestaña es siempre "App", sin importar la sección.
- **Solución:** título dinámico por vista ("Facturas – Aurea").

> Del título de la página volvemos al foco, esta vez al orden en el que se recorre con Tab.

<!-- id:focusOrder -->

**Orden del foco (2.4.3, A)**

El orden en el que se recibe el foco debe conservar el significado y la operabilidad de la interfaz. Un ajuste de CSS que reordena visualmente sin modificar el DOM produce un recorrido de teclado que no corresponde al orden visual.

- **Qué está mal:** el DOM va Empresa → Nombre → Teléfono pero `order-*` lo muestra al revés.
- **Solución:** el marcado sigue el mismo orden que se ve, sin clases de reordenamiento.

> El orden del foco importa tanto como lo que cada control dice de sí mismo — y ahí aparece el problema de los enlaces con el mismo texto.

<!-- id:linkPurpose -->

**Propósito del enlace, en contexto (2.4.4, A)**

El propósito de un enlace debe poder entenderse por su texto o por el contexto inmediato. Repetir "Ver más" en una lista sin contexto adicional no permite distinguir un enlace de otro fuera de esa lista.

- **Qué está mal:** tres links "Ver más" con nombre accesible idéntico.
- **Solución:** `aria-label` con factura y cliente en cada uno.

> Ya resolvimos que cada enlace se identifique solo; ahora el problema es tener una sola forma de llegar hasta él.

<!-- id:multipleWays -->

**Múltiples vías (2.4.5, AA)**

Debe existir más de un mecanismo para llegar a un contenido determinado: búsqueda, filtro o navegación estructurada. Depender exclusivamente del scroll en una lista extensa no constituye una vía razonable de acceso.

- **Qué está mal:** 18 productos en una tabla con scroll, sin buscador.
- **Solución:** input de búsqueda que filtra en tiempo real.

> Encontrar el contenido es una parte del problema; que la etiqueta de cada campo diga algo útil es la otra.

<!-- id:descriptiveLabels -->

**Encabezados y etiquetas (2.4.6, AA)**

Los encabezados y las etiquetas de formulario deben describir el tema o propósito del contenido que acompañan. Etiquetas genéricas ("Campo 1") son técnicamente válidas pero no comunican información utilizable.

- **Qué está mal:** labels dicen "Campo 1" y "Dato" — técnicamente asociados pero sin significado.
- **Solución:** "Nombre completo" y "Correo electrónico" como texto real.

> Una etiqueta clara no sirve de nada si no se puede ver dónde está parado el foco en primer lugar.

<!-- id:visibleFocus -->

**Foco visible (2.4.7, AA)**

Todo elemento que recibe foco de teclado debe mostrar un indicador visible. Eliminar el `outline` sin reemplazo dificulta que una persona que navega con teclado identifique su posición actual en la interfaz.

- **Qué está mal:** `outline-none` sin reemplazo — no hay ninguna señal de foco.
- **Solución:** anillo con `focus-visible`, visible solo al navegar por teclado.

> Que el foco sea visible es necesario pero no alcanza si después otro elemento de la pantalla lo tapa.

<!-- id:focusNotObscured -->

**Foco no ocultado, mínimo (2.4.11, AA)**

El elemento con foco no puede quedar completamente tapado por otro contenido, como un encabezado fijo. Mostrar comparación: una lista con encabezado `sticky` sin `scroll-margin` oculta los elementos inferiores al enfocarlos; con el margen correspondiente, el elemento enfocado permanece visible.

- **Qué está mal:** sin `scroll-margin-top`, el header sticky tapa el ítem enfocado.
- **Solución:** `scroll-margin-top` igual a la altura del header.

> Dejamos el teclado por un momento para volver al puntero, empezando por gestos que necesitan una trayectoria completa.

<!-- id:pointerGestures -->

**Gestos del puntero (2.5.1, A)**

Toda función activada mediante un gesto de trayectoria o multipunto (como deslizar) debe tener una alternativa de un solo punto. Una galería navegable únicamente por swipe excluye a quien no puede ejecutar ese gesto.

- **Qué está mal:** la galería solo avanza con un gesto de arrastre mínimo de 40px.
- **Solución:** botones de flecha como alternativa de un solo toque.

> Resuelto el gesto en sí, queda otro problema del puntero: en qué momento exacto se confirma la acción.

<!-- id:pointerCancellation -->

**Cancelación del puntero (2.5.2, A)**

Las acciones deben confirmarse al soltar el clic, no al presionar, y deben poder cancelarse arrastrando el puntero fuera del control antes de soltar. Disparar una acción destructiva en `pointerdown` elimina esa última oportunidad de cancelar.

- **Qué está mal:** eliminar dispara en `onPointerDown` — no hay forma de cancelar soltando afuera.
- **Solución:** pasa a `onClick`, que solo confirma si soltás sobre el botón.

> Del momento en que se confirma un clic pasamos a otro desajuste sutil: cuando lo que se ve y lo que se anuncia no coinciden.

<!-- id:labelInName -->

**Etiqueta en el nombre (2.5.3, A)**

El nombre accesible de un control debe incluir el texto visible que lo identifica. Si el texto visible y el nombre accesible no coinciden, el control por voz que repite el texto visible no logra activar el control.

- **Qué está mal:** el botón dice "Buscar" pero su `aria-label` es "Consulta rápida".
- **Solución:** el `aria-label` arranca con el mismo texto visible.

> Ese desajuste afecta control por voz; el siguiente criterio depende de un dispositivo físico, así que lo explicamos sin demo.

<!-- id:motionActivation -->

**Activación por movimiento (2.5.4, A)**

Las funciones activadas por el movimiento del dispositivo (agitar, inclinar) deben tener un control equivalente en pantalla y poder desactivarse. Este criterio se explica sin demostración, dado que requiere un dispositivo físico móvil.

> De mover el dispositivo entero pasamos a mover elementos dentro de la pantalla: arrastrar y soltar.

<!-- id:dragMovements -->

**Movimientos de arrastre (2.5.7, AA)**

Toda función de arrastrar y soltar debe tener una alternativa que no dependa del arrastre. Reordenar una lista únicamente por drag-and-drop excluye a quien no puede sostener ese gesto con precisión.

- **Qué está mal:** reordenar la lista de KPIs solo funciona con drag and drop.
- **Solución:** botones "Subir"/"Bajar" como alternativa por teclado.

> Cerramos el bloque de operabilidad con algo que combina precisión motriz y tamaño: qué tan grande tiene que ser un objetivo táctil.

<!-- id:motorComplexity -->

**Tamaño del objetivo, mínimo (2.5.8, AA)**

Los objetivos táctiles deben medir al menos 24×24px, o contar con espacio suficiente entre controles adyacentes. Esta diapositiva incluye un simulador de temblor de mano: activarlo antes de comparar los tamaños de objetivo evidencia la dificultad de acertar un control por debajo del mínimo.

- **Qué está mal:** botones de 20×20px, por debajo del mínimo, y un checkbox sin `<label>` real.
- **Solución:** controles a 40-48px y `<label>` vinculado ampliando el área clickeable.

---

## Bloque 3 — Comprensible

La información y el funcionamiento de la interfaz deben ser predecibles y fáciles de interpretar.

> Con esto cerramos operable. El tercer principio es que todo sea comprensible, y el primer requisito para entender algo es saber en qué idioma está escrito.

<!-- id:pageLanguage -->

**Idioma de la página (3.1.1, A)**

El idioma principal del documento debe declararse mediante el atributo `lang`. Sin esa declaración, un lector de pantalla puede aplicar reglas fonéticas de otro idioma a todo el contenido. Este criterio se explica a nivel de documento, sin demostración interactiva.

> Eso cubre el idioma general del documento; el mismo problema aparece en miniatura cuando un fragmento puntual cambia de idioma.

<!-- id:partsLanguage -->

**Idioma de las partes (3.1.2, AA)**

Un fragmento de texto en un idioma distinto al principal del documento debe marcarse con su propio atributo `lang`. Mostrar comparación: una cita en inglés sin marcar se pronuncia con fonética del idioma principal del documento.

- **Qué está mal:** "It just works" en inglés, sin marcar, se lee con fonética española.
- **Solución:** `<span lang="en">` conmuta la voz al inglés solo en ese fragmento.

> Del idioma pasamos a otra forma de sorprender a quien usa la interfaz: un cambio de contexto que no pidió.

<!-- id:onFocusChange -->

**Al recibir el foco (3.2.1, A)**

Ningún control puede disparar un cambio de contexto por el solo hecho de recibir el foco. Mostrar comparación: un `<select>` que navega apenas se tabula hacia él, antes de que la persona elija una opción, frente a la misma navegación disparada únicamente tras una selección explícita.

- **Qué está mal:** el `<select>` navega apenas recibe el foco, antes de elegir nada.
- **Solución:** el cambio se mueve a `onChange`, tras una selección explícita.

> Ese cambio de contexto se disparaba solo con el foco; el mismo problema existe al modificar el valor de un campo.

<!-- id:onInputChange -->

**Al recibir entrada de datos (3.2.2, A)**

Ningún control puede disparar un cambio de contexto automático por el solo hecho de modificar su valor. Un filtro que navega o descarta datos no guardados apenas cambia de valor debe reemplazarse por un paso de confirmación explícito.

- **Qué está mal:** cambiar el filtro borra silenciosamente la nota interna sin aviso.
- **Solución:** el filtro queda pendiente hasta confirmar con un botón "Aplicar".

> Evitar sorpresas dentro de una pantalla es una parte; mantener la misma navegación entre pantallas es la otra.

<!-- id:consistentNavigation -->

**Navegación consistente (3.2.3, AA)**

Los mecanismos de navegación que se repiten deben aparecer en el mismo orden en todas las páginas. Un menú que cambia de orden entre pantallas obliga a reinterpretar la navegación en cada una.

- **Qué está mal:** los mismos 4 ítems de menú aparecen en orden distinto en cada página.
- **Solución:** ambas páginas usan la misma constante de orden.

> Si la navegación tiene que ser consistente, lo mismo aplica a cualquier control que cumpla la misma función en toda la app.

<!-- id:consistency -->

**Identificación consistente (3.2.4, AA)**

Los componentes con la misma función deben identificarse de forma consistente en toda la aplicación. Si la acción "Guardar" ocupa una posición distinta en cada módulo, cada persona debe reinterpretar la interfaz cada vez.

- **Qué está mal:** "Guardar" tiene estilo, texto y posición distintos en cada módulo.
- **Solución:** mismo componente, texto y posición en toda la app.

> Esa misma consistencia aplica a algo tan simple como dónde vive el botón de ayuda.

<!-- id:consistentHelp -->

**Ayuda consistente (3.2.6, A)**

Cuando existe un mecanismo de ayuda, debe aparecer en la misma posición relativa en todas las páginas. Un botón de ayuda que cambia de esquina entre pantallas obliga a buscarlo de nuevo cada vez.

- **Qué está mal:** el botón de ayuda cambia de esquina entre páginas.
- **Solución:** misma posición fija en todas las páginas.

> De la consistencia pasamos a otro pilar de comprensibilidad: cómo se identifican los errores cuando algo sale mal.

<!-- id:errorPrevention -->

**Identificación de errores (3.3.1, A)**

Los errores de un formulario deben identificarse y describirse en texto, asociados al campo correspondiente mediante `aria-invalid` y `aria-describedby`, y anunciados en tiempo real. Mostrar comparación: un error que aparece como texto suelto y solo tras el envío del formulario, frente a un error asociado al campo y anunciado apenas ocurre.

- **Qué está mal:** valida recién al enviar, sin `aria-invalid` ni `aria-describedby`.
- **Solución:** valida en cada cambio y linkea el error al campo con `role="alert"`.

> Identificar el error después de que ocurre es necesario, pero lo ideal es evitarlo con instrucciones claras desde antes.

<!-- id:anticipatoryHelp -->

**Etiquetas o instrucciones (3.3.2, A)**

Los campos de un formulario deben contar con etiquetas o instrucciones claras sobre el formato esperado, disponibles antes de que la persona cometa un error. Mostrar comparación: un formato indicado únicamente mediante `placeholder` (que desaparece al escribir y no está asociado al campo) frente a una instrucción persistente y vinculada mediante `aria-describedby`.

- **Qué está mal:** el formato esperado solo vive en el placeholder, que desaparece al escribir.
- **Solución:** instrucción visible y permanente, siempre en `aria-describedby`.

> Aun con buena instrucción previa, el error puede pasar igual — ahí importa qué tan específico es el mensaje que lo explica.

<!-- id:errorSuggestion -->

**Sugerencia ante errores (3.3.3, AA)**

Cuando se detecta un error, debe sugerirse cómo corregirlo. Un mensaje genérico ("dato inválido") obliga a adivinar; un mensaje específico indica exactamente qué falta corregir.

- **Qué está mal:** cualquier error de contraseña muestra el mismo mensaje genérico.
- **Solución:** mensaje puntual según qué regla falta ("te faltan 3 caracteres...").

> Un buen mensaje de error ayuda a corregir; hay acciones donde directamente conviene frenar antes de que se ejecuten.

<!-- id:confirmDestructive -->

**Prevención de errores: legal, financiero, datos (3.3.4, AA)**

En acciones significativas o irreversibles, debe ofrecerse la posibilidad de revisar, corregir o cancelar antes de confirmar. Mostrar comparación: una eliminación ejecutada al primer clic frente a la misma acción mediada por un diálogo de confirmación explícito.

- **Qué está mal:** un solo click borra la factura, sin confirmación.
- **Solución:** diálogo de confirmación antes de ejecutar el borrado.

> De frenar una acción destructiva pasamos a otro tipo de fricción evitable: pedir un dato que la persona ya cargó.

<!-- id:redundantEntry -->

**Entrada redundante (3.3.7, A)**

No debe solicitarse a la persona que vuelva a ingresar información ya provista en el mismo proceso. Pedir dos veces la misma dirección en un mismo formulario es trabajo evitable.

- **Qué está mal:** hay que cargar la dirección de facturación y de envío por separado.
- **Solución:** checkbox "usar la misma dirección" que copia los valores.

> Cerramos comprensible con un caso particular de esto mismo, en el momento más sensible de cualquier flujo: el login.

<!-- id:accessibleAuth -->

**Autenticación accesible, mínimo (3.3.8, AA)**

El proceso de autenticación no debe depender exclusivamente de una prueba cognitiva, salvo que exista una alternativa. Bloquear el pegado en un campo de contraseña no aporta seguridad adicional: solo impide el uso de gestores de contraseñas y obliga a transcribir manualmente.

- **Qué está mal:** el campo de contraseña bloquea pegar y tiene `autoComplete="off"`.
- **Solución:** se permite pegar y `autoComplete="current-password"` habilita gestores.

---

## Bloque 4 — Robusto

El contenido debe ser compatible con una amplia variedad de navegadores y tecnologías asistivas.

> Con esto cerramos comprensible. El último principio de WCAG es que todo sea robusto, y ahí volvemos al concepto que abrió esta charla: nombre, rol y valor.

<!-- id:nameRoleValue -->

**Nombre, rol, valor (4.1.2, A)**

Todo componente de interfaz personalizado debe exponer su nombre, rol y estado a las tecnologías de asistencia. Mostrar comparación: un control estilizado como interruptor pero construido sobre un `<div>` sin rol ni estado accesible, frente al mismo control implementado como `<button role="switch" aria-checked>`.

- **Qué está mal:** el switch es un `<div>` sin `role` ni `aria-checked` — no es focuseable.
- **Solución:** `<button role="switch" aria-checked>` nativo y focuseable.

> Ese mismo requisito de exponer estado aplica también a los mensajes que la interfaz genera sola, como una confirmación.

<!-- id:errorRecovery -->

**Mensajes de estado (4.1.3, AA)**

Los mensajes de estado (confirmaciones, errores) deben anunciarse a lectores de pantalla sin robar el foco, mediante regiones `aria-live`. Un mensaje de confirmación que solo aparece visualmente no llega a quien no puede ver la pantalla en ese momento.

- **Qué está mal:** el aviso de borrado desaparece en 2 segundos, sin anunciarse ni opción de deshacer.
- **Solución:** `role="status"` + `aria-live`, con botón "Deshacer" que no se autodestruye.

---

## Bloque 5 — Más allá de lo básico

Estos conceptos no corresponden a un criterio WCAG numerado, pero explican por qué una interfaz técnicamente conforme puede seguir generando fricción operativa.

> Con esto terminan los cuatro principios de WCAG. Lo que sigue no tiene un número de criterio, pero explica por qué una interfaz que aprueba todo lo anterior todavía puede resultar pesada de usar — empezando por cuánto tiene que recordar la persona.

<!-- id:cognitiveLoad -->

**Carga cognitiva**

Es la cantidad de información que una persona debe recordar y procesar para completar una tarea. Un formulario extenso en una sola pantalla exige sostener en la memoria qué falta completar, qué es obligatorio y qué errores hay que corregir. Dividir el proceso en pasos reduce esa carga.

- **Qué está mal:** 14 campos sueltos en un mismo grid, sin agrupar.
- **Solución:** los mismos 14 campos en 3 pasos con indicador de progreso.

> Reducir lo que hay que recordar en un momento dado es una forma de carga; otra es cuánto cuesta repetir la misma tarea muchas veces.

<!-- id:interactionFatigue -->

**Fatiga por interacción**

Cada interacción tiene un costo. Una tarea que exige múltiples pasos repetitivos es tolerable una vez, pero se convierte en carga operativa cuando se repite decenas de veces por día.

- **Qué está mal:** 7 secciones apiladas en scroll continuo — el historial queda al final.
- **Solución:** pestañas por teclado con la pestaña activa en la URL.

> Todo esto — carga cognitiva, fatiga por interacción — apunta a la misma idea de fondo, que cierra este bloque.

<!-- id:inclusiveDesign -->

**Diseño inclusivo**

Quien usa un producto no está ahí para aprender cómo funciona: está ahí para completar una tarea. Diseñar para condiciones reales (interrupciones, presión de tiempo, cansancio) evita trasladar la complejidad del software a la persona que lo usa.

- **Qué está mal:** las opciones del menú son `<div>` sin `onClick` ni rol — no son interactivas.
- **Solución:** `<button>` reales con tamaño táctil mínimo y nombre accesible.

> Con todos los ejemplos ya vistos, queda la pregunta práctica: con qué se implementa todo esto en el día a día.

---

## Cierre

<!-- id:tools -->

**Herramientas**

La implementación no requiere herramientas nuevas: DevTools del navegador para inspección de contraste y árbol de accesibilidad, Lighthouse para auditoría automatizada, axe-core como motor de reglas WCAG sobre el DOM, y Playwright para validar accesibilidad como parte del pipeline de integración continua. Priorizar componentes reutilizables sobre implementaciones ad hoc por página evita corregir el mismo defecto múltiples veces.

> Y con las herramientas ya sobre la mesa, el único tema que queda es lo que abre el cierre de la charla.

<!-- id:closing -->

**Cierre**

Todo lo que vimos hasta acá ya justificaba invertir en accesibilidad por las personas. Pero hoy hay un argumento más: la mayoría del tráfico que llega a un sitio ya no es humano — más del 57% de los requests a contenido HTML en 2026 son de agentes automatizados, según Cloudflare — y esos agentes leen exactamente la misma estructura semántica, el mismo árbol de accesibilidad, que un lector de pantalla. Mientras tanto, el 95.9% de los sitios más visitados sigue fallando al menos un criterio de WCAG, según WebAIM. Esto no es teórico: OpenAI probó navegar así, leyendo ese árbol de accesibilidad, en su navegador Atlas — y aunque Atlas como producto ya no existe, esa forma de navegar se mudó directo a ChatGPT, que en poco más de un año pasó de 400 a 1.000 millones de usuarios semanales. La misma inversión que hacemos por una persona ciega o con baja visión, hoy también la aprovecha una máquina que opera el sitio a esa escala.
