import { site } from "./data";
import { siteUrl } from "./siteConfig";

type Locale = "en" | "sr";

const streetAddress: Record<Locale, string> = {
  en: "Krajiska 4",
  sr: "Krajiška 4",
};

const addressLocality: Record<Locale, string> = {
  en: "Indjija",
  sr: "Inđija",
};

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function getLocalBusinessJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Dalibor Trkulja",
    image: `${siteUrl}/assets/og/trkulja-og.png`,
    url: siteUrl,
    telephone: site.phoneDisplay,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: streetAddress[locale],
      addressLocality: addressLocality[locale],
      postalCode: "22320",
      addressCountry: "RS",
    },
    sameAs: [
      site.socials.facebook,
      site.socials.instagram,
      site.socials.tiktok,
      site.socials.youtube,
    ],
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}
