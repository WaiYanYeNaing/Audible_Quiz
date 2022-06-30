module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightgray: '#7b7f85',
        gray: '#555b61',
        mediumgray: '#2F3840',
        darkgray: '#2b353d',
        white: '#ffffff',
        yellow: '#f0b842',
        brown: '#7b7f85',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
