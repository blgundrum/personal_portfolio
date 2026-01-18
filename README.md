# Portfolio System

A living portfolio system that showcases design and development work through a mission control dashboard interface.

## Features

- **System Status Dashboard** - Real-time view of active projects and current focus
- **Current Work** - Log-style entries showing active projects
- **Recent Changes** - Changelog-style feed of updates
- **Lab Activity** - Experimental work and tests
- **Sci-Fi Theme** - Animated stars background with shooting stars
- **Accessibility** - Full keyboard navigation, ARIA labels, screen reader support
- **Performance** - Optimized for Lighthouse scores
- **Responsive** - Mobile-first design with flexible layouts

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- HTML5 semantic markup
- CSS3 (Flexbox, Grid)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    StarsBackground.jsx    # Animated stars background
    SystemStatus.jsx       # System status section
    CurrentWork.jsx        # Current work list
    RecentChanges.jsx      # Changelog feed
    LabActivity.jsx        # Lab experiments
    Context.jsx            # Minimal identity section
  hooks/
    useKeyboardNavigation.js  # Keyboard navigation hook
  App.jsx                 # Main app component
  main.jsx                # Entry point
  index.css               # Global styles
```

## Design Principles

- Minimal and clean design
- Professional mission control aesthetic
- No scroll hijacking
- Subtle animations only
- High contrast ratios for accessibility
- Performance-first approach

## Accessibility

- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Focus indicators
- Proper heading hierarchy

## License

Private project
