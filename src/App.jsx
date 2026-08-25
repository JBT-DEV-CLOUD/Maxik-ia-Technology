import { useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Support from './components/Support.jsx'
import Footer from './components/Footer.jsx'
import { proyectos, requerimientosDemo } from './data.js'

export default function App() {
  const [solicitud, setSolicitud] = useState(null)

  const stats = useMemo(() => {
    let guardados = []
    try {
      guardados = JSON.parse(localStorage.getItem('maxikia.requerimientos') || '[]')
    } catch {
      guardados = []
    }
    const reqs = [...guardados, ...requerimientosDemo]
    return {
      activos: proyectos.filter((p) => p.estado === 'activo').length,
      abiertos: reqs.filter((r) => r.estado === 'abierto' || r.estado === 'en-progreso').length,
      resueltos: reqs.filter((r) => r.estado === 'resuelto' || r.estado === 'cerrado').length,
    }
  }, [])

  const irSoporte = () => {
    document.getElementById('soporte')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Llamado desde el módulo de servicios: precarga el formulario y baja a él.
  const solicitarServicio = (nombre) => {
    setSolicitud({ nombre, nonce: Date.now() })
    irSoporte()
  }

  return (
    <>
      <Header onIrSoporte={irSoporte} />
      <main>
        <Hero stats={stats} onIrSoporte={irSoporte} />
        <Services onSolicitar={solicitarServicio} />
        <Projects />
        <Support solicitud={solicitud} />
      </main>
      <Footer />
    </>
  )
}
