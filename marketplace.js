// ============================================================
//  MARKETPLACE DE COLEÇÕES — Script
//
//  Como adicionar peças à vitrine:
//  1. Coloque as imagens na pasta "images-temp/"
//  2. Coloque as thumbnails na pasta "images-temp/" com prefixo "thumbnail"
//     Ex: thumbnail1.jpg para a imagem image1.jpg
//  3. Adicione os dados da peça no array "marketplaceItems" abaixo
//
//  Campos disponíveis por item:
//    src         — caminho da imagem grande (ex: 'images-temp/image1.jpg')
//    thumbnail   — caminho da thumbnail    (ex: 'images-temp/thumbnail1.jpg')
//    description — descrição da peça
//    price       — preço (ex: 'R$ 850,00') — deixe '' para não exibir
//    seller      — nome/apelido do vendedor (ex: 'Coleção João S.') — opcional
// ============================================================

const marketplaceItems = [
    // Exemplo (descomente e edite para adicionar peças):
    // {
    //     src: 'images-temp/image1.jpg',
    //     thumbnail: 'images-temp/thumbnail1.jpg',
    //     description: 'Faca Bowie em Aço Damasco / Cabo em chifre de veado legítimo / Bainha em couro bovino artesanal / Lâmina 22cm.',
    //     price: 'R$ 1.200,00',
    //     seller: 'Coleção Particular'
    // },
];

// ============================================================
//  Funções de Modal (mesma lógica da página principal)
// ============================================================

function openModal(modalId, items, index) {
    const modal = document.getElementById(modalId);
    if (!modal || index < 0 || index >= items.length) return;

    const modalImage = modal.querySelector('.modal-image');
    const descId = modalId + '-description';
    const modalDescription = document.getElementById(descId);

    modalImage.src = items[index].src;
    modalImage.alt = items[index].description.split(' / ')[0];
    modalImage.style.cursor = 'zoom-out';
    modalImage.onclick = () => closeModal(modalId);
    if (modalDescription) modalDescription.textContent = items[index].description;

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
    }
}

// ============================================================
//  Geração da galeria
// ============================================================

function generateMarketplaceGrid() {
    const container = document.getElementById('marketplace-grid');
    const emptyState = document.getElementById('empty-state');
    if (!container) return;

    if (marketplaceItems.length === 0) {
        // Mostra estado vazio
        if (emptyState) emptyState.classList.remove('hidden');
        return;
    }

    // Esconde estado vazio
    if (emptyState) emptyState.classList.add('hidden');

    // Gera do último para o primeiro (mais recente no topo)
    for (let i = marketplaceItems.length - 1; i >= 0; i--) {
        const item = marketplaceItems[i];
        const wrap = document.createElement('div');
        wrap.className = 'thumb-wrap';

        // Badge de preço (se houver)
        if (item.price) {
            const priceBadge = document.createElement('div');
            priceBadge.className = 'price-badge';
            priceBadge.textContent = item.price;
            wrap.appendChild(priceBadge);
        }

        // Badge do vendedor (se houver)
        if (item.seller) {
            const sellerBadge = document.createElement('div');
            sellerBadge.className = 'seller-badge';
            sellerBadge.textContent = item.seller;
            wrap.appendChild(sellerBadge);
        }

        const img = document.createElement('img');
        img.src = item.thumbnail;
        img.alt = item.description.split(' / ')[0];
        img.loading = 'lazy';

        const label = document.createElement('div');
        label.className = 'thumb-label';
        label.textContent = item.description.split(' / ')[0];

        const icon = document.createElement('div');
        icon.className = 'thumb-zoom-icon';
        icon.innerHTML = '+';

        wrap.appendChild(img);
        wrap.appendChild(label);
        wrap.appendChild(icon);
        wrap.addEventListener('click', () => openModal('marketplace-modal', marketplaceItems, i));

        container.appendChild(wrap);
    }
}

// ============================================================
//  Menu mobile
// ============================================================

function initMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const nav = document.querySelector('nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => nav.classList.toggle('is-open'));
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('is-open'));
    });
}

// ============================================================
//  Header scroll effect
// ============================================================

function initHeaderScroll() {
    const header = document.getElementById('site-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.style.background = window.scrollY > 60
            ? 'rgba(14, 12, 10, 0.98)'
            : 'rgba(14, 12, 10, 0.9)';
    }, { passive: true });
}

// ============================================================
//  Animações de entrada
// ============================================================

function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    // Anima step cards
    document.querySelectorAll('.step-card').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`;
        observer.observe(el);
    });

    // Anima thumbnails
    document.querySelectorAll('.thumb-wrap').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(16px)';
        el.style.transition = `opacity 0.5s ease ${(i % 6) * 0.06}s, transform 0.5s ease ${(i % 6) * 0.06}s`;
        observer.observe(el);
    });
}

// ============================================================
//  Init
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    generateMarketplaceGrid();
    initMobileMenu();
    initHeaderScroll();
    initScrollAnimations();

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.is-open').forEach(m => closeModal(m.id));
        }
    });
});
