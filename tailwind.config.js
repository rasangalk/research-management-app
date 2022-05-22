module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        144: "31rem",
        100: "25rem",
      },
      fontFamily: {
        Nunito: "Nunito Sans, sans-serif",
      },
      fontSize: {
        xl: "2.5rem",
        sm: "0.875rem",
      },
      padding: {
        "200px": "100px",
      },
      colors: {
        "regal-blue": "#003CFF",
        "regal-blue-active": "#0235DB",
        "bk-white": "#F9F9F9",
        "white-blue": "#EDF2F7",
      },
    },
  },
  plugins: [],
};
