export default function SectionNavigator({ sections, currentSection, onSectionChange }) {
  return (
    <nav 
      className="fixed top-4 sm:top-8 left-1/2 -translate-x-1/2 z-50 flex gap-1 sm:gap-2 bg-bg-secondary/90 backdrop-blur-lg px-2 sm:px-4 py-2 rounded-full border border-accent/20 shadow-lg"
      aria-label="Section navigation"
    >
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => onSectionChange(index)}
          className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 focus-visible-ring ${
            currentSection === index
              ? 'bg-accent text-white shadow-lg shadow-accent/30'
              : 'text-text-secondary hover:text-text-primary hover:bg-bg-primary/50'
          }`}
          aria-label={`Go to ${section.label}`}
          aria-current={currentSection === index ? 'page' : undefined}
        >
          {section.label}
        </button>
      ))}
    </nav>
  )
}
