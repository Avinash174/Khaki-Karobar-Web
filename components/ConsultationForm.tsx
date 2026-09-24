'use client';

import React, { useState } from 'react';
import { CheckCircle2, Send, PhoneCall, Mail, MapPin } from 'lucide-react';

export function ConsultationForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [business, setBusiness] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setName('');
    setPhone('');
    setBusiness('');
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Contact Info */}
        <div className="space-y-6 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 dark:bg-red-950/60 px-3 py-1 rounded-full border border-red-200 dark:border-red-900">
            Enterprise Assistance
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Consult with our Product Specialists
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            Need a tailored multi-branch deployment, live migration from legacy software, or CA integration? Speak directly with our engineering and operations team in Pune.
          </p>

          <div className="space-y-3 pt-2 text-xs text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-red-500/10 text-red-600 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <span>Khaki KrypTech (India) Pvt. Ltd., Pune, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-red-500/10 text-red-600 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <span>contact@khaki.com • support@khakikarobar.in</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-red-500/10 text-red-600 flex items-center justify-center shrink-0">
                <PhoneCall className="w-4 h-4" />
              </div>
              <span>+91 98765 43210 (Toll-Free Enterprise Line)</span>
            </div>
          </div>
        </div>

        {/* Form Box */}
        <div className="bg-white dark:bg-[#121927] border border-slate-200 dark:border-[#222E42] rounded-3xl p-8 shadow-xl text-left">
          {submitted ? (
            <div className="py-12 text-center space-y-3 animate-in zoom-in-95">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                Request Submitted Successfully!
              </h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Our Khaki Karobar specialist will connect with you on WhatsApp within 15 minutes.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Avinash Magar"
                  className="w-full bg-slate-50 dark:bg-[#090D16] border border-slate-200 dark:border-[#2A364F] rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Mobile Number (with WhatsApp)
                </label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 98XXXXXXXX"
                  className="w-full bg-slate-50 dark:bg-[#090D16] border border-slate-200 dark:border-[#2A364F] rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Business Name & City
                </label>
                <input
                  type="text"
                  required
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  placeholder="e.g. KrypTech Wholesale, Pune"
                  className="w-full bg-slate-50 dark:bg-[#090D16] border border-slate-200 dark:border-[#2A364F] rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs shadow-lg shadow-red-600/30 transition-all"
              >
                Schedule Free Demo Consultation
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
