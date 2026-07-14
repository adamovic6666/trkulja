import localFont from "next/font/local";

export const enigma = localFont({
  src: "../public/assets/fonts/EnigmaU.ttf",
  variable: "--font-enigma",
  display: "swap",
  preload: true,
});

export const georgiaPro = localFont({
  src: [
    { path: "../public/assets/fonts/GEORGIA-PRO.ttf", weight: "400", style: "normal" },
    { path: "../public/assets/fonts/GEORGIA-PRO-BOLD.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-georgia-pro",
  display: "swap",
  preload: true,
});
