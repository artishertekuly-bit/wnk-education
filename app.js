/**
 * WNK Education - Core Application Logic
 * Fast client-side rendering, search, filtering, and modal reader
 */

document.addEventListener('DOMContentLoaded', () => {
  const resourcesGrid = document.getElementById('resourcesGrid');
  const searchInput = document.getElementById('searchInput');
  const filterRow = document.getElementById('filterRow');
  const emptyState = document.getElementById('emptyState');
  const resetFilterBtn = document.getElementById('resetFilterBtn');
  const resultCount = document.getElementById('resultCount');
  
  // Modal elements
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalCategory = document.getElementById('modalCategory');
  const modalReadTime = document.getElementById('modalReadTime');
  const modalTitle = document.getElementById('modalTitle');
  const modalLead = document.getElementById('modalLead');
  const modalSteps = document.getElementById('modalSteps');
  const modalPrompt = document.getElementById('modalPrompt');
  const btnCopyPrompt = document.getElementById('btnCopyPrompt');
  const modalTags = document.getElementById('modalTags');

  // Newsletter
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const newsletterFeedback = document.getElementById('newsletterFeedback');

  let activeCategory = 'Барлығы';
  let searchQuery = '';

  // Calculate dynamic category counts
  function getCategoryCounts() {
    const counts = { 'Барлығы': WNK_RESOURCES.length };
    WNK_RESOURCES.forEach(item => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }

  // Render Filter Buttons
  function renderFilterButtons() {
    const counts = getCategoryCounts();
    const categories = [
      'Барлығы',
      'Жүйелер мен Агенттер',
      'Баптау нұсқаулықтары',
      'Плейбуктар',
      'Промпттар',
      'Видео және Монтаж',
      'Визуал мен Карусель'
    ];

    filterRow.innerHTML = '';
    categories.forEach(cat => {
      const count = counts[cat] || 0;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `filter-chip ${cat === activeCategory ? 'is-active' : ''}`;
      btn.setAttribute('data-category', cat);
      btn.innerHTML = `
        <span>${cat}</span>
        <span class="filter-count">${count}</span>
      `;
      btn.addEventListener('click', () => {
        activeCategory = cat;
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('is-active'));
        btn.classList.add('is-active');
        filterAndRender();
      });
      filterRow.appendChild(btn);
    });
  }

  // Filter and Render Cards
  function filterAndRender() {
    const q = searchQuery.toLowerCase().trim();

    const filtered = WNK_RESOURCES.filter(item => {
      const matchesCat = (activeCategory === 'Барлығы') || (item.category === activeCategory);
      const matchesQuery = !q || 
        item.title.toLowerCase().includes(q) || 
        item.excerpt.toLowerCase().includes(q) || 
        item.tags.some(t => t.toLowerCase().includes(q));

      return matchesCat && matchesQuery;
    });

    // Update Result count
    resultCount.textContent = `${filtered.length} ресурс табылды`;

    if (filtered.length === 0) {
      resourcesGrid.innerHTML = '';
      emptyState.classList.add('is-visible');
      return;
    }

    emptyState.classList.remove('is-visible');
    resourcesGrid.innerHTML = filtered.map(item => `
      <article class="resource-card" data-id="${item.id}" tabindex="0" role="button" aria-label="${escapeHtml(item.title)}">
        <div class="card-meta">
          <span class="card-category">${escapeHtml(item.category)}</span>
          <span class="card-readtime">${item.readTime}</span>
        </div>
        <h3 class="card-title">${escapeHtml(item.title)}</h3>
        <p class="card-body">${escapeHtml(item.excerpt)}</p>
        <div class="card-tags">
          ${item.tags.map(tag => `<span class="card-tag">#${escapeHtml(tag)}</span>`).join('')}
        </div>
        <div class="card-footer">
          <span class="card-date">${item.date}</span>
          <span class="card-arrow">
            Нұсқаулықты оқу 
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M4 12L12 4M12 4H6M12 4V10"/>
            </svg>
          </span>
        </div>
      </article>
    `).join('');

    // Attach card click handlers
    document.querySelectorAll('.resource-card').forEach(card => {
      const id = parseInt(card.getAttribute('data-id'), 10);
      card.addEventListener('click', () => openModal(id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(id);
        }
      });
    });
  }

  // Open Modal Reader
  function openModal(id) {
    const item = WNK_RESOURCES.find(i => i.id === id);
    if (!item) return;

    modalCategory.textContent = item.category;
    modalReadTime.textContent = item.readTime;
    modalTitle.textContent = item.title;
    modalLead.textContent = item.desc || item.excerpt;

    const modalReqs = document.getElementById('modalReqs');
    if (modalReqs) modalReqs.textContent = item.reqs || 'Claude Code / Python';

    const modalInstall = document.getElementById('modalInstall');
    if (modalInstall) modalInstall.textContent = item.install_cmd || 'git clone https://github.com/artishertekuly-bit/wnk-education.git';

    const modalExec = document.getElementById('modalExec');
    if (modalExec) modalExec.textContent = item.exec_cmd || `/run ${item.slug}`;

    modalPrompt.textContent = item.prompt_spec || item.prompt;

    modalTags.innerHTML = item.tags.map(tag => `<span class="card-tag">#${escapeHtml(tag)}</span>`).join('');

    // Dynamic Graphic Architecture & Visual Illustration
    const modalDiagramContainer = document.getElementById('modalDiagramContainer');
    if (modalDiagramContainer) {
      modalDiagramContainer.innerHTML = generateModalDiagram(item);
    }

    const modalRepoLink = document.getElementById('modalRepoLink');
    const modalRepoLabel = document.getElementById('modalRepoLabel');
    if (modalRepoLink && modalRepoLabel) {
      if (item.category === 'Видео және Монтаж' || item.tags.includes('Video')) {
        modalRepoLink.href = 'https://github.com/artishertekuly-bit/claude-animation-skills';
        modalRepoLabel.textContent = 'Animation Skills репозиторийін ашу ↗';
      } else if (item.category === 'Промпттар' || item.tags.includes('Prompts')) {
        modalRepoLink.href = 'https://github.com/artishertekuly-bit/content-skills';
        modalRepoLabel.textContent = 'Content Skills репозиторийін ашу ↗';
      } else if (item.tags.includes('SMM') || item.category === 'Визуал мен Карусель') {
        modalRepoLink.href = 'https://github.com/artishertekuly-bit/claude-editing-skills';
        modalRepoLabel.textContent = 'Editing Skills репозиторийін ашу ↗';
      } else {
        modalRepoLink.href = 'https://github.com/artishertekuly-bit/wnk-education';
        modalRepoLabel.textContent = 'WNK Education кодын GitHub-та көру ↗';
      }
    }

    modalBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    modalCloseBtn.focus();
  }

  // Close Modal
  function closeModal() {
    modalBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  modalCloseBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  // Generic Copy Logic for all code blocks
  document.querySelectorAll('.btn-copy[data-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const el = document.getElementById(targetId);
      if (!el) return;
      const textToCopy = el.textContent;
      navigator.clipboard.writeText(textToCopy).then(() => {
        const origHtml = btn.innerHTML;
        btn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="2 9 6 13 14 3"/>
          </svg>
          Көшірілді!
        `;
        btn.style.backgroundColor = '#16a34a';
        btn.style.color = '#fff';
        btn.style.borderColor = '#16a34a';

        setTimeout(() => {
          btn.innerHTML = origHtml;
          btn.style.backgroundColor = '';
          btn.style.color = '';
          btn.style.borderColor = '';
        }, 2000);
      }).catch(err => {
        console.error('Copy failed:', err);
      });
    });
  });

  // Search input handler
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    filterAndRender();
  });

  // Reset filter button
  if (resetFilterBtn) {
    resetFilterBtn.addEventListener('click', () => {
      activeCategory = 'Барлығы';
      searchQuery = '';
      searchInput.value = '';
      renderFilterButtons();
      filterAndRender();
    });
  }

  // Keyboard navigation shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('is-open')) {
      closeModal();
    }
    // Search focus with / or Ctrl+K
    if ((e.key === '/' || (e.ctrlKey && e.key.toLowerCase() === 'k')) && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
  });

  // Newsletter Form Handler
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      if (!email || !email.includes('@')) return;

      newsletterFeedback.style.display = 'block';
      newsletterFeedback.textContent = `Рақмет! (${email}) WNK Education қауымдастығына сәтті қосылдыңыз.`;
      newsletterEmail.value = '';

      setTimeout(() => {
        newsletterFeedback.style.display = 'none';
      }, 5000);
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Dynamic Architecture & Graphic Illustration Generator
  function generateModalDiagram(item) {
    const isVideo = item.category === 'Видео және Монтаж' || (item.tags && item.tags.includes('Video')) || (item.slug && (item.slug.includes('animation') || item.slug.includes('reels')));
    const isWriting = item.category === 'Промпттар' || item.category === 'Плейбуктар' || (item.tags && item.tags.includes('Prompts')) || (item.slug && (item.slug.includes('humanizer') || item.slug.includes('anti-ai'))) || item.title.toLowerCase().includes('мәтін');
    const isMap = (item.slug && item.slug.includes('map')) || item.title.toLowerCase().includes('карта') || (item.tags && item.tags.includes('Map'));
    const isSystem = item.category === 'Жүйелер мен Агенттер' || (item.slug && (item.slug.includes('reddit') || item.slug.includes('agent') || item.slug.includes('system'))) || (item.tags && item.tags.includes('Claude'));

    if (isMap) {
      return `
        <div class="guide-diagram-box">
          <div class="diagram-header">
            <span>FIG 03.1 // 3D MAP & ROUTE ENGINE</span>
            <span>COORDS: 43.238942, 76.889709</span>
          </div>
          <div class="diagram-canvas">
            <svg width="100%" height="150" viewBox="0 0 500 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="routeGrad" x1="50" y1="110" x2="450" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#1f5bff"/>
                  <stop offset="1" stop-color="#e11d48"/>
                </linearGradient>
              </defs>
              <path d="M40 130L120 70H380L460 130H40Z" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
              <line x1="80" y1="130" x2="160" y2="70" stroke="#e2e8f0" stroke-dasharray="2 2"/>
              <line x1="200" y1="130" x2="250" y2="70" stroke="#e2e8f0" stroke-dasharray="2 2"/>
              <line x1="320" y1="130" x2="340" y2="70" stroke="#e2e8f0" stroke-dasharray="2 2"/>
              <line x1="400" y1="130" x2="410" y2="70" stroke="#e2e8f0" stroke-dasharray="2 2"/>
              <path d="M90 115 C170 115, 200 45, 280 60 C330 70, 370 30, 420 35" stroke="url(#routeGrad)" stroke-width="3" stroke-linecap="round" stroke-dasharray="6 4"/>
              <circle cx="90" cy="115" r="5" fill="#1f5bff"/>
              <circle cx="90" cy="115" r="10" stroke="#1f5bff" stroke-opacity="0.3" stroke-width="2"/>
              <text x="90" y="138" font-family="Space Grotesk, sans-serif" font-size="11" font-weight="700" fill="#1b1a15" text-anchor="middle">БАСТАУ (АЛМАТЫ)</text>
              <circle cx="280" cy="60" r="3.5" fill="#1f5bff"/>
              <text x="280" y="48" font-family="JetBrains Mono, monospace" font-size="10" fill="#64748b" text-anchor="middle">ALT: 1200m</text>
              <circle cx="420" cy="35" r="6" fill="#e11d48"/>
              <circle cx="420" cy="35" r="12" stroke="#e11d48" stroke-opacity="0.3" stroke-width="2"/>
              <text x="420" y="20" font-family="Space Grotesk, sans-serif" font-size="11" font-weight="700" fill="#e11d48" text-anchor="middle">МӘРЕ (АСТАНА)</text>
            </svg>
          </div>
          <div class="diagram-caption">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="7" fill-opacity="0.2"/></svg>
            <span><code>/map-route</code> — Exif метадеректерінен 3D анимациялық саяхат траекториясын генерациялау сызбасы.</span>
          </div>
        </div>
      `;
    }

    if (isWriting) {
      return `
        <div class="guide-diagram-box">
          <div class="diagram-header">
            <span>FIG 02.1 // ANTI-AI WRITING & HUMANIZER SPEC</span>
            <span>FILTER: ZERO-CLICHE</span>
          </div>
          <div class="comparison-grid">
            <div class="comparison-card comparison-bad">
              <div style="font-weight:700; font-size:0.75rem; text-transform:uppercase; margin-bottom:0.4rem; display:flex; align-items:center; gap:0.35rem;">
                <span>❌ ЖАСАНДЫ AI КЛИШЕСІ (GPT-4 DEFAULT)</span>
              </div>
              «Қазіргі қарқынды дамып келе жатқан цифрлық дәуірде жасанды интеллект маңызды рөл атқарады. Бұл тек жай ғана құрал емес, адам өмірін жаңа деңгейге көтеретін ғажап мүмкіндік...»
            </div>
            <div class="comparison-card comparison-good">
              <div style="font-weight:700; font-size:0.75rem; text-transform:uppercase; margin-bottom:0.4rem; display:flex; align-items:center; gap:0.35rem;">
                <span>✅ WNK ТІРІ ТІЛІ (CLAUDE CODE SPEC)</span>
              </div>
              «Камера мен түсірілімсіз 3 минутта вирус болатын Reels құрастырамыз. Терминалды ашып, мына команданы жазыңыз: <code>/reels-edit</code>.»
            </div>
          </div>
          <div class="diagram-caption">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="7" fill-opacity="0.2"/></svg>
            <span><code>/humanizer</code> — су тамызу мен ресми жасандылықты жойып, мәтінді тірі авторлық сөйлеу мәнеріне келтіру.</span>
          </div>
        </div>
      `;
    }

    if (isVideo) {
      return `
        <div class="guide-diagram-box">
          <div class="diagram-header">
            <span>FIG 01.1 // REMOTION & TIMELINE SCHEMATIC (9:16)</span>
            <span>FPS: 30 · RESOLUTION: 1080×1920</span>
          </div>
          <div class="diagram-canvas">
            <svg width="100%" height="150" viewBox="0 0 500 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="20" width="460" height="26" rx="4" fill="#f8fafc" stroke="#e2e8f0"/>
              <text x="35" y="37" font-family="JetBrains Mono, monospace" font-size="10" fill="#64748b">00:00 [HOOK]</text>
              <line x1="140" y1="20" x2="140" y2="46" stroke="#cbd5e1" stroke-width="1.5"/>
              <text x="155" y="37" font-family="JetBrains Mono, monospace" font-size="10" fill="#1f5bff" font-weight="600">00:04 [KINETIC SUB]</text>
              <line x1="290" y1="20" x2="290" y2="46" stroke="#cbd5e1" stroke-width="1.5"/>
              <text x="305" y="37" font-family="JetBrains Mono, monospace" font-size="10" fill="#64748b">00:15 [DYNAMIC CHART]</text>
              <line x1="410" y1="20" x2="410" y2="46" stroke="#cbd5e1" stroke-width="1.5"/>
              <text x="420" y="37" font-family="JetBrains Mono, monospace" font-size="9" fill="#e11d48" font-weight="600">00:28 OUTRO</text>

              <rect x="20" y="56" width="460" height="24" rx="4" fill="#eef1ff" stroke="#c7d2fe"/>
              <text x="35" y="72" font-family="Space Grotesk, sans-serif" font-size="10" font-weight="600" fill="#1f5bff">TRACK 1: 9:16 SAFE-AREA MOTION GRAPHICS & SVG RENDER</text>

              <rect x="20" y="90" width="460" height="34" rx="4" fill="#faf9f3" stroke="#e2e8f0"/>
              <path d="M35 107 L45 98 L55 116 L65 102 L75 112 L85 96 L95 118 L105 104 L115 114 L125 99 L135 111 L145 103 L155 115 L165 97 L175 117 L185 101 L195 113 L205 95 L215 119 L225 102 L235 112 L245 98 L255 116 L265 103 L275 113 L285 97 L295 117 L305 101 L315 115 L325 96 L335 118 L345 104 L355 112 L365 99 L375 115 L385 103 L395 113 L405 97 L415 117 L425 100 L435 114 L445 98 L455 112 L465 107" stroke="#1b1a15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <line x1="140" y1="88" x2="140" y2="126" stroke="#e11d48" stroke-width="2"/>
              <circle cx="140" cy="88" r="3" fill="#e11d48"/>
              <line x1="290" y1="88" x2="290" y2="126" stroke="#1f5bff" stroke-width="2"/>
              <circle cx="290" cy="88" r="3" fill="#1f5bff"/>
              <line x1="410" y1="88" x2="410" y2="126" stroke="#e11d48" stroke-width="2"/>
              <circle cx="410" cy="88" r="3" fill="#e11d48"/>
            </svg>
          </div>
          <div class="diagram-caption">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="7" fill-opacity="0.2"/></svg>
            <span><code>/reels-edit</code> — дауысты автоматты тану, паузаларды кесу және дыбыс толқынына синхронды субтитр қою схемасы.</span>
          </div>
        </div>
      `;
    }

    if (isSystem) {
      return `
        <div class="guide-diagram-box">
          <div class="diagram-header">
            <span>FIG 04.1 // EXPLODED SYSTEM ARCHITECTURE</span>
            <span>STATUS: 200 OK · LATENCY: 14ms</span>
          </div>
          <div class="diagram-canvas">
            <svg width="100%" height="150" viewBox="0 0 500 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="70" y="15" width="360" height="24" rx="4" fill="#faf9f3" stroke="#1b1a15" stroke-width="1.5"/>
              <text x="85" y="31" font-family="Space Grotesk, sans-serif" font-size="11" font-weight="700" fill="#1b1a15">L4 // PRODUCTION ARTIFACT (Edge / MP4 / Markdown / Vercel)</text>
              <line x1="250" y1="39" x2="250" y2="50" stroke="#1b1a15" stroke-dasharray="2 2"/>

              <rect x="70" y="50" width="360" height="24" rx="4" fill="#eef1ff" stroke="#1f5bff" stroke-width="1.5"/>
              <text x="85" y="66" font-family="Space Grotesk, sans-serif" font-size="11" font-weight="700" fill="#1f5bff">L3 // SUBAGENT RUNTIME (Tool Calling & Sandbox Isolation)</text>
              <line x1="250" y1="74" x2="250" y2="85" stroke="#1f5bff" stroke-dasharray="2 2"/>

              <rect x="70" y="85" width="360" height="24" rx="4" fill="#f8fafc" stroke="#64748b" stroke-width="1.2"/>
              <text x="85" y="101" font-family="Space Grotesk, sans-serif" font-size="11" font-weight="600" fill="#475569">L2 // CONSTRAINTS & SKILLS ENGINE (WNK Prompts & Rules)</text>
              <line x1="250" y1="109" x2="250" y2="120" stroke="#64748b" stroke-dasharray="2 2"/>

              <rect x="70" y="120" width="360" height="22" rx="4" fill="#1b1a15"/>
              <text x="85" y="135" font-family="JetBrains Mono, monospace" font-size="10" font-weight="600" fill="#faf9f3">L1 // TERMINAL INPUT: /bro --task "Execute Autonomous Flow"</text>
            </svg>
          </div>
          <div class="diagram-caption">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="7" fill-opacity="0.2"/></svg>
            <span><code>/breakdown</code> — Claude Code мен Antigravity агенттік ортасының 4-деңгейлі бөлшектелген архитектурасы.</span>
          </div>
        </div>
      `;
    }

    // Default: Bezier Graph
    return `
      <div class="guide-diagram-box">
        <div class="diagram-header">
          <span>FIG 05.1 // METRIC & GROWTH TRAJECTORY</span>
          <span>BENCHMARK: +380% VIRAL RETENTION</span>
        </div>
        <div class="diagram-canvas">
          <svg width="100%" height="150" viewBox="0 0 500 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="metricArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#1f5bff" stop-opacity="0.2"/>
                <stop offset="100%" stop-color="#1f5bff" stop-opacity="0.0"/>
              </linearGradient>
            </defs>
            <line x1="30" y1="20" x2="470" y2="20" stroke="#f1f5f9"/>
            <line x1="30" y1="60" x2="470" y2="60" stroke="#f1f5f9"/>
            <line x1="30" y1="100" x2="470" y2="100" stroke="#f1f5f9"/>
            <line x1="30" y1="130" x2="470" y2="130" stroke="#cbd5e1" stroke-width="1.5"/>
            <path d="M40 125 C120 120, 180 95, 260 70 C340 45, 410 30, 460 25 L460 130 L40 130 Z" fill="url(#metricArea)"/>
            <path d="M40 125 C120 120, 180 95, 260 70 C340 45, 410 30, 460 25" stroke="#1f5bff" stroke-width="3" stroke-linecap="round"/>
            <circle cx="40" cy="125" r="4" fill="#1b1a15"/>
            <text x="40" y="145" font-family="JetBrains Mono, monospace" font-size="9" fill="#64748b" text-anchor="middle">0s Hook</text>
            <circle cx="260" cy="70" r="4.5" fill="#1f5bff"/>
            <text x="260" y="58" font-family="Space Grotesk, sans-serif" font-size="10" font-weight="700" fill="#1f5bff" text-anchor="middle">+145% Retention</text>
            <text x="260" y="145" font-family="JetBrains Mono, monospace" font-size="9" fill="#64748b" text-anchor="middle">15s Value</text>
            <circle cx="460" cy="25" r="5" fill="#16a34a"/>
            <text x="460" y="16" font-family="Space Grotesk, sans-serif" font-size="10" font-weight="700" fill="#16a34a" text-anchor="end">380% Outro Conversion</text>
            <text x="460" y="145" font-family="JetBrains Mono, monospace" font-size="9" fill="#64748b" text-anchor="middle">30s CTA</text>
          </svg>
        </div>
        <div class="diagram-caption">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="7" fill-opacity="0.2"/></svg>
          <span><code>/graph</code> — көрерменді алғашқы 3 секундтан ұстап қалу және сақталу көрсеткішін 3.8 есе өсіру сызбасы.</span>
        </div>
      </div>
    `;
  }

  // Interactive Hero Visual Tile click routing
  document.querySelectorAll('.visual-tile').forEach(tile => {
    tile.addEventListener('click', (e) => {
      e.preventDefault();
      const cmd = tile.getAttribute('data-command');
      if (cmd === '/graph') {
        searchInput.value = 'graph';
      } else if (cmd === '/map-route') {
        searchInput.value = 'карта';
      } else if (cmd === '/breakdown') {
        searchInput.value = 'жүйе';
      } else if (cmd === '/anti-ai') {
        searchInput.value = 'anti-ai';
      } else if (cmd === '/reels-edit') {
        searchInput.value = 'reels';
      }
      searchQuery = searchInput.value;
      filterAndRender();
      const target = document.getElementById('resources');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Initialize
  renderFilterButtons();
  filterAndRender();
});
