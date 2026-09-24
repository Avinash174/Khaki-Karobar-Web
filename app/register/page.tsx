'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Mail,
  Phone,
  User,
  Lock,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('RETAIL');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      // Store trial registration and redirect to admin panel
      try {
        localStorage.setItem(
          'khaki_user',
          JSON.stringify({ name, phone, email, businessName, businessType })
        );
      } catch {}
      setTimeout(() => {
        window.location.href = 'http://localhost:3000/admin/dashboard';
      }, 1500);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-red-600 selection:text-white transition-colors">
      <Navbar />

      <main className="flex-1 py-16 px-4 sm:px-6 max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200/80 dark:border-red-900 text-red-600 dark:text-red-400 text-xs font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>14-Day Full Access Free Trial</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Start Managing Your Business Smarter
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Get instant access to billing, inventory, GST returns, and WhatsApp dispatches. No credit card required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121927] border-2 border-slate-200 dark:border-[#222E42] shadow-xl text-left space-y-5">
            {success ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Welcome to Khaki Karobar!
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Your enterprise trial account has been provisioned. Redirecting to your live admin dashboard...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ramesh Patel"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-[#222E42] bg-slate-50/50 dark:bg-[#0B0F19] text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Business Legal Name *
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="Patel Textiles & Uniforms"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-[#222E42] bg-slate-50/50 dark:bg-[#0B0F19] text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Mobile Number (for WhatsApp Alerts) *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-[#222E42] bg-slate-50/50 dark:bg-[#0B0F19] text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Work Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ramesh@pateltextiles.in"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-[#222E42] bg-slate-50/50 dark:bg-[#0B0F19] text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Primary Business Type
                    </label>
                    <select
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-[#222E42] bg-slate-50/50 dark:bg-[#0B0F19] text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    >
                      <option value="RETAIL">Retail Counter / Store</option>
                      <option value="WHOLESALE">Wholesale & B2B Supply</option>
                      <option value="DISTRIBUTOR">Regional Distributor</option>
                      <option value="MANUFACTURING">Manufacturing Unit</option>
                      <option value="SERVICE">Service & Contracting</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Create Password *
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Min. 8 characters"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-[#222E42] bg-slate-50/50 dark:bg-[#0B0F19] text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-black text-xs rounded-xl shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <span>{submitting ? 'Setting up Trial...' : 'Create Account & Start Free Trial'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Trust & Value Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-6 rounded-3xl bg-slate-100/70 dark:bg-[#121927] border border-slate-200/80 dark:border-[#222E42] space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Everything Included During Trial:
              </h3>
              <div className="space-y-3">
                {[
                  'Unlimited GST billing & invoice numbering',
                  'Inventory tracking with barcode lookup',
                  'Official WhatsApp invoice dispatch testing',
                  'Live Profit & Loss statement calculation',
                  'Zero commitment — cancel anytime with zero charges',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200/70 dark:border-[#1E293B] text-xs text-slate-500 space-y-1">
              <p className="font-bold text-slate-800 dark:text-slate-200">Already have an account?</p>
              <p>
                <Link href="/login" className="text-red-600 font-bold hover:underline">
                  Sign in here to your admin portal →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
