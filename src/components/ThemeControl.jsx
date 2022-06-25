import React from 'react'
import { useThemeStore } from '../store'

const ThemeControl = () => {
  const setColor = useThemeStore((state) => state.setColor)
  const setBgColor = useThemeStore((state) => state.setBackgroundColor)

  return (
    <div>
      <div>
        <p>
          setColor{' '}
          <input type="text" onChange={(e) => setColor(e.target.value)} />
        </p>
        <p>
          setBgColor{' '}
          <input type="text" onChange={(e) => setBgColor(e.target.value)} />
        </p>
      </div>
    </div>
  )
}

export default ThemeControl
