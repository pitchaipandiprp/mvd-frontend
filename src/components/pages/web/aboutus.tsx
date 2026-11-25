"use client";

import { useEffect } from "react";
import Link from "next/link";

const QUALITY_STANDARDS = [
  {
    title: "1. Precision Maturity & Size Sorting",
    description:
      "Coconuts are calibrated by weight (500g–650g+) and circumference (13–15 inches) with clean de-husking to prevent fungal growth.",
  },
  {
    title: "2. Phytosanitary & Lab Certification",
    description:
      "Full documentation including Phytosanitary Certificate, Certificate of Origin, Fumigation Certificate, and APEDA compliance.",
  },
  {
    title: "3. Export-Grade Ventilated Packaging",
    description:
      "PP Leno mesh bags for coconuts/onions and 5-ply ventilated corrugated boxes for fresh vegetables to maintain airflow.",
  },
  {
    title: "4. Reefer & Air-Cargo Temperature Control",
    description:
      "Pre-cooled perishable vegetables dispatched via temperature-controlled reefer containers and express air freight.",
  },
  {
    title: "5. Flexible Incoterms (FOB, CIF, CFR)",
    description:
      "Tailored trade terms from Tuticorin (VOC Port) and Chennai Port to suit buyer logistics preferences.",
  },
  {
    title: "6. Transparent Pre-Shipment Inspection",
    description:
      "Live photo/video loading verification and third-party SGS/Bureau Veritas inspection support upon request.",
  },
];

export default function AboutUs() {
  useEffect(() => {
    document.title = "About Us | MVD Import and Exporter - Agricultural & Coconut Exporters";
  }, []);

  return (
    <>
      {/* SUBPAGE BANNER */}
      <section className="relative bg-[#071e38] py-16 sm:py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80"
          alt="Lush agricultural fields in Tamil Nadu"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="subpage-hero-overlay absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-xs font-bold uppercase tracking-widest text-[#facc15] mb-2">Home / About Us</div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Bridging South Indian Farms with Global Markets
          </h1>
          <p className="mt-4 text-slate-200 max-w-2xl text-base sm:text-lg">
            Headquartered in Thiruppuvanam, Madurai, MVD Import and Exporter delivers farm-fresh coconuts, Kundu Milagai,
            and export-grade vegetables with uncompromising integrity.
          </p>
        </div>
      </section>

      {/* COMPANY HISTORY & INTRODUCTION */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Company Image */}
            <div className="lg:col-span-6 reveal-left">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?auto=format&fit=crop&w=1000&q=85"
                  alt="Freshly harvested coconuts prepared for export"
                  className="w-full h-[380px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071e38]/95 via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 text-white">
                  <span className="inline-block bg-[#facc15] text-[#0b2c52] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                    Our Commitment
                  </span>

                  <div className="font-script text-2xl sm:text-3xl text-[#facc15]">
                    &quot;Small Steps Today | Big Opportunities Tomorrow&quot;
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/20 text-xs text-slate-200 leading-relaxed">
                    Registered Merchant Exporter
                    <span className="mx-1 text-[#facc15]">•</span>
                    IEC: EFDPM4929G
                    <span className="mx-1 text-[#facc15]">•</span>
                    GST: 33EFDPM4929G2ZE
                  </div>
                </div>
              </div>
            </div>

            {/* Right: FIEO Certification */}
            <div className="lg:col-span-6 reveal-right">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-[2px] bg-[#16a34a]"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#16a34a]">
                  Our Export Credentials
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b2c52] leading-tight">
                Building Global Trust Through <span className="text-[#16a34a]">Recognised Credentials</span>
              </h2>

              <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                We are committed to transparent business practices, quality sourcing and reliable international trade.
                Our export credentials reflect our commitment to building trusted relationships with global buyers.
              </p>

              {/* FIEO Certificate Card */}
              <div className="mt-7 relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                {/* Top Header */}
                <div className="bg-gradient-to-r from-[#0b2c52] to-[#164477] px-5 py-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-green-300 font-bold">
                      Export Recognition
                    </span>
                    <h3 className="text-white font-bold text-lg mt-1">FIEO</h3>
                  </div>

                  <div className="w-11 h-11 rounded-full border border-white/30 bg-white/10 flex items-center justify-center text-[#facc15]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-4">
                    {/* FIEO Logo */}
                    <div className="w-20 h-20 shrink-0 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center p-1">
                      <img src="/assets/img/fieo.png" alt="FIEO Logo" className="max-w-full max-h-full object-contain" />
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-[#0b2c52] font-extrabold text-base sm:text-lg">
                        Federation of Indian Export Organisations
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        Official FIEO certificate and membership document.
                      </p>
                      <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-green-700">
                        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Certificate Document
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-dashed border-slate-200 my-5"></div>

                  {/* PDF Button */}
                  <a
                    href="/assets/pdf/fieo-certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 w-full rounded-xl bg-[#f4f7fa] hover:bg-[#e8f4ec] border border-slate-200 hover:border-green-300 p-4 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-lg bg-red-50 flex items-center justify-center">
                        <img
                          src="/assets/img/pdf-icon.svg"
                          alt="PDF"
                          className="w-7 h-7 brightness-0 saturate-100 [filter:invert(18%)_sepia(96%)_saturate(6500%)_hue-rotate(350deg)_brightness(95%)_contrast(105%)]"
                        />
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-[#0b2c52]">View FIEO Certificate</span>
                        <span className="block text-[11px] text-slate-500 mt-1">Open official PDF document</span>
                      </div>
                    </div>

                    <svg
                      className="w-5 h-5 text-[#16a34a] group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Trust Note */}
              <div className="mt-5 flex items-start gap-3">
                <svg className="w-5 h-5 text-[#16a34a] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Committed to professional export practices and dependable international business relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 bg-[#f4f7fa] border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 reveal">
              <div className="w-12 h-12 rounded-xl bg-[#0b2c52] text-[#facc15] flex items-center justify-center font-extrabold text-xl mb-5">
                01
              </div>
              <h3 className="text-2xl font-extrabold text-[#0b2c52]">Our Mission</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                To supply globally competitive, farm-fresh Indian agricultural commodities-led by premium coconuts,
                chillies, and fresh vegetables-through transparent pricing, ethical farmer partnerships, and reliable
                cold-chain and container logistics.
              </p>
            </div>

            <div className="bg-[#0b2c52] text-white p-8 rounded-2xl shadow-lg reveal">
              <div className="w-12 h-12 rounded-xl bg-[#facc15] text-[#071e38] flex items-center justify-center font-extrabold text-xl mb-5">
                02
              </div>
              <h3 className="text-2xl font-extrabold text-white">Our Vision</h3>
              <p className="mt-3 text-slate-200 leading-relaxed">
                To become a globally recognized benchmark in Indian agro-exports, expanding our footprint across the GCC,
                Europe, Southeast Asia, and North America while championing sustainable farming and zero-compromise
                quality assurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US & EXPORT QUALITY STANDARDS */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <span className="text-xs font-bold uppercase tracking-widest text-[#16a34a]">Compliance &amp; Grading</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b2c52] mt-2">Our Export Quality Standards</h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Every consignment undergoes multi-stage inspection before container stuffing and sealing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {QUALITY_STANDARDS.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-slate-200 hover:border-[#0b2c52] transition reveal"
              >
                <h3 className="text-lg font-extrabold text-[#0b2c52]">{item.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-14 bg-[#0b2c52] rounded-2xl p-8 sm:p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-6 reveal">
            <div>
              <h3 className="text-2xl font-extrabold">Ready to Source Directly from India?</h3>
              <p className="text-slate-300 text-sm mt-1">
                Request current FOB/CIF container pricing and product specifications from our export desk.
              </p>
            </div>
            <Link href="/get-a-quote" className="btn-gold px-7 py-3.5 rounded-full text-sm font-bold shrink-0">
              Request a Custom Quote →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
