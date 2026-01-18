import { useState, useEffect } from 'react'
import StarsBackground from './components/StarsBackground'
import SystemStatus from './components/SystemStatus'
import CurrentWork from './components/CurrentWork'
import RecentChanges from './components/RecentChanges'
import LabActivity from './components/LabActivity'
import Context from './components/Context'
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation'

function App() {
  useKeyboardNavigation()
  
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="relative min-h-screen">
      <StarsBackground />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-6xl">
        <SystemStatus />
        <CurrentWork />
        <RecentChanges />
        <LabActivity />
        <Context />
      </div>
    </main>
  )
}

export default App
