/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#07003F",
        'secondary': "#3D4BE0",
        'tertiary': "#8EF1FF",
        'cream': "#EDCDC0",
        'light': "#EDEEF3",
        'error': "#FF695A",
        'success': "#1DE4AE",
      },
      fontFamily: {
        primary: ['var(--font-primary)']
      },
    },
  },
  plugins: [],
}
