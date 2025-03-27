/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',  // Ensure Just-in-Time mode is enabled
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
