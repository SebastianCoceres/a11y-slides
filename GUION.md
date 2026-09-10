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

- **Qué está mal:** el `<img>` de cada fila usa `alt={p.nombre}`, el mismo texto que ya está en la celda de al lado, así que un lector de pantalla anuncia el nombre del producto dos veces por fila. Además el botón de eliminar no tiene `aria-label` (queda `undefined`), así que solo anuncia "botón" sin decir a qué producto corresponde.
- **Solución:** el ícono pasa a `alt=""` porque es puramente decorativo (no aporta nada que no esté ya en el texto de la fila), así el lector lo saltea. El botón de eliminar suma `aria-label={`Eliminar ${p.nombre}`}`, así el nombre queda asociado al control aunque visualmente sea solo un ícono.

> Eso cubre imágenes fijas. El mismo principio de alternativa textual aplica a contenido que se mueve en el tiempo: audio y video.

<!-- id:mediaAlternatives -->

**Medios basados en tiempo (1.2.1–1.2.5, A/AA)**

Contenido de audio o video grabado requiere alternativas equivalentes: transcripción para audio, subtítulos sincronizados y audiodescripción para video. Sin esas alternativas, el contenido queda inaccesible para quien no puede percibir el canal original.

- **Qué está mal:** ninguno de los dos videos (grabado y en vivo) tiene subtítulos, transcripción ni nota de audiodescripción — no hay ningún elemento en el DOM que ofrezca una alternativa textual al contenido audiovisual.
- **Solución:** el video grabado suma un botón de subtítulos con `aria-pressed`/`aria-label` que indica el estado actual ("Activar"/"Desactivar subtítulos"), un `<details>/<summary>` con la transcripción completa, y una nota de texto sobre la pista de audiodescripción. El video en vivo suma un badge "Subtítulos en vivo" para avisar que la transmisión sí los tiene.

> Ya cubrimos contenido no textual; ahora el problema aparece incluso con texto real, cuando la estructura que lo organiza no existe en el marcado.

<!-- id:semanticStructure -->

**Información y relaciones (1.3.1, A)**

La estructura de una interfaz (encabezados, listas, relaciones entre campo y etiqueta) debe existir en el marcado semántico, no solamente en el estilo visual. Si la jerarquía se logra únicamente con CSS, una tecnología asistiva no puede reconstruirla.

- **Qué está mal:** cada fila de la tabla es un `<div>` alineado con CSS grid, no un `<table>` real — visualmente parece una tabla pero en el DOM no hay ninguna relación estructural entre el header "Total" y el valor "$12.800" de cada fila.
- **Solución:** se reemplazan los `<div>` por `<Table>`, `<TableRow>`, `<TableHead scope="col">` y `<TableCell>` reales. Con `scope="col"` en el header, el lector de pantalla asocia cada celda con su columna al recorrerla, y anuncia por ejemplo "Total, $12.800" en vez de un número aislado.

> Esa estructura real en el DOM se rompe de otra forma cuando el orden visual y el orden del marcado quedan desincronizados.

<!-- id:meaningfulSequence -->

**Secuencia significativa (1.3.2, A)**

El orden en el que el contenido se presenta a un lector de pantalla debe conservar el significado, incluso cuando no coincide con el orden visual logrado por CSS. Mostrar comparación: un formulario reordenado visualmente sin tocar el DOM produce una lectura fuera de orden.

- **Qué está mal:** el orden del DOM es Email → Nombre → Empresa, pero las clases `order-3`, `order-1`, `order-2` de Tailwind reordenan visualmente los campos a Nombre → Empresa → Email. El orden visual y el orden del marcado quedan desincronizados.
- **Solución:** se elimina el uso de `order-*` y el marcado se escribe directamente en el orden Nombre → Empresa → Email, que es el mismo que se muestra visualmente. Así el orden del DOM (el que sigue Tab y cualquier lector de pantalla) coincide con el orden visual, sin depender de CSS para reordenar.

> El orden es una forma de depender de lo visual; la siguiente es más directa todavía: instrucciones que dependen de forma, color o posición.

<!-- id:sensoryCharacteristics -->

**Características sensoriales (1.3.3, A)**

Las instrucciones no pueden depender exclusivamente de forma, color, tamaño o posición ("el botón redondo verde"). Deben incluir un identificador textual que no dependa de la percepción visual.

- **Qué está mal:** la instrucción de texto dice "hacé clic en el botón redondo verde de la derecha" — depende de forma (redondo), color (verde) y posición (derecha) para identificar el control, en vez de referenciarlo por su nombre o texto visible.
- **Solución:** la instrucción pasa a decir "hacé clic en 'Confirmar pedido'", el mismo texto que ahora aparece visible dentro del botón (antes solo estaba en el `aria-label`, oculto). Así la referencia sobrevive a cambios de color, forma o posición porque apunta al texto, que es lo único estable.

> Si las instrucciones no pueden depender solo de lo visual, tampoco puede depender la funcionalidad de una única orientación de pantalla.

<!-- id:orientation -->

**Orientación (1.3.4, AA)**

El contenido debe funcionar tanto en orientación vertical como horizontal, salvo que una orientación sea esencial para la función (por ejemplo, una aplicación de piano). Bloquear la orientación sin justificación excluye a quien usa el dispositivo en un soporte fijo.

> De la orientación pasamos a otro tipo de asistencia automática: que el navegador entienda qué dato pide cada campo.

<!-- id:inputPurpose -->

**Identificar el propósito de la entrada (1.3.5, AA)**

Los campos de datos personales comunes (nombre, teléfono, dirección) deben identificarse programáticamente mediante `autocomplete`. Sin ese atributo, cada formulario se completa manualmente, sin aprovechar el autocompletado del navegador o de un gestor de contraseñas.

- **Qué está mal:** los campos de Email y Teléfono usan `type="text"` sin `autoComplete`, así que el navegador no tiene forma de saber qué tipo de dato espera cada campo.
- **Solución:** se agrega `type="email"`/`type="tel"`, que además de habilitar el teclado correcto en mobile valida el formato del dato, y `autoComplete="email"`/`autoComplete="tel"`, que le dice al navegador y a los gestores de contraseñas qué campo del perfil ofrecer para autocompletar.

> Dejamos el autocompletado y volvemos a lo visual con el criterio más citado de todos: el uso del color.

<!-- id:colorUsage -->

**Uso de color adecuado (1.4.1, A)**

El color no puede ser el único medio para transmitir información o distinguir un estado. Uno de cada doce hombres presenta algún tipo de daltonismo; la diapositiva siguiente muestra cómo se percibe el mismo contenido bajo protanopia, deuteranopia, tritanopia y monocromacia. Mostrar comparación: un estado marcado solo con color rojo/verde frente al mismo estado reforzado con ícono y texto.

- **Qué está mal:** el estado de cada factura (vencida o al día) se comunica únicamente con el color de fondo de la fila (`bg-red-50` / `bg-green-50`) — no hay texto, ícono ni ningún otro indicador. Quien no percibe esa diferencia de color no tiene forma de saber el estado.
- **Solución:** se agrega una columna "Estado" con un `Badge` que combina ícono (`AlertTriangle`/`CheckCircle2`) y texto ("Vencido"/"Al día"), además de mantener el color de fondo. La información ya no depende solo del color: está también en el texto y en la forma del ícono.

> Del color pasamos a otro canal sensorial: el audio, y qué pasa cuando arranca solo sin ningún control.

<!-- id:audioControl -->

**Control de audio (1.4.2, A)**

Todo audio que se reproduce automáticamente por más de tres segundos debe poder pausarse, detenerse o silenciarse. Un audio que arranca solo y no ofrece control interfiere con cualquier lector de pantalla activo en la página.

- **Qué está mal:** el audio arranca solo al abrir el contacto (`playing` en `true` por defecto, texto "Reproduciendo automáticamente…") y no existe ningún botón ni control en el DOM para pausarlo, detenerlo o bajarle el volumen.
- **Solución:** se agrega un `<button>` con `aria-label` dinámico ("Pausar grabación" / "Reproducir grabación") y estado manejado con `useState`, que alterna el ícono `Play`/`Pause` y el texto "Reproduciendo…" / "En pausa". Cumple con que cualquier audio autorreproducido de más de 3 segundos tenga un control accesible e independiente del volumen del sistema.

> Dejando el audio de lado, volvemos a lo visual con algo que aparece en casi cualquier auditoría: el contraste de la tipografía.

<!-- id:typography -->

**Tipografía legible — Contraste mínimo (1.4.3, AA)**

El texto debe mantener una relación de contraste de al menos 4.5:1 con su fondo (3:1 para texto grande). Un contraste insuficiente exige un esfuerzo visual adicional a cualquier persona, tenga o no una condición de visión diagnosticada.

- **Qué está mal:** el texto secundario usa `text-gray-400` sobre fondo blanco, lo que da un contraste de aproximadamente 2.5:1 — muy por debajo del mínimo de 4.5:1 para texto normal.
- **Solución:** se cambia `text-gray-400` por `text-gray-700`, manteniendo mismo tamaño, peso y layout — el contraste sube a ~17.7:1 en el título del pedido y ~10.3:1 en fecha/estado/cliente. El único cambio es el tono de color, no la tipografía ni la estructura.

> El contraste resuelve legibilidad a tamaño fijo; el siguiente criterio pregunta qué pasa cuando ese texto se agranda.

<!-- id:textResize -->

**Cambio de tamaño del texto (1.4.4, AA)**

El texto debe poder ampliarse hasta el 200% sin pérdida de contenido ni de funcionalidad. Si el texto se corta o superpone al agrandarlo, la interfaz queda inutilizable para baja visión.

- **Qué está mal:** el contenedor fija su alto con `style={{ height: '7vh' }}` y `overflow-hidden` más `truncate` en los textos. El `vh` depende del viewport, así que al hacer zoom real del navegador el viewport mide menos píxeles CSS y el contenedor se achica — pero el texto, en `rem`/`px`, no se achica con él, y termina recortado.
- **Solución:** se elimina el alto fijo en `vh` y el `overflow-hidden`/`truncate` — el contenedor crece según el contenido en vez de recortarlo. Como el alto ya no depende del viewport, contenedor y texto escalan juntos con el zoom y el contenido nunca se corta, a cualquier nivel de zoom.

> Si el texto tiene que poder agrandarse, meter ese texto adentro de una imagen queda directamente descartado.

<!-- id:imagesOfText -->

**Imágenes de texto (1.4.5, AA)**

Debe usarse texto real en lugar de texto incrustado en una imagen, salvo casos esenciales como logotipos. Un texto renderizado como imagen no puede seleccionarse, traducirse, ni redimensionarse.

- **Qué está mal:** en la versión Bad el banner promocional no tiene texto real: adentro hay un único `<span>` con el literal `[ banner-promo.png ]`, simulando que el título, el descuento y la fecha están "horneados" en los píxeles de una imagen en vez de existir como texto en el DOM.
- **Solución:** en la versión Good el mismo fondo/degradé se mantiene como está, pero el título y la bajada pasan a ser dos `<p>` reales dentro del banner. Al ser texto en el DOM, se puede seleccionar, Ctrl+F lo encuentra y reescala junto con el resto de la tipografía.

> Texto real en vez de imagen resuelve un problema de escala; reflow es el mismo problema pero a nivel de todo el layout.

<!-- id:reflow -->

**Reflow (1.4.10, AA)**

El contenido debe adaptarse a un ancho de 320px sin generar scroll horizontal ni pérdida de información. La aparición de scroll horizontal a ese ancho es el primer síntoma de un layout que no escala.

- **Qué está mal:** la tabla de la versión Bad tiene `className="w-[560px]"` fijo, envuelta en `overflow-x-auto`, dentro de un recuadro de apenas 320px. Ese ancho mínimo obliga a scrollear horizontalmente para ver columnas como Monto o Estado.
- **Solución:** la versión Good reemplaza la tabla por una lista de tarjetas (divs apilados con `space-y-2`) que muestran el mismo dato por fila, acomodadas en una sola columna sin ancho mínimo — no aparece scroll horizontal dentro del mismo recuadro de 320px.

> Ya vimos contraste de texto; ahora el mismo requisito pero aplicado a íconos y bordes, que también necesitan distinguirse del fondo.

<!-- id:nonTextContrast -->

**Contraste de elementos no textuales (1.4.11, AA)**

Íconos, bordes y estados de controles deben mantener al menos 3:1 de contraste contra su fondo. La misma exigencia de legibilidad aplicada al texto corresponde a cualquier elemento gráfico funcional.

- **Qué está mal:** los botones de ícono en la versión Bad usan `border-slate-100` para el borde y `text-slate-300` para el ícono, ambos sobre fondo blanco — muy por debajo del 3:1 que necesita un componente de interfaz no textual (ícono, borde de control) para distinguirse del fondo.
- **Solución:** la versión Good sube el borde a `border-slate-300` (con `hover:border-slate-400`) y el ícono a `text-slate-600` (con `hover:text-slate-900`), además de agregar `focus-visible:ring-2 focus-visible:ring-brand` — ambos elementos quedan por encima del umbral de 3:1 contra el blanco.

> Del contraste pasamos a otra forma de personalizar la lectura: qué pasa cuando alguien necesita más espacio entre letras y líneas.

<!-- id:textSpacing -->

**Espaciado de texto (1.4.12, AA)**

El contenido debe seguir siendo legible cuando una persona aumenta el interlineado o el espaciado entre letras y párrafos desde su navegador o su tecnología asistiva. Un contenedor de altura fija impide ese ajuste.

- **Qué está mal:** el contenedor de la nota en la versión Bad tiene altura fija (`h-24`) más `overflow-hidden`. Al aplicar más interlineado, espaciado entre letras y entre palabras (`lineHeight: 2.2`, `letterSpacing: '0.14em'`, `wordSpacing: '0.18em'`), el texto ya no entra en esa altura y las últimas líneas quedan cortadas y ocultas.
- **Solución:** la versión Good usa el mismo espaciado pero sin altura fija ni `overflow-hidden` en el contenedor — al activar el mismo toggle, el bloque crece en alto y el texto completo sigue visible.

> Cerramos el bloque de percepción con un patrón muy común de interfaz: contenido que aparece solo con hover o con foco.

<!-- id:hoverContent -->

**Contenido al pasar el cursor o enfocar (1.4.13, AA)**

El contenido adicional que aparece con hover o focus (tooltips, menús) debe poder descartarse, debe ser persistente mientras el cursor permanece sobre él, y debe ser alcanzable con el puntero. Un tooltip que desaparece antes de poder leerse no cumple ninguna función.

- **Qué está mal:** en la versión Bad el disparador del tooltip es un `<span>` sin `tabIndex` ni rol de botón, con el contenido controlado solo por `onMouseEnter`/`onMouseLeave`. Al no ser un elemento focuseable, no hay ningún manejo de teclado (`onFocus`, `Escape`) que muestre o cierre el tooltip.
- **Solución:** la versión Good convierte el disparador en un `<button>` real con `aria-label` y `aria-describedby={tooltipId}`, agrega manejo de foco (`onFocusCapture`/`onBlurCapture`) para abrir con teclado y cerrar solo cuando el foco sale del contenedor, y escucha `Escape` para cerrarlo. El contenido del tooltip pasa a tener `id` y `role="tooltip"`, enlazado por `aria-describedby` para que un lector de pantalla lo anuncie al enfocar el botón.

---

## Bloque 2 — Operable

Los componentes de navegación y los controles deben poder manejarse mediante teclado, voz u otros dispositivos, sin límites de tiempo ni gestos que excluyan a una parte de los usuarios.

> Con esto cerramos todo lo que hace a que la información se perciba. El segundo principio es que los controles se puedan operar, y arrancamos por el canal más básico: el teclado.

<!-- id:keyboardNav -->

**Navegación por teclado (2.1.1, A)**

Toda la funcionalidad debe estar disponible desde el teclado. Afecta a cualquier persona que no pueda o no quiera depender del mouse: lesiones por esfuerzo repetitivo, uso prolongado de formularios, o simplemente preferencia de flujo de trabajo.

- **Qué está mal:** en la versión Bad el buscador está primero en el DOM (para apilarse arriba en mobile) y en pantallas anchas se lo reubica visualmente al final con clases de `order`. Esa propiedad es visual — no cambia el orden real de los nodos en el DOM, que es lo que usa el navegador para calcular el orden de tabulación.
- **Solución:** la versión Good elimina el reordenamiento por CSS y arma dos barras separadas en el DOM — una para mobile (buscador primero, visible en angosto) y otra para desktop (acciones primero, buscador al final, oculta en angosto). `display: none` saca del árbol de accesibilidad a la barra inactiva, así que en cualquier ancho Tab sigue el orden real de la única barra visible.

> El foco tiene que llegar a todos lados en el orden correcto; el siguiente problema es qué pasa cuando el foco entra a un componente y no puede salir.

<!-- id:focusTrap -->

**Focus trap — Sin trampas de teclado (2.1.2, A)**

El foco debe poder salir de cualquier componente usando exclusivamente el teclado. Mostrar tres variantes: sin manejo de foco (el foco se escapa detrás del modal), manejo parcial (el foco queda atrapado sin salida) y manejo correcto (el foco se gestiona con `<dialog>` nativo, incluyendo cierre con Escape).

- **Qué está mal:** en la primera variante el modal es un `div` con overlay renderizado condicionalmente, sin ningún manejo de foco: al abrirse, el foco queda donde estaba y Tab sigue recorriendo los botones del fondo, tapados visualmente por el overlay. La segunda variante agrega un listener de teclado que en cada Tab fuerza el foco a un único campo — el foco queda atrapado sin salida: no hay manejo de Escape y no hay forma de llegar con teclado a los botones Cancelar/Eliminar. Es una trampa de teclado real.
- **Solución:** la tercera variante reemplaza el modal casero por el componente `Dialog` de shadcn/ui, que gestiona el ciclo de foco completo: lo mueve adentro al abrir, lo retiene dentro del modal con Tab, cierra con Escape y devuelve el foco al botón que lo disparó — sin una sola línea de manejo manual de foco.

> Ya vimos foco atrapado sin salida; ahora el problema inverso: un atajo de teclado que se dispara donde no debería.

<!-- id:singleCharShortcuts -->

**Atajos de un carácter (2.1.4, A)**

Un atajo compuesto por una sola tecla debe poder desactivarse, remapearse, o limitarse a cuando un control específico tiene el foco. Mostrar comparación: un atajo global sin esas condiciones se dispara mientras la persona escribe en cualquier campo de texto de la página.

- **Qué está mal:** el listener global de la versión Bad abre el modal "Nueva factura" apenas detecta la tecla "n", sin revisar en qué elemento está el foco en ese momento.
- **Solución:** la versión Good agrega una verificación de si el foco está en un input, textarea o contenido editable; si es así, la tecla se ignora y se escribe normal. Repetí "factura nueva" en el buscador — esta vez el texto llega completo, y el botón "Nueva factura" sigue disponible para quien no use el atajo.

> De atajos que interrumpen pasamos a otra forma de interrumpir: un límite de tiempo que corre sin que la persona pueda hacer nada.

<!-- id:adjustableTimeout -->

**Tiempo ajustable (2.2.1, A)**

Cuando existe un límite de tiempo, debe poder extenderse. Mostrar comparación con un caso de reserva de stock (patrón equivalente al de las plataformas de venta de entradas al reservar asientos): sin aviso ni opción de extender, la reserva se libera sin que la persona tenga oportunidad de reaccionar; con aviso a los últimos diez segundos y botón de extensión, el tiempo queda bajo control de la persona. Mencionar las excepciones del criterio: eventos en tiempo real esenciales sin alternativa posible, límites cuya extensión invalidaría la actividad, y límites superiores a veinte horas.

- **Qué está mal:** la versión Bad cuenta regresiva 30 segundos y libera la reserva sin ningún aviso previo ni forma de extenderla — el único indicio es un contador chico marcado como decorativo para tecnología asistiva, que queda fuera del árbol de accesibilidad.
- **Solución:** la versión Good agrega un umbral de aviso a los 10 segundos restantes: al llegar a ese punto se muestra un diálogo de alerta con un contador anunciado en vivo, más un botón "Extender reserva" que resetea el tiempo. El lector de pantalla anuncia el diálogo y la cuenta regresiva, y hay una acción concreta para no perder la reserva.

> El mismo problema de "algo que corre solo" aparece con contenido que se mueve o rota automáticamente, como un carrusel.

<!-- id:pausableCarousel -->

**Movimiento controlable — Pausar, detener, ocultar (2.2.2, A)**

Contenido que se mueve, parpadea o se actualiza automáticamente debe poder pausarse. Mostrar comparación: un carrusel que rota sin control disponible frente al mismo carrusel con botón de pausa.

- **Qué está mal:** el banner de la versión Bad rota de mensaje cada 2.5 segundos sin ningún control para detenerlo, y el cambio de texto no está en una región en vivo, así que un lector de pantalla nunca anuncia los mensajes nuevos.
- **Solución:** la versión Good agrega un botón de pausa/reanudar con estado accesible que corta la rotación automática, y pone el mensaje dentro de una región `aria-live="polite"` para que cada cambio se anuncie.

> Del movimiento automático pasamos a un caso límite del mismo tema, uno que no vamos a demostrar en vivo por una razón de seguridad.

<!-- id:threeFlashes -->

**Tres destellos o por debajo del umbral (2.3.1, A)**

Ningún contenido puede destellar más de tres veces por segundo: puede inducir convulsiones en personas con epilepsia fotosensible. Este criterio se explica sin demostración en vivo, por razones de seguridad para la audiencia.

> En la misma línea de movimiento que puede afectar físicamente a alguien, están las animaciones que provocan mareo sin llegar a ser un destello.

<!-- id:reducedMotion -->

**Movimiento reducido (2.3.3, AAA)**

Rebotes, parallax y auto-scroll pueden provocar mareo en personas con trastornos vestibulares o migrañas. Respetar la preferencia del sistema operativo `prefers-reduced-motion` es la diferencia entre una interfaz utilizable y una que la persona debe abandonar.

- **Qué está mal:** la versión Bad anima cada notificación con un spring elástico (salto y rotación) y hace pulsar el badge de notificaciones nuevas de forma infinita, sin leer en ningún momento la preferencia `prefers-reduced-motion` del sistema operativo.
- **Solución:** un hook lee `window.matchMedia("(prefers-reduced-motion: reduce)")` y se suscribe a cambios en caliente. Con la preferencia activa, el spring se reemplaza por un fundido corto sin salto ni rotación, y el badge deja de pulsar.

> Dejamos el movimiento y volvemos a la navegación por teclado, ahora con el costo de tener que pasar por el mismo menú en cada página.

<!-- id:skipLinks -->

**Evitar bloques repetidos (2.4.1, A)**

Debe existir un mecanismo para saltear bloques de contenido que se repiten en cada página, como la navegación principal. Sin ese mecanismo, cada página cuesta lo mismo: tabular por todo el menú antes de llegar al contenido.

- **Qué está mal:** la versión Bad usa un layout propio que arma la barra lateral con 8 ítems de navegación pero no incluye ningún link "saltar al contenido" antes del menú. Quien navega con teclado tiene que pasar por los 8 ítems, uno por uno, antes de llegar al contenido principal.
- **Solución:** la versión Good tiene un link "saltar al contenido" con clase `sr-only` que se vuelve visible al recibir foco. El contenido principal tiene un `id` y `tabIndex={-1}` correspondientes, así que al activar ese link el foco salta directo ahí sin pasar por la navegación lateral.

> Saltar bloques repetidos ahorra tiempo dentro de una página; el título de la pestaña resuelve lo mismo pero entre páginas.

<!-- id:pageTitle -->

**Título de página (2.4.2, A)**

Cada página debe tener un título que describa su tema o propósito. Un título genérico no permite distinguir pestañas del navegador ni orienta a un lector de pantalla al cambiar de contexto.

- **Qué está mal:** la maqueta de ventana del navegador recibe un título fijo ("App") en la versión Bad, sin relación con la sección que se está mostrando (Facturas). No hay ningún título dinámico por vista.
- **Solución:** la versión Good pasa un título que combina la sección con el nombre de la app ("Facturas – Aurea"). En una implementación real esto se traduce en que cada vista setea su propio `document.title`, así con varias pestañas abiertas se distinguen de un vistazo.

> Del título de la página volvemos al foco, esta vez al orden en el que se recorre con Tab.

<!-- id:focusOrder -->

**Orden del foco (2.4.3, A)**

El orden en el que se recibe el foco debe conservar el significado y la operabilidad de la interfaz. Un ajuste de CSS que reordena visualmente sin modificar el DOM produce un recorrido de teclado que no corresponde al orden visual.

- **Qué está mal:** en la versión Bad los campos están declarados en el DOM como Empresa, Nombre, Teléfono, pero cada uno tiene una clase de `order` que los reordena visualmente a Nombre, Teléfono, Empresa. El orden de tabulación sigue el DOM, no el CSS, así que el foco no coincide con el layout visual.
- **Solución:** la versión Good declara los campos en el DOM en el mismo orden en que se ven (Nombre, Teléfono, Empresa) y no usa ninguna clase de reordenamiento. Al no haber reordenamiento visual vía CSS, el orden de tabulación coincide exactamente con el orden de lectura en pantalla.

> El orden del foco importa tanto como lo que cada control dice de sí mismo — y ahí aparece el problema de los enlaces con el mismo texto.

<!-- id:linkPurpose -->

**Propósito del enlace, en contexto (2.4.4, A)**

El propósito de un enlace debe poder entenderse por su texto o por el contexto inmediato. Repetir "Ver más" en una lista sin contexto adicional no permite distinguir un enlace de otro fuera de esa lista.

- **Qué está mal:** los tres links de "Ver más" en la versión Bad no tienen `aria-label` ni ningún texto que los distinga entre sí — el nombre accesible de los tres es idéntico, aunque cada uno apunte a una factura distinta.
- **Solución:** la versión Good agrega un `aria-label` con el número de factura y el cliente a cada link, manteniendo el texto visible "Ver más" sin cambios. El nombre accesible ahora es distinto por fila, así el mismo listado de enlaces del lector de pantalla permite distinguir cada uno.

> Ya resolvimos que cada enlace se identifique solo; ahora el problema es tener una sola forma de llegar hasta él.

<!-- id:multipleWays -->

**Múltiples vías (2.4.5, AA)**

Debe existir más de un mecanismo para llegar a un contenido determinado: búsqueda, filtro o navegación estructurada. Depender exclusivamente del scroll en una lista extensa no constituye una vía razonable de acceso.

- **Qué está mal:** la versión Bad renderiza los 18 productos en una tabla estática dentro de un contenedor con scroll, sin ningún input de búsqueda ni filtro. La única manera de encontrar un producto es scrollear la lista entera.
- **Solución:** la versión Good agrega un input de búsqueda con `aria-label="Buscar producto en el inventario"` que filtra la lista en tiempo real por nombre o SKU, reemplazando el scroll manual por una búsqueda directa.

> Encontrar el contenido es una parte del problema; que la etiqueta de cada campo diga algo útil es la otra.

<!-- id:descriptiveLabels -->

**Encabezados y etiquetas (2.4.6, AA)**

Los encabezados y las etiquetas de formulario deben describir el tema o propósito del contenido que acompañan. Etiquetas genéricas ("Campo 1") son técnicamente válidas pero no comunican información utilizable.

- **Qué está mal:** en la versión Bad los inputs tienen la etiqueta correctamente asociada por `id` (la asociación técnica existe), pero el texto de las etiquetas es "Campo 1" y "Dato", y el encabezado del panel dice "Formulario" — ninguno de esos textos describe qué información se está pidiendo.
- **Solución:** la versión Good cambia los textos de label a "Nombre completo" y "Correo electrónico", y el título del panel pasa de "Formulario" a "Nuevo contacto". El lector de pantalla ahora anuncia el propósito real de cada campo sin depender del placeholder para adivinarlo.

> Una etiqueta clara no sirve de nada si no se puede ver dónde está parado el foco en primer lugar.

<!-- id:visibleFocus -->

**Foco visible (2.4.7, AA)**

Todo elemento que recibe foco de teclado debe mostrar un indicador visible. Eliminar el `outline` sin reemplazo dificulta que una persona que navega con teclado identifique su posición actual en la interfaz.

- **Qué está mal:** los botones de la versión Bad tienen la clase `outline-none` sin ningún estilo de reemplazo para el estado de foco. El navegador suprime el anillo de foco nativo y no queda ninguna señal visual de cuál botón está enfocado.
- **Solución:** la versión Good agrega un anillo de foco visible solo con `focus-visible`. Al usar ese pseudo-selector en vez de `:focus`, el anillo solo aparece cuando el foco llega por teclado (no al hacer clic con mouse), dando una señal visual clara de en qué control se está parado.

> Que el foco sea visible es necesario pero no alcanza si después otro elemento de la pantalla lo tapa.

<!-- id:focusNotObscured -->

**Foco no ocultado, mínimo (2.4.11, AA)**

El elemento con foco no puede quedar completamente tapado por otro contenido, como un encabezado fijo. Mostrar comparación: una lista con encabezado `sticky` sin `scroll-margin` oculta los elementos inferiores al enfocarlos; con el margen correspondiente, el elemento enfocado permanece visible.

- **Qué está mal:** el encabezado sticky de la lista de reportes se queda fijo arriba mientras se hace scroll. En la versión Bad las filas no tienen `scroll-margin-top`, así que cuando el navegador hace scroll automático para llevar un ítem enfocado a la vista, lo alinea contra el borde superior real del contenedor — quedando tapado detrás del encabezado sticky.
- **Solución:** la versión Good aplica `scroll-margin-top` a cada fila, igual a la altura del header. Con eso, cuando el navegador hace scroll-into-view del ítem enfocado, respeta ese margen y lo deja siempre visible debajo del encabezado.

> Dejamos el teclado por un momento para volver al puntero, empezando por gestos que necesitan una trayectoria completa.

<!-- id:pointerGestures -->

**Gestos del puntero (2.5.1, A)**

Toda función activada mediante un gesto de trayectoria o multipunto (como deslizar) debe tener una alternativa de un solo punto. Una galería navegable únicamente por swipe excluye a quien no puede ejecutar ese gesto.

- **Qué está mal:** la galería solo cambia de imagen calculando el desplazamiento entre el inicio y el fin de un gesto contra un umbral mínimo de 40px. La versión Bad no ofrece ningún control alternativo: la única forma de avanzar es un gesto de arrastre con trayectoria mínima.
- **Solución:** la versión Good agrega botones de flecha anterior/siguiente con `aria-label` y estado deshabilitado en los extremos. El arrastre original se mantiene funcionando, pero ahora también existe una alternativa de un solo toque que no depende de ninguna trayectoria de puntero.

> Resuelto el gesto en sí, queda otro problema del puntero: en qué momento exacto se confirma la acción.

<!-- id:pointerCancellation -->

**Cancelación del puntero (2.5.2, A)**

Las acciones deben confirmarse al soltar el clic, no al presionar, y deben poder cancelarse arrastrando el puntero fuera del control antes de soltar. Disparar una acción destructiva en `pointerdown` elimina esa última oportunidad de cancelar.

- **Qué está mal:** el botón de eliminar factura dispara la acción en el evento `onPointerDown`, es decir, apenas se presiona, antes de que el puntero se suelte. No hay forma de arrepentirse una vez que tocaste el botón — es el mismo bug que ejecutar una acción en el evento de "intención" en vez de esperar el de "confirmación": no queda ventana para cancelar.
- **Solución:** el mismo botón pasa a disparar la acción en `onClick`, evento que el navegador solo confirma si el puntero se suelta sobre el propio elemento, así que arrastrar afuera cancela la acción sin código extra.

> Del momento en que se confirma un clic pasamos a otro desajuste sutil: cuando lo que se ve y lo que se anuncia no coinciden.

<!-- id:labelInName -->

**Etiqueta en el nombre (2.5.3, A)**

El nombre accesible de un control debe incluir el texto visible que lo identifica. Si el texto visible y el nombre accesible no coinciden, el control por voz que repite el texto visible no logra activar el control.

- **Qué está mal:** el botón muestra el texto visible "Buscar" pero su `aria-label="Consulta rápida"` no contiene esa palabra, entonces el nombre accesible (lo que expone el árbol de accesibilidad) no coincide con el texto en pantalla.
- **Solución:** el `aria-label` pasa a empezar con el mismo texto visible ("Buscar facturas por número o cliente"), así el comando de voz que busca por el texto en pantalla encuentra el control.

> Ese desajuste afecta control por voz; el siguiente criterio depende de un dispositivo físico, así que lo explicamos sin demo.

<!-- id:motionActivation -->

**Activación por movimiento (2.5.4, A)**

Las funciones activadas por el movimiento del dispositivo (agitar, inclinar) deben tener un control equivalente en pantalla y poder desactivarse. Este criterio se explica sin demostración, dado que requiere un dispositivo físico móvil.

> De mover el dispositivo entero pasamos a mover elementos dentro de la pantalla: arrastrar y soltar.

<!-- id:dragMovements -->

**Movimientos de arrastre (2.5.7, AA)**

Toda función de arrastrar y soltar debe tener una alternativa que no dependa del arrastre. Reordenar una lista únicamente por drag-and-drop excluye a quien no puede sostener ese gesto con precisión.

- **Qué está mal:** la única forma de reordenar la lista de KPIs en la versión Bad es el drag and drop nativo — no existe ningún control operable por teclado que logre lo mismo.
- **Solución:** cada fila suma botones "Subir" y "Bajar" que ejecutan el mismo cambio de posiciones que el drag and drop, dejando este último como atajo opcional en vez de único camino.

> Cerramos el bloque de operabilidad con algo que combina precisión motriz y tamaño: qué tan grande tiene que ser un objetivo táctil.

<!-- id:motorComplexity -->

**Tamaño del objetivo, mínimo (2.5.8, AA)**

Los objetivos táctiles deben medir al menos 24×24px, o contar con espacio suficiente entre controles adyacentes. Esta diapositiva incluye un simulador de temblor de mano: activarlo antes de comparar los tamaños de objetivo evidencia la dificultad de acertar un control por debajo del mínimo.

- **Qué está mal:** en la versión Bad, los botones +/- y el de favorito miden 20×20px, por debajo del mínimo de 24×24px. El checkbox "Reponer automáticamente" tiene `aria-label` pero el texto al lado es un `<span>` suelto, no un `<label>` vinculado, así que el área clickeable real es solo el control chico, sin poder tocar el texto para activarlo.
- **Solución:** la versión Good agranda los controles a 40px (favorito) y 48px (+/-), ambos por encima del mínimo AA. También reemplaza el span suelto por un `<label>` real vinculado al checkbox, ampliando el área clickeable al texto completo, y cambia el contador a un elemento con `aria-live="polite"` para que los lectores de pantalla anuncien el cambio de cantidad. Repetí "Simular tremor" sobre esta versión para comparar cuánto más fácil es acertarle a los controles.

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

- **Qué está mal:** la frase en inglés "It just works" está incrustada en un párrafo en español sin ningún atributo `lang` que marque el cambio de idioma.
- **Solución:** la frase se envuelve en un `<span lang="en">`, así el lector de pantalla detecta el cambio de idioma y conmuta a voz y fonética en inglés solo para ese fragmento, volviendo al español para el resto del párrafo.

> Del idioma pasamos a otra forma de sorprender a quien usa la interfaz: un cambio de contexto que no pidió.

<!-- id:onFocusChange -->

**Al recibir el foco (3.2.1, A)**

Ningún control puede disparar un cambio de contexto por el solo hecho de recibir el foco. Mostrar comparación: un `<select>` que navega apenas se tabula hacia él, antes de que la persona elija una opción, frente a la misma navegación disparada únicamente tras una selección explícita.

- **Qué está mal:** el `<select>` de la versión Bad dispara el cambio de contexto (el mensaje "Navegando a...") en el evento `onFocus`, o sea al recibir el foco, antes de que la persona elija ninguna opción.
- **Solución:** el cambio se mueve al evento `onChange`, que solo se dispara después de una selección explícita, y el mensaje de estado se envuelve en `role="status"` para que un lector de pantalla lo anuncie cuando sí corresponde.

> Ese cambio de contexto se disparaba solo con el foco; el mismo problema existe al modificar el valor de un campo.

<!-- id:onInputChange -->

**Al recibir entrada de datos (3.2.2, A)**

Ningún control puede disparar un cambio de contexto automático por el solo hecho de modificar su valor. Un filtro que navega o descarta datos no guardados apenas cambia de valor debe reemplazarse por un paso de confirmación explícito.

- **Qué está mal:** el combo de filtro de estado ejecuta el borrado de la nota interna dentro de su propio handler de cambio, entonces con solo cambiar el filtro se borra silenciosamente cualquier texto que la persona haya escrito en el campo "Nota interna", sin aviso ni confirmación.
- **Solución:** el combo ahora solo actualiza un estado pendiente; la lista y el resto del formulario no cambian hasta que la persona aprieta explícitamente el botón "Aplicar filtro", que es lo único que dispara el filtrado real.

> Evitar sorpresas dentro de una pantalla es una parte; mantener la misma navegación entre pantallas es la otra.

<!-- id:consistentNavigation -->

**Navegación consistente (3.2.3, AA)**

Los mecanismos de navegación que se repiten deben aparecer en el mismo orden en todas las páginas. Un menú que cambia de orden entre pantallas obliga a reinterpretar la navegación en cada una.

- **Qué está mal:** los mismos cuatro ítems de navegación se listan en un orden distinto en cada página — la página B usa una permutación manual del mismo array de ítems.
- **Solución:** ambas páginas renderizan la misma constante de orden, así el orden de los ítems es idéntico en toda la aplicación y se puede navegar de memoria sin volver a buscar cada opción.

> Si la navegación tiene que ser consistente, lo mismo aplica a cualquier control que cumpla la misma función en toda la app.

<!-- id:consistency -->

**Identificación consistente (3.2.4, AA)**

Los componentes con la misma función deben identificarse de forma consistente en toda la aplicación. Si la acción "Guardar" ocupa una posición distinta en cada módulo, cada persona debe reinterpretar la interfaz cada vez.

- **Qué está mal:** dos módulos que guardan datos ("Editar factura" y "Editar pedido") implementan la misma acción con controles distintos: un botón HTML plano con estilo outline, texto "Guardar" y posición arriba-derecha en uno, versus el componente `Button` con estilo sólido, texto "Actualizar" y posición abajo-izquierda en el otro.
- **Solución:** ambos módulos pasan a usar el mismo componente `Button`, el mismo texto ("Guardar") y la misma posición (abajo a la derecha), de forma que un control con la misma funcionalidad se identifica igual en toda la interfaz.

> Esa misma consistencia aplica a algo tan simple como dónde vive el botón de ayuda.

<!-- id:consistentHelp -->

**Ayuda consistente (3.2.6, A)**

Cuando existe un mecanismo de ayuda, debe aparecer en la misma posición relativa en todas las páginas. Un botón de ayuda que cambia de esquina entre pantallas obliga a buscarlo de nuevo cada vez.

- **Qué está mal:** el botón de ayuda cambia de esquina entre páginas — abajo-izquierda en "Página A", arriba-derecha en "Página B" — según una prop de posición que varía por instancia.
- **Solución:** las dos instancias pasan la misma posición de ayuda ("abajo-derecha"), dejando el botón siempre en la misma esquina para que su ubicación sea predecible en toda la aplicación.

> De la consistencia pasamos a otro pilar de comprensibilidad: cómo se identifican los errores cuando algo sale mal.

<!-- id:errorPrevention -->

**Identificación de errores (3.3.1, A)**

Los errores de un formulario deben identificarse y describirse en texto, asociados al campo correspondiente mediante `aria-invalid` y `aria-describedby`, y anunciados en tiempo real. Mostrar comparación: un error que aparece como texto suelto y solo tras el envío del formulario, frente a un error asociado al campo y anunciado apenas ocurre.

- **Qué está mal:** la versión Bad valida recién dentro del handler de envío, que se dispara al hacer click en "Cargar" — no hay validación en tiempo real. El input tampoco tiene `id` asociado al label, ni `aria-invalid`, ni `aria-describedby`, así que el mensaje de error queda como texto suelto sin ninguna asociación programática con el campo.
- **Solución:** la versión Good agrega `min`, `max` y `required` al input, valida en cada cambio, y linkea el mensaje de ayuda y el de error vía `aria-describedby` más `aria-invalid`. El contenedor del error usa `role="alert"` para que se anuncie apenas aparece, sin esperar el submit.

> Identificar el error después de que ocurre es necesario, pero lo ideal es evitarlo con instrucciones claras desde antes.

<!-- id:anticipatoryHelp -->

**Etiquetas o instrucciones (3.3.2, A)**

Los campos de un formulario deben contar con etiquetas o instrucciones claras sobre el formato esperado, disponibles antes de que la persona cometa un error. Mostrar comparación: un formato indicado únicamente mediante `placeholder` (que desaparece al escribir y no está asociado al campo) frente a una instrucción persistente y vinculada mediante `aria-describedby`.

- **Qué está mal:** el único indicio del formato esperado vive en el placeholder del input de teléfono. La versión Bad solo setea `aria-describedby` cuando hay un error — nunca hay una instrucción asociada antes de que falle.
- **Solución:** la versión Good agrega un texto visible y permanente con el formato esperado, y lo incluye siempre en `aria-describedby` junto al mensaje de error cuando existe, así la instrucción está disponible desde el arranque, no solo tras el error.

> Aun con buena instrucción previa, el error puede pasar igual — ahí importa qué tan específico es el mensaje que lo explica.

<!-- id:errorSuggestion -->

**Sugerencia ante errores (3.3.3, AA)**

Cuando se detecta un error, debe sugerirse cómo corregirlo. Un mensaje genérico ("dato inválido") obliga a adivinar; un mensaje específico indica exactamente qué falta corregir.

- **Qué está mal:** la versión Bad calcula si la contraseña es válida (longitud mínima 8 + al menos un dígito) pero al fallar siempre muestra el mismo string fijo "Contraseña inválida", sin importar cuál de las dos condiciones incumple.
- **Solución:** la versión Good compara el valor contra cada regla y arma un mensaje puntual tipo "te faltan 3 caracteres y necesitás al menos un número", recalculado en cada cambio.

> Un buen mensaje de error ayuda a corregir; hay acciones donde directamente conviene frenar antes de que se ejecuten.

<!-- id:confirmDestructive -->

**Prevención de errores: legal, financiero, datos (3.3.4, AA)**

En acciones significativas o irreversibles, debe ofrecerse la posibilidad de revisar, corregir o cancelar antes de confirmar. Mostrar comparación: una eliminación ejecutada al primer clic frente a la misma acción mediada por un diálogo de confirmación explícito.

- **Qué está mal:** en la versión Bad, el botón de tacho llama directo a la función que elimina la factura — un solo click ejecuta el borrado, sin ningún paso intermedio de confirmación.
- **Solución:** la versión Good envuelve la acción en un diálogo de confirmación: el click abre un modal avisando "Esta acción no se puede deshacer", y el borrado solo se ejecuta si la persona confirma el botón "Eliminar" dentro del diálogo; "Cancelar" o cerrar el diálogo no dispara nada.

> De frenar una acción destructiva pasamos a otro tipo de fricción evitable: pedir un dato que la persona ya cargó.

<!-- id:redundantEntry -->

**Entrada redundante (3.3.7, A)**

No debe solicitarse a la persona que vuelva a ingresar información ya provista en el mismo proceso. Pedir dos veces la misma dirección en un mismo formulario es trabajo evitable.

- **Qué está mal:** la versión Bad renderiza dos bloques de dirección (facturación y envío) con estado independiente, sin ningún mecanismo para reutilizar los valores de una sección en la otra.
- **Solución:** la versión Good agrega un checkbox "Usar la misma dirección para el envío"; al tildarlo, copia los valores de facturación a envío y deja esos campos deshabilitados mientras esté activo, evitando reingresar un dato ya provisto en el mismo formulario.

> Cerramos comprensible con un caso particular de esto mismo, en el momento más sensible de cualquier flujo: el login.

<!-- id:accessibleAuth -->

**Autenticación accesible, mínimo (3.3.8, AA)**

El proceso de autenticación no debe depender exclusivamente de una prueba cognitiva, salvo que exista una alternativa. Bloquear el pegado en un campo de contraseña no aporta seguridad adicional: solo impide el uso de gestores de contraseñas y obliga a transcribir manualmente.

- **Qué está mal:** el input de contraseña de la versión Bad bloquea el evento de pegado y además tiene `autoComplete="off"`, que le indica al navegador que no ofrezca autocompletado ni gestor de contraseñas para ese campo.
- **Solución:** la versión Good elimina el bloqueo de pegado y cambia `autoComplete` a `"current-password"`, el valor estándar que habilita gestores de contraseñas y autocompletado del navegador — el login deja de depender de que la persona memorice y transcriba la contraseña a mano.

---

## Bloque 4 — Robusto

El contenido debe ser compatible con una amplia variedad de navegadores y tecnologías asistivas.

> Con esto cerramos comprensible. El último principio de WCAG es que todo sea robusto, y ahí volvemos al concepto que abrió esta charla: nombre, rol y valor.

<!-- id:nameRoleValue -->

**Nombre, rol, valor (4.1.2, A)**

Todo componente de interfaz personalizado debe exponer su nombre, rol y estado a las tecnologías de asistencia. Mostrar comparación: un control estilizado como interruptor pero construido sobre un `<div>` sin rol ni estado accesible, frente al mismo control implementado como `<button role="switch" aria-checked>`.

- **Qué está mal:** el switch de la versión Bad es un `<div onClick>` que envuelve un `<span>` con estilos de pastilla deslizable — no tiene `role`, no tiene `aria-checked`, no es un `<button>` ni tiene `tabIndex`, así que no forma parte del orden de foco por teclado.
- **Solución:** la versión Good reemplaza el div por `<button role="switch" aria-checked={checked}>`, que es focuseable por teclado por ser un button nativo y expone estado vía `aria-checked` — un lector de pantalla anuncia "Notificaciones activas, switch, activado".

> Ese mismo requisito de exponer estado aplica también a los mensajes que la interfaz genera sola, como una confirmación.

<!-- id:errorRecovery -->

**Mensajes de estado (4.1.3, AA)**

Los mensajes de estado (confirmaciones, errores) deben anunciarse a lectores de pantalla sin robar el foco, mediante regiones `aria-live`. Un mensaje de confirmación que solo aparece visualmente no llega a quien no puede ver la pantalla en ese momento.

- **Qué está mal:** en la versión Bad, al borrar un contacto aparece un aviso de confirmación sin `role` ni `aria-live`, y se autodestruye a los dos segundos, sin ninguna opción de deshacer.
- **Solución:** la versión Good usa `role="status"` con `aria-live="polite"` en el contenedor del aviso para que se anuncie automáticamente, agrega un botón "Deshacer" que recibe el foco al aparecer, y el aviso no se autodestruye — queda visible hasta que la persona decide.

---

## Bloque 5 — Más allá de lo básico

Estos conceptos no corresponden a un criterio WCAG numerado, pero explican por qué una interfaz técnicamente conforme puede seguir generando fricción operativa.

> Con esto terminan los cuatro principios de WCAG. Lo que sigue no tiene un número de criterio, pero explica por qué una interfaz que aprueba todo lo anterior todavía puede resultar pesada de usar — empezando por cuánto tiene que recordar la persona.

<!-- id:cognitiveLoad -->

**Carga cognitiva**

Es la cantidad de información que una persona debe recordar y procesar para completar una tarea. Un formulario extenso en una sola pantalla exige sostener en la memoria qué falta completar, qué es obligatorio y qué errores hay que corregir. Dividir el proceso en pasos reduce esa carga.

- **Qué está mal:** la primera variante muestra los 14 campos del formulario sueltos en un mismo grid, sin agrupar y sin ninguna jerarquía semántica (sin `fieldset`/`legend`) — toda la carga de sostener "qué me falta" recae en la memoria de quien completa el formulario.
- **Solución:** la versión final reparte los mismos 14 campos en tres pasos con un indicador de progreso numerado; en cualquier momento hay entre 3 y 6 campos visibles, con botones "Anterior"/"Siguiente", sin sacar ningún campo del formulario original — solo lo secuencia.

> Reducir lo que hay que recordar en un momento dado es una forma de carga; otra es cuánto cuesta repetir la misma tarea muchas veces.

<!-- id:interactionFatigue -->

**Fatiga por interacción**

Cada interacción tiene un costo. Una tarea que exige múltiples pasos repetitivos es tolerable una vez, pero se convierte en carga operativa cuando se repite decenas de veces por día.

- **Qué está mal:** la versión Bad apila siete secciones una debajo de la otra en un único contenedor con scroll continuo; "Historial de pedidos" es la última sección, después de Datos generales, Direcciones, Preferencias, Condiciones comerciales y Vendedor asignado.
- **Solución:** la versión Good reemplaza el scroll único por pestañas accesibles por teclado (flechas, Home, End), y persiste la pestaña activa en la URL — la sección buscada aparece de una, sin scrollear, y el link a esa vista puntual se puede compartir directo.

> Todo esto — carga cognitiva, fatiga por interacción — apunta a la misma idea de fondo, que cierra este bloque.

<!-- id:inclusiveDesign -->

**Diseño inclusivo**

Quien usa un producto no está ahí para aprender cómo funciona: está ahí para completar una tarea. Diseñar para condiciones reales (interrupciones, presión de tiempo, cansancio) evita trasladar la complejidad del software a la persona que lo usa.

- **Qué está mal:** en la versión Bad, cada opción del menú ("Compartir", "Duplicar", etc.) es un `<div>` sin `onClick`, sin `role` y sin ningún atributo de foco — visualmente parecen ítems de menú por el hover, pero no son elementos interactivos reales.
- **Solución:** la versión Good reemplaza cada opción por un `<button type="button">` real con altura mínima táctil (respetando el tamaño mínimo de blanco de toque de WCAG 2.5.8), y el disparador usa el patrón nativo `<details>/<summary>` con el ícono marcado como decorativo y un texto oculto visualmente ("Más acciones del reporte") que le da nombre accesible al control aunque solo se vea el ícono.

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
