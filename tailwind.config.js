/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flyonui/dist/js/*.js',
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["Jost"],
      // },
    },
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin"),
    
  ],
};
