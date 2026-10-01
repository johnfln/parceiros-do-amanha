# Projeto Parceiros do Amanhã
Projeto acadêmico de site para a ONG fictícia Parceiros do Amanhã, desenvolvido progressivamente com HTML5, CSS3 e JavaScript, por Jonathan Padilha.


## Desafios

### Desafio 1 — HTML5

Projeto acadêmico de um site para a organização fictícia Parceiros do Amanhã, desenvolvido em HTML5. O objetivo desta etapa foi estruturar o conteúdo e a navegação do site antes da aplicação dos estilos CSS, trabalhada no Desafio 2.

#### Páginas

- `desafio-01-html-puro/index.html` — apresenta a organização, sua missão, visão e valores, além de orientar o visitante sobre como participar.
- `desafio-01-html-puro/projetos.html` — descreve os projetos sociais, as formas de voluntariado e as campanhas de doação.
- `desafio-01-html-puro/cadastro.html` — contém um formulário para registrar o interesse em atuar como voluntário.

#### Recursos utilizados

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

#### Funcionalidades implementadas

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

### Desafio 4 — Versionamento, acessibilidade e publicação

A pasta `desafio-04/` dá continuidade à versão final do desafio 3. Esta etapa organiza o desenvolvimento com GitFlow, registra tarefas e revisões no GitHub e prevê a avaliação de acessibilidade, a preparação para publicação e a atualização da documentação.

O desafio está em desenvolvimento. A revisão de acessibilidade conforme WCAG 2.1 AA, as otimizações e a publicação ainda precisam ser concluídas e documentadas. Os recursos de acessibilidade existentes não representam, por si só, comprovação de conformidade com o nível AA.

## Execução local

### Pré-requisitos

- Git, para obter o repositório e acompanhar as branches.
- Visual Studio Code com a extensão **Live Server**, de Ritwick Dey.
- Navegador atualizado com suporte a módulos JavaScript ES.
- Conexão com a internet para carregar o Day.js e seu plugin pela CDN.

### Obter e executar o projeto

1. Clone o repositório e entre na pasta criada:

   ```bash
   git clone https://github.com/johnfln/parceiros-do-amanha.git
   cd parceiros-do-amanha
   ```

2. Para acessar o desafio 4 durante seu desenvolvimento, selecione a branch:

   ```bash
   git switch develop
   ```

3. Abra a pasta do repositório no VS Code pelo menu **File → Open Folder**.
4. Instale a extensão Live Server, caso ainda não esteja instalada.
5. No explorador do VS Code, localize o arquivo de entrada `index.html` dentro de `desafio-04/`, clique com o botão direito e selecione **Open with Live Server**.
6. Utilize o endereço HTTP aberto pelo Live Server e navegue entre Início, Projetos e Cadastro.

O servidor local é necessário para servir os módulos JavaScript pelo protocolo HTTP. Evite executar a SPA abrindo o HTML diretamente pelo protocolo `file://`.

As entregas anteriores continuam nas respectivas pastas. Enquanto o desafio 4 estiver apenas em `develop`, ele não aparecerá em uma cópia que permaneça na branch `main`.

## Dependências e carregamento

A aplicação utiliza HTML5, CSS3 e JavaScript nativo com módulos ES. A dependência externa é **Day.js 1.11.13**, com o plugin **CustomParseFormat**, carregados por CDN no HTML.

A ordem de carregamento é: Day.js, CustomParseFormat e o script principal com `type="module"`. No módulo de validação, o plugin é ativado uma vez para interpretar a data de nascimento no formato `YYYY-MM-DD` com validação estrita. A biblioteca também verifica datas futuras e calcula a idade mínima de 18 anos.

Esta versão não utiliza instalação de pacotes NPM. Portanto, não há comando `npm install` para executá-la. Sem acesso à CDN, a dependência de datas pode deixar de carregar e impedir a inicialização dos módulos que a utilizam.

## Organização e manutenção

Cada entrega permanece em sua própria pasta. Em `desafio-04/`, mantenho a organização herdada do desafio 3: HTML, folhas de estilo, imagens e módulos JavaScript separados por responsabilidade.

| Arquivo JavaScript | Onde realizar alterações |
| --- | --- |
| `main.js` | Inicialização da aplicação e eventos do modal. |
| `nav.js` | Identificação de rotas, renderização e atualização da navegação. |
| `templates.js` | Conteúdo das telas, dados e cartões dos projetos. |
| `validation.js` | Máscaras, regras, eventos e mensagens de validação. |
| `storage.js` | Gravação e recuperação do rascunho. |

Ao alterar IDs de campos ou nomes de arquivos, confira também os seletores, imports e referências nos templates. A persistência relaciona os valores aos IDs dos campos.

## Verificações manuais

Não há suíte automatizada de testes incluída no repositório nesta versão, nem comando `npm test`. Execute a aplicação pelo Live Server e utilize o roteiro abaixo. A tabela registra resultados esperados; não declara que todos os testes já foram executados na versão do desafio 4.

| Verificação | Resultado esperado |
| --- | --- |
| Navegar entre Início, Projetos e Cadastro | A tela muda sem recarregar o documento inteiro. |
| Usar Voltar e Avançar do navegador | A tela acompanha a rota no endereço. |
| Informar uma rota desconhecida no hash | É apresentada a tela não encontrada. |
| Abrir e fechar o modal | Os controles executam as ações correspondentes. |
| Digitar CPF, CEP e telefone | As máscaras são aplicadas durante o preenchimento. |
| Enviar campos obrigatórios vazios ou inválidos | Aparecem mensagens e o primeiro erro recebe foco. |
| Corrigir um campo inválido | A mensagem e o estilo acompanham a correção. |
| Informar nascimento futuro ou idade inferior a 18 anos | A validação impede a aprovação do formulário. |
| Informar alguém que completa 18 anos hoje | A data passa pela regra de idade mínima. |
| Recarregar a tela ou sair e retornar ao cadastro | O rascunho é recuperado no mesmo navegador e origem. |
| Consultar o Console durante os fluxos | Não há erros JavaScript. |

Na revisão de acessibilidade, também serão avaliados teclado, foco visível, ordem de navegação, contraste, alternativas textuais, rótulos e mensagens. Registre os resultados nas issues e PRs, indicando o que foi testado, os problemas encontrados e as correções. A avaliação AA requer verificar os critérios aplicáveis, além desse roteiro inicial.

## Versionamento e colaboração

### Branches — GitFlow

| Branch | Finalidade |
| --- | --- |
| `main` | Versões concluídas e verificadas. |
| `develop` | Integração do trabalho em desenvolvimento. |
| `feature/...` | Melhorias desenvolvidas a partir de `develop`, com retorno por PR. |
| `docs/...` | Alterações de documentação, seguindo o mesmo fluxo de uma feature. |
| `release/...` | Preparação da entrega a partir de `develop`, com integração em `main` e `develop`. |
| `hotfix/...` | Correção urgente a partir de `main`, com retorno a `main` e `develop`. |

Branches temporárias são criadas quando existe trabalho correspondente. A branch `feature/estrutura-desafio-4` foi utilizada para preparar a pasta da nova entrega.

Para iniciar uma tarefa, com a cópia local sem alterações pendentes:

```bash
git switch develop
git pull --ff-only origin develop
git switch -c feature/nome-da-tarefa
```

Após realizar e verificar a alteração, selecione os arquivos pertinentes, registre um commit e envie a branch ao GitHub. Abra um PR com destino a `develop`, descrevendo objetivo, mudanças e verificações realizadas. Revise os arquivos antes de integrar. Atualize a cópia local de `develop` depois do merge.

### Mensagens — Conventional Commits

O padrão adotado para as próximas mensagens é `tipo: descrição`:

| Tipo | Uso |
| --- | --- |
| `feat` | Nova funcionalidade. |
| `fix` | Correção de comportamento. |
| `docs` | Documentação. |
| `chore` | Organização e tarefas de manutenção. |
| `refactor` | Reorganização de código sem alterar seu comportamento. |
| `perf` | Melhoria de desempenho. |

Exemplo utilizado na preparação: `chore: preparar estrutura do desafio 4`.

O histórico anterior contém mensagens livres e algumas mensagens com prefixos. Esses commits são preservados; a padronização será aplicada de forma consistente nas novas alterações.

### Issues, milestone e PRs

As tarefas de acessibilidade, publicação e documentação são organizadas em issues vinculadas ao milestone **Entrega do desafio 4**. Cada issue descreve o objetivo e as verificações necessárias para encerrá-la.

Os PRs documentam a implementação e referenciam a issue correspondente. Como a integração de melhorias ocorre em `develop`, o encerramento automático de uma issue não deve ser presumido: ele depende das regras de vinculação e da integração na branch padrão. As tarefas podem ser encerradas manualmente após a verificação, com referência ao PR.

### Releases e versões

As releases seguirão `MAJOR.MINOR.PATCH`: mudanças incompatíveis incrementam MAJOR, funcionalidades compatíveis incrementam MINOR e correções compatíveis incrementam PATCH. Para esta aplicação, a compatibilidade será avaliada considerando o comportamento documentado, as rotas e o formato do rascunho armazenado.

O número do desafio não determina o número da versão. Um commit é um registro de alteração; uma tag identifica um ponto do histórico; uma release apresenta uma versão e suas notas de entrega. A tag e a release da entrega final ainda estão pendentes.

## Build e publicação

Na versão atual, a aplicação é composta por arquivos estáticos e não possui processo de build configurado nem comando `npm run build`. A execução local é feita pelo Live Server.

A preparação de produção e o deploy serão definidos nas próximas etapas do desafio. Após implementá-los, esta seção deverá registrar o processo real, eventuais comandos, a pasta publicada, o endereço da aplicação e os resultados de verificação. Não há endereço de publicação registrado nesta versão do README.

## Limitações da aplicação

- O formulário valida os dados no navegador, mas não envia um cadastro a um servidor.
- O rascunho pode conter campos incompletos; restaurá-lo não substitui a validação.
- Os dados ficam no `localStorage` da mesma origem e navegador até sua remoção. Para testes, utilize dados fictícios e limpe o rascunho ao terminar.
- A validação do CPF verifica o formato, sem calcular os dígitos verificadores.
- Ao editar no meio de um campo com máscara, o cursor pode ir para o final, consequência da simplificação adotada para o estudo.
- A validação de nascimento depende do carregamento do Day.js e do plugin pela CDN.
- A revisão completa de acessibilidade e as verificações da versão publicada ainda estão pendentes.
