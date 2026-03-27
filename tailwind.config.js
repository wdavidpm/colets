/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        colets: {
          black: '#0A0A0A',
          white: '#F8F6F1',
          beige: '#E8E0D0',
          olive: '#4A4A38',
          gray: '#8A8A8A',
          light: '#D4CFC4',
        },
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.4em',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
    },
  },
  plugins: [],
}
