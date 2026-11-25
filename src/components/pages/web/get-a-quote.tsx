"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useWebToast } from "@/context/web-toast-context";

interface QuoteFormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  product: string;
  quantity: string;
  incoterm: string;
  message: string;
}

const INITIAL_FORM: QuoteFormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  product: "",
  quantity: "",
  incoterm: "FOB Tuticorin / Chennai",
  message: "",
};

export default function GetAQuotePage() {
  const { showToast } = useWebToast();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<QuoteFormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Get a Quote | MVD Import and Exporter - Bulk Export Inquiry";
  }, []);

  useEffect(() => {
    const productParam = searchParams.get("product");
    if (productParam) {
      setFormData((prev) => ({ ...prev, product: productParam }));
    }
  }, [searchParams]);

  const handleChange =
    (field: keyof QuoteFormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (errors[field] && value.trim()) {
        setErrors((prev) => ({ ...prev, [field]: false }));
      }
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const requiredFields: (keyof QuoteFormState)[] = [
      "name",
      "company",
      "email",
      "phone",
      "country",
      "product",
      "quantity",
      "message",
    ];
    const newErrors: Record<string, boolean> = {};
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = true;
        isValid = false;
      } else {
        newErrors[field] = false;
      }
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() && !emailRegex.test(formData.email.trim())) {
      newErrors.email = true;
      setErrors(newErrors);
      showToast("Please enter a valid business email address.", true);
      return;
    }

    setErrors(newErrors);

    if (!isValid) {
      showToast("Please fill in all required export quotation fields.", true);
      return;
    }

    setSubmitted(true);
    showToast("Quotation request submitted! Our export team will respond within 24 hours.");
    setFormData(INITIAL_FORM);
  };

  const inputBorderClass = (field: string) =>
    errors[field] ? "border-red-500 ring-2 ring-red-200" : "border-slate-300";

  return (
    <div className="bg-[#f4f7fa]">
      {/* HERO */}
      <section className="relative bg-[#071e38] py-14 overflow-hidden">
        <div className="subpage-hero-overlay absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-xs font-bold uppercase tracking-widest text-[#facc15] mb-2">Home / Get a Quote</div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Request an Export Quotation</h1>
          <p className="mt-3 text-slate-200 max-w-2xl text-sm sm:text-base">
            Share your product requirements, destination port, and container volume. Our trade desk responds within 24
            hours with competitive FOB / CIF pricing.
          </p>
        </div>
      </section>

      {/* QUOTE FORM & TRADE INFO */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Form Card */}
            <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 shadow-md border border-slate-100 reveal">
              <h2 className="text-2xl font-extrabold text-[#0b2c52]">B2B Bulk Order &amp; Export Inquiry Form</h2>
              <p className="text-sm text-slate-500 mt-1">
                Fields marked with <span className="text-red-500">*</span> are required for accurate freight calculation.
              </p>

              {submitted && (
                <div
                  id="quote-success-banner"
                  className="mt-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm font-medium"
                >
                  ✓ Thank you! Your export quotation request has been logged. Our export manager will email you a formal
                  proforma quote shortly.
                </div>
              )}

              <form id="quote-request-form" className="mt-7 space-y-5" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Customer Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="quote-name"
                      required
                      value={formData.name}
                      onChange={handleChange("name")}
                      placeholder="e.g. Ahmed Al-Mansoor"
                      className={`form-input w-full px-4 py-3 rounded-xl border text-sm ${inputBorderClass("name")}`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="quote-company"
                      required
                      value={formData.company}
                      onChange={handleChange("company")}
                      placeholder="e.g. Gulf Fresh Produce Trading LLC"
                      className={`form-input w-full px-4 py-3 rounded-xl border text-sm ${inputBorderClass("company")}`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="quote-email"
                      required
                      value={formData.email}
                      onChange={handleChange("email")}
                      placeholder="buyer@company.com"
                      className={`form-input w-full px-4 py-3 rounded-xl border text-sm ${inputBorderClass("email")}`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="quote-phone"
                      required
                      value={formData.phone}
                      onChange={handleChange("phone")}
                      placeholder="+971 50 123 4567"
                      className={`form-input w-full px-4 py-3 rounded-xl border text-sm ${inputBorderClass("phone")}`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Destination Country / Port <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="quote-country"
                      required
                      value={formData.country}
                      onChange={handleChange("country")}
                      placeholder="e.g. UAE (Jebel Ali Port)"
                      className={`form-input w-full px-4 py-3 rounded-xl border text-sm ${inputBorderClass("country")}`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Product Selection <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="quote-product"
                      required
                      value={formData.product}
                      onChange={handleChange("product")}
                      className={`form-input w-full px-4 py-3 rounded-xl border text-sm bg-white ${inputBorderClass("product")}`}
                    >
                      <option value="">-- Select Product --</option>
                      <option value="Semi-Husked Coconut">Coconut (Semi-Husked / Fresh / Mature)</option>
                      <option value="Kundu Milagai">Kundu Milagai (Ramanathapuram Round Chilli)</option>
                      <option value="Fresh Vegetables">Fresh Vegetables (Onions, Drumstick, Okra, Green Chilli)</option>
                      <option value="Whole Spices">Spices &amp; Masalas</option>
                      <option value="Coconut Products">Coconut Products (Copra, Coir, Desiccated)</option>
                      <option value="Mixed Agro Container">Mixed Agro / Custom Import-Export Order</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Required Quantity <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="quote-quantity"
                      required
                      value={formData.quantity}
                      onChange={handleChange("quantity")}
                      placeholder="e.g. 1 x 40ft HC Container (27 MT) or 500 Boxes"
                      className={`form-input w-full px-4 py-3 rounded-xl border text-sm ${inputBorderClass("quantity")}`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Preferred Trade Term
                    </label>
                    <select
                      id="quote-incoterm"
                      value={formData.incoterm}
                      onChange={handleChange("incoterm")}
                      className="form-input w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white"
                    >
                      <option value="FOB Tuticorin / Chennai">FOB (Tuticorin / Chennai Port)</option>
                      <option value="CIF Destination Port">CIF (Cost, Insurance &amp; Freight)</option>
                      <option value="CFR">CFR (Cost &amp; Freight)</option>
                      <option value="Air Freight">Air Cargo (Perishable Vegetables)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Packaging &amp; Specification Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="quote-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange("message")}
                    placeholder="Specify preferred nut weight, bag size (25/30 nuts per bag), target delivery schedule, or custom labeling..."
                    className={`form-input w-full px-4 py-3 rounded-xl border text-sm ${inputBorderClass("message")}`}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-extrabold shadow-md flex items-center justify-center gap-2"
                >
                  <span>Submit Quotation Request</span>
                  <span>→</span>
                </button>
              </form>
            </div>

            {/* Right Direct Export Desk Info */}
            <div className="lg:col-span-4 space-y-6 reveal-right">
              <div className="bg-[#0b2c52] text-white p-7 rounded-2xl shadow-lg">
                <h3 className="text-lg font-extrabold text-[#facc15]">Direct Export Desk</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Speak directly with our sourcing &amp; logistics coordinators in Madurai, India.
                </p>

                <div className="mt-6 space-y-4 text-sm">
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-bold">Phone &amp; WhatsApp</div>
                    <a href="tel:+919043764490" className="font-bold text-white hover:text-[#facc15] text-base">
                      +91 90437 64490
                    </a>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-bold">Export Inquiries Email</div>
                    <a
                      href="mailto:mvdimportexport@gmail.com"
                      className="font-bold text-white hover:text-[#facc15] break-all"
                    >
                      mvdimportexport@gmail.com
                    </a>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-bold">Registered Office</div>
                    <p className="text-slate-200 text-xs leading-relaxed mt-0.5">
                      2 Bar / 467, Madurai Mandapam Main Road, Siva Siva Nagar, Thiruppuvanam - 630611, Tamil Nadu, India
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/15 text-xs text-slate-300 space-y-1">
                    <div>
                      <span className="text-[#facc15] font-bold">IEC Code:</span> EFDPM4929G
                    </div>
                    <div>
                      <span className="text-[#facc15] font-bold">GSTIN:</span> 33EFDPM4929G2ZE
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                <h4 className="font-extrabold text-[#0b2c52] text-base">Standard Container Loadings</h4>
                <ul className="mt-3 space-y-2.5 text-xs text-slate-600">
                  <li className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="font-semibold">40ft HC (Semi-Husked Coconut)</span>
                    <span className="font-bold text-[#0b2c52]">~2,000 Bags (27 MT)</span>
                  </li>
                  <li className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="font-semibold">20ft FCL (Semi-Husked Coconut)</span>
                    <span className="font-bold text-[#0b2c52]">~950 Bags (13 MT)</span>
                  </li>
                  <li className="flex justify-between py-1.5">
                    <span className="font-semibold">40ft Reefer (Fresh Vegetables)</span>
                    <span className="font-bold text-[#0b2c52]">18–22 MT</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
