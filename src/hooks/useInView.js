import { useEffect, useRef, useState } from 'react'

/**
 * useInView — se activa una sola vez cuando el elemento
 * entra al viewport. Úsalo para animaciones al hacer scroll.
 */
export function useInView(threshold = 0.12, rootMargin = '0px 0px -60px 0px') {
  const ref     = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect() // solo dispara una vez
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, visible }
}