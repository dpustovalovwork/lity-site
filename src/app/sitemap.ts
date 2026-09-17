import type { MetadataRoute } from "next";

const BASE = "https://lity-mina.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), priority: 1 },
    { url: `${BASE}/cv`, lastModified: new Date(), priority: 0.8 },
  ];
}
