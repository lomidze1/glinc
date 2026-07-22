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
  /** Kicker + heading for the methods section; defaults keep Web2Wireframe's copy. */
  methodsKicker?: string;
  methodsTitle?: string;
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
  {
    slug: "legibly",
    name: "Legibly",
    tagline: "Accessibility, fixed. Not just flagged.",
    description:
      "Scan Figma designs against WCAG 2.2 AA and fix violations in one click, with your own design tokens.",
    longDescription:
      "Legibly is an accessibility correctness layer for Figma. It scans your selection against WCAG 2.2 AA with zero false positives, fixes violations in one click using your own variables and styles, and re-verifies every fix before it lands. Ambiguous cases are honestly flagged for review, never guessed.",
    icon: "/plugins/legibly.svg",
    cover: "/plugins/legibly-cover.png",
    coverAlt:
      "Legibly fixing a failing contrast ratio to a passing one with an on-system design token",
    tags: ["Figma Plugin", "Accessibility"],
    status: "coming-soon",
    methodsKicker: "what it checks",
    methodsTitle: "Five checks, three honest verdicts.",
    importMethods: [
      {
        name: "Text contrast",
        description:
          "SC 1.4.3 with real effective-background resolution, gradients included.",
      },
      {
        name: "Non-text contrast",
        description: "SC 1.4.11 for icons and borders on interactive controls.",
      },
      {
        name: "Target size",
        description: "SC 2.5.8, a 24 by 24 minimum with the spacing exception.",
      },
      {
        name: "Text spacing",
        description: "SC 1.4.12 line-height floors for readable text.",
      },
      {
        name: "Alt text",
        description:
          "SC 1.1.1 presence check, plus optional AI drafts with your own key.",
      },
    ],
    links: [
      { label: "Visit Legibly", href: "https://legibly.app", primary: true },
    ],
  },
];

export function getPlugin(slug: string): Plugin | undefined {
  return plugins.find((p) => p.slug === slug);
}
