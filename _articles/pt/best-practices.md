---
lang: pt
title: Melhores Práticas para Mantenedores
description: Tornando sua vida mais fácil como um mantenedor open source, desde processos de documentação até o alavancar da sua comunidade.
class: best-practices
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## O que significa ser um mantenedor?

Se você mantém um projeto open source que muitas pessoas utilizam, você irá notar que está codificando menos e respondendo mais issues.

Nos primeiros estágios de um projeto, você está experimentando novas ideias e tomando decisões baseadas no que você quer. À medida que a popularidade do seu projeto aumenta, você terá a percepção que está trabalhando mais com seus usuários e contribuidores.

Manter um projeto exige mais do que simplesmente codificar. Há tarefas que são geralmente inesperadas, porém muito importantes para um projeto em crescimento. Reunimos algumas maneiras de tornar sua vida mais fácil, indo desde os processos de documentação até formas de alavancar sua comunidade.

## Documentando seus processos

Escrever é uma das coisas mais importante que você pode fazer como um mantenedor.

A documentação não só clareia seu próprio pensamento, como também ajuda outras pessoas a entenderem o que você precisa ou espera, antes mesmo delas perguntarem.

Escrever facilita dizer "não" quando alguma coisa não se encaixa no seu escopo. Assim como torna mais fácil a participação e a ajuda das pessoas. Você nunca saberá quem estará lendo ou usando o seu projeto.

Mesmo que você não use parágrafos completos, pontuar os principais tópicos é melhor do que não escrever nada.

Lembre-se de manter a sua documentação atualizada. Se você não está disponível para fazer isso, exclua a sua documentação desatualizada ou deixe explícito tal informação para que os contribuidores saibam que atualizações são bem-vindas.

### Escrevendo a visão do seu projeto

Inicie escrevendo os objetivos do seu projeto. Adicione eles ao README, ou crie um arquivo separado chamado VISÃO. Caso existam outros artefatos que possam ajudar, como o roadmap do projeto, torne-os públicos também.

Ter uma visão clara e documentada mantém você focado e ajuda a evitar a "fuga de escopo" das contribuições de outras pessoas.

Por exemplo, @lord descobriu que ter uma visão de projeto o ajudou a definir em quais requests gastaria seu tempo. Como um novo mantenedor, ele se arrependeu de não ter seguido o escopo quando recebeu sua primeira request para o [Slate](https://github.com/lord/slate).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  Eu me atrapalhei. Não me esforcei para chegar a uma solução completa. Em vez de atender a uma solução parcial, eu desejaria ter dito "Eu não tenho tempo para isso agora, mas irei adicionar à lista de coisas boas para se ter num futuro distante."
  <p markdown="1" class="pquote-credit">
— @lord, ["Dicas para novos mantenedores de código aberto"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Comunique suas expectativas

Escrever regras pode ser estressante. Algumas vezes você pode sentir como se estivesse policiando o comportamento das outras pessoas ou acabando com a felicidade delas.

Entretanto, boas regras escritas e aplicadas, empoderam os mantenedores. Elas previnem você de ser arrastado a fazer coisas que não queria.

Muitas pessoas que tem contato com seu projeto não sabem nada sobre você ou sobre suas circunstâncias. Elas podem assumir que você é pago para trabalhar nisso, especialmente se é alguma coisa que elas usam regularmente e dependem. Talvez em algum momento você tenha dedicado muito tempo ao seu projeto, mas agora você está ocupado com um novo trabalho ou com um membro familiar.

Tudo isso é perfeitamente aceitável! Apenas tenha certeza de que as pessoas saibam disso.

Se a manutenção de seu projeto é em tempo parcial ou puramente voluntária, seja honesto(a) sobre quanto tempo você tem. Isso não é o mesmo que o quanto de tempo que você acha que o projeto requer, ou quanto tempo os outros querem que você gaste.

Aqui estão algumas regras que valem a pena escrever:

* Como uma contribuição é analisada e aceita (_Você precisa de testes? Um template de issue?_)
* Os tipos de contribuição que você irá aceitar (_Você só quer ajuda em uma certa parte de seu código?_)
* Quanto é apropriado seguir (_por exemplo, "Você pode esperar a resposta de um mantenedor dentro de 7 dias. Se não obtiver nada dele, sinta-se livre para fazer um ping no tópico."_)
* Quanto tempo você gasta no projeto (_por exemplo, "Nós só gastamos 5 horas por semana neste projeto"_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), e [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) são vários exemplos de projetos com regras básicas para mantenedores e contribuidores.

### Mantenha a comunicação pública

Não se esqueça de documentar suas interações também. Onde você puder, mantenha a comunicação sobre seu projeto pública. Se alguém tentar contatar você privativamente para discutir uma feature request ou um suporte necessitado, dirija ela ao canal de comunicação público, como uma lista de e-mail ou um issue tracker.

Se você encontrar outros mantenedores, ou tomar uma importante decisão em particular, documente essas conversas em público, mesmo que sejam apenas suas anotações.

Deste modo, qualquer um(a) que adentrar na comunidade terá acesso à mesma informação que alguém que já se encontra na mesma há anos.

## Aprendendo a dizer não

Você escreveu as coisas. Idealmente, todo mundo iria ler sua documentação, porém na realidade, você terá que relembrar os outros que esse conhecimento existe.

Entretanto, estar tudo escrito ajuda a despersonalizar situações em que você precisa impor suas regras.

Dizer "não", não é divertido, mas _"A sua contribuição não corresponde aos critérios deste projeto"_ soa menos pessoal que _"Eu não gosto de sua contribuição"_.

Como mantenedor, você irá se deparar com diversas situações em que terá que dizer "não": solicitações de funcionalidades que não se encaixam no escopo, alguém provocando uma discussão, trazendo trabalho desnecessário aos outros.

### Mantenha o diálogo amigável

Um dos mais importantes lugares em que você irá praticar dizer não é em suas filas de issues e pull requests. Como um mantenedor de projeto, você irá inevitavelmente receber sugestões que não deseja aceitar.

Talvez uma contribuição mude o escopo do projeto ou não corresponde à sua visão. Talvez a ideia seja boa, porém a implementação seja pobre.

Independentemente do motivo, é possível lidar de forma diplomática com contribuições que não atendem aos padrões do seu projeto.

Se você recebe uma contribuição que não deseja aceitar, sua primeira reação pode ser ignorá-la ou fingir que não a viu. Fazer isso pode machucar o sentimento das outras pessoas e até mesmo desmotivar outros potenciais contribuidores em sua comunidade.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">
  A chave para assegurar o suporte em projetos open-source de larga escala é manter as issues em andamento. Tentar evitar que as issues estagnem. Se você é um desenvolvedor iOS, sabe o quanto é frustrante submeter radares. Você pode obter um feedback 2 anos depois dizendo para realizar uma nova solicitação com a versão mais recente do iOS.
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Escalando comunidades de código aberto"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

Não deixe uma contribuição indesejada aberta porque você se sente culpado ou quer ser legal. Com o passar do tempo, suas issues e PRs não respondidas farão o trabalho em seu projeto pareça mais estressante e intimidador.

É melhor fechar imediatamente as contribuições que você sabe que não deseja aprovar. Se seu projeto já sofre com um grande backlog, @steveklabnik tem sugestões para [como realizar a triagem de issues eficientemente](https://words.steveklabnik.com/how-to-be-an-open-source-gardener).

Em segundo lugar, ignorar contribuições envia um sinal negativo para sua comunidade. Contribuir para um projeto pode ser intimidador, especialmente se é a primeira vez de alguém. Mesmo que você não aceite a contribuição dele(a), dê reconhecimento à pessoa por trás dela e agradeça pelo interesse. É um grande elogio!

Se você não deseja aceitar uma contribuição:

* **Agradeça ele(a)** pela contribuição
* **Explique porque não se encaixa** no escopo do projeto e ofereça sugestões claras de melhorias, se você for capaz. Seja gentil, mas firme.
* **Link para uma documentação relevante**, se houver. Se você notar repetidas solicitações por coisas que você não deseja aceitar, adicione elas à sua documentação para evitar ficar se repetindo.
* **Feche a request**

Você não precisará de mais de 1-2 sentenças para responder. Por exemplo, quando um(a) usuário(a) do [celery](https://github.com/celery/celery/) reporta um erro relacionado ao Windows, @berkerpeksag [respondeu com](https://github.com/celery/celery/issues/3383):

![Captura de tela do Celery](/assets/images/best-practices/celery.png)

Se pensar em dizer "não" aterroriza você, você não está sozinho. Como @jessfraz relata

> Eu conversei com mantenedores de vários projetos de código aberto diferentes, Mesos, Kubernetes, Chromium, e todos concordam que uma das partes mais difíceis de ser um mantenedor é dizer "Não" aos patches que você não quer.

Não se sinta envergonhado em não querer aceitar a contribuição de alguém. A primeira regra do open source [de acordo com](https://twitter.com/solomonstre/status/715277134978113536) @shykes é: _"Não é temporário, sim é para sempre."_ Embora a empatia com o entusiasmo de outra pessoa seja uma coisa boa, rejeitar uma contribuição não é o mesmo que rejeitar a pessoa por trás dela.

Por fim, se uma contribuição não é boa o suficiente, você não possui a obrigação de aceitá-la. Seja gentil e responsivo quando as pessoas contribuírem com seu projeto, porém aceite somente mudanças que você realmente acredita que tornarão seu projeto melhor. Quanto mais você pratica dizer não, mais fácil se torna. Juro.

### Seja proativo

Para reduzir a quantidade de contribuições indesejadas, em primeiro lugar, explique, no guia de contribuição, o processo de submissão e aceitação das contribuições do seu projeto.

Se você está recebendo muitas contribuições de baixa qualidade, exija que esses contribuidores executem alguns passos antes, por exemplo:

* Preencher um template/checklist para issues ou PRs
* Abrir uma issue antes de submeter uma PR

Se eles não seguirem suas regras, feche a issue imediatamente e aponte para sua documentação.

Embora essa abordagem possa parecer indelicada a princípio, ser proativo é, na verdade, bom para as duas partes. Isso reduz as chances de alguém se esforçar durante horas de trabalho em uma pull request que você não irá aceitar. E além disso, torna seu fluxo de trabalho mais fácil de gerenciar.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  O ideal é explicar em um arquivo CONTRIBUTING.md como eles podem obter, no futuro, uma melhor indicação do que será aceito ou não, antes de iniciar o trabalho.
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["Fechando Pull Requests Gentilmente"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

Algumas vezes, quando você diz não, um potencial contribuidor pode chatear-se ou criticar sua decisão. Se o comportamento dele se tornar hostil, [siga os passos para amenizar a situação](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) ou até mesmo remova-o de sua comunidade, se ele não pretende colaborar de forma construtiva.

### Abrace a mentoria

Talvez alguém em sua comunidade, regularmente submeta contribuições que não casam com os padrões de seu projeto. Pode ser frustrante para ambas as partes passar por rejeições repetidamente.

Se você perceber que alguém está entusiasmado com seu projeto, mas necessita de um pouco de polimento, seja paciente. Explique claramente em cada situação porque as contribuições deles não atendem as expectativas do projeto. Tente mostrá-los uma tarefa mais fácil ou menos ambígua, como uma issue marcada como _"good first issue,"_ para que eles deem seus primeiros passos. Se você tiver tempo, considere ensiná-los a realizar sua primeira contribuição, ou encontre alguém em sua comunidade que possa estar disposto a orientá-los.

## Alavanque sua comunidade

Você não precisa fazer tudo sozinho. A comunidade do seu projeto existe por uma razão! Mesmo que você ainda não tenha uma comunidade de colaboradores ativos, se dispuser de muitos usuários, coloque-os para trabalhar.

### Compartilhe a carga de trabalho

Se você está procurando por outras pessoas, comece perguntando.

Quando perceber novos contribuidores fazendo contribuições repetidamente, reconheça o trabalho deles oferecendo mais responsabilidades. Documente como os outros podem crescer em termos de liderança no projeto se assim eles desejarem.

Encorajar os outros a [compartilhar a propriedade do projeto](../building-community/#compartilhe-a-responsabilidade-pelo-seu-projeto) pode rapidamente reduzir sua própria carga de trabalhos, assim como @lmccart descobriu no projeto dela, [p5.js](https://github.com/processing/p5.js).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
  Eu estava dizendo: "Sim, qualquer um pode estar envolvido, você não precisa ter muita experiência em codificação [...]". Tivemos pessoas que se inscreveram para vir [a um evento] e foi aí que eu realmente quis saber: é verdade, o que eu tenho dito? Serão 40 pessoas que aparecerão, e não é como se eu pudesse sentar com cada uma delas... Mas as pessoas se juntaram e isso meio que funcionou. Assim que uma pessoa entendesse, ela poderia ensinar o vizinho.
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["What Does "Open Source" Even Mean? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39#.chnjlag7p)
  </p>
</aside>

Se você precisar se afastar de seu projeto, seja por um hiato ou permanentemente, não há vergonha em pedir para alguém assumir o controle para você.

Se outras pessoas estão entusiasmadas com a sua direção, conceda-lhes acesso de commit ou formalmente entregue o controle a outra pessoa. Se alguém "deu fork" em seu projeto e está ativamente mantendo-o em outro lugar, considere ligar o fork ao seu projeto original. É ótimo que tantas pessoas queiram que seu projeto continue vivo!

@progrium [descobriu que](https://web.archive.org/web/20151204215958/https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) documentar a visão de seu projeto, [Dokku](https://github.com/dokku/dokku), ajudou esses objetivos a sobreviverem, mesmo depois de seu afastamento:

> Eu escrevi um página wiki descrevendo o que queria e porque eu queria. Por alguma razão, para minha surpresa, os mantenedores começaram a fazer o projeto andar naquela direção! As coisas aconteceram exatamente da forma que eu faria? Nem sempre. Mas ainda trouxera o projeto para mais próximo do que escrevi.

### Deixe que os outros construam as soluções que precisam

Se um colaborador em potencial possui uma opinião diferente sobre o que o seu projeto deve fazer, convém incentivá-lo gentilmente a trabalhar em seu próprio fork.

Realizar o fork de um projeto não precisa ser uma coisa ruim. A capacidade de copiar e modificar projetos é uma das melhores coisas no open source. Incentivar os membros de sua comunidade a trabalharem em seus próprios forks pode fornecer a saída criativa de que precisam, sem entrar em conflito com a visão de seu projeto.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  Eu atendo 80% dos casos de uso. Se você é um dos unicórnios, por favor faça um fork de meu trabalho. Eu não ficarei ofendido! Meus projetos públicos são quase sempre destinados a resolver problemas comuns; Eu tento tornar fácil ir a fundo, seja fazendo o fork de meu trabalho ou estendendo-o.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Why I Close PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

O mesmo se aplica a um usuário que realmente quer uma solução que você simplesmente não tem recurso suficiente para construir. Oferecer APIs e hooks de personalização pode ajudar as outras pessoas a atender as suas próprias necessidades, sem precisar que modificar o código fonte diretamente. @orta [descobriu que](https://artsy.github.io/blog/2016/07/03/handling-big-projects/) estimular a criação de plugins para CocoaPods levou à "algumas das ideias mais interessantes":

> É quase inevitável que, quando um projeto se torna grande, os mantenedores precisam tornar-se mais conservadores sobre como eles introduzem código novo. Você se torna bom em dizer "não", mas muitas pessoas possuem necessidades legítimas. Então, em vez disso, você acaba transformando sua ferramenta em uma plataforma.

## Traga os robôs

Assim como há tarefas com as quais outras pessoas podem te ajudar, há também tarefas que nenhum humano deveria fazer. Os robôs são seus amigos. Utilize-os para tornar sua vida de mantenedor mais fácil.

### Exija testes e outras verificações para aumentar a qualidade de seu código

Uma das mais importantes formas de automatizar seu projeto é adicionando testes.

Testes ajudam os contribuidores a sentirem-se confiantes de que eles não quebrarão nada. Testes também tornam mais fácil, para você, revisar e aceitar contribuições rapidamente. Quanto mais responsivo você é, mais engajada sua comunidade poderá ser.

Configure testes automáticos que irão executar em todas as contribuições recebidas e garanta que seus teste poderão ser facilmente executados localmente por seus contribuidores. Exija que todas as contribuições de código passem em seus testes antes que possam ser submetidas. Você ajudará a definir um padrão mínimo de qualidade para todas as submissões. [Verificações de status obrigatórias](https://help.github.com/articles/about-required-status-checks/) no GitHub podem ajudar a garantir que nenhuma mudança seja aceita sem passar por seus testes.

Se você adicionar testes, tenha certeza de ter explicado como eles funcionam em seu arquivo de contribuição.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">
  Eu acredito que testes são necessários em todos os códigos que as pessoas trabalharam. Se o código estivesse completo e perfeitamente correto, ele não precisaria de alterações - nós só escrevemos código quando algo está errado, ou seja "Ele falha" ou "Ele não possui tal recurso". E, independentemente das mudanças que você esteja fazendo, os testes são essenciais para detectar qualquer regressão que você possa introduzir acidentalmente.
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust's Community Automation"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Use ferramentas para automatizar tarefas básicas de manutenção

A boa notícia sobre manter um projeto popular é que outros mantenedores já enfrentaram problemas similares e construíram soluções para isso.

Existem uma [variedade de ferramentas disponíveis](https://github.com/showcases/tools-for-open-source) para ajudar a automatizar alguns aspectos do trabalho de manutenção. Veja alguns exemplos:

* [semantic-release](https://github.com/semantic-release/semantic-release) automatiza suas releases
* [mention-bot](https://github.com/facebook/mention-bot) menciona potenciais reviwers para pull requests
* [Danger](https://github.com/danger/danger) ajuda a automatizar o code review

Para relatório de bugs e outras contribuições comuns, o GitHub possui [Modelos de Issue e Modelos de Pull Request](https://github.com/blog/2111-issue-and-pull-request-templates), que você pode criar para simplificar a comunicação que você recebe. @TalAter fez o [guia Choose Your Own Adventure](https://www.talater.com/open-source-templates/#/), para ajudar você a escrever seus modelos de issue e PR.

Para gerenciar suas notificações de e-mail, você pode configurar [filtros de e-mail](https://github.com/blog/2203-email-updates-about-your-own-activity) para organizar por prioridade.

Se você deseja ir um pouco além, style guides e linters podem padronizar as contribuições do projeto e torná-las mais fáceis de revisar e aceitar.

Entretanto, se seus padrões são muito complicados, elas podem aumentar as barreiras para contribuição. Tenha certeza de adicionar apenas as regras suficientes para tornar a vida de todo mundo mais fácil.

Se você não está certo sobre quais ferramentas usar, procure ver o que outros projetos populares fazem, especialmente aqueles do seu ecossistema. Por exemplo, como é o processo de contribuição para outros módulos do Node? Usar ferramentas e abordagens semelhantes também tornará seu processo mais familiar para seus contribuidores-alvo.

## Não há problema em pedir pause

Trabalhar com Open Source uma vez lhe trouxe alegrias. Talvez agora esteja começando a fazer você se sentir esquivo ou culpado.

Talvez você se sinta sobrecarregado ou um sentimento crescente de pavor quando você pensa sobre seus projetos. E enquanto isso, as issues e pull requests se acumulam.

O burnout é um problema real e onipresente no trabalho open source, especialmente entre mantenedores. Como um mantenedor, sua felicidade é um requisito não-negociável para a sobrevivência de qualquer projeto open source.

Embora não seja preciso dizer, dê uma pausa! Você não deve esperar se sentir esgotado para tirar férias. @brettcannon, desenvolvedor do core do Python, decidiu tirar [um mês de férias](https://snarky.ca/why-i-took-october-off-from-oss-volunteering/) após 14 anos de trabalhos em software open source.

Assim como qualquer outro tipo de trabalho, fazer pausas regulares manterão você revigorado, feliz e excitado sobre seu trabalho.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">
  Na manutenção do WP-CLI, descobri que preciso me tornar feliz primeiro e estabelecer limites claros sobre meu envolvimento. O melhor equilíbrio que encontrei é 2-5 horas por semana, como parte de meu horário normal de trabalho. Isso mantém meu envolvimento uma paixão, e longe de me sentir como se estivesse no trabalho. Devido a priorização dos problemas que estou trabalhando, posso fazer progressos regulares naquilo que penso ser mais importante.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["My condolences, you're now the maintainer of a popular open source project"](https://danielbachhuber.com/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

Algumas vezes, pode ser difícil tirar férias de um trabalho open source quando parece que todo mundo precisa de você. As pessoas podem até tentar fazer você se sentir culpado por estar se afastando.

Faça seu melhor para dar suporte para seus usuários e sua comunidade enquanto estiver afastado do projeto. Se você não conseguir encontrar o apoio que precisa, tire um tempo mesmo assim. Certifique-se de comunicar quando não estiver disponível, para que as pessoas não fiquem confusas com sua falta de responsividade.

Intervalos sem aplicam a mais do que apenas as férias. Se você não quer trabalhar em open source nos finais de semana, ou durante suas horas de trabalho normais, comunique aos outros, então eles saberão que não devem incomodá-lo.

## Cuide-se primeiro!

Manter um projeto popular requer habilidades diferentes das primeiras etapas de crescimento, mas não é menos recompensador. Como um mantenedor, você praticará a liderança e suas habilidades pessoais em um nível que poucas experimentam. Embora nem sempre seja fácil gerenciá-lo, estabelecer limites claros e apenas aceitar o que lhe é mais conveniente ajudará você a se manter feliz, atualizado e produtivo.
