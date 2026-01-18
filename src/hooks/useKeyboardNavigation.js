import { useEffect } from 'react'

export function useKeyboardNavigation() {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Skip if user is typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return
      }

      // Handle Escape key to blur active element
      if (e.key === 'Escape') {
        document.activeElement?.blur()
      }

      // Handle Tab key - ensure focus is visible
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation')
      }
    }

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation')
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleMouseDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])
}
