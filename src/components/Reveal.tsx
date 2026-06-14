"use client";

import { useEffect, useRef } from "react";
import styles from "./Reveal.module.css";

/**
 * Scroll-triggered entrance for below-the-fold content. Reuses the global
 * `.reveal` animation but fires when the element scrolls into view.
 *
 * SSR-safe: renders fully visible on the server and with JS disabled (good for
 * SEO and no-JS). Respects prefers-reduced-motion (stays visible, no animation).
 * Toggles classes directly on the node, so it never triggers a re-render.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.classList.add(styles.hidden);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove(styles.hidden);
          el.classList.add("reveal");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ "--d": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
