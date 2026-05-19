import { personal } from '../../data/portfolio'
import { useLang } from '../../context/useLang'

export default function Hero() {
  const { tr } = useLang()

  const scrollTo = href => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: '4rem' }}>

      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(0,255,140,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,140,0.04) 1px, transparent 1px)`, backgroundSize: '60px 60px', maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)' }} />

      {/* Glow */}
      <div className="absolute pointer-events-none" style={{ width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,140,0.055) 0%, transparent 70%)', top: '5%', right: '-150px' }} />

      <div className="section-wrap relative z-10 py-0 pt-10">

        {/* Badge */}
        <div className="badge-neon mb-8" style={{ display: 'inline-flex' }}>
          <span className="w-2 h-2 rounded-full animate-pulse-dot" style={{ background: 'var(--neon)', minWidth: '8px' }} />
          {tr.hero.badge}
        </div>

        {/* Name */}
        <h1 className="font-bold text-white leading-none tracking-tight mb-3" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
          Jesús Alejandro<br />
          <span style={{ color: 'var(--neon)' }}>Rodríguez Medina</span>
        </h1>

        {/* Subtitle */}
        <p className="font-mono text-sm mb-6" style={{ color: 'var(--neon-dim)' }}>
          {tr.hero.subtitle}
        </p>

        {/* Description */}
        <p className="text-base max-w-xl mb-10" style={{ color: 'var(--ink-muted)', lineHeight: 1.85 }}>
          {tr.hero.desc}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a href={`mailto:${personal.email}`} className="btn-primary">{tr.hero.cta1}</a>
          <button onClick={() => scrollTo('#experience')} className="btn-outline">{tr.hero.cta2}</button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 pt-8" style={{ borderTop: '1px solid var(--neon-border)' }}>
          {tr.hero.stats.map(s => (
            <div key={s.label}>
              <div className="font-mono font-bold leading-none mb-1" style={{ fontSize: '2rem', color: 'var(--neon)' }}>{s.value}</div>
              <div className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--ink-muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}