import type { Metadata } from "next";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://mvdglobaltrade.com";

export const SITE_URL = rawSiteUrl.replace(/\/+$/, "");
export const SITE_NAME = "MVD Import and Exporter";

export const DEFAULT_TITLE = "MVD Import & Export";
export const DEFAULT_DESCRIPTION = "MVD Import & Export - Your trusted partner for quality agricultural products and international export services.";

export interface OgImageConfig {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

export const DEFAULT_OG_IMAGE: OgImageConfig = {
  url: "/assets/img/logo.png",
  width: 706,
  height: 725,
  alt: "MVD Import and Exporter",
};

interface CreatePageMetadataOptions {
  title: string;
  description: string;
  url: string;
  image?: OgImageConfig;
  type?: "website" | "article";
  publishedTime?: string;
}

/**
 * Build consistent Next.js Metadata including Open Graph tags (`og:title`,
 * `og:description`, `og:image`, `og:url`) for a static or dynamic route.
 */
export function createPageMetadata({
  title,
  description,
  url,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  publishedTime,
}: CreatePageMetadataOptions): Metadata {
  return {
    title: {
      absolute: title,
    },
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [image],
    },
  };
}
