/**
* Template Name: Laura
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/laura-free-creative-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  const translations = {
    en: {
      "nav.home": "Home", "nav.publications": "Publications", "nav.resume": "Resume", "nav.about": "About", "nav.contact": "Contact",
      "hero.role": "PhD student at", "hero.background": "Background in Statistical Data Analytics & Data Science", "hero.focus": "Time Series Analysis techniques in Software Quality & Technical Debt", "hero.scroll": "Scroll Down",
      "sections.publications": "Publications", "sections.resume": "My Resume", "sections.about": "About Me", "sections.contact": "Contact Me", "portfolio.comingSoon": "Coming soon...",
      "resume.education": "Education", "resume.phd": "PhD of Statistical Data Analysis in Empirical Software Engineering", "resume.phdDescription": "Currently, I am investigating the state-of-the-art data analysis approaches adopted in the Empirical Software Engineering domain. With some scientific articles already published, I am looking forward to publishing a Systematic Literature Review based on my investigation.", "resume.master": "Master of Science in Statistical Data Analytics", "resume.masterDescription": "Application of computational statistics within the field of Data Science. Among the disciplines learnt during these studies are Time Series Analysis, Scientific Computing in diverse programming languages, Advanced Statistical Modelling & Bayesian Analysis.", "resume.bachelor": "Bachelor of Economics", "resume.bachelorDescription": "With a major in Development and International Economics, I developed skills in Statistics, Macroeconomics, Microeconomics and Econometrics. I completed an international mobility of 6 months in the University of Milano-Bicocca, Italy.", "resume.experience": "Professional Experience", "resume.doctoralResearcher": "Doctoral researcher", "resume.work1": "Investigation of the state-of-the-art data analysis approaches adopted in the Empirical Software Engineering domain.", "resume.work2": "Identification of data analysis issues in the Empirical Software Engineering studies.", "resume.work3": "Definition of time dependent statistical analysis techniques.", "resume.work4": "Comparison of the new approach with the traditional ones adopted by Empirical Software Engineering studies.", "resume.work5": "Internal Validation (application in Empirical Software Engineering domain with a particular focus on Cohort Study).", "resume.work6": "Guidelines definition.", "resume.juniorResearcher": "Junior research assistant", "resume.assistant1": "Data extraction pipeline design for Mining Software Repositories (Python, GitHub REST API).", "resume.assistant2": "Application of Cohort Studies in Empirical Software Engineering with Mature Software project version control data.", "resume.assistant3": "Non-linear regression analysis applying Generalized Linear Models theory (R).", "resume.assistant4": "Scientific writing.",
      "about.subtitle": "PhD student specialized in Statistical Data Analysis in Empirical Software Engineering", "about.name": "Name:", "about.website": "Website:", "about.phone": "Phone:", "about.city": "City:", "about.age": "Age:", "about.studies": "Studies:", "about.email": "Email:", "about.background": "Background:", "about.backgroundValue": "Computational statistics", "about.yearsPhd": "Years of PhD", "about.firstAuthorPapers": "Papers published (1st author)", "about.yearsExperience": "Years of experience", "about.papers": "Papers published",
      "contact.address": "University of Oulu | Pentti Kaiteran katu 1 | Office: AT221 | 90570, Oulu, Finland", "contact.social": "Social Profiles", "contact.emailMe": "Email Me", "contact.callMe": "Call Me", "form.name": "Your Name", "form.email": "Your Email", "form.subject": "Subject", "form.message": "Message", "form.loading": "Loading", "form.sent": "Your message has been sent. Thank you!", "form.send": "Send Message", "footer.tagline": "", "footer.rights": "All Rights Reserved", "footer.design": "Original Design"
    },
    eus: {
      "nav.home": "Hasiera", "nav.publications": "Argitalpenak", "nav.resume": "Curriculuma", "nav.about": "Niri buruz", "nav.contact": "Kontaktua", "hero.role": "Doktoregaia", "hero.background": "Datuen analisi estatistikoa, Data Science eta AA Ingeniaritza", "hero.focus": "Time Series Analysis softwarearen kalitatean eta zor teknikoan aplikatua", "hero.scroll": "Scroll beherantz", "sections.publications": "Argitalpenak", "sections.resume": "Nire curriculuma", "sections.about": "Niri buruz", "sections.contact": "Harremanetarako", "portfolio.comingSoon": "Laster...", "resume.education": "Hezkuntza", "resume.phd": "Software ingeniaritza enpirikoan datu-analisi estatistikoko doktoregoa", "resume.phdDescription": "Gaur egun, software ingeniaritza enpirikoaren arloan erabiltzen diren datu-analisiko ikuspegi aurreratuenak ikertzen ari naiz. Dagoeneko artikulu zientifiko batzuk argitaratu ditut, eta nire ikerketan oinarritutako literatura berrikuspen sistematikoa argitaratzea espero dut.", "resume.master": "Datuen analisi estatistikoko masterra", "resume.masterDescription": "Estatistika konputazionalaren aplikazioa datu-zientziaren arloan. Ikasketetan denbora-serien analisia, hainbat programazio-lengoaiatako konputazio zientifikoa, modelizazio estatistiko aurreratua eta Bayesen analisia landu nituen.", "resume.bachelor": "Ekonomia lizentziatura", "resume.bachelorDescription": "Garapen eta nazioarteko ekonomian espezializatuta, estatistika, makroekonomia, mikroekonomia eta ekonometria gaitasunak garatu nituen. 6 hilabeteko nazioarteko mugikortasuna egin nuen Italiako Milano-Bicocca Unibertsitatean.", "resume.experience": "Lan-esperientzia", "resume.doctoralResearcher": "Doktorego-ikertzailea", "resume.work1": "Software ingeniaritza enpirikoan erabiltzen diren datu-analisiko ikuspegi aurreratuenak ikertzea.", "resume.work2": "Software ingeniaritza enpirikoko ikerketetako datu-analisiko arazoak identifikatzea.", "resume.work3": "Denboraren araberako analisi estatistikoko teknikak definitzea.", "resume.work4": "Ikuspegi berria software ingeniaritza enpirikoko ikerketetan erabilitako ohiko ikuspegiekin alderatzea.", "resume.work5": "Barne-balidazioa, kohorte-ikerketetan arreta berezia jarriz.", "resume.work6": "Jarraibideak definitzea.", "resume.juniorResearcher": "Ikerketa-laguntzaile juniorra", "resume.assistant1": "Software-biltegiak meatzaritzeko datuak ateratzeko pipelinearen diseinua (Python, GitHub REST API).", "resume.assistant2": "Aplicazioa kohorte-ikerketak software ingeniaritza enpirikoan, software helduaren bertsio-kontrolaren datuekin.", "resume.assistant3": "Erregresio ez-linealaren analisia, eredu lineal orokorren teoria aplikatuz (R).", "resume.assistant4": "Idazketa zientifikoa.", "about.subtitle": "Software ingeniaritza enpirikoan datu-analisi estatistikoan espezializatutako doktoregaia", "about.name": "Izena:", "about.website": "Webgunea:", "about.phone": "Telefonoa:", "about.city": "Hiria:", "about.age": "Adina:", "about.studies": "Ikasketak:", "about.email": "Posta elektronikoa:", "about.background": "Prestakuntza:", "about.backgroundValue": "Estatistika konputazionala", "about.yearsPhd": "Doktoregoko urteak", "about.firstAuthorPapers": "Argitalpenak (1. egilea)", "about.yearsExperience": "Esperientzia-urteak", "about.papers": "Argitalpenak", "contact.address": "Ouluko Unibertsitatea | Pentti Kaiteran katu 1 | Bulegoa: AT221 | 90570, Oulu, Finlandia", "contact.social": "Profil sozialak", "contact.emailMe": "Idatzi mezu elektronikoa", "contact.callMe": "Deitu", "form.name": "Zure izena", "form.email": "Zure posta elektronikoa", "form.subject": "Gaia", "form.message": "Mezua", "form.loading": "Kargatzen", "form.sent": "Zure mezua bidali da. Eskerrik asko!", "form.send": "Bidali mezua", "footer.tagline": "", "footer.rights": "Eskubide guztiak erreserbatuta", "footer.design": "Jatorrizko diseinua"
    },
    es: {
      "nav.home": "Inicio", "nav.publications": "Publicaciones", "nav.resume": "Currículum", "nav.about": "Sobre mí", "nav.contact": "Contacto", "hero.role": "Estudiante de doctorado", "hero.background": "Formación en análisis estadístico de datos, ciencia de datos e ingeniería de IA", "hero.focus": "Técnicas de análisis de series temporales en calidad del software y deuda técnica", "hero.scroll": "Desplazarse hacia abajo", "sections.publications": "Publicaciones", "sections.resume": "Mi currículum", "sections.about": "Sobre mí", "sections.contact": "Contacto", "portfolio.comingSoon": "Próximamente...", "resume.education": "Formación", "resume.phd": "Doctorado en análisis estadístico de datos en ingeniería del software empírica", "resume.phdDescription": "Actualmente investigo los enfoques más avanzados de análisis de datos empleados en el ámbito de la ingeniería del software empírica. Ya he publicado algunos artículos científicos y espero publicar una revisión sistemática de la literatura basada en mi investigación.", "resume.master": "Máster en análisis estadístico de datos", "resume.masterDescription": "Aplicación de la estadística computacional al campo de la ciencia de datos. Durante estos estudios aprendí análisis de series temporales, computación científica en diversos lenguajes de programación, modelización estadística avanzada y análisis bayesiano.", "resume.bachelor": "Grado en Economía", "resume.bachelorDescription": "Con especialización en desarrollo y economía internacional, desarrollé competencias en estadística, macroeconomía, microeconomía ed econometria. Realicé una movilidad internacional de 6 meses en la Universidad de Milano-Bicocca, Italia.", "resume.experience": "Experiencia profesional", "resume.doctoralResearcher": "Investigador doctoral", "resume.work1": "Investigación de los enfoques más avanzados de análisis de datos empleados en la ingeniería del software empírica.", "resume.work2": "Identificación de problemas de análisis de datos en estudios de ingeniería del software empírica.", "resume.work3": "Definición de técnicas de análisis estadístico dependientes del tiempo.", "resume.work4": "Comparación del nuevo enfoque con quelli tradicionales empleados en estudios de ingeniería del software empírica.", "resume.work5": "Validación interna, con especial atención a los estudios de cohortes.", "resume.work6": "Definición de lineas guida.", "resume.juniorResearcher": "Asistente de investigación junior", "resume.assistant1": "Diseño de una pipeline para la extracción de datos de repositorios de software (Python, API REST de GitHub).", "resume.assistant2": "Aplicación de estudios de cohortes en ingeniería del software empírica con datos de control de versiones de proyectos maduros.", "resume.assistant3": "Análisis de regresión no lineal aplicando la teoria de modelos lineales generalizados (R).", "resume.assistant4": "Redacción científica.", "about.subtitle": "Estudiante de doctorado especializado en análisis estadístico de datos en ingeniería del software empírica", "about.name": "Nombre:", "about.website": "Sitio web:", "about.phone": "Telefono:", "about.city": "Ciudad:", "about.age": "Edad:", "about.studies": "Estudios:", "about.email": "Correo electrónico:", "about.background": "Formación:", "about.backgroundValue": "Estadística computacional", "about.yearsPhd": "Años de doctorado", "about.firstAuthorPapers": "Artículos publicados (primer autor)", "about.yearsExperience": "Años de experiencia", "about.papers": "Artículos publicados", "contact.address": "Universidad de Oulu | Pentti Kaiteran katu 1 | Oficina: AT221 | 90570, Oulu, Finlandia", "contact.social": "Perfiles sociales", "contact.emailMe": "Escríbeme", "contact.callMe": "Llámame", "form.name": "Tu nombre", "form.email": "Tu correo electrónico", "form.subject": "Asunto", "form.message": "Mensaje", "form.loading": "Cargando", "form.sent": "Tu mensaje ha sido enviado. ¡Gracias!", "form.send": "Enviar mensaje", "footer.tagline": "", "footer.rights": "Todos los derechos reservados", "footer.design": "Diseño original"
    },
    it: {
      "nav.home": "Home", "nav.publications": "Pubblicazioni", "nav.resume": "Curriculum", "nav.about": "Chi sono", "nav.contact": "Contatti", "hero.role": "Dottorando presso", "hero.background": "Formazione in analisi statistica dei dati, data science e Ingegneria dell'IA", "hero.focus": "Tecniche di analisi delle serie temporali nella qualità del software e nel debito tecnico", "hero.scroll": "Scorri verso il basso", "sections.publications": "Pubblicazioni", "sections.resume": "Il mio curriculum", "sections.about": "Chi sono", "sections.contact": "Contatti", "portfolio.comingSoon": "Prossimamente...", "resume.education": "Formazione", "resume.phd": "Dottorato in analisi statistica dei dati nell'ingegneria del software empirica", "resume.phdDescription": "Attualmente studio gli approcci più avanzati di analisi dei dati adottati nell'ambito dell'ingegneria del software empirica. Ho già pubblicato alcuni articoli scientifici e conto di pubblicare una revisione sistematica della letteratura basata sulla mia ricerca.", "resume.master": "Laurea magistrale in analisi statistica dei dati", "resume.masterDescription": "Applicazione della statistica computazionale al campo della data science. Durante questi studi ho appreso l'analisi delle serie temporali, il calcolo scientifico in diversi linguaggi di programmazione, la modellazione statistica avanzata e l'analisi bayesiana.", "resume.bachelor": "Laurea in Economia", "resume.bachelorDescription": "Con una specializzazione in sviluppo ed economia internazionale, ho sviluppato competenze in statistica, macroeconomia, microeconomia ed econometria. Ho completato un periodo di mobilità internazionale di 6 mesi presso l'Università di Milano-Bicocca, Italia.", "resume.experience": "Esperienza professionale", "resume.doctoralResearcher": "Ricercatore dottorale", "resume.work1": "Studio degli approcci più avanzati di analisi dei dati adottati nell'ingegneria del software empirica.", "resume.work2": "Identificazione dei problemi di analisi dei dati negli studi di ingegneria del software empirica.", "resume.work3": "Definizione di tecniche di analisi statistica dipendenti dal tempo.", "resume.work4": "Confronto del nuovo approccio con quelli tradizionali adottati negli studi di ingegneria del software empirica.", "resume.work5": "Validazione interna, con particolare attenzione agli studi di coorte.", "resume.work6": "Definizione di linee guida.", "resume.juniorResearcher": "Assistente di ricerca junior", "resume.assistant1": "Progettazione di una pipeline per l'estrazione di dati dai repository software (Python, API REST di GitHub).", "resume.assistant2": "Applicazione degli studi di coorte nell'ingegneria del software empirica con dati di controllo versione di progetti maturi.", "resume.assistant3": "Analisi di regressione non lineare applicando la teoria dei modelli lineari generalizzati (R).", "resume.assistant4": "Scrittura scientifica.", "about.subtitle": "Dottorando specializzato nell'analisi statistica dei dati nell'ingegneria del software empirica", "about.name": "Nome:", "about.website": "Sito web:", "about.phone": "Telefono:", "about.city": "Città:", "about.age": "Età:", "about.studies": "Studi:", "about.email": "Email:", "about.background": "Formazione:", "about.backgroundValue": "Statistica computazionale", "about.yearsPhd": "Anni di dottorato", "about.firstAuthorPapers": "Articoli pubblicati (primo autore)", "about.yearsExperience": "Anni di esperienza", "about.papers": "Articoli pubblicati", "contact.address": "Università di Oulu | Pentti Kaiteran katu 1 | Ufficio: AT221 | 90570, Oulu, Finlandia", "contact.social": "Profili social", "contact.emailMe": "Scrivimi", "contact.callMe": "Chiamami", "form.name": "Il tuo nome", "form.email": "La tua email", "form.subject": "Oggetto", "form.message": "Messaggio", "form.loading": "Caricamento", "form.sent": "Il tuo messaggio è stato inviato. Grazie!", "form.send": "Invia messaggio", "footer.tagline": "", "footer.rights": "Tutti i diritti riservati", "footer.design": "Design originale"
    }
  };

  const setLanguage = (language) => {
    const selectedLanguage = translations[language] ? language : 'en';
    const dictionary = translations[selectedLanguage];
    document.documentElement.lang = selectedLanguage === 'eus' ? 'eu' : selectedLanguage;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const translation = dictionary[element.dataset.i18n];
      if (translation !== undefined) element.textContent = translation;
    });
    document.querySelectorAll('[data-i18n-title]').forEach((element) => {
      const translation = dictionary[element.dataset.i18nTitle];
      if (translation !== undefined) element.title = translation;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const translation = dictionary[element.dataset.i18nPlaceholder];
      if (translation !== undefined) element.placeholder = translation;
    });
    document.querySelectorAll('.language-option').forEach((button) => {
      const isActive = button.dataset.language === selectedLanguage;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
    localStorage.setItem('site-language', selectedLanguage);
  };

  document.querySelectorAll('.language-option').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });
  setLanguage(localStorage.getItem('site-language') || 'en');

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        filter: '.filter-web'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

  /**
   * Calculate and update age dynamically
   */
  function updateAge() {
    // Birth date (assuming you were born on March 8, 1995)
    const birthDate = new Date('1998-03-08');
    
    // Get current date
    const currentDate = new Date();
    
    // Calculate initial age
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    
    // Adjust if birthday hasn't occurred this year yet
    if (currentDate.getMonth() < birthDate.getMonth() || 
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
      age--;
    }
    
    // Update the display
    const ageElement = document.getElementById('age-display');
    if (ageElement) {
      ageElement.textContent = age;
    }
  }

  // Update age on page load
  updateAge();

  /**
   * News pagination and rendering
   */
  const newsItems = [
    "[15-09-2026] Paper accepted at ACM TOSEM on refactoring motivations in open-source projects.",
    "[05-09-2026] Invited talk on Time Series Analysis in Empirical Software Engineering at Oulu.",
    "[20-08-2026] Released a new multi-dimensional dataset for software quality analytics.",
    "[10-08-2026] Started collaboration on Generative AI agent-based code review frameworks.",
    "[25-07-2026] Attended and presented research at international software engineering symposium.",
    "[12-07-2026] Published new pre-print exploring early defect forecasting approaches.",
    "[30-06-2026] Completed advanced statistical modelling workshop with visiting scholars.",
    "[15-06-2026] Organized internal reading group on multivariate time series analysis.",
    "[01-06-2026] Welcomed new research assistants to the Empirical Software Engineering lab.",
    "[20-05-2026] Submitted registered report on time-sensitive defect prediction to SANER.",
    "[10-05-2026] Presented findings on architectural smells and static analysis warnings.",
    "[02-04-2026] Updated research pipeline codebase for automated GitHub data extraction."
  ];

  let currentNewsPage = 1;
  const newsPerPage = 10;

  function renderNews() {
    const listEl = document.getElementById('news-list');
    const paginationEl = document.getElementById('news-pagination');
    if (!listEl || !paginationEl) return;

    const totalPages = Math.ceil(newsItems.length / newsPerPage);
    if (currentNewsPage > totalPages) currentNewsPage = totalPages || 1;

    const start = (currentNewsPage - 1) * newsPerPage;
    const end = start + newsPerPage;
    const pageItems = newsItems.slice(start, end);

    listEl.innerHTML = pageItems.map(item => `<li style="padding: 8px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #444;"><i class="bi bi-bell-fill" style="color: #ffb727; margin-right: 8px;"></i>${item}</li>`).join('');

    if (totalPages > 1) {
      let paginationHtml = '';
      for (let i = 1; i <= totalPages; i++) {
        const activeStyle = i === currentNewsPage ? 'background: #ffb727; color: #fff; border-color: #ffb727;' : 'background: #fff; color: #444; border-color: #ddd;';
        paginationHtml += `<button type="button" class="news-page-btn" data-page="${i}" style="padding: 6px 12px; border: 1px solid; border-radius: 4px; cursor: pointer; font-size: 13px; font-weight: 600; ${activeStyle}">${i}</button>`;
      }
      paginationEl.innerHTML = paginationHtml;

      paginationEl.querySelectorAll('.news-page-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          currentNewsPage = parseInt(btn.dataset.page);
          renderNews();
        });
      });
    } else {
      paginationEl.innerHTML = '';
    }
  }

  renderNews();

})()