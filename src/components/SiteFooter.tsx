import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/data/site";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.brand}>
            GL<span className={styles.inc}>inc</span>
          </span>
          <span className={styles.copy}>
            © {new Date().getFullYear()} Glinc — tools for designers
          </span>
        </div>
        <nav className={styles.links} aria-label="Footer">
          <Link href="/plugins">Plugins</Link>
          <Link href="/contact">Contact</Link>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </nav>
      </Container>
    </footer>
  );
}
