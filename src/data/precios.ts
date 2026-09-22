// Tabla de precios de llaveros de PVC por cantidad.
// Cambia aquí las cifras y se actualizan en toda la web.

export type Tramo = {
  cantidad: string;
  precioUd: string;
};

export const PRECIOS_LLAVEROS: Tramo[] = [
  { cantidad: "200 uds", precioUd: "2,80€/ud" },
  { cantidad: "500 uds", precioUd: "1,50€/ud" },
  { cantidad: "1.000 uds", precioUd: "0,80€/ud" },
  { cantidad: "2.000 uds", precioUd: "0,70€/ud" },
  { cantidad: "3.000 uds", precioUd: "0,60€/ud" },
];

export const PRECIOS_NOTA = "Para más cantidad, pregúntanos sin problema.";

export const TRAMOS_CANTIDAD_CONTACTO = [
  "100 - 200 uds",
  "200 - 500 uds",
  "500 - 1.000 uds",
  "1.000 - 2.000 uds",
  "2.000 - 3.000 uds",
  "Más de 3.000 uds",
];
