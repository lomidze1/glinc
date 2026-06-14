import styles from "./Kicker.module.css";

/** Mono micro-label, e.g. `// studio for designers`. */
export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className={styles.kicker}>
      <span aria-hidden="true" className={styles.slashes}>
        {"//"}
      </span>{" "}
      {children}
    </p>
  );
}
