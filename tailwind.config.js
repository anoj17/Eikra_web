/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors : {
        primary : '#204075', secondary : '#183058',lightWhite : '#E8E8E8', yellow : '#FFFF00',darkYellow: '#F6BE00', white : '#FFFFFF',black :'#000000'
    },
    extend: {
      keyframes: {
        'to-right':{
          '0%':{transform: 'translateX(-100%)',},'100%':{transform: 'translateX(0)'}
        },
        'to-down':{
          '0%':{transform: 'translateY(190%)',},'100%':{transform: 'translateY(0)'}
        },
        'to-up':{
          '0%':{transform: 'translateY(-150%)',},'75%':{transform: 'translateY(0)'},'95%':{transform: 'translateY(-30%)'},'100%':{transform: 'translateY(0)'}
        },
        'to-rights':{
          '0%':{left: '-100%',},'75%':{left: '0%'},'90%':{left: '10%'},'100%':{left: '0%'}
        },
    },
    animation:{
      'to-right':'to-right 1.5s ease-in-out',
      'to-rights':'to-right .3s ease-in-out',
      'to-up':'to-up 1.2s ease-in-out',
      'to-down':'to-down 1.2s ease-in-out',
    }
    },
    fontFamily: {
      poppins : ['Poppins', 'sans-serif'],
      poppins1 : ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}

