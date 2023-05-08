import colors from "tailwindcss/colors";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
/** @type {import('tailwindcss').Config} */

const defaultTheme = {
  content: ["./src/**/*.{js,jsx,ts,tsx,cjs}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          light: colors.slate[100],
          DEFAULT: colors.slate[500],
          dark: colors.slate[600],
        },
        textColor: {
          violet: colors.violet[600],
        },
        backgroundColor: {
          mauve: colors.violet[100],
        },
      },

      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [forms, typography],
};

export default defaultTheme;
