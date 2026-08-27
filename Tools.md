# Herramientas de auditoría de accesibilidad

## Lighthouse (Google)

Lighthouse de Google es una herramienta excelente para auditorías web, pero tiene limitaciones importantes.

### Puntos fuertes

- **Cinco categorías clave**: evalúa Rendimiento, Accesibilidad, Buenas Prácticas, SEO y Progressive Web Apps (PWA).
- **Métricas alineadas con Google**: mide las Core Web Vitals (LCP, INP, CLS), cruciales para el posicionamiento en buscadores.
- **Diagnósticos accionables**: no solo detecta fallos, sino que indica exactamente qué archivos o imágenes los causan.
- **Priorización de tareas**: ordena los problemas por su impacto estimado en el ahorro de tiempo de carga.

### Puntos débiles

Su principal debilidad es que mide un entorno simulado y no la experiencia real de tus usuarios. A continuación, se detallan sus puntos débiles más importantes organizados por categorías:

#### ⚙️ Entorno y simulación

- **Entorno de laboratorio**: mide la página bajo condiciones fijas y artificiales. No refleja la variedad de dispositivos reales de tu audiencia.
- **Sesgo del hardware local**: si corres la auditoría en tu navegador, el rendimiento de tu propia computadora o tu conexión a internet alterará los resultados.
- **Simulación de red (throttling)**: la ralentización de red que aplica es matemática, no real. A veces subestima o sobreestima el tiempo de carga real (FCP/LCP).
- **Falta de interacción**: solo mide la carga inicial de la página. No detecta problemas de rendimiento que ocurren cuando el usuario hace clic, hace scroll o interactúa con la web.

#### 📊 Falsos positivos y limitaciones técnicas

- **Puntuaciones variables**: si corres la prueba tres veces seguidas, es muy común obtener tres notas distintas debido al uso de CPU de tu sistema.
- **Fácil de "engañar"**: los desarrolladores pueden programar la web para que retrase la carga de scripts pesados hasta que Lighthouse termine de medir, inflando la nota artificialmente.
- **Extensiones del navegador**: si tienes extensiones activas en Chrome al hacer la prueba, estas pueden ralentizar la auditoría y bajar tu puntuación.

#### ❌ Lo que Lighthouse no mide

- **Datos CrUX vs. Lighthouse**: ignora los datos del Chrome User Experience Report (los datos reales que usa Google para el posicionamiento SEO). Puedes tener un 100 en Lighthouse y fallar el Core Web Vitals real.
- **Seguridad profunda**: su auditoría de seguridad es muy básica (HTTPS y librerías vulnerables). No detecta fallos graves de backend ni inyecciones de código.
- **Accesibilidad automatizada**: solo detecta alrededor del 40% de los problemas de accesibilidad. No puede evaluar si el orden de tabulación tiene sentido lógico o si los lectores de pantalla confunden al usuario.

> Para obtener un diagnóstico web completo, PageSpeed Insights.

---

## Axe-core

Es el motor de pruebas de accesibilidad web automatizadas más popular del mundo, desarrollado por Deque Systems. Es la tecnología que impulsa a herramientas como Google Lighthouse, Wave y Microsoft Accessibility Insights.

### Puntos fuertes (pros)

- **Cero falsos positivos**: diseñado para reportar solo errores reales confirmados.
- **Alta velocidad**: ejecución ultrarrápida en entornos de integración continua (CI/CD).
- **Integración universal**: funciona con Selenium, Playwright, Puppeteer, Cypress y más.
- **Actualización constante**: alineado siempre con las últimas pautas WCAG 2.1 y 2.2.
- **Gran comunidad**: documentación extensa y soporte masivo de desarrolladores.
- **Código abierto**: gratuito y altamente modificable mediante reglas personalizadas.

### Puntos débiles (contras)

- **Alcance limitado**: solo detecta entre el 30% y el 57% de los problemas de accesibilidad.
- **Dependencia humana**: incapaz de evaluar la calidad del contenido (ej. si un texto alternativo describe bien una imagen).
- **Foco en el DOM**: analiza el código renderizado, no la experiencia real con lectores de pantalla.
- **Falsas alarmas de cumplimiento**: dar "cero errores" en Axe no significa que la web sea 100% accesible.
- **Curva de configuración**: integrarlo de forma avanzada en pipelines complejos requiere tiempo.

---

## Playwright

Playwright es una herramienta excelente para automatizar pruebas de accesibilidad (A11y), principalmente gracias a su integración nativa con el motor Axe-core. Sin embargo, como toda herramienta de software, tiene limitaciones importantes que no pueden sustituir a las pruebas manuales.

### 🎭 Puntos fuertes (ventajas)

- **Integración nativa con Axe**: funciona directamente con `@axe-core/playwright` para escanear páginas completas o componentes específicos.
- **Selectores de accesibilidad**: permite buscar elementos mediante roles ARIA (`page.getByRole()`), lo que obliga a crear tests que imitan cómo ve la página un lector de pantalla.
- **Soporte multi-navegador**: ejecuta pruebas de accesibilidad en Chromium, Firefox y WebKit (Safari) de forma simultánea.
- **Capturas y reportes**: genera capturas de pantalla, videos y reportes HTML automáticos cuando falla una regla de accesibilidad.
- **Pruebas en estados dinámicos**: puede interactuar con la página (hacer clic, abrir modales, rellenar formularios) y analizar la accesibilidad después de esos cambios.
- **Velocidad en CI/CD**: es extremadamente rápido y se integra sin problemas en pipelines de integración continua.

### ⚠️ Puntos débiles (limitaciones)

- **Límite de detección automatizada**: las herramientas automáticas como Axe solo detectan entre el 30% y el 40% de los problemas reales de accesibilidad.
- **Falsos negativos**: una página puede pasar todos los tests de Playwright y seguir siendo completamente inaccesible para un usuario real.
- **Sin contexto humano**: Playwright no puede evaluar si el texto alternativo (`alt`) de una imagen describe bien la foto, solo verifica si la etiqueta existe.
- **Orden de lectura lógico**: no puede asegurar si el orden del foco del teclado (Tab) tiene sentido lógico para un usuario invidente.
- **Lectores de pantalla reales**: no interactúa con lectores de pantalla reales del sistema operativo (como NVDA o VoiceOver), solo simula el árbol de accesibilidad del navegador.

---

## Inteligencia Artificial (IA)

Es una herramienta excelente para acelerar las auditorías de accesibilidad web, pero no puede sustituir por completo el juicio humano.

### Puntos fuertes (ventajas)

- **Velocidad extrema**: analiza miles de páginas web en pocos minutos.
- **Detección automatizada**: identifica errores de código objetivos como la falta de etiquetas `alt` en imágenes.
- **Revisión de contraste**: calcula instantáneamente si los colores del texto y el fondo cumplen con las pautas WCAG.
- **Estructura del sitio**: valida rápidamente la jerarquía de los encabezados (`h1`, `h2`, etc.) y la presencia de lenguaje en el HTML.
- **Eficiencia de costes**: reduce drásticamente el tiempo de desarrollo al capturar errores básicos de forma temprana.

### Puntos débiles (limitaciones)

- **Falta de contexto**: una IA sabe si una imagen tiene el atributo `alt`, pero no si la descripción textual es precisa o útil.
- **Falsos positivos/negativos**: puede omitir barreras complejas o marcar como errores elementos que realmente son accesibles.
- **Pruebas de navegación**: no puede replicar la experiencia real de un usuario con discapacidad motriz navegando solo con teclado.
- **Lectores de pantalla**: incapaz de juzgar si el orden de lectura de un lector de pantalla tiene sentido lógico y semántico.
- **Cumplimiento parcial**: las herramientas automáticas de IA solo logran detectar entre el 30% y el 50% de los problemas de accesibilidad totales.
