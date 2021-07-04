---
lang: nl
title: Een open source-project starten
description: Leer meer over de wereld van open source en bereid je voor om je eigen project te lanceren.
class: beginners
toc:
  the-what-and-why-of-open-source: "Het wat en waarom van open source"
  should-i-launch-my-own-open-source-project: "Moet ik mijn eigen open source-project lanceren?"
  launching-your-own-open-source-project: "Uw eigen open source-project lanceren"
  naming-and-branding-your-project: "Geef uw project een naam en branding"
  your-pre-launch-checklist: "Uw checklist vóór de lancering"
order: 2
image: /assets/images/cards/beginner.png
related:
  - finding
  - building
---

## Het "wat" en "waarom" van open source

Dus je denkt erover om aan de slag te gaan met open source? Gefeliciteerd! De wereld waardeert uw bijdrage. Laten we het hebben over wat open source is en waarom mensen het doen.

### Wat betekent "open source"?

Als een project open source is, betekent dit **dat iedereen vrij is om uw project voor elk doel te gebruiken, bestuderen, wijzigen en distribueren.** Deze machtigingen worden afgedwongen via [een open source-licentie](https://opensource.org/licenties).

Open source is krachtig omdat het de barrières voor acceptatie en samenwerking verlaagt, waardoor mensen projecten snel kunnen verspreiden en verbeteren. Ook omdat het gebruikers de mogelijkheid geeft om hun eigen computergebruik te beheersen, in vergelijking met closed source. Een bedrijf dat open source software gebruikt, heeft bijvoorbeeld de mogelijkheid om iemand in te huren om aangepaste verbeteringen aan de software aan te brengen, in plaats van uitsluitend te vertrouwen op de productbeslissingen van een closed source-leverancier.

_Vrije software (Free software)_ verwijst naar dezelfde reeks projecten als _open source_. Soms zie je ook [deze termen](https://en.wikipedia.org/wiki/Free_and_open-source_software) gecombineerd als "free en open source software" (FOSS) of "free, libre en open source software" (FLOSS). _Free_ en _libre_ verwijzen naar vrijheid, [niet de prijs](#betekend-open-source-gratis).

### Waarom stellen mensen hun werk als open source beschikbaar?

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kentcdodds?s=180" class="pquote-avatar" alt="avatar">
  Een van de meest lonende ervaringen die ik krijg bij het gebruiken van en samenwerken aan open source, komt voort uit de relaties die ik opbouw met andere ontwikkelaars die met veel van dezelfde problemen worden geconfronteerd als ik.

  _One of the most rewarding experiences I get out of using and collaborating on open source comes from the relationships that I build with other developers facing many of the same problems I am._

  <p markdown="1" class="pquote-credit">
— @kentcdodds, ["Het was geweldig om in Open Source te komen"](https://kentcdodds.com/blog/how-getting-into-open-source-has-been-awesome-for-me)
  </p>
</aside>

[Er zijn veel redenen](https://ben.balter.com/2015/11/23/why-open-source/) waarom een persoon of organisatie een project zou willen open source maken. Enkele voorbeelden zijn:

* **Samenwerking:** Open source-projecten kunnen wijzigingen van iedereen ter wereld accepteren. [Exercism](https://github.com/exercism/) is bijvoorbeeld een oefenplatform voor programmeren met meer dan 350 medewerkers.

* **Adoptie en remixen:** Open source-projecten kunnen door iedereen voor bijna elk doel worden gebruikt. Mensen kunnen er zelfs andere dingen mee bouwen. [WordPress](https://github.com/WordPress) is bijvoorbeeld begonnen als een splitsing van een bestaand project met de naam [b2](https://github.com/WordPress/book/blob/HEAD/Content/Part%201/2-b2-cafelog.md).

* **Transparantie:** Iedereen kan een open source-project inspecteren op fouten of inconsistenties. Transparantie is belangrijk voor regeringen zoals [Bulgarije](https://medium.com/@bozhobg/bulgaria-got-a-law-requiring-open-source-98bf626cf70a) of de [Verenigde Staten](https://sourcecode.cio.gov/), gereguleerde industrieën zoals het bankwezen of de gezondheidszorg, en beveiligingssoftware zoals [Let's Encrypt](https://github.com/letsencrypt).

Open source is niet alleen voor software. U kunt alles openen, van datasets tot boeken. Bekijk [GitHub Explore](https://github.com/explore) voor ideeën over wat je nog meer kunt open source.

### Betekend open source gratis?

Een van de grootste voordelen van open source is dat het geen geld kost. "Gratis" is echter een bijproduct van de totale waarde van open source.

Omdat [een open source-licentie vereist](https://opensource.org/osd-annotated) dat iedereen uw project voor bijna elk doel kan gebruiken, wijzigen en delen, zijn projecten zelf meestal gratis. Als het project geld kost om te gebruiken, kan iedereen legaal een kopie maken en in plaats daarvan de gratis versie gebruiken.

Als gevolg hiervan zijn de meeste open source-projecten gratis, maar 'gratis' maakt geen deel uit van de open source-definitie. Er zijn manieren om indirect kosten in rekening te brengen voor open source-projecten via dubbele licenties of beperkte functies, terwijl ze toch voldoen aan de officiële definitie van open source.

## Moet ik mijn eigen open source-project lanceren?

Het korte antwoord is ja, want wat de uitkomst ook is, het starten van je eigen project is een geweldige manier om te leren hoe open source werkt.

Als je nog nooit een project hebt geopend, ben je misschien zenuwachtig over wat mensen zullen zeggen, of dat iemand het überhaupt zal opmerken. Als dit klinkt zoals jij, ben je niet de enige!

Open source werken is net als elke andere creatieve activiteit, of het nu gaat om schrijven of schilderen. Het kan eng aanvoelen om je werk met de wereld te delen, maar de enige manier om beter te worden, is door te oefenen - zelfs als je geen publiek hebt.

Als u nog niet overtuigd bent, neem dan even de tijd om na te denken over uw doelen.

### Je doelen stellen

Doelen kunnen u helpen erachter te komen waaraan u moet werken, waar u nee tegen moet zeggen en waar u hulp van anderen nodig heeft. Begin met jezelf af te vragen: _waarom ben ik open source voor dit project?_

Er is geen goed antwoord op deze vraag. Mogelijk hebt u meerdere doelen voor een enkel project, of verschillende projecten met verschillende doelen.

Als het je enige doel is om met je werk te pronken, wil je misschien niet eens bijdragen, en dat zeg je zelfs in je README. Aan de andere kant, als u donateurs wilt, investeert u tijd in duidelijke documentatie en zorgt u ervoor dat nieuwkomers zich welkom voelen.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mavris?s=180" class="pquote-avatar" alt="avatar">
  Op een gegeven moment heb ik een aangepaste UIAlertView gemaakt die ik gebruikte ... en ik besloot het open source te maken. Dus ik heb het aangepast om het dynamischer te maken en het naar GitHub geüpload. Ik schreef ook mijn eerste documentatie waarin ik aan andere ontwikkelaars uitlegde hoe ze het voor hun projecten konden gebruiken. Waarschijnlijk heeft niemand het ooit gebruikt omdat het een eenvoudig project was, maar ik voelde me goed over mijn bijdrage.

  _At some point I created a custom UIAlertView that I was using...and I decided to make it open source. So I modified it to be more dynamic and uploaded it to GitHub. I also wrote my first documentation explaining to other developers how to use it on their projects. Probably nobody ever used it because it was a simple project but I was feeling good about my contribution._

  <p markdown="1" class="pquote-credit">
— @mavris, ["Zelf onderwezen softwareontwikkelaars: waarom open source belangrijk voor ons is"](https://medium.com/rocknnull/self-taught-software-engineers-why-open-source-is-important-to-us-fe2a3473a576)
  </p>
</aside>

Naarmate uw project groeit, heeft uw gemeenschap mogelijk meer nodig dan alleen code van u. Reageren op problemen, code herzien en uw project promoten, zijn allemaal belangrijke taken in een open source-project.

Hoewel de hoeveelheid tijd die u aan niet-coderende taken besteedt, afhangt van de omvang en reikwijdte van uw project, moet u als onderhouder erop voorbereid zijn om ze zelf aan te pakken of iemand te zoeken om u te helpen.

**Als u deel uitmaakt van een bedrijf dat een project opent,** zorg ervoor dat uw project over de interne middelen beschikt die het nodig heeft om te gedijen. U wilt weten wie verantwoordelijk is voor het onderhoud van het project na de lancering, en hoe u die taken met uw community deelt.

Als u een specifiek budget of personeel nodig heeft voor promotie, operaties en het onderhouden van het project, begin die gesprekken dan vroeg.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/captainsafia?s=180" class="pquote-avatar" alt="avatar">
  Als u begint met het openen van het project, is het belangrijk om ervoor te zorgen dat uw beheerprocessen rekening houden met de bijdragen en capaciteiten van de gemeenschap rond uw project. Wees niet bang om bijdragers die niet in uw bedrijf werkzaam zijn, te betrekken bij de belangrijkste aspecten van het project, vooral als ze regelmatig bijdragen.

  _As you begin to open source the project, it's important to make sure that your management processes take into consideration the contributions and abilities of the community around your project. Don't be afraid to involve contributors who are not employed in your business in key aspects of the project — especially if they are frequent contributors._

  <p markdown="1" class="pquote-credit">
— @captainsafia, ["Dus je wilt een project openen, hè?"](https://dev.to/captainsafia/so-you-wanna-open-source-a-project-eh-5779)
  </p>
</aside>

### Bijdragen aan andere projecten

Als het uw doel is om te leren samenwerken met anderen of om te begrijpen hoe open source werkt, overweeg dan om bij te dragen aan een bestaand project. Begin met een project dat je al gebruikt en waar je van houdt. Bijdragen aan een project kan zo simpel zijn als het corrigeren van typefouten of het bijwerken van documentatie.

Als u niet zeker weet hoe u als bijdrager aan de slag kunt gaan, bekijk dan onze [Hoe u kunt bijdragen aan Open Source-gids](../how-to-contribute/).

## Uw eigen open source-project lanceren

Er is geen perfect moment om uw werk open source te maken. U kunt een idee openen, een werk in uitvoering of na jarenlang closed source te zijn geweest.

Over het algemeen moet u uw project openen als u zich op uw gemak voelt als anderen uw werk bekijken en er feedback op geven.

Ongeacht in welke fase u besluit uw project te openen, elk project moet de volgende documentatie bevatten:

* [Open source-licentie](https://help.github.com/articles/open-source-licensing/#where-does-the-license-live-on-my-repository)
* [README](https://help.github.com/articles/create-a-repo/#commit-your-first-change)
* [Richtlijnen voor het bijdragen](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)
* [Gedragscode](../code-of-conduct/)

Als open source-onderhouder helpen deze componenten u bij het communiceren van verwachtingen, het beheren van bijdragen en het beschermen van ieders wettelijke rechten (inclusief die van uzelf). Ze vergroten uw kansen op een positieve ervaring aanzienlijk.

Als je project op GitHub staat, zal het plaatsen van deze bestanden in je root-directory met de aanbevolen bestandsnamen GitHub helpen ze te herkennen en automatisch aan je lezers te laten zien.

### Een licentie kiezen

Een open source-licentie garandeert dat anderen uw project zonder repercussies kunnen gebruiken, kopiëren, wijzigen en eraan kunnen bijdragen. Het beschermt je ook tegen plakkerige juridische situaties. **U moet een licentie toevoegen wanneer u een open source-project start.**

Juridisch werk is niet leuk. Het goede nieuws is dat u een bestaande licentie kunt kopiëren en in uw repository kunt plakken. Het duurt maar een minuut om uw harde werk te beschermen.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) en [GPLv3](https://choicealicense.com/licenses/gpl-3.0/) zijn de meest populaire open source licenties, maar [er zijn andere opties](https://choosealicense.com) om uit te kiezen.

Wanneer u een nieuw project op GitHub maakt, krijgt u de mogelijkheid om een ​​licentie te selecteren. Als u een open source-licentie opneemt, wordt uw GitHub-project open source.

![Kies een licentie](/assets/images/starting-a-project/repository-license-picker.png)

Als u andere vragen of opmerkingen heeft over de juridische aspecten van het beheren van een open source-project, [wij hebben u gedekt](../legal/).

### Een README schrijven

README's doen meer dan alleen uitleggen hoe u uw project kunt gebruiken. Ze leggen ook uit waarom uw project ertoe doet en wat uw gebruikers ermee kunnen doen.

Probeer in je README de volgende vragen te beantwoorden:

* Wat doet dit project?
* Waarom is dit project nuttig?
* Hoe begin ik eraan?
* Waar kan ik meer hulp krijgen als ik die nodig heb?

U kunt uw README gebruiken om andere vragen te beantwoorden, zoals hoe u omgaat met bijdragen, wat de doelen van het project zijn en informatie over licenties en attributie. Als u geen bijdragen wilt accepteren, of uw project is nog niet klaar voor productie, schrijf deze informatie dan op.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/tracymakes?s=180" class="pquote-avatar" alt="avatar">
  Betere documentatie betekent meer gebruikers, minder ondersteuningsverzoeken en meer bijdragers. (...) Onthoud dat u niet uw lezers bent. Er zijn mensen die misschien naar een project komen die totaal andere ervaringen hebben.

  _Better documentation means more users, less support requests, and more contributors. (...) Remember that your readers aren't you. There are people who might come to a project who have completely different experiences._

  <p markdown="1" class="pquote-credit">
— @tracymakes, ["Schrijven zodat uw woorden worden gelezen (video)"](https://www.youtube.com/watch?v=8LiV759Bje0&list=PLmV2D6sIiX3U03qc-FPXgLFGFkccCEtfv&index=10)
  </p>
</aside>

Soms vermijden mensen het schrijven van een README omdat ze het gevoel hebben dat het project niet af is, of omdat ze geen bijdragen willen. Dit zijn allemaal hele goede redenen om er een te schrijven.

Voor meer inspiratie, probeer @dguo's ["Maak een README"-gids](https://www.makeareadme.com/) of @PurpleBooth's [README-sjabloon](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) om een volledige README te schrijven.

Als je een README-bestand opneemt in de root-directory, zal GitHub het automatisch op de startpagina van de repository weergeven.

### Schrijven van uw bijdrage richtlijnen

Een CONTRIBUTING-bestand vertelt uw publiek hoe ze aan uw project kunnen deelnemen. U kunt bijvoorbeeld informatie opnemen over:

* Hoe een bugrapport in te dienen (probeer [sjablonen voor issue en pull-verzoeken](https://github.com/blog/2111-issue-and-pull-request-templates) te gebruiken)
* Hoe u een nieuwe functie kunt voorstellen
* Hoe u uw omgeving instelt en tests uitvoert

Naast technische details is een CONTRIBUTING-bestand een gelegenheid om uw verwachtingen voor bijdragen te communiceren, zoals:

* De soorten bijdragen die u zoekt
* Uw roadmap of visie voor het project
* Hoe bijdragers wel of niet contact met u moeten opnemen

Het gebruik van een warme, vriendelijke toon en het aanbieden van specifieke suggesties voor bijdragen (zoals het schrijven van documentatie of het maken van een website) kan ertoe bijdragen dat nieuwkomers zich welkom en enthousiast voelen om deel te nemen.

Bijvoorbeeld: [Active Admin](https://github.com/activeadmin/activeadmin/) start [zijn bijdragende gids](https://github.com/activeadmin/activeadmin/blob/HEAD/CONTRIBUTING.md) met:

> Allereerst bedankt dat u overweegt om bij te dragen aan Active Admin. Het zijn mensen zoals jij die Active Admin tot zo'n geweldig hulpmiddel maken.

In de vroegste stadia van uw project kan uw CONTRIBUTING-bestand eenvoudig zijn. U moet altijd uitleggen hoe u bugs of problemen met bestanden meldt, en welke technische vereisten (zoals tests) u heeft om een bijdrage te leveren.

Na verloop van tijd kunt u andere veelgestelde vragen aan uw CONTRIBUTING-bestand toevoegen. Als u deze informatie opschrijft, zullen minder mensen u keer op keer dezelfde vragen stellen.

Voor meer hulp bij het schrijven van je CONTRIBUTING-bestand, ga je naar @nayafia's [sjabloon voor bijdrage gids](https://github.com/nayafia/contributing-template/blob/HEAD/CONTRIBUTING-template.md) of @mozilla's ["Bouw een CONTRIBUTING.md workshop"](https://mozillascience.github.io/working-open-workshop/contributing/).

Link naar uw BIJDRAGEN-bestand vanuit uw README, zodat meer mensen het kunnen zien. Als je [het CONTRIBUTING-bestand in de repository van je project plaatst](https://help.github.com/articles/setting-guidelines-for-repository-contributors/), zal GitHub automatisch naar je bestand linken wanneer een bijdrager een issue maakt of opent een pull-verzoek.

![Contributing guidelines](/assets/images/starting-a-project/Contributing-guidelines.jpg)

### Opstellen van een gedragscode

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mlynch?s=180" class="pquote-avatar" alt="avatar">
  We hebben allemaal ervaringen gehad waarbij we te maken kregen met wat waarschijnlijk misbruik was, hetzij als onderhouder die probeerde uit te leggen waarom iets op een bepaalde manier moest zijn, of als gebruiker ... die een simpele vraag stelde. (...) Een gedragscode wordt een gemakkelijk te raadplegen en koppelbaar document dat aangeeft dat uw team constructief discours zeer serieus neemt.

  _We've all had experiences where we faced what was probably abuse either as a maintainer trying to explain why something had to be a certain way, or as a user...asking a simple question. (...) A code of conduct becomes an easily referenced and linkable document that indicates that your team takes constructive discourse very seriously._

  <p markdown="1" class="pquote-credit">
— @mlynch, ["Open Source een gelukkiger plek maken"](https://medium.com/ionic-and-the-mobile-web/making-open-source-a-happier-place-3b90d254f5f)
  </p>
</aside>

Ten slotte helpt een gedragscode om basisregels vast te stellen voor het gedrag van de deelnemers aan uw project. Dit is vooral waardevol als u een open source-project start voor een gemeenschap of bedrijf. Een gedragscode stelt je in staat om gezond, constructief gemeenschapsgedrag te faciliteren, wat je stress als onderhouder zal verminderen.

Raadpleeg voor meer informatie onze [Gedragscode-gids](../code-of-conduct/).

Naast het communiceren van _hoe_ je verwacht dat deelnemers zich gedragen, beschrijft een gedragscode ook vaak op wie deze verwachtingen van toepassing zijn, wanneer ze van toepassing zijn en wat te doen bij een overtreding.

Net als bij open source-licenties, zijn er ook nieuwe normen voor gedragscodes, zodat u deze niet zelf hoeft te schrijven. De [Bijdrager Covenant](https://contributor-covenant.org/) is een drop-in gedragscode die wordt gebruikt door [meer dan 40.000 open source-projecten](https://www.contributor-covenant.org/adopters), inclusief Kubernetes, Rails en Swift. Welke tekst u ook gebruikt, u moet bereid zijn om uw gedragscode waar nodig af te dwingen.

Plak de tekst rechtstreeks in een CODE_OF_CONDUCT-bestand in uw repository. Bewaar het bestand in de root-directory van je project zodat het gemakkelijk te vinden is, en link ernaar vanuit je README.

## Geef uw project een naam en branding

Branding is meer dan een flitsend logo of pakkende projectnaam. Het gaat erom hoe u over uw project praat en wie u bereikt met uw bericht.

### De juiste naam kiezen

Kies een naam die gemakkelijk te onthouden is en idealiter een idee geeft van wat het project doet. Bijvoorbeeld:

* [Sentry](https://github.com/getsentry/sentry) controleert apps op crashrapportage
* [Thin](https://github.com/macournoyer/thin) is een snelle en eenvoudige Ruby-webserver

Als u voortbouwt op een bestaand project, kan het gebruik van hun naam als voorvoegsel helpen verduidelijken wat uw project doet (bijvoorbeeld [node-fetch](https://github.com/bitinn/node-fetch) brengt `window.fetch` naar Node.js).

Overweeg vooral duidelijkheid. Woordspelingen zijn leuk, maar onthoud dat sommige grappen mogelijk niet vertalen naar andere culturen of mensen met andere ervaringen dan jij. Sommige van uw potentiële gebruikers kunnen werknemers van het bedrijf zijn: u wilt ze niet ongemakkelijk maken als ze uw project op het werk moeten uitleggen!

### Naamconflicten vermijden

[Controleer op open source-projecten met een vergelijkbare naam](http://ivantomic.com/projects/ospnc/), vooral als je dezelfde taal of hetzelfde ecosysteem deelt. Als uw naam overlapt met een populair bestaand project, kunt u uw publiek in verwarring brengen.

Als u wilt dat een website, Twitter-handle of andere eigenschappen uw project vertegenwoordigen, zorg er dan voor dat u de gewenste namen krijgt. Idealiter [reserveer deze namen nu](https://instantdomainsearch.com/) voor gemoedsrust, zelfs als u ze nog niet wilt gebruiken.

Zorg ervoor dat de naam van uw project geen inbreuk maakt op handelsmerken. Een bedrijf kan u vragen om uw project later stop te zetten, of zelfs juridische stappen tegen u ondernemen. Het is het risico gewoon niet waard.

U kunt de [WIPO Global Brand Database](http://www.wipo.int/branddb/en/) raadplegen voor handelsmerkconflicten. Als u bij een bedrijf werkt, is dit een van de dingen waarmee uw [juridische team u kan helpen](../legal/).

Voer tot slot een snelle Google-zoekopdracht uit naar uw projectnaam. Zullen mensen uw project gemakkelijk kunnen vinden? Verschijnt er iets anders in de zoekresultaten waarvan u niet wilt dat ze het zien?

### Hoe u schrijft (en codeert), heeft ook invloed op uw merk!

Gedurende de levensduur van uw project zult u veel schrijven: README's, tutorials, gemeenschapsdocumenten, reageren op problemen, misschien zelfs nieuwsbrieven en mailinglijsten.

Of het nu gaat om officiële documentatie of een informele e-mail, uw schrijfstijl maakt deel uit van het merk van uw project. Bedenk hoe u op uw publiek zou kunnen overkomen en of dat de toon is die u wilt overbrengen.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/janl?s=180" class="pquote-avatar" alt="avatar">
  Ik probeerde betrokken te zijn bij elke thread op de mailinglijst en voorbeeldig gedrag te tonen, aardig te zijn tegen mensen, hun problemen serieus te nemen en in het algemeen behulpzaam te zijn. Na een tijdje bleven mensen rondhangen om niet alleen vragen te stellen, maar ook om te helpen met het beantwoorden, en tot mijn grote vreugde bootsten ze mijn stijl na.

  _I tried to be involved with every thread on the mailing list, and showing exemplary behaviour, being nice to people, taking their issues seriously and trying to be helpful overall. After a while, people stuck around not to only ask questions, but to help with the answering as well, and to my complete delight, they mimicked my style._

  <p markdown="1" class="pquote-credit">
— @janl op [CouchDB](https://github.com/apache/couchdb), ["Duurzaam open source"](https://web.archive.org/web/20200723213552/https://writing.jan.io/2015/11/20/sustainable-open-source.html)
  </p>
</aside>

Het gebruik van warme, inclusieve taal (zoals 'zij', zelfs als je naar de enige persoon verwijst), kan er voor zorgen dat je project een welkom gevoel krijgt bij nieuwe bijdragers. Blijf bij eenvoudige taal, aangezien veel van uw lezers mogelijk geen moedertaalsprekers Engels zijn.

Naast hoe u woorden schrijft, kan uw codeerstijl ook onderdeel worden van het merk van uw project. [Angular](https://angular.io/guide/styleguide) en [jQuery](https://contribute.jquery.org/style-guide/js/) zijn twee voorbeelden van projecten met rigoureuze coderingsstijlen en richtlijnen.

Het is niet nodig om een stijlgids voor je project te schrijven als je net begint, en het kan zijn dat je het toch leuk vindt om verschillende codeerstijlen in je project op te nemen. Maar u moet anticiperen op hoe uw schrijf- en coderingsstijl verschillende soorten mensen zou kunnen aantrekken of ontmoedigen. De vroegste stadia van uw project zijn uw kans om het precedent te scheppen dat u wenst te zien.

## Uw checklist vóór de lancering

Klaar om uw project te openen? Hier is een checklist om te helpen. Alle vakjes aanvinken? Je bent klaar om te gaan! [Klik op "publiceren"](https://help.github.com/articles/making-a-private-repository-public/) en geef jezelf een schouderklopje.

**Documentatie**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox1" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox1" class="overflow-hidden d-block text-normal">
    Project heeft een LICENSE-bestand met een open source-licentie
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox2" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox2" class="overflow-hidden d-block text-normal">
    Project heeft basisdocumentatie (README, CONTRIBUTING, CODE_OF_CONDUCT)
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox3" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox3" class="overflow-hidden d-block text-normal">
    De naam is gemakkelijk te onthouden, geeft een idee van wat het project doet en is niet in strijd met een bestaand project of inbreuk op handelsmerken
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox4" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox4" class="overflow-hidden d-block text-normal">
    De issue wachtrij is up-to-date, met issues duidelijk geordend en gelabeld
  </label>
</div>

**Code**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox5" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox5" class="overflow-hidden d-block text-normal">
    Project gebruikt consistente codeconventies en duidelijke functie/methode/variabelenamen
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox6" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox6" class="overflow-hidden d-block text-normal">
    De code is duidelijk becommentarieerd en documenteert intenties en randgevallen
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox7" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox7" class="overflow-hidden d-block text-normal">
    Er zijn geen gevoelige materialen in de revisiegeschiedenis, problemen of pull-verzoeken (bijvoorbeeld wachtwoorden of andere niet-openbare informatie)
  </label>
</div>

**Mensen**

Als je een individu bent:

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox8" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox8" class="overflow-hidden d-block text-normal">
  Je hebt met de juridische afdeling gesproken en/of je begrijpt het IP/IE en open source-beleid van je bedrijf (als je ergens een werknemer bent)
  </label>
</div>

Als u een bedrijf of organisatie bent:

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox9" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox9" class="overflow-hidden d-block text-normal">
    U heeft met uw juridische afdeling gesproken
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox10" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox10" class="overflow-hidden d-block text-normal">
    Je hebt een marketingplan om het project aan te kondigen en te promoten
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox11" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox11" class="overflow-hidden d-block text-normal">
    Iemand zet zich in voor het beheren van community-interacties (reageren op problemen, beoordelen en samenvoegen van pull-verzoeken)
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox12" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox12" class="overflow-hidden d-block text-normal">
    At least two people have administrative access to the project
  </label>
</div>

## Je hebt het gedaan!

Gefeliciteerd met het openen van uw eerste project. Ongeacht de uitkomst, werken in het openbaar is een geschenk voor de gemeenschap. Met elk commit-, commentaar- en pull-verzoek creëer je kansen voor jezelf en voor anderen om te leren en te groeien.
