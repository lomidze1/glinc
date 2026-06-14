import type { MetadataRoute } from "next";
import { plugins } from "@/data/plugins";

const SITE_URL = "https://glinc.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/plugins`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const pluginRoutes: MetadataRoute.Sitemap = plugins.map((p) => ({
    url: `${SITE_URL}/plugins/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...pluginRoutes];
}
