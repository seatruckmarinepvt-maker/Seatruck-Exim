/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from './types';
import { TRANSLATIONS } from './data';
import Navbar from './components/Navbar';

// Page Components (Lazy Loaded for Route Code-Splitting)
const Home = lazy(() => import('./components/pages/Home'));
const AboutUs = lazy(() => import('./components/pages/AboutUs'));
const Products = lazy(() => import('./components/pages/Products'));
const ServicesAndIndustries = lazy(() => import('./components/pages/ServicesAndIndustries'));
const NetworkAndLogistics = lazy(() => import('./components/pages/NetworkAndLogistics'));
const CompanyResources = lazy(() => import('./components/pages/CompanyResources'));
const ContactAndQuote = lazy(() => import('./components/pages/ContactAndQuote'));
const LegalAndMisc = lazy(() => import('./components/pages/LegalAndMisc'));

import { ASSET_LOGOS, handleImageError } from './utils/imageUtils';

import { ArrowUp, CheckCircle, Send } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 4000);
    }
  };

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  // Dynamic Browser Title changes and Search Engine Optimization (SEO Schema injection)
  useEffect(() => {
    const pageTitle = activeSection.charAt(0).toUpperCase() + activeSection.slice(1);
    document.title = `Seatruck Exim Services | ${pageTitle} | Global Trade Excellence`;
    
    // Inject Meta Keywords, Meta Description and Canonical Link dynamically
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', t.hero_subtitle || "Ethical Agritech Trade Architect");

    let metaKeys = document.querySelector('meta[name="keywords"]');
    if (!metaKeys) {
      metaKeys = document.createElement('meta');
      metaKeys.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeys);
    }
    metaKeys.setAttribute('content', 'agro, import, export, sea freight, basmati, cashew nuts, almonds, cardamom, turmeric, cold chain logistics, Mundra Hub, Setruck, global trade');

    // Dynamic JSON-LD Structured Data Schema implementation
    let ldScript = document.getElementById('json-ld-schema');
    if (!ldScript) {
      ldScript = document.createElement('script');
      ldScript.setAttribute('id', 'json-ld-schema');
      ldScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(ldScript);
    }
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ImportExportBusiness",
      "name": "Seatruck Exim Services",
      "description": t.hero_subtitle || "Ethical Agritech Trade Architect",
      "url": window.location.href,
      "email": "info@setruckexim.com",
      "telephone": "+91 91676 04059",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office No. E-712, Tower – II, Floor No. 7th, Plot No. R‑11, Seawoods Grand Central, Sector‑40, Nerul, Darave",
        "addressLocality": "Thane",
        "addressRegion": "Maharashtra",
        "postalCode": "400706",
        "addressCountry": "IN"
      },
      "knowsAbout": ["Agricultural exports", "Ocean Cold Chain Logistics", "Cashew Nuts Sourcing", "Long Grain Rice Trade", "Spices Commodity Scheduling"],
      "areaServed": ["Middle East", "Europe", "Africa", "North America", "Southeast Asia"]
    };

    ldScript.innerHTML = JSON.stringify(structuredData);
  }, [lang, activeSection, t]);

  // Handle window scrolling to toggle scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hash-based routing system supporting custom query parameters
  useEffect(() => {
    const handleHashChange = () => {
      const fullHash = window.location.hash.replace('#', '');
      const parts = fullHash.split('?');
      const hash = parts[0];
      
      const validPages = [
        'home', 'about', 'products', 'product-details', 
        'services', 'industries', 'quality', 'network', 
        'logistics', 'news', 'faqs', 'careers', 
        'contact', 'quote', 'privacy', 'terms', '404'
      ];
      
      if (parts[1]) {
        // Parse custom key-value params (e.g. #product-details?id=cashews)
        const queryParams = new URLSearchParams(parts[1]);
        const productId = queryParams.get('id');
        if (productId) {
          setSelectedProductId(productId);
        }
      } else {
        setSelectedProductId(undefined);
      }

      if (validPages.includes(hash)) {
        setActiveSection(hash);
      } else if (!hash) {
        setActiveSection('home');
        window.history.replaceState(null, '', '#home');
      } else {
        setActiveSection('404');
      }
      
      // Instantly scroll to the top of the new page
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initialize active page on mount
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleNavigate = (sectionId: string, params?: Record<string, string>) => {
    let finalHash = sectionId;
    if (params) {
      const queryParams = new URLSearchParams(params);
      finalHash = `${sectionId}?${queryParams.toString()}`;
    }
    
    window.location.hash = finalHash;
    setActiveSection(sectionId);
    if (params?.id) {
      setSelectedProductId(params.id);
    } else {
      setSelectedProductId(undefined);
    }
    window.scrollTo(0, 0);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isRtl = lang === 'ar';

  return (
    <div 
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-[#f8fafc] text-slate-900 font-sans flex flex-col justify-between selection:bg-emerald-600 selection:text-white ${isRtl ? 'text-right' : 'text-left'}`}
    >
      
      {/* Sticky Header Navigation */}
      <Navbar
        currentLang={lang}
        onLanguageChange={(newLocale) => setLang(newLocale)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main View Router */}
      <main className="flex-grow pt-0">
        <Suspense fallback={
          <div className="min-h-[70vh] flex items-center justify-center bg-[#f8fafc]">
            <div className="w-8 h-8 border-3 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection + (selectedProductId || '')}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {activeSection === 'home' && (
                <Home lang={lang} onNavigate={handleNavigate} />
              )}
              
              {activeSection === 'about' && (
                <AboutUs lang={lang} onNavigate={handleNavigate} />
              )}
              
              {(activeSection === 'products' || activeSection === 'product-details') && (
                <Products 
                  lang={lang} 
                  selectedProductId={selectedProductId}
                  onNavigate={handleNavigate} 
                />
              )}
              
              {(activeSection === 'services' || activeSection === 'industries' || activeSection === 'quality') && (
                <ServicesAndIndustries 
                  lang={lang} 
                  onNavigate={handleNavigate} 
                />
              )}
              
              {(activeSection === 'network' || activeSection === 'logistics') && (
                <NetworkAndLogistics 
                  lang={lang} 
                  onNavigate={handleNavigate} 
                />
              )}
              
              {(activeSection === 'news' || activeSection === 'faqs' || activeSection === 'careers') && (
                <CompanyResources 
                  lang={lang} 
                  activeSection={activeSection as any} 
                  onNavigate={handleNavigate} 
                />
              )}
              
              {(activeSection === 'contact' || activeSection === 'quote') && (
                <ContactAndQuote 
                  lang={lang} 
                  onNavigate={handleNavigate} 
                />
              )}
              
              {(activeSection === 'privacy' || activeSection === 'terms' || activeSection === '404') && (
                <LegalAndMisc 
                  lang={lang} 
                  activeSection={activeSection as any} 
                  onNavigate={handleNavigate} 
                />
              )}
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>

      {/* Corporate Premium Footer */}
      <footer className="relative bg-[#001802] border-t border-slate-800 pt-16 pb-12 text-slate-400 select-none overflow-hidden text-start">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
            {/* Brand details */}
            <div className="lg:col-span-5 space-y-6 text-start">
              <div className="flex items-center gap-3">
                <div className="h-12 w-auto min-w-[3rem] flex items-center justify-center overflow-hidden shadow-md rounded-xl bg-white p-1 shrink-0">
                  <img 
                    src={ASSET_LOGOS.main} 
                    alt="SEATRUCK EXIM SERVICES Logo" 
                    loading="lazy"
                    className="h-full w-auto object-contain" 
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImageError(e, 'logo')}
                  />
                </div>
                <div className="text-start">
                  <span className="font-display font-black text-sm tracking-tight text-white block">
                    SEATRUCK EXIM SERVICES
                  </span>
                  <span className="text-[10px] tracking-wider text-emerald-400 font-bold block uppercase font-mono">
                    SEAWAYS TO ROADWAYS
                  </span>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed max-w-md font-medium">
                {t.footer_tag}
              </p>


            </div>

            {/* Quick Sourcing links */}
            <div className="lg:col-span-3 space-y-4 text-start">
              <h4 className="font-display font-bold text-xs uppercase text-white tracking-widest font-mono">
                {lang === 'es' ? "Navegación Comercial" : lang === 'ar' ? "أدلة التجارة" : lang === 'hi' ? "व्यापार निर्देशिका" : lang === 'zh' ? "贸易目录" : "Trade Directories"}
              </h4>
              <ul className="space-y-2.5 text-xs font-semibold text-start">
                {[
                  { name: lang === 'es' ? "Grados de Commodities" : lang === 'ar' ? "دليل السلع" : lang === 'hi' ? "वस्तु निर्देशिका" : lang === 'zh' ? "商品目录" : "Commodity Directory", hash: 'products' },
                  { name: lang === 'es' ? "Logística y Contenedores" : lang === 'ar' ? "معدات الشحن الجاف والمبرد" : lang === 'hi' ? "रीफर और सूखी सामग्री" : lang === 'zh' ? "冷藏和干货设备" : "Reefer & Dry Equipment", hash: 'logistics' },
                  { name: lang === 'es' ? "Líneas de Molienda" : lang === 'ar' ? "الخدمات والمعالجة" : lang === 'hi' ? "सेवाएं और प्रसंस्करण" : lang === 'zh' ? "服务和加工" : "Services & Processing", hash: 'services' },
                  { name: lang === 'es' ? "Normas de Calidad" : lang === 'ar' ? "معايير الجودة (APEDA)" : lang === 'hi' ? "गुणवत्ता मानक (APEDA)" : lang === 'zh' ? "质量标准 (APEDA)" : "Quality Standards (APEDA)", hash: 'quality' },
                  { name: lang === 'es' ? "Solicitar Cotización" : lang === 'ar' ? "طلب مقترح تجاري" : lang === 'hi' ? "थोक प्रस्ताव का अनुरोध" : lang === 'zh' ? "请求大宗方案" : "Request Bulk Proposal", hash: 'quote' }
                ].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${link.hash}`}
                      onClick={(e) => { e.preventDefault(); handleNavigate(link.hash); }}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Interactive column */}
            <div className="lg:col-span-4 space-y-4 text-start">
              <h4 className="font-display font-bold text-xs uppercase text-white tracking-widest font-mono">
                {lang === 'es' ? "Boletín Agrícola Semanal" : lang === 'ar' ? "معلومات سوق الزراعة" : lang === 'hi' ? "कृषि-व्यापार बाजार जानकारी" : lang === 'zh' ? "农业贸易市场情报" : "Agri-Trade Market Intel"}
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed font-semibold">
                {lang === 'es'
                  ? "Suscríbase para recibir informes técnicos de cosechas de origen, tarifas de fletes marítimos y regulaciones fitosanitarias mundiales."
                  : lang === 'ar'
                  ? "اشترك لتلقي توقعات إنتاج المزارع المباشرة، ومؤشرات شحن الحاويات المبردة، وتحديثات التخليص الجمركي."
                  : lang === 'hi'
                  ? "सीधे कृषि उत्पादन पूर्वानुमान, वैश्विक रीफर शिपिंग सूचकांक, और सीमा शुल्क निकासी अपडेट प्राप्त करने के लिए सदस्यता लें।"
                  : lang === 'zh'
                  ? "订阅以接收产地农作物产量预测、全球冷链航运指数以及海关清关指南。"
                  : "Subscribe to receive direct farm yield forecasts, global reefer shipping indexes, and FDA/EFSA port clearance updates."
                }
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="trade@yourfirm.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full pl-4 pr-12 py-3 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 h-8 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg flex items-center justify-center transition-all cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                <AnimatePresence>
                  {newsletterSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400"
                    >
                      <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{lang === 'es' ? "Registro completado con éxito." : lang === 'ar' ? "تم التسجيل بنجاح في نشرة السوق." : lang === 'hi' ? "बाजार बुलेटिन के लिए सफलतापूर्वक पंजीकृत।" : lang === 'zh' ? "成功订阅市场简报。" : "Successfully registered for market bulletins."}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>

          {/* Bottom regulatory bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
            <p className="text-center sm:text-start font-medium">
              {t.footer_text}
            </p>
            <div className="flex gap-4 font-mono uppercase tracking-wider text-[10px] font-bold">
              <a href="#privacy" onClick={(e) => { e.preventDefault(); handleNavigate('privacy'); }} className="hover:text-white transition-colors">Privacy</a>
              <span className="text-slate-800">•</span>
              <a href="#terms" onClick={(e) => { e.preventDefault(); handleNavigate('terms'); }} className="hover:text-white transition-colors">Terms of Carriage</a>
              <span className="text-slate-800">•</span>
              <a href="#faqs" onClick={(e) => { e.preventDefault(); handleNavigate('faqs'); }} className="hover:text-white transition-colors">FAQS</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Back to top scroll button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 p-3.5 rounded-full text-white shadow-xl cursor-pointer select-none border border-emerald-500"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 font-extrabold" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
