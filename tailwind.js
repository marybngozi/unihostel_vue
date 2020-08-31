/* eslint-disable prettier/prettier */
module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
    theme: {
      extend: {
        colors: {
          "swizel-colorA": "#2F4F4F",
          "swizel-colorB": "#377781",
          "swizel-colorC": "#86E2EF",
          "swizel-colorD": "#16829F"
        }
      },
      screens: {
        xs: "320px",
  
        sm: "640px",
        // => @media (min-width: 640px) { ... }
  
        md: "768px",
        // => @media (min-width: 768px) { ... }
  
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
  
        xl: "1280px"
        // => @media (min-width: 1280px) { ... }
      },
      fontFamily: {
        // eslint-disable-next-line prettier/prettier
        "swizelFont": "Raleway",
        "poppins": "Poppins"
      }
    },
    variants: {},
    plugins: []
  };
  