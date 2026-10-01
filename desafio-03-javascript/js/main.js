import { startNavigation } from './modules/nav.js';
import { startValidation } from './modules/validation.js';

const content = document.getElementById('conteudo-principal');

startNavigation();
startValidation(content);

content.addEventListener('click', function (event) {
    const button = event.target.closest('button[data-modal]');
    if (!button) {
        return;
    }

    const modal = document.getElementById('informacoes-cadastro');
    if (button.dataset.modal === 'abrir') {
        modal.showModal();
    } else {
        modal.close();
    }
});
