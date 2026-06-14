import Image from "next/image";
import { Container } from "@/components/Container";
import { Kicker } from "@/components/Kicker";
import { Button } from "@/components/Button";
import { PluginCard } from "@/components/PluginCard";
import { Stats } from "@/components/Stats";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { plugins } from "@/data/plugins";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />

      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <Container>
            <div className={`${styles.heroInner} reveal`}>
              <div className="reveal" style={{ "--d": "60ms" } as React.CSSProperties}>
                <Kicker>studio for designers</Kicker>
              </div>
              <h1
                className={`${styles.title} reveal`}
                style={{ "--d": "140ms" } as React.CSSProperties}
              >
                Tools that make design{" "}
                <span className={styles.accent}>faster</span>.
              </h1>
              <p
                className={`${styles.lede} reveal`}
                style={{ "--d": "240ms" } as React.CSSProperties}
              >
                Glinc is a small studio building the tools we wished existed while
                working in Figma — then shipping them to designers everywhere.
              </p>
              <div
                className={`${styles.ctas} reveal`}
                style={{ "--d": "340ms" } as React.CSSProperties}
              >
                <Button href="#plugins">See our plugins</Button>
                <Button href="#contact" variant="ghost">
                  Start a conversation
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Product showcase — show, don't tell */}
        <section className={styles.showcase}>
          <Container>
            <figure className={styles.frame}>
              <Image
                src={plugins[0].cover}
                alt="Web2Wireframe turning a live website into an editable Figma wireframe"
                width={1920}
                height={1080}
                sizes="(max-width: 1120px) 100vw, 1120px"
                priority
                className={styles.frameImg}
              />
            </figure>
          </Container>
        </section>

        {/* Plugins */}
        <section id="plugins" className={styles.section}>
          <Container>
            <header className={styles.sectionHead}>
              <Kicker>what we build</Kicker>
              <h2 className={styles.sectionTitle}>Plugins, crafted with care.</h2>
              <p className={styles.sectionLede}>
                Small, focused tools that remove friction from the early, messy
                part of design. One is live today — more are on the way.
              </p>
            </header>
            <div className={styles.pluginList}>
              {plugins.map((p) => (
                <PluginCard key={p.slug} plugin={p} />
              ))}
            </div>
          </Container>
        </section>

        {/* Studio */}
        <section id="studio" className={styles.section}>
          <Container>
            <div className={styles.studio}>
              <Kicker>the studio</Kicker>
              <p className={styles.studioBody}>
                Built by designers, for designers. We sweat the details so the
                tools get out of your way — no bloat, no busywork, just a calmer
                way to move from idea to layout.
              </p>
              {/* Honest by design: hidden until real numbers exist. */}
              <Stats items={[]} />
            </div>
          </Container>
        </section>

        {/* Contact */}
        <section id="contact" className={styles.section}>
          <Container>
            <div className={styles.contact}>
              <Kicker>say hello</Kicker>
              <h2 className={styles.contactTitle}>
                Let&rsquo;s build something.
              </h2>
              <p className={styles.sectionLede}>
                Two good reasons to reach out: a business collaboration, or to
                tell us what you&rsquo;d want us to build next — and what slows you
                down today.
              </p>
              <div className={styles.ctas}>
                <Button href="/contact">Get in touch</Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
