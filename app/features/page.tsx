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
  ShieldCheck,
  Percent,
  MessageSquare,
  QrCode,
  FileCheck2,
  Server,
  Lock,
  Boxes,
  Truck,
  Sparkles,
} from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { CtaSection } from '../../components/CtaSection';

export default function FeaturesPage() {
  const modules = [
    {
      title: 'Smart Invoicing & Billing',
      icon: Receipt,
      desc: 'Rapid POS & B2B GST tax invoices with itemized HSN codes, discounts, round-offs, and automated CGST/SGST/IGST splits.',
      features: [
        '15-digit GSTIN format validation & company details auto-fetch',
        'Thermal receipt (58mm/80mm) and A4 laser print ready formats',
        'Instant WhatsApp PDF dispatch with clickable payment link',
        'Dynamic UPI QR code printed directly on invoice',
      ],
    },
    {
      title: 'Real-Time Inventory & Stock',
      icon: Package,
      desc: 'Track single and variant items across central depots, branch stores, and transit consignments with automated reorder triggers.',
      features: [
        'Batch tracking, manufacturing dates, and expiration alarms',
        'Barcode generator & handheld laser scanner integration',
        'Multi-warehouse stock transfers with transit verification',
        'Damage, return, and stock adjustment audit trails',
      ],
    },
    {
      title: 'Customer Khata & CRM',
      icon: Users,
      desc: 'Modern digital ledger replacing paper bahi-khata. Track customer balances, credit periods, and overdue reminder schedules.',
      features: [
        'Granular credit limits per customer with invoice lock controls',
        'Automated payment reminder messages via WhatsApp Cloud API',
        'Complete ledger statement download in PDF and Excel',
        'Purchase history, average order values, and loyalty tiers',
      ],
    },
    {
      title: 'Vendor Purchases & ITC Reconciliation',
      icon: ShoppingCart,
      desc: 'Record incoming vendor bills, manage supplier credit, purchase returns, and verify eligible Input Tax Credit (ITC).',
      features: [
        'Direct purchase order to vendor bill conversion',
        'Debit note creation with automated ledger adjustments',
        'GSTR-2B inward credit matching to prevent tax leakages',
        'Supplier bank account & payment dispatch recording',
      ],
    },
    {
      title: 'Automated GST Compliance',
      icon: Percent,
      desc: 'Statutory compliance engine designed specifically for Indian tax laws under the Central Board of Indirect Taxes and Customs.',
      features: [
        'One-click GSTR-1 JSON export ready for official GSTN portal',
        'GSTR-3B tax computation summary (Outward liability vs ITC)',
        'E-Way bill threshold alerts for shipments exceeding ₹50,000',
        'HSN / SAC code mandatory verification on product saves',
      ],
    },
    {
      title: 'Business Analytics & P&L',
      icon: BarChart3,
      desc: 'Real-time double-entry bookkeeping showing actual cash flow, receivables, operating expenses, and monthly profitability.',
      features: [
        'Automated Profit & Loss Statement (P&L) and Balance Sheet',
        'Cash flow forecast & debtor payment aging reports',
        'Top-selling SKUs, dead stock identification, and margin analysis',
        'Exportable audit trails for chartered accountants & tax filing',
      ],
    },
    {
      title: 'WhatsApp Cloud API Automation',
      icon: MessageSquare,
      desc: 'Official Meta WhatsApp Business Cloud API integration ensuring 100% deliverability without risk of personal number bans.',
      features: [
        'Automated invoice dispatch immediately upon bill creation',
        'Payment confirmation receipts with remaining khata balance',
        'Polite automated payment reminder pings on invoice due dates',
        'Verified business green-tick sender profile support',
      ],
    },
    {
      title: 'Enterprise Security & RBAC',
      icon: ShieldCheck,
      desc: 'Bank-grade cloud security, encrypted database vaults, multi-factor authentication, and granular staff roles.',
      features: [
        'Role-Based Access Control (Admin, Manager, Accountant, Sales, Staff)',
        'Two-Factor Authentication (2FA) via SMS & WhatsApp OTP',
        'Active session tracking with device & IP geo-logging',
        'Automated daily AES-256 cloud snapshots with 30-day retention',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-red-600 selection:text-white transition-colors">
      <Navbar />

      <main className="flex-1 py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200/80 dark:border-red-900 text-red-600 dark:text-red-400 text-xs font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Feature Catalog</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Built for Every Aspect of Your Business
          </h1>

          <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Explore the complete suite of features engineered to modernize your billing, stock, accounting, and compliance.
          </p>
        </div>

        {/* Feature Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white dark:bg-[#121927] border border-slate-200/80 dark:border-[#222E42] shadow-sm hover:border-red-500/50 hover:shadow-xl transition-all space-y-5 text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950/40 text-red-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-red-600 transition-colors">
                    {m.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {m.desc}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {m.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
