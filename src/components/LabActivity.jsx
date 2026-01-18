export default function LabActivity() {
  const experiments = [
    "Scroll-based navigation experiment",
    "CSS grid typography test",
    "Micro-interaction concept"
  ]

  return (
    <section 
      className="mb-16 sm:mb-20 lg:mb-24 scroll-section"
      aria-labelledby="lab-activity-heading"
    >
      <h2 
        id="lab-activity-heading"
        className="text-2xl sm:text-3xl font-serif font-normal mb-8 text-text-primary"
      >
        Lab
      </h2>
      
      <ul className="space-y-3" role="list">
        {experiments.map((experiment, index) => (
          <li 
            key={index}
            className="text-sm sm:text-base text-text-secondary"
          >
            {experiment}
          </li>
        ))}
      </ul>
    </section>
  )
}
