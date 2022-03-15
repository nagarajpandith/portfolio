module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Be Vietnam Pro', 'system-ui', 'sans']
    },
    extend: {
      colors: {
        dark: '#000',
        white: '#fff',
        lightText: '#76797d'
      },
      animation: {
        tilt: 'tilt 7s infinite linear',
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(1deg)',
          },
          '75%': {
            transform: 'rotate(-1deg)',
          },
        },
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
