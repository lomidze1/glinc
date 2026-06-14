import { Badge } from "./Badge";
import type { Plugin } from "@/data/plugins";
import styles from "./PluginCard.module.css";

export function PluginCard({ plugin }: { plugin: Plugin }) {
  return (
    <a
      href={plugin.href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <span className={styles.iconWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={plugin.icon} alt="" width={32} height={32} aria-hidden="true" />
      </span>

      <span className={styles.body}>
        <span className={styles.head}>
          <span className={styles.name}>{plugin.name}</span>
          {plugin.status === "live" && (
            <span className={styles.live}>Live</span>
          )}
        </span>
        <span className={styles.desc}>{plugin.description}</span>
        <span className={styles.tags}>
          {plugin.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </span>
      </span>

      <span aria-hidden="true" className={styles.arrow}>
        →
      </span>
    </a>
  );
}
