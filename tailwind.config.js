/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#03050a',
          900: '#080d16',
          800: '#0d1520',
          700: '#131d2b',
        },
        mist: {
          100: '#e8f4fd',
          300: '#8ab4cc',
          500: '#4a7a99',
        },
        cyan: {
          accent: '#63b3ed',
        },
        violet: {
          accent: '#9f7aea',
        },
        mint: {
          accent: '#68d391',
        },
        amber: {
          accent: '#f6c453',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(600px 600px at 80% 0%, rgba(99,179,237,0.05) 0%, transparent 70%), radial-gradient(500px 500px at 10% 100%, rgba(159,122,234,0.05) 0%, transparent 70%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(99,179,237,0.15), 0 12px 40px -12px rgba(99,179,237,0.25)',
      },
    },
  },
  plugins: [],
};
