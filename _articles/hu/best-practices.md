---
lang: hu
title: Bevált gyakorlatok karbantartók részére
description: Nyílt forráskódú karbantartóként tedd az életed könnyebbé a folyamatok dokumentálásától kezdve a közösség erejének a kiaknázásáig.
class: best-practices
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## Mit jelent karbantartónak lenni?

Ha olyan nyílt forráskódú projektet tartasz fenn, amelyet sok ember használ, akkor valószínűleg észrevetted, hogy kevesebbet kódolsz, és többet válaszolsz a problémákra.

A projekt korai szakaszában új ötletekkel kísérletezel és alapvető döntéseket hozol az alapján, hogy mit szeretnél. Ahogy a projekted népszerűsége növekszik, azon veszed észre magad, hogy egyre többet dolgozol együtt a felhasználókkal és a közreműködőkkel.

Egy projektet fenntartani többet jelent, mint csak kódolni. Ezek a feladatok gyakran váratlanok, de ugyanolyan fontosak egy fejlődő projektben. Összegyűjtöttünk néhány módszert az életünk megkönnyítésére, a folyamatok dokumentálásától kezdve a közösség erejének a kiaknázásáig.

## A folyamatok dokumentálása

A dolgok leírása az egyik legfontosabb dolog, amelyet karbantartóként megtehetsz.

A dokumentáció nem csak a saját gondolkodásod letisztulását segíti, hanem azt is, hogy más is megértse a szándékodat anélkül, hogy kérdezni kellene.

A dolgok leírása könnyebbé teszi azt, hogy nemet tudj mondani olyan dolgokra, amelyek nem illeszkednek a projekt hatókörébe. Ezenkívül megkönnyíti az embereknek a belépését és segítését. Sohasem tudhatod, hogy ki olvassa vagy használja a projektet.

Még ha nem is fejted ki a teljes mondanivalód, akkor is jobb legalább felsoroláspontokban röviden összeszedni azt, mintha nem írnál semmit sem.

Ne felejtsd el naprakészen tartani a dokumentációt. Ha nem vagy képes ezt mindig megtenni, töröld az elavult dokumentációt, vagy jelezd azt, hogy elavult, így a közreműködők tudják, hogy szívesen várod a frissítéseket ezekre.

### Írd le a projekt vízióját

Kezd azzal, hogy leírod a projekt célját. Írd le a README-ben, vagy hozz létre egy különálló VISION fájlt. Ha van bármi más ami segít, mint például egy projekt roadmap, akkor tedd elérhetővé azt is.

A tiszta, jól dokumentált elképzelés segít fókuszálni és elkerülni azt, hogy más hozzájárulók felesleges vagy oda nem illő dolgokkal járuljanak hozzá.

Például @lord észrevette, hogy a projekt vízió segített neki abban, hogy eldöntse, hogy melyik kéréssel töltse az idejét. Új karbantartóként sajnálta, hogy nem ragaszkodott a projektjének hatóköréhez, amikor megkapta az első, funkcióra irányuló kérést a [Slate-hez](https://github.com/lord/slate).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  TODO: Ódzkodtam tőle. Nem törekedtem arra, hogy mindenre megoldás szülessen. Egy fél megoldás helyett inkább azt mondtam volna, hogy: "Erre most nincs elég időm, de hozzá fogom adni a hosszú távú jó-lenne-majd listához."
  <p markdown="1" class="pquote-credit">
— @lord, ["Tippek nyílt forrású projektek karbantartóinak"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Kommunikáld az elvárásaid

A szabályok leírása idegesítő lehet. Időnként úgy érzed, mintha más emberek viselkedését szabályoznád, vagy mintha kiölnél minden szórakoztató dolgot a projektből.

Ugyanakkor megfelelően leírva és jól végrehajtva, a jó szabályok támogatják a karbantartókat. Megakadályozzák, hogy olyan dolgokba menj bele, amelyekbe nem akarsz.

A legtöbb ember, aki a projekttel találkozik, semmit sem tud rólad vagy a körülményeidről. Feltételezhetik, hogy fizetést kapsz a munkádért, különösen, ha rendszeresen használják, és függnek a projekttől Lehet, hogy egy ideig sok időt töltesz a projekttel, de az is lehet, hogy most egy új munkával, vagy épp a családdal foglalkozol.

Mindez teljesen rendben van! Csak legyél biztos abban, hogy mások is tudnak erről.

Ha a projekt fenntartása részmunkaidős vagy tisztán önkéntes, akkor legyél őszinte abban, hogy mennyi időd van rá. Ez nem egyezik meg azzal, hogy szerinted mennyi időt igényelne a projekt, vagy azzal, hogy mennyi időt várnak el mások tőled.

Néhány szabály, amelyeket érdemes leírni:

* Hogyan vizsgálod meg és fogadod el a hozzájárulást (_Meg vannak követelve a tesztek? Van az issue-khoz sablon?_)
* A hozzájárulások típusai, amelyeket elfogadsz (_Csak egy bizonyos részéhez fogadsz el hozzájárulást a kódnak?_)
* Mikor helyénvaló ismét figyelmeztetni (_például: "7 napon belül várhatsz választ a karbantartótól. Ha ez alatt még sincs visszajelzés, nyugodtan pingeld meg a szálat."_)
* Mennyi időt fogsz a projektre fordítani (_például: "Csak kb. 5 órát foglalkozunk a hetente ezzel a projekttel."_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), és a [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) mellett számos példa van a karbantartók és közreműködők alapszabályairól rendelkező projektekre.

### Legyen a kommunikáció nyilvános

Ne felejtsd el dokumentálni az interakciókat is. Ahol csak lehet, tartsd nyilvánosan a projekttel kapcsolatos kommunikációt. Ha valaki megpróbál privát kapcsolaton keresztül kommunikálni egy funkciókérést vagy támogatási igényt akkor, udvariasan irányítsd egy nyilvános kommunikációs csatornára, például egy levelezőlistára vagy a hibakövető rendszerre.

Ha személyesen találkozol más karbantartókkal, vagy ha zártkörű döntés születik, akkor is nyilvánosan dokumentáld ezeket a beszélgetéseket, még akkor is, ha csak jegyzeteket írsz.

Így bárki, aki csatlakozik a közösséghez, ugyanazt az információt éri el, mint az, aki már évek óta tagja a közösségnek.

## Meg kell tanulni nemet mondani

Leírtad a dolgokat. Ideális esetben mindenki elolvassa a dokumentációt, de a valóságban ez nem mindig van így, ezért figyelmeztetned kell majd másokat arra, hogy ez a tudás létezik.

Ha mindent leírsz, az segít megszüntetni azokat a helyzeteket, amikor szükség van a szabályok érvényesítésére.

Nemet mondani nem kellemes, de a _"Hozzájárulásod nem felel meg a projekt kritériumoknak"_ kevésbé személyeskedő, mint a _"Nem tetszik ez a hozzájárulásod"_.

Sok helyzetben kell majd nemet mondanod, amelyekkel karbantartóként találkozol: olyan funkciókérések, amelyek nem felelnek meg az alkalmazási körnek, valaki félrevisz egy beszélgetést, amellyel felesleges munkát generál másoknak.

### Legyen barátságos a beszélgetés

A legfontosabb helyek, ahol gyakorolni fogod a nemet mondást, azok az issue-k és a beolvasztási kérelmek. Projekt karbantartóként elkerülhetetlen lesz az a helyzet, amikor olyan javaslatokat kapsz, amelyeket nem akarsz elfogadni.

Lehet, hogy a hozzájárulás megváltoztatja a projekt célját, vagy nem felel meg a jövőképének. Talán az ötlet jó, de a megvalósítás rossz.

Az indoktól függetlenül lehetséges tapintatosan kezelni azokat a hozzájárulásokat, amelyek nem felelnek meg a projekt normáinak.

Ha olyan hozzájárulást kapsz, amelyet nem akarsz elfogadni, akkor az első reakciód lehet hogy az, hogy figyelmen kívül hagyod, vagy úgy teszel, mintha nem látnád. Ha így teszel, akkor a másik személy érzéseit megsértheted, vagy akár más, lehetséges hozzájárulók kedvét is elveszed a részvételtől.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">
  A nagyszabású, nyílt forráskódú projektek támogatásának fenntartásának a kulcsa az issue-k mozgásának folyamatos fenntartása. El kell kerülni, hogy az issue-k sokáig érintetlenül  álljanak. Ha iOS fejlesztő vagy, akkor tudod, milyen bosszantó lehet egy iOS bug bejelentése. Lehet, hogy 2 évvel később hallasz csak róla, és azt mondják majd, hogy próbáld újra az iOS legújabb verziójával.
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Nyílt forráskódú közösségek méretezése"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

Ne hagyj nyitva nem kívánt hozzájárulást, csak azért, mert bűntudatot éreznél attól, hogy lezárod. Az idő múlásával a megválaszolatlan kérdések és a nem kívánt beolvasztási kérelmek sokkal stresszesebbé és elrettentőbbé teszik a projekttel való munkát.

Sokkal jobb, ha azonnal lezárod a hozzájárulást, ha nem akarod elfogadni. Ha a projekted már eleve nagy feladatlistával rendelkezik, akkor itt van @steveklabnik javaslata arra, hogy [hogyan priorizáld hatékonyan az issue-kat](https://words.steveklabnik.com/how-to-be-an-open-source-gardener).

Ugyanakkor a hozzájárulások rendszeres figyelmen kívül hagyása negatív jelet küldhet a közösségnek. A projekthez való hozzájárulás elrettentő is lehet, különösen, ha valaki először próbálja. Még ha nem is fogadod el az általa benyújtott hozzájárulást, becsüld meg azt a személyt aki benyújtotta, és mondj köszönetet az érdeklődése iránt, ez nagy dicséret!

Ha nem akarsz elfogadni egy hozzájárulást:

* **Köszönd meg neki** a hozzájárulást
* **Magyarázd el, miért nem illik bele a projekt kritériumokba,** vagy ha lehetséges, javasolj egyértelmű dolgokat a javításra. Legyél határozott, de kedves.
* **Linkeld be a releváns dokumentációkat,** ha vannak. Ha arra leszel figyelmes, hogy rendszeresen kapsz olyan kéréseket, amelyeket nem akarsz elfogadni, akkor add hozzá a dokumentációhoz, ezzel elkerülheted, hogy mindig magadat ismételd.
* **Zárd le a kérést**

Nem kell több a válaszba mint 1-2 mondat. Például a [celery](https://github.com/celery/celery/) felhasználója jelentett egy Windows-hoz kapcsolódó hibát,  erre @berkerpeksag [így válaszolt](https://github.com/celery/celery/issues/3383):

![Celery screenshot](/assets/images/best-practices/celery.png)

Ha megijeszt a nemet mondás, ne aggódj, nem vagy egyedül, lásd @jessfraz [írását erről](https://blog.jessfraz.com/post/the-art-of-closing/):

> Számos, különböző nyílt forráskódú projektekből beszéltem karbantartókkal – Mesos, Kubernetes, Chromium –, és abban mindannyian egyetértettek, hogy a legkeményebb rész a "Nem"-et mondás egy olyan javításra, amelyet nem akarsz.

Ne érezd bűntudatot azért, mert nem fogadsz el egy hozzájárulást. Az első szabálya a nyílt forráskódnak @shykes [szerint](https://twitter.com/solomonstre/status/715277134978113536): _"A nem az átmeneti, az igen az örökös."_ Bár jó érzés a másik ember lelkesedését látni, a hozzájárulás elutasítása nem jelenti a mögötte álló személy elutasítását.

Végül, ha a hozzájárulás nem elég jó, akkor nem vagy köteles elfogadni azt. Légy kedves és közreműködő, ha az emberek hozzájárulnak a projekthez, de csak azokat a változásokat fogadd el, amelyektől valóban azt hiszed, hogy a projekt jobbá válik. Minél gyakrabban gyakorolod a nemet mondást, annál könnyebbé válik.

### Legyél pro-aktív

A nemkívánatos hozzájárulások mennyiségének csökkentése érdekében mindenekelőtt mutasd be a hozzájárulási útmutatóban a projekt hozzájárulások benyújtásának és elfogadásának folyamatát.

Ha túl sok gyenge színvonalú hozzájárulást kapsz, kérd meg a közreműködőket, hogy végezzenek el előtte egy kis munkát, például:

* Töltsék ki a hibához, vagy beolvasztási kérelemhez rendelt űrlapot, vagy ellenőrző listát
* Nyissanak egy issue-t, mielőtt beolvasztási kérelmet adnak fel

Ha nem követik a szabályokat, akkor azonnal zárd le a jelzést és hivatkozd meg a dokumentációt.

Noha ez a megközelítés kezdetben kellemetlennek tűnik, a pro-aktív fellépés mindkét fél számára jó. Csökkenti annak az esélyét, hogy valaki sok elpazarolt órát fordítson egy beolvasztási kérelemre, amelyet nem fogsz elfogadni. Emellett a Te munkaterhelésed is könnyebben kezelhetővé válik.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  Ideális az, ha elmagyarázod egy CONTRIBUTING.md fájlban, hogy miként kaphatnak jobb képet arról, hogy a jövőben mit fogadnál el vagy mit nem fogadnál el, még mielőtt a munkát elkezdenék.
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["Udvariasan lezárt beolvasztási kérelmek"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

Időnként, amikor nemet mondsz, a potenciális közreműködőt felháboríthatja a döntés vagy kritizálhatja azt. Ha a viselkedése ellenségessé válik, akkor [tegyél lépéseket a helyzet enyhítésére](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) vagy akár el is távolíthatod a közösségből a személyt, ha meg sem próbál konstruktívan együttműködni.

### Erősítsd a mentorálást

Lehet, hogy valaki a közösségedben rendszeresen nyújt be olyan hozzájárulásokat, amelyek nem felelnek meg a projekt normáinak. Mindkét fél számára frusztráló lehet az ismételt visszautasítás.

Ha azt látod, hogy valaki lelkesedik a projekted iránt, de egy kis segítségre van szüksége, légy türelmes. Mindig magyarázd el világosan, hogy miért nem felelnek meg a hozzájárulások a projekt elvárásainak. Próbálj ajánlani egy könnyebb vagy kevésbé bonyolult feladatot, például egy feladatot a _"good first issue"_ jelöléssel, hogy a megtegye az első lépéseket. Ha van időd, akkor fontold meg a mentorálásukat az első hozzájárulásuk alkalmával, vagy keress meg valaki mást a közösségében, aki hajlandó mentorálni őket.

## Használd ki a közösség erejét

Nem kell mindent egymagad csinálni. A projekt közösség okkal létezik! Ha még nincs aktív közreműködő közösség, de már sokan vannak benne, akkor is próbáld munkára fogni őket.

### Oszd el a munkaterhelést

Ha szeretnél másokat bevonni, akkor kérdezz körbe.

Az új közreműködők megszerzésének egyik módja az, hogy kifejezetten [olyan issue-kat nevezel meg, amelyek elég egyszerűek a kezdők számára](https://help.github.com/en/articles/helping-new-contributors-find-your-project-with-labels). A GitHub segíti ezen issue-k kiemelésén és láthatóvá tételét.

Amikor azt látod, hogy az új résztvevők rendszeresen hozzájárulnak a projekthez, akkor ismerd el a munkájukat azzal, hogy nagyobb felelősséget adsz számukra. Dokumentáld le, hogy hogyan válhat valaki a projekt irányító tagjává, ha azt szeretné.

Ösztönözz másokat arra, hogy [részt vegyenek a projekt irányításában](../building-community/#a-projekt-tulajdonjogának-megosztása) ezzel jelentősen csökkented a saját terhelésed, mint ahogy @lmccart észrevette ezt a saját projektjénél, [p5.js](https://github.com/processing/p5.js).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
  Azt mondtam: "Igen, bárki jöhet, nem kell sok tapasztalattal rendelkeznie a kódolás területén [...]." Az emberek feliratkoztak, hogy eljöjjenek [a rendezvényre], és nagyon kíváncsi voltam rá, hogy valóban jó-e az, amit mondtam? 40 ember megjelent, és nem úgy tűnt hogy mindenkivel, egyenként le tudok ülni beszélni... De az emberek összeálltak, és egyszerűen csak elkezdett minden jól működni. Amint egy ember megértette a dolgot, elkezdte a többieket tanítani.
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["Mit jelent még az "Nyílt Forrás"? p5.js Kiadás"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39)
  </p>
</aside>

Ha a projektet magára kell hagynod rövid vagy akár hosszabb időre, akkor nincs semmi szégyelleni való abban, ha megkérsz mást, hogy vegye át a helyed.

Ha mások is lelkesek a projekt irányát illetően, akkor add meg nekik a hozzáférést, vagy formálisan is add át az irányítást. Ha valaki forkolta a projektet, és máshol aktívan fenntartja azt, fontold meg az eredeti projekt csatlakozását ehhez. Nagyszerű, ha sok ember akarja azt, hogy a projekt tovább éljen!

@progrium [úgy találta](https://web.archive.org/web/20151204215958/https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) hogy a projekt vízió dokumentálása a [Dokku](https://github.com/dokku/dokku) esetén, segített abban, hogy a célok tovább éljenek még akkor is, amikor ő már nem vesz részt a projektben:

> Egy wiki oldalon leírtam, hogy mit és miért akartam. Valami oknál fogva meglepetésnek számított nekem, hogy a karbantartók elkezdték vinni a projektet ebbe az irányba! Hogy pontosan úgy történt ez, ahogy én csináltam volna? Nem mindig. De mégis közelebb hozta a projektet ahhoz, amit leírtam.

### Hagyd, hogy mások építsék ki a számukra szükséges megoldásokat

Ha egy potenciális közreműködő eltérő véleményen van arról, hogy mit kellene a projektben megvalósítani, akkor érdemes udvariasan ösztönözni őt, hogy saját forkon dolgozzon.

A projekt forkolása (elágaztatása) nem jelent rossz dolgot. A projekt lemásolása és módosítása a legjobb része a nyílt forráskódnak. A közösség tagjainak ösztönzése arra, hogy saját forkon dolgozzanak alkalmas arra, hogy saját kreativitásukat kiélhessék anélkül, hogy ez ütközne a projekted eredeti víziójával.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  Én garantáltan lefedem a használati esetek 80%-át. Ha te egyike vagy az Unikornisoknak [szakmai guru], akkor kérlek, forkold el a munkám. Nem veszem sértésnek! A publikus projektjeim szinte kivétel nélkül a leggyakoribb problémákra nyújtanak megoldást; én csupán csak megpróbálom megkönnyíteni azt, hogy Te elmélyedhess a problémákban akár a munkám forkolásával vagy annak kiterjesztésével.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Miért zárok le beolvasztási kérelmeket?"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

Ugyanez a megoldás jó akkor is, ha valaki komolyan akarna egy megoldást a projektben valamire, de erre neked már nincs kapacitásod. API-k és testre szabható hook-ok biztosítása lehetővé teszi mások számára, hogy anélkül elégítsék ki a szükségleteiket, hogy a projektet módosítani kellene közvetlenül. @orta [szerint](https://artsy.github.io/blog/2016/07/03/handling-big-projects/) a CocoaPods plugin megjelenése vezetett "néhány nagyon érdekes ötlethez":

> Szinte elkerülhetetlen, hogy ha egy projekt nagyméretűvé válik, a karbantartóknak sokkal konzervatívabbá kell válniuk az új kódok bevezetése terén. Az rendben van, ha tudod mondani a "nem" szót, de sok embernek van valódi, jogos igénye. Emiatt a megoldást végül platformmá alakítod át.

## Használj robotokat

Ahogy vannak olyan feladatok, amelyekben mások segítenek, úgy vannak olyan feladatok is, amelyeket nem embereknek kell csinálnia. A robotok a barátaid. Használd őket, hogy megkönnyítsd az életét karbantartóknak.

### Szükség van tesztekre és egyéb ellenőrzésekre a kód minőségének javítása érdekében

A projekt automatizálásának egyik legfontosabb módja a tesztek hozzáadása.

A tesztek segítenek a közreműködőknek, hogy biztosak legyenek abban, hogy semmit sem rontanak el. Ezenkívül megkönnyítik az észrevételek gyors áttekintését és elfogadását. Minél jobban és gyorsabban reagálsz, annál elkötelezettebbé válhat a közösség.

Állíts be automatikus teszteket, amelyek az összes bejövő hozzájárulásra futnak, és győződj meg arról, hogy a teszteket a közreműködők könnyen, a saját gépeiken is futtathatják. Mielőtt beküldenék a hozzájárulásokat, követeld meg, hogy az összes kódminőségi követelményt teljesítse, minden teszten átmenjen. Itt egy segítség a minimális minőségi követelmények megkövetelésére: [Kötelező ellenőrzések](https://help.github.com/articles/about-required-status-checks/), a GitHub segít abban, hogy ellenőrzés nélkül a hozzájárulás ne kerüljön beolvasztásra.

Ha teszteket adsz hozzá, akkor bizonyosodj meg arról, hogy elmagyaráztad azt a CONTRIBUTING.md fájlban, hogy hogyan működnek.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">
  Úgy gondolom, hogy tesztek szükségesek minden olyan kódhoz, amelyen az emberek dolgoznak. Ha a kód teljesen és tökéletesen helyes volt, akkor nem lenne szükség változtatásokra - csak akkor írunk kódot, ha valami nincs rendben, legyen az összeomlás vagy hiányzó funkció. És függetlenül attól, hogy milyen változtatásokat hajtunk végre, a tesztek elengedhetetlenek a véletlenszerűen bevezetett regressziós hibák kivédésében.
  <p markdown="1" class="pquote-credit">
— @edunham, ["A Rust közösségi automatizálása"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Használj eszközöket az alapvető karbantartási feladatok automatizálásához

A jó hír egy népszerű projekt fenntartásához az, hogy más karbantartók valószínűleg hasonló problémákkal már szembesültek és megoldást találtak rá.

[Számos eszköz elérhető](https://github.com/showcases/tools-for-open-source) amelyek a karbantartók munkájának különböző részeit automatizálják. Néhány példa:

* [semantic-release](https://github.com/semantic-release/semantic-release) automatizálja a release-elést
* [mention-bot](https://github.com/facebook/mention-bot) a beolvasztási kérelemben megemlíti automatikusan a lehetséges embereket, akik a kódot majd átnézik (kód review)
* [Danger](https://github.com/danger/danger) segít automatizálni a kód review-t
* [no-response](https://github.com/probot/no-response) lezárja azokat az issue-kat, amelyekben az issue szerzője nem válaszolt a további információkérésre
* [dependabot-preview](https://github.com/marketplace/dependabot-preview) minden nap ellenőrzi a függőségeket, ha talál frissebb verziót, akkor automatikusan beolvasztási kérelmet készít az új verzió számmal

A hiba jelzésekhez és más általános hozzájárulásokhoz a GitHub biztosít egy [hiba jelzés és beolvasztási kérelem formanyomtatványt](https://github.com/blog/2111-issue-and-pull-request-templates), amellyel egyszerűsíteni és egységesíteni tudod ezek beadását. @TalAter készített egy [Választásos Kalandjátékot](https://www.talater.com/open-source-templates/#/) hogy segítse ezen formanyomtatványok elkészítését.

Az email értesítések kezeléséhez be tudod állítani az [email szűrőket](https://github.com/blog/2203-email-updates-about-your-own-activity) amellyel a prioritás megadható.

Ha még jobban akarod csinálni, akkor a stílus útmutatók és linterek segítenek abban, hogy a hozzájárulások könnyebben áttekinthetőbbek és beolvaszthatók legyenek.

Ellenben, ha a szabályok túl komplikáltak, akkor akadályozzák a hozzájárulást a projekthez. Figyelj arra, hogy annyi szabályt adj hozzá, amely feltétlenül szükséges ahhoz, hogy mindenkinek könnyebb legyen az élete.

Ha nem vagy biztos abban milyen eszközt kellene használnod, akkor nézz meg más, ismert projekteket, különösen a te ökoszisztémádhoz tartozók közül. Például megnézheted, hogy hogyan néz ki egy hozzájárulási folyamat más Node modulok esetén? Hasonló eszközök és megközelítések alkalmazása segít abban, hogy a folyamatod a hozzájárulók számára már ismert legyen.

## Teljesen rendben van, ha szünetet tartasz

Eddig a nyílt forráskódú munka örömet okozott neked, de lehet hogy most már túlterhel téged, ami miatt kerülöd, és emiatt bűntudatod van.

Lehet, hogy túlterheltnek érzed magad, vagy szorongást okoz, amikor a projektjeidre gondolsz, és mindeközben a hibajelzések és a beolvasztási kérelmek felhalmozódnak.

A kiégés létező és széles körben ismert probléma a nyílt forráskódú munkákban, különösen a karbantartók körében. Karbantartóként a megelégedettséged megkérdőjelezhetetlen követelmény a nyílt forráskódú projekted fennmaradásához.

Magától értetődik, hogy szükség van pihenésre! Nem szabad elodázni a pihenést addig, amíg kiégsz. Például @brettcannon, a Python fejlesztője úgy döntött, hogy [egy hónapos vakációt vesz ki](https://snarky.ca/why-i-took-october-off-from-oss-volunteering/) 14 éve folyamatosan tartó, önkéntes OSS munka után.

Mint minden más munka esetén a rendszeres pihenők tartása felfrissít, boldogabbá teszt és fokozza a munkád iránti vágyadat.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">
  A WP-CLI fenntartása során felfedeztem, hogy előbb boldoggá kell tennem magam, és egyértelmű határokat kell meghúznom. A legjobb egyensúlyt számomra a hetente 2-5 óra biztosította, a normál munkám részeként. Ez megőrzi a szenvedélyemet és nem érzem azt, hogy túl sokat dolgoztam volna. Mivel priorizálom a munkákat amelyeken dolgozom, így normálisan haladok a véleményem szerint legfontosabb dolgokkal.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["Fogadd részvétem, mert Te most egy népszerű, nyílt forráskódú projekt karbantartója lettél"](https://danielbachhuber.com/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

Gyakran úgy érzed nehéz pihenőt tartani, mert mindenki téged akar. Vannak akik bűntudatot éreznek, ha pihenni mennek.

Próbáld kialakítani azt, hogy a legjobb legyen a felhasználóknak és a közösségnek, amikor távol vagy a projekttől. Ha nem találod meg a támogatást ehhez, akkor is tarts szünetet. Határozottan és biztosan kommunikáld azt, amikor nem vagy elérhető, nehogy az emberek összekeverjék azzal, hogy nem szándékosan válaszolsz nekik, vagy nem vagy reszponzív.

A szünetek nemcsak a vakációk idejére vonatkoznak. Ha nem akarsz hétvégén, vagy munkaidőben nyílt forráskódú munkát végezni, kommunikáld ezt mások felé, így tudni fogják, hogy ne zavarjanak ezen idő alatt téged.

## Legfontosabb, hogy vigyázz magadra!

A népszerű projekt fenntartása más készségeket igényel később, mint a projekt elején. Karbantartóként vezetői és személyes készségeket gyakorolsz majd olyan szinten, amelyet kevés ember tapasztal meg. Noha ezt nem mindig könnyű kezelni, az egyértelmű határok meghatározása, és csak olyan dolgok elvégzése ami számodra is elfogadható, segítenek abban, hogy boldog, kipihent és produktív maradj.
