import { servicios } from '../data.js'
import { Reveal, Stagger } from '../lib/motion.jsx'
import { useI18n } from '../i18n.jsx'

const Iconos = {
  web: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 8h18" />
      <circle cx="6" cy="6" r="0.5" fill="currentColor" />
      <path d="M9 21h6M12 18v3" />
    </svg>
  ),
  tienda: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h2l1.2 11.2a2 2 0 0 0 2 1.8h7.4a2 2 0 0 0 2-1.6L20 8H7" />
      <circle cx="10" cy="20" r="1.2" />
      <circle cx="17" cy="20" r="1.2" />
    </svg>
  ),
  app: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="3" width="10" height="18" rx="2.5" />
      <path d="M11 18h2" />
    </svg>
  ),
}

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export default function Services({ onSolicitar }) {
  const { t } = useI18n()
  return (
    <section className="section" id="servicios">
      <div className="wrap">
        <Reveal className="section__head">
          <div>
            <p className="eyebrow">{t.services.eyebrow}</p>
            <h2>{t.services.title}</h2>
            <p className="section__sub">{t.services.sub}</p>
          </div>
        </Reveal>

        <Stagger className="grid">
          {servicios.map((s) => {
            const info = t.services.items[s.id]
            return (
              <article className="scard" key={s.id}>
                <div className="scard__icon">{Iconos[s.icono]}</div>
                <h3>{info.titulo}</h3>
                <p className="scard__desc">{info.resumen}</p>
                <ul className="scard__list">
                  {info.incluye.map((item) => (
                    <li key={item}>
                      <span className="scard__check"><Check /></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="scard__cta" onClick={() => onSolicitar(info.titulo)}>
                  {t.services.cta}
                  <span className="scard__arrow" aria-hidden="true">→</span>
                </button>
              </article>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
