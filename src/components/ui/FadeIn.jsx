import { useInView } from '../../hooks/useInView'

/**
 * FadeIn — envuelve cualquier contenido con una animación
 * de fade + slide-up cuando entra al viewport.
 *
 * @prop {number} delay — retraso en ms para escalonar animaciones
 */
export default function FadeIn({ children, delay = 0, className = '' }) {
  const { ref, visible } = useInView()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}