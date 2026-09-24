'use client';

import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#070A11] border-t border-slate-200/80 dark:border-[#222E42] py-16 px-4 sm:px-6 text-xs text-slate-500 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 text-left">
        {/* Brand Column (2 cols) */}
        <div className="col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center font-black text-white text-sm shadow-sm group-hover:scale-105 transition-transform">
              K
            </div>
            <span className="font-extrabold text-slate-900 dark:text-white text-base">
              Khaki <span className="text-red-600">Karobar</span>
            </span>
          </Link>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed text-xs">
            Smart business management for modern businesses. Engineered by Khaki KrypTech (India) Pvt. Ltd., Baner, Pune, Maharashtra.
          </p>
          <div className="pt-1 flex items-center gap-2 text-[11px] text-slate-400">
            <span>GSTIN: 27AABCK1234D1ZX</span>
            <span>•</span>
            <span>Made with pride in India 🇮🇳</span>
          </div>
        </div>

        {/* Product Column */}
        <div>
          <p className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-3">
            Product
          </p>
          <ul className="space-y-2">
            <li><Link href="/features" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Features</Link></li>
            <li><Link href="/pricing" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Pricing</Link></li>
            <li><Link href="/features" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">GST Billing</Link></li>
            <li><Link href="/features" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Inventory</Link></li>
            <li><Link href="/features" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Reports</Link></li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <p className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-3">
            Company
          </p>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Contact</Link></li>
            <li><Link href="/about" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Careers</Link></li>
            <li><Link href="/login" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Admin Portal</Link></li>
          </ul>
        </div>

        {/* Support & Legal Column */}
        <div>
          <p className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-3">
            Support & Legal
          </p>
          <ul className="space-y-2">
            <li><Link href="/contact" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Help Center</Link></li>
            <li><Link href="/contact" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Contact Support</Link></li>
            <li><Link href="/pricing" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">FAQs</Link></li>
            <li><span className="text-slate-400 hover:text-red-600 cursor-pointer transition-colors">Privacy Policy</span></li>
            <li><span className="text-slate-400 hover:text-red-600 cursor-pointer transition-colors">Terms & Conditions</span></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200/80 dark:border-[#1E293B] flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© 2026 Khaki KrypTech (India) Pvt. Ltd. All rights reserved.</p>
        <div className="flex items-center gap-4 text-[11px] font-semibold text-slate-600 dark:text-slate-400">
          <span>Khaki Karobar — White • Red • Black</span>
        </div>
      </div>
    </footer>
  );
}
