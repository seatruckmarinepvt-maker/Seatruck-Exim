/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Mail, 
  PhoneCall, 
  MapPin 
} from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../../types';
import { ASSET_HEROES, ASSET_FLAGS, handleImageError } from '../../utils/imageUtils';

interface ContactAndQuoteProps {
  lang: Language;
  onNavigate: (page: string) => void;
}

const LOCAL_TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    hero_badge: "CONTACT US",
    hero_title: "Contact Us",
    breadcrumb_home: "Home",
    intro_title: "Let's Connect",
    intro_desc: "Whether you have product inquiries, sourcing requirements, export opportunities, or partnership proposals, our team is ready to assist you. We are committed to providing prompt, professional, and reliable support for your international trade requirements.",
    card_email_title: "Email",
    card_email_sub: "General Business Enquiries",
    card_phone_title: "Phone Numbers",
    card_phone_india: "India",
    card_phone_dubai: "Dubai",
    card_hq_title: "Corporate Headquarters",
    desks_badge: "REGISTERED CORPORATE DESKS",
    desks_title: "Corporate Office Locations",
    desks_subtitle: "Supporting international sourcing, documentation, logistics coordination, and global trade partnerships.",
    desk1_title: "Corporate Headquarters",
    desk1_sub: "Navi Mumbai",
    desk2_title: "Middle East & Global Sourcing Gate",
    desk2_sub: "Dubai FZCO",
    company_india: "Seatruck Exim Services",
    company_uae: "Seatruck Nexusbridge General Trading - FZCO",
  },
  es: {
    hero_badge: "CONTÁCTENOS",
    hero_title: "Contacto",
    breadcrumb_home: "Inicio",
    intro_title: "Conéctese con Nosotros",
    intro_desc: "Ya sea que tenga consultas sobre productos, requisitos de abastecimiento, oportunidades de exportación o propuestas de asociación, nuestro equipo está listo para ayudarlo. Estamos comprometidos a brindar un soporte rápido, profesional y confiable para sus necesidades comerciales internacionales.",
    card_email_title: "Correo Electrónico",
    card_email_sub: "Consultas Comerciales Generales",
    card_phone_title: "Teléfonos",
    card_phone_india: "India",
    card_phone_dubai: "Dubái",
    card_hq_title: "Sede Central Corporativa",
    desks_badge: "OFICINAS CORPORATIVAS REGISTRADAS",
    desks_title: "Ubicaciones de Oficinas",
    desks_subtitle: "Apoyando el abastecimiento internacional, la documentación, la coordinación logística y las asociaciones comerciales globales.",
    desk1_title: "Sede Central Corporativa",
    desk1_sub: "Navi Mumbai",
    desk2_title: "Puerta de Sourcing de Medio Oriente y Global",
    desk2_sub: "Dubái FZCO",
    company_india: "Seatruck Exim Services",
    company_uae: "Seatruck Nexusbridge General Trading - FZCO",
  },
  ar: {
    hero_badge: "اتصل بنا",
    hero_title: "اتصل بنا",
    breadcrumb_home: "الرئيسية",
    intro_title: "فلنتواصل معاً",
    intro_desc: "سواء كان لديك استفسارات عن المنتجات، أو متطلبات التوريد، أو فرص التصدير، أو مقترحات الشراكة، فإن فريقنا جاهز لمساعدتك. نحن ملتزمون بتقديم دعم سريع ومهني وموثوق لمتطلبات التجارة الدولية الخاصة بك.",
    card_email_title: "البريد الإلكتروني",
    card_email_sub: "الاستفسارات التجارية العامة",
    card_phone_title: "أرقام الهاتف",
    card_phone_india: "الهند",
    card_phone_dubai: "دبي",
    card_hq_title: "المقر الرئيسي للشركة",
    desks_badge: "مكاتب الشركات المسجلة",
    desks_title: "مواقع مكاتب الشركة",
    desks_subtitle: "دعم التوريد الدولي، والتوثيق، والتنسيق اللوجستي، وشراكات التجارة العالمية.",
    desk1_title: "المقر الرئيسي للشركة",
    desk1_sub: "نافي مومباي",
    desk2_title: "بوابة الشرق الأوسط والتوريد العالمي",
    desk2_sub: "دبي FZCO",
    company_india: "Seatruck Exim Services",
    company_uae: "Seatruck Nexusbridge General Trading - FZCO",
  },
  hi: {
    hero_badge: "संपर्क करें",
    hero_title: "संपर्क करें",
    breadcrumb_home: "मुख्य पृष्ठ",
    intro_title: "आइए जुड़ें",
    intro_desc: "चाहे आपके पास उत्पाद पूछताछ, सोर्सिंग आवश्यकताएं, निर्यात के अवसर, या साझेदारी प्रस्ताव हों, हमारी टीम आपकी सहायता के लिए तैयार है। हम आपकी अंतर्राष्ट्रीय व्यापार आवश्यकताओं के लिए त्वरित, पेशेवर और विश्वसनीय सहायता प्रदान करने के लिए प्रतिबद्ध हैं।",
    card_email_title: "ईमेल",
    card_email_sub: "सामान्य व्यावसायिक पूछताछ",
    card_phone_title: "फ़ोन नंबर",
    card_phone_india: "भारत",
    card_phone_dubai: "दुबई",
    card_hq_title: "कॉर्पोरेट मुख्यालय",
    desks_badge: "पंजीकृत कॉर्पोरेट डेस्क",
    desks_title: "कॉर्पोरेट कार्यालय स्थान",
    desks_subtitle: "अंतर्राष्ट्रीय सोर्सिंग, प्रलेखन, रसद समन्वय और वैश्विक व्यापार साझेदारी का समर्थन करना।",
    desk1_title: "कॉर्पोरेट मुख्यालय",
    desk1_sub: "नवी मुंबई",
    desk2_title: "मध्य पूर्व और वैश्विक सोर्सिंग द्वार",
    desk2_sub: "दुबई FZCO",
    company_india: "Seatruck Exim Services",
    company_uae: "Seatruck Nexusbridge General Trading - FZCO",
  },
  zh: {
    hero_badge: "联系我们",
    hero_title: "联系我们",
    breadcrumb_home: "首页",
    intro_title: "与我们联络",
    intro_desc: "无论您有产品咨询、采购需求、出口机会还是合作建议，我们的团队都随时准备为您提供帮助。我们致力于为您的国际贸易需求提供及时、专业和可靠的支持。",
    card_email_title: "电子邮箱",
    card_email_sub: "一般业务咨询",
    card_phone_title: "电话号码",
    card_phone_india: "印度",
    card_phone_dubai: "迪拜",
    card_hq_title: "集团总部",
    desks_badge: "官方注册公司机构",
    desks_title: "集团全球办事处分布",
    desks_subtitle: "支持国际采购、单证处理、物流协调及全球贸易伙伴关系。",
    desk1_title: "集团总部",
    desk1_sub: "新孟买",
    desk2_title: "中东及全球采购门户",
    desk2_sub: "迪拜 FZCO",
    company_india: "Seatruck Exim Services",
    company_uae: "Seatruck Nexusbridge General Trading - FZCO",
  }
};

export default function ContactAndQuote({ lang, onNavigate }: ContactAndQuoteProps) {
  const t = LOCAL_TRANSLATIONS[lang] || LOCAL_TRANSLATIONS['en'];
  const isRtl = lang === 'ar';

  return (
    <div 
      id="about-root" 
      className="bg-white text-slate-900 min-h-screen text-left font-sans pb-16" 
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      
      {/* ================= HERO BANNER ================= */}
      <section 
        className="relative w-full h-[380px] md:h-[420px] overflow-hidden flex items-center justify-center select-none"
        style={{
          backgroundImage: `url(${ASSET_HEROES.contact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Dark 55% overlay */}
        <div className="absolute inset-0 bg-[#071F18]/55 z-0" />

        {/* Centered Hero Content */}
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10 space-y-6 mt-16">
          
          {/* Large Heading */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display text-white"
          >
            {t.hero_title}
          </motion.h1>

          {/* Breadcrumbs */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-slate-300"
          >
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-[#C9A227] transition-colors cursor-pointer uppercase font-bold"
            >
              {t.breadcrumb_home}
            </button>
            <span className="text-[#C9A227] font-extrabold font-mono">&gt;</span>
            <span className="text-white uppercase font-bold">{t.hero_title}</span>
          </motion.div>

        </div>
      </section>

      {/* ================= INTRODUCTION SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight font-display">
            {t.intro_title}
          </h2>

          {/* Gold Underline */}
          <div className="w-16 h-1 bg-[#C9A227] mx-auto rounded-full" />

          <p className="text-slate-650 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            {t.intro_desc}
          </p>

        </div>
      </section>

      {/* ================= CONTACT INFORMATION CARDS ================= */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Email */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white border border-slate-200/80 rounded-[18px] p-8 shadow-md shadow-slate-100/40 flex flex-col items-center text-center space-y-6"
            >
              {/* Circular Green Icon */}
              <div className="w-16 h-16 rounded-full bg-[#0F3D2E] flex items-center justify-center text-white shadow-sm shadow-[#0F3D2E]/10">
                <Mail className="w-7 h-7 stroke-[1.5]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-extrabold text-[#0F3D2E] tracking-tight font-display">
                  {t.card_email_title}
                </h3>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  {t.card_email_sub}
                </p>
              </div>

              <a 
                href="mailto:info@seatruckexim.com" 
                className="text-base font-bold text-[#0F3D2E] hover:text-[#C9A227] transition-colors break-all font-mono"
              >
                info@seatruckexim.com
              </a>
            </motion.div>

            {/* Card 2: Phone Numbers */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white border border-slate-200/80 rounded-[18px] p-8 shadow-md shadow-slate-100/40 flex flex-col items-center text-center space-y-6"
            >
              {/* Circular Green Icon */}
              <div className="w-16 h-16 rounded-full bg-[#0F3D2E] flex items-center justify-center text-white shadow-sm shadow-[#0F3D2E]/10">
                <PhoneCall className="w-7 h-7 stroke-[1.5]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-extrabold text-[#0F3D2E] tracking-tight font-display">
                  {t.card_phone_title}
                </h3>
              </div>

              <div className="space-y-4 font-semibold text-xs text-slate-700">
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-mono mb-0.5">{t.card_phone_india}</span>
                  <a href="tel:+919167604059" className="text-sm font-bold text-[#0F3D2E] hover:text-[#C9A227] transition-colors font-mono">
                    +91 91676 04059
                  </a>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-mono mb-0.5">{t.card_phone_dubai}</span>
                  <a href="tel:+971509199209" className="text-sm font-bold text-[#0F3D2E] hover:text-[#C9A227] transition-colors font-mono">
                    +971 50 919 9209
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Corporate Headquarters Address */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white border border-slate-200/80 rounded-[18px] p-8 shadow-md shadow-slate-100/40 flex flex-col items-center text-center space-y-6"
            >
              {/* Circular Green Icon */}
              <div className="w-16 h-16 rounded-full bg-[#0F3D2E] flex items-center justify-center text-white shadow-sm shadow-[#0F3D2E]/10">
                <MapPin className="w-7 h-7 stroke-[1.5]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-extrabold text-[#0F3D2E] tracking-tight font-display">
                  {t.card_hq_title}
                </h3>
              </div>

              <p className="text-xs text-slate-650 leading-relaxed font-semibold">
                Office No. E-712, Tower – II,<br />
                Floor No. 7th, Plot No. R‑11,<br />
                Nexus Seawoods (Seawoods Grand Central), Sector‑40,<br />
                Nerul, Darave, Thane,<br />
                Maharashtra, India – 400706.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE MAP ================= */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full rounded-[18px] overflow-hidden border border-slate-200/80 shadow-md shadow-slate-100/50 h-[450px]"
          >
            <iframe
              src="https://maps.google.com/maps?q=Nexus+Seawoods+Mall,+Seawoods+Grand+Central,+Sector+40,+Seawoods,+Navi+Mumbai,+Maharashtra+400706&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nexus Seawoods Corporate Location Map"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= REGISTERED CORPORATE DESKS ================= */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          
          {/* Centered Heading */}
          <div className="text-center space-y-4">
            <span className="text-[10px] font-bold font-mono text-[#C9A227] uppercase tracking-widest block">
              {t.desks_badge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight font-display">
              {t.desks_title}
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-medium">
              {t.desks_subtitle}
            </p>
          </div>

          {/* Dual Desktop Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card 1: India HQ */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-slate-200/80 rounded-[18px] p-8 shadow-md shadow-slate-100/40 flex flex-col justify-between h-full space-y-8"
            >
              <div className="space-y-6">
                
                {/* Header Flag + Title */}
                <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                  <div className="w-10 h-7 rounded shadow-xs overflow-hidden border border-slate-200 shrink-0">
                    <img src={ASSET_FLAGS.india} alt="India Flag" loading="lazy" className="w-full h-full object-cover" onError={(e) => handleImageError(e, 'flagIndia')} />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#0F3D2E] tracking-tight font-display">
                      {t.desk1_title}
                    </h3>
                    <p className="text-xs text-[#C9A227] font-mono font-bold uppercase tracking-wider">
                      {t.desk1_sub}
                    </p>
                  </div>
                </div>

                {/* Company and Address */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-slate-800">{t.company_india}</h4>
                  <p className="text-xs text-slate-650 leading-relaxed font-semibold">
                    Office No. E-712, Tower – II,<br />
                    Floor No. 7th, Plot No. R‑11,<br />
                    Nexus Seawoods (Seawoods Grand Central), Sector‑40,<br />
                    Nerul, Darave, Thane,<br />
                    Maharashtra, India – 400706.
                  </p>
                </div>

              </div>

              {/* Footer Phone and Email */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[11px] font-bold text-slate-700">
                <a href="tel:+919167604059" className="flex items-center gap-1.5 hover:text-[#C9A227] transition-colors">
                  <span>📞</span> +91 91676 04059
                </a>
                <a href="mailto:info@seatruckexim.com" className="flex items-center gap-1.5 hover:text-[#C9A227] transition-colors">
                  <span>✉</span> info@seatruckexim.com
                </a>
              </div>
            </motion.div>

            {/* Card 2: UAE Gate */}
            <motion.div 
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-slate-200/80 rounded-[18px] p-8 shadow-md shadow-slate-100/40 flex flex-col justify-between h-full space-y-8"
            >
              <div className="space-y-6">
                
                {/* Header Flag + Title */}
                <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                  <div className="w-10 h-7 rounded shadow-xs overflow-hidden border border-slate-200 shrink-0">
                    <img src={ASSET_FLAGS.uae} alt="UAE Flag" loading="lazy" className="w-full h-full object-cover" onError={(e) => handleImageError(e, 'flagUae')} />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#0F3D2E] tracking-tight font-display">
                      {t.desk2_title}
                    </h3>
                    <p className="text-xs text-[#C9A227] font-mono font-bold uppercase tracking-wider">
                      {t.desk2_sub}
                    </p>
                  </div>
                </div>

                {/* Company and Address */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-slate-800">{t.company_uae}</h4>
                  <p className="text-xs text-slate-650 leading-relaxed font-semibold">
                    Building A1<br />
                    Dubai Digital Park<br />
                    Dubai Silicon Oasis<br />
                    Dubai<br />
                    United Arab Emirates
                  </p>
                </div>

              </div>

              {/* Footer Phone and Email */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[11px] font-bold text-slate-700">
                <a href="tel:+971509199209" className="flex items-center gap-1.5 hover:text-[#C9A227] transition-colors">
                  <span>📞</span> +971 50 919 9209
                </a>
                <a href="mailto:info@seatruckexim.com" className="flex items-center gap-1.5 hover:text-[#C9A227] transition-colors">
                  <span>✉</span> info@seatruckexim.com
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}

