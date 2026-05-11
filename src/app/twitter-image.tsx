import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(160deg, #0a0a0a, #1f2937)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 30, opacity: 0.85 }}>Elijah Portfolio</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 900 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.08 }}>
            Building thoughtful web products that scale.
          </div>
          <div style={{ fontSize: 28, opacity: 0.9 }}>
            Full-stack development • UX craft • Maintainable architecture
          </div>
        </div>
      </div>
    ),
    size,
  );
}
