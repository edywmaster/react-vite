import React from 'react'
import { Box, Button } from '../components'
import { darkTheme } from '../../stitches.config'
import { SunIcon } from '@radix-ui/react-icons'
import usePersistedState from '../utils/usePersistedState'

let initialTheme = 'default-theme'
const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
if (darkThemeMq.matches) {
  initialTheme = 'dark-theme'
}

export function ToggleTheme() {
  const [theme, setTheme] = usePersistedState('theme', initialTheme)

  React.useEffect(() => {
    document.body.classList.remove('default-theme', darkTheme.className)
    document.body.classList.add(theme)
    console.log(theme)
  }, [theme])

  return (
    <Button ghost onClick={() => setTheme(theme === 'default-theme' ? darkTheme.className : 'default-theme')} >
      <SunIcon />
    </Button>
  )
}
