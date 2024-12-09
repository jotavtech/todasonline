function showContent(sectionId) {
    // Ocultar todas as seções
    const sections = document.querySelectorAll('.posts-grid');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Exibir a seção correspondente
    document.getElementById(sectionId).style.display = 'grid';

    // Atualizar a aba ativa
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`.tab[onclick="showContent('${sectionId}')"]`).classList.add('active');
}
// Função para exibir o modal
function openModal(content) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>${content}</p>
        </div>
    `;

    document.body.appendChild(modal);

    // Exibir o modal
    modal.style.display = 'block';

    // Fechar o modal ao clicar no "x"
    modal.querySelector('.close').addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.removeChild(modal);
    });

    // Fechar o modal ao clicar fora do conteúdo
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.removeChild(modal);
        }
    });
}

// Adiciona eventos para abrir o modal
document.addEventListener('DOMContentLoaded', () => {
    const aboutButtons = document.querySelectorAll('.about-button, .about-button-prive');

    aboutButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.classList.contains('about-button-prive')
                ? 'Conteúdo exclusivo para assinantes.'
                : 'Conteúdo público sobre mim.';
            openModal(content);
        });
    });
});
