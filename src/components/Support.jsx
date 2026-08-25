import { useEffect, useMemo, useState } from 'react'
import { proyectos, requerimientosDemo } from '../data.js'
import {
  estadosRequerimiento,
  prioridades,
  tiposRequerimiento,
  StatusPill,
} from '../lib/status.jsx'

const CLAVE = 'maxikia.requerimientos'

const formVacio = {
  nombre: '',
  email: '',
  proyecto: '',
  tipo: 'incidente',
  prioridad: 'media',
  titulo: '',
  descripcion: '',
}

function cargarGuardados() {
  try {
    const raw = localStorage.getItem(CLAVE)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function nuevoRef(existentes) {
  const anio = new Date().getFullYear()
  const numeros = [...existentes, ...requerimientosDemo]
    .map((r) => Number(String(r.ref).split('-')[2]))
    .filter((n) => !Number.isNaN(n))
  const siguiente = (numeros.length ? Math.max(...numeros) : 0) + 1
  return `SUP-${anio}-${String(siguiente).padStart(3, '0')}`
}

function fecha(iso) {
  return new Date(iso).toLocaleDateString('es', { day: '2-digit', month: 'short' })
}

export default function Support() {
  const [form, setForm] = useState(formVacio)
  const [errores, setErrores] = useState({})
  const [enviados, setEnviados] = useState([])
  const [confirmacion, setConfirmacion] = useState(null)
  const [filtro, setFiltro] = useState('todos')

  useEffect(() => {
    setEnviados(cargarGuardados())
  }, [])

  const set = (campo) => (e) => setForm((f) => ({ ...f, [campo]: e.target.value }))

  function validar() {
    const e = {}
    if (!form.nombre.trim()) e.nombre = 'Escribe tu nombre.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Correo no válido.'
    if (!form.titulo.trim()) e.titulo = 'Resume el requerimiento en una línea.'
    if (form.descripcion.trim().length < 12) e.descripcion = 'Cuéntanos un poco más (mín. 12 caracteres).'
    setErrores(e)
    return Object.keys(e).length === 0
  }

  function enviar(e) {
    e.preventDefault()
    if (!validar()) return
    const ref = nuevoRef(enviados)
    const ticket = {
      ref,
      titulo: form.titulo.trim(),
      proyecto: form.proyecto || '—',
      tipo: form.tipo,
      prioridad: form.prioridad,
      estado: 'abierto',
      creado: new Date().toISOString().slice(0, 10),
    }
    const actualizado = [ticket, ...enviados]
    setEnviados(actualizado)
    try {
      localStorage.setItem(CLAVE, JSON.stringify(actualizado))
    } catch {
      /* almacenamiento no disponible */
    }
    setConfirmacion(ref)
    setForm(formVacio)
    setErrores({})
  }

  const todos = useMemo(() => [...enviados, ...requerimientosDemo], [enviados])
  const lista = useMemo(
    () => (filtro === 'todos' ? todos : todos.filter((t) => t.estado === filtro)),
    [todos, filtro],
  )

  return (
    <section className="section section--tint" id="soporte">
      <div className="wrap">
        <div className="section__head">
          <div>
            <p className="eyebrow">Mesa de ayuda</p>
            <h2>Requerimientos de soporte</h2>
            <p className="section__sub">
              Registra una solicitud y recibe un código de seguimiento. Consulta el estado más
              abajo.
            </p>
          </div>
        </div>

        <div className="support">
          {/* Formulario */}
          <div className="panel">
            {confirmacion ? (
              <div className="confirm">
                <div className="confirm__check">✓</div>
                <p className="panel__title">Requerimiento registrado</p>
                <p className="panel__hint">Guarda este código para dar seguimiento:</p>
                <span className="ref">{confirmacion}</span>
                <div>
                  <button className="btn btn--primary" onClick={() => setConfirmacion(null)}>
                    Crear otro
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={enviar} noValidate>
                <p className="panel__title">Nuevo requerimiento</p>
                <p className="panel__hint">
                  Los campos con <span style={{ color: 'var(--rojo)' }}>*</span> son obligatorios.
                </p>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="nombre">
                      Nombre <span className="req">*</span>
                    </label>
                    <input
                      id="nombre"
                      className="input"
                      value={form.nombre}
                      onChange={set('nombre')}
                      placeholder="Ana Ramírez"
                    />
                    {errores.nombre && <p className="form-error">{errores.nombre}</p>}
                  </div>
                  <div className="field">
                    <label htmlFor="email">
                      Correo <span className="req">*</span>
                    </label>
                    <input
                      id="email"
                      className="input"
                      type="email"
                      value={form.email}
                      onChange={set('email')}
                      placeholder="ana@correo.com"
                    />
                    {errores.email && <p className="form-error">{errores.email}</p>}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="titulo">
                    Asunto <span className="req">*</span>
                  </label>
                  <input
                    id="titulo"
                    className="input"
                    value={form.titulo}
                    onChange={set('titulo')}
                    placeholder="Ej. El botón de exportar no responde"
                  />
                  {errores.titulo && <p className="form-error">{errores.titulo}</p>}
                </div>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="proyecto">Proyecto relacionado</label>
                    <select
                      id="proyecto"
                      className="select"
                      value={form.proyecto}
                      onChange={set('proyecto')}
                    >
                      <option value="">General / otro</option>
                      {proyectos.map((p) => (
                        <option key={p.ref} value={p.ref}>
                          {p.ref} · {p.titulo}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="tipo">Tipo</label>
                    <select id="tipo" className="select" value={form.tipo} onChange={set('tipo')}>
                      {Object.entries(tiposRequerimiento).map(([id, label]) => (
                        <option key={id} value={id}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="prioridad">Prioridad</label>
                  <select
                    id="prioridad"
                    className="select"
                    value={form.prioridad}
                    onChange={set('prioridad')}
                  >
                    {Object.entries(prioridades).map(([id, p]) => (
                      <option key={id} value={id}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="descripcion">
                    Descripción <span className="req">*</span>
                  </label>
                  <textarea
                    id="descripcion"
                    className="textarea"
                    value={form.descripcion}
                    onChange={set('descripcion')}
                    placeholder="Describe qué ocurre, en qué pantalla y qué esperabas que pasara."
                  />
                  {errores.descripcion && <p className="form-error">{errores.descripcion}</p>}
                </div>

                <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>
                  Enviar requerimiento
                </button>
              </form>
            )}
          </div>

          {/* Seguimiento */}
          <div className="panel">
            <div className="tracker__head">
              <p className="panel__title" style={{ margin: 0 }}>
                Seguimiento
              </p>
              <select
                className="select"
                style={{ width: 'auto' }}
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                aria-label="Filtrar por estado"
              >
                <option value="todos">Todos los estados</option>
                {Object.entries(estadosRequerimiento).map(([id, s]) => (
                  <option key={id} value={id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            {lista.length === 0 ? (
              <p className="empty">No hay requerimientos con ese estado.</p>
            ) : (
              <div className="tickets">
                {lista.map((t) => {
                  const est = estadosRequerimiento[t.estado]
                  const pr = prioridades[t.prioridad]
                  return (
                    <div className="ticket" key={t.ref}>
                      <div className="ticket__top">
                        <span className="ref">{t.ref}</span>
                        <StatusPill tono={est.tono}>{est.label}</StatusPill>
                      </div>
                      <p className="ticket__title">{t.titulo}</p>
                      <div className="ticket__meta">
                        <span>{t.proyecto}</span>
                        <span className="sep">/</span>
                        <span>{tiposRequerimiento[t.tipo] || t.tipo}</span>
                        <span className="sep">/</span>
                        <StatusPill tono={pr.tono}>{pr.label}</StatusPill>
                        <span className="sep">/</span>
                        <span>{fecha(t.creado)}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
            <p className="panel__hint" style={{ marginTop: 16, marginBottom: 0 }}>
              Los requerimientos que envíes se guardan en este navegador. Conecta un backend para
              compartirlos entre usuarios (ver README).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
