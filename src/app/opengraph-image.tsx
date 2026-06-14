import { ImageResponse } from "next/og";

export const alt = "Glinc — Tools for designers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand "Studio Dark" social card, generated at build time. Applies to every
// route that doesn't define its own opengraph-image.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0e3a3f",
          color: "#f3f0e8",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontWeight: 800 }}>
          <span>GL</span>
          <span style={{ color: "#e94e1b" }}>inc</span>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 84,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -3,
            maxWidth: 920,
          }}
        >
          <span>Tools that make design&nbsp;</span>
          <span style={{ color: "#e94e1b" }}>faster.</span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#9ab6ae",
            fontFamily: "monospace",
          }}
        >
          {"// studio for designers"}
        </div>
      </div>
    ),
    { ...size },
  );
}
