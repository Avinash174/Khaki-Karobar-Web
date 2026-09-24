'use client';

import React from 'react';
import Link from 'next/link';
import {
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Percent,
  Download,
  FileSpreadsheet,
} from 'lucide-react';

export function GstSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-slate-100/60 dark:bg-[#070A11]/60 border-y border-slate-200/80 dark:border-[#1E293B] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading & Value Prop */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200/80 dark:border-red-900 text-red-600 dark:text-red-400 text-xs font-bold shadow-sm">
            <Percent className="w-3.5 h-3.5" />
            <span>100% Indian GST Compliance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            GST Billing Made Simple
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Eliminate tax errors and late filing penalties. Khaki Karobar automatically identifies place of supply,
            applies correct GST slabs, checks HSN/SAC codes, and prepares ready-to-upload GSTR-1 and GSTR-3B returns.
          </p>

          <div className="space-y-3 pt-1">
            {[
              'GST-ready invoices with validated 15-digit GSTIN inputs',
              'Automatic CGST (9%) + SGST (9%) or IGST (18%) tax splitting',
              'B2B registered invoices with buyer ITC & B2C consumer bills',
              'One-click GSTR-1 JSON export ready for the official GST Portal',
              'Input Tax Credit (ITC) reconciliation with purchase bills',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-3">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-red-600/25 transition-all group"
            >
              <span>Automate Your GST Returns</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right Column: GST Calculation & Return Filing Card Mockup */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl bg-white dark:bg-[#121927] border-2 border-slate-200 dark:border-[#222E42] p-6 sm:p-7 shadow-2xl space-y-5 text-left">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center font-black text-sm shadow-sm">
                  GST
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white">Statutory Tax Breakup</h3>
                  <p className="text-[10px] text-slate-400 font-mono">Place of Supply: 27 (Maharashtra)</p>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 border border-emerald-200 dark:border-emerald-800">
                GSTR-1 Verified
              </span>
            </div>

            {/* Tax Slabs Visualization */}
            <div className="space-y-2">
              <p className="text-[10px] uppercase font-bold text-slate-400">Current Filing Period Breakdown</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200/70 dark:border-[#1E293B] text-center">
                  <span className="text-[10px] text-slate-400 block">CGST (9%)</span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-white">₹18,450</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200/70 dark:border-[#1E293B] text-center">
                  <span className="text-[10px] text-slate-400 block">SGST (9%)</span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-white">₹18,450</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200/70 dark:border-[#1E293B] text-center">
                  <span className="text-[10px] text-slate-400 block">IGST (18%)</span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-red-600 dark:text-red-400">₹42,100</span>
                </div>
              </div>
            </div>

            {/* Quick Export Cards */}
            <div className="space-y-2 pt-1">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200/70 dark:border-[#1E293B] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <FileSpreadsheet className="w-5 h-5 text-emerald-600" />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">GSTR-1 Monthly Sales Return</p>
                    <p className="text-[10px] text-slate-400">Table 4 (B2B), Table 5 & 7 (B2C), HSN Summary</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 px-2 py-1 rounded-lg">
                  Export JSON
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200/70 dark:border-[#1E293B] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <FileCheck2 className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">GSTR-3B Tax Summary Computation</p>
                    <p className="text-[10px] text-slate-400">Eligible ITC vs Outward Tax Liability</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 bg-slate-200/60 dark:bg-slate-800 px-2 py-1 rounded-lg">
                  Export Excel
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/30 flex items-center gap-2 text-[11px] text-emerald-800 dark:text-emerald-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Complies with Central Board of Indirect Taxes and Customs (CBIC) rules.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
