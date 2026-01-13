(function () {
  const i18n = {
    en: {
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.contact": "Contact",

      "ui.language": "Français",
      "ui.ctaContact": "Contact",
      "ui.ctaCV": "Download CV",
      "ui.ctaLinkedIn": "LinkedIn",

      "hero.eyebrow": "Finance Director / CFO-style",
      "hero.subtitle": "I help tech companies structure growth, secure funding, and stay in control of cash, margins, and risk.",
      "hero.pills.p1": "Strategic finance",
      "hero.pills.p2": "Cash & runway",
      "hero.pills.p3": "SaaS & hybrid models",
      "hero.pills.p4": "Non-dilutive funding (RS&DE, CDAE)",
      "hero.pills.p5": "FP&A",
      "hero.pills.p6": "Reporting & governance",
      "hero.meta": "Open to leadership opportunities",

      "hero.card.title": "Highlights",
      "hero.card.kpi1": "5+ years",
      "hero.card.txt1": "Financial strategy & performance management (corporate, tech scale-up, entrepreneurship)",
      "hero.card.kpi2": "+$525K",
      "hero.card.txt2": "Financing secured to support SaaS structuring & growth",
      "hero.card.kpi3": "+$350K",
      "hero.card.txt3": "Tax credits secured over the last 2 years (tech company with ~$4M in annual revenue)",
      "hero.card.badge": "Corporate → Entrepreneur → Tech scale-up",

      "about.title": "About",
      "about.subtitle": "A finance leader bridging strategy and execution across corporate, entrepreneurship, and tech.",
      "about.p1": "Results-driven financial leader with experience spanning large corporates (Henkel, L’Oréal), entrepreneurship, and tech scale-ups.",
      "about.p2": "I specialize in financial strategy, cash flow optimization, and decision support for leadership teams — turning complex data into clear actions.",
      "about.p3": "I partner closely with CEOs, CTOs, and commercial leaders to align finance with product, go-to-market, and growth objectives through pragmatic models, transparent reporting, and disciplined execution.",

      "experience.title": "Experience",
      "experience.subtitle": "Selected roles focused on impact and scope.",
      "experience.r1.title": "Financial Director — SmartPixel",
      "experience.r1.meta": "Montréal, Canada • Nov 2023 – Present",
      "experience.r1.b1": "Led the financial structuring of a new SaaS platform, including pricing logic, recurring revenue models, and hybrid product-service margins.",
      "experience.r1.b2": "Secured $525K+ in financing and built multi-year projections (2025–2028); supported negotiations with banks, partners, and public institutions.",
      "experience.r1.b3": "Designed models integrating RS&DE and CDAE credits to optimize non-dilutive funding and profitability.",
      "experience.r1.b4": "Own cash flow, budgeting, forecasting, reporting, and governance; oversee accounting, compliance, AR/AP, and payroll.",

      "experience.r2.title": "Financial Controller — SmartPixel",
      "experience.r2.meta": "Montréal, Canada • Jun 2022 – Nov 2023",
      "experience.r2.b1": "Managed AR/AP, payroll, and monthly close; prepared monthly financial statements.",
      "experience.r2.b2": "Reconciled balance sheet and P&L accounts; contributed to annual budget forecasts.",
      "experience.r2.b3": "Structured and led the accounting team during a period of growth.",

      "experience.r3.title": "Sales Controller & Credit Manager — Henkel (Beauty Care)",
      "experience.r3.meta": "Paris, France • Jan 2021 – Jan 2022",
      "experience.r3.b1": "Owned budget control and back-margin management (rebates, cooperation fees, payment terms).",
      "experience.r3.b2": "Automated billing/data workflows (SAP & Access) and improved reporting visibility with IT.",
      "experience.r3.b3": "Delivered financial analyses supporting pricing, promotions, margin optimization, and audit readiness.",

      "experience.r4.title": "Credit Manager / Pricing Manager — L’Oréal (Travel Retail, Middle East)",
      "experience.r4.meta": "Paris, France • Dec 2019 – Dec 2020",
      "experience.r4.b1": "Led pricing studies and created client price lists aligned with commercial strategy and profitability goals.",
      "experience.r4.b2": "Managed end-to-end credit and rebate processes; improved payment timelines and compliance.",
      "experience.r4.b3": "Built analyses on margin performance and customer profitability to inform decisions.",

      "experience.r5.title": "Founder & President — L’Odyssée Verte",
      "experience.r5.meta": "France • 2019 – 2020",
      "experience.r5.b1": "Founded and led an environmental and educational multimedia project; managed partnerships, fundraising, and delivery.",

      "projects.title": "Projects",
      "projects.subtitle": "A few initiatives I’m proud of. (We’ll refine once you list your side projects.)",
      "projects.p1.title": "SaaS Platform Financial Structuring",
      "projects.p1.text": "Built pricing logic, recurring revenue models, and hybrid margins to support scalable growth.",
      "projects.p1.meta": "SmartPixel • Finance strategy",
      "projects.p2.title": "Funding & Non-Dilutive Strategy",
      "projects.p2.text": "Secured financing and optimized RS&DE/CDAE credits with governance and reporting.",
      "projects.p2.meta": "Financing • Credits • Compliance",
      "projects.p3.title": "Process & Reporting Modernization",
      "projects.p3.text": "Improved reporting cadence and decision support through better models and operational discipline.",
      "projects.p3.meta": "FP&A • Controls",

      "skills.title": "Skills",
      "skills.subtitle": "Core areas of expertise.",
      "skills.s1.title": "Finance & Strategy",
      "skills.s2.title": "Operations & Governance",
      "skills.s3.title": "Tools",
      "skills.tags.cash": "Cash flow & runway",
      "skills.tags.budget": "Budgeting",
      "skills.tags.modeling": "Financial modeling",
      "skills.tags.saas": "SaaS economics",
      "skills.tags.profit": "Profitability analysis",
      "skills.tags.reporting": "Reporting",
      "skills.tags.controls": "Internal controls",
      "skills.tags.compliance": "Compliance",
      "skills.tags.payroll": "Payroll",
      "skills.tags.investor": "Investor communication",

      "contact.title": "Contact",
      "contact.subtitle": "For leadership roles, advisory, or a quick intro — reach out.",
      "contact.location": "Location",
      "contact.linkedin": "LinkedIn",
      "contact.emailBtn": "Email me",
      "contact.cvBtn": "Open CV (PDF)"
    },

    fr: {
      "nav.about": "À propos",
      "nav.experience": "Expérience",
      "nav.projects": "Projets",
      "nav.skills": "Compétences",
      "nav.contact": "Contact",

      "ui.language": "English",
      "ui.ctaContact": "Me contacter",
      "ui.ctaCV": "Télécharger le CV",
      "ui.ctaLinkedIn": "LinkedIn",

      "hero.eyebrow": "Directeur financier / CFO-style",
      "hero.subtitle": "J’aide les entreprises tech à structurer leur croissance, sécuriser leurs financements et piloter cash, marges et risques.",
      "hero.pills.p1": "Finance stratégique",
      "hero.pills.p2": "Trésorerie & runway",
      "hero.pills.p3": "SaaS & modèles hybrides",
      "hero.pills.p4": "Financement non dilutif (RS&DE, CDAE)",
      "hero.pills.p5": "FP&A",
      "hero.pills.p6": "Reporting & gouvernance",
      "hero.meta": "Ouvert aux opportunités de leadership",

      "hero.card.title": "Points clés",
      "hero.card.kpi1": "5+ ans",
      "hero.card.txt1": "Stratégie financière & pilotage de la performance (corporate, scale-up tech, entrepreneuriat)",
      "hero.card.kpi2": "+525K$",
      "hero.card.txt2": "Financements sécurisés pour structuration SaaS & croissance",
      "hero.card.kpi3": "+350K$",
      "hero.card.txt3": "Crédits d’impôt obtenus sur les 2 dernières années (entreprise tech ~4 M$ de revenus annuels)",
      "hero.card.badge": "Corporate → Entrepreneur → Tech scale-up",

      "about.title": "À propos",
      "about.subtitle": "Un profil finance qui relie stratégie et exécution : corporate, entrepreneuriat et tech.",
      "about.p1": "Cadre financier orienté résultats, avec une expérience entre grands groupes (Henkel, L’Oréal), entrepreneuriat et scale-ups tech.",
      "about.p2": "Spécialisé en stratégie financière, optimisation de trésorerie et aide à la décision — je transforme la complexité en actions claires.",
      "about.p3": "Je travaille en proximité avec CEO, CTO et direction commerciale pour aligner finance, produit, go-to-market et croissance via des modèles pragmatiques, un reporting transparent et une exécution disciplinée.",

      "experience.title": "Expérience",
      "experience.subtitle": "Rôles sélectionnés — impact et périmètre.",
      "experience.r1.title": "Directeur financier — SmartPixel",
      "experience.r1.meta": "Montréal, Canada • Nov 2023 – Aujourd’hui",
      "experience.r1.b1": "Structuration financière d’une plateforme SaaS : pricing, revenus récurrents, marges hybrides produit-service.",
      "experience.r1.b2": "Financements sécurisés > 525K$ et projections 2025–2028 ; support aux négociations avec banques, partenaires et institutions.",
      "experience.r1.b3": "Modèles intégrant RS&DE et CDAE pour optimiser le non-dilutif et la rentabilité.",
      "experience.r1.b4": "Pilotage cash, budget, forecast, reporting et gouvernance ; supervision comptabilité, conformité, AR/AP et paie.",

      "experience.r2.title": "Contrôleur financier — SmartPixel",
      "experience.r2.meta": "Montréal, Canada • Juin 2022 – Nov 2023",
      "experience.r2.b1": "Gestion AR/AP, paie et clôture mensuelle ; préparation des états financiers mensuels.",
      "experience.r2.b2": "Réconciliations bilan et P&L ; contribution aux prévisions et budgets annuels.",
      "experience.r2.b3": "Structuration et encadrement de l’équipe comptable.",

      "experience.r3.title": "Sales Controller & Credit Manager — Henkel (Beauty Care)",
      "experience.r3.meta": "Paris, France • Jan 2021 – Jan 2022",
      "experience.r3.b1": "Contrôle budgétaire et pilotage back-margins (remises, frais de coopération, conditions de paiement).",
      "experience.r3.b2": "Automatisation facturation / data (SAP & Access) et amélioration reporting avec l’IT.",
      "experience.r3.b3": "Analyses financières pour pricing, promotions, marges et préparation audits.",

      "experience.r4.title": "Credit Manager / Pricing Manager — L’Oréal (Travel Retail, Moyen-Orient)",
      "experience.r4.meta": "Paris, France • Déc 2019 – Déc 2020",
      "experience.r4.b1": "Études pricing et construction de grilles tarifaires alignées avec la stratégie commerciale et la rentabilité.",
      "experience.r4.b2": "Gestion complète crédit / remises ; amélioration des délais de paiement et conformité.",
      "experience.r4.b3": "Analyses marges et profitabilité client pour aider la décision.",

      "experience.r5.title": "Fondateur & Président — L’Odyssée Verte",
      "experience.r5.meta": "France • 2019 – 2020",
      "experience.r5.b1": "Création et pilotage d’un projet multimédia pédagogique et environnemental : partenariats, levées de fonds et exécution.",

      "projects.title": "Projets",
      "projects.subtitle": "Quelques initiatives — on affinera dès que tu me donnes tes side projects.",
      "projects.p1.title": "Structuration financière SaaS",
      "projects.p1.text": "Construction du pricing, modèles de revenus récurrents et marges hybrides pour soutenir la croissance.",
      "projects.p1.meta": "SmartPixel • Stratégie finance",
      "projects.p2.title": "Stratégie financement & non-dilutif",
      "projects.p2.text": "Financements sécurisés et optimisation RS&DE/CDAE via gouvernance et reporting.",
      "projects.p2.meta": "Financement • Crédits • Conformité",
      "projects.p3.title": "Modernisation process & reporting",
      "projects.p3.text": "Amélioration de la cadence de reporting et de l’aide à la décision via modèles et discipline opérationnelle.",
      "projects.p3.meta": "FP&A • Contrôles",

      "skills.title": "Compétences",
      "skills.subtitle": "Domaines clés.",
      "skills.s1.title": "Finance & stratégie",
      "skills.s2.title": "Ops & gouvernance",
      "skills.s3.title": "Outils",
      "skills.tags.cash": "Trésorerie & runway",
      "skills.tags.budget": "Budgets",
      "skills.tags.modeling": "Modélisation financière",
      "skills.tags.saas": "Économie SaaS",
      "skills.tags.profit": "Analyse de rentabilité",
      "skills.tags.reporting": "Reporting",
      "skills.tags.controls": "Contrôles internes",
      "skills.tags.compliance": "Conformité",
      "skills.tags.payroll": "Paie",
      "skills.tags.investor": "Relation investisseurs",

      "contact.title": "Contact",
      "contact.subtitle": "Pour un poste de direction, une mission advisory, ou une intro rapide.",
      "contact.location": "Localisation",
      "contact.linkedin": "LinkedIn",
      "contact.emailBtn": "M’écrire",
      "contact.cvBtn": "Ouvrir le CV (PDF)"
    }
  };

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const langToggle = document.getElementById("langToggle");
  const langLabel = document.getElementById("langLabel");

  function getLang() {
    const saved = localStorage.getItem("lang");
    return saved === "fr" || saved === "en" ? saved : "en";
  }

  function setLang(lang) {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    if (langLabel) langLabel.textContent = lang.toUpperCase();

    const dict = i18n[lang] || {};
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
        el.textContent = dict[key];
      }
    });
  }

  // Init
  setLang(getLang());

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const next = getLang() === "en" ? "fr" : "en";
      setLang(next);
    });
  }
})();
