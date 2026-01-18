export default function SystemStatus() {
  const activeProjects = 3
  const lastUpdateDays = 2
  const currentFocus = "Accessibility & Performance"

  return (
    <section 
      className="mb-16 sm:mb-20 lg:mb-24"
      aria-labelledby="system-status-heading"
    >
      <header className="mb-6">
        <h1 
          id="system-status-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal mb-2 text-text-primary"
        >
          System Status
        </h1>
        <p className="text-sm text-text-secondary">
          A living record of design and development work
        </p>
      </header>
      
      <div className="space-y-3 text-sm sm:text-base">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <span className="text-text-secondary">Active projects:</span>
          <span className="text-text-primary font-medium">{activeProjects}</span>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <span className="text-text-secondary">Last update:</span>
          <span className="text-text-primary font-medium">{lastUpdateDays} {lastUpdateDays === 1 ? 'day' : 'days'} ago</span>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <span className="text-text-secondary">Current focus:</span>
          <span className="text-text-primary font-medium">{currentFocus}</span>
        </div>
      </div>
    </section>
  )
}
