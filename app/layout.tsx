import type { Metadata } from "next";
import { enigma, georgiaPro } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://trkulja.rs"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${enigma.variable} ${georgiaPro.variable}`}>
      <body>{children}</body>
    </html>
  );
}
