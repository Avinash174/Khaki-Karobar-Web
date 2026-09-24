'use client';

import React from 'react';
import Link from 'next/link';
import {
  Receipt,
  Package,
  Users,
  ShoppingCart,
  BarChart3,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  QrCode,
  AlertTriangle,
  Building,
  TrendingUp,
} from 'lucide-react';

export function FeaturesGrid() {
  const features = [
    {
      id: 'billing',
      icon: '🧾',
      title: 'Easy Billing & Invoicing',
      tagline: 'Create professional invoices with GST in seconds.',
      desc: 'Smart GST calculation (CGST/SGST/IGST), instant WhatsApp PDF delivery, thermal roll printing, and automated UPI payment QR codes.',
      points: ['One-click WhatsApp dispatch', 'Automated GST split', 'Thermal & A4 printing'],
      visualType: 'invoice',
    },
    {
      id: 'inventory',
      icon: '📦',
      title: 'Inventory Management',
      tagline: 'Track stock, warehouses and low-stock alerts.',
      desc: 'Real-time stock ledger, batch and expiry management, multi-warehouse transfers, barcode scanning, and auto-reorder threshold alarms.',
      points: ['Live stock alerts', 'Barcode SKU lookup', 'Multi-location transfers'],
      visualType: 'inventory',
    },
    {
      id: 'customers',
      icon: '👥',
      title: 'Customer Management',
      tagline: 'Manage customers, credit and payment history.',
      desc: 'Complete customer khata book, ledger reconciliation, credit limit controls, payment reminder messages, and historical buying trends.',
      points: ['Customer khata balances', 'Auto payment reminders', 'Credit limit alerts'],
      visualType: 'customers',
    },
    {
      id: 'purchases',
      icon: '🛒',
      title: 'Purchase Management',
      tagline: 'Manage suppliers, purchases and returns.',
      desc: 'Purchase orders, vendor bills, supplier payments, debit notes, and automated input tax credit (ITC) reconciliation for GST filing.',
      points: ['Vendor purchase bills', 'Input tax credit (ITC)', 'Debit notes & returns'],
      visualType: 'purchases',
    },
    {
      id: 'reports',
      icon: '📊',
      title: 'Business Reports',
      tagline: 'Understand sales, expenses, profit and business performance.',
      desc: 'Comprehensive Profit & Loss, Balance Sheet, GSTR-1 & GSTR-3B tax summaries, fast/slow-moving inventory analytics, and cash flow forecasts.',
      points: ['Real-time P&L statement', 'Ready-to-file GST reports', 'Top products analytics'],
      visualType: 'reports',
    },
    {
      id: 'devices',
      icon: '📱',
      title: 'Multi-Device Access',
      tagline: 'Use Khaki Karobar across web, mobile and tablet.',
      desc: 'Cloud-synchronized architecture. Access your ledger and sales counter seamlessly from Android, iOS, tablet POS, or desktop browser.',
      points: ['Real-time cloud sync', 'Mobile counter app', 'Tablet POS mode'],
      visualType: 'devices',
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200/80 dark:border-red-900 text-red-600 dark:text-red-400 text-xs font-bold shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>✦ Powerful Features</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          Everything You Need to Manage Your Business
        </h2>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
          Khaki Karobar provides the essential tools to streamline your business operations — eliminating messy spreadsheets, billing delays, and lost inventory.
        </p>
      </div>

      {/* 6 Feature Cards Grid with Visual Variety (Section 8) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feat) => (
          <div
            key={feat.id}
            className="rounded-3xl bg-white dark:bg-[#121927] border border-slate-200/80 dark:border-[#222E42] shadow-sm hover:border-red-500/50 hover:shadow-xl transition-all p-6 flex flex-col justify-between space-y-5 text-left group"
          >
            {/* Top Header */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl p-2 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200/60 dark:border-red-900/40 inline-block">
                  {feat.icon}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 px-2.5 py-1 rounded-full">
                  Included
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs font-semibold text-red-600 dark:text-red-400 mt-0.5">
                  {feat.tagline}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>

            {/* Visual Micro-Card Variety based on feature */}
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200/70 dark:border-[#1E293B] text-xs space-y-2">
              {feat.visualType === 'invoice' && (
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[11px] font-mono">
                    <span className="font-bold text-slate-800 dark:text-slate-200">#INV-1024</span>
                    <span className="text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-950/50 px-1.5 py-0.5 rounded text-[9px]">PAID ₹14,750</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-500">
                    <span>Includes 18% GST (CGST+SGST)</span>
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-2.5 h-2.5" /> WhatsApp Sent
                    </span>
                  </div>
                </div>
              )}

              {feat.visualType === 'inventory' && (
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="font-bold text-slate-800 dark:text-slate-200">Uniform Shirt (Grade A)</span>
                    <span className="text-red-600 font-bold text-[10px] bg-red-50 dark:bg-red-950/50 px-1.5 py-0.5 rounded flex items-center gap-1">
                      <AlertTriangle className="w-2.5 h-2.5" /> 8 Left (Reorder)
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-red-600 h-full w-[25%]" />
                  </div>
                </div>
              )}

              {feat.visualType === 'customers' && (
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="font-bold text-slate-800 dark:text-slate-200">Metro Cloth Mart</span>
                    <span className="font-mono text-amber-600 font-bold text-[10px]">Due: ₹8,200</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Credit Limit: ₹50,000</span>
                    <span className="text-slate-500">Due in 5 days</span>
                  </div>
                </div>
              )}

              {feat.visualType === 'purchases' && (
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="font-bold text-slate-800 dark:text-slate-200">PO #9042 • Vardhman Mills</span>
                    <span className="text-blue-600 font-bold text-[10px]">₹1,25,000</span>
                  </div>
                  <div className="text-[10px] text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5" /> ITC Claim Eligible (2B Matched)
                  </div>
                </div>
              )}

              {feat.visualType === 'reports' && (
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="font-bold text-slate-800 dark:text-slate-200">Net Profit Margin</span>
                    <span className="text-emerald-600 font-mono font-bold">+24.8%</span>
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Gross Revenue: <span className="font-mono font-bold text-slate-700 dark:text-slate-300">₹4,80,000</span> • Taxes Filed
                  </div>
                </div>
              )}

              {feat.visualType === 'devices' && (
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="font-bold text-slate-800 dark:text-slate-200">Cloud Sync Status</span>
                    <span className="text-emerald-600 font-bold text-[10px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Web Admin • Mobile App • Counter POS in sync
                  </div>
                </div>
              )}
            </div>

            {/* Checklist & Link */}
            <div className="space-y-3 pt-2">
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {feat.points.map((pt, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                <Link
                  href="/features"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400 group-hover:underline"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
