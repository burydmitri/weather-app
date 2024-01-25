/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'primary': 'var(--primary-color)',
            'primary-text': 'var(--primary-color-text)',

            'surface-0': 'var(--surface-0)',
            'surface-50': 'var(--surface-50)',
            'surface-100': 'var(--surface-100)',
            'surface-200': 'var(--surface-200)',
            'surface-300': 'var(--surface-300)',
            'surface-400': 'var(--surface-400)',
            'surface-500': 'var(--surface-500)',
            'surface-600': 'var(--surface-600)',
            'surface-700': 'var(--surface-700)',
            'surface-800': 'var(--surface-800)',
            'surface-900': 'var(--surface-900)',

            'text-color': 'var(--text-color)',
            'text-color-secondary': 'var(--text-color-secondary)',
            'highlight': 'var(--highlight-text-color)'
        }
    }
  },
  plugins: [],
}