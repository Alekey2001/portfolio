import { education, certifications } from '../../data/portfolio'
import { useLang } from '../../context/useLang'
import FadeIn from '../ui/FadeIn'
import SectionHeader from '../ui/SectionHeader'

function EduCard({ edu }) {
  return (
    <FadeIn>
      <div className="card p-6 mb-8" style={{ borderLeft: '2px solid var(--neon)' }}>
        <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
            <p className="font-mono text-xs" style={{ color: 'var(--neon)' }}>↳ {edu.institution}</p>
          </div>
          <span className="font-mono text-xs px-3 py-1" style={{ background: 'var(--surface2)', border: '1px solid var(--neon-border)', color: 'var(--ink-muted)' }}>{edu.period}</span>
        </div>
        <p className="text-sm mb-4" style={{ color: 'var(--ink-muted)' }}>{edu.focus}</p>
        <div className="flex flex-wrap gap-2">
          {edu.subjects.map(s => (<span key={s} className="job-tag">{s}</span>))}
        </div>
      </div>
    </FadeIn>
  )
}

function CertCard({ cert, delay }) {
  return (
    <FadeIn delay={delay}>
      <div className="card p-5 flex gap-4 items-center h-24">
        <span className="text-3xl select-none shrink-0" role="img" aria-label={cert.issuer}>{cert.emoji}</span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white leading-tight mb-0.5 truncate">{cert.name}</p>
          <p className="font-mono text-xs mb-1" style={{ color: 'var(--neon)' }}>{cert.issuer}</p>
          <p className="text-xs" style={{ color: 'var(--ink-muted)' }}>{cert.date}</p>
        </div>
      </div>
    </FadeIn>
  )
}

export default function Education() {
  const { tr } = useLang()

  const translatedEdu = {
    ...education[0],
    degree:      tr.education.degree,
    institution: tr.education.institution,
    focus:       tr.education.focus,
    subjects:    tr.education.subjects,
  }

  return (
    <section id="education" style={{ borderTop: '1px solid var(--neon-border)' }}>
      <div className="section-wrap">
        <SectionHeader tag={tr.education.tag} title={tr.education.title} />
        <EduCard edu={translatedEdu} />
        <div className="grid sm:grid-cols-3 gap-4 mt-2 items-start">
          {certifications.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}