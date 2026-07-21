import type { MetadataRoute } from "next";
import { siteUrl as baseUrl } from "./siteConfig";

export const dynamic = "force-static";

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
  const lastModified = new Date();

  return routes.flatMap(({ path, alternate, changeFrequency, priority }) => [
    {
      url: `${baseUrl}${path}`,
      lastModified,
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
      lastModified,
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
