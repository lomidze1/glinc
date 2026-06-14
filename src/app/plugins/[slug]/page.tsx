import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Kicker } from "@/components/Kicker";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { JsonLd } from "@/components/JsonLd";
import {
  softwareApplicationSchema,
  breadcrumbSchema,
  SITE_URL,
} from "@/lib/schema";
import { plugins, getPlugin } from "@/data/plugins";
import styles from "./detail.module.css";

type Params = { slug: string };

export function generateStaticParams() {
  return plugins.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const plugin = getPlugin(slug);
  if (!plugin) return {};
  return {
    title: plugin.name,
    description: plugin.description,
    alternates: { canonical: `/plugins/${plugin.slug}` },
    openGraph: {
      title: `${plugin.name} — Glinc`,
      description: plugin.description,
      images: [`${SITE_URL}${plugin.cover}`],
    },
  };
}

export default async function PluginDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const plugin = getPlugin(slug);
  if (!plugin) notFound();

  return (
    <main className={styles.page}>
      <JsonLd data={softwareApplicationSchema(plugin)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Plugins", path: "/plugins" },
          { name: plugin.name, path: `/plugins/${plugin.slug}` },
        ])}
      />

      <Container>
        <Link
          href="/plugins"
          className={styles.back}
          aria-label="Back to all plugins"
        >
          <span aria-hidden="true">←</span> All plugins
        </Link>

        <header className={styles.header}>
          <span className={styles.iconWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={plugin.icon} alt="" width={40} height={40} aria-hidden="true" />
          </span>
          <Kicker>{plugin.tagline}</Kicker>
          <h1 className={styles.title}>{plugin.name}</h1>
          <p className={styles.lede}>{plugin.longDescription}</p>
          <div className={styles.tags}>
            {plugin.status === "live" && <span className={styles.live}>Live</span>}
            {plugin.tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          <div className={styles.ctas}>
            {plugin.links.map((l) => (
              <Button
                key={l.href}
                href={l.href}
                external
                variant={l.primary ? "primary" : "ghost"}
              >
                {l.label}
              </Button>
            ))}
          </div>
        </header>

        <figure className={styles.frame}>
          <Image
            src={plugin.cover}
            alt={plugin.coverAlt}
            width={1920}
            height={1080}
            sizes="(max-width: 1120px) 100vw, 1120px"
            priority
            className={styles.frameImg}
          />
        </figure>

        <section className={styles.methods}>
          <Kicker>ways to import</Kicker>
          <h2 className={styles.methodsTitle}>Every input, one clean result.</h2>
          <ul className={styles.methodList}>
            {plugin.importMethods.map((m) => (
              <li key={m.name} className={styles.method}>
                <span className={styles.methodName}>{m.name}</span>
                <span className={styles.methodDesc}>{m.description}</span>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </main>
  );
}
