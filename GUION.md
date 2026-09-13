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

> Antes de entrar en cómo se agrupan esos criterios, vale la pena mostrar por qué conviene invertir en esto.

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

Los beneficios de aplicar accesibilidad se distribuyen en toda la organización: menor costo de desarrollo al aplicar el criterio desde el diseño en lugar de corregirlo después, onboarding más rápido sobre un código consistente, ampliación del mercado direccionable , reducción de riesgo legal y normativo y menos tickets de soporte por problemas "simples".

> Ya vimos por qué conviene invertir. Ahora entendamos en qué se apoya esa inversión: los cuatro principios que agrupan los criterios de WCAG.

<!-- id:principlePerceptible -->

**Perceptible**

La información y los componentes de la interfaz tienen que poder percibirse, sea cual sea el sentido disponible en ese momento. No es "que se vea bien": es que el dato llegue por al menos una vía — vista, oído, o tacto a través de un lector de pantalla — sin depender de una sola. Un estado que solo existe en un color, un aviso que solo suena, un texto que solo vive dentro de una imagen: los tres rompen este principio antes de que entre en juego cualquier discapacidad permanente. Alcanza con estar al sol, tener el sonido apagado, o una conexión que no cargó la imagen.

> El segundo principio no es sobre qué se percibe, sino sobre qué se puede hacer con eso.

<!-- id:principleOperable -->

**Operable**

Los controles de la interfaz tienen que poder manejarse con teclado, con voz, o con cualquier otro dispositivo de entrada — no solo con mouse o con un gesto de precisión. Un botón que solo reacciona al hover, un límite de tiempo que no se puede extender, un gesto que exige una trayectoria exacta: son barreras operativas. No dependen de cómo se ve la pantalla, sino de con qué se puede interactuar con ella.

> Una vez que algo se puede percibir y operar, falta que se pueda entender.

<!-- id:principleComprehensible -->

**Comprensible**

La información y el comportamiento de la interfaz tienen que ser predecibles. Que algo "se entienda" no es un detalle de UX: es una condición de accesibilidad. Un error sin explicación, un menú que cambia de lugar entre pantallas, un cambio de contexto que la persona no pidió — todo eso rompe el modelo mental que ya se había hecho del producto, y obliga a reaprenderlo cada vez.

> El último principio no depende de la persona que usa el producto, sino de con qué lo está usando.

<!-- id:principleRobust -->

**Robusto**

El contenido tiene que funcionar con una amplia variedad de navegadores y tecnologías asistivas. Un componente puede verse perfecto y no existir para la única API que importa acá: el árbol de accesibilidad. Robusto significa que cada control expone su nombre, su rol y su valor ahí, sin importar qué lo termine leyendo: un lector de pantalla, un control por voz, o cada vez más, un agente de software.

> Con los cuatro principios ya claros, toca la pregunta práctica: con qué se implementa todo esto en el día a día.

---

## Herramientas

<!-- id:toolsDevTools -->

**DevTools del navegador**

Lo más básico ya viene instalado: el panel Accessibility de DevTools muestra nombre, rol y valor de cualquier nodo, el color picker calcula el contraste al vuelo, y el toggle del árbol de accesibilidad muestra de un vistazo qué quedó afuera — todo lo que ya vimos en el árbol de accesibilidad.

> Con eso alcanza para inspeccionar a mano. El siguiente paso es automatizar esa inspección.

<!-- id:toolsLighthouse -->

**Lighthouse y PageSpeed Insights**

Lighthouse audita accesibilidad, performance, buenas prácticas y SEO en un solo reporte con puntaje 0-100 — integrado en DevTools y disponible como CLI. PageSpeed Insights es su hermano: corre el mismo motor pero como servicio web de Google, sin necesidad de tener el proyecto local, y suma datos reales de usuarios a los datos de laboratorio.

> Lighthouse da un puntaje general. Para accesibilidad específicamente, hay motores dedicados.

<!-- id:toolsA11yEngines -->

**Accessibility Insights y axe-core**

Accessibility Insights for Web (Microsoft) es una extensión con dos modos: FastPass corre un chequeo automatizado en segundos, y Assessment guía paso a paso los criterios que solo se verifican a mano, como el orden del foco. axe-core (Deque) no tiene interfaz propia: es el motor de reglas WCAG que corre por debajo de Lighthouse, de esta misma extensión, y de las herramientas de testing que siguen.

> El motor es el mismo en todos lados; lo que cambia es dónde se lo hace correr. Metido en el pipeline de tests es donde deja de depender de que alguien se acuerde de auditar.

<!-- id:toolsTesting -->

**Playwright, Cypress y Vitest**

Playwright y Cypress son runners end-to-end — con @axe-core/playwright o cypress-axe, cada test que ya valida funcionalidad corre además las reglas de axe sobre la página completa. Vitest opera a otro nivel: con vitest-axe audita un componente aislado antes de que llegue a integrarse en ninguna página.

> Ninguna de estas herramientas reemplaza una decisión de arquitectura de más alto nivel.

<!-- id:toolsRecommendation -->

**Componentes antes que páginas**

Doce modales distintos porque cada equipo construyó el suyo: un bug de teclado se arregla doce veces, o aparece en el módulo equivocado, en el peor momento del sprint. Un solo componente bien hecho se corrige una vez y el arreglo se replica solo.

---

## Más allá de lo básico

<!-- id:advancedPrinciplesIntro -->

**Más allá de lo básico**

Estos conceptos no corresponden a un criterio WCAG numerado, pero explican por qué una interfaz técnicamente conforme puede seguir generando fricción operativa.

> Con los principios y las herramientas ya sobre la mesa, vale la pena mostrar qué pasa incluso cuando una interfaz cumple todo lo anterior — empezando por cuánto tiene que recordar la persona.

<!-- id:cognitiveLoad -->

**Carga cognitiva**

Es la cantidad de información que una persona debe recordar y procesar para completar una tarea. Un formulario extenso en una sola pantalla exige sostener en la memoria qué falta completar, qué es obligatorio y qué errores hay que corregir — toda esa carga recae en quien lo completa, no en la interfaz.

Dividir un proceso largo en pasos no le saca ningún campo al formulario: solo cambia cuánto hay que sostener en la cabeza en un momento dado. Es la misma información, mejor repartida en el tiempo.

> Reducir lo que hay que recordar en un momento dado es una forma de carga; otra es cuánto cuesta repetir la misma tarea muchas veces.

<!-- id:interactionFatigue -->

**Fatiga por interacción**

Cada interacción tiene un costo. Una tarea que exige varios pasos repetitivos es tolerable la primera vez, pero se vuelve carga operativa real cuando alguien la repite decenas de veces por día — el costo no está en la dificultad de cada paso, sino en el desplazamiento acumulado.

Ese costo es invisible en una demo, porque nadie hace clic cien veces seguidas frente a un cliente. Aparece recién cuando se mide el trabajo real de quien usa el producto todos los días, no la primera vez que alguien lo prueba.

> Todo esto — carga cognitiva, fatiga por interacción — apunta a la misma idea de fondo, que cierra este bloque.

<!-- id:inclusiveDesign -->

**Diseño inclusivo**

Quien usa un producto no está ahí para aprender cómo funciona: está ahí para completar una tarea. Diseñar para condiciones reales — interrupciones, presión de tiempo, cansancio — evita trasladarle a esa persona una complejidad que el software debería absorber.

Es la misma idea que atraviesa toda la charla, solo que acá no hay un criterio WCAG que la mida: un producto puede aprobar cualquier auditoría automática y seguir haciendo trabajar de más a quien lo usa todos los días.

> Ya vimos principios, herramientas y estas fricciones que van más allá de lo básico. Queda una idea para cerrar la charla.

---

## Cierre

<!-- id:closing -->

**Cierre**

Todo lo que vimos hasta acá ya justificaba invertir en accesibilidad por las personas. Pero hoy hay un argumento más: la mayoría del tráfico que llega a un sitio ya no es humano — más del 57% de los requests a contenido HTML en 2026 son de agentes automatizados, según Cloudflare — y esos agentes leen exactamente la misma estructura semántica, el mismo árbol de accesibilidad, que un lector de pantalla. Mientras tanto, el 95.9% de los sitios más visitados sigue fallando al menos un criterio de WCAG, según WebAIM. Esto no es teórico: OpenAI probó navegar así, leyendo ese árbol de accesibilidad, en su navegador Atlas — y aunque Atlas como producto ya no existe, esa forma de navegar se mudó directo a ChatGPT, que en poco más de un año pasó de 400 a 1.000 millones de usuarios semanales. La misma inversión que hacemos por una persona ciega o con baja visión, hoy también la aprovecha una máquina que opera el sitio a esa escala.
