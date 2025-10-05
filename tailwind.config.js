/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx","./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        maingreen: "#072820",
        high: "#FFA500",
        mainblack: "#000000",
        medium: "#808080",
        successgreen: "#00FF00",


      }
    },
  },
  plugins: [],
};
