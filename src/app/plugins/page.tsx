import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Kicker } from "@/components/Kicker";
import { PluginCard } from "@/components/PluginCard";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { plugins } from "@/data/plugins";
import styles from "./plugins.module.css";

export const metadata: Metadata = {
  title: "Plugins",
  description:
    "Tools by Glinc for designers — small, focused Figma plugins that remove friction from the early part of design.",
  alternates: { canonical: "/plugins" },
};

export default function PluginsPage() {
  return (
    <main className={styles.page}>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Plugins", path: "/plugins" },
        ])}
      />
      <Container>
        <header className={styles.head}>
          <Kicker>what we build</Kicker>
          <h1 className={styles.title}>Plugins, crafted with care.</h1>
          <p className={styles.lede}>
            Small, focused tools that remove friction from the early, messy part
            of design. One is live today — more are on the way.
          </p>
        </header>
        <div className={styles.list}>
          {plugins.map((p) => (
            <PluginCard key={p.slug} plugin={p} />
          ))}
        </div>
      </Container>
    </main>
  );
}
