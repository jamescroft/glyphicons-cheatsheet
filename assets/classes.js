/* global bootstrap53Data, bootstrap46Data, bootstrap34Data, bootstrap23Data */

const contentData = {
    '5.3': bootstrap53Data,
    '4.6': bootstrap46Data,
    '3.4': bootstrap34Data,
    '2.3': bootstrap23Data
};

const versionColors = {
    '5.3': 'bg-purple-600',
    '4.6': 'bg-blue-600',
    '3.4': 'bg-green-600',
    '2.3': 'bg-orange-600'
};

const classesCategories = [
    {
        id: 'layout',
        name: 'Layout',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"></path>',
        isParent: true,
        children: [
            { id: 'breakpoints', name: 'Breakpoints' },
            { id: 'containers', name: 'Containers' },
            { id: 'grid', name: 'Grid' },
            { id: 'columns', name: 'Columns' },
            { id: 'gutters', name: 'Gutters' },
            { id: 'layout-utilities', name: 'Utilities' },
            { id: 'z-index', name: 'Z-index' },
            { id: 'css-grid', name: 'CSS Grid' }
        ]
    },
    {
        id: 'content',
        name: 'Content',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>',
        isParent: true,
        children: [
            { id: 'reboot', name: 'Reboot' },
            { id: 'typography', name: 'Typography' },
            { id: 'images', name: 'Images' },
            { id: 'tables', name: 'Tables' },
            { id: 'figures', name: 'Figures' }
        ]
    },
    {
        id: 'forms',
        name: 'Forms',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>',
        isParent: true,
        children: [
            { id: 'form-control', name: 'Form control' },
            { id: 'select', name: 'Select' },
            { id: 'checks-radios', name: 'Checks & radios' },
            { id: 'range', name: 'Range' },
            { id: 'input-group', name: 'Input group' },
            { id: 'floating-labels', name: 'Floating labels' },
            { id: 'form-layout', name: 'Layout' },
            { id: 'validation', name: 'Validation' }
        ]
    },
    {
        id: 'components',
        name: 'Components',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5z"></path>',
        isParent: true,
        children: [
            { id: 'accordion', name: 'Accordion' },
            { id: 'alerts', name: 'Alerts' },
            { id: 'badge', name: 'Badge' },
            { id: 'breadcrumb', name: 'Breadcrumb' },
            { id: 'buttons', name: 'Buttons' },
            { id: 'button-group', name: 'Button group' },
            { id: 'card', name: 'Card' },
            { id: 'carousel', name: 'Carousel' },
            { id: 'close-button', name: 'Close button' },
            { id: 'collapse', name: 'Collapse' },
            { id: 'dropdowns', name: 'Dropdowns' },
            { id: 'list-group', name: 'List group' },
            { id: 'modal', name: 'Modal' },
            { id: 'navbar', name: 'Navbar' },
            { id: 'navs-tabs', name: 'Navs & tabs' },
            { id: 'offcanvas', name: 'Offcanvas' },
            { id: 'pagination', name: 'Pagination' },
            { id: 'placeholders', name: 'Placeholders' },
            { id: 'popovers', name: 'Popovers' },
            { id: 'progress', name: 'Progress' },
            { id: 'scrollspy', name: 'Scrollspy' },
            { id: 'spinners', name: 'Spinners' },
            { id: 'toasts', name: 'Toasts' },
            { id: 'tooltips', name: 'Tooltips' }
        ]
    },
    { id: 'utilities', name: 'Utilities', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>' },
    { id: 'helpers', name: 'Helpers', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>' },
    { id: 'javascript', name: 'JavaScript', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>' }
];

let expandedCategories = { layout: true, content: true, forms: true, components: true };

let currentVersion = '5.3';
let currentCategory = 'breakpoints';
let searchQuery = '';

const categoryTitles = {
    'breakpoints': 'Breakpoints',
    'containers': 'Containers',
    'grid': 'Grid',
    'columns': 'Columns',
    'gutters': 'Gutters',
    'layout-utilities': 'Utilities',
    'z-index': 'Z-index',
    'css-grid': 'CSS Grid',
    'reboot': 'Reboot',
    'typography': 'Typography',
    'images': 'Images',
    'tables': 'Tables',
    'figures': 'Figures',
    'form-control': 'Form control',
    'select': 'Select',
    'checks-radios': 'Checks & radios',
    'range': 'Range',
    'input-group': 'Input group',
    'floating-labels': 'Floating labels',
    'form-layout': 'Layout',
    'validation': 'Validation',
    'components': 'Components',
    'accordion': 'Accordion',
    'alerts': 'Alerts',
    'badge': 'Badge',
    'breadcrumb': 'Breadcrumb',
    'buttons': 'Buttons',
    'button-group': 'Button group',
    'card': 'Card',
    'carousel': 'Carousel',
    'close-button': 'Close button',
    'collapse': 'Collapse',
    'dropdowns': 'Dropdowns',
    'list-group': 'List group',
    'modal': 'Modal',
    'navbar': 'Navbar',
    'navs-tabs': 'Navs & tabs',
    'offcanvas': 'Offcanvas',
    'pagination': 'Pagination',
    'placeholders': 'Placeholders',
    'popovers': 'Popovers',
    'progress': 'Progress',
    'scrollspy': 'Scrollspy',
    'spinners': 'Spinners',
    'toasts': 'Toasts',
    'tooltips': 'Tooltips',
    'utilities': 'Utilities',
    'helpers': 'Helpers',
    'forms': 'Forms',
    'javascript': 'JavaScript'
};

function attachParentListeners() {
    document.querySelectorAll('.parent-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const parentId = btn.dataset.parent;
            expandedCategories[parentId] = !expandedCategories[parentId];
            renderSidebar();
        });
    });
}

function attachCategoryListeners() {
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentCategory = btn.dataset.category;
            clearSearch();
            renderSidebar();
            renderContent();
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.add('hidden');
            sidebar.classList.add('lg:block');
            document.getElementById('menu-icon').classList.remove('hidden');
            document.getElementById('close-icon').classList.add('hidden');
        });
    });
}

function renderSidebar() {
    const nav = document.getElementById('category-nav');
    const activeColor = versionColors[currentVersion];

    function isChildActive(cat) {
        if (!cat.children) return false;
        return cat.children.some(child => child.id === currentCategory);
    }

    nav.innerHTML = classesCategories.map(cat => {
        const isActive = cat.id === currentCategory;
        const hasActiveChild = isChildActive(cat);
        const isExpanded = expandedCategories[cat.id] || false;

        if (cat.isParent && cat.children) {
            const parentClass = hasActiveChild
                ? 'parent-btn w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all bg-slate-100 text-slate-900'
                : 'parent-btn w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-slate-700 hover:bg-slate-50';

            const childrenHtml = isExpanded ? cat.children.map(child => {
                const isChildActive = child.id === currentCategory;
                const childClass = isChildActive
                    ? `category-btn w-full flex items-center gap-3 pl-10 pr-4 py-2 rounded-lg transition-all ${activeColor} text-white shadow-md text-sm`
                    : 'category-btn w-full flex items-center gap-3 pl-10 pr-4 py-2 rounded-lg transition-all text-slate-600 hover:bg-slate-50 text-sm';

                return `
                    <button data-category="${child.id}" class="${childClass}">
                        <span class="font-medium">${child.name}</span>
                    </button>
                `;
            }).join('') : '';

            return `
                <div class="parent-category">
                    <button data-parent="${cat.id}" class="${parentClass}">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            ${cat.icon}
                        </svg>
                        <span class="font-medium flex-grow text-left">${cat.name}</span>
                        <svg class="w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                    <div class="children-container ${isExpanded ? '' : 'hidden'} space-y-1 mt-1">
                        ${childrenHtml}
                    </div>
                </div>
            `;
        }

        const btnClass = isActive
            ? `category-btn w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeColor} text-white shadow-md`
            : 'category-btn w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-slate-700 hover:bg-slate-50';

        return `
            <button data-category="${cat.id}" class="${btnClass}">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    ${cat.icon}
                </svg>
                <span class="font-medium">${cat.name}</span>
            </button>
        `;
    }).join('');

    attachCategoryListeners();
    attachParentListeners();
}

function renderContent() {
    let content = null;
    const container = document.getElementById('content-container');
    const versionBadge = document.getElementById('version-badge');
    const cdnVersionSpan = document.getElementById('cdn-version');
    const cdnCode = document.getElementById('cdn-code');

    const versionData = contentData[currentVersion];
    if (versionData?.[currentCategory]) {
        content = versionData[currentCategory];
    }

    document.getElementById('content-title').textContent = content?.title || categoryTitles[currentCategory] || currentCategory;
    versionBadge.textContent = `v${currentVersion}`;
    const versionColor = versionColors[currentVersion];
    versionBadge.className = `px-4 py-1.5 ${versionColor} text-white text-sm font-medium rounded-full`;
    cdnVersionSpan.textContent = currentVersion;
    cdnCode.textContent =
`<link href="https://cdn.jsdelivr.net/npm/bootstrap@${currentVersion}.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@${currentVersion}.0/dist/js/bootstrap.bundle.min.js"><\/script>`;

    if (!content || !content.items || content.items.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12 text-slate-500">
                <p>Content coming soon for this section</p>
            </div>
        `;
        return;
    }

    const hasSections = content.items.some(item => item.section);

    if (hasSections) {
        const sections = [];
        let currentSection = null;
        content.items.forEach((item, index) => {
            if (item.section !== currentSection) {
                currentSection = item.section;
                sections.push({ title: currentSection, items: [] });
            }
            sections[sections.length - 1].items.push({ ...item, originalIndex: index });
        });

        const createSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

        container.innerHTML = sections.map((section, sectionIndex) => {
            const sectionSlug = createSlug(section.title);
            return `
            <div id="${currentCategory}-${sectionSlug}" class="mb-10 bg-gradient-to-r from-slate-50 to-white rounded-xl border border-slate-200 shadow-sm overflow-hidden scroll-mt-24">
                <div class="section-header bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-4 cursor-default">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-white/20 text-white font-bold text-sm">${sectionIndex + 1}</span>
                            <h2 class="text-xl font-bold text-white">${section.title}</h2>
                            <a href="#${currentCategory}-${sectionSlug}" class="anchor-link text-white/70 hover:text-white" title="Copy link to section" onclick="navigator.clipboard.writeText(window.location.href.split('#')[0] + '#${currentCategory}-${sectionSlug}'); this.classList.add('copied'); setTimeout(() => this.classList.remove('copied'), 300); return false;">
                                <svg class="anchor-icon w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                                </svg>
                            </a>
                        </div>
                        ${content.sectionDocs && content.sectionDocs[section.title] ? `
                        <a href="${content.sectionDocs[section.title]}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-sm text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-all">
                            <span>Docs</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                        </a>
                        ` : ''}
                    </div>
                </div>
                <div class="p-6">
                    <div class="grid gap-4">
                        ${section.items.map(item => `
                            <div class="border-2 border-slate-100 rounded-lg p-5 hover:border-purple-200 hover:shadow-md transition-all animate-slide-in bg-white">
                                <h3 class="text-lg font-semibold text-slate-900 mb-1">${item.name}</h3>
                                <p class="text-sm text-slate-600 mb-4">${item.description}</p>
                                ${item.preview ? `
                                <div class="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-lg p-4 mb-4">
                                    <div class="text-xs text-slate-400 uppercase tracking-wide mb-2 font-medium">Preview</div>
                                    <div class="preview-content">${item.preview}</div>
                                </div>
                                ` : ''}
                                <div class="rounded-lg overflow-hidden border border-slate-700">
                                    <div class="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
                                        <span class="text-xs text-slate-400 font-medium uppercase tracking-wide">HTML</span>
                                        <button data-index="${item.originalIndex}" class="copy-btn text-xs px-3 py-1 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded transition-colors flex items-center gap-1.5">
                                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                            </svg>
                                            Copy
                                        </button>
                                    </div>
                                    <pre class="bg-slate-900 text-slate-100 p-4 overflow-x-auto m-0"><code class="text-sm">${escapeHtml(item.code)}</code></pre>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        }).join('');
    } else {
        container.innerHTML = content.items.map((item, index) => `
            <div class="border-2 border-slate-100 rounded-lg p-5 hover:border-purple-200 hover:shadow-md transition-all animate-slide-in">
                <h3 class="text-lg font-semibold text-slate-900 mb-1">${item.name}</h3>
                <p class="text-sm text-slate-600 mb-4">${item.description}</p>
                ${item.preview ? `
                <div class="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-lg p-4 mb-4">
                    <div class="text-xs text-slate-400 uppercase tracking-wide mb-2 font-medium">Preview</div>
                    <div class="preview-content">${item.preview}</div>
                </div>
                ` : ''}
                <div class="rounded-lg overflow-hidden border border-slate-700">
                    <div class="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
                        <span class="text-xs text-slate-400 font-medium uppercase tracking-wide">HTML</span>
                        <button data-index="${index}" class="copy-btn text-xs px-3 py-1 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded transition-colors flex items-center gap-1.5">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                            </svg>
                            Copy
                        </button>
                    </div>
                    <pre class="bg-slate-900 text-slate-100 p-4 overflow-x-auto m-0"><code class="text-sm">${escapeHtml(item.code)}</code></pre>
                </div>
            </div>
        `).join('');
    }

    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'), 10);
            const code = content.items[index].code;
            copyToClipboard(code, this);
        });
    });
}

function performSearch(query) {
    const results = [];
    const lowerQuery = query.toLowerCase();
    const versionData = contentData[currentVersion] || {};

    Object.entries(versionData).forEach(([categoryId, category]) => {
        category.items.forEach(item => {
            if (item.name.toLowerCase().includes(lowerQuery) ||
                item.description.toLowerCase().includes(lowerQuery) ||
                item.code.toLowerCase().includes(lowerQuery)) {
                results.push({ ...item, categoryId, categoryTitle: category.title });
            }
        });
    });

    return results;
}

function renderSearchResults(results) {
    const container = document.getElementById('content-container');
    document.getElementById('content-title').textContent = `Search Results (${results.length})`;

    if (results.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12 text-slate-500">
                <p>No results found for "${escapeHtml(searchQuery)}"</p>
            </div>
        `;
        return;
    }

    container.innerHTML = results.map((item, index) => `
        <div class="border-2 border-slate-100 rounded-lg p-5 hover:border-purple-200 hover:shadow-md transition-all animate-slide-in">
            <div class="flex items-start justify-between mb-2">
                <div>
                    <h3 class="text-lg font-semibold text-slate-900 inline">${item.name}</h3>
                    <span class="ml-2 text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded">${item.categoryTitle}</span>
                </div>
                <button data-code="${escapeHtml(item.code)}" class="search-copy-btn text-sm px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors">
                    Copy
                </button>
            </div>
            <p class="text-sm text-slate-600 mb-3">${item.description}</p>
            <pre class="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto"><code class="text-sm">${escapeHtml(item.code)}</code></pre>
        </div>
    `).join('');

    document.querySelectorAll('.search-copy-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const code = this.getAttribute('data-code');
            copyToClipboard(code, this);
        });
    });
}

function clearSearch() {
    searchQuery = '';
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
}

function handleHashNavigation() {
    const hash = window.location.hash;
    if (!hash) return;

    const hashValue = hash.substring(1);
    const dashIndex = hashValue.indexOf('-');
    if (dashIndex <= 0) return;

    const category = hashValue.substring(0, dashIndex);
    if (currentCategory !== category) {
        for (const version of Object.keys(contentData)) {
            if (contentData[version][category]) {
                currentVersion = version;
                currentCategory = category;
                break;
            }
        }
        renderSidebar();
        renderContent();
    }

    setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 150);
}

function initFromHash() {
    const hash = window.location.hash;
    if (!hash) return false;

    const hashValue = hash.substring(1);
    const dashIndex = hashValue.indexOf('-');
    if (dashIndex <= 0) return false;

    const category = hashValue.substring(0, dashIndex);
    for (const version of Object.keys(contentData)) {
        if (contentData[version][category]) {
            currentVersion = version;
            currentCategory = category;
            return true;
        }
    }
    return false;
}

const hasHashCategory = initFromHash();

renderSidebar();
renderContent();

if (hasHashCategory && window.location.hash) {
    setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 200);
}

window.addEventListener('hashchange', handleHashNavigation);

const versionButtons = document.querySelectorAll('.version-btn');
versionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentVersion = btn.dataset.version;
        clearSearch();
        versionButtons.forEach(b => {
            b.className = 'version-btn p-4 rounded-xl border-2 transition-all font-medium bg-white text-slate-700 border-slate-200 hover:border-slate-300';
        });
        const color = versionColors[currentVersion];
        btn.className = `version-btn p-4 rounded-xl border-2 transition-all font-medium ${color} text-white border-transparent shadow-lg scale-105`;
        renderSidebar();
        renderContent();
    });
});

const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        if (searchQuery.length > 0) {
            const results = performSearch(searchQuery);
            renderSearchResults(results);
            document.querySelectorAll('.category-btn').forEach(b => {
                b.className = 'category-btn w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-slate-700 hover:bg-slate-50';
            });
        } else {
            renderSidebar();
            renderContent();
        }
    });
}

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');

        sidebar.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });
}
