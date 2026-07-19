import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FBF8F1',
        cream: '#F4EEE2',
        beige: '#E8DECB',
        taupe: '#B7A88C',
        ink: '#1B1815',
        anthracite: '#2B2723',
        muted: '#6C6357',
        gold: '#AE8646',
        'gold-soft': '#C7A468',
        bordeaux: '#6E2A33'
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif']
      },
      maxWidth: { content: '1200px' },
      boxShadow: {
        soft: '0 18px 50px -24px rgba(27,24,21,.35)',
        'soft-sm': '0 8px 30px -18px rgba(27,24,21,.35)'
      },
      letterSpacing: { brand: '0.42em' }
    }
  },
  plugins: []
};
export default config;
