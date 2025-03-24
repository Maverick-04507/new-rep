/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  
    extend: {
      boxShadow: {
        'custom': '0px 0px 17px #0066FF',
        'custom-border': '0px 4px 20px #000000 inset',
      },
      colors: {
        blueNeon: '#33FCFF',
        foot: '#447BCE',
        bot: '#447BCE',
        top: '#6E41F7',
    },
    fontFamily: {
      rajdhani: ['Rajdhani', 'sans-serif'],
    },
    screens: {
      'mobile': { 'max': '500px' },
      'pc': { 'min': '500px' },
      'tablet': '650px',
      'pc2xl': { 'max': '1535px' }, // => @media (max-width: 1535px) { ... }
      'pcxl': { 'max': '1279px' }, // => @media (max-width: 1279px) { ... }
      'pclg': { 'max': '1023px' }, // => @media (max-width: 1023px) { ... }
      'pcmd': { 'max': '767px' }, // => @media (max-width: 767px) { ... }
      'pcsm': { 'max': '639px' }, // => @media (max-width: 639px) { ... }
    }
    },
  },
  plugins: [],
};
