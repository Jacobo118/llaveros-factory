// Configuración central del sitio. Todo lo que falte por confirmar
// lleva el prefijo "[PENDIENTE: ...]" — no inventar datos reales.

export const SITE = {
  name: "Llaveros Factory",
  tagline: "Llaveros e imanes de PVC personalizados",
  description:
    "Fabricante de llaveros e imanes de PVC personalizados con más de 10 años de experiencia. Fabricación propia, moldes gratis y envío incluido.",
  url: "https://llaverosfactory.com",
};

export const CONTACT = {
  whatsappNumber: "34660511546",
  phoneDisplay: "+34 660 51 15 46",
  email: "llaverosfactory@gmail.com",
  address: "", // [PENDIENTE: dirección de la fábrica]
};

export const SOCIAL = {
  instagram: "https://www.instagram.com/llaverosfactory/",
};

// URL del webhook al que se envía el formulario de contacto (POST JSON).
export const WEBHOOK_URL = "https://appn8n-n8n.icgf4x.easypanel.host/webhook/llaveros-factory-presupuesto";
