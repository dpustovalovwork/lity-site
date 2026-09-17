import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const alt = "Huong Giang (Lity) — English Teacher & Interpreter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default function OgImage() {
  const fraunces = readFileSync(
    join(process.cwd(), "src/assets/fonts/fraunces-900-italic.ttf")
  );
  const manrope = readFileSync(
    join(process.cwd(), "src/assets/fonts/manrope-600.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1a1712",
          color: "#faf6ef",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          fontFamily: "Manrope",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: "#1f6f5c",
            }}
          />
          <div style={{ fontSize: 30, letterSpacing: 6, color: "#faf6efaa" }}>
            HANOI, VIETNAM
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              fontFamily: "Fraunces",
              fontSize: 116,
              fontStyle: "italic",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: -2,
            }}
          >
            Huong Giang
          </div>
          <div
            style={{
              fontFamily: "Fraunces",
              fontSize: 64,
              fontStyle: "italic",
              fontWeight: 900,
              color: "#c73e1d",
              lineHeight: 1,
            }}
          >
            “Lity”
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ fontSize: 34, color: "#c99a3c" }}>
            English Teacher · Interpreter
          </div>
          <div style={{ fontSize: 26, color: "#faf6ef88" }}>
            Teacher of the Year 2026
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "italic", weight: 900 },
        { name: "Manrope", data: manrope, style: "normal", weight: 600 },
      ],
    }
  );
}
