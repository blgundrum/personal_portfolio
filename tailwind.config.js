/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        'bg-primary': '#0a0a0f',
        'bg-secondary': '#111118',
        'text-primary': '#e8e8f0',
        'text-secondary': '#a0a0b0',
        'accent': '#4a9eff',
        'accent-hover': '#6bb3ff',
      },
    },
  },
  plugins: [],
}
