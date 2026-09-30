import { criarTelaInicio, criarTelaProjetos, criarTelaCadastro } from './templates.js';

// Cada rota associa um nome de tela ao título, ao CSS e ao template.
const rotas = {
    inicio: {
        titulo: 'Início',
        css: '../css/index.css',
        template: criarTelaInicio
    },
    projetos: {
        titulo: 'Projetos',
        css: '../css/projetos.css',
        template: criarTelaProjetos
    },
    cadastro: {
        titulo: 'Cadastro',
        css: '../css/cadastro.css',
        template: criarTelaCadastro
    }
};

export function iniciarNavegacao() {
    const conteudo = document.getElementById('conteudo-principal');
    const estilo = document.getElementById('estilo-pagina');
    let telaAtual = null;

    function exibirTela() {
        // Exemplo: '#projetos' passa a ser 'projetos'.
        const destino = window.location.hash.slice(1) || 'inicio';

        // #contato é uma âncora do rodapé, e não uma tela.
        if (destino === 'contato' && telaAtual !== null) {
            document.getElementById('contato').scrollIntoView();
            return;
        }

        const nomeTela = destino === 'contato' ? 'inicio' : destino;
        const existe = Object.hasOwn(rotas, nomeTela);
        const rota = existe ? rotas[nomeTela] : null;

        // Uma âncora do rodapé não provoca a reconstrução da tela atual.
        if (telaAtual !== nomeTela) {
            conteudo.innerHTML = rota
                ? rota.template()
                : '<h1>Tela não encontrada</h1><p><a href="#inicio">Voltar ao início</a></p>';

            const novoCss = rota ? rota.css : rotas.inicio.css;
            if (estilo.getAttribute('href') !== novoCss) {
                estilo.setAttribute('href', novoCss);
            }
            document.title = `${rota ? rota.titulo : 'Tela não encontrada'} | Parceiros do Amanhã`;
            telaAtual = nomeTela;
        }

        // Atualiza os menus desktop e mobile, incluindo acessibilidade.
        document.querySelectorAll('header nav a').forEach(link => {
            if (existe && link.getAttribute('href') === `#${nomeTela}`) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });

        const menuMobile = document.querySelector('.menu-mobile');
        if (menuMobile) menuMobile.open = false;

        if (destino === 'contato') {
            document.getElementById('contato').scrollIntoView();
        } else {
            const titulo = conteudo.querySelector('h1');
            titulo.setAttribute('tabindex', '-1');
            titulo.focus({ preventScroll: true });
            window.scrollTo(0, 0);
        }
    }

    // Também funciona ao usar os botões Voltar e Avançar do navegador.
    window.addEventListener('hashchange', exibirTela);
    exibirTela();
}
