import { useEffect, useMemo, useRef, useState } from 'react'
import { portafolio, requerimientosDemo } from '../data.js'
import { tonoRequerimiento, tonoPrioridad, StatusPill } from '../lib/status.jsx'
import { Reveal, Stagger } from '../lib/motion.jsx'
import { useI18n } from '../i18n.jsx'

const CLAVE = 'maxikia.requerimientos'

const formVacio = {
  nombre: '', email: '', proyecto: '', tipo: 'incidente', prioridad: 'media', titulo: '', descripcion: '',
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

export default function Support({ solicitud }) {
  const { t } = useI18n()
  const [form, setForm] = useState(formVacio)
  const [errores, setErrores] = useState({})
  const [enviados, setEnviados] = useState([])
  const [confirmacion, setConfirmacion] = useState(null)
  const [filtro, setFiltro] = useState('todos')
  const tituloRef = useRef(null)

  useEffect(() => {
    setEnviados(cargarGuardados())
  }, [])

  useEffect(() => {
    if (!solicitud) return
    setConfirmacion(null)
    setForm((f) => ({ ...f, titulo: `${t.support.solicitudServicio} ${solicitud.nombre}`, tipo: 'proyecto' }))
    setErrores({})
    const timer = setTimeout(() => tituloRef.current?.focus(), 500)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [solicitud])

  const set = (campo) => (e) => setForm((f) => ({ ...f, [campo]: e.target.value }))

  function validar() {
    const e = {}
    if (!form.nombre.trim()) e.nombre = t.support.errNombre
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t.support.errCorreo
    if (!form.titulo.trim()) e.titulo = t.support.errTitulo
    if (form.descripcion.trim().length < 12) e.descripcion = t.support.errDescripcion
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

  // Requerimientos demo con título traducido por índice
  const demo = useMemo(
    () => requerimientosDemo.map((r, i) => ({ ...r, titulo: t.support.demoTitulos[i] })),
    [t],
  )
  const todos = useMemo(() => [...enviados, ...demo], [enviados, demo])
  const lista = useMemo(
    () => (filtro === 'todos' ? todos : todos.filter((x) => x.estado === filtro)),
    [todos, filtro],
  )

  return (
    <section className="section section--tint" id="soporte">
      <div className="wrap">
        <Reveal className="section__head">
          <div>
            <p className="eyebrow">{t.support.eyebrow}</p>
            <h2>{t.support.title}</h2>
            <p className="section__sub">{t.support.sub}</p>
          </div>
        </Reveal>

        <Stagger className="support">
          {/* Formulario */}
          <div className="panel">
            {confirmacion ? (
              <div className="confirm">
                <div className="confirm__check">✓</div>
                <p className="panel__title">{t.support.okTitle}</p>
                <p className="panel__hint">{t.support.okHint}</p>
                <span className="ref">{confirmacion}</span>
                <div>
                  <button className="btn btn--primary" onClick={() => setConfirmacion(null)}>
                    {t.support.okOtro}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={enviar} noValidate>
                <p className="panel__title">{t.support.formTitle}</p>
                <p className="panel__hint">{t.support.formHint}</p>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="nombre">{t.support.nombre} <span className="req">*</span></label>
                    <input id="nombre" className="input" value={form.nombre} onChange={set('nombre')} placeholder={t.support.phNombre} />
                    {errores.nombre && <p className="form-error">{errores.nombre}</p>}
                  </div>
                  <div className="field">
                    <label htmlFor="email">{t.support.correo} <span className="req">*</span></label>
                    <input id="email" className="input" type="email" value={form.email} onChange={set('email')} placeholder={t.support.phCorreo} />
                    {errores.email && <p className="form-error">{errores.email}</p>}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="titulo">{t.support.asunto} <span className="req">*</span></label>
                  <input id="titulo" ref={tituloRef} className="input" value={form.titulo} onChange={set('titulo')} placeholder={t.support.phAsunto} />
                  {errores.titulo && <p className="form-error">{errores.titulo}</p>}
                </div>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="proyecto">{t.support.sitio}</label>
                    <select id="proyecto" className="select" value={form.proyecto} onChange={set('proyecto')}>
                      <option value="">{t.support.general}</option>
                      {portafolio.map((p) => (
                        <option key={p.nombre} value={p.nombre}>{p.nombre}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="tipo">{t.support.tipo}</label>
                    <select id="tipo" className="select" value={form.tipo} onChange={set('tipo')}>
                      {Object.entries(t.support.tipos).map(([id, label]) => (
                        <option key={id} value={id}>{label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="prioridad">{t.support.prioridad}</label>
                  <select id="prioridad" className="select" value={form.prioridad} onChange={set('prioridad')}>
                    {Object.entries(t.support.prioridades).map(([id, label]) => (
                      <option key={id} value={id}>{label}</option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="descripcion">{t.support.descripcion} <span className="req">*</span></label>
                  <textarea id="descripcion" className="textarea" value={form.descripcion} onChange={set('descripcion')} placeholder={t.support.phDescripcion} />
                  {errores.descripcion && <p className="form-error">{errores.descripcion}</p>}
                </div>

                <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>
                  {t.support.enviar}
                </button>
              </form>
            )}
          </div>

          {/* Seguimiento */}
          <div className="panel">
            <div className="tracker__head">
              <p className="panel__title" style={{ margin: 0 }}>{t.support.seguimiento}</p>
              <select className="select" style={{ width: 'auto' }} value={filtro} onChange={(e) => setFiltro(e.target.value)} aria-label={t.support.seguimiento}>
                <option value="todos">{t.support.todosEstados}</option>
                {Object.entries(t.support.estados).map(([id, label]) => (
                  <option key={id} value={id}>{label}</option>
                ))}
              </select>
            </div>

            {lista.length === 0 ? (
              <p className="empty">{t.support.vacio}</p>
            ) : (
              <div className="tickets">
                {lista.map((x) => (
                  <div className="ticket" key={x.ref}>
                    <div className="ticket__top">
                      <span className="ref">{x.ref}</span>
                      <StatusPill tono={tonoRequerimiento[x.estado]}>{t.support.estados[x.estado]}</StatusPill>
                    </div>
                    <p className="ticket__title">{x.titulo}</p>
                    <div className="ticket__meta">
                      <span>{x.proyecto}</span>
                      <span className="sep">/</span>
                      <span>{t.support.tipos[x.tipo] || x.tipo}</span>
                      <span className="sep">/</span>
                      <StatusPill tono={tonoPrioridad[x.prioridad]}>{t.support.prioridades[x.prioridad]}</StatusPill>
                      <span className="sep">/</span>
                      <span>{fecha(x.creado)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <p className="panel__hint" style={{ marginTop: 16, marginBottom: 0 }}>{t.support.nota}</p>
          </div>
        </Stagger>
      </div>
    </section>
  )
}
