import { marca } from '../data.js'
import { useI18n } from '../i18n.jsx'

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="footer" id="contacto">
      <div className="wrap">
        <div className="footer__inner">
          <div style={{ maxWidth: 300 }}>
            <div className="brand" style={{ marginBottom: 14 }}>
              <img className="brand__logo" src="/logo.png" alt={marca.nombre} />
            </div>
            <p style={{ color: '#9db1cc', fontSize: '0.9rem', margin: 0 }}>{t.footer.tagline}</p>
          </div>

          <div className="footer__col">
            <h4>{t.footer.secciones}</h4>
            <a href="#proyectos">{t.footer.portafolio}</a>
            <a href="#soporte">{t.footer.requerimientos}</a>
            <a href="#inicio">{t.footer.inicio}</a>
          </div>

          <div className="footer__col">
            <h4>{t.footer.contacto}</h4>
            <a href={`mailto:${marca.contactoEmail}`}>{marca.contactoEmail}</a>
            <p>{t.footer.horario}</p>
          </div>
        </div>

        <div className="footer__bar">
          <span>© {new Date().getFullYear()} {marca.nombre}</span>
        </div>
      </div>
    </footer>
  )
}
