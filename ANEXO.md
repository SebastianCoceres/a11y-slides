# ANEXO.md — El árbol de accesibilidad

Material de apoyo para el `GUION.md`. La mayoría de los ejemplos de esa charla se verifican inspeccionando el árbol de accesibilidad en Chrome DevTools — este documento explica qué es y cómo llegar a él, sin repetirlo en cada bloque del guion.

---

## Vocabulario mínimo de la charla

Esta charla asume nociones de frontend pero no de accesibilidad, así que estos términos van a aparecer todo el tiempo. Quedan definidos acá una sola vez para no interrumpir cada ejemplo con la misma explicación.

- **DOM**: el árbol real de nodos que el navegador termina construyendo, más allá de cómo se ve. El CSS (`order`, `position`, `flex-direction`) solo cambia la proyección visual, nunca reordena el DOM — es la misma diferencia que hay entre el orden de un `SELECT` con `ORDER BY` y el orden físico de las filas en disco: cambiar uno no cambia el otro.
- **Árbol de accesibilidad (accessibility tree)**: una proyección paralela del DOM que el navegador expone a los lectores de pantalla y otras tecnologías asistivas. Funciona como una API separada de la visual: cada nodo tiene nombre, rol y valor. Si un control no expone esos tres datos ahí, para esa "API" directamente no existe, aunque se vea perfecto en pantalla.
- **Nombre accesible (accessible name)**: el string que una tecnología asistiva lee para identificar un control. Se calcula con un orden de precedencia fijo (`aria-label` > `aria-labelledby` > texto visible > `title`), parecido a cómo se resuelve la precedencia de configuración en cualquier sistema (variable de entorno > archivo de config > default).
- **Foco (focus)**: el puntero de "dónde estoy parado" cuando se navega sin mouse. En todo momento hay exactamente un elemento con foco; las interfaces rotas son las que lo pierden, lo atrapan sin salida, o lo mueven sin que la persona lo haya pedido.
- **ARIA / `role` / `aria-*`**: un vocabulario de atributos HTML que describe comportamiento y estado para tecnología asistiva ("esto es un botón", "esto está expandido", "esto cambió"). No modifica el comportamiento real del elemento — es metadata para el consumidor, en el mismo sentido que un `Content-Type` o un código de estado HTTP no cambian el payload, solo le dicen al cliente cómo interpretarlo.
- **`aria-live`**: marca una región del DOM cuyos cambios se anuncian automáticamente por voz, sin que la persona tenga el foco puesto ahí — el equivalente a una suscripción o un webhook: el cliente (lector de pantalla) se entera del cambio sin tener que hacer polling.
- **Lector de pantalla (screen reader)**: NVDA, VoiceOver, JAWS. El cliente que consume el árbol de accesibilidad y lo traduce a voz o braille — el "consumidor de la API" mencionada arriba.

---

## Qué es

Cuando el navegador parsea el HTML arma el **DOM**: el árbol de nodos que después se pinta en pantalla. En paralelo, el navegador arma un segundo árbol a partir del mismo HTML (más los estilos computados y los atributos ARIA): el **árbol de accesibilidad**. Ese segundo árbol es lo único que una tecnología asistiva (lector de pantalla, control por voz, magnificador) puede consultar — nunca lee el DOM directamente, ni mucho menos los píxeles renderizados.

Pensalo como una API paralela a la visual: cada nodo del árbol de accesibilidad expone cuatro datos —

- **Name** (nombre accesible): el string que identifica al control. Se calcula con una precedencia fija (`aria-label` > `aria-labelledby` > texto visible / `alt` > `title`).
- **Role**: qué tipo de control es (`button`, `link`, `textbox`, `checkbox`, `heading`...). Puede venir del elemento HTML (`<button>` ya es `role=button` implícito) o forzarse con el atributo `role`.
- **Value / State**: el valor actual o el estado (`checked`, `expanded`, `disabled`, `invalid`...), generalmente vía atributos `aria-*`.
- **Description**: texto adicional opcional (`aria-describedby`), que un lector de pantalla anuncia después del nombre.

Un nodo puede quedar **ignorado** (`ignored: true`) y no aparecer para nada en este árbol — es lo que pasa con `display: none`, `aria-hidden="true"`, o un `<div>` sin ningún rol ni atributo interactivo. Esa es la causa técnica exacta de casi todos los "Qué está mal" del guion: no es que el control se vea distinto, es que no existe en la única estructura que la tecnología asistiva puede leer.

---

## Cómo acceder a él en Chrome DevTools

### 1. Nodo por nodo — panel **Accessibility**

1. Abrí DevTools (`F12` o `Ctrl+Shift+I`) y andá al panel **Elements**.
2. Seleccioná cualquier nodo del DOM (click en el elemento, o inspeccionalo desde la página con el ícono de selector).
3. En el panel lateral derecho, donde están las pestañas **Styles** / **Computed** / **Layout**, buscá la pestaña **Accessibility** (si no aparece, hacé click en el ícono `»` para desplegar pestañas ocultas).
4. Ahí vas a ver:
   - **Computed Properties**: Name, Role, y el resto de las propiedades calculadas para ese nodo puntual.
   - **ARIA Attributes**: los atributos `aria-*` presentes en el elemento.
   - Un mini árbol de contexto que ubica el nodo dentro del árbol de accesibilidad completo (con su padre y sus hijos inmediatos).

Esta es la vista más rápida para el tipo de comparación que usa el guion: seleccionar el mismo control en la versión Bad y en la Good, y mostrar cómo cambia el campo **Name** o aparece/desaparece un **Role**.

### 2. Árbol completo de la página

En la barra superior del panel **Elements** hay un ícono con forma de persona (accessibility tree toggle), al lado del ícono de "inspeccionar elemento" y el de "device toolbar". Al activarlo, el panel Elements deja de mostrar el árbol DOM y muestra el **árbol de accesibilidad completo de la página**, navegable igual que el árbol DOM (con flechas para expandir/colapsar). Sirve para mostrar de un vistazo cuántos nodos quedan afuera del árbol en la versión Bad de un ejemplo, comparado con la versión Good.

### 3. Vista de proceso — `chrome://accessibility/`

Escribiendo `chrome://accessibility/` en la barra de direcciones aparece una página interna de Chrome que lista todas las pestañas abiertas y permite volcar el árbol de accesibilidad completo de cualquiera de ellas en formato texto plano, con más detalle interno del que muestra el panel Elements. Es más para debugging profundo que para una demo en vivo — no hace falta para los ejemplos del guion, pero está bueno mencionarlo como referencia si alguien de la audiencia pregunta "¿y si quiero ver *todo*?".

---

## Qué mirar al auditar un control

Frente a cualquier control sospechoso, la secuencia de chequeo en el panel Accessibility es siempre la misma:

1. **¿Tiene Name?** Si está vacío o es `undefined`, el control es mudo para cualquier tecnología asistiva, aunque tenga texto visible al lado (ejemplo: `errorPrevention`, `altText`, `descriptiveLabels` en el guion).
2. **¿El Role es el esperado?** Un `<div>` con `onClick` que debería ser un botón va a mostrar `role: generic` o directamente no va a aparecer como interactivo (ejemplo: `nameRoleValue`, `inclusiveDesign`).
3. **¿El Name coincide con lo que se ve en pantalla?** Si no coincide, un control por voz que repite el texto visible no encuentra el control (ejemplo: `labelInName`).
4. **¿Está `ignored`?** Y si lo está, ¿por qué — `aria-hidden`, `display: none`, o falta de semántica?
5. **¿Los estados (`aria-invalid`, `aria-checked`, `aria-expanded`) reflejan el estado real del componente?** (ejemplo: `errorPrevention`, `nameRoleValue`).

---

## Para no confundir con otras herramientas de Chrome

- **Lighthouse** (panel propio en DevTools): corre una auditoría automatizada de accesibilidad y da un puntaje con una lista de reglas incumplidas. No muestra el árbol en sí, pero muchas de sus reglas se explican con lo que se ve en el panel Accessibility.
- **Rendering → Emulate vision deficiencies / Emulate CSS media (`prefers-reduced-motion`, etc.)**: no tiene relación con el árbol de accesibilidad — simula percepción visual o preferencias de sistema, no la estructura semántica. Se usa para otro grupo de ejemplos del guion (contraste, daltonismo, movimiento).
- **axe DevTools** (extensión, no nativa de Chrome): motor de reglas WCAG sobre el DOM, mencionado en el cierre del guion (`tools`) como herramienta de CI — complementa al árbol de accesibilidad pero no lo reemplaza como fuente de verdad.

---

## A11y como ventaja para agentes de IA (no solo para personas)

Todo lo de arriba describe el árbol de accesibilidad como una API para tecnología asistida humana. Pero desde 2025/2026 ese mismo árbol tiene un segundo consumidor: los agentes de IA que operan un navegador o una computadora (Claude Computer Use, ChatGPT Atlas/Operator, y los agentes que se evalúan en benchmarks como WebArena o Mind2Web). Vale como argumento extra para el cierre de la charla: invertir en accesibilidad ya no es solo una cuestión de inclusión, también mejora directamente qué tan bien te puede operar un agente de IA.

**Cómo "ven" la página estos agentes.** Los papers que describen la arquitectura de estos agentes coinciden en que leen el árbol de accesibilidad — el mismo que usa un lector de pantalla — en lugar de parsear el DOM completo o interpretar píxeles: exponen name/role/state por nodo y descartan lo que no es interactivo, dándole al modelo un mapa semántico compacto de la página en vez de HTML crudo ([*Fundamentals of Building Autonomous LLM Agents*](https://arxiv.org/html/2510.09244v1); [*Whose Agent Are You?*](https://arxiv.org/pdf/2606.20910), que directamente clasifica una categoría de agentes como "accessibility-tree-based"; [*LUMOS*](https://arxiv.org/pdf/2606.30697)). Es literalmente el mismo mecanismo del panel Accessibility de DevTools que se muestra en este documento — nada más que en vez de un humano con un lector de pantalla, del otro lado hay un modelo con ventana de contexto limitada.

**Fuente primaria, no solo interpretación de terceros.** OpenAI documenta explícitamente que ChatGPT Atlas "uses ARIA tags — the same labels and roles that support screen readers — to interpret page structure and interactive elements" (OpenAI, *Publishers and Developers FAQ*; citado por [Search Engine Journal](https://www.searchenginejournal.com/the-accessibility-tree-is-how-ai-agents-read-your-site-its-breaking/578171/) y confirmado de forma independiente por [Kick Point](https://kickpoint.ca/chatgpt-atlas-browser-aria-tags-guide/)). Es la misma recomendación que el "Name, Role, Value" que ya se explica en este documento — no es una técnica nueva para IA, es accesibilidad bien hecha que un fabricante de agentes adoptó tal cual porque ya le resolvía el problema.

**El estudio con números — y por qué hay que citarlo con cuidado.** Varios blogs de SEO citan un estudio de UC Berkeley/Michigan con una caída de éxito "de 78% a 42%" al degradar el árbol de accesibilidad; rastreado hasta la fuente real, ese framing es incorrecto. El paper real es [*A11y-CUA Dataset: Characterizing the Accessibility Gap in Computer Use Agents*](https://arxiv.org/abs/2602.09310) (Gubbi Mohanbabu, Natalie, Kim, Guo, Pavel). Lo que mide es otra cosa, y es un dato más interesante para esta charla: comparan un agente de IA operando una interfaz normalmente (mouse, 78.3% de tareas exitosas) contra el mismo agente forzado a interactuar en las condiciones que sí usa una persona ciega o con baja visión (solo teclado, o con magnificador) — el éxito cae a 41.67% y 28.3% respectivamente. La conclusión no es "poné ARIA y el agente mejora mágicamente", es que los agentes de hoy están construidos asumiendo la misma interacción que un usuario vidente con mouse, y por eso hoy no pueden colaborar bien con una persona que use tecnología asistida en paralelo — el gap de accesibilidad no desapareció, migró también a la relación humano-agente.

**El contexto que le da peso al argumento.** Según el *WebAIM Million* de febrero 2026, el 95.9% de las un millón de home pages más visitadas tiene al menos un fallo WCAG detectable (subió del 94.8% del año anterior), con un promedio de 56.1 errores por página. En paralelo, Cloudflare Radar midió que en la semana del 30 de mayo al 5 de junio de 2026 el 57.2% de los requests HTTP a contenido HTML eran de bots automatizados — más que el tráfico humano (42.8%). Combinado: la mayoría del tráfico web ya no es gente, y la enorme mayoría de los sitios sigue fallando exactamente la estructura semántica de la que dependen tanto una persona con lector de pantalla como un agente de IA.

Fuentes: [Search Engine Journal — "The Accessibility Tree Is How AI Agents Read Your Site & It's Breaking"](https://www.searchenginejournal.com/the-accessibility-tree-is-how-ai-agents-read-your-site-its-breaking/578171/) · [arXiv 2602.09310 — A11y-CUA Dataset](https://arxiv.org/abs/2602.09310) · [arXiv 2510.09244 — Fundamentals of Building Autonomous LLM Agents](https://arxiv.org/html/2510.09244v1) · [arXiv 2606.20910 — Whose Agent Are You?](https://arxiv.org/pdf/2606.20910) · [arXiv 2606.30697 — LUMOS](https://arxiv.org/pdf/2606.30697) · [Kick Point — How ChatGPT's Atlas Browser Uses ARIA Tags](https://kickpoint.ca/chatgpt-atlas-browser-aria-tags-guide/)
