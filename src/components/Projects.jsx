import { useMemo, useState } from 'react'
import { portafolio } from '../data.js'
import { StatusPill } from '../lib/status.jsx'
import { Reveal, Stagger } from '../lib/motion.jsx'
import { useI18n } from '../i18n.jsx'

// Íconos por categoría (se usan cuando el proyecto no tiene logo)
const Iconos = {
  cafe: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 8h13v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Z" />
      <path d="M17 9h2.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M8 3.5c-.4.6-.4 1.4 0 2M11.5 3.5c-.4.6-.4 1.4 0 2" />
    </svg>
  ),
  market: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16l-1 4H5L4 7Z" /><path d="M4 7 3.2 4H2M6 11v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7" /><path d="M9 15h6" />
    </svg>
  ),
  viajes: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.5 13.5 3 11l2-2 4 1 4-4c.9-.9 2.4-.9 3.3 0 .9.9.9 2.4 0 3.3l-4 4 1 4-2 2-2.5-7.5Z" />
    </svg>
  ),
  envios: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" /><circle cx="7" cy="18" r="1.6" /><circle cx="17.5" cy="18" r="1.6" />
    </svg>
  ),
  carnes: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.5 4.5a5.5 5.5 0 0 1 5 7.8c-.6 1.3-1.9 2-3.3 2.2l-2 5.2a1.6 1.6 0 0 1-3-.1l-1-3-3-1a1.6 1.6 0 0 1-.1-3l5.2-2c.2-1.4.9-2.7 2.2-3.3.6-.3 1.3-.5 2-.5Z" />
      <circle cx="14.5" cy="9.5" r="1.4" />
    </svg>
  ),
}

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

  const filtros = ['todos', 'cafe', 'market', 'carnes', 'viajes', 'envios']
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
            const info = t.portfolio.items[p.id]
            return (
              <article className="pcard" key={p.id}>
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
                    {p.logo ? (
                      <img className="pcard__logo" src={p.logo} alt={p.nombre} loading="lazy" />
                    ) : (
                      Iconos[p.categoria]
                    )}
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
                  <p className="pcard__desc">{info?.resumen}</p>
                  <div className="tags">
                    {info?.etiquetas.map((tag) => (
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
