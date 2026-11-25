"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BLOG_ROUTES = [
  "/blog",
  "/blog-details",
  "/coconut-blog-details",
  "/pollachi-coconut-blog-details",
  "/ramanathapuram-kundu-milagai-blog-details",
  "/andhra-chilli-blog-details",
];

export default function WebHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isBlogActive = BLOG_ROUTES.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setDesktopDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const navClass = (active: boolean) =>
    `nav-link px-4 py-2 rounded-lg text-sm font-semibold ${
      active ? "active" : "text-slate-700"
    }`;

  const mobileNavClass = (active: boolean) =>
    active
      ? "block px-4 py-2.5 rounded-lg bg-[#facc15] text-[#071e38] font-bold text-sm"
      : "block px-4 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-semibold text-sm";

  return (
    <>
      {/* ==================== TOP UTILITY BAR ==================== */}
      <div className="bg-[#0b2c52] text-white text-xs py-2.5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <span className="flex items-center gap-1.5 text-slate-200">
              <svg className="w-3.5 h-3.5 text-[#facc15] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Thiruppuvanam, Madurai - 630611, Tamil Nadu, India
            </span>
            <a
              href="mailto:mvdimportexport@gmail.com"
              className="hidden sm:flex items-center gap-1.5 text-slate-200 hover:text-[#facc15] transition"
            >
              <svg className="w-3.5 h-3.5 text-[#facc15] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              mvdimportexport@gmail.com
            </a>
            <a
              href="tel:+919043764490"
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#facc15] transition"
            >
              <svg className="w-3.5 h-3.5 text-[#22c55e] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +91 90437 64490
            </a>
          </div>
          <div className="hidden md:flex items-center gap-2 font-medium tracking-wide text-slate-200">
            <span>Global Trade</span>
            <span className="text-[#facc15]">|</span>
            <span className="text-[#facc15]">Better Tomorrow</span>
          </div>
        </div>
      </div>

      {/* ==================== MAIN HEADER ==================== */}
      <header className={`sticky-header sticky top-0 z-40 bg-white border-b border-slate-100 ${scrolled ? "scrolled" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-[75px] w-[75px] flex items-center justify-center overflow-hidden rounded-full bg-white">
                <img
                  src="/assets/img/logo.png"
                  alt="MVD Import and Exporter Logo"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="border-l-2 border-[#d4a32a] pl-3">
                <div className="text-2xl font-extrabold tracking-tight text-[#0b2c52] leading-none">MVD</div>
                <div className="text-[11px] font-bold tracking-wider text-[#0b2c52] uppercase mt-0.5">
                  IMPORT AND EXPORTER
                </div>
                <div className="text-[9.5px] italic text-slate-500 leading-tight">
                  Connecting Continents • Delivering Opportunities
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
              <Link href="/" className={navClass(pathname === "/")}>
                Home
              </Link>
              <Link href="/about-us" className={navClass(pathname === "/about-us")}>
                About Us
              </Link>

              {/* Products Dropdown */}
              <div
                ref={dropdownRef}
                className={`relative group dropdown-wrapper ${desktopDropdownOpen ? "open" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => {
                    if (window.innerWidth >= 1024) {
                      setDesktopDropdownOpen((prev) => !prev);
                    }
                  }}
                  className="desktop-dropdown-btn nav-link px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 flex items-center gap-1"
                >
                  Products
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="dropdown-menu absolute left-0 mt-2 w-60 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                  <Link
                    href="/coconut-blog-details"
                    onClick={() => setDesktopDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#0b2c52] font-medium"
                  >
                    Fresh &amp; Semi-Husked Coconut
                  </Link>
                  <Link
                    href="/ramanathapuram-kundu-milagai-blog-details"
                    onClick={() => setDesktopDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#0b2c52] font-medium"
                  >
                    Kundu Milagai &amp; Red Chilli
                  </Link>
                  <Link
                    href="/get-a-quote"
                    onClick={() => setDesktopDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[#0b2c52] bg-amber-50/70 hover:bg-amber-100/70 font-semibold border-t border-slate-100 mt-1"
                  >
                    Request Product Catalog →
                  </Link>
                </div>
              </div>

              <Link href="/blog" className={navClass(isBlogActive)}>
                Blog
              </Link>
              <Link href="/contact" className={navClass(pathname === "/contact")}>
                Contact Us
              </Link>
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/get-a-quote"
                className={`btn-gold hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold shadow-sm ${
                  pathname === "/get-a-quote" ? "shadow-md ring-2 ring-[#0b2c52]/20" : ""
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                Get a Quote
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                id="mobile-menu-btn"
                type="button"
                aria-label="Toggle Menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="lg:hidden p-2.5 rounded-lg text-[#0b2c52] hover:bg-slate-100 focus:outline-none"
              >
                <svg
                  id="hamburger-icon"
                  className={`w-6 h-6 ${mobileMenuOpen ? "hidden" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  id="close-icon"
                  className={`w-6 h-6 ${mobileMenuOpen ? "" : "hidden"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          <div id="mobile-menu" className={`lg:hidden border-t border-slate-100 ${mobileMenuOpen ? "open" : ""}`}>
            <div className="py-3 space-y-1">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className={mobileNavClass(pathname === "/")}>
                Home
              </Link>
              <Link
                href="/about-us"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileNavClass(pathname === "/about-us")}
              >
                About Us
              </Link>

              {/* Mobile Dropdown */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileProductsOpen((prev) => !prev)}
                  className="mobile-dropdown-toggle w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-semibold text-sm"
                >
                  <span>Products</span>
                  <svg
                    className={`chevron-icon w-4 h-4 transition-transform duration-200 ${
                      mobileProductsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileProductsOpen && (
                  <div className="mobile-submenu pl-6 pr-3 py-1 space-y-1 bg-slate-50/70 rounded-lg mx-2">
                    <Link
                      href="/coconut-blog-details"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-slate-600 hover:text-[#0b2c52]"
                    >
                      Fresh &amp; Semi-Husked Coconut
                    </Link>
                    <Link
                      href="/ramanathapuram-kundu-milagai-blog-details"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-slate-600 hover:text-[#0b2c52]"
                    >
                      Kundu Milagai &amp; Red Chilli
                    </Link>
                    <Link
                      href="/#products-section"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-slate-600 hover:text-[#0b2c52]"
                    >
                      Fresh Farm Vegetables
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className={mobileNavClass(isBlogActive)}>
                Blog
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileNavClass(pathname === "/contact")}
              >
                Contact Us
              </Link>
              <div className="pt-2 pb-1 px-2">
                <Link
                  href="/get-a-quote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-gold w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
