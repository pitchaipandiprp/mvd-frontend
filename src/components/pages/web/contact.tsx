"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useWebToast } from "@/context/web-toast-context";

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const { showToast } = useWebToast();
  const [formData, setFormData] = useState<ContactFormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | MVD Import and Exporter - Thiruppuvanam, Madurai";
  }, []);

  const handleChange =
    (field: keyof ContactFormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (errors[field] && value.trim()) {
        setErrors((prev) => ({ ...prev, [field]: false }));
      }
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      subject: !formData.subject.trim(),
      message: !formData.message.trim(),
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      showToast("Please fill in all required fields before sending.", true);
      return;
    }

    setSubmitted(true);
    showToast("Message received! We will connect with you shortly.");
    setFormData(INITIAL_FORM);
  };

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
                2 Bar / 467, Madurai Mandapam Main Road, Siva Siva Nagar, Thiruppuvanam - 630611, Tamil Nadu, India
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
                <a href="tel:+919043764490" className="font-bold text-[#0b2c52] hover:text-amber-600 text-base">
                  +91 90437 64490
                </a>
              </p>
              <p className="text-xs text-slate-500 mt-1">Mon – Sat: 9:00 AM – 7:00 PM IST</p>
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
                  href="mailto:mvdimportexport@gmail.com"
                  className="font-bold text-[#0b2c52] hover:text-amber-600 break-all"
                >
                  mvdimportexport@gmail.com
                </a>
              </p>
              <p className="text-xs text-slate-500 mt-1">IEC: EFDPM4929G | GST: 33EFDPM4929G2ZE</p>
            </div>
          </div>

          {/* Contact Form + Embedded Google Map */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Contact Form */}
            <div className="lg:col-span-6 bg-white p-7 sm:p-9 rounded-2xl shadow-md border border-slate-100 reveal-left">
              <h2 className="text-2xl font-extrabold text-[#0b2c52]">Send Us a Direct Message</h2>
              <p className="text-sm text-slate-500 mt-1">
                Have questions about minimum order quantities, port schedules, or product samples? Write to us below.
              </p>

              {submitted && (
                <div
                  id="contact-success-banner"
                  className="mt-5 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm font-medium"
                >
                  ✓ Your message has been sent to MVD Import and Exporter. We will reply shortly!
                </div>
              )}

              <form id="main-contact-form" className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange("name")}
                      placeholder="Full Name"
                      className={`form-input w-full px-4 py-3 rounded-xl border text-sm ${
                        errors.name ? "border-red-500" : "border-slate-300"
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange("email")}
                      placeholder="you@company.com"
                      className={`form-input w-full px-4 py-3 rounded-xl border text-sm ${
                        errors.email ? "border-red-500" : "border-slate-300"
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange("phone")}
                      placeholder="+91 98765 43210"
                      className="form-input w-full px-4 py-3 rounded-xl border border-slate-300 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Subject *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange("subject")}
                      placeholder="Export Inquiry / Partnership"
                      className={`form-input w-full px-4 py-3 rounded-xl border text-sm ${
                        errors.subject ? "border-red-500" : "border-slate-300"
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange("message")}
                    placeholder="Write your message here..."
                    className={`form-input w-full px-4 py-3 rounded-xl border text-sm ${
                      errors.message ? "border-red-500" : "border-slate-300"
                    }`}
                  ></textarea>
                </div>

                <button type="submit" className="btn-gold px-7 py-3.5 rounded-xl text-sm font-extrabold shadow-sm">
                  Send Message →
                </button>
              </form>
            </div>

            {/* Google Maps Section */}
            <div className="lg:col-span-6 bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 flex flex-col reveal-right">
              <div className="p-5 bg-[#0b2c52] text-white flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-base">Our Location — Thiruppuvanam, Madurai</h3>
                  <p className="text-xs text-slate-300">Madurai Mandapam Main Road, Tamil Nadu 630611</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Thiruppuvanam,+Madurai,+Tamil+Nadu+630611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#facc15] hover:underline"
                >
                  Open in Maps ↗
                </a>
              </div>
              <div className="flex-1 min-h-[340px]">
                <iframe
                  title="MVD Import and Exporter Location Map"
                  src="https://www.google.com/maps?q=Thiruppuvanam,+Madurai,+Tamil+Nadu+630611&output=embed"
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
