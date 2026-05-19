import { useState, useEffect } from 'react'
import { personal, navLinks } from '../../data/portfolio'
import { useLang } from '../../context/useLang'

export default function Navbar() {
  const { lang, toggleLang, tr } = useLang()
  const [active,   setActive]    = useState('')
  const [scrolled, setScrolled]  = useState(false)
  const [menuOpen, setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = navLinks.map(l => document.querySelector(l.href))
      let current = ''
      sections.forEach(sec => {
        if (sec && window.scrollY >= sec.offsetTop - 120) {
          current = '#' + sec.id
        }
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  const navItems = [
    { label: tr.nav.about,      href: '#about'      },
    { label: tr.nav.skills,     href: '#skills'     },
    { label: tr.nav.experience, href: '#experience' },
    { label: tr.nav.education,  href: '#education'  },
    { label: tr.nav.contact,    href: '#contact'    },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background:     scrolled ? 'rgba(8,12,16,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)'          : 'none',
        borderBottom:   scrolled ? '1px solid var(--neon-border)' : '1px solid transparent',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#hero" onClick={e => handleNav(e, '#hero')} className="font-mono text-sm tracking-widest" style={{ color: 'var(--neon)' }}>
          <span style={{ color: 'var(--ink-muted)' }}>//</span> {personal.handle}
        </a>

        {/* Desktop links + lang toggle */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 list-none">
            {navItems.map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={e => handleNav(e, link.href)} className="font-mono text-xs tracking-widest uppercase transition-colors duration-150" style={{ color: active === link.href ? 'var(--neon)' : 'var(--ink-muted)' }}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="font-mono text-xs tracking-widest uppercase px-3 py-1.5 transition-all duration-200"
            style={{
              color:   'var(--neon)',
              border:  '1px solid var(--neon-border2)',
              background: 'var(--neon-muted)',
            }}
          >
            {lang === 'es' ? '🇺🇸 EN' : '🇲🇽 ES'}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden font-mono text-xs tracking-widest uppercase px-3 py-1.5"
          style={{ color: 'var(--neon)', border: '1px solid var(--neon-border)' }}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕ close' : '≡ menu'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-5" style={{ background: 'rgba(8,12,16,0.97)', borderBottom: '1px solid var(--neon-border)' }}>
          {navItems.map(link => (
            <a key={link.href} href={link.href} onClick={e => handleNav(e, link.href)} className="font-mono text-xs tracking-widest uppercase" style={{ color: active === link.href ? 'var(--neon)' : 'var(--ink-muted)' }}>
              &gt; {link.label}
            </a>
          ))}
          {/* Lang toggle mobile */}
          <button onClick={toggleLang} className="font-mono text-xs tracking-widest uppercase text-left" style={{ color: 'var(--neon)' }}>
            &gt; {lang === 'es' ? '🇺🇸 switch to EN' : '🇲🇽 cambiar a ES'}
          </button>
        </div>
      )}
    </nav>
  )
}