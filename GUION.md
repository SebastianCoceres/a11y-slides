# GUION.md — "Accesibilidad: el tiempo de desarrollo que estamos regalando"

---

## BLOQUE 0 — Apertura (Slide: Título)

_(Pantalla en negro. Aparece: "Poder usar tus productos". El orador entra sin
diapositiva de bienvenida, arranca directo.)_

El trimestre pasado, en algún momento, alguien no pudo usar algo que
nosotros construimos. No sé quién fue. No sé en qué pantalla se trabó. Pero
sé que pasó, porque siempre pasa, y sé que a esa persona no le mandamos una
disculpa: simplemente se fue.

_(pausa)_

Esta charla no es sobre ese usuario en abstracto. Es sobre el trabajo que
eso nos genera a nosotros: el ticket que alguien de soporte escaló sin saber
bien qué responder, el bug que un dev no pudo reproducir porque "en mi
máquina anda", el parche que salió apurado un viernes a la tarde. Y depende
de que dejemos de repetir ese error.

---

## BLOQUE 1 — Redefiniendo el problema (Slide: Premisa)

Cuando alguien escucha "accesibilidad", piensa en discapacidad, piensa en
un nicho chico, piensa "no es mi público". Es el malentendido que más
trabajo repetido nos hace generar, así que empecemos por ahí.

Accesibilidad no es diseñar para "personas con discapacidad". Es diseñar un
producto que funcione para cualquiera, en cualquier condición. Y "cualquier
condición" les incluye a ustedes. Al que hace QA con el brazo enyesado. A la
persona de soporte que abre el celular al sol y no ve bien la pantalla. Al
desarrollador con la conexión del hotel que anda mal, en medio de una demo
en una conferencia.

Nadie en esta sala es la persona de 25 a 45 años sana, con buena vista, buena
conexión y tiempo de sobra, las 24 horas del día. Esa persona no existe. Ni
siquiera ustedes son esa persona todo el tiempo.

---

## BLOQUE 2 — Los casos que no estamos testeando (Slide: Situaciones)

_(Se proyecta la tabla de situaciones)_

Miren esta lista: alguien sosteniendo un bebé con una sola mano. Alguien con
una lesión temporal. Alguien con el reflejo del sol. Alguien con conexión lenta. Alguien con
guantes. Alguien que rompió los lentes. Una persona mayor. Alguien caminando y mirando el celular.

¿Se dieron cuenta de qué es esta lista? Es literalmente todo el mundo, en
algún momento del día. No es un edge case remoto que casi nunca pasa. Es el
caso más común que tenemos, y es justo el que no estamos simulando en
ningún ambiente de test.

Cada uno de esos momentos, si nuestro producto no aguanta, es un bug
reportado que no podemos reproducir en nuestro entorno, porque depende del
contexto real de quien lo usa, no de los datos que probamos nosotros. Y eso
significa horas nuestras, no de ellos, tratando de entender qué pasó. Vamos
a ver por qué nos conviene prevenirlo.

---

## BLOQUE 3 — Lo que nos ahorramos como equipo (Slide: Impacto en el negocio)

_(Se proyecta la grilla de impacto)_

Voy a dar cinco razones. Ninguna es "porque está bien hacerlo". Cada una le
pega directo al trabajo diario de alguien específico de esta sala. Encuentren
la suya.

- **Si están en soporte:** menos tickets escalados como "bug crítico" que en
  realidad son problemas de accesibilidad ya conocidos. Cada vez que un
  ticket se reabre tres veces porque el fix real nunca se hizo, es tiempo de
  ese equipo — y después es tiempo nuestro, cuando lo terminan escalando a
  desarrollo igual.
- **Si están en desarrollo:** aplicar esto desde el diseño es más rápido que
  parchearlo después. No es trabajo nuevo, es dejar de escribir el mismo fix
  de emergencia dos o tres veces en módulos distintos.
- **Si están onboardeando gente nueva:** un código con estos principios ya
  incorporados es más fácil de leer y de replicar. Un dev nuevo que copia un
  patrón inconsistente propaga el mismo bug a otro módulo sin darse cuenta.

Y para quien todavía piensa "esto no es prioridad, todavía no explotó nada
grave" — perfecto, supongamos que tienen razón. Igual se reduce el tiempo
que gastamos reproduciendo bugs raros, el tiempo que gastamos
re-explicándole el mismo patrón a cada persona nueva, y el tiempo que
soporte nos hace perder escalando algo que ya sabíamos que iba a pasar.
Prevenir es el piso de este argumento, no el techo.

---

## BLOQUE 4 — Mostrame que esto no es tanto laburo (Slide: Uso de color / Tipografía / Teclado / Alt text / Focus trap / Movimiento reducido)

Sé lo que está pensando alguien en esta sala ahora mismo: "somos B2B, no
vamos a tener usuarios ciegos trabajando con esto, esto no me sirve". Bien.
No les voy a hablar de un usuario que no tienen. Les voy a hablar de los
quién usa nuestro software ocho horas por día, todos los días:

- **Color:** Uno de cada doce varones tiene algún tipo de daltonismo.
  Si el datatable marca “vencido” solo con rojo sobre verde, el analista
  puede no identificar cuáles son las filas problemáticas al seleccionar
  varios elementos. Un ícono con texto podría indicarle claramente cuáles
  están vencidos y evitar la frustración de no saber por qué “Confirmar”
  está deshabilitado.
- **Tipografía:** uno operador revisando nuestro ERP toda la
  mañana con vista cansada puede tener dificultades para leer textos
  pequeños o con poco interlineado. Probablemente no identifique la causa
  como un problema de tipografía: simplemente tendrá que esforzarse más
  para leer la información o recurrir a soporte para confirmar algo que
  debería poder interpretar por sí mismo.
- **Teclado:** el operador que carga 400 registros por día en nuestro CRM
  puede usar Tab para recorrer rápidamente los campos del formulario. Si el
  foco salta de un campo a otro sin un orden lógico, tendrá que volver atrás
  o usar el mouse para continuar. Un orden de foco correcto le permite
  completar la misma tarea de forma más rápida y sin interrupciones.
- **Alt text:** un usuario revisando un reporte puede encontrarse con
  información presentada únicamente mediante un gráfico o una imagen. Si
  esa imagen no tiene alt, al no cargarse correctamente por una conexión
  lenta puede quedar sin contexto sobre la información que representa. Un
  texto alternativo permite comunicar ese contenido incluso cuando la imagen
  no está disponible.
- **Focus trap:** un usuario que navega con teclado puede abrir un modal y,
  si el foco se escapa hacia los elementos que están detrás, tendrá que
  volver al mouse para regresar al modal. Para un usuario que navega con
  mouse, este problema puede no existir, pero el scroll o la interacción
  con el contenido detrás del modal también pueden generar una experiencia
  confusa. Con la etiqueta dialog, gran parte de este comportamiento ya se gestiona
  de forma nativa.
- **Movimiento reducido:** una persona con un trastorno vestibular o
  migrañas puede abrir nuestro dashboard y encontrarse con notificaciones
  que rebotan, parpadean o se desplazan solas. Si el sistema operativo ya
  tiene activada la preferencia de reducir movimiento, esa animación no
  debería reproducirse igual — pero si la ignoramos, la persona no tiene
  forma de evitarla. Respetar `prefers-reduced-motion`, un estándar nativo
  del navegador, es la diferencia entre una interfaz usable y una que hay
  que abandonar.

---

## BLOQUE 5 — Lo que separa un parche de una base de código sana (Slide: Principios avanzados)

Antes de seguir, una aclaración corta: lo que viene no son criterios de
WCAG. Son lentes de diseño — formas de mirar un problema de interfaz que
casi nunca aparecen en un checklist de accesibilidad, pero que explican por
qué algo "funciona" y aun así nos sigue generando trabajo. Esto es lo que
separa un parche de una base de código sana:

- **Carga cognitiva:** accesibilidad también es cuánto tiene que recordar y
  procesar una persona para completar una tarea. Nuestro formulario de alta
  de cliente tiene 40 campos en una sola pantalla — la persona tiene que
  recordar qué le falta, distinguir qué es obligatorio, interpretar errores
  y sostener en la cabeza lo que ya cargó mientras busca el resto. Cuando la
  interfaz exige demasiada memoria, el error no aparece ahí: aparece días
  después en otro módulo, cuando ya nadie se acuerda qué pasó. Partir el
  proceso en pasos y mostrar el contexto necesario no es "hacer la UI más
  linda". Es reducir lo que alguien tiene que sostener en la cabeza para
  hacer bien su trabajo.
- **Complejidad motriz:** no todos interactúan con una interfaz con la misma
  precisión, velocidad o margen de error. Un botón chico, dos controles
  pegados o un drag-and-drop son triviales con un mouse, en un escritorio,
  sin apuro — y un problema real para alguien con una mano ocupada, en una
  tablet, o moviéndose por el depósito. Si una tarea pide diez movimientos
  precisos cuando alcanza con una acción simple, esa precisión de más es una
  barrera que pusimos nosotros, no una que vino con el trabajo.
- **Fatiga por interacción:** un agente de soporte que hace quince scrolls
  para encontrar el historial de un cliente puede completar la tarea una vez
  sin problema. El tema es que la hace cien veces por día — ahí deja de ser
  un detalle de UX y se convierte en una carga operativa que después nos
  vuelve como tickets mal cargados y errores humanos que en realidad causó
  la interfaz.
- **Consistencia:** no es que toda la aplicación se vea igual. Es que la
  misma intención produzca siempre el mismo comportamiento. Si "Guardar"
  está en un lugar distinto en cada módulo, cada persona tiene que
  reinterpretar la interfaz una y otra vez — y cada dev que toca ese código
  reintroduce el mismo patrón inconsistente, porque no hay un único lugar de
  referencia. Un componente accesible y reutilizable evita que cada equipo
  reimplemente desde cero foco, estados, teclado y semántica. Un design
  system no es solo una herramienta visual: también es una herramienta de
  accesibilidad.
- **Prevención de errores:** no alcanza con explicar qué salió mal después
  de que la persona ya se equivocó. Si un operador de depósito puede cargar
  150 cuando el máximo es 15, mostrar el error después de enviar el
  formulario ya es tarde — mejor impedir la entrada imposible y avisar
  mientras se está cargando el dato. Corregir un error obliga a detectarlo,
  entenderlo y recuperarse. Prevenirlo elimina esas tres etapas, y el costo
  de no prevenirlo no se queda en la pantalla: se convierte en datos
  incorrectos, operaciones manuales, tickets, e investigación en logs tres
  días después.
- **Recuperación de errores:** los errores van a pasar igual. La pregunta es
  qué tan fácil es volver atrás. Si alguien borra un registro, "registro
  eliminado correctamente" no alcanza — hace falta poder deshacerlo,
  recuperarlo, y que quede claro qué pasó. Un sistema que permite
  equivocarse y recuperarse rápido es más accesible que uno que exige
  precisión perfecta para no quedar atrapado.
- **Diseño inclusivo:** asumir que quien usa nuestro software no está ahí
  para aprender cómo funciona. Está ahí para hacer su trabajo. El operario
  quiere gestionar el stock, la vendedora quiere atender al cliente, la
  persona de oficina quiere cerrar su tarea — ninguno debería tener que
  pararse a pensar qué espera el software de ellos. Diseñamos para
  situaciones reales: con prisa, con interrupciones, cansados, bajo presión.
  Si para hacer su trabajo alguien tiene que seguirle el rastro a nuestro
  software, le estamos trasladando nuestra complejidad interna a la persona
  que lo usa. Y esa complejidad no se queda ahí: vuelve a nosotros como el
  mismo bug reportado una y otra vez por soporte, porque el usuario sigue
  tropezando con la complejidad que nunca resolvimos de raíz — solo que cada
  vez con un ticket distinto y un contexto que hay que reconstruir de cero.

Cada vez que obligamos a alguien a recordar algo que la interfaz podría
mostrar, a hacer una acción que podría evitarse, a interpretar algo que
podría explicarse, o a recuperarse de un error que podríamos haber
prevenido, le estamos trasladando complejidad del software a la persona. Y
en software empresarial esa complejidad no desaparece: vuelve a nosotros,
como errores de datos, tickets, operaciones manuales y deuda técnica. Una
buena interfaz no solo hace que la tarea se pueda completar. Hace que sea
difícil hacerla mal, fácil recuperarse cuando algo sale mal, y razonable
repetirla cien veces por día.

---

## BLOQUE 6 — No hace falta un proyecto nuevo (Slide: Herramientas)

Y ahora la objeción de siempre, la que seguro está pensando alguien ahora
mismo: ¿con qué herramientas hacemos esto?

- **Componentes antes que páginas:** tenemos doce modales distintos en el
  producto porque cada equipo construyó el suyo. Cuando aparece un bug de
  navegación por teclado, lo arreglamos doce veces — o lo encuentra QA en el
  módulo equivocado, en el peor momento del sprint. Un solo componente de
  modal bien hecho se corrige una vez y el arreglo se replica solo, sin que
  nadie tenga que acordarse de los otros once.

Con lo que ya tenemos instalado:

- **DevTools**, gratis, ya está en el navegador de cada desarrollador de
  este equipo.
- **Lighthouse**, gratis, audita accesibilidad junto con performance.
- **axe-core**, gratis, motor de reglas WCAG que corre en nuestro propio DOM.
- **Playwright**, que ya usamos o deberíamos usar, y valida accesibilidad
  como parte del pipeline de CI, así el problema nunca llega a producción.

Cero herramientas nuevas. Cero configuración exótica. Lo único que hace
falta es que, desde el próximo sprint, decidamos hacerlo bien la primera
vez, en vez de volver sobre el mismo módulo dentro de tres meses porque el
mismo ticket volvió a aparecer.

---

## BLOQUE 7 — Cierre

La pregunta no es si esto nos cuesta tiempo. La pregunta es si preferimos
gastarlo ahora o después,
reproduciendo un error que podriamos haber evitado tan solo con un poco de atención al detalle.

---
