"use client";

import BlogDetailsLayout, { RelatedGuide } from "./blog-details-layout";

const RELATED_GUIDES: RelatedGuide[] = [
  {
    href: "/pollachi-coconut-blog-details",
    image: "/assets/img/co4.jpg",
    alt: "Pollachi Coconut",
    title: "Quality Standards for Semi-Husked Pollachi Coconut Exports",
    date: "Oct 24, 2026",
  },
  {
    href: "/ramanathapuram-kundu-milagai-blog-details",
    image: "/assets/img/rch1.jpg",
    alt: "Kundu Milagai",
    title: "Ramanathapuram Kundu Milagai Export Specs",
    date: "Oct 24, 2026",
  },
  {
    href: "/andhra-chilli-blog-details",
    image: "/assets/img/ch2.jpg",
    alt: "Andhra Red Chilli",
    title: "Andhra Red Chilli: Rich Colour, Heat & Premium Quality",
    date: "Oct 12, 2026",
  },
];

export default function CoconutBlogDetails() {
  return (
    <BlogDetailsLayout
      pageTitle="Semi-Husked Coconut Export Standards | MVD Import and Exporter Blog"
      breadcrumbLabel="Semi-Husked Coconut Export Standards"
      badge="Coconut Exports"
      publishedText="Published November 10, 2026 • By MVD Export Quality Team"
      title="Quality Standards for Semi-Husked Coconut Exports"
      heroImage="/assets/img/co5.jpg"
      heroAlt="Export grade semi-husked coconuts"
      tags={["#SemiHuskedCoconut", "#AgroExportsIndia", "#TuticorinPort"]}
      relatedGuides={RELATED_GUIDES}
    >
      <p>
        India ranks among the world’s top producers of mature coconuts, with Tamil Nadu leading international exports
        of <strong>semi-husked coconuts</strong>. For wholesale buyers across the UAE, Saudi Arabia, Qatar, the UK, and
        the Netherlands, selecting an exporter with rigorous post-harvest grading makes the difference between
        zero-wastage arrivals and costly spoilage.
      </p>

      <h2 className="text-xl sm:text-2xl font-extrabold text-[#0b2c52] pt-3">
        1. Optimal Harvest Maturity &amp; Nut Weight
      </h2>
      <p>
        Export-grade semi-husked coconuts are harvested at 11 to 12 months of maturity. At this stage, the kernel (white
        meat) is thick, rich in natural oil content, and resilient against cracking during long ocean voyages.
      </p>

      {/* Specification Table */}
      <div className="overflow-x-auto my-6 rounded-xl border border-slate-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#0b2c52] text-white">
            <tr>
              <th className="px-4 py-3 font-bold">Parameter</th>
              <th className="px-4 py-3 font-bold">Export Standard Specification</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            <tr>
              <td className="px-4 py-3 font-semibold text-[#0b2c52]">Nut Weight</td>
              <td className="px-4 py-3">500g – 650g per nut (Grade A Bold)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-[#0b2c52]">Circumference</td>
              <td className="px-4 py-3">13 to 15 Inches</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-[#0b2c52]">Packaging</td>
              <td className="px-4 py-3">25 or 30 Nuts per PP Leno Mesh Bag (13–14 kg/bag)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-[#0b2c52]">40ft HC Container Load</td>
              <td className="px-4 py-3">2,000 Bags (~26 to 28 Metric Tons)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-[#0b2c52]">Shelf Life</td>
              <td className="px-4 py-3">45 to 60 Days in Cool, Ventilated Storage</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl sm:text-2xl font-extrabold text-[#0b2c52] pt-2">
        2. Eye-Protection &amp; Moisture Control
      </h2>
      <p>
        During semi-husking at MVD Import and Exporter’s packhouse near Madurai, a protective tuft of coir fiber is
        intentionally retained over the three germination eyes. This cushions the soft eye against mechanical impact and
        prevents bacterial ingress. Every batch is air-cured before bagging to eliminate surface dampness.
      </p>

      <blockquote className="border-l-4 border-[#facc15] bg-[#f4f7fa] p-5 rounded-r-xl italic text-[#0b2c52] font-medium">
        &quot;Consistent sizing, dry fiber husks, and ventilated container stuffing allow semi-husked coconuts from
        Tamil Nadu to travel 20+ days at sea and arrive fresh for retail and industrial processing.&quot;
      </blockquote>

      <h2 className="text-xl sm:text-2xl font-extrabold text-[#0b2c52] pt-2">
        3. Port Dispatch &amp; Certifications
      </h2>
      <p>
        All shipments are dispatched via <strong>V.O. Chidambaranar Port (Tuticorin)</strong> with complete
        Phytosanitary Certification, Fumigation Certificate, Certificate of Origin, and detailed packing lists.
      </p>
    </BlogDetailsLayout>
  );
}
