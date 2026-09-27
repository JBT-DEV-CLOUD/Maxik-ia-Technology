// ─────────────────────────────────────────────────────────────
//  DATOS ESTRUCTURALES (los textos están en src/i18n.jsx)
// ─────────────────────────────────────────────────────────────

export const marca = {
  nombre: 'Maxik-IA Technology',
  contactoEmail: 'soporte@maxikiatechnology.com',
  whatsapp: [
    { pais: 'Colombia', tel: '+57 324 333 4302', link: 'https://wa.me/573243334302' },
    { pais: 'Chile', tel: '+56 9 7993 7452', link: 'https://wa.me/56979937452' },
  ],
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
    id: 'acuarius',
    categoria: 'cafe',
    nombre: 'Acuarius Café & Sabores',
    url: 'https://acuarius-cafe1.andrescastilho.workers.dev/',
    logo: '/logos/cafe.png',
  },
  {
    id: 'mercadinho',
    categoria: 'market',
    nombre: 'Mercadinho Brasileiro CO',
    url: 'https://mercadinhobrasileiroco.com',
    logo: '/logos/market.jpg',
  },
  {
    id: 'maxikia-travel',
    categoria: 'viajes',
    nombre: 'Maxikia Global Travel',
    url: 'https://maxikiaglobaltravel.com/',
    logo: '/logos/viajes.png',
  },
  {
    id: 'maxikia-express',
    categoria: 'envios',
    nombre: 'Maxikia Express',
    url: 'https://maxikiaexpress.com',
    logo: '/logos/envios.png',
  },
  {
    id: 'fonticerdo',
    categoria: 'carnes',
    nombre: 'Fonti Cerdo de la 18',
    url: 'https://carniceria-fonticerdo-de-la-18.pages.dev/',
  },
  {
    id: 'carnes-pr',
    categoria: 'carnes',
    nombre: 'Carnes Finas Puerto Rico',
    url: 'https://carnes-finas-puerto-rico-2.pages.dev/',
  },
]

// Requerimientos de ejemplo (estructura). El título va por idioma (por índice).
export const requerimientosDemo = [
  { ref: 'SUP-2026-014', proyecto: 'Acuarius Café & Sabores', tipo: 'mejora', prioridad: 'media', estado: 'en-progreso', creado: '2026-08-20' },
  { ref: 'SUP-2026-013', proyecto: 'Maxikia Express', tipo: 'incidente', prioridad: 'alta', estado: 'abierto', creado: '2026-08-19' },
  { ref: 'SUP-2026-011', proyecto: 'Mercadinho Brasileiro CO', tipo: 'consulta', prioridad: 'baja', estado: 'resuelto', creado: '2026-08-12' },
]
