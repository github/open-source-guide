---
lang: hu
title: Építs befogadó közösséget
description: Közösség építése, amely bátorítja az embereket a használatra, a részvételre és a projekt hírnevének terjesztésére.
class: building
order: 4
image: /assets/images/cards/building.png
related:
  - best-practices
  - coc
---

## Sikeres projekt összeállítása

Elindítottad a projektet, próbálod ismertté tenni, és az emberek érdeklődnek iránta. Fantasztikus! De hogy fogod őket megtartani?

A befogadó közösség egy befektetés a projekt jövőjébe és megítélésébe. Ha a projekt éppen most kezdi el fogadni az első hozzájárulásokat, akkor kezd azzal, hogy az első közreműködők pozitív tapasztalatokat kapjanak, és könnyítsd meg nekik, hogy rendszeresen visszatérjenek.

### Érezzék az emberek, hogy szívesen látod őket

Gondolj a projekt közösségére például úgy, ahogyan @MikeMcQuaid amit ő [résztvevői tölcsérnek](https://mikemcquaid.com/2018/08/14/the-open-source-contributor-funnel-why-people-dont-contribute-to-your-open-source-project/) nevezett el:

![Résztvevői tölcsér](/assets/images/building-community/contributor_funnel_mikemcquaid.png)

A közösség felépítése során fontold meg, hogy a tölcsér tetejéről valaki (potenciális felhasználó) hogyan tud eljutni a tölcsér aljára (aktív karbantartó). Cél, hogy minden résztvevő tapasztalatát a projektről javítsd ezeken a szakaszokon. Amikor az emberek könnyen érnek el eredményt, az ösztönözni fogja őket, hogy még többet tegyenek.

Kezd a dokumentációkkal:

* **Tedd egyszerűvé, hogy valaki könnyen használhassa a projektedet!** [Egy barátságos README](../starting-a-project/#readme-írása) és tiszta kód példák mindenkit hozzásegítenek ahhoz, hogy könnyen el tudjanak indulni.
* **Tisztán és érthetően magyarázd el, hogy hogyan lehet hozzájárulni**, használd a [CONTRIBUTING fájlodat](../starting-a-project/#részvételi-irányelvek-leírása) és a hibajelzéseket tartsd naprakészen.
* **Good first issues**: Az új hozzájárulókat segíti az, ha egyértelműen [jelezve van címkével az issue, amely kezdőknek ajánlott](https://help.github.com/en/articles/helping-new-contributors-find-your-project-with-labels). A GitHub kiemeli ezeket az issue-kat, és ezzel segíti a hasznos hozzájárulásokat úgy, hogy a hozzájáruló szintjének megfelelő hibát ajánl megoldásra.

[A GitHub 2017. évi nyílt forráskódú felmérése](http://opensourcesurvey.org/2017/) azt mutatta ki, hogy a félkész és zavaros dokumentáció a legnagyobb probléma a felhasználók számára. A jó dokumentáció beszippantja az embereket a projektbe: egyszer csak valaki nyit egy hibajelzést, vagy beküld egy beolvasztási kérelmet. Használd ki ezeket a lehetőségeket, hogy az emberek tovább mozogjanak lefelé a _résztvevői tölcséren_.

* **Ha valaki újként jelenik meg a projektben, akkor köszönd meg neki az érdeklődését!** Egyetlen egy negatív tapasztalat is elég ahhoz, hogy valaki ne jöjjön vissza többé a projekthez.
* **Legyél reszponzív!** Ha hónapokig nem válaszol a problémájára valakinek, nagy esély van rá, hogy elfelejti a projektedet.
* **Légy nyitott gondolkodású az új hozzájárulások elfogadásakor!** Sok hozzájáruló hibák jelzésével vagy apró javításokkal kezdi. [Számos módja van a hozzájárulásoknak](../how-to-contribute/#mit-jelent-a-hozzájárulás) a projekthez. Hagy segítsenek az emberek úgy, ahogy ők szeretnének.
* **Ha van olyan hozzájárulás, amivel nem értesz egyet,** akkor köszönd meg az ötletet, és [magyarázd el miért](../best-practices/#meg-kell-tanulni-nemet-mondani) nem felel meg a projekt víziónak, és csatold a hivatkozásokat a dokumentációra.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">
  A nyílt forrásban való részvétel valaki számára könnyebb, valakinek nehezebb. Attól tarthat valaki, hogy pellengérre állítják, ha nem tesz valamit helyesen, vagy ha nem illeszkedik be. (...) Azáltal, hogy a nagyon alacsony műszaki jártassággal rendelkező közreműködőknek is megadjuk a lehetőséget a hozzájárulásra (dokumentáció, tartalom, stb.), nagymértékben csökkenthetjük ezt az aggodalmat.
  <p markdown="1" class="pquote-credit">
— @mikeal, ["Közreműködői bázis bővítése a modern nyílt forráskódban"](https://opensource.com/life/16/5/growing-contributor-base-modern-open-source)
  </p>
</aside>

A nyílt forráskódú közreműködők többsége "alkalmi közreműködő": olyan emberek, akik csak alkalmanként járulnak hozzá a projekthez. Előfordulhat, hogy egy alkalmi közreműködőnek nincs ideje teljes mértékben felkészülni a projektre, ezért az a feladatod, hogy megkönnyítsd számukra a hozzájárulást ilyen esetekben is.

Más közreműködők ösztönzése számodra is hasznos befektetés. Ha támogatod a projekt legnagyobb rajongóit abban, hogy azon dolgozzanak amin szeretnének, akkor kevesebb lesz a nyomás rajtad, hogy mindent te csinálj.

### Dokumentálj mindent

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/janl?s=180" class="pquote-avatar" alt="avatar">
  Voltál már valaha olyan (tech-) rendezvényen, ahol nem ismertél senkit, de úgy tűnt számodra, hogy mindenki más csoportokban áll és beszélget, mint a régi jó barátok? (...) Most képzeld el, hogy hozzá szeretnél járulni egy nyílt forráskódú projekthez, de nem tudod, miként, és hogyan lehetséges ez.
  <p markdown="1" class="pquote-credit">
— @janl, ["Fenntartható Nyílt Forráskód"](https://web.archive.org/web/20200723213552/https://writing.jan.io/2015/11/20/sustainable-open-source.html)
  </p>
</aside>

Amikor új projektet indítasz, először természetesnek tűnhet, hogy a munkádat nem publikálod. De a nyílt forráskódú projektek akkor sikeresek, ha a folyamatait is nyilvánosan dokumentálod.

Amikor leírod a dolgokat, több ember vehet részt a projekt minden lépésében. Segíthet akár olyan dolgokban is, amelyekre még nem is gondoltad, hogy szükséged van.

A dolgok leírása nem csupán a műszaki dokumentációt jelent. Bármikor, amikor azt érzed, hogy le kell írni valamit, vagy egy magánbeszélgetést folytattál a projektről, gondolkozz el arról, hogy nyilvánosságra tudod-e hozni azt.

Legyen átlátható a projekt ütemterve, a várt hozzájárulások típusai, vagy azok áttekintésének módja és akár az is, hogy miért hoztál meg bizonyos döntéseket.

Ha több felhasználó jelzi ugyanazt a problémát, akkor dokumentáld a válaszokat a README részben.

Találkozók alkalmával fontold meg a megjegyzések, vagy döntések közzétételét az adott kérdésben. Az ilyen szintű átláthatóság miatt kapott visszajelzések lehet meg fognak majd lepni.

Mindennek a dokumentálása az te általad végzett munkára is vonatkozik. Ha a projekt lényeges frissítésén dolgozol, akkor add fel beolvasztási kérelemként és jelöld meg folyamatban lévő munkaként (WIP). Ily módon más emberek, már korán bekapcsolódhatnak a folyamatba és így maguknak érzik azt.

### Legyél reszponzív

Amint [ismertté próbálod tenni a projektet](../finding-users), az emberek visszajelzéseket fognak küldeni neked. Lesznek kérdéseik a működéséről, vagy épp segítségre lehet szükségük az induláshoz.

Próbálj azonnal reagálni, ha valaki hibajegyet vagy beolvasztási kérelmet nyújt be, vagy kérdést tesz fel a projekttel kapcsolatban. Ha gyorsan reagálsz, az emberek úgy érzik, hogy részesei a párbeszédnek, és lelkesebben fognak részt venni.

Még ha a kérelmet nem is tudod azonnal átvizsgálni, a korai befogadás segít növelni az elkötelezettséget. Így válaszolt @tdreyno a [Middleman](https://github.com/middleman/middleman/pull/1466) egyik beolvasztási kérelmére:

![Middleman beolvasztási kérelem](/assets/images/building-community/middleman_pr.png)

[Egy Mozilla tanulmány szerint](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) azoknak a válaszadóknak, akik 48 órán belül megkapták a kód review eredményét, sokkal magasabb volt a visszatérési aránya a projekthez, és a hozzájárulásuk ahhoz.

A projekttel kapcsolatos beszélgetések az internet más részein is zajlanak, például a StackOverflow, a Twitter vagy a Reddit oldalain. Ezen helyek egy részén értesítéseket állíthatsz be, így figyelmeztetést kapsz, ha valaki megemlíti a projektedet.

### Biztosíts egy helyet a közösségednek

Két oka is van, hogy miért kell a közösségnek egy állandó helyet biztosítani, ahol összejöhetnek.

Az első ok ők maguk. Segíts az embereknek megismerni egymást. A közös érdeklődésű emberek szeretnének egy helyet, ahol lehet beszélgetni. És amikor a kommunikáció nyilvános és hozzáférhető, bárki elolvashatja a múltbeli archívumokat, hogy felvegye a ritmust, és hogy részt vegyen a párbeszédben.

A másik ok te vagy. Ha nem biztosítasz egy nyilvános helyet az embereknek, ahol a projektjéről lehet beszélni, akkor valószínűleg közvetlenül téged keresnek meg. A kezdetben ez könnyűnek tűnhet, hiszen a magánüzenetekre csípőből válaszolunk. De az idő múlásával, különösen, ha a projekt népszerűvé válik, kimerülten fogod magad érezni. Állj ellen annak a kísértésnek, hogy privát módon kommunikálj az emberekkel a projekttel kapcsolatosan. Ehelyett irányítsd őket egy kijelölt, és nyilvános csatornára.

A nyilvános kommunikáció egyszerű, ha arra kéred az embereket, hogy nyissanak egy hibajegyet, ahelyett, hogy közvetlenül e-mailen küldnének azt, vagy megjegyzést fűznének a blogodhoz. Beállíthatsz egy levelezőlistát, vagy létrehozhatsz egy Twitter fiókot, Slack vagy akár egy IRC csatornát arra, hogy az emberek beszéljenek a projektedről. De akár próbálkozhatsz mindegyikkel!

[Kubernetes kops](https://github.com/kubernetes/kops#getting-involved) minden második héten biztosít időt arra, hogy segítse a közösség tagjait:

> Kopsnak minden második héten van elkülönített ideje arra, hogy segítséget és útmutatást nyújtson a közösség számára. A Kops fenntartói megállapodtak abban, hogy külön időt fordítanak az újonnan érkezőkkel való együttműködésre, a PR-ekkel kapcsolatos segítségnyújtásra és az új funkciók megvitatására.

A nyilvános kommunikáció alól kivételt képeznek: a 1) biztonsági kérdések és a 2) magatartási kódex megsértése. Az embereknek mindig képesnek kell lenniük arra, hogy ezeket a kérdéseket privát módon jelentsék be. Ha nem akarod használni a személyes e-mail címed, akkor állíts be egy külön e-mail címet erre a célra.

## Növeld a közösséget

A közösség rendkívül erős dolog. Ez a hatalom áldás vagy átok lehet, attól függően, hogy hogyan kezeled. Ahogy a projekt közössége növekszik, vannak olyan módok, amelyek segítenek abban, hogy ez az erő az építés, és ne pusztítás erejévé váljon.

### Ne tűrd el a helytelen viselkedést

Bármely népszerű projekt elkerülhetetlenül vonzza azokat az embereket, akik ahelyett, hogy segítséget nyújtanának a közösségnek inkább ártanak neki. Lehet, hogy felesleges vitákat indítanak, felkavaró kritikákat fogalmaznak meg alapvető funkciókról, vagy másokat piszkálnak.

Tegyél meg mindent, hogy zéró toleranciát tanúsíts az ilyen típusú emberekkel szemben. Ha figyelmen kívül hagyod ezt, akkor a negatív emberek kellemetlenné teszik a közösség többi tagjának részvételét a projektben, akik akár emiatt még távozhatnak is.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/okdistribute?s=180" class="pquote-avatar" alt="avatar">
  Az igazság az, hogy kulcsfontosságú a támogató közösség. Soha nem tudnám ezt a munkát elvégezni kollégáim, barátságos internetes idegenek, és az IRC-csatornáim nélkül. (...) Ne elégedj meg kevesebbel. Ne tűrd meg a seggfejeket.
  <p markdown="1" class="pquote-credit">
— @okdistribute, ["Hogyan működik a FOSS Project"](https://okdistribute.xyz/post/okf-de)
  </p>
</aside>

A projekt alapvető céljairól folytatott rendszeres vita zavarhat másokat, köztük téged is, és elvonja a figyelmet a fontos feladatokról. A projektbe érkező új emberek láthatják ezeket a beszélgetéseket, és emiatt lehet nem akarnak részt venni majd benne.

Ha negatív viselkedést látsz a projektben, azt hozd nyilvánosságra. Magyarázd el kedvesen, de határozott hangon, hogy miért nem fogadható el ez a viselkedés. Ha a probléma továbbra is fennáll, akkor lehet, hogy [fel kell kérned az érintettet a távozásra](../code-of-conduct/#a-magatartási-kódex-érvényesítése). A [Magatartási kódexed](../code-of-conduct/) konstruktív útmutatást jelenthet az ilyen jellegű beszélgetésekhez.

### Maradj kapcsolatban

A jó dokumentáció akkor válik fontosabbá, ha közösséged növekszik. Az alkalmi közreműködők, akik esetleg egyébként nem ismerik a projektet, azért olvassák el a dokumentációt, hogy gyorsan megértsék azt a környezetet, amire szükségük van.

A CONTRIBUTING fájljában kifejezetten mond el az új közreműködőknek az elindulás módját. Érdemes lehet erre a célra egy külön fejezetet létrehozni. Például a [Django](https://github.com/django/django) projektnek van egy speciális nyitóoldallal, amelyen az új közreműködőket fogadják.

![Django új közreműködő oldala](/assets/images/building-community/django_new_contributors.png)

A hibalistában azon hibákat címkézd meg, amelyek különböző hozzájárulás típusokat igényelnek, például: [_"first timers only"_](https://kentcdodds.com/blog/first-timers-only), _"good first issue"_, vagy _"documentation"_. [Ezek a címkék](https://github.com/librariesio/libraries.io/blob/6afea1a3354aef4672d9b3a9fc4cc308d60020c8/app/models/github_issue.rb#L8-L14) segítik az újonnan érkezőket abban, hogy gyorsan átnézzék a listát és el tudják kezdeni a munkát.

Végül, de nem utolsó sorban a dokumentáció alapján érezzék az emberek, hogy szívesen látod őket bármely folyamatában a projektnek.

Általában nem fogsz közvetlenül minden emberrel kommunikálni, aki megfordul a projekten. Lehet, hogy lesznek olyan hozzájárulások, amelyeket azért nem kapsz meg, mert valaki elrettent a projekttől, vagy nem tudta, hogy hol kezdje. Akár néhány kedves szó is elég lehet ahhoz, hogy megakadályozd, hogy valaki csalódottan hagyja el a projektet.

Itt egy példa, hogy hogyan kezdj a [Rubinius](https://github.com/rubinius/rubinius/) projektben, [a CONTRIBUTING útmutatójuk](https://github.com/rubinius/rubinius/blob/HEAD/.github/contributing.md):

> Mindenekelőtt azzal szeretnénk kezdeni, hogy köszönjük azt, hogy használod a Rubinius-t. Ez a projekt szeretetteljes munkát jelent, és nagyra értékeljük az összes felhasználót, aki hibákat észlel, javít a teljesítményben és segítséget nyújt a dokumentációban. Minden hozzájárulás hasznos, ezért köszönjük a részvételed. Kérjük néhány iránymutatást tarts be, hogy sikeresen meg tudjuk oldani a problémádat.

### A projekt tulajdonjogának megosztása

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/sagesharp?s=180" class="pquote-avatar" alt="avatar">
  A vezetőid eltérő véleményekkel rendelkezhetnek, ahogy általában minden egészséges közösségnek! Oda kell figyelned azonban annak biztosítására, hogy ne mindig a leghangosabb hang nyerjen az emberek kifárasztásával, és hogy kevésbé prominens személyek és a kisebbségi hangok is hallatszódjanak.
  <p markdown="1" class="pquote-credit">
— @sagesharp, ["Mitől jó egy közösség?"](https://sage.thesharps.us/2015/10/06/what-makes-a-good-community/)
  </p>
</aside>

Az emberek örömmel járulnak hozzá a projektekhez, ha maguknak érzik azt. Ez nem azt jelenti, hogy át kell szabni a projekt víziódat, vagy el kell fogadni a nem kívánt hozzájárulásokat. De minél többet adsz ebből másoknak, annál jobban magukénak fogják érezni.

Nézd meg, hogyan találhatod meg a módját, hogy a lehető legnagyobb mértékben megoszd a tulajdont a közösséggel. Íme néhány ötlet:

* **Állj ellen az egyszerű (nem kritikus) hibák javításának.** Ehelyett használd ezeket a hibákat arra, hogy új segítőket toborozz toborzására, vagy mentorálj valakit, aki szeretne hozzájárulni. Bár furcsának tűnhet, de ez a befektetés idővel megtérül. Például a @michaeljoseph megkérte az egyik közreműködőt, hogy nyújtson be beolvasztási kérelmet egy alábbi, [Cookiecutter] (https://github.com/audreyr/cookiecutter) hibával kapcsolatosan, ahelyett, hogy saját maga javította volna ki.

![Cookiecutter hiba](/assets/images/building-community/cookiecutter_submit_pr.png)

* **Állíts össze egy CONTRIBUTORS vagy AUTHORS fájlt a projektben,** amely listáz mindenkit aki hozzájárul a projekthez. Például ahogy a [Sinatra](https://github.com/sinatra/sinatra/blob/HEAD/AUTHORS.md) csinálja.

* Ha széles közösséged van, **akkor küldj ki hírlevelet vagy vezess blogot** amelyen megköszönöd a hozzájárulásokat. A Rust-nak a [Heti Rust](https://this-week-in-rust.org/) és a Hoodie-nak a [Shoutouts](http://hood.ie/blog/shoutouts-week-24.html) két jó példa erre.

* **Minden közreműködő kapjon commit jogot.** @felixge szerint az emberek [sokkal aprólékosabban kidolgozzák a hozzájárulásukat](https://felixge.de/2013/03/11/the-pull-request-hack.html), és még több karbantartót lehet bevonni, akik esetleg korábban passzívak voltak.

* Ha a projekted a GitHub-on van, **akkor mozgasd a projektet át a személyes fiókod alól a [Szervezeti Fiók](https://help.github.com/articles/creating-a-new-organization-account/)** alá és adj hozzá legalább egy admint még biztonság esetére. Az Szervezeti Fiók alkalmasabb külső résztvevők bevonására.

A valóságban [a legtöbb projektnek](https://peerj.com/preprints/1233.pdf) csak egy, két karbantartója van. Minél nagyobb a projekted, és a közösséged, annál könnyebb segítséget találni.

Bár nem mindig válaszolnak a felhívásodra, de egy jelzés kiküldése növeli az esélyét, hogy valaki reagál majd rá. És minél előbb megteszed ezt, annál hamarabb segíthetnek az emberek.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/gr2m?s=180" class="pquote-avatar" alt="avatar">
  A te érdeked az, hogy olyan munkatársakat toborozz, akik élvezik és képesek megtenni azokat a dolgokat, amelyeket te nem. Szereted a kódolást, de nem válaszolsz a kérdésekre? Keresd meg azokat a személyeket a közösségben, akik ezt megteszik, és hagyd őket dolgozni.
  <p markdown="1" class="pquote-credit">
— @gr2m, ["Befogadó közösségek"](http://hood.ie/blog/welcoming-communities.html)
  </p>
</aside>

## Konfliktusok megoldása

A projekt korai szakaszában a fontos döntések meghozatala egyszerű. Ha akarsz csinálni valamit, akkor csak megcsinálod.

Ahogy a projekt népszerűbbé válik, egyre több embert érdekelnek majd az általad meghozott döntések. Még ha nem is rendelkezel nagy közreműködő közösséggel, de a projektnek már sok felhasználója van, akkor találni fogsz olyan embereket, akik a döntéseket mérlegelni fogják, vagy a saját kifogásaikat megfogalmazzák.

Nagyrészt barátságos és tiszteletteljes közösség esetén és nyíltan dokumentált folyamat esetén találni fogsz megoldást. De néha olyan helyzetbe kerülhetsz, amit kicsit nehezebb lesz megoldani.

### Viselkedéseddel mutass példát

Ha a közösség egy nehéz kérdéssel kerül szembe, akkor emelkedetté válhat a hangulat. Az emberek dühösek vagy csalódottak lehetnek, és ezt egymáson vagy épp rajtad vezethetik le.

Mint karbantartó az a feladatod, hogy ezt a szituációt ne engedd eszkalálódni. Még ha határozott véleményed is van az adott témában, próbáld felvenni a moderátor és az egyeztető szerepet inkább ahelyett, hogy fejest ugranál a csatározásba, és a nézetedet erőltetnéd. Ha valaki barátságtalan, vagy kisajátítja a beszélgetést, akkor [azonnal cselekedj](../building-community/#ne-tűrd-el-a-helytelen-viselkedést), hogy a beszélgetés udvarias és produktív maradjon.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kennethreitz?s=180" class="pquote-avatar" alt="avatar">
  Karbantartóként rendkívül fontos, hogy tiszteld a közreműködőket. Gyakran megfogadják azt, amit személyesen nekik mondasz.
  <p markdown="1" class="pquote-credit">
— @kennethreitz, ["Be Cordial or Be on Your Way"](https://web.archive.org/web/20200509154531/https://kenreitz.org/essays/be-cordial-or-be-on-your-way)
  </p>
</aside>

Mások útmutatást kérnek tőled, mutass jó példát. Bátran kifejezheted a csalódottságod, szomorúságod vagy aggodalmadat, de ezt mindig nyugodtan tedd.

A nyugalom megtartása nem könnyű, de ennek demonstrálása a projekt vezetés által javítja a közösséget. Az internet meg fogja köszönni.

### A README-t alkotmányként kezeld

A README fájlod [több mint utasítások összessége](../starting-a-project/#readme-írása). Ez egy olyan hely, ahol beszélhetsz a céljaidról, a termék jövőképéről és az ütemtervről. Ha az emberek túlzottan arra koncentrálnak, hogy megvitatják egy adott funkció értékességét, akkor előfordulhat, hogy át kell értékelned a README-t és még pontosabban kell definiálnod a projekt vízióját. A README szem előtt tartása személytelenebbé teszi a beszélgetést, így az konstruktív maradhat.

### Az útra figyelj, ne a végcélra

Egyes projektek szavazási folyamatot használnak a nagyobb döntések meghozatalához. Bár a szavazás első pillantásra ésszerű, a szavazás inkább a "válasz" elérésére helyezi a hangsúlyt, ahelyett, hogy meghallgatná és kezelné a véleményeket.

A szavazás politikai jellegűvé válhat, amikor a közösség tagjai nyomást gyakorolnak egymásra, hogy egymást előnyben részesítsék, vagy bizonyos módon szavazzanak. Nem mindenki szavaz, függetlenül attól, hogy a [néma többségről](https://ben.balter.com/2016/03/08/optimizing-for-power-users-and-edge-cases/#the-silent-majority-of-users), vagy a jelenlegi felhasználókról van szó, akik épp nem tudták, hogy szavazás zajlik.

Időnként a szavazással történik a szükséges döntéshozás. Mindazonáltal, amennyire képes vagy, hangsúlyozd a ["konszenzus keresését"](https://en.wikipedia.org/wiki/Consensus-seeking_decision-making) a létrehozott konszenzus helyett.

Konszenzuskeresési folyamat keretében a közösség tagjai megbeszélik a legfontosabb problémákat, amíg úgy nem érzik, hogy mindenkit meg nem hallgattak. Amikor csak apró észrevételek maradnak már csak, akkor a közösség tovább haladhat. A "konszenzuskeresés" elismeri azt, hogy a közösség nem biztos, hogy képes megtalálni a tökéletes választ. Ehelyett egymás meghallgatását, és a beszélgetést részesíti előnyben.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lee-dohm?s=180" class="pquote-avatar" alt="avatar">
  Az egyik ok, amiért nem létezik szavazási rendszer az Atom Issues számára az, hogy az Atom csapata nem minden esetben követi a szavazás módszerét. Időnként azt kell választanunk, hogy mit érzünk helyesnek, még akkor is, ha az nem éppen népszerű. (...) Amit felajánlhatok és vállalhatok az, hogy a közösség meghallgatása az én dolgom.
  <p markdown="1" class="pquote-credit">
— @lee-dohm az [Atom döntési folyamata](https://discuss.atom.io/t/prioritize-issues-feature-requests-based-on-voting-system/27642/2)
  </p>
</aside>

Ha karbantartóként nem használod a konszenzuskeresési folyamatot, akkor is fontos, hogy az emberek tudják, hogy figyelsz rájuk. Érezzék, hogy meghallgatod őket, és elkötelezed magad a problémáik megoldása mellett, ez a tartós módja annak, hogy elkerüld a komolyabb, kiterjedt problémákat. A szavak után lépj a tettek mezejére.

Ne siess a döntéssel annak érdekében, hogy megold. Mielőtt állást foglalnál egy kérdésben, győződj meg arról, hogy mindenki úgy érzi-e, hogy meghallgatták és hogy minden információ ezzel kapcsolatban nyilvánosságra került.

### A cselekvés legyen a fókuszban

A beszélgetés fontos, de különbség van a produktív és a nem produktív beszélgetések között.

Támogassa a párbeszédet mindaddig, amíg az a megoldást szolgálja. Ha a párbeszéd egyértelműen tárgytalanná, személyeskedővé válik, vagy félrecsúszik, esetleg az emberek lényegtelen, apró részletekkel kezdenek el foglalkozni, akkor ideje leállítani a megbeszélést.

Ezen beszélgetések továbbengedése nem csak a jelenlegi probléma kezelésére, hanem a közösség egészségére is káros lehet. Azt üzeni, hogy az ilyen típusú beszélgetések megengedettek vagy akár bátoríthatók, ennek következménye, hogy ez visszatarthatja az embereket a jövőbeli kérdések felvetésétől vagy megoldásától.

Ha már mások minden észrevételét meghallgattad, akkor kérdezd meg magadtól: _"Hogyan visz ez minket közelebb a megoldáshoz?"_

Ha a beszélgetés kezd letisztulni, akkor kérdezd meg a csoportot: _"Mi legyen a következő lépés?"_, ezzel továbbra is fókuszálva tartod a beszélgetést.

Ha egy beszélgetés nyilvánvalóan nem vezet sehova, vagy nincs egyértelmű intézkedés amit végre kell hajtani, vagy az már meg is megtörtént, akkor zárd le a problémát, és indokold meg, miért zártad le.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kfogel?s=180" class="pquote-avatar" alt="avatar">
  A beszélgetés szálának irányítása a hasznosság felé, anélkül hogy feszültség keletkezne, művészet. Nem működik egyszerűen az emberek figyelmeztetése arra, hogy hagyják abba az idő pazarlását, vagy arra, hogy ne küldjenek több felesleges üzenetet, hacsak nincs valami konstruktív mondanivalójuk. (...) Ehelyett javasolnod kell a továbbhaladás lehetőségeket: mutass az embereknek egy utat, amely a kívánt eredményekhez vezethet, mégpedig anélkül, hogy ez úgy tűnne, hogy parancsolgatsz nekik.
  <p markdown="1" class="pquote-credit">
— @kfogel, [_OSS létrehozása_](https://producingoss.com/en/producingoss.html#common-pitfalls)
  </p>
</aside>

### Válassz okosan csatát

Fontos a környezet. Gondold át, hogy kik vesznek részt a vitában, és hogyan képviselik a közösség többi részét.

A közösség minden tagja ideges, vagy éppen elragadtatott a kérdéssel kapcsolatban? Vagy egy magányos bajkeverő műve az egész? Ne felejts el figyelni a közösség csendes tagjait, nem csak a hangoskodókat halld meg.

Ha a téma nem a közösség szélesebb körű igényeit képviseli, akkor el kell fogadni az aggódó hangokat. Ha ez egy rendszeresen visszatérő probléma, egyértelmű megoldás nélkül, akkor mutass rá a témával kapcsolatos korábbi megbeszélésekre, és zárd be a szálat.

### Keress döntéshozókat a közösségben

Jó hozzáállással, és egyértelmű kommunikációval a legnehezebb helyzetek is megoldhatók. De még egy eredményes beszélgetés után is eltérhet a vélemény arról, hogy hogyan kell folytatni. Ezekre az esetekre keress egy embert vagy embercsoportot, akik döntéshozóként szolgálnak.

A döntéshozó lehet a projekt karbantartója, vagy akár egy kis embercsoport, akik szavazás alapján hoznak döntést. Ideális az ha, a döntéshozókat és a kapcsolódó folyamatot egy GOVERNANCE fájlban részletezed.

A döntéshozódnak az utolsó lehetőségnek kell lennie. A megosztó kérdések a közösség növekedésének és tanulásának a lehetőségét jelentik. Ragadd meg ezeket a lehetőségeket, és használd az együttműködési folyamatot a megoldáshoz, amikor csak lehetséges.

## A nyílt forráskód ❤️ a közösséget

Az egészséges, virágzó közösségek heti több ezer órát fordítanak a nyílt forráskódra. Számos résztvevő másokra hivatkozik, hogy miért dolgozik – vagy éppen miért nem dolgozik –, a nyílt forráskódon. Ha megtanulod kreatívan használni a közösség erejét, akkor hozzásegítesz valakit majd ahhoz, hogy felejthetetlen élményeket szerezzen a nyílt forráskódban.
