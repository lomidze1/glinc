import { Container } from "@/components/Container";
import { Kicker } from "@/components/Kicker";
import { Button } from "@/components/Button";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <Container>
        <div className={styles.inner}>
          <Kicker>error 404</Kicker>
          <h1 className={styles.title}>This page wandered off.</h1>
          <p className={styles.lede}>
            The link may be broken, or the page may have moved. Let&rsquo;s get
            you back on track.
          </p>
          <div className={styles.ctas}>
            <Button href="/">Back home</Button>
            <Button href="/plugins" variant="ghost">
              See plugins
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
