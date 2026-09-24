'use client';

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6 max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 dark:bg-red-950/60 px-3 py-1 rounded-full border border-red-200 dark:border-red-900">
          Transparent Pricing
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Simple, Predictable Plans for Indian Enterprises
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          Start for free, then scale as your customer volume, staff, and multi-branch operations grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Plan 1: Starter */}
        <div className="p-8 rounded-3xl bg-white dark:bg-[#121927] border border-slate-200 dark:border-[#222E42] shadow-sm flex flex-col justify-between space-y-6 text-left">
          <div className="space-y-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Starter Shop</span>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-slate-900 dark:text-white font-mono">₹499</span>
              <span className="text-xs text-slate-400">/month</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              For single-counter retail shops and small stores.
            </p>
            <ul className="text-xs space-y-3 text-slate-700 dark:text-slate-300 pt-4 border-t border-slate-100 dark:border-[#222E42]">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Unlimited GST Invoices & Bills</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Inventory up to 1,000 Products</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Mobile App Access (Flutter)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Thermal & A4 Print Formats</span>
              </li>
            </ul>
          </div>

          <a
            href="http://localhost:3000"
            className="w-full text-center py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs rounded-xl transition-all block"
          >
            Start 14-Day Free Trial
          </a>
        </div>

        {/* Plan 2: Business Pro (Featured in Brand Red) */}
        <div className="p-8 rounded-3xl bg-white dark:bg-[#121927] border-2 border-red-600 shadow-2xl shadow-red-600/10 flex flex-col justify-between space-y-6 text-left relative transform md:-translate-y-2">
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md shadow-red-600/40">
            Most Popular
          </span>

          <div className="space-y-4">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Business Pro</span>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-slate-900 dark:text-white font-mono">₹999</span>
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
                <span>Official WhatsApp Cloud API Dispatch</span>
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
                <span>Double-Entry Day Book & P&L</span>
              </li>
            </ul>
          </div>

          <a
            href="http://localhost:3000"
            className="w-full text-center py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 block"
          >
            <span>Upgrade to Pro Plan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Plan 3: Enterprise */}
        <div className="p-8 rounded-3xl bg-white dark:bg-[#121927] border border-slate-200 dark:border-[#222E42] shadow-sm flex flex-col justify-between space-y-6 text-left">
          <div className="space-y-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Enterprise Chain</span>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-slate-900 dark:text-white font-mono">₹2,499</span>
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
                <span>Dedicated CA Portal Access</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Custom API & ERP Integrations</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>24/7 Priority Support & Onsite Training</span>
              </li>
            </ul>
          </div>

          <a
            href="#contact"
            className="w-full text-center py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs rounded-xl transition-all block"
          >
            Contact Sales Team
          </a>
        </div>
      </div>
    </section>
  );
}
