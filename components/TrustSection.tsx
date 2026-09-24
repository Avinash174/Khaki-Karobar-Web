'use client';

import React from 'react';
import {
  ShoppingBag,
  Truck,
  Building2,
  Factory,
  Wrench,
  Briefcase,
  Calculator,
} from 'lucide-react';

export function TrustSection() {
  const industries = [
    { title: 'Retail Stores', icon: ShoppingBag, desc: 'Kirana, apparel, supermarkets' },
    { title: 'Wholesalers', icon: Truck, desc: 'B2B supply & credit tracking' },
    { title: 'Distributors', icon: Building2, desc: 'Multi-brand route sales' },
    { title: 'Manufacturers', icon: Factory, desc: 'Raw material to finished stock' },
    { title: 'Services', icon: Wrench, desc: 'Repair, auto & consulting' },
    { title: 'Professionals', icon: Briefcase, desc: 'Doctors, architects, legal' },
    { title: 'CA & Tax Firms', icon: Calculator, desc: 'Direct audit & GSTR export' },
  ];

  return (
    <section className="py-16 px-6 border-y border-slate-200/80 dark:border-[#222E42] bg-slate-100/60 dark:bg-[#0B0F19]/60 transition-colors">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Engineered For The Indian Economy
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Built for modern Indian businesses of every scale
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white dark:bg-[#121927] border border-slate-200/80 dark:border-[#1E293B] shadow-sm hover:border-red-500/40 hover:shadow-md transition-all text-center flex flex-col items-center justify-center space-y-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-[#0B0F19] group-hover:bg-red-50 dark:group-hover:bg-red-950/40 text-slate-600 dark:text-slate-400 group-hover:text-red-600 dark:group-hover:text-red-400 flex items-center justify-center transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">{ind.title}</p>
                  <p className="text-[10px] text-slate-400 leading-tight mt-0.5">{ind.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
