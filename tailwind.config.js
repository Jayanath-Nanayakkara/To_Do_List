/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#265082",
        customBlue_100: "#1f3c6c",
      },
    },
  },
  plugins: [],
};
