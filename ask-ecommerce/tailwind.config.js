/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xm:'320px',
        sm: {'max':'425px'},
        md: '768px',
        lg: {'max':'976px'},
        xl: '1440px',
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Example of defining custom utility classes

    
  },
}