"use client";
import type { Metadata } from "next";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { sweetalert } from "@/utils/sweetalert";
import { TextCaptcha, useTextCaptcha } from "@/components/common/captcha/text-captcha";
import { companyInfo } from "@/utils/constants";

export const metadata: Metadata = {
  title: {
    default: "Contact Us | MVD Import and Exporter - Thiruppuvanam, Madurai",
    template: "%s | MVD Import & Export",
  },
  description:
    "MVD Import & Export - Your trusted partner for quality agricultural products and international export services.",
};

const MAIL_API_BASE_URL = process.env.NEXT_PUBLIC_MAIL_API_BASE_URL || "https://yourdomain.com/mvd-backend";
const CONTACT_MAIL_ENDPOINT = `${MAIL_API_BASE_URL}/send-contact-mail.php`;

interface FormFields {
  user_name: string;
  email_id: string;
  mobile_number: string;
  subject: string;
  message: string;
  captcha: string;
}

const initialForm: FormFields = {
  user_name: "",
  email_id: "",
  mobile_number: "",
  subject: "",
  message: "",
  captcha: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormFields>(initialForm);
  const [error, setError] = useState<Partial<Record<keyof FormFields, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const { canvasRef, refreshCaptcha, verifyCaptcha } = useTextCaptcha();

  const nameRegex = /^[a-zA-Z0-9 ]*$/;
  const mobileRegex = /^[0-9+\-\s]*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

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

    if (!form.user_name.trim()) {
      setError({ user_name: "Please enter your name" });
      return;
    }

    if (!nameRegex.test(form.user_name)) {
      setError({ user_name: "Please enter a valid name" });
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

    if (!form.subject.trim()) {
      setError({ subject: "Please enter the subject" });
      return;
    }

    if (!form.message.trim()) {
      setError({ message: "Please enter your message" });
      return;
    }

    if (!form.captcha.trim()) {
      setError({ captcha: "Please enter the captcha code" });
      return;
    }

    if (!verifyCaptcha(form.captcha)) {
      setForm((prev) => ({ ...prev, captcha: "" }));
      setError({ captcha: "Invalid captcha code. Please try again." });
      refreshCaptcha();
      return;
    }

    setSubmitted(true);

    try {
      const { captcha: _captcha, ...payload } = form;
      const response = await fetch(CONTACT_MAIL_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        if (data?.errors && typeof data.errors === "object") {
          console.error(data.errors);
          sweetalert.error(
            "Network error while sending your message. Please check your connection and try again."
          );
        }
        sweetalert.error(
          data?.message || "Unable to send your message right now. Please try again later."
        );
        setForm((prev) => ({ ...prev, captcha: "" }));
        refreshCaptcha();
        return;
      }

      sweetalert.success(
        data.message ||
        "Thank you! Your message has been sent to MVD Import and Exporter. We will connect with you shortly."
      );
      setForm(initialForm);
      refreshCaptcha();
    } catch (err) {
      console.error("Contact submission failed:", err);
      sweetalert.error(
        "Network error while sending your message. Please check your connection and try again."
      );
      setForm((prev) => ({ ...prev, captcha: "" }));
      refreshCaptcha();
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
          <div className="text-xs font-bold uppercase tracking-widest text-[#facc15] mb-2">Home / Contact Us</div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Get in Touch with MVD</h1>
          <p className="mt-3 text-slate-200 max-w-2xl text-sm sm:text-base">
            Reach out for international trade partnerships, sample shipments, port logistics, or supplier collaborations.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS + FORM + MAP */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 3 Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 reveal">
              <div className="w-11 h-11 rounded-xl bg-[#0b2c52] text-[#facc15] flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-base font-extrabold text-[#0b2c52]">Head Office &amp; Packhouse</h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {companyInfo.fullAddress}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 reveal">
              <div className="w-11 h-11 rounded-xl bg-[#0b2c52] text-[#22c55e] flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h2 className="text-base font-extrabold text-[#0b2c52]">Call / WhatsApp Trade Desk</h2>
              <p className="text-sm text-slate-600 mt-2">
                <a href={companyInfo.phoneHref} className="font-bold text-[#0b2c52] hover:text-amber-600 text-base">
                  {companyInfo.phone}
                </a>
              </p>
              <p className="text-xs text-slate-500 mt-1">{companyInfo.businessHours}</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 reveal">
              <div className="w-11 h-11 rounded-xl bg-[#0b2c52] text-[#facc15] flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h2 className="text-base font-extrabold text-[#0b2c52]">Email &amp; Trade Registration</h2>
              <p className="text-sm mt-2">
                <a
                  href={companyInfo.emailHref}
                  className="font-bold text-[#0b2c52] hover:text-amber-600 break-all"
                >
                  {companyInfo.email}
                </a>
              </p>
              <p className="text-xs text-slate-500 mt-1">IEC: {companyInfo.iecNo} | GST: {companyInfo.gstNo}</p>
            </div>
          </div>

          {/* Contact Form + Embedded Google Map */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Form Card */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-10 shadow-md border border-slate-100 reveal-left">
              <h2 className="text-2xl font-extrabold text-[#0b2c52]">Send Us a Direct Message</h2>
              <p className="text-sm text-slate-500 mt-1">
                Fields marked with <span className="text-red-500">*</span> are required. Have questions about minimum
                order quantities, port schedules, or product samples? Write to us below.
              </p>

              <form id="main-contact-form" className="mt-7 space-y-5" onSubmit={handleSubmit} autoComplete="off">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-user_name"
                      name="user_name"
                      placeholder="Full Name"
                      className={`form-input w-full px-4 py-3 rounded-xl border text-sm ${inputBorderClass("user_name")}`}
                      value={form.user_name}
                      onChange={(event) => {
                        const value = event.target.value;
                        if (nameRegex.test(value)) {
                          updateField("user_name", value);
                        }
                      }}
                    />
                    {error.user_name && (
                      <p className="text-xs text-red-500 mt-1">{error.user_name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email_id"
                      name="email_id"
                      placeholder="you@company.com"
                      className={`form-input w-full px-4 py-3 rounded-xl border text-sm ${inputBorderClass("email_id")}`}
                      value={form.email_id}
                      onChange={(event) => updateField("email_id", event.target.value)}
                    />
                    {error.email_id && (
                      <p className="text-xs text-red-500 mt-1">{error.email_id}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-mobile_number"
                      name="mobile_number"
                      placeholder="+91 98765 43210"
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
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      placeholder="Export Inquiry / Partnership"
                      className={`form-input w-full px-4 py-3 rounded-xl border text-sm ${inputBorderClass("subject")}`}
                      value={form.subject}
                      onChange={(event) => updateField("subject", event.target.value)}
                    />
                    {error.subject && (
                      <p className="text-xs text-red-500 mt-1">{error.subject}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Write your message here..."
                    className={`form-input w-full px-4 py-3 rounded-xl border text-sm ${inputBorderClass("message")}`}
                    value={form.message}
                    onChange={(event) => updateField("message", event.target.value)}
                  ></textarea>
                  {error.message && (
                    <p className="text-xs text-red-500 mt-1">{error.message}</p>
                  )}
                </div>

                <TextCaptcha
                  id="contact-captcha"
                  name="captcha"
                  canvasRef={canvasRef}
                  value={form.captcha}
                  onChange={(value) => updateField("captcha", value)}
                  onRefresh={() => {
                    updateField("captcha", "");
                    refreshCaptcha();
                  }}
                  error={error.captcha}
                  inputBorderClass={inputBorderClass("captcha")}
                />

                <button
                  type="submit"
                  disabled={submitted}
                  className="btn-gold w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-extrabold shadow-md flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span>{submitted ? "Submitting..." : "Send Message"}</span>
                  {!submitted && (
                    <span className="mt-1">
                      <ArrowRight height={18} />
                    </span>
                  )}
                </button>
              </form>
            </div>

            {/* Google Maps Section */}
            <div className="lg:col-span-6 bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 flex flex-col reveal-right">
              <div className="p-5 bg-[#0b2c52] text-white flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-base">{companyInfo.mapTitle}</h3>
                  <p className="text-xs text-slate-300">{companyInfo.mapSubtitle}</p>
                </div>
                <a
                  href={companyInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#facc15] hover:underline"
                >
                  Open in Maps ↗
                </a>
              </div>
              <div className="flex-1 min-h-[340px]">
                <iframe
                  title={`${companyInfo.name} Location Map`}
                  src={companyInfo.mapEmbedUrl}
                  className="w-full h-full min-h-[340px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
