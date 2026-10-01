// Recursos compartilhados pelo cabeçalho e pelas três telas da SPA.
export function startAccessibility() {
    const contrastButton = document.getElementById('alternar-contraste');

    contrastButton.addEventListener('click', function () {
        const enabled = document.body.classList.toggle('alto-contraste');
        // O leitor de tela informa se o botão de alternância está pressionado.
        contrastButton.setAttribute('aria-pressed', String(enabled));
    });

    const skipLink = document.querySelector('.pular-conteudo');
    skipLink.addEventListener('click', function (event) {
        // Este é um salto dentro da página, não uma rota da SPA.
        event.preventDefault();
        const content = document.getElementById('conteudo-principal');
        content.focus();
        content.scrollIntoView();
    });
}
