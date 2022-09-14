/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*/*.html"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow Condensed"],
        second: ["Teko"],
      },
      spacing: {
        41: "41vh",
      },
      keyframes: {
        Loop: {
          // "0%, 100%": { transform: "rotate(-3deg)" },
          // "50%": { transform: "rotate(3deg)" },
          "10%": {
            opacity: 1,
          },
          "20%": {
            opacity: 0,
          },
        },
        move: {
          "0%": {
            top: 0,
          },
          "10%": {
            top: "1px",
          },
          "20%": {
            top: "2px",
          },
          "30%": {
            top: "3px",
          },
          "40%": {
            top: "4px",
          },
          "50%": {
            top: "5px",
          },
          "60%": {
            top: "6px",
          },
          "70%": {
            top: "7px",
          },
          "80%": {
            top: "8px",
          },
          "90%": {
            top: "9px",
          },
          "100%": {
            top: "10px",
          },
        },
      },
      animation: {
        Loop: "Loop 25s infinite",
        Move: "move 2s alternate infinite",
      },
      animationDelay: {
        5: "5s",
        10: "10s",
        15: "15s",
        20: "20s",
      },
      backgroundImage: {
        // recap: "url('/assets/imgs/recap_background.jpg')",
        hiha: "url('..public/assets/imgs/trailer_background.jpg')",
        recap:
          "linear-gradient(180deg, black 0%, rgba(0, 0, 0, 0.9) 2%, rgba(0, 0, 0, 0.8) 4%, rgba(0, 0, 0, 0.7) 6%, rgba(0, 0, 0, 0.6) 8%, rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.4) 12%, rgba(0, 0, 0, 0.3) 14%, rgba(0, 0, 0, 0.2) 16%, rgba(0, 0, 0, 0.1) 18%, transparent 20%, transparent 90%, rgba(0, 0, 0, 0.1) 91%, rgba(0, 0, 0, 0.2) 92%, rgba(0, 0, 0, 0.3) 93%, rgba(0, 0, 0, 0.4) 94%, rgba(0, 0, 0, 0.5) 95%, rgba(0, 0, 0, 0.6) 96%, rgba(0, 0, 0, 0.7) 97%, rgba(0, 0, 0, 0.8) 98%, rgba(0, 0, 0, 0.9) 99%, black 100%);",
        trailwer:
          "linear-gradient(180deg, black 0%, rgba(0, 0, 0, 0.9) 2%, rgba(0, 0, 0, 0.8) 4%, rgba(0, 0, 0, 0.7) 6%, rgba(0, 0, 0, 0.6) 8%, rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.4) 12%, rgba(0, 0, 0, 0.3) 14%, rgba(0, 0, 0, 0.2) 16%, rgba(0, 0, 0, 0.1) 18%, transparent 20%, transparent 80%, rgba(0, 0, 0, 0.1) 82%, rgba(0, 0, 0, 0.2) 84%, rgba(0, 0, 0, 0.3) 86%, rgba(0, 0, 0, 0.4) 88%, rgba(0, 0, 0, 0.5) 90%, rgba(0, 0, 0, 0.6) 92%, rgba(0, 0, 0, 0.7) 94%, rgba(0, 0, 0, 0.8) 96%, rgba(0, 0, 0, 0.9) 98%, black 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../assets/imgs/trailer_background.jpg) center center/cover no-repeat;",
      },
      dropShadow: {
        "3xl": "0 0 20px black, 0 0 40px black;",
      },
      colors: {
        primary: "#ed1c24",
      },
      boxShadow: {
        itemShadownActive: "0 0 6px #ed1c24, 0 0 12px #ed1c24",
        itemShadown: "0 0 1px #ed1c24, 0 0 8px #ed1c24",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        trailer: "100px 100px 300px",

        // Complex site-specific row configuration
        layout: "200px minmax(900px, 1fr) 100px",
        hi: "500px",
        footer: "290px 100px",
        footer_mobile: "150px 90px",
        footer_col: "1fr 1fr",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
