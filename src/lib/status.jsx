// Solo el color (tono) de cada estado. Las etiquetas de texto vienen de i18n.

export const tonoRequerimiento = {
  abierto: 'ambar',
  'en-progreso': 'azul',
  resuelto: 'verde',
  cerrado: 'gris',
}

export const tonoPrioridad = {
  baja: 'gris',
  media: 'azul',
  alta: 'ambar',
  urgente: 'rojo',
}

export function StatusPill({ tono = 'gris', children }) {
  return (
    <span className={`pill pill--${tono}`}>
      <span className="pill__dot" />
      {children}
    </span>
  )
}
