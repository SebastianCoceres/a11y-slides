Accesibilidad
ESTÁNDAR GLOBAL W3C / WCAG

Principios Basicos

- perceptible: la información y los componentes de la interfaz de usuario deben presentarse a los usuarios de manera que puedan percibirlos.
- operable: Los componentes de navegación y controles deben ser manejables mediante teclado, voz u otros dispositivos.
- comprensible: La información y el funcionamiento de la interfaz deben ser claros, coherentes y fáciles de aprender.
- robusto: El contenido debe ser compatible con una amplia variedad de navegadores y tecnologías asistivas.

Beneficios

- Efecto "rampa de acceso": la accesibilidad beneficia a todos los usuarios, no solo a aquellos con discapacidades.

Problemas comunes que solmenos manejar

- uso de color adecuado.
  - daltonismo
    - protanopia (rojo-verde)
    - deuteranopia (verde-rojo)
    - Tritanopia (azul-ambar)
    - achromatopsia (sin color)
  - contraste
- tipografía
  - vision borrosa
  - Manejo de tamaños
  - interlineado
  - espaciado
  - jerarquía visual
- navegación por teclado
  - importancia de los tab index, orden lógico, atajos de teclado
  - ejemplos de enfermedades que afectan la movilidad: Tendinitis, Epicondilitis, coordinación motora fina (temblor), Lesiones, túnel carpiano
  - focus trap
    - modal
    - popups
    - menus desplegables
- texto alternativo para recursos multimedia
  - descripciones concisas para tecnologías asistivas.
  - lectores de pantalla
  - subtitulado y transcripciones para audio y video
- movimiento reducido
  - trastornos vestibulares, migrañas, mareo por movimiento
  - preferencia del sistema operativo: prefers-reduced-motion
  - animaciones de entrada, parallax, auto-scroll, parpadeo

Mas alla de los basico

- Carga cognitiva: simplificar, priorizar, particionar, feedback, microinteracciones
- Fatiga por interacción: cada interaccion tiene un costo cognitivo, scrolls, focos, navegaciones
- Consistencia: todos los elementos de la interfaz deben comportarse de manera predecible y coherente., formularios, tablas, botones, mensajes
- Prevención de errores: confirmaciones, validaciones, mensajes de error claros, autocompletado, mascaras, deshacer, etc.
- Diseño inclusivo: edad, estres, iluminacion, multitarea
