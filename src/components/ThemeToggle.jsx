import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle({ className = '' }) {
  const { mode, toggleMode } = useTheme()

  return (
    <button
      onClick={toggleMode}
      className={`relative w-14 h-7 rounded-full p-0.5 transition-all duration-500 ${
        mode === 'dark'
          ? 'bg-gray-700 hover:bg-gray-600'
          : 'bg-yellow-200 hover:bg-yellow-300'
      } ${className}`}
      aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Sliding thumb */}
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 shadow-md ${
          mode === 'dark'
            ? 'translate-x-0 bg-gray-900'
            : 'translate-x-7 bg-white'
        }`}
      >
        {mode === 'dark' ? (
          <Moon size={12} className="text-blue-300" />
        ) : (
          <Sun size={12} className="text-yellow-500" />
        )}
      </div>
    </button>
  )
}
