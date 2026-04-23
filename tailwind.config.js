module.exports = {
  content: [
    './pages/**/*.{js,jsx,tx,tsx}',
    './components/**/*.{js,jsx,tx,tsx}'
  ],
  safelist: [
    {
      pattern: /grid-cols-(1|2|3|4|5)/,
      variants: ['sm', 'md', 'lg'],
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['futura-pt', 'sans-serif'],
        sackHeavy: ['ATSackersCornwallHeavy', 'sans-serif'],
        sackMed: ['ATSackersCornwallMedium', 'sans-serif'],
        sackLight: ['ATSackersCornwallLight', 'sans-serif'],
        Montserrat: ['Montserrat-ExtraBold', 'sans-serif'],
        Montserrat: ['Montserrat-Bold', 'sans-serif'],

      },
      colors: {
        darkBlue: '#002157',
        lightBlue: '#00a8e6',
        modalBlue: '#16569e',
        bannerBlue: '#16569e',
        red: '#ef4123',
        nearlyBlack: '#111111',
        testBG: '#ebf7ff',
        grey: '#666666',
        lightGrey: '#cccccc',
        darkGrey: '#252525',
        nearlyWhite: '#f7f7f7',
        divideBorder: '#bbbbbb',
        cratesBlue: '#d9eff1',
        darkBlue400: '#00215766',
      },
      fontSize: {
        '2xs': '0.5rem',
        '22': '22.4px',
        forty: '2.5rem',
      },
      lineHeight: {
        tighter: '0.9rem'
      },
      width: {
        '1/5': '20%',
        '4/5': '80%',
        '1/8': '12.5%',
        '45': '45%',
      },
      maxWidth: {
        '8xl': '1440px'
      },
      minWidth: {
        roro: '110px'
      },
      aspectRatio: {
        image1: '2000/1150',
        image2: '1920/1230',
        image3: '125/142',
        '4/3': '4/3',
        logo: '263/52'
      },
      transitionProperty: {
        width: 'width'
      },
      minHeight: {
        '250': '250px',
        '600': '600px'
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
