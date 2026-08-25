import { useEffect, useRef, useState } from 'react'

const prefiereMenosMovimiento = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// Detecta cuando un elemento entra en el viewport (una sola vez).
export function useInView(options = { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (prefiereMenosMovimiento()) {
      setInView(true)
      return
    }
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const ob = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        ob.disconnect()
      }
    }, options)
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  return [ref, inView]
}

// Contador animado 0 → objetivo (respeta reduced-motion).
export function useCountUp(target, { duration = 1100, start = true } = {}) {
  const [valor, setValor] = useState(prefiereMenosMovimiento() ? target : 0)

  useEffect(() => {
    if (!start) return
    if (prefiereMenosMovimiento()) {
      setValor(target)
      return
    }
    let raf
    const t0 = performance.now()
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValor(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, target, duration])

  return valor
}

// Aparece con desvanecido + leve ascenso al entrar en pantalla.
export function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// Contenedor cuyos hijos aparecen en cascada.
export function Stagger({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag ref={ref} className={`stagger ${inView ? 'is-visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
