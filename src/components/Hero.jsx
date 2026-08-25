import { marca } from '../data.js'

export default function Hero({ stats, onIrSoporte }) {
  return (
    <section className="hero" id="inicio">
      <div className="wrap hero__inner">
        <p className="eyebrow">{marca.claim}</p>
        <h1>Tus proyectos y tu soporte, en un solo lugar.</h1>
        <p className="hero__lead">
          Consulta el avance de cada proyecto y registra requerimientos de soporte con
          seguimiento por estado. Claro para tu equipo, claro para tus clientes.
        </p>
        <div className="hero__actions">
          <a href="#proyectos" className="btn btn--onDark">
            Ver proyectos
          </a>
          <button className="btn btn--outlineDark" onClick={onIrSoporte}>
            Crear requerimiento
          </button>
        </div>

        <div className="opstrip">
          <div className="opstrip__cell">
            <div className="opstrip__num">{String(stats.activos).padStart(2, '0')}</div>
            <div className="opstrip__label">Proyectos activos</div>
          </div>
          <div className="opstrip__cell">
            <div className="opstrip__num">{String(stats.abiertos).padStart(2, '0')}</div>
            <div className="opstrip__label">Requerimientos abiertos</div>
          </div>
          <div className="opstrip__cell">
            <div className="opstrip__num">{String(stats.resueltos).padStart(2, '0')}</div>
            <div className="opstrip__label">Resueltos</div>
          </div>
        </div>
      </div>
    </section>
  )
}
