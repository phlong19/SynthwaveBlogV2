/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,js,tsx,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        cas: ['"Cascadia Code"'],
      },
      colors: {
        light: "#f2f4f4",
      },
    },
  },
  plugins: [],
};
