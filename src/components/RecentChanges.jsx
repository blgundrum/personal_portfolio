export default function RecentChanges() {
  const changes = [
    "Refactored portfolio layout for readability",
    "Improved lighthouse score from 78-94",
    "Added keyboard navigation to project examples",
    "Optimized image loading with lazy loading",
    "Enhanced mobile responsive breakpoints"
  ]

  return (
    <section 
      className="artistic-section"
      aria-labelledby="recent-changes-heading"
    >
      <h2 
        id="recent-changes-heading"
        className="text-4xl sm:text-5xl font-sans font-semibold mb-8 text-text-primary"
      >
        Changelog
      </h2>
      
      <div className="mt-8 space-y-3">
        {changes.map((change, index) => (
          <div 
            key={index}
            className="info-card flex items-start gap-4 group"
          >
            <span className="text-accent mt-1 font-semibold text-lg" aria-hidden="true">+</span>
            <span className="text-text-secondary/90 text-base flex-1">{change}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
