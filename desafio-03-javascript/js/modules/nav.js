import { createHomeScreen, createProjectsScreen, createRegistrationScreen } from './templates.js';
import { restoreDraft } from './storage.js';

const routes = {
    inicio: { title: 'Início', css: '../css/index.css', template: createHomeScreen },
    projetos: { title: 'Projetos', css: '../css/projetos.css', template: createProjectsScreen },
    cadastro: { title: 'Cadastro', css: '../css/cadastro.css', template: createRegistrationScreen }
};

export function startNavigation() {
    const content = document.getElementById('conteudo-principal');
    const stylesheet = document.getElementById('estilo-pagina');
    let currentScreen = null;

    function renderScreen() {
        let destination = window.location.hash.slice(1);
        if (destination === '') {
            destination = 'inicio';
        }

        // Contato é o rodapé: conserva a tela que já está aberta.
        if (destination === 'contato' && currentScreen !== null) {
            document.getElementById('contato').scrollIntoView();
            return;
        }

        let screenName = destination;
        if (destination === 'contato') {
            screenName = 'inicio';
        }

        // Só consultamos o objeto depois de conferir os nomes aceitos.
        let route = null;
        if (screenName === 'inicio' || screenName === 'projetos' || screenName === 'cadastro') {
            route = routes[screenName];
        }

        if (currentScreen !== screenName) {
            if (route !== null) {
                content.innerHTML = route.template();
                stylesheet.setAttribute('href', route.css);
                document.title = `${route.title} | Parceiros do Amanhã`;
            } else {
                content.innerHTML = '<h1>Tela não encontrada</h1><p><a href="#inicio">Voltar ao início</a></p>';
                stylesheet.setAttribute('href', routes.inicio.css);
                document.title = 'Tela não encontrada | Parceiros do Amanhã';
            }

            // A restauração acontece depois de criar os campos no DOM.
            restoreDraft();
            currentScreen = screenName;
        }

        const links = document.querySelectorAll('header nav a');
        links.forEach(function (link) {
            if (route !== null && link.getAttribute('href') === `#${screenName}`) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });

        const mobileMenu = document.querySelector('.menu-mobile');
        if (mobileMenu) {
            mobileMenu.open = false;
        }

        if (destination === 'contato') {
            document.getElementById('contato').scrollIntoView();
        } else {
            const heading = content.querySelector('h1');
            heading.setAttribute('tabindex', '-1');
            heading.focus({ preventScroll: true });
            window.scrollTo(0, 0);
        }
    }

    window.addEventListener('hashchange', renderScreen);
    renderScreen();
}