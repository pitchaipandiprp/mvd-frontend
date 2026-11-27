import type { Metadata } from "next";
import CoconutBlogDetails from "@/components/pages/web/coconut-blog-details";
import { createPageMetadata } from "@/utils/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Semi-Husked Coconut Export Standards | MVD Import and Exporter Blog",
  description:
    "Discover how Tamil Nadu semi-husked coconuts are harvested at optimal maturity, graded by weight, and packed for global export.",
  url: "/coconut-blog-details/",
  type: "article",
  image: {
    url: "/assets/img/co5.jpg",
    width: 1199,
    height: 799,
    alt: "Export grade semi-husked coconuts",
  },
});

export default function WebCoconutBlogDetailsPage() {
  return <CoconutBlogDetails />;
}
