import { useState } from 'react'
import { useLang } from '../../context/useLang'

const CREDENTIALS = {
  username: 'recruiter',
  password: 'portfolio2026',
}

export default function Login({ onSuccess }) {
  const { tr } = useLang()
  const [user, setUser]       = useState('')
  const [pass, setPass]       = useState('')
  const [error, setError]     = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    setError('')
    setLoading(true)

    setTimeout(() => {
      if (user === CREDENTIALS.username && pass === CREDENTIALS.password) {
        onSuccess()
      } else {
        setError(tr.login.error)
        setLoading(false)
      }
    }, 1500)
  }

  const handleKey = e => {
    if (e.key === 'Enter') handleLogin()
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'var(--bg)' }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,140,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,140,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,140,0.05) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Login box */}
      <div
        className="relative w-full max-w-md"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--neon-border2)',
        }}
      >
        {/* Top bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ background: 'var(--surface2)', borderBottom: '1px solid var(--neon-border)' }}
        >
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffbd2e' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28ca41' }} />
          <span className="font-mono text-xs ml-2" style={{ color: 'var(--ink-muted)' }}>
            secure_access.sh
          </span>
        </div>

        <div className="p-8">
          {/* Title */}
          <div className="text-center mb-8">
            <div className="font-mono text-xs tracking-widest mb-3" style={{ color: 'var(--neon)' }}>
              🔐 PORTFOLIO OS v2.0.26
            </div>
            <h1
              className="font-mono font-bold tracking-widest mb-2"
              style={{ fontSize: '1.3rem', color: 'var(--neon)' }}
            >
              {tr.login.title}
            </h1>
            <p className="font-mono text-xs" style={{ color: 'var(--ink-muted)' }}>
              {tr.login.subtitle}
            </p>
          </div>

          {/* Fields */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="font-mono text-xs tracking-widest uppercase block mb-2" style={{ color: 'var(--neon)' }}>
                {tr.login.userLabel}
              </label>
              <div className="flex items-center" style={{ border: '1px solid var(--neon-border)', background: 'var(--surface2)' }}>
                <span className="font-mono text-xs px-3" style={{ color: 'var(--neon)' }}>~$</span>
                <input
                  type="text"
                  value={user}
                  onChange={e => setUser(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder={tr.login.userHolder}
                  className="flex-1 bg-transparent py-3 pr-3 font-mono text-sm outline-none"
                  style={{ color: 'var(--ink)', caretColor: 'var(--neon)' }}
                  autoComplete="off"
                />
              </div>
            </div>

            <div>
              <label className="font-mono text-xs tracking-widest uppercase block mb-2" style={{ color: 'var(--neon)' }}>
                {tr.login.passLabel}
              </label>
              <div className="flex items-center" style={{ border: '1px solid var(--neon-border)', background: 'var(--surface2)' }}>
                <span className="font-mono text-xs px-3" style={{ color: 'var(--neon)' }}>~$</span>
                <input
                  type="password"
                  value={pass}
                  onChange={e => setPass(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder={tr.login.passHolder}
                  className="flex-1 bg-transparent py-3 pr-3 font-mono text-sm outline-none"
                  style={{ color: 'var(--ink)', caretColor: 'var(--neon)' }}
                />
              </div>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div
              className="font-mono text-xs px-4 py-3 mb-4"
              style={{
                background: 'rgba(255,77,77,0.08)',
                border: '1px solid rgba(255,77,77,0.3)',
                color: 'var(--red)',
              }}
            >
              ✕ {error}
            </div>
          )}

          {/* Button */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full font-mono text-xs tracking-widest uppercase py-3 transition-all duration-200"
            style={{
              background: loading ? 'var(--surface2)' : 'var(--neon)',
              color:      loading ? 'var(--ink-muted)' : '#080c10',
              border:     loading ? '1px solid var(--neon-border)' : 'none',
              cursor:     loading ? 'not-allowed' : 'pointer',
              fontWeight: 700,
            }}
          >
            {loading ? tr.login.loading : tr.login.button}
          </button>

       {/* Hint con credenciales */}
<div
  className="mt-4 p-3 font-mono text-xs"
  style={{
    background: 'rgba(0,255,140,0.04)',
    border: '1px solid var(--neon-border)',
  }}
>
  <p className="text-center mb-2" style={{ color: 'var(--ink-muted)' }}>
    {tr.login.hint}
  </p>
  <div className="flex flex-col gap-1">
    <div className="flex justify-between">
      <span style={{ color: 'var(--ink-muted)' }}>user:</span>
      <span style={{ color: 'var(--neon)' }}>recruiter</span>
    </div>
    <div className="flex justify-between">
      <span style={{ color: 'var(--ink-muted)' }}>pass:</span>
      <span style={{ color: 'var(--neon)' }}>portfolio2026</span>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  )
}