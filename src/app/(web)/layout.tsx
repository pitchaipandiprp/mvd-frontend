"use client";

import { Plus_Jakarta_Sans, Inter, Caveat } from "next/font/google";
import "@/assets/css/web.css";
import WebHeader from "@/components/layout/web/web-header";
import WebFooter from "@/components/layout/web/web-footer";
import BackToTop from "@/components/layout/web/back-to-top";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
});

export default function WebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useScrollReveal();

  return (
    <div
      className={`web-root min-h-screen w-full bg-white selection:bg-[#facc15] selection:text-[#071e38] ${plusJakarta.variable} ${inter.variable} ${caveat.variable}`}
    >
      <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
        <WebHeader />

        <main className="flex-1 w-full">{children}</main>

        <WebFooter />
        <BackToTop />
      </div>
    </div>
  );
}
