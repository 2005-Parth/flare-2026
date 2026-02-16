/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
        syncopate: ['Syncopate', 'sans-serif'],
      },
      colors: {
        void: '#0a0a0a',
        past: {
          gold: '#d4af37',
          sepia: '#3d2817',
          dark: '#1a1410',
        },
        present: {
          red: '#dc2626',
          blue: '#2563eb',
          purple: '#7c3aed',
          cyan: '#06b6d4',
        },
        future: {
          neon: '#a855f7',
          holo: '#06b6d4',
          dark: '#1a0a2e',
          deep: '#4a1a5c',
        },
      },
    },
  },
  plugins: [],
};
