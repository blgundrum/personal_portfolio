export default function Context() {
  return (
    <section 
      className="mb-16 sm:mb-20 lg:mb-24"
      aria-labelledby="context-heading"
    >
      <h2 
        id="context-heading"
        className="sr-only"
      >
        Context
      </h2>
      
      <div className="max-w-2xl">
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-4">
          I design and build web interfaces with a focus on clarity, iteration, and real-world usability.
        </p>
        <p className="text-sm sm:text-base text-text-secondary">
          <span className="text-text-primary">Ben Gundrum</span>
        </p>
      </div>
    </section>
  )
}
