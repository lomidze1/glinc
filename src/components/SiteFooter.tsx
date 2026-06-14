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
          <a href="#plugins">Plugins</a>
          <a href="#studio">Studio</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </nav>
      </Container>
    </footer>
  );
}
