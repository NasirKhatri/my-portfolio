import "./globals.css";
import type { Metadata } from "next";
import { Inter, Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Inter_Tight({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic", variable: "--font-serif", display: "swap", adjustFontFallback: false });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const title = "Muhammad Nasir · Front-End Developer";
const description =
  "Front-end developer in Karachi building Angular and React interfaces. Formerly ten years in procurement and supply chain.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nasirkhatriportfolio.vercel.app"),
  title,
  description,
  authors: [{ name: "Muhammad Nasir" }],
  keywords: ["Muhammad Nasir", "Front-End Developer", "Angular", "React", "Next.js", "Karachi", "Portfolio"],
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/static/muhammadNasir.jpg", width: 779, height: 779, alt: "Muhammad Nasir" }],
  },
  twitter: { card: "summary", title, description },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f5f1" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e0d" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${serif.variable} ${mono.variable}`}>
      <head>
        {/* Enables reveal animations only when JS is available, before first paint */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
