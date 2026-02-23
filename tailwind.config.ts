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
        // Folosim codurile tale exacte din brand guidelines
        background: "#dfd4b9", 
        foreground: "#1A1A1A",
        brand: {
          cream: "#dfd4b9",
          red: "#c5081f",
          black: "#1A1A1A",
        },
      },
      fontFamily: {
        heading: ["var(--font-bungee)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
} satisfies Config;