import type { Metadata } from "next";
import RamanathapuramKunduMilagaiBlogDetails from "@/components/pages/web/ramanathapuram-kundu-milagai-blog-details";
import { createPageMetadata } from "@/utils/metadata";

export const metadata: Metadata = createPageMetadata({
  title:
    "Ramanathapuram Kundu Milagai Exports | MVD Import and Exporter Blog",
  description:
    "Learn about Ramanathapuram Kundu Milagai (round red chillies), ASTA colour, pungency specifications, and export packaging from Tamil Nadu.",
  url: "/ramanathapuram-kundu-milagai-blog-details/",
  type: "article",
  image: {
    url: "/assets/img/round-chilli-1.jpg",
    width: 736,
    height: 1104,
    alt: "Premium Ramanathapuram Kundu Milagai round red chillies for export",
  },
});

export default function WebRamanathapuramKunduMilagaiBlogDetailsPage() {
  return <RamanathapuramKunduMilagaiBlogDetails />;
}
