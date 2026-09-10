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

> Antes del primer ejemplo técnico, conviene bajar a tierra el vocabulario que vamos a usar todo el rato.

**Vocabulario mínimo para esta charla**

Esta charla asume nociones de frontend pero no de accesibilidad, así que estos términos van a aparecer todo el tiempo. Quedan definidos acá una sola vez para no interrumpir cada ejemplo con la misma explicación.

- **DOM**: el árbol real de nodos que el navegador termina construyendo, más allá de cómo se ve. El CSS (`order`, `position`, `flex-direction`) solo cambia la proyección visual, nunca reordena el DOM — es la misma diferencia que hay entre el orden de un `SELECT` con `ORDER BY` y el orden físico de las filas en disco: cambiar uno no cambia el otro.
- **Árbol de accesibilidad (accessibility tree)**: una proyección paralela del DOM que el navegador expone a los lectores de pantalla y otras tecnologías asistivas. Funciona como una API separada de la visual: cada nodo tiene nombre, rol y valor. Si un control no expone esos tres datos ahí, para esa "API" directamente no existe, aunque se vea perfecto en pantalla.
- **Nombre accesible (accessible name)**: el string que una tecnología asistiva lee para identificar un control. Se calcula con un orden de precedencia fijo (`aria-label` > `aria-labelledby` > texto visible > `title`), parecido a cómo se resuelve la precedencia de configuración en cualquier sistema (variable de entorno > archivo de config > default).
- **Foco (focus)**: el puntero de "dónde estoy parado" cuando se navega sin mouse. En todo momento hay exactamente un elemento con foco; las interfaces rotas son las que lo pierden, lo atrapan sin salida, o lo mueven sin que la persona lo haya pedido.
- **ARIA / `role` / `aria-*`**: un vocabulario de atributos HTML que describe comportamiento y estado para tecnología asistiva ("esto es un botón", "esto está expandido", "esto cambió"). No modifica el comportamiento real del elemento — es metadata para el consumidor, en el mismo sentido que un `Content-Type` o un código de estado HTTP no cambian el payload, solo le dicen al cliente cómo interpretarlo.
- **`aria-live`**: marca una región del DOM cuyos cambios se anuncian automáticamente por voz, sin que la persona tenga el foco puesto ahí — el equivalente a una suscripción o un webhook: el cliente (lector de pantalla) se entera del cambio sin tener que hacer polling.
- **Lector de pantalla (screen reader)**: NVDA, VoiceOver, JAWS. El cliente que consume el árbol de accesibilidad y lo traduce a voz o braille — el "consumidor de la API" mencionada arriba.

Con esta base, cada ejemplo de acá en adelante señala el mecanismo puntual sin repetir la definición general.

---

## Bloque 1 — Perceptible

La información y los componentes de la interfaz deben poder percibirse, independientemente del sentido con el que se acceda a ellos.

> Arrancamos entonces por el principio de percepción, con el ejemplo más conocido de todos: el texto alternativo.

<!-- id:altText -->

**Texto alternativo (1.1.1, A)**

Todo contenido no textual (imágenes, íconos, gráficos) requiere una alternativa textual equivalente. Mostrar comparación: sin texto alternativo, un lector de pantalla no comunica ninguna información sobre el elemento; con `alt` descriptivo, el contenido queda disponible incluso si la imagen no carga.

- **Qué está mal:** el `<img>` de cada fila usa `alt={p.nombre}`, el mismo texto que ya está en la celda de al lado, así que un lector de pantalla anuncia el nombre del producto dos veces por fila. Además el botón de eliminar no tiene `aria-label` (queda `undefined`), así que solo anuncia "botón" sin decir a qué producto corresponde.
- **Cómo reproducirlo:** activá un lector de pantalla (NVDA o VoiceOver) y navegá la tabla fila por fila — vas a escuchar el nombre del producto repetido dos veces seguidas por cada fila. Después enfocá con Tab el ícono de tacho de basura: el lector solo dice "botón", sin nombre. También podés inspeccionar el árbol de accesibilidad en DevTools (panel Accessibility) y ver que la imagen tiene un accessible name redundante y el botón no tiene ninguno.
- **Solución:** el ícono pasa a `alt=""` porque es puramente decorativo (no aporta nada que no esté ya en el texto de la fila), así el lector lo saltea. El botón de eliminar suma `aria-label={`Eliminar ${p.nombre}`}`, así el nombre queda asociado al control aunque visualmente sea solo un ícono.

> Eso cubre imágenes fijas. El mismo principio de alternativa textual aplica a contenido que se mueve en el tiempo: audio y video.

<!-- id:mediaAlternatives -->

**Medios basados en tiempo (1.2.1–1.2.5, A/AA)**

Contenido de audio o video grabado requiere alternativas equivalentes: transcripción para audio, subtítulos sincronizados y audiodescripción para video. Sin esas alternativas, el contenido queda inaccesible para quien no puede percibir el canal original.

- **Qué está mal:** ninguno de los dos videos (grabado y en vivo) tiene subtítulos, transcripción ni nota de audiodescripción — no hay ningún elemento en el DOM que ofrezca una alternativa textual al contenido audiovisual.
- **Cómo reproducirlo:** silenciá el sistema o bajá el volumen a cero y "mirá" el video — no hay forma de enterarte del contenido sin sonido. Inspeccioná el DOM con DevTools y confirmá que no hay `<track>`, botón de subtítulos ni ningún texto alternativo cerca del reproductor. En el video en vivo, fijate que el badge "En vivo" no dice nada sobre disponibilidad de subtítulos en tiempo real.
- **Solución:** el video grabado suma un botón de subtítulos con `aria-pressed`/`aria-label` que indica el estado actual ("Activar"/"Desactivar subtítulos"), un `<details>/<summary>` con la transcripción completa, y una nota de texto sobre la pista de audiodescripción. El video en vivo suma un badge "Subtítulos en vivo" para avisar que la transmisión sí los tiene.

> Ya cubrimos contenido no textual; ahora el problema aparece incluso con texto real, cuando la estructura que lo organiza no existe en el marcado.

<!-- id:semanticStructure -->

**Información y relaciones (1.3.1, A)**

La estructura de una interfaz (encabezados, listas, relaciones entre campo y etiqueta) debe existir en el marcado semántico, no solamente en el estilo visual. Si la jerarquía se logra únicamente con CSS, una tecnología asistiva no puede reconstruirla.

- **Qué está mal:** cada fila de la tabla es un `<div>` alineado con CSS grid, no un `<table>` real — visualmente parece una tabla pero en el DOM no hay ninguna relación estructural entre el header "Total" y el valor "$12.800" de cada fila.
- **Cómo reproducirlo:** con un lector de pantalla, intentá usar los comandos de navegación por tabla (en NVDA, `Ctrl+Alt+flecha` o `T` para saltar entre tablas) — no encuentra ninguna tabla porque no existe semánticamente. Inspeccioná el DOM en DevTools y vas a ver puros `<div>` con clases de grid, sin `<table>`, `<tr>` ni `<th>`. Al parar en una celda con el lector, anuncia solo el número suelto ("$12.800") sin decir a qué columna pertenece.
- **Solución:** se reemplazan los `<div>` por `<Table>`, `<TableRow>`, `<TableHead scope="col">` y `<TableCell>` reales. Con `scope="col"` en el header, el lector de pantalla asocia cada celda con su columna al recorrerla, y anuncia por ejemplo "Total, $12.800" en vez de un número aislado.

> Esa estructura real en el DOM se rompe de otra forma cuando el orden visual y el orden del marcado quedan desincronizados.

<!-- id:meaningfulSequence -->

**Secuencia significativa (1.3.2, A)**

El orden en el que el contenido se presenta a un lector de pantalla debe conservar el significado, incluso cuando no coincide con el orden visual logrado por CSS. Mostrar comparación: un formulario reordenado visualmente sin tocar el DOM produce una lectura fuera de orden.

- **Qué está mal:** el orden del DOM es Email → Nombre → Empresa, pero las clases `order-3`, `order-1`, `order-2` de Tailwind reordenan visualmente los campos a Nombre → Empresa → Email. El orden visual y el orden del marcado quedan desincronizados.
- **Cómo reproducirlo:** sin mirar la pantalla (o con un lector de pantalla activado), navegá el formulario con Tab — el foco va a saltar de Email a Nombre a Empresa, en un orden que no coincide con lo que se ve. Confirmalo en DevTools: en el panel Elements el `<input>` de Email aparece primero en el árbol aunque en pantalla se vea al final.
- **Solución:** se elimina el uso de `order-*` y el marcado se escribe directamente en el orden Nombre → Empresa → Email, que es el mismo que se muestra visualmente. Así el orden del DOM (el que sigue Tab y cualquier lector de pantalla) coincide con el orden visual, sin depender de CSS para reordenar.

> El orden es una forma de depender de lo visual; la siguiente es más directa todavía: instrucciones que dependen de forma, color o posición.

<!-- id:sensoryCharacteristics -->

**Características sensoriales (1.3.3, A)**

Las instrucciones no pueden depender exclusivamente de forma, color, tamaño o posición ("el botón redondo verde"). Deben incluir un identificador textual que no dependa de la percepción visual.

- **Qué está mal:** la instrucción de texto dice "hacé clic en el botón redondo verde de la derecha" — depende de forma (redondo), color (verde) y posición (derecha) para identificar el control, en vez de referenciarlo por su nombre o texto visible.
- **Cómo reproducirlo:** activá en DevTools el simulador de daltonismo (menú `⋮` → More tools → Rendering → Emulate vision deficiencies → Achromatopsia) y fijate que ya no se puede distinguir el botón por "verde". Después reducí el ancho del viewport o hacé zoom para ver que "de la derecha" deja de ser cierto apenas cambia el layout — la instrucción se vuelve inútil aunque el botón siga teniendo su `aria-label="Confirmar pedido"`.
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
- **Cómo reproducirlo:** hacé foco en el campo de Email con el autocompletado del navegador activado — no aparece ninguna sugerencia de perfil guardado. En mobile (o simulando un viewport táctil en DevTools), tocá el campo de Teléfono y vas a ver el teclado alfabético genérico en vez del numérico. Inspeccioná el `<input>` en Elements y confirmá que no tiene atributo `autocomplete`.
- **Solución:** se agrega `type="email"`/`type="tel"`, que además de habilitar el teclado correcto en mobile valida el formato del dato, y `autoComplete="email"`/`autoComplete="tel"`, que le dice al navegador y a los gestores de contraseñas qué campo del perfil ofrecer para autocompletar.

> Dejamos el autocompletado y volvemos a lo visual con el criterio más citado de todos: el uso del color.

<!-- id:colorUsage -->

**Uso de color adecuado (1.4.1, A)**

El color no puede ser el único medio para transmitir información o distinguir un estado. Uno de cada doce hombres presenta algún tipo de daltonismo; la diapositiva siguiente muestra cómo se percibe el mismo contenido bajo protanopia, deuteranopia, tritanopia y monocromacia. Mostrar comparación: un estado marcado solo con color rojo/verde frente al mismo estado reforzado con ícono y texto.

- **Qué está mal:** el estado de cada factura (vencida o al día) se comunica únicamente con el color de fondo de la fila (`bg-red-50` / `bg-green-50`) — no hay texto, ícono ni ningún otro indicador. Quien no percibe esa diferencia de color no tiene forma de saber el estado.
- **Cómo reproducirlo:** en DevTools, abrí `⋮` → More tools → Rendering → Emulate vision deficiencies y probá Protanopia, Deuteranopia o Achromatopsia — las filas rojas y verdes se vuelven indistinguibles entre sí. También podés confirmarlo por código: la única diferencia entre `rowClass` para "vencido" y "al-dia" es la clase de color, no hay ninguna columna ni badge que lo indique.
- **Solución:** se agrega una columna "Estado" con un `Badge` que combina ícono (`AlertTriangle`/`CheckCircle2`) y texto ("Vencido"/"Al día"), además de mantener el color de fondo. La información ya no depende solo del color: está también en el texto y en la forma del ícono.

> Del color pasamos a otro canal sensorial: el audio, y qué pasa cuando arranca solo sin ningún control.

<!-- id:audioControl -->

**Control de audio (1.4.2, A)**

Todo audio que se reproduce automáticamente por más de tres segundos debe poder pausarse, detenerse o silenciarse. Un audio que arranca solo y no ofrece control interfiere con cualquier lector de pantalla activo en la página.

- **Qué está mal:** el audio arranca solo al abrir el contacto (`playing` en `true` por defecto, texto "Reproduciendo automáticamente…") y no existe ningún botón ni control en el DOM para pausarlo, detenerlo o bajarle el volumen.
- **Cómo reproducirlo:** abrí la pantalla y tratá de encontrar con Tab algún control interactivo cerca del audio — no hay ninguno, el ícono de volumen es solo decorativo, sin `<button>` asociado. Con un lector de pantalla activado, notá que no hay forma de silenciar esa pista para poder escuchar lo que el lector está anunciando en el resto de la página.
- **Solución:** se agrega un `<button>` con `aria-label` dinámico ("Pausar grabación" / "Reproducir grabación") y estado manejado con `useState`, que alterna el ícono `Play`/`Pause` y el texto "Reproduciendo…" / "En pausa". Cumple con que cualquier audio autorreproducido de más de 3 segundos tenga un control accesible e independiente del volumen del sistema.

> Dejando el audio de lado, volvemos a lo visual con algo que aparece en casi cualquier auditoría: el contraste de la tipografía.

<!-- id:typography -->

**Tipografía legible — Contraste mínimo (1.4.3, AA)**

El texto debe mantener una relación de contraste de al menos 4.5:1 con su fondo (3:1 para texto grande). Un contraste insuficiente exige un esfuerzo visual adicional a cualquier persona, tenga o no una condición de visión diagnosticada.

- **Qué está mal:** el texto secundario usa `text-gray-400` sobre fondo blanco, lo que da un contraste de aproximadamente 2.5:1 — muy por debajo del mínimo de 4.5:1 para texto normal.
- **Cómo reproducirlo:** seleccioná el texto gris (cliente, fecha, estado) con el inspector de DevTools y abrí el color picker del panel Styles — muestra el ratio de contraste calculado y lo marca como insuficiente (ícono de advertencia). También podés correr una auditoría de Lighthouse o la extensión axe DevTools, que va a listar el fallo de contraste en esos elementos.
- **Solución:** se cambia `text-gray-400` por `text-gray-700`, manteniendo mismo tamaño, peso y layout — el contraste sube a ~17.7:1 en el título del pedido y ~10.3:1 en fecha/estado/cliente. El único cambio es el tono de color, no la tipografía ni la estructura.

> El contraste resuelve legibilidad a tamaño fijo; el siguiente criterio pregunta qué pasa cuando ese texto se agranda.

<!-- id:textResize -->

**Cambio de tamaño del texto (1.4.4, AA)**

El texto debe poder ampliarse hasta el 200% sin pérdida de contenido ni de funcionalidad. Si el texto se corta o superpone al agrandarlo, la interfaz queda inutilizable para baja visión.

- **Qué está mal:** el contenedor fija su alto con `style={{ height: '7vh' }}` y `overflow-hidden` más `truncate` en los textos. El `vh` depende del viewport, así que al hacer zoom real del navegador el viewport mide menos píxeles CSS y el contenedor se achica — pero el texto, en `rem`/`px`, no se achica con él, y termina recortado.
- **Cómo reproducirlo:** con el foco en la página, hacé zoom real del navegador (`Ctrl`/`Cmd` y `+` varias veces, hasta 200%) y observá que el nombre del producto y la ubicación se cortan con elipsis cada vez más temprano. Podés confirmar la causa inspeccionando el elemento en DevTools: tiene `height: 7vh`, `overflow: hidden` y la clase `truncate`.
- **Solución:** se elimina el alto fijo en `vh` y el `overflow-hidden`/`truncate` — el contenedor crece según el contenido en vez de recortarlo. Como el alto ya no depende del viewport, contenedor y texto escalan juntos con el zoom y el contenido nunca se corta, a cualquier nivel de zoom.

> Si el texto tiene que poder agrandarse, meter ese texto adentro de una imagen queda directamente descartado.

<!-- id:imagesOfText -->

**Imágenes de texto (1.4.5, AA)**

Debe usarse texto real en lugar de texto incrustado en una imagen, salvo casos esenciales como logotipos. Un texto renderizado como imagen no puede seleccionarse, traducirse, ni redimensionarse.

- **Qué está mal:** en la versión Bad el banner promocional no tiene texto real: adentro hay un único `<span>` con el literal `[ banner-promo.png ]`, simulando que el título, el descuento y la fecha están "horneados" en los píxeles de una imagen en vez de existir como texto en el DOM.
- **Cómo reproducirlo:** con el mouse, intentá seleccionar el texto del banner (no hay nada seleccionable, solo el placeholder). Abrí Ctrl+F y buscá "Cyber Inventario" — no aparece ningún resultado. Subí el zoom de texto del navegador (o el tamaño de fuente mínimo en la configuración de accesibilidad) y notá que el contenido del banner no reescala mientras el resto de la tipografía del sitio sí.
- **Solución:** en la versión Good el mismo fondo/degradé se mantiene como está, pero el título y la bajada pasan a ser dos `<p>` reales dentro del banner. Al ser texto en el DOM, se puede seleccionar, Ctrl+F lo encuentra y reescala junto con el resto de la tipografía.

> Texto real en vez de imagen resuelve un problema de escala; reflow es el mismo problema pero a nivel de todo el layout.

<!-- id:reflow -->

**Reflow (1.4.10, AA)**

El contenido debe adaptarse a un ancho de 320px sin generar scroll horizontal ni pérdida de información. La aparición de scroll horizontal a ese ancho es el primer síntoma de un layout que no escala.

- **Qué está mal:** la tabla de la versión Bad tiene `className="w-[560px]"` fijo, envuelta en `overflow-x-auto`, dentro de un recuadro de apenas 320px. Ese ancho mínimo obliga a scrollear horizontalmente para ver columnas como Monto o Estado.
- **Cómo reproducirlo:** sobre el recuadro de 320px del demo, notá la scrollbar horizontal debajo de la tabla y arrastrala (o usá Shift+rueda del mouse) para revelar las columnas "Monto" y "Estado", que arrancan fuera del área visible.
- **Solución:** la versión Good reemplaza la tabla por una lista de tarjetas (divs apilados con `space-y-2`) que muestran el mismo dato por fila, acomodadas en una sola columna sin ancho mínimo — no aparece scroll horizontal dentro del mismo recuadro de 320px.

> Ya vimos contraste de texto; ahora el mismo requisito pero aplicado a íconos y bordes, que también necesitan distinguirse del fondo.

<!-- id:nonTextContrast -->

**Contraste de elementos no textuales (1.4.11, AA)**

Íconos, bordes y estados de controles deben mantener al menos 3:1 de contraste contra su fondo. La misma exigencia de legibilidad aplicada al texto corresponde a cualquier elemento gráfico funcional.

- **Qué está mal:** los botones de ícono en la versión Bad usan `border-slate-100` para el borde y `text-slate-300` para el ícono, ambos sobre fondo blanco — muy por debajo del 3:1 que necesita un componente de interfaz no textual (ícono, borde de control) para distinguirse del fondo.
- **Cómo reproducirlo:** inspeccioná uno de los botones de ícono en DevTools y mirá el color computado (`color`) del ícono o el `border-color`; pasalos por un checker de contraste (el propio picker de color de Chrome muestra el ratio, o corré una auditoría con axe DevTools/Lighthouse, que marcan "contraste no textual" insuficiente). A simple vista, con la pantalla en escala de grises los íconos casi desaparecen contra el fondo.
- **Solución:** la versión Good sube el borde a `border-slate-300` (con `hover:border-slate-400`) y el ícono a `text-slate-600` (con `hover:text-slate-900`), además de agregar `focus-visible:ring-2 focus-visible:ring-brand` — ambos elementos quedan por encima del umbral de 3:1 contra el blanco.

> Del contraste pasamos a otra forma de personalizar la lectura: qué pasa cuando alguien necesita más espacio entre letras y líneas.

<!-- id:textSpacing -->

**Espaciado de texto (1.4.12, AA)**

El contenido debe seguir siendo legible cuando una persona aumenta el interlineado o el espaciado entre letras y párrafos desde su navegador o su tecnología asistiva. Un contenedor de altura fija impide ese ajuste.

- **Qué está mal:** el contenedor de la nota en la versión Bad tiene altura fija (`h-24`) más `overflow-hidden`. Al aplicar más interlineado, espaciado entre letras y entre palabras (`lineHeight: 2.2`, `letterSpacing: '0.14em'`, `wordSpacing: '0.18em'`), el texto ya no entra en esa altura y las últimas líneas quedan cortadas y ocultas.
- **Cómo reproducirlo:** hacé clic en el botón "Aplicar más espaciado" (`aria-pressed`) sobre el ejemplo malo y mirá cómo el final de la nota desaparece dentro del recuadro con borde — el contenedor no crece, corta el contenido.
- **Solución:** la versión Good usa el mismo espaciado pero sin altura fija ni `overflow-hidden` en el contenedor — al activar el mismo toggle, el bloque crece en alto y el texto completo sigue visible.

> Cerramos el bloque de percepción con un patrón muy común de interfaz: contenido que aparece solo con hover o con foco.

<!-- id:hoverContent -->

**Contenido al pasar el cursor o enfocar (1.4.13, AA)**

El contenido adicional que aparece con hover o focus (tooltips, menús) debe poder descartarse, debe ser persistente mientras el cursor permanece sobre él, y debe ser alcanzable con el puntero. Un tooltip que desaparece antes de poder leerse no cumple ninguna función.

- **Qué está mal:** en la versión Bad el disparador del tooltip es un `<span>` sin `tabIndex` ni rol de botón, con el contenido controlado solo por `onMouseEnter`/`onMouseLeave`. Al no ser un elemento focuseable, no hay ningún manejo de teclado (`onFocus`, `Escape`) que muestre o cierre el tooltip.
- **Cómo reproducirlo:** navegá la tarjeta solo con Tab desde antes del ícono de ayuda — el foco nunca se detiene sobre el ícono porque no es focuseable (confirmalo con el panel de Accesibilidad de DevTools o mirando el outline de foco). Con mouse, pasá sobre el ícono para que aparezca el tooltip y notá que solo se sostiene mientras el cursor está sobre esa zona angosta del span.
- **Solución:** la versión Good convierte el disparador en un `<button>` real con `aria-label` y `aria-describedby={tooltipId}`, agrega manejo de foco (`onFocusCapture`/`onBlurCapture`) para abrir con teclado y cerrar solo cuando el foco sale del contenedor, y escucha `Escape` para cerrarlo. El contenido del tooltip pasa a tener `id` y `role="tooltip"`, enlazado por `aria-describedby` para que un lector de pantalla lo anuncie al enfocar el botón.

---

## Bloque 2 — Operable

Los componentes de navegación y los controles deben poder manejarse mediante teclado, voz u otros dispositivos, sin límites de tiempo ni gestos que excluyan a una parte de los usuarios.

> Con esto cerramos todo lo que hace a que la información se perciba. El segundo principio es que los controles se puedan operar, y arrancamos por el canal más básico: el teclado.

<!-- id:keyboardNav -->

**Navegación por teclado (2.1.1, A)**

Toda la funcionalidad debe estar disponible desde el teclado. Afecta a cualquier persona que no pueda o no quiera depender del mouse: lesiones por esfuerzo repetitivo, uso prolongado de formularios, o simplemente preferencia de flujo de trabajo.

- **Qué está mal:** en la versión Bad el buscador está primero en el DOM (para apilarse arriba en mobile) y en pantallas anchas se lo reubica visualmente al final con clases de `order`. Esa propiedad es visual — no cambia el orden real de los nodos en el DOM, que es lo que usa el navegador para calcular el orden de tabulación.
- **Cómo reproducirlo:** ensanchá la ventana hasta que el layout pase a fila con las acciones primero y el buscador a la derecha. Hacé clic justo antes de la navegación y apretá Tab: el foco cae primero en el campo de búsqueda aunque visualmente esté al final.
- **Solución:** la versión Good elimina el reordenamiento por CSS y arma dos barras separadas en el DOM — una para mobile (buscador primero, visible en angosto) y otra para desktop (acciones primero, buscador al final, oculta en angosto). `display: none` saca del árbol de accesibilidad a la barra inactiva, así que en cualquier ancho Tab sigue el orden real de la única barra visible.

> El foco tiene que llegar a todos lados en el orden correcto; el siguiente problema es qué pasa cuando el foco entra a un componente y no puede salir.

<!-- id:focusTrap -->

**Focus trap — Sin trampas de teclado (2.1.2, A)**

El foco debe poder salir de cualquier componente usando exclusivamente el teclado. Mostrar tres variantes: sin manejo de foco (el foco se escapa detrás del modal), manejo parcial (el foco queda atrapado sin salida) y manejo correcto (el foco se gestiona con `<dialog>` nativo, incluyendo cierre con Escape).

- **Qué está mal:** en la primera variante el modal es un `div` con overlay renderizado condicionalmente, sin ningún manejo de foco: al abrirse, el foco queda donde estaba y Tab sigue recorriendo los botones del fondo, tapados visualmente por el overlay. La segunda variante agrega un listener de teclado que en cada Tab fuerza el foco a un único campo — el foco queda atrapado sin salida: no hay manejo de Escape y no hay forma de llegar con teclado a los botones Cancelar/Eliminar. Es una trampa de teclado real.
- **Cómo reproducirlo:** abrí el modal haciendo clic en "Eliminar factura". En la primera variante, apretá Tab varias veces y mirá en el árbol de accesibilidad de DevTools cómo el foco sigue avanzando por elementos del fondo, invisibles detrás del overlay. En la segunda variante, apretá Tab repetidas veces — el foco no sale nunca del input — y probá Escape: no pasa nada.
- **Solución:** la tercera variante reemplaza el modal casero por el componente `Dialog` de shadcn/ui, que gestiona el ciclo de foco completo: lo mueve adentro al abrir, lo retiene dentro del modal con Tab, cierra con Escape y devuelve el foco al botón que lo disparó — sin una sola línea de manejo manual de foco.

> Ya vimos foco atrapado sin salida; ahora el problema inverso: un atajo de teclado que se dispara donde no debería.

<!-- id:singleCharShortcuts -->

**Atajos de un carácter (2.1.4, A)**

Un atajo compuesto por una sola tecla debe poder desactivarse, remapearse, o limitarse a cuando un control específico tiene el foco. Mostrar comparación: un atajo global sin esas condiciones se dispara mientras la persona escribe en cualquier campo de texto de la página.

- **Qué está mal:** el listener global de la versión Bad abre el modal "Nueva factura" apenas detecta la tecla "n", sin revisar en qué elemento está el foco en ese momento.
- **Cómo reproducirlo:** hacé clic en el campo "Buscar factura..." y escribí "factura nueva" — cada letra "n" que tipeás dispara el atajo y abre el modal encima de lo que estabas escribiendo, cortando la búsqueda.
- **Solución:** la versión Good agrega una verificación de si el foco está en un input, textarea o contenido editable; si es así, la tecla se ignora y se escribe normal. Repetí "factura nueva" en el buscador — esta vez el texto llega completo, y el botón "Nueva factura" sigue disponible para quien no use el atajo.

> De atajos que interrumpen pasamos a otra forma de interrumpir: un límite de tiempo que corre sin que la persona pueda hacer nada.

<!-- id:adjustableTimeout -->

**Tiempo ajustable (2.2.1, A)**

Cuando existe un límite de tiempo, debe poder extenderse. Mostrar comparación con un caso de reserva de stock (patrón equivalente al de las plataformas de venta de entradas al reservar asientos): sin aviso ni opción de extender, la reserva se libera sin que la persona tenga oportunidad de reaccionar; con aviso a los últimos diez segundos y botón de extensión, el tiempo queda bajo control de la persona. Mencionar las excepciones del criterio: eventos en tiempo real esenciales sin alternativa posible, límites cuya extensión invalidaría la actividad, y límites superiores a veinte horas.

- **Qué está mal:** la versión Bad cuenta regresiva 30 segundos y libera la reserva sin ningún aviso previo ni forma de extenderla — el único indicio es un contador chico marcado como decorativo para tecnología asistiva, que queda fuera del árbol de accesibilidad.
- **Cómo reproducirlo:** dejá correr el ejemplo sin interactuar y mirá cómo, al llegar a 0, el texto cambia a "La reserva expiró" sin ninguna alerta previa. Activá un lector de pantalla y confirmá que el contador nunca se anuncia mientras corre.
- **Solución:** la versión Good agrega un umbral de aviso a los 10 segundos restantes: al llegar a ese punto se muestra un diálogo de alerta con un contador anunciado en vivo, más un botón "Extender reserva" que resetea el tiempo. El lector de pantalla anuncia el diálogo y la cuenta regresiva, y hay una acción concreta para no perder la reserva.

> El mismo problema de "algo que corre solo" aparece con contenido que se mueve o rota automáticamente, como un carrusel.

<!-- id:pausableCarousel -->

**Movimiento controlable — Pausar, detener, ocultar (2.2.2, A)**

Contenido que se mueve, parpadea o se actualiza automáticamente debe poder pausarse. Mostrar comparación: un carrusel que rota sin control disponible frente al mismo carrusel con botón de pausa.

- **Qué está mal:** el banner de la versión Bad rota de mensaje cada 2.5 segundos sin ningún control para detenerlo, y el cambio de texto no está en una región en vivo, así que un lector de pantalla nunca anuncia los mensajes nuevos.
- **Cómo reproducirlo:** dejá el ejemplo abierto y observá que el mensaje cambia solo cada 2.5 segundos sin que haya ningún botón para pausarlo. Con un lector de pantalla activo, confirmá que ninguno de los cambios de mensaje se anuncia.
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
- **Cómo reproducirlo:** activá "reducir movimiento" en el sistema operativo (o simulalo desde DevTools: pestaña Rendering → "Emulate CSS media feature prefers-reduced-motion: reduce") y apretá "Repetir animación" en la versión Bad — el rebote elástico y el pulso infinito del badge se reproducen igual. Repetí el mismo paso en la versión Good y mostrá que ahí sí cambia.
- **Solución:** un hook lee `window.matchMedia("(prefers-reduced-motion: reduce)")` y se suscribe a cambios en caliente. Con la preferencia activa, el spring se reemplaza por un fundido corto sin salto ni rotación, y el badge deja de pulsar.

> Dejamos el movimiento y volvemos a la navegación por teclado, ahora con el costo de tener que pasar por el mismo menú en cada página.

<!-- id:skipLinks -->

**Evitar bloques repetidos (2.4.1, A)**

Debe existir un mecanismo para saltear bloques de contenido que se repiten en cada página, como la navegación principal. Sin ese mecanismo, cada página cuesta lo mismo: tabular por todo el menú antes de llegar al contenido.

- **Qué está mal:** la versión Bad usa un layout propio que arma la barra lateral con 8 ítems de navegación pero no incluye ningún link "saltar al contenido" antes del menú. Quien navega con teclado tiene que pasar por los 8 ítems, uno por uno, antes de llegar al contenido principal.
- **Cómo reproducirlo:** cargá la pantalla Bad y apretá Tab una sola vez: el foco entra directo al primer link de navegación, sin ningún atajo. Seguí tabulando y contá cuántas veces hay que presionar Tab hasta llegar al contenido — son los 8 links completos.
- **Solución:** la versión Good tiene un link "saltar al contenido" con clase `sr-only` que se vuelve visible al recibir foco. El contenido principal tiene un `id` y `tabIndex={-1}` correspondientes, así que al activar ese link el foco salta directo ahí sin pasar por la navegación lateral.

> Saltar bloques repetidos ahorra tiempo dentro de una página; el título de la pestaña resuelve lo mismo pero entre páginas.

<!-- id:pageTitle -->

**Título de página (2.4.2, A)**

Cada página debe tener un título que describa su tema o propósito. Un título genérico no permite distinguir pestañas del navegador ni orienta a un lector de pantalla al cambiar de contexto.

- **Qué está mal:** la maqueta de ventana del navegador recibe un título fijo ("App") en la versión Bad, sin relación con la sección que se está mostrando (Facturas). No hay ningún título dinámico por vista.
- **Cómo reproducirlo:** mostrá la pestaña de la versión Bad junto a la de Good y señalá que la primera dice "App" sin distinguir de qué sección se trata. Con la app real abierta en varias pestañas, `document.title` devolvería el mismo valor genérico en todas, y un lector de pantalla que anuncia el título al cambiar de pestaña diría siempre lo mismo.
- **Solución:** la versión Good pasa un título que combina la sección con el nombre de la app ("Facturas – Aurea"). En una implementación real esto se traduce en que cada vista setea su propio `document.title`, así con varias pestañas abiertas se distinguen de un vistazo.

> Del título de la página volvemos al foco, esta vez al orden en el que se recorre con Tab.

<!-- id:focusOrder -->

**Orden del foco (2.4.3, A)**

El orden en el que se recibe el foco debe conservar el significado y la operabilidad de la interfaz. Un ajuste de CSS que reordena visualmente sin modificar el DOM produce un recorrido de teclado que no corresponde al orden visual.

- **Qué está mal:** en la versión Bad los campos están declarados en el DOM como Empresa, Nombre, Teléfono, pero cada uno tiene una clase de `order` que los reordena visualmente a Nombre, Teléfono, Empresa. El orden de tabulación sigue el DOM, no el CSS, así que el foco no coincide con el layout visual.
- **Cómo reproducirlo:** hacé clic en un punto neutro de la pantalla y empezá a tabular: el foco entra primero al campo Empresa (que visualmente está abajo de todo), después salta a Nombre (arriba) y después a Teléfono. Confirmalo en DevTools comparando el orden real del DOM contra lo que se ve en pantalla.
- **Solución:** la versión Good declara los campos en el DOM en el mismo orden en que se ven (Nombre, Teléfono, Empresa) y no usa ninguna clase de reordenamiento. Al no haber reordenamiento visual vía CSS, el orden de tabulación coincide exactamente con el orden de lectura en pantalla.

> El orden del foco importa tanto como lo que cada control dice de sí mismo — y ahí aparece el problema de los enlaces con el mismo texto.

<!-- id:linkPurpose -->

**Propósito del enlace, en contexto (2.4.4, A)**

El propósito de un enlace debe poder entenderse por su texto o por el contexto inmediato. Repetir "Ver más" en una lista sin contexto adicional no permite distinguir un enlace de otro fuera de esa lista.

- **Qué está mal:** los tres links de "Ver más" en la versión Bad no tienen `aria-label` ni ningún texto que los distinga entre sí — el nombre accesible de los tres es idéntico, aunque cada uno apunte a una factura distinta.
- **Cómo reproducirlo:** activá un lector de pantalla y abrí el listado de enlaces de la página (rotor de VoiceOver, o listado de links de NVDA): vas a escuchar "Ver más" repetido tres veces sin ninguna forma de saber a qué factura corresponde cada uno sin volver al contexto visual.
- **Solución:** la versión Good agrega un `aria-label` con el número de factura y el cliente a cada link, manteniendo el texto visible "Ver más" sin cambios. El nombre accesible ahora es distinto por fila, así el mismo listado de enlaces del lector de pantalla permite distinguir cada uno.

> Ya resolvimos que cada enlace se identifique solo; ahora el problema es tener una sola forma de llegar hasta él.

<!-- id:multipleWays -->

**Múltiples vías (2.4.5, AA)**

Debe existir más de un mecanismo para llegar a un contenido determinado: búsqueda, filtro o navegación estructurada. Depender exclusivamente del scroll en una lista extensa no constituye una vía razonable de acceso.

- **Qué está mal:** la versión Bad renderiza los 18 productos en una tabla estática dentro de un contenedor con scroll, sin ningún input de búsqueda ni filtro. La única manera de encontrar un producto es scrollear la lista entera.
- **Cómo reproducirlo:** scrolleá el contenedor de productos buscando un SKU específico y contá cuántos ítems hay que revisar manualmente antes de encontrarlo — no hay atajo de teclado ni buscador que permita saltar directo.
- **Solución:** la versión Good agrega un input de búsqueda con `aria-label="Buscar producto en el inventario"` que filtra la lista en tiempo real por nombre o SKU, reemplazando el scroll manual por una búsqueda directa.

> Encontrar el contenido es una parte del problema; que la etiqueta de cada campo diga algo útil es la otra.

<!-- id:descriptiveLabels -->

**Encabezados y etiquetas (2.4.6, AA)**

Los encabezados y las etiquetas de formulario deben describir el tema o propósito del contenido que acompañan. Etiquetas genéricas ("Campo 1") son técnicamente válidas pero no comunican información utilizable.

- **Qué está mal:** en la versión Bad los inputs tienen la etiqueta correctamente asociada por `id` (la asociación técnica existe), pero el texto de las etiquetas es "Campo 1" y "Dato", y el encabezado del panel dice "Formulario" — ninguno de esos textos describe qué información se está pidiendo.
- **Cómo reproducirlo:** activá un lector de pantalla y tabulá hacia los campos: vas a escuchar "Campo 1, editar texto" y "Dato, editar texto", sin pista de que se trata de un nombre o un email. Reforzalo mirando el encabezado en el árbol de accesibilidad de DevTools, que anuncia solo "Formulario".
- **Solución:** la versión Good cambia los textos de label a "Nombre completo" y "Correo electrónico", y el título del panel pasa de "Formulario" a "Nuevo contacto". El lector de pantalla ahora anuncia el propósito real de cada campo sin depender del placeholder para adivinarlo.

> Una etiqueta clara no sirve de nada si no se puede ver dónde está parado el foco en primer lugar.

<!-- id:visibleFocus -->

**Foco visible (2.4.7, AA)**

Todo elemento que recibe foco de teclado debe mostrar un indicador visible. Eliminar el `outline` sin reemplazo dificulta que una persona que navega con teclado identifique su posición actual en la interfaz.

- **Qué está mal:** los botones de la versión Bad tienen la clase `outline-none` sin ningún estilo de reemplazo para el estado de foco. El navegador suprime el anillo de foco nativo y no queda ninguna señal visual de cuál botón está enfocado.
- **Cómo reproducirlo:** hacé clic en un punto vacío de la pantalla (para asegurarte que el foco no esté en ningún botón) y tabulá entre los tres botones usando solo el teclado: no aparece ningún indicador visual, aunque el foco sí se esté moviendo (confirmable viendo que Enter activa un botón distinto en cada paso).
- **Solución:** la versión Good agrega un anillo de foco visible solo con `focus-visible`. Al usar ese pseudo-selector en vez de `:focus`, el anillo solo aparece cuando el foco llega por teclado (no al hacer clic con mouse), dando una señal visual clara de en qué control se está parado.

> Que el foco sea visible es necesario pero no alcanza si después otro elemento de la pantalla lo tapa.

<!-- id:focusNotObscured -->

**Foco no ocultado, mínimo (2.4.11, AA)**

El elemento con foco no puede quedar completamente tapado por otro contenido, como un encabezado fijo. Mostrar comparación: una lista con encabezado `sticky` sin `scroll-margin` oculta los elementos inferiores al enfocarlos; con el margen correspondiente, el elemento enfocado permanece visible.

- **Qué está mal:** el encabezado sticky de la lista de reportes se queda fijo arriba mientras se hace scroll. En la versión Bad las filas no tienen `scroll-margin-top`, así que cuando el navegador hace scroll automático para llevar un ítem enfocado a la vista, lo alinea contra el borde superior real del contenedor — quedando tapado detrás del encabezado sticky.
- **Cómo reproducirlo:** tabulá por la lista de reportes hasta llegar a un ítem que esté más abajo del scroll inicial: vas a ver que el foco (visible por el anillo de la fila) queda parcial o totalmente oculto detrás del encabezado que no se mueve.
- **Solución:** la versión Good aplica `scroll-margin-top` a cada fila, igual a la altura del header. Con eso, cuando el navegador hace scroll-into-view del ítem enfocado, respeta ese margen y lo deja siempre visible debajo del encabezado.

> Dejamos el teclado por un momento para volver al puntero, empezando por gestos que necesitan una trayectoria completa.

<!-- id:pointerGestures -->

**Gestos del puntero (2.5.1, A)**

Toda función activada mediante un gesto de trayectoria o multipunto (como deslizar) debe tener una alternativa de un solo punto. Una galería navegable únicamente por swipe excluye a quien no puede ejecutar ese gesto.

- **Qué está mal:** la galería solo cambia de imagen calculando el desplazamiento entre el inicio y el fin de un gesto contra un umbral mínimo de 40px. La versión Bad no ofrece ningún control alternativo: la única forma de avanzar es un gesto de arrastre con trayectoria mínima.
- **Cómo reproducirlo:** intentá cambiar de foto haciendo un clic simple sobre la imagen sin arrastrar (mouse down y up en el mismo punto, o un tap sin desplazamiento en touch): no pasa nada, porque el desplazamiento no supera el umbral. Esto simula lo que le pasa a alguien que usa un switch o un dispositivo que solo puede simular toques puntuales sin trayectoria.
- **Solución:** la versión Good agrega botones de flecha anterior/siguiente con `aria-label` y estado deshabilitado en los extremos. El arrastre original se mantiene funcionando, pero ahora también existe una alternativa de un solo toque que no depende de ninguna trayectoria de puntero.

> Resuelto el gesto en sí, queda otro problema del puntero: en qué momento exacto se confirma la acción.

<!-- id:pointerCancellation -->

**Cancelación del puntero (2.5.2, A)**

Las acciones deben confirmarse al soltar el clic, no al presionar, y deben poder cancelarse arrastrando el puntero fuera del control antes de soltar. Disparar una acción destructiva en `pointerdown` elimina esa última oportunidad de cancelar.

- **Qué está mal:** el botón de eliminar factura dispara la acción en el evento `onPointerDown`, es decir, apenas se presiona, antes de que el puntero se suelte. No hay forma de arrepentirse una vez que tocaste el botón — es el mismo bug que ejecutar una acción en el evento de "intención" en vez de esperar el de "confirmación": no queda ventana para cancelar.
- **Cómo reproducirlo:** en la versión Bad, hacé click sostenido sobre el ícono de tacho de una fila, arrastrá el puntero fuera del botón y recién ahí soltá — la factura se borra igual. Repetí el mismo gesto en la versión Good: al soltar afuera del botón, no pasa nada.
- **Solución:** el mismo botón pasa a disparar la acción en `onClick`, evento que el navegador solo confirma si el puntero se suelta sobre el propio elemento, así que arrastrar afuera cancela la acción sin código extra.

> Del momento en que se confirma un clic pasamos a otro desajuste sutil: cuando lo que se ve y lo que se anuncia no coinciden.

<!-- id:labelInName -->

**Etiqueta en el nombre (2.5.3, A)**

El nombre accesible de un control debe incluir el texto visible que lo identifica. Si el texto visible y el nombre accesible no coinciden, el control por voz que repite el texto visible no logra activar el control.

- **Qué está mal:** el botón muestra el texto visible "Buscar" pero su `aria-label="Consulta rápida"` no contiene esa palabra, entonces el nombre accesible (lo que expone el árbol de accesibilidad) no coincide con el texto en pantalla.
- **Cómo reproducirlo:** abrí el árbol de accesibilidad en DevTools sobre el botón y comparalo con el texto visible; o activá un control por voz (Voice Access en Android, Voice Control en macOS) y decí "click en Buscar" — en la versión Bad el comando no encuentra el control porque el nombre accesible es "Consulta rápida".
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
- **Cómo reproducirlo:** en la versión Bad, navegá la lista solo con Tab y flechas, sin usar el mouse, e intentá cambiar el orden de un ítem — no hay ningún elemento enfocable que lo permita. En la versión Good, hacé Tab hasta los botones "Subir"/"Bajar" de una fila y activalos con Enter o Space.
- **Solución:** cada fila suma botones "Subir" y "Bajar" que ejecutan el mismo cambio de posiciones que el drag and drop, dejando este último como atajo opcional en vez de único camino.

> Cerramos el bloque de operabilidad con algo que combina precisión motriz y tamaño: qué tan grande tiene que ser un objetivo táctil.

<!-- id:motorComplexity -->

**Tamaño del objetivo, mínimo (2.5.8, AA)**

Los objetivos táctiles deben medir al menos 24×24px, o contar con espacio suficiente entre controles adyacentes. Esta diapositiva incluye un simulador de temblor de mano: activarlo antes de comparar los tamaños de objetivo evidencia la dificultad de acertar un control por debajo del mínimo.

- **Qué está mal:** en la versión Bad, los botones +/- y el de favorito miden 20×20px, por debajo del mínimo de 24×24px. El checkbox "Reponer automáticamente" tiene `aria-label` pero el texto al lado es un `<span>` suelto, no un `<label>` vinculado, así que el área clickeable real es solo el control chico, sin poder tocar el texto para activarlo.
- **Cómo reproducirlo:** apretá "Simular tremor" (arriba a la derecha): oculta el cursor real y dibuja uno visible que se desplaza con un recorrido aleatorio amortiguado alrededor de la posición real del mouse. Con eso activo, intentá hacer clic en los botones +/- o en la estrella de favorito de la versión Bad — el error de puntería que agrega el tremor hace evidente lo chicos que son los objetivos. Podés confirmar el tamaño exacto inspeccionando el box model en DevTools.
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
- **Cómo reproducirlo:** activá un lector de pantalla (NVDA o VoiceOver) configurado en español, navegá hasta el comentario destacado y escuchá cómo lee la frase en inglés — en la versión Bad la pronuncia con fonética española, como una sucesión de sonidos irreconocibles.
- **Solución:** la frase se envuelve en un `<span lang="en">`, así el lector de pantalla detecta el cambio de idioma y conmuta a voz y fonética en inglés solo para ese fragmento, volviendo al español para el resto del párrafo.

> Del idioma pasamos a otra forma de sorprender a quien usa la interfaz: un cambio de contexto que no pidió.

<!-- id:onFocusChange -->

**Al recibir el foco (3.2.1, A)**

Ningún control puede disparar un cambio de contexto por el solo hecho de recibir el foco. Mostrar comparación: un `<select>` que navega apenas se tabula hacia él, antes de que la persona elija una opción, frente a la misma navegación disparada únicamente tras una selección explícita.

- **Qué está mal:** el `<select>` de la versión Bad dispara el cambio de contexto (el mensaje "Navegando a...") en el evento `onFocus`, o sea al recibir el foco, antes de que la persona elija ninguna opción.
- **Cómo reproducirlo:** en la versión Bad, navegá con Tab hasta el combo sin tocar flechas ni Enter — el texto de "Navegando a..." ya aparece apenas el combo recibe foco. En la versión Good, repetí el mismo Tab: no pasa nada hasta que efectivamente cambiás la opción.
- **Solución:** el cambio se mueve al evento `onChange`, que solo se dispara después de una selección explícita, y el mensaje de estado se envuelve en `role="status"` para que un lector de pantalla lo anuncie cuando sí corresponde.

> Ese cambio de contexto se disparaba solo con el foco; el mismo problema existe al modificar el valor de un campo.

<!-- id:onInputChange -->

**Al recibir entrada de datos (3.2.2, A)**

Ningún control puede disparar un cambio de contexto automático por el solo hecho de modificar su valor. Un filtro que navega o descarta datos no guardados apenas cambia de valor debe reemplazarse por un paso de confirmación explícito.

- **Qué está mal:** el combo de filtro de estado ejecuta el borrado de la nota interna dentro de su propio handler de cambio, entonces con solo cambiar el filtro se borra silenciosamente cualquier texto que la persona haya escrito en el campo "Nota interna", sin aviso ni confirmación.
- **Cómo reproducirlo:** en la versión Bad, escribí algo en el campo "Nota interna sobre el pedido en curso" y después cambiá el `<select>` de "Estado del pedido" a cualquier otra opción — la nota desaparece al instante. En la Good, repetí lo mismo: la nota queda intacta.
- **Solución:** el combo ahora solo actualiza un estado pendiente; la lista y el resto del formulario no cambian hasta que la persona aprieta explícitamente el botón "Aplicar filtro", que es lo único que dispara el filtrado real.

> Evitar sorpresas dentro de una pantalla es una parte; mantener la misma navegación entre pantallas es la otra.

<!-- id:consistentNavigation -->

**Navegación consistente (3.2.3, AA)**

Los mecanismos de navegación que se repiten deben aparecer en el mismo orden en todas las páginas. Un menú que cambia de orden entre pantallas obliga a reinterpretar la navegación en cada una.

- **Qué está mal:** los mismos cuatro ítems de navegación se listan en un orden distinto en cada página — la página B usa una permutación manual del mismo array de ítems.
- **Cómo reproducirlo:** poné las dos tarjetas ("Página A" y "Página B") una al lado de la otra y comparás la posición de cada ítem (por ejemplo "Contactos" está cuarto en A y segundo en B); con un lector de pantalla, navegá la navegación de cada página y notá que el orden de lectura cambia.
- **Solución:** ambas páginas renderizan la misma constante de orden, así el orden de los ítems es idéntico en toda la aplicación y se puede navegar de memoria sin volver a buscar cada opción.

> Si la navegación tiene que ser consistente, lo mismo aplica a cualquier control que cumpla la misma función en toda la app.

<!-- id:consistency -->

**Identificación consistente (3.2.4, AA)**

Los componentes con la misma función deben identificarse de forma consistente en toda la aplicación. Si la acción "Guardar" ocupa una posición distinta en cada módulo, cada persona debe reinterpretar la interfaz cada vez.

- **Qué está mal:** dos módulos que guardan datos ("Editar factura" y "Editar pedido") implementan la misma acción con controles distintos: un botón HTML plano con estilo outline, texto "Guardar" y posición arriba-derecha en uno, versus el componente `Button` con estilo sólido, texto "Actualizar" y posición abajo-izquierda en el otro.
- **Cómo reproducirlo:** poné los dos paneles uno al lado del otro y compará estilo, texto y ubicación del botón de guardar en cada uno; con teclado, hacé Tab por ambos formularios y notá que el control equivalente no aparece en la misma posición relativa del flujo de foco.
- **Solución:** ambos módulos pasan a usar el mismo componente `Button`, el mismo texto ("Guardar") y la misma posición (abajo a la derecha), de forma que un control con la misma funcionalidad se identifica igual en toda la interfaz.

> Esa misma consistencia aplica a algo tan simple como dónde vive el botón de ayuda.

<!-- id:consistentHelp -->

**Ayuda consistente (3.2.6, A)**

Cuando existe un mecanismo de ayuda, debe aparecer en la misma posición relativa en todas las páginas. Un botón de ayuda que cambia de esquina entre pantallas obliga a buscarlo de nuevo cada vez.

- **Qué está mal:** el botón de ayuda cambia de esquina entre páginas — abajo-izquierda en "Página A", arriba-derecha en "Página B" — según una prop de posición que varía por instancia.
- **Cómo reproducirlo:** simulá aumento de pantalla (zoom del navegador al 300-400% o herramienta de magnificación) para ver solo una porción de cada tarjeta a la vez, y notá que el botón de ayuda no está donde lo dejaste en la página anterior; o simplemente comparar las dos tarjetas lado a lado.
- **Solución:** las dos instancias pasan la misma posición de ayuda ("abajo-derecha"), dejando el botón siempre en la misma esquina para que su ubicación sea predecible en toda la aplicación.

> De la consistencia pasamos a otro pilar de comprensibilidad: cómo se identifican los errores cuando algo sale mal.

<!-- id:errorPrevention -->

**Identificación de errores (3.3.1, A)**

Los errores de un formulario deben identificarse y describirse en texto, asociados al campo correspondiente mediante `aria-invalid` y `aria-describedby`, y anunciados en tiempo real. Mostrar comparación: un error que aparece como texto suelto y solo tras el envío del formulario, frente a un error asociado al campo y anunciado apenas ocurre.

- **Qué está mal:** la versión Bad valida recién dentro del handler de envío, que se dispara al hacer click en "Cargar" — no hay validación en tiempo real. El input tampoco tiene `id` asociado al label, ni `aria-invalid`, ni `aria-describedby`, así que el mensaje de error queda como texto suelto sin ninguna asociación programática con el campo.
- **Cómo reproducirlo:** activá un lector de pantalla, enfocá el input y escribí un número mayor al máximo permitido — no pasa nada hasta que actives el botón "Cargar". Con DevTools abrí el árbol de accesibilidad del input: no vas a ver `aria-invalid` ni `aria-describedby` apuntando al mensaje de error, aunque visualmente el texto rojo aparezca debajo.
- **Solución:** la versión Good agrega `min`, `max` y `required` al input, valida en cada cambio, y linkea el mensaje de ayuda y el de error vía `aria-describedby` más `aria-invalid`. El contenedor del error usa `role="alert"` para que se anuncie apenas aparece, sin esperar el submit.

> Identificar el error después de que ocurre es necesario, pero lo ideal es evitarlo con instrucciones claras desde antes.

<!-- id:anticipatoryHelp -->

**Etiquetas o instrucciones (3.3.2, A)**

Los campos de un formulario deben contar con etiquetas o instrucciones claras sobre el formato esperado, disponibles antes de que la persona cometa un error. Mostrar comparación: un formato indicado únicamente mediante `placeholder` (que desaparece al escribir y no está asociado al campo) frente a una instrucción persistente y vinculada mediante `aria-describedby`.

- **Qué está mal:** el único indicio del formato esperado vive en el placeholder del input de teléfono. La versión Bad solo setea `aria-describedby` cuando hay un error — nunca hay una instrucción asociada antes de que falle.
- **Cómo reproducirlo:** con un lector de pantalla activo, hacé Tab hasta el campo "Teléfono" antes de escribir nada — el placeholder no se anuncia de forma consistente entre lectores/navegadores. Después empezá a escribir cualquier carácter: visualmente el placeholder desaparece y no queda ningún rastro del formato esperado en pantalla ni en el DOM.
- **Solución:** la versión Good agrega un texto visible y permanente con el formato esperado, y lo incluye siempre en `aria-describedby` junto al mensaje de error cuando existe, así la instrucción está disponible desde el arranque, no solo tras el error.

> Aun con buena instrucción previa, el error puede pasar igual — ahí importa qué tan específico es el mensaje que lo explica.

<!-- id:errorSuggestion -->

**Sugerencia ante errores (3.3.3, AA)**

Cuando se detecta un error, debe sugerirse cómo corregirlo. Un mensaje genérico ("dato inválido") obliga a adivinar; un mensaje específico indica exactamente qué falta corregir.

- **Qué está mal:** la versión Bad calcula si la contraseña es válida (longitud mínima 8 + al menos un dígito) pero al fallar siempre muestra el mismo string fijo "Contraseña inválida", sin importar cuál de las dos condiciones incumple.
- **Cómo reproducirlo:** con lector de pantalla activo (el mensaje se anuncia solo por `role="alert"`), escribí una contraseña de 4 caracteres sin números y después otra de 10 caracteres solo con letras — en ambos casos el mensaje anunciado es idéntico, obligando a adivinar qué falta.
- **Solución:** la versión Good compara el valor contra cada regla y arma un mensaje puntual tipo "te faltan 3 caracteres y necesitás al menos un número", recalculado en cada cambio.

> Un buen mensaje de error ayuda a corregir; hay acciones donde directamente conviene frenar antes de que se ejecuten.

<!-- id:confirmDestructive -->

**Prevención de errores: legal, financiero, datos (3.3.4, AA)**

En acciones significativas o irreversibles, debe ofrecerse la posibilidad de revisar, corregir o cancelar antes de confirmar. Mostrar comparación: una eliminación ejecutada al primer clic frente a la misma acción mediada por un diálogo de confirmación explícito.

- **Qué está mal:** en la versión Bad, el botón de tacho llama directo a la función que elimina la factura — un solo click ejecuta el borrado, sin ningún paso intermedio de confirmación.
- **Cómo reproducirlo:** con mouse o Enter/Space sobre el botón con foco, hacé click una sola vez sobre el ícono de tacho de cualquier fila — la factura desaparece de la tabla al instante, sin posibilidad de arrepentirse ni deshacer.
- **Solución:** la versión Good envuelve la acción en un diálogo de confirmación: el click abre un modal avisando "Esta acción no se puede deshacer", y el borrado solo se ejecuta si la persona confirma el botón "Eliminar" dentro del diálogo; "Cancelar" o cerrar el diálogo no dispara nada.

> De frenar una acción destructiva pasamos a otro tipo de fricción evitable: pedir un dato que la persona ya cargó.

<!-- id:redundantEntry -->

**Entrada redundante (3.3.7, A)**

No debe solicitarse a la persona que vuelva a ingresar información ya provista en el mismo proceso. Pedir dos veces la misma dirección en un mismo formulario es trabajo evitable.

- **Qué está mal:** la versión Bad renderiza dos bloques de dirección (facturación y envío) con estado independiente, sin ningún mecanismo para reutilizar los valores de una sección en la otra.
- **Cómo reproducirlo:** completá calle y ciudad en "Dirección de facturación" y después andá a "Dirección de envío" — vas a tener que retipear los mismos dos campos de cero, aunque el dato ya esté cargado en pantalla un scroll más arriba.
- **Solución:** la versión Good agrega un checkbox "Usar la misma dirección para el envío"; al tildarlo, copia los valores de facturación a envío y deja esos campos deshabilitados mientras esté activo, evitando reingresar un dato ya provisto en el mismo formulario.

> Cerramos comprensible con un caso particular de esto mismo, en el momento más sensible de cualquier flujo: el login.

<!-- id:accessibleAuth -->

**Autenticación accesible, mínimo (3.3.8, AA)**

El proceso de autenticación no debe depender exclusivamente de una prueba cognitiva, salvo que exista una alternativa. Bloquear el pegado en un campo de contraseña no aporta seguridad adicional: solo impide el uso de gestores de contraseñas y obliga a transcribir manualmente.

- **Qué está mal:** el input de contraseña de la versión Bad bloquea el evento de pegado y además tiene `autoComplete="off"`, que le indica al navegador que no ofrezca autocompletado ni gestor de contraseñas para ese campo.
- **Cómo reproducirlo:** copiá una contraseña cualquiera al portapapeles y probá pegarla (Ctrl+V) en el campo — no entra nada. Fijate también que el navegador o un gestor de contraseñas (si hay uno instalado) no ofrece autocompletar el campo, justamente por el `autoComplete="off"`.
- **Solución:** la versión Good elimina el bloqueo de pegado y cambia `autoComplete` a `"current-password"`, el valor estándar que habilita gestores de contraseñas y autocompletado del navegador — el login deja de depender de que la persona memorice y transcriba la contraseña a mano.

---

## Bloque 4 — Robusto

El contenido debe ser compatible con una amplia variedad de navegadores y tecnologías asistivas.

> Con esto cerramos comprensible. El último principio de WCAG es que todo sea robusto, y ahí volvemos al concepto que abrió esta charla: nombre, rol y valor.

<!-- id:nameRoleValue -->

**Nombre, rol, valor (4.1.2, A)**

Todo componente de interfaz personalizado debe exponer su nombre, rol y estado a las tecnologías de asistencia. Mostrar comparación: un control estilizado como interruptor pero construido sobre un `<div>` sin rol ni estado accesible, frente al mismo control implementado como `<button role="switch" aria-checked>`.

- **Qué está mal:** el switch de la versión Bad es un `<div onClick>` que envuelve un `<span>` con estilos de pastilla deslizable — no tiene `role`, no tiene `aria-checked`, no es un `<button>` ni tiene `tabIndex`, así que no forma parte del orden de foco por teclado.
- **Cómo reproducirlo:** navegá la demo solo con Tab — el foco salta directo del label al siguiente control sin pasar nunca por el switch, así que no hay forma de activarlo sin mouse. Inspeccioná el elemento en el árbol de accesibilidad de DevTools: no expone nombre, rol ni valor.
- **Solución:** la versión Good reemplaza el div por `<button role="switch" aria-checked={checked}>`, que es focuseable por teclado por ser un button nativo y expone estado vía `aria-checked` — un lector de pantalla anuncia "Notificaciones activas, switch, activado".

> Ese mismo requisito de exponer estado aplica también a los mensajes que la interfaz genera sola, como una confirmación.

<!-- id:errorRecovery -->

**Mensajes de estado (4.1.3, AA)**

Los mensajes de estado (confirmaciones, errores) deben anunciarse a lectores de pantalla sin robar el foco, mediante regiones `aria-live`. Un mensaje de confirmación que solo aparece visualmente no llega a quien no puede ver la pantalla en ese momento.

- **Qué está mal:** en la versión Bad, al borrar un contacto aparece un aviso de confirmación sin `role` ni `aria-live`, y se autodestruye a los dos segundos, sin ninguna opción de deshacer.
- **Cómo reproducirlo:** con lector de pantalla activo, eliminá un contacto de la lista — el aviso aparece y desaparece visualmente en 2 segundos pero no se anuncia nada por audio (no hay región en vivo). Si en ese lapso no llegaste a leerlo, no hay forma de recuperar el dato ni de deshacer la acción.
- **Solución:** la versión Good usa `role="status"` con `aria-live="polite"` en el contenedor del aviso para que se anuncie automáticamente, agrega un botón "Deshacer" que recibe el foco al aparecer, y el aviso no se autodestruye — queda visible hasta que la persona decide.

---

## Bloque 5 — Más allá de lo básico

Estos conceptos no corresponden a un criterio WCAG numerado, pero explican por qué una interfaz técnicamente conforme puede seguir generando fricción operativa.

> Con esto terminan los cuatro principios de WCAG. Lo que sigue no tiene un número de criterio, pero explica por qué una interfaz que aprueba todo lo anterior todavía puede resultar pesada de usar — empezando por cuánto tiene que recordar la persona.

<!-- id:cognitiveLoad -->

**Carga cognitiva**

Es la cantidad de información que una persona debe recordar y procesar para completar una tarea. Un formulario extenso en una sola pantalla exige sostener en la memoria qué falta completar, qué es obligatorio y qué errores hay que corregir. Dividir el proceso en pasos reduce esa carga.

- **Qué está mal:** la primera variante muestra los 14 campos del formulario sueltos en un mismo grid, sin agrupar y sin ninguna jerarquía semántica (sin `fieldset`/`legend`) — toda la carga de sostener "qué me falta" recae en la memoria de quien completa el formulario.
- **Cómo reproducirlo:** contá cuántos campos están visibles simultáneamente en la primera variante (14) y navegá con Tab campo por campo con un lector de pantalla — no hay ningún anuncio de agrupación, cada input suena aislado del resto. En la variante intermedia (agrupada), repetí la navegación por lector de pantalla: al entrar a un grupo ahora se anuncia el título del grupo (ej. "Fiscal y facturación") gracias al `fieldset` semántico, pero seguís viendo los 14 campos a la vez en pantalla, sin reducción real de carga visual.
- **Solución:** la versión final reparte los mismos 14 campos en tres pasos con un indicador de progreso numerado; en cualquier momento hay entre 3 y 6 campos visibles, con botones "Anterior"/"Siguiente", sin sacar ningún campo del formulario original — solo lo secuencia.

> Reducir lo que hay que recordar en un momento dado es una forma de carga; otra es cuánto cuesta repetir la misma tarea muchas veces.

<!-- id:interactionFatigue -->

**Fatiga por interacción**

Cada interacción tiene un costo. Una tarea que exige múltiples pasos repetitivos es tolerable una vez, pero se convierte en carga operativa cuando se repite decenas de veces por día.

- **Qué está mal:** la versión Bad apila siete secciones una debajo de la otra en un único contenedor con scroll continuo; "Historial de pedidos" es la última sección, después de Datos generales, Direcciones, Preferencias, Condiciones comerciales y Vendedor asignado.
- **Cómo reproducirlo:** cronometrá o contá cuántos scrolls hacen falta para llegar a "Historial de pedidos" desde el tope de la pantalla — son cinco secciones de por medio. Repetí el ejercicio pensando en alguien que hace esa misma búsqueda cien veces por día: el costo no está en la dificultad de cada sección sino en el desplazamiento acumulado.
- **Solución:** la versión Good reemplaza el scroll único por pestañas accesibles por teclado (flechas, Home, End), y persiste la pestaña activa en la URL — la sección buscada aparece de una, sin scrollear, y el link a esa vista puntual se puede compartir directo.

> Todo esto — carga cognitiva, fatiga por interacción — apunta a la misma idea de fondo, que cierra este bloque.

<!-- id:inclusiveDesign -->

**Diseño inclusivo**

Quien usa un producto no está ahí para aprender cómo funciona: está ahí para completar una tarea. Diseñar para condiciones reales (interrupciones, presión de tiempo, cansancio) evita trasladar la complejidad del software a la persona que lo usa.

- **Qué está mal:** en la versión Bad, cada opción del menú ("Compartir", "Duplicar", etc.) es un `<div>` sin `onClick`, sin `role` y sin ningún atributo de foco — visualmente parecen ítems de menú por el hover, pero no son elementos interactivos reales.
- **Cómo reproducirlo:** abrí el menú "···" y probá clickear "Compartir" o "Duplicar" — no pasa absolutamente nada. Después navegá con Tab desde el botón "···": el foco nunca entra a ninguna de esas opciones porque son divs planos, no hay forma de alcanzarlas ni activarlas por teclado.
- **Solución:** la versión Good reemplaza cada opción por un `<button type="button">` real con altura mínima táctil (respetando el tamaño mínimo de blanco de toque de WCAG 2.5.8), y el disparador usa el patrón nativo `<details>/<summary>` con el ícono marcado como decorativo y un texto oculto visualmente ("Más acciones del reporte") que le da nombre accesible al control aunque solo se vea el ícono.

> Con todos los ejemplos ya vistos, queda la pregunta práctica: con qué se implementa todo esto en el día a día.

---

## Cierre

<!-- id:tools -->

**Herramientas**

La implementación no requiere herramientas nuevas: DevTools del navegador para inspección de contraste y árbol de accesibilidad, Lighthouse para auditoría automatizada, axe-core como motor de reglas WCAG sobre el DOM, y Playwright para validar accesibilidad como parte del pipeline de integración continua. Priorizar componentes reutilizables sobre implementaciones ad hoc por página evita corregir el mismo defecto múltiples veces.

> Y con las herramientas ya sobre la mesa, la única pregunta que queda es la que abre el cierre de la charla.

<!-- id:closing -->

**Cierre**

La pregunta no es si la accesibilidad implica una inversión de tiempo. La pregunta es si esa inversión se realiza durante el diseño o se paga más tarde, en forma de soporte, corrección de errores y deuda técnica.
