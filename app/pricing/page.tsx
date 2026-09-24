'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  X,
  HelpCircle,
  ChevronDown,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { PricingSection } from '../../components/PricingSection';

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Is there a free trial available?',
      a: 'Yes! Khaki Karobar includes a full 14-day free trial on the Business Pro plan with complete access to billing, inventory, WhatsApp dispatches, and reports. No credit card or upfront deposit required.',
    },
    {
      q: 'Can I use Khaki Karobar on my existing phone and thermal printer?',
      a: 'Absolutely. Khaki Karobar works on any standard web browser, Android phone, iPad, or tablet. It connects seamlessly to 58mm and 80mm ESC/POS Bluetooth and USB thermal roll printers.',
    },
    {
      q: 'Is my data secure and compliant with Indian GST laws?',
      a: 'Yes. All data is encrypted with AES-256 in production vaults located in secure Indian cloud datacenters. Every invoice conforms to statutory CBIC rules and generates official GSTR-1 JSON exports.',
    },
    {
      q: 'Can multiple staff members log in at the same time?',
      a: 'Yes. The Business Pro plan supports up to 5 staff accounts, while Enterprise supports unlimited users. You can grant specific permissions to cashiers, billing operators, and accountants.',
    },
    {
      q: 'How does WhatsApp invoice dispatch work?',
      a: 'Khaki Karobar uses the official Meta WhatsApp Business Cloud API. When an invoice is created, a signed PDF link is automatically dispatched to the customer mobile with a verified green-tick sender badge.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-red-600 selection:text-white transition-colors">
      <Navbar />

      <main className="flex-1 space-y-16">
        {/* Pricing Cards */}
        <PricingSection />

        {/* Feature Comparison Matrix Table */}
        <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Compare Plan Capabilities
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Detailed breakdown of features included across every tier.
            </p>
          </div>

          <div className="border border-slate-200 dark:border-[#222E42] rounded-3xl overflow-hidden bg-white dark:bg-[#121927] shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-[#0B0F19] border-b border-slate-200 dark:border-[#222E42] font-bold text-slate-800 dark:text-slate-200">
                <tr>
                  <th className="p-4 pl-6">Feature</th>
                  <th className="p-4 text-center">Starter</th>
                  <th className="p-4 text-center text-red-600 dark:text-red-400">Business Pro</th>
                  <th className="p-4 text-center pr-6">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  { name: 'Monthly Invoices & Bills', starter: 'Unlimited', pro: 'Unlimited', ent: 'Unlimited' },
                  { name: 'Product SKUs in Inventory', starter: '1,000', pro: '10,000', ent: 'Unlimited' },
                  { name: 'Staff User Accounts', starter: '1 User', pro: '5 Users', ent: 'Unlimited' },
                  { name: 'WhatsApp Cloud API Dispatch', starter: false, pro: true, ent: true },
                  { name: 'GSTR-1 & GSTR-3B Tax Filing', starter: 'Basic', pro: 'Automated JSON', ent: 'Automated + CA' },
                  { name: 'Multi-Warehouse Transfers', starter: false, pro: true, ent: true },
                  { name: 'Dedicated Support Channel', starter: 'Email', pro: 'Priority WhatsApp', ent: '24/7 Dedicated Mgr' },
                  { name: 'Custom ERP & Tally Connector', starter: false, pro: false, ent: true },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                    <td className="p-4 pl-6 font-semibold text-slate-800 dark:text-slate-200">{row.name}</td>
                    <td className="p-4 text-center">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? <Check className="w-4 h-4 text-emerald-500 mx-auto" /> : <X className="w-4 h-4 text-slate-300 dark:text-slate-600 mx-auto" />
                      ) : (
                        <span className="font-mono">{row.starter}</span>
                      )}
                    </td>
                    <td className="p-4 text-center bg-red-50/20 dark:bg-red-950/10">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? <Check className="w-4 h-4 text-red-600 mx-auto" /> : <X className="w-4 h-4 text-slate-300 dark:text-slate-600 mx-auto" />
                      ) : (
                        <span className="font-mono font-bold text-red-600 dark:text-red-400">{row.pro}</span>
                      )}
                    </td>
                    <td className="p-4 text-center pr-6">
                      {typeof row.ent === 'boolean' ? (
                        row.ent ? <Check className="w-4 h-4 text-emerald-500 mx-auto" /> : <X className="w-4 h-4 text-slate-300 dark:text-slate-600 mx-auto" />
                      ) : (
                        <span className="font-mono">{row.ent}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Clear answers to common questions about subscriptions, setup, and billing.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-[#222E42] bg-white dark:bg-[#121927] overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-sm text-slate-900 dark:text-white flex items-center justify-between gap-4"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        isOpen ? 'rotate-180 text-red-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800/80 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
