# Accesibilidad web: de checklist a ventaja operativa

---

## Introducción

<!-- id:title -->

**Título — A11Y**

Esta charla es sobre accesibilidad web: qué es, por qué le importa directamente a un equipo de producto, y cómo meterla en el flujo de trabajo sin agregar un proceso nuevo.

No vengo a convertirlos en expertos en accesibilidad en los próximos minutos — sería mentirles, el tema es una banda. Lo que sí quiero es que se vayan con la posta de que esto existe, por qué les tiene que importar, y con qué herramientas concretas lo pueden arrancar a aplicar mañana mismo.

> Antes de seguir, aclaremos qué es esa sigla que acabo de tirar arriba del slide.

<!-- id:premise -->

**Premisa — ¿Qué es A11Y?**

A11Y es un numerónimo: A, once letras en el medio, Y — "Accessibility". Y accesibilidad, en criollo, es que el producto funcione para cualquier persona, en cualquier condición.

No es un público aparte al que hay que atender: es una propiedad de calidad del software, como la performance o la seguridad.

> Y si es una propiedad de calidad, tiene que haber una forma de medirla. Y la hay, hace más de treinta años.

<!-- id:wcagStandard -->

**Estándar global — WCAG 2.2**

El W3C publica las WCAG — las Web Content Accessibility Guidelines — desde 1994, y ya vamos por la versión 2.2, del 2023. Son criterios puntuales, verificables uno por uno, agrupados en tres niveles: A es el mínimo, AA es lo que te exigen normativas como la de la Unión Europea, y AAA es el ideal — que casi nunca es realista alcanzar.

Esta charla se queda con los 55 criterios de A y AA.

> Antes de meternos en cómo se agrupan esos criterios, veamos por qué vale la pena invertir en esto.

<!-- id:accessBenefits -->

**Beneficios — El efecto rampa de acceso**

La rampa en la vereda se construyó pensando en sillas de ruedas. Hoy la usan carritos de bebé, repartidores, ciclistas — todo el mundo.

Ese es el efecto rampa de acceso: algo pensado para un caso puntual termina beneficiando a la base de usuarios completa.

> Y ese efecto no es abstracto ni lejano: pasa todos los días, en situaciones bien concretas que cualquiera del equipo puede atravesar.

<!-- id:situations -->

**Situaciones — ¿Por qué nos interesa aplicarla?**

Lo que ven en esta lista no son casos raros: son cosas que le pasan a cualquiera de nosotros en un día normal de trabajo — el sol pegándole a la pantalla, una conexión que anda lenta, una lesión temporal, cansancio visual a la tarde. Accesibilidad es diseñar asumiendo que esa variedad es la norma, no la excepción.

> Y si esto es la norma y no la excepción, ignorarlo tiene un costo — uno que se puede medir en números concretos para el negocio.

<!-- id:businessImpact -->

**Impacto en el negocio — Lo que nos ahorramos como equipo**

Esto no es solo para quien usa el producto — le sirve a todo el equipo.

Resolverlo desde el diseño sale mucho más barato que parchearlo después. Un código consistente hace que alguien nuevo se sume más rápido. El mercado al que le podés vender se agranda. Baja el riesgo legal y normativo. Y bajan los tickets de soporte por problemas que, en el papel, eran "simples".

> Ya vimos por qué conviene invertir. Ahora veamos en qué se apoya esa inversión: los cuatro principios en los que se agrupan los criterios de WCAG.

<!-- id:principlePerceptible -->

**Perceptible**

La información y los componentes de la interfaz tienen que poder percibirse — no importa qué sentido tengas disponible en ese momento. Y esto no es "que se vea lindo": es que el dato te llegue por al menos una vía — vista, oído, o tacto a través de un lector de pantalla — sin depender de una sola.

Un estado que existe solo en un color. Un aviso que solo suena. Un texto que vive solo adentro de una imagen. Los tres rompen este principio, y ni siquiera hace falta una discapacidad permanente para que te afecte: alcanza con estar al sol, tener el sonido apagado, o que la imagen no haya cargado.

> El segundo principio ya no es sobre qué percibís, sino sobre qué podés hacer con eso.

<!-- id:principleOperable -->

**Operable**

Los controles de la interfaz tienen que poder manejarse con teclado, con voz, o con cualquier otro dispositivo de entrada — no solo con mouse o con un gesto de precisión.

Un botón que solo reacciona al pasar el mouse por encima. Un límite de tiempo que no se puede extender. Un gesto que exige una trayectoria exacta. Todo eso son barreras operativas, y no tienen nada que ver con cómo se ve la pantalla, sino con qué podés usar para interactuar con ella.

> Bien: ya lo percibís, ya lo podés operar. Falta que lo puedas entender.

<!-- id:principleComprehensible -->

**Comprensible**

La interfaz tiene que comportarse de manera predecible. Que algo "se entienda" no es un detalle de UX, como capaz se piensa muchas veces — es una condición de accesibilidad.

Pensá en un error que no explica qué pasó, un menú que se mueve de lugar entre una pantalla y otra, un cambio de contexto que vos no pediste: en los tres casos rompés el modelo mental que la persona ya se había armado del producto, y la obligás a reaprenderlo de cero.

> El último principio ya no depende de la persona, sino de con qué está usando el producto.

<!-- id:principleRobust -->

**Robusto**

El contenido tiene que funcionar en una variedad amplia de navegadores y tecnologías asistivas. Un componente puede verse perfecto en pantalla y, aun así, no existir para la única API que realmente importa acá: el árbol de accesibilidad.

Robusto es que cada control exponga ahí su nombre, su rol y su valor — no importa quién termine leyéndolo: un lector de pantalla, un control por voz, o cada vez más, un agente de software.

> Bien, ya tenemos los cuatro principios claros. Ahora la pregunta del millón: ¿con qué se implementa todo esto en el día a día?

---

## Herramientas

<!-- id:toolsDevTools -->

**DevTools del navegador**

Lo más básico ya lo tenés instalado, sin agregar nada. Vamos a recorrerlo en vivo.

Primero, el panel Accessibility: lo encontrás al lado de Styles y Computed, dentro del inspector de Elements. Seleccioná cualquier nodo y ahí abajo aparece exactamente lo que expone al árbol de accesibilidad — nombre computado, rol, descripción, y las propiedades ARIA que tenga. Es lo mismo que ve un lector de pantalla, sin tener que instalar uno.

Al lado del árbol de Elements hay un ícono para togglear "Show accessibility tree" — con un clic, el DOM entero desaparece y en su lugar ves el árbol de accesibilidad completo de la página. Sirve para responder de un vistazo la pregunta que veníamos haciendo toda la charla: ¿qué quedó afuera?

En el panel Styles, cualquier valor de color que toques abre el selector — y ese selector ya te calcula el ratio de contraste en tiempo real, con el visto verde si pasa AA o AAA, y una línea de muestra con el texto real encima del color.

Ahora lo menos conocido: `Ctrl+Shift+P`, buscá "Rendering" y abrí ese panel. Ahí vive de todo — desde debug de repintado y layout shifts hasta emulación de media features como `prefers-color-scheme` o `forced-colors` — pero hoy nos interesan dos toggles puntuales. El primero: "Emulate vision deficiencies", un dropdown para simular en vivo, sobre la página real, cómo la ve alguien con protanopia, deuteranopia, tritanopia, achromatopsia o visión borrosa.

En ese mismo panel de Rendering está "Emulate CSS media feature prefers-reduced-motion" — le decís al navegador que simule que el sistema operativo pidió movimiento reducido, sin tener que cambiar la configuración real de tu computadora, y ves si tus animaciones efectivamente lo respetan.

Y último: si necesitás revisar cómo se ve el estado de foco de un botón sin tabular hasta ahí veinte veces, click derecho sobre el elemento → "Force state" → `:focus-visible`. Queda fijado ese estado en el inspector mientras lo stylean.

> Con eso ya podés inspeccionar a mano. El paso que sigue es automatizar esa inspección.

<!-- id:toolsLighthouse -->

**Lighthouse y PageSpeed Insights**

Lighthouse te audita accesibilidad, performance, buenas prácticas y SEO en un solo reporte, con un puntaje de 0 a 100. Ya viene integrado en DevTools, y también existe como CLI.

PageSpeed Insights es el hermano: corre el mismo motor, pero como servicio web de Google — no necesitás tener el proyecto abierto localmente, y encima te suma datos reales de usuarios, no solo de laboratorio.

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

> Y esto ya dejó de ser teoría de arquitectura: hoy existen herramientas concretas que cualquier equipo puede usar ya mismo.

<!-- id:secondAudienceTools -->

**Ya existen las herramientas**

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

Dividir un proceso largo en pasos no le saca ni un campo al formulario: lo único que cambia es cuánto tenés que sostener en la cabeza en cada momento. Es la misma información, mejor repartida en el tiempo.

> Reducir lo que hay que recordar en un momento dado es una forma de carga. Otra es cuánto cuesta repetir la misma tarea muchas veces.

<!-- id:interactionFatigue -->

**Fatiga por interacción**

Cada interacción tiene un costo. Una tarea con varios pasos repetitivos se banca perfecto la primera vez, pero se convierte en carga operativa real cuando alguien la repite decenas de veces por día — el problema no es que cada paso sea difícil, es el desgaste acumulado.

Ese costo es invisible en una demo, porque nadie hace clic cien veces seguidas frente a un cliente. Aparece recién cuando medís el trabajo real de quien usa el producto todos los días, no la primera vez que alguien lo prueba.

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
