# GUION.md — Accesibilidad web: de checklist a ventaja operativa

Guion de presentación alineado al orden real de la aplicación (`src/components/Slides.jsx`). Cada sección corresponde a un tramo del deck: primero la diapositiva conceptual, luego la comparación interactiva Bad/Good cuando existe. El criterio WCAG 2.2 correspondiente figura entre paréntesis.

Los comentarios `<!-- id:... -->` vinculan cada sección con su diapositiva (`src/data/slideCatalog.json`) para la vista de notas del orador (`/notas`); no son visibles al renderizar el documento.

---

## Introducción

<!-- id:title -->
**Título — A11Y**

Esta charla trata sobre accesibilidad web: qué es, por qué afecta directamente el trabajo de un equipo de producto, y cómo aplicarla sin agregar procesos nuevos.

<!-- id:premise -->
**Premisa — ¿Qué es A11Y?**

A11Y es la abreviatura numérica de "Accessibility" (A + 11 letras + Y). Accesibilidad significa diseñar un producto que funcione para cualquier persona, en cualquier condición. No es una categoría de usuarios aparte: es una propiedad de calidad del software, en la misma familia que el rendimiento o la seguridad.

<!-- id:wcagStandard -->
**Estándar global — WCAG 2.2**

El W3C define las Web Content Accessibility Guidelines (WCAG) desde 1994. La versión vigente es la 2.2 (2023), con criterios verificables organizados en tres niveles de conformidad: A (mínimo), AA (el exigido por normativas como la directiva UE 2019/882) y AAA (óptimo, no siempre aplicable). Esta charla se apoya en los 55 criterios de nivel A y AA.

<!-- id:pourPrinciples -->
**Principios básicos — POUR**

Los criterios de WCAG se agrupan en cuatro principios:

- **Perceptible** (Perceivable): la información debe poder percibirse, sea cual sea el sentido disponible.
- **Operable** (Operable): los controles deben poder manejarse con teclado, mouse, voz u otros dispositivos.
- **Comprensible** (Understandable): la información y el comportamiento de la interfaz deben ser predecibles.
- **Robusto** (Robust): el contenido debe funcionar con distintos navegadores y tecnologías asistivas.

El resto de la charla sigue este mismo orden.

<!-- id:accessBenefits -->
**Beneficios — El efecto rampa de acceso**

La rampa en la vereda se construyó para sillas de ruedas. Hoy la usan carritos de bebé, repartidores y ciclistas. Ese es el efecto rampa de acceso: una mejora diseñada para un caso específico termina beneficiando a la base de usuarios completa.

<!-- id:situations -->
**Situaciones — ¿Por qué nos interesa aplicarla?**

La lista de situaciones que se muestra en esta diapositiva no describe casos excepcionales: describe circunstancias que cualquier persona del equipo puede atravesar en un día de trabajo normal (luz solar sobre la pantalla, una conexión lenta, una lesión temporal, cansancio visual). Accesibilidad es diseñar considerando esa variabilidad como la norma, no como la excepción.

<!-- id:businessImpact -->
**Impacto en el negocio — Lo que nos ahorramos como equipo**

Los beneficios de aplicar accesibilidad se distribuyen en toda la organización: menos tickets de soporte por problemas ya conocidos, menor costo de desarrollo al aplicar el criterio desde el diseño en lugar de corregirlo después, onboarding más rápido sobre un código consistente, ampliación del mercado direccionable y reducción de riesgo legal y normativo.

---

## Bloque 1 — Perceptible

La información y los componentes de la interfaz deben poder percibirse, independientemente del sentido con el que se acceda a ellos.

<!-- id:altText -->
**Texto alternativo (1.1.1, A)**

Todo contenido no textual (imágenes, íconos, gráficos) requiere una alternativa textual equivalente. Mostrar comparación: sin texto alternativo, un lector de pantalla no comunica ninguna información sobre el elemento; con `alt` descriptivo, el contenido queda disponible incluso si la imagen no carga.

<!-- id:mediaAlternatives -->
**Medios basados en tiempo (1.2.1–1.2.5, A/AA)**

Contenido de audio o video grabado requiere alternativas equivalentes: transcripción para audio, subtítulos sincronizados y audiodescripción para video. Sin esas alternativas, el contenido queda inaccesible para quien no puede percibir el canal original.

<!-- id:semanticStructure -->
**Información y relaciones (1.3.1, A)**

La estructura de una interfaz (encabezados, listas, relaciones entre campo y etiqueta) debe existir en el marcado semántico, no solamente en el estilo visual. Si la jerarquía se logra únicamente con CSS, una tecnología asistiva no puede reconstruirla.

<!-- id:meaningfulSequence -->
**Secuencia significativa (1.3.2, A)**

El orden en el que el contenido se presenta a un lector de pantalla debe conservar el significado, incluso cuando no coincide con el orden visual logrado por CSS. Mostrar comparación: un formulario reordenado visualmente sin tocar el DOM produce una lectura fuera de orden.

<!-- id:sensoryCharacteristics -->
**Características sensoriales (1.3.3, A)**

Las instrucciones no pueden depender exclusivamente de forma, color, tamaño o posición ("el botón redondo verde"). Deben incluir un identificador textual que no dependa de la percepción visual.

<!-- id:orientation -->
**Orientación (1.3.4, AA)**

El contenido debe funcionar tanto en orientación vertical como horizontal, salvo que una orientación sea esencial para la función (por ejemplo, una aplicación de piano). Bloquear la orientación sin justificación excluye a quien usa el dispositivo en un soporte fijo.

<!-- id:inputPurpose -->
**Identificar el propósito de la entrada (1.3.5, AA)**

Los campos de datos personales comunes (nombre, teléfono, dirección) deben identificarse programáticamente mediante `autocomplete`. Sin ese atributo, cada formulario se completa manualmente, sin aprovechar el autocompletado del navegador o de un gestor de contraseñas.

<!-- id:colorUsage -->
**Uso de color adecuado (1.4.1, A)**

El color no puede ser el único medio para transmitir información o distinguir un estado. Uno de cada doce hombres presenta algún tipo de daltonismo; la diapositiva siguiente muestra cómo se percibe el mismo contenido bajo protanopia, deuteranopia, tritanopia y monocromacia. Mostrar comparación: un estado marcado solo con color rojo/verde frente al mismo estado reforzado con ícono y texto.

<!-- id:audioControl -->
**Control de audio (1.4.2, A)**

Todo audio que se reproduce automáticamente por más de tres segundos debe poder pausarse, detenerse o silenciarse. Un audio que arranca solo y no ofrece control interfiere con cualquier lector de pantalla activo en la página.

<!-- id:typography -->
**Tipografía legible — Contraste mínimo (1.4.3, AA)**

El texto debe mantener una relación de contraste de al menos 4.5:1 con su fondo (3:1 para texto grande). Un contraste insuficiente exige un esfuerzo visual adicional a cualquier persona, tenga o no una condición de visión diagnosticada.

<!-- id:textResize -->
**Cambio de tamaño del texto (1.4.4, AA)**

El texto debe poder ampliarse hasta el 200% sin pérdida de contenido ni de funcionalidad. Si el texto se corta o superpone al agrandarlo, la interfaz queda inutilizable para baja visión.

<!-- id:imagesOfText -->
**Imágenes de texto (1.4.5, AA)**

Debe usarse texto real en lugar de texto incrustado en una imagen, salvo casos esenciales como logotipos. Un texto renderizado como imagen no puede seleccionarse, traducirse, ni redimensionarse.

<!-- id:reflow -->
**Reflow (1.4.10, AA)**

El contenido debe adaptarse a un ancho de 320px sin generar scroll horizontal ni pérdida de información. La aparición de scroll horizontal a ese ancho es el primer síntoma de un layout que no escala.

<!-- id:nonTextContrast -->
**Contraste de elementos no textuales (1.4.11, AA)**

Íconos, bordes y estados de controles deben mantener al menos 3:1 de contraste contra su fondo. La misma exigencia de legibilidad aplicada al texto corresponde a cualquier elemento gráfico funcional.

<!-- id:textSpacing -->
**Espaciado de texto (1.4.12, AA)**

El contenido debe seguir siendo legible cuando una persona aumenta el interlineado o el espaciado entre letras y párrafos desde su navegador o su tecnología asistiva. Un contenedor de altura fija impide ese ajuste.

<!-- id:hoverContent -->
**Contenido al pasar el cursor o enfocar (1.4.13, AA)**

El contenido adicional que aparece con hover o focus (tooltips, menús) debe poder descartarse, debe ser persistente mientras el cursor permanece sobre él, y debe ser alcanzable con el puntero. Un tooltip que desaparece antes de poder leerse no cumple ninguna función.

---

## Bloque 2 — Operable

Los componentes de navegación y los controles deben poder manejarse mediante teclado, voz u otros dispositivos, sin límites de tiempo ni gestos que excluyan a una parte de los usuarios.

<!-- id:keyboardNav -->
**Navegación por teclado (2.1.1, A)**

Toda la funcionalidad debe estar disponible desde el teclado. Afecta a cualquier persona que no pueda o no quiera depender del mouse: lesiones por esfuerzo repetitivo, uso prolongado de formularios, o simplemente preferencia de flujo de trabajo.

<!-- id:focusTrap -->
**Focus trap — Sin trampas de teclado (2.1.2, A)**

El foco debe poder salir de cualquier componente usando exclusivamente el teclado. Mostrar tres variantes: sin manejo de foco (el foco se escapa detrás del modal), manejo parcial (el foco queda atrapado sin salida) y manejo correcto (el foco se gestiona con `<dialog>` nativo, incluyendo cierre con Escape).

<!-- id:singleCharShortcuts -->
**Atajos de un carácter (2.1.4, A)**

Un atajo compuesto por una sola tecla debe poder desactivarse, remapearse, o limitarse a cuando un control específico tiene el foco. Mostrar comparación: un atajo global sin esas condiciones se dispara mientras la persona escribe en cualquier campo de texto de la página.

<!-- id:adjustableTimeout -->
**Tiempo ajustable (2.2.1, A)**

Cuando existe un límite de tiempo, debe poder extenderse. Mostrar comparación con un caso de reserva de stock (patrón equivalente al de las plataformas de venta de entradas al reservar asientos): sin aviso ni opción de extender, la reserva se libera sin que la persona tenga oportunidad de reaccionar; con aviso a los últimos diez segundos y botón de extensión, el tiempo queda bajo control de la persona. Mencionar las excepciones del criterio: eventos en tiempo real esenciales sin alternativa posible, límites cuya extensión invalidaría la actividad, y límites superiores a veinte horas.

<!-- id:pausableCarousel -->
**Movimiento controlable — Pausar, detener, ocultar (2.2.2, A)**

Contenido que se mueve, parpadea o se actualiza automáticamente debe poder pausarse. Mostrar comparación: un carrusel que rota sin control disponible frente al mismo carrusel con botón de pausa.

<!-- id:threeFlashes -->
**Tres destellos o por debajo del umbral (2.3.1, A)**

Ningún contenido puede destellar más de tres veces por segundo: puede inducir convulsiones en personas con epilepsia fotosensible. Este criterio se explica sin demostración en vivo, por razones de seguridad para la audiencia.

<!-- id:reducedMotion -->
**Movimiento reducido (2.3.3, AAA)**

Rebotes, parallax y auto-scroll pueden provocar mareo en personas con trastornos vestibulares o migrañas. Respetar la preferencia del sistema operativo `prefers-reduced-motion` es la diferencia entre una interfaz utilizable y una que la persona debe abandonar.

<!-- id:skipLinks -->
**Evitar bloques repetidos (2.4.1, A)**

Debe existir un mecanismo para saltear bloques de contenido que se repiten en cada página, como la navegación principal. Sin ese mecanismo, cada página cuesta lo mismo: tabular por todo el menú antes de llegar al contenido.

<!-- id:pageTitle -->
**Título de página (2.4.2, A)**

Cada página debe tener un título que describa su tema o propósito. Un título genérico no permite distinguir pestañas del navegador ni orienta a un lector de pantalla al cambiar de contexto.

<!-- id:focusOrder -->
**Orden del foco (2.4.3, A)**

El orden en el que se recibe el foco debe conservar el significado y la operabilidad de la interfaz. Un ajuste de CSS que reordena visualmente sin modificar el DOM produce un recorrido de teclado que no corresponde al orden visual.

<!-- id:linkPurpose -->
**Propósito del enlace, en contexto (2.4.4, A)**

El propósito de un enlace debe poder entenderse por su texto o por el contexto inmediato. Repetir "Ver más" en una lista sin contexto adicional no permite distinguir un enlace de otro fuera de esa lista.

<!-- id:multipleWays -->
**Múltiples vías (2.4.5, AA)**

Debe existir más de un mecanismo para llegar a un contenido determinado: búsqueda, filtro o navegación estructurada. Depender exclusivamente del scroll en una lista extensa no constituye una vía razonable de acceso.

<!-- id:descriptiveLabels -->
**Encabezados y etiquetas (2.4.6, AA)**

Los encabezados y las etiquetas de formulario deben describir el tema o propósito del contenido que acompañan. Etiquetas genéricas ("Campo 1") son técnicamente válidas pero no comunican información utilizable.

<!-- id:visibleFocus -->
**Foco visible (2.4.7, AA)**

Todo elemento que recibe foco de teclado debe mostrar un indicador visible. Eliminar el `outline` sin reemplazo dificulta que una persona que navega con teclado identifique su posición actual en la interfaz.

<!-- id:focusNotObscured -->
**Foco no ocultado, mínimo (2.4.11, AA)**

El elemento con foco no puede quedar completamente tapado por otro contenido, como un encabezado fijo. Mostrar comparación: una lista con encabezado `sticky` sin `scroll-margin` oculta los elementos inferiores al enfocarlos; con el margen correspondiente, el elemento enfocado permanece visible.

<!-- id:pointerGestures -->
**Gestos del puntero (2.5.1, A)**

Toda función activada mediante un gesto de trayectoria o multipunto (como deslizar) debe tener una alternativa de un solo punto. Una galería navegable únicamente por swipe excluye a quien no puede ejecutar ese gesto.

<!-- id:pointerCancellation -->
**Cancelación del puntero (2.5.2, A)**

Las acciones deben confirmarse al soltar el clic, no al presionar, y deben poder cancelarse arrastrando el puntero fuera del control antes de soltar. Disparar una acción destructiva en `pointerdown` elimina esa última oportunidad de cancelar.

<!-- id:labelInName -->
**Etiqueta en el nombre (2.5.3, A)**

El nombre accesible de un control debe incluir el texto visible que lo identifica. Si el texto visible y el nombre accesible no coinciden, el control por voz que repite el texto visible no logra activar el control.

<!-- id:motionActivation -->
**Activación por movimiento (2.5.4, A)**

Las funciones activadas por el movimiento del dispositivo (agitar, inclinar) deben tener un control equivalente en pantalla y poder desactivarse. Este criterio se explica sin demostración, dado que requiere un dispositivo físico móvil.

<!-- id:dragMovements -->
**Movimientos de arrastre (2.5.7, AA)**

Toda función de arrastrar y soltar debe tener una alternativa que no dependa del arrastre. Reordenar una lista únicamente por drag-and-drop excluye a quien no puede sostener ese gesto con precisión.

<!-- id:motorComplexity -->
**Tamaño del objetivo, mínimo (2.5.8, AA)**

Los objetivos táctiles deben medir al menos 24×24px, o contar con espacio suficiente entre controles adyacentes. Esta diapositiva incluye un simulador de temblor de mano: activarlo antes de comparar los tamaños de objetivo evidencia la dificultad de acertar un control por debajo del mínimo.

---

## Bloque 3 — Comprensible

La información y el funcionamiento de la interfaz deben ser predecibles y fáciles de interpretar.

<!-- id:pageLanguage -->
**Idioma de la página (3.1.1, A)**

El idioma principal del documento debe declararse mediante el atributo `lang`. Sin esa declaración, un lector de pantalla puede aplicar reglas fonéticas de otro idioma a todo el contenido. Este criterio se explica a nivel de documento, sin demostración interactiva.

<!-- id:partsLanguage -->
**Idioma de las partes (3.1.2, AA)**

Un fragmento de texto en un idioma distinto al principal del documento debe marcarse con su propio atributo `lang`. Mostrar comparación: una cita en inglés sin marcar se pronuncia con fonética del idioma principal del documento.

<!-- id:onFocusChange -->
**Al recibir el foco (3.2.1, A)**

Ningún control puede disparar un cambio de contexto por el solo hecho de recibir el foco. Mostrar comparación: un `<select>` que navega apenas se tabula hacia él, antes de que la persona elija una opción, frente a la misma navegación disparada únicamente tras una selección explícita.

<!-- id:onInputChange -->
**Al recibir entrada de datos (3.2.2, A)**

Ningún control puede disparar un cambio de contexto automático por el solo hecho de modificar su valor. Un filtro que navega o descarta datos no guardados apenas cambia de valor debe reemplazarse por un paso de confirmación explícito.

<!-- id:consistentNavigation -->
**Navegación consistente (3.2.3, AA)**

Los mecanismos de navegación que se repiten deben aparecer en el mismo orden en todas las páginas. Un menú que cambia de orden entre pantallas obliga a reinterpretar la navegación en cada una.

<!-- id:consistency -->
**Identificación consistente (3.2.4, AA)**

Los componentes con la misma función deben identificarse de forma consistente en toda la aplicación. Si la acción "Guardar" ocupa una posición distinta en cada módulo, cada persona debe reinterpretar la interfaz cada vez.

<!-- id:consistentHelp -->
**Ayuda consistente (3.2.6, A)**

Cuando existe un mecanismo de ayuda, debe aparecer en la misma posición relativa en todas las páginas. Un botón de ayuda que cambia de esquina entre pantallas obliga a buscarlo de nuevo cada vez.

<!-- id:errorPrevention -->
**Identificación de errores (3.3.1, A)**

Los errores de un formulario deben identificarse y describirse en texto, asociados al campo correspondiente mediante `aria-invalid` y `aria-describedby`, y anunciados en tiempo real. Mostrar comparación: un error que aparece como texto suelto y solo tras el envío del formulario, frente a un error asociado al campo y anunciado apenas ocurre.

<!-- id:anticipatoryHelp -->
**Etiquetas o instrucciones (3.3.2, A)**

Los campos de un formulario deben contar con etiquetas o instrucciones claras sobre el formato esperado, disponibles antes de que la persona cometa un error. Mostrar comparación: un formato indicado únicamente mediante `placeholder` (que desaparece al escribir y no está asociado al campo) frente a una instrucción persistente y vinculada mediante `aria-describedby`.

<!-- id:errorSuggestion -->
**Sugerencia ante errores (3.3.3, AA)**

Cuando se detecta un error, debe sugerirse cómo corregirlo. Un mensaje genérico ("dato inválido") obliga a adivinar; un mensaje específico indica exactamente qué falta corregir.

<!-- id:confirmDestructive -->
**Prevención de errores: legal, financiero, datos (3.3.4, AA)**

En acciones significativas o irreversibles, debe ofrecerse la posibilidad de revisar, corregir o cancelar antes de confirmar. Mostrar comparación: una eliminación ejecutada al primer clic frente a la misma acción mediada por un diálogo de confirmación explícito.

<!-- id:redundantEntry -->
**Entrada redundante (3.3.7, A)**

No debe solicitarse a la persona que vuelva a ingresar información ya provista en el mismo proceso. Pedir dos veces la misma dirección en un mismo formulario es trabajo evitable.

<!-- id:accessibleAuth -->
**Autenticación accesible, mínimo (3.3.8, AA)**

El proceso de autenticación no debe depender exclusivamente de una prueba cognitiva, salvo que exista una alternativa. Bloquear el pegado en un campo de contraseña no aporta seguridad adicional: solo impide el uso de gestores de contraseñas y obliga a transcribir manualmente.

---

## Bloque 4 — Robusto

El contenido debe ser compatible con una amplia variedad de navegadores y tecnologías asistivas.

<!-- id:nameRoleValue -->
**Nombre, rol, valor (4.1.2, A)**

Todo componente de interfaz personalizado debe exponer su nombre, rol y estado a las tecnologías de asistencia. Mostrar comparación: un control estilizado como interruptor pero construido sobre un `<div>` sin rol ni estado accesible, frente al mismo control implementado como `<button role="switch" aria-checked>`.

<!-- id:errorRecovery -->
**Mensajes de estado (4.1.3, AA)**

Los mensajes de estado (confirmaciones, errores) deben anunciarse a lectores de pantalla sin robar el foco, mediante regiones `aria-live`. Un mensaje de confirmación que solo aparece visualmente no llega a quien no puede ver la pantalla en ese momento.

---

## Bloque 5 — Más allá de lo básico

Estos conceptos no corresponden a un criterio WCAG numerado, pero explican por qué una interfaz técnicamente conforme puede seguir generando fricción operativa.

<!-- id:cognitiveLoad -->
**Carga cognitiva**

Es la cantidad de información que una persona debe recordar y procesar para completar una tarea. Un formulario extenso en una sola pantalla exige sostener en la memoria qué falta completar, qué es obligatorio y qué errores hay que corregir. Dividir el proceso en pasos reduce esa carga.

<!-- id:interactionFatigue -->
**Fatiga por interacción**

Cada interacción tiene un costo. Una tarea que exige múltiples pasos repetitivos es tolerable una vez, pero se convierte en carga operativa cuando se repite decenas de veces por día.

<!-- id:inclusiveDesign -->
**Diseño inclusivo**

Quien usa un producto no está ahí para aprender cómo funciona: está ahí para completar una tarea. Diseñar para condiciones reales (interrupciones, presión de tiempo, cansancio) evita trasladar la complejidad del software a la persona que lo usa.

---

## Cierre

<!-- id:tools -->
**Herramientas**

La implementación no requiere herramientas nuevas: DevTools del navegador para inspección de contraste y árbol de accesibilidad, Lighthouse para auditoría automatizada, axe-core como motor de reglas WCAG sobre el DOM, y Playwright para validar accesibilidad como parte del pipeline de integración continua. Priorizar componentes reutilizables sobre implementaciones ad hoc por página evita corregir el mismo defecto múltiples veces.

<!-- id:closing -->
**Cierre**

La pregunta no es si la accesibilidad implica una inversión de tiempo. La pregunta es si esa inversión se realiza durante el diseño o se paga más tarde, en forma de soporte, corrección de errores y deuda técnica.
