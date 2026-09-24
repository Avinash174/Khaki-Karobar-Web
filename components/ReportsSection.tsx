'use client';

import React from 'react';
import Link from 'next/link';
import {
  BarChart3,
  TrendingUp,
  ArrowRight,
  PieChart,
  ArrowUpRight,
  CreditCard,
  Wallet,
  Coins,
  FileSpreadsheet,
} from 'lucide-react';

export function ReportsSection() {
  const metrics = [
    { title: 'Gross Revenue', value: '₹28.4 Lakhs', growth: '+18.2%', isPositive: true },
    { title: 'Net Profit Margin', value: '₹6.8 Lakhs (24%)', growth: '+4.5%', isPositive: true },
    { title: 'Purchases & COGS', value: '₹14.2 Lakhs', growth: '-2.1%', isPositive: true },
    { title: 'Customer Receivables', value: '₹1.8 Lakhs', growth: '4 Accounts Due', isPositive: false },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200/80 dark:border-red-900 text-red-600 dark:text-red-400 text-xs font-bold shadow-sm">
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Real-Time Business Intelligence</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          Turn Your Business Data Into Better Decisions
        </h2>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          Stop waiting until the end of the year for your accountant to tell you whether you made a profit.
          Get live P&L visibility, identify best-selling products, and track aged receivables at a glance.
        </p>
      </div>

      {/* Large Dashboard Visualization (Section 12) */}
      <div className="rounded-3xl bg-white dark:bg-[#121927] border-2 border-slate-200 dark:border-[#222E42] p-6 sm:p-8 shadow-2xl space-y-6 text-left">
        {/* Metric Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200/70 dark:border-[#1E293B] space-y-1"
            >
              <span className="text-xs text-slate-500 dark:text-slate-400">{m.title}</span>
              <p className="text-lg font-black font-mono text-slate-900 dark:text-white">{m.value}</p>
              <span
                className={`text-[11px] font-bold flex items-center gap-1 ${
                  m.isPositive
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-amber-600 dark:text-amber-400'
                }`}
              >
                {m.isPositive && <ArrowUpRight className="w-3 h-3" />}
                {m.growth}
              </span>
            </div>
          ))}
        </div>

        {/* Dual Visual: Revenue Trend Chart & Category Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Revenue Velocity Chart (7 cols) */}
          <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200/70 dark:border-[#1E293B] space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">Monthly Sales & Collections</h4>
                <p className="text-[10px] text-slate-400 font-mono">Apr 2026 – Sep 2026 (FY 2026-27)</p>
              </div>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600" /> B2B Sales
                </span>
                <span className="flex items-center gap-1 font-semibold text-slate-500">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400" /> Retail Cash
                </span>
              </div>
            </div>

            {/* Stylized Bar Chart */}
            <div className="h-36 flex items-end justify-between gap-3 pt-2">
              {[
                { m: 'Apr', h1: 45, h2: 30 },
                { m: 'May', h1: 60, h2: 40 },
                { m: 'Jun', h1: 52, h2: 35 },
                { m: 'Jul', h1: 80, h2: 50 },
                { m: 'Aug', h1: 72, h2: 45 },
                { m: 'Sep', h1: 95, h2: 60 },
              ].map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                  <div className="w-full flex items-end gap-1 h-28">
                    <div
                      style={{ height: `${bar.h1}%` }}
                      className="w-1/2 bg-red-600 rounded-t-md hover:bg-red-500 transition-all shadow-sm"
                    />
                    <div
                      style={{ height: `${bar.h2}%` }}
                      className="w-1/2 bg-slate-300 dark:bg-slate-700 rounded-t-md hover:bg-slate-400 transition-all"
                    />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">{bar.m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Selling Categories & Products (5 cols) */}
          <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200/70 dark:border-[#1E293B] space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">Top Revenue Contributors</h4>
            <div className="space-y-2.5 text-xs">
              {[
                { name: 'Khaki Uniform Shirts', share: '42%', amount: '₹11.9 Lakhs' },
                { name: 'Heavy Duty Cargo Pants', share: '28%', amount: '₹7.9 Lakhs' },
                { name: 'Security Helmets & Caps', share: '18%', amount: '₹5.1 Lakhs' },
                { name: 'Accessories & Belts', share: '12%', amount: '₹3.5 Lakhs' },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{item.name}</span>
                    <span className="font-mono font-bold text-slate-900 dark:text-white">{item.amount}</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      style={{ width: item.share }}
                      className={`h-full ${idx === 0 ? 'bg-red-600' : 'bg-slate-400 dark:bg-slate-600'}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
