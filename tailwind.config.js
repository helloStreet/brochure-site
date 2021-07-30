module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  plugins: [
    // ...
  ],
  corePlugins: {
    // ...
    outline: false,
  },
  theme: {
    extend: {
      fontFamily: {
        serif: ["Montserrat", "serif"],
        mono: ["Arial"],
      },
      zIndex: {
        "-1": "-1",
      },
      colors: {
        mylightblue: "#0AF0F0",
        mypurple: "#840185",
        mypink: "#F12B5a",
        myaubergine: "#2C062D",
      },
      fontSize: {
        h1desktop: ["70px", "78px"],
        h1mobile: ["40px", "48px"],
        h2desktop: ["50px", "58px"],
        h2mobile: ["30px", "38px"],
        h3desktop: ["40px", "48px"],
        h3mobile: ["24px", "29px"],
        h4desktop: ["32px", "40px"],
        h4mobile: ["20px", "28px"],
        h5desktop: ["26px", "34px"],
        h5mobile: ["18px", "26px"],
        h6desktop: ["20px", "28px"],
        h6mobile: ["14px", "22px"],
        bodydesktop: ["18px", "28px"],
        bodytablet: ["16px", "29px"],
        bodymobile: ["14px", "24px"],
        buttonxl: ["22px", "26px"],
        buttonlg: ["20px", "23px"],
        buttonmd: ["14px", "16px"],
        buttonsm: ["13px", "15px"],
        smallpill: ["9px", "10px"],
      },
      maxWidth: {
        maxWidth: "1800px",
        priceCard: "300px",
      },
      width: {
        headerBox: "650px",
        300: "300px",
        124: "124px",
        98: "98px",
      },
      height: {
        headerBox: "575px",
        60: "60px",
        50: "50px",
        40: "40px",
        500: "500px",
        700: "700px",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      transitionProperty: {
        height: "height",
      },
    },
    variants: {
      textColor: ["responsive", "hover", "focus", "group-hover"],
      extend: {
        borderColor: ["active"],
      },
    },
  },
};
