/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xs': "375px",
      'sm': "640px",
      'md': "768px",
      'lg':"1024px",
      'xl': "1280px",
      '2xl': "1536",

      'hac1': "584px",
      'hac2': "580px",


      // para celulares de eduardin
    },
    extend: {},
  },
  plugins: [],
};
