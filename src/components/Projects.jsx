import { useMemo, useState } from 'react'
import { portafolio } from '../data.js'
import { StatusPill } from '../lib/status.jsx'
import { Reveal, Stagger } from '../lib/motion.jsx'
import { useI18n } from '../i18n.jsx'

function dominio(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return 'tu-sitio.com'
  }
}

export default function Projects() {
  const { t } = useI18n()
  const [filtro, setFiltro] = useState('todos')

  const filtros = ['todos', 'cafe', 'market', 'viajes', 'envios']
  const lista = useMemo(
    () => (filtro === 'todos' ? portafolio : portafolio.filter((p) => p.categoria === filtro)),
    [filtro],
  )

  return (
    <section className="section" id="proyectos">
      <div className="wrap">
        <Reveal className="section__head">
          <div>
            <p className="eyebrow">{t.portfolio.eyebrow}</p>
            <h2>{t.portfolio.title}</h2>
            <p className="section__sub">{t.portfolio.sub}</p>
          </div>
          <div className="filters">
            {filtros.map((f) => (
              <button
                key={f}
                className={`chip ${filtro === f ? 'chip--on' : ''}`}
                onClick={() => setFiltro(f)}
              >
                {t.portfolio.filtros[f]}
              </button>
            ))}
          </div>
        </Reveal>

        <Stagger className="grid" key={filtro}>
          {lista.map((p) => {
            const activo = p.url && p.url !== '#'
            const info = t.portfolio.items[p.categoria]
            return (
              <article className="pcard" key={p.nombre}>
                <a
                  className="pcard__frame"
                  href={activo ? p.url : undefined}
                  target={activo ? '_blank' : undefined}
                  rel={activo ? 'noopener noreferrer' : undefined}
                  aria-label={`${t.portfolio.visitar} · ${p.nombre}`}
                >
                  <div className="pcard__bar">
                    <span className="pcard__dots"><i /><i /><i /></span>
                    <span className="pcard__url">{dominio(p.url)}</span>
                  </div>
                  <div className={`pcard__shot pcard__shot--${p.categoria}`}>
                    <img className="pcard__logo" src={p.logo} alt={p.nombre} loading="lazy" />
                  </div>
                </a>

                <div className="pcard__body">
                  <div className="pcard__top">
                    <span className="pcard__cat">{t.portfolio.cat[p.categoria]}</span>
                    <StatusPill tono={activo ? 'verde' : 'gris'}>
                      {activo ? t.portfolio.enLinea : t.portfolio.pendiente}
                    </StatusPill>
                  </div>
                  <h3>{p.nombre}</h3>
                  <p className="pcard__desc">{info.resumen}</p>
                  <div className="tags">
                    {info.etiquetas.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  {activo ? (
                    <a className="pcard__cta" href={p.url} target="_blank" rel="noopener noreferrer">
                      {t.portfolio.visitar}
                      <span className="pcard__arrow" aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="pcard__cta pcard__cta--off">{t.portfolio.proximamente}</span>
                  )}
                </div>
              </article>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
