# A11Y: implementando interfaces para humanos y máquinas

---

## Introducción

<!-- id:title -->

Esta charla es sobre accesibilidad web: qué es, por qué nos debería de interesar y cómo podemos sumarla a nuestro trabajo.

Se suele pensar en la accesibilidad únicamente para personas con discapacidades, pero va bastante más allá. Una interfaz accesible también la entiende mejor cualquier cosa que la tenga que leer, herramientas de asistencia, buscadores, agentes de IA. Lo que vamos a ver son las bases para que nuestras interfaces sean más interpretables, más robustas y más predecibles.

Muchas de las cosas que voy a contar seguramente ya las aplican sin darse cuenta, porque así se aprenden o simplemente por sentido común.

Y es curioso, porque la accesibilidad como principio suele ser algo que uno descubre recién cuando profundiza en el desarrollo de interfaces. Desde mi punto de vista es algo que deberia enseñarse desde el principio. Puede sonar aburrido, pero son las bases que sostienen interfaces mejores, independientemente de las tecnologías que usemos.

No vengo a convertirlos en expertos en accesibilidad — sería mentirles, es un tema enorme y de hecho no voy a entrar mucho en temas técnicos ni aburrilos con ejemplos. Lo que sí espero es que se enteren que esto existe, por qué nos tiene que importar y que conozcan algunas herramientas para poder empezar a aplicarlo.

> Antes de seguir, quiero aclarar porque esa término que ven en pantalla

<!-- id:premise -->

A11Y es un numerónimo, es la abreviatura de "Accessibility". El once es el número de letras que hay entre la A y la Y.

Quiero que la conozcan porque es el término que se usa en la industria y porque si queremos averiguar algo más sobre el tema, se suele encontrar de esta manera.

Podriamos dar como definicion el pensar e implementar nuestro software más allá de las formas básicas de interacción

es medible , es testeable y al igual que la performance o la seguridad es una propiedad de calidad del software

> Y como es de esperarse tiene que haber una forma de medirla. Y la hay, hace más de treinta años.

<!-- id:wcagStandard -->

El W3C publica las Web Content Accessibility Guidelines (WCAG) desde 1994, y ya vamos por la versión 2.2, desde el 2023.

Son criterios puntuales, verificables uno por uno, agrupados en tres niveles: A es el mínimo, AA es lo que te exigen normativas como la de la Unión Europea, y AAA es el ideal, que casi nunca es realista alcanzar.

Por dar un ejemplo: la interpretación en lengua de señas para todo contenido de video. Está buenísimo, pero pedirle eso a una empresa que no tienel los recursos y no tiene la obligacion legal no es realista.

Lo que voy a contar son los criterios de A y AA que son el minimo que deberíamos cumplir

> Antes de meternos en cómo se agrupan esos criterios, veamos por qué vale la pena invertir en todo esto.

<!-- id:accessBenefits -->

Si les doy un par de ejemplos por ahi se entiende mejor.

- La rampa en la vereda se construyó pensando en sillas de ruedas. Hoy lo podemos usar todo el mundo. Bici, carritos, equipajes, etc.
- Los subtítulos se pensaron para gente con sordera, hoy los pone cualquiera que mira un video y no es hablante nativo del idioma.
- El control por voz se pensó para baja movilidad, y hoy su teconología lo usa cualquiera dando instrucciones a dispositivos inteligentes.

Eso.. es el efecto rampa de acceso: algo pensado para un caso puntual termina beneficiando a la base de usuarios completa.

> Y ahí está lo interesante: Pueden aparecer situaciones concretas que cualquiera de nosotros puede atravesar.

<!-- id:situations -->

- El sol pegando en la pantalla
- Guantes de trabajo que dificultan interactuar con una pantalla táctil
- Unas gafas rotas
- Sostener en brazos a un bebé (aunque los compañeros no estén presentes)
- Envejecer

si se dan cuenta ninguna de estas situaciones es una discapacidad permanente. Los criterios son para cualquier situación que dificulte el uso de un producto

> si tenemos eso en cuenta se vuelve una ventaja operativa

<!-- id:businessImpact -->

Para los desarrolladores, resolverlo desde el diseño sale mucho más barato que parchearlo luego.

Para quien se suma al equipo, muchos principios de accesibilidad coinciden con principios de buen diseño de software

Para el negocio, el mercado se agranda — hay organismos públicos y clientes grandes que ya piden cumplimiento como cláusula de contrato

Baja el riesgo de demandas y bloqueos normativos.

Para soporte, significan en general menos problemas.

y para el usuario final, significa menos frustración y más confianza en el producto.

> ojo implementarlo nos da beneficios pero ignorarlo tiene un costo

<!-- id:earlyVsLegacy -->

> y ese costo va aumentando cuanto más tarde se implemente

La dificultad de aplicarlo no es la misma si arrancamos desde el inicio del proyecto o si lo metemos en un sistema que ya tiene usuarios reales.

Arrancar temprano es barato. El costo se diluye entre tareas y se normaliza el patrón accesible desde el inicio.

Dejarlo para último momento cambia la ecuación. Los cambios hay que auditarlos con más cuidado, cada cambio es candidato a romper algo — sobre todo si no hay tests que lo cubran.

No quiero que saquen la conclusión de que esto no es un impedimento para implementarlo en proyectos antiguos. Solo que va a ser más lento y esto no se resuelve de una. Termina siendo una cuestión de tiempo y recursos que se le quiera dedicar.

> Ahora sí, veamos en qué se apoya todo esto que estoy hablando.

<!-- id:principlesIntro -->

Las directivas se agrupan en cuatro principios, conocidos por su acrónimo en inglés, POUR — Perceptible, Operable, Comprensible y Robusto.

Los ejemplos que he mencionado antes entran en una de estas cuatro categorías.

> Empecemos por el primero: qué significa que algo sea perceptible.

<!-- id:principlePerceptible -->

**Perceptible**

La información tiene que llegar al usuario de alguna manera

Imaginemos un formulario que marca los campos de error poniéndolos únicamente en rojo. Podemos caer en la falacia que se interpreta bien porque nostros lo percibimos "bien". Pero si el usuario tiene daltonismo, hay poco contraste o usa un lector de pantalla,, ese error puede pasar completamente desapercibido.

La idea es simple: si algo es importante para entender qué está pasando en la interfaz, no debería depender de un único sentido.

> El segundo principio ya no es sobre qué percibís, sino sobre qué podés hacer con eso.

<!-- id:principleOperable -->

Que algo sea **operable** significa que Los controles tienen que poder usarse sin depender de una única forma de interacción.

Por ejemplo, imaginá una tienda online donde para abrir el menú tenés que pasar el mouse por encima de un icono. Con mouse funciona perfecto, pero si navegás con el teclado usando Tab, nunca vas a poder abrir ese menú. Lo mismo si un botón solo responde a un gesto de deslizar o si una acción desaparece antes de que tengas tiempo de ejecutarla.

no alcanza con que un control exista; también tiene que ser posible llegar a él y usarlo con distintos medios de entrada, como mouse, teclado, táctil o tecnologías de asistencia.

> El siguiente principio es que lo puedas entender.

<!-- id:principleComprehensible -->

que sea comprenseible es que la interfaz tiene que ser fácil de entender y, sobre todo, comportarse como el usuario espera.

- Un formulario que no explica qué falló.
- Una acción que cambia de lugar entre pantallas.
- Un ícono que en una pantalla hace una cosa y en otra hace otra

Los tres rompen el modelo mental que la persona ya se había armado del producto, y la obligan a reaprenderlo.

> El último principio ya no depende de la persona, sino con qué está usando el producto.

<!-- id:principleRobust -->

Un componente puede verse perfecto en pantalla y, aun así, no existir para la única API que realmente importa acá: el _árbol de accesibilidad_.

El mejor ejemplo de esto es el tipico `<div>` armado a mano para comportarse como un `<select>`.

puede funcionar perfecto y aun así no existir semánticamente.

Que algo sea robusto significa que el contenido debe poder ser interpretado de forma correcta por una amplia variedad de dispositivos y tecnologías de asistencia y este es un punto clave en esta charla ya van a ver por qué

> Ahora se preguntarán: ¿Cómo se implementa esto en el día a día?

---

## Herramientas

<!-- id:toolsDevTools -->

Lo más básico son las devtools del navegador.

De entrada vemos lo que todos conocemos: el propio inspector de Elementos, el panel de estilos y la consola.

Ahí mismo, al lado del panel de estilos, hay una opción "Accessibility" que muestra exactamente lo que expone cada nodo — nombre, rol, descripción.

Y se puede togglear para ver directamente el árbol de accesibilidad completo en vez del DOM. Es lo mismo que termina viendo un lector de pantalla.

Por si no lo sabían, si seleccionamos nodos de tipo texto, podemos ver que el selector de color ya te calcula el contraste en tiempo real.

Y el panel de Rendering trae emuladores útiles: cómo ve la pantalla alguien con distintas condiciones de visión, o si tus animaciones realmente respetan la preferencia de movimiento reducido.

> Con esta herramienta podemos inspeccionar a mano. Pero la idea para nosotros siempre es automatizar, para eso existen herramientas como lighthouse.

<!-- id:toolsLighthouse -->

integrada en las propias devtools que audita accesibilidad y otras cosas con un puntaje de 0 a 100

PageSpeed Insights es lo mismo pero como servicio web de Google. Este ofrece un entorno mas realista que no está condicionado por la potencia de nuestra máquina local, extensiones o conexion a internet.

> El problema es que la auditoría se ejecuta localmente de forma manual y sobre una página concreta y para mi gusto algo básico.
> Para accesibilidad específicamente, hay herramientas más especializadas.

<!-- id:toolsAccessibilityInsights -->

**Accessibility Insights**

Accessibility Insights de Microsoft, es una extensión con dos modos. FastPass que sería basicamente lo mismo que lighthouse pero
el sigueinte es "Assessment" el cual te guía paso a paso por los criterios que solo se pueden verificar a mano, como el orden del foco.

> Si queremos que la accesibilidad forme parte del desarrollo y no dependa de acordarnos de hacerlo, necesitamos llevar estas comprobaciones a nuestro flujo de trabajo y ejecutarlas automáticamente para eso podemos aprovecharnos del motor detras de estas herramientas.

<!-- id:toolsAxeCore -->

**axe-core**

axe-core, de Deque labs, es una herramienta opensource que nos permite integrar con codigo las pruebas de accesibilidad.

> Metido en algun proceso como una pipeline es donde deja de depender de que alguien se acuerde de auditar. Entonces podemos aprovechar herramientas como Playwright.

<!-- id:toolsTesting -->

Un runner end-to-end. con el podemos automatizar la ejecución de axe sobre toda la aplicación, en cada build.

si no es nuestro caso y no tenemos un sistema de integración, podemos correrlo manualmente con un comando y ver el reporte en la consola. hasta podriamos usar un hook de git para que se ejecuten obligatoriamente los tests en local antes de pushear.

> Podriamos pensar que con las herramientas ya es suficiente pero el titulo de la charla decia que tambien ibamos a hablar de maquinas.
> y esto es interesante, por si no lo sabian, la mayoría del tráfico que llega a un sitio ya no es humano.

<!-- id:secondAudience -->

según Cloudflare Radar más del 57% de las request http a contenido web en 2026 son de agentes automatizados. Y esos agentes leen exactamente la misma estructura semántica de la que vengo hablando, el árbol de accesibilidad.

Esto significa que implementar accesibilidad en nuestras aplicaciones nos daria una ventaja competitiva. El 95.9% de los sitios más visitados todavía falla al menos un criterio, según la organización "Web accessibility in mind" en su reporte anual Million

Que yo mencione el arbol de accesibilidad no es casualidad. OpenAI probó navegar así, leyendo ese árbol, en su navegador Atlas. si bien Atlas como producto ya no existe, este se integró directamente a ChatGPT y si tenemos en cuenta que en poco más de un año pasó de 400 a 1.000 millones de usuarios semanales.

La misma inversión que hacemos por una persona, hoy también la aprovecha una máquina que opera el sitio a esa escala.

> Vale la pena entender por qué pasa esto exactamente — no es porque si

<!-- id:secondAudienceMechanism -->

Estos agentes no leen píxeles ni el HTML entero de la página. Leen el mismo árbol de accesibilidad del que hablamos al principio — nombre, rol y valor de cada nodo. Es la misma API paralela al DOM que usa un lector de pantalla.

porque lo usan? un snapshot de accesibilidad pesa entre 200 y 400 tokens, contra cientos de miles si el agente tuviera que masticar el HTML crudo de una página real. La misma estructura que le evita a un lector de pantalla procesar la página entera también es la razón por la que un agente la procesa más rápido y más barato.

> El problema viene por una doble vía, hoy buena parte del código de ese sitio lo está escribiendo un agente que alimenta lo que otro agente consumirá.

> Y podriamos hacernos la pregunta: ¿qué tan accesible es lo que escribe la IA?

<!-- id:secondAudienceLlmEval -->

Microsoft midió exactamente esa pregunta, y lo hizo con varios modelos generando interfaces reales. El código resultante se renderizó en un navegador de verdad y se auditó.

El resultado, sin ninguna instrucción sobre accesibilidad en el prompt: 12% de aprobación general. El mejor modelo individual llegó a 25%.

En el peor caso puntual, una home de un e-commerce, ningún modelo aprobó ni un solo chequeo: 0%, con un promedio de más de quince fallas de WCAG por muestra.

Ahora la buena noticia. Alcanzó con agregar una instrucción básica al prompt — un simple recordatorio de que el resultado tiene que ser accesible — para que ese 12% saltara a 60%. Y cuando el agente, además de generar el código ejecutaba sus propios tests de accesibilidad, se corregía y el promedio subió a un 86% con el mejor caso individual rozando el 100%.

Podemos sacar la conclusión de que generar código no es lo mismo que generar código accesible, y esa diferencia no la cierra el modelo solo. La cierra la instrucción explícita y, sobre todo, el testeo automatizado antes de dar la tarea por terminada.

> la buena noticia es que para lograr estos resultados podemos usar herramientas que tenemos disponibles.

<!-- id:secondAudienceTools -->

Una skill que le brinda el conocimiento necesario sobre accesibilidad.

contamos con un conjunto de MCPs que permiten a un agente inspeccionar un navegador real y detectar problemas que un análisis estático puede pasar por alto.

> Pero ojo: ninguna de estas herramientas es la ventaja real

<!-- id:secondAudienceCodeProximity -->

Las herramientas que hemos visto reportan el síntoma en la página ya renderizada: "este botón no tiene nombre accesible". Pero no saben si ese botón vive en un componente que se repite cuarenta veces, o si es un caso único, no tienen forma de ver el código, solo el resultado final.

Un agente con acceso al repositorio ve el mismo síntoma pero tambien el código detrás. Puede proponer el fix una sola vez, en la fuente.

> y eso esta genial pero vale la pena mirar un paso más allá: hacia dónde va este mecanismo.

<!-- id:secondAudienceWebmcp -->

En Enero del 2025: nace MCP-B.

En Agosto: Google y Microsoft publican una propuesta unificada.

En Septiembre: el W3C la acepta como Community Group.

Y en Febrero de 2026: se publica el spec formal.

Hoy está en pruebas en Chrome y Edge.

La idea es que un sitio declare funciones que un agente puede invocar directamente.

con una API imperativa bastante simple: `document.modelContext.registerTool()`, con un nombre, una descripción, y una función que se ejecuta del lado del cliente. Ahi pueden ver un ejemplo de como se declara.

También hay una forma declarativa, sin JavaScript: agregarle a un `<form>` los atributos `toolname` y `tooldescription`, y a cada input un `toolparam`.

aca lo gracioso es que reutiliza atributos que un formulario accesible ya tiene — `name`, `required` — no son atributos nuevos para IA, son los mismos que ya le hacen falta a un lector de pantalla.

implementando el patron accesible ya estamos preparados para integrar WebMCP.

> qué dice el propio estándar sobre el árbol de accesibilidad

<!-- id:secondAudienceWebmcpFallback -->

WebMCP no está pensado para interactuar con el. como dice el spec: "no está pensado para que lo consuma tecnología asistiva, ni para interactuar directamente con el árbol de accesibilidad de una página."

Pero después agrega la frase que realmente importa para esta charla: cuando un agente no encuentra un tool declarado para lo que necesita hacer, "puede caer de vuelta a la automatización de navegador de propósito general" — vuelve exactamente al mismo mecanismo que lee el árbol de accesibilidad.

Ni el estándar diseñado específicamente para agentes de IA se anima a dejarlo de lado.

> Quiero empezar a cerrar la charla
> Todas las herramientas que vimos tienen un límite. Según un estudio de la propia Deque, los creadores de axe-core, el testing automatizado detecta alrededor del 57% de los problemas de accesibilidad. Es verdad que un agente con el proceso adecuado nos ayuda a mejorar ese porcentaje, pero no alcanza con eso. Hay que pensar en profundizar hay que ir Más allá de lo básico

---

## Más allá de lo básico

<!-- id:advancedPrinciplesIntro -->

Estos conceptos no corresponden a ningún criterio numerado, pero explican por qué una interfaz que aprueba todo en el papel puede seguir siendo un dolor de cabeza en la práctica.

> qué pasa incluso cuando una interfaz cumple con todo lo que vimos hasta acá — empezando por cuánto tiene que recordar la persona que la usa.

<!-- id:cognitiveLoad -->

**Carga cognitiva**

Es la cantidad de información que alguien tiene que recordar y procesar para completar una tarea. Un formulario largo en una sola pantalla te obliga a tener en la cabeza qué falta completar, qué es obligatorio, qué errores hay que corregir — toda esa carga cae sobre quien lo completa, no sobre la interfaz.

Piensen en un checkout de e-commerce con quince campos en una sola pantalla, contra ese mismo checkout partido en "envío", "pago" y "confirmación": el total de datos pedidos es idéntico, pero en el segundo caso nunca tenés que sostener en la cabeza más de lo que estás viendo.

> Otro caso es cuánto cuesta repetir la misma tarea muchas veces.

<!-- id:interactionFatigue -->

La fatiga por interacción tiene un costo. Una tarea con varios pasos repetitivos se banca perfecto la primera vez, pero se convierte en carga operativa real cuando alguien la repite decenas de veces por día.

Confirmar una acción con dos clicks en vez de uno, no se nota la primera vez que la hacés. Se nota cuando alguien la repite cuarenta veces. Ese costo es invisible en pruebas porque nadie se somete a ese nivel de repetición. Aparece recién cuando medís el trabajo real de quien usa el producto todos los días.

Imaginense si encima es usado por alguien que se tenga que someter a mayor esfuerzo al interactuar con la interfaz por sus condiciones

> las dos apuntan a la misma idea de fondo

<!-- id:inclusiveDesign -->

Nadie usa un producto para aprender cómo funciona: lo usa para completar una tarea.

Hay que diseñar pensando en condiciones reales — interrupciones, presión de tiempo, cansancio. Hay que evitar trasladarle a esa persona una complejidad que el software debería absorber.

En resumen un producto puede aprobar cualquier auditoría automática y, aun así, seguir haciendo trabajar de más a quien lo usa todos los días.

---

## Cierre

<!-- id:closing -->

**Cierre**

Volvamos al principio. Accesibilidad es una propiedad de calidad y como toda se nota más por su ausencia que por su presencia.

El efecto rampa de acceso sigue siendo la mejor razón para arrancar: lo que hoy construyen pensando en un caso puntual, mañana lo va a usar toda su base de usuarios — humana y máquina. Arrancar temprano sale más barato que parchear después.

Quiero invitarlos a que comiencen a evaluar sus interfaces y que cumpliendo con un proceso automático ya cumpliremos con lo mínimo para estar preparados para el futuro.

gracias :)
