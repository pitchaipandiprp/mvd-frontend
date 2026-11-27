import type { Metadata } from "next";
import HomePage from "@/components/pages/web/home";
import { createPageMetadata } from "@/utils/metadata";

export const metadata: Metadata = createPageMetadata({
  title:
    "MVD Import and Exporter | Fresh Coconuts, Vegetables & Agro Exports from India",
  description:
    "MVD Import and Exporter is a trusted Indian exporter of fresh coconuts, semi-husked coconuts, Kundu Milagai, Andhra red chillies, and farm-fresh vegetables to global markets.",
  url: "/",
});

export default function WebHome() {
  return <HomePage />;
}
