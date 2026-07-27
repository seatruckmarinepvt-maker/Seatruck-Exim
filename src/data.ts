/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, ShippingPort, ShippingRoute, Shipment, Language } from './types';

import { ASSET_PRODUCTS, ASSET_HEROES } from './utils/imageUtils';

export const cashewImg = ASSET_PRODUCTS.cashew;
export const almondImg = ASSET_PRODUCTS.almond;
export const pistachioImg = ASSET_PRODUCTS.pistachio;
export const appleImg = ASSET_PRODUCTS.apple;
export const bananaImg = ASSET_PRODUCTS.banana;
export const broccoliImg = ASSET_PRODUCTS.broccoli;
export const cornImg = ASSET_PRODUCTS.corn;
export const orangeImg = ASSET_PRODUCTS.orange;
export const tomatoImg = ASSET_PRODUCTS.tomato;
export const onionImg = ASSET_PRODUCTS.onion;
export const drumstickImg = ASSET_PRODUCTS.drumstick;
export const riceImg = ASSET_PRODUCTS.rice;
export const wheatImg = ASSET_PRODUCTS.wheat;
export const potatoImg = ASSET_PRODUCTS.potato;

export const HERO_BANNER_IMG = ASSET_HEROES.fruitBanner;
export const AGRO_HARVEST_IMG = ASSET_HEROES.agroHarvest;

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    nav_home: 'Home',
    nav_portfolio: 'Products',
    nav_logistics: 'Logistics Map',
    nav_tracking: 'Live Tracking',
    nav_contact: 'Inquire Now',
    tagline: 'Bridging Harvester to Global Ports',
    hero_title: 'Global Agro Import Export Excellence',
    hero_subtitle: 'Setruck Exim Services delivers high-grade agro commodities worldwide. Backed by state-of-the-art cold-chain freight and flawless sea routing.',
    cta_explore: 'View Commodities',
    cta_track: 'Track Live Cargo',
    section_portfolio_title: 'Our Agro Commodities',
    section_portfolio_subtitle: 'Premium agricultural goods processed, packed, and exported under strict global compliance.',
    all_categories: 'All Categories',
    cat_grains: 'Grains & Pulses',
    cat_spices: 'Spices & Seasonings',
    cat_dry_fruits: 'Dry Fruits & Nuts',
    cat_fresh_produce: 'Fresh Fruits & Vegetables',
    search_placeholder: 'Search commodities...',
    specs_origin: 'Premium Origin',
    specs_packing: 'Standard Packaging',
    specs_moq: 'Minimum Order (MOQ)',
    specs_grade: 'Export Grade',
    specs_loading: 'Loading Capacity',
    inquiry_btn: 'Send Product Inquiry',
    close: 'Close',
    technical_specs: 'Technical Specifications',
    shipping_details: 'Shipping & Vessel Specs',
    copied_msg: 'Details copied to inquiry form!',
    
    section_logistics_title: 'Interactive Global Shipping Routes',
    section_logistics_subtitle: 'Hover on routing paths to analyze active voyages carrying agricultural cargo from primary supply centers.',
    route_details: 'Route Analysis',
    transit_time: 'Transit Duration',
    primary_cargo: 'Primary Commodities',
    vessel_on_duty: 'Vessel On-Duty',
    active_now: 'Active Voyage',
    ports_connected: 'Hubs Connected',

    section_tracking_title: 'Real-Time Cold Chain Tracking',
    section_tracking_subtitle: 'Monitor reefer container vitals, marine routing progression, and live moisture levels in real-time.',
    enter_tracking_num: 'Enter Tracking ID or Bill of Lading',
    custom_simulator_title: 'Simulate Custom Shipment',
    sim_commodity: 'Select Cargo',
    sim_origin: 'Origin Port',
    sim_dest: 'Destination Port',
    sim_container: 'Container Type',
    sim_vessel: 'Vessel Name',
    sim_btn: 'Launch Tracker Simulator',
    track_btn: 'Fetch Live Status',
    invalid_tracking: 'Shipment ID not found. Try ST-9283-IND or create a custom simulation below!',
    temp_hum_status: 'Reefer Telemetry & Vitals',
    container_temp: 'Container Temp',
    container_humidity: 'Relative Humidity',
    status_label: 'Current Status',
    origin_port_col: 'Dispatch Port',
    dest_port_col: 'Destination Port',
    est_delivery: 'Estimated Discharge Date',
    milestones_timeline: 'Freight Timeline Milestones',
    milestone_processing: 'Order Consolidating',
    milestone_customs: 'Export Customs Clearance',
    milestone_loaded: 'Ocean Carrier Loading',
    milestone_transit: 'In-Transit (Ocean Cargo)',
    milestone_discharging: 'Port of Discharge Handover',
    milestone_delivered: 'Consignee Delivery Complete',

    section_contact_title: 'Secure Business Inquiries',
    section_contact_subtitle: 'Establish trusted global trade channels. Reach out to our exim specialists for customs clearing, pricing, and bulk scheduling.',
    form_name: 'Full Name',
    form_email: 'Professional Email',
    form_company: 'Company / Organization',
    form_country: 'Destination Country',
    form_subject: 'Inquiry Subject',
    form_message: 'Detailed Requirement Specification',
    form_product_label: 'Associated Product Range',
    form_tracking_label: 'Shipment Tracking Code (Optional)',
    form_submit: 'Submit Trade Inquiry',
    form_sending: 'Transmitting Trade Dossier...',
    form_success_title: 'Inquiry Transmitted Successfully!',
    form_success_desc: 'Your trade inquiry has been logged in our secure exim database. A portfolio officer will contact your company within 6 hours with customized pricing.',
    inbox_title: 'Local Outbox Transmissions',
    inbox_no_records: 'No trade files transmitted in this session yet.',
    footer_text: '© 2026 Setruck Exim Services. Registered global bulk agricultural exporter. All rights reserved.',
    footer_tag: 'Oceanic agricultural supply chain connecting continents with zero cold-chain disruption.'
  },
  es: {
    nav_home: 'Inicio',
    nav_portfolio: 'Productos',
    nav_logistics: 'Logística',
    nav_tracking: 'Seguimiento',
    nav_contact: 'Inquirir Ahora',
    tagline: 'Conectando Productores con Puertos Globales',
    hero_title: 'Excelencia Agroalimentaria de Importación y Exportación',
    hero_subtitle: 'Setruck Exim Services entrega productos agrícolas de alta calidad en todo el mundo.',
    cta_explore: 'Ver Productos',
    cta_track: 'Siga su Carga',
    section_portfolio_title: 'Nuestros Productos Agrícolas',
    section_portfolio_subtitle: 'Productos de primera calidad procesados, envasados y exportados bajo estrictas normas.',
    all_categories: 'Categorías',
    cat_grains: 'Granos y Legumbres',
    cat_spices: 'Especias y Condimentos',
    cat_dry_fruits: 'Frutos Secos y Nueces',
    cat_fresh_produce: 'Frutas y Verduras Frescas',
    search_placeholder: 'Buscar productos...',
    specs_origin: 'Origen Premium',
    specs_packing: 'Embalaje Estándar',
    specs_moq: 'Orden Mínima (MOQ)',
    specs_grade: 'Grado de Exportación',
    specs_loading: 'Capacidad de Carga',
    inquiry_btn: 'Enviar Consulta',
    close: 'Cerrar',
    technical_specs: 'Especificaciones Técnicas',
    shipping_details: 'Detalles de Envío',
    copied_msg: 'Detalles copiados!',
    section_logistics_title: 'Rutas de Envío',
    section_logistics_subtitle: 'Supervise el tránsito global de nuestros contenedores.',
    route_details: 'Análisis de la Ruta',
    transit_time: 'Tránsito',
    primary_cargo: 'Carga Comercial',
    vessel_on_duty: 'Buque',
    active_now: 'Activo',
    ports_connected: 'Puertos',
    section_tracking_title: 'Seguimiento de Cadena de Frío',
    section_tracking_subtitle: 'Supervise reefer, ruta y humedad en tiempo real.',
    enter_tracking_num: 'Ingrese ID de seguimiento',
    custom_simulator_title: 'Simular Envío',
    sim_commodity: 'Carga',
    sim_origin: 'Origen',
    sim_dest: 'Destino',
    sim_container: 'Contenedor',
    sim_vessel: 'Vessel',
    sim_btn: 'Iniciar Simulador',
    track_btn: 'Obtener Estado',
    invalid_tracking: 'ID no encontrado. Intente con ST-9283-IND',
    temp_hum_status: 'Telemetría',
    container_temp: 'Temperatura',
    container_humidity: 'Humedad',
    status_label: 'Estado',
    origin_port_col: 'Puerto Salida',
    dest_port_col: 'Puerto Destino',
    est_delivery: 'Fecha Descarga',
    milestones_timeline: 'Línea de Tiempo',
    milestone_processing: 'Consolidación',
    milestone_customs: 'Aduanas',
    milestone_loaded: 'Cargado',
    milestone_transit: 'En Tránsito',
    milestone_discharging: 'Puerto Concluido',
    milestone_delivered: 'Entregado',
    section_contact_title: 'Inquirir Producto',
    section_contact_subtitle: 'Contáctenos para cotizaciones y bulk trading.',
    form_name: 'Nombre',
    form_email: 'Email',
    form_company: 'Empresa',
    form_country: 'País',
    form_subject: 'Asunto',
    form_message: 'Mensaje",',
    form_product_label: 'Serie',
    form_tracking_label: 'Tracking (Opcional)',
    form_submit: 'Enviar Consulta',
    form_sending: 'Enviando...',
    form_success_title: 'Enviado Correctamente!',
    form_success_desc: 'Su inquiry ha sido registrado. Respuesta en 6 horas.',
    inbox_title: 'Bandeja de Transmisión',
    inbox_no_records: 'No se enviaron mensajes.',
    footer_text: '© 2026 Setruck Exim Services. Todos los derechos reservados.',
    footer_tag: 'Cold-chain agro supply chain.'
  },
  ar: {
    nav_home: 'الرئيسية',
    nav_portfolio: 'المنتجات',
    nav_logistics: 'خريطة الشحن',
    nav_tracking: 'التتبع المباشر',
    nav_contact: 'استعلم الآن',
    tagline: 'جسر يربط بين المزارع والموانئ العالمية',
    hero_title: 'التميز العالمي في استيراد وتصدير المنتجات الزراعية',
    hero_subtitle: 'سي ترك مارين إكسم تقدم سلعًا زراعية عالية الجودة في جميع أنحاء العالم.',
    cta_explore: 'عرض المنتجات الزراعية',
    cta_track: 'تتبع الشحنة الآن',
    section_portfolio_title: 'السلع الزراعية لدينا',
    section_portfolio_subtitle: 'منتجات زراعية فاخرة ومعالجة بموجب معايير الامتثال العالمية.',
    all_categories: 'جميع الفئات',
    cat_grains: 'الحبوب والبقوليات',
    cat_spices: 'البهارات والتوابل',
    cat_dry_fruits: 'الفواكه الجافة والمكسرات',
    cat_fresh_produce: 'الفواكه والخضروات الطازجة',
    search_placeholder: 'البحث عن السلع...',
    specs_origin: 'المنشأ الأصلي',
    specs_packing: 'التعبئة القياسية',
    specs_moq: 'الحد الأدنى للطلب',
    specs_grade: 'درجة التصدير',
    specs_loading: 'حجم الحمولة',
    inquiry_btn: 'إرسال طلب استعلام',
    close: 'إغلاق',
    technical_specs: 'المواصفات التقنية',
    shipping_details: 'تفاصيل الشحن',
    copied_msg: 'تم نسخ التفاصيل!',
    section_logistics_title: 'مسارات الشحن',
    section_logistics_subtitle: 'تحليل الرحلات البحرية النشطة.',
    route_details: 'تحليل خط المسار',
    transit_time: 'مدة العبور',
    primary_cargo: 'السلع الأساسية',
    vessel_on_duty: 'اسم السفينة',
    active_now: 'الرحلات النشطة',
    ports_connected: 'الموانئ المتصلة',
    section_tracking_title: 'تتبع سلسلة التبريد المباشر',
    section_tracking_subtitle: 'مراقبة حيوية الحاويات المبردة في الوقت الفعلي.',
    enter_tracking_num: 'أدخل رقم الشحنة',
    custom_simulator_title: 'إنشاء محاكاة شحنة',
    sim_commodity: 'اختر السلعة',
    sim_origin: 'ميناء المغادرة',
    sim_dest: 'ميناء الوصول',
    sim_container: 'نوع الحاوية',
    sim_vessel: 'اسم السفينة',
    sim_btn: 'إطلاق محاكي التتبع',
    track_btn: 'جلب حالة الشحنة',
    invalid_tracking: 'رقم التتبع غير متوفر ST-9283-IND',
    temp_hum_status: 'قياسات التحكم والتبريد',
    container_temp: 'درجة الحرارة',
    container_humidity: 'معدل الرطوبة',
    status_label: 'الحالة',
    origin_port_col: 'ميناء المغادرة',
    dest_port_col: 'ميناء الوصول',
    est_delivery: 'تاريخ التفريغ المتوقع',
    milestones_timeline: 'مراحل ومخطط الشحن',
    milestone_processing: 'تجهيز الطلب',
    milestone_customs: 'التخليص الجمركي',
    milestone_loaded: 'تحميل الشحنة',
    milestone_transit: 'الإبحار ترانزيت',
    milestone_discharging: 'الوصول إلى الميناء',
    milestone_delivered: 'تم التسليم النهائي',
    section_contact_title: 'الاستعلامات التجارية الآمنة',
    section_contact_subtitle: 'تواصل مباشرة مع خبراء التصدير لدينا.',
    form_name: 'الاسم الكامل',
    form_email: 'البريد الإلكتروني المهني',
    form_company: 'الشركة / المؤسسة',
    form_country: 'الدولة المستهدفة',
    form_subject: 'موضوع الاستعلام',
    form_message: 'المواصفات والمتطلبات بالتفصيل',
    form_product_label: 'نطاق السلع والمنتجات',
    form_tracking_label: 'رقم التتبع (اختياري)',
    form_submit: 'تقديم الاستعلام لتجارتنا',
    form_sending: 'جاري الإرسال...',
    form_success_title: 'تم إرسال طلبك بنجاح!',
    form_success_desc: 'تم تسجيل الاستفسار مخصصا في النظام.',
    inbox_title: 'صندوق الاستعلامات الصادر',
    inbox_no_records: 'لا توجد مراسلات.',
    footer_text: '© 2026 سي ترك مارين إكسم للتصدير الزراعي.',
    footer_tag: 'سلسلة إمداد مبردة ذكية.'
  },
  hi: {
    nav_home: 'मुख्य पृष्ठ',
    nav_portfolio: 'कृषि उत्पाद',
    nav_logistics: 'लॉजिस्टिक्स रूट',
    nav_tracking: 'लाइव ट्रैकिंग',
    nav_contact: 'पूछताछ करें',
    tagline: 'किसानों और ग्लोबल पोर्ट्स का सेतु',
    hero_title: 'वैश्विक कृषि आयात-निर्यात उत्कृष्टता',
    hero_subtitle: 'सीट्रक मरीन एक्जिम उच्चतम गुणवत्ता वाली कृषि वस्तुओं का निर्यात करता है।',
    cta_explore: 'श्रेणियाँ देखें',
    cta_track: 'लाइव कार्गो ट्रैक करें',
    section_portfolio_title: 'हमारी विशेष कृषि फसलें',
    section_portfolio_subtitle: 'उत्कृष्ट प्रीमियम कृषि उत्पाद जो निर्यात मानकों के अनुरूप तैयार हैं।',
    all_categories: 'सभी श्रेणियां',
    cat_grains: 'अनाज और दालें',
    cat_spices: 'मसाले और सीजनिंग',
    cat_dry_fruits: 'ड्राई फ्रूट्स और नट्स',
    cat_fresh_produce: 'ताजा सब्जियां व फल',
    search_placeholder: 'कृषि उत्पाद खोजें...',
    specs_origin: 'मूल स्थान',
    specs_packing: 'पैकिंग संरचना',
    specs_moq: 'न्यूनतम ऑर्डर (MOQ)',
    specs_grade: 'निर्यात ग्रेड',
    specs_loading: 'लोडिंग क्षमता',
    inquiry_btn: 'उत्पाद पूछताछ भेजें',
    close: 'बंद करें',
    technical_specs: 'तकनीकी विशिष्टता',
    shipping_details: 'शिपिंग जानकारी',
    copied_msg: 'उत्पाद विवरण कॉपी कर लिया गया है!',
    section_logistics_title: 'वैश्विक नौवहन मार्ग',
    section_logistics_subtitle: 'सक्रिय कंटेनर जहाजों की वास्तविक मार्ग जानकारी।',
    route_details: 'मार्ग विश्लेषण',
    transit_time: 'पारगमन का समय',
    primary_cargo: 'मुख्य फसलें',
    vessel_on_duty: 'सक्रिय कार्गो जहाज',
    active_now: 'सक्रिय यात्रा',
    ports_connected: 'कनेक्टेड पोर्ट्स',
    section_tracking_title: 'रियल-टाइम कार्गो ट्रैकिंग',
    section_tracking_subtitle: 'कंटेनर के तापमान, नमी और लाइव शिपमेंट प्रोग्रेस की निगरानी करें।',
    enter_tracking_num: 'ट्रैकिंग आईडी दर्ज करें',
    custom_simulator_title: 'नया कस्टम सिमुलेशन बनाएं',
    sim_commodity: 'कार्गो फसल',
    sim_origin: 'प्रस्थान बंदरगाह',
    sim_dest: 'गंतव्य बंदरगाह',
    sim_container: 'कंटेनर प्रकार',
    sim_vessel: 'जहाज का नाम',
    sim_btn: 'सिमुलेटर लोड करें',
    track_btn: 'स्थिति का पता लगाएं',
    invalid_tracking: 'शिपमेंट आईडी नहीं खोजी जा सकी। कृपया ST-9283-IND दर्ज करें।',
    temp_hum_status: 'रीफर कंटेनर स्थिति',
    container_temp: 'तापमान',
    container_humidity: 'आर्द्रता',
    status_label: 'वर्तमान स्थिति',
    origin_port_col: 'निर्यात बंदरगाह',
    dest_port_col: 'आयात बंदरगाह',
    est_delivery: 'अपेक्षित तिथि',
    milestones_timeline: 'शिपमेंट माइलस्टोन इतिहास',
    milestone_processing: 'ऑर्डर प्रोसेसिंग',
    milestone_customs: 'कस्टम्स क्लीयरेंस',
    milestone_loaded: 'लोडिंग संपन्न',
    milestone_transit: 'ट्रांजिट में',
    milestone_discharging: 'उतरना संपन्न',
    milestone_delivered: 'डिलीवरी सफल',
    section_contact_title: 'व्यावसायिक पूछताछ फॉर्म',
    section_contact_subtitle: 'कस्टम्स क्लीयरेंस, कोटेशन, और शिपमेंट बुकिंग के लिए संपर्क करें।',
    form_name: 'पूरा नाम',
    form_email: 'प्रोफेशनल ईमेल',
    form_company: 'कंपनी का नाम',
    form_country: 'गंतव्य देश',
    form_subject: 'विषय',
    form_message: 'संदेश',
    form_product_label: 'उत्पाद श्रेणी',
    form_tracking_label: 'ट्रैकिंग (वैकल्पिक)',
    form_submit: 'पूछताछ भेजें',
    form_sending: 'भेजा जा रहा है...',
    form_success_title: 'सफलतापूर्वक भेजा गया!',
    form_success_desc: 'आपकी पूछताछ दर्ज कर ली गई है।',
    inbox_title: 'आउटबॉक्स',
    inbox_no_records: 'कोई संदेश नहीं मिला।',
    footer_text: '© 2026 सीट्रक मरीन एक्जिम। सर्वाधिकार सुरक्षित।',
    footer_tag: 'कोल्ड-चेन एग्रो सप्लाई चेन।'
  },
  zh: {
    nav_home: '首页',
    nav_portfolio: '农产品目录',
    nav_logistics: '海运航线',
    nav_tracking: '实时追踪',
    nav_contact: '商务询盘',
    tagline: '连接农场与全球港口',
    hero_title: '全球优质农产品进出口领航者',
    hero_subtitle: 'Setruck Marine Exim 专注于将高品质印度及全球农产品出口至世界各大港口。',
    cta_explore: '浏览产品大类',
    cta_track: '实时追踪货物',
    section_portfolio_title: '核心农产品集锦',
    section_portfolio_subtitle: '严格符合国际出口与食品安全标准的精选农产品。',
    all_categories: '全部类别',
    cat_grains: '谷物与豆类',
    cat_spices: '香料与调味料',
    cat_dry_fruits: '坚果与干果',
    cat_fresh_produce: '生鲜果蔬',
    search_placeholder: '搜索农产品...',
    specs_origin: '原产地',
    specs_packing: '包装规格',
    specs_moq: '最小起订量 (MOQ)',
    specs_grade: '出口等级',
    specs_loading: '装载量',
    inquiry_btn: '发送产品询盘',
    close: '关闭',
    technical_specs: '技术规格',
    shipping_details: '运输详情',
    copied_msg: '产品详情已复制！',
    section_logistics_title: '全球海运航线图',
    section_logistics_subtitle: '主力集装箱货轮的实时航行路线。',
    route_details: '航线详情',
    transit_time: '运输时效',
    primary_cargo: '主要货物',
    vessel_on_duty: '执航货轮',
    active_now: '航行中',
    ports_connected: '连接港口',
    section_tracking_title: '集装箱实时追踪',
    section_tracking_subtitle: '冷藏集装箱温度、湿度及物流节点全程监控。',
    enter_tracking_num: '输入追踪单号',
    custom_simulator_title: '创建模拟运单',
    sim_commodity: '运输货物',
    sim_origin: '起运港',
    sim_dest: '目的港',
    sim_container: '集装箱类型',
    sim_vessel: '货轮名称',
    sim_btn: '加载模拟器',
    track_btn: '查询状态',
    invalid_tracking: '未找到运单，请输入 ST-9283-IND',
    temp_hum_status: '冷藏箱温湿度监测',
    container_temp: '箱内温度',
    container_humidity: '箱内湿度',
    status_label: '当前状态',
    origin_port_col: '起运港',
    dest_port_col: '目的港',
    est_delivery: '预计到达',
    milestones_timeline: '物流节点时间线',
    milestone_processing: '订单处理',
    milestone_customs: '报关清关',
    milestone_loaded: '装船完毕',
    milestone_transit: '海上运输',
    milestone_discharging: '靠港卸货',
    milestone_delivered: '已送达',
    section_contact_title: '商务询盘表格',
    section_contact_subtitle: '获取报价、了解清关流程或预约舱位。',
    form_name: '姓名',
    form_email: '企业邮箱',
    form_company: '公司名称',
    form_country: '目的国',
    form_subject: '询盘主题',
    form_message: '详细需求说明',
    form_product_label: '意向产品',
    form_tracking_label: '运单号 (选填)',
    form_submit: '提交询盘',
    form_sending: '提交中...',
    form_success_title: '询盘提交成功！',
    form_success_desc: '我们的出口专家将在6小时内与您联系。',
    inbox_title: '询盘记录',
    inbox_no_records: '暂无询盘记录。',
    footer_text: '© 2026 Setruck Marine Exim. 保留所有权利。',
    footer_tag: '智能冷链农产品供应链。'
  }
};

export const PRODUCTS: Product[] = [
  {
    id: 'cashews',
    category: 'dry_fruits',
    name: {"en":"Cashews","es":"Anacardos","ar":"كاجو","hi":"काजू","zh":"腰果"},
    description: {"en":"Premium quality W240 whole cashew nuts, cream-white and rich in flavor.","es":"Anacardos enteros W240 de calidad superior, de color blanco crema.","ar":"كاجو هندي فاخر دبليو ٢٤٠ حبات كاملة لون كريمي ناصع.","hi":"प्रीमियम गुणवत्ता W240 साबुत काजू, मलाईदार सफेद और स्वाद से भरपूर।","zh":"特级 W240 整颗腰果，乳白色，香味浓郁。"},
    image: ASSET_PRODUCTS.cashew,
    details: {
          "en": {
                "origin": "Goa, India",
                "packaging": "10kg Vacuum Tins",
                "moq": "10 MT",
                "grade": "W240 White Whole",
                "loadingCapacity": "15 MT per 20ft"
          },
          "es": {
                "origin": "Goa, India",
                "packaging": "Latas de vacío de 10kg",
                "moq": "10 MT",
                "grade": "W240 Blanco Entero",
                "loadingCapacity": "15 MT por 20 pies"
          },
          "ar": {
                "origin": "غوا، الهند",
                "packaging": "صفائح مفرغة ١٠ كجم",
                "moq": "١٠ طن",
                "grade": "دبليو ٢٤٠ أبيض كامل",
                "loadingCapacity": "١٥ طن لكل ٢٠ قدم"
          },
          "hi": {
                "origin": "गोवा, भारत",
                "packaging": "१० किग्रा वैक्यूम टिन",
                "moq": "१० मीट्रिक टन",
                "grade": "W240 सफेद साबुत",
                "loadingCapacity": "१५ मीट्रिक टन प्रति २० फीट"
          },
          "zh": {
                "origin": "果阿邦, 印度",
                "packaging": "10公斤真空铁桶",
                "moq": "10公吨",
                "grade": "W240 特级整颗",
                "loadingCapacity": "15公吨每20尺集装箱"
          }
    },
    specifications: {
          "en": [
                "Count: 220-240 / lb",
                "Moisture: < 5%",
                "Broken: < 1%"
          ],
          "es": [
                "Conteo: 220-240 / lb",
                "Humedad: < 5%",
                "Rotos: < 1%"
          ],
          "ar": [
                "العدد: ٢٢٠-٢٤٠ / رطل",
                "الرطوبة: أقل من ٥٪",
                "المكسور: أقل من ١٪"
          ],
          "hi": [
                "गिनती: २२०-२४० / पाउंड",
                "नमी: < ५%",
                "टूटा हुआ: < १%"
          ],
          "zh": [
                "粒数：220-240 粒/磅",
                "水分：低于 5%",
                "碎粒率：低于 1%"
          ]
    }
  },
  {
    id: 'almonds',
    category: 'dry_fruits',
    name: {"en":"Almonds","es":"Almendras","ar":"لوز","hi":"बादाम","zh":"杏仁"},
    description: {"en":"Sweet, uniform unshelled California almonds, supreme grade.","es":"Almendras dulces y uniformes de California sin cáscara, calidad suprema.","ar":"لوز كاليفورنيا الحلو والمنتظم المقشر، جودة ممتازة.","hi":"मीठे, समान आकार के कैलिफोर्निया बादाम, सर्वोच्च ग्रेड।","zh":"加州优质无壳甜杏仁，颗粒饱满均匀，特级标准。"},
    image: ASSET_PRODUCTS.almond,
    details: {
          "en": {
                "origin": "California, USA / India",
                "packaging": "25kg Cartons",
                "moq": "12 MT",
                "grade": "Supreme 20/22",
                "loadingCapacity": "18 MT per 20ft"
          },
          "es": {
                "origin": "California, EE. UU. / India",
                "packaging": "Cajas de 25kg",
                "moq": "12 MT",
                "grade": "Supremo 20/22",
                "loadingCapacity": "18 MT por 20 pies"
          },
          "ar": {
                "origin": "كاليفورنيا، أمريكا / الهند",
                "packaging": "كراتين ٢٥ كجم",
                "moq": "١٢ طن",
                "grade": "سوبريم ٢٠/٢٢",
                "loadingCapacity": "١٨ طن لكل ٢٠ قدم"
          },
          "hi": {
                "origin": "कैलिफ़ोर्निया, अमेरिका / भारत",
                "packaging": "२५ किग्रा कार्टन",
                "moq": "१२ मीट्रिक टन",
                "grade": "सुप्रीम २०/२२",
                "loadingCapacity": "१८ मीट्रिक टन प्रति २० फीट"
          },
          "zh": {
                "origin": "美国加州 / 印度加工",
                "packaging": "25公斤瓦楞纸箱",
                "moq": "12公吨",
                "grade": "Supreme 20/22级",
                "loadingCapacity": "18公吨每20尺集装箱"
          }
    },
    specifications: {
          "en": [
                "Size: 20-22 count/oz",
                "Moisture: < 6%",
                "Purity: 99.9%"
          ],
          "es": [
                "Calibre: 20-22 / oz",
                "Humedad: < 6%",
                "Pureza: 99.9%"
          ],
          "ar": [
                "العدد: ٢٠-٢٢ / أونصة",
                "الرطوبة: < ٦٪",
                "النقاء: ٩٩.٩٪"
          ],
          "hi": [
                "आकार: २०-२२ काउंट/औंस",
                "नमी: < ६%",
                "शुद्धता: ९९.९%"
          ],
          "zh": [
                "规格：20-22 粒/盎司",
                "水分：低于 6%",
                "纯净度：99.9%"
          ]
    }
  },
  {
    id: 'pistachios',
    category: 'dry_fruits',
    name: {"en":"Pistachios","es":"Pistachos","ar":"فستق","hi":"पिस्ता","zh":"开心果"},
    description: {"en":"Gently salted, dry-roasted, sun-opened jumbo pistachios.","es":"Pistachos jumbo abiertos al sol, tostados en seco y ligeramente salados.","ar":"فستق جامبو مفتوح بالشمس، محمص ومملح خفيف.","hi":"हल्का नमकीन, सूखा भुना हुआ, धूप में खुला जंबो पिस्ता।","zh":"自然开口巨型开心果，轻度盐烘，口感酥脆。"},
    image: ASSET_PRODUCTS.pistachio,
    details: {
          "en": {
                "origin": "Gujarat / Iran / USA",
                "packaging": "10kg Cartons",
                "moq": "10 MT",
                "grade": "Jumbo 20/22",
                "loadingCapacity": "14 MT per 20ft"
          },
          "es": {
                "origin": "Gujarat / Irán / EE. UU.",
                "packaging": "Cajas de 10kg",
                "moq": "10 MT",
                "grade": "Jumbo 20/22",
                "loadingCapacity": "14 MT por 20 pies"
          },
          "ar": {
                "origin": "غوجارات / إيران / أمريكا",
                "packaging": "كراتين ١٠ كجم",
                "moq": "١٠ طن",
                "grade": "جامبو ٢٠/٢٢",
                "loadingCapacity": "١٤ طن لكل ٢٠ قدم"
          },
          "hi": {
                "origin": "गुजरात / ईरान / अमेरिका",
                "packaging": "१० किग्रा कार्टन",
                "moq": "१० मीट्रिक टन",
                "grade": "जंबो २०/२२",
                "loadingCapacity": "१४ मीट्रिक टन प्रति २० फीट"
          },
          "zh": {
                "origin": "古吉拉特邦 / 进口加工",
                "packaging": "10公斤高密度纸箱",
                "moq": "10公吨",
                "grade": "Jumbo 20/22级",
                "loadingCapacity": "14公吨每20尺集装箱"
          }
    },
    specifications: {
          "en": [
                "Split rate: Min 98%",
                "Moisture: < 5%",
                "Closed nuts: < 2%"
          ],
          "es": [
                "Tasa de apertura: Mín 98%",
                "Humedad: < 5%",
                "Cerrados: < 2%"
          ],
          "ar": [
                "نسبة الفتح: ٩٨٪ كحد أدنى",
                "الرطوبة: أقل من ٥٪",
                "المغلق: أقل من ٢٪"
          ],
          "hi": [
                "खुली दर: न्यूनतम ९८%",
                "नमी: < ५%",
                "बंद पिस्ता: < २%"
          ],
          "zh": [
                "自然开口率：高于98%",
                "水分：低于5%",
                "闭口率：低于2%"
          ]
    }
  },
  {
    id: 'apples',
    category: 'fresh_produce',
    name: {"en":"Apples","es":"Manzanas","ar":"تفاح","hi":"सेब","zh":"苹果"},
    description: {"en":"Fresh, sweet, and crisp premium red apples, direct from orchards.","es":"Manzanas rojas frescas, dulces y crujientes de calidad superior.","ar":"تفاح أحمر فاخر طازج وحلو ومقرمش، مباشرة من البساتين.","hi":"बागों से सीधे ताजा, मीठा और करकरा प्रीमियम लाल सेब।","zh":"果园直采特级红苹果，甜脆多汁，色泽红润。"},
    image: ASSET_PRODUCTS.apple,
    details: {
          "en": {
                "origin": "Himachal Pradesh, India",
                "packaging": "18kg Telescopic Boxes",
                "moq": "15 MT",
                "grade": "Grade A Extra Fancy",
                "loadingCapacity": "20 MT per 40ft Reefer"
          },
          "es": {
                "origin": "Himachal Pradesh, India",
                "packaging": "Cajas telescópicas de 18kg",
                "moq": "15 MT",
                "grade": "Grado A Extra Fancy",
                "loadingCapacity": "20 MT por Reefer 40 pies"
          },
          "ar": {
                "origin": "هيماجل براديش، الهند",
                "packaging": "صناديق تلسكوبية ١٨ كجم",
                "moq": "١٥ طن",
                "grade": "درجة أ إكسترا فانسي",
                "loadingCapacity": "٢٠ طن لكل ٤٠ قدم مبرد"
          },
          "hi": {
                "origin": "हिमाचल प्रदेश, भारत",
                "packaging": "१८ किग्रा टेलीस्कोपिक बॉक्स",
                "moq": "१५ मीट्रिक टन",
                "grade": "ग्रेड A एक्स्ट्रा फैंसी",
                "loadingCapacity": "२० मीट्रिक टन प्रति ४0 फीट रीफर"
          },
          "zh": {
                "origin": "喜马偕尔邦, 印度",
                "packaging": "18公斤套入式纸箱",
                "moq": "15公吨",
                "grade": "特优 A 级（Extra Fancy）",
                "loadingCapacity": "20公吨每40尺冷藏集装箱"
          }
    },
    specifications: {
          "en": [
                "Brix level: 13-15%",
                "Size: 100-120 count",
                "Temp: 0-2°C"
          ],
          "es": [
                "Nivel Brix: 13-15%",
                "Calibre: 100-120 unidades",
                "Temp: 0-2°C"
          ],
          "ar": [
                "نسبة السكر: ١٣-١٥٪",
                "الحجم: ١٠٠-١٢٠ حبة",
                "درجة الحرارة: ٠-٢ مئوية"
          ],
          "hi": [
                "ब्रिक्स स्तर: १३-१५%",
                "आकार: १००-१२० काउंट",
                "तापमान: ०-२°C"
          ],
          "zh": [
                "糖度（Brix）：13-15%",
                "规格：100-120 颗/箱",
                "冷链温度：0-2°C"
          ]
    }
  },
  {
    id: 'bananas',
    category: 'fresh_produce',
    name: {"en":"Bananas","es":"Plátanos","ar":"موز","hi":"केला","zh":"香蕉"},
    description: {"en":"High-quality Cavendish green bananas, harvested at optimal maturity.","es":"Plátanos verdes Cavendish de alta calidad, cosechados en su punto óptimo.","ar":"موز كافنديش أخضر عالي الجودة، يحصد عند النضج الأمثل.","hi":"उच्च गुणवत्ता वाले कैवेंडिश हरे केले, अनुकूलतम परिपक्वता पर काटे गए।","zh":"高品质卡文迪许（Cavendish）青香蕉，采摘期严格把控，耐长途运输。"},
    image: ASSET_PRODUCTS.banana,
    details: {
          "en": {
                "origin": "Maharashtra, India",
                "packaging": "13.5kg Cartons",
                "moq": "20 MT",
                "grade": "G9 Cavendish Class I",
                "loadingCapacity": "20 MT per 40ft Reefer"
          },
          "es": {
                "origin": "Maharashtra, India",
                "packaging": "Cajas de 13.5kg",
                "moq": "20 MT",
                "grade": "G9 Cavendish Clase I",
                "loadingCapacity": "20 MT por Reefer 40 pies"
          },
          "ar": {
                "origin": "ماهاراشترا، الهند",
                "packaging": "كراتين ١٣.٥ كجم",
                "moq": "٢٠ طن",
                "grade": "جي ٩ كافنديش فئة أولى",
                "loadingCapacity": "٢٠ طن لكل ٤٠ قدم مبرد"
          },
          "hi": {
                "origin": "महाराष्ट्र, भारत",
                "packaging": "१३.५ किग्रा कार्टन",
                "moq": "२० मीट्रिक टन",
                "grade": "G9 कैवेंडिश क्लास I",
                "loadingCapacity": "२० मीट्रिक टन प्रति ४0 फीट रीफर"
          },
          "zh": {
                "origin": "马哈拉施特拉邦, 印度",
                "packaging": "13.5公斤真空衬垫纸箱",
                "moq": "20公吨",
                "grade": "G9 卡文迪许一级果",
                "loadingCapacity": "20公吨每40尺冷藏集装箱"
          }
    },
    specifications: {
          "en": [
                "Calibration: Min 39mm",
                "Length: Min 18cm",
                "Temp: 13.5°C"
          ],
          "es": [
                "Calibración: Mín 39mm",
                "Longitud: Mín 18cm",
                "Temp: 13.5°C"
          ],
          "ar": [
                "العيار: ٣٩ ملم كحد أدنى",
                "الطول: ١٨ سم كحد أدنى",
                "درجة الحرارة: ١٣.٥ مئوية"
          ],
          "hi": [
                "कैलिबर: न्यूनतम ३९ मिमी",
                "लंबाई: न्यूनतम १८ सेमी",
                "तापमान: १३.५°C"
          ],
          "zh": [
                "果指粗度：39毫米以上",
                "果指长度：18厘米以上",
                "冷链控制温度：13.5°C"
          ]
    }
  },
  {
    id: 'broccoli',
    category: 'fresh_produce',
    name: {"en":"Broccoli","es":"Brócoli","ar":"بروكلي","hi":"ब्रोकोली","zh":"西兰花"},
    description: {"en":"Crisp, dark green organic broccoli florets, nutrient-rich and fresh.","es":"Ramilletes de brócoli orgánico verde oscuro, crujientes y ricos en nutrientes.","ar":"زهيرات بروكلي عضوية خضراء داكنة مقرمشة وغنية بالمغذيات.","hi":"कुरकुरी, गहरी हरी जैविक ब्रोकोली, पोषक तत्वों से भरपूर और ताजा।","zh":"深绿色有机西兰花，紧实多汁，富含维生素，全程冰镇冷链。"},
    image: ASSET_PRODUCTS.broccoli,
    details: {
          "en": {
                "origin": "Ooty / Punjab, India",
                "packaging": "8kg Iced Styrofoam",
                "moq": "10 MT",
                "grade": "Class A Export Grade",
                "loadingCapacity": "12 MT per 40ft Reefer"
          },
          "es": {
                "origin": "Ooty / Punjab, India",
                "packaging": "Cajas de poliestireno con hielo 8kg",
                "moq": "10 MT",
                "grade": "Clase A Exportación",
                "loadingCapacity": "12 MT por Reefer 40 pies"
          },
          "ar": {
                "origin": "أوتي / البنجاب، الهند",
                "packaging": "فلين مثلج ٨ كجم",
                "moq": "١٠ طن",
                "grade": "درجة أ للتصدير",
                "loadingCapacity": "١٢ طن لكل ٤٠ قدم مبرد"
          },
          "hi": {
                "origin": "ऊटी / पंजाब, भारत",
                "packaging": "८ किग्रा बर्फबारी स्टायरोफॉर्म",
                "moq": "१० मीट्रिक टन",
                "grade": "क्लास A एक्सपोर्ट ग्रेड",
                "loadingCapacity": "१२ मीट्रिक टन प्रति ४0 फीट रीफर"
          },
          "zh": {
                "origin": "乌蒂 / 旁遮普邦, 印度",
                "packaging": "8公斤带冰保鲜泡沫箱",
                "moq": "10公吨",
                "grade": "A级出口级",
                "loadingCapacity": "12公吨每40尺冷藏集装箱"
          }
    },
    specifications: {
          "en": [
                "Head size: 12-15cm",
                "Color: Deep green",
                "Temp: 0-1°C"
          ],
          "es": [
                "Diámetro: 12-15cm",
                "Color: Verde intenso",
                "Temp: 0-1°C"
          ],
          "ar": [
                "قطر الزهرة: ١٢-١٥ سم",
                "اللون: أخضر داكن",
                "درجة الحرارة: ٠-١ مئوية"
          ],
          "hi": [
                "आकार: १२-१५ सेमी",
                "रंग: गहरा हरा",
                "तापमान: ०-१°C"
          ],
          "zh": [
                "花球直径：12-15厘米",
                "色泽：深绿无黄斑",
                "冷链温度：0-1°C"
          ]
    }
  },
  {
    id: 'corn',
    category: 'fresh_produce',
    name: {"en":"Sweet Corn","es":"Maíz Dulce","ar":"ذرة حلوة","hi":"स्वीट कॉर्न","zh":"甜玉米"},
    description: {"en":"Plump and juicy sweet corn ears, sun-ripened and naturally sweet.","es":"Mazorcas de maíz dulce tiernas y jugosas, maduradas al sol.","ar":"عرانيس ذرة حلوة ممتلئة وعصارية، ناضجة بالشمس وحلوة طبيعياً.","hi":"गूदेदार और रसीले मक्के के भुट्टे, धूप में पके और स्वाभाविक रूप से मीठे।","zh":"阳光熟成黄金甜玉米，颗粒饱满脆甜，真空包鲜或低温冷藏。"},
    image: ASSET_PRODUCTS.corn,
    details: {
          "en": {
                "origin": "Karnataka, India",
                "packaging": "12kg Mesh Bags / Cartons",
                "moq": "12 MT",
                "grade": "Yellow Sweet Corn Grade A",
                "loadingCapacity": "16 MT per 40ft Reefer"
          },
          "es": {
                "origin": "Karnataka, India",
                "packaging": "Sacos de malla de 12kg",
                "moq": "12 MT",
                "grade": "Maíz Dulce Amarillo Grado A",
                "loadingCapacity": "16 MT por Reefer 40 pies"
          },
          "ar": {
                "origin": "كارناتاكا، الهند",
                "packaging": "أكياس شبكية ١٢ كجم",
                "moq": "١٢ طن",
                "grade": "ذرة أصفر حلوة فئة أ",
                "loadingCapacity": "١٦ طن لكل ٤٠ قدم مبرد"
          },
          "hi": {
                "origin": "कर्नाटक, भारत",
                "packaging": "१२ किग्रा मेश बैग/कार्टन",
                "moq": "१२ मीट्रिक टन",
                "grade": "पीला स्वीट कॉर्न ग्रेड A",
                "loadingCapacity": "१६ मीट्रिक टन प्रति ४0 फीट रीफर"
          },
          "zh": {
                "origin": "卡纳塔克邦, 印度",
                "packaging": "12公斤网眼袋/网格纸箱",
                "moq": "12公吨",
                "grade": "黄甜玉米 A 级",
                "loadingCapacity": "16公吨每40尺冷藏集装箱"
          }
    },
    specifications: {
          "en": [
                "Brix level: > 14%",
                "Length: 18-22cm",
                "Temp: 1-3°C"
          ],
          "es": [
                "Nivel Brix: > 14%",
                "Longitud: 18-22cm",
                "Temp: 1-3°C"
          ],
          "ar": [
                "نسبة السكر: أكثر من ١٤٪",
                "الطول: ١٨-٢٢ سم",
                "درجة الحرارة: ١-٣ مئوية"
          ],
          "hi": [
                "ब्रिक्स स्तर: > १४%",
                "लंबाई: १८-२२ सेमी",
                "तापमान: १-३°C"
          ],
          "zh": [
                "糖度：高于 14%",
                "苞叶长度：18-22 厘米",
                "冷链温度：1-3°C"
          ]
    }
  },
  {
    id: 'oranges',
    category: 'fresh_produce',
    name: {"en":"Oranges","es":"Naranjas","ar":"برتقال","hi":"संतरा","zh":"橙子"},
    description: {"en":"Juicy, sweet Valencia oranges with thin skins and rich vitamin C.","es":"Naranjas de Valencia jugosas y dulces, con piel fina y ricas en vitamina C.","ar":"برتقال فالنسيا العصاري والحلو ذو قشرة رقيقة ومصدر غني بفيتامين سي.","hi":"पतले छिलके और विटामिन सी से भरपूर, रसीले व मीठे वेलेंसिया संतरे।","zh":"多汁、甘甜的瓦伦西亚橙，皮薄肉厚，富含天然维生素C。"},
    image: ASSET_PRODUCTS.orange,
    details: {
          "en": {
                "origin": "Nagpur, India",
                "packaging": "15kg Telescopic Cartons",
                "moq": "20 MT",
                "grade": "Valencia Grade I",
                "loadingCapacity": "22 MT per 40ft Reefer"
          },
          "es": {
                "origin": "Nagpur, India",
                "packaging": "Cajas telescópicas de 15kg",
                "moq": "20 MT",
                "grade": "Valencia Grado I",
                "loadingCapacity": "22 MT por Reefer de 40 pies"
          },
          "ar": {
                "origin": "ناغبور، الهند",
                "packaging": "كراتين تلسكوبية ١٥ كجم",
                "moq": "٢٠ طن",
                "grade": "برتقال فالنسيا فئة أولى",
                "loadingCapacity": "٢٢ طن لكل ٤٠ قدم مبرد"
          },
          "hi": {
                "origin": "नागपुर, भारत",
                "packaging": "१५ किग्रा टेलीस्कोपिक कार्टन",
                "moq": "२० मीट्रिक टन",
                "grade": "वेलेंसिया ग्रेड I",
                "loadingCapacity": "२२ मीट्रिक टन प्रति ४0 फीट रीफर"
          },
          "zh": {
                "origin": "纳格浦尔, 印度",
                "packaging": "15公斤套入式高强度纸箱",
                "moq": "20公吨",
                "grade": "瓦伦西亚一级果",
                "loadingCapacity": "22公吨每40尺冷藏集装箱"
          }
    },
    specifications: {
          "en": [
                "Size: 64/72/80/88 count",
                "Juice content: Min 45%",
                "Acid ratio: 8-12"
          ],
          "es": [
                "Calibres: 64/72/80/88 unidades",
                "Contenido de jugo: Mín 45%",
                "Relación acidez: 8-12"
          ],
          "ar": [
                "العدد: ٦٤/٧٢/٨٠/٨٨ حبة",
                "محتوى العصير: ٤٥٪ كحد أدنى",
                "نسبة الحموضة: ٨-١٢"
          ],
          "hi": [
                "आकार: ६४/७२/८०/८८ काउंट",
                "रस की मात्रा: न्यूनतम ४५%",
                "अम्लता अनुपात: ८-१२"
          ],
          "zh": [
                "规格包装：64/72/80/88颗箱装",
                "出汁率：不低于45%",
                "糖酸比：8至12"
          ]
    }
  },
  {
    id: 'tomatoes',
    category: 'fresh_produce',
    name: {"en":"Tomatoes","es":"Tomates","ar":"طماطم","hi":"टमाटर","zh":"番茄"},
    description: {"en":"Firm, plump red Roma tomatoes, picked at vine-ripe stage for long shelf life.","es":"Tomates Roma firmes y carnosos, cosechados maduros para una larga vida útil.","ar":"طماطم روما الحمراء المتماسكة والمليئة بالعصير، تقطف عند النضج لإطالة مدة الصلاحية.","hi":"मजबूत, गोल लाल रोमा टमाटर, लंबी शेल्फ लाइफ के लिए बेल पर पकने की अवस्था में चुने गए।","zh":"质地紧实、饱满圆润的红色罗马番茄，熟成期采摘以保证超长保鲜。"},
    image: ASSET_PRODUCTS.tomato,
    details: {
          "en": {
                "origin": "Karnataka, India",
                "packaging": "10kg Plastic Crates",
                "moq": "12 MT",
                "grade": "Class I Vine-Ripe",
                "loadingCapacity": "15 MT per 40ft Reefer"
          },
          "es": {
                "origin": "Karnataka, India",
                "packaging": "Cajas plásticas de 10kg",
                "moq": "12 MT",
                "grade": "Clase I Maduro de mata",
                "loadingCapacity": "15 MT por Reefer de 40 pies"
          },
          "ar": {
                "origin": "كارناتاكا، الهند",
                "packaging": "صناديق بلاستيكية ١٠ كجم",
                "moq": "١٢ طن",
                "grade": "طماطم ناضجة على الأم فئة أولى",
                "loadingCapacity": "١٥ طن لكل ٤٠ قدم مبرد"
          },
          "hi": {
                "origin": "कर्नाटक, भारत",
                "packaging": "१० किग्रा प्लास्टिक क्रेट",
                "moq": "१२ मीट्रिक टन",
                "grade": "क्लास I वाइन-राइप",
                "loadingCapacity": "१५ मीट्रिक टन प्रति ४0 फीट रीफर"
          },
          "zh": {
                "origin": "卡纳塔克邦, 印度",
                "packaging": "10公斤硬质塑料周转箱",
                "moq": "12公吨",
                "grade": "一级熟成果",
                "loadingCapacity": "15公吨每40尺冷藏集装箱"
          }
    },
    specifications: {
          "en": [
                "Size: 55-65mm",
                "Color stage: Turning to Red",
                "Temp: 10-12°C"
          ],
          "es": [
                "Tamaño: 55-65mm",
                "Etapa de color: Rojo virando",
                "Temp: 10-12°C"
          ],
          "ar": [
                "الحجم: ٥٥-٦٥ ملم",
                "مرحلة اللون: يتحول للأحمر",
                "درجة الحرارة: ١٠-١٢ مئوية"
          ],
          "hi": [
                "आकार: ५५-६५ मिमी",
                "रंग की स्थिति: लाल रंग में बदलना",
                "तापमान: १०-१२°C"
          ],
          "zh": [
                "果径尺寸：55-65毫米",
                "转色度：转红发彩阶段",
                "冷链控制温度：10-12°C"
          ]
    }
  },
  {
    id: 'onions',
    category: 'fresh_produce',
    name: {"en":"Red Onions","es":"Cebollas Rojas","ar":"بصل أحمر","hi":"लाल प्याज","zh":"红洋葱"},
    description: {"en":"Firm, fresh, and pungent premium red onions, graded for export quality with tight skin.","es":"Cebollas rojas premium firmes y frescas, clasificadas para exportación.","ar":"بصل أحمر فاخر طازج ومتماسك، مصنف للتصدير بجودة عالية مع قشرة مشدودة.","hi":"मजबूत, ताजा और तीखे प्रीमियम लाल प्याज, निर्यात गुणवत्ता के लिए वर्गीकृत।","zh":"坚实、新鲜且味浓的出口级红洋葱，外皮红润完整，风味浓郁。"},
    image: ASSET_PRODUCTS.onion,
    details: {
          "en": {
                "origin": "Nashik, Maharashtra, India",
                "packaging": "25kg / 50kg Mesh Bags",
                "moq": "25 MT",
                "grade": "Export Grade A (55mm+)",
                "loadingCapacity": "28 MT per 40ft Reefer"
          },
          "es": {
                "origin": "Nashik, Maharashtra, India",
                "packaging": "Sacos de malla de 25kg / 50kg",
                "moq": "25 MT",
                "grade": "Exportación Grado A (55mm+)",
                "loadingCapacity": "28 MT por Reefer de 40 pies"
          },
          "ar": {
                "origin": "ناشيك، ماهاراشترا، الهند",
                "packaging": "أكياس شبكية ٢٥ كجم / ٥٠ كجم",
                "moq": "٢٥ طن",
                "grade": "درجة ممتازة للتصدير (٥٥ ملم+)",
                "loadingCapacity": "٢٨ طن لكل ٤٠ قدم مبرد"
          },
          "hi": {
                "origin": "नासिक, महाराष्ट्र, भारत",
                "packaging": "२५ किग्रा / ५० किग्रा मेश बैग",
                "moq": "२५ मीट्रिक टन",
                "grade": "निर्यात ग्रेड A (५५ मिमी+)",
                "loadingCapacity": "२८ मीट्रिक टन प्रति ४0 फीट रीफर"
          },
          "zh": {
                "origin": "纳西克, 马哈拉施特拉邦, 印度",
                "packaging": "25公斤/50公斤透气网袋",
                "moq": "25公吨",
                "grade": "特级出口 A 级 (55mm+)",
                "loadingCapacity": "28公吨每40尺冷藏集装箱"
          }
    },
    specifications: {
          "en": [
                "Size: 45mm+, 55mm+",
                "Moisture: Dry skin, strictly cured",
                "Skin integrity: Double skin, tight"
          ],
          "es": [
                "Tamaño: 45mm+, 55mm+",
                "Humedad: Piel seca, curada",
                "Integridad: Doble capa firme"
          ],
          "ar": [
                "المقاس: ٤٥ ملم+، ٥٥ ملم+",
                "الرطوبة: قشرة جافة ومعالجة",
                "سلامة القشرة: قشرة مزدوجة ومشدودة"
          ],
          "hi": [
                "आकार: ४५ मिमी+, ५५ मिमी+",
                "नमी: सूखी त्वचा, पूरी तरह से सुखाया हुआ",
                "त्वचा अखंडता: दोहरी त्वचा, मजबूत"
          ],
          "zh": [
                "规格：45mm+ / 55mm+",
                "干燥度：经过严格自然风干烘干处理",
                "外皮：紧实双层完整包裹"
          ]
    }
  },
  {
    id: 'drumstick',
    category: 'fresh_produce',
    name: {"en":"Moringa Drumsticks","es":"Moringa (Moringa)","ar":"مورينجا (مورينجا)","hi":"सहजन (मोरिंगा)","zh":"辣木豆荚"},
    description: {"en":"Organic nutrient-rich moringa drumstick pods, tender and vibrant green, harvested daily.","es":"Vainas de moringa orgánicas ricas en nutrientes, tiernas y de verde vibrante.","ar":"قرون مورينجا عضوية غنية بالعناصر الغذائية، طرية وخضراء زاهية، تقطف يومياً.","hi":"जैविक पोषक तत्वों से भरपूर मोरिंगा की फली, कोमल और जीवंत हरी, प्रतिदिन काटी जाती है।","zh":"富含高营养的有机辣木豆荚，鲜嫩翠绿，每日晨间采收。"},
    image: ASSET_PRODUCTS.drumstick,
    details: {
          "en": {
                "origin": "Tamil Nadu, India",
                "packaging": "5kg / 10kg Corrugated Boxes",
                "moq": "5 MT",
                "grade": "Fresh Export Quality",
                "loadingCapacity": "8 MT per 20ft Reefer"
          },
          "es": {
                "origin": "Tamil Nadu, India",
                "packaging": "Cajas corrugadas de 5kg / 10kg",
                "moq": "5 MT",
                "grade": "Calidad Fresca de Exportación",
                "loadingCapacity": "8 MT por Reefer de 20 pies"
          },
          "ar": {
                "origin": "تاميل نادو، الهند",
                "packaging": "صناديق كرتونية ٥ كجم / ١٠ كجم",
                "moq": "٥ طن",
                "grade": "جودة تصدير طازجة",
                "loadingCapacity": "٨ طن لكل ٢٠ قدم مبرد"
          },
          "hi": {
                "origin": "तमिलनाडु, भारत",
                "packaging": "५ किग्रा / १० किग्रा नालीदार डिब्बे",
                "moq": "५ मीट्रिक टन",
                "grade": "ताजा निर्यात गुणवत्ता",
                "loadingCapacity": "८ मीट्रिक टन प्रति २० फीट रीफर"
          },
          "zh": {
                "origin": "泰米尔纳德邦, 印度",
                "packaging": "5公斤/10公斤通风瓦楞纸箱",
                "moq": "5公吨",
                "grade": "特级出口鲜品",
                "loadingCapacity": "8公吨每20尺冷藏集装箱"
          }
    },
    specifications: {
          "en": [
                "Length: 45cm - 60cm",
                "Diameter: 1.5cm - 2.0cm",
                "Shelf life: 14 days under cold chain"
          ],
          "es": [
                "Longitud: 45cm - 60cm",
                "Diámetro: 1.5cm - 2.0cm",
                "Vida útil: 14 días en cadena de frío"
          ],
          "ar": [
                "الطول: ٤٥ سم - ٦٠ سم",
                "القطر: ١.٥ سم - ٢.٠ سم",
                "مدة الصلاحية: ١٤ يوماً تحت التبريد"
          ],
          "hi": [
                "लंबाई: ४५ सेमी - ६० सेमी",
                "व्यास: १.५ सेमी - २.० सेमी",
                "शेल्फ लाइफ: कोल्ड चेन में १४ दिन"
          ],
          "zh": [
                "平均长度：45厘米 - 60厘米",
                "果径粗度：1.5厘米 - 2.0厘米",
                "保鲜期：全程冷链下长达14天"
          ]
    }
  },
  {
    id: 'rice',
    category: 'grains',
    name: {"en":"Basmati Rice","es":"Arroz Basmati","ar":"أرز أبسمتي","hi":"बासमती चावल","zh":"巴斯马蒂香米"},
    description: {"en":"Aromatic, long-grain 1121 steam Basmati rice, aged for maximum fragrance.","es":"Arroz Basmati 1121 al vapor de grano largo, envejecido para un aroma máximo.","ar":"أرز بسمتي ١١٢١ معتق بالبخار طويل الحبة ذو رائحة زكية.","hi":"सुगंधित, लंबे दाने वाला 1121 स्टीम बासमती चावल, अधिकतम सुगंध के लिए पुराना।","zh":"印度顶级 1121 蒸谷长粒巴斯马蒂（Basmati）香米，陈化储存，饭香浓郁。"},
    image: ASSET_PRODUCTS.rice,
    details: {
          "en": {
                "origin": "Punjab / Haryana, India",
                "packaging": "20kg / 50kg Non-Woven PP Bags",
                "moq": "25 MT",
                "grade": "1121 Steam Extra Long",
                "loadingCapacity": "25 MT per 20ft"
          },
          "es": {
                "origin": "Punjab / Haryana, India",
                "packaging": "Sacos de PP no tejido de 20kg / 50kg",
                "moq": "25 MT",
                "grade": "1121 Vapor Extra Largo",
                "loadingCapacity": "25 MT por 20 pies"
          },
          "ar": {
                "origin": "البنجاب / هاريانا، الهند",
                "packaging": "أكياس أقمشة غير منسوجة ٢٠ كجم / ٥٠ كجم",
                "moq": "٢٥ طن",
                "grade": "١١٢١ بخار طويل جداً",
                "loadingCapacity": "٢٥ طن لكل ٢٠ قدم"
          },
          "hi": {
                "origin": "पंजाब / हरियाणा, भारत",
                "packaging": "२० किग्रा / ५० किग्रा नॉन-वुवेन पीपी बैग",
                "moq": "२५ मीट्रिक टन",
                "grade": "1121 स्टीम एक्स्ट्रा लॉन्ग",
                "loadingCapacity": "२५ मीट्रिक टन प्रति २० फीट"
          },
          "zh": {
                "origin": "旁遮普邦 / 哈里亚纳邦, 印度",
                "packaging": "20公斤/50公斤无纺布环保编织袋",
                "moq": "25公吨",
                "grade": "1121 蒸谷超长粒级",
                "loadingCapacity": "25公吨每20尺集装箱"
          }
    },
    specifications: {
          "en": [
                "Grain length: Avg 8.35mm",
                "Elongation ratio: 2.0x",
                "Chalky grains: < 1%"
          ],
          "es": [
                "Longitud del grano: Prom 8.35mm",
                "Ratio elongación: 2.0x",
                "Granos gredosos: < 1%"
          ],
          "ar": [
                "طول الحبة: متوسط ٨.٣٥ ملم",
                "نسبة الاستطالة: ٢.0 ضعف",
                "الحبات الطباشيرية: أقل من ١٪"
          ],
          "hi": [
                "दाने की लंबाई: औसत ८.३५ मिमी",
                "लंबाई विस्तार अनुपात: २.0 गुना",
                "चाकी ग्रेन्स: १% से कम"
          ],
          "zh": [
                "平均粒长：8.35毫米以上",
                "烹饪拉伸比：2.0倍",
                "垩白粒率：少于1%"
          ]
    }
  },
  {
    id: 'wheat',
    category: 'grains',
    name: {"en":"Wheat","es":"Trigo","ar":"قمح","hi":"गेहूं","zh":"小麦"},
    description: {"en":"Golden premium Sharbati wheat, high in gluten and excellent for flour milling.","es":"Trigo dorado premium Sharbati, de alto contenido en gluten y excelente molienda.","ar":"قمح شارباتي الذهبي الممتاز، ذو محتوى بروتين عالي وممتاز للمطاحن وصنع الخبز.","hi":"सुनहरा प्रीमियम शरबती गेहूं, उच्च ग्लूटेन और आटा मिलिंग के लिए उत्कृष्ट।","zh":"金黄色的优质莎尔巴蒂（Sharbati）小麦，高筋质，极其适合磨粉制面。"},
    image: ASSET_PRODUCTS.wheat,
    details: {
          "en": {
                "origin": "Madhya Pradesh, India",
                "packaging": "50kg Jute Bags",
                "moq": "25 MT",
                "grade": "Premium Sharbati Grade I",
                "loadingCapacity": "25 MT per 20ft"
          },
          "es": {
                "origin": "Madhya Pradesh, India",
                "packaging": "Sacos de yute de 50kg",
                "moq": "25 MT",
                "grade": "Premium Sharbati Grado I",
                "loadingCapacity": "25 MT por 20 pies"
          },
          "ar": {
                "origin": "ماديا براديش، الهند",
                "packaging": "أكياس خيش ٥٠ كجم",
                "moq": "٢٥ طن",
                "grade": "قمح شارباتي ممتاز فئة أولى",
                "loadingCapacity": "٢٥ طن لكل ٢٠ قدم"
          },
          "hi": {
                "origin": "मध्य प्रदेश, भारत",
                "packaging": "५० किग्रा जूट बैग",
                "moq": "२५ मीट्रिक टन",
                "grade": "प्रीमियम शरबती ग्रेड I",
                "loadingCapacity": "२५ मीट्रिक टन प्रति २० फीट"
          },
          "zh": {
                "origin": "马德里亚邦, 印度",
                "packaging": "50公斤耐磨麻袋",
                "moq": "25公吨",
                "grade": "黄金 Sharbati 一级",
                "loadingCapacity": "25公吨每20尺集装箱"
          }
    },
    specifications: {
          "en": [
                "Protein content: 12-14%",
                "Moisture: < 11%",
                "Gluten wet: Min 28%"
          ],
          "es": [
                "Proteínas: 12-14%",
                "Humedad: < 11%",
                "Gluten húmedo: Mín 28%"
          ],
          "ar": [
                "نسبة البروتين: ١٢-١٤٪",
                "الرطوبة: < ١١٪",
                "الجلوتن الرطب: ٢٨٪ كحد أدنى"
          ],
          "hi": [
                "प्रोटीन की मात्रा: १२-१४%",
                "नमी: < ११%",
                "गीला ग्लूटेन: न्यूनतम २८%"
          ],
          "zh": [
                "蛋白质含量：12%至14%",
                "水分：低于11%",
                "湿面筋含量：不低于28%"
          ]
    }
  },
  {
    id: 'potatoes',
    category: 'fresh_produce',
    name: {"en":"Potatoes","es":"Patatas","ar":"بطاطس","hi":"आलू","zh":"土豆"},
    description: {"en":"Premium quality yellow potatoes, smooth-skinned and perfect for versatile culinary use.","es":"Patatas amarillas de calidad premium, con piel suave e ideales para múltiples usos culinarios.","ar":"بطاطس صفراء عالية الجودة، ملساء القشرة ومثالية للاستخدامات الطهي المتنوعة.","hi":"प्रीमियम गुणवत्ता वाले पीले आलू, चिकनी त्वचा वाले और बहुमुखी पाक उपयोग के लिए उत्तम।","zh":"高品质黄金黄皮土豆，表皮光滑，芽眼浅，适合各种烹饪。"},
    image: ASSET_PRODUCTS.potato,
    details: {
          "en": {
                "origin": "Gujarat, India",
                "packaging": "50kg Mesh Bags",
                "moq": "25 MT",
                "grade": "Grade A Multipurpose",
                "loadingCapacity": "26 MT per 40ft Reefer"
          },
          "es": {
                "origin": "Gujarat, India",
                "packaging": "Sacos de malla de 50kg",
                "moq": "25 MT",
                "grade": "Grado A Multiuso",
                "loadingCapacity": "26 MT por Reefer de 40 pies"
          },
          "ar": {
                "origin": "غوجارات، الهند",
                "packaging": "أكياس شبكية ٥٠ كجم",
                "moq": "٢٥ طن",
                "grade": "بطاطس صالحة لكافة الاستخدامات فئة أ",
                "loadingCapacity": "٢٦ طن لكل ٤٠ قدم مبرد"
          },
          "hi": {
                "origin": "गुजरात, भारत",
                "packaging": "५० किग्रा मेश बैग",
                "moq": "२५ मीट्रिक टन",
                "grade": "ग्रेड A बहुउद्देशीय",
                "loadingCapacity": "२६ मीट्रिक टन प्रति ४0 फीट रीफर"
          },
          "zh": {
                "origin": "古吉拉特邦, 印度",
                "packaging": "50公斤透气编织网眼袋",
                "moq": "25公吨",
                "grade": "A级多用途级",
                "loadingCapacity": "26公吨每40尺冷藏集装箱"
          }
    },
    specifications: {
          "en": [
                "Size: 45mm+",
                "Dry matter: 18-21%",
                "Defects/Damage: < 1.5%"
          ],
          "es": [
                "Tamaño: 45mm+",
                "Materia seca: 18-21%",
                "Defectos/Daños: < 1.5%"
          ],
          "ar": [
                "المقاس: ٤٥ ملم فأكثر",
                "المادة الجافة: ١٨-٢١٪",
                "العيوب أو الكسور: أقل من ١.٥٪"
          ],
          "hi": [
                "आकार: ४५ मिमी+",
                "ठोस पदार्थ: १८-२१%",
                "खराबी/क्षति: १.५% से कम"
          ],
          "zh": [
                "规格：45毫米以上",
                "干物质含量：18%至21%",
                "瑕疵/损伤率：少于1.5%"
          ]
    }
  }
];

export const PORTS: Record<string, ShippingPort> = {
  nhava_sheva: {
    id: 'nhava_sheva',
    name: 'Nhava Sheva (JNPT)',
    country: { en: 'India', es: 'India', ar: 'الهند', hi: 'भारत', zh: '印度' },
    coords: { x: 68, y: 48 }
  },
  mundra: {
    id: 'mundra',
    name: 'Mundra Port',
    country: { en: 'India', es: 'India', ar: 'الهند', hi: 'भारत', zh: '印度' },
    coords: { x: 65, y: 45 }
  },
  jebel_ali: {
    id: 'jebel_ali',
    name: 'Jebel Ali',
    country: { en: 'UAE', es: 'EAU', ar: 'الإمارات', hi: 'यूएई', zh: '阿联酋' },
    coords: { x: 58, y: 44 }
  },
  rotterdam: {
    id: 'rotterdam',
    name: 'Port of Rotterdam',
    country: { en: 'Netherlands', es: 'Países Bajos', ar: 'هولندا', hi: 'नीदरलैंड', zh: '荷兰' },
    coords: { x: 42, y: 28 }
  },
  singapore: {
    id: 'singapore',
    name: 'Port of Singapore',
    country: { en: 'Singapore', es: 'Singapur', ar: 'سنغافورة', hi: 'सिंगापुर', zh: '新加坡' },
    coords: { x: 78, y: 56 }
  },
  shanghai: {
    id: 'shanghai',
    name: 'Shanghai Port',
    country: { en: 'China', es: 'China', ar: 'الصين', hi: 'चीन', zh: '中国' },
    coords: { x: 84, y: 42 }
  }
};

export const ROUTES: ShippingRoute[] = [
  {
    id: 'route_1',
    origin: 'nhava_sheva',
    destination: 'rotterdam',
    vesselName: 'Seatruck Voyager',
    cargo: { en: 'Cold-Chain Basmati Rice & Cashews', es: 'Arroz Basmati y Anacardos con Cadena de Frío', ar: 'أرز بسمتي وكاجو في سلسلة التبريد', hi: 'कोल्ड-चेन बासमती चावल और काजू', zh: '冷链巴斯马蒂大米与腰果' },
    transitDays: 18,
    isActive: true
  },
  {
    id: 'route_2',
    origin: 'mundra',
    destination: 'jebel_ali',
    vesselName: 'Seatruck Pearl',
    cargo: { en: 'Fresh Red Onions & Potatoes', es: 'Cebollas Rojas Frescas y Patatas', ar: 'بصل أحمر طازج وبطاطس', hi: 'ताजा लाल प्याज और आलू', zh: '保鲜红洋葱与土豆' },
    transitDays: 4,
    isActive: true
  },
  {
    id: 'route_3',
    origin: 'nhava_sheva',
    destination: 'singapore',
    vesselName: 'Seatruck Orion',
    cargo: { en: 'Moringa Drumsticks & Sweet Corn', es: 'Vainas de Moringa y Maíz Dulce', ar: 'قرون المورينجا والذرة الحلوة', hi: 'सहजन और स्वीट कॉर्न', zh: '鲜采辣木豆荚与甜玉米' },
    transitDays: 7,
    isActive: true
  },
  {
    id: 'route_4',
    origin: 'mundra',
    destination: 'shanghai',
    vesselName: 'Seatruck Horizon',
    cargo: { en: 'Organic Spices & Dry Fruits', es: 'Especias Orgánicas y Frutos Secos', ar: 'توابل عضوية وفواكه مجففة', hi: 'जैविक मसाले और सूखे मेवे', zh: '有机香料与精选干果' },
    transitDays: 14,
    isActive: true
  }
];

export const INITIAL_TRACKING_DATA: Record<string, Shipment> = {
  'ST-9283-IND': {
    trackingId: 'ST-9283-IND',
    commodity: { en: 'Premium 1121 Steam Basmati Rice', es: 'Arroz Basmati 1121 al Vapor Premium', ar: 'أرز بسمتي ١١٢١ معتق بالبخار فاخر', hi: 'प्रीमियम 1121 स्टीम बासमती चावल', zh: '特级 1121 蒸谷巴斯马蒂香米' },
    vesselName: 'Seatruck Voyager V.104',
    containerId: 'STLU-883921-0',
    containerType: 'Reefer (40ft)',
    status: 'transit',
    originPort: { en: 'Nhava Sheva (JNPT), India', es: 'Nhava Sheva (JNPT), India', ar: 'نهيفا شيفا (JNPT)، الهند', hi: 'न्हावा शेवा (JNPT), भारत', zh: '印度 纳瓦舍瓦港' },
    destinationPort: { en: 'Port of Rotterdam, Netherlands', es: 'Puerto de Rotterdam, Países Bajos', ar: 'ميناء روتيردام، هولندا', hi: 'रॉटरडैम बंदरगाह, नीदरलैंड', zh: '荷兰 鹿特丹港' },
    departureDate: '2026-07-12',
    arrivalDate: '2026-07-30',
    temperature: '14.2 °C',
    humidity: '58%',
    currentLat: 18.9,
    currentLng: 62.4,
    milestones: [
      {
        status: 'processing',
        date: '2026-07-08',
        location: 'Nashik Processing Plant, MH',
        description: { en: 'Milled, quality inspected, and sealed in PP bags', es: 'Molido, inspeccionado y sellado en sacos', ar: 'تم الطحن والفحص والجودة والختم في الأكياس', hi: 'मिलिंग, गुणवत्ता निरीक्षण और बैग में सील', zh: '已完成精磨加工、出厂质检与密封包装' },
        completed: true
      },
      {
        status: 'customs',
        date: '2026-07-10',
        location: 'Nhava Sheva Customs Station',
        description: { en: 'Export documentation and phytosanitary certificate approved', es: 'Documentación de exportación y certificado fitosanitario aprobados', ar: 'الموافقة على وثائق التصدير والشهادة الصحية النباتية', hi: 'निर्यात दस्तावेज और फाइटोसैनिटरी प्रमाणपत्र स्वीकृत', zh: '出口海关报关与植物检疫合格放行' },
        completed: true
      },
      {
        status: 'loaded',
        date: '2026-07-12',
        location: 'JNPT Berth 3',
        description: { en: 'Gantry loaded on Seatruck Voyager. Cold-chain active.', es: 'Cargado en Seatruck Voyager. Cadena de frío activa.', ar: 'تم التحميل على السفينة سيتراك فويجر. التبريد نشط.', hi: 'सीट्रैक वोयाजर पर लोड किया गया। कोल्ड-चेन सक्रिय।', zh: '已被龙门吊装载至 Seatruck Voyager 轮，智能冷链保持运行' },
        completed: true
      },
      {
        status: 'transit',
        date: '2026-07-20',
        location: 'Arabian Sea / Red Sea Approach',
        description: { en: 'In-transit under IoT thermal monitoring. Speed 18.5 knots.', es: 'En tránsito bajo monitoreo térmico IoT. Velocidad 18.5 nudos.', ar: 'في الترانزيت تحت المراقبة الحرارية. السرعة ١٨.٥ عقدة.', hi: 'आईओटी थर्मल मॉनिटरिंग के तहत पारगमन में। गति १८.५ समुद्री मील।', zh: '红海航道航行中，物联网实时传输箱内温湿度，航速 18.5 节' },
        completed: true
      },
      {
        status: 'discharging',
        date: '2026-07-30',
        location: 'Rotterdam ECT Delta Terminal',
        description: { en: 'Estimated discharge and inland rail dispatch', es: 'Descarga estimada y despacho por ferrocarril', ar: 'التفريغ التقديري والنقل الداخلي', hi: 'अनुमानित डिस्चार्ज और अंतर्देशीय रेल प्रेषण', zh: '预计抵达并卸船，对接内陆铁路驳运' },
        completed: false
      }
    ]
  },
  'ST-4021-UAE': {
    trackingId: 'ST-4021-UAE',
    commodity: { en: 'Fresh Red Onions (55mm+)', es: 'Cebollas Rojas Frescas (55mm+)', ar: 'بصل أحمر طازج (٥٥ ملم+)', hi: 'ताजा लाल प्याज (५५ मिमी+)', zh: '出口级鲜红洋葱 (55mm+)' },
    vesselName: 'Seatruck Pearl V.88',
    containerId: 'STLU-412093-4',
    containerType: 'Reefer (40ft)',
    status: 'delivered',
    originPort: { en: 'Mundra Port, India', es: 'Puerto de Mundra, India', ar: 'ميناء موندرا، الهند', hi: 'मुंद्रा बंदरगाह, भारत', zh: '印度 蒙德拉港' },
    destinationPort: { en: 'Jebel Ali, UAE', es: 'Jebel Ali, EAU', ar: 'جبل علي، الإمارات', hi: 'जेबेल अली, यूएई', zh: '阿联酋 杰贝阿里港' },
    departureDate: '2026-07-15',
    arrivalDate: '2026-07-19',
    temperature: '12.0 °C',
    humidity: '65%',
    currentLat: 25.0,
    currentLng: 55.1,
    milestones: [
      {
        status: 'processing',
        date: '2026-07-12',
        location: 'Nashik Grading Yard',
        description: { en: 'Cured and sorted to 55mm+ export grade', es: 'Curado y clasificado a grado exportación 55mm+', ar: 'معالج ومصنف بدرجة تصدير ٥٥ ملم+', hi: 'सुखाया और ५५ मिमी+ निर्यात ग्रेड में वर्गीकृत किया गया', zh: '完成风干与 55mm+ 出口规格分级' },
        completed: true
      },
      {
        status: 'customs',
        date: '2026-07-14',
        location: 'Mundra Custom House',
        description: { en: 'Container sealed with smart IoT tracker', es: 'Contenedor sellado con rastreador inteligente IoT', ar: 'تم إغلاق الحاوية برقم تتبع ذكي', hi: 'स्मार्ट आईओटी ट्रैकर से सील किया गया कंटेनर', zh: '集装箱加封智能 IoT 远程追踪器' },
        completed: true
      },
      {
        status: 'delivered',
        date: '2026-07-19',
        location: 'Al Aweer Fruit Market, Dubai',
        description: { en: 'Delivered to consignee warehouse in perfect condition', es: 'Entregado al almacén en perfectas condiciones', ar: 'تم التسليم إلى مستودع المستلم بحالة ممتازة', hi: 'सही स्थिति में प्राप्तकर्ता के गोदाम में पहुंचा दिया गया', zh: '已按时安全送达收货方冷藏仓库' },
        completed: true
      }
    ]
  }
};
