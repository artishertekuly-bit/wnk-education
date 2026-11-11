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

    modalSteps.innerHTML = item.steps.map(step => `<li>${escapeHtml(step)}</li>`).join('');
    modalPrompt.textContent = item.prompt;

    modalTags.innerHTML = item.tags.map(tag => `<span class="card-tag">#${escapeHtml(tag)}</span>`).join('');

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

  // Copy prompt logic
  btnCopyPrompt.addEventListener('click', () => {
    const textToCopy = modalPrompt.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      const origHtml = btnCopyPrompt.innerHTML;
      btnCopyPrompt.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="2 9 6 13 14 3"/>
        </svg>
        Көшірілді!
      `;
      btnCopyPrompt.style.backgroundColor = '#16a34a';
      btnCopyPrompt.style.color = '#fff';
      btnCopyPrompt.style.borderColor = '#16a34a';

      setTimeout(() => {
        btnCopyPrompt.innerHTML = origHtml;
        btnCopyPrompt.style.backgroundColor = '';
        btnCopyPrompt.style.color = '';
        btnCopyPrompt.style.borderColor = '';
      }, 2000);
    }).catch(err => {
      console.error('Copy failed:', err);
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

  // Initialize
  renderFilterButtons();
  filterAndRender();
});
