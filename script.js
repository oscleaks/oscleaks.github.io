// Conteúdo das páginas para lazy loading
const pageContent = {
    'navigation': `
        <section class="section">
            <div class="container mx-auto px-4 py-8">
                <!-- Header -->
                <div class="section-header">
                    <div class="flex justify-between items-center mb-8">
                        <h1 class="section-title text-3xl font-bold text-white">BFDI x II 2025 MEET-UP LEAKS</h1>
                        <button class="cta-button outline" onclick="showPage('home')">
                            Back to Home
                        </button>
                    </div>
                </div>

                <!-- Tabs -->
                <div class="mission-tabs mb-6 flex space-x-2">
                    <button class="mission-tab active px-4 py-2 rounded-lg bg-gray-800 text-white" data-tab="leaks-overview">
                        Leaks Overview
                    </button>
                    <button class="mission-tab px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition" data-tab="quick-access">
                        Quick Access
                    </button>
                </div>

                <!-- Leaks Overview -->
                <div class="mission-content active" id="leaks-overview">
                    <div class="file-item mb-6">
                        <h3 class="text-xl font-bold mb-4 text-white">Exclusive Leaked Content</h3>
                        <p class="text-gray-300 mb-4">
                            Exclusive materials from the BFDI x II Tour 2025 event that leaked online:
                        </p>
                        <ul class="list-disc list-inside text-gray-300 space-y-2">
                            <li>TPOT Leaks</li>
                            <li>Inanimate Insanity Leaks</li>
                            <li>BFDIA Leaks</li>
                        </ul>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <!-- TPOT -->
                        <div class="file-item text-center bg-gray-800/70 p-4 rounded-xl hover:bg-gray-700 transition cursor-pointer" onclick="showPage('tpot')">
                            <img src="https://i.postimg.cc/c1tsCYhy/images-1-5.png" alt="TPOT Leaks" class="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg" loading="lazy">
                            <h3 class="text-xl font-bold mb-2 text-white">TPOT Leaks</h3>
                            <p class="text-gray-300 mb-4">TPOT full episodes and exclusive content</p>
                            <span class="mission-status bg-green-600/50 px-3 py-1 rounded-full text-sm">Leaked</span>
                        </div>

                        <!-- Inanimate Insanity -->
                        <div class="file-item text-center bg-gray-800/70 p-4 rounded-xl hover:bg-gray-700 transition cursor-pointer" onclick="showPage('ii')">
                            <img src="https://i.postimg.cc/nV9Hr72H/channels4-profile.jpg" alt="Inanimate Insanity Leaks" class="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg" loading="lazy">
                            <h3 class="text-xl font-bold mb-2 text-white">Inanimate Insanity Leaks</h3>
                            <p class="text-gray-300 mb-4">Behind the scenes and early footage</p>
                            <span class="mission-status bg-green-600/50 px-3 py-1 rounded-full text-sm">Leaked</span>
                        </div>

                        <!-- BFDIA -->
                        <div class="file-item text-center bg-gray-800/70 p-4 rounded-xl hover:bg-gray-700 transition cursor-pointer" onclick="showPage('bfdia')">
                            <img src="https://i.postimg.cc/c1tsCYhy/images-1-5.png" alt="BFDIA Leaks" class="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg" loading="lazy">
                            <h3 class="text-xl font-bold mb-2 text-white">BFDIA Leaks</h3>
                            <p class="text-gray-300 mb-4">BFDIA images, concepts and animations</p>
                            <span class="mission-status bg-green-600/50 px-3 py-1 rounded-full text-sm">Leaked</span>
                        </div>
                    </div>
                </div>

                <!-- Quick Access -->
                <div class="mission-content hidden" id="quick-access">
                    <div class="file-item">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <button class="cta-button primary flex flex-col items-center justify-center py-4 px-6" onclick="showPage('tpot')">
                                <img src="https://i.postimg.cc/c1tsCYhy/images-1-5.png" alt="TPOT" class="w-16 h-16 rounded-full mb-2 shadow-lg" loading="lazy">
                                <span>TPOT</span>
                            </button>
                            
                            <button class="cta-button primary flex flex-col items-center justify-center py-4 px-6" onclick="showPage('ii')">
                                <img src="https://i.postimg.cc/nV9Hr72H/channels4-profile.jpg" alt="Inanimate Insanity" class="w-16 h-16 rounded-full mb-2 shadow-lg" loading="lazy">
                                <span>Inanimate Insanity</span>
                            </button>
                            
                            <button class="cta-button primary flex flex-col items-center justify-center py-4 px-6" onclick="showPage('bfdia')">
                                <img src="https://i.postimg.cc/c1tsCYhy/images-1-5.png" alt="BFDIA" class="w-16 h-16 rounded-full mb-2 shadow-lg" loading="lazy">
                                <span>BFDIA</span>
                            </button>
                        </div>

                        <div class="bg-gray-700/50 p-4 rounded-lg">
                            <h3 class="text-lg font-bold mb-2 text-white">Quick Info</h3>
                            <p class="text-gray-300">
                                Select a section to view all leaked content from the BFDI x II Tour 2025.
                            </p>
                            <p class="text-gray-300 mt-2">
                                All content was leaked during the meet-up events between June and August 2025.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    
    'tpot': `
        <section class="section">
            <div class="container mx-auto px-4 py-8">
                <div class="section-header">
                    <div class="flex justify-between items-center mb-8">
                        <h1 class="section-title">TPOT Leaks</h1>
                        <button class="cta-button outline" onclick="showPage('navigation')">
                            Back to Tour
                        </button>
                    </div>
                </div>
                
                <div class="mission-tabs">
                    <button class="mission-tab active" data-tab="tpot19">TPOT 19</button>
                    <button class="mission-tab" data-tab="tpot20">TPOT 20</button>
                </div>
                
                <div class="mission-content active" id="tpot19">
                    <!-- TPOT 19 content -->
                    <div class="file-item mb-6" style="max-width: 800px; margin: 0 auto;">
                        <h4 class="text-xl font-bold mb-4 text-green-400">🎭 TPOT 19 Full Leak</h4>
                        <p class="text-gray-300 mb-6">
                            Complete TPOT 19 footage leaked from the BFDI x II Tour 2025 meet-up events.
                        </p>

                        <div class="space-y-6">
                            <!-- TPOT 19 Full Video -->
                            <div class="bg-green-500/10 p-4 rounded-lg border-l-4 border-green-500">
                                <div class="video-container">
                                    <video controls class="w-full" preload="metadata">
                                        <source src="https://files.catbox.moe/pfojk4.mp4" type="video/mp4">
                                    </video>
                                </div>
                                <p class="text-gray-300 mt-2 text-center">Full TPOT 19 video | BFDI x II Tour 2025</p>
                                <p class="text-gray-400 text-sm mt-1 text-center">📅 June 27 – July 13, 2025 (Meetup)</p>
                            </div>

                            <!-- YouTube Version -->
                            <div class="bg-blue-500/10 p-4 rounded-lg border-l-4 border-blue-500">
                                <div class="video-container">
                                    <iframe src="https://www.youtube.com/embed/VrsdG8wJGAg" 
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                        loading="lazy"
                                        title="Official TPOT 19 YouTube Release"></iframe>
                                </div>
                                <p class="text-gray-300 mt-2 text-center">Official YouTube release</p>
                                <p class="text-gray-400 text-sm mt-1 text-center">📅 July 14, 2025 – 12:59 PM EST</p>
                            </div>
                        </div>

                        <div class="text-center mt-6 p-4 bg-green-500/20 rounded-lg">
                            <p class="text-green-300 text-sm">
                                🎭 Full episode leaked during the meet-up events. Official release followed on YouTube.
                            </p>
                        </div>
                        <span class="mission-status mt-4 inline-block">Leaked</span>
                    </div>
                </div>
                
                <div class="mission-content" id="tpot20">
                    <!-- TPOT 20 content -->
                    <div class="file-item mb-6" style="max-width: 800px; margin: 0 auto;">
                        <h4 class="text-xl font-bold mb-4">Official TPOT 20 Teaser</h4>
                        <div class="twitter-container rounded-lg overflow-hidden mb-4">
                            <blockquote class="twitter-tweet" data-media-max-width="560">
                                <p lang="en" dir="ltr">It's nearly here! BFDI:TPOT 20 is releasing in theaters and on YouTube next week!
                                    <a href="https://t.co/fn1NdtuXbt">pic.twitter.com/fn1NdtuXbt</a>
                                </p>
                                &mdash; Jacknjellify (@jacknjellify)
                                <a href="https://twitter.com/jacknjellify/status/1976688399152238691?ref_src=twsrc%5Etfw">October 10, 2025</a>
                            </blockquote>
                            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                        </div>
                        <p class="text-gray-300">Official announcement from jacknjellify - TPOT 20 coming October 16 and 17!</p>
                        <p class="text-gray-400 text-sm mt-1">📅 October 16, 2025 - Theaters & YouTube on 17 (EST)</p>
                        <span class="mission-status mt-2 inline-block">Official</span>
                    </div>
                </div>
            </div>
        </section>
    `,
    
    // Adicione o conteúdo das outras páginas aqui...
    'ii': `<!-- II page content -->`,
    'bfdia': `<!-- BFDIA page content -->`,
    'downloads': `<!-- Downloads page content -->`,
    'chat': `<!-- Chat page content -->`,
    'credits': `<!-- Credits page content -->`
};

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Initialize all functionality
    initCarousel();
    initTabs();
    initChatTabs();
    initFooterTabs();
    initLazyLoading();
});

// Lazy loading functionality
function initLazyLoading() {
    // Observer para imagens com lazy loading
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Page Navigation com Lazy Loading
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        // Se é uma página lazy, carrega o conteúdo
        if (targetPage.classList.contains('lazy-page') && targetPage.getAttribute('data-loaded') === 'false') {
            loadLazyPage(pageId, targetPage);
        } else {
            targetPage.classList.add('active');
        }
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Re-initialize tabs after navigation
    setTimeout(() => {
        if (targetPage.getAttribute('data-loaded') === 'true') {
            initTabs();
            initChatTabs();
        }
    }, 100);
}

// Carrega página lazy
function loadLazyPage(pageId, pageElement) {
    pageElement.classList.add('loading');
    pageElement.setAttribute('data-loaded', 'loading');
    
    // Simula carregamento (em produção, isso seria instantâneo)
    setTimeout(() => {
        if (pageContent[pageId]) {
            pageElement.innerHTML = pageContent[pageId];
            pageElement.classList.remove('lazy-page', 'loading');
            pageElement.classList.add('active');
            pageElement.setAttribute('data-loaded', 'true');
            
            // Inicializa componentes da página
            initTabs();
            initChatTabs();
            
            // Carrega scripts específicos da página
            loadPageScripts(pageId);
        }
    }, 300);
}

// Carrega scripts específicos de cada página
function loadPageScripts(pageId) {
    switch(pageId) {
        case 'chat':
            // Carrega scripts de chat se necessário
            break;
        case 'tpot':
            // Carrega scripts do Twitter se necessário
            if (typeof twttr !== 'undefined') {
                twttr.widgets.load();
            }
            break;
    }
}

// Restante das funções (initCarousel, initTabs, etc.) mantidas iguais...
// [Inclua todas as outras funções do script anterior aqui]