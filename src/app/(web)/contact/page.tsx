import type { Metadata } from "next";
import ContactPage from "@/components/pages/web/contact";
import { createPageMetadata } from "@/utils/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us | MVD Import and Exporter - Thiruppuvanam, Madurai",
  description:
    "Contact MVD Import and Exporter in Thiruppuvanam, Madurai for international inquiries on coconuts, Kundu Milagai, red chillies, and fresh vegetables.",
  url: "/contact/",
});

export default function WebContactPage() {
  return <ContactPage />;
}
