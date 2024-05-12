/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      oswald: ['Oswald', 'sans-serif'],
      ubunMs: ['Ubuntu Sans Mono', 'monospace']
    },
    extend: {},
  },
  plugins: [],
}

