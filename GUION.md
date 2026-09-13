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

<!-- id:tools -->

**Herramientas**

La implementación no requiere herramientas nuevas: DevTools del navegador para inspección de contraste y árbol de accesibilidad, Lighthouse para auditoría automatizada, axe-core como motor de reglas WCAG sobre el DOM, y Playwright para validar accesibilidad como parte del pipeline de integración continua. Priorizar componentes reutilizables sobre implementaciones ad hoc por página evita corregir el mismo defecto múltiples veces.

---

## Más allá de lo básico

Estos conceptos no corresponden a un criterio WCAG numerado, pero explican por qué una interfaz técnicamente conforme puede seguir generando fricción operativa.

> Con los principios y las herramientas ya sobre la mesa, vale la pena mostrar qué pasa incluso cuando una interfaz cumple todo lo anterior — empezando por cuánto tiene que recordar la persona.

<!-- id:cognitiveLoad -->

**Carga cognitiva**

Es la cantidad de información que una persona debe recordar y procesar para completar una tarea. Un formulario extenso en una sola pantalla exige sostener en la memoria qué falta completar, qué es obligatorio y qué errores hay que corregir. Dividir el proceso en pasos reduce esa carga.

- **Qué está mal:** 14 campos sueltos en un mismo grid, sin agrupar.
- **Solución:** los mismos 14 campos en 3 pasos con indicador de progreso.

> Reducir lo que hay que recordar en un momento dado es una forma de carga; otra es cuánto cuesta repetir la misma tarea muchas veces.

<!-- id:interactionFatigue -->

**Fatiga por interacción**

Cada interacción tiene un costo. Una tarea que exige múltiples pasos repetitivos es tolerable una vez, pero se convierte en carga operativa cuando se repite decenas de veces por día.

- **Qué está mal:** 7 secciones apiladas en scroll continuo — el historial queda al final.
- **Solución:** pestañas por teclado con la pestaña activa en la URL.

> Todo esto — carga cognitiva, fatiga por interacción — apunta a la misma idea de fondo, que cierra este bloque.

<!-- id:inclusiveDesign -->

**Diseño inclusivo**

Quien usa un producto no está ahí para aprender cómo funciona: está ahí para completar una tarea. Diseñar para condiciones reales (interrupciones, presión de tiempo, cansancio) evita trasladar la complejidad del software a la persona que lo usa.

- **Qué está mal:** las opciones del menú son `<div>` sin `onClick` ni rol — no son interactivas.
- **Solución:** `<button>` reales con tamaño táctil mínimo y nombre accesible.

> Ya vimos principios, herramientas y estas fricciones que van más allá de lo básico. Queda una idea para cerrar la charla.

---

## Cierre

<!-- id:closing -->

**Cierre**

Todo lo que vimos hasta acá ya justificaba invertir en accesibilidad por las personas. Pero hoy hay un argumento más: la mayoría del tráfico que llega a un sitio ya no es humano — más del 57% de los requests a contenido HTML en 2026 son de agentes automatizados, según Cloudflare — y esos agentes leen exactamente la misma estructura semántica, el mismo árbol de accesibilidad, que un lector de pantalla. Mientras tanto, el 95.9% de los sitios más visitados sigue fallando al menos un criterio de WCAG, según WebAIM. Esto no es teórico: OpenAI probó navegar así, leyendo ese árbol de accesibilidad, en su navegador Atlas — y aunque Atlas como producto ya no existe, esa forma de navegar se mudó directo a ChatGPT, que en poco más de un año pasó de 400 a 1.000 millones de usuarios semanales. La misma inversión que hacemos por una persona ciega o con baja visión, hoy también la aprovecha una máquina que opera el sitio a esa escala.
