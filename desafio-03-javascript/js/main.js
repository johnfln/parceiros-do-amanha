import { iniciarNavegacao } from './modules/navegacao.js';

iniciarNavegacao();

// Delegação de eventos: o <main> permanece no DOM quando as telas mudam.
const conteudo = document.getElementById('conteudo-principal');

conteudo.addEventListener('click', evento => {
    const botao = evento.target.closest('button[data-modal]');
    if (!botao) return;

    const modal = document.getElementById('informacoes-cadastro');
    if (botao.dataset.modal === 'abrir') {
        modal.showModal();
    } else {
        modal.close();
    }
});

// Nesta primeira etapa, o formulário usa a validação nativa do HTML.
// Evitamos o envio padrão, que recarregaria a página e colocaria dados na URL.
conteudo.addEventListener('submit', evento => {
    if (evento.target.id !== 'formulario-cadastro') return;
    evento.preventDefault();
    document.getElementById('feedback-cadastro').textContent =
        'Demonstração: nenhum cadastro foi enviado ou salvo.';
});
