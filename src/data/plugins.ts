export type ImportMethod = { name: string; description: string };
export type PluginLink = { label: string; href: string; primary?: boolean };

export type Plugin = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string; // path under /public
  cover: string;
  coverAlt: string;
  tags: string[];
  status: "live" | "coming-soon";
  importMethods: ImportMethod[];
  links: PluginLink[];
};

export const plugins: Plugin[] = [
  {
    slug: "web2wireframe",
    name: "Web2Wireframe",
    tagline: "Don’t rebuild. Wireframe it.",
    description:
      "Turn any live website, screenshot, or raw HTML into a clean, fully editable Figma wireframe — across every viewport.",
    longDescription:
      "Web2Wireframe removes the friction from the early, messy part of design. Point it at a real website and it captures the layout, structure, fonts, and styles, then rebuilds them as a clean, fully editable Figma wireframe — so you can start from something real instead of a blank canvas.",
    icon: "/plugins/web2wireframe.svg",
    cover: "/plugins/web2wireframe-cover.png",
    coverAlt:
      "Web2Wireframe turning a live website into an editable Figma wireframe",
    tags: ["Figma Plugin", "Chrome Extension"],
    status: "live",
    importMethods: [
      {
        name: "Web import",
        description: "Convert any live website from its URL.",
      },
      {
        name: "Screenshot import",
        description: "Drop in a screenshot — no live access needed.",
      },
      {
        name: "HTML import",
        description: "Paste raw HTML for authenticated or offline pages.",
      },
      {
        name: "Area capture",
        description: "Grab a single section instead of the whole page.",
      },
      {
        name: "Browser extension",
        description: "High-fidelity capture straight from your browser.",
      },
    ],
    links: [
      {
        label: "Visit Web2Wireframe",
        href: "https://web2wireframe.design",
        primary: true,
      },
      { label: "Read the docs", href: "https://web2wireframe.design/docs" },
    ],
  },
];

export function getPlugin(slug: string): Plugin | undefined {
  return plugins.find((p) => p.slug === slug);
}
