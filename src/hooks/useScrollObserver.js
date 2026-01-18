import { useEffect, useRef } from 'react'

export function useScrollObserver() {
  const observerRef = useRef(null)

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('.scroll-section')
      
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in')
              entry.target.classList.remove('animate-out')
            } else {
              // Hide section when it's scrolled past
              const rect = entry.boundingClientRect
              if (rect.top < -50) {
                entry.target.classList.add('animate-out')
                entry.target.classList.remove('animate-in')
              }
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -80px 0px'
        }
      )

      sections.forEach((section, index) => {
        // First section should be visible immediately
        if (index === 0) {
          section.classList.add('animate-in')
        }
        if (observerRef.current) {
          observerRef.current.observe(section)
        }
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      if (observerRef.current) {
        const sections = document.querySelectorAll('.scroll-section')
        sections.forEach((section) => {
          observerRef.current.unobserve(section)
        })
        observerRef.current.disconnect()
      }
    }
  }, [])
}
