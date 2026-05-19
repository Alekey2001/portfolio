/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#080c10',
          surface: '#0d1117',
          surface2: '#111820',
        },
        neon: {
          DEFAULT: '#00ff8c',
          dim: '#5fffc0',
          muted: '#001f11',
        },
        accent: {
          amber: '#f5a623',
          red:   '#ff4d4d',
          blue:  '#4fa3ff',
        },
        ink: {
          DEFAULT: '#c9d6e3',
          muted:   '#6a7f8f',
        },
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', 'monospace'],
        sans: ['Sora', 'sans-serif'],
      },
      animation: {
        'blink':     'blink 1s step-end infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
        pulseDot: {
          '0%,100%': { opacity: '1',  transform: 'scale(1)' },
          '50%':     { opacity: '0.4', transform: 'scale(0.8)' },
        },
      },
    },
  },
  plugins: [],
}