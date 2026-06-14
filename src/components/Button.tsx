import styles from "./Button.module.css";

type Variant = "primary" | "ghost";

export function Button({
  href,
  children,
  variant = "primary",
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
}) {
  const rel = external ? "noopener noreferrer" : undefined;
  const target = external ? "_blank" : undefined;
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${styles.btn} ${styles[variant]}`}
    >
      {children}
      {variant === "primary" && (
        <span aria-hidden="true" className={styles.arrow}>
          →
        </span>
      )}
    </a>
  );
}
