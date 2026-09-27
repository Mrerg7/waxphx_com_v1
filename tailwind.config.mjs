/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#141311',
        panel: '#1C1A17',
        cream: '#F6F1EA',
        paper: '#FBF8F4',
        gold: '#E4C89A',
        clay: '#8C3F2C',
        mute: '#5E574F',
        mist: '#C9C0B6',
        line: '#E4D9CC',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      maxWidth: {
        page: '72rem',
      },
    },
  },
  plugins: [],
};
