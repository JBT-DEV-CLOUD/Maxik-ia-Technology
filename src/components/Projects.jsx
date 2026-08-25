import { useMemo, useState } from 'react'
import { proyectos } from '../data.js'
import { estadosProyecto, StatusPill } from '../lib/status.jsx'
import { Reveal, Stagger } from '../lib/motion.jsx'

const filtros = [
  { id: 'todos', label: 'Todos' },
  { id: 'activo', label: 'Activos' },
  { id: 'en-pausa', label: 'En pausa' },
  { id: 'entregado', label: 'Entregados' },
  { id: 'planificado', label: 'Planificados' },
]

function fecha(iso) {
  return new Date(iso).toLocaleDateString('es', { day: '2-digit', month: 'short', year: 'numeric' })
}

export default function Projects() {
  const [filtro, setFiltro] = useState('todos')

  const lista = useMemo(
    () => (filtro === 'todos' ? proyectos : proyectos.filter((p) => p.estado === filtro)),
    [filtro],
  )

  return (
    <section className="section" id="proyectos">
      <div className="wrap">
        <Reveal className="section__head">
          <div>
            <p className="eyebrow">Catálogo</p>
            <h2>Proyectos</h2>
            <p className="section__sub">
              Cada proyecto muestra su estado, avance y última actualización.
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
            const est = estadosProyecto[p.estado]
            return (
              <article className="card" key={p.ref}>
                <div className="card__top">
                  <span className="ref">{p.ref}</span>
                  <StatusPill tono={est.tono}>{est.label}</StatusPill>
                </div>
                <h3>{p.titulo}</h3>
                <p className="card__desc">{p.resumen}</p>
                <div className="tags">
                  {p.etiquetas.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div>
                  <div className="progress" aria-hidden="true">
                    <div className="progress__bar" style={{ width: `${p.progreso}%` }} />
                  </div>
                </div>
                <div className="card__foot">
                  <span className="card__meta">{p.progreso}% · {p.responsable}</span>
                  <span>Act. {fecha(p.actualizado)}</span>
                </div>
              </article>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
