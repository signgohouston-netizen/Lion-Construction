import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — Houston general contractor`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: 72,
          background: "linear-gradient(135deg, #0a0a0a 0%, #1f1f1f 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 64, height: 64, background: "#c9962b", borderRadius: 12 }} />
          <div style={{ display: "flex", gap: 12, fontSize: 40, fontWeight: 700, letterSpacing: 4 }}>
            <span>LION</span>
            <span style={{ color: "#c9962b" }}>CONSTRUCTION</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, maxWidth: 1000 }}>
            Houston&apos;s trusted general contractor
          </div>
          <div style={{ fontSize: 32, color: "#c9962b" }}>Remodeling · Roofing · Additions · Commercial</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "rgba(255,255,255,0.7)" }}>
          <span>{site.phoneDisplay}</span>
          <span>lionconstructiontx.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
