'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  LayoutDashboard,
  ShoppingCart,
  ShoppingBag,
  Package,
  Users,
  Truck,
  BarChart3,
  Settings,
  Plus,
  Receipt,
  CreditCard,
  UserPlus,
  Box,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

export function DashboardPreviewMockup() {
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  const sidebarItems = [
    { label: 'Dashboard', icon: LayoutDashboard },
    { label: 'Sales', icon: ShoppingCart },
    { label: 'Purchases', icon: ShoppingBag },
    { label: 'Inventory', icon: Package },
    { label: 'Customers', icon: Users },
    { label: 'Suppliers', icon: Truck },
    { label: 'Reports', icon: BarChart3 },
    { label: 'Settings', icon: Settings },
  ];

  const kpis = [
    { label: 'Total Sales', value: '₹2,45,000', change: '+12%', isPositive: true },
    { label: 'Total Purchases', value: '₹1,25,000', change: '+8%', isPositive: true },
    { label: 'Customers', value: '432', change: '+18%', isPositive: true },
    { label: 'Revenue', value: '₹1,20,000', change: '+15%', isPositive: true },
  ];

  const recentInvoices = [
    { id: 'INV-1024', amount: '₹14,750', status: 'Paid', client: 'Apex Retailers', time: '10 mins ago' },
    { id: 'INV-1023', amount: '₹8,200', status: 'Pending', client: 'Metro Traders', time: '2 hours ago' },
    { id: 'INV-1022', amount: '₹21,500', status: 'Paid', client: 'Swastik Textiles', time: 'Yesterday' },
  ];

  const quickActions = [
    { label: 'Create Invoice', icon: Receipt },
    { label: 'Add Customer', icon: UserPlus },
    { label: 'Add Product', icon: Box },
    { label: 'Record Payment', icon: CreditCard },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto rounded-3xl bg-white dark:bg-[#121927] border border-slate-200/90 dark:border-[#222E42] shadow-2xl p-4 sm:p-5 space-y-4 text-left relative overflow-hidden transition-all group hover:border-red-500/40">
      {/* Top Window Chrome */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-[#222E42]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="ml-2 text-[11px] font-mono text-slate-400">app.khakikarobar.in/admin</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live Cloud Sync
          </span>
        </div>
      </div>

      {/* Main Mockup Body: Split Layout */}
      <div className="grid grid-cols-12 gap-3 sm:gap-4 items-start">
        {/* Left Mini Sidebar (Required by Section 4) */}
        <div className="col-span-3 hidden sm:flex flex-col space-y-1 p-2 rounded-2xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200/70 dark:border-[#1E293B]">
          <div className="flex items-center gap-2 px-2 py-1.5 mb-1 border-b border-slate-200/60 dark:border-slate-800">
            <div className="w-5 h-5 rounded-md bg-red-600 text-white font-bold flex items-center justify-center text-[10px]">
              K
            </div>
            <span className="text-[11px] font-bold text-slate-900 dark:text-white truncate">Khaki Karobar</span>
          </div>

          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu === item.label;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => setActiveMenu(item.label)}
                className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-xl text-[10px] font-semibold transition-all ${
                  isActive
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Dashboard Area (9 cols on desktop, 12 on mobile) */}
        <div className="col-span-12 sm:col-span-9 space-y-3.5">
          {/* Top Bar with Business Name & Month */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Baner Hub • Pune</p>
              <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white tracking-tight">
                Business Analytics Overview
              </h3>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200/60 dark:border-red-900/40">
              September 2026
            </span>
          </div>

          {/* 4 KPI Cards (Total Sales, Total Purchases, Customers, Revenue) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {kpis.map((kpi, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200/70 dark:border-[#1E293B] space-y-0.5"
              >
                <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate block">
                  {kpi.label}
                </span>
                <p className="text-xs sm:text-sm font-black font-mono text-slate-900 dark:text-white">
                  {kpi.value}
                </p>
                <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                  <ArrowUpRight className="w-2.5 h-2.5" />
                  {kpi.change}
                </span>
              </div>
            ))}
          </div>

          {/* Sales Chart with Red-Accent Velocity Bars */}
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200/70 dark:border-[#1E293B] space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-800 dark:text-slate-200">Weekly Revenue Velocity</span>
              <span className="text-[10px] font-mono text-slate-500">Target: ₹3,00,000</span>
            </div>

            <div className="h-16 flex items-end justify-between gap-1.5 pt-1">
              {[45, 60, 52, 78, 65, 95, 70, 85, 100, 68].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                  <div
                    style={{ height: `${h}%` }}
                    className={`w-full rounded-t-md transition-all ${
                      i === 8
                        ? 'bg-red-600 shadow-md shadow-red-600/30'
                        : 'bg-slate-300 dark:bg-slate-700/80 group-hover:bg-red-400'
                    }`}
                  />
                  <span className="text-[8px] text-slate-400 font-mono">
                    {['15', '16', '17', '18', '19', '20', '21', '22', '23', '24'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Invoices Table (Required by Section 4) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-800 dark:text-slate-200">Recent Invoices</span>
              <span className="text-[10px] text-red-600 dark:text-red-400 font-bold hover:underline cursor-pointer">
                View All
              </span>
            </div>

            <div className="space-y-1.5">
              {recentInvoices.map((inv) => (
                <div
                  key={inv.id}
                  className="p-2 px-3 rounded-xl bg-slate-50/80 dark:bg-[#0B0F19]/80 border border-slate-200/60 dark:border-[#1E293B] flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-slate-800 dark:text-slate-200 text-[11px]">
                      {inv.id}
                    </span>
                    <span className="text-slate-400 text-[10px]">• {inv.client}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono font-black text-slate-900 dark:text-white text-[11px]">
                      {inv.amount}
                    </span>
                    <span
                      className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                        inv.status === 'Paid'
                          ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 border border-emerald-200 dark:border-emerald-800'
                          : 'bg-amber-50 dark:bg-amber-950/50 text-amber-600 border border-amber-200 dark:border-amber-800'
                      }`}
                    >
                      {inv.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions (Create Invoice, Add Customer, Add Product, Record Payment) */}
          <div className="pt-1 border-t border-slate-100 dark:border-[#222E42]">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Quick Actions
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {quickActions.map((qa, i) => {
                const Icon = qa.icon;
                return (
                  <button
                    key={i}
                    type="button"
                    className="p-1.5 rounded-xl bg-white dark:bg-[#161F30] border border-slate-200 dark:border-[#2A364F] hover:border-red-500 text-slate-700 dark:text-slate-300 hover:text-red-600 text-[10px] font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
                  >
                    <Icon className="w-3 h-3 text-red-600 shrink-0" />
                    <span className="truncate">{qa.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
