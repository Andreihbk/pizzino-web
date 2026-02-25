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
      // în tailwind.config.ts sub theme.extend:
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
} satisfies Config;