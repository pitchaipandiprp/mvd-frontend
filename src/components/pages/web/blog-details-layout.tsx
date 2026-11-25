"use client";

import { useEffect } from "react";
import Link from "next/link";

export interface RelatedGuide {
  href: string;
  image: string;
  alt: string;
  title: string;
  date: string;
}

interface BlogDetailsLayoutProps {
  pageTitle: string;
  breadcrumbLabel: string;
  badge: string;
  publishedText: string;
  title: string;
  heroImage: string;
  heroAlt: string;
  tags: string[];
  relatedGuides: RelatedGuide[];
  children: React.ReactNode;
}

export default function BlogDetailsLayout({
  pageTitle,
  breadcrumbLabel,
  badge,
  publishedText,
  title,
  heroImage,
  heroAlt,
  tags,
  relatedGuides,
  children,
}: BlogDetailsLayoutProps) {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <div className="py-12 sm:py-16 bg-[#f4f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs font-semibold text-slate-500 mb-6 flex flex-wrap items-center gap-2">
          <Link href="/" className="hover:text-[#0b2c52]">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#0b2c52]">
            Blog
          </Link>
          <span>/</span>
          <span className="text-[#0b2c52]">{breadcrumbLabel}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Article Column */}
          <article className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100">
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
              <span className="bg-[#facc15] text-[#071e38] px-3 py-1 rounded-full">{badge}</span>
              <span className="text-slate-500">{publishedText}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0b2c52] mt-4 leading-tight">{title}</h1>

            <div className="mt-6 rounded-xl overflow-hidden">
              <img src={heroImage} alt={heroAlt} className="w-full h-72 sm:h-96 object-cover" />
            </div>

            <div className="mt-8 space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">{children}</div>

            {/* Article Footer Tags & Share */}
            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                {tags.map((tag) => (
                  <span key={tag} className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/blog" className="text-sm font-bold text-[#0b2c52] hover:text-amber-600">
                ← Back to All Articles
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-7">
            {/* Request Quote Card */}
            <div className="bg-[#0b2c52] text-white p-7 rounded-2xl shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider text-[#facc15]">Direct Exporter</span>
              <h3 className="text-xl font-extrabold mt-1">Need Container Pricing for Coconuts or Vegetables?</h3>
              <p className="text-xs text-slate-200 mt-2 leading-relaxed">
                Get current FOB Tuticorin or CIF destination port rates tailored to your required tonnage.
              </p>
              <Link
                href="/get-a-quote?product=Semi-Husked+Coconut"
                className="btn-gold w-full text-center block py-3 rounded-lg text-sm font-bold mt-5"
              >
                Get a Bulk Quote →
              </Link>
            </div>

            {/* Related Articles */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-base font-extrabold text-[#0b2c52] pb-3 border-b border-slate-100">
                Related Export Guides
              </h3>
              <div className="mt-4 space-y-4">
                {relatedGuides.map((guide) => (
                  <Link key={guide.href + guide.title} href={guide.href} className="flex items-start gap-3.5 group">
                    <img src={guide.image} alt={guide.alt} className="w-16 h-16 rounded-lg object-cover shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0b2c52] group-hover:text-amber-600 transition leading-snug">
                        {guide.title}
                      </h4>
                      <span className="text-[11px] text-slate-400">{guide.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
