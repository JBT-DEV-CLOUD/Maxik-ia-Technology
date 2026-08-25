import { marca } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="wrap">
        <div className="footer__inner">
          <div style={{ maxWidth: 280 }}>
            <div className="brand" style={{ marginBottom: 14 }}>
              <img className="brand__logo" src="/logo.png" alt={marca.nombre} />
            </div>
            <p style={{ color: '#9db1cc', fontSize: '0.9rem', margin: 0 }}>
              Innovación, automatización e inteligencia artificial para impulsar tu negocio:
              páginas web, tiendas virtuales, apps y soporte.
            </p>
          </div>

          <div className="footer__col">
            <h4>Secciones</h4>
            <a href="#proyectos">Portafolio</a>
            <a href="#soporte">Requerimientos</a>
            <a href="#inicio">Inicio</a>
          </div>

          <div className="footer__col">
            <h4>Contacto</h4>
            <a href={`mailto:${marca.contactoEmail}`}>{marca.contactoEmail}</a>
            <p>Lun a Vie · 9:00 – 18:00</p>
          </div>
        </div>

        <div className="footer__bar">
          <span>
            © {new Date().getFullYear()} {marca.nombre}
          </span>
        </div>
      </div>
    </footer>
  )
}
