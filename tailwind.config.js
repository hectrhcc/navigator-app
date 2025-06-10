/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      colors: {
        primary: "#49129C",
        secondary: {
          DEFAULT: "#B40086",
          100: "#C51297",
          200: "#831266",
          300: "#E734B9", 
          400: "#F845CA",
          500: "#FF56DB",
        },
        tertiary: "#EF2967",
        quaternary: "#000000",
        quinary: "#FFFFFF",
        gray: {
          100: "#F7F7F7",
          200: "#EDEDED",
          300: "#D9D9D9",
          400: "#B3B3B3",
          500: "#808080",
          600: "#4D4D4D",
          700: "#262626",
          800: "#1A1A1A",
          900: "#0D0D0D",
        },
      },

      fontFamily: {
        'work-black': ["WorkSans-Black", "sans-serif"],
        'work-light': ["WorkSans-Light", "sans-serif"],
        'work-medium': ["WorkSans-Medium", "sans-serif"],
      },


    },
  },
  plugins: [],
}