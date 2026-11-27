import type { Metadata } from "next";
import AboutUs from "@/components/pages/web/aboutus";
import { createPageMetadata } from "@/utils/metadata";

export const metadata: Metadata = createPageMetadata({
  title:
    "About Us | MVD Import and Exporter - Agricultural & Coconut Exporters",
  description:
    "Headquartered in Thiruppuvanam, Madurai, MVD Import and Exporter delivers farm-fresh coconuts, Kundu Milagai, and export-grade vegetables with uncompromising integrity.",
  url: "/about-us/",
  image: {
    url: "/assets/img/about-export-commitment.jpg",
    width: 1200,
    height: 896,
    alt: "Freshly harvested coconuts and chillies prepared for export by MVD Import and Exporter",
  },
});

export default function AboutUsPage() {
  return <AboutUs />;
}
