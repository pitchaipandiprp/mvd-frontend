"use client";

import Link from "next/link";
import { companyInfo } from "@/utils/constants";

export default function WebFooter() {
  return (
    <footer className="bg-[#0b2c52] text-white pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <svg viewBox="0 0 64 64" className="w-11 h-11 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="30" r="21" stroke="#FFFFFF" strokeWidth="2.5" />
                <ellipse cx="32" cy="30" rx="10" ry="21" stroke="#FFFFFF" strokeWidth="2" />
                <path d="M12 24H52M12 36H52" stroke="#FFFFFF" strokeWidth="2" />
                <path d="M8 38C18 47 46 47 56 36" stroke="#FACC15" strokeWidth="4" strokeLinecap="round" />
                <path d="M51 33L58 35L54 41" fill="#FACC15" />
              </svg>
              <div>
                <div className="text-2xl font-extrabold tracking-tight text-white leading-none">{companyInfo.shortName}</div>
                <div className="text-[11px] font-bold tracking-wider text-slate-200 uppercase mt-0.5">
                  {companyInfo.subtitle}
                </div>
              </div>
            </Link>
            <p className="text-xs text-slate-300 mt-3 italic">{companyInfo.tagline}</p>
            <p className="text-xs text-slate-300/90 mt-3 leading-relaxed">
              {companyInfo.description}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2.5 mt-5">
              <a
                href={companyInfo.social.linkedin}
                aria-label="LinkedIn"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#facc15] hover:text-[#071e38] flex items-center justify-center transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href={companyInfo.social.facebook}
                aria-label="Facebook"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#facc15] hover:text-[#071e38] flex items-center justify-center transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>
              <a
                href={companyInfo.social.instagram}
                aria-label="Instagram"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#facc15] hover:text-[#071e38] flex items-center justify-center transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Company Details */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Company Details</h3>
            <ul className="space-y-2.5 text-xs text-slate-200">
              <li className="flex items-start gap-2">
                <span className="text-[#facc15] font-bold shrink-0">GST No:</span>
                <span>{companyInfo.gstNo}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#facc15] font-bold shrink-0">IEC No:</span>
                <span>{companyInfo.iecNo}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#facc15] font-bold shrink-0">Address:</span>
                <span className="leading-relaxed">
                  {companyInfo.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-xs text-slate-200">
              <li>
                <Link href="/" className="hover:text-[#facc15] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-[#facc15] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#products-section" className="hover:text-[#facc15] transition">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#facc15] transition">
                  Export Blog
                </Link>
              </li>
              <li>
                <Link href="/get-a-quote" className="hover:text-[#facc15] transition">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#facc15] transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-xs text-slate-200">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] shrink-0"></span>
                <a href={companyInfo.phoneHref} className="hover:text-[#facc15] transition">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#facc15] mt-1 shrink-0"></span>
                <a href={companyInfo.emailHref} className="hover:text-[#facc15] transition break-all">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400 mt-1 shrink-0"></span>
                <span>{companyInfo.shortAddress}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#071e38] border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-300">
          <p>© {companyInfo.copyrightYears} {companyInfo.name}. All Rights Reserved.</p>
          <p className="text-slate-300">
            {companyInfo.motto.split("|")[0].trim()} <span className="text-[#facc15] mx-1">|</span> {companyInfo.motto.split("|")[1]?.trim()}
          </p>
        </div>
      </div>
    </footer>
  );
}
