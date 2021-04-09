---
lang: ro
title: Pornind un proiect cu sursă deschisă
description: Învață mai multe despre lumea open source și pregătește-te să-ți lansezi primul proiect.
class: beginners
toc:
  the-what-and-why-of-open-source: "„Care”-urile și „de ce”-urile open source"
  should-i-launch-my-own-open-source-project: "Ar trebui să-mi lansez propriul meu proiect cu sursă deschisă?"
  launching-your-own-open-source-project: "Lansându-ți propriul tău proiect cu sursă deschisă"
  naming-and-branding-your-project: "Numirea și marcarea proiectului tău"
  your-pre-launch-checklist: "Lista ta de verificări înainte de lansare"
order: 2
image: /assets/images/cards/beginner.png
related:
  - finding
  - building
---

## „Care”-urile și „de ce”-urile open source

Deci te gândești la a începe cu open source? Felicitări! Lumea îți apreciază contribuția. Haide să discutăm despre ce este open source și de ce oamenii fac asta.

### Ce înseamnă „open source”?

Când un proiect este cu sursă deschisă, aceasta înseamnă că **oricine poate vizualiza, utiliza, modifica și distribui proiectul tău în orice scop.** Aceste permisiuni sunt impuse printr-o [licență open source](https://opensource.org/licenses).

Open source este puternic deoarece coboară barierele în calea adoptării, permițând ideilor să se răspândească repede.

Pentru a înțelege cum funcționează, imaginează-ți că prietenul tău la cină are ghiveci, și tu aduci o plăcintă cu cireșe.

* Toată lumea încearcă plăcinta (_folosește_)
* Plăcinta este un hit! Ei îți cer rețeta, pe care o furnizezi (_vizualizează_)
* Un prieten, Alex, care este un bucătar de patiserie, sugerează reducerea zahărului (_modifică_)
* Un alt prieten, Lisa, cere să o folosească pentru o cină săptămâna viitoare (_distribuie_)

Prin comparație, într-un proces cu sursă închisă mergi la un restaurant și comanzi o felie de plăcintă cu cireșe. Trebuie să plătești o taxă pentru a mânca plăcinta, și restaurantul probabil nu-ți va da rețeta lui. Dacă ai copia plăcinta lui exact și ai vinde-o cu un nume al tău, restaurantul ar putea lua măsuri împotriva ta.

### De ce oamenii deschid sursa muncii lor?

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kentcdodds?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Cele mai recompensante experiențe pe care le scot din folosirea și colaborarea pe open source vin din relațiile pe care le construiesc cu alți dezvoltatori care fac față la multe din aceleași probleme pe care le întâmpin eu.
  </p>
  <p>
    <em>
      One of the most rewarding experiences I get out of using and collaborating on open source comes from the relationships that I build with other developers facing many of the same problems I am.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @kentcdodds, ["How getting into Open Source has been awesome for me"](https://kentcdodds.com/blog/how-getting-into-open-source-has-been-awesome-for-me)
  </p>
</aside>

[Există numeroase motive](https://ben.balter.com/2015/11/23/why-open-source/) pentru care o persoană sau o organizație ar dori să deschidă sursa unui proiect. Exemplele includ:

* **Colaborarea:** Proiectele cu sursă deschisă pot accepta schimbări de la oricine din lume. [Exercism](https://github.com/exercism/), de exemplu, este o platformă de exerciții de programare cu peste 350 de contributori.

* **Adoptarea și remixarea:** Proiectele cu sursă deschisă pot fi folosite de oricine pentru aproape orice scop. Oamenii le pot folosi chiar și pentru a construi alte lucruri. [WordPress](https://github.com/WordPress), de exemplu, a început ca o bifurcație a unui proiect existent numit [b2](https://github.com/WordPress/book/blob/HEAD/Content/Part%201/2-b2-cafelog.md).

* **Transparența:** Oricine poate inspecta un proiect cu sursă deschisă pentru erori sau neconcordanțe. Transparența contează pentru guverne, cum ar fi [Bulgaria](https://medium.com/@bozhobg/bulgaria-got-a-law-requiring-open-source-98bf626cf70a) sau [Statele Unite](https://sourcecode.cio.gov/), industrii reglementate cum ar fi sectorul bancar sau asistența medicală, și software-uri de securitate cum ar fi [Let's Encrypt](https://github.com/letsencrypt).

Open source nici nu este doar pentru software. Poți deschide sursa a orice de la seturi de date la cărți. Aruncă o privire la [GitHub Explore](https://github.com/explore) pentru idei despre sursa a ce altceva poți deschide.

### Cu sursă deschisă înseamnă „gratuit”?

Una dintre cele mai mari remize ale open source este că nu costă bani. Cu toate acestea, „gratuit” este un produs secundar al valorii totale a open source.

Deoarece [o licență de sursă deschisă cere](https://opensource.org/osd-annotated) ca oricine să poată folosi, modifica, și distribui proiectul tău pentru aproape orice scop, proiectele însele tind să fie gratuite. Dacă un proiect costă bani pentru a fi folosit, oricine ar putea face o copie în mod legal și să folosească versiunea gratuită în loc.

Ca rezultat, cele mai multe proiecte cu sursă deschisă sunt gratuite, dar „gratuit” nu este parte din definiția open source. Există căi de a taxa pentru proiecte cu sursă deschisă indirect prin licențiere duală sau facilități limitate, în timp ce încă respectă definiția oficială a sursei deschise.

## Ar trebui să-mi lansez propriul meu proiect cu sursă deschisă?

Răspunsul scurt este da, deoarece indiferent de rezultat, lansarea propriului tău proiect este o modalitate excelentă de a învăța cum open source lucrează.

Dacă nu ai deschis sursa niciunui proiect înainte, ai putea fi stresat de ce oamenii vor spune, sau dacă măcar cineva va observa. Dacă aceasta sună ca tine, nu ești singur!

Munca pe sursă deschisă este ca oricare altă activitate creativă, fie că este scriere sau pictură. Poate părea înfricoșător să împarți munca ta cu lumea, dar singura cale de a deveni mai bun este să practici - chiar dacă nu ai o audiență.

Dacă nu ești încă convins, fă-ți o clipă să te gândești la care ar putea fi scopurile tale.

### Stabilirea obiectivelor

Scopurile pot să te ajute să-ți dai seama pe ce să lucrezi, la ce să spui nu, și unde să ceri ajutor de la alții. Începe prin a te întreba,  _de ce deschid sursa acestui proiect?_

Nu există un răspuns singur corect la această întrebare. Ai putea avea multiple scopuri pentru un singur proiect, sau proiecte diferite cu scopuri diferite.

Dacă propriul tău scop este să îți arăți munca, poate nici nu vei vrea contribuții, și poate chiar vei spune asta în README. Pe de altă parte, dacă tu vrei contributori, vei investi timp într-o documentație clară și în a face noii veniți să se simtă bineveniți.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mavris?s=180" class="pquote-avatar" alt="avatar">
  <p>
    La un moment dat am creat un UIAlertView personalizat pe care îl foloseam... și am decis să-i deschid sursa. Astfel că l-am modificat să fie mai dinamic și l-am încărcat pe GitHub. De asemenea am scris prima mea documentație explicând altor dezvoltatori cum să-l folosească în proiectele lor. Probabil nimeni nu l-a folosit deoarce era un proiect simplu dar m-am simțit bine din cauza contribuției mele.
  </p>
  <p>
    <em>
      At some point I created a custom UIAlertView that I was using...and I decided to make it open source. So I modified it to be more dynamic and uploaded it to GitHub. I also wrote my first documentation explaining to other developers how to use it on their projects. Probably nobody ever used it because it was a simple project but I was feeling good about my contribution.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @mavris, ["Self-taught Software Developers: Why Open Source is important to us"](https://medium.com/rocknnull/self-taught-software-engineers-why-open-source-is-important-to-us-fe2a3473a576)
  </p>
</aside>

Pe măsură ce proiectul tău crește, comunitatea ta poate avea nevoie de mai mult decât doar cod din partea ta. Răspunzând la probleme, analizând cod, și promovând proiectul sunt toate sarcini importante într-un proiect cu sursă deschisă.

În timp ce timpul pe care îl cheltuiți pe sarcini care nu sunt legate de programare va depinde de mărimea și scopul proiectului tău, tu ar trebui să fii pregătit în calitate de întreținător să te adresezi lor tu însuți sau să găsești pe cineva să te ajute.

**Dacă ești parte dintr-o companie care deschide sursa unui proiect,** asigurați-vă că proiectul vostru are resursele interne de care are nevoie să prospere. Veți dori să identificați cine este responsabil pentru întreținerea proiectului după lansare, și cum veți împărți aceste sarcini cu comunitatea voastră.

Dacă aveți nevoie de un buget dedicat sau de personal pentru promovare, logistică și menținerea proiectului, începeți aceste conversații devreme.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/captainsafia?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Pe măsură ce începi să deschizi sursa proiectului tău, este important să te asiguri că procesele tale de gestionare iau în considerare contribuțiile și abilitățile comunității din jurul proiectului tău. Nu-ți fie frică să implici contributori care nu sunt angajați în afacerea ta în aspecte cheie ale proiectului — în special dacă ei contribuie frecvent.
  </p>
  <p>
    <em>
      As you begin to open source the project, it's important to make sure that your management processes take into consideration the contributions and abilities of the community around your project. Don't be afraid to involve contributors who are not employed in your business in key aspects of the project — especially if they are frequent contributors.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @captainsafia, ["So you wanna open source a project, eh?"](https://dev.to/captainsafia/so-you-wanna-open-source-a-project-eh-5779)
  </p>
</aside>

### Contribuind pe alte proiecte

Dacă obiectivul tău este să înveți cum să colaborezi cu alții sau să înțelegi cum funcționează open source, consideră contribuirea la un proiect existent. Începe cu un proiect pe care deja îl folosești și iubești. Contribuind la un proiect poate fi atât de simplu ca și corectarea greșelilor gramaticale sau actualizarea documentației.

Dacă nu ești sigur cum să începi ca un contributor, aruncă o privire peste [Cum să contribui la open source?](../how-to-contribute/).

## Lansându-ți propriul tău proiect cu sursă deschisă

Nu există timpul perfect pentru a deschide sursa muncii tale. Poți deschide o idee, o muncă în progres, sau după ani în care a fost cu sursă închisă.

În general, ar trebui să deschizi sursa proiectului tău când te simți confortabil lăsându-i pe alții să vadă munca ta, să dea feedback asupra muncii tale.

Indiferent de stadiul în care decizi să deschizi sursa proiectului, oricare proiect ar trebui să includă următoarea documentație:

* [Licența de sursă deschisă](https://help.github.com/articles/open-source-licensing/#where-does-the-license-live-on-my-repository)
* [README](https://help.github.com/articles/create-a-repo/#commit-your-first-change)
* [Direcții de contribuție](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)
* [Codul de conduită](../code-of-conduct/)

Ca și întreținător, aceste componente te vor ajuta să comunici așteptări, să gestionezi contribuții, și să protejezi drepturile legale ale tuturor (inclusiv ale tale). Ele cresc semnificativ șansele de a avea o experiență pozitivă.

Dacă proiectul tău este pe GitHub, punerea acestor fișiere în directorul rădăcină cu numele de fișiere recomandate va ajuta GitHub să recunoască și automat să le ridice la suprafață pentru cititorii tăi.

### Alegerea unei licențe

O licență de sursă deschisă garantează că alții pot folosi, copia, modifica, și contribui înapoi la proiectul tău fără repercursiuni. De asemenea te protejează de situații juridice lipicioase. **Tu trebuie să incluzi o licență când lansezi un proiect cu sursă deschisă.**

Munca judiciară nu este distractivă. Veștile bune sunt că tu poți copia și lipi o licență existentă în depozitul tău. Îți va lua doar un minut pentru a proteja munca ta grea.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), și [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) sunt cele mai populare licențe de sursă deschisă, dar [sunt și alte opțiuni](https://choosealicense.com) din care să alegi.

Când creezi un nou proiect pe GitHub, ți se dă opțiunea de a selecta o licență. Incluzând o licență de sursă deschisă îți va face proiectul GitHub open source.

![Alege o licență](/assets/images/starting-a-project/repository-license-picker.png)

Dacă ai alte întrebări sau îngrijorări în legătură cu aspectele juridice de gestionare a unui proiect cu sursă deschisă, [te-am acoperit](../legal/).

### Scrierea unui README

README-urile fac mai mult decât să explice cum să se folosească proiectul tău. Ele de asemenea explică de ce proiectul tău contează, și ce pot face utilizatorii cu acesta.

În README-ul tău, încearcă să răspunzi următoarelor întrebări:

* Ce face acest proiect?
* De ce acest proiect este folositor?
* Cum să încep?
* Unde pot obține mai mult ajutor, dacă am nevoie de el?

Poți să-ți folosești README-ul pentru a răspunde altor întrebări, cum ar fi cum tratezi contribuțiile, care sunt scopurile proiectului, și informații despre licențe și drepturi. Dacă tu nu vrei să accepți contribuții, sau proiectul tău nu este pregătit încă pentru producție, scrie aceste informații.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/tracymakes?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Documentație mai bună înseamnă mai mulți utilizatori, mai puține cereri de asistență, și mai mulți contributori. (...) Ține minte că cititorii tăi nu sunt tu. Sunt oameni care ar putea veni la un proiect care au experiențe complet diferite.
  </p>
  <p>
    <em>
      Better documentation means more users, less support requests, and more contributors. (...) Remember that your readers aren't you. There are people who might come to a project who have completely different experiences.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @tracymakes, ["Writing So Your Words Are Read (video)"](https://www.youtube.com/watch?v=8LiV759Bje0&list=PLmV2D6sIiX3U03qc-FPXgLFGFkccCEtfv&index=10)
  </p>
</aside>

Uneori, oamenii evită scrierea unui README deoarece simt că proiectul este nefinalizat, sau ei nu vor contribuții. Acestea sunt toate motive foarte bune pentru a scrie unul.

Pentru mai multă inspirație, încearcă să folosești [ghidul „Make a README”](https://www.makeareadme.com/) al lui @dguo sau [șablonul README](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) al lui @PurpleBooth pentru a scrie un README complet.

Când incluzi un fișier README în directorul rădăcină, GitHub îl va afișa automat pe pagina acasă a depozitului.

### Scrierea direcțiilor tale de contribuție

Un fișier CONTRIBUTING spune audienței tale cum să participe în proiectul tău. De exemplu, tu ai putea include informații despre:

* Cum se înregistrează un raport de bug (încearcă folosirea [șabloanelor de probleme și cereri de pull](https://github.com/blog/2111-issue-and-pull-request-templates))
* Cum se sugerează o nouă facilitate
* Cum se configurează mediul și se rulează testele

În plus pe lângă detalii tehnice, un fișier CONTRIBUTING este o oportunitate de a comunica așteptările tale de la contribuții, cum ar fi:

* Tipurile de contribuții pe care le cauți
* Planul sau viziunea pentru proiect
* Cum contributorii ar trebui (sau nu) să ia legătura cu tine

Folosind un ton cald și prietenos și oferind sugestii specifice pentru contribuții (cum ar fi scrierea documentației, sau facerea unui site web) poate parcurge o cale lungă pentru a face nou-veniții să se simtă bineveniți și entuziasmați să participe.

De exemplu, [Active Admin](https://github.com/activeadmin/activeadmin/) începe [ghidul său de contribuire](https://github.com/activeadmin/activeadmin/blob/HEAD/CONTRIBUTING.md) cu:

> Mai întâi de toate, îți mulțumesc pentru că ai considerat să contribui la Active Admin. Oamenii ca voi sunt cei care fac Active Admin o unealtă grozavă.
>
> First off, thank you for considering contributing to Active Admin. It's people like you that make Active Admin such a great tool.

În primele etape ale proiectului tău, fișierul tău CONTRIBUTING poate fi simplu. Ar trebui mereu să explici cum se raportează bug-uri sau înregistrează probleme, și oricare cerință tehnică (cum ar fi teste) pentru a face o contribuție.

Cu timpul, ai putea adăuga alte întrebări puse des în fișierul tău CONTRIBUTING. Scriind aceste informații înseamnă că mai puțini oameni vă vor întreba aceleași întrebări de mai multe ori.

Pentru mai mult ajutor cu scrierea fișierului tău CONTRIBUTING, aruncă o privire la [șablonul de ghid de contribuire](https://github.com/nayafia/contributing-template/blob/HEAD/CONTRIBUTING-template.md) al @nayafia sau [„How to Build a CONTRIBUTING.md”](https://mozillascience.github.io/working-open-workshop/contributing/) al @mozilla.

Leagă către fișierul tău CONTRIBUTING din README-ul tău, astfel încât mai mulți oameni îl văd. Dacă [amplasezi fișierul tău CONTRIBUTING în depozitul proiectului tău](https://help.github.com/articles/setting-guidelines-for-repository-contributors/), GitHub va lega automat către fișierul tău când un contributor creează o problemă sau deschide o cerere de pull.

![Direcții de contribuire](/assets/images/starting-a-project/Contributing-guidelines.jpg)

### Stabilirea unui cod de conduită

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mlynch?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Toți am avut experiențe în care am făcut față la ceva ce probabil era abuz fie ca un întreținător încercând să explice de ce ceva trebuia să fie într-un anumit fel, sau ca un utilizator... punând o întrebare simplă. (...) Un cod de conduită devine un document ușor referit și la care se poate lega, care indică faptul că echipa ta ia discursul constructiv foarte în serios.
  </p>
  <p>
    <em>
      We’ve all had experiences where we faced what was probably abuse either as a maintainer trying to explain why something had to be a certain way, or as a user...asking a simple question. (...) A code of conduct becomes an easily referenced and linkable document that indicates that your team takes constructive discourse very seriously.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @mlynch, ["Making Open Source a Happier Place"](https://medium.com/ionic-and-the-mobile-web/making-open-source-a-happier-place-3b90d254f5f)
  </p>
</aside>

În cele din urmă, un cod de conduită ajută la stabilirea unor reguli de bază pentru comportament pentru participanții la proiectul tău. Acest lucru este valoros în special dacă lansezi un proiect cu sursă deschisă pentru o comunitate sau o companie. Un cod de conduită te împuternicește să facilitezi comportamentul sănătos, constructiv al comunității, ceea ce îți va reduce stresul în calitate de întreținător.

Pentru mai multe informații, aruncă o privire la [ghidul nostru privind codul de conduită](../code-of-conduct/).

Pe lângă comunicarea _modului_ în care te aștepți ca participanții să se comporte, un cod de conduită tinde să descrie de asemenea la cine se aplică aceste așteptări, când se aplică, și ce se face dacă o încălcare are loc.

Aproape la fel ca licențele de sursă deschisă, sunt de asemenea și standarde în curs de dezvoltare pentru coduri de conduită, deci nu trebuie să vă scrieți propriul cod de conduită. [Contributor Covenant](https://contributor-covenant.org/) este un cod de conduită care se introduce cu o singură mutare în proiecte și este utilizat de [peste 40.000 de proiecte cu sursă deschisă](https://www.contributor-covenant.org/adopters), incluzând Kubernetes, Rails, și Swift. Indiferent de textul folosit, tu trebuie să fii pregătit să impui codul de conduită când e necesar.

Lipește textul direct într-un fișier CODE_OF_CONDUCT în depozitul tău. Păstrează fișierul în directorul rădăcină al proiectului tău ca să fie ușor de găsit, și leagă înspre el din README-ul tău.

## Numirea și marcarea proiectului tău

Marcarea este mai mult decât o siglă pâlpâitoare sau un nume de proiect atrăgător. Este despre cum vorbești despre proiectul tău, și la cine ajungi cu mesajul tău.

### Alegerea numelui potrivit

Alege un nume care este ușor de memorat și, în mod ideal, dă o idee despre ce face proiectul. De exemplu:

* [Sentry](https://github.com/getsentry/sentry) monitorizează aplicații pentru raportarea de accidente
* [Thin](https://github.com/macournoyer/thin) este un server web Ruby rapid și simplu

Dacă construiești peste un proiect existent, folosind numele lor ca prefix poate ajuta să clarifice ce face proiectul tău (de exemplu, [node-fetch](https://github.com/bitinn/node-fetch) aduce `window.fetch` la Node.js).

Consideră claritatea mai presus de toate. Jocurile de cuvinte sunt distractive, dar ține minte că unele glume ar putea să nu se traducă pentru alte culturi sau oameni cu experiențe diferite de ale tale. Unii din utilizatorii tăi potențiali ar putea fi angajați din companii: nu vrei să îi faci stânjeniți când trebuie să explice proiectul tău la muncă!

### Evitarea conflictelor de nume

[Caută proiecte cu sursă deschisă cu un nume asemănător](http://ivantomic.com/projects/ospnc/), în special dacă împărțiți aceeași limbă sau ecosistem. Dacă numele tău se suprapune cu un proiect popular existent, ai putea confuziona audiența.

Dacă dorești un site web, un Twitter, sau alte proprietăți să-ți reprezinte proiectul, asigură-te că poți obține numele dorite. În mod ideal, [rezervă aceste nume acum](https://instantdomainsearch.com/) pentru pacea minții, chiar dacă nu intenționezi să le folosești încă.

Asigură-te că numele proiectului tău nu încalcă nicio marcă comercială. O companie ar putea să-ți ceară să dobori proiectul mai târziu, sau chiar să ia măsuri legale împotriva ta. Pur și simplu, nu merită riscul.

Puteți verifica [WIPO Global Brand Database](http://www.wipo.int/branddb/en/) pentru conflicte de mărci comerciale. Dacă ești la o companie, aceasta este una din lucrurile cu care [echipa juridică te poate ajuta](../legal/).

În cele din urmă, fă o căutare Google rapidă pentru numele proiectului tău. Vor putea oamenii să găsească ușor proiectul tău? Apare alt lucru în rezultatele căutării pe care ai dori ca ei să nu îl vadă?

### Cum scrii (și programezi) îți afectează marca, de asemenea!

De-a lungul vieții proiectului tău, veți face multă scriere: README-uri, tutoriale, documente pentru comunitate, răspunderea la probleme, poate chiar buletine informative și liste de email-uri.

Fie că este vorba de documentație oficială sau de un email obișnuit, stilul tău de scriere este parte a mărcii proiectului tău. Consideră cum ai putea să ajungi la audiență și dacă acesta este tonul pe care dorești să-l transmiți.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/janl?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Am încercat să mă implic în toate firele de discuție din lista de email-uri, și să arăt comportament exemplar, fiind drăguț cu oamenii, luându-le în serios problemele și încercând în ansamblu să fiu de ajutor. După un timp, oamenii au rămas în jur nu doar pentru a pune întrebări, ci de asemenea pentru a ajuta cu răspunsurile, și spre bucuria mea completă, ei mi-au imitat stilul.
  </p>
  <p>
    <em>
      I tried to be involved with every thread on the mailing list, and showing exemplary behaviour, being nice to people, taking their issues seriously and trying to be helpful overall. After a while, people stuck around not to only ask questions, but to help with the answering as well, and to my complete delight, they mimicked my style.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @janl despre [CouchDB](https://github.com/apache/couchdb), ["Sustainable Open Source"](https://web.archive.org/web/20200723213552/https://writing.jan.io/2015/11/20/sustainable-open-source.html)
  </p>
</aside>

Folosirea unui limbaj cald și incluziv (cum ar fi „ei”, chiar când mă refeream la o singură persoană) poate face un drum lung în a face proiectul tău să fie simțit primitor de noii contributori. Lipește-te de limbajul simplu, fiindcă mulți din cititorii tăi ar putea să nu fie vorbitori nativi de engleză.

Dincolo de modul în care scrii cuvinte, stilul tău de programare poate de asemenea deveni parte din marca proiectului tău. [Angular](https://angular.io/guide/styleguide) și [jQuery](https://contribute.jquery.org/style-guide/js/) sunt două exemple de proiecte cu stiluri de programare și direcții de ghidare riguroase.

Nu este necesar să scrii un ghid de stil pentru proiectul tău la început, și tu poți afla că te bucuri de a incorpora diferite stiluri de programare în proiectul tău oricum. Dar ar trebui să anticipezi cum stilurile de scriere și programare pot atrage sau descuraja diferite tipuri de oameni. Primele etape ale proiectului tău sunt oportunitatea ta de a stabili precedentul pe care dorești să îl vezi.

## Lista ta de verificări înainte de lansare

Ești pregătit să deschizi sursa proiectului tău? Iată o listă de verificare pentru a te ajuta. Bifezi toate cutiile? Ești gata să pornești! [Dă clic pe „publish”](https://help.github.com/articles/making-a-private-repository-public/) și mângâie-te pe spate.

**Documentație**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox1" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox1" class="overflow-hidden d-block text-normal">
    Proiectul are un fișier LICENSE cu o licență de sursă deschisă
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox2" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox2" class="overflow-hidden d-block text-normal">
    Proiectul are documentație de bază (README, CONTRIBUTING, CODE_OF_CONDUCT)
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox3" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox3" class="overflow-hidden d-block text-normal">
    Numele este ușor de memorat, dă o idee despre ce face proiectul tău, și nu intră în conflict cu un proiect existent, nici nu încalcă mărcile comerciale
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox4" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox4" class="overflow-hidden d-block text-normal">
    Coada de probleme este actualizată, cu problemele clar organizate și etichetate
  </label>
</div>

**Cod**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox5" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox5" class="overflow-hidden d-block text-normal">
    Proiectul folosește convenții de cod consecvente și nume clare de funcții/metode/variabile
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox6" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox6" class="overflow-hidden d-block text-normal">
    Codul este clar comentat, documentând intenții și cazuri marginale
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox7" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox7" class="overflow-hidden d-block text-normal">
    Nu există materiale sensibile în istoria reviziilor, probleme, sau cereri de pull (de exemplu, parole sau alte informații non-publice)
  </label>
</div>

**Oameni**

Dacă ești persoană fizică:

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox8" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox8" class="overflow-hidden d-block text-normal">
  Ai vorbit cu departamentul juridic și/sau înțelegi proprietatea intelectuală și politicile open source ale companiei tale (dacă ești un angajat undeva)
  </label>
</div>

Dacă sunteți o companie sau organizație:

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox9" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox9" class="overflow-hidden d-block text-normal">
    Ați vorbit cu departamentul juridic
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox10" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox10" class="overflow-hidden d-block text-normal">
    Aveți un plan de comercializare pentru a anunța și promova proiectul
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox11" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox11" class="overflow-hidden d-block text-normal">
    Cineva este angajat să gestioneze interacțiunile comunității (răspunderea la probleme, analizarea și îmbinarea cererilor de pull)
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox12" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox12" class="overflow-hidden d-block text-normal">
    Cel puțin două persoane au acces administrativ la proiect
  </label>
</div>

## Ai făcut-o!

Felicitări pentru prima ta deschidere a sursei unui proiect. Indiferent de rezultat, a lucra în public este un dar pentru comunitate. Cu fiecare commit, comentariu, și cerere de pull, tu creezi oportunități pentru tine și pentru alții de a învăța și a crește.
