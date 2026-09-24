'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export function PricingSection() {
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <section id="pricing" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200/80 dark:border-red-900 text-red-600 dark:text-red-400 text-xs font-bold shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transparent Indian Pricing</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          Simple, Predictable Plans for Growing Businesses
        </h2>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
          Start with a 14-day free trial. No credit card required. Upgrade as your business expands.
        </p>

        {/* Annual / Monthly Toggle */}
        <div className="pt-2 flex items-center justify-center gap-3 text-xs font-bold">
          <span className={!annualBilling ? 'text-slate-900 dark:text-white' : 'text-slate-500'}>
            Monthly
          </span>
          <button
            type="button"
            onClick={() => setAnnualBilling(!annualBilling)}
            className="w-12 h-6 rounded-full bg-slate-300 dark:bg-slate-700 p-0.5 transition-colors relative"
          >
            <div
              className={`w-5 h-5 rounded-full bg-red-600 shadow-md transform transition-transform ${
                annualBilling ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={annualBilling ? 'text-slate-900 dark:text-white flex items-center gap-1.5' : 'text-slate-500'}>
            <span>Annual</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 border border-emerald-200 dark:border-emerald-800">
              Save 20%
            </span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Plan 1: Starter */}
        <div className="p-8 rounded-3xl bg-white dark:bg-[#121927] border border-slate-200 dark:border-[#222E42] shadow-sm flex flex-col justify-between space-y-6 text-left">
          <div className="space-y-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Starter Shop</span>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-slate-900 dark:text-white font-mono">
                {annualBilling ? '₹399' : '₹499'}
              </span>
              <span className="text-xs text-slate-400">/month</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              For single-counter retail shops and standalone local stores.
            </p>
            <ul className="text-xs space-y-3 text-slate-700 dark:text-slate-300 pt-4 border-t border-slate-100 dark:border-[#222E42]">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Unlimited GST Invoices & Bills</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Catalog up to 1,000 Products</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Mobile App Access (Android & iOS)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Thermal Roll & A4 Print Formats</span>
              </li>
            </ul>
          </div>

          <Link
            href="/register"
            className="w-full text-center py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs rounded-xl transition-all block"
          >
            Start 14-Day Free Trial
          </Link>
        </div>

        {/* Plan 2: Business Pro (Featured in Brand Red) */}
        <div className="p-8 rounded-3xl bg-white dark:bg-[#121927] border-2 border-red-600 shadow-2xl shadow-red-600/10 flex flex-col justify-between space-y-6 text-left relative transform md:-translate-y-2">
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md shadow-red-600/40">
            Most Popular
          </span>

          <div className="space-y-4">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Business Pro</span>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-slate-900 dark:text-white font-mono">
                {annualBilling ? '₹799' : '₹999'}
              </span>
              <span className="text-xs text-slate-400">/month</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              For growing wholesalers, distributors & multi-staff businesses.
            </p>
            <ul className="text-xs space-y-3 text-slate-700 dark:text-slate-300 pt-4 border-t border-slate-100 dark:border-[#222E42]">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Everything in Starter Shop</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>WhatsApp Cloud API PDF Dispatch</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Up to 5 Staff Users with RBAC</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Automated GSTR-1 & 3B Tax Exports</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Double-Entry Day Book & Live P&L</span>
              </li>
            </ul>
          </div>

          <Link
            href="/register"
            className="w-full text-center py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 block"
          >
            <span>Upgrade to Pro Plan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Plan 3: Enterprise */}
        <div className="p-8 rounded-3xl bg-white dark:bg-[#121927] border border-slate-200 dark:border-[#222E42] shadow-sm flex flex-col justify-between space-y-6 text-left">
          <div className="space-y-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Enterprise Chain</span>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-slate-900 dark:text-white font-mono">
                {annualBilling ? '₹1,999' : '₹2,499'}
              </span>
              <span className="text-xs text-slate-400">/month</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              For multi-branch chains, manufacturing & large distributors.
            </p>
            <ul className="text-xs space-y-3 text-slate-700 dark:text-slate-300 pt-4 border-t border-slate-100 dark:border-[#222E42]">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Multi-Branch Inventory Sync</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Dedicated Chartered Accountant Portal</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Custom API & Tally Prime Connector</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>24/7 Priority Support & Onsite Training</span>
              </li>
            </ul>
          </div>

          <Link
            href="/contact"
            className="w-full text-center py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs rounded-xl transition-all block"
          >
            Contact Sales Team
          </Link>
        </div>
      </div>
    </section>
  );
}
