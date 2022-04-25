# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas na Figuras que se seguem.

Waldirene Braga - 	Idade: 46 anos
Ocupação: advogada, é sócia de um escritório que atua com Direito de Empresa e Tributário . 	
Aplicativos:●	Instagram, ●	Linkedin, ●	GitHub
Motivações
●	Precisa de conhecimentos de análise e desenvolvimento de sistema no seu trabalho
●	Gosta de inovações e procedimentos que possam agregar, facilitando rotinas repetitivas.
	Frustrações
●	Dificuldade em entender qual a habilidade técnica necessária que proporcionará melhoria no seu trabalho.
●	Não conseguir criar procedimentos para agilizar a execução do seu trabalho.	Hobbies, História
●	Adora ler livros e pesquisar sobre inovações tecnológicas

Jair Silva - Idade: 42 anos
Ocupação: Engenheiro Mecânico, funcionário de uma multinacional do setor da indústria automotiva. 
Aplicativos:●	Instagram, ●	LinkedIn, ●	Aplicativos de bancos, ●	Github
Motivações
●	Busca conhecimentos em Análise e Desenvolvimento de Sistema com objetivo em migrar para o setor de tecnologia.
●	Inovações e procedimentos tecnológicos são essenciais no setor de atuação assim como para o objetivo proposto.
	Frustrações
●	Dificuldade em identificar em qual do vasto seguimento de tecnologia irá melhor se identificar para a migração.
	Hobbies, História
●	Inovações e tecnológicas são de contato diário e de interesse pessoal e profissional. 
●	A prática de esportes como Ciclismo (MTB), caminhadas e atividade física em academia são indispensáveis para a qualidade de vida.


Stefanny Silva - 	Idade: 22 anos
Ocupação: Universitária. 
Aplicativos: ●	Instagram, ●	Facebook, ●	Discord, ●	Clash Royale
Motivações
●	Deseja entrar no mercado de trabalho já em uma das profissões com maior expectativa de crescimento.
●	Gosta de criar jogos que conectem pessoas e permita conhecer novas culturas.
	Frustrações
●	Dificuldade para entender termos técnicos da área.
●	Pouco conhecimento sobre as principais competências necessárias para se tornar um desenvolvedor
●	Falta de informações sobre como utilizar as redes sociais e portfólio para se destacar entre os demais.
	Hobbies, História
●	Jogar diferentes jogos ao longo do dia, ouvir música e ler diferentes gêneros literários.


> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

WALDIRENE BRAGA
Deseja compreender qual área de desenvolvimento e sistemas poderá ser útil para execução das tarefas necessárias em seu trabalho, para maior agilidade e qualidade na execução das suas atividades diárias
Deseja escolher cursos específicos que possam desenvolver a habilidade com programação, para não desperdiçar recursos em cursos que não vão agregar o conhecimento necessário. 

JAIR SILVA
Busca conhecimentos em Análise e Desenvolvimento de Sistema para migrar para o setor de tecnologia.
Busca acesso a conteúdos sobre metodologias ágeis para encontrar a melhor forma de se inserir no mercado de trabalho.

STEFANNY SILVA
Busca aprender sobre como é o marketing pessoal para desenvolvedores que utilizam ferramentas como Linkedin, Github e sites específicos de vagas, para encontrar a melhor forma para se inserir no mercado de trabalho
Busca encontrar um plataforma de estudos focada em quem está iniciando na programação	Para receber um conteúdo feito para os iniciantes, sem utilização de termos técnicos que dificultam o entendimento


> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
