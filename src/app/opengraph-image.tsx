import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
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
          background: "linear-gradient(135deg, #3d3229, #1c1917)",
          color: "#f5f0e8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 32, opacity: 0.85 }}>Elijah Portfolio</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            maxWidth: 900,
          }}
        >
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.08 }}>
            Full-stack developer focused on clean, reliable products.
          </div>
          <div style={{ fontSize: 30, opacity: 0.9 }}>
            Next.js • TypeScript • Product-minded engineering
          </div>
        </div>
      </div>
    ),
    size,
  );
}
