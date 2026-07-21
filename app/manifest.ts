import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dalibor Trkulja | Unique Handmade Knives and Axes",
    short_name: "Dalibor Trkulja",
    description: "Handmade Damascus knives and axes forged by Dalibor Trkulja.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/assets/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
