/* eslint-disable prettier/prettier */
module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
    theme: {
      extend: {
        colors: {
          "footer-bg": "#0C2034",
          "hr-color": "#377781",
          "unidark": "#0C2034",
          "uniblue": "#0278F2",
          "unidarkblue": "#21618C",
          "uniyellow": "#F0FF00",
          "uniash": "#F2F8FE"
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
        "unihostelFont": '"Noto Sans"',
        "poppins": "Poppins"
      }
    },
    variants: {},
    plugins: []
  };
  