import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { Poppins } from "next/font/google";
import "./globals.css";
import "../assets/css/custom.css";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
} from "@/utils/metadata";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | MVD Import & Export",
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
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
          color="var(--gold-primary)"
          height={2}
          showSpinner={false}
        />
        {children}
      </body>
    </html>
  );
}
