---
lang: fr
title: Leadership et gouvernance
description: Les projets Open Source en croissance peuvent bénéficier de règles formelles pour prendre des décisions.
class: leadership
order: 6
image: /assets/images/cards/leadership.png
related:
  - best-practices
  - metrics
---

## Comprendre la gouvernance pour votre projet en croissance

Votre projet prend de l'ampleur, les gens sont mobilisés et vous êtes engagé à poursuivre dans cette voie. À ce stade, vous allez peut-être vous demander comment incorporer les contributeurs réguliers du projet dans votre flux de travail, que ce soit en donnant à quelqu'un l'accès à la validation ou en résolvant les débats de la communauté. Si vous avez des questions, nous avons des réponses.

## Quels sont les exemples de r&ocirc;les formels utilis&eacute;s dans les projets open source

De nombreux projets suivent une structure similaire pour les rôles contributeurs et la reconnaissance.

Qu'est-ce que ces rôles signifient réellement, cependant, est entièrement à vous. Voici quelques types de rôles que vous pouvez reconnaître:

* **Responsables**
* **Contributeur**
* **Committeur**

**Pour certains projets, les "responsables"** sont les seules personnes dans un projet ayant un accès en validation. Dans d'autres projets, ils sont simplement les personnes répertoriées dans le fichier README en tant que responsables.

Un responsable ne doit pas nécessairement être quelqu'un qui écrit du code pour votre projet. Ce pourrait être quelqu'un qui a fait beaucoup de travail pour évangéliser votre projet, ou une documentation écrite qui a rendu le projet plus accessible aux autres. Peu importe ce qu'ils font au jour le jour, un responsable est probablement quelqu'un qui se sent responsable de la direction du projet et qui est déterminé à l'améliorer.

**Un contributeur peut être n'importe quel personne** qui commente un problème ou une demande d'extraction, les personnes qui ajoutent de la valeur au projet (qu'il s'agisse de problèmes de triage, d'écriture de code ou d'organisation d'événements) ou toute personne ayant une pull request mergée (sans doute la définition la plus proche d'un contributeur).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">
  \[Pour Node.js,\] chaque personne qui se présente pour commenter une issue ou soumettre du code est membre de la communauté d'un projet. Le simple fait de pouvoir les voir signifie qu'ils ont franchi la ligne d'un utilisateur à un contributeur.
  <p markdown="1" class="pquote-credit">
— @mikeal, ["Healthy Open Source"](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951)
  </p>
</aside>

**Le terme "committeur"** pourrait être utilisé pour distinguer le droit de commit, qui est un type spécifique de responsabilité, des autres formes de contribution.

Alors que vous pouvez définir vos rôles de projet comme vous le souhaitez, [pensez à utiliser des définitions plus larges](../how-to-contribute/#que-signifie-contribuer) pour encourager plus de formes de contribution. Vous pouvez utiliser des rôles de leadership pour reconnaître formellement les personnes qui ont apporté des contributions exceptionnelles à votre projet, indépendamment de leurs compétences techniques.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/jacobian?s=180" class="pquote-avatar" alt="avatar">
  Vous me connaissez peut-être comme "l'inventeur" de Django ... mais en fait je suis le gars qui a été embauché pour travailler sur une chose un an après qu'elle a été déjà fait. (...) Les gens soupçonnent que j'ai réussi grâce à ma compétence en programmation... mais je suis au mieux un programmeur moyen.
  <p markdown="1" class="pquote-credit">
— @jacobian, ["PyCon 2015 Keynote" (video)](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s)
  </p>
</aside>

## Comment formaliser ces r&ocirc;les de leadership

La formalisation de vos rôles de leadership aide les gens à se sentir concernés et indique aux autres membres de la communauté qui chercher de l'aide.

Pour un projet plus petit, la désignation des responsables peut être aussi simple que d'ajouter leurs noms à votre fichier texte README ou CONTRIBUTORS.

Pour un plus grand projet, si vous avez un site web, créez une page d'équipe ou faites une liste de vos chefs de projet. Par exemple, [Postgres](https://github.com/postgres/postgres/) a une [page d'équipe complète](https://www.postgresql.org/community/contributors/) avec des profils courts pour chaque contributeur.

Si votre projet a une communauté de contributeurs très active, vous pouvez former une équipe de responsables, ou même des sous-comités de personnes qui s'approprient différents domaines (par exemple, la sécurité, le tri des problèmes ou la conduite de la communauté). Laissez les gens s'organiser et faire du bénévolat pour les rôles qui les intéressent le plus, plutôt que de les assigner.

<aside markdown="1" class="pquote">
  \[Nous\] complétons l'équipe de base avec plusieurs "sous-équipes". Chaque sous-équipe est concentrée sur une zone spécifique, par exemple, la conception de langage ou les bibliothèques. (...) Pour assurer une coordination globale et une vision forte et cohérente pour le projet dans son ensemble, chaque sous-équipe est dirigée par un membre de l'équipe de base.
  <p markdown="1" class="pquote-credit">
— ["Rust Governance RFC"](https://github.com/rust-lang/rfcs/blob/HEAD/text/1068-rust-governance.md)
  </p>
</aside>

Les équipes de direction peuvent vouloir créer une chaîne désignée (comme sur IRC) ou se rencontrer régulièrement pour discuter du projet (comme sur Gitter ou Google Hangout). Vous pouvez même rendre ces réunions publiques afin que les autres puissent les écouter. [Cucumber-ruby](https://github.com/cucumber/cucumber-ruby), par exemple, [héberge des heures de bureau chaque semaine](https://github.com/cucumber/cucumber-ruby/blob/HEAD/CONTRIBUTING.md#talking-with-other-devs).

Une fois que vous avez établi des rôles de leadership, n'oubliez pas de documenter comment les gens peuvent les atteindre ! Établissez un processus clair pour que quelqu'un puisse devenir responsable ou rejoindre un sous-comité dans votre projet, et l'écrire dans votre GOVERNANCE.md.

Des outils tels que [Vossibility](https://github.com/icecrime/vossibility-stack) peuvent vous aider à savoir qui contribue (ou non) au projet. Documenter cette information évite la perception de la communauté que les responsables sont une clique qui prend ses décisions en privé.

Enfin, si votre projet est sur GitHub, envisagez de transférer votre projet de votre compte personnel vers une organisation et d'ajouter au moins un administrateur de sauvegarde. [Les organisations GitHub](https://help.github.com/articles/creating-a-new-organization-account/) facilitent la gestion des permissions et des dépôts multiples et protègent l'héritage de votre projet par [propriété partagée](../building-community/#partager-la-propri&eacute;t&eacute;-de-votre-projet).

## Quand dois-je donner &agrave; quelqu'un le droit de commit

Certaines personnes pensent que vous devriez donner un droit de commit à tous ceux qui apportent une contribution. Cela pourrait encourager plus de personnes à se sentir propriétaires de votre projet.

D'un autre côté, en particulier pour les projets plus volumineux et plus complexes, vous pouvez ne donner que le droit de commit aux personnes qui ont démontré leur engagement. Il n'y a pas une bonne façon de le faire - faites ce qui vous est le plus confortable !

Si votre projet est sur GitHub, vous pouvez utiliser des [branches protégées](https://help.github.com/articles/about-protected-branches/) pour gérer qui peut pousser vers une branche particulière, et dans quelles circonstances.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/felixge?s=180" class="pquote-avatar" alt="avatar">
  Chaque fois que quelqu'un vous envoie une pull request, donnez-leur le droit de commit sur votre projet. Bien que cela puisse sembler incroyablement stupide au début, l'utilisation de cette stratégie vous permettra de libérer le vrai pouvoir de GitHub. (...) Une fois que les gens ont un accès de validation, ils ne craignent plus que leur patch ne soit pas mergé... les obligeant à y mettre beaucoup plus de travail.
  <p markdown="1" class="pquote-credit">
— @felixge, ["The Pull Request Hack"](https://felixge.de/2013/03/11/the-pull-request-hack.html)
  </p>
</aside>

## Quelles sont les structures de gouvernance communes pour les projets open source

Il existe trois structures de gouvernance communes associées aux projets open source.

* **BDFL :** BDFL, "Benevolent Dictator for Life", signifie "Dictateur bienveillant pour la vie". Sous cette structure, une personne (généralement l'auteur initial du projet) a le dernier mot sur toutes les grandes décisions de projet. [Python](https://github.com/python) est un exemple classique. Les projets plus petits sont probablement BDFL par défaut, car il n'y a qu'un ou deux responsables. Un projet qui provient d'une entreprise pourrait également tomber dans la catégorie BDFL.

* **Méritocratie :** **(Note: le terme "méritocratie" a des connotations négatives pour certaines communautés et a une [histoire sociale et politique complexe](http://geekfeminism.wikia.com/wiki/Meritocracy).)** Dans le cadre d'une méritocratie, les contributeurs actifs du projet (ceux qui démontrent le «mérite») ont un rôle formel de prise de décision. Les décisions sont généralement prises sur la base d'un consensus de vote pur. Le concept de méritocratie a été mis au point par la [Fondation Apache](https://www.apache.org/). [Tous les projets Apache](https://www.apache.org/index.html#projects-list) sont des méritocraties. Les contributions ne peuvent être faites que par des personnes qui se représentent elles-mêmes, et non par une entreprise.

* **Contribution libérale :** Selon un modèle de contribution libérale, les personnes qui font le plus de travail sont reconnues comme les plus influentes, mais cela est basé sur le travail actuel et non sur les contributions historiques. Les grandes décisions de projet sont prises en fonction d'un processus de recherche de consensus (discuter des griefs majeurs) plutôt que d'un simple vote, et s'efforcent d'inclure autant de perspectives communautaires que possible. Exemples populaires de projets qui utilisent un modèle de contribution libérale : [Node.js](https://foundation.nodejs.org/) et [Rust](https://www.rust-lang.org/).

Lequel devriez-vous utiliser ? C'est à vous de décider ! Chaque modèle a des avantages et des compromis. Et bien qu'ils puissent sembler tout à fait différents au début, les trois modèles ont plus en commun qu'ils ne le semblent. Si vous souhaitez adopter l'un de ces modèles, consultez ces modèles :

* [Gabarit de modèle BDFL](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
* [Gabarit de modèle de la méritocratie](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
* [Politique de contribution libérale de Node.js](https://medium.com/the-node-js-collection/healthy-open-source-967fa8be7951)

## Ai-je besoin de documents de gouvernance lorsque je lance mon projet

Il n'y a pas de bon moment pour écrire la gouvernance de votre projet, mais c'est beaucoup plus facile à définir une fois que vous avez vu la dynamique de votre communauté se jouer. La meilleure partie (et la plus difficile) de la gouvernance open source est qu'elle est façonnée par la communauté !

Certaines documentations préliminaires contribueront inévitablement à la gouvernance de votre projet, alors commencez à écrire ce que vous pouvez. Par exemple, vous pouvez définir des attentes claires pour le comportement ou le fonctionnement de votre processus contributeur, même au lancement de votre projet.

Si vous faites partie d'une entreprise qui lance un projet open source, cela vaut la peine d'avoir une discussion interne avant le lancement sur la manière dont votre entreprise prévoit de maintenir et de prendre des décisions concernant le projet. Vous pouvez également expliquer publiquement quelque chose de particulier à la façon dont votre entreprise sera (ou ne sera pas !) impliquée dans le projet.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/caabernathy?s=180" class="pquote-avatar" alt="avatar">
  Nous affectons de petites équipes pour gérer des projets sur GitHub qui travaillent sur ces projets sur Facebook. Par exemple, React est géré par un ingénieur React.
  <p markdown="1" class="pquote-credit">
— @caabernathy, ["An inside look at open source at Facebook"](https://opensource.com/life/15/10/ato-interview-christine-abernathy-facebook)
  </p>
</aside>

## Que se passe-t-il si les employ&eacute;s de l'entreprise commencent &agrave; soumettre des contributions

Les projets open source réussis sont utilisés par de nombreuses personnes et entreprises, et certaines entreprises peuvent éventuellement avoir des sources de revenus liées au projet. Par exemple, une entreprise peut utiliser le code du projet comme un composant dans une offre de service commercial.

Comme le projet est de plus en plus utilisé, les personnes qui ont de l'expertise dans ce domaine deviennent de plus en plus demandées - vous pouvez être l'une d'entre elles ! - et seront parfois payés pour le travail qu'ils font dans le projet.

Il est important de traiter l'activité commerciale comme normale et comme une autre source d'énergie de développement. Les développeurs payés ne devraient pas recevoir un traitement spécial par rapport aux non-payés, bien sûr, chaque contribution doit être évaluée sur ses mérites techniques. Cependant, les gens devraient se sentir à l'aise de s'engager dans une activité commerciale, et se sentir à l'aise d'énoncer leurs cas d'utilisation lorsqu'ils argumentent en faveur d'une amélioration ou d'une caractéristique particulière.

"Commercial" est complètement compatible avec "open source". "Commercial" signifie simplement qu'il y a de l'argent impliqué quelque part - que le logiciel est utilisé dans le commerce, ce qui est de plus en plus probable au fur et à mesure qu'un projet est adopté. (Lorsque le logiciel open source est utilisé dans le cadre d'un produit non-open-source, le produit global est toujours un logiciel "propriétaire", bien que, comme open source, il puisse être utilisé à des fins commerciales ou non-commerciales.)

Comme tout le monde, les développeurs motivés par le commerce acquièrent une influence sur le projet grâce à la qualité et à la quantité de leurs contributions. Évidemment, un développeur payé pour son temps peut être capable de faire plus que quelqu'un qui n'est pas payé, mais c'est bon: le paiement est juste l'un des nombreux facteurs possibles qui pourraient affecter combien quelqu'un fait. Gardez vos discussions de projet axées sur les contributions, pas sur les facteurs externes qui permettent aux gens de faire ces contributions.

## Ai-je besoin d'une entit&eacute; l&eacute;gale pour soutenir mon projet

Vous n'avez pas besoin d'une entité légale pour soutenir votre projet open source à moins que vous ne manipuliez de l'argent.

Par exemple, si vous souhaitez créer une entreprise commerciale, vous devez créer un C Corp ou LLC (si vous êtes basé aux États-Unis). Si vous ne faites que du travail contractuel lié à votre projet open source, vous pouvez accepter de l'argent en tant que propriétaire unique ou créer une LLC (si vous êtes basé aux États-Unis).

Si vous souhaitez accepter des dons pour votre projet open source, vous pouvez configurer un bouton de don (PayPal ou Stripe, par exemple), mais l'argent ne sera pas déductible d'impôt, sauf si vous êtes un organisme à but non lucratif (501c3, si vous êtes aux États-Unis).

Beaucoup de projets ne souhaitent pas se lancer dans la création d'un but non lucratif, ils trouvent donc un sponsor fiscal à but non lucratif. Un sponsor fiscal accepte les dons en votre nom, généralement en échange d'un pourcentage du don. [Software Freedom Conservancy](https://sfconservancy.org/), [Fondation Apache](https://www.apache.org/), [Fondation Eclipse](https://eclipse.org/org/foundation/), [Linux Foundation](https://www.linuxfoundation.org/projects) et [Open Collective](https://opencollective.com/opensource) sont des exemples d'organisations qui servent de sponsors fiscaux pour des projets open source.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/piamancini?s=180" class="pquote-avatar" alt="avatar">
  Notre objectif est de fournir une infrastructure que les communautés peuvent utiliser pour être autosuffisante, créant ainsi un environnement dans lequel tout le monde - contributeurs, bailleurs de fonds, sponsors - en tire des bénéfices concrets.
  <p markdown="1" class="pquote-credit">
— @piamancini, ["Moving beyond the charity framework"](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141)
  </p>
</aside>

Si votre projet est étroitement associé à une langue ou à un écosystème donné, il peut également exister une base de logiciel connexe avec laquelle vous pouvez travailler. Par exemple, [Python Software Foundation](https://www.python.org/psf/) prend en charge [PyPI](https://pypi.org/), le gestionnaire de paquets Python et la [Fondation Node.js](https://foundation.nodejs.org/) aide à prendre en charge [Express.js](https://expressjs.com/), un framework basé sur Node.
