import { useState } from 'react'
import { marca } from '../data.js'

export default function Header({ onIrSoporte }) {
  const [abierto, setAbierto] = useState(false)
  const cerrar = () => setAbierto(false)

  return (
    <header className="header">
      <div className="wrap header__inner">
        <a href="#inicio" className="brand" onClick={cerrar} aria-label={marca.nombre}>
          <img className="brand__logo" src="/logo.png" alt={marca.nombre} />
        </a>

        <nav className={`nav ${abierto ? 'nav--open' : ''}`}>
          <a href="#proyectos" onClick={cerrar}>
            Proyectos
          </a>
          <a href="#soporte" onClick={cerrar}>
            Soporte
          </a>
          <a href="#contacto" onClick={cerrar}>
            Contacto
          </a>
          <button
            className="btn btn--primary nav__cta"
            onClick={() => {
              cerrar()
              onIrSoporte()
            }}
          >
            Nuevo requerimiento
          </button>
        </nav>

        <button
          className="nav__toggle"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
          onClick={() => setAbierto((v) => !v)}
        >
          {abierto ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}
