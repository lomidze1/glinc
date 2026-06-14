import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo } from "next/font/google";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
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

const SITE_URL = "https://glinc.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Glinc — Tools for designers",
    template: "%s — Glinc",
  },
  description:
    "Glinc is a studio building tools for designers, starting with Figma plugins. Crafted for speed, clarity, and a calmer design workflow.",
  applicationName: "Glinc",
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
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
