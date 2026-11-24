import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { HOTEL_CONFIG } from "@/lib/config";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${HOTEL_CONFIG.brandName} — Luxury Boutique Hotel & Sanctuary`,
  description:
    "Haven House Hotels: An architectural retreat in Victoria Island offering quiet luxury, bespoke suites, fine dining, and restorative wellness. Fictional luxury hospitality demonstration.",
  keywords: [
    "Haven House Hotels",
    "Luxury Hotel Lagos",
    "Boutique Hotel Victoria Island",
    "Premium Suites",
    "Hospitality Website Demonstration",
  ],
  authors: [{ name: "Haven House Hospitality" }],
  openGraph: {
    title: `${HOTEL_CONFIG.brandName} — A Better Way to Stay`,
    description:
      "Experience quiet residential luxury, bespoke suites, and thoughtful hospitality in an intimate coastal enclave.",
    url: "https://havenhousehotels.demo",
    siteName: HOTEL_CONFIG.brandName,
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Haven House Luxury Hotel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${HOTEL_CONFIG.brandName} — A Better Way to Stay`,
    description:
      "A sanctuary of quiet luxury, understated refinement, and bespoke hospitality in Victoria Island.",
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1A2621]">
        {children}
      </body>
    </html>
  );
}
