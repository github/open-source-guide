---
lang: pt
title: Iniciando um Projeto Open Source
description: Saiba mais sobre o mundo do open source e se prepare para começar o seu próprio projeto
class: beginners
order: 2
image: /assets/images/cards/beginner.png
related:
  - finding
  - building
---

## O "o que" e "porquê" do open source

Então você está pensando em começar com open source? Parabéns! O mundo aprecia sua contribuição. Vamos falar sobre o que o open source é e porque as pessoas fazem isso.

### O que significa "open source"?

Quando um projeto é open source, isso significa que **Qualquer um pode ver, usar, modificar e distribuir o projeto por qualquer motivo**. Essas permissões são reforçadas através de [uma licença open source](https://opensource.org/licenses).

O open source é poderoso porque diminui as barreiras para adoção, o que permite às ideias se espalhar rapidamente.

Para entender como funciona, imagine que seu amigo está dando uma festa, e você leva uma torta de cereja.

* Todos experimentam a torta (_usa_)
* A torta é um sucesso! Eles te pedem a receita, que você disponibiliza (_vê_)
* Um amigo, Alex, que é um chefe de pastelaria, sugere reduzir o açúcar (_modifica_)
* Outra amiga, Lisa, pede para utilizá-la em um jantar na próxima semana (_distribui_)

Em comparação, um processo de código fechado seria ir a um restaurante e pedir um pedaço de torta. Você tem que pagar uma taxa para comer a torta, e o restaurante provavelmente não te dará a receita. Se você copiasse a torta deles exatamente e a vendesse sob seu próprio nome, o restaurante poderia abrir uma ação contra você.

### Por que as pessoas tornam seu trabalho open source?

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kentcdodds?s=180" class="pquote-avatar" alt="avatar">
  Uma das experiências mais recompensadores que eu obtenho do uso e colaboração no open source vêm dos relacionamentos que eu construo com outros desenvolvedores enfrentando muitos dos mesmos problemas que eu.
  <p markdown="1" class="pquote-credit">
— @kentcdodds, ["How getting into Open Source has been awesome for me"](https://kentcdodds.com/blog/how-getting-into-open-source-has-been-awesome-for-me)
  </p>
</aside>

[Há muitas razões](https://ben.balter.com/2015/11/23/why-open-source/) pela qual uma pessoa ou organização iria querer tornar um projeto open source. Alguns exemplos incluem:

* **Colaboração:** Projetos open source podem aceitar mudanças de qualquer pessoa no mundo. [Exercism](https://github.com/exercism/), por exemplo, é uma plataforma de exercícios de programação com mais de 350 contribuidores.

* **Adoção e remixing:** Projetos open source podem ser utilizados por qualquer um para praticamente qualquer propósito. As pessoas podem até mesmo utilizá-lo para construir outras coisas. [WordPress](https://github.com/WordPress), por exemplo, começou como um fork de um projeto chamado [b2](https://github.com/WordPress/book/blob/HEAD/Content/Part%201/2-b2-cafelog.md).

* **Transparência:** Qualquer um pode inspecionar um projeto open source por erros ou inconsistências. A transparência importa a gorvernos como a [Bulgaria](https://medium.com/@bozhobg/bulgaria-got-a-law-requiring-open-source-98bf626cf70a) ou os [Estados Unidos](https://sourcecode.cio.gov/), industrias regulamentadas como bancos ou industrias de saúde, e softwares de segurança como [Let's Encrypt](https://github.com/letsencrypt).

Open source não é só sobre software. Você pode tornar qualquer coisa open source, de conjuntos de dados a livros. Dê uma olhada no [GitHub Explore](https://github.com/explore) por ideias do que você pode tornar open source.

### Open source significa "grátis"?

Uma das maiores atrações do open source é que ele tem custo zero. "Grátis", porém, é um subproduto do valor total do open source.

Como [uma licença open source requer](https://opensource.org/osd-annotated) que qualquer um possa usar, modificar e compartilhar o seu projeto por aproximadamente qualquer propósito, os projetos, por si só, tendem a ser livres de qualquer custo. Se o projeto cobra para ser utilizado, qualquer um poderia, em vez disso, legalmente fazer uma cópia e utilizar a versão grátis.

Como resultado, a maior parte dos projetos open source são grátis, mas "grátis" não faz parte da definição do open source. Há maneiras de cobrar por um projeto open source indiretamente através de licenças duais ou features limitadas, enquanto ainda de acordo com a definição oficial de open source.

## Eu deveria lançar o meu próprio projeto open source?

A resposta curta é sim, porque não importa o resultado, lançar o seu próprio projeto é uma ótima maneira de aprender como o open source funciona.

Se você nunca tornou um projeto open source antes, você pode se sentir nervoso sobre o que as pessoas irão falar, ou mesmo se alguém vai dar a ele alguma atenção. Se isso soa familiar para você, saiba que não está sozinho!

O open source funciona como qualquer outra atividade criativa, seja escrita ou pintura. Pode parecer assustador compartilhar o seu trabalho com o mundo, mas a única maneira de se aperfeiçoar é praticando - mesmo que você não possua uma audiência.

Se você ainda não está convencido, reserve um momento para pensar sobre quais são seus objetivos.

### Definindo os seus objetivos

Os objetivos podem te ajudar a descrobrir no que trabalhar, para o que dizer não, e onde você precisa da ajuda de outros. Comece perguntando a si mesmo, _por que estou tornando esse projeto open source?_

Não há uma resposta definitiva para essa questão. Você pode ter múltiplos objetivos para um dado projeto, ou direfentes projetos com diferentes objetivos.

Se seu único objetivo é mostrar seu trabalho, você pode não querer contribuições e até mesmo deixar isso claro em seu README. Por outro lado, se você procura contribuidores, você investirá um certo tempo em produzir uma documentação clara e fazer com que os novatos se sintam bem vindos.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mavris?s=180" class="pquote-avatar" alt="avatar">
  Em um determinado momento, eu criei um componente customizado UIAlertView que eu estava utilizando... Então, decidi torná-lo open source. Eu o modifiquei para ser mais dinâmico e o coloquei no GitHub. Além disso, escrevi minha primeira documentação explicando a outros desenvolvedores como usá-lo em seus projetos. Provavelmente ninguém nunca o usou porque se tratava de um projeto simples mas eu estava me sentindo bem pela minha contribuição.
  <p markdown="1" class="pquote-credit">
— @mavris, ["Self-taught Software Developers: Why Open Source is important to us"](https://medium.com/rocknnull/self-taught-software-engineers-why-open-source-is-important-to-us-fe2a3473a576#.zhwo5krlq)
  </p>
</aside>

A medida que o seu projeto cresce, sua comunidade pode precisar de mais do que apenas código de você. Responder issues, revisar código e evangelizar o seu projeto são todas tarefas importantes em um projeto open source.

Enquanto a quantidade de tempo que você gasta em tarefas que não envolvem código depende do tamanho e escopo do seu projeto, você deve estar preparado, como um mantenedor, a cuidar delas você mesmo ou a encontrar alguém para ajudá-lo.

**Se você faz parte de uma empresa tornando um projeto open source,** certifique-se de que seu projeto tem os recursos internos que ele precisa para florescer. Você irá querer identificar quem é responsável por manter o projeto após o almoço e compartilhar essas tarefas com a comunidade.

Se você precisar de uma renda dedicada ou pessoal para promoção, operações e manutenção do projeto, comece essas discussões cedo.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/captainsafia?s=180" class="pquote-avatar" alt="avatar">
  Quando você começa a tornar o projeto open source, é importante se certificar de que os seus processos administrativos levam em consideração as contribuições e habilidades da comunidade em torno do seu projeto. Não tenha medo de envolver contribuidores que não são empregados da sua empresa em aspectos chave do projeto - especialmente se eles são contribuidores assíduos.
  <p markdown="1" class="pquote-credit">
— @captainsafia, ["So you wanna open source a project, eh?"](https://dev.to/captainsafia/so-you-wanna-open-source-a-project-eh-5779)
  </p>
</aside>

### Contribuindo para outros projetos

Se seu objetivo é aprender como contribuir com outras pessoas ou entender como o open source funciona, considere contribuir para um projeto existente. Comece com um projeto que você utiliza e ama. Contribuir para um projeto pode ser tão simples quanto consertar erros de escrita ou atualizar uma documentação.

Se você não tem uma ideia clara de como iniciar enquanto contribuidor, dê uma olhada em [How to Contribute to Open Source guide](../how-to-contribute/).

## Lançando o seu próprio projeto open source

Não há um momento perfeito para tornar o seu trabalho open source. Você pode tornar uma ideia open source, um trabalho em andamento ou mesmo um trabalho que passou anos como código fechado.

De um modo geral, você deve tornar o seu projeto open source quando se sentir confortável em ter outras pessoas vendo e dando feedback no seu trabalho.

Independente do estágio em que você decida tornar o seu projeto open source, todo projeto deve incluir as seguintes documentações:

* [Open source license](https://help.github.com/articles/open-source-licensing/#where-does-the-license-live-on-my-repository)
* [README](https://help.github.com/articles/create-a-repo/#commit-your-first-change)
* [Contributing guidelines](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)
* [Code of conduct](../code-of-conduct/)

Como um mantenedor, esses componentes irão ajudá-lo a comunicar suas expectativas, administrar contribuições, e proteger o direito legal de todos (inclusive o seu). Eles aumentam suas chances de ter uma experência positiva significativamente.

Se seu projeto está no GitHub, colocar esses arquivos no seu diretório root com os nomes recomendados ajudará o GitHub a reconhecê-los e automaticamente mostrá-los da maneira apropriada aos seus leitores.

### Escolhendo uma licença

Uma licença open source garante que outros possam utilizar, copiar, modificar e contribuir com o seu projeto sem repercussões. Ela também lhe protege de situações legais problemáticas. **Você deve incluir uma licença sempre que lançar um projeto open source.**

Trabalho legal não é divertido. A boa noticia é que você pode copiar e colar uma licença existente no seu repositório. Só levará um minuto e vai proteger seu trabalho duro.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), e [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) são as licenças open source mais populares, mas [há outras opções](https://choosealicense.com) disponíveis.

Quando você cria um projeto do GitHub, é dada a opção de escolher uma licença. Incluir uma licença open source fará seu projeto GitHub open source.

![Pick a license](/assets/images/starting-a-project/repository-license-picker.png)

Se você possui outros questionamentos e preocupações acerca dos aspectos legais da administração de um projeto open source, [podemos te ajudar](../legal/).

### Escrevendo um README

READMEs fazem mais do que explicar como usar o seu projeto. Eles também explicam porque o seu projeto importa, e o que os seus usuários podem fazer com ele.

No seu README, tente responder as seguintes questões:

* O que esse projeto faz?
* Por que esse projeto é útil?
* Como começo?
* Onde posso conseguir ajuda, seu eu precisar?

Você pode usar o seu README para responder outras questões, por exemplo como você lida com contribuições, quais são os objetivos do projeto e informações sobre licenças e atribuições. Se você não quer aceitar contribuições, ou seu projeto não está pronto para produção, escreva no README essa informação.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/tracymakes?s=180" class="pquote-avatar" alt="avatar">
  Uma documentação melhor significa mais usuários, menos requisições de suporte, e mais contribuidores. (...) Lembre-se de que os seus leitores não são você. Há pessoas que chegarão ao projeto com experiências completamente diferentes.
  <p markdown="1" class="pquote-credit">
— @tracymakes, ["Writing So Your Words Are Read (video)"](https://www.youtube.com/watch?v=8LiV759Bje0&list=PLmV2D6sIiX3U03qc-FPXgLFGFkccCEtfv&index=10)
  </p>
</aside>

Algumas vezes, as pessoas evitam escrever um README porque sentem que o projeto não está finalizado, ou não querem contribuições. Essas são todas boas razões para escrever um.

Para mais inspiração, tente usar o ["Making READMEs Readable"](https://pages.18f.gov/open-source-guide/making-readmes-readable/) do @18F ou o [README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) do @PurpleBooth para escrever um README completo.

Quando você inclui um arquivo de README no seu diretório raiz, o GitHub irá automaticamente renderizá-lo na página inicial do projeto.

### Escrevendo suas diretrizes de contribuição

Um arquivo CONTRIBUTING diz a sua audiência como participar no seu projeto. Por exemplo, você pode incluir informações sobre:

* Como criar um relatório de bug (tente usar um [template de issue ou pull request](https://github.com/blog/2111-issue-and-pull-request-templates))
* Como sugerir uma nova feature
* Como configurar o seu ambiente e rodar testes

Além dos detalhes técnicos, um arquivo CONTRIBUTING é uma oportunidade de comunicar suas expectativas para contribuições, como:

* Os tipos de contribuições que você está procurando
* Seu roadmap ou visão para o projeto
* Como contribuidores devem (ou não devem) entrar em contato com você

Usar um tom acolhedor, amigável e oferecer sugestões específicas para contribuições (como escrever uma documentação, ou fazer um website) pode fazer uma grande diferença em fazer com que novos contribuidores se sintam bem vindos e felizes em participar.

Por exemplo, o [Active Admin](https://github.com/activeadmin/activeadmin/) começa [seu guia de contribuição](https://github.com/activeadmin/activeadmin/blob/HEAD/CONTRIBUTING.md) com:

> Primeiramente, obrigado por considerar contribuir para o Active Admin. São pessoas como você que fazem o Active Admin esta grande ferramenta.

Nos primeiros estágios do seu projeto, seu arquivo de CONTRIBUTING pode ser simples. Você deve sempre explicar como relatar bugs ou registrar issues, e qualquer requisito técnico (como testes) necessário para se fazer uma contribuição.

Ao longo do tempo, você pode adicionar outras questões frequentemente respondidas ao seu arquivo CONTRIBUTING. Escrever essas informações significa que menos pessoas te farão as mesmas perguntas repetidas vezes.

Para mais ajuda em como escrever seu arquivo CONTRIBUTING, dê uma olhada no [contributing guide template](https://github.com/nayafia/contributing-template/blob/HEAD/CONTRIBUTING-template.md) de @nayafia ou o ["How to Build a CONTRIBUTING.md"](https://mozillascience.github.io/working-open-workshop/contributing/) do @mozilla.

Crie um link para seu arquivo CONTRIBUTING a partir do seu README, de modo que mais pessoas possam vê-lo. Se você [colocar seu arquivo CONTRIBUTING no repositório do seu projeto](https://help.github.com/articles/setting-guidelines-for-repository-contributors/), o GitHub irá automaticamente "linkar" para o seu arquivo quando um contribuidor criar uma issue ou abrir um pull request.

![Contributing guidelines](/assets/images/starting-a-project/Contributing-guidelines.jpg)

### Estabelecendo um código de conduta

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mlynch?s=180" class="pquote-avatar" alt="avatar">
  Todos nós já tivemos experiências em que encaramos um provável abuso, seja como um mantenedor tentando explicar porque alguma coisa tinha de ser feita de um certo modo, ou como um usuário... fazendo um simples questionamento. (...) Um código de conduta se torna um documento facilmente referenciável e 'linkavel' que indica como o seu time leva o discurso construtivo de modo bastante sério.
  <p markdown="1" class="pquote-credit">
— @mlynch, ["Making Open Source a Happier Place"](https://medium.com/ionic-and-the-mobile-web/making-open-source-a-happier-place-3b90d254f5f#.v4qhl7t7v)
  </p>
</aside>

Finalmente, um código de conduta ajuda a criar regras básicas de comportamento para os participantes do seu projeto. Isso possui um valor especial se você está lançando um projeto open source para a comunidade ou alguma empresa. Um código de conduta te dá o poder de facilitar um comportamento saudável e construtivo da comunidade, o que irá reduzir seu estresse como mantenedor.

Para mais informações, dê uma olhada no nosso [guia do Código de Conduta](../code-of-conduct/).

Além de comunicar _como_ você espera que os participantes se comportem, um código de conduta também tende a descrever a quem essas expectativas se aplicam, quando se aplicam e o que fazer se uma violação ocorrer.

De modo muito parecido com licenças open source, também há padrões emergentes para códigos de conduta, de modo que você não precisa escrever o seu. O [Contributor Covenant](https://contributor-covenant.org/) é um código de conduta "pronto para o uso" que é usado por [mais de 40,000 projetos open source](https://www.contributor-covenant.org/adopters), incluindo Kubernetes, Rails, e Swift. Não importa que texto você utilize, você deve estar sempre preparado para impor o seu código de conduta quando necessário.

Cole o texto diretamente em um arquivo CODE_OF_CONDUCT no seu repositório. Mantenha o arquivo no diretório raiz do seu projeto, de modo que ele seja fácil de ser encontrado, e crie um link para ele a partir do seu README.

## Nomeando e criando uma marca para o seu projeto

Uma marca é mais do que uma logo chamativa ou um nome atraente. É sobre como você fala sobre o seu projeto, e quem você atinge com sua mensagem.

### Escolhendo o nome certo

Escolha um nome que é fácil de lembrar e, idealmente, dê alguma ideia sobre o que o projeto faz. Por exemplo:

* [Sentry](https://github.com/getsentry/sentry) monitora aplicações para criar relatórios de falha
* [Thin](https://github.com/macournoyer/thin) é um servidor web Ruby rápido e simples

Se você está construindo algo sobre um projeto existente, usar o nome deles como prefixo pode ajudar a esclarecer o que o seu projeto faz (por exemplo, [node-fetch](https://github.com/bitinn/node-fetch) traz o `window.fetch` para o Node.js).

Considere clareza acima de tudo. Trocadilhos são engraçados, mas lembre-se de que algumas piadas podem não possuir tradução para outras culturas ou pessoas com experiências diferentes das suas. Alguns dos seus potenciais usuários podem ser funcionários de alguma empresa: você não quer fazê-los sentirem-se desconfortáveis ao explicar o seu projeto no trabalho!

### Evitando conflitos de nomes

[Procure projetos open source com um nome similar](http://ivantomic.com/projects/ospnc/), especialmente se você compartilha a mesma linguagem ou ecossistema. Se seu nome se sobrepõe ao de um projeto popular existente, você pode confundir sua audiência.

Se você quer um website, Twitter handle, ou outras propriedades para representar o seu projeto, assegure-se de que você pode ter os nomes que procura. Idealmente, [reserve tais nomes agora](https://instantdomainsearch.com/) para paz mental, mesmo que você não planeje utilizá-los no momento.

Assegure-se de que o nome do seu projeto não infringe nenhuma marca registrada. Uma empresa pode pedir que você derrube seu projeto no futuro, ou até mesmo tomar alguma ação legal contra você. Simplesmente não vale o risco.

Você pode conferir o [WIPO Global Brand Database](http://www.wipo.int/branddb/en/) por conflitos com marcas registradas. Se você está em uma empresa, essa é uma das coisas em que [o seu time legal pode ajudá-lo](../legal/).

Finalmente, realize uma busca rápida no Google pelo nome do seu projeto. As pessoas encontrarão o seu projeto com facilidade? Há algo que aparece nos resultados de busca que você não gostaria que eles vissem?

### Como você escreve (e "coda") afeta sua marca, também!

Ao longo da vida do seu projeto, você escreverá bastante: READMEs, tutoriais, documentos da comunidade, responder a issues, talvez até mesmo newsletters e listas de email.

Quer seja documentação oficial ou um email casual, seu estilo de escrita é parte da marca do seu projeto. Considere como você se portará diante de sua audiência e se esse é o tom que você deseja transmitir.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/janl?s=180" class="pquote-avatar" alt="avatar">
  Eu procurei estar envolvido com todas as threads na lista de emails e mostrar comportamento exemplar, sendo legal com as pessoas, levando seus problemas a sério e tentando ser útil de um modo geral. Após um tempo, as pessoas permaneceram não somente para fazer questionamentos, mas para ajudar com as respostas também, e, para minha completa alegria, elas imitaram o meu estilo.
  <p markdown="1" class="pquote-credit">
— @janl on [CouchDB](https://github.com/apache/couchdb), ["Sustainable Open Source"](https://web.archive.org/web/20200723213552/https://writing.jan.io/2015/11/20/sustainable-open-source.html)
  </p>
</aside>

Utilizar uma linguagem acolhedora e inclusiva (como "eles", mesmo quando se referindo a uma única pessoa) pode fazer uma grande diferença em fazer com que seu projeto seja acolhedor para novos contribuidores. Permaneça com uma linguagem simples, já que muitos dos seus leitores podem não ser falantes nativos de inglês.

Muito além de como você escreve palavras, seu estilo de código também pode se tornar parte da marca do seu projeto. [Angular](https://github.com/johnpapa/angular-styleguide) e [jQuery](https://contribute.jquery.org/style-guide/js/) são dois exemplos de projetos com estilos de códificação e guidelines rigorozas.

Não é necessário escrever um guia de estilo para o seu projeto quando você está apenas começando, e você pode descobrir que você gosta de incorporar diferentes estilos de codificação no seu projeto, de qualquer forma. Porém você deve antecipar como seu estilo de escrita e codificação pode atrair ou desencorajar diferentes tipos de pessoas. Os estágios mais iniciais do seu projeto são sua oportunidade de definir o precedente que você deseja ver.

## Seu checklist pré-lançamento

Pronto para tornar o seu projeto open source? Aqui está uma checklist para ajudar. Marcou todas as caixas? Você está pronto! [Clique em "publish"](https://help.github.com/articles/making-a-private-repository-public/) e dê um tapinha em suas costas.

**Documentação**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox1" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox1" class="overflow-hidden d-block text-normal">
    O Projeto possui um arquivo LICENSE com uma licença open source
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox2" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox2" class="overflow-hidden d-block text-normal">
    O Projeto possui documentação básica (README, CONTRIBUTING, CODE_OF_CONDUCT)
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox3" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox3" class="overflow-hidden d-block text-normal">
    O nome é fácil de lembrar, dá alguma ideia do que o projeto faz e não entra em conflito com um projeto existente ou infringe alguma marca registrada
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox4" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox4" class="overflow-hidden d-block text-normal">
    A fila de issues está atualizada, com issues claramente organizadas e rotuladas
  </label>
</div>

**Code**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox5" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox5" class="overflow-hidden d-block text-normal">
    O projeto utiliza convenções de código consistentes e nomes de funções/métodos/variáveis claros
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox6" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox6" class="overflow-hidden d-block text-normal">
    O código é comentado de forma clara, documentando intenções e edge cases
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox7" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox7" class="overflow-hidden d-block text-normal">
    Não há material sensível no histórico de revisões, issues, ou pull requests (por exemplo, senhas ou outras informações não-públicas)
  </label>
</div>

**Pessoas**

Se você é um indivíduo:

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox8" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox8" class="overflow-hidden d-block text-normal">
  Você falou com o departamento legal e/ou entendeu o IP e políticas open source de sua empresa (se você é um funcionário em algum lugar)
  </label>
</div>

Se você está em uma empresa ou organização:

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox9" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox9" class="overflow-hidden d-block text-normal">
    Você falou com seu departamento legal
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox10" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox10" class="overflow-hidden d-block text-normal">
    Você possui um plano de marketing para anunciar e promover o projeto
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox11" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox11" class="overflow-hidden d-block text-normal">
    Alguém está engajado em administrar as interações com a comunidade (responder a issues, revisar e 'merjar' pull requests)
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox12" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox12" class="overflow-hidden d-block text-normal">
    Pelo menos duas pessoas têm acesso administrativo ao projeto
  </label>
</div>

## Você conseguiu!

Parabéns em tornar seu primeiro projeto open source. Não importa o resultado, trabalhar em público é um presente para a comunidade. Com cada commit, comentário, e pull request, você está criando oportunidades para você e para os outros de aprender e crescer.
