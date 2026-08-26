import { useState } from 'react'
import { marca } from '../data.js'
import { useI18n, ordenIdiomas, etiquetaIdioma } from '../i18n.jsx'

function LangSwitch() {
  const { lang, setLang } = useI18n()
  return (
    <div className="langsw" role="group" aria-label="Idioma">
      {ordenIdiomas.map((code) => (
        <button
          key={code}
          className={`langsw__btn ${lang === code ? 'langsw__btn--on' : ''}`}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
        >
          {etiquetaIdioma[code]}
        </button>
      ))}
    </div>
  )
}

export default function Header({ onIrSoporte }) {
  const { t } = useI18n()
  const [abierto, setAbierto] = useState(false)
  const cerrar = () => setAbierto(false)

  return (
    <header className="header">
      <div className="wrap header__inner">
        <a href="#inicio" className="brand" onClick={cerrar} aria-label={marca.nombre}>
          <img className="brand__logo" src="/logo.png" alt={marca.nombre} />
        </a>

        <nav className={`nav ${abierto ? 'nav--open' : ''}`}>
          <a href="#servicios" onClick={cerrar}>{t.nav.servicios}</a>
          <a href="#proyectos" onClick={cerrar}>{t.nav.portafolio}</a>
          <a href="#soporte" onClick={cerrar}>{t.nav.soporte}</a>
          <a href="#contacto" onClick={cerrar}>{t.nav.contacto}</a>
          <div className="nav__lang">
            <LangSwitch />
          </div>
          <button
            className="btn btn--primary nav__cta"
            onClick={() => {
              cerrar()
              onIrSoporte()
            }}
          >
            {t.nav.cta}
          </button>
        </nav>

        <div className="header__right">
          <div className="header__lang">
            <LangSwitch />
          </div>
          <button
            className="nav__toggle"
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={abierto}
            onClick={() => setAbierto((v) => !v)}
          >
            {abierto ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}
