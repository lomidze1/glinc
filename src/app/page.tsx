import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.brand}>
        GL<span className={styles.inc}>inc</span>
      </header>

      <section className={styles.hero}>
        <p className={styles.kicker}>{"// studio for designers"}</p>
        <h1 className={styles.title}>
          Tools that make design <span className={styles.accent}>faster</span>.
        </h1>
        <p className={styles.lede}>
          Glinc builds tools for designers, starting with Figma plugins. The site
          is being crafted — quality first.
        </p>
      </section>

      <footer className={styles.footer}>
        <span>© 2026 Glinc</span>
        <span>glinc.io — coming soon</span>
      </footer>
    </main>
  );
}
