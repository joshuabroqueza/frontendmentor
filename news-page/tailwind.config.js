/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-vermillion": "#F15D51",
        "dark-space-blue": "#00001A",
        yellow: "#E9AA52",
      },
    },
  },
  plugins: [],
};
