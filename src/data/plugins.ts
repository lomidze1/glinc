export type Plugin = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string; // path under /public
  cover: string;
  tags: string[];
  href: string; // outbound product/install link
  status: "live" | "coming-soon";
};

export const plugins: Plugin[] = [
  {
    slug: "web2wireframe",
    name: "Web2Wireframe",
    tagline: "Don’t rebuild. Wireframe it.",
    description:
      "Turn any live website, screenshot, or raw HTML into a clean, fully editable Figma wireframe — across every viewport.",
    icon: "/plugins/web2wireframe.svg",
    cover: "/plugins/web2wireframe-cover.png",
    tags: ["Figma Plugin", "Chrome Extension"],
    href: "https://web2wireframe.design",
    status: "live",
  },
];
