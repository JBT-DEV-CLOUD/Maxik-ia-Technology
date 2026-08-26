import { useCountUp } from '../lib/motion.jsx'
import { useI18n } from '../i18n.jsx'
import { marca } from '../data.js'

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
  const { t } = useI18n()
  return (
    <section className="hero" id="inicio">
      <div className="wrap hero__grid">
        <div className="hero__text">
          <p className="eyebrow">{t.hero.slogan}</p>
          <h1>{t.hero.h1}</h1>
          <p className="hero__lead">{t.hero.lead}</p>
          <div className="hero__actions">
            <a href="#servicios" className="btn btn--onDark">{t.hero.verServicios}</a>
            <button className="btn btn--outlineDark" onClick={onIrSoporte}>{t.hero.crearReq}</button>
          </div>
        </div>

        <div className="hero__brand">
          <div className="hero__halo" aria-hidden="true" />
          <img className="hero__logo" src="/logo-mark.png" alt={marca.nombre} />
        </div>
      </div>

      <div className="wrap">
        <div className="opstrip">
          <Contador valor={stats.sitios} etiqueta={t.hero.statSitios} />
          <Contador valor={stats.abiertos} etiqueta={t.hero.statAbiertos} />
          <Contador valor={stats.resueltos} etiqueta={t.hero.statResueltos} />
        </div>
      </div>
    </section>
  )
}
