import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://syntora.co";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Syntora | AI Creative Agency",
  description:
    "Syntora creates AI-powered ads, social content, visual campaigns and cinematic property creative for modern brands.",
  keywords: [
    "AI creative agency",
    "AI video ads",
    "paid social creative",
    "short-form content",
    "property video content",
    "Airbnb content",
    "UGC ads",
  ],
  openGraph: {
    title: "Syntora | AI Creative Agency",
    description:
      "AI-powered ads, social content and cinematic property creative for brands that want to stand out.",
    url: siteUrl,
    siteName: "Syntora",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Syntora — AI Creative Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syntora | AI Creative Agency",
    description:
      "AI-powered ads, social content and cinematic property creative for brands that want to stand out.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased bg-bg text-ink">{children}</body>
    </html>
  );
}
