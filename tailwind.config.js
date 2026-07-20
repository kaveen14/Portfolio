/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'dark-bg': 'var(--bg-page)',
        'dark-card': 'var(--bg-card)',
        'dark-border': 'var(--bg-border)',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideLeft: {
          from: { opacity: '0', transform: 'translateX(-36px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(36px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.85)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%':   { opacity: '0', transform: 'scale(0.3)' },
          '50%':  { opacity: '1', transform: 'scale(1.05)' },
          '70%':  { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        rotateIn: {
          from: { opacity: '0', transform: 'rotate(-10deg) scale(0.9)' },
          to:   { opacity: '1', transform: 'rotate(0deg) scale(1)' },
        },
      },

      animation: {
        'spin-slow':   'spin 15s linear infinite',
        float:         'float 4s ease-in-out infinite',
        blink:         'blink 1s step-end infinite',
        'fade-up':     'fadeUp    0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in':     'fadeIn    0.8s ease-out both',
        'slide-left':  'slideLeft 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'slide-right': 'slideRight 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'scale-in':    'scaleIn  0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        'slide-up':    'slideUp  0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'bounce-in':   'bounceIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'rotate-in':   'rotateIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
      },

      boxShadow: {
        glow:     '0 0 60px rgba(var(--color-primary-rgb), 0.2)',
        'glow-sm':'0 0 15px rgba(var(--color-primary-rgb), 0.15)',
        'glow-lg':'0 0 100px rgba(var(--color-primary-rgb), 0.25)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
