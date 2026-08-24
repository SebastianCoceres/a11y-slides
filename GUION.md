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
- **Si están en QA:** menos casos de "no reproduce en mi entorno". Los bugs
  de accesibilidad dependen del contexto real —teclado, zoom, contraste,
  lectura— y si no los cubrimos desde el desarrollo, terminan siendo
  hallazgos tardíos que frenan un release entero.
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

## BLOQUE 4 — Mostrame que esto no es tanto laburo (Slide: Uso de color / Tipografía / Teclado / Alt text / Focus trap)

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

---

## BLOQUE 5 — Lo que separa un parche de una base de código sana (Slide: Principios avanzados)

Hasta acá hablamos de dejar de generarnos trabajo de más. Ahora hablemos de
lo que realmente cambia cómo se siente developear sobre este producto. Esto
es lo que separa un parche de una base de código sana:

- **Carga cognitiva:** nuestro formulario de alta de cliente tiene 40 campos
  en una sola pantalla. La persona que lo carga se pierde a la mitad, cursa
  mal un dato, y ese error aparece recién en otro módulo, semanas después,
  como un ticket que soporte nos escala sin poder explicar de dónde salió.
  Lo partimos en pasos con feedback claro y el error desaparece en el mismo
  movimiento en que desaparece el ticket.
- **Fatiga por interacción:** un agente de soporte que scrollea quince veces
  por ticket para encontrar el historial del cliente no solo tarda más:
  también se equivoca más, y esos errores nos vuelven como bugs reportados
  que en realidad son errores humanos causados por una interfaz que exige
  demasiado. Menos scroll, menos fricción, menos tickets mal cargados que
  después tenemos que destrabar nosotros.
- **Consistencia:** si el botón "Guardar" está arriba a la derecha en un
  módulo y abajo a la izquierda en otro del mismo producto, cada dev que
  toca ese código reintroduce el mismo patrón inconsistente sin darse
  cuenta, porque no hay un único lugar de referencia. Eso no es un detalle
  visual — es deuda técnica de interfaz que se sigue acumulando cada sprint.
- **Prevención de errores:** un operador de depósito carga "150" en vez de
  "15" en la cantidad de un envío porque el campo no valida ni confirma. Ese
  error no se corrige en el momento — se corrige días después, cuando ya
  perdimos el contexto, con alguien de nuestro equipo revisando logs para
  entender qué pasó. Una validación en el frontend hoy es media hora menos
  de investigación después.
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

Si a alguien de esta sala le interesó ese último punto en particular —una
sola corrección, beneficio en todos lados— es porque entendió el argumento
completo: esto no es trabajo extra que le sumamos al sprint. Es trabajo que
dejamos de repetir en cada sprint que viene.

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

_(pausa larga, el orador vuelve al centro del escenario)_

Volvamos a esa persona del principio, la que el trimestre pasado no pudo
usar algo que construimos. Todavía no sabemos quién fue. Pero ahora sabemos
que probablemente sea el analista de este mismo equipo que no distingue el
rojo del verde, o la persona a dos años de jubilarse que sabe más de este
trabajo que cualquiera de nosotros, o el operador de depósito que cargó mal
un dato porque el campo nunca le avisó del error.

La pregunta no es si esto nos cuesta tiempo. La pregunta es si preferimos
gastarlo ahora, escribiendo la validación o el `alt` que falta, o después,
reproduciendo un bug que ya sabíamos que iba a pasar, con menos contexto,
más apuro, y el mismo ticket volviendo por tercera vez.

Empecemos por el checklist. Es la primera decisión que nos ahorra trabajo de
verdad, y la toma cada persona en esta sala, no solo quien lidera el equipo.

_(Fin)_

---

## Notas de producción

- Mapeo directo a los componentes del deck: `SlideTitle` → Bloque 0,
  `SlidePremise` → Bloque 1, `SlideSituationsPartOne` + `SlideSituationsPartTwo`
  → Bloque 2, `SlideBusinessImpact` → Bloque 3, `SlideColorUsage` +
  `SlideTypography` + `SlideKeyboardNav` + `SlideAltText` + `SlideFocusTrap`
  → Bloque 4, `SlideAdvancedPrinciples` → Bloque 5, `SlideTools` → Bloque 6.
  Cada uno de estos componentes es hoy una slide de nivel superior con ruta
  propia (`/presentacion/:slide`) — ya no hay sub-páginas anidadas dentro de
  una sola ruta.
- Formato de charla única (TEDx): el orador no dialoga con nadie en escena.
  Las pausas marcadas en cursiva son el único recurso escénico — se usan
  para dejar que un rol específico de la sala (soporte, QA, ingeniería,
  guardia) se reconozca en el argumento antes de seguir.
- El eje argumental es el trabajo que nos ahorramos como equipo (tickets,
  bugs repetidos, parches de emergencia, tiempo de investigación), no el
  impacto financiero en la empresa. Si en algún bloque se cuela una métrica
  de negocio (plata, contratos, multas), no es intencional — revisar contra
  esta nota antes de dar la charla.
- Pensado para caminar el escenario mientras habla, no para leer detrás de
  un atril — las oraciones son cortas a propósito para sostener el ritmo
  hablado.
- Timing sugerido: ~1.5 a 2 min por bloque, ~12-15 min de charla total.
