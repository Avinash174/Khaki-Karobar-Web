'use client';

import React from 'react';
import Link from 'next/link';
import {
  Building2,
  ShieldCheck,
  Zap,
  Heart,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { CtaSection } from '../../components/CtaSection';

export default function AboutPage() {
  const pillars = [
    {
      title: 'Engineered for Speed',
      icon: Zap,
      desc: 'Sub-second invoice creation and instant barcode lookups designed for fast retail counters and busy wholesale desks.',
    },
    {
      title: '100% Indian Compliance',
      icon: ShieldCheck,
      desc: 'Native GSTIN validation, HSN tracking, state-wise tax computation, and one-click GSTR-1/3B filing returns.',
    },
    {
      title: 'Transparent Simplicity',
      icon: Heart,
      desc: 'Eliminating bloated ERP complexity. Clean, modern interface anyone can learn in under 10 minutes without training.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-red-600 selection:text-white transition-colors">
      <Navbar />

      <main className="flex-1 py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-20">
        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200/80 dark:border-red-900 text-red-600 dark:text-red-400 text-xs font-bold shadow-sm">
            <Building2 className="w-3.5 h-3.5" />
            <span>About Khaki Karobar</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Empowering Indian Businesses to Manage & Grow Smarter
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Khaki Karobar was born with a single mission: to replace archaic desktop software, slow paper bahi-khatas, and complex spreadsheets with an elegant, modern business operating system.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 text-left">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              From Pune to Every Business Across India
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Founded by <strong>Khaki KrypTech (India) Pvt. Ltd.</strong> in Pune, Maharashtra, we saw that Indian retail and wholesale merchants were forced to choose between rigid, obsolete 90s accounting software or prohibitively expensive Western ERPs.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We built Khaki Karobar from the ground up tailored to the realities of Indian business: sudden peak billing rushes, customer WhatsApp habit, complex GST regulations, and multi-staff branch operations.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-semibold text-slate-500">
              <MapPin className="w-4 h-4 text-red-600 shrink-0" />
              <span>Headquartered at Baner Business Hub, Pune, Maharashtra - 411045</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-[#121927] border-2 border-slate-200 dark:border-[#222E42] shadow-xl space-y-6 text-left">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Our Operational Principles
              </h3>
              <div className="space-y-4">
                {[
                  'Zero Downtime Cloud Architecture backed by automatic redundant backups',
                  'Privacy-first: Your business revenue and customer data are never sold or shared',
                  'Continuous statutory updates as GST rules and tax slabs evolve',
                  'Real human customer support available via phone, WhatsApp, and remote assistance',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-[#121927] border border-slate-200/80 dark:border-[#222E42] shadow-sm hover:border-red-500/50 hover:shadow-xl transition-all space-y-3 text-left"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950/40 text-red-600 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
