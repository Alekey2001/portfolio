import { personal } from '../../data/portfolio'
import { useLang } from '../../context/useLang'
import FadeIn from '../ui/FadeIn'
import SectionHeader from '../ui/SectionHeader'

const getLinks = personal => [
  { label: 'LinkedIn', href: personal.linkedin, icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { label: 'GitHub',   href: personal.github,   icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg> },
  { label: 'AIACO',    href: personal.company,  icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
  { label: 'Email',    href: `mailto:${personal.email}`, icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
]

export default function Contact() {
  const { tr } = useLang()
  const links = getLinks(personal)

  return (
    <section id="contact" style={{ borderTop: '1px solid var(--neon-border)' }}>
      <div className="section-wrap">
        <SectionHeader tag={tr.contact.tag} title={tr.contact.title} />
        <FadeIn>
          <div className="text-center max-w-xl mx-auto">
            <h3 className="font-bold text-white tracking-tight mb-4" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
              {tr.contact.title}
            </h3>
            <p className="text-sm mb-8" style={{ color: 'var(--ink-muted)', lineHeight: 1.85 }}>
              {tr.contact.desc.split(tr.contact.descHighlight)[0]}
              <strong className="text-white">{tr.contact.descHighlight}</strong>
              {tr.contact.desc.split(tr.contact.descHighlight)[1]}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {links.map(link => (
                <a key={link.label} href={link.href} target={link.href.startsWith('mailto') ? '_self' : '_blank'} rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-5 py-2.5 transition-all duration-200" style={{ color: 'var(--ink-muted)', border: '1px solid var(--neon-border)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--neon)'; e.currentTarget.style.borderColor = 'var(--neon)'; e.currentTarget.style.background = 'var(--neon-muted)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-muted)'; e.currentTarget.style.borderColor = 'var(--neon-border)'; e.currentTarget.style.background = 'transparent' }}
                >
                  {link.icon}{link.label}
                </a>
              ))}
            </div>
            <a href={personal.cvFile} download className="btn-primary">{tr.contact.cv}</a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}