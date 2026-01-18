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
      className="mb-16 sm:mb-20 lg:mb-24"
      aria-labelledby="current-work-heading"
    >
      <h2 
        id="current-work-heading"
        className="text-2xl sm:text-3xl font-serif font-normal mb-8 text-text-primary"
      >
        Current Work
      </h2>
      
      <ul className="space-y-6" role="list">
        {projects.map((project, index) => (
          <li 
            key={index}
            className="border-l-2 border-accent pl-4 sm:pl-6 py-2 hover:border-accent-hover transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-medium text-text-primary mb-1">
                  {project.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary">
                  <span>Status: <span className="text-text-primary">{project.status}</span></span>
                  <span className="hidden sm:inline">•</span>
                  <span>Last change: {project.lastChange}</span>
                </div>
              </div>
              <a
                href={project.link}
                className="text-sm text-accent hover:text-accent-hover focus-visible-ring inline-flex items-center gap-1 mt-2 sm:mt-0"
                aria-label={`View case study for ${project.title}`}
              >
                View Case Study
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
