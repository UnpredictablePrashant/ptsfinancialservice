import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#07627D',
          light: '#0BA7B5',
          gold: '#F0B429',
          navy: '#022A3A'
        }
      },
      boxShadow: {
        focus: '0 0 0 4px rgba(11,167,181,0.3)'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif']
      }
    }
  },
  plugins: []
};

export default config;
