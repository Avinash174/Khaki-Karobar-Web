'use client';

import React from 'react';
import {
  TrendingUp,
  FileText,
  CreditCard,
  Package,
  CheckCircle2,
  Send,
  Building2,
  Clock,
  ArrowUpRight,
} from 'lucide-react';

export function DashboardPreviewMockup() {
  return (
    <div className="w-full max-w-xl mx-auto rounded-3xl bg-white dark:bg-[#121927] border border-slate-200/90 dark:border-[#222E42] shadow-2xl p-5 sm:p-6 space-y-5 transition-all text-left">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-[#222E42]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="ml-2 text-[11px] font-mono text-slate-400">app.khakikarobar.in</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live Sync
          </span>
        </div>
      </div>

      {/* Mini Header Inside Mockup */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-400">Khaki General Store & Electronics</p>
          <p className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Business Overview</p>
        </div>
        <span className="px-3 py-1 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 text-xs font-bold border border-red-200/60 dark:border-red-900/50">
          FY 2026-27
        </span>
      </div>

      {/* Mini KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#090D16] border border-slate-200/80 dark:border-[#1E293B]">
          <div className="flex items-center justify-between text-slate-400 text-[11px]">
            <span>Today's Sales</span>
            <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
          </div>
          <p className="text-base font-extrabold text-slate-900 dark:text-white font-mono mt-1">₹45,500</p>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">↑ 14.2%</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#090D16] border border-slate-200/80 dark:border-[#1E293B]">
          <div className="flex items-center justify-between text-slate-400 text-[11px]">
            <span>Receivables</span>
            <CreditCard className="w-3.5 h-3.5 text-amber-500" />
          </div>
          <p className="text-base font-extrabold text-slate-900 dark:text-white font-mono mt-1">₹5,300</p>
          <span className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold">2 Invoices Due</span>
        </div>

        <div className="col-span-2 sm:col-span-1 p-3.5 rounded-2xl bg-slate-50 dark:bg-[#090D16] border border-slate-200/80 dark:border-[#1E293B]">
          <div className="flex items-center justify-between text-slate-400 text-[11px]">
            <span>Live Stock</span>
            <Package className="w-3.5 h-3.5 text-blue-500" />
          </div>
          <p className="text-base font-extrabold text-slate-900 dark:text-white font-mono mt-1">1,240</p>
          <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">All Items Audited</span>
        </div>
      </div>

      {/* Mini Revenue Curve Graphic */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#090D16] border border-slate-200/80 dark:border-[#1E293B] space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-slate-800 dark:text-slate-200">Weekly Sales Velocity</span>
          <span className="font-extrabold text-emerald-600 font-mono">₹1,84,320 total</span>
        </div>

        {/* CSS-drawn high-fidelity stylized bars */}
        <div className="h-16 flex items-end justify-between gap-2 pt-2">
          {[40, 65, 50, 85, 70, 100, 60].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                style={{ height: `${h}%` }}
                className={`w-full rounded-t-md transition-all ${
                  i === 5
                    ? 'bg-red-600 shadow-lg shadow-red-600/30'
                    : 'bg-slate-300 dark:bg-slate-700 hover:bg-red-400'
                }`}
              />
              <span className="text-[9px] text-slate-400 font-mono">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Invoice Transaction Preview */}
      <div className="space-y-2">
        <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Live Transaction Stream</p>
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#090D16] border border-slate-200/80 dark:border-[#1E293B] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white">Sharma Traders & Co.</p>
              <p className="text-[10px] text-slate-400 font-mono">INV-202609-0005 • 2 items</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-black text-slate-900 dark:text-white font-mono">₹5,310</p>
            <span className="text-[10px] text-emerald-600 font-bold">WhatsApp Sent</span>
          </div>
        </div>
      </div>
    </div>
  );
}
