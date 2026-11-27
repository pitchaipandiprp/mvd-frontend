"use client";

import Link from "next/link";
import { Building2, BriefcaseBusiness, UserRound, Mail, Phone, MapPin, ArrowUpRight, } from "lucide-react";
import { companyInfo } from "@/utils/constants";

export default function WebFooter() {
  return (



    <footer className="bg-[#0b2c52] text-white pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-10 gap-y-10">

          {/* Brand Information */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <svg viewBox="0 0 64 64" className="w-12 h-12 shrink-0" fill="none">
                <circle cx="32" cy="30" r="21" stroke="#FFFFFF" strokeWidth="2.5" />
                <ellipse cx="32" cy="30" rx="10" ry="21" stroke="#FFFFFF" strokeWidth="2" />
                <path d="M12 24H52M12 36H52" stroke="#FFFFFF" strokeWidth="2" />
                <path d="M8 38C18 47 46 47 56 36" stroke="#FACC15" strokeWidth="4" strokeLinecap="round" />
                <path d="M51 33L58 35L54 41" fill="#FACC15" />
              </svg>

              <div>
                <div className="text-2xl font-extrabold tracking-tight text-white leading-none group-hover:text-[#facc15] transition-colors">
                  {companyInfo.shortName}
                </div>
                <div className="text-[10px] font-bold tracking-[2px] text-slate-300 uppercase mt-1">
                  {companyInfo.subtitle}
                </div>
              </div>
            </Link>

            <p className="text-sm font-medium text-[#facc15] mt-5">
              {companyInfo.tagline}
            </p>

            <p className="text-[13px] text-slate-300 mt-3 leading-7 text-justify max-w-md">
              {companyInfo.description}
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center text-slate-300 hover:bg-[#facc15] hover:text-[#071e38] hover:border-[#facc15] hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center text-slate-300 hover:bg-[#facc15] hover:text-[#071e38] hover:border-[#facc15] hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>

              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center text-slate-300 hover:bg-[#facc15] hover:text-[#071e38] hover:border-[#facc15] hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Details */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Company Details
              <span className="block w-10 h-[3px] bg-[#facc15] rounded-full mt-2" />
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-white/10 flex items-center justify-center text-[#facc15]">
                  <Building2 className="w-4 h-4" />
                </div>

                <div>
                  <p className="text-xs font-bold text-[#facc15] mb-1">
                    Office Address
                  </p>
                  <p className="text-[13px] text-slate-300 leading-6 text-justify">
                    {companyInfo.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Contact Us
              <span className="block w-10 h-[3px] bg-[#facc15] rounded-full mt-2" />
            </h3>

            <div className="space-y-6">
              {companyInfo.leadership.map((leader) => (
                <div key={leader.email} className="space-y-2.5">
                  <div className="flex items-center gap-2 text-[#facc15] text-xs font-bold">
                    <BriefcaseBusiness className="w-4 h-4 shrink-0" />
                    {leader.role}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <UserRound className="w-4 h-4 text-slate-400 shrink-0" />
                    {leader.name}
                  </div>

                  <a
                    href={leader.emailHref}
                    className="flex items-center gap-2 text-[13px] text-slate-300 hover:text-[#facc15] transition-colors break-all group"
                  >
                    <Mail className="w-4 h-4 text-slate-400 group-hover:text-[#facc15] shrink-0" />
                    {leader.email}
                  </a>

                  <a
                    href={leader.mobileHref}
                    className="flex items-center gap-2 text-[13px] text-slate-300 hover:text-[#facc15] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    {leader.mobile}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Quick Links
              <span className="block w-10 h-[3px] bg-[#facc15] rounded-full mt-2" />
            </h3>

            <ul className="space-y-3.5 text-[13px] text-slate-300">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about-us" },
                { name: "Our Products", href: "/#products-section" },
                { name: "Export Blog", href: "/blog" },
                { name: "Get a Quote", href: "/get-a-quote" },
                { name: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 hover:text-[#facc15] hover:translate-x-1 transition-all duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#facc15]/70" />
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#071e38] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">

          <p className="text-center sm:text-left">
            © {companyInfo.copyrightYears} {companyInfo.name}. All Rights Reserved.
          </p>

          <p className="text-center">
            {companyInfo.motto.split("|")[0].trim()}
            <span className="text-[#facc15] mx-2">|</span>
            {companyInfo.motto.split("|")[1]?.trim()}
          </p>

        </div>
      </div>
    </footer>

  );
}
