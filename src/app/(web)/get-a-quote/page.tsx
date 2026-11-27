import type { Metadata } from "next";
import { Suspense } from "react";
import GetAQuotePage from "@/components/pages/web/get-a-quote";
import { createPageMetadata } from "@/utils/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Get a Quote | MVD Import and Exporter - Bulk Export Inquiry",
  description:
    "Request a custom FOB, CIF, or CFR export quotation for fresh coconuts, Kundu Milagai, Andhra red chillies, and vegetables from MVD Import and Exporter.",
  url: "/get-a-quote/",
});

export default function WebGetAQuotePage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <GetAQuotePage />
    </Suspense>
  );
}
