// Dados das facas
const images = [
    { src: 'images/image1.jpg', thumbnail: 'images/thumbnail1.jpg', description: 'Aço 5160 / 6mm de espessura de lâmina / Lâmina 27 polegadas total (68,5cm) - 19 polegadas de lâmina (48,2cm) / Acabamento Percloreto / Cabo em Couro bovino enrolado / Bainha toda feita a mão em couro bovino.' },
    { src: 'images/image2.jpg', thumbnail: 'images/thumbnail2.jpg', description: 'Construída de forma integral em Damasco Aleatório / Aço 1075 com 15n20 / Bainha em couro de Búfalo com aplique de Elefante / Faca tem 9 polegadas de lâmina / Empunhadura com 14cm em Radica de Imbuia / A faca e bainha acompanham uma bela case estofada com ziper.' },
    { src: 'images/image3.jpg', thumbnail: 'images/thumbnail3.jpg', description: 'Faca para churrasco em Aço Inox / Madeira no cabo de Jacarandá violeta em madeira natural / Faca com 8 polegadas de lâmina.' },
    { src: 'images/image4.jpg', thumbnail: 'images/thumbnail4.jpg', description: 'Conjunto de 2 facas: Javalizeira e a de Caça / Facas Forjadas integralmente / Javalizeira com cabo Híbrido e Faca Caçador com cabo Claraiba em madeira natural / Bainhas todas trabalhadas para serem usadas ao mesmo tempo na cintura para caça.' },
    { src: 'images/image5.jpg', thumbnail: 'images/thumbnail5.jpg', description: 'Faca forjada a partir de uma chave combinada 32 / O cabo é enrolado com tento (nervo) bovino / Bainha costurada em formato de corrente.' },
    { src: 'images/image6.jpg', thumbnail: 'images/thumbnail6.jpg', description: 'Forjada integralmente com acabamento oxidado / Cabo Híbrido com pedaços de Pinho / Lâmina com 23.5cm e Faca inteira 37.5cm / Dorso da faca 4mm afinando na ponta e Largura de 4.8cm / Essa faca foi construída com um conceito de unir o requinte com o rústico / Oxidação manchada para combinar com o desenho da empunhadura.' },
    { src: 'images/image7.jpg', thumbnail: 'images/thumbnail7.jpg', description: 'Faca com acabamento por meio de oxidação / O nome do cliente foi personalizado na lâmina a seu pedido / O propósito desta faca foi para ser utilizada no dia-a-dia da fazenda, mas com um toque de muita qualidade.' },
    { src: 'images/image8.jpg', thumbnail: 'images/thumbnail8.jpg', description: 'Aço da lâmina: Aço 1075 com 15n20 / Empunhadura em chifre de Cervo legítimo / Colarinho esculpido em Damasco Integral / Finalização com revelação por Café / Lâmina com 26cm e a Faca inteira com 40cm / Dorso da faca com 5mm afinando na ponta e Largura da faca com 4cm / Acompanha uma bainha em couro de Búfalo com pele de Avestruz autêntico.' },
    { src: 'images/image9.jpg', thumbnail: 'images/thumbnail9.jpg', description: 'Faca em Aço Damasco' },
    { src: 'images/image10.jpg', thumbnail: 'images/thumbnail10.jpg', description: 'Chaira em Aço Inox' },
    { src: 'images/image11.jpg', thumbnail: 'images/thumbnail11.jpg', description: 'Faca em Aço' },
    { src: 'images/image12.jpg', thumbnail: 'images/thumbnail12.jpg', description: 'Faca em Aço' },
    { src: 'images/image13.jpg', thumbnail: 'images/thumbnail13.jpg', description: 'Faca em Aço' },
    { src: 'images/image14.jpg', thumbnail: 'images/thumbnail14.jpg', description: 'Faca em Aço' },
    { src: 'images/image15.jpg', thumbnail: 'images/thumbnail15.jpg', description: 'Faca em Aço' },
    { src: 'images/image16.jpg', thumbnail: 'images/thumbnail16.jpg', description: 'Faca em Aço' },
    { src: 'images/image17.jpg', thumbnail: 'images/thumbnail17.jpg', description: 'Faca Campineira' },
    { src: 'images/image18.jpg', thumbnail: 'images/thumbnail18.jpg', description: 'Faca em Aço' },
    { src: 'images/image19.jpg', thumbnail: 'images/thumbnail19.jpg', description: 'Faca em Aço' },
    { src: 'images/image20.jpg', thumbnail: 'images/thumbnail20.jpg', description: 'Faca em Aço' },
    { src: 'images/image21.jpg', thumbnail: 'images/thumbnail21.jpg', description: 'Faca em Aço - Resident Evil' },
    { src: 'images/image22.jpg', thumbnail: 'images/thumbnail22.jpg', description: 'Bowie Crocodilo Dundee' },
    { src: 'images/image23.jpg', thumbnail: 'images/thumbnail23.jpg', description: 'Machado Viking' },
    { src: 'images/image24.jpg', thumbnail: 'images/thumbnail24.jpg', description: 'Facas em Aço para Exportação (Uruguai)' },
    { src: 'images/image25.jpg', thumbnail: 'images/thumbnail25.jpg', description: 'Faca em Aço' },
    { src: 'images/image26.jpg', thumbnail: 'images/thumbnail26.jpg', description: 'Faca em Aço Damasco' },
    { src: 'images/image27.jpg', thumbnail: 'images/thumbnail27.jpg', description: 'Cutelo em Aço' },
    { src: 'images/image28.jpg', thumbnail: 'images/thumbnail28.jpg', description: 'Cutelo em Aço' },
    { src: 'images/image29.jpg', thumbnail: 'images/thumbnail29.jpg', description: 'Faca Bowie' },
    { src: 'images/image30.jpg', thumbnail: 'images/thumbnail30.jpg', description: 'Facas em Aço para Exportação (Uruguai)' },
    { src: 'images/image31.jpg', thumbnail: 'images/thumbnail31.jpg', description: 'Facas Chef em Aço Inox com cabo exótico (casco de cavalo)' },
    { src: 'images/image32.jpg', thumbnail: 'images/thumbnail32.jpg', description: 'Faca Bowie' },
    { src: 'images/image33.jpg', thumbnail: 'images/thumbnail33.jpg', description: 'Facas em Aço para Exportação (Uruguai)' },
    { src: 'images/image34.jpg', thumbnail: 'images/thumbnail34.jpg', description: 'Faca Kukri Nepalesa' },
    { src: 'images/image35.jpg', thumbnail: 'images/thumbnail35.jpg', description: 'Coleção de facas Bowie e Kukri Nepalesa' },
    { src: 'images/image36.jpg', thumbnail: 'images/thumbnail36.jpg', description: 'Faca em Aço e Chaira em Inox' },
    { src: 'images/image37.jpg', thumbnail: 'images/thumbnail37.jpg', description: 'Faca em Aço' },
    { src: 'images/image38.jpg', thumbnail: 'images/thumbnail38.jpg', description: 'Faca Kukri' },
    { src: 'images/image39.jpg', thumbnail: 'images/thumbnail39.jpg', description: 'Faca Kukri' },
    { src: 'images/image40.jpg', thumbnail: 'images/thumbnail40.jpg', description: 'Machado Nórdico com empunhadura em Teca' },
    { src: 'images/image41.jpg', thumbnail: 'images/thumbnail41.jpg', description: 'Navalha em Aço Inox 14C28N com empunhadura em chifre de Cervo legítimo e caixa de madeira natural esculpida' },
    { src: 'images/image42.jpg', thumbnail: 'images/thumbnail42.jpg', description: 'Faca em Aço Inox' },
    { src: 'images/image43.jpg', thumbnail: 'images/thumbnail43.jpg', description: 'Faca em Aço Inox' },
    { src: 'images/image44.jpg', thumbnail: 'images/thumbnail44.jpg', description: 'Machado Leviathan - Kratos - God Of War' },
    { src: 'images/image45.jpg', thumbnail: 'images/thumbnail45.jpg', description: 'O Livro de Eli' },
    { src: 'images/image46.jpg', thumbnail: 'images/thumbnail46.jpg', description: 'Machete réplica do filme Rambo 4 (2008)' },

];

// Dados dos acessórios
const accessories = [
    { src: 'images/acessories/image1.jpg', thumbnail: 'images/acessories/thumbnail1.jpg', description: 'Tábua de Carne' },
    { src: 'images/acessories/image2.jpg', thumbnail: 'images/acessories/thumbnail2.jpg', description: 'Tábua de Carne' },
    { src: 'images/acessories/image3.jpg', thumbnail: 'images/acessories/thumbnail3.jpg', description: 'Tábua de Carne' },
];

// Função genérica para abrir modal
function openModal(modalId, items, index) {
    const modal = document.getElementById(modalId);
    const modalImage = modal.querySelector('.modal-image');
    const modalDescription = modal.querySelector('#' + modalId + '-description');

    if (!modal || !modalImage || !modalDescription || index < 0 || index >= items.length) {
        console.error('Erro ao abrir modal: parâmetros inválidos');
        return;
    }

    modalImage.src = items[index].src;
    modalDescription.textContent = items[index].description;
    modal.style.display = 'block';

    // Fecha o modal ao clicar na imagem
    modalImage.onclick = () => closeModal(modalId);
}

// Função genérica para fechar modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Função para gerar thumbnails dinamicamente na ordem inversa
function generateThumbnails(containerId, items, modalId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Itera do último item até o primeiro
    for (let i = items.length - 1; i >= 0; i--) {
        const img = document.createElement('img');
        img.className = 'thumbnail';
        img.src = items[i].thumbnail;
        img.alt = items[i].description.split(' / ')[0]; // Usa a primeira parte da descrição como alt
        img.addEventListener('click', () => openModal(modalId, items, i));
        container.appendChild(img);
    }
}

// Inicialização ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    generateThumbnails('knives', images, 'modal');
    generateThumbnails('acessories-grid', accessories, 'acessories-modal');

    // Fecha modais ao clicar fora
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal.id);
        });
    });
});