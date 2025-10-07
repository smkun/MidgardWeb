/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand colors extracted from Midgard logo
        brand: {
          primary: '#25242C', // Deep charcoal gray (primary brand color)
          secondary: '#B82F2F', // Dark crimson red (secondary brand accent)
          accent: '#EF6725', // Vibrant orange (highlight and energy)
          burgundy: '#972B32', // Deep burgundy (tertiary accent)
          light: '#FEFFFD', // Off-white/cream (backgrounds, text on dark)
          dark: '#25242C', // Alias for primary
          gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
          },
        },
      },
      fontFamily: {
        // System font stack for performance
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        heading: ['"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
        128: '32rem',
      },
    },
  },
  plugins: [],
};
