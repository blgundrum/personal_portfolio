export default function SystemStatus() {
  const activeProjects = 3
  const lastUpdateDays = 2
  const currentFocus = "Accessibility & Performance"

  return (
    <section 
      className="artistic-section"
      aria-labelledby="system-status-heading"
    >
      <header className="mb-8">
        <h1 
          id="system-status-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold mb-3 text-text-primary"
        >
          System Status
        </h1>
        <p className="text-sm sm:text-base text-text-secondary/80">
          A living record of design and development work
        </p>
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <div className="info-card">
          <div className="info-card-title">Active Projects</div>
          <div className="info-card-value">{activeProjects}</div>
        </div>
        
        <div className="info-card">
          <div className="info-card-title">Last Update</div>
          <div className="info-card-value">{lastUpdateDays} {lastUpdateDays === 1 ? 'day' : 'days'}</div>
        </div>
        
        <div className="info-card">
          <div className="info-card-title">Current Focus</div>
          <div className="info-card-value text-base sm:text-lg">{currentFocus}</div>
        </div>
      </div>
    </section>
  )
}
