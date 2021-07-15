---
lang: fr
title: Lancer un projet Open Source
description: En savoir plus sur le monde de l'Open Source et préparez-vous à lancer votre propre projet.
class: beginners
order: 2
image: /assets/images/cards/beginner.png
related:
  - finding
  - building
---

## Le &quot;quoi&quot; et le &quot;pourquoi&quot; de l'open source

Donc, vous songez à commencer avec l'open source ? Toutes nos félicitations ! Le monde va apprécier votre contribution. Parlons de ce qu'est l'open source et pourquoi les gens le font.

### Que signifie "open source" ?

Lorsqu'un projet est open source, cela signifie que **n'importe qui peut voir, utiliser, modifier et distribuer votre projet dans n'importe quel but.** Ces autorisations sont appliquées via [une licence open source](https://opensource.org/licenses).

L'open source est puissant car il abaisse les barrières à l'adoption, permettant aux idées de se propager rapidement.

Pour comprendre comment cela fonctionne, imaginez qu'un ami organise une collation, et que vous apportez une tarte aux cerises.

* Tout le monde goûte la tarte (_utiliser_)
* La tarte est un succès ! Ils vous demandent la recette que vous leur fournissez (_voir_)
* Un ami, Alex, qui est chef pâtissier, suggère de réduire le sucre (_modifier_)
* Une autre amie, Lisa, demande à l'utiliser pour un dîner la semaine prochaine (_distribuer_)

Par comparaison, un processus de source fermée serait de se rendre dans un restaurant et commander une tranche de tarte aux cerises. Vous devez payer des frais pour manger la tarte, et le restaurant ne vous donnera probablement pas leur recette. Si vous avez copié leur tarte exactement et l'avez vendue sous votre propre nom, le restaurant pourrait même prendre des mesures légales contre vous.

### Pourquoi les gens ouvrent-ils leur travail ?

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kentcdodds?s=180" class="pquote-avatar" alt="avatar">
  L'une des expériences les plus enrichissantes que je retire de l'utilisation et de la collaboration sur l'open source vient des relations que je construis avec d'autres développeurs confrontés aux mêmes problèmes que moi.
  <p markdown="1" class="pquote-credit">
— @kentcdodds, ["How getting into Open Source has been awesome for me"](https://kentcdodds.com/blog/how-getting-into-open-source-has-been-awesome-for-me)
  </p>
</aside>

[Il y a de nombreuses raisons](https://ben.balter.com/2015/11/23/why-open-source/) pour une personne ou une organisation de vouloir ouvrir un projet. Parmi celles-ci :

* **Collaboration :** Les projets open source peuvent accepter des changements de n'importe qui dans le monde. [Exercism](https://github.com/exercism/), par exemple, est une plate-forme d'exercices de programmation avec plus de 350 contributeurs.

* **Adoption et remixage :** Les projets open source peuvent être utilisés par n'importe qui dans presque n'importe quel but. Les gens peuvent même l'utiliser pour construire d'autres choses. [WordPress](https://github.com/WordPress), par exemple, a commencé en tant que fork (nous verrons plus tard ce qu'on appelle un fork, pour le moment voyez ceci comme une copie à un instant donné) d'un projet existant appelé [b2](https://github.com/WordPress/book/blob/HEAD/Content/Part%201/2-b2-cafelog.md).

* **Transparence :** Tout le monde peut inspecter un projet open source pour y chercher des erreurs ou des incohérences. La transparence est importante pour des gouvernements comme celui de [Bulgarie](https://medium.com/@bozhobg/bulgaria-got-a-law-requiring-open-source-98bf626cf70a) ou des [États-Unis](https://sourcecode.cio.gov/), les industries réglementées comme les banques ou les soins de santé, et les logiciels de sécurité comme [Let's Encrypt](https://github.com/letsencrypt).

L'open source n'est pas seulement pour les logiciels. Vous pouvez tout rendre open source depuis les jeux de données aux livres. Jetez un coup d'œil sur [GitHub Explore](https://github.com/explore) pour trouver des idées sur ce que vous pouvez faire d'autre.

### L'open source signifie-t-il "gratuit" ?

L'un des plus gros attraits de l'open source est qu'il ne coûte pas d'argent. La "gratuité" est toutefois une conséquence de la valeur globale de l'open source.

Puisqu'[une licence open source nécessite](https://opensource.org/osd-annotated) que n'importe qui puisse utiliser, modifier et partager votre projet dans pratiquement n'importe quel but, les projets eux-mêmes ont tendance à être gratuits. Si le projet coûte de l'argent, n'importe qui peut légalement en faire une copie et utiliser la version gratuite à la place.

En conséquence, la plupart des projets open source sont gratuits, mais la "gratuité" ne fait pas partie de la définition de l'open source. Il existe des moyens de facturer les projets open source indirectement à travers une double licence ou des fonctionnalités limitées, tout en respectant la définition officielle de l'open source.

## Dois-je lancer mon propre projet open source

La réponse courte est oui, car peu importe le résultat, le lancement de votre propre projet est une excellente façon d'apprendre comment fonctionne l'open source.

Si vous n'avez jamais ouvert aux autres un projet auparavant, vous pourriez vous demander ce que les gens vont penser, ou être inquiet du risque que personne ne le remarquera. Si cela vous parle, sachez que vous n'êtes pas seul !

Le travail open source est comme toute autre activité créative, que ce soit l'écriture ou la peinture. Cela peut être effrayant de partager votre travail avec le reste du monde, mais la seule façon de s'améliorer est de pratiquer - même si vous n'avez pas de public.

Si vous n'êtes pas encore convaincu, prenez un moment pour réfléchir à vos objectifs.

### Fixer vos objectifs

Les objectifs peuvent vous aider à déterminer ce sur quoi vous devez travailler, ce à quoi vous devez dire non et où vous avez besoin de l'aide des autres. Commencez par vous demander : _pourquoi est-ce que j'ouvre ce projet ?_

Il n'y a pas de bonne réponse à cette question. Vous pouvez avoir plusieurs objectifs pour un même projet ou différents projets avec des objectifs différents.

Si votre seul objectif est de montrer votre travail, vous ne voulez peut-être même pas de contributions, et vous pouvez alors même le dire dans votre fichier README. D'un autre côté, si vous voulez des contributeurs, vous allez investir du temps dans une documentation claire et faire en sorte que les nouveaux arrivants se sentent les bienvenus.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mavris?s=180" class="pquote-avatar" alt="avatar">
  A un certain moment, j'ai créé un UIAlertView personnalisé que j'utilisais... et j'ai décidé de le rendre open source. Je l'ai donc modifié pour être plus dynamique et l'ai mis à disposition sur GitHub. J'ai également écrit ma première documentation expliquant aux autres développeurs comment l'utiliser dans leurs projets. Probablement personne ne l'a jamais utilisé parce que c'était un projet simple mais je me sentais satisfait de ma contribution.
  <p markdown="1" class="pquote-credit">
— @mavris, ["Self-taught Software Developers: Why Open Source is important to us"](https://medium.com/rocknnull/self-taught-software-engineers-why-open-source-is-important-to-us-fe2a3473a576)
  </p>
</aside>

Au fur et à mesure que votre projet grandit, votre communauté peut commencer à avoir besoin de plus que du code. Gardez bien à l'esprit que répondre aux problèmes, réviser le code et promouvoir votre projet sont des tâches importantes dans un projet open source.

Bien que le temps que vous consacrez à des tâches sans code dépende de la taille et de la portée de votre projet, vous devez vous préparer en tant que responsable à les résoudre par vous-même ou à trouver quelqu'un pour vous aider.

**Si vous faites partie d'une entreprise qui ouvre le code source d'un projet,** assurez-vous que votre projet dispose des ressources internes dont il a besoin pour prospérer. Vous voudrez identifier qui est responsable de la maintenance du projet après son lancement et comment vous allez partager ces tâches avec votre communauté.

Si vous avez besoin d'un budget ou d'un personnel dédié pour la promotion, les opérations et la maintenance du projet, commencez ces discussions au sein de votre entreprise aussi tôt que possible.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/captainsafia?s=180" class="pquote-avatar" alt="avatar">
  Lorsque vous commencez à ouvrir le projet, il est important de vous assurer que vos processus de gestion prennent en compte les contributions et les capacités de la communauté autour de votre projet. N'ayez pas peur d'impliquer des contributeurs qui ne sont pas employés dans votre entreprise dans les aspects clés du projet — surtout s'ils sont des contributeurs réguliers.
  <p markdown="1" class="pquote-credit">
— @captainsafia, ["So you wanna open source a project, eh?"](https://dev.to/captainsafia/so-you-wanna-open-source-a-project-eh-5779)
  </p>
</aside>

### Contribuer à d'autres projets

Si votre objectif est d'apprendre à collaborer avec d'autres ou à comprendre le fonctionnement de l'open source, envisagez de contribuer à un projet existant. Commencez avec un projet que vous utilisez déjà et que vous aimez. Contribuer à un projet peut être aussi simple que de réparer des fautes de frappe ou de mettre à jour une documentation.

Si vous ne savez pas comment commencer en tant que contributeur, consultez notre guide [Comment contribuer à l'Open Source](../how-to-contribute/).

## Lancer votre propre projet open source

Il n'y a pas de moment idéal pour ouvrir votre travail. Vous pouvez ouvrir une idée, un travail en cours, ou après des années de source fermée.

De manière générale, vous devriez ouvrir votre projet lorsque vous serez à l'aise à l'idée que les autres puissent voir et donner votre avis sur votre travail.

Quelle que soit la phase durant laquelle vous décidez d'ouvrir votre projet, chaque projet doit inclure la documentation suivante :

* [Licence open source](https://help.github.com/articles/open-source-licensing/#where-does-the-license-live-on-my-repository)
* [README](https://help.github.com/articles/create-a-repo/#commit-your-first-change)
* [Directives de contribution](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)
* [Code de conduite](../code-of-conduct/)

En tant que responsable, ces composants vous aideront à communiquer les attentes, à gérer les contributions et à protéger les droits légaux de chacun (y compris les vôtres). Ils augmentent considérablement vos chances d'avoir une expérience positive.

Si votre projet est sur GitHub, placer ces fichiers dans votre répertoire racine avec les noms de fichiers recommandés aidera GitHub à les reconnaître et à les faire apparaître automatiquement à vos lecteurs.

### Choisir une licence

Une licence open source garantit que d'autres utilisateurs peuvent utiliser, copier, modifier et contribuer à votre projet sans aucune répercussion. Elle vous protège également contre les situations juridiques épineuses. **Vous devez inclure une licence lorsque vous lancez un projet open source.**

Le travail juridique n'est pas amusant. La bonne nouvelle est que vous pouvez copier et coller une licence existante dans votre dépôt. Cela ne prendra qu'une minute pour protéger votre dur labeur.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), et [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) sont les licences Open Source les plus populaires, mais vous pouvez choisir [d'autres options](https://choosealicense.com).

Lorsque vous créez un nouveau projet sur GitHub, vous avez la possibilité de sélectionner une licence. L'inclusion d'une licence open source rendra votre projet GitHub open source.

![Choisissez une licence](/assets/images/starting-a-project/repository-license-picker.png)

Si vous avez d'autres questions ou préoccupations concernant les aspects juridiques de la gestion d'un projet open source, [nous avons ce qu'il vous faut](../legal/).

### Ecrire un fichier README

Les fichiers README font plus qu'expliquer comment utiliser votre projet. Ils expliquent également pourquoi votre projet est important et ce que vos utilisateurs peuvent en faire.

Dans votre fichier README, essayez de répondre aux questions suivantes :

* Que fait ce projet ?
* Pourquoi ce projet est-il utile ?
* Par quoi puis-je commencer ?
* Où puis-je obtenir plus d'aide, si j'en ai besoin ?

Vous pouvez utiliser votre fichier README pour répondre à d'autres questions, telles que la manière dont vous gérez les contributions, les objectifs du projet et les informations sur les licences et l'attribution. Si vous ne souhaitez pas accepter de contributions ou si votre projet n'est pas encore prêt pour la production, écrivez ces informations.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/tracymakes?s=180" class="pquote-avatar" alt="avatar">
  Une meilleure documentation signifie plus d'utilisateurs, moins de demandes de support et plus de contributeurs. (...) Rappelez-vous que vos lecteurs ne sont pas vous. Il y a des gens avec des expériences complètement différentes qui pourraient participer à votre projet.
  <p markdown="1" class="pquote-credit">
— @tracymakes, ["Writing So Your Words Are Read (video)"](https://www.youtube.com/watch?v=8LiV759Bje0&list=PLmV2D6sIiX3U03qc-FPXgLFGFkccCEtfv&index=10)
  </p>
</aside>

Parfois, les gens évitent d'écrire un fichier README parce qu'ils ont l'impression que le projet n'est pas terminé ou qu'ils ne veulent pas de contributions. En fait ce sont toutes de très bonnes raisons d'en écrire un.

Pour plus d'inspiration, essayez d'utiliser celui de @18F ["Making READMEs Readable"](https://pages.18f.gov/open-source-guide/making-readmes-readable/) ou le [modèle de README](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) de @PurpleBooth pour écrire un fichier README complet.

Lorsque vous incluez un fichier README dans le répertoire racine, GitHub l'affiche automatiquement sur la page d'accueil du dépot.

### R&eacute;daction de vos directives de contribution

Un fichier CONTRIBUTING indique à votre audience comment participer à votre projet. Par exemple, vous pouvez inclure des informations sur:

* Comment déposer un rapport de bug (essayez d'utiliser [des modèles de questions et de pull requests](https://github.com/blog/2111-issue-and-pull-request-templates))
* Comment proposer une nouvelle fonctionnalité
* Comment configurer votre environnement et exécuter des tests

En plus des détails techniques, un fichier CONTRIBUTING est une opportunité de communiquer vos attentes pour les contributions, telles que:

* Les types de contributions que vous recherchez
* Votre feuille de route ou vision pour le projet
* Comment les contributeurs devraient (ou ne devraient pas) entrer en contact avec vous

Utiliser un ton chaleureux et amical et offrir des suggestions précises pour les contributions (comme la rédaction de documentation ou la création d'un site Web) peut faire beaucoup pour que les nouveaux arrivants se sentent les bienvenus et enthousiastes à l'idée de participer.

Par exemple, [Active Admin](https://github.com/activeadmin/activeadmin/) démarre [son guide de contribution](https://github.com/activeadmin/activeadmin/blob/HEAD/CONTRIBUTING.md) avec:

> Tout d'abord, merci d'envisager de contribuer à Active Admin. Ce sont des gens comme vous qui font d'Active Admin un outil formidable.

Dans les premières étapes de votre projet, votre fichier CONTRIBUTING peut être simple. Vous devez toujours expliquer comment signaler les bogues ou les problèmes de fichiers, ainsi que les exigences techniques (comme les tests) pour apporter une contribution.

Au fil du temps, vous pouvez ajouter d'autres questions fréquemment posées à votre fichier CONTRIBUTING. La rédaction de ce genre d'informations signifie que moins de personnes vous poseront les mêmes questions encore et encore.

Pour plus d'aide avec la rédaction de votre fichier CONTRIBUTING, consultez le [modèle de guide de contribution de @nayafia](https://github.com/nayafia/contributing-template/blob/HEAD/CONTRIBUTING-template.md) ou le guide de @mozilla ["Comment Construire un CONTRIBUTING.md"](https://mozillascience.github.io/working-open-workshop/contributing/).

Ajoutez un lien vers votre fichier CONTRIBUTING dans votre fichier README, afin que plus de gens le voient. Si vous [placez le fichier CONTRIBUTING dans le repository de votre projet](https://help.github.com/articles/setting-guidelines-for-repository-contributors/), GitHub affichera automatiquement un lien vers votre fichier lorsqu'un contributeur crée un problème ou ouvre une pull request.

![Lignes directrices contributives](/assets/images/starting-a-project/Contributing-guidelines.jpg)

### Établir un code de conduite

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mlynch?s=180" class="pquote-avatar" alt="avatar">
  Nous avons tous eu des expériences où nous avons fait face à ce qui était probablement un abus soit en tant que responsable essayant d'expliquer pourquoi quelque chose devait être d'une certaine manière, ou en tant qu'utilisateur... posant une simple question. (...) Un code de conduite devient un document facilement référencé et lisible qui indique que votre équipe prend un discours constructif très au sérieux.
  <p markdown="1" class="pquote-credit">
— @mlynch, ["Making Open Source a Happier Place"](https://medium.com/ionic-and-the-mobile-web/making-open-source-a-happier-place-3b90d254f5f)
  </p>
</aside>

Enfin, un code de conduite permet de définir des règles de base pour le comportement des participants de votre projet. Ceci est particulièrement utile si vous lancez un projet open source pour une communauté ou une entreprise. Un code de conduite vous permet de faciliter un comportement communautaire sain et constructif, ce qui réduira votre stress en tant que responsable.

Pour plus d'informations, consultez notre [Code de conduite](../code-of-conduct/).

En plus d'indiquer _comment_ vous souhaitez que les participants se comportent, un code de conduite a également tendance à décrire à qui s'appliquent ces attentes, quand elles s'appliquent, et que faire en cas de violation.

Tout comme les licences open source, il existe également des normes émergentes pour les codes de conduite, vous n'avez donc pas besoin d'écrire les vôtres. Le [Contributor Covenant](https://contributor-covenant.org/)) est un code de conduite qui est utilisé par [plus de 40 000 projets open source](https://www.contributor-covenant.org/adopters) , y compris Kubernetes, Rails et Swift. Quel que soit le texte que vous utilisez, vous devez être prêt à appliquer votre code de conduite si nécessaire.

Collez le texte directement dans un fichier CODE_OF_CONDUCT dans votre repository. Conservez le fichier dans le répertoire racine de votre projet pour qu'il soit facile à trouver et mettez un lien vers lui dans votre fichier README.

## Nommer et créer l'image de marque de votre projet

La marque est plus qu'un logo flashy ou un nom de projet accrocheur. Il s'agit de la façon dont vous parlez de votre projet et à qui est destiné votre message.

### Choisir le bon nom

Choisissez un nom facile à retenir et, idéalement, qui donne une idée de ce que fait le projet. Par exemple:

* [Sentry](https://github.com/getsentry/sentry) surveille les applications pour fournir des rapports d'erreur
* [Thin](https://github.com/macournoyer/thin) est un serveur web Ruby simple et rapide

Si vous construisez sur un projet existant, l'utilisation de leur nom comme préfixe peut aider à clarifier ce que fait votre projet (par exemple, [node-fetch](https://github.com/bitinn/node-fetch) apporte `window.fetch` à Node.js).

Pensez à la clarté avant tout. Faire des jeux de mots, c'est amusant, mais rappelez-vous que certaines blagues peuvent ne pas se traduire dans d'autres cultures et des personnes ayant des expériences différentes de vous peuvent ne pas les comprendre. Certains de vos utilisateurs potentiels peuvent être des employés dans une entreprise : vous ne voulez pas les mettre mal à l'aise quand ils devront expliquer votre projet au travail !

### Éviter les conflits de noms

[Vérifiez les projets open source avec un nom similaire](http://ivantomic.com/projects/ospnc/), surtout si vous partagez le même langage ou écosystème. Si votre nom est trop proche de celui d'un projet existant populaire, vous risquez de perturber votre auditoire.

Si vous souhaitez un site Web, un pseudo Twitter ou d'autres entités pour représenter votre projet, assurez-vous de pouvoir obtenir les noms souhaités. Idéalement, [réservez ces noms maintenant](https://instantdomainsearch.com/) pour votre tranquillité d'esprit, même si vous n'avez pas l'intention de les utiliser pour l'instant.

Assurez-vous que le nom de votre projet ne porte pas atteinte à une marque. Une entreprise pourrait vous demander d'arrêter votre projet dans le futur, ou même intenter une action en justice contre vous. Cela ne vaut tout simplement pas le risque.

Vous pouvez consulter la [Base de données mondiale de l'OMPI sur les marques](https://www.wipo.int/branddb/fr/) pour obtenir des informations sur les marques provenant de différentes sources aux niveaux national et international. Si vous êtes dans une entreprise, c'est un des sujets sur lesquels [votre équipe juridique peut vous aider](../legal/).

Enfin, recherchez le nom de votre projet sur Google. Les gens pourront-ils trouver facilement votre projet ? Est-ce que quelque chose d'autre apparaît dans les résultats de recherche que vous ne voudriez pas qu'ils voient ?

### Comment vous écrivez (et codez) affecte votre marque, aussi !

Tout au long de la vie de votre projet, vous allez beaucoup écrire : des fichiers README, des didacticiels, des documents communautaires, des réponses aux problèmes, peut-être même des bulletins d'informations et des listes de diffusion.

Qu'il s'agisse d'une documentation officielle ou d'un courriel occasionnel, votre style d'écriture fait partie de la marque de votre projet. Réfléchissez à comment vous pourriez rencontrer votre public et au ton que vous souhaitez utiliser pour communiquer avec eux.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/janl?s=180" class="pquote-avatar" alt="avatar">
  J'ai essayé de m'impliquer dans tous les sujets de la liste de diffusion, de montrer un comportement exemplaire, d'être gentil avec les gens, de prendre leurs problèmes au sérieux et d'essayer d'être utile dans l'ensemble. Au bout d'un moment, les gens sont restés non seulement à poser des questions, mais aussi à répondre aux questions, et pour mon plus grand plaisir, ils ont imité mon style.
  <p markdown="1" class="pquote-credit">
— @janl sur [CouchDB](https://github.com/apache/couchdb), ["Sustainable Open Source"](https://web.archive.org/web/20200723213552/https://writing.jan.io/2015/11/20/sustainable-open-source.html)
  </p>
</aside>

L'utilisation d'un langage chaleureux et inclusif (tel que l'utilisation de «eux», même en faisant référence à la personne seule) peut faire beaucoup pour rendre votre projet accueillant pour les nouveaux contributeurs. Tenez-vous-en à un langage simple, car bon nombre de vos lecteurs ne sont peut-être pas francophones.

Au-delà de votre façon d'écrire, votre style de codage peut également faire partie de la marque de votre projet. [Angular](https://github.com/johnpapa/angular-styleguide) et [jQuery](https://contribute.jquery.org/style-guide/js/) sont deux exemples de projets avec des lignes directrices et des styles de codage rigoureux.

Il n'est pas nécessaire d'écrire un guide de style pour votre projet lorsque vous débutez, et vous constaterez peut-être que vous aimez incorporer différents styles de codage dans votre projet de toute façon. Mais vous devriez prévoir comment votre style d'écriture et de codage pourrait attirer ou décourager différents types de personnes. Les premières étapes de votre projet sont votre opportunité de définir le précédent que vous souhaitez voir.

## Votre checklist de pr&eacute;-lancement

Prêt à lancer votre projet open source ? Voici une checklist pour vous aider. Toutes les cases sont cochées ? Vous êtes prêt à vous lancer ! [Cliquez sur "Publier"] (https://help.github.com/articles/making-a-private-repository-public/) et donnez vous une tape dans le dos.

**Documentation**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox1" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox1" class="overflow-hidden d-block text-normal">
    Le projet a un fichier LICENSE avec une licence open source
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox2" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox2" class="overflow-hidden d-block text-normal">
    Le projet a une documentation de base (README, CONTRIBUTING, CODE_OF_CONDUCT)
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox3" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox3" class="overflow-hidden d-block text-normal">
    Le nom est facile à retenir, donne une idée de ce que fait le projet, et n'est pas en conflit avec un projet existant ou ne porte pas atteinte aux marques existantes
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox4" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox4" class="overflow-hidden d-block text-normal">
    La liste des problèmes est à jour, avec des problèmes clairement organisés et labelisés
  </label>
</div>

**Code**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox5" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox5" class="overflow-hidden d-block text-normal">
    Le projet utilise des conventions de code cohérentes et les noms des fonctions / méthodes / variables sont clairs
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox6" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox6" class="overflow-hidden d-block text-normal">
    Le code est clairement commenté, documentant les intentions et les cas marginaux
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox7" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox7" class="overflow-hidden d-block text-normal">
    Il n'y a pas de données sensibles dans l'historique, les problèmes ou les pull requests (par exemple, mots de passe ou autres informations non publiques)
  </label>
</div>

**Humain**

Si vous êtes un individu:

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox8" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox8" class="overflow-hidden d-block text-normal">
  Vous avez parlé au service juridique et / ou comprenez les politiques de propriété intellectuel et open source de votre entreprise (si vous êtes employé quelque part)
  </label>
</div>

Si vous êtes une entreprise ou une organisation:

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox9" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox9" class="overflow-hidden d-block text-normal">
    Vous avez parlé à votre service juridique
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox10" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox10" class="overflow-hidden d-block text-normal">
    Vous avez un plan marketing pour annoncer et promouvoir le projet
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox11" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox11" class="overflow-hidden d-block text-normal">
    Quelqu'un s'engage à gérer les interactions avec la communauté (répondre aux problèmes, passer en revue et fusionner les pull requests)
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox12" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox12" class="overflow-hidden d-block text-normal">
    Au moins deux personnes ont un accès administratif au projet
  </label>
</div>

## Vous l'avez r&eacute;ussi !

Félicitations pour l'ouverture de votre premier projet. Peu importe le résultat, travailler en public est un cadeau fait à la communauté. A chaque commit, commentaire et pull request, vous créez des opportunités pour vous-même et pour les autres d'apprendre et de progresser.
