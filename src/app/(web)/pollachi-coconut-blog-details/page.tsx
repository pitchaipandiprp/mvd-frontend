import type { Metadata } from "next";
import PollachiCoconutBlogDetails from "@/components/pages/web/pollachi-coconut-blog-details";
import { createPageMetadata } from "@/utils/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Pollachi Coconut Exports | MVD Import and Exporter Blog",
  description:
    "Explore how premium Pollachi coconuts from Tamil Nadu are sourced, graded, and packed by MVD Import and Exporter for international buyers.",
  url: "/pollachi-coconut-blog-details/",
  type: "article",
  image: {
    url: "/assets/img/co7.jpg",
    width: 845,
    height: 502,
    alt: "Premium quality Pollachi coconuts for international export",
  },
});

export default function WebPollachiCoconutBlogDetailsPage() {
  return <PollachiCoconutBlogDetails />;
}
