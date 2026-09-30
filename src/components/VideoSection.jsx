import { useRef, useState } from 'react'
import { useI18n } from '../i18n.jsx'
import { Reveal } from '../lib/motion.jsx'

export default function VideoSection() {
  const { t } = useI18n()
  const ref = useRef(null)
  const [muted, setMuted] = useState(true)

  const toggleSonido = () => {
    const v = ref.current
    if (!v) return
    v.muted = !v.muted
    if (!v.muted) {
      // asegurar reproducción al activar sonido
      const p = v.play()
      if (p && typeof p.catch === 'function') p.catch(() => {})
    }
    setMuted(v.muted)
  }

  return (
    <section className="section videosec" id="video">
      <div className="wrap">
        <Reveal className="section__head videosec__head">
          <div>
            <p className="eyebrow">{t.video.eyebrow}</p>
            <h2>{t.video.title}</h2>
            <p className="section__sub">{t.video.sub}</p>
          </div>
        </Reveal>

        <Reveal className="videowrap">
          <video
            ref={ref}
            className="promo"
            src="/video/comercial.mp4"
            poster="/video/poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
          />
          <button className="promo__sound" onClick={toggleSonido} aria-pressed={!muted}>
            {muted ? `🔇 ${t.video.unmute}` : `🔊 ${t.video.mute}`}
          </button>
        </Reveal>
      </div>
    </section>
  )
}
