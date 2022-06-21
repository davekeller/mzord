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
        qpWaterLight: 'rgba(88, 143, 220, 1)',
        qpPeriwinkle: '#C2D9FA',
        qpPale: '#C2D9FA',
        qpDark: '#0E1D2B',
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
        qpPurple: {
          100: '#7D77C9',
          200: '#645BA5',
          300: '#584A87',
          400: '#251B68',
        },
        qpOrange: {
          100: '#FCB17E',
          200: '#FF9C4A',
          300: '#584A87',
          400: '#251B68',
        },
        qpPink: {
          100: '#E25495',
          200: '#EA2A74',
          300: '#CE255D',
          400: '#9E154D',
        },
        qpBlue: {
          100: '#4BBDEA',
          200: '#2E97CC',
          300: '#186F9B',
          400: '#014C63',
        },
        qpRed: '#CF1B1B',
        qpYellow: '#FAA300',
        qpGreen: {
          100: '#2BE28A',
          200: '#25C191',
          300: '#0F9665',
          400: '#087F51',
          500: '#16BA52',
          600: '#139944',
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
  plugins: [require('@tailwindcss/typography')],
}
