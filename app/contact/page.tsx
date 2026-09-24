'use client';

import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ConsultationForm } from '../../components/ConsultationForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-red-600 selection:text-white transition-colors">
      <Navbar />

      <main className="flex-1 py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200/80 dark:border-red-900 text-red-600 dark:text-red-400 text-xs font-bold shadow-sm">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect with Us</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            We are Here to Help Your Business Thrive
          </h1>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Have questions about GST compliance, hardware printer compatibility, or custom multi-branch setups? Reach out directly to our engineering team.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-[#121927] border border-slate-200/80 dark:border-[#222E42] shadow-sm text-left space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Phone Support</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white font-mono mt-0.5">+91 98765 43210</p>
              <p className="text-[11px] text-slate-500 mt-1">Mon – Sat, 9:00 AM – 7:00 PM IST</p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#121927] border border-slate-200/80 dark:border-[#222E42] shadow-sm text-left space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp Business Desk</p>
              <p className="text-sm font-bold text-emerald-600 font-mono mt-0.5">+91 98765 43210</p>
              <p className="text-[11px] text-slate-500 mt-1">Instant chat & screen assistance</p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#121927] border border-slate-200/80 dark:border-[#222E42] shadow-sm text-left space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Official Email Inquiries</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">contact@khaki.in</p>
              <p className="text-[11px] text-slate-500 mt-1">Response within 2 business hours</p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#121927] border border-slate-200/80 dark:border-[#222E42] shadow-sm text-left space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Engineering Headquarters</p>
              <p className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">Baner Business Hub, Pune</p>
              <p className="text-[11px] text-slate-500 mt-1">Maharashtra - 411045, India</p>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Consultation Form */}
        <ConsultationForm />
      </main>

      <Footer />
    </div>
  );
}
