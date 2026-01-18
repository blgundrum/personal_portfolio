export default function LabActivity() {
  const experiments = [
    "Scroll-based navigation experiment",
    "CSS grid typography test",
    "Micro-interaction concept"
  ]

  return (
    <section 
      className="artistic-section"
      aria-labelledby="lab-activity-heading"
    >
      <h2 
        id="lab-activity-heading"
        className="text-4xl sm:text-5xl font-sans font-semibold mb-8 text-text-primary"
      >
        Lab
      </h2>
      
      <div className="mt-8 space-y-3">
        {experiments.map((experiment, index) => (
          <div 
            key={index}
            className="info-card"
          >
            <div className="flex items-center gap-3">
              <span className="text-accent text-lg" aria-hidden="true">⚗</span>
              <span className="text-text-secondary/90 text-base">{experiment}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
