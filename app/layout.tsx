import type { Metadata } from "next";
import { CookieConsentManager } from "./CookieConsentManager";
import { enigma, georgiaPro } from "./fonts";
import "./globals.css";
import { siteUrl } from "./siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/assets/logos/Trkulja Logo Favicon Black.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${enigma.variable} ${georgiaPro.variable}`}>
      <body>
        {children}
        <CookieConsentManager />
      </body>
    </html>
  );
}
