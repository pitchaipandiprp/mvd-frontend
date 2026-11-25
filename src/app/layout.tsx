import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { Poppins } from "next/font/google";
import "./globals.css";
import "../assets/css/custom.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "MVD Import & Export",
    template: "%s | MVD Import & Export",
  },
  description:
    "MVD Import & Export - Your trusted partner for quality agricultural products and international export services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${poppins.variable}`}>
      <body className="min-h-screen antialiased">
        <NextTopLoader
          color="var(--color-primary)"
          height={2}
          showSpinner={false}
        />
        {children}
      </body>
    </html>
  );
}
