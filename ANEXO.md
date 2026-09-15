# ANEXO.md — Profundidad técnica y fuentes

Material de apoyo para `GUION.md`: profundidad técnica que no cabe en el guion hablado, y las fuentes detrás de las afirmaciones con cifras — para preguntas de la audiencia, o para repasar antes de la charla.

---

## Vocabulario mínimo de la charla

Esta charla asume nociones de frontend pero no de accesibilidad, así que estos términos van a aparecer todo el tiempo. Quedan definidos acá una sola vez para no interrumpir cada ejemplo con la misma explicación.

- **DOM**: el árbol real de nodos que el navegador termina construyendo, más allá de cómo se ve. El CSS (`order`, `position`, `flex-direction`) solo cambia la proyección visual, nunca reordena el DOM — es la misma diferencia que hay entre el orden de un `SELECT` con `ORDER BY` y el orden físico de las filas en disco: cambiar uno no cambia el otro.
- **Árbol de accesibilidad (accessibility tree)**: una proyección paralela del DOM que el navegador expone a los lectores de pantalla y otras tecnologías asistivas. Funciona como una API separada de la visual: cada nodo tiene nombre, rol y valor. Si un control no expone esos tres datos ahí, para esa "API" directamente no existe, aunque se vea perfecto en pantalla.
- **Nombre accesible (accessible name)**: el string que una tecnología asistiva lee para identificar un control. Se calcula con un orden de precedencia fijo (`aria-label` > `aria-labelledby` > texto visible > `title`), parecido a cómo se resuelve la precedencia de configuración en cualquier sistema (variable de entorno > archivo de config > default).
- **Foco (focus)**: el puntero de "dónde estoy parado" cuando se navega sin mouse. En todo momento hay exactamente un elemento con foco; las interfaces rotas son las que lo pierden, lo atrapan sin salida, o lo mueven sin que la persona lo haya pedido.
- **ARIA / `role` / `aria-*`**: un vocabulario de atributos HTML que describe comportamiento y estado para tecnología asistiva ("esto es un botón", "esto está expandido", "esto cambió"). No modifica el comportamiento real del elemento — es metadata para el consumidor, en el mismo sentido que un `Content-Type` o un código de estado HTTP no cambian el payload, solo le dicen al cliente cómo interpretarlo.
- **Lector de pantalla (screen reader)**: NVDA, VoiceOver, JAWS. El cliente que consume el árbol de accesibilidad y lo traduce a voz o braille — el "consumidor de la API" mencionada arriba.
- **`chrome://accessibility/`**: página interna de Chrome que lista todas las pestañas abiertas y permite volcar el árbol de accesibilidad completo de cualquiera en texto plano, con más detalle que el panel Accessibility de DevTools. No hace falta para la demo en vivo, pero sirve como respuesta si alguien de la audiencia pregunta "¿y si quiero ver *todo*?".

---

## axe-core: qué se le escapa (y cómo "engañarlo")

<!-- id:toolsA11yEngines -->

Esto no es un defecto de Lighthouse en particular — es una característica del motor que corre por debajo, axe-core, y por lo tanto aplica igual a cualquier herramienta que lo use: axe DevTools, Accessibility Insights, `@axe-core/playwright`, `cypress-axe`, `vitest-axe`, todas comparten el mismo motor y las mismas reglas. axe-core está diseñado para no dar **falsos positivos** — si marca algo, ese algo está objetivamente mal. El problema real no es ese: son los **falsos negativos**, todo lo que pasa el chequeo automático sin estar realmente accesible.

**Cuánto cubre en serio.** Deque (los autores de axe-core) declaran hasta un 57% de los criterios WCAG detectables de forma automática; otras mediciones independientes lo ubican más cerca del 20-40%. En cualquier caso, un 100 en cualquier herramienta que corra axe-core por debajo — Lighthouse incluido — certifica como mucho ese subconjunto; el resto exige revisión manual: navegar con teclado, probar con un lector de pantalla real.

**Formas concretas de "pasar" el chequeo sin estar accesible** (todas documentadas, no hipotéticas):

- `alt="imagen"`, `alt="icono"`, `alt="decorative image"`: satisface la regla "image elements have [alt]" sin decir nada útil — la herramienta valida que el atributo exista, no que el texto tenga sentido.
- `aria-label="nav"`, `aria-label="section 1"`: mismo problema con ARIA — pasa la validación estructural sin darle a quien escucha ningún dato real.
- Texto de link genérico ("Leer más", "Click acá", "Ver todo"): pasa cualquier auditoría automática, pero es inútil para alguien que navega saltando de link en link con un lector de pantalla, sin el contexto visual alrededor.
- Un toggle con la etiqueta desactualizada: un botón "Cambiar a modo oscuro" que sigue diciendo lo mismo después de activar el modo oscuro — Lighthouse audita un snapshot estático, no vuelve a evaluar el estado después de interactuar.
- Foco en modales: nada en la auditoría detecta si el foco realmente entra al modal, si queda atrapado ahí, o si vuelve al disparador al cerrarlo — eso exige interactuar de verdad con teclado, y un scanner estático no hace clicks ni aprieta teclas.
- Contraste sobre imagen, gradiente, o solo en estados `:hover`/`:focus`: el chequeo de contraste solo evalúa texto sobre un color de fondo plano detectable en el DOM al momento del snapshot.

Ninguno de estos "trucos" suele ser deliberado — el patrón típico es un equipo bajo presión de sprint que agrega el atributo mínimo que hace callar al linter, sin resolver el problema de fondo. Es la ley de Goodhart aplicada a accesibilidad: en cuanto una medida se vuelve el objetivo, deja de ser una buena medida.

Fuentes: [dev.to — Your accessibility score is lying to you](https://dev.to/chris_devto/your-accessibility-score-is-lying-to-you-5fh2) · [David Mello — Playwright Accessibility Testing: What axe and Lighthouse Miss](https://www.davidmello.com/software-testing/test-automation/playwright-accessibility-testing-axe-lighthouse-limitations) · [Accessibility Insights for Web — Microsoft](https://accessibilityinsights.io/docs/web/overview/)

---

## A11y como ventaja para agentes de IA (no solo para personas)

<!-- id:secondAudienceMechanism -->

Todo lo de arriba describe el árbol de accesibilidad como una API para tecnología asistida humana. Pero desde 2025/2026 ese mismo árbol tiene un segundo consumidor: los agentes de IA que operan un navegador o una computadora (Claude Computer Use, ChatGPT Atlas/Operator, y los agentes que se evalúan en benchmarks como WebArena o Mind2Web). El guion ya hace este argumento en vivo — este anexo trae la profundidad y las fuentes detrás de esas cifras, por si la audiencia pregunta de dónde salen.

**Cómo "ven" la página estos agentes.** Los papers que describen la arquitectura de estos agentes coinciden en que leen el árbol de accesibilidad — el mismo que usa un lector de pantalla — en lugar de parsear el DOM completo o interpretar píxeles: exponen name/role/state por nodo y descartan lo que no es interactivo, dándole al modelo un mapa semántico compacto de la página en vez de HTML crudo ([*Fundamentals of Building Autonomous LLM Agents*](https://arxiv.org/html/2510.09244v1); [*Whose Agent Are You?*](https://arxiv.org/pdf/2606.20910), que directamente clasifica una categoría de agentes como "accessibility-tree-based"; [*LUMOS*](https://arxiv.org/pdf/2606.30697)). Es literalmente el mismo mecanismo del panel Accessibility de DevTools — nada más que en vez de un humano con un lector de pantalla, del otro lado hay un modelo con ventana de contexto limitada.

**Fuente primaria, no solo interpretación de terceros.** OpenAI documenta explícitamente que ChatGPT Atlas "uses ARIA tags — the same labels and roles that support screen readers — to interpret page structure and interactive elements" (OpenAI, *Publishers and Developers FAQ*; citado por [Search Engine Journal](https://www.searchenginejournal.com/the-accessibility-tree-is-how-ai-agents-read-your-site-its-breaking/578171/) y confirmado de forma independiente por [Kick Point](https://kickpoint.ca/chatgpt-atlas-browser-aria-tags-guide/)). Es la misma recomendación que el "Name, Role, Value" que ya se explica en este documento — no es una técnica nueva para IA, es accesibilidad bien hecha que un fabricante de agentes adoptó tal cual porque ya le resolvía el problema.

**El estudio con números — y por qué hay que citarlo con cuidado.** Varios blogs de SEO citan un estudio de UC Berkeley/Michigan con una caída de éxito "de 78% a 42%" al degradar el árbol de accesibilidad; rastreado hasta la fuente real, ese framing es incorrecto. El paper real es [*A11y-CUA Dataset: Characterizing the Accessibility Gap in Computer Use Agents*](https://arxiv.org/abs/2602.09310) (Gubbi Mohanbabu, Natalie, Kim, Guo, Pavel). Lo que mide es otra cosa, y es un dato más interesante para esta charla: comparan un agente de IA operando una interfaz normalmente (mouse, 78.3% de tareas exitosas) contra el mismo agente forzado a interactuar en las condiciones que sí usa una persona ciega o con baja visión (solo teclado, o con magnificador) — el éxito cae a 41.67% y 28.3% respectivamente. La conclusión no es "poné ARIA y el agente mejora mágicamente", es que los agentes de hoy están construidos asumiendo la misma interacción que un usuario vidente con mouse, y por eso hoy no pueden colaborar bien con una persona que use tecnología asistida en paralelo — el gap de accesibilidad no desapareció, migró también a la relación humano-agente. Este dato no está en el guion (se descartó por ser menos directo que las cifras de tráfico), pero queda acá como respaldo si alguien pregunta por evidencia académica.

**El contexto que le da peso al argumento.** Según el *WebAIM Million* de febrero 2026, el 95.9% de las un millón de home pages más visitadas tiene al menos un fallo WCAG detectable (subió del 94.8% del año anterior), con un promedio de 56.1 errores por página. En paralelo, Cloudflare Radar midió que en la semana del 30 de mayo al 5 de junio de 2026 el 57.2% de los requests HTTP a contenido HTML eran de bots automatizados — más que el tráfico humano (42.8%). El guion ya cita el 57% y el 95.9% en general; acá quedan la fecha exacta de la medición y el promedio de errores por página, por si hace falta precisión.

Fuentes: [Search Engine Journal — "The Accessibility Tree Is How AI Agents Read Your Site & It's Breaking"](https://www.searchenginejournal.com/the-accessibility-tree-is-how-ai-agents-read-your-site-its-breaking/578171/) · [arXiv 2602.09310 — A11y-CUA Dataset](https://arxiv.org/abs/2602.09310) · [arXiv 2510.09244 — Fundamentals of Building Autonomous LLM Agents](https://arxiv.org/html/2510.09244v1) · [arXiv 2606.20910 — Whose Agent Are You?](https://arxiv.org/pdf/2606.20910) · [arXiv 2606.30697 — LUMOS](https://arxiv.org/pdf/2606.30697) · [Kick Point — How ChatGPT's Atlas Browser Uses ARIA Tags](https://kickpoint.ca/chatgpt-atlas-browser-aria-tags-guide/)
