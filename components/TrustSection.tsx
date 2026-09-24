'use client';

import React from 'react';
import {
  Store,
  Building2,
  Truck,
  Factory,
  Briefcase,
  ShoppingBag,
  ArrowUpRight,
} from 'lucide-react';

export function TrustSection() {
  const categories = [
    {
      name: 'Retail Stores',
      icon: Store,
      desc: 'Supermarkets, apparel, electronics, and local merchants',
      tag: 'Fast POS & Barcodes',
    },
    {
      name: 'Wholesalers',
      icon: Building2,
      desc: 'B2B bulk billing, customer credit ledgers, and rate lists',
      tag: 'Khata & Credit Limits',
    },
    {
      name: 'Distributors',
      icon: Truck,
      desc: 'Route sales, fleet dispatches, and multi-tier pricing',
      tag: 'Multi-Warehouse',
    },
    {
      name: 'Manufacturers',
      icon: Factory,
      desc: 'Batch tracking, raw materials, BOM, and production orders',
      tag: 'Batch & Expiry',
    },
    {
      name: 'Service Businesses',
      icon: Briefcase,
      desc: 'Consulting, agencies, repairs, AMC, and milestone billing',
      tag: 'Recurring Invoices',
    },
    {
      name: 'Online Sellers',
      icon: ShoppingBag,
      desc: 'E-commerce dispatch, courier tracking, and omnichannel inventory',
      tag: 'Sync Across Channels',
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white/50 dark:bg-[#070A11]/60 border-y border-slate-200/80 dark:border-[#1E293B] transition-colors">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
            Engineered for Modern Commerce
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Trusted by businesses that want to grow smarter
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Whether you operate a high-volume retail counter or a regional B2B distribution network, Khaki Karobar adapts to your workflow.
          </p>
        </div>

        {/* 6 Business Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white dark:bg-[#121927] border border-slate-200/80 dark:border-[#222E42] shadow-sm hover:border-red-500/50 hover:shadow-md transition-all group text-left space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
                    {cat.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors flex items-center justify-between">
                    <span>{cat.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-red-600" />
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
