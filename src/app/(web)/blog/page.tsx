import type { Metadata } from "next";
import BlogPage from "@/components/pages/web/blog";
import { createPageMetadata } from "@/utils/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Export Blog & Trade Insights | MVD Import and Exporter",
  description:
    "Explore export guides, grading specifications, and trade insights on Pollachi coconuts, semi-husked coconuts, Kundu Milagai, and Andhra red chillies from MVD Import and Exporter.",
  url: "/blog/",
});

export default function WebBlogPage() {
  return <BlogPage />;
}
