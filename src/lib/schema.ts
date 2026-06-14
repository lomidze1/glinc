import type { Plugin } from "@/data/plugins";

export const SITE_URL = "https://glinc.io";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Glinc",
  url: SITE_URL,
  description:
    "A studio building tools for designers, starting with Figma plugins.",
  logo: `${SITE_URL}/icon.svg`,
} as const;

export function softwareApplicationSchema(plugin: Plugin) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: plugin.name,
    description: plugin.description,
    applicationCategory: "DesignApplication",
    operatingSystem: "Figma",
    url: `${SITE_URL}/plugins/${plugin.slug}`,
    // Web2Wireframe has a genuine free tier, so a $0 offer is accurate.
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
