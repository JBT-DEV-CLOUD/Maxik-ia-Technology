// ─────────────────────────────────────────────────────────────
//  DATOS DE LA PLATAFORMA
//  Edita este archivo para cargar tus propios proyectos.
//  Cada proyecto necesita un "ref" único (ej. PRJ-001).
// ─────────────────────────────────────────────────────────────

export const marca = {
  nombre: 'Maxik-IA Technology',
  claim: 'Tecnología, proyectos y soporte',
  contactoEmail: 'soporte@maxik-ia.com',
}

// Servicios que ofrece la empresa (módulo de creación).
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

export const proyectos = [
  {
    ref: 'PRJ-001',
    titulo: 'Portal de clientes',
    resumen:
      'Área privada donde cada cliente consulta el estado de sus servicios, facturas y documentos.',
    etiquetas: ['Web', 'Autenticación', 'Facturación'],
    estado: 'activo',
    progreso: 72,
    responsable: 'Equipo Plataforma',
    actualizado: '2026-08-18',
  },
  {
    ref: 'PRJ-002',
    titulo: 'App de inventario',
    resumen:
      'Aplicación móvil para registrar entradas y salidas de almacén con lectura de código de barras.',
    etiquetas: ['Móvil', 'Offline', 'Escaneo'],
    estado: 'activo',
    progreso: 40,
    responsable: 'Equipo Móvil',
    actualizado: '2026-08-21',
  },
  {
    ref: 'PRJ-003',
    titulo: 'Migración a la nube',
    resumen:
      'Traslado de la infraestructura on-premise a contenedores gestionados, con respaldos automáticos.',
    etiquetas: ['Infraestructura', 'DevOps'],
    estado: 'en-pausa',
    progreso: 30,
    responsable: 'Infraestructura',
    actualizado: '2026-07-30',
  },
  {
    ref: 'PRJ-004',
    titulo: 'Rediseño del sitio corporativo',
    resumen:
      'Nueva identidad visual, mejoras de accesibilidad y optimización de velocidad de carga.',
    etiquetas: ['Diseño', 'Accesibilidad', 'SEO'],
    estado: 'entregado',
    progreso: 100,
    responsable: 'Diseño',
    actualizado: '2026-06-15',
  },
  {
    ref: 'PRJ-005',
    titulo: 'Panel de métricas en tiempo real',
    resumen:
      'Tablero para monitorear ventas, tráfico y alertas operativas desde una sola pantalla.',
    etiquetas: ['Datos', 'Dashboards'],
    estado: 'planificado',
    progreso: 5,
    responsable: 'Datos',
    actualizado: '2026-08-10',
  },
  {
    ref: 'PRJ-006',
    titulo: 'Integración con pasarela de pago',
    resumen:
      'Conexión con la pasarela de pagos para cobros recurrentes y conciliación automática.',
    etiquetas: ['Pagos', 'API'],
    estado: 'activo',
    progreso: 58,
    responsable: 'Equipo Plataforma',
    actualizado: '2026-08-22',
  },
]

// Requerimientos de ejemplo. Los que envíes desde el formulario
// se guardan en el navegador y aparecen junto a estos.
export const requerimientosDemo = [
  {
    ref: 'SUP-2026-014',
    titulo: 'Error al descargar factura en PDF',
    proyecto: 'PRJ-001',
    tipo: 'incidente',
    prioridad: 'alta',
    estado: 'en-progreso',
    creado: '2026-08-20',
    demo: true,
  },
  {
    ref: 'SUP-2026-013',
    titulo: 'Agregar filtro por fecha en el inventario',
    proyecto: 'PRJ-002',
    tipo: 'mejora',
    prioridad: 'media',
    estado: 'abierto',
    creado: '2026-08-19',
    demo: true,
  },
  {
    ref: 'SUP-2026-011',
    titulo: 'Consulta sobre exportación de datos',
    proyecto: 'PRJ-005',
    tipo: 'consulta',
    prioridad: 'baja',
    estado: 'resuelto',
    creado: '2026-08-12',
    demo: true,
  },
]
