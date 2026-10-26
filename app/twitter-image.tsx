import { ImageResponse } from "next/og";

export const alt = "Roberto Gallardo – Full Stack .NET Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social preview image generated at build time (Open Graph and Twitter cards).
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b0b0f 0%, #1e1b4b 55%, #0c4a6e 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 30, color: "#a78bfa", marginBottom: 16 }}>robertogallardo.dev</div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>Roberto Gallardo</div>
        <div style={{ fontSize: 40, marginTop: 20, color: "#cbd5e1" }}>
          Full Stack .NET Developer · Software Architect
        </div>
        <div style={{ fontSize: 30, marginTop: 36, color: "#94a3b8" }}>
          .NET Framework 2.0 → .NET 10 · Vue · React · Next.js · AI tooling
        </div>
      </div>
    ),
    size
  );
}
