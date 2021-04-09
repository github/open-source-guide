---
lang: fr
title: Métriques Open Source
description: Prendre des décisions éclairées pour aider votre projet Open Source à prospérer en mesurant et en suivant son succès.
class: metrics
order: 9
image: /assets/images/cards/metrics.png
related:
  - finding
  - best-practices
---

## Pourquoi tout mesurer

Les données, lorsqu'elles sont utilisées à bon escient, peuvent vous aider à prendre de meilleures décisions en tant que responsable d'un projet open source.

Avec plus d'informations, vous pouvez:

* Comprendre comment les utilisateurs répondent à une nouvelle fonctionnalité
* Déterminez d'où viennent les nouveaux utilisateurs
* Identifier, et décider de soutenir, un cas d'utilisation aberrant ou une fonctionnalité
* Quantifiez la popularité de votre projet
* Comprendre comment votre projet est utilisé
* Recueillir de l'argent grâce à des parrainages et des subventions

Par exemple, [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Analytics.md) trouve que Google Analytics les aide à hiérarchiser leur travail:

> Homebrew est fourni gratuitement et géré entièrement par des bénévoles pendant leur temps libre. Par conséquent, nous ne disposons pas des ressources nécessaires pour effectuer des études détaillées des utilisateurs Homebrew afin de décider de la meilleure façon de concevoir les fonctionnalités futures et de hiérarchiser les travaux en cours. L'analyse anonyme des utilisateurs agrégés nous permet de hiérarchiser les correctifs et les fonctionnalités en fonction de comment, où et quand les utilisateurs utilisent Homebrew.

La popularité n'est pas tout. Tout le monde entre dans l'open source pour différentes raisons. Si votre objectif, en tant que responsable de l'open source, est de montrer votre travail, d'être transparent au sujet de votre code ou de vous amuser, les métriques peuvent ne pas être importantes pour vous.

Si vous _êtes_ intéressé à comprendre votre projet à un niveau plus profond, lisez la suite pour savoir comment analyser l'activité de votre projet.

## D&eacute;couverte

Avant que quiconque puisse utiliser ou contribuer à votre projet, ils doivent savoir qu'il existe. Demandez-vous: _Est-ce que les gens trouvent ce projet ?_

![Graphique de trafic](/assets/images/metrics/repo_traffic_graphs_tooltip.png)

Si votre projet est hébergé sur GitHub, [vous pouvez voir](https://help.github.com/articles/about-repository-graphs/#traffic) combien de personnes atterrissent sur votre projet et d'où elles viennent. À partir de la page de votre projet, cliquez sur "Insights", puis sur "Traffic". Sur cette page, vous pouvez voir:

* **Le nombre total de pages vues :** Vous indique combien de fois votre projet a été visionné

* **Le nombre total de visiteurs uniques :** Vous indique combien de personnes ont vu votre projet

* **Les sites référents :** Vous indique d'où viennent les visiteurs. Cette statistique peut vous aider à déterminer où joindre votre audience et si vos efforts de promotion fonctionnent.

* **Le contenu populaire :** Vous indique où les visiteurs vont sur votre projet, ventilé par pages vues et visiteurs uniques.

[Les étoiles de GitHub](https://help.github.com/articles/about-stars/) peuvent également aider à fournir une mesure de base de popularité. Bien que les étoiles GitHub ne correspondent pas nécessairement aux téléchargements et à l'utilisation, elles peuvent vous dire combien de personnes prennent en compte votre travail.

Vous pouvez également [suivre la découvrabilité dans des lieux spécifiques](https://opensource.com/business/16/6/pirate-metrics): par exemple, Google PageRank, le trafic de redirection depuis le site Web de votre projet ou les renvois d'autres sites ouverts. projets source ou sites Web.

## Usage

Les gens trouvent votre projet sur cette chose sauvage et folle que nous appelons l'Internet. Idéalement, quand ils verront votre projet, ils se sentiront obligés de faire quelque chose. La deuxième question que vous voudrez poser est: _Est-ce que les gens utilisent ce projet ?_

Si vous utilisez un gestionnaire de paquets, tel que npm ou RubyGems.org, pour distribuer votre projet, vous pourrez peut-être suivre les téléchargements de votre projet.

Chaque gestionnaire de paquets peut utiliser une définition légèrement différente de "téléchargement", et les téléchargements ne sont pas nécessairement corrélés aux installations ou à l'utilisation, mais il fournit une base de comparaison. Essayez d'utiliser [Libraries.io](https://libraries.io/) pour suivre les statistiques d'utilisation de nombreux gestionnaires de paquets populaires.

Si votre projet est sur GitHub, naviguez à nouveau vers la page "Trafic". Vous pouvez utiliser le [graphe clone](https://github.com/blog/1873-clone-graphs) pour voir combien de fois votre projet a été cloné un jour donné, ventilé par clone total et clonage unique.

![Cloner graphe](/assets/images/metrics/clone_graph.png)

Si l'utilisation est faible par rapport au nombre de personnes découvrant votre projet, il y a deux points à considérer, pas plus:

* Votre projet ne réussit pas à convertir votre public, ou
* Vous attirez le mauvais public

Par exemple, si votre projet atterrit sur la première page de Hacker News, vous verrez probablement un pic de découverte (trafic), mais un taux de conversion plus faible, car vous atteignez tout le monde sur Hacker News. Toutefois, si votre projet Ruby est présenté lors d'une conférence Ruby, vous êtes plus susceptible de voir un taux de conversion élevé de la part d'un public ciblé.

Essayez de comprendre d'où vient votre public et demandez aux autres de donner leur avis sur la page de votre projet pour savoir lequel de ces deux problèmes vous rencontrez.

Une fois que vous savez que les gens utilisent votre projet, vous pouvez essayer de comprendre ce qu'ils font avec. Est-ce qu'ils s'appuient sur lui en forkant votre code et en ajoutant des fonctionnalités ? L'utilisent-ils pour la science ou les affaires?

## R&eacute;tention

Les gens trouvent votre projet et l'utilisent. La prochaine question que vous voudrez vous poser est: _Est-ce que les gens contribuent à ce projet ?_

Il n'est jamais trop tôt pour commencer à penser aux contributeurs. Sans d'autres personnes, vous risquez de vous mettre dans une situation malsaine où votre projet est populaire (beaucoup de gens l'utilisent) mais pas soutenu (pas assez de temps de maintenance pour répondre à la demande).

La rétention nécessite également un [afflux de nouveaux contributeurs](http://blog.abigailcabunoc.com/increasing-developer-engagement-at-mozilla-science-learning-advocacy#contributor-pathways_2), car les contributeurs actifs finiront par passer à autre chose.

Les exemples de statistiques de communauté que vous souhaitez suivre régulièrement incluent:

* **Nombre total de contributeurs et nombre de commits par contributeur :** Vous indique combien de contributeurs vous avez, et qui est plus ou moins actif. Sur GitHub, vous pouvez voir ceci sous "Insights" -> "Contributors". À l'heure actuelle, ce graphique ne tient compte que des contributeurs qui se sont engagés dans la branche par défaut du référentiel.

![Graphique des contributeurs](/assets/images/metrics/repo_contributors_specific_graph.png)

* **Types of contributions:** For example, commits, fixing typos or bugs, or commenting on an issue.

* **Premiers contributeurs occasionnels et répétitifs :** Vous aide à savoir si vous recevez de nouveaux contributeurs et s'ils reviennent. (Les contributeurs occasionnels sont des contributeurs avec un faible nombre de commit, que ce soit un commit, moins de cinq commits, ou autre chose selon vos critères.) Sans de nouveaux contributeurs, la communauté de votre projet peut devenir stagnante.

* **Nombre d'issues ouvertes et de Pull Request ouvertes :** Si ces chiffres sont trop élevés, vous aurez peut-être besoin d'aide pour le tri des issues et les révisions de code.

* **Nombre d'issue _opened_ et de pull request _opened_ :** Les issues ouvertes signifient que quelqu'un se soucie suffisamment de votre projet pour ouvrir une issue. Si ce nombre augmente avec le temps, cela suggère que les gens s'intéressent à votre projet.

* **Types de contributions :** Par exemple, commit, corrige des fautes de frappe ou des bugs, ou commente une issue.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/arfon?s=180" class="pquote-avatar" alt="avatar">
  L'open source, c'est plus que du code. Les projets Open Source qui réussissent comprennent des contributions au code et à la documentation ainsi que des conversations sur ces changements.
  <p markdown="1" class="pquote-credit">
— @arfon, ["The Shape of Open Source"](https://github.com/blog/2195-the-shape-of-open-source)
  </p>
</aside>

## Activit&eacute; de responsable

Enfin, vous souhaiterez fermer la boucle en vous assurant que les responsables de votre projet sont en mesure de gérer le volume de contributions reçues. La dernière question que vous voudrez vous poser est la suivante: _suis-je (ou sommes-nous) en train de répondre à notre communauté?_

Les mainteneurs qui ne répondent pas deviennent un goulot d'étranglement pour les projets open source. Si quelqu'un soumet une contribution mais n'obtient jamais de retour d'un responsable, il peut se sentir découragé et partir.

[Research from Mozilla](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) suggère que la réactivité du responsable est un facteur critique pour encourager les contributions répétées.

Pensez à suivre le temps qu'il vous faut (ou à un autre responsable) pour répondre aux contributions, qu'il s'agisse d'une issue ou d'une Pull Request. Répondre ne nécessite pas d'action. Cela peut être aussi simple que de dire: _"Merci pour votre soumission! Je vais examiner cela la semaine prochaine."_

Vous pouvez également mesurer le temps nécessaire pour passer d'une étape à l'autre du processus de contribution, par exemple:

* Temps moyen d'ouverture d'une issue
* Si les issues sont fermés par des PR
* Si les issues périmés se ferment
* Temps moyen pour merger une pull request

## Utilisez 📊 pour en savoir plus sur les gens

La compréhension des métriques vous aidera à créer un projet open source actif et en croissance. Même si vous ne suivez pas toutes les mesures sur un tableau de bord, utilisez le cadre ci-dessus pour attirer votre attention sur le type de comportement qui aidera votre projet à prospérer.
