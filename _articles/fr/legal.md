---
lang: fr
title: Le côté légal de l'Open Source
description: Tout ce que vous n'avez jamais osé demander sur le côté juridique de l'Open Source, et quelques autres.
class: legal
order: 10
image: /assets/images/cards/legal.png
related:
  - contribute
  - leadership
---

## Comprendre les implications juridiques de l'open source

Partager votre travail créatif avec le monde peut être une expérience passionnante et enrichissante. Cela peut aussi signifier un tas de choses juridiques dont vous ne saviez pas que vous aviez à vous soucier. Heureusement, vous n'avez pas à partir de zéro. Nous avons couvert vos besoins juridiques. (Avant de creuser, assurez-vous de lire notre [avertissement](/notices/).)

## Pourquoi les gens se soucient tellement du c&ocirc;t&eacute; l&eacute;gal de l'open source

Content que vous ayez demandé ! Lorsque vous effectuez un travail de création (tel que l'écriture, les graphiques ou le code), ce travail est sous copyright exclusif par défaut. Autrement dit, la loi suppose qu'en tant qu'auteur de votre travail, vous avez votre mot à dire sur ce que les autres peuvent en faire.

En général, cela signifie que personne d'autre ne peut utiliser, copier, distribuer ou modifier votre travail sans risquer des démontages, des ruptures ou des litiges.

L'open source est une circonstance inhabituelle, cependant, parce que l'auteur s'attend à ce que d'autres utilisent, modifient et partagent le travail. Mais parce que le défaut légal est toujours le droit d'auteur exclusif, vous avez besoin d'une licence qui énonce explicitement ces autorisations.

Si vous n'appliquez pas de licence open source, tous ceux qui contribuent à votre projet deviennent également détenteurs exclusifs des droits d'auteur de leur travail. Cela signifie que personne ne peut utiliser, copier, distribuer ou modifier ses contributions - et que "personne" ne vous inclut.

Enfin, votre projet peut avoir des dépendances avec des exigences de licence dont vous n'étiez pas au courant. La communauté de votre projet ou les politiques de votre employeur peuvent également exiger que votre projet utilise des licences Open Source spécifiques. Nous couvrirons ces situations ci-dessous.

## Les projets publics GitHub sont-ils open source

Lorsque vous [créez un nouveau projet](https://help.github.com/articles/creating-a-new-repository/) sur GitHub, vous avez la possibilité de créer le repository **privée** ou **public**.

![Créer un référentiel](/assets/images/legal/repo-create-name.png)

**Rendre public votre projet GitHub n'est pas la même chose que la licence de votre projet.** Les projets publics sont couverts par les [Conditions d'utilisation de GitHub](https://help.github.com/en/github/site-policy/github-terms-of-service#3-ownership-of-content-right-to-post-and-license-grants), ce qui permet aux autres de voir et de forker votre projet, mais votre travail n'est pas autorisé.

Si vous souhaitez que d'autres personnes utilisent, distribuent, modifient ou contribuent à votre projet, vous devez inclure une licence open source. Par exemple, quelqu'un ne peut légalement utiliser aucune partie de votre projet GitHub dans son code, même s'il est public, à moins que vous ne lui donniez explicitement le droit de le faire.

## Donnez-moi juste l'essentiel sur ce dont j'ai besoin pour prot&eacute;ger mon projet

Vous avez de la chance, car aujourd'hui, les licences open source sont standardisées et faciles à utiliser. Vous pouvez copier-coller une licence existante directement dans votre projet.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), et [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) sont les licences open source les plus populaires, mais il existe d'autres options à choisir. Vous pouvez trouver le texte intégral de ces licences, et des instructions sur la façon de les utiliser, sur [choosealicense.com](https://choosealicense.com/).

Lorsque vous créez un nouveau projet sur GitHub, vous serez [invité à ajouter une licence](https://help.github.com/articles/open-source-licensing/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/benbalter?s=180" class="pquote-avatar" alt="avatar">
  Une licence standardisée sert de proxy pour ceux qui n'ont pas de formation juridique pour savoir précisément ce qu'ils peuvent et ne peuvent pas faire avec le logiciel. Sauf en cas d'absolue nécessité, évitez les termes personnalisés, modifiés ou non standard, qui constitueront un obstacle à l'utilisation en aval du code de l'agence.
  <p markdown="1" class="pquote-credit">
— @benbalter, ["Everything a government attorney needs to know about open source software&nbsp;licensing"](https://ben.balter.com/2014/10/08/open-source-licensing-for-government-attorneys/)
  </p>
</aside>

## Quelle licence open source est appropri&eacute;e pour mon projet

Si vous démarrez à partir d'une page vierge, il est difficile de se tromper avec la [Licence MIT](https://choosealicense.com/licenses/mit/). Elle est courte, très facile à comprendre et permet à quiconque de faire quoi que ce soit tant qu'il conserve une copie de la licence, comprenant vos droits d'auteur. Vous pourrez lancer le projet sous une licence différente si vous en avez besoin.

Sinon, choisir la bonne licence open source pour votre projet dépend de vos objectifs.

Votre projet a très probablement (ou aura) **des dépendances**. Par exemple, si vous ouvrez un projet Node.js, vous utiliserez probablement des bibliothèques du Node Package Manager (npm). Chacune de ces bibliothèques dépendra de sa propre licence open source. Si chacune de leurs licences est "permissive" (donne au public l'autorisation d'utiliser, de modifier et de partager, sans condition pour les licences en aval), vous pouvez utiliser la licence que vous voulez. Les licences permissives courantes incluent MIT, Apache 2.0, ISC et BSD.

D'un autre côté, si l'une de vos licences de dépendances est "strong copyleft" (donne également les mêmes permissions publiques, sous condition d'utiliser la même licence en aval), alors votre projet devra utiliser la même licence. GPLv2, GPLv3 et AGPLv3 sont les principales licences communes de copyleft.

Vous pouvez également considérer les **communautés** que vous espérez utiliser et contribuer à votre projet :

* **Voulez-vous que votre projet soit utilisé comme une dépendance par d'autres projets ?** Il sera probablement préférable d'utiliser la licence la plus populaire dans votre communauté pertinente. Par exemple, [MIT](https://choosealicense.com/licenses/mit/) est la licence la plus populaire pour [les bibliothèques npm](https://libraries.io/search?platforms=NPM).
* **Voulez-vous que votre projet attire les grandes entreprises ?** Une grande entreprise voudra probablement une licence de brevet express de tous les contributeurs. Dans ce cas, [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) vous couvrent (vous et eux).
* **Souhaitez-vous que votre projet fasse appel à des contributeurs qui ne souhaitent pas que leurs contributions soient utilisées dans des logiciels à code source fermé ?** [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) ou (si ils ne souhaitent pas non plus contribuer aux services à code source fermé) [AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) sera très bien également.

Votre **entreprise** peut avoir des exigences de licence spécifiques pour ses projets open source. Par exemple, il peut nécessiter une licence permissive afin que l'entreprise puisse utiliser votre projet dans le produit de source fermée de l'entreprise. Votre entreprise peut également exiger une licence copyleft forte et un accord de contribution supplémentaire (voir ci-dessous) afin que seule votre entreprise, et personne d'autre, puisse utiliser votre projet dans un logiciel à source fermée. Votre entreprise peut également avoir certains besoins liés aux normes, à la responsabilité sociale ou à la transparence, qui pourraient nécessiter une stratégie de licence particulière. Parlez à votre [service juridique de l'entreprise](#que-doit-savoir-l&eacute;quipe-juridique-de-mon-entreprise).

Lorsque vous créez un nouveau projet sur GitHub, vous avez la possibilité de sélectionner une licence. Y compris l'une des licences mentionnées ci-dessus rendra votre projet open source GitHub. Si vous souhaitez voir d'autres options, consultez [choosealicense.com](https://choosealicense.com) pour trouver la bonne licence pour votre projet, même si elle [n'est pas un logiciel](https://choosealicense.com/non-software/).

## Et si je veux changer la licence de mon projet

La plupart des projets n'ont jamais besoin de changer de licence. Mais parfois les circonstances changent.

Par exemple, au fur et à mesure que votre projet prend de l'ampleur, il ajoute des dépendances ou des utilisateurs, ou votre entreprise change de stratégie, chacune d'entre elles pouvant exiger ou vouloir une licence différente. En outre, si vous avez négligé d'autoriser votre projet dès le départ, l'ajout d'une licence équivaut à changer de licence. Il y a trois choses fondamentales à prendre en compte lors de l'ajout ou de la modification de la licence de votre projet :

**C'est compliqué.** Déterminer la compatibilité et la conformité des licences et qui détient les droits d'auteur peut devenir compliqué et déroutant très rapidement. Passer à une nouvelle licence, mais compatible, pour les nouvelles versions et les contributions est différent de la redistribution de toutes les contributions existantes. Impliquez votre équipe juridique le premier indice de tout désir de changer de licence. Même si vous avez ou pouvez obtenir l'autorisation des titulaires de droits d'auteur de votre projet pour un changement de licence, tenez compte de l'impact de ce changement sur les autres utilisateurs et contributeurs de votre projet. Pensez à un changement de licence comme un "événement de gouvernance" pour votre projet qui se déroulera plus facilement avec des communications et des consultations claires avec les parties prenantes de votre projet. Raison de plus pour choisir et utiliser une licence appropriée pour votre projet dès sa création !

**Licence existante de votre projet.** Si la licence existante de votre projet est compatible avec la licence que vous souhaitez modifier, vous pouvez simplement commencer à utiliser la nouvelle licence. En effet, si la licence A est compatible avec la licence B, vous respecterez les termes de A tout en respectant les termes de B (mais pas nécessairement l'inverse). Donc, si vous utilisez actuellement une licence permissive (par exemple, MIT), vous pouvez changer pour une licence avec plus de conditions, tant que vous conservez une copie de la licence MIT et tous les avis de droits d'auteur associés (à savoir, continuer à se conformer à Conditions minimales de la licence MIT). Mais si votre licence actuelle n'est pas permissive (par exemple, copyleft, ou si vous n'avez pas de licence) et que vous n'êtes pas le seul détenteur des droits d'auteur, vous ne pouvez pas simplement changer la licence de votre projet au MIT. Essentiellement, avec une licence permissive, les détenteurs de droits d'auteur du projet ont donné leur permission à l'avance pour changer de licence.

**Les détenteurs de droits d'auteur existants de votre projet.** Si vous êtes le seul contributeur à votre projet, alors vous ou votre entreprise êtes le seul détenteur des droits d'auteur du projet. Vous pouvez ajouter ou modifier n'importe quelle licence que vous ou votre entreprise souhaitez. Sinon, il peut y avoir d'autres détenteurs de droits d'auteur dont vous avez besoin d'un accord pour changer de licence. Qui sont-ils ? Les personnes qui se sont engagées dans votre projet sont un bon point de départ. Mais dans certains cas, le droit d'auteur sera détenu par les employeurs de ces personnes. Dans certains cas, les gens n'auront fait que des contributions minimes, mais il n'y a pas de règle absolue que les contributions sous un certain nombre de lignes de code ne soient pas soumises au droit d'auteur. Que faire ? Cela dépend. Pour un projet relativement petit et jeune, il peut être possible d'obtenir que tous les contributeurs existants acceptent un changement de licence dans une issue ou une pull request. Pour les projets de grande envergure et de longue durée, vous devrez peut-être chercher de nombreux contributeurs et même leurs héritiers. Mozilla a pris des années (2001-2006) pour changer la license de Firefox, Thunderbird et les logiciels associés.

Alternativement, vous pouvez demander aux contributeurs d'accepter à l'avance (via un accord de contribution supplémentaire - voir ci-dessous) certains changements de licence sous certaines conditions, au-delà de celles autorisées par votre licence open source existante. Cela déplace un peu la complexité de la modification des licences. Vous aurez besoin de plus d'aide de la part de vos avocats et vous voudrez toujours communiquer clairement avec les parties prenantes de votre projet lors de l'exécution d'un changement de licence.

## Mon projet a-t-il besoin d'un accord de contribution suppl&eacute;mentaire

Probablement pas. Pour la grande majorité des projets open source, une licence open source sert implicitement à la fois de licence entrante (des contributeurs) et sortante (aux autres contributeurs et utilisateurs). Si votre projet est sur GitHub, les conditions d'utilisation de GitHub font de "inbound = outbound" le [paramètre par défaut explicite](https://help.github.com/en/github/site-policy/github-terms-of-service#6-contributions-under-repository-license).

Un accord de contribution supplémentaire - souvent appelé Accord de licence de contributeur (CLA) - peut créer un travail administratif pour les responsables de projet. La quantité de travail ajoutée par un accord dépend du projet et de la mise en œuvre. Un accord simple peut exiger que les contributeurs confirment, en un clic, qu'ils ont les droits nécessaires pour contribuer sous la licence open source du projet. Un accord plus compliqué pourrait nécessiter un examen juridique et une approbation des employeurs des cotisants.

En outre, en ajoutant de la "paperasse" jugée inutile, difficile à comprendre ou injuste (lorsque le destinataire obtient plus de droits que les contributeurs ou le public via la licence open source du projet), un accord de contribution supplémentaire peut être perçu comme inamical à la communauté du projet.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/bcantrill?s=180" class="pquote-avatar" alt="avatar">
    Nous avons éliminé le CLA pour Node.js. Cela réduit la barrière à l'entrée pour les contributeurs Node.js, élargissant ainsi la base des contributeurs.
  <p markdown="1" class="pquote-credit">
— @bcantrill, ["Broadening Node.js Contributions"](https://www.joyent.com/blog/broadening-node-js-contributions)
  </p>
</aside>

Certaines situations où vous pourriez envisager un accord de contribution supplémentaire pour votre projet incluent:

* Vos avocats veulent que tous les contributeurs acceptent expressément les termes de contribution (_signer_, en ligne ou hors ligne), peut-être parce qu'ils pensent que la licence Open Source n'est pas suffisante (même si c'est le cas !). Si c'est la seule préoccupation, un accord de contribution qui affirme la licence open source du projet devrait être suffisant. Le [Contrat de licence de contributeur individuel jQuery](https://contribute.jquery.org/CLA/) est un bon exemple d'accord de contributeur supplémentaire léger. Pour certains projets, un [Developer Certificate of Origin](https://github.com/probot/dco) peut être une alternative.
* Votre projet utilise une licence open source qui n'inclut pas de brevet explicite (tel que MIT), et vous avez besoin d'une licence de brevet de tous les contributeurs, dont certains peuvent travailler pour des entreprises avec de grands portefeuilles de brevets qui pourraient vous servir ou les autres contributeurs et utilisateurs du projet. Le [Contrat de licence de contributeur individuel Apache](https://www.apache.org/licenses/icla.pdf) est un accord de contributeur supplémentaire communément utilisé qui a une licence de brevet reflétant celle de la licence Apache 2.0.
* Votre projet est sous licence copyleft, mais vous devez également distribuer une version propriétaire du projet. Vous aurez besoin de chaque contributeur pour vous attribuer des droits d'auteur ou vous accorder (mais pas le public) une licence permissive. Le [Contrat de collaboration MongoDB](https://www.mongodb.com/legal/contributor-agreement) est un exemple de ce type d'accord.
* Vous pensez que votre projet pourrait avoir besoin de changer de licence au cours de sa vie et que les contributeurs soient d'accord à l'avance sur de tels changements.

Si vous devez utiliser un accord de contributeur supplémentaire avec votre projet, envisagez d'utiliser une intégration telle que [Assistant CLA](https://github.com/cla-assistant/cla-assistant) pour minimiser la distraction des contributeurs.

## Que doit savoir l'&eacute;quipe juridique de mon entreprise

Si vous publiez un projet open source en tant qu'employé de l'entreprise, votre équipe juridique doit d'abord savoir que vous êtes en train d'ouvrir un projet.

Pour le meilleur ou pour le pire, envisagez de les informer même s'il s'agit d'un projet personnel. Vous avez probablement avec votre entreprise un "accord IP d'employé" qui lui donne un certain contrôle sur vos projets, surtout s'ils sont liés à l'activité de l'entreprise ou si vous utilisez les ressources de l'entreprise pour développer le projet. Votre entreprise _devrait_ vous donner facilement la permission, et peut-être déjà à travers un accord de propriété intellectuelle favorable aux employés ou une politique d'entreprise. Sinon, vous pouvez négocier (par exemple, expliquer que votre projet répond aux objectifs d'apprentissage et de développement professionnel de l'entreprise pour vous), ou éviter de travailler sur votre projet jusqu'à ce que vous trouviez une meilleure entreprise.

**Si vous êtes ouvrez la source d'un projet pour votre entreprise**, alors faites-le savoir. Votre équipe juridique a sans doute déjà des politiques de quelle licence open source (et peut-être un accord de contribution supplémentaire) à utiliser en fonction des besoins d'affaires de l'entreprise et de l'expertise assurant autour de votre projet est conforme aux licences de ses dépendances. Sinon, vous et ils ont de la chance! Votre équipe juridique devrait être impatiente de travailler avec vous pour comprendre ces choses. Quelques points à penser:

* **Matériel de tiers :** Votre projet a-t-il des dépendances créées par d'autres ou inclut ou utilise le code d'autres personnes ? Si ceux-ci sont open source, vous devrez vous conformer aux licences open source des matériaux. Cela commence par choisir une licence qui fonctionne avec les licences open source tierces (voir ci-dessus). Si votre projet modifie ou distribue du matériel Open Source tiers, votre équipe juridique voudra également savoir que vous remplissez d'autres conditions des licences Open Source tierces, telles que la conservation des avis de copyright. Si votre projet utilise le code d'autres personnes n'ayant pas de licence Open Source, vous devrez probablement demander aux responsables de la maintenance tiers d'[ajouter une licence Open Source](https://choosealicense.com/no-license/#for-users), et si vous ne pouvez pas en obtenir un, arrêtez d'utiliser leur code dans votre projet.

* **Secrets commerciaux :** Examiner s'il y a quoi que ce soit dans le projet que l'entreprise ne souhaite pas mettre à la disposition du grand public. Si c'est le cas, vous pouvez ouvrir le reste de votre projet, après avoir extrait le contenu que vous voulez garder privé.

* **Brevets :** Votre entreprise demande-t-elle un brevet dont l'open source de votre projet constituerait [divulgation publique](https://en.wikipedia.org/wiki/Public_disclosure) ? Malheureusement, vous pourriez être invité à attendre (ou peut-être que l'entreprise reconsidérera la maturité de l'application). Si vous attendez des contributions d'employés d'entreprises ayant de grands portefeuilles de brevets, votre équipe juridique voudra peut-être utiliser une licence avec un brevet spécialement pour les contributeurs (comme Apache 2.0 ou GPLv3) ou un accord de contribution supplémentaire (voir au dessus).

* **Marques :** Vérifiez que le nom de votre projet [n'est pas en conflit avec les marques existantes](../starting-a-project/#eviter-les-conflits-de-noms). Si vous utilisez les marques de votre propre entreprise dans le projet, vérifiez qu'il ne provoque aucun conflit. [FOSSmarks](http://fossmarks.org/) est un guide pratique pour comprendre les marques dans le contexte de projets libres et open source.

* **Confidentialité :** Votre projet recueille-t-il des données sur les utilisateurs ? "Téléphone Maison" aux serveurs de l'entreprise ? Votre équipe juridique peut vous aider à respecter les politiques de l'entreprise et les réglementations externes.

Si vous publiez le premier projet open source de votre entreprise, ce qui précède est plus que suffisant pour passer à travers (mais ne vous inquiétez pas, la plupart des projets ne devraient pas susciter d'inquiétudes majeures).

À plus long terme, votre équipe juridique peut faire davantage pour aider l'entreprise à tirer le meilleur parti de son implication dans l'open source et à rester en sécurité:

* **Règles de contribution des employés :** Envisagez de développer une politique d'entreprise qui spécifie comment vos employés contribuent aux projets open source. Une politique claire réduira la confusion parmi vos employés et les aidera à contribuer à des projets open source dans le meilleur intérêt de l'entreprise, que ce soit dans le cadre de leur travail ou pendant leur temps libre. Un bon exemple est Rackspace [Modèle IP et Open Source Contribution Policy](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/vanl?s=180" class="pquote-avatar" alt="avatar">
  Laisser l'adresse IP associée à un correctif crée la base de connaissances et la réputation de l'employé. Cela montre que l'entreprise est investie dans le développement de cet employé et crée un sentiment d'autonomie et d'autonomie. Tous ces avantages mènent également à un meilleur moral et à une meilleure rétention des employés.
  <p markdown="1" class="pquote-credit">
— @vanl, ["A Model IP and Open Source Contribution Policy"](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/)
  </p>
</aside>

* **Que publier :** [(Presque) tout ?](Http://tom.preston-werner.com/2011/11/22/open-source-everything.html) Si votre équipe juridique comprend et est investis dans la stratégie open source de votre entreprise, ils seront les mieux placés pour vous aider plutôt que d'entraver vos efforts.
* **Conformité :** Même si votre entreprise ne diffuse aucun projet open source, elle utilise le logiciel open source des autres. [Awareness and process](https://www.linuxfoundation.org/blog/2015/06/why-companies-that-use-open-source-need-a-compliance-program/) peut prévenir les maux de tête, les retards de produit et les poursuites judiciaires.

<aside markdown="1" class="pquote">
  Les organisations doivent disposer d'une stratégie de licence et de conformité qui corresponde à la fois aux catégories \["permissive" et "copyleft"\]. Cela commence par garder une trace des conditions de licence qui s'appliquent aux logiciels open source que vous utilisez, y compris les sous-composants et les dépendances.
  <p markdown="1" class="pquote-credit">
— Heather Meeker, ["Open Source Software: Compliance Basics And Best Practices"](https://techcrunch.com/2012/12/14/open-source-software-compliance-basics-and-best-practices/)
  </p>
</aside>

* **Brevets :** Votre entreprise voudra peut-être rejoindre le [Open Invention Network](https://www.openinventionnetwork.com/), un pool de brevets défensif partagé pour protéger l'utilisation de projets open source majeurs par les membres, ou explorer autre [licence alternative de brevet](https://www.eff.org/document/hacking-patent-system-2016).
* **Gouvernance :** Surtout si et quand il est logique de transférer un projet à une [entité juridique extérieure à l'entreprise](../leadership-and-governance/#ai-je-besoin-dune-entit&eacute;-l&eacute;gale-pour-soutenir-mon-projet).
