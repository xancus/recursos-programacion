/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        'hover-primary': 'var(--hover-color-primary)',
        'hover-secondary': 'var(--hover-color-secondary)'
      }
    }
  },
  darkMode: 'class',
  plugins: []
}
