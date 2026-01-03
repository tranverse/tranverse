import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#11071F",
        },
      },
    },
  },
} satisfies Config;

export default config;
