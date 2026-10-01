# Projeto Parceiros do Amanhã
Projeto acadêmico de site de ONG desenvolvido em HTML5, por Jonathan Padilha.


## Desafios

### Desafio 1 — HTML5

Projeto acadêmico de um site para a organização fictícia Parceiros do Amanhã, desenvolvido em HTML5. O objetivo desta etapa foi estruturar o conteúdo e a navegação do site antes da aplicação dos estilos CSS, trabalhada no Desafio 2.

##### Páginas

- `desafio-01-html-puro/index.html` — apresenta a organização, sua missão, visão e valores, além de orientar o visitante sobre como participar.
- `desafio-01-html-puro/projetos.html` — descreve os projetos sociais, as formas de voluntariado e as campanhas de doação.
- `desafio-01-html-puro/cadastro.html` — contém um formulário para registrar o interesse em atuar como voluntário.

##### Recursos utilizados

- Elementos semânticos do HTML, como header, nav, main, section, article e footer.
- Links entre as páginas e navegação por seções com identificadores (id).
- Imagem com texto alternativo (alt) e uso de picture para oferecer formatos diferentes.
- Formulário organizado com fieldset, legend e label, incluindo atributos como required, type, pattern e maxlength para validação nativa do navegador.
- Recursos de acessibilidade, como rótulos associados aos campos e indicação da página atual com aria-current.

### Desafio 2 — Interface responsiva com CSS3

Nesta etapa, apliquei CSS3 às páginas da ONG Parceiros do Amanhã, construídas no Desafio 1. O objetivo foi criar uma identidade visual consistente, organizar o conteúdo em diferentes tamanhos de tela e oferecer retorno visual durante a navegação e o preenchimento do formulário.

#### Páginas e arquivos

| Página | Estilos | Conteúdo |
| --- | --- | --- |
| `desafio-02-html-css/index.html` | `styles/index.css` | Apresentação da ONG e formas de participação |
| `desafio-02-html-css/projetos.html` | `styles/projetos.css` | Projetos, voluntariado e doações |
| `desafio-02-html-css/cadastro.html` | `styles/cadastro.css` | Formulário de interesse em voluntariado |

As imagens utilizadas pelas páginas estão na pasta `imagens/`.

#### Design system

Utilizei variáveis CSS em `:root` para padronizar cores, tamanhos de texto e espaçamentos. Isso permite ajustar valores recorrentes sem procurar cada declaração ao longo da folha de estilos.

| Grupo | Tokens utilizados | Aplicação |
| --- | --- | --- |
| Cores | `--azul-principal`, `--verde`, `--amarelo`, `--laranja`, `--texto`, `--fundo`, `--branco` | Cabeçalho, rodapé, textos, links, botões e estados do formulário |
| Tipografia | `--texto-pequeno`, `--texto-padrao`, `--texto-destaque`, `--titulo-secundario`, `--titulo-principal` | Hierarquia de títulos, conteúdo e textos auxiliares |
| Espaçamentos | `--espaco-pequeno`, `--espaco-medio`, `--espaco-grande`, `--espaco-extra` | Campos, botões, cartões, seções e distância entre componentes |

Para favorecer a leitura, usei texto escuro sobre fundos claros nas áreas de conteúdo e texto claro sobre o azul escuro no cabeçalho e no rodapé. Os estados de validação combinam mudanças de borda e cor com mensagens escritas, para que a identificação de erros não dependa apenas da cor. Esta descrição registra as escolhas visuais; ainda não representa uma medição numérica de contraste.

#### Layout e responsividade

Apliquei **CSS Grid com doze colunas** na organização de áreas e dos cartões de projetos. Utilizei **Flexbox** para distribuir elementos da navegação e alinhar o conteúdo interno dos cartões. As regras `@media` adaptam a interface em cinco pontos de quebra: 1200 px, 992 px, 768 px, 576 px e 480 px.

Em telas menores, a navegação horizontal dá lugar a um menu acionado pelo usuário. Ele foi construído com `<details>` e `<summary>`, permitindo abrir e fechar os links sem JavaScript.

#### Interações e formulário

Os cartões de projetos possuem estados visuais para passagem do cursor e foco em elementos internos. Links, botões e campos do formulário também recebem destaque durante a interação, incluindo foco visível para navegação por teclado.

O formulário usa validação nativa do HTML, com atributos como `required`, `type` e `pattern`. O CSS apresenta estados visuais de preenchimento válido ou inválido e exibe mensagens próximas aos campos que precisam de correção. A página de cadastro também contém um aviso contextual e um modal informativo. Nesta etapa, o formulário apresenta e valida os dados no navegador, mas não os envia para um serviço.

#### Próximas melhorias

Como evolução do design system, pretendo ampliar a escala de espaçamentos conforme surgirem novas necessidades e manter documentado onde cada token é aplicado. Também pretendo verificar numericamente o contraste das principais combinações de cores e centralizar os estilos compartilhados pelas três páginas para facilitar a manutenção.

### Desafio 3 — JavaScript e interatividade

Este desafio dá continuidade ao site da ONG fictícia **Parceiros do Amanhã**, desenvolvido nas etapas anteriores com HTML5 e CSS3. O objetivo foi aplicar JavaScript para implementar navegação dinâmica, validação de formulários e armazenamento local.

##### Funcionalidades implementadas

- **Single Page Application (SPA):** navegação entre Início, Projetos e Cadastro sem recarregar o documento inteiro.
- **Roteamento pelo hash:** identificação da tela pela URL e atualização do conteúdo principal pelo DOM.
- **Templates dinâmicos:** geração das telas com funções e template literals, utilizando `map()` para construir os cards de projetos.
- **Validação do formulário:** verificação de campos obrigatórios, formatos e data de nascimento, com idade mínima de 18 anos.
- **Máscaras de preenchimento:** formatação automática de CPF, CEP e telefone.
- **Feedback visual:** mensagens de erro por campo e indicação do resultado da validação.
- **Persistência de rascunho:** salvamento no `localStorage` e restauração ao retornar à tela de cadastro.
- **Modal informativo:** abertura e fechamento por eventos de clique.

A verificação do CPF considera seu formato; não calcula os dígitos verificadores.

#### Tecnologias utilizadas

- HTML5 e CSS3
- JavaScript com módulos ES
- API DOM e eventos do navegador
- `localStorage` e JSON
- Day.js com o plugin `customParseFormat`, para validação de datas e cálculo da idade

#### Organização do JavaScript

| Arquivo | Responsabilidade |
|---|---|
| `js/main.js` | Inicializar a aplicação e controlar os eventos do modal. |
| `js/modules/nav.js` | Gerenciar as rotas e renderizar a tela correspondente. |
| `js/modules/templates.js` | Construir o conteúdo HTML das telas. |
| `js/modules/validation.js` | Aplicar máscaras, validar campos e apresentar mensagens. |
| `js/modules/storage.js` | Salvar e restaurar o rascunho do formulário. |

Os identificadores do JavaScript foram padronizados em inglês. Os textos da interface e os comentários permanecem em português.

#### Limitações

O formulário é uma demonstração de validação no navegador: **nenhum cadastro é enviado a um servidor**. Os dados permanecem como rascunho no navegador utilizado e podem ser removidos pela limpeza dos dados do site.

#### Aprendizados

A atividade permitiu praticar funções, condições, arrays, manipulação do DOM, eventos, expressões regulares e organização em módulos. Também proporcionou uma primeira experiência com bibliotecas externas e com a investigação de problemas pelo console.

O código foi estudado e simplificado durante o desenvolvimento para facilitar sua compreensão e manutenção, considerando o nível inicial de aprendizagem em JavaScript.