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

    // Ao navegar para o rodapé, o teclado deve acompanhar a rolagem.
    function focusContact() {
        const heading = document.getElementById('titulo-contato');
        heading.focus({ preventScroll: true });
        heading.scrollIntoView();
    }

    function renderScreen() {
        let destination = window.location.hash.slice(1);
        if (destination === '') {
            destination = 'inicio';
        }

        if (destination === 'contato' && currentScreen !== null) {
            focusContact();
            return;
        }

        let screenName = destination;
        if (destination === 'contato') {
            screenName = 'inicio';
        }

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
            focusContact();
        } else {
            const heading = content.querySelector('h1');
            heading.setAttribute('tabindex', '-1');
            heading.focus({ preventScroll: true });
            window.scrollTo(0, 0);
        }
    }

    document.querySelector('header nav').addEventListener('click', function (event) {
        const link = event.target.closest('a');
        if (link && link.getAttribute('href') === window.location.hash) {
            renderScreen();
        }
    });

    window.addEventListener('hashchange', renderScreen);
    renderScreen();
}