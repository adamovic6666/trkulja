import type { Metadata } from "next";

const openGraphImage = {
  url: "/assets/og/trkulja-og.png",
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
  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      siteName: "Dalibor Trkulja",
      title,
      description,
      url: canonical,
      locale: locale === "sr" ? "sr_RS" : "en_US",
      alternateLocale: locale === "sr" ? ["en_US"] : ["sr_RS"],
      images: [openGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [openGraphImage.url],
    },
  };
}
