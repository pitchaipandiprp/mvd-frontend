"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const BLOG_POSTS = [
  {
    id: "semi-husked-pollachi",
    category: "coconut",
    categoryLabel: "Coconut Exports",
    title: "Quality Standards for Semi-Husked Pollachi Coconut Exports",
    excerpt:
      "Discover how premium Pollachi coconuts are carefully sourced, selected, graded, and packed to meet international export quality standards.",
    image: "/assets/img/co5.jpg",
    alt: "Premium Semi-Husked Pollachi Coconut Exports",
    date: "Oct 24, 2026",
    href: "/coconut-blog-details",
  },
  {
    id: "pollachi-global",
    category: "coconut",
    categoryLabel: "Pollachi Coconut Exports",
    title: "Premium Pollachi Coconuts for Global Export Markets",
    excerpt:
      "Explore the rich coconut-growing region of Pollachi, Tamil Nadu, and discover how quality coconuts are carefully selected, graded, and packed for international buyers.",
    image: "/assets/img/co7.jpg",
    alt: "Premium Pollachi Coconut Exports from Tamil Nadu",
    date: "Oct 24, 2026",
    href: "/pollachi-coconut-blog-details",
  },
  {
    id: "kundu-milagai",
    category: "spices",
    categoryLabel: "Spices & Chillies",
    title: "Ramanathapuram Kundu Milagai: ASTA Color & Pungency Specs",
    excerpt:
      "Why round chillies from Southern Tamil Nadu are prized by spice processors and culinary importers worldwide.",
    image: "/assets/img/rch2.jpg",
    alt: "Kundu Milagai Export",
    date: "Oct 24, 2026",
    href: "/ramanathapuram-kundu-milagai-blog-details",
  },
  {
    id: "andhra-red-chilli",
    category: "spices",
    categoryLabel: "Spices & Chillies",
    title: "Andhra Red Chilli: Rich Colour, Heat & Premium Quality",
    excerpt:
      "Explore the distinctive flavour, vibrant red colour and fiery pungency of Andhra Pradesh chillies, a popular choice for spice manufacturers, food processors and international buyers.",
    image: "/assets/img/ch3.jpg",
    alt: "Premium Andhra Pradesh Red Chilli Export",
    date: "Nov 23, 2026",
    href: "/andhra-chilli-blog-details",
  },
];

const CATEGORIES = [
  { key: "all", label: "All Posts" },
  { key: "coconut", label: "Coconut Exports" },
  { key: "spices", label: "Spices & Chillies" },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    document.title = "Export Blog & Trade Insights | MVD Import and Exporter";
  }, []);

  const showFeatured = selectedCategory === "all" || selectedCategory === "coconut";
  const filteredPosts =
    selectedCategory === "all"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  return (
    <div className="bg-[#f4f7fa]">
      {/* PAGE HERO */}
      <section className="relative bg-[#071e38] py-14 sm:py-16 overflow-hidden">
        <div className="subpage-hero-overlay absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-xs font-bold uppercase tracking-widest text-[#facc15] mb-2">
            Home / Trade Journal &amp; Blog
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Global Agro Export Insights</h1>
          <p className="mt-3 text-slate-200 max-w-2xl text-sm sm:text-base">
            Market intelligence, packaging standards, and shipping guides for international buyers of Indian coconuts,
            chillies, and fresh vegetables.
          </p>
        </div>
      </section>

      {/* FILTER & BLOG GRID */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          {/* <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`blog-filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition ${
                      isActive
                        ? "bg-[#0b2c52] text-white shadow-md"
                        : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div> */}

          {/* Featured Article */}
          {showFeatured && (
            <article className="blog-card bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 mb-10 grid grid-cols-1 lg:grid-cols-12 reveal">
              <div className="lg:col-span-6 h-64 lg:h-[400px] overflow-hidden rounded-xl">
                <img
                  src="/assets/img/co8.jpg"
                  alt="Semi Husked Coconuts Export Container Guide"
                  className="w-full h-full object-contain lg:object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs font-bold">
                  <span className="bg-[#facc15] text-[#071e38] px-3 py-1 rounded-full">Featured Guide</span>
                  <span className="text-slate-500">November 2026 • 6 Min Read</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b2c52] mt-4 leading-snug">
                  <Link href="/coconut-blog-details" className="hover:text-amber-600 transition">
                    Complete Importer&apos;s Guide to Semi-Husked Coconuts from Tamil Nadu
                  </Link>
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                  From Pollachi and Madurai harvest cycles to 40ft HC container loading capacities (up to 26–28 MT),
                  discover everything global buyers need to know before placing bulk coconut orders.
                </p>
                <div className="mt-6">
                  <Link
                    href="/coconut-blog-details"
                    className="btn-navy px-6 py-3 rounded-lg text-sm font-bold inline-flex items-center gap-2"
                  >
                    Read Full Guide →
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="blog-card product-card bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col"
              >
                <div className="h-52 overflow-hidden">
                  <img src={post.image} alt={post.alt} className="card-img w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-bold text-[#16a34a] uppercase">{post.categoryLabel}</span>
                  <h3 className="text-lg font-extrabold text-[#0b2c52] mt-1.5">
                    <Link href={post.href} className="hover:text-amber-600 transition">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 flex-1">{post.excerpt}</p>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>{post.date}</span>
                    <Link href={post.href} className="font-bold text-[#0b2c52] hover:text-amber-600">
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
