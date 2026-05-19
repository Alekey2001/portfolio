import { skillGroups } from '../../data/portfolio'
import { useLang } from '../../context/useLang'
import FadeIn from '../ui/FadeIn'
import SectionHeader from '../ui/SectionHeader'

const colorMap = {
  amber: 'skill-tag-amber',
  red:   'skill-tag-red',
  blue:  'skill-tag-blue',
  green: 'skill-tag',
}

function SkillCard({ group, delay }) {
  return (
    <FadeIn delay={delay}>
      <div className="card p-6 h-full relative overflow-hidden group" onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)' }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}>
        <div className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: 'var(--neon)' }} />
        <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--neon)' }}>{group.title}</p>
        <div className="flex flex-wrap gap-2">
          {group.skills.map(skill => (
            <span key={skill} className={colorMap[group.color] ?? 'skill-tag'}>{skill}</span>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}

export default function Skills() {
  const { tr } = useLang()
  return (
    <section id="skills" style={{ borderTop: '1px solid var(--neon-border)' }}>
      <div className="section-wrap">
        <SectionHeader tag={tr.skills.tag} title={tr.skills.title} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.id} group={group} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}