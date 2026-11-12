/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0C0C0C',
        ivory: '#F5F0EB',
        'warm-gray': '#9A9087',
        'light-gray': '#E8E2DA',
        accent: '#C8A44E',
        'accent-dark': '#A8893A',
        'accent-light': '#DDB96A',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
