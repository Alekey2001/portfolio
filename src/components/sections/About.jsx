import { personal } from '../../data/portfolio'
import { skillBars } from '../../data/portfolio'
import { useInView } from '../../hooks/useInView'
import { useLang } from '../../context/useLang'
import FadeIn from '../ui/FadeIn'
import SectionHeader from '../ui/SectionHeader'

function SkillBar({ label, pct, delay }) {
  const { ref, visible } = useInView()
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between font-mono text-xs mb-1.5" style={{ color: 'var(--ink-muted)' }}>
        <span>{label}</span>
        <span style={{ color: 'var(--neon)' }}>{pct}%</span>
      </div>
      <div className="w-full overflow-hidden" style={{ height: '2px', background: 'var(--surface2)' }}>
        <div style={{ height: '100%', background: 'var(--neon)', width: visible ? `${pct}%` : '0%', transition: `width 1s ease ${delay}ms` }} />
      </div>
    </div>
  )
}

function Terminal({ tr }) {
  return (
    <div className="rounded-sm overflow-hidden" style={{ background: 'var(--surface)', border: '1px solid var(--neon-border)' }}>
      <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: 'var(--surface2)', borderBottom: '1px solid var(--neon-border)' }}>
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffbd2e' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28ca41' }} />
        <span className="font-mono text-xs ml-2" style={{ color: 'var(--ink-muted)' }}>profile.json</span>
      </div>
      <div className="p-5 font-mono text-sm" style={{ lineHeight: '2' }}>
        <div><span style={{ color: 'var(--neon)' }}>~$ </span><span style={{ color: 'var(--ink)' }}>cat profile.json</span></div>
        <div style={{ color: 'var(--ink-muted)' }}>{'{'}</div>
        <div style={{ color: 'var(--ink-muted)', paddingLeft: '1.5rem' }}><span style={{ color: 'var(--amber)' }}>"name"</span>: <span style={{ color: 'var(--neon-dim)' }}>"{personal.nameShort}"</span>,</div>
        <div style={{ color: 'var(--ink-muted)', paddingLeft: '1.5rem' }}><span style={{ color: 'var(--amber)' }}>"role"</span>: <span style={{ color: 'var(--neon-dim)' }}>"{tr.about.terminal.role}"</span>,</div>
        <div style={{ color: 'var(--ink-muted)', paddingLeft: '1.5rem' }}><span style={{ color: 'var(--amber)' }}>"location"</span>: <span style={{ color: 'var(--neon-dim)' }}>"{tr.about.terminal.location}"</span>,</div>
        <div style={{ color: 'var(--ink-muted)', paddingLeft: '1.5rem' }}><span style={{ color: 'var(--amber)' }}>"english"</span>: <span style={{ color: 'var(--neon-dim)' }}>"{personal.english}"</span>,</div>
        <div style={{ color: 'var(--ink-muted)', paddingLeft: '1.5rem' }}><span style={{ color: 'var(--amber)' }}>"open_to"</span>: [</div>
        {tr.about.terminal.openTo.map((item, i) => (
          <div key={i} style={{ color: 'var(--neon-dim)', paddingLeft: '3rem' }}>"{item}"{i < tr.about.terminal.openTo.length - 1 ? ',' : ''}</div>
        ))}
        <div style={{ color: 'var(--ink-muted)', paddingLeft: '1.5rem' }}>],</div>
        <div style={{ color: 'var(--ink-muted)', paddingLeft: '1.5rem' }}><span style={{ color: 'var(--amber)' }}>"remote"</span>: <span style={{ color: 'var(--neon)' }}>true</span></div>
        <div style={{ color: 'var(--ink-muted)' }}>{'}'}</div>
        <br />
        <div><span style={{ color: 'var(--neon)' }}>~$ </span><span className="cursor" /></div>
      </div>
    </div>
  )
}

export default function About() {
  const { tr } = useLang()
  return (
    <section id="about" style={{ borderTop: '1px solid var(--neon-border)' }}>
      <div className="section-wrap">
        <SectionHeader tag={tr.about.tag} title={tr.about.title} />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <div className="space-y-4 mb-8" style={{ color: 'var(--ink-muted)', fontSize: '15px' }}>
              <p>{tr.about.p1}</p>
              <p>{tr.about.p2}</p>
              <p>{tr.about.p3}</p>
            </div>
            <div className="mt-8">
              {skillBars.map((bar, i) => (
                <SkillBar key={bar.label} {...bar} delay={i * 120} />
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <Terminal tr={tr} />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}