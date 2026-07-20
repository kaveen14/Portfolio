import { useState } from 'react'
import { Palette, X } from 'lucide-react'
import { useTheme, COLOR_PRESETS } from '../context/ThemeContext'

export default function ColorPalette() {
  const [open, setOpen] = useState(false)
  const { accentColor, setAccentColor } = useTheme()

  return (
    <>
      {/* Floating trigger button — fixed on right side */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex w-11 h-11 rounded-full items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        style={{ backgroundColor: accentColor }}
        aria-label="Toggle color palette"
      >
        {open ? <X size={18} className="text-black" /> : <Palette size={18} className="text-black" />}
      </button>

      {/* Mobile trigger — positioned above bottom nav */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed right-4 bottom-20 z-50 md:hidden w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        style={{ backgroundColor: accentColor }}
        aria-label="Toggle color palette"
      >
        {open ? <X size={16} className="text-black" /> : <Palette size={16} className="text-black" />}
      </button>

      {/* Panel */}
      <div
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 transition-all duration-400 ease-out ${
          open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="bg-[var(--bg-card)] border border-[var(--bg-border)] rounded-l-2xl p-4 shadow-2xl backdrop-blur-xl mr-0">
          <p className="text-[var(--text-secondary)] text-xs font-semibold mb-3 uppercase tracking-wider">Accent</p>
          <div className="grid grid-cols-2 gap-2">
            {COLOR_PRESETS.map(({ name, hex }) => (
              <button
                key={name}
                onClick={() => setAccentColor(hex)}
                className={`w-8 h-8 rounded-full transition-all duration-300 hover:scale-125 relative ${
                  accentColor === hex ? 'ring-2 ring-offset-2 ring-offset-[var(--bg-card)] scale-110' : ''
                }`}
                style={{ backgroundColor: hex, ringColor: hex }}
                aria-label={name}
                title={name}
              >
                {accentColor === hex && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-black/40" />
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
