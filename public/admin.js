// Global state for admin data
let allAssessments = [];
let dashboardStats = {};
let activeTab = 'dashboard';
let currentLang = localStorage.getItem('preferred_lang') || 'en';

// Define localized questions bank for detail audit translation
const QUESTIONS_BANK = [
  { category: 'Business Processes', text: 'Our key business processes are documented.', text_es: 'Nuestros procesos de negocio clave están documentados.' },
  { category: 'Business Processes', text: 'People know exactly what they need to do.', text_es: 'Las personas saben exactamente lo que tienen que hacer.' },
  { category: 'Business Processes', text: 'Projects usually finish on time.', text_es: 'Los proyectos generalmente terminan a tiempo.' },
  { category: 'Business Processes', text: 'Manual work is kept to a minimum.', text_es: 'El trabajo manual se mantiene al mínimo.' },
  { category: 'Business Processes', text: 'Problems are identified before affecting customers.', text_es: 'Los problemas se identifican antes de que afecten a los clientes.' },
  { category: 'People', text: 'Departments work well together.', text_es: 'Los departamentos trabajan bien juntos.' },
  { category: 'People', text: 'Responsibilities are clearly defined.', text_es: 'Las responsabilidades están claramente definidas.' },
  { category: 'People', text: 'Communication is effective.', text_es: 'La comunicación es efectiva.' },
  { category: 'People', text: 'Employees receive regular training.', text_es: 'Los empleados reciben capacitación regular.' },
  { category: 'People', text: 'Performance is monitored.', text_es: 'El desempeño es monitoreado.' },
  { category: 'Technology', text: 'Our tools make daily work easier.', text_es: 'Nuestras herramientas facilitan el trabajo diario.' },
  { category: 'Technology', text: 'Information is easy to access.', text_es: 'La información es de fácil acceso.' },
  { category: 'Technology', text: 'We avoid entering the same information multiple times.', text_es: 'Evitamos ingresar la misma información varias veces.' },
  { category: 'Technology', text: 'Technology helps improve productivity.', text_es: 'La tecnología ayuda a mejorar la productividad.' },
  { category: 'Technology', text: 'Digital tools support our business goals.', text_es: 'Las herramientas digitales respaldan nuestros objetivos comerciales.' },
  { category: 'Information', text: 'Management decisions are based on reliable information.', text_es: 'Las decisiones de gestión se basan en información confiable.' },
  { category: 'Information', text: 'Reports are available when needed.', text_es: 'Los informes están disponibles cuando se necesitan.' },
  { category: 'Information', text: 'Business indicators are monitored.', text_es: 'Los indicadores comerciales son monitoreados.' },
  { category: 'Information', text: 'Information is accurate.', text_es: 'La información es precisa.' },
  { category: 'Information', text: 'Important information is easy to find.', text_es: 'La información importante es fácil de encontrar.' },
  { category: 'Customer Experience', text: 'Customers receive timely responses.', text_es: 'Los clientes reciben respuestas oportunas.' },
  { category: 'Customer Experience', text: 'Customer requests are tracked.', text_es: 'Las solicitudes de los clientes son rastreadas.' },
  { category: 'Customer Experience', text: 'Service quality is consistent.', text_es: 'La calidad del servicio es consistente.' },
  { category: 'Customer Experience', text: 'Customer feedback is collected.', text_es: 'Se recopilan los comentarios de los clientes.' },
  { category: 'Customer Experience', text: 'Customer satisfaction is important to our business.', text_es: 'La satisfacción del cliente es importante para nuestro negocio.' }
];

// Translations Dictionary
const TRANSLATIONS = {
  en: {
    logoName: 'Growth', logoSub: 'Admin',
    navDashboard: 'Dashboard',
    navCompanies: 'Companies',
    navAssessments: 'Assessments',
    navBackApp: '← Back to App',
    
    // View 1: Dashboard
    dashTitle: 'System Overview',
    dashSub: 'Real-time analytics and completed growth indicators.',
    statCompanies: 'Total Companies',
    statAssessments: 'Assessments Taken',
    statAvgScore: 'Average Score',
    latestTitle: 'Latest Assessments',
    thCompany: 'Company',
    thParticipant: 'Participant',
    thScore: 'Score',
    thMaturity: 'Maturity Level',
    thDate: 'Date',
    thActions: 'Actions',
    btnViewAudit: 'View Audit',
    noAssessments: 'No assessments taken yet.',
    
    // View 2: Companies
    companiesTitle: 'Companies Directory',
    companiesSub: 'Browse and audit participating organizations.',
    searchPlaceholder: 'Search by Company Name or Industry...',
    thCompanyName: 'Company Name',
    thIndustry: 'Industry',
    thSize: 'Size',
    thDateEnrolled: 'Date Enrolled',
    btnViewAssessments: 'View Assessments',
    noCompanies: 'No companies found matching search criteria.',
    
    // View 3: Assessments
    assessmentsTitle: 'Completed Assessments',
    assessmentsSub: 'Audit individual client responses and export data.',
    btnExportCSV: 'Export CSV',
    filterCompanyLabel: 'Company',
    filterIndustryLabel: 'Industry',
    filterFromLabel: 'From',
    filterToLabel: 'To',
    filterAllIndustries: 'All Industries',
    btnClearFilters: 'Clear Filters',
    thEmail: 'Email',
    thDateSubmitted: 'Date Submitted',
    noAssessmentsFiltered: 'No assessments found matching filter settings.',
    
    // Modal
    modalAuditTitle: 'Maturity Audit',
    lblParticipant: 'Participant',
    lblJob: 'Job Title',
    lblEmail: 'Email Address',
    lblPhone: 'Phone',
    lblScoreMaturity: 'Score / Maturity',
    lblDateSubmitted: 'Date Submitted',
    lblAuditTrail: 'Audit Trail (Responses)',
    noResponses: 'No recorded responses.',
    
    // Dynamic values
    maturityLevels: {
      'Needs Attention': 'Needs Attention',
      'Developing': 'Developing',
      'Growing': 'Growing',
      'High Performing': 'High Performing'
    },
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
    likert: {
      1: 'Strongly Disagree',
      2: 'Disagree',
      3: 'Neutral',
      4: 'Agree',
      5: 'Strongly Agree'
    }
  },
  es: {
    logoName: 'Crecimiento', logoSub: 'Admin',
    navDashboard: 'Dashboard',
    navCompanies: 'Empresas',
    navAssessments: 'Evaluaciones',
    navBackApp: '← Volver a la App',
    
    // View 1: Dashboard
    dashTitle: 'Vista General del Sistema',
    dashSub: 'Métricas en tiempo real e indicadores de madurez.',
    statCompanies: 'Total Empresas',
    statAssessments: 'Evaluaciones Listas',
    statAvgScore: 'Promedio General',
    latestTitle: 'Últimas Evaluaciones',
    thCompany: 'Empresa',
    thParticipant: 'Participante',
    thScore: 'Puntos',
    thMaturity: 'Nivel de Madurez',
    thDate: 'Fecha',
    thActions: 'Acciones',
    btnViewAudit: 'Ver Auditoría',
    noAssessments: 'Aún no hay evaluaciones registradas.',
    
    // View 2: Companies
    companiesTitle: 'Directorio de Empresas',
    companiesSub: 'Explore y audite las organizaciones registradas.',
    searchPlaceholder: 'Buscar por Nombre de Empresa o Sector...',
    thCompanyName: 'Nombre de la Empresa',
    thIndustry: 'Sector',
    thSize: 'Tamaño',
    thDateEnrolled: 'Fecha Registro',
    btnViewAssessments: 'Ver Evaluaciones',
    noCompanies: 'No se encontraron empresas con los criterios de búsqueda.',
    
    // View 3: Assessments
    assessmentsTitle: 'Evaluaciones Completadas',
    assessmentsSub: 'Audite las respuestas de los clientes y exporte datos.',
    btnExportCSV: 'Exportar CSV',
    filterCompanyLabel: 'Empresa',
    filterIndustryLabel: 'Sector / Industria',
    filterFromLabel: 'Desde',
    filterToLabel: 'Hasta',
    filterAllIndustries: 'Todos los Sectores',
    btnClearFilters: 'Limpiar Filtros',
    thEmail: 'Email',
    thDateSubmitted: 'Fecha Envío',
    noAssessmentsFiltered: 'No se encontraron evaluaciones con los filtros actuales.',
    
    // Modal
    modalAuditTitle: 'Auditoría de Madurez',
    lblParticipant: 'Participante',
    lblJob: 'Cargo / Puesto',
    lblEmail: 'Correo Electrónico',
    lblPhone: 'Teléfono',
    lblScoreMaturity: 'Puntuación / Madurez',
    lblDateSubmitted: 'Fecha Envío',
    lblAuditTrail: 'Respuestas de Auditoría',
    noResponses: 'No se registraron respuestas.',
    
    // Dynamic values
    maturityLevels: {
      'Needs Attention': 'Necesita Atención',
      'Developing': 'En Desarrollo',
      'Growing': 'Creciendo',
      'High Performing': 'Alto Rendimiento'
    },
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
    likert: {
      1: 'Totalmente en desacuerdo',
      2: 'En desacuerdo',
      3: 'Neutral',
      4: 'De acuerdo',
      5: 'Totalmente de acuerdo'
    }
  }
};

// DOM Elements
const navItems = document.querySelectorAll('.admin-nav-item');
const views = {
  dashboard: document.getElementById('admin-view-dashboard'),
  companies: document.getElementById('admin-view-companies'),
  assessments: document.getElementById('admin-view-assessments')
};

// Filter Elements
const filterCompany = document.getElementById('filter-company');
const filterIndustry = document.getElementById('filter-industry');
const filterDateStart = document.getElementById('filter-date-start');
const filterDateEnd = document.getElementById('filter-date-end');
const btnClearFilters = document.getElementById('btn-clear-filters');
const btnExportCSV = document.getElementById('btn-export-csv');

// Company Search
const companySearchInput = document.getElementById('company-search-input');

// Modal Elements
const detailsModal = document.getElementById('assessment-details-modal');
const btnCloseModal = document.getElementById('btn-close-modal');

// Initialize Admin UI
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

  // Tab switcher
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const target = item.getAttribute('data-target');
      if (target) {
        switchTab(target);
      }
    });
  });

  // Filter Event Listeners
  filterCompany.addEventListener('input', renderAssessmentsTable);
  filterIndustry.addEventListener('change', renderAssessmentsTable);
  filterDateStart.addEventListener('change', renderAssessmentsTable);
  filterDateEnd.addEventListener('change', renderAssessmentsTable);
  btnClearFilters.addEventListener('click', clearFilters);
  
  // Company Search
  companySearchInput.addEventListener('input', renderCompaniesTable);

  // Modal close
  btnCloseModal.addEventListener('click', closeModal);
  detailsModal.addEventListener('click', (e) => {
    if (e.target === detailsModal) closeModal();
  });

  // Export CSV
  btnExportCSV.addEventListener('click', exportToCSV);

  // Load Initial Data
  fetchData();
});

// Translation Engine for Admin Panel
function translateUI() {
  const dict = TRANSLATIONS[currentLang];
  
  // Sidebar logo
  const adminLogoEl = document.querySelector('.admin-logo');
  if (adminLogoEl) {
    adminLogoEl.innerHTML = `
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 16 16" style="color: #3B82F6;">
        <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
      </svg>
      <span>${dict.logoName}</span>Admin
    `;
  }
  
  // Sidebar navigation tabs

  const sidebarLinks = document.querySelectorAll('.admin-nav .admin-nav-item');
  sidebarLinks[0].innerHTML = `
    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z"/>
    </svg>
    ${dict.navDashboard}
  `;
  sidebarLinks[1].innerHTML = `
    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
    </svg>
    ${dict.navCompanies}
  `;
  sidebarLinks[2].innerHTML = `
    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
    </svg>
    ${dict.navAssessments}
  `;

  document.querySelector('.admin-sidebar a.admin-nav-item').innerText = dict.navBackApp;

  // View 1: Dashboard UI Labels
  document.querySelector('#admin-view-dashboard .admin-title-group h1').innerText = dict.dashTitle;
  document.querySelector('#admin-view-dashboard .admin-title-group p').innerText = dict.dashSub;
  
  const statsCards = document.querySelectorAll('#admin-view-dashboard .stat-card .stat-label');
  statsCards[0].innerText = dict.statCompanies;
  statsCards[1].innerText = dict.statAssessments;
  statsCards[2].innerText = dict.statAvgScore;
  
  document.querySelector('#admin-view-dashboard .panel-title').innerText = dict.latestTitle;
  
  // Dashboard Table Headers
  const dashTh = document.querySelectorAll('#admin-view-dashboard table th');
  dashTh[0].innerText = dict.thCompany;
  dashTh[1].innerText = dict.thParticipant;
  dashTh[2].innerText = dict.thScore;
  dashTh[3].innerText = dict.thMaturity;
  dashTh[4].innerText = dict.thDate;
  dashTh[5].innerText = dict.thActions;

  // View 2: Companies UI Labels
  document.querySelector('#admin-view-companies .admin-title-group h1').innerText = dict.companiesTitle;
  document.querySelector('#admin-view-companies .admin-title-group p').innerText = dict.companiesSub;
  companySearchInput.placeholder = dict.searchPlaceholder;
  
  const compTh = document.querySelectorAll('#admin-view-companies table th');
  compTh[0].innerText = dict.thCompanyName;
  compTh[1].innerText = dict.thIndustry;
  compTh[2].innerText = dict.thSize;
  compTh[3].innerText = dict.thDateEnrolled;
  compTh[4].innerText = dict.thActions;

  // View 3: Assessments UI Labels
  document.querySelector('#admin-view-assessments .admin-title-group h1').innerText = dict.assessmentsTitle;
  document.querySelector('#admin-view-assessments .admin-title-group p').innerText = dict.assessmentsSub;
  
  btnExportCSV.innerHTML = `
    <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="margin-right: 0.25rem;">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
    </svg>
    ${dict.btnExportCSV}
  `;

  // Filters
  const filterLabels = document.querySelectorAll('#admin-view-assessments .filter-label');
  filterLabels[0].innerText = dict.filterCompanyLabel;
  filterLabels[1].innerText = dict.filterIndustryLabel;
  filterLabels[2].innerText = dict.filterFromLabel;
  filterLabels[3].innerText = dict.filterToLabel;
  
  filterCompany.placeholder = currentLang === 'en' ? 'Filter company...' : 'Filtrar empresa...';

  // Industries dropdown
  const prevInd = filterIndustry.value;
  filterIndustry.innerHTML = `<option value="">${dict.filterAllIndustries}</option>`;
  Object.entries(dict.industries).forEach(([key, val]) => {
    filterIndustry.innerHTML += `<option value="${key}" ${prevInd === key ? 'selected' : ''}>${val}</option>`;
  });
  
  btnClearFilters.innerText = dict.btnClearFilters;

  // Assessments Table Headers
  const assessTh = document.querySelectorAll('#admin-view-assessments table th');
  assessTh[0].innerText = dict.thCompany;
  assessTh[1].innerText = dict.thParticipant;
  assessTh[2].innerText = dict.thEmail;
  assessTh[3].innerText = dict.thScore;
  assessTh[4].innerText = dict.thMaturity;
  assessTh[5].innerText = dict.thDateSubmitted;
  assessTh[6].innerText = dict.thActions;

  // Modal static labels
  const modalLabels = document.querySelectorAll('#assessment-details-modal .details-label');
  modalLabels[0].innerText = dict.lblParticipant;
  modalLabels[1].innerText = dict.lblJob;
  modalLabels[2].innerText = dict.lblEmail;
  modalLabels[3].innerText = dict.lblPhone;
  modalLabels[4].innerText = dict.lblScoreMaturity;
  modalLabels[5].innerText = dict.lblDateSubmitted;
  document.querySelector('#assessment-details-modal .section-title').innerText = dict.lblAuditTrail;

  // Refresh tables content
  renderLatestAssessmentsTable();
  renderCompaniesTable();
  renderAssessmentsTable();
}

// Switch Sidebar tabs
function switchTab(tabId) {
  navItems.forEach(item => {
    if (item.getAttribute('data-target') === tabId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  Object.entries(views).forEach(([id, viewEl]) => {
    if (id === tabId) {
      viewEl.classList.add('active');
      viewEl.offsetHeight; // force reflow
      viewEl.style.opacity = '1';
      viewEl.style.transform = 'translateY(0)';
    } else {
      viewEl.classList.remove('active');
      viewEl.style.opacity = '0';
      viewEl.style.transform = 'translateY(10px)';
    }
  });

  activeTab = tabId;
}

// Fetch data from REST APIs
async function fetchData() {
  try {
    const dashRes = await fetch('/dashboard');
    dashboardStats = await dashRes.json();
    
    const assessRes = await fetch('/assessment');
    allAssessments = await assessRes.json();

    // Populate dashboard statistics numbers
    document.getElementById('stat-companies').innerText = dashboardStats.totalCompanies;
    document.getElementById('stat-assessments').innerText = dashboardStats.totalAssessments;
    document.getElementById('stat-avg-score').innerText = dashboardStats.averageScore;

    // Run translations
    translateUI();
  } catch (err) {
    console.error('Error fetching admin data:', err);
    alert('Failed to connect to API backend. Make sure the Node.js server is running.');
  }
}

// Render Dashboard "Latest Assessments" Table
function renderLatestAssessmentsTable() {
  const dict = TRANSLATIONS[currentLang];
  const tbody = document.getElementById('latest-assessments-tbody');
  tbody.innerHTML = '';

  const latest = dashboardStats.latestAssessments || [];
  if (latest.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted);">${dict.noAssessments}</td></tr>`;
    return;
  }

  latest.forEach(item => {
    const tr = document.createElement('tr');
    const dateStr = new Date(item.AssessmentDate).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'es-ES', {
      month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
    
    const maturityClass = item.MaturityLevel.toLowerCase().replace(' ', '-');
    const localizedMaturity = dict.maturityLevels[item.MaturityLevel] || item.MaturityLevel;

    tr.innerHTML = `
      <td style="font-weight: 600;">${item.CompanyName}</td>
      <td>${item.FirstName} ${item.LastName}</td>
      <td style="font-weight: 700; color: var(--primary);">${item.OverallScore}</td>
      <td><span class="status-pill ${maturityClass}">${localizedMaturity}</span></td>
      <td>${dateStr}</td>
      <td class="text-right">
        <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.25rem 0.75rem;" onclick="viewAssessmentDetails(${item.AssessmentID})">
          ${dict.btnViewAudit}
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Render Companies list view
function renderCompaniesTable() {
  const dict = TRANSLATIONS[currentLang];
  const tbody = document.getElementById('companies-list-tbody');
  tbody.innerHTML = '';

  const companiesMap = {};
  allAssessments.forEach(item => {
    const nameKey = item.CompanyName.toLowerCase().trim();
    if (!companiesMap[nameKey]) {
      companiesMap[nameKey] = {
        name: item.CompanyName,
        industry: item.Industry || 'Other',
        size: item.CompanySize || 'Other',
        dateEnrolled: item.AssessmentDate,
        rawDate: new Date(item.AssessmentDate)
      };
    } else {
      const currentRawDate = new Date(item.AssessmentDate);
      if (currentRawDate < companiesMap[nameKey].rawDate) {
        companiesMap[nameKey].dateEnrolled = item.AssessmentDate;
        companiesMap[nameKey].rawDate = currentRawDate;
      }
    }
  });

  let companies = Object.values(companiesMap);

  // Search filter
  const query = companySearchInput.value.toLowerCase().trim();
  if (query) {
    companies = companies.filter(c => 
      c.name.toLowerCase().includes(query) || 
      (dict.industries[c.industry] || c.industry).toLowerCase().includes(query)
    );
  }

  if (companies.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted);">${dict.noCompanies}</td></tr>`;
    return;
  }

  companies.sort((a, b) => a.name.localeCompare(b.name));

  companies.forEach(c => {
    const tr = document.createElement('tr');
    const enrolledDateStr = new Date(c.dateEnrolled).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'es-ES', {
      year: 'numeric', month: 'short', day: 'numeric'
    });

    const localizedIndustry = dict.industries[c.industry] || c.industry;
    const localizedSize = dict.sizes[c.size] || c.size;

    tr.innerHTML = `
      <td style="font-weight: 600;">${c.name}</td>
      <td>${localizedIndustry}</td>
      <td>${localizedSize}</td>
      <td>${enrolledDateStr}</td>
      <td class="text-right">
        <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.25rem 0.75rem;" onclick="filterAssessmentsByCompany('${c.name.replace(/'/g, "\\'")}')">
          ${dict.btnViewAssessments}
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function filterAssessmentsByCompany(companyName) {
  filterCompany.value = companyName;
  switchTab('assessments');
  renderAssessmentsTable();
}

// Render filtered Assessments list
function getFilteredAssessments() {
  const companyVal = filterCompany.value.toLowerCase().trim();
  const industryVal = filterIndustry.value;
  const startVal = filterDateStart.value ? new Date(filterDateStart.value) : null;
  const endVal = filterDateEnd.value ? new Date(filterDateEnd.value) : null;

  if (startVal) startVal.setHours(0, 0, 0, 0);
  if (endVal) endVal.setHours(23, 59, 59, 999);

  return allAssessments.filter(item => {
    if (companyVal && !item.CompanyName.toLowerCase().includes(companyVal)) return false;
    if (industryVal && item.Industry !== industryVal) return false;
    
    const submitDate = new Date(item.AssessmentDate);
    if (startVal && submitDate < startVal) return false;
    if (endVal && submitDate > endVal) return false;
    return true;
  });
}

function renderAssessmentsTable() {
  const dict = TRANSLATIONS[currentLang];
  const tbody = document.getElementById('assessments-list-tbody');
  tbody.innerHTML = '';

  const filtered = getFilteredAssessments();

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted);">${dict.noAssessmentsFiltered}</td></tr>`;
    return;
  }

  filtered.forEach(item => {
    const tr = document.createElement('tr');
    const dateStr = new Date(item.AssessmentDate).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'es-ES', {
      year: 'numeric', month: 'short', day: 'numeric'
    });
    
    const maturityClass = item.MaturityLevel.toLowerCase().replace(' ', '-');
    const localizedMaturity = dict.maturityLevels[item.MaturityLevel] || item.MaturityLevel;

    tr.innerHTML = `
      <td style="font-weight: 600;">${item.CompanyName}</td>
      <td>${item.FirstName} ${item.LastName}</td>
      <td>${item.Email}</td>
      <td style="font-weight: 700; color: var(--primary);">${item.OverallScore}</td>
      <td><span class="status-pill ${maturityClass}">${localizedMaturity}</span></td>
      <td>${dateStr}</td>
      <td class="text-right">
        <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.25rem 0.75rem;" onclick="viewAssessmentDetails(${item.AssessmentID})">
          ${dict.btnViewAudit}
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function clearFilters() {
  filterCompany.value = '';
  filterIndustry.value = '';
  filterDateStart.value = '';
  filterDateEnd.value = '';
  renderAssessmentsTable();
}

// Open details popup and translate individual responses to current lang
async function viewAssessmentDetails(assessmentId) {
  const dict = TRANSLATIONS[currentLang];
  try {
    const res = await fetch(`/assessment/${assessmentId}`);
    const details = await res.json();
    if (!details) {
      alert('Assessment details could not be found.');
      return;
    }

    // Populate modal metadata
    document.getElementById('modal-company-title').innerText = `${details.CompanyName} - ${dict.modalAuditTitle}`;
    document.getElementById('detail-participant').innerText = `${details.FirstName} ${details.LastName}`;
    document.getElementById('detail-job').innerText = details.JobTitle || 'N/A';
    document.getElementById('detail-email').innerText = details.Email;
    document.getElementById('detail-phone').innerText = details.Phone || 'N/A';
    
    const localizedMaturity = dict.maturityLevels[details.MaturityLevel] || details.MaturityLevel;
    document.getElementById('detail-score').innerText = `${details.OverallScore}/100 (${localizedMaturity})`;
    
    const dateStr = new Date(details.AssessmentDate).toLocaleString(currentLang === 'en' ? 'en-US' : 'es-ES', {
      year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
    document.getElementById('detail-date').innerText = dateStr;

    // Populate audit responses
    const container = document.getElementById('detail-responses-container');
    container.innerHTML = '';

    const responses = details.responses || [];
    if (responses.length === 0) {
      container.innerHTML = `<span style="color: var(--text-muted);">${dict.noResponses}</span>`;
    } else {
      responses.forEach((resp, idx) => {
        const item = document.createElement('div');
        item.style.padding = '0.625rem 0.875rem';
        item.style.backgroundColor = '#F8FAFC';
        item.style.borderRadius = '0.5rem';
        item.style.border = '1px solid var(--border)';
        item.style.display = 'flex';
        item.style.justifyContent = 'space-between';
        item.style.alignItems = 'center';
        item.style.gap = '1rem';

        let badgeStyle = 'background-color: var(--border); color: var(--text-muted);';
        if (resp.Answer >= 4) {
          badgeStyle = 'background-color: var(--success-light); color: var(--success); font-weight:600;';
        } else if (resp.Answer === 3) {
          badgeStyle = 'background-color: var(--warning-light); color: var(--warning); font-weight:600;';
        } else {
          badgeStyle = 'background-color: var(--danger-light); color: var(--danger); font-weight:600;';
        }

        // Dynamically translate question from English key if current lang is Spanish
        let questionText = resp.Question;
        if (currentLang === 'es') {
          const matchQ = QUESTIONS_BANK.find(q => q.text.toLowerCase().trim() === resp.Question.toLowerCase().trim());
          if (matchQ) {
            questionText = matchQ.text_es;
          }
        }

        item.innerHTML = `
          <div style="display:flex; flex-direction:column; gap:0.125rem; text-align:left;">
            <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">Q${idx + 1}</span>
            <span style="font-size:0.875rem; font-weight:500; color:var(--text-main);">${questionText}</span>
          </div>
          <span style="font-size: 0.75rem; text-transform:uppercase; padding:0.25rem 0.5rem; border-radius:0.25rem; white-space:nowrap; ${badgeStyle}">
            ${resp.Answer} - ${dict.likert[resp.Answer] || ''}
          </span>
        `;
        container.appendChild(item);
      });
    }

    // Toggle Modal active class
    detailsModal.classList.add('active');
  } catch (err) {
    console.error('Error fetching assessment detail:', err);
    alert('Failed to load assessment audit trail.');
  }
}

function closeModal() {
  detailsModal.classList.remove('active');
}

// Export filtered data as CSV
function exportToCSV() {
  const dict = TRANSLATIONS[currentLang];
  const filtered = getFilteredAssessments();
  if (filtered.length === 0) {
    alert(currentLang === 'en' ? 'No data available to export with current filters.' : 'No hay datos disponibles para exportar con los filtros actuales.');
    return;
  }

  // Define headers localized
  const headers = currentLang === 'en' ? [
    'Date Submitted',
    'Company Name',
    'Industry',
    'Company Size',
    'Participant First Name',
    'Participant Last Name',
    'Job Title',
    'Email Address',
    'Phone',
    'Overall Score',
    'Maturity Level'
  ] : [
    'Fecha Envio',
    'Nombre Empresa',
    'Sector',
    'Tamano Empresa',
    'Nombre Participante',
    'Apellido Participante',
    'Cargo Puesto',
    'Correo Electronico',
    'Telefono',
    'Puntuacion General',
    'Nivel de Madurez'
  ];

  // Map data to CSV rows
  const csvRows = [];
  csvRows.push(headers.join(','));

  filtered.forEach(item => {
    const dateFormatted = new Date(item.AssessmentDate).toISOString().replace(/T/, ' ').replace(/\..+/, '');
    const localizedInd = dict.industries[item.Industry] || item.Industry || 'N/A';
    const localizedSz = dict.sizes[item.CompanySize] || item.CompanySize || 'N/A';
    const localizedMat = dict.maturityLevels[item.MaturityLevel] || item.MaturityLevel;

    const row = [
      `"${dateFormatted}"`,
      `"${item.CompanyName.replace(/"/g, '""')}"`,
      `"${localizedInd.replace(/"/g, '""')}"`,
      `"${localizedSz.replace(/"/g, '""')}"`,
      `"${item.FirstName.replace(/"/g, '""')}"`,
      `"${item.LastName.replace(/"/g, '""')}"`,
      `"${(item.JobTitle || 'N/A').replace(/"/g, '""')}"`,
      `"${item.Email.replace(/"/g, '""')}"`,
      `"${(item.Phone || 'N/A').replace(/"/g, '""')}"`,
      item.OverallScore,
      `"${localizedMat}"`
    ];
    csvRows.push(row.join(','));
  });

  const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + csvRows.join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  
  const timestamp = new Date().toISOString().slice(0, 10);
  link.setAttribute("download", `Business_Growth_Assessments_Export_${timestamp}.csv`);
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
