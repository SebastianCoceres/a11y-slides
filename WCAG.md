# WCAG 2.2 — Referencia rápida

Los 55 criterios de éxito de WCAG 2.2 de nivel A y AA, agrupados por los 4 principios (POUR) y sus pautas. Cada uno indica su nivel de conformidad (A / AA) y una descripción breve.

## 1. Perceptible

### 1.1 Alternativas textuales

- **1.1.1 Contenido no textual (A)** — Toda imagen, ícono o control no textual tiene una alternativa textual equivalente.

### 1.2 Medios basados en tiempo

- **1.2.1 Solo audio y solo video, grabado (A)** — Se ofrece una alternativa textual o de audio equivalente.
- **1.2.2 Subtítulos, grabado (A)** — Los videos con audio tienen subtítulos sincronizados.
- **1.2.3 Audiodescripción o alternativa multimedia, grabado (A)** — Se describe en audio o texto el contenido visual relevante del video.
- **1.2.4 Subtítulos en vivo (AA)** — El contenido de audio en vivo tiene subtítulos en tiempo real.
- **1.2.5 Audiodescripción, grabado (AA)** — Los videos grabados incluyen audiodescripción del contenido visual.

### 1.3 Adaptable

- **1.3.1 Información y relaciones (A)** — La estructura (encabezados, listas, tablas) existe en el marcado, no solo por estilo visual.
- **1.3.2 Secuencia significativa (A)** — El orden de lectura tiene sentido incluso sin el CSS aplicado.
- **1.3.3 Características sensoriales (A)** — Las instrucciones no dependen solo de forma, color, tamaño o ubicación.
- **1.3.4 Orientación (AA)** — El contenido funciona en horizontal y vertical, salvo que una orientación sea esencial.
- **1.3.5 Identificar el propósito de la entrada (AA)** — Los campos de datos personales comunes se identifican programáticamente (autocomplete).

### 1.4 Distinguible

- **1.4.1 Uso del color (A)** — El color no es el único medio para transmitir información o distinguir un elemento.
- **1.4.2 Control de audio (A)** — El audio autorreproducido de más de 3 segundos se puede pausar, detener o silenciar.
- **1.4.3 Contraste mínimo (AA)** — El texto tiene contraste de al menos 4.5:1 (3:1 si es grande) con su fondo.
- **1.4.4 Cambio de tamaño del texto (AA)** — El texto se puede agrandar hasta 200% sin perder contenido ni función.
- **1.4.5 Imágenes de texto (AA)** — Se usa texto real en vez de imágenes de texto, salvo casos esenciales (logos).
- **1.4.10 Reflow (AA)** — El contenido se adapta a 320px de ancho sin scroll horizontal ni pérdida de información.
- **1.4.11 Contraste de elementos no textuales (AA)** — Íconos, bordes y estados de controles tienen al menos 3:1 de contraste.
- **1.4.12 Espaciado de texto (AA)** — El contenido sigue siendo legible al aumentar interlineado y espaciado entre letras/párrafos.
- **1.4.13 Contenido al pasar el cursor o enfocar (AA)** — El contenido que aparece con hover/focus se puede descartar, es persistente y alcanzable.

## 2. Operable

### 2.1 Accesible por teclado

- **2.1.1 Teclado (A)** — Toda la funcionalidad está disponible desde el teclado.
- **2.1.2 Sin trampas de teclado (A)** — El foco siempre puede salir de cualquier componente usando solo el teclado.
- **2.1.4 Atajos de un solo carácter (A)** — Los atajos de una tecla se pueden desactivar, remapear o requieren foco en un control específico.

### 2.2 Tiempo suficiente

- **2.2.1 Tiempo ajustable (A)** — Los límites de tiempo se pueden extender, desactivar o ajustar.
- **2.2.2 Pausar, detener, ocultar (A)** — El contenido que se mueve, parpadea o se autoactualiza se puede pausar, detener u ocultar.

### 2.3 Convulsiones y reacciones físicas

- **2.3.1 Tres destellos o por debajo del umbral (A)** — Ningún contenido destella más de 3 veces por segundo.

### 2.4 Navegable

- **2.4.1 Evitar bloques (A)** — Existe un mecanismo para saltear bloques de contenido repetidos.
- **2.4.2 Título de página (A)** — Cada página tiene un título que describe su tema o propósito.
- **2.4.3 Orden del foco (A)** — El orden en que se recibe el foco preserva el significado y la operabilidad.
- **2.4.4 Propósito del enlace, en contexto (A)** — El propósito de un enlace se entiende por su texto o el contexto que lo rodea.
- **2.4.5 Múltiples vías (AA)** — Hay más de una forma de llegar a una página (búsqueda, mapa del sitio, navegación).
- **2.4.6 Encabezados y etiquetas (AA)** — Los encabezados y etiquetas describen el tema o propósito del contenido.
- **2.4.7 Foco visible (AA)** — Todo elemento que recibe foco de teclado muestra un indicador visible.
- **2.4.11 Foco no ocultado, mínimo (AA)** — El elemento con foco no queda completamente tapado por otro contenido.

### 2.5 Modalidades de entrada

- **2.5.1 Gestos del puntero (A)** — Toda función con gestos multipunto o de trayectoria tiene una alternativa de un solo punto.
- **2.5.2 Cancelación del puntero (A)** — Las acciones se disparan al soltar el clic, y se pueden cancelar arrastrando fuera.
- **2.5.3 Etiqueta en el nombre (A)** — El nombre accesible de un control incluye el texto visible que lo etiqueta.
- **2.5.4 Activación por movimiento (A)** — Las funciones activadas por mover el dispositivo también se pueden operar normalmente, y se pueden desactivar.
- **2.5.7 Movimientos de arrastre (AA)** — Toda función de arrastrar y soltar tiene una alternativa sin arrastre.
- **2.5.8 Tamaño del objetivo, mínimo (AA)** — Los objetivos táctiles miden al menos 24×24px, o tienen espacio suficiente entre sí.

## 3. Comprensible

### 3.1 Legible

- **3.1.1 Idioma de la página (A)** — El idioma principal está declarado programáticamente (atributo `lang`).
- **3.1.2 Idioma de las partes (AA)** — El idioma de cada pasaje distinto al principal está declarado.

### 3.2 Predecible

- **3.2.1 Al recibir el foco (A)** — Ningún elemento dispara un cambio de contexto solo por recibir el foco.
- **3.2.2 Al recibir entrada de datos (A)** — Ningún control dispara un cambio de contexto automático solo por cambiar su valor.
- **3.2.3 Navegación consistente (AA)** — Los mecanismos de navegación repetidos aparecen en el mismo orden en todas las páginas.
- **3.2.4 Identificación consistente (AA)** — Los componentes con la misma función se identifican de forma consistente en todo el sitio.
- **3.2.6 Ayuda consistente (A)** — Si existe un mecanismo de ayuda, aparece en el mismo lugar relativo en todas las páginas.

### 3.3 Asistencia para la entrada de datos

- **3.3.1 Identificación de errores (A)** — Los errores de un formulario se identifican y describen en texto.
- **3.3.2 Etiquetas o instrucciones (A)** — Los campos de un formulario tienen etiquetas o instrucciones claras.
- **3.3.3 Sugerencia ante errores (AA)** — Cuando se detecta un error, se sugiere cómo corregirlo.
- **3.3.4 Prevención de errores: legal, financiero, datos (AA)** — En transacciones importantes, las acciones se pueden revisar, corregir o revertir antes de confirmar.
- **3.3.7 Entrada redundante (A)** — No se le pide al usuario que reingrese información ya provista en el mismo proceso.
- **3.3.8 Autenticación accesible, mínimo (AA)** — El login no depende exclusivamente de una prueba cognitiva, salvo que haya alternativa.

## 4. Robusto

### 4.1 Compatible

- **4.1.2 Nombre, rol, valor (A)** — Todo componente de interfaz personalizado expone su nombre, rol y estado a las tecnologías de asistencia.
- **4.1.3 Mensajes de estado (AA)** — Los mensajes de estado (errores, confirmaciones) se anuncian a lectores de pantalla sin robar el foco.

---
