import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Kicker } from "@/components/Kicker";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to Glinc — for a business collaboration, or to tell us what you’d want us to build next.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <Container>
        <div className={styles.grid}>
          <header className={styles.intro}>
            <Kicker>say hello</Kicker>
            <h1 className={styles.title}>Let’s build something.</h1>
            <p className={styles.lede}>
              Two good reasons to reach out: a business collaboration, or to tell
              us what you’d want us to build next — and what slows you down today.
            </p>
            <p className={styles.direct}>
              Prefer email?{" "}
              <a href={`mailto:${site.email}`} className={styles.mail}>
                {site.email}
              </a>
            </p>
          </header>

          <ContactForm />
        </div>
      </Container>
    </main>
  );
}
