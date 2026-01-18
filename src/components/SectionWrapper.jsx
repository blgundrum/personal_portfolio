export default function SectionWrapper({ children, isActive, className = "" }) {
  return (
    <div
      className={`section-container ${isActive ? 'active' : 'inactive'} ${className}`}
      aria-hidden={!isActive}
    >
      <div className="section-content">
        {children}
      </div>
    </div>
  )
}
