---
lang: nl
title: Uw gedragscode
description: Faciliteer gezond en constructief gedrag in de gemeenschap door een gedragscode aan te nemen en af te dwingen.
class: coc
toc:
  why-do-i-need-a-code-of-conduct: "Waarom heb ik een gedragscode nodig?"
  establishing-a-code-of-conduct: "Opstellen van een gedragscode"
  deciding-how-youll-enforce-your-code-of-conduct: "Beslissen hoe u uw gedragscode handhaaft"
  enforcing-your-code-of-conduct: "Handhaving van uw gedragscode"
  your-responsibilities-as-a-maintainer: "Uw verantwoordelijkheden als open source-onderhouder"
order: 8
image: /assets/images/cards/coc.png
related:
  - building
  - leadership
---

## Waarom heb ik een gedragscode nodig?

Een gedragscode is een document waarin de verwachtingen voor het gedrag van de deelnemers aan uw project worden vastgelegd. Door een gedragscode aan te nemen en af te dwingen, kunt u een positieve sociale sfeer voor uw gemeenschap creëren.

Gedragscodes helpen niet alleen uw deelnemers te beschermen, maar ook uzelf. Als u een project onderhoudt, zult u merken dat een onproductieve houding van andere deelnemers u na verloop van tijd uitgeput of ongelukkig kan maken met uw werk.

Een gedragscode stelt je in staat om gezond, constructief gemeenschapsgedrag te faciliteren. Door proactief te zijn, wordt de kans kleiner dat u of anderen vermoeid raken door uw project, en kunt u actie ondernemen wanneer iemand iets doet waar u het niet mee eens bent.

## Opstellen van een gedragscode

Try to establish a code of conduct as early as possible: ideally, when you first create your project.

In addition to communicating your expectations, a code of conduct describes the following:

* Where the code of conduct takes effect _(only on issues and pull requests, or community activities like events?)_
* Whom the code of conduct applies to _(community members and maintainers, but what about sponsors?)_
* What happens if someone violates the code of conduct
* How someone can report violations

Wherever you can, use prior art. The [Contributor Covenant](https://contributor-covenant.org/) is a drop-in code of conduct that is used by over 40,000 open source projects, including Kubernetes, Rails, and Swift.

The [Django Code of Conduct](https://www.djangoproject.com/conduct/) and the [Citizen Code of Conduct](https://web.archive.org/web/20200330154000/http://citizencodeofconduct.org/) are also two good code of conduct examples.

Place a CODE_OF_CONDUCT file in your project's root directory, and make it visible to your community by linking it from your CONTRIBUTING or README file.

## Beslissen hoe u uw gedragscode handhaaft

<aside markdown="1" class="pquote">
  Een gedragscode die niet (of niet) kan worden afgedwongen, is erger dan helemaal geen gedragscode: het geeft de boodschap af dat de waarden in de gedragscode niet echt belangrijk of gerespecteerd worden in uw gemeenschap.
  
  _A code of conduct that isn't (or can't be) enforced is worse than no code of conduct at all: it sends the message that the values in the code of conduct aren't actually important or respected in your community._
  <p markdown="1" class="pquote-credit">
— [Ada Initiative](https://adainitiative.org/2014/02/18/howto-design-a-code-of-conduct-for-your-community/)
  </p>
</aside>

U moet uitleggen hoe uw gedragscode wordt gehandhaafd **_voordat_** een overtreding plaatsvindt. Er zijn verschillende redenen om dit te doen:

* Het toont aan dat u serieus actie onderneemt wanneer dat nodig is.

* Uw gemeenschap zal zich meer gerustgesteld voelen dat klachten daadwerkelijk worden beoordeeld.

* U verzekert uw gemeenschap ervan dat het beoordelingsproces eerlijk en transparant is, mochten ze ooit worden onderzocht op een overtreding.

Geef mensen een privé manier (zoals een e-mailadres) om een schending van de gedragscode te melden en leg uit wie die melding ontvangt. Het kan een onderhouder, een groep beheerders of een werkgroep gedragscode zijn.

Vergeet niet dat iemand misschien een overtreding wil melden over een persoon die deze meldingen ontvangt. Geef ze in dat geval de mogelijkheid om overtredingen aan iemand anders te melden. Bijvoorbeeld @ctb en @mr-c [explain on their project](https://github.com/dib-lab/khmer/blob/HEAD/CODE_OF_CONDUCT.rst), [khmer](https://github.com/dib-lab/khmer):

> Gevallen van beledigend, intimiderend of anderszins onaanvaardbaar gedrag kunnen worden gemeld door een e-mail te sturen naar **khmer-project@idyll.org**, dat alleen naar C. Titus Brown en Michael R. Crusoe gaat. Om een probleem te melden waarbij een van hen betrokken is, kunt u een e-mail sturen naar **Judi Brown Clarke, Ph.D.** de Diversity Director van het BEACON Center for the Study of Evolution in Action, een NSF Center for Science and Technology.
>
> _Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by emailing **khmer-project@idyll.org** which only goes to C. Titus Brown and Michael R. Crusoe. To report an issue involving either of them please email **Judi Brown Clarke, Ph.D.** the Diversity Director at the BEACON Center for the Study of Evolution in Action, an NSF Center for Science and Technology.*_

Voor inspiratie, bekijk Django's [handhavingshandboek](https://www.djangoproject.com/conduct/enforcement-manual/) (hoewel je zoiets alomvattends misschien niet nodig hebt, afhankelijk van de grootte van je project).

## Handhaving van uw gedragscode

Soms, ondanks uw beste inspanningen, zal iemand iets doen dat in strijd is met deze code. Er zijn verschillende manieren om negatief of schadelijk gedrag aan te pakken als het zich voordoet.

### Verzamel informatie over de situatie

Behandel de stem van elk communitylid net zo belangrijk als die van jou. Als u een melding ontvangt dat iemand de gedragscode heeft geschonden, neem deze dan serieus en onderzoek de zaak, zelfs als deze niet overeenkomt met uw eigen ervaring met die persoon. Door dit te doen, geeft u uw gemeenschap aan dat u hun perspectief waardeert en hun oordeel vertrouwt.

Het gemeenschapslid in kwestie kan een recidiverende overtreder zijn die anderen consequent een ongemakkelijk gevoel geeft, of ze hebben misschien maar één keer iets gezegd of gedaan. Beide kunnen aanleiding zijn om actie te ondernemen, afhankelijk van de context.

Geef uzelf de tijd om te begrijpen wat er is gebeurd voordat u reageert. Lees de eerdere opmerkingen en gesprekken van de persoon door om beter te begrijpen wie ze zijn en waarom ze zich misschien op zo'n manier hebben gedragen. Probeer andere dan de uwe perspectieven te verzamelen over deze persoon en zijn gedrag.

<aside markdown="1" class="pquote">
  Laat je niet verleiden tot ruzie. Laat u niet op een zijspoor zetten om met het gedrag van iemand anders om te gaan voordat u klaar bent met het afhandelen van de kwestie. Concentreer u op wat u nodig heeft.
  
  <p markdown="1" class="pquote-credit">
— Stephanie Zvan, ["Dus je hebt een beleid. Wat nu?"](https://the-orbit.net/almostdiamonds/2014/04/10/so-youve-got-yourself-a-policy-now-what/)
  </p>
</aside>

### Onderneem passende maatregelen

Nadat u voldoende informatie heeft verzameld en verwerkt, moet u beslissen wat u gaat doen. Bedenk bij het overwegen van uw volgende stappen dat het uw doel als moderator is om een ​​veilige, respectvolle en samenwerkende omgeving te creëren. Bedenk niet alleen hoe u met de situatie in kwestie om moet gaan, maar ook hoe uw reactie het gedrag en de verwachtingen van uw gemeenschap in de toekomst zal beïnvloeden.

Wanneer iemand een overtreding van de gedragscode meldt, is het uw taak, niet hun taak om ermee om te gaan. Soms geeft de melder informatie vrij die een groot risico inhoudt voor zijn carrière, reputatie of fysieke veiligheid. Door hen te dwingen hun dader te confronteren, zou de verslaggever in een compromitterende positie kunnen komen. U dient de directe communicatie met de persoon in kwestie af te handelen, tenzij de melder uitdrukkelijk anders verzoekt.

Er zijn een paar manieren waarop u kunt reageren op een overtreding van de gedragscode:

* **Geef de persoon in kwestie een openbare waarschuwing** en leg uit hoe zijn gedrag een negatieve invloed heeft gehad op anderen, bij voorkeur in het kanaal waar het plaatsvond. Waar mogelijk maakt openbare communicatie aan de rest van de gemeenschap duidelijk dat u de gedragscode serieus neemt. Wees vriendelijk, maar standvastig in uw communicatie.

* **Neem persoonlijk contact op met de persoon in kwestie** om uit te leggen hoe zijn gedrag een negatieve invloed heeft op anderen. U kunt een privé-communicatiekanaal gebruiken als het om gevoelige persoonlijke informatie gaat. Als je privé met iemand communiceert, is het een goed idee om diegenen die de situatie voor het eerst hebben gemeld te CC te geven, zodat ze weten dat je actie hebt ondernomen. Vraag de melder om toestemming voordat u een CC invoert.

Soms kan er geen oplossing worden gevonden. De persoon in kwestie kan agressief of vijandig worden wanneer hij wordt geconfronteerd, of verandert zijn gedrag niet. In deze situatie kunt u overwegen om krachtigere maatregelen te nemen. Bijvoorbeeld:

* **Schorsing van de persoon** in kwestie van het project, afgedwongen door een tijdelijk verbod op deelname aan enig aspect van het project

* **Bannen** de persoon permanent van het project

Het verbieden van leden moet niet lichtvaardig worden opgevat en vertegenwoordigt een permanent en onverenigbaar verschil in perspectieven. U dient deze maatregelen alleen te nemen als het duidelijk is dat er geen oplossing kan worden gevonden.

## Uw verantwoordelijkheden als open source-onderhouder

Een gedragscode is geen wet die willekeurig wordt gehandhaafd. U bent de handhaver van de gedragscode en het is uw verantwoordelijkheid om de regels te volgen die in de gedragscode zijn vastgelegd.

Als onderhouder stelt u de richtlijnen voor uw gemeenschap op en handhaaft u die richtlijnen volgens de regels die in uw gedragscode zijn uiteengezet. Dit betekent dat elke melding van een overtreding van de gedragscode serieus wordt genomen. De melder is een grondige en eerlijke beoordeling van zijn klacht verschuldigd. Als u vaststelt dat het gedrag dat zij hebben gemeld geen overtreding is, communiceer dat dan duidelijk aan hen en leg uit waarom u er geen actie tegen gaat ondernemen. Wat ze daarmee doen, is aan hen: tolereer het gedrag waarmee ze een probleem hadden, of stop met deelnemen aan de gemeenschap.

Een melding van gedrag dat _technisch_ niet in strijd is met de gedragscode, kan nog steeds aangeven dat er een probleem is in uw gemeenschap, en u dient dit potentiële probleem te onderzoeken en dienovereenkomstig te handelen. Dit kan het herzien van uw gedragscode omvatten om acceptabel gedrag te verduidelijken en / of praten met de persoon wiens gedrag werd gemeld en hen vertellen dat hoewel ze de gedragscode niet hebben overtreden, ze de rand van wat wordt verwacht niet overschrijden en ervoor zorgen dat deelnemers voelen zich ongemakkelijk.

Uiteindelijk bepaal en handhaaf je als onderhouder de normen voor acceptabel gedrag. Je hebt het vermogen om de gemeenschapswaarden van het project vorm te geven en deelnemers verwachten dat je die waarden op een eerlijke en evenwichtige manier afdwingt.

## Moedig het gedrag aan dat u in de wereld wilt zien 🌎

Als een project vijandig of onwelkom lijkt, zelfs als het maar één persoon is wiens gedrag door anderen wordt getolereerd, loop je het risico veel meer bijdragers te verliezen, van wie je sommigen misschien nooit zult ontmoeten. Het is niet altijd gemakkelijk om een gedragscode aan te nemen of af te dwingen, maar door een gastvrije omgeving te creëren, kan uw gemeenschap groeien.
