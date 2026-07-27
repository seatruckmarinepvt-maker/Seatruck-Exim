# Image Replacement Guide

This project maintains a single, centralized directory for all image assets:

`src/assets/images/`

---

## Inventory & Replacement Specifications

| Target Filename | Page / Module | Component File | Purpose | Recommended Dimensions | Max File Size | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `logo-main.webp` | All Pages | `Navbar.tsx`, `App.tsx` | Main brand identity & logo emblem | 600×160 px | < 25 KB | High |
| `hero-home-banner.webp` | Home | `Home.tsx` | Homepage hero background featuring cold-chain port terminal | 1920×1080 px | < 180 KB | High |
| `hero-about-company.webp` | About Us | `AboutUs.tsx` | Corporate headquarters header banner | 1920×800 px | < 140 KB | High |
| `hero-services-logistics.webp` | Services | `ServicesAndIndustries.tsx` | Cold-chain freight & ocean logistics header background | 1920×800 px | < 140 KB | High |
| `hero-products-harvest.webp` | Products | `Products.tsx` | Agro commodities catalog header background | 1920×800 px | < 140 KB | High |
| `hero-contact-shipping.webp` | Contact | `ContactAndQuote.tsx` | Ocean freight vessel shipping header background | 1920×600 px | < 110 KB | Medium |
| `hero-fruit-banner.webp` | Products | `data.ts`, `Products.tsx` | Fresh fruits export showcase banner | 1200×675 px | < 95 KB | Medium |
| `feature-agro-harvest.webp` | Home / Products | `data.ts`, `Home.tsx` | Farm harvest quality control feature card | 1200×675 px | < 95 KB | Medium |
| `product-cashew.webp` | Products | `data.ts`, `Products.tsx` | Premium Whole Cashew Nuts export photo | 800×800 px | < 60 KB | High |
| `product-pistachio.webp` | Products | `data.ts`, `Products.tsx` | Roasted Pistachio Nuts export photo | 800×800 px | < 60 KB | High |
| `product-onion.webp` | Products | `data.ts`, `Products.tsx` | Red Onions export commodity photo | 800×800 px | < 60 KB | High |
| `product-drumstick.webp` | Products | `data.ts`, `Products.tsx` | Fresh Moringa Drumsticks export commodity photo | 800×800 px | < 60 KB | High |
| `flag-india.webp` | About / Contact | `AboutUs.tsx`, `ContactAndQuote.tsx` | Official flag of India (Mundra Trade Desk) | 300×200 px | < 10 KB | Medium |
| `flag-uae.webp` | About / Contact | `AboutUs.tsx`, `ContactAndQuote.tsx` | Official flag of UAE (Dubai Gateway Desk) | 300×200 px | < 10 KB | Medium |
| `og-social-banner.webp` | Social | `index.html` | OpenGraph & Twitter preview banner for social shares | 1200×630 px | < 120 KB | Low |

---

## Instructions for Uploading New Assets

1. Convert your source image to **WebP** format.
2. Ensure the file name strictly matches one of the filenames listed above.
3. Save the WebP file directly into `src/assets/images/`.
4. The application will render your uploaded file immediately.
