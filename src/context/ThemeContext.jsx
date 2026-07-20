import { createContext, useContext, useState, useEffect } from 'react'

// Color presets for the palette picker
export const COLOR_PRESETS = [
  { name: 'Emerald',  hex: '#22c55e' },
  { name: 'Cyan',     hex: '#06b6d4' },
  { name: 'Violet',   hex: '#8b5cf6' },
  { name: 'Rose',     hex: '#f43f5e' },
  { name: 'Amber',    hex: '#f59e0b' },
  { name: 'Sky',      hex: '#0ea5e9' },
  { name: 'Fuchsia',  hex: '#d946ef' },
  { name: 'Orange',   hex: '#f97316' },
]

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => localStorage.getItem('theme-mode') || 'dark')
  const [accentColor, setAccentColor] = useState(() => localStorage.getItem('accent-color') || '#22c55e')

  useEffect(() => {
    const root = document.documentElement

    // Accent color variables
    root.style.setProperty('--color-primary', accentColor)
    root.style.setProperty('--color-primary-rgb', hexToRgb(accentColor))

    // Theme mode
    if (mode === 'light') {
      root.classList.add('light')
      root.classList.remove('dark')
      root.style.setProperty('--bg-page', '#f8fafc')
      root.style.setProperty('--bg-card', '#ffffff')
      root.style.setProperty('--bg-border', '#e2e8f0')
      root.style.setProperty('--text-primary', '#0f172a')
      root.style.setProperty('--text-secondary', '#475569')
      root.style.setProperty('--text-muted', '#94a3b8')
    } else {
      root.classList.add('dark')
      root.classList.remove('light')
      root.style.setProperty('--bg-page', '#080f08')
      root.style.setProperty('--bg-card', '#0e180e')
      root.style.setProperty('--bg-border', '#1c2c1c')
      root.style.setProperty('--text-primary', '#ffffff')
      root.style.setProperty('--text-secondary', '#9ca3af')
      root.style.setProperty('--text-muted', '#6b7280')
    }

    localStorage.setItem('theme-mode', mode)
    localStorage.setItem('accent-color', accentColor)
  }, [mode, accentColor])

  const toggleMode = () => setMode(prev => prev === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, accentColor, setAccentColor }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return '34, 197, 94'
  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
}
