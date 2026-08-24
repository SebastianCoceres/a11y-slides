# GUION.md — "Accesibilidad: el negocio que estás dejando sobre la mesa"

## BLOQUE 0 — Apertura (Slide: Título)

_(Pantalla en negro. Aparece: "Poder usar tus productos". El orador entra sin
diapositiva de bienvenida, arranca directo.)_

El trimestre pasado, en algún momento, alguien no pudo usar algo que nosotros
construimos. No sé quién fue. No sé en qué pantalla se trabó. Pero sé que
pasó, porque siempre pasa, y sé que a esa persona no le mandamos una
disculpa: le mandamos silencio, y ella se fue.

_(pausa)_

Esta charla no es sobre ese usuario en abstracto. Es sobre cuánta plata de
esta sala —de tu sueldo, de tu bono, de tu presupuesto del año que viene—
depende de que dejemos de repetir ese error. Y créanme: es más plata de la
que cualquiera acá adentro piensa.

---

## BLOQUE 1 — Redefiniendo el problema (Slide: Premisa)

Cuando alguien escucha "accesibilidad", piensa en discapacidad, piensa en
un nicho chico, piensa "no es mi público". Es el error más caro que vamos a
discutir hoy, así que empecemos por ahí.

Accesibilidad no es diseñar para "personas con discapacidad". Es diseñar un
producto que funcione para cualquiera, en cualquier condición. Y "cualquier
condición" les incluye a ustedes. Al de sistemas que un día tiene el brazo
enyesado. A la de ventas que abre el celular al sol y no ve la pantalla. Al
de finanzas con la conexión del hotel que anda mal en el viaje de negocios.

Nadie en esta sala es la persona de 25 a 45 años sana, con buena vista, buena
conexión y tiempo de sobra, las 24 horas del día. Esa persona no existe. Ni
siquiera ustedes son esa persona todo el tiempo.

---

## BLOQUE 2 — El mercado que no estamos viendo (Slide: Situaciones)

_(Se proyecta la tabla de situaciones)_

Miren esta lista: alguien sosteniendo un bebé con una sola mano. Alguien con
una lesión temporal. Alguien al sol. Alguien con conexión lenta. Alguien con
guantes. Alguien que rompió los lentes. Una persona mayor. Alguien
aprendiendo el idioma. Alguien caminando y mirando el celular.

¿Se dieron cuenta de qué es esta lista? Es literalmente todo el mundo, en
algún momento del día. No es una minoría con una condición especial. Es
ustedes, es sus clientes, es sus proveedores, es la persona que se sienta a
su lado en la próxima reunión.

Cada uno de esos momentos, si nuestro producto no aguanta, es una conversión
que se cae, un trámite que se abandona, alguien que cierra la pestaña y no
vuelve. Y eso todavía es una historia. Vamos al número.

---

## BLOQUE 3 — El argumento que le importa a cada uno (Slide: Impacto en el negocio)

_(Se proyecta la grilla de impacto)_

Voy a dar nueve razones. Ninguna es "porque está bien hacerlo". Cada una está
puesta acá porque le pega directo al bolsillo de alguien específico de esta
sala. Encuentren la suya.

- **Si están en legales o en dirección:** litigios y sanciones. La Directiva
  UE 2019/882 y el Decreto-ley 1/2022 ya nos alcanzan si vendemos online. No
  es una sugerencia, es una fecha límite con multa.
- **Si están en producto o en ventas:** cuota de mercado. Cada competidor que
  no resuelve esto nos está regalando clientes. El primero que lo resuelve,
  se los queda.
- **Si están en atención al cliente:** cada ticket de "no puedo usar esto" es
  un cliente frustrado y una hora de alguien de este equipo pagando por algo
  que el producto debería haber resuelto solo.
- **Si están en ingeniería:** aplicar esto desde el diseño es más barato que
  parchearlo después. No es una inversión nueva, es dejar de pagar refactors
  de pánico.
- **Si están en finanzas:** retención. Usuario que puede usar el producto sin
  pelear con él, vuelve. Usuario que vuelve, paga de nuevo.

Y para quien todavía piensa "a nosotros no nos van a demandar" — perfecto,
supongamos que tienen razón. Igual ganan en conversión, en retención y en
costo de desarrollo. Es la única inversión de esta empresa donde ganan algo
_aunque tengan razón en que el riesgo legal nunca los alcanza_. El riesgo
legal es el piso de este argumento, no el techo.

---

## BLOQUE 4 — Mostrame que no es caro (Slide: Uso de color / Tipografía / Teclado / Alt text / Focus trap)

Sé lo que está pensando alguien en esta sala ahora mismo: "somos B2B, no
vamos a contratar ciegos para trabajar con una PC, esto no me sirve para mi
negocio". Bien. No les voy a vender un cliente que no tienen. Les voy a
vender a su propia gente. Miren quién usa nuestro software ocho horas por
día, todos los días:

- **Color:** en cualquier equipo de operaciones, finanzas o logística, uno
  de cada doce varones tiene algún tipo de daltonismo. Si nuestro dashboard
  marca "vencido" solo con rojo sobre verde, ese analista —que puede estar
  sentado en esta sala ahora mismo— no lo distingue, y aprueba un pago que no
  debía aprobar, o deja pasar una alerta crítica. Un ícono al lado del color
  cuesta una línea de CSS y evita el error operativo.
- **Tipografía:** nuestro cliente enterprise no tiene 25 años. Tiene un
  gerente de compras de 55 revisando nuestro ERP toda la mañana con vista
  cansada. Texto chico sin interlineado no es estética, es la razón por la
  que deja de usar el módulo y llama a soporte para que le expliquemos lo
  que ya tiene adelante.
- **Teclado:** el operador que carga 400 registros por día en nuestro CRM no
  quiere tocar el mouse. Cada campo que no se navega con Tab en orden
  lógico es un segundo perdido, multiplicado por cada carga, cada operador,
  todo el año. Eso es productividad medible en la nómina, no un checkbox de
  compliance.
- **Alt text:** piensen en la persona a dos años de jubilarse, veinte de
  antigüedad, que hoy ve peor y trabaja con el zoom del sistema al 150%. Un
  ícono sin `alt` es un botón que no identifica y un flujo en el que se
  traba. Con `alt` descriptivo, la persona que tiene todo el conocimiento
  institucional de esta empresa sigue siendo productiva sin que nadie tenga
  que re-entrenarla.
- **Focus trap:** un modal que no atrapa el foco es nuestro operador de call
  center perdiendo el hilo del formulario a mitad de una llamada. Eso es
  llamada más larga, cliente más frustrado y un KPI de atención que se cae.

Y para el que sigue pensando que esto es un detalle de implementación y no
una estrategia: correcto, es un detalle. Esa es la buena noticia. No estoy
pidiendo presupuesto de innovación ni que piensen en un usuario que no
tienen. Estoy pidiendo que dejemos de perder plata con la gente que ya nos
paga el sueldo y con la gente que ya nos paga la factura.

---

## BLOQUE 5 — Lo que separa un parche de una ventaja competitiva (Slide: Principios avanzados)

Hasta acá hablamos de no perder plata. Ahora hablemos de ganar más que la
competencia. Esto es lo que separa un parche de una ventaja real:

- **Carga cognitiva:** nuestro formulario de alta de cliente tiene 40 campos
  en una sola pantalla. La persona de onboarding se pierde a la mitad, carga
  mal un dato, y ese error aparece recién en facturación, tres meses
  después, como una nota de crédito que alguien de esta sala tiene que
  investigar. Lo partimos en pasos con feedback claro y bajamos el tiempo de
  alta y el error de carga en el mismo movimiento.
- **Fatiga por interacción:** un agente de soporte que scrollea quince veces
  por ticket para encontrar el historial del cliente resuelve menos tickets
  por hora que uno que lo tiene a la vista. Multipliquen esa diferencia por
  turno, por agente, por mes — es la diferencia entre necesitar cuatro
  agentes o necesitar cinco para el mismo volumen.
- **Consistencia:** si el botón "Guardar" está arriba a la derecha en un
  módulo y abajo a la izquierda en otro del mismo producto, cada persona
  nueva tarda más en volverse productiva y cada persona con antigüedad
  comete más errores al saltar entre módulos. Eso es costo de capacitación
  repetido, no una decisión de diseño libre.
- **Prevención de errores:** un operador de depósito carga "150" en vez de
  "15" en la cantidad de un envío porque el campo no valida ni confirma. Ese
  error no se corrige en la pantalla, se corrige tres días después con una
  devolución logística que cuesta diez veces más que la validación que
  faltaba.
- **Diseño inclusivo:** nuestro vendedor está haciendo una demo en la
  notebook del cliente, en una resolución que no es la nuestra, con la
  conexión del cliente, bajo la presión de cerrar el trato. Si el layout se
  rompe ahí, no perdimos un ticket de soporte, perdimos la demo que definía
  el contrato.
- **Componentes antes que páginas:** tenemos doce modales distintos en el
  producto porque cada equipo construyó el suyo. Cuando aparece un bug de
  navegación por teclado, lo pagamos doce veces — o lo encuentra el cliente
  equivocado en la demo equivocada. Un solo componente de modal bien hecho
  se corrige una vez y el beneficio se replica solo, sin que nadie tenga que
  acordarse de los otros once.

Si a alguien de esta sala le interesó ese último punto en particular —una
sola inversión, beneficio en todos lados— es porque entendió el argumento
completo: no estamos comprando accesibilidad. Estamos comprando
apalancamiento.

---

## BLOQUE 6 — No hace falta presupuesto nuevo (Slide: Herramientas)

Y ahora la objeción de siempre, la que seguro está pensando alguien de
finanzas en este momento: ¿cuánto cuesta medir todo esto, y con qué equipo?

Con lo que ya tenemos instalado:

- **DevTools**, gratis, ya está en el navegador de cada desarrollador de esta
  empresa.
- **Lighthouse**, gratis, audita accesibilidad junto con performance.
- **axe-core**, gratis, motor de reglas WCAG que corre en nuestro propio DOM.
- **Playwright**, que ya usamos o deberíamos usar, y valida accesibilidad
  como parte del pipeline de CI, así el problema nunca llega a producción.

Cero herramientas nuevas. Cero licencias. Cero equipo nuevo. La única
inversión real es que, desde el próximo sprint, decidamos hacerlo bien en
vez de arreglarlo con un abogado después.

---

## BLOQUE 7 — Cierre

_(pausa larga, el orador vuelve al centro del escenario)_

Volvamos a esa persona del principio, la que el trimestre pasado no pudo
usar algo que construimos. Todavía no sabemos quién fue. Pero ahora sabemos
que probablemente sea el analista de esta misma empresa que no distingue el
rojo del verde, o la persona a dos años de jubilarse que sabe más de este
negocio que cualquiera de nosotros, o el cliente que decidió el contrato en
la demo que se rompió en su notebook.

La pregunta no es si esto cuesta plata. La pregunta es si prefieren gastarla
ahora, en una línea de código, o después, en una multa, en un agente de más
en la nómina, y en un cliente que ya se fue con el que sí lo resolvió.

Empecemos por el checklist. Es la primera decisión rentable que tomamos hoy,
y la toma cada persona en esta sala, no solo quien firma el presupuesto.

_(Fin)_

---

## Notas de producción

- Mapeo directo a los componentes del deck: `SlideTitle` → Bloque 0,
  `SlidePremise` → Bloque 1, `SlideSituations` → Bloque 2,
  `SlideBusinessImpact` → Bloque 3, `SlideAccessibility` (5 sub-slides) →
  Bloque 4, `SlideAdvancedPrinciples` → Bloque 5, `SlideTools` → Bloque 6.
- Formato de charla única (TEDx): el orador no dialoga con nadie en escena.
  Las pausas marcadas en cursiva son el único recurso escénico — se usan
  para dejar que un rol específico de la sala (finanzas, ingeniería, ventas)
  se reconozca en el argumento antes de seguir.
- Pensado para caminar el escenario mientras habla, no para leer detrás de
  un atril — las oraciones son cortas a propósito para sostener el ritmo
  hablado.
- Timing sugerido: ~1.5 a 2 min por bloque, ~12-15 min de charla total.
