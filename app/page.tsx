'use client';

import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { TrustSection } from '../components/TrustSection';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { BillingSection } from '../components/BillingSection';
import { InventorySection } from '../components/InventorySection';
import { GstSection } from '../components/GstSection';
import { ReportsSection } from '../components/ReportsSection';
import { MultiDeviceSection } from '../components/MultiDeviceSection';
import { PricingSection } from '../components/PricingSection';
import { ConsultationForm } from '../components/ConsultationForm';
import { CtaSection } from '../components/CtaSection';
import { Footer } from '../components/Footer';

export default function WebsiteHomePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-red-600 selection:text-white transition-colors duration-200">
      {/* 1. Sticky Blurred Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section with Floating Business Cards & Realistic Dashboard Mockup */}
        <HeroSection />

        {/* 3. Trust Section with Business Categories */}
        <TrustSection />

        {/* 4. Core Features Grid with Visual Variety */}
        <FeaturesGrid />

        {/* 5. Deep-Dive Section: Billing & Invoicing */}
        <BillingSection />

        {/* 6. Deep-Dive Section: Inventory & Warehouse Intelligence */}
        <InventorySection />

        {/* 7. Deep-Dive Section: GST Compliance & Tax Breakdown */}
        <GstSection />

        {/* 8. Deep-Dive Section: Business Reports & Analytics */}
        <ReportsSection />

        {/* 9. Multi-Device Section: Desktop, Tablet, Mobile */}
        <MultiDeviceSection />

        {/* 10. Pricing Section */}
        <PricingSection />

        {/* 11. Consultation Lead Capture Form */}
        <ConsultationForm />

        {/* 12. Final High-Impact CTA */}
        <CtaSection />
      </main>

      {/* 13. Professional Footer */}
      <Footer />
    </div>
  );
}
