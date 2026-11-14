import { WIKI_DATA } from './data.js';

let currentTab = 'overview';
let tocVisible = true;

const container = document.getElementById('article-content');
const infoboxEl = document.getElementById('infobox-container');
const tocList = document.getElementById('toc-list');
const tocToggleBtn = document.getElementById('toc-toggle');
const searchInput = document.getElementById('search-input');
const themeBtn = document.getElementById('theme-btn');
const pageTitle = document.getElementById('page-title');

// Initialize Theme from localStorage
function initTheme() {
  const saved = localStorage.getItem('wiki_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  themeBtn.textContent = saved === 'dark' ? '☀️ Light' : '🌙 Dark';
}

themeBtn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('wiki_theme', next);
  themeBtn.textContent = next === 'dark' ? '☀️ Light' : '🌙 Dark';
});

// TOC Toggle
tocToggleBtn.addEventListener('click', () => {
  tocVisible = !tocVisible;
  tocList.style.display = tocVisible ? 'block' : 'none';
  tocToggleBtn.textContent = tocVisible ? '[hide]' : '[show]';
});

// Render Infobox
function renderInfobox() {
  const info = WIKI_DATA.overview;
  infoboxEl.innerHTML = `
    <div class="infobox-title">${info.title}</div>
    <table class="infobox-table">
      ${info.infobox.map(row => `
        <tr>
          <th>${row.label}</th>
          <td>${row.value}</td>
        </tr>
      `).join('')}
    </table>
  `;
  infoboxEl.style.display = currentTab === 'overview' ? 'block' : 'none';
}

// Render Overview Tab
function renderOverview() {
  pageTitle.textContent = "Sicilian Wars (Greco-Punic Wars)";
  let html = `<p class="article-section">${WIKI_DATA.overview.summary}</p>`;

  WIKI_DATA.wars.forEach(war => {
    html += `
      <section class="article-section" id="${war.id}">
        <h2>${war.title}</h2>
        <p>${war.content}</p>
      </section>
    `;
  });

  container.innerHTML = html;
  buildTOC([
    { id: 'first-war', label: '1. First Sicilian War (480 BC)' },
    { id: 'second-war', label: '2. Second Sicilian War (410–404 BC)' },
    { id: 'third-war', label: '3. Third Sicilian War (315–307 BC)' }
  ]);
}

// Render Key Figures Tab
function renderFigures(filter = '') {
  pageTitle.textContent = "Key Figures of the Sicilian Wars";
  const filtered = WIKI_DATA.figures.filter(f => 
    f.name.toLowerCase().includes(filter.toLowerCase()) || 
    f.bio.toLowerCase().includes(filter.toLowerCase())
  );

  let html = '<div class="card-grid">';
  filtered.forEach(f => {
    const badgeClass = f.side === 'Carthage' ? 'badge-punic' : 'badge-greek';
    html += `
      <div class="card" id="${f.id}">
        <span class="badge ${badgeClass}">${f.side}</span>
        <h3>${f.name}</h3>
        <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 6px;">${f.role}</p>
        <p>${f.bio}</p>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
  buildTOC(filtered.map(f => ({ id: f.id, label: f.name })));
}

// Render Major Battles Tab
function renderBattles(filter = '') {
  pageTitle.textContent = "Decisive Battles & Tactical Diagrams";
  const filtered = WIKI_DATA.battles.filter(b => 
    b.name.toLowerCase().includes(filter.toLowerCase()) || 
    b.description.toLowerCase().includes(filter.toLowerCase())
  );

  let html = '';
  filtered.forEach(b => {
    html += `
      <section class="article-section" id="${b.id}">
        <h2>${b.name}</h2>
        <p><strong>Forces:</strong> ${b.combatants} | <strong>Outcome:</strong> ${b.outcome}</p>
        ${b.diagram}
        <p>${b.description}</p>
      </section>
    `;
  });
  container.innerHTML = html;
  buildTOC(filtered.map(b => ({ id: b.id, label: b.name })));
}

// Render Privacy & Legal Compliance Tab
function renderPrivacy() {
  pageTitle.textContent = "Privacy Policy & Disclaimers";
  infoboxEl.style.display = 'none';
  container.innerHTML = `
    <section class="article-section" id="privacy-policy">
      <h2>1. Privacy Policy</h2>
      <p>This static encyclopedia reader operates <strong>100% on the client side</strong>. We do not use tracking cookies, analytics trackers, server logging, or sell personal data. The only stored data is your UI theme selection saved locally via browser <code>localStorage</code>.</p>
    </section>
    <section class="article-section" id="educational-disclaimer">
      <h2>2. Educational &amp; Historical Disclaimer</h2>
      <p>This website is an educational reference dedicated to classical Mediterranean history (the Greco-Punic Wars). Historical texts and battle descriptions are derived from public domain ancient and historical records (including Herodotus and Diodorus Siculus).</p>
    </section>
  `;
  buildTOC([
    { id: 'privacy-policy', label: '1. Privacy Policy' },
    { id: 'educational-disclaimer', label: '2. Educational Disclaimer' }
  ]);
}

// Populate TOC
function buildTOC(items) {
  tocList.innerHTML = items.map(item => `
    <li><a href="#${item.id}">${item.label}</a></li>
  `).join('');
}

// Tab Switching
document.querySelectorAll('.nav-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentTab = tab.dataset.tab;
    searchInput.value = '';

    renderInfobox();
    if (currentTab === 'overview') renderOverview();
    else if (currentTab === 'figures') renderFigures();
    else if (currentTab === 'battles') renderBattles();
    else if (currentTab === 'privacy') renderPrivacy();
  });
});

// Footer shortcut links
document.getElementById('privacy-link')?.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('[data-tab="privacy"]').click();
});
document.getElementById('disclaimer-link')?.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('[data-tab="privacy"]').click();
});

// Search Filter
searchInput.addEventListener('input', (e) => {
  const query = e.target.value;
  if (currentTab === 'figures') renderFigures(query);
  else if (currentTab === 'battles') renderBattles(query);
});

// Initialize on Load
initTheme();
renderInfobox();
renderOverview();
