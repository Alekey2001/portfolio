import FadeIn from './FadeIn'

/**
 * SectionHeader — encabezado reutilizable para cada sección.
 * Muestra el tag numerado, el título y la línea decorativa.
 *
 * @prop {string} tag   — ej: "// 01"
 * @prop {string} title — ej: "Sobre mí"
 */
export default function SectionHeader({ tag, title }) {
  return (
    <FadeIn>
      <div className="section-header">
        <span className="section-tag">{tag}</span>
        <h2 className="section-title">{title}</h2>
        <div className="section-line" />
      </div>
    </FadeIn>
  )
}