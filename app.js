/**
 * SuryaDev Official Landing Page Script
 * Engineered by Surya Wana Bakti
 */

document.addEventListener("DOMContentLoaded", () => {
  // =========================================================================
  // 1. THEME SWITCHER (Dark / Light Mode)
  // =========================================================================
  const themeToggle = document.getElementById("themeToggle");
  const htmlElement = document.documentElement;

  const savedTheme = localStorage.getItem("suryadev_landing_theme") || "light";
  htmlElement.setAttribute("data-theme", savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = htmlElement.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      htmlElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("suryadev_landing_theme", nextTheme);
    });
  }

  // =========================================================================
  // 2. MOBILE MENU TOGGLE
  // =========================================================================
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("mobile-open");
    });

    navMenu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("mobile-open");
      });
    });
  }

  // =========================================================================
  // 3. COPY CHECKSUM / FILENAME
  // =========================================================================
  const copyBtn = document.getElementById("copyChecksumBtn");
  const checksumText = document.getElementById("checksumText");

  if (copyBtn && checksumText) {
    copyBtn.addEventListener("click", () => {
      const textToCopy = "SuryaDev_0.1.2_x64-setup.exe";
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = "Tersalin!";
        copyBtn.style.borderColor = "var(--cyan-glow)";
        copyBtn.style.color = "var(--cyan-glow)";

        setTimeout(() => {
          copyBtn.textContent = originalText;
          copyBtn.style.borderColor = "";
          copyBtn.style.color = "";
        }, 2000);
      });
    });
  }

  // =========================================================================
  // 4. APP SHOWCASE / SCREENSHOT SLIDER CONTROLLER
  // =========================================================================
  const slidesData = [
    {
      title: "SuryaDev — Developer Environment (Core Engine)",
      tagline: "Core Engine & Multi-Service Orchestrator",
      badge: "DASHBOARD UTAMA & CORE SERVICES",
      headline: "Pusat Kontrol Layanan Lokal & Telemetri Performa Real-Time",
      desc: "Dashboard utama SuryaDev mengendalikan seluruh stack web development Windows Anda dalam satu jendela ringkas. Status service aktif, PID proses, konsumsi RAM, serta penggunaan CPU dan Disk terpantau secara transparan dan responsif.",
      image: "assets/slide1.png",
      caption: "Dashboard Utama: Kontrol PHP 8.4, MySQL 8.4, Nginx 1.26 & Telemetri Resource",
      features: [
        {
          title: "1-Klik Start / Stop / Restart",
          desc: "Jalankan PHP 8.4, MySQL 8.4, dan Nginx secara serentak atau kendalikan proses masing-masing tanpa mematikan service lainnya."
        },
        {
          title: "Port 80 Ready & Direktori www",
          desc: "Akses instan ke http://localhost dan tombol satu sentuhan untuk membuka direktori kerja C:\\SuryaDev\\www di Windows Explorer."
        },
        {
          title: "Pemantau Hardware Akurat",
          desc: "Visualisasi live CPU Usage (5.3%), RAM (9.8 GB / 15.7 GB), dan Disk Storage tanpa perlu membuka Windows Task Manager."
        },
        {
          title: "Dukungan Multi-Service Siap Unduh",
          desc: "Redis (:6379), PostgreSQL (:5432), dan Apache (:8080) siap diunduh dan dipasang langsung dari menu Runtimes."
        }
      ]
    },
    {
      title: "SuryaDev — Database Management (Visual Relationship Designer & ERD)",
      tagline: "Visual ERD Designer & Advanced Database Studio",
      badge: "DATABASE STUDIO TERINTEGRASI",
      headline: "Visual Relationship Designer Layaknya Class Diagram Interaktif",
      desc: "Tinggalkan phpMyAdmin yang lambat! SuryaDev menghadirkan Database Studio native berkekuatan tinggi. Tampilkan dan kelola relasi foreign key antar tabel secara visual dalam kanvas ERD interaktif lengkap dengan mode fullscreen.",
      image: "assets/slide2.png",
      caption: "Visual Relationship Designer & ERD: Pemetaan Foreign Key 22 Tabel Mode Fullscreen",
      features: [
        {
          title: "Interactive ERD Canvas",
          desc: "Otomatis memetakan relasi antar tabel (teruji hingga 22 tabel & 17 Foreign Keys) dengan fitur drag header, auto layout, dan pan canvas."
        },
        {
          title: "Multi-Engine Terpadu",
          desc: "Bekerja mulus dengan MySQL (Port 3306), PostgreSQL (Port 5432), MariaDB, dan System SQLite (state.db) tanpa software terpisah."
        },
        {
          title: "Workspace Fitur Komplet",
          desc: "Dilengkapi Table Explorer, Data Grid dengan filter inline, Structure Designer, SQL Console autocomplete, Query Builder, dan Schema Diff."
        },
        {
          title: "Kontrol Zoom & Ekspor Skema",
          desc: "Kontrol perbesaran kanvas (Ctrl + Wheel), Fit View 1-klik, dan kemampuan ekspor diagram skema untuk dokumentasi arsitektur proyek."
        }
      ]
    },
    {
      title: "SuryaDev — Redis & JavaScript Runtimes",
      tagline: "In-Memory Cache & Local JS Toolchain Detection",
      badge: "REDIS CACHE & JS RUNTIMES",
      headline: "Manajemen In-Memory Cache & Deteksi Toolchain JavaScript Modern",
      desc: "Dukungan penuh untuk pengembangan aplikasi modern yang membutuhkan antrean caching cepat atau build assets otomatis menggunakan ekosistem JavaScript terbaru.",
      image: "assets/slide3.png",
      caption: "Redis Cache Key-Value Store & Deteksi Lingkungan Node.js v26.13 / Bun v1.2.8",
      features: [
        {
          title: "Redis Key-Value Cache",
          desc: "Koneksi port 6379 dengan tombol PING diagnostics instan, status klien terhubung, dan pembentukan konfigurasi redis.conf otomatis."
        },
        {
          title: "1-Klik Salin Variabel .env",
          desc: "Tombol 'Copy .env' menyalin konfigurasi REDIS_HOST dan REDIS_PORT seketika untuk langsung ditempelkan ke berkas proyek Laravel / Express."
        },
        {
          title: "Auto-Detect Node.js & Bun",
          desc: "Mendeteksi instalasi sistem dan runtime portabel Node.js (v26.13.0) serta Bun (v1.2.8) untuk mengeksekusi script dan compiler Vite/Webpack."
        },
        {
          title: "Zero Setup Artisan & Asset Pipeline",
          desc: "Jalankan perintah kompilasi frontend dan background task antrean tanpa kendala path environment Windows."
        }
      ]
    },
    {
      title: "SuryaDev — Developer Utilities",
      tagline: "Zero-Dependency Local Diagnostic & Development Tools",
      badge: "DEV TOOLS & DIAGNOSTIK OFFLINE",
      headline: "Kumpulan Utilitas Web Developer Esensial — 100% Offline & Privat",
      desc: "Tidak perlu lagi membuka website online mencurigakan untuk mendecode JWT atau memformat JSON rahasia perusahaan. SuryaDev menyediakan perkakas utilitas offline berkecepatan native.",
      image: "assets/slide4.png",
      caption: "Developer Utilities: Port Inspector, JSON Formatter, JWT Decoder & URL Encoder Offline",
      features: [
        {
          title: "Port Inspector Cerdas",
          desc: "Cari tahu dan matikan instan proses Windows lain (seperti IIS atau Skype) yang membajak Port 80 atau Port 3306."
        },
        {
          title: "JWT & Base64 Decoder",
          desc: "Bongkar header dan klaim payload token autentikasi JSON Web Token secara aman tanpa risiko bocor ke internet."
        },
        {
          title: "URL Encoder & Decoder",
          desc: "Konversi karakter URL string, spasi, dan query parameters dua arah secara instan dengan editor berdampingan."
        },
        {
          title: "JSON Formatter & Validator",
          desc: "Rapikan struktur output API yang berantakan dan validasi error syntax JSON dalam hitungan milidetik."
        }
      ]
    },
    {
      title: "SuryaDev — PHP Version & Extension Manager",
      tagline: "Isolated PHP FastCGI & One-Click Extension Toggles",
      badge: "PHP FASTCGI & EXTENSION MANAGER",
      headline: "Pengelola Versi PHP FastCGI & Sakelar 40+ Ekstensi Resmi",
      desc: "Konfigurasikan runtime PHP terisolasi tanpa merusak instalasi Windows global. Aktifkan atau nonaktifkan modul DLL resmi dan kelola arahan php.ini langsung dari antarmuka visual.",
      image: "assets/slide5.png",
      caption: "PHP Version Manager: Isolasi FastCGI Port 9000 & Sakelar 40+ Modul Ekstensi Resmi",
      features: [
        {
          title: "PHP 8.4.27 FastCGI Terisolasi",
          desc: "Berjalan pada Port 9000 dengan Active CLI yang otomatis dihubungkan ke Nginx dan Apache secara mulus."
        },
        {
          title: "Toggle 40+ Modul Ekstensi Resmi",
          desc: "Cukup centang untuk mengaktifkan bcmath, curl, fileinfo, gd, intl, mbstring, mysqli, opcache, openssl, pdo_mysql, pdo_pgsql, sodium, zip, dll."
        },
        {
          title: "Shortcut 1-Klik php.ini & ext/",
          desc: "Tombol cepat untuk 'Edit php.ini', 'Open php.ini' di editor default, dan membuka direktori ext/ untuk menambahkan file .dll custom."
        },
        {
          title: "Dukungan Custom Modul PECL",
          desc: "Form instalasi ekstensi kustom seperti Redis, Xdebug, atau modul pihak ketiga dengan validasi otomatis."
        }
      ]
    }
  ];

  let currentSlide = 0;
  let isAutoPlay = true;
  let autoPlayTimer = null;
  const AUTO_PLAY_INTERVAL = 6000;

  // DOM Elements
  const tabs = document.querySelectorAll(".showcase-tab");
  const slideItems = document.querySelectorAll(".slide-item");
  const dotBtns = document.querySelectorAll(".dot-btn");
  const prevBtn = document.getElementById("slidePrevBtn");
  const nextBtn = document.getElementById("slideNextBtn");
  const windowTitleText = document.getElementById("windowTitleText");
  const currentSlideIndex = document.getElementById("currentSlideIndex");
  const slideTagline = document.getElementById("slideTagline");
  const autoPlayToggle = document.getElementById("autoPlayToggle");
  const autoPlayText = document.getElementById("autoPlayText");
  const slideDetailsBox = document.getElementById("slideDetailsBox");
  const showcaseWindow = document.getElementById("showcaseWindow");

  // Lightbox Modal Elements
  const modal = document.getElementById("screenshotModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalImg = document.getElementById("modalImg");
  const modalCaption = document.getElementById("modalCaption");
  const modalIndexBadge = document.getElementById("modalIndexBadge");
  const modalPrevBtn = document.getElementById("modalPrevBtn");
  const modalNextBtn = document.getElementById("modalNextBtn");
  const zoomModalBtn = document.getElementById("zoomModalBtn");

  // Render Slide Function
  function renderSlide(index) {
    if (index < 0) index = slidesData.length - 1;
    if (index >= slidesData.length) index = 0;
    currentSlide = index;

    const data = slidesData[currentSlide];

    // 1. Update Slide Visibility
    slideItems.forEach((item, i) => {
      if (i === currentSlide) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    // 2. Update Tabs
    tabs.forEach((tab, i) => {
      if (i === currentSlide) {
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");
        // Scroll tab into view on mobile
        if (window.innerWidth <= 768) {
          tab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
      } else {
        tab.classList.remove("active");
        tab.setAttribute("aria-selected", "false");
      }
    });

    // 3. Update Dots
    dotBtns.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });

    // 4. Update Window Title & Controls Text
    if (windowTitleText) windowTitleText.textContent = data.title;
    if (currentSlideIndex) currentSlideIndex.textContent = (currentSlide + 1).toString();
    if (slideTagline) slideTagline.textContent = data.tagline;

    // 5. Update Dynamic Details Box with Smooth Transition
    if (slideDetailsBox) {
      slideDetailsBox.style.opacity = "0";
      slideDetailsBox.style.transform = "translateY(8px)";

      setTimeout(() => {
        let featuresHtml = data.features.map(f => `
          <div class="sd-feature-card">
            <div class="sdf-icon">✓</div>
            <div class="sdf-content">
              <strong>${f.title}</strong>
              <p>${f.desc}</p>
            </div>
          </div>
        `).join("");

        slideDetailsBox.innerHTML = `
          <div class="slide-details-grid">
            <div class="sd-overview">
              <span class="sd-badge">${data.badge}</span>
              <h3 class="sd-title">${data.headline}</h3>
              <p class="sd-desc">${data.desc}</p>
              <div class="sd-cta-wrap">
                <a href="#download" class="btn btn-primary">Unduh SuryaDev v0.1.2</a>
                <button class="btn btn-secondary trigger-zoom-direct" data-index="${currentSlide}">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
                  <span>Zoom Screenshot</span>
                </button>
              </div>
            </div>
            <div class="sd-features-list">
              ${featuresHtml}
            </div>
          </div>
        `;

        const directZoomBtn = slideDetailsBox.querySelector(".trigger-zoom-direct");
        if (directZoomBtn) {
          directZoomBtn.addEventListener("click", () => openModal(currentSlide));
        }

        slideDetailsBox.style.opacity = "1";
        slideDetailsBox.style.transform = "translateY(0)";
      }, 150);
    }

    // 6. If modal is currently open, sync it too
    if (modal && modal.classList.contains("open")) {
      syncModal(currentSlide);
    }
  }

  // Next / Prev Actions
  function nextSlide() {
    renderSlide(currentSlide + 1);
  }

  function prevSlide() {
    renderSlide(currentSlide - 1);
  }

  // Auto-play Timer Controls
  function startAutoPlay() {
    stopAutoPlay();
    if (!isAutoPlay) return;
    autoPlayTimer = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
    if (autoPlayToggle) {
      autoPlayToggle.classList.remove("paused");
      if (autoPlayText) autoPlayText.textContent = "Auto Slide: On";
    }
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  function toggleAutoPlay() {
    isAutoPlay = !isAutoPlay;
    if (isAutoPlay) {
      startAutoPlay();
    } else {
      stopAutoPlay();
      if (autoPlayToggle) {
        autoPlayToggle.classList.add("paused");
        if (autoPlayText) autoPlayText.textContent = "Auto Slide: Off";
      }
    }
  }

  // Attach Navigation Listeners
  if (prevBtn) prevBtn.addEventListener("click", () => { prevSlide(); startAutoPlay(); });
  if (nextBtn) nextBtn.addEventListener("click", () => { nextSlide(); startAutoPlay(); });

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const idx = parseInt(tab.getAttribute("data-slide"), 10);
      renderSlide(idx);
      startAutoPlay();
    });
  });

  dotBtns.forEach((dot) => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-slide"), 10);
      renderSlide(idx);
      startAutoPlay();
    });
  });

  if (autoPlayToggle) {
    autoPlayToggle.addEventListener("click", toggleAutoPlay);
  }

  // Pause on hover
  if (showcaseWindow) {
    showcaseWindow.addEventListener("mouseenter", stopAutoPlay);
    showcaseWindow.addEventListener("mouseleave", () => { if (isAutoPlay) startAutoPlay(); });
  }

  // Touch Swipe Support for Showcase Viewport
  const viewport = document.querySelector(".showcase-viewport");
  if (viewport) {
    let touchStartX = 0;
    let touchEndX = 0;

    viewport.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoPlay();
    }, { passive: true });

    viewport.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      if (isAutoPlay) startAutoPlay();
    }, { passive: true });

    function handleSwipe() {
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) > 40) {
        if (swipeDistance > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
      }
    }
  }

  // =========================================================================
  // 5. LIGHTBOX MODAL (HIGH-RES SCREENSHOT PREVIEW)
  // =========================================================================
  function syncModal(index) {
    const data = slidesData[index];
    if (modalImg) modalImg.src = data.image;
    if (modalCaption) modalCaption.textContent = data.caption;
    if (modalIndexBadge) modalIndexBadge.textContent = `${index + 1} / ${slidesData.length}`;
  }

  function openModal(index) {
    stopAutoPlay();
    syncModal(index);
    if (modal) {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (isAutoPlay) startAutoPlay();
    }
  }

  // Open modal from slide image wrapper click
  const slideWrappers = document.querySelectorAll(".slide-img-wrapper");
  slideWrappers.forEach((wrapper, index) => {
    wrapper.addEventListener("click", () => openModal(index));
  });

  if (zoomModalBtn) {
    zoomModalBtn.addEventListener("click", () => openModal(currentSlide));
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);

  if (modalPrevBtn) modalPrevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    prevSlide();
  });

  if (modalNextBtn) modalNextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    nextSlide();
  });

  // Keyboard navigation (Esc to close modal, Arrow keys to navigate slides)
  window.addEventListener("keydown", (e) => {
    if (modal && modal.classList.contains("open")) {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    } else {
      // If user is focused near showcase
      const rect = showcaseWindow ? showcaseWindow.getBoundingClientRect() : null;
      if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
        if (e.key === "ArrowLeft") { prevSlide(); startAutoPlay(); }
        if (e.key === "ArrowRight") { nextSlide(); startAutoPlay(); }
      }
    }
  });

  // Initialize Slide 0 and start auto-play
  renderSlide(0);
  startAutoPlay();

  // =========================================================================
  // 6. DOWNLOAD FEEDBACK TOAST
  // =========================================================================
  const downloadBtns = document.querySelectorAll(".download-trigger");
  downloadBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      showToast("Sedang mengunduh SuryaDev_0.1.2_x64-setup.exe...");
    });
  });

  function showToast(msg) {
    const existing = document.querySelector(".download-toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "download-toast";
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      <span>${msg}</span>
    `;

    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 10);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }
});
