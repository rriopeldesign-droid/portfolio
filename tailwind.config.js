/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./case-studies/**/*.html",
    "./de/**/*.html",
    "./fr/**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Syne"', 'sans-serif'],
        'body': ['"Inter Tight"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Values live as CSS variables in src/input.css so dark sections can remap them
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        faint: 'rgb(var(--c-faint) / <alpha-value>)',
        border: 'rgb(var(--c-border) / <alpha-value>)',
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        forest: 'rgb(var(--c-forest) / <alpha-value>)',
        jungle: 'rgb(var(--c-jungle) / <alpha-value>)',
        peach: 'rgb(var(--c-peach) / <alpha-value>)',
      },

      fontSize: {
        'hero': ['clamp(3rem, 8vw, 7.5rem)', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '800' }],
        'section': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
};