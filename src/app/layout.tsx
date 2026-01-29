import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./global.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant", // optional CSS var
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pandeli Restaurant & Bar | Sarangkot, Pokhara",
    template: "%s | Pandeli Restaurant & Bar",
  },
  description:
    "Hilltop dining with stunning views of Fewa Lake and Annapurna range. Authentic Nepali, Indian & Continental cuisine.",
  keywords: [
    "restaurant pokhara",
    "sarangkot dining",
    "best food pokhara",
    "nepali cuisine",
    "hilltop restaurant",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
