'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export function CtaSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-red-600 via-rose-700 to-[#121927] text-white p-10 sm:p-16 text-center space-y-7 shadow-2xl shadow-red-600/25 relative overflow-hidden border border-red-500/30">
        {/* Glow ambient background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/40 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Join Hundreds of Thriving Indian Businesses</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Ready to Manage Your Business Smarter?
          </h2>

          <p className="text-sm sm:text-base text-rose-100 font-normal leading-relaxed">
            Start using Khaki Karobar today. Everything you need for billing, inventory, GST compliance, and growth — in one place.
          </p>
        </div>

        <div className="relative z-10 pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/register"
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 font-black text-xs sm:text-sm rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2.5 group"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 text-red-600 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-black/40 hover:bg-black/60 text-white border border-white/20 font-bold text-xs sm:text-sm rounded-2xl transition-all shadow-sm"
          >
            <span>Contact Us</span>
          </Link>
        </div>

        <div className="relative z-10 pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-rose-200">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-white" /> 14-day free trial
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-white" /> No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-white" /> Instant WhatsApp onboarding
          </span>
        </div>
      </div>
    </section>
  );
}
