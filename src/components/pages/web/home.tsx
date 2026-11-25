"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const MORE_PRODUCTS = [
  "Red Chilli (Andhra)",
  "Red Chilli (Ramanathapuram)",
  "Round Chilli",
  "Coconuts (Pollachi)",
  "Coconuts (Theni)",
  "Coconuts (Kambam)",
];

const METRICS = [
  { target: 5, suffix: "+", label: "Export Countries" },
  { target: 100, suffix: "%", label: "Phytosanitary & APEDA Compliant" },
  { target: 150, suffix: "+", label: "Successful Shipments" },
  { target: 24, suffix: "/7", label: "Shipment & Cold-Chain Tracking" },
];

export default function HomePage() {
  const counterSectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState<number[]>(METRICS.map(() => 0));
  const countersStartedRef = useRef(false);

  useEffect(() => {
    document.title = "MVD Import and Exporter | Fresh Coconuts, Vegetables & Agro Exports from India";
  }, []);

  useEffect(() => {
    const startCounters = () => {
      if (countersStartedRef.current || !counterSectionRef.current) return;
      const rect = counterSectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        countersStartedRef.current = true;
        const duration = 1800;
        const startTime = performance.now();

        const animate = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - (1 - progress) * (1 - progress);
          setCounts(METRICS.map((m) => Math.floor(m.target * eased)));
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCounts(METRICS.map((m) => m.target));
          }
        };
        requestAnimationFrame(animate);
      }
    };

    startCounters();
    window.addEventListener("scroll", startCounters, { passive: true });
    return () => window.removeEventListener("scroll", startCounters);
  }, []);

  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden bg-[#071e38]">
        {/* Maritime Cargo & Freight Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/img/banner-1.jpg"
            alt=""
            className="w-full h-full object-cover object-center scale-100"
          />
          <div className="hero-gradient-overlay absolute inset-0"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-white">
              <div className="hero-animate-1 inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-slate-200 mb-3">
                <span>YOUR TRUSTED PARTNER IN</span>
                <span className="text-[#facc15]">✦</span>
              </div>

              <h1 className="hero-animate-2 text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.08] uppercase">
                IMPORT &amp; EXPORT
                <span className="block text-[#facc15] mt-1">SOLUTIONS</span>
              </h1>

              <p className="hero-animate-3 mt-4 text-base sm:text-lg font-semibold text-white/95">
                Quality Products <span className="text-[#facc15] mx-1.5">|</span> Global Reach{" "}
                <span className="text-[#facc15] mx-1.5">|</span> Reliable Service
              </p>

              <p className="hero-animate-3 mt-3 text-sm sm:text-base text-slate-200/90 max-w-xl leading-relaxed">
                MVD Import and Exporter is committed to bridging markets and creating value through trusted trade,
                farm-fresh coconuts, premium vegetables, and long-term international partnerships.
              </p>

              <div className="hero-animate-4 mt-7 flex flex-wrap items-center gap-4">
                <a
                  href="#products-section"
                  className="btn-gold inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-sm sm:text-base font-bold shadow-lg"
                >
                  <span>Explore Our Products</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-white border border-white/30 hover:bg-white/10 transition"
                >
                  Request Export Quote
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end items-start lg:self-start pt-2 lg:pt-5 lg:mt-5">
              <div className="relative w-60 h-60 sm:w-80 sm:h-80 flex items-center justify-center">
                {/* Dotted Circular Orbit */}
                <div className="absolute inset-2 rounded-full border-2 border-dashed border-white/60 animate-[spin_25s_linear_infinite]"></div>

                {/* Center Text */}
                <div className="relative z-10 text-center">
                  <div className="animate-float-script bg-white/10 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none px-6 py-4 rounded-2xl border border-white/15 lg:border-none text-center lg:text-center">
                    <p className="font-script text-4xl sm:text-5xl lg:text-md font-bold text-white lg:text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.85)] leading-[0.95]">
                      Ready <br />
                      to
                      <br />
                      Export
                    </p>
                  </div>
                </div>

                {/* Moving Plane - Follows Exact Circular Orbit */}
                <div className="absolute inset-2 z-30 animate-[spin_25s_linear_infinite] pointer-events-none">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <img
                      src="/assets/img/airplane.svg"
                      className="relative w-7 h-7 drop-shadow-lg rotate-90"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(83%) sepia(96%) saturate(1000%) hue-rotate(3deg) brightness(103%) contrast(105%)",
                      }}
                      alt="Airplane"
                    />
                  </div>
                </div>

                {/* Country Labels Around Circular Orbit */}
                {/* Arabia - Top */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                  <span className="px-3 py-1.5 rounded-full bg-white text-[#AA0C51] text-xs font-bold shadow-lg">
                    Arabia
                  </span>
                </div>

                {/* Australia - Right */}
                <div className="absolute top-1/2 -right-12 -translate-y-1/2 z-20">
                  <span className="px-3 py-1.5 rounded-full bg-yellow-400 text-slate-900 text-xs font-bold shadow-lg">
                    Australia
                  </span>
                </div>

                {/* New Zealand - Bottom Right */}
                <div className="absolute bottom-3 -right-3 lg:bottom-4 z-20">
                  <span className="px-3 py-1.5 rounded-full bg-white text-[#AA0C51] text-xs font-bold shadow-lg">
                    New Zealand
                  </span>
                </div>

                {/* Sri Lanka - Bottom Left */}
                <div className="absolute bottom-3 left-0 lg:bottom-4 lg:left-2 z-20">
                  <span className="px-3 py-1.5 rounded-full bg-white text-[#AA0C51] text-xs font-bold shadow-lg">
                    Sri Lanka
                  </span>
                </div>

                {/* Japan - Left */}
                <div className="absolute top-1/2 -left-8 -translate-y-1/2 z-20">
                  <span className="px-3 py-1.5 rounded-full bg-yellow-400 text-slate-900 text-xs font-bold shadow-lg">
                    Japan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4-PILLAR TRUST BAR ==================== */}
      <section className="bg-[#f0fdf4] border-b border-slate-200/80 shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x lg:divide-slate-200">
            {/* Pillar 1 */}
            <div className="reveal flex items-center gap-4 lg:pr-4">
              <div className="w-12 h-12 rounded-full bg-[#0b2c52] text-white flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-bold text-[#0b2c52]">Global Network</h2>
                <p className="text-xs sm:text-sm text-slate-500">Access to international markets</p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="reveal flex items-center gap-4 lg:pl-6 lg:pr-4">
              <div className="w-12 h-12 rounded-full bg-[#0b2c52] text-white flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-bold text-[#0b2c52]">Quality Assurance</h2>
                <p className="text-xs sm:text-sm text-slate-500">Best quality products &amp; service</p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="reveal flex items-center gap-4 lg:pl-6 lg:pr-4">
              <div className="w-12 h-12 rounded-full bg-[#0b2c52] text-white flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-bold text-[#0b2c52]">Transparent Trade</h2>
                <p className="text-xs sm:text-sm text-slate-500">Trust &amp; long-term relationships</p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="reveal flex items-center gap-4 lg:pl-6">
              <div className="w-12 h-12 rounded-full bg-[#0b2c52] text-white flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-bold text-[#0b2c52]">On-Time Delivery</h2>
                <p className="text-xs sm:text-sm text-slate-500">Safe &amp; secure shipping</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== OUR KEY PRODUCTS SECTION ==================== */}
      <section id="products-section" className="bg-[#f4f7fa] bg-dot-pattern py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-7 items-stretch">
            {/* Column 1: Section Intro */}
            <div className="lg:col-span-3 flex flex-col justify-center reveal-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b2c52] tracking-tight">Our Key Products</h2>
              <p className="mt-4 text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                We export and import a wide range of quality products, with a special focus on fresh coconuts,
                vegetables, spices, and agro goods sourced directly from South Indian farms.
              </p>
              <div className="mt-6">
                <Link
                  href="/get-a-quote"
                  className="btn-navy inline-flex items-center gap-2.5 px-5 py-3 rounded-lg text-sm font-bold shadow-md"
                >
                  <span>View All Products</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Column 2: Coconut Card */}
            <div className="lg:col-span-3 reveal">
              <div className="product-card bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 h-full flex flex-col">
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src="/assets/img/co1.jpg"
                    alt="Fresh and Semi-Husked Coconuts for Export"
                    className="card-img w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-[#0b2c52]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    Export Grade A
                  </span>
                </div>
                <div className="p-5 flex items-center justify-between gap-3 mt-auto">
                  <div>
                    <h3 className="text-lg font-extrabold text-[#0b2c52]">Coconut</h3>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">Fresh • Semi Husked • Processed</p>
                  </div>
                  <Link
                    href="/get-a-quote?product=Semi-Husked+Coconut"
                    aria-label="Inquire about Coconut"
                    className="arrow-btn w-9 h-9 rounded-full bg-[#facc15] text-[#071e38] flex items-center justify-center shrink-0 shadow-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 3: Kundu Milagai Card */}
            <div className="lg:col-span-3 reveal">
              <div className="product-card bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 h-full flex flex-col">
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src="/assets/img/rch2.jpg"
                    alt="Kundu Milagai and Fresh Indian Red Chillies"
                    className="card-img w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-[#16a34a]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    Farm Direct
                  </span>
                </div>
                <div className="p-5 flex items-center justify-between gap-3 mt-auto">
                  <div>
                    <h3 className="text-lg font-extrabold text-[#0b2c52]">Kundu Milagai</h3>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">Premium Quality • Natural • Farm Fresh</p>
                  </div>
                  <Link
                    href="/get-a-quote?product=Kundu+Milagai"
                    aria-label="Inquire about Kundu Milagai"
                    className="arrow-btn w-9 h-9 rounded-full bg-[#facc15] text-[#071e38] flex items-center justify-center shrink-0 shadow-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 4: More Products (Planned & Growing) */}
            <div className="lg:col-span-3 flex flex-col justify-between reveal-right bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div>
                <h3 className="text-lg font-extrabold text-[#0b2c52] leading-snug">
                  More Products
                  <br />
                  <span className="text-sm font-bold text-slate-700">(Planned &amp; Growing)</span>
                </h3>

                <ul className="mt-4 space-y-2.5 text-sm font-medium text-slate-700">
                  {MORE_PRODUCTS.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-green-100 text-[#16a34a] flex items-center justify-center shrink-0">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 text-left">
                <p className="font-script text-2xl md:text-md font-bold text-[#0b2c52] -rotate-2 inline-block">
                  Your Product, Our Priority
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== EXPORT METRICS & WHY MVD ==================== */}
      <section ref={counterSectionRef} className="counter-section py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {METRICS.map((metric, idx) => (
              <div key={metric.label} className="p-6 rounded-2xl bg-[#f4f7fa] border border-slate-200/60 reveal">
                <div className="counter-value text-3xl sm:text-4xl font-extrabold text-[#0b2c52]">
                  {counts[idx]}
                  {metric.suffix}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== RECENT EXPORT INSIGHTS (BLOG PREVIEW) ==================== */}
      <section className="py-16 bg-[#f4f7fa] border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 reveal">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0b2c52] bg-[#facc15] px-3 py-1 rounded-full">
                Trade &amp; Agro Journal
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b2c52] mt-3">
                Latest Export &amp; Market Insights
              </h2>
            </div>
            <Link
              href="/blog"
              className="btn-navy px-5 py-2.5 rounded-lg text-sm font-bold inline-flex items-center gap-2 self-start sm:self-auto"
            >
              Read All Articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <article className="product-card bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col reveal">
              <img src="/assets/img/co5.jpg" alt="Semi Husked Coconut Grading" className="card-img h-48 w-full object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs font-semibold text-slate-400">October 2026 • Coconut Exports</div>
                <h3 className="text-lg font-extrabold text-[#0b2c52] mt-2 leading-snug">
                  <Link href="/coconut-blog-details" className="hover:text-amber-600 transition">
                    Quality Standards for Semi-Husked Coconut Exports
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 mt-2.5 line-clamp-2">
                  Learn how moisture levels, husk thickness, and maturity grading maximize shelf life during sea transit.
                </p>
                <Link
                  href="/coconut-blog-details"
                  className="mt-4 pt-3 border-t border-slate-100 text-sm font-bold text-[#0b2c52] hover:text-amber-600 inline-flex items-center gap-1"
                >
                  Read Article →
                </Link>
              </div>
            </article>

            <article className="product-card bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col reveal">
              <img src="/assets/img/rch1.jpg" alt="Ramanathapuram Kundu Milagai" className="card-img h-48 w-full object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs font-semibold text-slate-400">September 2026 • Spices &amp; Chillies</div>
                <h3 className="text-lg font-extrabold text-[#0b2c52] mt-2 leading-snug">
                  <Link href="/ramanathapuram-kundu-milagai-blog-details" className="hover:text-amber-600 transition">
                    Why Ramanathapuram Kundu Milagai Leads Global Culinary Spice Demand
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 mt-2.5 line-clamp-2">
                  Exploring the GI-tagged pungency, vibrant natural color, and export packaging protocols of Tamil
                  Nadu&apos;s iconic round chilli.
                </p>
                <Link
                  href="/ramanathapuram-kundu-milagai-blog-details"
                  className="mt-4 pt-3 border-t border-slate-100 text-sm font-bold text-[#0b2c52] hover:text-amber-600 inline-flex items-center gap-1"
                >
                  Read Article →
                </Link>
              </div>
            </article>

            <article className="product-card bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col reveal">
              <img
                src="/assets/img/ch2.jpg"
                alt="Premium Quality Samba Chilli for Export"
                className="card-img h-48 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs font-semibold text-slate-400">November 2026 • Premium Indian Spices</div>
                <h3 className="text-lg font-extrabold text-[#0b2c52] mt-2 leading-snug">
                  <Link href="/andhra-chilli-blog-details" className="hover:text-amber-600 transition">
                    Samba Chilli - Authentic Indian Red Chilli for Global Markets
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 mt-2.5 line-clamp-2">
                  Discover the rich colour, distinctive flavour and quality of Indian Samba Chilli, carefully sourced and
                  selected to meet international export requirements.
                </p>
                <Link
                  href="/andhra-chilli-blog-details"
                  className="mt-4 pt-3 border-t border-slate-100 text-sm font-bold text-[#0b2c52] hover:text-amber-600 inline-flex items-center gap-1"
                >
                  Read Article →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
