/** @type {import('tailwindcss').Config} */
const withAnimations = require("animated-tailwindcss");
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--theme-background)",
        backgroundVariant: "var(--theme-backgroundVariant)",
        onBackground: "var(--theme-on-background)",
        onBackgroundVariant: "var(--theme-on-backgroundVariant)",
        primary: "var(--theme-primary)",
        primaryVariant: "var(--theme-primaryVariant)",
        onPrimary: "var(--theme-on-primary)",
        onPrimaryVariant: "var(--theme-on-primaryVariant)",
        secondary: "var(--theme-secondary)",
        onSecondary: "var(--theme-on-secondary)",
        secondaryVariant: "var(--theme-secondary-variant)",
        surface: "var(--theme-surface)",
        onSurface: "var(--theme-on-surface)",
        onSurfaceVariant: "var(--theme-on-surfaceVariant)",
        error: "var(--theme-error)",
        onError: "var(--theme-on-error)",
        success: "var(--theme-success)",
        onSuccess: "var(--theme-on-success)",
      },
      fontFamily: {
        "sans-serif": [
          "Roboto",
          "Lato",
          "Sora",
          "Poppins",
          "Raleway",
          "Oswald",
          "Montserrat Alternates",
          "Anton",
          "Archivo",
          "Encode Sans",
          "Epilogue",
          "Work Sans",
        ],
        serif: [
          "Lora",
          "Andada Pro",
          "Hahmlet",
          "Cormorant",
          "Old Standard TT",
          "Playfair Display",
          "Anton",
          "Archivo",
        ],
        monospace: ["JetBrains Mono", "Source Code Pro"],
        "bangla-uni": ["Noto Serif Bengali", "Baloo Da 2"],
        galada: ["Galada"],
        "mrs-saint-delafield": ["Mrs Saint Delafield"],
        amita: ["Amita"],
        cookie: ["Cookie"],
        "rock-salt": ["Rock Salt"],
        sacramento: ["Sacramento"],
        hurricane: ["Hurricane"],
        stalemate: ["Stalemate"],
        "ms-madi": ["Ms Madi"],
        kolker: ["Kolker Brush"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
