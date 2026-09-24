'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Shield,
  Layers,
  ChevronDown,
} from 'lucide-react';
import { ThemeToggle } from './ThemeProvider';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'backdrop-blur-md bg-white/85 dark:bg-[#090D16]/85 border-b border-slate-200/80 dark:border-[#222E42] shadow-sm'
          : 'bg-white/60 dark:bg-[#090D16]/60 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform">
            <span className="text-white font-black text-2xl tracking-wider">K</span>
          </div>
          <div>
            <span className="font-black text-xl tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
              Khaki <span className="text-red-600">Karobar</span>
            </span>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wide">
              Smart Business Management
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-[#121927]/60 p-1.5 rounded-full border border-slate-200/60 dark:border-[#222E42]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-white dark:bg-[#1A2333] text-red-600 dark:text-red-400 shadow-sm font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/40'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="/login"
            className="px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            Sign In
          </Link>

          <Link
            href="/register"
            className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-wide rounded-xl shadow-lg shadow-red-600/25 transition-all flex items-center gap-1.5 group"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#161F30] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-red-600" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#121927] border-b border-slate-200 dark:border-[#222E42] px-6 py-5 space-y-4 text-sm animate-in slide-in-from-top-2 duration-150 shadow-xl">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-xl font-semibold transition-colors ${
                    isActive
                      ? 'bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-[#222E42] flex flex-col gap-2.5">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl border border-slate-200 dark:border-[#222E42] font-bold text-xs text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Sign In to Admin
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-md shadow-red-600/25 flex items-center justify-center gap-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
