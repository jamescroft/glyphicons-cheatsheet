/* global bootstrapIcons, fontawesomeIcons, featherIcons, octiconsIcons */

const iconsData = {
    ...bootstrapIcons,
    ...fontawesomeIcons,
    ...featherIcons,
    ...octiconsIcons
};

const iconLibraryColors = {
    'bootstrap': 'bg-pink-600',
    'fontawesome': 'bg-blue-600',
    'feather': 'bg-cyan-600',
    'octicons': 'bg-slate-700'
};

const fontAwesomeVersionColors = {
    '7': { badge: 'bg-indigo-600', dot: 'bg-indigo-500', ring: 'ring-indigo-400/30' },
    '6': { badge: 'bg-blue-600', dot: 'bg-blue-500', ring: 'ring-blue-400/30' },
    '5': { badge: 'bg-emerald-600', dot: 'bg-emerald-500', ring: 'ring-emerald-400/30' },
    '4': { badge: 'bg-amber-600', dot: 'bg-amber-500', ring: 'ring-amber-400/30' }
};

const iconsCategories = [
    { id: 'getting-started', name: 'Getting Started', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>' },
    { id: 'usage', name: 'Usage', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>' },
    { id: 'styling', name: 'Styling', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>' },
    { id: 'examples', name: 'Icons', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>' }
];

let currentIconLibrary = 'bootstrap';
let currentFontAwesomeVersion = (iconsData.fontawesome && iconsData.fontawesome.defaultVersion) ? iconsData.fontawesome.defaultVersion : '6';
let currentCategory = 'getting-started';
let searchQuery = '';
let iconExampleLimit = 200;
const iconExampleStep = 200;
const loadMoreState = { loadMoreObserver: null, autoLoadInProgress: false };

let fa4IconsLoaded = false;
let fa4IconsLoading = false;
const fa4IconsSource = 'https://gist.githubusercontent.com/zwinnie/3ed8e7970240962bc29227533c3ae047/raw/da69f87c399284440487004e78004dd8c6735bff/font-awesome-4.7.0.json';
let fa5IconsLoaded = false;
let fa5IconsLoading = false;
const fa5IconsVersion = '5.15.4';
const fa5IconsEndpoint = 'https://api.fontawesome.com';
let fa6IconsLoaded = false;
let fa6IconsLoading = false;
const fa6IconsVersion = '6.x';
let fa7IconsLoaded = false;
let fa7IconsLoading = false;
const fa7IconsVersion = '7.x';

function getCurrentIconLibraryData() {
    const libraryData = iconsData[currentIconLibrary];
    if (!libraryData) return null;
    if (currentIconLibrary === 'fontawesome' && libraryData.versions) {
        const versionKey = currentFontAwesomeVersion || libraryData.defaultVersion;
        return libraryData.versions[versionKey] || libraryData.versions[libraryData.defaultVersion];
    }
    return libraryData;
}

function updateFontAwesomeVersionSelectorVisibility() {
    const faVersionContainer = document.getElementById('fa-version-selector-container');
    if (currentIconLibrary === 'fontawesome') {
        faVersionContainer.classList.remove('hidden');
    } else {
        faVersionContainer.classList.add('hidden');
    }
}

function renderFontAwesomeVersionSelector() {
    document.querySelectorAll('.fa-version-btn').forEach(b => {
        b.className = 'fa-version-btn px-4 py-2.5 rounded-xl transition-all text-sm font-semibold text-slate-700 hover:bg-white/70';
    });
    const activeBtn = document.querySelector(`.fa-version-btn[data-fa-version="${currentFontAwesomeVersion}"]`);
    if (activeBtn) {
        const theme = fontAwesomeVersionColors[currentFontAwesomeVersion] || fontAwesomeVersionColors['6'];
        activeBtn.className = `fa-version-btn px-4 py-2.5 rounded-xl transition-all text-sm font-semibold text-white shadow-md scale-105 ${theme.badge} ring-4 ${theme.ring}`;
    }

    const dot = document.getElementById('fa-version-dot');
    const label = document.getElementById('fa-version-label');
    const dotTheme = fontAwesomeVersionColors[currentFontAwesomeVersion] || fontAwesomeVersionColors['6'];
    if (dot) dot.className = `inline-flex h-2 w-2 rounded-full ${dotTheme.dot}`;
    if (label) label.textContent = `FA${currentFontAwesomeVersion}`;
}

function updateFontAwesomeStylesheet() {
    const fa4Link = document.getElementById('fa4-stylesheet');
    const fa5Link = document.getElementById('fa5-stylesheet');
    const needsFa4 = currentIconLibrary === 'fontawesome' && currentFontAwesomeVersion === '4';
    const needsFa5 = currentIconLibrary === 'fontawesome' && currentFontAwesomeVersion === '5';

    if (needsFa4 && !fa4Link) {
        const link = document.createElement('link');
        link.id = 'fa4-stylesheet';
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
        document.head.appendChild(link);
    } else if (!needsFa4 && fa4Link) {
        fa4Link.remove();
    }

    if (needsFa5 && !fa5Link) {
        const link = document.createElement('link');
        link.id = 'fa5-stylesheet';
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
        document.head.appendChild(link);
    } else if (!needsFa5 && fa5Link) {
        fa5Link.remove();
    }
}

function renderLibrarySelector() {
    document.querySelectorAll('.library-btn').forEach(b => {
        b.className = 'library-btn p-4 rounded-xl border-2 transition-all font-medium bg-white text-slate-700 border-slate-200 hover:border-slate-300';
    });
    const activeBtn = document.querySelector(`.library-btn[data-library="${currentIconLibrary}"]`);
    if (activeBtn) {
        const color = iconLibraryColors[currentIconLibrary];
        activeBtn.className = `library-btn p-4 rounded-xl border-2 transition-all font-medium ${color} text-white border-transparent shadow-lg scale-105`;
    }
}

function renderIconPreview(item) {
    switch (currentIconLibrary) {
        case 'bootstrap':
            return `<i class="bi ${item.icon}"></i>`;
        case 'fontawesome':
            return `<i class="${item.icon}"></i>`;
        case 'feather':
            return `<i data-feather="${item.icon}"></i>`;
        case 'octicons':
            return `<span class="octicon-placeholder" data-octicon="${item.icon}"></span>`;
        default:
            return `<i class="${item.icon}"></i>`;
    }
}

function formatFa4Name(className) {
    const raw = className.replace(/^fa-/, '');
    return raw.split('-').map(part => part ? part[0].toUpperCase() + part.slice(1) : part).join(' ');
}

async function loadFontAwesome4Icons() {
    if (fa4IconsLoaded || fa4IconsLoading) return;
    fa4IconsLoading = true;
    try {
        const response = await fetch(fa4IconsSource);
        if (!response.ok) throw new Error(`Failed to fetch FA4 icons: ${response.status}`);
        const data = await response.json();
        const icons = Array.isArray(data['4.7.0']) ? data['4.7.0'] : [];
        const uniqueIcons = Array.from(new Set(icons)).sort();
        const items = uniqueIcons.map((className) => ({
            name: formatFa4Name(className),
            code: `<i class="fa ${className}"></i>`,
            icon: `fa ${className}`,
            description: className
        }));
        if (iconsData.fontawesome?.versions?.['4']?.categories?.examples) {
            iconsData.fontawesome.versions['4'].categories.examples.items = items;
        }
        fa4IconsLoaded = true;
    } catch (error) {
        console.warn('Failed to load Font Awesome 4 icons list.', error);
    } finally {
        fa4IconsLoading = false;
    }
}

function formatFa5StyleLabel(style) {
    if (!style) return '';
    return style.charAt(0).toUpperCase() + style.slice(1);
}

function startFontAwesomeChunkedBuild(versionKey, icons) {
    const category = iconsData.fontawesome?.versions?.[versionKey]?.categories?.examples;
    if (!category) return;

    category.items = [];
    category._rawIcons = icons;
    category._rawIndex = 0;
    category._itemsReady = false;
    category._itemsLoading = true;
    category._hasRenderedOnce = false;

    const batchSize = 200;

    const buildBatch = () => {
        const start = category._rawIndex;
        const end = Math.min(start + batchSize, category._rawIcons.length);

        for (let i = start; i < end; i += 1) {
            const icon = category._rawIcons[i];
            const styles = icon?.familyStylesByLicense?.free || [];
            styles.forEach((style) => {
                const prefix = style?.prefix;
                if (!prefix) return;
                const styleLabel = formatFa5StyleLabel(style?.style);
                const displayName = styleLabel ? `${icon.label} (${styleLabel})` : icon.label;
                const className = `${prefix} fa-${icon.id}`;
                category.items.push({
                    name: displayName,
                    code: `<i class="${className}"></i>`,
                    icon: className,
                    description: icon.id
                });
            });
        }

        category._rawIndex = end;

        if (currentIconLibrary === 'fontawesome' && currentFontAwesomeVersion === versionKey && currentCategory === 'examples') {
            if (!category._hasRenderedOnce && category.items.length > 0) {
                category._hasRenderedOnce = true;
                renderContent();
            }
        }

        if (category._rawIndex < category._rawIcons.length) {
            setTimeout(buildBatch, 0);
        } else {
            category._itemsReady = true;
            category._itemsLoading = false;
            if (versionKey === '7') {
                fa7IconsLoaded = true;
                fa7IconsLoading = false;
            }
            if (versionKey === '6') {
                fa6IconsLoaded = true;
                fa6IconsLoading = false;
            }
            if (versionKey === '5') {
                fa5IconsLoaded = true;
                fa5IconsLoading = false;
            }
            if (currentIconLibrary === 'fontawesome' && currentFontAwesomeVersion === versionKey && currentCategory === 'examples') {
                renderContent();
            }
        }
    };

    buildBatch();
}

async function loadFontAwesome5Icons() {
    if (fa5IconsLoaded || fa5IconsLoading) return;
    fa5IconsLoading = true;
    try {
        const query = `
            query Icons($version: String!, $license: String!) {
                release(version: $version) {
                    icons(license: $license) {
                        id
                        label
                        familyStylesByLicense {
                            free {
                                prefix
                                style
                            }
                        }
                    }
                }
            }
        `;
        const response = await fetch(fa5IconsEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query,
                variables: { version: fa5IconsVersion, license: 'free' }
            })
        });
        if (!response.ok) throw new Error(`Failed to fetch FA5 icons: ${response.status}`);
        const payload = await response.json();
        const icons = payload?.data?.release?.icons || [];
        startFontAwesomeChunkedBuild('5', icons);
    } catch (error) {
        console.warn('Failed to load Font Awesome 5 icons list.', error);
        fa5IconsLoading = false;
    }
}

async function loadFontAwesome6Icons() {
    if (fa6IconsLoaded || fa6IconsLoading) return;
    fa6IconsLoading = true;
    try {
        const query = `
            query Icons($version: String!, $license: String!) {
                release(version: $version) {
                    icons(license: $license) {
                        id
                        label
                        familyStylesByLicense {
                            free {
                                prefix
                                style
                            }
                        }
                    }
                }
            }
        `;
        const response = await fetch(fa5IconsEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query,
                variables: { version: fa6IconsVersion, license: 'free' }
            })
        });
        if (!response.ok) throw new Error(`Failed to fetch FA6 icons: ${response.status}`);
        const payload = await response.json();
        const icons = payload?.data?.release?.icons || [];
        startFontAwesomeChunkedBuild('6', icons);
    } catch (error) {
        console.warn('Failed to load Font Awesome 6 icons list.', error);
        fa6IconsLoading = false;
    }
}

async function loadFontAwesome7Icons() {
    if (fa7IconsLoaded || fa7IconsLoading) return;
    fa7IconsLoading = true;
    try {
        const query = `
            query Icons($version: String!, $license: String!) {
                release(version: $version) {
                    icons(license: $license) {
                        id
                        label
                        familyStylesByLicense {
                            free {
                                prefix
                                style
                            }
                        }
                    }
                }
            }
        `;
        const response = await fetch(fa5IconsEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query,
                variables: { version: fa7IconsVersion, license: 'free' }
            })
        });
        if (!response.ok) throw new Error(`Failed to fetch FA7 icons: ${response.status}`);
        const payload = await response.json();
        const icons = payload?.data?.release?.icons || [];
        startFontAwesomeChunkedBuild('7', icons);
    } catch (error) {
        console.warn('Failed to load Font Awesome 7 icons list.', error);
        fa7IconsLoading = false;
    }
}

const octiconsCache = {};

async function loadOcticonsSVGs() {
    const placeholders = document.querySelectorAll('.octicon-placeholder[data-octicon]');

    for (const placeholder of placeholders) {
        const iconName = placeholder.getAttribute('data-octicon');
        if (!iconName || iconName === 'undefined') continue;

        try {
            let svgContent;
            if (octiconsCache[iconName]) {
                svgContent = octiconsCache[iconName];
            } else {
                const response = await fetch(`https://unpkg.com/@primer/octicons@19.8.0/build/svg/${iconName}-16.svg`);
                if (response.ok) {
                    svgContent = await response.text();
                    octiconsCache[iconName] = svgContent;
                }
            }

            if (svgContent) {
                const wrapper = document.createElement('div');
                wrapper.innerHTML = svgContent;
                const svg = wrapper.querySelector('svg');
                if (svg) {
                    svg.classList.add('octicon');
                    placeholder.replaceWith(svg);
                }
            }
        } catch (error) {
            console.warn(`Failed to load octicon: ${iconName}`, error);
        }
    }
}

function renderSidebar() {
    const nav = document.getElementById('category-nav');
    const activeColor = iconLibraryColors[currentIconLibrary];

    nav.innerHTML = iconsCategories.map(cat => {
        const isActive = cat.id === currentCategory;
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
}

function attachCategoryListeners() {
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentCategory = btn.dataset.category;
            iconExampleLimit = 200;
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

function renderContent() {
    let content;
    const container = document.getElementById('content-container');
    const versionBadge = document.getElementById('version-badge');
    const cdnVersionSpan = document.getElementById('cdn-version');
    const cdnCode = document.getElementById('cdn-code');

    if (currentIconLibrary === 'fontawesome' && currentFontAwesomeVersion === '7' && currentCategory === 'examples' && !fa7IconsLoaded) {
        if (!fa7IconsLoading) {
            loadFontAwesome7Icons();
        }
        const fa7Category = iconsData.fontawesome?.versions?.['7']?.categories?.examples;
        if (!fa7Category || !fa7Category.items || fa7Category.items.length === 0) {
            container.innerHTML = `
                <div class="text-center py-12 text-slate-500">
                    <p>Loading Font Awesome 7 icons...</p>
                </div>
            `;
            return;
        }
    }
    if (currentIconLibrary === 'fontawesome' && currentFontAwesomeVersion === '6' && currentCategory === 'examples' && !fa6IconsLoaded) {
        if (!fa6IconsLoading) {
            loadFontAwesome6Icons();
        }
        const fa6Category = iconsData.fontawesome?.versions?.['6']?.categories?.examples;
        if (!fa6Category || !fa6Category.items || fa6Category.items.length === 0) {
            container.innerHTML = `
                <div class="text-center py-12 text-slate-500">
                    <p>Loading Font Awesome 6 icons...</p>
                </div>
            `;
            return;
        }
    }
    if (currentIconLibrary === 'fontawesome' && currentFontAwesomeVersion === '5' && currentCategory === 'examples' && !fa5IconsLoaded) {
        container.innerHTML = `
            <div class="text-center py-12 text-slate-500">
                <p>Loading Font Awesome 5 icons...</p>
            </div>
        `;
        if (!fa5IconsLoading) {
            loadFontAwesome5Icons();
        }
        return;
    }
    if (currentIconLibrary === 'fontawesome' && currentFontAwesomeVersion === '4' && currentCategory === 'examples' && !fa4IconsLoaded) {
        container.innerHTML = `
            <div class="text-center py-12 text-slate-500">
                <p>Loading Font Awesome 4 icons...</p>
            </div>
        `;
        loadFontAwesome4Icons().then(() => {
            if (currentIconLibrary === 'fontawesome' && currentFontAwesomeVersion === '4' && currentCategory === 'examples') {
                renderContent();
            }
        });
        return;
    }

    const libraryData = getCurrentIconLibraryData();
    content = libraryData.categories[currentCategory] || libraryData.categories['getting-started'];

    if (currentCategory === 'examples') {
        document.getElementById('content-title').textContent = `${content.title} (${content.items.length} icons)`;
    } else {
        document.getElementById('content-title').textContent = content.title;
    }

    const libraryColor = iconLibraryColors[currentIconLibrary];
    if (currentIconLibrary === 'fontawesome') {
        const faTheme = fontAwesomeVersionColors[currentFontAwesomeVersion] || fontAwesomeVersionColors['6'];
        versionBadge.textContent = libraryData.name;
        versionBadge.className = `px-4 py-1.5 ${faTheme.badge} text-white text-sm font-medium rounded-full`;
    } else {
        versionBadge.textContent = libraryData.name;
        versionBadge.className = `px-4 py-1.5 ${libraryColor} text-white text-sm font-medium rounded-full`;
    }
    cdnVersionSpan.textContent = libraryData.name;
    cdnCode.textContent = libraryData.cdnLink;

    if (!content || !content.items || content.items.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12 text-slate-500">
                <p>Content coming soon for this section</p>
            </div>
        `;
        return;
    }

    if (currentCategory === 'examples') {
        let sortedItems;
        const isStreamingFa = currentIconLibrary === 'fontawesome'
            && (currentFontAwesomeVersion === '7' || currentFontAwesomeVersion === '6' || currentFontAwesomeVersion === '5')
            && (fa7IconsLoading || fa6IconsLoading || fa5IconsLoading);
        if (isStreamingFa) {
            sortedItems = content.items;
        } else {
            sortedItems = [...content.items].sort((a, b) => a.name.localeCompare(b.name));
        }
        const isLimited = sortedItems.length > iconExampleLimit;
        const displayItems = isLimited ? sortedItems.slice(0, iconExampleLimit) : sortedItems;
        const hoverColor = {
            'bootstrap': 'hover:border-pink-200',
            'fontawesome': 'hover:border-blue-200',
            'feather': 'hover:border-cyan-200',
            'octicons': 'hover:border-slate-300'
        }[currentIconLibrary];
        const btnColor = {
            'bootstrap': 'bg-pink-100 hover:bg-pink-200 text-pink-700',
            'fontawesome': 'bg-blue-100 hover:bg-blue-200 text-blue-700',
            'feather': 'bg-cyan-100 hover:bg-cyan-200 text-cyan-700',
            'octicons': 'bg-slate-200 hover:bg-slate-300 text-slate-700'
        }[currentIconLibrary];

        container.innerHTML = `
            ${currentIconLibrary === 'fontawesome' && (currentFontAwesomeVersion === '7' && !fa7IconsLoaded) ? `
            <div class="mb-4 rounded-lg border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm text-indigo-700">
                Loading more Font Awesome 7 icons in the background...
            </div>
            ` : ''}
            ${currentIconLibrary === 'fontawesome' && (currentFontAwesomeVersion === '6' && !fa6IconsLoaded) ? `
            <div class="mb-4 rounded-lg border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-700">
                Loading more Font Awesome 6 icons in the background...
            </div>
            ` : ''}
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                ${displayItems.map(item => `
                    <div class="border-2 border-slate-100 rounded-lg p-4 ${hoverColor} hover:shadow-md transition-all animate-slide-in text-center flex flex-col h-full">
                        <div class="text-4xl mb-3 text-slate-700">
                            ${renderIconPreview(item)}
                        </div>
                        <h3 class="text-sm font-semibold text-slate-900 mb-1">${item.name}</h3>
                        <p class="text-xs text-slate-500 mb-3 flex-grow">${item.description}</p>
                        <button data-code="${escapeHtml(item.code)}" class="copy-btn text-xs px-3 py-1.5 ${btnColor} rounded-md transition-colors w-full mt-auto">
                            Copy
                        </button>
                    </div>
                `).join('')}
            </div>
            ${isLimited ? `
            <div class="mt-6 flex flex-col items-center justify-center text-center gap-2">
                <button id="load-more-icons" class="load-more-btn px-4 py-2 rounded-lg text-sm font-semibold transition-colors inline-flex items-center gap-2">
                    <span class="load-more-spinner" aria-hidden="true"></span>
                    <span class="load-more-text">Loading next batch...</span>
                </button>
                <div class="load-more-hint">We add 200 icons at a time to keep things fast.</div>
            </div>
            ` : ''}
        `;

        if (currentIconLibrary === 'feather' && typeof feather !== 'undefined') {
            feather.replace();
        }

        if (currentIconLibrary === 'octicons') {
            loadOcticonsSVGs();
        }

        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const code = this.getAttribute('data-code');
                copyToClipboard(code, this);
            });
        });

        const loadMoreBtn = document.getElementById('load-more-icons');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                if (loadMoreState.autoLoadInProgress) return;
                loadMoreState.autoLoadInProgress = true;
                iconExampleLimit += iconExampleStep;
                renderContent();
            });
            setupAutoLoadMore(loadMoreBtn, () => {
                iconExampleLimit += iconExampleStep;
                renderContent();
            }, loadMoreState);
        }
        loadMoreState.autoLoadInProgress = false;
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
                <div class="section-header bg-gradient-to-r from-pink-600 to-pink-500 px-6 py-4 cursor-default">
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
                            <div class="border-2 border-slate-100 rounded-lg p-5 hover:border-pink-200 hover:shadow-md transition-all animate-slide-in bg-white">
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
            <div class="border-2 border-slate-100 rounded-lg p-5 hover:border-pink-200 hover:shadow-md transition-all animate-slide-in">
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

    if (currentCategory === 'examples') {
        const libraryData = getCurrentIconLibraryData();
        if (currentIconLibrary === 'fontawesome' && currentFontAwesomeVersion === '7' && !fa7IconsLoaded) {
            loadFontAwesome7Icons().then(() => {
                if (searchQuery.length > 0) {
                    const updatedResults = performSearch(searchQuery);
                    if (currentCategory === 'examples') {
                        renderFilteredExamples(updatedResults);
                    } else {
                        renderSearchResults(updatedResults);
                    }
                }
            });
            return results;
        }
        if (currentIconLibrary === 'fontawesome' && currentFontAwesomeVersion === '6' && !fa6IconsLoaded) {
            loadFontAwesome6Icons().then(() => {
                if (searchQuery.length > 0) {
                    const updatedResults = performSearch(searchQuery);
                    if (currentCategory === 'examples') {
                        renderFilteredExamples(updatedResults);
                    } else {
                        renderSearchResults(updatedResults);
                    }
                }
            });
            return results;
        }
        if (currentIconLibrary === 'fontawesome' && currentFontAwesomeVersion === '5' && !fa5IconsLoaded) {
            loadFontAwesome5Icons().then(() => {
                if (searchQuery.length > 0) {
                    const updatedResults = performSearch(searchQuery);
                    if (currentCategory === 'examples') {
                        renderFilteredExamples(updatedResults);
                    } else {
                        renderSearchResults(updatedResults);
                    }
                }
            });
            return results;
        }
        if (currentIconLibrary === 'fontawesome' && currentFontAwesomeVersion === '4' && !fa4IconsLoaded) {
            loadFontAwesome4Icons().then(() => {
                if (searchQuery.length > 0) {
                    const updatedResults = performSearch(searchQuery);
                    if (currentCategory === 'examples') {
                        renderFilteredExamples(updatedResults);
                    } else {
                        renderSearchResults(updatedResults);
                    }
                }
            });
            return results;
        }
        const examplesCategory = libraryData.categories['examples'];
        examplesCategory.items.forEach(item => {
            if (item.name.toLowerCase().includes(lowerQuery) ||
                item.description.toLowerCase().includes(lowerQuery)) {
                results.push({ ...item, categoryId: 'examples', categoryTitle: examplesCategory.title });
            }
        });
    } else {
        const libraryData = getCurrentIconLibraryData();
        Object.entries(libraryData.categories).forEach(([categoryId, category]) => {
            category.items.forEach(item => {
                if (item.name.toLowerCase().includes(lowerQuery) ||
                    item.description.toLowerCase().includes(lowerQuery) ||
                    item.code.toLowerCase().includes(lowerQuery)) {
                    results.push({ ...item, categoryId, categoryTitle: category.title });
                }
            });
        });
    }

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

    const hasIconExamples = results.some(item => item.icon);

    if (hasIconExamples && results.every(item => item.icon)) {
        const hoverColor = {
            'bootstrap': 'hover:border-pink-200',
            'fontawesome': 'hover:border-blue-200',
            'feather': 'hover:border-cyan-200',
            'octicons': 'hover:border-slate-300'
        }[currentIconLibrary];
        const btnColor = {
            'bootstrap': 'bg-pink-100 hover:bg-pink-200 text-pink-700',
            'fontawesome': 'bg-blue-100 hover:bg-blue-200 text-blue-700',
            'feather': 'bg-cyan-100 hover:bg-cyan-200 text-cyan-700',
            'octicons': 'bg-slate-200 hover:bg-slate-300 text-slate-700'
        }[currentIconLibrary];

        container.innerHTML = `
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                ${results.map(item => `
                    <div class="border-2 border-slate-100 rounded-lg p-4 ${hoverColor} hover:shadow-md transition-all animate-slide-in text-center flex flex-col h-full">
                        <div class="text-4xl mb-3 text-slate-700">
                            ${renderIconPreview(item)}
                        </div>
                        <h3 class="text-sm font-semibold text-slate-900 mb-1">${item.name}</h3>
                        <p class="text-xs text-slate-500 mb-3 flex-grow">${item.description}</p>
                        <button data-code="${escapeHtml(item.code)}" class="search-copy-btn text-xs px-3 py-1.5 ${btnColor} rounded-md transition-colors w-full mt-auto">
                            Copy
                        </button>
                    </div>
                `).join('')}
            </div>
        `;
    } else {
        container.innerHTML = results.map(item => `
            <div class="border-2 border-slate-100 rounded-lg p-5 hover:border-pink-200 hover:shadow-md transition-all animate-slide-in">
                <div class="flex items-start justify-between mb-2">
                    <div>
                        ${item.icon ? `<span class="text-2xl mr-2">${renderIconPreview(item)}</span>` : ''}
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
    }

    if (currentIconLibrary === 'feather' && typeof feather !== 'undefined') {
        feather.replace();
    }

    if (currentIconLibrary === 'octicons') {
        loadOcticonsSVGs();
    }

    document.querySelectorAll('.search-copy-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const code = this.getAttribute('data-code');
            copyToClipboard(code, this);
        });
    });
}

function renderFilteredExamples(results) {
    const container = document.getElementById('content-container');
    const libraryData = getCurrentIconLibraryData();
    document.getElementById('content-title').textContent = results.length === libraryData.categories['examples'].items.length
        ? 'Icons'
        : `Icons (${results.length} found)`;

    if (results.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12 text-slate-500">
                <p>No icons found for "${escapeHtml(searchQuery)}"</p>
            </div>
        `;
        return;
    }

    if (currentIconLibrary === 'fontawesome' && currentFontAwesomeVersion === '7' && !fa7IconsLoaded) {
        container.insertAdjacentHTML('afterbegin', `
            <div class="mb-4 rounded-lg border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm text-indigo-700">
                Loading more Font Awesome 7 icons in the background...
            </div>
        `);
    }

    if (currentIconLibrary === 'fontawesome' && currentFontAwesomeVersion === '6' && !fa6IconsLoaded) {
        container.insertAdjacentHTML('afterbegin', `
            <div class="mb-4 rounded-lg border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-700">
                Loading more Font Awesome 6 icons in the background...
            </div>
        `);
    }

    const sortedResults = [...results].sort((a, b) => a.name.localeCompare(b.name));
    const isLimited = sortedResults.length > iconExampleLimit;
    const displayResults = isLimited ? sortedResults.slice(0, iconExampleLimit) : sortedResults;

    const hoverColor = {
        'bootstrap': 'hover:border-pink-200',
        'fontawesome': 'hover:border-blue-200',
        'feather': 'hover:border-cyan-200',
        'octicons': 'hover:border-slate-300'
    }[currentIconLibrary];
    const btnColor = {
        'bootstrap': 'bg-pink-100 hover:bg-pink-200 text-pink-700',
        'fontawesome': 'bg-blue-100 hover:bg-blue-200 text-blue-700',
        'feather': 'bg-cyan-100 hover:bg-cyan-200 text-cyan-700',
        'octicons': 'bg-slate-200 hover:bg-slate-300 text-slate-700'
    }[currentIconLibrary];

    container.innerHTML = `
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            ${displayResults.map(item => `
                <div class="border-2 border-slate-100 rounded-lg p-4 ${hoverColor} hover:shadow-md transition-all animate-slide-in text-center flex flex-col h-full">
                    <div class="text-4xl mb-3 text-slate-700">
                        ${renderIconPreview(item)}
                    </div>
                    <h3 class="text-sm font-semibold text-slate-900 mb-1">${item.name}</h3>
                    <p class="text-xs text-slate-500 mb-3 flex-grow">${item.description}</p>
                    <button data-code="${escapeHtml(item.code)}" class="search-copy-btn text-xs px-3 py-1.5 ${btnColor} rounded-md transition-colors w-full mt-auto">
                        Copy
                    </button>
                </div>
            `).join('')}
        </div>
        ${isLimited ? `
        <div class="mt-6 flex flex-col items-center justify-center text-center gap-2">
            <button id="load-more-icons" class="load-more-btn px-4 py-2 rounded-lg text-sm font-semibold transition-colors inline-flex items-center gap-2">
                <span class="load-more-spinner" aria-hidden="true"></span>
                <span class="load-more-text">Loading next batch...</span>
            </button>
            <div class="load-more-hint">We add 200 icons at a time to keep things fast.</div>
        </div>
        ` : ''}
    `;

    if (currentIconLibrary === 'feather' && typeof feather !== 'undefined') {
        feather.replace();
    }

    if (currentIconLibrary === 'octicons') {
        loadOcticonsSVGs();
    }

    document.querySelectorAll('.search-copy-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const code = this.getAttribute('data-code');
            copyToClipboard(code, this);
        });
    });

    const loadMoreBtn = document.getElementById('load-more-icons');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            if (loadMoreState.autoLoadInProgress) return;
            loadMoreState.autoLoadInProgress = true;
            iconExampleLimit += iconExampleStep;
            renderFilteredExamples(results);
        });
        setupAutoLoadMore(loadMoreBtn, () => {
            iconExampleLimit += iconExampleStep;
            renderFilteredExamples(results);
        }, loadMoreState);
    }
    loadMoreState.autoLoadInProgress = false;
}

function clearSearch() {
    searchQuery = '';
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
}

function findLibraryForCategory(category) {
    const currentData = getCurrentIconLibraryData();
    if (currentData?.categories?.[category]) {
        return currentIconLibrary;
    }
    for (const lib of Object.keys(iconsData)) {
        const libData = lib === 'fontawesome' && iconsData[lib].versions
            ? iconsData[lib].versions[currentFontAwesomeVersion] || iconsData[lib].versions[iconsData[lib].defaultVersion]
            : iconsData[lib];
        if (libData && libData.categories && libData.categories[category]) {
            return lib;
        }
    }
    return null;
}

function handleHashNavigation() {
    const hash = window.location.hash;
    if (!hash) return;

    const hashValue = hash.substring(1);
    const dashIndex = hashValue.indexOf('-');
    if (dashIndex <= 0) return;

    const category = hashValue.substring(0, dashIndex);
    if (currentCategory !== category) {
        const newLibrary = findLibraryForCategory(category);
        if (newLibrary) {
            currentIconLibrary = newLibrary;
            currentCategory = category;
            if (currentIconLibrary === 'fontawesome') {
                currentFontAwesomeVersion = (iconsData.fontawesome && iconsData.fontawesome.defaultVersion) ? iconsData.fontawesome.defaultVersion : '6';
            }
            renderLibrarySelector();
            updateFontAwesomeVersionSelectorVisibility();
            renderFontAwesomeVersionSelector();
            updateFontAwesomeStylesheet();
            renderSidebar();
            renderContent();
        }
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
    const library = findLibraryForCategory(category);
    if (library) {
        currentIconLibrary = library;
        currentCategory = category;
        return true;
    }
    return false;
}

const hasHashCategory = initFromHash();

renderLibrarySelector();
updateFontAwesomeVersionSelectorVisibility();
renderFontAwesomeVersionSelector();
updateFontAwesomeStylesheet();
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

const libraryButtons = document.querySelectorAll('.library-btn');
libraryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentIconLibrary = btn.dataset.library;
        iconExampleLimit = 200;
        clearSearch();
        renderLibrarySelector();
        if (currentIconLibrary === 'fontawesome') {
            currentFontAwesomeVersion = (iconsData.fontawesome && iconsData.fontawesome.defaultVersion) ? iconsData.fontawesome.defaultVersion : '6';
        }
        updateFontAwesomeVersionSelectorVisibility();
        renderFontAwesomeVersionSelector();
        updateFontAwesomeStylesheet();
        renderSidebar();
        renderContent();
    });
});

const faVersionButtons = document.querySelectorAll('.fa-version-btn');
faVersionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentFontAwesomeVersion = btn.dataset.faVersion;
        iconExampleLimit = 200;
        clearSearch();
        renderFontAwesomeVersionSelector();
        updateFontAwesomeStylesheet();
        if (currentIconLibrary === 'fontawesome' && currentFontAwesomeVersion === '7') {
            loadFontAwesome7Icons().then(() => {
                if (currentIconLibrary === 'fontawesome' && currentFontAwesomeVersion === '7') {
                    renderSidebar();
                    renderContent();
                }
            });
        }
        if (currentIconLibrary === 'fontawesome' && currentFontAwesomeVersion === '6') {
            loadFontAwesome6Icons().then(() => {
                if (currentIconLibrary === 'fontawesome' && currentFontAwesomeVersion === '6') {
                    renderSidebar();
                    renderContent();
                }
            });
        }
        if (currentIconLibrary === 'fontawesome' && currentFontAwesomeVersion === '5') {
            loadFontAwesome5Icons().then(() => {
                if (currentIconLibrary === 'fontawesome' && currentFontAwesomeVersion === '5') {
                    renderSidebar();
                    renderContent();
                }
            });
        }
        if (currentIconLibrary === 'fontawesome' && currentFontAwesomeVersion === '4') {
            loadFontAwesome4Icons().then(() => {
                if (currentIconLibrary === 'fontawesome' && currentFontAwesomeVersion === '4') {
                    renderSidebar();
                    renderContent();
                }
            });
        }
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

            if (currentCategory === 'examples') {
                renderFilteredExamples(results);
            } else {
                renderSearchResults(results);
                document.querySelectorAll('.category-btn').forEach(b => {
                    b.className = 'category-btn w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-slate-700 hover:bg-slate-50';
                });
            }
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
