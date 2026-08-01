import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B4CCA",
        secondary: "#FF0000",
        accent: "#FFDE00",
        gold: "#B3A125",
        navy: "#1D2C5E",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        pokemon: ["pokemon-solid", "sans-serif"],
        hollow: ["pokemon-hollow", "sans-serif"],
        sans: ["var(--font-merriweather)", "sans-serif"],
      },
      backgroundImage: {
        "stripped-pattern":
          "repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 10px, #f3f4f6 10px, #f3f4f6 20px)",
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;