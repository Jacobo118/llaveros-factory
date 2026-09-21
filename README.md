# Llaveros Factory

Web corporativa de Llaveros Factory — fabricante de llaveros e imanes de PVC
personalizados. Construida con Astro + Tailwind CSS, salida estática.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Estructura

- `src/components/` — componentes reutilizables (Header, Footer, Button,
  SectionTitle, ImageSlot, PriceTable, ProcessSteps, CTABanner,
  WhatsAppButton...).
- `src/pages/` — una página por ruta (`/`, `/llaveros`, `/imanes`,
  `/como-trabajamos`, `/sobre-nosotros`, `/contacto`).
- `src/data/precios.ts` — tabla de precios por cantidad (editar aquí).
- `src/config.ts` — datos de contacto, redes, webhook del formulario y
  textos pendientes. Todo lo marcado `[PENDIENTE: ...]` debe rellenarse
  antes de publicar.
- `public/img/` — imágenes del sitio. Ver `public/img/README.md` para la
  lista completa de archivos esperados (nombre, tamaño, dónde sale).

## Sistema de placeholders de imagen

El componente `ImageSlot` intenta cargar la imagen en `src`. Si el archivo
no existe todavía, muestra automáticamente un bloque con el nombre, el uso
y el tamaño recomendado. Basta con colocar el archivo real en `public/img/`
con el nombre exacto indicado para que sustituya al placeholder, sin tocar
código.

## Despliegue

Proyecto listo para desplegar en Vercel desde GitHub (salida estática, sin
configuración adicional).
