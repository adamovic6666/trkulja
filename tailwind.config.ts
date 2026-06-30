import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#000000",
          ink: "#262626",
          charcoal: "#666666",
          header: "#666666",
          white: "#FFFFFF",
          card: "#515151",
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
