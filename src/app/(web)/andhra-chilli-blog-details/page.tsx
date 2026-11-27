import type { Metadata } from "next";
import AndhraChilliBlogDetails from "@/components/pages/web/andhra-chilli-blog-details";
import { createPageMetadata } from "@/utils/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Andhra Red Chilli Exports | MVD Import and Exporter Blog",
  description:
    "Explore the rich colour, fiery heat, and export quality standards of Andhra Pradesh Guntur red chillies supplied by MVD Import and Exporter.",
  url: "/andhra-chilli-blog-details/",
  type: "article",
  image: {
    url: "/assets/img/ch2.jpg",
    width: 1200,
    height: 1680,
    alt: "Premium Andhra Pradesh Guntur red chillies for export",
  },
});

export default function WebAndhraChilliBlogDetailsPage() {
  return <AndhraChilliBlogDetails />;
}
