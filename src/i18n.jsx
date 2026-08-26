import { createContext, useContext, useEffect, useState } from 'react'

// ── Español (base) ───────────────────────────────────────────
const es = {
  nombre: 'Español',
  nav: { servicios: 'Servicios', portafolio: 'Portafolio', soporte: 'Soporte', contacto: 'Contacto', cta: 'Nuevo requerimiento' },
  hero: {
    slogan: 'Innovación • Automatización • Inteligencia Artificial',
    h1: 'Somos la tecnología que impulsa tu negocio.',
    lead: 'Creamos tu página web, tu tienda en línea o tu app, y te damos seguimiento con soporte por estado. Claro para tu equipo, claro para tus clientes.',
    verServicios: 'Ver servicios',
    crearReq: 'Crear requerimiento',
    statSitios: 'Sitios en línea',
    statAbiertos: 'Requerimientos abiertos',
    statResueltos: 'Resueltos',
  },
  services: {
    eyebrow: 'Qué hacemos',
    title: 'Creamos tu presencia digital',
    sub: 'Desde el sitio web hasta la tienda en línea y la app. Elige un servicio y solicita tu proyecto en segundos.',
    cta: 'Solicitar este servicio',
    items: {
      web: { titulo: 'Páginas Web', resumen: 'Sitios corporativos y landing pages rápidos, modernos y optimizados para buscadores.', incluye: ['Diseño a medida de tu marca', 'Responsive y accesible', 'Optimización SEO y velocidad', 'Formularios y analítica'] },
      tienda: { titulo: 'Tiendas Virtuales', resumen: 'E-commerce completo con pagos en línea, catálogo y gestión de pedidos e inventario.', incluye: ['Catálogo, carrito y checkout', 'Pasarela de pagos', 'Inventario y pedidos', 'Panel de administración'] },
      app: { titulo: 'Aplicaciones y Apps', resumen: 'Apps móviles y web a la medida de tu operación o de tus clientes, con integraciones.', incluye: ['iOS, Android y web', 'Integraciones y APIs', 'Notificaciones y offline', 'Publicación en tiendas'] },
    },
  },
  portfolio: {
    eyebrow: 'Portafolio',
    title: 'Sitios que hemos creado',
    sub: 'Algunos ejemplos de proyectos entregados. Haz clic para visitarlos.',
    enLinea: 'En línea',
    pendiente: 'Pendiente URL',
    visitar: 'Visitar sitio',
    proximamente: 'Próximamente',
    filtros: { todos: 'Todos', cafe: 'Cafetería', market: 'Mini market', viajes: 'Viajes', envios: 'Envíos' },
    cat: { cafe: 'Cafetería', market: 'Mini market', viajes: 'Agencia de viajes', envios: 'Envíos y entregas' },
    items: {
      cafe: { resumen: 'Café de especialidad en Fontibón, Bogotá: carta de cafés, tés y postres, reservas en tiempo real y un recomendador de bebidas con IA.', etiquetas: ['Carta', 'Reservas', 'IA'] },
      market: { resumen: 'Tienda de productos brasileños en Colombia —guaraná, brigadeiro, pão de queijo, açaí— con pedidos a domicilio.', etiquetas: ['Catálogo', 'Domicilios'] },
      viajes: { resumen: 'Agencia de viajes con planes todo incluido, cotizador con precio al instante y reserva por WhatsApp.', etiquetas: ['Paquetes', 'Cotizador', 'Reservas'] },
      envios: { resumen: 'App de mandados y entregas urgentes en Bogotá: mismo día, repartidores verificados y seguimiento en tiempo real.', etiquetas: ['Entregas', 'Rastreo', 'App'] },
    },
  },
  support: {
    eyebrow: 'Mesa de ayuda',
    title: 'Requerimientos de soporte',
    sub: 'Registra una solicitud y recibe un código de seguimiento. Consulta el estado más abajo.',
    formTitle: 'Nuevo requerimiento',
    formHint: 'Los campos con * son obligatorios.',
    nombre: 'Nombre', correo: 'Correo', asunto: 'Asunto',
    sitio: 'Sitio / proyecto relacionado', general: 'General / otro',
    tipo: 'Tipo', prioridad: 'Prioridad', descripcion: 'Descripción',
    phNombre: 'Ana Ramírez', phCorreo: 'ana@correo.com', phAsunto: 'Ej. El botón de exportar no responde',
    phDescripcion: 'Describe qué ocurre, en qué pantalla y qué esperabas que pasara.',
    enviar: 'Enviar requerimiento',
    errNombre: 'Escribe tu nombre.', errCorreo: 'Correo no válido.', errTitulo: 'Resume el requerimiento en una línea.', errDescripcion: 'Cuéntanos un poco más (mín. 12 caracteres).',
    okTitle: 'Requerimiento registrado', okHint: 'Guarda este código para dar seguimiento:', okOtro: 'Crear otro',
    seguimiento: 'Seguimiento', todosEstados: 'Todos los estados', vacio: 'No hay requerimientos con ese estado.',
    nota: 'Los requerimientos que envíes se guardan en este navegador. Conecta un backend para compartirlos entre usuarios (ver README).',
    solicitudServicio: 'Solicitud de servicio:',
    tipos: { incidente: 'Incidente', bug: 'Error / Bug', mejora: 'Mejora', consulta: 'Consulta', proyecto: 'Proyecto nuevo' },
    prioridades: { baja: 'Baja', media: 'Media', alta: 'Alta', urgente: 'Urgente' },
    estados: { abierto: 'Abierto', 'en-progreso': 'En progreso', resuelto: 'Resuelto', cerrado: 'Cerrado' },
    demoTitulos: ['Ajustar el recomendador de bebidas', 'Error al calcular tarifa por distancia', 'Consulta sobre pasarela de pagos'],
  },
  footer: {
    secciones: 'Secciones', contacto: 'Contacto', portafolio: 'Portafolio', requerimientos: 'Requerimientos', inicio: 'Inicio',
    horario: 'Lun a Vie · 9:00 – 18:00',
    tagline: 'Innovación, automatización e inteligencia artificial para impulsar tu negocio: páginas web, tiendas virtuales, apps y soporte.',
  },
}

// ── English ──────────────────────────────────────────────────
const en = {
  nombre: 'English',
  nav: { servicios: 'Services', portafolio: 'Portfolio', soporte: 'Support', contacto: 'Contact', cta: 'New request' },
  hero: {
    slogan: 'Innovation • Automation • Artificial Intelligence',
    h1: "We're the technology that powers your business.",
    lead: 'We build your website, your online store or your app, and keep you posted with status-based support. Clear for your team, clear for your clients.',
    verServicios: 'View services',
    crearReq: 'New request',
    statSitios: 'Sites online',
    statAbiertos: 'Open requests',
    statResueltos: 'Resolved',
  },
  services: {
    eyebrow: 'What we do',
    title: 'We build your digital presence',
    sub: 'From the website to the online store and the app. Pick a service and request your project in seconds.',
    cta: 'Request this service',
    items: {
      web: { titulo: 'Websites', resumen: 'Fast, modern corporate sites and landing pages, optimized for search engines.', incluye: ['Custom design for your brand', 'Responsive and accessible', 'SEO and speed optimization', 'Forms and analytics'] },
      tienda: { titulo: 'Online Stores', resumen: 'Full e-commerce with online payments, catalog and order & inventory management.', incluye: ['Catalog, cart and checkout', 'Payment gateway', 'Inventory and orders', 'Admin dashboard'] },
      app: { titulo: 'Applications & Apps', resumen: 'Custom mobile and web apps for your operation or your clients, with integrations.', incluye: ['iOS, Android and web', 'Integrations and APIs', 'Notifications and offline', 'Publishing to app stores'] },
    },
  },
  portfolio: {
    eyebrow: 'Portfolio',
    title: "Sites we've built",
    sub: 'A few examples of delivered projects. Click to visit them.',
    enLinea: 'Online',
    pendiente: 'URL pending',
    visitar: 'Visit site',
    proximamente: 'Coming soon',
    filtros: { todos: 'All', cafe: 'Café', market: 'Mini market', viajes: 'Travel', envios: 'Delivery' },
    cat: { cafe: 'Café', market: 'Mini market', viajes: 'Travel agency', envios: 'Delivery & courier' },
    items: {
      cafe: { resumen: 'Specialty coffee shop in Fontibón, Bogotá: menu of coffees, teas and desserts, real-time reservations and an AI drink recommender.', etiquetas: ['Menu', 'Reservations', 'AI'] },
      market: { resumen: 'Brazilian grocery store in Colombia —guaraná, brigadeiro, pão de queijo, açaí— with home delivery.', etiquetas: ['Catalog', 'Delivery'] },
      viajes: { resumen: 'Travel agency with all-inclusive packages, instant price quoting and booking via WhatsApp.', etiquetas: ['Packages', 'Quotes', 'Booking'] },
      envios: { resumen: 'Errands and urgent delivery app in Bogotá: same day, verified couriers and real-time tracking.', etiquetas: ['Delivery', 'Tracking', 'App'] },
    },
  },
  support: {
    eyebrow: 'Help desk',
    title: 'Support requests',
    sub: 'Submit a request and get a tracking code. Check the status below.',
    formTitle: 'New request',
    formHint: 'Fields marked * are required.',
    nombre: 'Name', correo: 'Email', asunto: 'Subject',
    sitio: 'Related site / project', general: 'General / other',
    tipo: 'Type', prioridad: 'Priority', descripcion: 'Description',
    phNombre: 'Jane Doe', phCorreo: 'jane@email.com', phAsunto: "e.g. The export button doesn't respond",
    phDescripcion: 'Describe what happens, on which screen, and what you expected.',
    enviar: 'Send request',
    errNombre: 'Enter your name.', errCorreo: 'Invalid email.', errTitulo: 'Summarize the request in one line.', errDescripcion: 'Tell us a bit more (min. 12 characters).',
    okTitle: 'Request submitted', okHint: 'Save this code to track it:', okOtro: 'Create another',
    seguimiento: 'Tracking', todosEstados: 'All statuses', vacio: 'No requests with that status.',
    nota: 'Requests you submit are stored in this browser. Connect a backend to share them across users (see README).',
    solicitudServicio: 'Service request:',
    tipos: { incidente: 'Incident', bug: 'Bug', mejora: 'Improvement', consulta: 'Question', proyecto: 'New project' },
    prioridades: { baja: 'Low', media: 'Medium', alta: 'High', urgente: 'Urgent' },
    estados: { abierto: 'Open', 'en-progreso': 'In progress', resuelto: 'Resolved', cerrado: 'Closed' },
    demoTitulos: ['Tune the drink recommender', 'Error calculating distance fee', 'Question about payment gateway'],
  },
  footer: {
    secciones: 'Sections', contacto: 'Contact', portafolio: 'Portfolio', requerimientos: 'Requests', inicio: 'Home',
    horario: 'Mon–Fri · 9:00 – 18:00',
    tagline: 'Innovation, automation and artificial intelligence to power your business: websites, online stores, apps and support.',
  },
}

// ── Português ────────────────────────────────────────────────
const pt = {
  nombre: 'Português',
  nav: { servicios: 'Serviços', portafolio: 'Portfólio', soporte: 'Suporte', contacto: 'Contato', cta: 'Nova solicitação' },
  hero: {
    slogan: 'Inovação • Automação • Inteligência Artificial',
    h1: 'Somos a tecnologia que impulsiona o seu negócio.',
    lead: 'Criamos seu site, sua loja online ou seu app, e acompanhamos você com suporte por status. Claro para sua equipe, claro para seus clientes.',
    verServicios: 'Ver serviços',
    crearReq: 'Nova solicitação',
    statSitios: 'Sites no ar',
    statAbiertos: 'Solicitações abertas',
    statResueltos: 'Resolvidos',
  },
  services: {
    eyebrow: 'O que fazemos',
    title: 'Criamos sua presença digital',
    sub: 'Do site à loja online e ao app. Escolha um serviço e solicite seu projeto em segundos.',
    cta: 'Solicitar este serviço',
    items: {
      web: { titulo: 'Sites', resumen: 'Sites corporativos e landing pages rápidos, modernos e otimizados para buscadores.', incluye: ['Design sob medida para sua marca', 'Responsivo e acessível', 'Otimização de SEO e velocidade', 'Formulários e analytics'] },
      tienda: { titulo: 'Lojas Virtuais', resumen: 'E-commerce completo com pagamentos online, catálogo e gestão de pedidos e estoque.', incluye: ['Catálogo, carrinho e checkout', 'Gateway de pagamento', 'Estoque e pedidos', 'Painel de administração'] },
      app: { titulo: 'Aplicativos e Apps', resumen: 'Apps móveis e web sob medida para sua operação ou seus clientes, com integrações.', incluye: ['iOS, Android e web', 'Integrações e APIs', 'Notificações e offline', 'Publicação nas lojas'] },
    },
  },
  portfolio: {
    eyebrow: 'Portfólio',
    title: 'Sites que criamos',
    sub: 'Alguns exemplos de projetos entregues. Clique para visitá-los.',
    enLinea: 'No ar',
    pendiente: 'URL pendente',
    visitar: 'Visitar site',
    proximamente: 'Em breve',
    filtros: { todos: 'Todos', cafe: 'Cafeteria', market: 'Mini mercado', viajes: 'Viagens', envios: 'Envios' },
    cat: { cafe: 'Cafeteria', market: 'Mini mercado', viajes: 'Agência de viagens', envios: 'Envios e entregas' },
    items: {
      cafe: { resumen: 'Cafeteria de especialidade em Fontibón, Bogotá: carta de cafés, chás e sobremesas, reservas em tempo real e um recomendador de bebidas com IA.', etiquetas: ['Cardápio', 'Reservas', 'IA'] },
      market: { resumen: 'Loja de produtos brasileiros na Colômbia —guaraná, brigadeiro, pão de queijo, açaí— com entrega em casa.', etiquetas: ['Catálogo', 'Entrega'] },
      viajes: { resumen: 'Agência de viagens com pacotes all inclusive, cotação com preço na hora e reserva por WhatsApp.', etiquetas: ['Pacotes', 'Cotação', 'Reservas'] },
      envios: { resumen: 'App de tarefas e entregas urgentes em Bogotá: no mesmo dia, entregadores verificados e rastreamento em tempo real.', etiquetas: ['Entregas', 'Rastreamento', 'App'] },
    },
  },
  support: {
    eyebrow: 'Central de ajuda',
    title: 'Solicitações de suporte',
    sub: 'Registre uma solicitação e receba um código de acompanhamento. Veja o status abaixo.',
    formTitle: 'Nova solicitação',
    formHint: 'Campos com * são obrigatórios.',
    nombre: 'Nome', correo: 'E-mail', asunto: 'Assunto',
    sitio: 'Site / projeto relacionado', general: 'Geral / outro',
    tipo: 'Tipo', prioridad: 'Prioridade', descripcion: 'Descrição',
    phNombre: 'Ana Ramírez', phCorreo: 'ana@email.com', phAsunto: 'Ex. O botão de exportar não responde',
    phDescripcion: 'Descreva o que acontece, em qual tela e o que você esperava.',
    enviar: 'Enviar solicitação',
    errNombre: 'Escreva seu nome.', errCorreo: 'E-mail inválido.', errTitulo: 'Resuma a solicitação em uma linha.', errDescripcion: 'Conte um pouco mais (mín. 12 caracteres).',
    okTitle: 'Solicitação registrada', okHint: 'Guarde este código para acompanhar:', okOtro: 'Criar outra',
    seguimiento: 'Acompanhamento', todosEstados: 'Todos os status', vacio: 'Nenhuma solicitação com esse status.',
    nota: 'As solicitações enviadas ficam salvas neste navegador. Conecte um backend para compartilhá-las entre usuários (ver README).',
    solicitudServicio: 'Solicitação de serviço:',
    tipos: { incidente: 'Incidente', bug: 'Erro / Bug', mejora: 'Melhoria', consulta: 'Dúvida', proyecto: 'Novo projeto' },
    prioridades: { baja: 'Baixa', media: 'Média', alta: 'Alta', urgente: 'Urgente' },
    estados: { abierto: 'Aberto', 'en-progreso': 'Em andamento', resuelto: 'Resolvido', cerrado: 'Fechado' },
    demoTitulos: ['Ajustar o recomendador de bebidas', 'Erro ao calcular tarifa por distância', 'Dúvida sobre gateway de pagamento'],
  },
  footer: {
    secciones: 'Seções', contacto: 'Contato', portafolio: 'Portfólio', requerimientos: 'Solicitações', inicio: 'Início',
    horario: 'Seg a Sex · 9:00 – 18:00',
    tagline: 'Inovação, automação e inteligência artificial para impulsionar seu negócio: sites, lojas virtuais, apps e suporte.',
  },
}

// ── Chile (español de Chile) ─────────────────────────────────
function deepMerge(base, over) {
  const out = Array.isArray(base) ? [...base] : { ...base }
  for (const k in over) {
    if (over[k] && typeof over[k] === 'object' && !Array.isArray(over[k])) {
      out[k] = deepMerge(base[k] || {}, over[k])
    } else {
      out[k] = over[k]
    }
  }
  return out
}

const cl = deepMerge(es, {
  nombre: 'Chile',
  nav: { cta: 'Nueva solicitud' },
  hero: {
    h1: 'Somos la tecnología que impulsa tu pyme.',
    lead: 'Creamos tu sitio web, tu tienda online o tu app, y te acompañamos con soporte por estado. Claro para tu equipo, claro para tus clientes.',
    crearReq: 'Crear solicitud',
    statAbiertos: 'Solicitudes abiertas',
  },
  services: {
    items: { tienda: { titulo: 'Tiendas Online' } },
  },
  support: {
    formTitle: 'Nueva solicitud',
    enviar: 'Enviar solicitud',
    okTitle: 'Solicitud registrada',
    okOtro: 'Crear otra',
    sub: 'Registra tu solicitud y recibe un código de seguimiento. Revisa el estado más abajo.',
    solicitudServicio: 'Solicitud de servicio:',
  },
  footer: {
    requerimientos: 'Solicitudes',
    tagline: 'Innovación, automatización e inteligencia artificial para potenciar tu pyme: sitios web, tiendas online, apps y soporte.',
  },
})

export const idiomas = { es, en, pt, cl }
export const ordenIdiomas = ['es', 'en', 'pt', 'cl']
export const etiquetaIdioma = { es: 'ES', en: 'EN', pt: 'PT', cl: 'CL' }

const I18nContext = createContext(null)

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState('es')

  useEffect(() => {
    try {
      const guardado = localStorage.getItem('maxikia.lang')
      if (guardado && idiomas[guardado]) setLangState(guardado)
    } catch {
      /* almacenamiento no disponible */
    }
  }, [])

  const setLang = (l) => {
    setLangState(l)
    try {
      localStorage.setItem('maxikia.lang', l)
    } catch {
      /* almacenamiento no disponible */
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = l === 'cl' ? 'es-CL' : l
    }
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t: idiomas[lang] }}>{children}</I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n debe usarse dentro de I18nProvider')
  return ctx
}
