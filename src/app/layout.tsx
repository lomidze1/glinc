import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo } from "next/font/google";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/schema";
import "./globals.css";

// Body + UI
const sans = Geist({ variable: "--font-sans-src", subsets: ["latin"] });
// Micro-labels (// LIKE_THIS)
const mono = Geist_Mono({ variable: "--font-mono-src", subsets: ["latin"] });
// Display headlines — a heavy grotesque, matching the brand banners
const display = Archivo({
  variable: "--font-display-src",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Glinc - Tools for designers",
    template: "%s — Glinc",
  },
  description:
    "Glinc is a studio building tools for designers, starting with Figma plugins. Crafted for speed, clarity, and a calmer design workflow.",
  applicationName: "Glinc",
  // Served from /public so the URLs stay stable across deploys — Google only
  // indexes a favicon whose URL doesn't move, and the app-router icon
  // convention appends a content hash that changes with the artwork.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Glinc",
    title: "Glinc — Tools for designers",
    description:
      "A studio building tools for designers, starting with Figma plugins.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glinc — Tools for designers",
    description:
      "A studio building tools for designers, starting with Figma plugins.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${display.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SiteNav />
        <div id="main-content">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
