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
      className="mb-16 sm:mb-20 lg:mb-24 scroll-section"
      aria-labelledby="recent-changes-heading"
    >
      <h2 
        id="recent-changes-heading"
        className="text-2xl sm:text-3xl font-serif font-normal mb-8 text-text-primary"
      >
        Changelog
      </h2>
      
      <ul className="space-y-3" role="list">
        {changes.map((change, index) => (
          <li 
            key={index}
            className="flex items-start gap-3 text-sm sm:text-base"
          >
            <span className="text-accent mt-1" aria-hidden="true">+</span>
            <span className="text-text-secondary">{change}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
