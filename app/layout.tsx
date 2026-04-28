import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CHINS NORTH — Clean Air Solutions | Greater Houston, TX",
  description: "Professional duct cleaning, mold remediation & HVAC upkeep for Greater Houston homes. Clean air is an investment, not a luxury.",
};

export const viewport = { width: "device-width", initialScale: 1, maximumScale: 1 };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.className} bg-[#F8F9FA] text-[#1A1A1A]`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <BookingCTA />
          <Footer />
        </div>
      </body>
    </html>
  );
}