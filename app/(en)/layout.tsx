import type { Metadata, Viewport } from "next";
import { CookieConsentManager } from "../CookieConsentManager";
import { Header } from "../components";
import { enigma, georgiaPro } from "../fonts";
import { siteUrl } from "../siteConfig";
import { getLocalBusinessJsonLd, JsonLd } from "../structuredData";
import "../globals.css";

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/assets/logos/Trkulja Logo Favicon White.svg",
    apple: "/assets/icons/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${enigma.variable} ${georgiaPro.variable}`}>
      <body>
        <div className="min-h-screen bg-brand-black text-brand-white">
          <Header locale="en" />
          {children}
        </div>
        <CookieConsentManager />
        <JsonLd data={getLocalBusinessJsonLd("en")} />
      </body>
    </html>
  );
}
