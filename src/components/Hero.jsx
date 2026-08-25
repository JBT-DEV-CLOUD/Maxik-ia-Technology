import { marca } from '../data.js'
import { useCountUp } from '../lib/motion.jsx'

function Contador({ valor, etiqueta }) {
  const n = useCountUp(valor, { start: true })
  return (
    <div className="opstrip__cell">
      <div className="opstrip__num">{String(n).padStart(2, '0')}</div>
      <div className="opstrip__label">{etiqueta}</div>
    </div>
  )
}

export default function Hero({ stats, onIrSoporte }) {
  return (
    <section className="hero" id="inicio">
      <div className="wrap hero__grid">
        <div className="hero__text">
          <p className="eyebrow">{marca.claim}</p>
          <h1>Tus proyectos y tu soporte, en un solo lugar.</h1>
          <p className="hero__lead">
            Creamos tu página web, tu tienda en línea o tu app, y te damos seguimiento con
            soporte por estado. Claro para tu equipo, claro para tus clientes.
          </p>
          <div className="hero__actions">
            <a href="#servicios" className="btn btn--onDark">
              Ver servicios
            </a>
            <button className="btn btn--outlineDark" onClick={onIrSoporte}>
              Crear requerimiento
            </button>
          </div>
        </div>

        <div className="hero__brand">
          <div className="hero__halo" aria-hidden="true" />
          <img className="hero__logo" src="/logo-mark.png" alt={marca.nombre} />
        </div>
      </div>

      <div className="wrap">
        <div className="opstrip">
          <Contador valor={stats.activos} etiqueta="Proyectos activos" />
          <Contador valor={stats.abiertos} etiqueta="Requerimientos abiertos" />
          <Contador valor={stats.resueltos} etiqueta="Resueltos" />
        </div>
      </div>
    </section>
  )
}
