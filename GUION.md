# Accesibilidad web: de checklist a ventaja operativa

---

## Introducción

<!-- id:title -->

**Título — A11Y**

Esta charla es sobre accesibilidad web: qué es, por qué le importa directamente a un equipo de desarrollo, y cómo agregarlo a un flujo de trabajo.

Mucha de las cosas que voy a hablar por ahi ya lo aplican sin darse cuenta por que asi lo aprendieron, costumbre o sentido común.

No vengo a convertirlos en expertos en accesibilidad — sería mentirles, es un tema enorme. Lo que sí quiero es que se vayan con algo claro: que esto existe, por qué les tiene que importar, y con qué herramientas concretas lo pueden arrancar a aplicar mañana mismo.

> Antes de seguir, aclaremos qué es esa sigla que acabo de tirar arriba del slide.

<!-- id:premise -->

**Premisa — ¿Qué es A11Y?**

A11Y es un numerónimo — abreviatura de "Accessibility" que ya es una convención en el mundo.

Es pensar e implementar nuestro software más allá de las formas básicas de interacción

es una propiedad de calidad del software, medible y testeable, igual que la performance o la seguridad

> Y si es una propiedad de calidad, tiene que haber una forma de medirla. Y la hay, hace más de treinta años.

<!-- id:wcagStandard -->

**Estándar global — WCAG 2.2**

El W3C publica las Web Content Accessibility Guidelines(WACG) desde 1994, y ya vamos por la versión 2.2, del 2023. Son criterios puntuales, verificables uno por uno, agrupados en tres niveles: A es el mínimo, AA es lo que te exigen normativas como la de la Unión Europea, y AAA es el ideal, que casi nunca es realista alcanzar.

Por dar un ejemplo: la interpretación en lengua de señas para todo contenido de video. Está buenísimo, pero pedirle eso a una empresa que ni siquiera tiene recursos o obligacion legal no es realista.

Esta charla se queda con los criterios de A y AA, que son los que de verdad entran en la conversación del día a día.

> Antes de meternos en cómo se agrupan esos criterios, veamos por qué vale la pena invertir en esto.

<!-- id:accessBenefits -->

**Beneficios — El efecto rampa de acceso**

- La rampa en la vereda se construyó pensando en sillas de ruedas. Hoy la usan carritos de bebé, repartidores, ciclistas — todo el mundo.
- Los subtítulos se pensaron para sordera, hoy los pone cualquiera que mira un video y no es hablante nativo del idioma.
- El control por voz se pensó para baja movilidad, y hoy su teconología lo usa cualquiera dando instrucciones a dispositivos inteligentes.

Ese es el efecto rampa de acceso: algo pensado para un caso puntual termina beneficiando a la base de usuarios completa.

> Y ahí está lo interesante: Pueden aparecer situaciones concretas que cualquiera de nosotros puede atravesar.

<!-- id:situations -->

**Situaciones — ¿Por qué nos interesa aplicarla?**

Lo que ven en esta lista no son casos raros. Son cosas que le pueden pasar a cualquiera

- El sol pegando en la pantalla -> buen contraste de colores
- Guantes de trabajo que dificultan interactuar con una pantalla táctil -> secciones grandes y espaciadas
- Unas gafas rotas -> Texto grande y adaptable
- Sostener en brazos a un bebé (aunque los compañeros no estén presentes) -> control por voz, navegación por teclado
- Envejecer -> todo lo anterior sigue sirviendo

si se dan cuenta ninguna de estas situaciones es una discapacidad permanente. Los criterios son para cualquier situación que dificulte el uso de un producto

> si tenemos eso en cuenta se vuelve una ventaja operativa para todos.

<!-- id:businessImpact -->

**Impacto en el negocio — Lo que nos ahorramos como equipo**

Para desarrollo, resolverlo desde el diseño sale mucho más barato que parchearlo luego.

Para quien se suma al equipo, muchos principios de accesibilidad coinciden con principios de buen diseño de software

Para el negocio, el mercado se agranda — hay organismos públicos y clientes grandes que ya piden cumplimiento como cláusula de contrato

Baja el riesgo de demandas y bloqueos normativos.

Para soporte, significan menos problemas.

Para el usuario final, significa menos frustración y más confianza en el producto.

> ojo implementarlo nos da beneficios, ignorarlo tiene un costo

<!-- id:earlyVsLegacy -->

**Momento de implementación — Temprano vs. último momento**

> y el costo va aumentando cuanto más tarde se implemente

La dificultad de aplicarlo no son los mismos si arrancan desde el inicio del proyecto o si lo meten en un sistema que ya tiene usuarios reales.

Arrancar temprano es barato. El costo se diluye entre tareas y se normaliza el patrón accesible desde el inicio.

Dejarlo para último momento cambia la ecuación. Los cambios hay que auditarlos con más cuidado, cada cambio es candidato a romper algo — sobre todo si no hay tests que lo cubran.

Ojo con la conclusión que no quiero que saquen: esto no es un "en proyectos activos ya no se puede". Solo que será más lento y no se resuelve de una. Termina siendo una cuestión de tiempo y recursos que se le quiera dedicar.

> Ahora sí, veamos en qué se apoya todo esto que estoy hablando.

<!-- id:principlesIntro -->

**Los cuatro principios — POUR**

Las WCAG se agrupan en cuatro principios, conocidos por su acrónimo en inglés, POUR — Perceptible, Operable, Comprensible y Robusto.

Lo ejemplos que he mencionado antes entran en una de estas cuatro categorías.

> Empecemos por el primero: qué significa que algo sea perceptible.

<!-- id:principlePerceptible -->

**Perceptible**

La información tiene que llegar al usuario de alguna manera, aunque no pueda verla, escucharla o distinguirla bien.

Por ejemplo, imaginense un formulario que marca los campos con error poniéndolos únicamente en rojo. Si estás mirando la pantalla, lo entendés. Pero si usás un lector de pantalla, tenés daltonismo o simplemente hay poco contraste, ese error puede pasar completamente desapercibido.

La idea es simple: si algo es importante para entender qué está pasando en la interfaz, no debería depender de un único sentido.

> El segundo principio ya no es sobre qué percibís, sino sobre qué podés hacer con eso.

<!-- id:principleOperable -->

**Operable**

Los controles tienen que poder usarse sin depender de una única forma de interacción.

Por ejemplo, imaginá una tienda online donde para abrir el menú tenés que pasar el mouse por encima de una categoría. Con mouse funciona perfecto, pero si navegás con el teclado usando Tab, nunca podés abrir ese menú. Lo mismo si un botón solo responde a un gesto de deslizar o si una acción desaparece antes de que tengas tiempo de ejecutarla.

no alcanza con que un control exista; también tiene que ser posible llegar a él y usarlo con distintos medios de entrada, como mouse, teclado, táctil o tecnologías de asistencia.

> Bien: ya lo percibís, ya lo podés operar. Falta que lo puedas entender.

<!-- id:principleComprehensible -->

**Comprensible**

La interfaz tiene que ser fácil de entender y, sobre todo, comportarse como el usuario espera.

- Un formulario que no explica qué falló.
- Una acción que cambia de lugar entre pantallas.
- Un ícono que en una pantalla hace una cosa y en otra hace otra.

Los tres rompen el modelo mental que la persona ya se había armado del producto, y la obligan a reaprenderlo.

> El último principio ya no depende de la persona, sino de con qué está usando el producto.

<!-- id:principleRobust -->

**Robusto**

Un componente puede verse perfecto en pantalla y, aun así, no existir para la única API que realmente importa acá: el _árbol de accesibilidad_.

Un `<div>` armado a mano para comportarse como un `<select>` puede funcionar perfecto y aun así no existir en ese árbol.

Ahí pierde cualquier medio que dependa de esa misma estructura para operar la página.

El contenido debe ser lo suficientemente fiable como para ser interpretado de forma correcta por una amplia variedad de dispositivos y tecnologías de asistencia.

> Bien, ya conocemos los cuatro principios.
> ¿Como se implementa todo esto en el día a día?

---

## Herramientas

<!-- id:toolsDevTools -->

**DevTools del navegador**

Lo más básico ya lo tenés instalado, sin agregar nada. y como se hacia historicamente. Las devtools del navegador.

Si a cualquier elemento de una pagina le damos click derecho → "Inspeccionar", se abre el inspector de Elements. Ahí podemos ver el DOM, los estilos aplicados, y demás.

Veamos primero el panel accesibilidad: se encuentra en el panel de estilos (si no figura fijense en las flechitas). Seleccionen cualquier nodo y ahí abajo aparece exactamente lo que expone al árbol de accesibilidad — nombre computado, rol, descripción, y resto de propiedades que tenga.

Esto es lo mismo que ve un lector de pantalla.

Al lado del árbol de Elements hay un ícono para togglear "Show accessibility tree". veremos que el DOM entero desaparece y en su lugar aparece el árbol de accesibilidad completo de la página. (Mas adelante les voy a mostrar por qué esto es importante.)

En el panel Styles, cualquier valor de color que toques abre el selector — y ese selector ya te calcula el ratio de contraste en tiempo real.

Ahora uno menos conocido: `Ctrl+Shift+P`, buscá "Rendering". Este panel nos ofrece una serie de herramientas de emulación.
Veamos por ejemplo "emualdor de vision", un dropdown para simularcómo la ve alguien con distintos tipos de deficiencia visual.

Tambien está "prefers-reduced-motion" — simulamos que el sistema operativo pidió movimiento reducido y ves si tus animaciones efectivamente lo respetan.

Y último: si necesitás revisar cómo se ve el estado de foco de un elemento, click derecho sobre el elemento → "Force state" → `:focus-visible`. si no se marca visualmente no detectamos que el foco está ahí.

> Con eso ya podés inspeccionar a mano. El paso que sigue es automatizar esa inspección.

<!-- id:toolsLighthouse -->

**Lighthouse y PageSpeed Insights**

Lighthouse te audita accesibilidad y otras cosas con un puntaje de 0 a 100

PageSpeed Insights es el hermano: internamente corre el mismo motor, pero como servicio web de Google.

> Lighthouse te da un puntaje general. Pero para accesibilidad específicamente, hay motores dedicados.

<!-- id:toolsA11yEngines -->

**Accessibility Insights y axe-core**

Accessibility Insights for Web, de Microsoft, es una extensión con dos modos. FastPass te corre un chequeo automático en segundos. Assessment te guía paso a paso por los criterios que solo se pueden verificar a mano, como el orden del foco.

axe-core, de Deque, ni siquiera tiene interfaz propia: es el motor de reglas WCAG que corre por debajo de Lighthouse, de esta misma extensión, y de las herramientas de testing que vienen ahora.

> El motor es siempre el mismo; lo que cambia es dónde lo hacés correr. Y metido en el pipeline de tests es donde deja de depender de que alguien se acuerde de auditar.

<!-- id:toolsTesting -->

**Playwright**

Playwright es un runner end-to-end. Con @axe-core/playwright, cada test que ya estás corriendo para validar funcionalidad, de yapa corre las reglas de axe sobre toda la página.

<!-- nota: si preguntan por Cypress, existe el mismo enfoque con cypress-axe — no forma parte del guion principal -->

> Con las herramientas ya elegidas, hay un motivo más para tomarse en serio todo esto — uno que no tiene que ver con las personas que usan el producto.

<!-- id:secondAudience -->

**Una segunda audiencia**

Todo lo que vimos hasta acá ya justificaba invertir en accesibilidad por las personas. Pero hoy hay un argumento más: la mayoría del tráfico que llega a un sitio ya no es humano.

Más del 57% de los requests a contenido HTML en 2026 son de agentes automatizados, según Cloudflare. Y esos agentes leen exactamente la misma estructura semántica — el mismo árbol de accesibilidad — que un lector de pantalla.

Mientras tanto, el 95.9% de los sitios más visitados todavía falla al menos un criterio de WCAG, según WebAIM.

Y esto no es teórico: OpenAI probó navegar así, leyendo ese árbol de accesibilidad, en su navegador Atlas. Atlas como producto ya no existe, pero esa forma de navegar se mudó directo a ChatGPT — que en poco más de un año pasó de 400 a 1.000 millones de usuarios semanales.

La misma inversión que hacemos por una persona ciega o con baja visión, hoy también la aprovecha una máquina que opera el sitio a esa escala.

> Vale la pena entender por qué pasa esto exactamente — no es magia, es el mismo mecanismo técnico del que veníamos hablando toda la charla.

<!-- id:secondAudienceMechanism -->

**La misma API, un cliente más**

Estos agentes no leen píxeles ni el HTML entero de la página. Leen el mismo árbol de accesibilidad del que hablamos al principio — nombre, rol y valor de cada nodo. Es la misma API paralela al DOM que usa un lector de pantalla, solo que ahora hay un cliente más del otro lado.

Playwright MCP, el servidor oficial de Microsoft para controlar un navegador desde un agente, devuelve justamente eso: ese árbol, en vez de la página completa. Y esto no es un detalle menor de implementación — un snapshot de accesibilidad pesa entre 200 y 400 tokens, contra cientos de miles si el agente tuviera que masticar el HTML crudo de una página real. La misma estructura que le evita a un lector de pantalla procesar la página entera es, ahora, también la razón por la que un agente la procesa más rápido y más barato.

> Y esa misma arquitectura corre en las dos direcciones. Si un agente puede leer tu sitio por este árbol, hoy buena parte del código de ese sitio también lo está escribiendo un agente. Y la pregunta que sigue es incómoda: ¿qué tan accesible es lo que escribe, si nadie se lo pide explícitamente?

<!-- id:secondAudienceLlmEval -->

**Evidencia — La IA no genera accesibilidad por defecto**

Microsoft midió exactamente esa pregunta, y lo hizo en serio: ocho modelos — de OpenAI, Anthropic y Google — generando interfaces reales para treinta y dos casos de prueba distintos, cinco muestras por caso. El código resultante se renderizó en un navegador de verdad y se auditó con axe-core más una batería de chequeos propios sobre WCAG 2.2.

El resultado, sin ninguna instrucción sobre accesibilidad en el prompt: 12% de aprobación general. El mejor modelo individual llegó a 25%. En el peor caso puntual — una home de e-commerce en React, con tema oscuro — ningún modelo aprobó ni un solo chequeo: 0%, con un promedio de más de quince fallas de WCAG por muestra.

Ahora la buena noticia. Alcanzó con agregar una instrucción básica al prompt — un simple recordatorio de que el resultado tiene que ser accesible — para que ese 12% saltara a 60%. Y cuando el agente, además de generar, corría sus propios tests de accesibilidad y se corregía antes de responder, el promedio subió a 86%, con el mejor caso individual rozando el 100%.

La lectura es directa: generar código no es lo mismo que generar código accesible, y esa diferencia no la cierra el modelo solo. La cierra la instrucción explícita y, sobre todo, el testeo automatizado antes de dar la tarea por terminada.

> La brecha entre generar y generar accesible no se cierra sola — se cierra con el mismo tipo de herramientas que ya existen para cualquier otro testing. Y la buena noticia es que ya están armadas.

<!-- id:secondAudienceTools -->

**Ya existen las herramientas**

Esto es, literalmente, lo que mide el estudio que acabamos de ver: la variante con mejores resultados era una skill que corría tests de accesibilidad y corregía antes de responder — la misma categoría de herramienta que ya está disponible hoy, no un experimento de laboratorio.

Claude Code, el agente con el que armé esta charla, tiene acceso a una skill que se llama "accessibility": instrucciones especializadas en WCAG 2.2 que se activan apenas le pedís una auditoría o que "haga accesible" algo. Y esto no es exclusivo de Claude — empaquetar instrucciones especializadas que un agente activa según el contexto es una idea que ya está en varias plataformas de IA, no un truco de una sola marca.

Pero esta es solo una pieza del rompecabezas.

Deque, la misma empresa detrás de axe-core que vimos en la sección de herramientas, empaquetó ese motor como MCP oficial: analiza una página y te devuelve el fix de código, listo para revisar, aplicar o rechazar, sin salir del editor. Funciona con Claude Code, GitHub Copilot, Cursor y Windsurf.

Sumale Chrome DevTools MCP o Playwright MCP, que le dan al agente una sesión de navegador de verdad para leer el árbol de accesibilidad en vivo y agarrar fallas de teclado que un análisis estático se pierde.

Y también están los MCP de documentación, que le acercan al agente la versión vigente de un criterio WCAG o de una librería justo cuando la necesita, en vez de confiar en lo que memorizó durante el entrenamiento.

> Pero ojo: ninguna de estas herramientas es la ventaja real. La ventaja real es otra cosa.

<!-- id:secondAudienceCodeProximity -->

**La ventaja de estar cerca del código**

Lighthouse, axe-core o Accessibility Insights te reportan el síntoma en la página ya renderizada: "este botón no tiene nombre accesible". Pero no saben si ese botón vive en un componente que se repite cuarenta veces, o si es un caso único — porque no tienen forma de ver el código, solo el resultado final.

Un agente con acceso al repositorio ve el mismo síntoma, pero además ve el componente fuente, cuántas páginas lo importan, y si ese mismo problema ya se arregló en otro lugar del código. Puede proponer el fix una sola vez, en la fuente — no una vez por página, ni una vez por componente repetido.

> Todo esto ya es real, hoy. Pero vale la pena mirar un paso más allá: hacia dónde va este mecanismo.

<!-- id:secondAudienceWebmcp -->

**WebMCP — lo que viene**

Enero de 2025: nace MCP-B. Agosto: Google y Microsoft publican una propuesta unificada. Septiembre: el W3C la acepta como Community Group. Febrero de 2026: se publica el spec formal.

Hoy corre en origin trial en Chrome y Edge — ni Firefox ni Safari la implementan todavía. Es nuevo de verdad, no una curiosidad de hace años.

La idea es que un sitio declare funciones que un agente puede invocar directamente, con una API imperativa bastante simple: `document.modelContext.registerTool()`, con un nombre, una descripción, y una función que se ejecuta del lado del cliente. En vez de que el agente adivine cómo completar un formulario haciendo clicks, el sitio le dice exactamente qué puede hacer.

También hay una forma declarativa, sin JavaScript: agregarle a un `<form>` los atributos `toolname` y `tooldescription`, y a cada input un `toolparamdescription`. Y acá está el chiste: reutiliza atributos que un formulario accesible ya debería tener — `name`, `required` — no son atributos nuevos para IA, son los mismos que ya le hacen falta a un lector de pantalla. Un formulario bien hecho ya está a mitad de camino de ser WebMCP-ready.

> Y acá está el dato que realmente importa: qué dice el propio estándar sobre el árbol de accesibilidad.

<!-- id:secondAudienceWebmcpFallback -->

**Ni lo más nuevo se anima a dejarlo**

El propio documento del spec lo aclara sin vueltas: WebMCP no está pensado para interactuar con el árbol de accesibilidad. Como dice el spec, traducido: "WebMCP en sí no está pensado para que lo consuma tecnología asistiva, ni para interactuar directamente con el árbol de accesibilidad de una página."

Pero después agrega la frase que realmente importa para esta charla: cuando un agente no encuentra un tool declarado para lo que necesita hacer, "puede caer de vuelta a la automatización de navegador de propósito general" — vuelve exactamente al mismo mecanismo que ya vimos, el que lee el árbol de accesibilidad.

Ni el estándar diseñado específicamente para agentes de IA se anima a dejarlo de lado.

---

## Más allá de lo básico

<!-- id:advancedPrinciplesIntro -->

**Más allá de lo básico**

Estos conceptos no corresponden a ningún criterio WCAG numerado, pero explican por qué una interfaz que aprueba todo en el papel puede seguir siendo un dolor de cabeza en la práctica.

> Ahora, un giro: qué pasa incluso cuando una interfaz cumple con todo lo que vimos hasta acá — empezando por cuánto tiene que recordar la persona que la usa.

<!-- id:cognitiveLoad -->

**Carga cognitiva**

Es la cantidad de información que alguien tiene que recordar y procesar para completar una tarea. Un formulario largo en una sola pantalla te obliga a tener en la cabeza qué falta completar, qué es obligatorio, qué errores hay que corregir — toda esa carga cae sobre quien lo completa, no sobre la interfaz.

Piensen en un checkout de e-commerce con quince campos en una sola pantalla, contra ese mismo checkout partido en "envío", "pago" y "confirmación": el total de datos pedidos es idéntico, pero en el segundo caso nunca tenés que sostener en la cabeza más de lo que estás viendo ahora mismo. Dividir un proceso largo en pasos no le saca ni un campo al formulario: lo único que cambia es cuánto tenés que sostener en la cabeza en cada momento.

> Reducir lo que hay que recordar en un momento dado es una forma de carga. Otra es cuánto cuesta repetir la misma tarea muchas veces.

<!-- id:interactionFatigue -->

**Fatiga por interacción**

Cada interacción tiene un costo. Una tarea con varios pasos repetitivos se banca perfecto la primera vez, pero se convierte en carga operativa real cuando alguien la repite decenas de veces por día — el problema no es que cada paso sea difícil, es el desgaste acumulado.

Confirmar una acción con dos clicks en vez de uno no se nota la primera vez que la hacés. Se nota cuando alguien la repite cuarenta veces en un turno de soporte. Ese costo es invisible en una demo, porque nadie hace clic cien veces seguidas frente a un cliente. Aparece recién cuando medís el trabajo real de quien usa el producto todos los días, no la primera vez que alguien lo prueba.

> Carga cognitiva, fatiga por interacción — las dos apuntan a la misma idea de fondo, que cierra este bloque.

<!-- id:inclusiveDesign -->

**Diseño inclusivo**

Nadie usa un producto para aprender cómo funciona: lo usa para completar una tarea. Diseñar pensando en condiciones reales — interrupciones, presión de tiempo, cansancio — evita trasladarle a esa persona una complejidad que el software debería absorber.

Es la misma idea que atraviesa toda la charla, solo que acá no hay ningún criterio WCAG que la mida: un producto puede aprobar cualquier auditoría automática y, aun así, seguir haciendo trabajar de más a quien lo usa todos los días.

> Y con esto llegamos al final del recorrido. Cierro con una idea.

---

## Cierre

<!-- id:closing -->

**Cierre**

Volvamos al principio. A11Y no es un público aparte ni una casilla más para tildar antes de un release: es una propiedad de calidad, como la performance o la seguridad — y como toda propiedad de calidad, se nota más por su ausencia que por su presencia.

El efecto rampa de acceso sigue siendo la mejor razón para arrancar: lo que hoy construyen pensando en un caso puntual, mañana lo va a usar toda su base de usuarios — humana, y cada vez más, también de software. Arrancar temprano sale más barato que parchear un legacy después, pero ninguna de las dos cosas es una excusa para no arrancar.

No se vayan de acá con la obligación de saberse todos los criterios de memoria. Váyanse con una sola acción concreta: la próxima vez que toquen una pantalla, abran las DevTools, prendan el panel de Accessibility, y miren qué queda afuera del árbol. Esa costumbre, sola, ya los pone adelante de la mayoría.

Gracias.
