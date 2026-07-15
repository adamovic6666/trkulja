import type { MetadataRoute } from "next";

const baseUrl = "https://trkulja.rs";

const routes = [
  {
    path: "/",
    alternate: "/sr/",
    changeFrequency: "monthly" as const,
    priority: 1,
  },
  {
    path: "/products/",
    alternate: "/sr/proizvodi/",
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    path: "/products/knives/",
    alternate: "/sr/proizvodi/nozevi/",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/products/axes/",
    alternate: "/sr/proizvodi/sekire/",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/products/other-products/",
    alternate: "/sr/proizvodi/ostali-proizvodi/",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/contact/",
    alternate: "/sr/kontakt/",
    changeFrequency: "yearly" as const,
    priority: 0.6,
  },
  {
    path: "/privacy-policy/",
    alternate: "/sr/politika-privatnosti/",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap(({ path, alternate, changeFrequency, priority }) => [
    {
      url: `${baseUrl}${path}`,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          en: `${baseUrl}${path}`,
          sr: `${baseUrl}${alternate}`,
        },
      },
    },
    {
      url: `${baseUrl}${alternate}`,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          en: `${baseUrl}${path}`,
          sr: `${baseUrl}${alternate}`,
        },
      },
    },
  ]);
}
