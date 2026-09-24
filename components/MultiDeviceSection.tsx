'use client';

import React from 'react';
import {
  Laptop,
  Tablet,
  Smartphone,
  CheckCircle2,
  Cloud,
  Zap,
  Shield,
  Wifi,
} from 'lucide-react';

export function MultiDeviceSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-slate-100/60 dark:bg-[#070A11]/60 border-y border-slate-200/80 dark:border-[#1E293B] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200/80 dark:border-red-900 text-red-600 dark:text-red-400 text-xs font-bold shadow-sm">
            <Cloud className="w-3.5 h-3.5" />
            <span>True Cloud Mobility</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Your Business, Everywhere
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Manage your business from anywhere, anytime. Whether you are at the shop counter,
            visiting a client in the field, or checking evening sales from home.
          </p>
        </div>

        {/* 3 Devices Presentation Cards (Desktop, Tablet, Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* 1. Desktop Browser */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#121927] border-2 border-slate-200 dark:border-[#222E42] shadow-sm hover:border-red-500/50 hover:shadow-xl transition-all space-y-4 text-left group">
            <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950/40 text-red-600 flex items-center justify-center">
              <Laptop className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-red-600 transition-colors">
                Desktop Web Suite
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Full-featured administrative command center for accounting, bulk GST filing, warehouse management, and advanced reporting.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0B0F19] text-xs font-mono text-slate-600 dark:text-slate-400 space-y-1">
              <p className="font-bold text-slate-900 dark:text-white">Windows & Mac</p>
              <p className="text-[11px] text-slate-500">Chrome, Safari, Edge, Firefox</p>
            </div>
          </div>

          {/* 2. Tablet POS */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#121927] border-2 border-red-500/40 dark:border-red-500/30 shadow-md hover:shadow-xl transition-all space-y-4 text-left group relative">
            <span className="absolute top-4 right-4 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-600 text-white">
              Popular for Counters
            </span>

            <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950/40 text-red-600 flex items-center justify-center">
              <Tablet className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-red-600 transition-colors">
                Tablet POS Counter
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Touch-first point-of-sale interface optimized for quick retail checkouts, barcode scanning, and instant thermal receipt printing.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0B0F19] text-xs font-mono text-slate-600 dark:text-slate-400 space-y-1">
              <p className="font-bold text-slate-900 dark:text-white">iPad & Android Tablets</p>
              <p className="text-[11px] text-slate-500">Bluetooth Thermal Printer Ready</p>
            </div>
          </div>

          {/* 3. Mobile Smartphone */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#121927] border-2 border-slate-200 dark:border-[#222E42] shadow-sm hover:border-red-500/50 hover:shadow-xl transition-all space-y-4 text-left group">
            <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950/40 text-red-600 flex items-center justify-center">
              <Smartphone className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-red-600 transition-colors">
                Mobile Business App
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Create quotes on the go, check stock levels during vendor visits, receive payment alerts, and view live daily sales summaries.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0B0F19] text-xs font-mono text-slate-600 dark:text-slate-400 space-y-1">
              <p className="font-bold text-slate-900 dark:text-white">iOS & Android</p>
              <p className="text-[11px] text-slate-500">Offline-ready local sync engine</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
