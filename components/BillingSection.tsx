'use client';

import React from 'react';
import Link from 'next/link';
import {
  Receipt,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  QrCode,
  Send,
  Printer,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

export function BillingSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-slate-100/60 dark:bg-[#070A11]/60 border-y border-slate-200/80 dark:border-[#1E293B] relative overflow-hidden transition-colors">
      {/* Decorative document icons in background */}
      <div className="absolute top-10 left-10 text-slate-300 dark:text-slate-800 opacity-20 pointer-events-none select-none text-8xl">
        🧾
      </div>
      <div className="absolute bottom-10 right-10 text-slate-300 dark:text-slate-800 opacity-20 pointer-events-none select-none text-8xl">
        📄
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Text & Features */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200/80 dark:border-red-900 text-red-600 dark:text-red-400 text-xs font-bold shadow-sm">
            <Receipt className="w-3.5 h-3.5" />
            <span>Smart Invoicing Suite</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Create Professional Invoices in Seconds
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Generate compliant B2B and retail tax bills with automatic CGST, SGST, and IGST breakdowns.
            Deliver signed PDF invoices directly to customer WhatsApp with dynamic UPI scan-to-pay QR codes.
          </p>

          <div className="space-y-3 pt-2">
            {[
              'Automatic state-wise GST tax calculation (CGST + SGST vs IGST)',
              'Instant WhatsApp Cloud dispatch with verified company branding',
              'Integrated scan-and-pay UPI QR code for same-day settlements',
              'Support for thermal roll POS receipts & multi-page A4 laser prints',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex items-center gap-4">
            <Link
              href="/register"
              className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-red-600/30 transition-all flex items-center gap-2 group"
            >
              <span>Create Your First Invoice</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right Column: Large Realistic Invoice UI Mockup (Section 9) */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl bg-white dark:bg-[#121927] border-2 border-slate-200 dark:border-[#222E42] p-6 sm:p-8 shadow-2xl space-y-6 text-left relative overflow-hidden">
            {/* Stamp Badge */}
            <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 font-black text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>PAID • UPI</span>
            </div>

            {/* Invoice Header */}
            <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-red-600 text-white font-black flex items-center justify-center text-sm shadow-sm">
                    KK
                  </div>
                  <span className="font-black text-base text-slate-900 dark:text-white">
                    Khaki Karobar Pvt Ltd
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Survey 45/2, Baner Business Hub, Pune, MH - 411045<br />
                  GSTIN: 27AABCK1234D1ZX • contact@khaki.in
                </p>
              </div>

              <div className="text-right pt-6">
                <p className="text-[10px] uppercase font-bold text-slate-400">Tax Invoice</p>
                <p className="font-mono font-bold text-sm text-slate-900 dark:text-white">
                  #INV-2026-1024
                </p>
                <p className="text-[10px] text-slate-500">Date: 24/09/2026</p>
              </div>
            </div>

            {/* Customer Billed To */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200/70 dark:border-[#1E293B] text-xs space-y-1">
              <p className="text-[10px] uppercase font-bold text-slate-400">Billed To:</p>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Apex Retailers Pvt Ltd</p>
                  <p className="text-[11px] text-slate-500">Shivaji Nagar, Pune, Maharashtra (27)</p>
                </div>
                <span className="text-[10px] font-mono text-slate-500">GSTIN: 27AABCA5678B1Z9</span>
              </div>
            </div>

            {/* Products Line Items Table */}
            <div className="border border-slate-200 dark:border-[#1E293B] rounded-xl overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-[#0B0F19] font-bold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-[#1E293B]">
                  <tr>
                    <th className="p-2.5 pl-3">Product Description</th>
                    <th className="p-2.5 text-center">Qty</th>
                    <th className="p-2.5 text-right">Price</th>
                    <th className="p-2.5 text-right">GST</th>
                    <th className="p-2.5 text-right pr-3">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-[#1E293B] text-[11px]">
                  <tr>
                    <td className="p-2.5 pl-3 font-semibold text-slate-800 dark:text-slate-200">
                      Khaki Uniform Shirts (Grade A)
                    </td>
                    <td className="p-2.5 text-center font-mono">20</td>
                    <td className="p-2.5 text-right font-mono">₹450.00</td>
                    <td className="p-2.5 text-right font-mono">18%</td>
                    <td className="p-2.5 text-right pr-3 font-mono font-bold text-slate-900 dark:text-white">
                      ₹10,620.00
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2.5 pl-3 font-semibold text-slate-800 dark:text-slate-200">
                      Tactical Heavy Cargo Trouser
                    </td>
                    <td className="p-2.5 text-center font-mono">5</td>
                    <td className="p-2.5 text-right font-mono">₹700.00</td>
                    <td className="p-2.5 text-right font-mono">18%</td>
                    <td className="p-2.5 text-right pr-3 font-mono font-bold text-slate-900 dark:text-white">
                      ₹4,130.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Totals & UPI Scan QR */}
            <div className="flex justify-between items-end pt-1">
              <div className="flex items-center gap-2.5 p-2 bg-slate-50 dark:bg-[#0B0F19] rounded-xl border border-slate-200/80 dark:border-[#1E293B]">
                <div className="w-10 h-10 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg flex items-center justify-center">
                  <QrCode className="w-6 h-6" />
                </div>
                <div className="text-[10px]">
                  <p className="font-bold text-slate-900 dark:text-white">Scan & Pay UPI</p>
                  <p className="font-mono text-slate-500">khaki@upi</p>
                </div>
              </div>

              <div className="w-52 space-y-1 text-xs text-right">
                <div className="flex justify-between text-slate-500 text-[11px]">
                  <span>Subtotal:</span>
                  <span className="font-mono">₹12,500.00</span>
                </div>
                <div className="flex justify-between text-slate-500 text-[11px]">
                  <span>CGST 9% + SGST 9%:</span>
                  <span className="font-mono">₹2,250.00</span>
                </div>
                <div className="flex justify-between font-black text-sm text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 pt-1.5">
                  <span>Grand Total:</span>
                  <span className="font-mono text-red-600 dark:text-red-400">₹14,750.00</span>
                </div>
              </div>
            </div>

            {/* Quick Actions Footer inside card */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px]">
              <span className="text-slate-500 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Digitally Authenticated
              </span>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 font-bold flex items-center gap-1 text-[10px]">
                  <Send className="w-3 h-3" /> WhatsApp Sent
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold flex items-center gap-1 text-[10px]">
                  <Printer className="w-3 h-3" /> Printed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
