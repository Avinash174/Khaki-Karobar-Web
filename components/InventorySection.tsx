'use client';

import React from 'react';
import Link from 'next/link';
import {
  Package,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Barcode,
  Layers,
  Building,
  RefreshCw,
  Search,
} from 'lucide-react';

export function InventorySection() {
  const inventoryItems = [
    { name: 'Khaki Uniform Shirt (Grade A)', sku: 'KK-SH-001', stock: 420, min: 50, warehouse: 'Main Depot (Pune)', status: 'Optimal' },
    { name: 'Tactical Heavy Cargo Trouser', sku: 'KK-TR-014', stock: 18, min: 25, warehouse: 'Baner Warehouse', status: 'Low Stock' },
    { name: 'Security Guard Cap with Badge', sku: 'KK-CP-088', stock: 110, min: 30, warehouse: 'Main Depot (Pune)', status: 'Optimal' },
    { name: 'Tactical Leather Boot (Size 9)', sku: 'KK-BT-092', stock: 6, min: 15, warehouse: 'Mumbai Transit', status: 'Critical' },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Inventory Dashboard Visual (Section 10) */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="rounded-3xl bg-white dark:bg-[#121927] border-2 border-slate-200 dark:border-[#222E42] p-5 sm:p-6 shadow-2xl space-y-4 text-left">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 flex items-center justify-center">
                  <Package className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white">Live Stock Register</h3>
                  <p className="text-[10px] text-slate-400 font-mono">3 Locations • 1,240 Total Units</p>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 border border-emerald-200 dark:border-emerald-800">
                Barcode Scanner Active
              </span>
            </div>

            {/* Quick Metrics inside Inventory Card */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200/70 dark:border-[#1E293B]">
                <span className="text-[10px] text-slate-400 block">Total SKUs</span>
                <span className="text-sm font-black font-mono text-slate-900 dark:text-white">348</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200/70 dark:border-[#1E293B]">
                <span className="text-[10px] text-slate-400 block">Low Stock</span>
                <span className="text-sm font-black font-mono text-amber-600">4 Items</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200/70 dark:border-[#1E293B]">
                <span className="text-[10px] text-slate-400 block">Stock Value</span>
                <span className="text-sm font-black font-mono text-slate-900 dark:text-white">₹14.8 L</span>
              </div>
            </div>

            {/* Live Stock Rows */}
            <div className="space-y-2 pt-1">
              {inventoryItems.map((item, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-50/70 dark:bg-[#0B0F19]/60 border border-slate-200/60 dark:border-[#1E293B] flex items-center justify-between text-xs"
                >
                  <div className="space-y-0.5">
                    <p className="font-bold text-slate-900 dark:text-white leading-tight">{item.name}</p>
                    <p className="text-[10px] text-slate-400 font-mono">
                      {item.sku} • {item.warehouse}
                    </p>
                  </div>

                  <div className="text-right space-y-0.5">
                    <p className="font-mono font-bold text-slate-900 dark:text-white">
                      {item.stock} <span className="text-[10px] text-slate-400 font-normal">units</span>
                    </p>
                    <span
                      className={`text-[9px] font-bold px-2 py-0.5 rounded-full inline-block ${
                        item.status === 'Optimal'
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600'
                          : item.status === 'Low Stock'
                          ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-600'
                          : 'bg-rose-50 dark:bg-rose-950/40 text-rose-600'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Barcode Action */}
            <div className="p-2.5 rounded-xl bg-red-50/60 dark:bg-red-950/30 border border-red-200/60 dark:border-red-900/40 flex items-center justify-between text-xs">
              <span className="font-bold text-red-700 dark:text-red-300 flex items-center gap-1.5 text-[11px]">
                <Barcode className="w-4 h-4" /> Ready for handheld barcode scanner
              </span>
              <span className="text-[10px] font-mono text-slate-500">Press F2 for quick scan</span>
            </div>
          </div>
        </div>

        {/* Right Column: Heading & Value Prop */}
        <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200/80 dark:border-red-900 text-red-600 dark:text-red-400 text-xs font-bold shadow-sm">
            <Package className="w-3.5 h-3.5" />
            <span>Warehouse & Stock Intelligence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Know Your Stock. <br />
            <span className="text-red-600">Control Your Business.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Never turn away a customer due to unexpected stockouts or hold excess dead inventory.
            Track every SKU across multiple stores, warehouses, and transit consignments in real time.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              'Real-time stock tracking across sales',
              'Automated low-stock alarms & reorder levels',
              'Multiple warehouse & branch transfers',
              'Granular product catalog management',
              'Damage & stock adjustment registers',
              'Handheld barcode & QR scanner support',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md group"
            >
              <span>Explore Stock Controls</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
