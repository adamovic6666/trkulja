import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#000000",
          ink: "#1A1A1A",
          charcoal: "#333333",
          header: "#666666",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        enigma: ["var(--font-enigma)", "Arial", "sans-serif"],
        georgiaPro: ["var(--font-georgia-pro)", "Georgia", "serif"],
      },
      borderRadius: {
        "4xl": "42px",
        "5xl": "76px",
      },
      maxWidth: {
        site: "1080px",
      },
    },
  },
  plugins: [],
};

export default config;
