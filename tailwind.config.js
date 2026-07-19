/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ── Theme Colors — change these to restyle the whole site ──
        primary: '#22c55e',         // Green accent (buttons, icons, highlights)
        'dark-bg': '#080f08',       // Page background
        'dark-card': '#0e180e',     // Card / panel background
        'dark-border': '#1c2c1c',   // Borders and dividers
      },

      keyframes: {
        // Existing
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
        // Page-load / scroll-reveal keyframes
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
        // Blinking cursor for typing effect
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0' },
        },
      },

      animation: {
        // Continuous
        'spin-slow':   'spin 15s linear infinite',
        float:         'float 4s ease-in-out infinite',
        blink:         'blink 1s step-end infinite',

        // One-shot (animation-fill-mode: both keeps from/to state across delays)
        'fade-up':     'fadeUp    0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in':     'fadeIn    0.8s ease-out both',
        'slide-left':  'slideLeft 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'slide-right': 'slideRight 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },

      boxShadow: {
        glow:     '0 0 60px rgba(34, 197, 94, 0.2)',
        'glow-sm':'0 0 15px rgba(34, 197, 94, 0.15)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
