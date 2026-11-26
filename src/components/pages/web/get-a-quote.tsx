"use client";
import type { Metadata } from "next";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, MoveRight, RibbonIcon } from "lucide-react";
import { sweetalert } from "@/utils/sweetalert";

export const metadata: Metadata = {
  title: {
    default: "Get a Quote | MVD Import and Exporter - Bulk Export Inquiry",
    template: "%s | MVD Import & Export",
  },
  description:
    "MVD Import & Export - Your trusted partner for quality agricultural products and international export services.",
};


interface FormFields {
  customer_name: string;
  company_name: string;
  email_id: string;
  mobile_number: string;
  country: string;
  product: string;
  quantity: string;
  trade_term: string;
  message: string;
}

const initialForm: FormFields = {
  customer_name: "",
  company_name: "",
  email_id: "",
  mobile_number: "",
  country: "",
  product: "",
  quantity: "",
  trade_term: "FOB Tuticorin / Chennai",
  message: "",
};

export default function GetAQuotePage() {

  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormFields>(initialForm);
  const [error, setError] = useState<Partial<Record<keyof FormFields, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const nameRegex = /^[a-zA-Z0-9 ]*$/;
  const charRegex = /^[a-zA-Z ]*$/;
  const decimalRegex = /^\d*\.?\d{0,2}$/;
  const mobileRegex = /^[0-9+\-\s]*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  useEffect(() => {
    const productParam = searchParams.get("product");
    if (productParam) {
      updateField("product", productParam);
    }
  }, [searchParams]);



  const updateField = (field: keyof FormFields, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setError((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError({});

    if (!form.customer_name.trim()) {
      setError({ customer_name: "Please enter the customer name" });
      return;
    }

    if (!nameRegex.test(form.customer_name)) {
      setError({ customer_name: "Please enter a valid customer name" });
      return;
    }

    if (!form.company_name.trim()) {
      setError({ company_name: "Please enter the company name" });
      return;
    }

    if (!nameRegex.test(form.company_name)) {
      setError({ company_name: "Please enter a valid company name" });
      return;
    }

    if (!form.email_id.trim()) {
      setError({ email_id: "Please enter the email address" });
      return;
    }

    if (!emailRegex.test(form.email_id)) {
      setError({ email_id: "Please enter a valid email address" });
      return;
    }

    if (!form.mobile_number.trim()) {
      setError({ mobile_number: "Please enter the mobile number" });
      return;
    }

    if (!mobileRegex.test(form.mobile_number)) {
      setError({ mobile_number: "Please enter a valid mobile number" });
      return;
    }

    if (!form.country.trim()) {
      setError({ country: "Please enter the destination country" });
      return;
    }

    if (!charRegex.test(form.country)) {
      setError({ country: "Please enter a valid country name" });
      return;
    }

    if (!form.product.trim()) {
      setError({ product: "Please select the product" });
      return;
    }

    if (!form.quantity.trim()) {
      setError({ quantity: "Please enter the quantity" });
      return;
    }

    if (!form.message.trim()) {
      setError({ message: "Please enter the packaging and specification requirements" });
      return;
    }

    setSubmitted(true);

    try {
      // API integration here
      sweetalert.success(`Thank you! Your export quotation request has been logged. Our export manager will email you a formal proforma quote shortly`);
      setForm(initialForm);
    } catch (error) {
      console.error("Quotation submission failed:", error);
    } finally {
      setSubmitted(false);
    }
  };

  const inputBorderClass = (field: keyof FormFields) => error[field] ? "border-red-500 ring-2 ring-red-200" : "border-slate-300";

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


              <form id="quote-request-form" className="mt-7 space-y-5" onSubmit={handleSubmit} autoComplete="off">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Customer Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="quote-name"
                      required
                      placeholder="e.g. Ahmed Al-Mansoor"
                      className={`form-input w-full px-4 py-3 rounded-xl border text-sm ${inputBorderClass("customer_name")}`}
                      value={form.customer_name}
                      onChange={(event) => {
                        const value = event.target.value;
                        if (nameRegex.test(value)) {
                          updateField("customer_name", value);
                        }
                      }}
                    />
                    {error.customer_name && (
                      <p className="text-xs text-red-500 mt-1">{error.customer_name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="quote-company"
                      required
                      placeholder="e.g. Gulf Fresh Produce Trading LLC"
                      className={`form-input w-full px-4 py-3 rounded-xl border text-sm ${inputBorderClass("company_name")}`}
                      value={form.company_name}
                      onChange={(event) => {
                        const value = event.target.value;
                        if (nameRegex.test(value)) {
                          updateField("company_name", value);
                        }
                      }}
                    />
                    {error.company_name && (
                      <p className="text-xs text-red-500 mt-1">{error.company_name}</p>
                    )}
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
                      placeholder="buyer@company.com"
                      className={`form-input w-full px-4 py-3 rounded-xl border text-sm ${inputBorderClass("email_id")}`}
                      value={form.email_id}
                      onChange={(event) => updateField("email_id", event.target.value)}
                    />
                    {error.email_id && (
                      <p className="text-xs text-red-500 mt-1">{error.email_id}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="quote-phone"
                      required
                      placeholder="+971 50 123 4567"
                      className={`form-input w-full px-4 py-3 rounded-xl border text-sm ${inputBorderClass("mobile_number")}`}
                      value={form.mobile_number}
                      onChange={(event) => {
                        const value = event.target.value;
                        if (mobileRegex.test(value)) {
                          updateField("mobile_number", value);
                        }
                      }}
                    />
                    {error.mobile_number && (
                      <p className="text-xs text-red-500 mt-1">{error.mobile_number}</p>
                    )}
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
                      placeholder="e.g. UAE (Jebel Ali Port)"
                      className={`form-input w-full px-4 py-3 rounded-xl border text-sm ${inputBorderClass("country")}`}
                      value={form.country}
                      onChange={(event) => {
                        const value = event.target.value;
                        if (charRegex.test(value)) {
                          updateField("country", value);
                        }
                      }}
                    />
                    {error.country && (
                      <p className="text-xs text-red-500 mt-1">{error.country}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Product Selection <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="quote-product"
                      required
                      className={`form-input w-full px-4 py-3 rounded-xl border text-sm bg-white ${inputBorderClass("product")}`}
                      value={form.product}
                      onChange={(event) => {
                        updateField("product", event.target.value);
                      }}
                    >
                      <option value="">-- Select Product --</option>
                      <option value="Semi-Husked Coconut">Coconut (Semi-Husked / Fresh / Mature)</option>
                      <option value="Pollachi Coconut">Pollachi Coconut</option>
                      <option value="Theni Coconut">Theni Coconut</option>
                      <option value="Andhra Red Chilli">Andhra Red Chilli</option>
                      <option value="Ramanathapuram Kundu Milagai">Kundu Milagai (Ramanathapuram Round Chilli)</option>
                      <option value="Coconut Products">Coconut Products (Copra, Coir, Desiccated)</option>
                    </select>

                    {error.product && (
                      <p className="text-xs text-red-500 mt-1">{error.product}</p>
                    )}
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
                      placeholder="e.g. 1 x 40ft HC Container (27 MT) or 500 Boxes"
                      className={`form-input w-full px-4 py-3 rounded-xl border text-sm ${inputBorderClass("quantity")}`}
                      value={form.quantity}
                      onChange={(event) => {
                        const value = event.target.value;
                        if (decimalRegex.test(value)) {
                          updateField("quantity", value);
                        }
                      }}
                    />
                    {error.quantity && (
                      <p className="text-xs text-red-500 mt-1">{error.quantity}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Preferred Trade Term
                    </label>
                    <select
                      id="quote-trade_term"
                      className="form-input w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white"
                      value={form.trade_term}
                      onChange={(event) => {
                        updateField("trade_term", event.target.value);
                      }}
                    >
                      <option value="FOB Tuticorin / Chennai">FOB (Tuticorin / Chennai Port)</option>
                      <option value="CIF Destination Port">CIF (Cost, Insurance &amp; Freight)</option>
                      <option value="CFR">CFR (Cost &amp; Freight)</option>
                      <option value="Air Freight">Air Cargo (Perishable Vegetables)</option>
                    </select>
                    {error.trade_term && (
                      <p className="text-xs text-red-500 mt-1">{error.trade_term}</p>
                    )}
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
                    placeholder="Specify preferred nut weight, bag size (25/30 nuts per bag), target delivery schedule, or custom labeling..."
                    className={`form-input w-full px-4 py-3 rounded-xl border text-sm ${inputBorderClass("message")}`}
                    value={form.message}
                    onChange={(event) => {
                      updateField("message", event.target.value);
                    }}
                  ></textarea>
                  {error.message && (
                    <p className="text-xs text-red-500 mt-1">{error.message}</p>
                  )}
                </div>

                {/* {Object.values(error).some(Boolean) && (
                  <div className="md:col-span-12 text-sm text-rose-600">
                    {Object.values(error).find(Boolean)}
                  </div>
                )} */}

                <button
                  type="submit"
                  disabled={submitted}
                  className="btn-gold w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-extrabold shadow-md flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span>{submitted ? "Submitting..." : "Submit Quotation Request"}</span>
                  {!submitted && <span className="mt-1"><ArrowRight height={18} /></span>}
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
                    <span className="font-bold text-[#0b2c52]">18-22 MT</span>
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
