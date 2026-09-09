# ANEXO.md — El árbol de accesibilidad

Material de apoyo para el `GUION.md`. La mayoría de los ejemplos de esa charla se verifican inspeccionando el árbol de accesibilidad en Chrome DevTools — este documento explica qué es y cómo llegar a él, sin repetirlo en cada bloque del guion.

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
