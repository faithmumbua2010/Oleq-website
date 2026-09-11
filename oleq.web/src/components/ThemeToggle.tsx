import { useEffect, useState } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'

type ThemeMode = 'light' | 'dark' | 'auto'

function getInitialMode(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'auto'
  }

  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark' || stored === 'auto') {
    return stored
  }

  return 'auto'
}

function applyThemeMode(mode: ThemeMode) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const resolved = mode === 'auto' ? (prefersDark ? 'dark' : 'light') : mode

  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(resolved)

  if (mode === 'auto') {
    document.documentElement.removeAttribute('data-theme')
  } else {
    document.documentElement.setAttribute('data-theme', mode)
  }

  document.documentElement.style.colorScheme = resolved
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>('auto')

  useEffect(() => {
    const initialMode = getInitialMode()
    setMode(initialMode)
    applyThemeMode(initialMode)
  }, [])

  useEffect(() => {
    if (mode !== 'auto') {
      return
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => applyThemeMode('auto')

    media.addEventListener('change', onChange)
    return () => {
      media.removeEventListener('change', onChange)
    }
  }, [mode])

  function selectMode(nextMode: ThemeMode) {
    setMode(nextMode)
    applyThemeMode(nextMode)
    window.localStorage.setItem('theme', nextMode)
  }

  return (
    <div className="flex items-center gap-3" aria-label="Theme mode">
      <button
        type="button"
        onClick={() => selectMode('light')}
        aria-label="Light mode"
        title="Light mode"
        className={`grid h-6 w-6 place-items-center rounded-md transition-colors ${
          mode === 'light'
            ? 'text-(--sea-ink)'
            : 'text-(--sea-ink-soft) opacity-70 hover:opacity-100'
        }`}
      >
        <Sun size={15} strokeWidth={1.6} />
      </button>

      <button
        type="button"
        onClick={() => selectMode('dark')}
        aria-label="Dark mode"
        title="Dark mode"
        className={`grid h-6 w-6 place-items-center rounded-md transition-colors ${
          mode === 'dark'
            ? 'text-(--sea-ink)'
            : 'text-(--sea-ink-soft) opacity-70 hover:opacity-100'
        }`}
      >
        <Moon size={15} strokeWidth={1.6} />
      </button>

      <button
        type="button"
        onClick={() => selectMode('auto')}
        aria-label="Use system default"
        title="Use system default"
        className={`grid h-6 w-6 place-items-center rounded-md transition-colors ${
          mode === 'auto'
            ? 'text-(--sea-ink)'
            : 'text-(--sea-ink-soft) opacity-70 hover:opacity-100'
        }`}
      >
        <Monitor size={15} strokeWidth={1.6} />
      </button>
    </div>
  )
}
