import { useState, useEffect } from 'react'
import StarsBackground from './components/StarsBackground'
import SystemStatus from './components/SystemStatus'
import CurrentWork from './components/CurrentWork'
import RecentChanges from './components/RecentChanges'
import LabActivity from './components/LabActivity'
import Context from './components/Context'
import SectionNavigator from './components/SectionNavigator'
import SectionWrapper from './components/SectionWrapper'
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation'

function App() {
  useKeyboardNavigation()
  
  const [currentSection, setCurrentSection] = useState(0)
  
  const sections = [
    { id: 'status', label: 'Status', component: SystemStatus },
    { id: 'work', label: 'Work', component: CurrentWork },
    { id: 'changes', label: 'Changes', component: RecentChanges },
    { id: 'lab', label: 'Lab', component: LabActivity },
    { id: 'context', label: 'About', component: Context },
  ]

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        setCurrentSection((prev) => (prev + 1) % sections.length)
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [sections.length])

  return (
    <main className="relative min-h-screen overflow-hidden">
      <StarsBackground />
      <SectionNavigator 
        sections={sections} 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection}
      />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-5xl min-h-screen flex items-start justify-center pt-16 sm:pt-20">
          <div className="relative w-full max-w-4xl mt-8 sm:mt-12">
          {sections.map((section, index) => {
            const Component = section.component
            return (
              <SectionWrapper 
                key={section.id}
                isActive={currentSection === index}
              >
                <Component />
              </SectionWrapper>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default App
