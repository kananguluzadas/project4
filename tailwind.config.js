/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': '380px'
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        md: '0.9rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      colors: {
        'footer-top': '#f5f5f5',
        'footer-bottom': '#e8e8e8'
      },
      margin: {
        '52px': '46px',
        '10px': '10px',
        '120px': '120px',
        '90px': '90px',
        '140px': '140px',
        '75px': '75px'
      },
      padding: {
        '190px': '190px',
        '100px': '100px',
        '20px': '20px',
        '80px': '80px',
        '70px': '70px',
        '35px': '35px',

      },
      width: {
        '30': '30px',
        '369': '315px',
        '116': '116px',
        '320': '320px',
        '70%': '70%',
        '60vw': '60vw',
        '200': '250px',
        '40': '40px',
        '50': '50px'     
      },
      height: {
        '5': '5px',
        '369': '290px',
        '30': '30px',
        '250': '250px',
        '403': '403.51px',
        '55': '55px',
        '500': '500px',
        '200': '200px',
        '100': '100vh',
        '120': '250vh',
        '40': '40px'
      },
      gap: {
        '11': '2.75rem',
        '90': '90px',
        '110' : '110px',
        '100': '100px',
        '80': '5rem'
      },
      top: {
        '10': '10%',
        '100px': '500px',
        '10px': '10px'
      },
      right: {
        '-13px': '-13px',
        '50px': '50px'
      },
      bottom: {
        '-12px': '-12px',
        '-25px': '-25px',
      },
      left: {
        '15px': '15px',
      }
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '2.8xl':'2.5em',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#e35205',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'black': '#000',
      'white': '#fff',
      'violet': '#',
      'transparent': 'transparent'
    },
    fontFamily: {
      'helvetica': ['Helvetica']
    }
  },
  
  plugins: [],
}

