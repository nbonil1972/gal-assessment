// Define the bilingual questions and categories
const QUESTIONS = [
  // BUSINESS PROCESSES (0-4)
  { 
    category: 'Business Processes', 
    category_es: 'Procesos de Negocio',
    text: 'Our key business processes are documented.',
    text_es: 'Nuestros procesos de negocio clave están documentados.'
  },
  { 
    category: 'Business Processes', 
    category_es: 'Procesos de Negocio',
    text: 'People know exactly what they need to do.',
    text_es: 'Las personas saben exactamente lo que tienen que hacer.'
  },
  { 
    category: 'Business Processes', 
    category_es: 'Procesos de Negocio',
    text: 'Projects usually finish on time.',
    text_es: 'Los proyectos generalmente terminan a tiempo.'
  },
  { 
    category: 'Business Processes', 
    category_es: 'Procesos de Negocio',
    text: 'Manual work is kept to a minimum.',
    text_es: 'El trabajo manual se mantiene al mínimo.'
  },
  { 
    category: 'Business Processes', 
    category_es: 'Procesos de Negocio',
    text: 'Problems are identified before affecting customers.',
    text_es: 'Los problemas se identifican antes de que afecten a los clientes.'
  },
  
  // PEOPLE (5-9)
  { 
    category: 'People', 
    category_es: 'Personas',
    text: 'Departments work well together.',
    text_es: 'Los departamentos trabajan bien juntos.'
  },
  { 
    category: 'People', 
    category_es: 'Personas',
    text: 'Responsibilities are clearly defined.',
    text_es: 'Las responsabilidades están claramente definidas.'
  },
  { 
    category: 'People', 
    category_es: 'Personas',
    text: 'Communication is effective.',
    text_es: 'La comunicación es efectiva.'
  },
  { 
    category: 'People', 
    category_es: 'Personas',
    text: 'Employees receive regular training.',
    text_es: 'Los empleados reciben capacitación regular.'
  },
  { 
    category: 'People', 
    category_es: 'Personas',
    text: 'Performance is monitored.',
    text_es: 'El desempeño es monitoreado.'
  },

  // TECHNOLOGY (10-14)
  { 
    category: 'Technology', 
    category_es: 'Tecnología',
    text: 'Our tools make daily work easier.',
    text_es: 'Nuestras herramientas facilitan el trabajo diario.'
  },
  { 
    category: 'Technology', 
    category_es: 'Tecnología',
    text: 'Information is easy to access.',
    text_es: 'La información es de fácil acceso.'
  },
  { 
    category: 'Technology', 
    category_es: 'Tecnología',
    text: 'We avoid entering the same information multiple times.',
    text_es: 'Evitamos ingresar la misma información varias veces.'
  },
  { 
    category: 'Technology', 
    category_es: 'Tecnología',
    text: 'Technology helps improve productivity.',
    text_es: 'La tecnología ayuda a mejorar la productividad.'
  },
  { 
    category: 'Technology', 
    category_es: 'Tecnología',
    text: 'Digital tools support our business goals.',
    text_es: 'Las herramientas digitales respaldan nuestros objetivos comerciales.'
  },

  // INFORMATION (15-19)
  { 
    category: 'Information', 
    category_es: 'Información',
    text: 'Management decisions are based on reliable information.',
    text_es: 'Las decisiones de gestión se basan en información confiable.'
  },
  { 
    category: 'Information', 
    category_es: 'Información',
    text: 'Reports are available when needed.',
    text_es: 'Los informes están disponibles cuando se necesitan.'
  },
  { 
    category: 'Information', 
    category_es: 'Información',
    text: 'Business indicators are monitored.',
    text_es: 'Los indicadores comerciales son monitoreados.'
  },
  { 
    category: 'Information', 
    category_es: 'Información',
    text: 'Information is accurate.',
    text_es: 'La información es precisa.'
  },
  { 
    category: 'Information', 
    category_es: 'Información',
    text: 'Important information is easy to find.',
    text_es: 'La información importante es fácil de encontrar.'
  },

  // CUSTOMER EXPERIENCE (20-24)
  { 
    category: 'Customer Experience', 
    category_es: 'Experiencia del Cliente',
    text: 'Customers receive timely responses.',
    text_es: 'Los clientes reciben respuestas oportunas.'
  },
  { 
    category: 'Customer Experience', 
    category_es: 'Experiencia del Cliente',
    text: 'Customer requests are tracked.',
    text_es: 'Las solicitudes de los clientes son rastreadas.'
  },
  { 
    category: 'Customer Experience', 
    category_es: 'Experiencia del Cliente',
    text: 'Service quality is consistent.',
    text_es: 'La calidad del servicio es consistente.'
  },
  { 
    category: 'Customer Experience', 
    category_es: 'Experiencia del Cliente',
    text: 'Customer feedback is collected.',
    text_es: 'Se recopilan los comentarios de los clientes.'
  },
  { 
    category: 'Customer Experience', 
    category_es: 'Experiencia del Cliente',
    text: 'Customer satisfaction is important to our business.',
    text_es: 'La satisfacción del cliente es importante para nuestro negocio.'
  }
];

// Translations Dictionary
const TRANSLATIONS = {
  en: {
    logoName: 'Growth', logoSub: 'Assessment',
    navAdmin: 'Admin Panel',
    welcomeBadge: 'Quick Operational Maturity Check',
    welcomeTitle: 'Business Growth Assessment™',
    welcomeSubtitle: 'Discover how prepared your business is to grow more efficiently.',
    benefit1: 'Takes less than 7 minutes',
    benefit2: 'Personalized Results',
    benefit3: 'Executive Report',
    btnStart: 'Start Assessment',
    
    contactTitle: 'Contact Information',
    contactSubtitle: 'Tell us about yourself and your company to customize your report.',
    firstName: 'First Name',
    lastName: 'Last Name',
    companyName: 'Company Name',
    jobTitle: 'Job Title',
    email: 'Business Email',
    phone: 'Phone Number',
    industry: 'Industry',
    companySize: 'Company Size',
    selectIndustry: 'Select Industry',
    selectSize: 'Select Company Size',
    industries: {
      Technology: 'Technology & Software',
      Manufacturing: 'Manufacturing',
      Retail: 'Retail & E-commerce',
      Finance: 'Finance & Insurance',
      Healthcare: 'Healthcare & Biotech',
      Consulting: 'Consulting & Professional Services',
      Other: 'Other'
    },
    sizes: {
      '1-10': '1 - 10 employees',
      '11-50': '11 - 50 employees',
      '51-200': '51 - 200 employees',
      '201-500': '201 - 500 employees',
      '501+': '501+ employees'
    },
    btnBack: 'Back',
    btnContinue: 'Continue',
    
    questionOf: 'Question {current} of {total}',
    estRemaining: 'Est. remaining: {time}',
    likert: {
      1: 'Strongly Disagree',
      2: 'Disagree',
      3: 'Neutral',
      4: 'Agree',
      5: 'Strongly Agree'
    },
    
    resultsTitle: 'Your Maturity Score',
    resultsSubtitle: 'Here is the breakdown of your operational maturity based on your answers.',
    scoreLabel: '/ 100 Score',
    maturityLevels: {
      'Needs Attention': 'Needs Attention',
      'Developing': 'Developing',
      'Growing': 'Growing',
      'High Performing': 'High Performing'
    },
    categoryStatusTitle: 'Category Status',
    actionsTitle: 'Key Actions & Recommendations',
    trafficLights: {
      red: 'Critical',
      yellow: 'Developing',
      green: 'Efficient'
    },
    recPriorities: {
      high: 'High Priority',
      medium: 'Medium Priority',
      low: 'Low Priority'
    },
    btnDownloadPDF: 'Download Executive Report',
    btnRetake: 'Retake Assessment',
    pdfTitle: 'Business Growth Assessment™',
    pdfSub: 'Confidential Executive Maturity Report',
    pdfGenerated: 'Generated on: {date}',
    pdfMetaTitle: 'Assessment Metadata',
    pdfScoreLabel: '/ 100 Score',
    pdfMaturity: 'Maturity Level:',
    pdfChartTitle: 'Visual Performance Breakdown',
    pdfPage2Title: 'Category Health Summary',
    pdfRecTitle: 'Recommended Actions & Roadmap',
    pdfFooter: '© Business Growth Assessment™. All rights reserved. Confidential document.',
    
    consentTitle: 'Confidentiality & Data Consent:',
    consentDesc: 'I authorize the processing of my data to receive this maturity report under strict privacy and confidentiality standards.',
    growthIndexLabel: 'Growth Pot.',
    growthIndexBadgeLow: 'Low Growth Pot.',
    growthIndexBadgeMed: 'Medium Growth Pot.',
    growthIndexBadgeHigh: 'High Growth Pot.',
    aiOpportunitiesLabel: 'AI Opt.',
    aiOpportunitiesBadgeLow: 'Low AI Opt.',
    aiOpportunitiesBadgeMed: 'Medium AI Opt.',
    aiOpportunitiesBadgeHigh: 'High AI Opt.',
    lowCodeTitle: 'Implement low-code technology for business agility',
    lowCodeDesc: 'There is a need to initially implement low-code technology that brings agility to the business.',
    stepperTitle: 'Growth Trajectory',
    stepperSteps: {
      1: 'Survival',
      2: 'Traction',
      3: 'Scaling',
      4: 'Expansion'
    },
    benchmarkNote: '* Market averages are based on the Operational Maturity Benchmarks Database (2025-2026) for SMEs.',
    explainMatTitle: 'Maturity Index:',
    explainMatDesc: 'Measures operational standardization and efficiency across processes, people, and systems.',
    explainGroTitle: 'Growth Potential:',
    explainGroDesc: 'Evaluates your scalability capability based on data decisions and technical automation.',
    explainAiTitle: 'AI Opportunities:',
    explainAiDesc: 'Identifies high-impact areas to implement AI solutions and automate process flows.',
    legendGreen: 'Efficient (70-100)',
    legendYellow: 'Developing (40-69)',
    legendRed: 'Critical (0-39)',
    
    // Dynamic Recommendations
    recs: {
      'Business Processes': {
        title: 'Document critical business processes',
        desc: 'Map out step-by-step procedures for your standard tasks to reduce key-person dependency and accelerate onboarding.'
      },
      'People': {
        title: 'Establish clear roles and accountability',
        desc: 'Define measurable job goals and key results. Schedule regular performance reviews and skills development workshops.'
      },
      'Technology': {
        title: 'Reduce repetitive manual work',
        desc: 'Integrate core digital platforms and replace redundant manual entries with smart software automation.'
      },
      'Information': {
        title: 'Define business performance indicators',
        desc: 'Build key performance indicator (KPI) dashboards that pull fresh, verified company metrics weekly to aid decision making.'
      },
      'Customer Experience': {
        title: 'Establish customer response time tracking',
        desc: 'Implement a customer support ticket tracker and formal service quality metrics to guarantee reliable client response times.'
      }
    }
  },
  es: {
    logoName: 'Crecimiento', logoSub: 'Evaluacion',
    navAdmin: 'Panel Admin',
    welcomeBadge: 'Evaluación Rápida de Madurez Operativa',
    welcomeTitle: 'Evaluación de Crecimiento Comercial™',
    welcomeSubtitle: 'Descubra qué tan preparada está su empresa para crecer de manera más eficiente.',
    benefit1: 'Toma menos de 7 minutos',
    benefit2: 'Resultados Personalizados',
    benefit3: 'Reporte Ejecutivo',
    btnStart: 'Iniciar Evaluación',
    
    contactTitle: 'Información de Contacto',
    contactSubtitle: 'Cuéntenos sobre usted y su empresa para personalizar su reporte.',
    firstName: 'Nombre',
    lastName: 'Apellido',
    companyName: 'Nombre de la Empresa',
    jobTitle: 'Cargo / Puesto',
    email: 'Correo de Negocios',
    phone: 'Número de Teléfono',
    industry: 'Sector / Industria',
    companySize: 'Tamaño de la Empresa',
    selectIndustry: 'Seleccione Sector',
    selectSize: 'Seleccione Tamaño de Empresa',
    industries: {
      Technology: 'Tecnología y Software',
      Manufacturing: 'Manufactura',
      Retail: 'Comercio Minorista y E-commerce',
      Finance: 'Finanzas y Seguros',
      Healthcare: 'Salud y Biotecnología',
      Consulting: 'Consultoría y Servicios Profesionales',
      Other: 'Otro'
    },
    sizes: {
      '1-10': '1 - 10 empleados',
      '11-50': '11 - 50 empleados',
      '51-200': '51 - 200 empleados',
      '201-500': '201 - 500 empleados',
      '501+': '501+ empleados'
    },
    btnBack: 'Atrás',
    btnContinue: 'Continuar',
    
    questionOf: 'Pregunta {current} de {total}',
    estRemaining: 'Tiempo restante est.: {time}',
    likert: {
      1: 'Totalmente en desacuerdo',
      2: 'En desacuerdo',
      3: 'Neutral',
      4: 'De acuerdo',
      5: 'Totalmente de acuerdo'
    },
    
    resultsTitle: 'Su Puntuación de Madurez',
    resultsSubtitle: 'Aquí está el desglose de su madurez operativa basado en sus respuestas.',
    scoreLabel: '/ 100 Puntos',
    maturityLevels: {
      'Needs Attention': 'Necesita Atención',
      'Developing': 'En Desarrollo',
      'Growing': 'Creciendo',
      'High Performing': 'Alto Rendimiento'
    },
    categoryStatusTitle: 'Estado por Categorías',
    actionsTitle: 'Acciones Clave y Recomendaciones',
    trafficLights: {
      red: 'Crítico',
      yellow: 'En Desarrollo',
      green: 'Eficiente'
    },
    recPriorities: {
      high: 'Prioridad Alta',
      medium: 'Prioridad Media',
      low: 'Prioridad Baja'
    },
    btnDownloadPDF: 'Descargar Reporte Ejecutivo',
    btnRetake: 'Repetir Evaluación',
    pdfTitle: 'Evaluación de Crecimiento Comercial™',
    pdfSub: 'Reporte Ejecutivo de Madurez Confidencial',
    pdfGenerated: 'Generado el: {date}',
    pdfMetaTitle: 'Metadatos de la Evaluación',
    pdfScoreLabel: '/ 100 Puntos',
    pdfMaturity: 'Nivel de Madurez:',
    pdfChartTitle: 'Desglose Visual de Rendimiento',
    pdfPage2Title: 'Resumen de Salud por Categoría',
    pdfRecTitle: 'Acciones Recomendadas y Hoja de Ruta',
    pdfFooter: '© Business Growth Assessment™. Todos los derechos reservados. Documento confidencial.',
    
    consentTitle: 'Autorización de Datos y Confidencialidad:',
    consentDesc: 'Autorizo el tratamiento de mis datos para recibir este reporte de madurez operativa bajo estrictos estándares de privacidad y confidencialidad.',
    growthIndexLabel: 'Pot. Crecimiento',
    growthIndexBadgeLow: 'Bajo Pot. Crec.',
    growthIndexBadgeMed: 'Medio Pot. Crec.',
    growthIndexBadgeHigh: 'Alto Pot. Crec.',
    aiOpportunitiesLabel: 'Op. IA',
    aiOpportunitiesBadgeLow: 'Bajo Pot. IA',
    aiOpportunitiesBadgeMed: 'Medio Pot. IA',
    aiOpportunitiesBadgeHigh: 'Alto Pot. IA',
    lowCodeTitle: 'Implementar tecnología low-code para agilidad',
    lowCodeDesc: 'Necesidad de implementar inicialmente tecnología low-code que aporte agilidad al negocio.',
    stepperTitle: 'Trayectoria de Crecimiento',
    stepperSteps: {
      1: 'Supervivencia',
      2: 'Tracción',
      3: 'Escalamiento',
      4: 'Expansión'
    },
    benchmarkNote: '* Los promedios del mercado están basados en la base de datos de Benchmarks de Madurez Operativa (2025-2026) para PyMEs.',
    explainMatTitle: 'Índice de Madurez:',
    explainMatDesc: 'Mide la estandarización y eficiencia operativa de sus procesos, equipo y sistemas.',
    explainGroTitle: 'Potencial de Crecimiento:',
    explainGroDesc: 'Evalúa la capacidad de escalar según sus sistemas analíticos y automatización tecnológica.',
    explainAiTitle: 'Oportunidades de IA:',
    explainAiDesc: 'Identifica áreas de alto impacto para implementar soluciones de Inteligencia Artificial.',
    legendGreen: 'Eficiente (70-100)',
    legendYellow: 'En Desarrollo (40-69)',
    legendRed: 'Crítico (0-39)',
    
    // Dynamic Recommendations
    recs: {
      'Business Processes': {
        title: 'Documentar procesos críticos de negocio',
        desc: 'Mapee los procedimientos paso a paso de sus tareas estándar para reducir la dependencia de personas clave y acelerar la capacitación.'
      },
      'People': {
        title: 'Establecer roles claros y responsabilidades',
        desc: 'Defina objetivos de trabajo medibles y resultados clave. Programe revisiones periódicas de desempeño y talleres de desarrollo.'
      },
      'Technology': {
        title: 'Reducir el trabajo manual repetitivo',
        desc: 'Integre sus plataformas digitales principales y reemplace las entradas de datos manuales redundantes con automatización.'
      },
      'Information': {
        title: 'Definir indicadores de rendimiento (KPIs)',
        desc: 'Construya tableros de indicadores clave que recopilen métricas verificadas semanalmente para ayudar en la toma de decisiones.'
      },
      'Customer Experience': {
        title: 'Establecer seguimiento del tiempo de respuesta',
        desc: 'Implemente un sistema de tickets de soporte y métricas formales de calidad para garantizar tiempos de respuesta confiables a los clientes.'
      }
    }
  }
};

// App State
let currentLang = localStorage.getItem('preferred_lang') || 'en';
let currentScreen = 'welcome';
let contactData = {
  firstName: '',
  lastName: '',
  companyName: '',
  jobTitle: '',
  email: '',
  phone: '',
  industry: '',
  companySize: ''
};
let currentQuestionIndex = 0;
let answers = new Array(QUESTIONS.length).fill(null); // stores 1-5 values
let chartInstance = null;
let finalAssessmentId = null;

// DOM Elements
const screens = {
  welcome: document.getElementById('screen-welcome'),
  contact: document.getElementById('screen-contact'),
  assessment: document.getElementById('screen-assessment'),
  results: document.getElementById('screen-results')
};

const btnStart = document.getElementById('btn-start');
const formContact = document.getElementById('form-contact');
const btnContactBack = document.getElementById('btn-contact-back');

const qNumber = document.getElementById('question-number');
const qCategory = document.getElementById('category-badge');
const progressBar = document.getElementById('progress-bar');
const qText = document.getElementById('question-text');
const btnAssessBack = document.getElementById('btn-assess-back');
const timeRemaining = document.getElementById('time-remaining');
const likertOptions = document.querySelectorAll('.likert-option');

const scoreNum = document.getElementById('gauge-score-num');
const maturityBadge = document.getElementById('result-maturity-badge');
const btnPDF = document.getElementById('btn-pdf');
const btnRestart = document.getElementById('btn-restart-assessment');

// Initialize events
document.addEventListener('DOMContentLoaded', () => {
  // Language Switch Events
  const langContainer = document.getElementById('lang-switch-container');
  if (langContainer) {
    // Set initial active state from localStorage
    langContainer.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
      
      btn.addEventListener('click', () => {
        langContainer.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLang = btn.getAttribute('data-lang');
        localStorage.setItem('preferred_lang', currentLang);
        translateUI();
      });
    });
  }

  // Consent checkbox validation
  const chkConsent = document.getElementById('chk-consent');
  if (chkConsent) {
    btnStart.disabled = !chkConsent.checked;
    chkConsent.addEventListener('change', () => {
      btnStart.disabled = !chkConsent.checked;
    });
  }

  btnStart.addEventListener('click', () => {
    if (chkConsent && !chkConsent.checked) {
      return;
    }
    switchScreen('contact');
  });
  
  btnContactBack.addEventListener('click', () => switchScreen('welcome'));
  
  formContact.addEventListener('submit', (e) => {
    e.preventDefault();
    // Gather contact data
    contactData.firstName = document.getElementById('first-name').value.trim();
    contactData.lastName = document.getElementById('last-name').value.trim();
    contactData.companyName = document.getElementById('company-name').value.trim();
    contactData.jobTitle = document.getElementById('job-title').value.trim();
    contactData.email = document.getElementById('email').value.trim();
    contactData.phone = document.getElementById('phone').value.trim();
    contactData.industry = document.getElementById('industry').value;
    contactData.companySize = document.getElementById('company-size').value;

    switchScreen('assessment');
    currentQuestionIndex = 0;
    renderQuestion();
  });

  // Likert Option Clicks
  likertOptions.forEach(option => {
    option.addEventListener('click', () => {
      const val = parseInt(option.getAttribute('data-value'), 10);
      
      // Visual feedback: select option
      likertOptions.forEach(opt => opt.classList.remove('selected'));
      option.classList.add('selected');
      
      // Save answer (wait 250ms for transition visual before advancing)
      setTimeout(() => {
        answers[currentQuestionIndex] = val;
        advanceQuestion();
      }, 250);
    });
  });

  btnAssessBack.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion();
    } else {
      switchScreen('contact');
    }
  });

  btnRestart.addEventListener('click', () => {
    // Reset state
    answers.fill(null);
    currentQuestionIndex = 0;
    formContact.reset();
    switchScreen('welcome');
  });

  btnPDF.addEventListener('click', downloadPDFReport);

  // Run initial translation
  translateUI();
});

// Translation Engine
function translateUI() {
  const dict = TRANSLATIONS[currentLang];
  
  // Header Logo & Nav Link
  const logoTextEl = document.querySelector('.logo-text');
  if (logoTextEl) {
    logoTextEl.innerHTML = `${dict.logoName}<span>${dict.logoSub}</span>`;
  }
  const navAdminLink = document.getElementById('nav-admin-link');
  if (navAdminLink) {
    navAdminLink.innerText = dict.navAdmin;
  }

  // Screen 1: Welcome
  const welcomeBadge = document.querySelector('#screen-welcome .welcome-badge');
  welcomeBadge.innerHTML = `
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
    </svg>
    ${dict.welcomeBadge}
  `;
  document.querySelector('#screen-welcome .welcome-title').innerText = dict.welcomeTitle;
  document.querySelector('#screen-welcome .welcome-subtitle').innerText = dict.welcomeSubtitle;
  
  const benefitItems = document.querySelectorAll('#screen-welcome .benefit-text');
  benefitItems[0].innerText = dict.benefit1;
  benefitItems[1].innerText = dict.benefit2;
  benefitItems[2].innerText = dict.benefit3;
  
  btnStart.innerHTML = `
    ${dict.btnStart}
    <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
    </svg>
  `;

  // Consent translations
  const consentTitleEl = document.getElementById('lbl-consent-title');
  if (consentTitleEl) consentTitleEl.innerText = dict.consentTitle;
  const consentDescEl = document.getElementById('lbl-consent-desc');
  if (consentDescEl) consentDescEl.innerText = dict.consentDesc;

  // Screen 2: Contact Information
  document.querySelector('#screen-contact .form-title').innerText = dict.contactTitle;
  document.querySelector('#screen-contact .form-subtitle').innerText = dict.contactSubtitle;
  
  // Form Labels
  const labels = document.querySelectorAll('#form-contact .form-label');
  labels[0].innerHTML = `${dict.firstName}<span class="required">*</span>`;
  labels[1].innerHTML = `${dict.lastName}<span class="required">*</span>`;
  labels[2].innerHTML = `${dict.companyName}<span class="required">*</span>`;
  labels[3].innerHTML = `${dict.jobTitle}<span class="required">*</span>`;
  labels[4].innerHTML = `${dict.email}<span class="required">*</span>`;
  labels[5].innerHTML = dict.phone;
  labels[6].innerHTML = dict.industry;
  labels[7].innerHTML = dict.companySize;

  // Form Inputs placeholders
  document.getElementById('first-name').placeholder = currentLang === 'en' ? 'John' : 'Juan';
  document.getElementById('last-name').placeholder = currentLang === 'en' ? 'Doe' : 'Pérez';
  document.getElementById('company-name').placeholder = currentLang === 'en' ? 'Acme Inc.' : 'Empresa S.A.';
  document.getElementById('job-title').placeholder = currentLang === 'en' ? 'Operations Manager' : 'Gerente de Operaciones';
  document.getElementById('email').placeholder = 'john.doe@company.com';

  // Industries dropdown
  const indSelect = document.getElementById('industry');
  const sizeSelect = document.getElementById('company-size');
  
  // Keep active selections
  const prevInd = indSelect.value;
  const prevSize = sizeSelect.value;

  indSelect.innerHTML = `<option value="" disabled ${!prevInd ? 'selected' : ''}>${dict.selectIndustry}</option>`;
  Object.entries(dict.industries).forEach(([key, val]) => {
    indSelect.innerHTML += `<option value="${key}" ${prevInd === key ? 'selected' : ''}>${val}</option>`;
  });

  sizeSelect.innerHTML = `<option value="" disabled ${!prevSize ? 'selected' : ''}>${dict.selectSize}</option>`;
  Object.entries(dict.sizes).forEach(([key, val]) => {
    sizeSelect.innerHTML += `<option value="${key}" ${prevSize === key ? 'selected' : ''}>${val}</option>`;
  });

  // Buttons
  document.getElementById('btn-contact-back').innerText = dict.btnBack;
  document.getElementById('btn-contact-next').innerHTML = `
    ${dict.btnContinue}
    <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
    </svg>
  `;

  // Screen 3: Assessment
  document.getElementById('btn-assess-back').innerHTML = `
    <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
    </svg>
    ${dict.btnBack}
  `;

  // Likert Options
  likertOptions.forEach(opt => {
    const val = opt.getAttribute('data-value');
    opt.querySelector('span:first-child').innerHTML = `${val} &nbsp;&nbsp; ${dict.likert[val]}`;
  });

  // Screen 4: Results
  document.querySelector('#screen-results .form-title').innerText = dict.resultsTitle;
  document.querySelector('#screen-results .result-subtitle').innerText = dict.resultsSubtitle;
  
  const gaugeLabelEl = document.querySelector('#screen-results .gauge-label');
  if (gaugeLabelEl) {
    gaugeLabelEl.innerText = currentLang === 'en' ? 'Score' : 'Puntaje';
  }
  
  // Legend is displayed directly inside the sub-rows now
  
  document.querySelectorAll('#screen-results .section-title')[0].innerText = dict.categoryStatusTitle;
  document.querySelectorAll('#screen-results .section-title')[1].innerText = dict.actionsTitle;

  // Stepper labels and headers
  const stepperTitleEl = document.getElementById('lbl-stepper-title');
  if (stepperTitleEl) stepperTitleEl.innerText = dict.stepperTitle;
  const step1El = document.getElementById('lbl-step-1');
  if (step1El) step1El.innerText = dict.stepperSteps[1];
  const step2El = document.getElementById('lbl-step-2');
  if (step2El) step2El.innerText = dict.stepperSteps[2];
  const step3El = document.getElementById('lbl-step-3');
  if (step3El) step3El.innerText = dict.stepperSteps[3];
  const step4El = document.getElementById('lbl-step-4');
  if (step4El) step4El.innerText = dict.stepperSteps[4];

  // Growth potential label
  const growthLblEl = document.getElementById('lbl-gauge-growth-lbl');
  if (growthLblEl) growthLblEl.innerText = dict.growthIndexLabel;
  // AI Opportunities label
  const aiLblEl = document.getElementById('lbl-gauge-ai-lbl');
  if (aiLblEl) aiLblEl.innerText = dict.aiOpportunitiesLabel;

  // Footnote Note
  const footerNoteEl = document.getElementById('footer-benchmark-note');
  if (footerNoteEl) footerNoteEl.innerText = dict.benchmarkNote;

  // Indicators Explanations translations
  const explainMatTitleEl = document.getElementById('lbl-explain-mat-title');
  if (explainMatTitleEl) explainMatTitleEl.innerText = dict.explainMatTitle;
  const explainMatDescEl = document.getElementById('lbl-explain-mat-desc');
  if (explainMatDescEl) explainMatDescEl.innerText = dict.explainMatDesc;
  const explainGroTitleEl = document.getElementById('lbl-explain-gro-title');
  if (explainGroTitleEl) explainGroTitleEl.innerText = dict.explainGroTitle;
  const explainGroDescEl = document.getElementById('lbl-explain-gro-desc');
  if (explainGroDescEl) explainGroDescEl.innerText = dict.explainGroDesc;
  const explainAiTitleEl = document.getElementById('lbl-explain-ai-title');
  if (explainAiTitleEl) explainAiTitleEl.innerText = dict.explainAiTitle;
  const explainAiDescEl = document.getElementById('lbl-explain-ai-desc');
  if (explainAiDescEl) explainAiDescEl.innerText = dict.explainAiDesc;

  // Legend translations
  const legendGreenEl = document.getElementById('lbl-legend-green');
  if (legendGreenEl) legendGreenEl.innerText = dict.legendGreen;
  const legendYellowEl = document.getElementById('lbl-legend-yellow');
  if (legendYellowEl) legendYellowEl.innerText = dict.legendYellow;
  const legendRedEl = document.getElementById('lbl-legend-red');
  if (legendRedEl) legendRedEl.innerText = dict.legendRed;
  
  btnPDF.innerHTML = `
    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
    </svg>
    ${dict.btnDownloadPDF}
  `;
  btnRestart.innerText = dict.btnRetake;

  // Refresh current running question or result layouts if active
  if (currentScreen === 'assessment') {
    renderQuestion();
  } else if (currentScreen === 'results') {
    submitAssessment(); // Re-render results in new language
  }
}

// Navigation Engine
function switchScreen(screenId) {
  const container = document.querySelector('.container');
  const card = document.querySelector('.card');
  
  if (container && card) {
    if (screenId === 'results') {
      container.style.maxWidth = '1040px';
      card.style.padding = '1.75rem 2.25rem';
    } else {
      container.style.maxWidth = '680px';
      if (screenId === 'welcome' || screenId === 'contact') {
        card.style.padding = '2.25rem 2.5rem';
      } else {
        card.style.padding = '2rem 2.25rem';
      }
    }
  }

  // Fade out current screen
  Object.values(screens).forEach(screen => {
    if (screen.classList.contains('active')) {
      screen.style.opacity = '0';
      screen.style.transform = 'translateY(-10px)';
      setTimeout(() => {
        screen.classList.remove('active');
        
        // Fade in target screen
        const target = screens[screenId];
        target.classList.add('active');
        // Force reflow
        target.offsetHeight;
        target.style.opacity = '1';
        target.style.transform = 'translateY(0)';
      }, 250);
    }
  });
  currentScreen = screenId;
}

// Render Assessment Screen
function renderQuestion() {
  const question = QUESTIONS[currentQuestionIndex];
  const dict = TRANSLATIONS[currentLang];
  
  // Update texts
  const qStr = dict.questionOf
    .replace('{current}', currentQuestionIndex + 1)
    .replace('{total}', QUESTIONS.length);
  qNumber.innerText = qStr;
  
  qCategory.innerText = currentLang === 'es' ? question.category_es : question.category;
  qText.innerText = currentLang === 'es' ? question.text_es : question.text;
  
  // Progress Bar
  const pct = Math.round((currentQuestionIndex / QUESTIONS.length) * 100);
  progressBar.style.width = `${pct}%`;
  
  // Time Remaining Estimate
  const secondsLeft = (QUESTIONS.length - currentQuestionIndex) * 16.8;
  const mins = Math.floor(secondsLeft / 60);
  const secs = Math.round(secondsLeft % 60);
  const timeStr = `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
  timeRemaining.innerText = dict.estRemaining.replace('{time}', timeStr);

  // Highlight pre-selected option if user backed into this question
  likertOptions.forEach(opt => {
    const val = parseInt(opt.getAttribute('data-value'), 10);
    if (answers[currentQuestionIndex] === val) {
      opt.classList.add('selected');
    } else {
      opt.classList.remove('selected');
    }
  });
}

function advanceQuestion() {
  if (currentQuestionIndex < QUESTIONS.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    // Assessment complete! Update progress to 100%
    progressBar.style.width = '100%';
    submitAssessment();
  }
}

// Calculate and show results
async function submitAssessment() {
  const dict = TRANSLATIONS[currentLang];

  // 1. Calculate Score
  const sum = answers.reduce((a, b) => a + b, 0);
  const overallScore = Math.max(0, Math.min(100, Math.round(((sum - 25) / 100) * 100)));
  
  // 2. Determine Maturity Level
  let level = '';
  if (overallScore <= 39) level = 'Needs Attention';
  else if (overallScore <= 69) level = 'Developing';
  else if (overallScore <= 84) level = 'Growing';
  else level = 'High Performing';

  // Market Benchmarks by Category & Industry (Benchmark database)
  const BENCHMARKS = {
    'Business Processes': { Technology: 68, Manufacturing: 72, Retail: 62, Finance: 75, Healthcare: 70, Consulting: 65, Other: 60 },
    'People': { Technology: 70, Manufacturing: 64, Retail: 58, Finance: 68, Healthcare: 72, Consulting: 78, Other: 62 },
    'Technology': { Technology: 82, Manufacturing: 58, Retail: 64, Finance: 72, Healthcare: 68, Consulting: 70, Other: 55 },
    'Information': { Technology: 74, Manufacturing: 66, Retail: 60, Finance: 80, Healthcare: 75, Consulting: 72, Other: 58 },
    'Customer Experience': { Technology: 76, Manufacturing: 60, Retail: 78, Finance: 70, Healthcare: 82, Consulting: 80, Other: 65 }
  };

  const getBenchmarkScore = (cat, ind, size) => {
    const baseMap = BENCHMARKS[cat] || { Other: 60 };
    let score = baseMap[ind] || baseMap['Other'] || 60;
    if (size === '1-10') score += 2;
    else if (size === '51-200' || size === '201-500') score += 4;
    else if (size === '501+') score += 6;
    return Math.min(95, Math.max(40, score));
  };

  // Calculate Category Averages (0 to 100 scale)
  const categories = [...new Set(QUESTIONS.map(q => q.category))];
  const categoryScores = {};
  const benchmarkScores = {};
  
  categories.forEach(cat => {
    const catIndices = QUESTIONS.map((q, idx) => q.category === cat ? idx : -1).filter(idx => idx !== -1);
    const catSum = catIndices.reduce((acc, idx) => acc + answers[idx], 0);
    categoryScores[cat] = Math.max(0, Math.min(100, Math.round(((catSum - 5) / 20) * 100)));
    
    // Calculate benchmark dynamically based on industry and size
    benchmarkScores[cat] = getBenchmarkScore(cat, contactData.industry || 'Other', contactData.companySize || '11-50');
  });

  // Animate circular gauge overall score UI
  const gaugeFillCircle = document.getElementById('gauge-fill-circle');
  if (scoreNum) {
    let currentVal = 0;
    const targetVal = overallScore;
    scoreNum.innerText = '0';
    
    const interval = setInterval(() => {
      if (currentVal >= targetVal) {
        scoreNum.innerText = targetVal;
        clearInterval(interval);
      } else {
        currentVal++;
        scoreNum.innerText = currentVal;
      }
    }, 12);
  }
  
  if (gaugeFillCircle) {
    const radius = 42;
    const circumference = 2 * Math.PI * radius; // ~263.89
    const offset = circumference - (overallScore / 100) * circumference;
    gaugeFillCircle.style.strokeDashoffset = offset;
    
    let strokeColor = '#EF4444'; // Red
    if (overallScore > 39 && overallScore <= 69) strokeColor = '#F59E0B'; // Orange
    else if (overallScore > 69) strokeColor = '#22C55E'; // Green
    gaugeFillCircle.style.stroke = strokeColor;
  }
  
  if (maturityBadge) {
    maturityBadge.innerText = dict.maturityLevels[level];
    maturityBadge.className = 'maturity-badge'; // reset
    const levelClass = level.toLowerCase().replace(' ', '-');
    maturityBadge.classList.add(levelClass);
  }

  // 3. Calculate Growth Velocity/Potential Index
  const growthVelocity = Math.round(
    (categoryScores['Technology'] * 0.4) + 
    (categoryScores['Business Processes'] * 0.3) + 
    (categoryScores['Information'] * 0.3)
  );

  // Animate Growth potential circular gauge
  const growthScoreNum = document.getElementById('gauge-growth-num');
  const growthFillCircle = document.getElementById('gauge-fill-growth');
  const growthBadge = document.getElementById('growth-velocity-badge');
  
  if (growthScoreNum) {
    let currentVal = 0;
    const targetVal = growthVelocity;
    growthScoreNum.innerText = '0';
    const interval = setInterval(() => {
      if (currentVal >= targetVal) {
        growthScoreNum.innerText = targetVal;
        clearInterval(interval);
      } else {
        currentVal++;
        growthScoreNum.innerText = currentVal;
      }
    }, 12);
  }
  
  if (growthFillCircle) {
    const radius = 42;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (growthVelocity / 100) * circumference;
    growthFillCircle.style.strokeDashoffset = offset;
    
    let strokeColor = '#EF4444'; // Red
    if (growthVelocity > 39 && growthVelocity <= 69) strokeColor = '#F59E0B'; // Orange
    else if (growthVelocity > 69) strokeColor = '#22C55E'; // Green
    growthFillCircle.style.stroke = strokeColor;
  }
  
  if (growthBadge) {
    let gBadgeText = '';
    let gClass = '';
    if (growthVelocity <= 39) {
      gBadgeText = dict.growthIndexBadgeLow;
      gClass = 'needs-attention';
    } else if (growthVelocity <= 69) {
      gBadgeText = dict.growthIndexBadgeMed;
      gClass = 'developing';
    } else {
      gBadgeText = dict.growthIndexBadgeHigh;
      gClass = 'growing';
    }
    growthBadge.innerText = gBadgeText;
    growthBadge.className = 'maturity-badge';
    growthBadge.classList.add(gClass);
  }

  // 3.5. Calculate AI Opportunities Index
  const aiOpportunities = Math.round(
    100 - (
      (categoryScores['Technology'] * 0.3) + 
      (categoryScores['Information'] * 0.4) + 
      (categoryScores['Business Processes'] * 0.3)
    )
  );

  // Animate AI Opportunities circular gauge
  const aiScoreNum = document.getElementById('gauge-ai-num');
  const aiFillCircle = document.getElementById('gauge-fill-ai');
  const aiBadge = document.getElementById('ai-opportunities-badge');
  
  if (aiScoreNum) {
    let currentVal = 0;
    const targetVal = aiOpportunities;
    aiScoreNum.innerText = '0';
    const interval = setInterval(() => {
      if (currentVal >= targetVal) {
        aiScoreNum.innerText = targetVal;
        clearInterval(interval);
      } else {
        currentVal++;
        aiScoreNum.innerText = currentVal;
      }
    }, 12);
  }
  
  if (aiFillCircle) {
    const radius = 42;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (aiOpportunities / 100) * circumference;
    aiFillCircle.style.strokeDashoffset = offset;
    
    let strokeColor = '#EF4444'; // Red
    if (aiOpportunities > 39 && aiOpportunities <= 69) strokeColor = '#F59E0B'; // Orange
    else if (aiOpportunities > 69) strokeColor = '#22C55E'; // Green
    aiFillCircle.style.stroke = strokeColor;
  }
  
  if (aiBadge) {
    let aiBadgeText = '';
    let aiClass = '';
    if (aiOpportunities <= 39) {
      aiBadgeText = dict.aiOpportunitiesBadgeLow;
      aiClass = 'needs-attention';
    } else if (aiOpportunities <= 69) {
      aiBadgeText = dict.aiOpportunitiesBadgeMed;
      aiClass = 'developing';
    } else {
      aiBadgeText = dict.aiOpportunitiesBadgeHigh;
      aiClass = 'growing';
    }
    aiBadge.innerText = aiBadgeText;
    aiBadge.className = 'maturity-badge';
    aiBadge.classList.add(aiClass);
  }

  // Update Stepper Timeline for Growth Trajectory
  const stepItems = [
    document.getElementById('step-1'),
    document.getElementById('step-2'),
    document.getElementById('step-3'),
    document.getElementById('step-4')
  ];
  const stepperLine = document.getElementById('stepper-line-fill');
  
  // Reset active/completed states
  stepItems.forEach(item => {
    if (item) item.classList.remove('active', 'completed');
  });
  
  let activeIndex = 0;
  let fillPercentage = 0;
  
  if (overallScore <= 39) {
    activeIndex = 0;
    fillPercentage = 0;
  } else if (overallScore <= 69) {
    activeIndex = 1;
    fillPercentage = 25;
  } else if (overallScore <= 84) {
    activeIndex = 2;
    fillPercentage = 50;
  } else {
    activeIndex = 3;
    fillPercentage = 75;
  }
  
  if (stepperLine) {
    stepperLine.style.width = `${fillPercentage}%`;
  }
  
  stepItems.forEach((item, idx) => {
    if (item) {
      if (idx < activeIndex) {
        item.classList.add('completed');
      } else if (idx === activeIndex) {
        item.classList.add('active');
      }
    }
  });

  // Populate Trajectory explanation box based on active stage
  const trajectoryTitleEl = document.getElementById('lbl-trajectory-stage-title');
  const trajectoryDescEl = document.getElementById('lbl-trajectory-stage-desc');
  
  if (trajectoryTitleEl && trajectoryDescEl) {
    if (overallScore <= 39) {
      trajectoryTitleEl.innerText = currentLang === 'en' ? 'Your Stage: 1. Survival (0-39%)' : 'Tu Etapa: 1. Supervivencia (0-39%)';
      trajectoryDescEl.innerText = currentLang === 'en' 
        ? 'Focus is on daily operations, with high dependency on founders, manual tasks, and low process documentation.'
        : 'Enfoque en la operación diaria, con alta dependencia de fundadores, procesos manuales y baja documentación.';
    } else if (overallScore <= 69) {
      trajectoryTitleEl.innerText = currentLang === 'en' ? 'Your Stage: 2. Traction (40-69%)' : 'Tu Etapa: 2. Tracción (40-69%)';
      trajectoryDescEl.innerText = currentLang === 'en'
        ? 'Initial processes are structured; the business has validated its market but needs standardizing tools and roles.'
        : 'Procesos iniciales estructurados; el negocio tiene tracción en el mercado pero requiere estandarizar herramientas y roles.';
    } else if (overallScore <= 84) {
      trajectoryTitleEl.innerText = currentLang === 'en' ? 'Your Stage: 3. Scaling (70-84%)' : 'Tu Etapa: 3. Escalamiento (70-84%)';
      trajectoryDescEl.innerText = currentLang === 'en'
        ? 'Structured operational base, documented workflows, and integrated technologies ready for accelerated growth.'
        : 'Base operativa estructurada, procesos documentados y herramientas digitales integradas listas para crecer con orden.';
    } else {
      trajectoryTitleEl.innerText = currentLang === 'en' ? 'Your Stage: 4. Expansion (85-100%)' : 'Tu Etapa: 4. Expansión (85-100%)';
      trajectoryDescEl.innerText = currentLang === 'en'
        ? 'Optimized operation, metrics-driven decisions, and structured culture prepared for sustainable global scale.'
        : 'Operación optimizada, toma de decisiones basada en datos y mejora continua listos para expandir el alcance global.';
    }
  }

  // Render Category Performance (Horizontal Progress Bars & Benchmark Sub-rows)
  const trafficContainer = document.getElementById('traffic-list-container');
  trafficContainer.innerHTML = '';
  
  categories.forEach(cat => {
    const score = categoryScores[cat];
    const bScore = benchmarkScores[cat];
    let color = 'green';
    let statusText = dict.trafficLights.green;
    
    if (score <= 39) {
      color = 'red';
      statusText = dict.trafficLights.red;
    } else if (score <= 69) {
      color = 'yellow';
      statusText = dict.trafficLights.yellow;
    }

    const catLabel = currentLang === 'es' 
      ? QUESTIONS.find(q => q.category === cat).category_es 
      : cat;

    const lblYou = currentLang === 'en' ? 'Your Score' : 'Tu Puntaje';
    const lblMarket = currentLang === 'en' ? 'Market Average' : 'Promedio de Mercado';

    const item = document.createElement('div');
    item.className = 'category-progress-item';
    item.innerHTML = `
      <div class="cat-label-row">
        <span class="cat-progress-label">${catLabel}</span>
      </div>
      <div class="progress-rows-container">
        <!-- User Score Row -->
        <div class="progress-row-item">
          <div class="progress-row-label">
            <span>${lblYou}</span>
            <span><strong>${score}%</strong> - <span class="cat-status-text ${color}">${statusText}</span></span>
          </div>
          <div class="progress-bar-track">
            <div class="progress-bar-fill ${color}" style="width: ${score}%;"></div>
          </div>
        </div>
        <!-- Market Benchmark Row -->
        <div class="progress-row-item">
          <div class="progress-row-label">
            <span>${lblMarket}</span>
            <span><strong>${bScore}%</strong></span>
          </div>
          <div class="progress-bar-track market-track">
            <div class="progress-bar-fill market-fill" style="width: ${bScore}%;"></div>
          </div>
        </div>
      </div>
    `;
    trafficContainer.appendChild(item);
  });

  // Check if any of the target questions got an answer <= 4 (not Strongly Agree)
  const lowCodeQuestions = [
    "Projects usually finish on time.",
    "Manual work is kept to a minimum.",
    "Departments work well together.",
    "Performance is monitored.",
    "Our tools make daily work easier.",
    "Information is easy to access.",
    "We avoid entering the same information multiple times.",
    "Technology helps improve productivity.",
    "Digital tools support our business goals.",
    "Reports are available when needed.",
    "Business indicators are monitored.",
    "Customers receive timely responses."
  ];

  let triggerLowCodeRec = false;
  lowCodeQuestions.forEach(qText => {
    const qIdx = QUESTIONS.findIndex(q => q.text === qText);
    if (qIdx !== -1 && answers[qIdx] !== null && answers[qIdx] <= 4) {
      triggerLowCodeRec = true;
    }
  });

  // Sort categories by score ascending to trigger dynamic recommendations
  const sortedCategories = categories.map(cat => ({
    category: cat,
    score: categoryScores[cat]
  })).sort((a, b) => a.score - b.score);

  const recsContainer = document.getElementById('recs-list-container');
  recsContainer.innerHTML = '';

  const finalRecs = [];

  // If low-code recommendation is triggered, add it at the top (High Priority)
  if (triggerLowCodeRec) {
    finalRecs.push({
      priority: 'high',
      priorityLabel: dict.recPriorities.high,
      title: dict.lowCodeTitle,
      desc: dict.lowCodeDesc,
      focusArea: currentLang === 'en' ? "Technology & Processes" : "Tecnología y Procesos"
    });
  }

  // Populate category-based recommendations
  sortedCategories.forEach((catItem, idx) => {
    const recData = dict.recs[catItem.category];
    const catLabel = currentLang === 'es' 
      ? QUESTIONS.find(q => q.category === catItem.category).category_es 
      : catItem.category;
    
    // Assign priorities based on list position
    let levelName = 'low';
    let labelName = dict.recPriorities.low;
    
    const currentLength = finalRecs.length;
    if (currentLength === 0) {
      levelName = 'high';
      labelName = dict.recPriorities.high;
    } else if (currentLength === 1) {
      levelName = 'medium';
      labelName = dict.recPriorities.medium;
    } else if (currentLength === 2) {
      levelName = 'low';
      labelName = dict.recPriorities.low;
    }
    
    finalRecs.push({
      priority: levelName,
      priorityLabel: labelName,
      title: recData.title,
      desc: recData.desc,
      focusArea: `${catLabel} (Score: ${catItem.score}/100)`
    });
  });

  // Show top 4 if low-code was triggered, otherwise 3
  const maxRecsToShow = triggerLowCodeRec ? 4 : 3;
  for (let i = 0; i < Math.min(maxRecsToShow, finalRecs.length); i++) {
    const rec = finalRecs[i];
    const recEl = document.createElement('div');
    recEl.className = `rec-item ${rec.priority}`;
    recEl.innerHTML = `
      <span class="rec-badge ${rec.priority}">${rec.priorityLabel}</span>
      <div class="rec-content">
        <span class="rec-title">${rec.title}</span>
        <span class="rec-desc">${rec.desc}</span>
        <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600; margin-top: 0.25rem;">
          ${currentLang === 'en' ? 'Focus Area' : 'Área de Enfoque'}: ${rec.focusArea}
        </span>
      </div>
    `;
    recsContainer.appendChild(recEl);
  }

  // 3. Send results to Backend database (only if we haven't submitted this specific session yet)
  if (currentScreen === 'assessment') {
    const payload = {
      companyName: contactData.companyName,
      industry: contactData.industry,
      companySize: contactData.companySize,
      firstName: contactData.firstName,
      lastName: contactData.lastName,
      jobTitle: contactData.jobTitle,
      email: contactData.email,
      phone: contactData.phone,
      overallScore,
      maturityLevel: level,
      responses: QUESTIONS.map((q, idx) => ({
        question: q.text, // Store English standard in DB
        answer: answers[idx],
        score: answers[idx]
      }))
    };

    try {
      const response = await fetch('/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (result.success) {
        finalAssessmentId = result.assessmentId;
        console.log('Saved assessment successfully. ID:', finalAssessmentId);
      }
    } catch (err) {
      console.error('API connection error saving assessment:', err);
    }
  }

  // Render Radar Chart with localized labels and benchmarks comparison
  const radarLabels = categories.map(cat => {
    return currentLang === 'es' 
      ? QUESTIONS.find(q => q.category === cat).category_es 
      : cat;
  });
  renderRadarChart(
    radarLabels,
    categories.map(cat => categoryScores[cat]),
    categories.map(cat => benchmarkScores[cat])
  );

  // Switch Screen to results
  if (currentScreen === 'assessment') {
    switchScreen('results');
  }
}

// Chart Render
function renderRadarChart(labels, dataValues, benchmarkValues) {
  const ctx = document.getElementById('radarChart').getContext('2d');
  
  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [
        {
          label: currentLang === 'en' ? 'Your Score' : 'Tu Puntaje',
          data: dataValues,
          backgroundColor: 'rgba(37, 99, 235, 0.15)',
          borderColor: '#2563EB',
          pointBackgroundColor: '#2563EB',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#2563EB',
          borderWidth: 2
        },
        {
          label: currentLang === 'en' ? 'Market Avg' : 'Prom. Mercado',
          data: benchmarkValues || new Array(labels.length).fill(60),
          backgroundColor: 'rgba(100, 116, 139, 0.06)',
          borderColor: '#64748B',
          borderDash: [4, 4],
          pointBackgroundColor: '#64748B',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#64748B',
          borderWidth: 1.5
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          top: 10,
          right: 32,
          bottom: 10,
          left: 32
        }
      },
      scales: {
        r: {
          angleLines: {
            color: '#E2E8F0'
          },
          grid: {
            color: '#E2E8F0'
          },
          pointLabels: {
            font: {
              family: 'Inter',
              size: 9.5,
              weight: 'bold'
            },
            color: '#0F172A',
            padding: 8
          },
          ticks: {
            stepSize: 20,
            color: '#64748B',
            font: {
              family: 'Inter',
              size: 8
            }
          },
          suggestedMin: 0,
          suggestedMax: 100
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            boxWidth: 10,
            font: { family: 'Inter', size: 9, weight: 'bold' },
            color: '#475569'
          }
        }
      }
    }
  });
}

// PDF Generation (Single-Page Report)
function downloadPDFReport() {
  if (!window.jspdf) {
    alert('PDF library not fully loaded. Please check your internet connection.');
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('p', 'mm', 'a4');
  const dict = TRANSLATIONS[currentLang];
  
  // Core colors
  const primaryColor = [37, 99, 235]; // #2563EB
  const darkText = [15, 23, 42]; // #0F172A
  const MutedText = [100, 116, 139]; // #64748B
  
  // 1. Grab Logo elements from DOM
  const imgLogoRb = document.getElementById('img-logo-rb');
  const imgLogoGbs = document.getElementById('img-logo-gbs');

  // PAGE TITLE HEADER
  // Draw Russell Bedford Logo (balanced and aligned)
  if (imgLogoRb) {
    doc.addImage(imgLogoRb, 'PNG', 15, 7, 20, 20);
  }
  
  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.setFontSize(15);
  doc.setFont('Helvetica', 'bold');
  doc.text(dict.pdfTitle, 40, 15.5);
  
  doc.setFontSize(9.5);
  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(MutedText[0], MutedText[1], MutedText[2]);
  doc.text(dict.pdfSub, 40, 21.5);
  
  const formattedDate = new Date().toLocaleDateString(currentLang === 'en' ? 'en-US' : 'es-ES', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
  doc.setFontSize(8.5);
  doc.text(dict.pdfGenerated.replace('{date}', formattedDate), 195, 15.5, { align: 'right' });

  // Separation Line
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.5);
  doc.line(15, 30, 195, 30);

  // 2. PARTICIPANT INFORMATION SECTION
  doc.setFillColor(248, 250, 252);
  doc.rect(15, 34, 180, 18, 'F');
  doc.setDrawColor(226, 232, 240);
  doc.rect(15, 34, 180, 18, 'S');

  doc.setFontSize(8);
  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.setFont('Helvetica', 'bold');
  doc.text(currentLang === 'en' ? 'Company:' : 'Empresa:', 18, 40);
  doc.text(currentLang === 'en' ? 'Participant:' : 'Participante:', 18, 47);
  
  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(MutedText[0], MutedText[1], MutedText[2]);
  doc.text(contactData.companyName || '', 38, 40);
  doc.text(`${contactData.firstName} ${contactData.lastName}`, 38, 47);

  doc.setFont('Helvetica', 'bold');
  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.text(currentLang === 'en' ? 'Industry:' : 'Sector:', 110, 40);
  doc.text(currentLang === 'en' ? 'Company Size:' : 'Tamaño:', 110, 47);

  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(MutedText[0], MutedText[1], MutedText[2]);
  const industryText = contactData.industry ? dict.industries[contactData.industry] : '';
  const sizeText = contactData.companySize ? dict.sizes[contactData.companySize] : '';
  doc.text(industryText || '', 132, 40);
  doc.text(sizeText || '', 132, 47);
  // OVERALL SCORE INDEXES (Maturity, Growth & AI Opportunities)
  const score = parseInt(scoreNum.innerText, 10);
  const maturity = maturityBadge.innerText;
  const growthValText = document.getElementById('gauge-growth-num') ? document.getElementById('gauge-growth-num').innerText : '0';
  const growthBadgeText = document.getElementById('growth-velocity-badge') ? document.getElementById('growth-velocity-badge').innerText : '';
  const aiValText = document.getElementById('gauge-ai-num') ? document.getElementById('gauge-ai-num').innerText : '0';
  const aiBadgeText = document.getElementById('ai-opportunities-badge') ? document.getElementById('ai-opportunities-badge').innerText : '';

  doc.setFillColor(248, 250, 252);
  doc.rect(15, 56, 58, 16, 'F');
  doc.rect(15, 56, 58, 16, 'S');

  doc.rect(76, 56, 58, 16, 'F');
  doc.rect(76, 56, 58, 16, 'S');

  doc.rect(137, 56, 58, 16, 'F');
  doc.rect(137, 56, 58, 16, 'S');

  // Maturity Score Index Info
  doc.setFontSize(7.5);
  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.setFont('Helvetica', 'bold');
  doc.text(currentLang === 'en' ? 'Maturity Index' : 'Índice de Madurez', 18, 61);
  
  doc.setFontSize(9);
  let matColor = [37, 99, 235]; // primary blue
  if (score <= 39) matColor = [239, 68, 68]; // red
  else if (score <= 69) matColor = [245, 158, 11]; // orange
  else matColor = [34, 197, 94]; // green
  doc.setTextColor(matColor[0], matColor[1], matColor[2]);
  doc.text(`${score}/100 - ${maturity}`, 18, 68);

  // Growth Potential Index Info
  doc.setFontSize(7.5);
  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.setFont('Helvetica', 'bold');
  doc.text(currentLang === 'en' ? 'Growth Potential' : 'Potencial Crecimiento', 79, 61);

  doc.setFontSize(9);
  const growthVal = parseInt(growthValText, 10);
  let groColor = [37, 99, 235];
  if (growthVal <= 39) groColor = [239, 68, 68];
  else if (growthVal <= 69) groColor = [245, 158, 11];
  else groColor = [34, 197, 94];
  doc.setTextColor(groColor[0], groColor[1], groColor[2]);
  doc.text(`${growthValText}/100 - ${growthBadgeText}`, 79, 68);

  // AI Opportunities Index Info
  doc.setFontSize(7.5);
  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.setFont('Helvetica', 'bold');
  doc.text(currentLang === 'en' ? 'AI Opportunities' : 'Oportunidades de IA', 140, 61);

  doc.setFontSize(9);
  const aiVal = parseInt(aiValText, 10);
  let aiColor = [37, 99, 235];
  if (aiVal <= 39) aiColor = [239, 68, 68];
  else if (aiVal <= 69) aiColor = [245, 158, 11];
  else aiColor = [34, 197, 94];
  doc.setTextColor(aiColor[0], aiColor[1], aiColor[2]);
  doc.text(`${aiValText}/100 - ${aiBadgeText}`, 140, 68);

  // 3. VISUAL CHARTS & CATEGORY DESEMPEÑO (Side-by-side)
  // Radar Chart Image on left
  if (chartInstance) {
    const chartB64 = chartInstance.toBase64Image();
    doc.addImage(chartB64, 'PNG', 12, 75, 86, 86);
  }

  // Category scores on right
  doc.setFontSize(10);
  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.setFont('Helvetica', 'bold');
  doc.text(dict.pdfPage2Title, 107, 78);
  doc.line(107, 81, 195, 81);

  const items = document.querySelectorAll('#traffic-list-container .category-progress-item');
  let catY = 88;
  items.forEach(item => {
    const label = item.querySelector('.cat-progress-label').innerText;
    const rowLabels = item.querySelectorAll('.progress-row-label');
    const youVal = rowLabels[0] ? rowLabels[0].innerText.replace(/\n/g, ' ') : '';
    const mktVal = rowLabels[1] ? rowLabels[1].innerText.replace(/\n/g, ' ') : '';

    doc.setFontSize(8);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.setFont('Helvetica', 'bold');
    doc.text(label, 107, catY);

    doc.setFontSize(7);
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(MutedText[0], MutedText[1], MutedText[2]);
    doc.text(`${youVal} | ${mktVal}`, 107, catY + 3.5);

    // Separating line
    doc.setDrawColor(241, 245, 249);
    doc.line(107, catY + 6, 195, catY + 6);

    catY += 12;
  });

  // 4. GROWTH TRAJECTORY STATE CARD
  doc.setFillColor(248, 250, 252);
  doc.rect(15, 163, 180, 16, 'F');
  doc.setDrawColor(226, 232, 240);
  doc.rect(15, 163, 180, 16, 'S');

  const trajectoryTitleEl = document.getElementById('lbl-trajectory-stage-title');
  const trajectoryDescEl = document.getElementById('lbl-trajectory-stage-desc');
  const activeStageTitle = trajectoryTitleEl ? trajectoryTitleEl.innerText : '';
  const activeStageDesc = trajectoryDescEl ? trajectoryDescEl.innerText : '';

  doc.setFontSize(8);
  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.setFont('Helvetica', 'bold');
  doc.text(activeStageTitle, 18, 168);

  doc.setFontSize(7.25);
  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(MutedText[0], MutedText[1], MutedText[2]);
  doc.text(activeStageDesc, 18, 174, { maxWidth: 174 });

  // 5. KEY RECOMMENDATIONS ROADMAP
  doc.setFontSize(10);
  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.setFont('Helvetica', 'bold');
  doc.text(dict.pdfRecTitle, 15, 187);
  doc.line(15, 190, 195, 190);

  const recItems = document.querySelectorAll('#recs-list-container .rec-item');
  let recY = 196;
  recItems.forEach(item => {
    const priorityBadge = item.querySelector('.rec-badge').innerText;
    const recTitle = item.querySelector('.rec-title').innerText;
    const recDesc = item.querySelector('.rec-desc').innerText;

    let pColor = [37, 99, 235]; // blue
    if (priorityBadge.toLowerCase().includes('high') || priorityBadge.toLowerCase().includes('alta')) {
      pColor = [239, 68, 68]; // red
    } else if (priorityBadge.toLowerCase().includes('medium') || priorityBadge.toLowerCase().includes('media')) {
      pColor = [245, 158, 11]; // yellow
    }

    doc.setFillColor(pColor[0], pColor[1], pColor[2]);
    doc.circle(18, recY - 1, 1.25, 'F');

    doc.setFontSize(8);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.setFont('Helvetica', 'bold');
    doc.text(`${priorityBadge}: ${recTitle}`, 22, recY);

    doc.setFontSize(7.25);
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(MutedText[0], MutedText[1], MutedText[2]);
    
    // Split description and render
    const splitDesc = doc.splitTextToSize(recDesc, 172);
    doc.text(splitDesc, 22, recY + 3.5);

    recY += 19;
  });

  // FOOTER & COPYRIGHT
  doc.setFontSize(6.5);
  doc.setTextColor(MutedText[0], MutedText[1], MutedText[2]);
  doc.text(dict.benchmarkNote, 15, 273);

  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.5);
  doc.line(15, 276, 195, 276);

  doc.setFontSize(8);
  doc.text(dict.pdfFooter, 15, 283);
  
  const poweredText = currentLang === 'en' ? 'Powered by' : 'Desarrollado por';
  const poweredWidth = doc.getTextWidth(poweredText);
  const logoWidth = 12.67; // 4.5 * 901 / 320 to respect exact 2.815 aspect ratio
  const logoHeight = 4.5;
  const gap = 2; // 2mm gap
  const totalRightWidth = poweredWidth + gap + logoWidth;
  const poweredX = 195 - totalRightWidth;
  const logoX = 195 - logoWidth;
  
  doc.text(poweredText, poweredX, 283);
  if (imgLogoGbs) {
    doc.addImage(imgLogoGbs, 'PNG', logoX, 279.5, logoWidth, logoHeight);
  }

  // Save PDF
  doc.save(`${currentLang === 'en' ? 'Business' : 'Evaluacion'}_Growth_Assessment_${contactData.companyName.replace(/\s+/g, '_')}.pdf`);
}
