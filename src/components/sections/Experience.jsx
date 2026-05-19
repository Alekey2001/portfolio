import { experience } from '../../data/portfolio'
import { useLang } from '../../context/useLang'
import FadeIn from '../ui/FadeIn'
import SectionHeader from '../ui/SectionHeader'

function TimelineItem({ job, delay }) {
  return (
    <FadeIn delay={delay}>
      <div className="relative pl-8 pb-12 last:pb-0">
        <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: 'var(--neon-border)' }} />
        <div className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full -translate-x-1/2" style={{ border: '2px solid var(--neon)', background: job.active ? 'var(--neon)' : 'var(--bg)', boxShadow: job.active ? '0 0 10px var(--neon)' : 'none' }} />
        <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
          <div>
            <h3 className="text-lg font-semibold text-white">{job.role}</h3>
            <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="font-mono text-xs" style={{ color: 'var(--neon)' }}>↳ {job.company}</a>
          </div>
          <div className="font-mono text-xs px-3 py-1 whitespace-nowrap" style={{ background: 'var(--surface2)', border: '1px solid var(--neon-border)', color: 'var(--ink-muted)' }}>{job.period}</div>
        </div>
        <p className="text-sm mb-4" style={{ color: 'var(--ink-muted)', lineHeight: 1.85 }}>{job.translatedDesc}</p>
        <div className="flex flex-wrap gap-2">
          {job.tags.map(tag => (<span key={tag} className="job-tag">{tag}</span>))}
        </div>
      </div>
    </FadeIn>
  )
}

export default function Experience() {
  const { tr } = useLang()

  const jobs = experience.map(job => ({
    ...job,
    translatedDesc: tr.experience.jobs.find(j => j.id === job.id)?.description || job.description,
  }))

  return (
    <section id="experience" style={{ borderTop: '1px solid var(--neon-border)' }}>
      <div className="section-wrap">
        <SectionHeader tag={tr.experience.tag} title={tr.experience.title} />
        <div>
          {jobs.map((job, i) => (
            <TimelineItem key={job.id} job={job} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}