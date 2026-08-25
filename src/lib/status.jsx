// Definición central de estados. Todo el color de estado sale de aquí,
// para mantener coherencia en toda la plataforma.

export const estadosProyecto = {
  activo: { label: 'Activo', tono: 'verde' },
  'en-pausa': { label: 'En pausa', tono: 'ambar' },
  entregado: { label: 'Entregado', tono: 'azul' },
  planificado: { label: 'Planificado', tono: 'gris' },
}

export const estadosRequerimiento = {
  abierto: { label: 'Abierto', tono: 'ambar' },
  'en-progreso': { label: 'En progreso', tono: 'azul' },
  resuelto: { label: 'Resuelto', tono: 'verde' },
  cerrado: { label: 'Cerrado', tono: 'gris' },
}

export const prioridades = {
  baja: { label: 'Baja', tono: 'gris' },
  media: { label: 'Media', tono: 'azul' },
  alta: { label: 'Alta', tono: 'ambar' },
  urgente: { label: 'Urgente', tono: 'rojo' },
}

export const tiposRequerimiento = {
  incidente: 'Incidente',
  bug: 'Error / Bug',
  mejora: 'Mejora',
  consulta: 'Consulta',
  proyecto: 'Proyecto nuevo',
}

export function StatusPill({ tono = 'gris', children }) {
  return (
    <span className={`pill pill--${tono}`}>
      <span className="pill__dot" />
      {children}
    </span>
  )
}
