import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lity-mina.vercel.app"),
  title: {
    default: "Huong Giang (Lity) — English Teacher & Interpreter",
    template: "%s — Huong Giang (Lity)",
  },
  description:
    "English teacher and consecutive interpreter based in Hanoi, Vietnam. Teacher of the Year 2026, interpretation for diplomatic events with the President and Prime Minister of Timor-Leste. Open to ESL roles, interpretation work, and positions in international organizations.",
  openGraph: {
    type: "profile",
    locale: "en_US",
    siteName: "Huong Giang (Lity)",
    title: "Huong Giang (Lity) — English Teacher & Interpreter",
    description:
      "English teacher & interpreter in Hanoi. Teacher of the Year 2026. Interpretation for the President and Prime Minister of Timor-Leste.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
