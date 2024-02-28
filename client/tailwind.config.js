/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {      
      fontFamily: {
        phudu: ['Phudu', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

