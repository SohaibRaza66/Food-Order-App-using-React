/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#fff',
      'transparent': 'transparent',
      'db':{
        900:'#AD343E'
      },
      'darkgreen':{
        900:'#05C167'
      },
      'red':{
        900:'#F63440'
      },
      'orange':{
        900:'#FF3008'
      },
      'pink':{
        900:'#D70F64'
      },
      'aqua':{
        900:'#00CCBC'
      },
      'lightgreen':{
        900:'#43B02A'
      },
      'bg':{
        900:'#F9F9F7'
      }
    }
  },
  plugins: [],
}