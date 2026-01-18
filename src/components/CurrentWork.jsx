import StatusBadge from './StatusBadge'

export default function CurrentWork() {
  const projects = [
    {
      title: "Client Dashboard Redesign",
      status: "Iterating",
      lastChange: "Improve mobile nav",
      link: "#"
    },
    {
      title: "E-commerce Platform",
      status: "In Progress",
      lastChange: "Add payment integration",
      link: "#"
    },
    {
      title: "Design System Documentation",
      status: "Reviewing",
      lastChange: "Update component examples",
      link: "#"
    }
  ]

  return (
    <section 
      className="artistic-section no-hover"
      aria-labelledby="current-work-heading"
    >
      <h2 
        id="current-work-heading"
        className="text-4xl sm:text-5xl font-sans font-semibold mb-8 text-text-primary"
      >
        Current Work
      </h2>
      
      <div className="space-y-4 mt-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="info-card group"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-sans font-semibold text-text-primary mb-3">
                  {project.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                  <span className="flex items-center gap-2">
                    <span className="text-text-secondary/60">Status:</span>
                    <StatusBadge status={project.status} />
                  </span>
                  <span className="hidden sm:inline text-text-secondary/40">•</span>
                  <span className="text-text-secondary/80">Last change: {project.lastChange}</span>
                </div>
              </div>
              <a
                href={project.link}
                className="text-sm font-medium text-accent hover:text-accent-hover focus-visible-ring inline-flex items-center gap-2 mt-2 sm:mt-0 px-4 py-2 rounded-lg border border-accent/20 hover:border-accent/40 transition-all"
                aria-label={`View case study for ${project.title}`}
              >
                View Case Study
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
