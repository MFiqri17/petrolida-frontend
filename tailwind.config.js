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
        primary: '#07003F',
        secondary: '#3D4BE0',
        tertiary: '#8EF1FF',
        cream: '#EDCDC0',
        light: '#EDEEF3',
        lightb: '#EFF0F4',
        whiteb: '#FBFBFC',
        error: '#FF695A',
        success: '#1DE4AE',
      },
      fontFamily: {
        primary: ['var(--font-primary)'],
      },
      animation: {
        blob: 'blob 7s infinite',
        blob2: 'blob2 7s infinite',
        blob3: 'blob3 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        blob2: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(40px, -40px) scale(1.2)',
          },
          '66%': {
            transform: 'translate(-30px, 30px) scale(0.8)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        blob3: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(20px, -60px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-10px, 10px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}
