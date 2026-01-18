export default function Context() {
  return (
    <section 
      className="artistic-section"
      aria-labelledby="context-heading"
    >
      <h2 
        id="context-heading"
        className="text-4xl sm:text-5xl font-sans font-semibold mb-8 text-text-primary"
      >
        About
      </h2>
      
      <div className="mt-8">
        <div className="info-card">
          <p className="text-lg sm:text-xl text-text-secondary/90 leading-relaxed mb-6">
            I design and build web interfaces with a focus on clarity, iteration, and real-world usability.
          </p>
          <div className="pt-4 border-t border-accent/20">
            <p className="text-base text-text-secondary/60 uppercase tracking-wider text-xs mb-2">Designer & Developer</p>
            <p className="text-2xl sm:text-3xl font-sans font-semibold text-text-primary">
              Brandon Gundrum
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
