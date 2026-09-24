'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Building2,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { ThemeToggle } from '../components/ThemeProvider';
import { DashboardPreviewMockup } from '../components/DashboardPreviewMockup';
import { TrustSection } from '../components/TrustSection';
import { FeatureShowcase } from '../components/FeatureShowcase';
import { PricingSection } from '../components/PricingSection';
import { ConsultationForm } from '../components/ConsultationForm';

export default function WebsiteHomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-red-600 selection:text-white transition-colors duration-200">
      {/* -------------------------------------------------------------
          NAVBAR
      ------------------------------------------------------------- */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#090D16]/80 border-b border-slate-200/80 dark:border-[#222E42] transition-colors">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/30">
              <span className="text-white font-extrabold text-2xl tracking-wider">K</span>
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                KHAKI <span className="text-red-600">KAROBARI</span>
              </span>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono">
                By Khaki KrypTech
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <a href="#features" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Features
            </a>
            <a href="#pricing" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Pricing
            </a>
            <a href="#contact" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Enterprise Consultation
            </a>
          </nav>

          {/* Controls: Theme Toggle & Admin Portal Link */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="http://localhost:3000"
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-wide rounded-xl shadow-lg shadow-red-600/30 transition-all flex items-center gap-2"
            >
              <span>Launch Admin Portal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-[#121927] border-b border-slate-200 dark:border-[#222E42] px-6 py-4 space-y-3 text-sm">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700 dark:text-slate-300 font-semibold">
              Features
            </a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700 dark:text-slate-300 font-semibold">
              Pricing
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-700 dark:text-slate-300 font-semibold">
              Enterprise Consultation
            </a>
            <a
              href="http://localhost:3000"
              className="block text-center py-2.5 bg-red-600 text-white font-bold text-xs rounded-xl shadow-md"
            >
              Open Admin Portal
            </a>
          </div>
        )}
      </header>

      {/* -------------------------------------------------------------
          HERO SECTION
      ------------------------------------------------------------- */}
      <section className="relative pt-20 pb-28 px-6 overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 text-xs font-bold shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next-Generation Indian Business OS & GST Platform</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Run Your Business. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 dark:from-red-500 dark:via-rose-500 dark:to-amber-500">
                Smarter. Simpler. Faster.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl font-normal leading-relaxed">
              Billing, inventory, accounting and business management — all in one powerful platform.
              Instant WhatsApp invoices, atomic stock updates, and automated GST compliance.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="http://localhost:3000"
                className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl shadow-xl shadow-red-600/30 transition-all flex items-center justify-center gap-2.5"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#features"
                className="px-8 py-3.5 bg-white dark:bg-[#121927] hover:bg-slate-100 dark:hover:bg-[#1A2333] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-[#222E42] font-semibold text-sm rounded-xl transition-all shadow-sm text-center"
              >
                Explore Features
              </a>
            </div>

            <div className="pt-4 flex items-center gap-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Free 14-day trial
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Zero credit card needed
              </span>
            </div>
          </div>

          {/* Right Hero Realistic Mockup Visual */}
          <div className="lg:col-span-5">
            <DashboardPreviewMockup />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          TRUST / CATEGORIES SECTION
      ------------------------------------------------------------- */}
      <TrustSection />

      {/* -------------------------------------------------------------
          FEATURE SHOWCASE (ALTERNATING LARGE SECTIONS)
      ------------------------------------------------------------- */}
      <FeatureShowcase />

      {/* -------------------------------------------------------------
          PRICING
      ------------------------------------------------------------- */}
      <PricingSection />

      {/* -------------------------------------------------------------
          CONSULTATION LEAD FORM
      ------------------------------------------------------------- */}
      <ConsultationForm />

      {/* -------------------------------------------------------------
          STRONG FINAL CTA
      ------------------------------------------------------------- */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-red-600 via-rose-700 to-red-800 text-white p-12 sm:p-16 text-center space-y-6 shadow-2xl shadow-red-600/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full pointer-events-none" />

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Ready to run your business better?
          </h2>

          <p className="text-base sm:text-lg text-rose-100 max-w-xl mx-auto">
            Everything you need to manage, grow and understand your enterprise in one unified ecosystem.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="http://localhost:3000"
              className="px-8 py-4 bg-white text-slate-900 font-extrabold text-sm rounded-xl shadow-xl hover:bg-slate-100 transition-all flex items-center gap-2"
            >
              <span>Get Started with Khaki Karobari</span>
              <ArrowRight className="w-4 h-4 text-red-600" />
            </a>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          FOOTER
      ------------------------------------------------------------- */}
      <footer className="bg-white dark:bg-[#070A11] border-t border-slate-200/80 dark:border-[#222E42] py-16 px-6 text-xs text-slate-500 transition-colors">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 text-left">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center font-black text-white text-sm">
                K
              </div>
              <span className="font-extrabold text-slate-900 dark:text-white text-base">
                KHAKI | KrypTech™
              </span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Khaki Karobari is engineered by Khaki KrypTech (India) Pvt. Ltd., Pune, Maharashtra.
              A unified operating system for Indian business billing, accounting, and compliance.
            </p>
          </div>

          <div>
            <p className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-3">Product</p>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-red-600">Smart Invoicing</a></li>
              <li><a href="#features" className="hover:text-red-600">Live Inventory</a></li>
              <li><a href="#features" className="hover:text-red-600">Double-Entry P&L</a></li>
              <li><a href="#features" className="hover:text-red-600">GSTR-1 & 3B Exports</a></li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-3">Company</p>
            <ul className="space-y-2">
              <li><a href="#contact" className="hover:text-red-600">About Khaki KrypTech</a></li>
              <li><a href="#contact" className="hover:text-red-600">Contact Sales</a></li>
              <li><a href="#pricing" className="hover:text-red-600">Pricing Plans</a></li>
              <li><a href="http://localhost:3000" className="hover:text-red-600">Admin Portal</a></li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-3">Legal & Security</p>
            <ul className="space-y-2">
              <li><span className="hover:text-red-600">Privacy Policy</span></li>
              <li><span className="hover:text-red-600">Terms of Service</span></li>
              <li><span className="hover:text-red-600">GST Statutory Rules</span></li>
              <li><span className="hover:text-red-600">Data Security Standards</span></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200/80 dark:border-[#1E293B] flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 Khaki KrypTech (India) Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-slate-700 dark:text-slate-300">White • Red • Black</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
