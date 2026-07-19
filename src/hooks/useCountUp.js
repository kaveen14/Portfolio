import { useEffect, useState } from 'react'

/**
 * useCountUp — animates a number from 0 to its target.
 * Parses both numeric and suffixed values like '2+', '12+', '100%'.
 *
 * @param {string} target   — e.g. '12+' or '100%'
 * @param {number} duration — animation duration in ms (default 1800)
 * @param {boolean} active  — start the counter only when true (e.g. when in view)
 * @returns {string}        — current display value, e.g. '7+'
 */
export function useCountUp(target, duration = 1800, active = false) {
  const numeric = parseInt(target.replace(/\D/g, ''), 10)
  const suffix  = target.replace(/[0-9]/g, '')

  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return

    let frame      = 0
    const total    = Math.round(duration / 16) // ~60 fps

    const id = setInterval(() => {
      frame++
      // Ease-out cubic: fast start, gradual slow-down
      const progress = 1 - Math.pow(1 - frame / total, 3)
      setCount(Math.round(progress * numeric))

      if (frame >= total) {
        setCount(numeric)
        clearInterval(id)
      }
    }, 16)

    return () => clearInterval(id)
  }, [active, numeric, duration])

  return `${count}${suffix}`
}
