import { useMemo, useState } from 'react'
import { portafolio } from '../data.js'
import { StatusPill } from '../lib/status.jsx'
import { Reveal, Stagger } from '../lib/motion.jsx'

// Íconos por categoría
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
      <path d="M4 7h16l-1 4H5L4 7Z" />
      <path d="M4 7 3.2 4H2M6 11v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7" />
      <path d="M9 15h6" />
    </svg>
  ),
  viajes: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.5 13.5 3 11l2-2 4 1 4-4c.9-.9 2.4-.9 3.3 0 .9.9.9 2.4 0 3.3l-4 4 1 4-2 2-2.5-7.5Z" />
    </svg>
  ),
  envios: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17.5" cy="18" r="1.6" />
    </svg>
  ),
}

const filtros = [
  { id: 'todos', label: 'Todos' },
  { id: 'cafe', label: 'Cafetería' },
  { id: 'market', label: 'Mini market' },
  { id: 'viajes', label: 'Viajes' },
  { id: 'envios', label: 'Envíos' },
]

function dominio(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return 'tu-sitio.com'
  }
}

export default function Projects() {
  const [filtro, setFiltro] = useState('todos')
  const lista = useMemo(
    () => (filtro === 'todos' ? portafolio : portafolio.filter((p) => p.categoria === filtro)),
    [filtro],
  )

  return (
    <section className="section" id="proyectos">
      <div className="wrap">
        <Reveal className="section__head">
          <div>
            <p className="eyebrow">Portafolio</p>
            <h2>Sitios que hemos creado</h2>
            <p className="section__sub">
              Algunos ejemplos de proyectos entregados. Haz clic para visitarlos.
            </p>
          </div>
          <div className="filters">
            {filtros.map((f) => (
              <button
                key={f.id}
                className={`chip ${filtro === f.id ? 'chip--on' : ''}`}
                onClick={() => setFiltro(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Stagger className="grid" key={filtro}>
          {lista.map((p) => {
            const activo = p.url && p.url !== '#'
            return (
              <article className={`pcard pcard--${p.categoria}`} key={p.nombre}>
                <a
                  className="pcard__frame"
                  href={activo ? p.url : undefined}
                  target={activo ? '_blank' : undefined}
                  rel={activo ? 'noopener noreferrer' : undefined}
                  aria-label={`Visitar ${p.nombre}`}
                >
                  <div className="pcard__bar">
                    <span className="pcard__dots">
                      <i /><i /><i />
                    </span>
                    <span className="pcard__url">{dominio(p.url)}</span>
                  </div>
                  <div className="pcard__shot">{Iconos[p.categoria]}</div>
                </a>

                <div className="pcard__body">
                  <div className="pcard__top">
                    <span className="pcard__cat">{p.etiquetaCat}</span>
                    <StatusPill tono={activo ? 'verde' : 'gris'}>
                      {activo ? 'En línea' : 'Pendiente URL'}
                    </StatusPill>
                  </div>
                  <h3>{p.nombre}</h3>
                  <p className="pcard__desc">{p.resumen}</p>
                  <div className="tags">
                    {p.etiquetas.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  {activo ? (
                    <a
                      className="pcard__cta"
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visitar sitio
                      <span className="pcard__arrow" aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="pcard__cta pcard__cta--off">Próximamente</span>
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
