'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Receipt,
  Calculator,
  CreditCard,
  Package,
  TrendingUp,
  Store,
  FileText,
  BarChart3,
  ShoppingCart,
  Sparkles,
  Shield,
  Layers,
  Users,
  Coins,
  X,
} from 'lucide-react';
import { DashboardPreviewMockup } from './DashboardPreviewMockup';

export function HeroSection() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <section className="relative pt-12 sm:pt-20 pb-20 sm:pb-32 px-4 sm:px-6 overflow-hidden">
      {/* Background Soft Red & Ambient Glow Orbs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-red-600/10 dark:bg-red-600/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* -------------------------------------------------------------
          FLOATING BUSINESS ILLUSTRATION ELEMENTS (Section 3 & 5)
      ------------------------------------------------------------- */}
      {/* Floating Invoice Card 1 (Section 5) */}
      <div
        style={{ '--rot': '-4deg' } as any}
        className="hidden xl:block absolute top-28 right-[46%] z-20 animate-float-slow transition-transform hover:scale-105 pointer-events-auto cursor-default"
      >
        <div className="w-56 p-4 rounded-2xl bg-white dark:bg-[#121927] border-2 border-red-500/30 dark:border-red-500/40 shadow-2xl shadow-red-600/15 -rotate-3 backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2 mb-2">
            <div className="flex items-center gap-1.5">
              <span className="text-base">🧾</span>
              <div>
                <p className="text-[10px] font-black tracking-wider uppercase text-slate-400">INVOICE</p>
                <p className="text-xs font-mono font-bold text-slate-900 dark:text-white">INV-1024</p>
              </div>
            </div>
            <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 border border-emerald-200 dark:border-emerald-800">
              ✓ PAID
            </span>
          </div>
          <div className="space-y-1 text-[11px] text-slate-600 dark:text-slate-300">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-mono font-semibold">₹12,500</span>
            </div>
            <div className="flex justify-between text-slate-400 text-[10px]">
              <span>GST (18%)</span>
              <span className="font-mono">₹2,250</span>
            </div>
            <div className="flex justify-between font-bold text-xs text-slate-900 dark:text-white border-t border-slate-100 dark:border-slate-800 pt-1.5">
              <span>Total</span>
              <span className="font-mono text-red-600 dark:text-red-400">₹14,750</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Calculator Card 2 */}
      <div
        style={{ '--rot': '3deg' } as any}
        className="hidden lg:block absolute bottom-16 right-[38%] z-20 animate-float-delayed transition-transform hover:scale-105 pointer-events-auto cursor-default"
      >
        <div className="px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#121927] border border-slate-200/90 dark:border-[#222E42] shadow-xl flex items-center gap-2.5 rotate-3">
          <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-950/50 text-red-600 flex items-center justify-center text-sm font-bold">
            🧮
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-semibold">Auto GST & Margin</p>
            <p className="text-xs font-bold text-slate-900 dark:text-white font-mono">₹45,500 + 18% GST</p>
          </div>
        </div>
      </div>

      {/* Floating Payment Card 3 */}
      <div
        style={{ '--rot': '-2deg' } as any}
        className="hidden xl:block absolute top-20 right-8 z-20 animate-float-reverse transition-transform hover:scale-105 pointer-events-auto cursor-default"
      >
        <div className="px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#121927] border border-slate-200/90 dark:border-[#222E42] shadow-xl flex items-center gap-2.5 -rotate-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 flex items-center justify-center text-sm">
            💳
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-semibold">Khaki UPI Settlement</p>
            <p className="text-xs font-bold text-emerald-600 font-mono">₹14,750 • Instant</p>
          </div>
        </div>
      </div>

      {/* Floating Stock Box 4 */}
      <div
        style={{ '--rot': '2deg' } as any}
        className="hidden xl:block absolute bottom-28 right-6 z-20 animate-float-slow transition-transform hover:scale-105 pointer-events-auto cursor-default"
      >
        <div className="px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#121927] border border-slate-200/90 dark:border-[#222E42] shadow-xl flex items-center gap-2.5 rotate-2">
          <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 flex items-center justify-center text-sm">
            📦
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-semibold">Inventory Alert</p>
            <p className="text-xs font-bold text-slate-900 dark:text-white">Uniform Shirts • 420 pcs</p>
          </div>
        </div>
      </div>

      {/* Floating Growth Chart 5 */}
      <div
        style={{ '--rot': '-3deg' } as any}
        className="hidden md:block absolute top-14 left-8 z-10 animate-float-delayed transition-transform hover:scale-105 pointer-events-auto cursor-default"
      >
        <div className="px-3 py-2 rounded-xl bg-white dark:bg-[#121927] border border-slate-200/80 dark:border-[#222E42] shadow-lg flex items-center gap-2 -rotate-3 text-xs">
          <span className="text-sm">📈</span>
          <span className="font-bold text-slate-900 dark:text-white">+18.4%</span>
          <span className="text-[10px] text-slate-400">Monthly Growth</span>
        </div>
      </div>

      {/* Floating Rupee Badge 6 */}
      <div
        style={{ '--rot': '4deg' } as any}
        className="hidden md:block absolute bottom-12 left-12 z-10 animate-float-reverse transition-transform hover:scale-105 pointer-events-auto cursor-default"
      >
        <div className="px-3 py-2 rounded-xl bg-white dark:bg-[#121927] border border-slate-200/80 dark:border-[#222E42] shadow-lg flex items-center gap-2 rotate-4 text-xs">
          <span className="text-sm">💰</span>
          <span className="font-mono font-bold text-emerald-600">₹2,45,000</span>
          <span className="text-[10px] text-slate-400">Sales Today</span>
        </div>
      </div>

      {/* -------------------------------------------------------------
          MAIN HERO GRID (2 Columns on Desktop)
      ------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Value Proposition & CTAs */}
        <div className="lg:col-span-6 space-y-6 text-left">
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200/80 dark:border-red-900 text-red-600 dark:text-red-400 text-xs font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>✦ All-in-One Business Management</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Run Your Business Smarter with{' '}
            <span className="text-red-600 dark:text-red-500 underline decoration-red-600/30 decoration-wavy">
              Khaki Karobar
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl font-normal leading-relaxed">
            Billing, inventory, customers, payments, reports and more — everything your business needs in one powerful platform.
          </p>

          {/* Feature Check Points */}
          <div className="grid grid-cols-2 gap-3 pt-1 max-w-lg">
            {[
              '✓ Easy Billing',
              '✓ Inventory Management',
              '✓ GST Ready',
              '✓ Business Reports',
            ].map((pt, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>{pt.replace('✓ ', '')}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
            <Link
              href="/register"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm rounded-2xl shadow-xl shadow-red-600/30 transition-all flex items-center justify-center gap-2.5 group"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <button
              type="button"
              onClick={() => setShowDemoModal(true)}
              className="px-6 py-4 bg-white dark:bg-[#121927] hover:bg-slate-100 dark:hover:bg-[#1A2333] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-[#222E42] font-bold text-sm rounded-2xl transition-all shadow-sm flex items-center justify-center gap-2 group"
            >
              <div className="w-6 h-6 rounded-full bg-red-50 dark:bg-red-950/60 text-red-600 flex items-center justify-center">
                <Play className="w-3 h-3 fill-red-600 ml-0.5" />
              </div>
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Small Trust Indicators */}
          <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>No Credit Card Required</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Easy Setup in 2 Minutes</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Secure Business Management</span>
            </span>
          </div>
        </div>

        {/* Right Column: Hero Realistic Dashboard Mockup (Section 4) */}
        <div className="lg:col-span-6 relative">
          <DashboardPreviewMockup />
        </div>
      </div>

      {/* Demo Video / Preview Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-150">
          <div className="bg-white dark:bg-[#121927] border border-slate-200 dark:border-[#222E42] rounded-3xl w-full max-w-3xl p-6 shadow-2xl space-y-4 animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-600" />
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                  Khaki Karobar — Product Walkthrough Demo
                </h3>
              </div>
              <button
                onClick={() => setShowDemoModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full rounded-2xl bg-slate-950 flex flex-col items-center justify-center text-white relative overflow-hidden border border-slate-800">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-950/40 to-slate-900/40" />
              <div className="relative z-10 text-center space-y-3 p-6">
                <div className="w-16 h-16 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-xl mx-auto ring-4 ring-red-600/30">
                  <Play className="w-6 h-6 fill-white ml-1" />
                </div>
                <div>
                  <h4 className="font-black text-lg text-white">Interactive Product Tour</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto mt-1">
                    Watch how Khaki Karobar simplifies billing, stock replenishment, and GST reports in under 90 seconds.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <p className="text-xs text-slate-500">Ready to take it for a spin yourself?</p>
              <Link
                href="/register"
                onClick={() => setShowDemoModal(false)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
