/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-main": "linear-gradient(97.23deg, #004380 0%, #0085D2 100%);",
      },
    },
    colors: {
      white: "#fff",
      black: "#000",
      grey: {
        100: "hsl(210,36%,96%)",
        200: "hsl(212,33%,89%)",
        300: "hsl(210,31%,80%)",
        400: "hsl(209,23%,60%)",
        500: "hsl(209,28%,39%)",
        600: "hsl(209,34%,30%)",
        700: "hsl(209,61%,16%)",
      },
      blue: {
        100: "hsl(209,99%,90%)",
        200: "hsl(209,100%,73%)",
        300: "hsl(209,100%,54%)",
        400: "hsl(209,99%,44%)",
        500: "hsl(209,99%,34%)",
        600: "hsl(209,100%,26%)",
        700: "hsl(209,100%,15%)",
      },
      green: {
        100: "hsl(154,75%,87%)",
        200: "hsl(156,60%,74%)",
        300: "hsl(160,51%,56%)",
        400: "hsl(162,63%,41%)",
        500: "hsl(166,72%,33%)",
        600: "hsl(168,80%,23%)",
        700: "hsl(170,97%,15%)",
      },
    },
    fontFamily: {
      heading: "'Kumbh Sans', serif",
      body: "'Inter', sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
