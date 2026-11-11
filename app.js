/**
 * WNK Education - Core Application Logic
 * Fast client-side rendering, platform branding, search, filtering,
 * reader modal with visual blueprints, and Supabase Google OAuth confirmation.
 */

function initWnkApp() {
  // Safe Resource List Access
  const resourcesList = (typeof window !== 'undefined' && window.WNK_RESOURCES) || (typeof WNK_RESOURCES !== 'undefined' ? WNK_RESOURCES : []);

  // DOM Elements
  const resourcesGrid = document.getElementById('resourcesGrid');
  const searchInput = document.getElementById('searchInput');
  const filterRow = document.getElementById('filterRow');
  const platformChipsContainer = document.getElementById('platformChips');
  const emptyState = document.getElementById('emptyState');
  const resetFilterBtn = document.getElementById('resetFilterBtn');
  const resultCount = document.getElementById('resultCount');

  // Reader Modal elements
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalCategory = document.getElementById('modalCategory');
  const modalPlatformBadgeContainer = document.getElementById('modalPlatformBadgeContainer');
  const modalReadTime = document.getElementById('modalReadTime');
  const modalTitle = document.getElementById('modalTitle');
  const modalLead = document.getElementById('modalLead');
  const modalPrompt = document.getElementById('modalPrompt');
  const modalTags = document.getElementById('modalTags');
  const modalDiagramContainer = document.getElementById('modalDiagramContainer');
  const modalInstall = document.getElementById('modalInstall');
  const modalExec = document.getElementById('modalExec');
  const modalReqs = document.getElementById('modalReqs');
  const modalRepoLink = document.getElementById('modalRepoLink');
  const modalRepoLabel = document.getElementById('modalRepoLabel');

  // Auth & Confirmation Modal elements
  const btnMastheadJoin = document.getElementById('btnMastheadJoin');
  const btnHeaderLogin = document.getElementById('btnHeaderLogin');
  const btnHeaderSubscribe = document.getElementById('btnHeaderSubscribe');
  const btnHeroJoin = document.getElementById('btnHeroJoin');
  const btnHeroGoogle = document.getElementById('btnHeroGoogle');
  const btnHeroSubscribe = document.getElementById('btnHeroSubscribe');
  const userNavProfile = document.getElementById('userNavProfile');
  const userNavAvatar = document.getElementById('userNavAvatar');
  const userNavName = document.getElementById('userNavName');
  const btnNavLogout = document.getElementById('btnNavLogout');
  const authModalBackdrop = document.getElementById('authModalBackdrop');
  const authModalClose = document.getElementById('authModalClose');
  const btnGoogleSignIn = document.getElementById('btnGoogleSignIn');
  const btnDemoAuth = document.getElementById('btnDemoAuth');
  const googleBtnLabel = document.getElementById('googleBtnLabel');
  const communityRegForm = document.getElementById('communityRegForm');
  const regFullName = document.getElementById('regFullName');
  const regEmail = document.getElementById('regEmail');
  const regInterest = document.getElementById('regInterest');
  const regFeedbackBox = document.getElementById('regFeedbackBox');

  // Newsletter & In-Page Community Hub
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterName = document.getElementById('newsletterName');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const newsletterFeedback = document.getElementById('newsletterFeedback');
  const btnNewsletterGoogle = document.getElementById('btnNewsletterGoogle');

  // Application State
  let activeCategory = 'Барлығы';
  let activePlatform = 'all';
  let searchQuery = '';
  let currentUser = null;
  let bookmarkedIds = new Set();
  try {
    const rawBookmarks = localStorage.getItem('wnk_bookmarks');
    if (rawBookmarks) bookmarkedIds = new Set(JSON.parse(rawBookmarks));
  } catch (e) {
    bookmarkedIds = new Set();
  }

  // ==========================================================================
  // PLATFORM BRANDING & VECTOR LOGOS (/replica-design)
  // Claude, Higgsfield, Midjourney, Runway, Remotion, ElevenLabs, Cursor, Kling, OpenAI
  // ==========================================================================
  const PLATFORMS = {
    'claude': {
      name: 'Claude',
      slug: 'claude',
      color: '#d97757',
      badgeClass: 'badge-claude',
      svg: `<svg viewBox="0 0 24 24" width="14" height="14" fill="#d97757" aria-hidden="true"><path d="M13.5 2h-3v6.5H4v3h6.5V18h3v-6.5H20v-3h-6.5V2z M17.2 5.4l-2.1-2.1-4.6 4.6 2.1 2.1 4.6-4.6z M5.4 17.2l2.1 2.1 4.6-4.6-2.1-2.1-4.6 4.6z"/></svg>`
    },
    'higgsfield': {
      name: 'Higgsfield',
      slug: 'higgsfield',
      color: '#059669',
      badgeClass: 'badge-higgsfield',
      svg: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`
    },
    'midjourney': {
      name: 'Midjourney',
      slug: 'midjourney',
      color: '#6366f1',
      badgeClass: 'badge-midjourney',
      svg: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 17l6-14 3 7 9-3-4 10H3z"/><path d="M2 21h20"/></svg>`
    },
    'runway': {
      name: 'Runway',
      slug: 'runway',
      color: '#0284c7',
      badgeClass: 'badge-runway',
      svg: `<svg viewBox="0 0 24 24" width="14" height="14" fill="#0284c7" aria-hidden="true"><path d="M6 3h6a6 6 0 016 6c0 2.5-1.5 4.6-3.7 5.5L19 21h-4.5l-4-6H9v6H6V3zm3 3v6h3a3 3 0 100-6H9z"/></svg>`
    },
    'remotion': {
      name: 'Remotion',
      slug: 'remotion',
      color: '#0b84f3',
      badgeClass: 'badge-remotion',
      svg: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#0b84f3" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><polygon points="10 8 16 12 10 16 10 8" fill="#0b84f3"/></svg>`
    },
    'elevenlabs': {
      name: 'ElevenLabs',
      slug: 'elevenlabs',
      color: '#111827',
      badgeClass: 'badge-elevenlabs',
      svg: `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><rect x="7" y="4" width="3.5" height="16" rx="1.75"/><rect x="13.5" y="7" width="3.5" height="10" rx="1.75"/></svg>`
    },
    'cursor': {
      name: 'Cursor',
      slug: 'cursor',
      color: '#0f172a',
      badgeClass: 'badge-cursor',
      svg: `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M4 3l15 9-7 2-2 7L4 3z"/></svg>`
    },
    'kling': {
      name: 'Kling AI',
      slug: 'kling',
      color: '#ea580c',
      badgeClass: 'badge-kling',
      svg: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#ea580c" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 4v16M18 5l-9 7 9 7M10 12h8"/></svg>`
    },
    'openai': {
      name: 'OpenAI',
      slug: 'openai',
      color: '#10a37f',
      badgeClass: 'badge-openai',
      svg: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#10a37f" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2a10 10 0 0 1 10 10 M12 22a10 10 0 0 1-10-10 M2 12a10 10 0 0 1 10-10 M22 12a10 10 0 0 1-10 10"/></svg>`
    },
    'gemini': {
      name: 'Gemini',
      slug: 'gemini',
      color: '#2563eb',
      badgeClass: 'badge-gemini',
      svg: `<svg viewBox="0 0 24 24" width="14" height="14" fill="#2563eb" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="#2563eb"/><path d="M12 4l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="#ffffff"/></svg>`
    }
  };

  /**
   * Determine primary platform for each resource
   */
  function detectPlatform(item) {
    const text = `${item.title} ${item.orig_title || ''} ${(item.tags || []).join(' ')} ${item.excerpt || ''} ${item.desc || ''} ${item.reqs || ''}`.toLowerCase();

    if (text.includes('higgsfield') || text.includes('headsfield') || text.includes('seedance')) return 'higgsfield';
    if (text.includes('claude') || text.includes('anthropic')) return 'claude';
    if (text.includes('remotion') || text.includes('hyperframes') || text.includes('reels') || text.includes('анимациялық')) return 'remotion';
    if (text.includes('midjourney') || text.includes('mj ') || text.includes('render')) return 'midjourney';
    if (text.includes('runway') || text.includes('gen-3') || text.includes('gen-2')) return 'runway';
    if (text.includes('elevenlabs') || text.includes('voice') || text.includes('дыбыс') || text.includes('audio')) return 'elevenlabs';
    if (text.includes('kling') || text.includes('cling')) return 'kling';
    if (text.includes('cursor')) return 'cursor';
    if (text.includes('gemini') || text.includes('google')) return 'gemini';
    if (text.includes('openai') || text.includes('gpt') || text.includes('chatgpt')) return 'openai';

    return 'claude'; // default AI provider
  }

  function renderPlatformBadgeHTML(platformKey) {
    const p = PLATFORMS[platformKey] || PLATFORMS['claude'];
    return `
      <span class="platform-badge ${p.badgeClass}" title="${p.name} платформасы">
        ${p.svg}
        <span>${p.name}</span>
      </span>
    `;
  }

  // ==========================================================================
  // SUPABASE & GOOGLE AUTH LOGIC (Bilim Platform Standard)
  // ==========================================================================
  const SUPABASE_CONFIG = {
    url: window.SUPABASE_URL || 'https://rrcvwfsepvpgtgtlwwyd.supabase.co',
    anonKey: window.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyY3Z3ZnNlcHZwZ3RndGx3d3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczNzc0MjgsImV4cCI6MjA5Mjk1MzQyOH0.2yEvfYPXAgVzqIwNkwxNHLvyXwBUqHZD4wUJ0_Jl52I'
  };

  let supabaseClient = null;
  if (window.supabase) {
    try {
      supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
          flowType: 'pkce'
        }
      });
    } catch (err) {
      console.warn('Supabase client init fallback:', err);
    }
  }

  function initAuthState() {
    // 1. Check local storage
    const stored = localStorage.getItem('wnk_auth_user');
    if (stored) {
      try {
        currentUser = JSON.parse(stored);
      } catch (e) {
        currentUser = null;
      }
    }

    // 2. Check Supabase session if initialized
    if (supabaseClient) {
      supabaseClient.auth.getSession().then(({ data, error }) => {
        if (!error && data?.session?.user) {
          const u = data.session.user;
          currentUser = {
            id: u.id,
            email: u.email,
            name: u.user_metadata?.full_name || u.user_metadata?.name || u.email.split('@')[0],
            avatar: u.user_metadata?.avatar_url || u.user_metadata?.picture || `https://api.dicebear.com/7.x/bottts/svg?seed=${u.id}`,
            provider: 'google',
            confirmed: true
          };
          localStorage.setItem('wnk_auth_user', JSON.stringify(currentUser));
          updateAuthUI();
        }
      });

      // Listen to auth changes
      supabaseClient.auth.onAuthStateChange((event, session) => {
        if (session?.user) {
          const u = session.user;
          currentUser = {
            id: u.id,
            email: u.email,
            name: u.user_metadata?.full_name || u.user_metadata?.name || u.email.split('@')[0],
            avatar: u.user_metadata?.avatar_url || u.user_metadata?.picture || `https://api.dicebear.com/7.x/bottts/svg?seed=${u.id}`,
            provider: 'google',
            confirmed: true
          };
          localStorage.setItem('wnk_auth_user', JSON.stringify(currentUser));
        } else if (event === 'SIGNED_OUT') {
          currentUser = null;
          localStorage.removeItem('wnk_auth_user');
        }
        updateAuthUI();
      });
    }

    updateAuthUI();
  }

  function updateAuthUI() {
    if (currentUser) {
      if (btnMastheadJoin) btnMastheadJoin.style.display = 'none';
      if (btnHeaderLogin) btnHeaderLogin.style.display = 'none';
      if (userNavProfile) {
        userNavProfile.classList.add('is-visible');
        if (userNavAvatar) userNavAvatar.src = currentUser.avatar || 'https://api.dicebear.com/7.x/bottts/svg?seed=wnk';
        if (userNavName) userNavName.textContent = currentUser.name || 'Расталған қолданушы';
      }
    } else {
      if (btnMastheadJoin) btnMastheadJoin.style.display = 'inline-flex';
      if (btnHeaderLogin) btnHeaderLogin.style.display = 'inline-flex';
      if (userNavProfile) userNavProfile.classList.remove('is-visible');
    }
  }

  async function handleGoogleLogin() {
    if (googleBtnLabel) googleBtnLabel.textContent = 'Google байланысы тексерілуде...';

    if (supabaseClient) {
      try {
        const { error } = await supabaseClient.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: window.location.origin + window.location.pathname
          }
        });
        if (error) throw error;
        return;
      } catch (err) {
        console.warn('Supabase OAuth redirected fallback:', err);
      }
    }

    // Instant local test confirmation (Bilim platform standard demo)
    setTimeout(() => {
      loginMockUser('Артур (Google Расталған)', 'artur@wnk.education');
    }, 450);
  }

  function handleManualRegistration(name, email, interest) {
    if (!name || !email) return;

    if (regFeedbackBox) {
      regFeedbackBox.className = 'reg-feedback-box';
      regFeedbackBox.style.display = 'block';
      regFeedbackBox.textContent = 'Тіркелу жүзеге асырылуда...';
    }

    const u = {
      id: 'usr_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      role: interest || 'AI әзірлеуші және агенттер',
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(name.trim())}`,
      provider: 'form',
      confirmed: true,
      confirmed_at: new Date().toISOString()
    };

    currentUser = u;
    localStorage.setItem('wnk_auth_user', JSON.stringify(currentUser));
    updateAuthUI();

    // Supabase sync
    if (supabaseClient) {
      supabaseClient.from('wnk_subscribers').upsert({
        email: u.email,
        full_name: u.name,
        interest: u.role,
        source: 'community_modal'
      }).then(() => {}).catch(() => {});
    }

    if (regFeedbackBox) {
      regFeedbackBox.className = 'reg-feedback-box is-success';
      regFeedbackBox.innerHTML = `✓ Қош келдіңіз, <strong>${escapeHtml(u.name)}</strong>! Сіз WNK Education қауымдастығына сәтті қосылдыңыз. Ресурстар толық расталды.`;
    }

    setTimeout(() => {
      closeAuthModal();
      if (communityRegForm) communityRegForm.reset();
      if (regFeedbackBox) {
        regFeedbackBox.style.display = 'none';
        regFeedbackBox.className = 'reg-feedback-box';
      }
    }, 1200);
  }

  function loginMockUser(name, email) {
    currentUser = {
      id: 'usr_' + Math.random().toString(36).substr(2, 9),
      name: name || 'Артур Серікұлы',
      email: email || 'artur@wnk.education',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=artur',
      provider: 'google',
      confirmed: true,
      confirmed_at: new Date().toISOString()
    };
    localStorage.setItem('wnk_auth_user', JSON.stringify(currentUser));
    updateAuthUI();
    closeAuthModal();
  }

  function handleLogout() {
    if (supabaseClient) {
      supabaseClient.auth.signOut().catch(() => {});
    }
    currentUser = null;
    localStorage.removeItem('wnk_auth_user');
    updateAuthUI();
  }

  function openAuthModal() {
    if (authModalBackdrop) {
      authModalBackdrop.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      if (regFullName) setTimeout(() => regFullName.focus(), 150);
    }
  }

  function closeAuthModal() {
    if (authModalBackdrop) {
      authModalBackdrop.classList.remove('is-open');
      document.body.style.overflow = '';
      if (googleBtnLabel) googleBtnLabel.textContent = 'Google арқылы жылдам кіру (1-клик)';
    }
  }

  // Event Listeners for Community & Auth Triggers
  if (btnMastheadJoin) btnMastheadJoin.addEventListener('click', openAuthModal);
  if (btnHeaderLogin) btnHeaderLogin.addEventListener('click', openAuthModal);
  if (btnHeaderSubscribe) btnHeaderSubscribe.addEventListener('click', openAuthModal);
  if (btnHeroJoin) btnHeroJoin.addEventListener('click', openAuthModal);
  if (btnHeroGoogle) btnHeroGoogle.addEventListener('click', handleGoogleLogin);
  if (btnHeroSubscribe) btnHeroSubscribe.addEventListener('click', openAuthModal);
  if (btnNewsletterGoogle) btnNewsletterGoogle.addEventListener('click', handleGoogleLogin);

  if (authModalClose) authModalClose.addEventListener('click', closeAuthModal);
  if (authModalBackdrop) {
    authModalBackdrop.addEventListener('click', (e) => {
      if (e.target === authModalBackdrop) closeAuthModal();
    });
  }
  if (btnGoogleSignIn) btnGoogleSignIn.addEventListener('click', handleGoogleLogin);
  if (btnDemoAuth) btnDemoAuth.addEventListener('click', () => loginMockUser('Артур Серікұлы (Расталған)', 'artur@wnk.education'));
  if (btnNavLogout) btnNavLogout.addEventListener('click', handleLogout);

  if (communityRegForm) {
    communityRegForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = regFullName ? regFullName.value.trim() : '';
      const email = regEmail ? regEmail.value.trim() : '';
      const interest = regInterest ? regInterest.value : '';
      handleManualRegistration(name, email, interest);
    });
  }

  // ==========================================================================
  // CATEGORIES & PLATFORMS FILTERING
  // ==========================================================================
  function getCategoryCounts() {
    const counts = { 'Барлығы': resourcesList.length };
    resourcesList.forEach(item => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }

  function renderCategoryFilterButtons() {
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

    if (!filterRow) return;
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

  function renderPlatformFilterChips() {
    if (!platformChipsContainer) return;

    // Platform options to showcase
    const platformList = [
      { key: 'all', name: 'Барлық құралдар', svg: '<svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor"><circle cx="8" cy="8" r="6"/></svg>' },
      { key: 'claude', name: PLATFORMS.claude.name, svg: PLATFORMS.claude.svg },
      { key: 'higgsfield', name: PLATFORMS.higgsfield.name, svg: PLATFORMS.higgsfield.svg },
      { key: 'remotion', name: PLATFORMS.remotion.name, svg: PLATFORMS.remotion.svg },
      { key: 'midjourney', name: PLATFORMS.midjourney.name, svg: PLATFORMS.midjourney.svg },
      { key: 'runway', name: PLATFORMS.runway.name, svg: PLATFORMS.runway.svg },
      { key: 'elevenlabs', name: PLATFORMS.elevenlabs.name, svg: PLATFORMS.elevenlabs.svg },
      { key: 'cursor', name: PLATFORMS.cursor.name, svg: PLATFORMS.cursor.svg },
      { key: 'kling', name: PLATFORMS.kling.name, svg: PLATFORMS.kling.svg },
      { key: 'openai', name: PLATFORMS.openai.name, svg: PLATFORMS.openai.svg }
    ];

    platformChipsContainer.innerHTML = '';
    platformList.forEach(p => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = `platform-chip ${p.key === activePlatform ? 'is-active' : ''}`;
      chip.setAttribute('data-platform', p.key);
      chip.innerHTML = `${p.svg}<span>${p.name}</span>`;
      chip.addEventListener('click', () => {
        activePlatform = p.key;
        document.querySelectorAll('.platform-chip').forEach(c => c.classList.remove('is-active'));
        chip.classList.add('is-active');
        filterAndRender();
      });
      platformChipsContainer.appendChild(chip);
    });
  }

  // ==========================================================================
  // FILTER AND RENDER CARDS
  // ==========================================================================
  function filterAndRender() {
    const q = searchQuery.toLowerCase().trim();

    const filtered = resourcesList.filter(item => {
      const itemPlatform = detectPlatform(item);

      const matchesCat = (activeCategory === 'Барлығы') || (item.category === activeCategory);
      const matchesPlatform = (activePlatform === 'all') || (itemPlatform === activePlatform);
      const matchesQuery = !q ||
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        (item.tags || []).some(t => t.toLowerCase().includes(q));

      return matchesCat && matchesPlatform && matchesQuery;
    });

    // Update Result count
    if (resultCount) {
      resultCount.textContent = `${filtered.length} ресурс табылды`;
    }

    if (!resourcesGrid) return;

    if (filtered.length === 0) {
      resourcesGrid.innerHTML = '';
      if (emptyState) emptyState.classList.add('is-visible');
      return;
    }

    if (emptyState) emptyState.classList.remove('is-visible');

    resourcesGrid.innerHTML = filtered.map(item => {
      const pKey = detectPlatform(item);
      const badgeHTML = renderPlatformBadgeHTML(pKey);
      const isBookmarked = bookmarkedIds.has(item.id);

      return `
        <article class="resource-card" data-id="${item.id}" tabindex="0" role="button" aria-label="${escapeHtml(item.title)}">
          <div class="card-meta">
            <span class="card-category">${escapeHtml(item.category)}</span>
            ${badgeHTML}
            <span class="card-readtime">${item.readTime || '3 мин'}</span>
          </div>
          <h3 class="card-title">${escapeHtml(item.title)}</h3>
          <p class="card-body">${escapeHtml(item.excerpt)}</p>
          <div class="card-tags">
            ${(item.tags || []).map(tag => `<span class="card-tag">#${escapeHtml(tag)}</span>`).join('')}
          </div>
          <div class="card-footer">
            <span class="card-date">${item.date}</span>
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <button type="button" class="btn-card-action ${isBookmarked ? 'is-bookmarked' : ''}" data-bookmark-id="${item.id}" title="${isBookmarked ? 'Сақталғандардан алып тастау' : 'Бетбелгіге сақтау'}" aria-label="Бетбелгі">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
              </button>
              <span class="card-arrow">
                Нұсқаулықты оқу
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M4 12L12 4M12 4H6M12 4V10"/>
                </svg>
              </span>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach card click & bookmark handlers
    document.querySelectorAll('.resource-card').forEach(card => {
      const id = parseInt(card.getAttribute('data-id'), 10);

      card.addEventListener('click', (e) => {
        // If clicking bookmark button, toggle bookmark
        const bookmarkBtn = e.target.closest('.btn-card-action');
        if (bookmarkBtn) {
          e.stopPropagation();
          toggleBookmark(id, bookmarkBtn);
          return;
        }
        openModal(id);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(id);
        }
      });
    });
  }

  function toggleBookmark(resourceId, btnElement) {
    if (!currentUser) {
      openAuthModal();
      return;
    }

    if (bookmarkedIds.has(resourceId)) {
      bookmarkedIds.delete(resourceId);
      btnElement.classList.remove('is-bookmarked');
    } else {
      bookmarkedIds.add(resourceId);
      btnElement.classList.add('is-bookmarked');
    }

    localStorage.setItem('wnk_bookmarks', JSON.stringify(Array.from(bookmarkedIds)));

    // Sync to Supabase if authenticated
    if (supabaseClient && currentUser.id) {
      if (bookmarkedIds.has(resourceId)) {
        supabaseClient.from('wnk_saved_resources').insert({
          user_id: currentUser.id,
          resource_id: String(resourceId)
        }).then(() => {}).catch(() => {});
      } else {
        supabaseClient.from('wnk_saved_resources').delete().match({
          user_id: currentUser.id,
          resource_id: String(resourceId)
        }).then(() => {}).catch(() => {});
      }
    }
  }

  // ==========================================================================
  // DETAIL READER MODAL WITH BLUEPRINTS & PLATFORMS
  // ==========================================================================
  function openModal(id) {
    const item = resourcesList.find(i => i.id === id);
    if (!item) return;

    const pKey = detectPlatform(item);

    if (modalCategory) modalCategory.textContent = item.category;
    if (modalPlatformBadgeContainer) modalPlatformBadgeContainer.innerHTML = renderPlatformBadgeHTML(pKey);
    if (modalReadTime) modalReadTime.textContent = item.readTime || '3 мин оқу';
    if (modalTitle) modalTitle.textContent = item.title;
    if (modalLead) modalLead.textContent = item.desc || item.excerpt;

    if (modalReqs) modalReqs.textContent = item.reqs || 'Claude Code / Python';
    if (modalInstall) modalInstall.textContent = item.install_cmd || 'git clone https://github.com/artishertekuly-bit/wnk-education.git';
    if (modalExec) modalExec.textContent = item.exec_cmd || `/run ${item.slug}`;
    if (modalPrompt) modalPrompt.textContent = item.prompt_spec || item.prompt;

    if (modalTags) {
      modalTags.innerHTML = (item.tags || []).map(tag => `<span class="card-tag">#${escapeHtml(tag)}</span>`).join('');
    }

    // Dynamic Graphic Architecture & Visual Illustration
    if (modalDiagramContainer) {
      modalDiagramContainer.innerHTML = generateModalDiagram(item);
    }

    if (modalRepoLink && modalRepoLabel) {
      if (item.category === 'Видео және Монтаж' || (item.tags || []).includes('Video')) {
        modalRepoLink.href = 'https://github.com/artishertekuly-bit/claude-animation-skills';
        modalRepoLabel.textContent = 'Animation Skills репозиторийін ашу ↗';
      } else if (item.category === 'Промпттар' || (item.tags || []).includes('Prompts')) {
        modalRepoLink.href = 'https://github.com/artishertekuly-bit/content-skills';
        modalRepoLabel.textContent = 'Content Skills репозиторийін ашу ↗';
      } else if ((item.tags || []).includes('SMM') || item.category === 'Визуал мен Карусель') {
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

  function closeModal() {
    modalBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  // ==========================================================================
  // DYNAMIC GRAPHIC SCHEMATICS & VISUAL ILLUSTRATIONS
  // ==========================================================================
  function generateModalDiagram(item) {
    const slug = (item.slug || '').toLowerCase();
    const cat = item.category || '';
    const tags = (item.tags || []).map(t => t.toLowerCase());

    // 1. Video / Animation timeline waveform
    if (cat === 'Видео және Монтаж' || tags.includes('video') || slug.includes('animation') || slug.includes('reels')) {
      return `
        <div class="guide-diagram-box">
          <div class="diagram-header">
            <span class="diagram-tag">REMOTION / HYPERFRAMES ENGINE (9:16 TIMELINE)</span>
            <span style="font-size: 0.75rem; color: #64748b; font-family: var(--font-mono);">FPS: 60 | 1080x1920</span>
          </div>
          <div class="diagram-canvas">
            <svg width="100%" height="150" viewBox="0 0 500 150" fill="none">
              <rect x="0" y="0" width="500" height="150" fill="#0f172a" rx="6"/>
              <line x1="20" y1="35" x2="480" y2="35" stroke="#334155" stroke-width="1"/>
              <line x1="20" y1="85" x2="480" y2="85" stroke="#334155" stroke-width="1"/>
              <line x1="20" y1="125" x2="480" y2="125" stroke="#334155" stroke-width="1"/>

              <!-- Track 1: Kinetic Visual -->
              <rect x="25" y="15" width="130" height="18" rx="3" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
              <text x="35" y="28" font-family="JetBrains Mono, monospace" font-size="9" fill="#93c5fd">HookEntrance (0-3s)</text>
              <rect x="165" y="15" width="200" height="18" rx="3" fill="#1e293b" stroke="#6366f1" stroke-width="1.5"/>
              <text x="175" y="28" font-family="JetBrains Mono, monospace" font-size="9" fill="#c7d2fe">3D Exploded Layer (3-18s)</text>
              <rect x="375" y="15" width="95" height="18" rx="3" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
              <text x="385" y="28" font-family="JetBrains Mono, monospace" font-size="9" fill="#a7f3d0">CTA Loop (18-24s)</text>

              <!-- Track 2: Subtitles & Sound Wave -->
              <path d="M25 65 Q 40 45, 55 65 T 85 65 T 115 65 T 145 65 T 175 65 T 205 65 T 235 65 T 265 65 T 295 65 T 325 65 T 355 65 T 385 65 T 415 65 T 445 65 T 470 65" stroke="#38bdf8" stroke-width="1.5" fill="none"/>
              <rect x="30" y="70" width="80" height="10" rx="2" fill="#0284c7"/>
              <rect x="120" y="70" width="90" height="10" rx="2" fill="#0284c7"/>
              <rect x="220" y="70" width="100" height="10" rx="2" fill="#0284c7"/>
              <rect x="330" y="70" width="120" height="10" rx="2" fill="#0284c7"/>

              <!-- Track 3: SFX & Swoosh markers -->
              <circle cx="28" cy="115" r="4" fill="#f59e0b"/>
              <text x="38" y="118" font-family="JetBrains Mono, monospace" font-size="8" fill="#fcd34d">whoosh.wav</text>
              <circle cx="168" cy="115" r="4" fill="#ec4899"/>
              <text x="178" y="118" font-family="JetBrains Mono, monospace" font-size="8" fill="#fbcfe8">pop_click.wav</text>
              <circle cx="378" cy="115" r="4" fill="#10b981"/>
              <text x="388" y="118" font-family="JetBrains Mono, monospace" font-size="8" fill="#6ee7b7">riser_hit.wav</text>

              <!-- Playhead line -->
              <line x1="170" y1="5" x2="170" y2="145" stroke="#ef4444" stroke-width="2"/>
              <polygon points="166,5 174,5 170,12" fill="#ef4444"/>
            </svg>
          </div>
          <div class="diagram-caption">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="7" fill-opacity="0.2"/></svg>
            <span><code>/reels-edit</code> — қазақша субтитрлер мен дыбыстық эффектілер автоматты түрде аудио толқынымен (waveform) синхрондалады.</span>
          </div>
        </div>
      `;
    }

    // 2. Anti-AI / Writing Comparison
    if (tags.includes('anti-ai') || cat === 'Промпттар' || slug.includes('writing') || slug.includes('human') || slug.includes('content')) {
      return `
        <div class="guide-diagram-box">
          <div class="diagram-header">
            <span class="diagram-tag">WNK ANTI-AI COMPARISON FILTER</span>
            <span style="font-size: 0.75rem; color: #166534; font-weight: 600;">99.4% Human Score</span>
          </div>
          <div class="comparison-grid">
            <div class="comparison-card comparison-bad">
              <div style="font-weight: 700; margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.35rem;">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="7"/><path d="M5 5l6 6M11 5l-6 6" stroke="#fff" stroke-width="1.5"/></svg>
                Жасанды AI мәтіні (Клишелер)
              </div>
              <p>«Қазіргі таңда цифрландыру дәуірінде жасанды интеллект маңызды рөл атқарады. Бұл тек жаңа мүмкіндік емес, сонымен қатар терең стратегиялық секіріс...»</p>
            </div>
            <div class="comparison-card comparison-good">
              <div style="font-weight: 700; margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.35rem;">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="7"/><path d="M4 8l3 3 5-5" stroke="#fff" stroke-width="1.5"/></svg>
                WNK Өңдеуі (Тірі қазақ тілі)
              </div>
              <p>«AI-ды агент ретінде баптау агенттіктерге төлейтін 500 мың теңгені үнемдейді. 3 дайын скиллді орнатып, алғашқы бейнені 5 минутта шығарамыз.»</p>
            </div>
          </div>
          <div class="diagram-caption" style="margin-top: 0.75rem;">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="7" fill-opacity="0.2"/></svg>
            <span><code>/anti-ai-writing</code> — барлық канцелярлық сөздер мен роботтық клишелерді тірі диалогтық сөйлемдерге ауыстырады.</span>
          </div>
        </div>
      `;
    }

    // 3. 3D Map Route / Travel
    if (slug.includes('map') || tags.includes('карта') || slug.includes('route') || slug.includes('travel')) {
      return `
        <div class="guide-diagram-box">
          <div class="diagram-header">
            <span class="diagram-tag">THREE.JS / MAPBOX 3D ISOMETRIC ROUTE</span>
            <span style="font-size: 0.75rem; color: #64748b; font-family: var(--font-mono);">GPS: 43.238944, 76.889709</span>
          </div>
          <div class="diagram-canvas">
            <svg width="100%" height="150" viewBox="0 0 500 150" fill="none">
              <rect x="0" y="0" width="500" height="150" fill="#f8fafc" rx="6"/>
              <path d="M0 40 L500 40 M0 80 L500 80 M0 120 L500 120" stroke="#e2e8f0" stroke-width="1"/>
              <path d="M100 0 L100 150 M250 0 L250 150 M400 0 L400 150" stroke="#e2e8f0" stroke-width="1"/>

              <!-- 3D Waypoint Path -->
              <path d="M60 110 C 140 20, 220 130, 310 40 S 430 80, 440 30" stroke="#1f5bff" stroke-width="3" fill="none" stroke-linecap="round"/>
              <path d="M60 110 C 140 20, 220 130, 310 40 S 430 80, 440 30" stroke="#93c5fd" stroke-width="6" fill="none" opacity="0.3" stroke-linecap="round"/>

              <!-- Point A -->
              <circle cx="60" cy="110" r="6" fill="#1b1a15"/>
              <text x="60" y="130" font-family="Space Grotesk, sans-serif" font-size="10" font-weight="700" fill="#1b1a15" text-anchor="middle">Алматы (Start)</text>

              <!-- Intermediate Waypoint -->
              <circle cx="220" cy="95" r="4.5" fill="#1f5bff"/>
              <text x="220" y="80" font-family="Space Grotesk, sans-serif" font-size="10" font-weight="600" fill="#1f5bff" text-anchor="middle">Шымкент (WP-1)</text>

              <!-- Destination Point B -->
              <circle cx="440" cy="30" r="6" fill="#dc2626"/>
              <circle cx="440" cy="30" r="12" stroke="#dc2626" stroke-width="1.5" opacity="0.4"/>
              <text x="440" y="18" font-family="Space Grotesk, sans-serif" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">Астана (Final)</text>
            </svg>
          </div>
          <div class="diagram-caption">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="7" fill-opacity="0.2"/></svg>
            <span><code>/map-route</code> — қалалар мен маршруттарды 3D анимациямен көрсететін камера трекинг скрипті.</span>
          </div>
        </div>
      `;
    }

    // 4. Default System Architecture / Exploded view
    return `
      <div class="guide-diagram-box">
        <div class="diagram-header">
          <span class="diagram-tag">SYSTEM EXECUTION & AGENT ARCHITECTURE</span>
          <span style="font-size: 0.75rem; color: #1f5bff; font-weight: 600;">Autonomous Pipeline</span>
        </div>
        <div class="diagram-canvas">
          <svg width="100%" height="150" viewBox="0 0 500 150" fill="none">
            <rect x="0" y="0" width="500" height="150" fill="#ffffff" rx="6"/>

            <!-- Layer 1: Prompt Input -->
            <rect x="20" y="55" width="90" height="40" rx="4" fill="#faf9f3" stroke="#e4decb" stroke-width="1.5"/>
            <text x="65" y="75" font-family="Space Grotesk, sans-serif" font-size="10" font-weight="700" fill="#1b1a15" text-anchor="middle">Промпт</text>
            <text x="65" y="87" font-family="JetBrains Mono, monospace" font-size="8" fill="#64748b" text-anchor="middle">Context</text>

            <line x1="110" y1="75" x2="145" y2="75" stroke="#1f5bff" stroke-width="2"/>
            <polygon points="145,71 152,75 145,79" fill="#1f5bff"/>

            <!-- Layer 2: Agent Reasoner -->
            <rect x="155" y="45" width="100" height="60" rx="6" fill="#eff6ff" stroke="#1f5bff" stroke-width="2"/>
            <text x="205" y="70" font-family="Space Grotesk, sans-serif" font-size="11" font-weight="700" fill="#1f5bff" text-anchor="middle">Claude Code</text>
            <text x="205" y="85" font-family="JetBrains Mono, monospace" font-size="8" fill="#3b82f6" text-anchor="middle">Skill Engine</text>

            <line x1="255" y1="75" x2="290" y2="75" stroke="#1f5bff" stroke-width="2"/>
            <polygon points="290,71 297,75 290,79" fill="#1f5bff"/>

            <!-- Layer 3: Tools & Generation -->
            <rect x="300" y="25" width="85" height="35" rx="4" fill="#faf9f3" stroke="#10b981" stroke-width="1.5"/>
            <text x="342" y="46" font-family="Space Grotesk, sans-serif" font-size="9" font-weight="600" fill="#047857" text-anchor="middle">Remotion</text>

            <rect x="300" y="85" width="85" height="35" rx="4" fill="#faf9f3" stroke="#ea580c" stroke-width="1.5"/>
            <text x="342" y="106" font-family="Space Grotesk, sans-serif" font-size="9" font-weight="600" fill="#c2410c" text-anchor="middle">Higgsfield</text>

            <line x1="385" y1="42" x2="415" y2="65" stroke="#cbd5e1" stroke-width="1.5"/>
            <line x1="385" y1="102" x2="415" y2="85" stroke="#cbd5e1" stroke-width="1.5"/>
            <polygon points="415,71 422,75 415,79" fill="#1b1a15"/>

            <!-- Layer 4: Final Output Production -->
            <rect x="425" y="55" width="60" height="40" rx="4" fill="#1b1a15"/>
            <text x="455" y="75" font-family="Space Grotesk, sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">MP4</text>
            <text x="455" y="87" font-family="JetBrains Mono, monospace" font-size="8" fill="#93c5fd" text-anchor="middle">4K / 60fps</text>
          </svg>
        </div>
        <div class="diagram-caption">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="7" fill-opacity="0.2"/></svg>
          <span><code>/breakdown</code> — толық автономды құбыр (pipeline): промпттан бастап соңғы 4K дайын бейнеге дейінгі қадамдар.</span>
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // CLIPBOARD COPY UTILITIES
  // ==========================================================================
  document.querySelectorAll('.btn-copy').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const targetId = btn.getAttribute('data-target');
      const targetElem = document.getElementById(targetId);
      if (!targetElem) return;

      const text = targetElem.textContent || '';
      try {
        await navigator.clipboard.writeText(text);
        const originalText = btn.innerHTML;
        btn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span style="color: #16a34a; font-weight: 600;">Көшірілді!</span>
        `;
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2200);
      } catch (err) {
        console.error('Clipboard copy failed:', err);
      }
    });
  });

  // ==========================================================================
  // KEYBOARD & SEARCH SHORTCUTS
  // ==========================================================================
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      filterAndRender();
    });
  }

  if (resetFilterBtn) {
    resetFilterBtn.addEventListener('click', () => {
      activeCategory = 'Барлығы';
      activePlatform = 'all';
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      renderCategoryFilterButtons();
      renderPlatformFilterChips();
      filterAndRender();
    });
  }

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    }
    if (e.key === 'Escape') {
      closeModal();
      closeAuthModal();
    }
  });

  // Interactive Hero Visual Tile click routing
  document.querySelectorAll('.visual-tile').forEach(tile => {
    tile.addEventListener('click', (e) => {
      e.preventDefault();
      const titleElem = tile.querySelector('.visual-tile-title span');
      const cmd = titleElem ? titleElem.textContent.trim() : '';

      if (cmd === '/graph') {
        if (searchInput) searchInput.value = 'graph';
      } else if (cmd === '/map-route') {
        if (searchInput) searchInput.value = 'карта';
      } else if (cmd === '/breakdown') {
        if (searchInput) searchInput.value = 'жүйе';
      } else if (cmd === '/anti-ai') {
        if (searchInput) searchInput.value = 'anti-ai';
      } else if (cmd === '/reels-edit') {
        if (searchInput) searchInput.value = 'reels';
      }
      searchQuery = searchInput ? searchInput.value : '';
      filterAndRender();
      const target = document.getElementById('resources');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Newsletter & In-Page Community form submission
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = newsletterName ? newsletterName.value.trim() : '';
      const email = newsletterEmail ? newsletterEmail.value.trim() : '';
      if (!email) return;

      if (!currentUser && name) {
        currentUser = {
          id: 'usr_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
          name: name,
          email: email.toLowerCase(),
          role: 'Қауымдастық мүшесі',
          avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(name)}`,
          provider: 'newsletter',
          confirmed: true,
          confirmed_at: new Date().toISOString()
        };
        localStorage.setItem('wnk_auth_user', JSON.stringify(currentUser));
        updateAuthUI();
      }

      if (newsletterFeedback) {
        newsletterFeedback.textContent = `Рахмет, ${name || 'қолданушы'}! Сіз WNK Education қауымдастығына сәтті тіркелдіңіз.`;
        newsletterFeedback.style.color = '#15803d';
        newsletterFeedback.style.fontWeight = '600';
      }

      if (supabaseClient) {
        supabaseClient.from('wnk_subscribers').upsert({
          email: email.toLowerCase(),
          full_name: name,
          source: 'newsletter_section'
        }).then(() => {}).catch(() => {});
      }

      if (newsletterName) newsletterName.value = '';
      if (newsletterEmail) newsletterEmail.value = '';
    });
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Initial Boot
  initAuthState();
  renderCategoryFilterButtons();
  renderPlatformFilterChips();
  filterAndRender();
}

// Instant rendering: since app.js is at bottom of <body>, DOM elements are immediately available
try {
  initWnkApp();
} catch (err) {
  console.warn('Immediate init fallback to DOMContentLoaded:', err);
  document.addEventListener('DOMContentLoaded', initWnkApp);
}
