'use client';

import React from 'react';
import {
  FileText,
  Send,
  Package,
  Layers,
  BookOpen,
  Receipt,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

export function FeatureShowcase() {
  return (
    <section id="features" className="py-24 px-6 space-y-32 max-w-7xl mx-auto">
      {/* Feature 1: Billing & WhatsApp (Text Left, Visual Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 text-xs font-bold">
            <Receipt className="w-3.5 h-3.5" />
            <span>Smart Statutory Invoicing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Billing made simple. <br />
            <span className="text-red-600">Dispatched in seconds.</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Create professional B2B and B2C tax invoices compliant with Indian GST laws.
            Automated CGST, SGST, IGST calculations, fractional round-offs, and instant one-click WhatsApp Cloud invoice delivery to your customers.
          </p>

          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Automatic tax splitting by state (CGST/SGST vs IGST)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Official WhatsApp Cloud API dispatch with payment links</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Thermal billing roll & A4 laser printing templates</span>
            </li>
          </ul>

          <div className="pt-2">
            <a
              href="http://localhost:3000"
              className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700 group"
            >
              <span>Explore Invoicing Module</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Visual 1 */}
        <div className="rounded-3xl bg-slate-100 dark:bg-[#121927] border border-slate-200 dark:border-[#222E42] p-6 shadow-xl space-y-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-[#1E293B] shadow-sm space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-900 dark:text-white">Tax Invoice #INV-202609-0005</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 font-bold text-[10px]">PAID</span>
            </div>
            <div className="py-2 border-y border-slate-100 dark:border-[#1E293B] text-xs space-y-1">
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Thermal Billing Rolls 80mm × 2</span>
                <span className="font-mono">₹900.00</span>
              </div>
              <div className="flex justify-between text-slate-400 text-[11px]">
                <span>Applicable GST (18%)</span>
                <span className="font-mono">₹162.00</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm font-black text-slate-900 dark:text-white">
              <span>Total Paid:</span>
              <span className="text-red-600 font-mono">₹1,062.00</span>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 flex items-center justify-between text-xs text-emerald-800 dark:text-emerald-300">
            <div className="flex items-center gap-2">
              <Send className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-semibold">WhatsApp Cloud Message Delivered</span>
            </div>
            <span className="text-[10px] font-mono">Just now</span>
          </div>
        </div>
      </div>

      {/* Feature 2: Live Inventory (Visual Left, Text Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Visual 2 */}
        <div className="order-2 lg:order-1 rounded-3xl bg-slate-100 dark:bg-[#121927] border border-slate-200 dark:border-[#222E42] p-6 shadow-xl space-y-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-[#1E293B] space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-900 dark:text-white">Atomic Stock Reduction</span>
              <span className="text-[10px] text-slate-400 font-mono">Real-time</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-[#121927] text-xs">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Thermal Billing Rolls</p>
                  <p className="text-[10px] text-slate-400">SKU: TH-80MM-10 • PCS</p>
                </div>
                <div className="text-right">
                  <p className="font-black text-slate-900 dark:text-white font-mono">24 In Stock</p>
                  <span className="text-[10px] text-amber-500 font-semibold">Threshold: 20</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-[#121927] text-xs">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Barcode Scanner Wireless</p>
                  <p className="text-[10px] text-slate-400">SKU: BS-WL-01 • BOX</p>
                </div>
                <div className="text-right">
                  <p className="font-black text-emerald-600 font-mono">48 In Stock</p>
                  <span className="text-[10px] text-emerald-500 font-semibold">Healthy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text 2 */}
        <div className="order-1 lg:order-2 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
            <Package className="w-3.5 h-3.5" />
            <span>Live Inventory Management</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Inventory under control. <br />
            <span className="text-emerald-600">Zero stock leakage.</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Eliminate inventory discrepancies with atomic stock updates. Whenever an invoice is generated on Mobile or Web, stock counts decrease across all counters instantly.
          </p>

          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Multi-unit tracking (PCS, KG, BOX, MTR, SET)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Low-stock alert triggers to prevent stockouts</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Barcode scanning compatible with standard POS readers</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Feature 3: Accounting & GST (Text Left, Visual Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-xs font-bold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Double-Entry Financials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Know your numbers. <br />
            <span className="text-blue-600">Profit, loss & GST reports.</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Automatic Day Book, Cash Book, Bank Book, and Profit & Loss generated directly from live transactions. Export ready-to-file GSTR-1 outward supply breakdowns and GSTR-3B tax summaries for your CA.
          </p>

          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Real-time Day Book & Cash Drawer reconciliation</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Ready-to-file GSTR-1 (B2B and B2C tables) & GSTR-3B</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Exportable reports for Chartered Accountants and audits</span>
            </li>
          </ul>
        </div>

        {/* Visual 3 */}
        <div className="rounded-3xl bg-slate-100 dark:bg-[#121927] border border-slate-200 dark:border-[#222E42] p-6 shadow-xl space-y-4">
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-4 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-[#1E293B]">
              <p className="text-slate-400 font-semibold text-[11px]">Net Business Profit</p>
              <p className="text-xl font-black text-emerald-600 font-mono mt-1">₹15,164</p>
              <p className="text-[10px] text-slate-500 mt-0.5">Calculated automatically</p>
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-[#1E293B]">
              <p className="text-slate-400 font-semibold text-[11px]">GSTR-1 Taxable Value</p>
              <p className="text-xl font-black text-slate-900 dark:text-white font-mono mt-1">₹19,800</p>
              <p className="text-[10px] text-slate-500 mt-0.5">CGST + SGST reconciled</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
