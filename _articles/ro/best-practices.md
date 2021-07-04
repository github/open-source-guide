---
lang: ro
title: Cele mai bune practici pentru întreținători
description: Ușurarea vieții tale în calitate de întreținător open source, de la documentarea proceselor la mobilizarea comunității
class: best-practices
toc:
  what-does-it-mean-to-be-a-maintainer: "Ce înseamnă să fii un întreținător?"
  documenting-your-processes: "Documentarea proceselor tale"
  learning-to-say-no: "Învățând să spui „nu”"
  leverage-your-community: "Mobilizarea comunității tale"
  bring-in-the-robots: "Cheamă roboții"
  its-okay-to-hit-pause: "Este OK să apeși pauză"
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## Ce înseamnă să fii un întreținător?

Dacă întreții un proiect cu sursă deschisă pe care mulți oameni îl folosesc, poate ai observat că programezi mai puțin și răspunzi la probleme mai mult.

În primele etape ale unui proiect, experimentezi cu idei noi și decizi bazat pe ce vrei tu. Pe măsură ce proiectul crește în popularitate, te vei afla lucrând cu utilizatorii și contributorii tăi mai mult.

Întreținerea unui proiect necesită mai mult decât cod. Aceste sarcini sunt deseori neașteptate, dar ele sunt exact la fel de importante pentru un proiect în creștere. Am adunat câteva metode pentru a-ți ușura viața, de la documentarea proceselor la mobilizarea comunității tale.

## Documentarea proceselor tale

Notarea lucrurilor este unul dintre cele mai importante lucruri pe care le poți face în calitate de întreținător.

Documentația nu doar clarifică propria ta gândire, ci și ajută alți oameni să înțeleagă de ce ai nevoie sau ce aștepți, chiar înainte ca ei să întrebe.

Notând lucruri face mai ușor să spui „nu” când ceva nu se încadrează în domeniul tău. De asemenea face mai ușor pentru oameni să pășească înăuntru și să ajute. Nu știi niciodată cine ar putea citi sau folosi proiectul tău.

Chiar dacă nu folosești paragrafe complete, notarea bulinelor este mai bună decât să nu scrii nimic.

Ține minte să-ți păstrezi documentația actualizată. Dacă nu ești capabil să faci asta mereu, șterge documentația ta expirată sau indică faptul că este expirată astfel încât contributorii să știe că actualizările sunt binevenite.

### Notează viziunea proiectului tău

Începe prin a scrie scopurile proiectului tău. Adaugă-le la README-ul tău, sau creează un fișier separat numit VISION. Dacă există alte artefacte care ar putea ajuta, cum ar fi o foaie de parcurs a proiectului, fă-le publice și pe acestea.

A avea o viziune clară, documentată te ține concentrat și te ajută să eviți „deriva obiectivelor” din cauza contribuțiilor altora.

De exemplu, @lord a descoperit că având o viziune a proiectului l-a ajutat să-și dea seama pe care cereri să-și petreacă timpul. În calitate de nou întreținător, el a regretat că nu s-a lipit de scopul proiectului lui când a primit prima lui cerere de facilitate pentru [Slate](https://github.com/lord/slate).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Am fumat-o. Nu am acordat efortul pentru a veni cu o soluție completă. În schimbul unei soluții neadecvate, îmi doresc să fi spus „Nu am timp pentru aceasta chiar acum, dar o să o adaug la lista pe termen lung de lucruri drăguțe de făcut.”
  </p>
  <p>
    <em>
      I fumbled it. I didn't put in the effort to come up with a complete solution. Instead of an half-assed solution, I wish I had said "I don't have time for this right now, but I'll add it to the long term nice-to-have list."
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @lord, ["Tips for new open source maintainers"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Comunică-ți așteptările

Regulile pot fi enervante când le scrii. Câteodată te-ai putea simți ca și cum faci politică pentru comportamentul altor oameni sau distrugi toată distracția.

Scrise și impuse corect, totuși, regulile bune împuternicesc întreținătorii. Ele te previn din a fi târât în a face lucruri pe care nu vrei să le faci.

Cei mai mulți oameni care ajung la proiectul tău nu știu nimic despre tine sau despre circumstanțele tale. Ei pot presupune că ești plătit să lucrezi pe el, în special dacă este ceva pe care ei îl folosesc în mod obișnuit și de care depind. Poate într-un punct tu depui mult timp în proiectul tău, dar acum ești ocupat cu un nou loc de muncă sau membru de familie.

Toate acestea sunt perfect OK! Doar asigură-te că ceilalți știu despre acestea.

Dacă întreținerea proiectului tău este part-time sau pur voluntară, fii sincer în legătură cu cât de mult timp ai. Acesta nu este același cu cât timp crezi tu că proiectul necesită, sau cât timp alții vor să cheltui tu.

Iată câteva reguli care merită notate:

* Cum o contribuție este analizată și acceptată (_Au nevoie de teste? Un șablon pentru probleme?_)
* Tipurile de contribuții pe care le vei accepta (_Vrei ajutor doar la o anumită parte a codului tău?_)
* Când este potrivit să răspundă (_de exemplu, „Puteți aștepta un răspuns de la un întreținător în 7 zile. Dacă nu ați auzit nimic până atunci, simțiți-vă liberi să bâzâiți firul de discuție.”_)
* Cât de mult timp cheltui pe proiect (_de exemplu, „Cheltuim doar aproximativ 5 ore pe săptămână pe acest proiect”_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), și [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) sunt câteva exemple de proiecte cu reguli de bază pentru întreținători și contributori.

### Păstrează comunicarea publică

Nu uita să documentezi interacțiunile tale, de asemenea. Oriunde poți, păstrează comunicarea despre proiectul tău publică. Dacă cineva încearcă să te contacteze în privat să discutați despre o cerere de facilitate sau o nevoie de asistență, direcționează-l politicos către un canal de comunicare public, cum ar fi o listă de email-uri sau un urmăritor de probleme.

Dacă te întâlnești cu alți întreținători, sau faci o decizie majoră în privat, documentează aceste conversații în public, chiar dacă înseamnă doar postarea notițelor tale.

În acest mod, oricine se alătură comunității tale va avea acces la aceleași informații ca cineva care a fost acolo de ani de zile.

## Învățând să spui „nu”

Ai notat lucruri. În mod normal, toată lumea ți-ar citi documentația, dar în realitate, va trebui să reamintești celorlalți că aceste cunoștințe există.

Având totul scris, totuși, ajută la depersonalizarea situațiilor când trebuie să-ți impui regulile.

A spune „nu” nu este distractiv, dar _„Contribuția ta nu se potrivește cu criteriile acestui proiect”_ se simte mai puțin personal decât _„Nu-mi place contribuția ta”_.

A spune „nu” se aplică la multe situații peste care vei da în calitate de întreținător: cereri de facilități care nu se încadrează în domeniu, cineva care deraiază o discuție, făcând muncă nefolositoare pentru alții.

### Păstrează conversația prietenoasă

Unul dintre cele mai importante locuri unde vei practica spunerea de nu este asupra cozii tale de probleme și cereri de pull. În calitate de întreținător de proiect, vei primi inevitabil sugestii pe care nu dorești să le accepți.

Poate contribuția schimbă domeniul proiectului tău sau nu se potrivește cu viziunea ta. Poate ideea este bună, dar implementarea este slabă.

Indiferent de motiv, este posibil să gestionezi cu mult tact contribuțiile care nu se ridică la standardele proiectului tău.

Dacă primești o contribuție pe care nu vrei să o accepți, prima ta reacție ar putea fi să o ignori sau să pretinzi că nu ai văzut-o. Făcând astfel ar putea răni sentimentele celeilalte persoane și chiar să demotiveze alți potențiali contributori din comunitatea ta.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Cheia pentru a gestiona asistența pentru proiecte cu sursă deschisă la scară mare este să ții problemele în mișcare. Încearcă să eviți a avea probleme în stagnare. Dacă ești un dezvoltator iOS știi cât de frustrant poate fi să trimiți radare. Ai putea primi răspuns 2 ani mai târziu, și ți se spune să încerci din nou cu ultima versiune iOS.
  </p>
  <p>
    <em>
      The key to handle support for large-scale open source projects is to keep issues moving. Try to avoid having issues stall. If you're an iOS developer you know how frustrating it can be to submit radars. You might hear back 2 years later, and are told to try again with the latest version of iOS.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Scaling open source communities"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

Nu lăsa o contribuție nedorită deschisă pentru că te simți vinovat sau dorești să fii drăguț. În timp, problemele la care nu s-a răspuns și PR-urile vor face lucrul pe proiectul tău să se simtă cu foarte mult mai stresant și mai intimidant.

Este mai bine să închizi imediat contribuțiile pe care știi că nu vrei să le accepți. Dacă proiectul tău suferă deja de restanțe mari, @steveklabnik are sugestii pentru [cum să triezi problemele eficient](https://words.steveklabnik.com/how-to-be-an-open-source-gardener).

În al doilea rând, ignorarea contribuțiilor trimite un semnal negativ către comunitatea ta. A contribui la un proiect poate fi intimidant, în special pentru prima dată. Chiar dacă nu accepți contribuția, consideră persoana din spatele ei și mulțumește-i pentru interes. Este un mare compliment!

Dacă nu dorești să accepți o contribuție:

* **Mulțumește-i** pentru contribuția ei
* **Explică de ce nu se încadrează** în domeniul proiectului, și oferă sugestii clare de îmbunătățire, dacă poți. Fii bun, dar ferm.
* **Leagă către documentația relevantă**, dacă o ai. Dacă observi cereri repetate de lucruri pe care nu vrei să le accepți, adaugă-le în documentația ta pentru a evita să te repeți.
* **Închide cererea**

Nu ar trebui să ai nevoie de mai mult de 1-2 enunțuri pentru a răspunde. De exemplu, când un utilizator al [celery](https://github.com/celery/celery/) a raportat o eroare legată de Windows, @berkerpeksag [a răspuns cu](https://github.com/celery/celery/issues/3383):

![captură de ecran Celery](/assets/images/best-practices/celery.png)

Dacă gândul de a spune „nu” te îngrozește, nu ești singur. După cum @jessfraz [a spus](https://blog.jessfraz.com/post/the-art-of-closing/):

> Am discutat cu întreținători din câteva proiecte diferite cu sursă deschisă, Mesos, Kubernetes, Chromium, și ei toți cad de acord că una dintre cele mai grele părți de a fi un întreținător este să spui „Nu” la patch-uri pe care nu le vrei.
> 
> I've talked to maintainers from several different open source projects, Mesos, Kubernetes, Chromium, and they all agree one of the hardest parts of being a maintainer is saying "No" to patches you don't want.

Nu te simți vinovat în legătură cu a nu vrea să accepți contribuția cuiva. Prima regulă a open source, [după](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"Nu este temporar, da este pentru totdeauna.”_ În timp ce a empatiza cu entuziasmul altei persoane este un lucru bun, a respinge o contribuție nu este același lucru cu a respinge persoana din spatele ei.

În cele din urmă, dacă o contribuție nu este destul de bună, nu ai nicio obligație să o accepți. Fii amabil și sensibil când oameni contribuie la proiectul tău, dar acceptă doar schimbări despre care chiar crezi că vor face proiectul tău mai bun. Cu cât mai des practici a spune „nu”, cu atât devine mai ușor. Promit.

### Fii proactiv

Pentru a reduce în primul rând volumul de contribuții nedorite, explică procesul proiectului tău pentru trimiterea și acceptarea contribuțiilor în ghidul tău de contribuire.

Dacă tu primești prea multe contribuții de calitate slabă, cere contributorilor să facă puțină muncă înainte, de exemplu:

* Completează un șablon sau o listă de verificare, la o problemă sau un PR
* Deschide o problemă înainte de a trimite un PR

Dacă ei nu îți urmează regulile, închide problema imediat și fă trimitere către documentația ta.

În timp ce această abordare se poate simți necuviincioasă la început, fiind proactiv este de fapt bine pentru ambele părți. Aceasta reduce șansele ca cineva să pună multe ore pierdute de muncă într-o cerere de pull pe care nu o vei accepta. Și îți face volumul de muncă mai ușor de gestionat.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  <p>
    În mod ideal, explică-le direct și într-un fișier CONTRIBUTING.md cum pot obține în viitor o indicație mai bună despre ce ar fi sau nu ar fi acceptat înainte ca ei să înceapă munca.
  </p>
  <p>
    <em>
      Ideally, explain to them and in a CONTRIBUTING.md file how they can get a better indication in the future on what would or would not be accepted before they begin the work.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["Kindly Closing Pull Requests"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

Uneori, când spui „nu”, contributorul tău potențial ar putea să se supere sau să-ți critice decizia. Dacă comportamentul lui devine ostil, [ia măsuri să dezamorsezi situația](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) sau chiar să-l înlături din comunitatea ta, dacă nu dorește să colaboreze constructiv.

### Îmbrățișează mentoratul

Poate cineva din comunitatea ta trimite în mod regulat contribuții care nu respectă standardele proiectului tău. Poate fi frustrant pentru ambele părți să treacă în mod repetat prin respingeri.

Dacă vezi că cineva este entuziast în legătură cu proiectul tău, dar are nevoie de un pic de finisare, fii răbdător. Explică în mod clar în fiecare situație de ce contribuția lui nu respectă așteptările proiectului. Încearcă să-l trimiți la o sarcină mai ușoară sau mai puțin ambiguă, cum ar fi o problemă marcată _„good first issue,”_ pentru a-l obișnui cu situații noi. Dacă ai timp, consideră să-l mentorezi prin prima lor contribuție, sau găsește pe altcineva din comunitatea ta care ar putea fi doritor să-l mentoreze.

## Mobilizarea comunității tale

Nu trebuie să faci totul de unul singur. Comunitatea proiectului tău există cu un motiv! Chiar dacă nu ai încă o comunitate activă de contributori, dacă ai mulți utilizatori, pune-i la muncă.

### Împarte volumul de muncă

Dacă ești în căutarea altora să pășească înăuntru, începe prin a întreba prin jur.

Când vezi contributori noi făcând contribuții repetate, recunoaște munca lor oferind mai multă responsabilitate. Documentează cum pot alții crește în roluri de conducere dacă doresc.

Încurajându-i pe alții să [împartă proprietatea proiectului](../building-community/#împarte-proprietatea-proiectului-tău) poate reduce foarte mult propriul tău volum de muncă, după cum @lmccart a descoperit pe proiectul ei, [p5.js](https://github.com/processing/p5.js).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Spuneam „Da, oricine poate fi implicat, nu trebuie să ai multă expertiză cu programarea [...].” Am avut oameni semnând să vină [la un eveniment] și atunci a fost când mă întrebam cu adevărat: este aceasta adevărat, ceea ce spuneam? Vor fi aproape 40 de oameni care vin, și nu este ca și cum aș putea sta cu fiecare dintre ei...Dar oamenii au venit împreună, și chiar a funcționat cumva. De îndată ce o persoana a reușit, ea și-a putut învăța aproapele.
  </p>
  <p>
    <em>
      I’d been saying, "Yeah, anyone can be involved, you don’t have to have a lot of coding expertise [...]." We had people sign up to come [to an event] and that’s when I was really wondering: is this true, what I’ve been saying? There are gonna be 40 people who show up, and it’s not like I can sit with each of them...But people came together, and it just sort of worked. As soon as one person got it, they could teach their neighbor.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["What Does "Open Source" Even Mean? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39)
  </p>
</aside>

Dacă trebuie să renunți la proiectul tău, fie ca pauză sau permanent, nu este nicio rușine în a cere altcuiva să-l preia pentru tine.

Dacă alți oameni sunt entuziaști în legătură cu direcția lui, dă-le permisiunea de a face commit sau predă controlul în mod formal altcuiva. Dacă cineva a bifurcat proiectul tău și îl menține activ altundeva, consideră legarea către copie din proiectul tău original. Este minunat că atât de mulți oameni vor ca proiectul tău să trăiască!

@progrium [a găsit că](https://web.archive.org/web/20151204215958/https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) documentarea viziunii pentru proiectul său, [Dokku](https://github.com/dokku/dokku), a ajutat aceste scopuri să trăiască mai departe chiar și după ce el a ieșit din proiect:

> Am scris o pagină de wiki descriind ce îmi doream și de ce îmi doream acele lucruri. Din anumite motive a venit ca o surpriză că întreținătorii au început să miște proiectul în acea direcție! S-a întâmplat exact cum aș fi făcut-o eu? Nu întotdeauna. Dar totuși a adus proiectul mai aproape de ceea ce scrisesem.
> 
> I wrote a wiki page describing what I wanted and why I wanted it. For some reason it came as a surprise to me that the maintainers started moving the project in that direction! Did it happen exactly how I'd do it? Not always. But it still brought the project closer to what I wrote down.

### Lasă-i pe ceilalți să construiască soluțiile de care au nevoie

Dacă un contributor potențial are o părere diferită despre ce ar trebui să facă proiectul tău, poate ai vrea să îl încurajezi cu blândețe să lucreze pe propria lui copie.

Copierea proiectului nu trebuie să fie un lucru rău. Fiind capabil să copiezi și să modifici proiectele este unul dintre cele mai bune lucruri despre open source. Încurajând membrii comunității tale să lucreze pe propria lor copie poate furniza ieșirea creativă de care ei au nevoie, fără să intre în conflict cu viziunea proiectului tău.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Satisfac cazul de utilizare de 80%. Dacă ești unul dintre „unicorni”, te rog bifurcă munca mea. Nu mă voi simți jignit! Proiectele mele publice sunt aproape întotdeauna menite să rezolve cele mai comune probleme; eu încerc să fac mai ușor să ajungi mai adânc fie prin bifurcarea muncii mele sau prin extinderea ei.
  </p>
  <p>
    <em>
      I cater to the 80% use case. If you are one of the unicorns, please fork my work. I won't get offended! My public projects are almost always meant to solve the most common problems; I try to make it easy to go deeper by either forking my work or extending it.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Why I Close PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

Același lucru se aplică unui utilizator care chiar dorește o soluție pentru care pur și simplu nu ai lățimea de bandă să o construiești. A oferi API-uri și cârlige de personalizare poate să-i ajute pe alții să-și satisfacă nevoile lor, fără să trebuiască să modifice sursa direct. @orta [a găsit că](https://artsy.github.io/blog/2016/07/03/handling-big-projects/) încurajarea plugin-urilor pentru CocoaPods a dus la „unele dintre cele mai interesante idei":

> Este aproape inevitabil ca odată ce un proiect devine mare, întreținătorii să trebuiască să devină tot mai conservatori în legătură cu felul în care ei introduc cod nou. Devii bun la a spune „nu”, dar o mulțime de oameni au nevoi legitime. Astfel, în schimb sfârșești prin a-ți transforma unealta într-o platformă.
> 
> It's almost inevitable that once a project becomes big, maintainers have to become a lot more conservative about how they introduce new code. You become good at saying "no", but a lot of people have legitimate needs. So, instead you end up converting your tool into a platform.

## Cheamă roboții

Exact cum există sarcini cu care alți oameni te pot ajuta, există de asemenea sarcini pe care niciun om nu ar trebui să le îndeplinească vreodată. Roboții sunt prietenii tăi. Folosește-i pentru a-ți face viața în calitate de întreținător mai ușoară.

### Cere teste și alte verificări pentru a îmbunătăți calitatea codului tău

Una dintre cele mai importante căi prin care poți să-ți automatizezi proiectul este adăugarea de teste.

Testele îi fac pe contributori să se simtă încrezători că ei nu strică nimic. Ele de asemenea îți ușurează analizarea și acceptarea rapidă a contribuțiilor. Cu cât ești mai receptiv, cu atât comunitatea ta poate fi mai angajată.

Configurează teste automate care vor rula pe toate contribuțiile ce vin, și asigură-te că testele pot fi ușor rulate local de contributori. Cere ca toate contribuțiile să treacă testele tale înainte de a putea fi trimise. Vei ajuta la stabilirea unui standard minim de calitate pentru toate trimiterile. [Cererile de verificare de stare](https://help.github.com/articles/about-required-status-checks/) pe GitHub pot asigura că nicio schimbare nu este îmbinată fără să treacă testele tale.

Dacă adaugi teste, asigură-te că explici cum funcționează în fișierul tău CONTRIBUTING.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Cred că testele sunt necesare pentru tot codul pe care oamenii lucrează. Dacă codul a fost complet și perfect corect, nu ar avea nevoie de schimbări – noi scriem cod doar când ceva este greșit, fie că aceasta este „Se blochează” sau „Îi lipsește o astfel de facilitate”. Și indiferent de schimbările pe care le faci, testele sunt esențiale pentru prinderea oricărei regresii pe care ai putea-o introduce accidental.
  </p>
  <p>
    <em>
      I believe that tests are necessary for all code that people work on. If the code was fully and perfectly correct, it wouldn't need changes – we only write code when something is wrong, whether that's "It crashes" or "It lacks such-and-such a feature". And regardless of the changes you're making, tests are essential for catching any regressions you might accidentally introduce.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust's Community Automation"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Folosește unelte pentru a automatiza sarcini de bază de întreținere

Vestea bună despre menținerea unui proiect popular este că alți întreținători probabil au întâmpinat probleme asemănatoare și au construit o soluție pentru ele.

Există o [varietate de unelte disponibile](https://github.com/showcases/tools-for-open-source) pentru a ajuta la automatizarea unor aspecte ale muncii de întreținere. Câteva exemple:

* [semantic-release](https://github.com/semantic-release/semantic-release) automatizează lansările tale
* [mention-bot](https://github.com/facebook/mention-bot) menționează examinatori potențiali pentru cererile de pull
* [Danger](https://github.com/danger/danger) ajută la automatizarea examinării codului

Pentru rapoartele de bug-uri și alte contribuții obișnuite, GitHub are [Șabloane de probleme și șabloane de cereri de pull](https://github.com/blog/2111-issue-and-pull-request-templates), pe care le poți crea pentru a simplifica informațiile pe care le primești. @TalAter a făcut un [ghid Alege-ți propria aventură](https://www.talater.com/open-source-templates/#/) pentru a te ajuta să-ți scrii șabloanele de probleme și de PR-uri.

Pentru a gestiona notificările tale prin email, poți seta [filtre de email](https://github.com/blog/2203-email-updates-about-your-own-activity) pentru a organiza după prioritate.

Dacă vrei să devii puțin mai avansat, ghidurile de stil și linteri pot standardiza contribuțiile proiectului și să le facă mai ușor de examinat și acceptat.

Totuși, dacă standardele sunt prea complicate, ele pot crește barierele în calea contribuției. Asigură-te că adaugi doar destule reguli încât să faci viețile tuturor mai ușoare.

Dacă nu ești sigur ce unelte să folosești, privește la ce fac alte proiecte populare, în special cele din ecosistemul tău. De exemplu, cum arată procesul de contribuție pentru alte module Node? Folosind unelte și abordări asemănătoare va face procesul tău mai familiar pentru contributorii tăi țintă.

## Este OK să apeși pauză

Munca pe sursă deschisă ți-a adus odată bucurie. Poate acum începe să te facă să te simți evitant sau vinovat.

Poate te simți copleșit sau simți un sentiment în creștere de groază când te gândești la proiectele tale. Și între timp, problemele și cererile de pull se adună.

Burnout-ul este o problemă reală și universală în munca pe sursă deschisă, în special în rândul întreținătorilor. În calitate de întreținător, fericirea ta este o cerință nenegociabilă pentru supraviețuirea oricărui proiect cu sursă deschisă.

Cu toate că ar trebui să meargă fără să se spună, fă o pauză! Nu ar trebui să aștepți până te simți extenuat pentru a-ți lua o vacanță. @brettcannon, un dezvoltator din inima Python, a decis să-și ia [o vacanță de o lună de zile](https://snarky.ca/why-i-took-october-off-from-oss-volunteering/) după 14 ani de muncă voluntară pe OSS.

Exact la fel ca oricare alt fel de muncă, luarea de pauze dese te va păstra revigorat, fericit, și încântat de munca ta.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">
  <p>
    În întreținerea WP-CLI, am descoperit că am nevoie să mă fac fericit pe mine mai întâi, și să stabilesc limite clare ale implicării mele. Cel mai bun echilibru pe care l-am găsit este de 2-5 ore pe săptămână, ca parte din programul meu normal de muncă. Acest lucru îmi păstrează implicarea o pasiune, și departe de a simți prea mult ca muncă. Deoarece prioritizez problemele la care lucrez, pot face progres în mod obișnuit pe ce cred că este cel mai important.
  </p>
  <p>
    <em>
      In maintaining WP-CLI, I've discovered I need to make myself happy first, and set clear boundaries on my involvement. The best balance I've found is 2-5 hours per week, as a part of my normal work schedule. This keeps my involvement a passion, and from feeling too much like work. Because I prioritize the issues I'm working on, I can make regular progress on what I think is most important.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["My condolences, you're now the maintainer of a popular open source project"](https://danielbachhuber.com/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

Câteodată, poate fi greu să faci o pauză de la muncă pe sursă deschisă când simți ca și cum toți au nevoie de tine. Oamenii ar putea chiar să încerce să te facă să te simți vinovat pentru că te retragi.

Fă tot posibilul să găsești asistență pentru utilizatorii și comunitatea ta cât timp ești departe de un proiect. Dacă nu poți obține asistența de care ai nevoie, fă o pauză oricum. Asigură-te să comunici când nu ești disponibil, astfel încât oamenii nu sunt confuzionați de lipsa ta de reacție.

Luarea de pauze se aplică la mai mult decât doar vacanțe, de asemenea. Dacă nu dorești să faci muncă pe sursă deschisă în sfârșiturile de săptămână, sau în timpul orelor de lucru, comunică aceste așteptări celorlalți, astfel încât ei știu să nu te deranjeze.

## Ai grijă de tine mai întâi!

Întreținerea unui proiect popular cere abilități diferite față de stadiile anterioare ale creșterii, dar nu este mai puțin recompensant. În calitate de întreținător, vei practica abilități de conducere și personale la un nivel pe care puțini oameni ajung să-l experimenteze. Cu toate că nu este ușor întotdeauna să gestionezi, stabilirea de limite clare și asumarea doar a lucrurilor cu care te simți confortabil te va ajuta să rămâi fericit, revigorat, și productiv.
