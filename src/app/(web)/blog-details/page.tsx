import type { Metadata } from "next";
import BlogDetails from "@/components/pages/web/blog-details";
import { createPageMetadata } from "@/utils/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Semi-Husked Coconut Export Standards | MVD Import and Exporter Blog",
  description:
    "Quality standards, harvest maturity, nut weight grading, and packaging specifications for semi-husked coconut exports to the Middle East and Europe.",
  url: "/blog-details/",
  type: "article",
  image: {
    url: "/assets/img/co5.jpg",
    width: 1199,
    height: 799,
    alt: "Export grade semi-husked coconuts",
  },
});

export default function WebBlogDetailsPage() {
  return <BlogDetails />;
}
