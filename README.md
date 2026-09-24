# Khaki Karobari — Official SaaS & Business Platform Website

![Khaki Karobari](https://img.shields.io/badge/Brand-KHAKI%20%7C%20KrypTech%E2%84%A2-red)
![Next.js](https://img.shields.io/badge/Next.js-14%20App%20Router-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwind-css)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success)

The official high-converting SaaS landing page, business presentation, and customer acquisition platform for **Khaki Karobari**, engineered by **Khaki KrypTech (India) Pvt. Ltd.**.

---

## 🌟 Features & Design System

- **Brand Colors (White + Red + Black):**
  - Crisp light canvases (`#FFFFFF`, `#F8FAFC`) with deep charcoal typography (`#0F172A`).
  - Dark mode surfaces (`#090D16` canvas, `#121927` cards, `#1E293B` borders).
  - Controlled Red accents (`#DC2626`) for primary conversion CTAs, highlights, badges, and active indicators.
- **Dynamic Theme System:** Fully responsive Light, Dark, and System theme synchronization.
- **Google Inter Typography:** Modern, legible typography loaded via `next/font/google`.
- **Interactive Dashboard Mockup:** Floating live preview showcase featuring real-time invoice velocity bars, GST status tags, and recent transactions.
- **7-Category Industry Trust Section:** Dedicated cards for Retail, Wholesale, Distributors, Manufacturers, Services, Freelancers/Professionals, and CA Firms.
- **Alternating Feature Showcases:**
  1. *Smart Invoicing & Instant WhatsApp:* Generate GST-compliant invoices and share PDF receipts via WhatsApp API in 1-click.
  2. *Live Inventory & Barcode Tracking:* Real-time stock alerts, multi-warehouse support, and barcode scanning.
  3. *Double-Entry P&L & Automated GST:* Automated GSTR-1, GSTR-3B preparation, profit & loss, and balance sheets.
- **Transparent Tiered Pricing:** Starter (₹499/mo), Business Pro (₹999/mo - Popular Choice), and Enterprise (₹2,499/mo).
- **Interactive Consultation Form:** Instant lead capture form with notification toasts.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Lucide Icons
- **Typography:** Google Inter
- **State & Theme:** React Context + HTML `data-theme` / `class="dark"`

---

## 💻 Getting Started

### 1. Prerequisites
- Node.js 18+ or 20+

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev -p 3001
```
Open [http://localhost:3001](http://localhost:3001) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 📁 Directory Structure

```
frontend-web/
├── app/
│   ├── layout.tsx                # Inter font, metadata, ThemeProvider
│   ├── page.tsx                  # High-converting SaaS landing page
│   └── globals.css               # Design system tokens and custom utilities
├── components/
│   ├── DashboardPreviewMockup.tsx # Interactive SaaS product preview
│   ├── TrustSection.tsx          # 7 business sectors supported
│   ├── FeatureShowcase.tsx       # Alternating feature spotlights
│   ├── PricingSection.tsx        # Tiered pricing plans with brand highlights
│   ├── ConsultationForm.tsx      # Interactive lead capture form
│   └── ThemeProvider.tsx         # Light, Dark, System theme controller
└── tailwind.config.js            # Extended color tokens and dark mode config
```

---

## 🛡️ License

Copyright © 2026 **Khaki KrypTech (India) Pvt. Ltd.** All Rights Reserved.
