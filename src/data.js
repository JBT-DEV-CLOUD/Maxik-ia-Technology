// ─────────────────────────────────────────────────────────────
//  DATOS ESTRUCTURALES (los textos están en src/i18n.jsx)
// ─────────────────────────────────────────────────────────────

export const marca = {
  nombre: 'Maxik-IA Technology',
  contactoEmail: 'soporte@maxikia.com',
}

// Servicios: id (para textos) + icono
export const servicios = [
  { id: 'web', icono: 'web' },
  { id: 'tienda', icono: 'tienda' },
  { id: 'app', icono: 'app' },
]

// Portafolio: datos fijos. Los textos (resumen, etiquetas) van por idioma.
//  categoria define ícono, color, logo y textos.
export const portafolio = [
  {
    categoria: 'cafe',
    nombre: 'Acuarius Café & Sabores',
    url: 'https://acuarius-cafe1.andrescastilho.workers.dev/',
    logo: '/logos/cafe.png',
  },
  {
    categoria: 'market',
    nombre: 'Mercadinho Brasileiro CO',
    url: 'https://mercadinho-brasileiro-co.pages.dev/',
    logo: '/logos/market.png',
  },
  {
    categoria: 'viajes',
    nombre: 'Maxikia Global Travel',
    url: 'https://maxikiaglobaltravel.com/',
    logo: '/logos/viajes.png',
  },
  {
    categoria: 'envios',
    nombre: 'Maxikia Express',
    url: 'https://www.maxikia.com/',
    logo: '/logos/envios.png',
  },
]

// Requerimientos de ejemplo (estructura). El título va por idioma (por índice).
export const requerimientosDemo = [
  { ref: 'SUP-2026-014', proyecto: 'Acuarius Café & Sabores', tipo: 'mejora', prioridad: 'media', estado: 'en-progreso', creado: '2026-08-20' },
  { ref: 'SUP-2026-013', proyecto: 'Maxikia Express', tipo: 'incidente', prioridad: 'alta', estado: 'abierto', creado: '2026-08-19' },
  { ref: 'SUP-2026-011', proyecto: 'Mercadinho Brasileiro CO', tipo: 'consulta', prioridad: 'baja', estado: 'resuelto', creado: '2026-08-12' },
]
