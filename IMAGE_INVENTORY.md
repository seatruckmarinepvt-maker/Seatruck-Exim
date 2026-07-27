# Centralized Image Asset Inventory & Replacement Guide

## Project Overview
This document serves as the single source of truth for all image assets in **Seatruck Exim Services**. All website image assets reside strictly in a single centralized folder:

`src/assets/images/`

---

## Centralized Image Inventory

| Filename | Page | Component | Purpose | Rec. Dimensions | Rec. WebP Dimensions | Max File Size | Loading Strategy | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `logo-main.webp` | All Pages | `Navbar.tsx`, `App.tsx` (Footer) | Primary brand identity logo & emblem | 600×160 px | 600×160 px | < 25 KB | Eager / Preload | High |
| `hero-home-banner.webp` | Home | `Home.tsx` | Main homepage hero background featuring port & ocean cold chain terminal | 1920×1080 px | 1920×1080 px | < 180 KB | Preload / High Priority | High |
| `hero-about-company.webp` | About Us | `AboutUs.tsx` | Corporate background banner depicting international trade headquarters | 1920×800 px | 1920×800 px | < 140 KB | Eager | High |
| `hero-services-logistics.webp` | Services & Industries | `ServicesAndIndustries.tsx` | Freight terminal & ocean logistics header background | 1920×800 px | 1920×800 px | < 140 KB | Eager | High |
| `hero-products-harvest.webp` | Products | `Products.tsx` | Agro commodity harvest portfolio header background | 1920×800 px | 1920×800 px | < 140 KB | Eager | High |
| `hero-contact-shipping.webp` | Contact & Quote | `ContactAndQuote.tsx` | Ocean freight vessel shipping header banner | 1920×600 px | 1920×600 px | < 110 KB | Eager | Medium |
| `hero-fruit-banner.webp` | Products / Home | `data.ts`, `Products.tsx` | Fresh fruits export showcase banner | 1200×675 px | 1200×675 px | < 95 KB | Lazy | Medium |
| `feature-agro-harvest.webp` | Home / Products | `data.ts`, `Home.tsx` | Direct farm harvest quality assurance feature banner | 1200×675 px | 1200×675 px | < 95 KB | Lazy | Medium |
| `product-cashew.webp` | Products | `data.ts`, `Products.tsx` | Premium Whole Cashew Nuts export product photo | 800×800 px | 800×800 px | < 60 KB | Lazy | High |
| `product-pistachio.webp` | Products | `data.ts`, `Products.tsx` | Roasted Pistachio Nuts export product photo | 800×800 px | 800×800 px | < 60 KB | Lazy | High |
| `product-onion.webp` | Products | `data.ts`, `Products.tsx` | Red Onions export commodity photo | 800×800 px | 800×800 px | < 60 KB | Lazy | High |
| `product-drumstick.webp` | Products | `data.ts`, `Products.tsx` | Fresh Moringa Drumsticks export commodity photo | 800×800 px | 800×800 px | < 60 KB | Lazy | High |
| `flag-india.webp` | About Us / Contact | `AboutUs.tsx`, `ContactAndQuote.tsx` | Official flag of India (Mundra Trade Desk) | 300×200 px | 300×200 px | < 10 KB | Lazy | Medium |
| `flag-uae.webp` | About Us / Contact | `AboutUs.tsx`, `ContactAndQuote.tsx` | Official flag of UAE (Dubai Gateway Desk) | 300×200 px | 300×200 px | < 10 KB | Lazy | Medium |
| `og-social-banner.webp` | Meta / Social | `index.html` | OpenGraph & Twitter preview banner for social media sharing | 1200×630 px | 1200×630 px | < 120 KB | Async | Low |

---

## Asset Replacement Workflow

To replace or update any image on the website:

1. Prepare your optimized image file using the **WebP format**.
2. Name the file **exact matching filename** from the table above (e.g. `hero-home-banner.webp`).
3. Place the file inside:
   `src/assets/images/`
4. Re-run `npm run build` or start the dev server (`npm run dev`).
5. The application will automatically pick up the new file. If a file is absent, the application gracefully renders a vector SVG Data URI fallback so the site remains completely functional and visually pristine at all times.
