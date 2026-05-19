import { personal } from '../../data/portfolio'
import { useLang } from '../../context/useLang'

export default function Footer() {
  const { tr } = useLang()
  return (
    <footer className="text-center py-8 font-mono text-xs tracking-widest" style={{ borderTop: '1px solid var(--neon-border)', color: 'var(--ink-muted)' }}>
      <p>© 2026 {personal.nameShort} &nbsp;·&nbsp; {tr.footer} &nbsp;·&nbsp; CDMX</p>
      <p className="mt-1" style={{ color: 'var(--neon-border2)' }}>Built with React · Node.js · Tailwind · Deployed on Netlify</p>
    </footer>
  )
}