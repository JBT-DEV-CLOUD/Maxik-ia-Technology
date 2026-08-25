// ─────────────────────────────────────────────────────────────
//  DATOS DE LA PLATAFORMA
//  Edita este archivo para cargar tu contenido real.
// ─────────────────────────────────────────────────────────────

export const marca = {
  nombre: 'Maxik-IA Technology',
  claim: 'Innovación • Automatización • Inteligencia Artificial',
  contactoEmail: 'soporte@maxikia.com',
}

// ── Servicios que ofrece la empresa (módulo de creación) ──────
export const servicios = [
  {
    id: 'web',
    icono: 'web',
    titulo: 'Páginas Web',
    resumen:
      'Sitios corporativos y landing pages rápidos, modernos y optimizados para buscadores.',
    incluye: [
      'Diseño a medida de tu marca',
      'Responsive y accesible',
      'Optimización SEO y velocidad',
      'Formularios y analítica',
    ],
  },
  {
    id: 'tienda',
    icono: 'tienda',
    titulo: 'Tiendas Virtuales',
    resumen:
      'E-commerce completo con pagos en línea, catálogo y gestión de pedidos e inventario.',
    incluye: [
      'Catálogo, carrito y checkout',
      'Pasarela de pagos',
      'Inventario y pedidos',
      'Panel de administración',
    ],
  },
  {
    id: 'app',
    icono: 'app',
    titulo: 'Aplicaciones y Apps',
    resumen:
      'Apps móviles y web a la medida de tu operación o de tus clientes, con integraciones.',
    incluye: [
      'iOS, Android y web',
      'Integraciones y APIs',
      'Notificaciones y offline',
      'Publicación en tiendas',
    ],
  },
]

// ── Portafolio · sitios que hemos desarrollado ────────────────
//  categoria válida (define ícono y color): cafe, market, viajes, envios
export const portafolio = [
  {
    categoria: 'cafe',
    etiquetaCat: 'Cafetería',
    nombre: 'Acuarius Café & Sabores',
    resumen:
      'Café de especialidad en Fontibón, Bogotá: carta de cafés, tés y postres, reservas en tiempo real y un recomendador de bebidas con IA.',
    url: 'https://acuarius-cafe1.andrescastilho.workers.dev/',
    etiquetas: ['Carta', 'Reservas', 'IA'],
  },
  {
    categoria: 'market',
    etiquetaCat: 'Mini market',
    nombre: 'Mercadinho Brasileiro CO',
    resumen:
      'Tienda de productos brasileños en Colombia —guaraná, brigadeiro, pão de queijo, açaí— con pedidos a domicilio.',
    url: 'https://mercadinho-brasileiro-co.pages.dev/',
    etiquetas: ['Catálogo', 'Domicilios'],
  },
  {
    categoria: 'viajes',
    etiquetaCat: 'Agencia de viajes',
    nombre: 'Maxikia Global Travel',
    resumen:
      'Agencia de viajes con planes todo incluido, cotizador con precio al instante y reserva por WhatsApp.',
    url: 'https://maxikiaglobaltravel.com/',
    etiquetas: ['Paquetes', 'Cotizador', 'Reservas'],
  },
  {
    categoria: 'envios',
    etiquetaCat: 'Envíos y entregas',
    nombre: 'Maxikia Express',
    resumen:
      'App de mandados y entregas urgentes en Bogotá: mismo día, repartidores verificados y seguimiento en tiempo real.',
    url: 'https://www.maxikia.com/',
    etiquetas: ['Entregas', 'Rastreo', 'App'],
  },
]

// ── Requerimientos de ejemplo ─────────────────────────────────
//  Los que envíes desde el formulario se guardan en el navegador
//  y aparecen junto a estos.
export const requerimientosDemo = [
  {
    ref: 'SUP-2026-014',
    titulo: 'Ajustar el recomendador de bebidas',
    proyecto: 'Acuarius Café & Sabores',
    tipo: 'mejora',
    prioridad: 'media',
    estado: 'en-progreso',
    creado: '2026-08-20',
    demo: true,
  },
  {
    ref: 'SUP-2026-013',
    titulo: 'Error al calcular tarifa por distancia',
    proyecto: 'Maxikia Express',
    tipo: 'incidente',
    prioridad: 'alta',
    estado: 'abierto',
    creado: '2026-08-19',
    demo: true,
  },
  {
    ref: 'SUP-2026-011',
    titulo: 'Consulta sobre pasarela de pagos',
    proyecto: 'Mercadinho Brasileiro CO',
    tipo: 'consulta',
    prioridad: 'baja',
    estado: 'resuelto',
    creado: '2026-08-12',
    demo: true,
  },
]
