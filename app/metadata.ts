import type { Metadata } from "next";

const assetBaseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://trkulja.rs";

const openGraphImage = {
  url: `${assetBaseUrl}/assets/og/trkulja-og.png`,
  width: 1200,
  height: 630,
  alt: "Dalibor Trkulja",
};

export function createPageMetadata({
  title,
  description,
  canonical,
  languages,
  locale,
}: {
  title: string;
  description: string;
  canonical: string;
  languages: Record<string, string>;
  locale: "en" | "sr";
}): Metadata {
  const socialDescription =
    description.length > 125
      ? `${description.slice(0, 122).trimEnd()}...`
      : description;

  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      siteName: "Dalibor Trkulja",
      title,
      description: socialDescription,
      url: canonical,
      locale: locale === "sr" ? "sr_RS" : "en_US",
      alternateLocale: locale === "sr" ? ["en_US"] : ["sr_RS"],
      images: [openGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: socialDescription,
      images: [openGraphImage.url],
    },
  };
}
