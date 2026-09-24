# Imágenes de Llaveros Factory

Coloca aquí los archivos con **exactamente estos nombres** y aparecerán
automáticamente en la web, sustituyendo el placeholder.

Hay dos tipos de placeholder distintos según la imagen:

- **Imágenes de fondo** (`BackgroundSlot`): ocupan toda la sección, con un
  degradado oscuro para que el texto se lea encima. Si el archivo no
  existe, se ve el fondo oscuro/degradado con solo una etiqueta discreta
  en la esquina — nada de cajas ni bordes que rompan el diseño.
- **Imágenes de producto** (`ImageSlot`): fotos o recortes sueltos (logo,
  galería, llavero de precios). Si no existen, muestran una caja con
  icono + nombre + tamaño.

Formato recomendado: **WebP**, salvo el logo (SVG) y el favicon (ya
incluido). El llavero de precios necesita **fondo transparente** (PNG o
WebP con alpha).

## Global

| Archivo | Dónde sale | Tamaño | Estado |
|---|---|---|---|
| `logo_llavero.jpg` | Cabecera y pie de página (recortado en círculo) | 1024x1024px | ✅ colocado |

## Imágenes de fondo — cómo generarlas con IA

Todas comparten un criterio: el **lado donde va el texto debe quedar
oscuro, despejado y sin elementos que compitan** con los titulares; el
producto/protagonista se coloca en el lado contrario (normalmente la
derecha), bien iluminado, para que destaque sobre el fondo oscurecido.

| Archivo | Sección | Qué debe salir en la imagen | Estado |
|---|---|---|---|
| `banner.png` | Hero (home), detrás del titular | Interior de taller oscuro con el llavero "Llaveros Factory" grande a la derecha. | ✅ colocado |
| `card-llaveros.png` | Tarjeta "Llaveros de PVC" | Llavero de zapatilla sobre superficie oscura, a la derecha, mitad izquierda oscura despejada. | ✅ colocado (nota: el diseño incluye el logo real de Nike — ver aviso abajo) |
| `card-imanes.png` | Tarjeta "Imanes de PVC" | Imán "Good Vibes" genérico sobre superficie oscura, a la derecha. | ✅ colocado |
| `fabrica-fondo.jpg` | Sección "Somos fabricantes" | Foto real del taller. | ✅ colocado |

> ⚠️ **Aviso sobre `card-llaveros.png`:** la zapatilla que enviaste lleva
> el logo real de Nike (swoosh). El plan original pedía un diseño
> **genérico, sin marca**, precisamente para evitar problemas de marca
> registrada en una web comercial. La he colocado tal cual pediste, pero
> te recomiendo sustituirla por una versión sin logotipos de terceros
> antes de publicar el sitio.

## Otras imágenes (home)

| Archivo | Dónde sale | Tamaño | Estado |
|---|---|---|---|
| `precios-llavero.png` | Panel de precios — imagen central, sin caja | 1377x1142px | ✅ colocado |
| `tu-diseno.png` | Bloque "Tu diseño, en buenas manos" — imagen de fondo, detrás del texto | 2048x768px | ✅ colocado |
| `galeria-01.png` | Tira de galería — hueco 1 | 600x600px | ✅ colocado |
| `galeria-02.png` | Tira de galería — hueco 2 | 600x600px | ✅ colocado |
| `galeria-03.png` | Tira de galería — hueco 3 | 600x600px | ✅ colocado |
| `galeria-04.png` | Tira de galería — hueco 4 | 600x600px | ✅ colocado |
| `galeria-05.png` | Tira de galería — hueco 5 | 600x600px | ✅ colocado |
| `galeria-06.png` | Tira de galería — hueco 6 | 600x600px | ✅ colocado |

## Llaveros (`/llaveros`)

| Archivo | Dónde sale | Tamaño | Estado |
|---|---|---|---|
| `llaveros-intro.png` | Imagen a la derecha del titular, arriba de la página | 1672x941px | ✅ colocado |
| `llaveros-galeria-01.png` … `llaveros-galeria-08.png`, `llaveros-galeria-09.jpg` | Galería (9 huecos en total, 3 filas x 3) | 600x600px cada una | ✅ colocado |

## Imanes (`/imanes`)

| Archivo | Dónde sale | Tamaño | Estado |
|---|---|---|---|
| `imanes-intro.png` | Imagen a la derecha del titular, arriba de la página | 900x700px | ✅ colocado |
| `imanes-galeria-01.png` … `imanes-galeria-06.png` | Galería (6 huecos en total, 2 filas x 3) | 800x800px cada una | ✅ colocado |

## Cómo trabajamos (`/como-trabajamos`)

Esta página ya no lleva imagen de cabecera — el título va centrado sobre
fondo oscuro liso.

| Archivo | Dónde sale | Tamaño | Estado |
|---|---|---|---|
| `equipo.png` | Entre el titular y "Paso a paso" (a todo lo ancho) | 1905x826px | ✅ colocado |

## Contacto (`/contacto`)

Esta página ya no lleva imagen de cabecera — el título va centrado sobre
fondo oscuro liso, igual que "Cómo trabajamos".

## SEO

| Archivo | Dónde sale | Tamaño | Estado |
|---|---|---|---|
| `og-cover.jpg` | Imagen Open Graph/Twitter al compartir la web en redes (todas las páginas usan la misma) | 1200x630px | ✅ colocado |
