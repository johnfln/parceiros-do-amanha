const projects = [
    {
        "title": "Aprender e Descobrir",
        "description": "Atividades que complementam a educação escolar, estimulam a curiosidade e aproximam as crianças de diferentes áreas do conhecimento.",
        "activities": [
            "Leitura e acompanhamento de tarefas escolares.",
            "Oficinas de arte, música, ciência e tecnologia.",
            "Jogos educativos e atividades criativas."
        ]
    },
    {
        "title": "Brincar e Conviver",
        "description": "Momentos de recreação que valorizam a infância, incentivam a cooperação e fortalecem a convivência.",
        "activities": [
            "Brincadeiras e atividades ao ar livre.",
            "Esportes e jogos cooperativos.",
            "Dinâmicas de expressão e trabalho em grupo."
        ]
    },
    {
        "title": "Famílias Apoiadas",
        "description": "Apoio aos pais e responsáveis para ampliar suas oportunidades e fortalecer o ambiente familiar.",
        "activities": [
            "Cursos de desenvolvimento profissional.",
            "Orientação para currículos e entrevistas.",
            "Apoio psicológico com profissionais habilitados."
        ]
    }
];

function createProjectCard(project) {
    const activityItems = project.activities.map(function (activity) {
        return `<li>${activity}</li>`;
    });
    const activitiesHtml = activityItems.join('');

    return `
        <article>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <ul>
                ${activitiesHtml}
            </ul>
            <a href="#cadastro" aria-label="Quero participar: ${project.title}">Quero participar</a>
        </article>
    `;
}

export function createHomeScreen() {
    return `<h1>Conheça a Parceiros do Amanhã</h1>

    <section>
        <picture> <source srcset="../imagens/acao-social.webp" type="image/webp">
            <img
                src="../imagens/acao-social.jpg"
                alt="Grupo de pessoas de mãos dadas formando uma roda durante uma atividade recreativa em um gramado ao ar livre."
                width="400"
                height="300"
            >
         </picture>
         
        <p><strong>
            Aprender, brincar e crescer com apoio
        </strong></p>
        <p>
            Toda criança merece oportunidades para aprender, descobrir seus talentos e aproveitar a infância. A Parceiros do Amanhã nasce desse compromisso: oferecer um espaço de acolhimento, convivência e desenvolvimento para crianças em situação de vulnerabilidade social.
        </p>
        <p>
            Nossa proposta reúne atividades educativas, culturais e recreativas que complementam a educação escolar. Por meio de oficinas, brincadeiras e dinâmicas em grupo, incentivamos a curiosidade, a criatividade, a cooperação e o contato com diferentes áreas do conhecimento.
        </p>
        <p>
            Também reconhecemos que apoiar uma criança envolve acolher sua família. Por isso, nossa atuação inclui cursos para pais e responsáveis, orientação para a vida profissional e apoio psicológico com profissionais habilitados. Buscamos ampliar oportunidades e fortalecer as condições para que as famílias acompanhem o desenvolvimento de seus filhos.
        </p>

        <h2>Nossa missão</h2>

        <p>
            Promover oportunidades de aprendizagem, recreação e convivência para crianças em situação de vulnerabilidade social, oferecendo também acolhimento e apoio às suas famílias.
        </p>

        <h2>Nossa visão</h2>

        <p>
            Contribuir para uma comunidade em que crianças tenham condições de desenvolver suas capacidades e famílias encontrem apoio para construir novas perspectivas de vida.
        </p>

        <h2>Nossos valores</h2>
        <ul>
            <li>
               Respeito à dignidade e à realidade de cada pessoa. 
            </li>
            <li>
                Acolhimento e escuta sem julgamentos.
            </li>
            <li>
                Valorização da infância e do direito de brincar.
            </li>
            <li>
                Inclusão e acesso a oportunidades.
            </li>
            <li>
                Cooperação entre famílias, voluntários e comunidade.
            </li>
            <li>
                Responsabilidade e transparência nas ações.
            </li>
        </ul>
    </section>

    <section id="como-participar">
        <h2>Como participar</h2>

        <p>
            Conheça nossos projetos e descubra como contribuir
            com as iniciativas da organização.
        </p>

        <a href="#projetos">Conheça nossos projetos</a>
        <a href="#cadastro">Cadastre-se para participar</a>
    </section>`;
}

export function createProjectsScreen() {
    const projectCards = projects.map(createProjectCard);
    const projectsHtml = projectCards.join('');

    return `<h1>Nossos projetos e formas de contribuir</h1>

        <p>
            Nossas iniciativas oferecem oportunidades de aprendizagem,
            recreação e acolhimento para crianças em situação de
            vulnerabilidade social e suas famílias.
        </p>

        <section id="projetos">
            <h2>Projetos para crianças e famílias</h2>
            ${projectsHtml}

            

            

            
        </section>

        <section id="voluntariado">
            <h2>Seja voluntário</h2>

            <p>
                Compartilhe seus conhecimentos e seu tempo para apoiar
                as crianças e suas famílias.
            </p>

            <h3>Como você pode ajudar</h3>

            <ul>
                <li>Apoiar atividades de leitura e aprendizagem.</li>
                <li>Conduzir oficinas conforme sua experiência.</li>
                <li>Auxiliar nas atividades recreativas e culturais.</li>
                <li>Colaborar com cursos para pais e responsáveis.</li>
                <li>Ajudar na organização das campanhas de doação.</li>
            </ul>

            <p>
                As atividades de apoio psicológico são destinadas
                a profissionais habilitados.
            </p>

            <h3>Etapas para participar</h3>

            <ol>
                <li>Preencha o cadastro de interesse em voluntariado.</li>
                <li>Informe suas habilidades e disponibilidade.</li>
                <li>
                    Aguarde o contato da equipe para conhecer
                    as oportunidades e receber orientações.
                </li>
            </ol>

            <a href="#cadastro">Quero me cadastrar como voluntário</a>
        </section>

        <section id="doacoes">
            <h2>Campanhas de doação</h2>

            <p>
                As doações ajudam a manter as atividades e os recursos
                utilizados nos projetos.
            </p>

            <h3>Doação de materiais</h3>

            <p>
                As campanhas podem arrecadar materiais escolares,
                livros, brinquedos e equipamentos para as oficinas.
                Antes de doar, consulte a equipe sobre as necessidades
                atuais e as condições de recebimento.
            </p>

            <h3>Contribuição financeira</h3>

            <p>
                As contribuições financeiras apoiam a compra de materiais
                e a manutenção dos espaços e das atividades.
                Entre em contato para conhecer os meios oficiais de doação.
            </p>

            <a href="#contato">Consultar orientações para doar</a>
        </section>`;
}

export function createRegistrationScreen() {
    return `<h1>Cadastro de interesse em voluntariado</h1>

        <p>
            Compartilhe seu tempo e seus conhecimentos para apoiar
            o desenvolvimento de crianças e suas famílias.
        </p>

        <p>
            Os campos identificados como obrigatórios devem ser preenchidos.
            Use dados fictícios: este formulário é uma demonstração.
        </p>

    <div class="aviso-cadastro">
        <strong>Antes de começar:</strong>
        confira seus dados de contato para que a ONG possa falar com você.
    </div>

    <button type="button" data-modal="abrir">
    Como funciona o cadastro?
    </button>

    <dialog id="informacoes-cadastro" aria-labelledby="titulo-modal">
    <h2 id="titulo-modal">Como funciona o cadastro?</h2>
        <p>
            Preencha seus dados e indique sua área de interesse e disponibilidade.
            Neste projeto acadêmico, o preenchimento é validado e salvo como rascunho
            neste navegador. Nenhum cadastro é enviado à ONG.
        </p>
    <button type="button" data-modal="fechar">
        Fechar
    </button>
</dialog>

        <form id="formulario-cadastro" novalidate>
            <fieldset>
                <legend>Dados pessoais</legend>

                <p>
                    <label for="nome">Nome completo (obrigatório)</label><br>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        autocomplete="name"
                        minlength="3"
                        maxlength="100"
                        aria-describedby="erro-nome"
                        required
                    >
                    <span id="erro-nome" class="mensagem-erro"></span>
                </p>

                <p>
                    <label for="email">E-mail (obrigatório)</label><br>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autocomplete="email"
                        aria-describedby="erro-email"
                        required
                    >
                    <span id="erro-email" class="mensagem-erro"></span>
                </p>

                <p>
                    <label for="nascimento">
                        Data de nascimento (obrigatório)
                    </label><br>
                    <input
                        type="date"
                        id="nascimento"
                        name="nascimento"
                        autocomplete="bday"
                        aria-describedby="ajuda-nascimento erro-nascimento"
                        required
                    >
                    <span id="ajuda-nascimento" class="ajuda-campo">É necessário ter pelo menos 18 anos.</span>
                    <span id="erro-nascimento" class="mensagem-erro"></span>
                </p>

                <p>
                    <label for="cpf">CPF (obrigatório)</label><br>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        inputmode="numeric"
                        maxlength="14"
                        pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                        aria-describedby="ajuda-cpf erro-cpf"
                        required
                    >
                    <span id="ajuda-cpf" class="ajuda-campo">Use o formato 000.000.000-00.</span>
                    <span id="erro-cpf" class="mensagem-erro"></span>
                </p>

                <p>
                    <label for="telefone">
                        Telefone com DDD (obrigatório)
                    </label><br>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        autocomplete="tel"
                        maxlength="13"
                        pattern="[0-9]{2} [0-9]{4,5}-[0-9]{4}"
                        aria-describedby="ajuda-telefone erro-telefone"
                        required
                    >
                    <span id="ajuda-telefone" class="ajuda-campo">Informe DDD e telefone: 48 99999-9999 ou 48 3333-3333.</span>
                    <span id="erro-telefone" class="mensagem-erro"></span>
                </p>
            </fieldset>

            <fieldset>
                <legend>Endereço</legend>

                <p>
                    <label for="cep">CEP (obrigatório)</label><br>
                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        autocomplete="postal-code"
                        inputmode="numeric"
                        maxlength="9"
                        pattern="[0-9]{5}-[0-9]{3}"
                        aria-describedby="ajuda-cep erro-cep"
                        required
                    >
                    <span id="ajuda-cep" class="ajuda-campo">Use o formato 00000-000.</span>
                    <span id="erro-cep" class="mensagem-erro"></span>
                </p>

                <p>
                    <label for="endereco">
                        Rua ou avenida (obrigatório)
                    </label><br>
                    <input
                        type="text"
                        id="endereco"
                        name="endereco"
                        autocomplete="address-line1"
                        required
                     aria-describedby="erro-endereco">
                    <span id="erro-endereco" class="mensagem-erro"></span>
                </p>

                <p>
                    <label for="numero">
                        Número ou S/N (obrigatório)
                    </label><br>
                    <input
                        type="text"
                        id="numero"
                        name="numero"
                        aria-describedby="erro-numero"
                        required
                    >
                    <span id="erro-numero" class="mensagem-erro"></span>
                </p>

                <p>
                    <label for="complemento">Complemento (opcional)</label><br>
                    <input
                        type="text"
                        id="complemento"
                        name="complemento"
                        autocomplete="address-line2"
                     aria-describedby="erro-complemento">
                    <span id="erro-complemento" class="mensagem-erro"></span>
                </p>

                <p>
                    <label for="bairro">Bairro (obrigatório)</label><br>
                    <input
                        type="text"
                        id="bairro"
                        name="bairro"
                        aria-describedby="erro-bairro"
                        required
                    >
                    <span id="erro-bairro" class="mensagem-erro"></span>
                </p>

                <p>
                    <label for="cidade">Cidade (obrigatório)</label><br>
                    <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        autocomplete="address-level2"
                        aria-describedby="erro-cidade"
                        required
                    >
                    <span id="erro-cidade" class="mensagem-erro"></span>
                </p>

                <p>
                    <label for="estado">Estado (obrigatório)</label><br>
                    <select
                        id="estado"
                        name="estado"
                        autocomplete="address-level1"
                        aria-describedby="erro-estado"
                        required
                    >
                        <option value="">Selecione</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                    <span id="erro-estado" class="mensagem-erro"></span>
                </p>
            </fieldset>

            <fieldset>
                <legend>Interesse em voluntariado</legend>

                <p>
                    <label for="area">
                        Área de interesse (obrigatório)
                    </label><br>
                    <select id="area" name="area" aria-describedby="erro-area" required>
                        <option value="">Selecione</option>
                        <option value="educacao">Apoio à aprendizagem</option>
                        <option value="cultura">Oficinas culturais</option>
                        <option value="recreacao">Recreação e esportes</option>
                        <option value="profissional">
                            Orientação profissional às famílias
                        </option>
                        <option value="psicologia">
                            Apoio psicológico — profissionais habilitados
                        </option>
                        <option value="campanhas">
                            Organização de campanhas
                        </option>
                    </select>
                    <span id="erro-area" class="mensagem-erro"></span>
                </p>

                <p>
                    <label for="disponibilidade">
                        Disponibilidade (obrigatório)
                    </label><br>
                    <textarea
                        id="disponibilidade"
                        name="disponibilidade"
                        rows="3"
                        cols="30"
                        maxlength="500"
                        placeholder="Informe dias e horários disponíveis."
                        aria-describedby="ajuda-disponibilidade erro-disponibilidade"
                        required
                    ></textarea>
                    <span id="ajuda-disponibilidade" class="ajuda-campo">Informe dias e horários disponíveis.</span>
                    <span id="erro-disponibilidade" class="mensagem-erro"></span>
                </p>

                <p>
                    <label for="habilidades">
                        Habilidades e experiências (opcional)
                    </label><br>
                    <textarea
                        id="habilidades" aria-describedby="erro-habilidades"
                        name="habilidades"
                        rows="4"
                        cols="30"
                        maxlength="1000"
                    ></textarea>
                    <span id="erro-habilidades" class="mensagem-erro"></span>
                </p>
            </fieldset>

            <p>
                <button type="submit">Enviar cadastro</button>
            </p>

        </form>
<p id="feedback-cadastro" role="status" aria-atomic="true"></p>`;
}