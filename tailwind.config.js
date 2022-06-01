module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        qpSky: '#00BBF0',
        qpNavy: '#00204A',
        qpTwilight: '#093470',
        qpWater: '#115FCE',
        qpPeriwinkle: '#C2D9FA',
        qpPale: '#C2D9FA',
        qpDark: '#0F1D2B',
        qpSlate: {
          100: '#EFF4F8',
          200: '#E2EAF0',
          300: '#B6C7D4',
          400: '#91A3B0',
          500: '#5B6B7C',
          600: '#3F4F5F',
          700: '#202D3A',
          800: '#0F1D2B',
        },
      },
      fontFamily: {
        lato: 'Lato',
        mukta: 'Mukta'
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms')
  ],
  purge: false,
  safelist: [
    {
      pattern: /(.*?)/,
    },
  ],
}
