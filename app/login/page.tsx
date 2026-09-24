'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Lock,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export default function LoginPage() {
  const [identifier, setIdentifier] = useState('avinash@khaki.in');
  const [password, setPassword] = useState('••••••••••••');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Redirect to Admin Panel login or dashboard
    setTimeout(() => {
      window.location.href = 'http://localhost:3000/login';
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-red-600 selection:text-white transition-colors">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-xl shadow-red-600/30 mx-auto">
              K
            </div>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Sign In to Khaki Karobar
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Access your business administrative portal and live ledger
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-[#121927] border-2 border-slate-200 dark:border-[#222E42] shadow-2xl space-y-5 text-left">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Email or Registered Mobile Number
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="name@business.in or 9876543210"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-[#222E42] bg-slate-50/50 dark:bg-[#0B0F19] text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Account Password
                  </label>
                  <a href="#" className="text-[11px] font-semibold text-red-600 dark:text-red-400 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-[#222E42] bg-slate-50/50 dark:bg-[#0B0F19] text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded text-red-600 focus:ring-red-500 accent-red-600" />
                  <span className="text-slate-600 dark:text-slate-400 text-[11px]">Remember this browser</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs rounded-xl shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <span>{loading ? 'Authenticating...' : 'Sign In to Admin Portal'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0B0F19] text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>TLS 1.3 256-bit encrypted connection to Khaki Cloud</span>
            </div>
          </div>

          <div className="text-center text-xs text-slate-500">
            Don't have an enterprise account?{' '}
            <Link href="/register" className="font-bold text-red-600 dark:text-red-400 hover:underline">
              Start 14-Day Free Trial →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
