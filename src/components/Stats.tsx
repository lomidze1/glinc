import styles from "./Stats.module.css";

export type Stat = { value: string; label: string };

/**
 * Credibility numbers (installs, ratings…). Honest by design: any stat with an
 * empty value is dropped, and the whole block disappears when there's nothing
 * real to show — so we never ship placeholder or fabricated metrics. Wire it to
 * live data later and it switches on automatically.
 */
export function Stats({ items }: { items: Stat[] }) {
  const visible = items.filter((s) => s.value.trim() !== "");
  if (visible.length === 0) return null;

  return (
    <dl className={styles.stats}>
      {visible.map((s) => (
        <div key={s.label} className={styles.item}>
          <dt className={styles.value}>{s.value}</dt>
          <dd className={styles.label}>{s.label}</dd>
        </div>
      ))}
    </dl>
  );
}
