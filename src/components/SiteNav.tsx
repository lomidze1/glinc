import Link from "next/link";
import { Container } from "./Container";
import styles from "./SiteNav.module.css";

export function SiteNav() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Glinc home">
          GL<span className={styles.inc}>inc</span>
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          <Link href="/plugins">Plugins</Link>
          <Link href="/#studio">Studio</Link>
          <Link href="/contact" className={styles.cta}>
            Contact
          </Link>
        </nav>
      </Container>
    </header>
  );
}
