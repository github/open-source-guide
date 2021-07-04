---
lang: ro
title: Cum să contribui la open source?
description: Dorești să contribui la open source? Un ghid pentru facerea de contribuții open source, pentru începători și pentru veterani.
class: contribute
toc:
  why-contribute-to-open-source: "De ce să contribui la open source?"
  what-it-means-to-contribute: "Ce înseamnă să contribui"
  orienting-yourself-to-a-new-project: "Orientându-te către un nou proiect"
  finding-a-project-to-contribute-to: "Găsind un proiect la care să contribui"
  how-to-submit-a-contribution: "Cum să trimiți o contribuție?"
  what-happens-after-you-submit-a-contribution: "Ce are loc după ce trimiți o contribuție?"
order: 1
image: /assets/images/cards/contribute.png
related:
  - beginners
  - building
---

## De ce să contribui la open source?

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/errietta?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Lucrând pe [freenode] m-a ajutat să obțin multe din aptitudinile pe care mai târziu le-am folosit pentru studiile mele la universitate și pentru locul de muncă actual. Cred că a lucra pe proiecte cu sursă deschisă mă ajută la fel de mult cât ajută proiectul!
  </p>
  <p>
    <em>
      Working on [freenode] helped me earn many of the skills I later used for my studies in university and my actual job. I think working on open source projects helps me as much as it helps the project!
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @errietta, ["Why I love contributing to open source software"](https://www.errietta.me/blog/open-source/)
  </p>
</aside>

Contribuind la open source poate fi un cale recompensantă de a învăța, a preda și a construi experiență în aproape oricare abilitate pe care ți-o poți imagina.

De ce oamenii contribuie la open source? O mulțime de motive!

### Îmbunătățirea abilităților existente

Fie că este programare, proiectarea interfeței grafice, proiectare grafică, scriere, sau origanizare, dacă ești în căutare de practică, este o sarcină pentru tine pe un proiect cu sursă deschisă.

### Întâlnesc oameni care sunt interesați de lucruri asemănătoare

Proiectele cu sursă deschisă cu comunități calde, primitoare păstrează oamenii revenind peste ani. Mulți oameni formează prietenii care durează o viață prin participarea lor la open source, fie că este vorba de a-i întâlni la conferințe sau noaptea târziu în chat-uri despre burrito-uri.

### Găsesc mentori și îi învață pe alții

Lucrând cu alții pe un proiect comun înseamnă că va trebui să explici cum faci lucrurile, și de asemenea să ceri ajutor altora. Actele de învățare și predare pot fi o activitate împlinitoare pentru oricine e implicat.

### Construiesc artefacte publice care îi ajută să crească o reputație (și o carieră)

Prin definiție, toată munca ta open source este publică, ceea ce înseamnă că primești exemple gratuite de purtat oriunde ca o demonstrație a ceea ce poți face.

### Învață abilități de lucru cu oameni

Open source oferă oportunități de a practica abilități de conducere și management, cum ar fi rezolvarea conflictelor, organizarea de echipe de oameni, și prioritizarea muncii.

### Este încurajant să fii capabil să faci schimbări, chiar și mici

Nu trebuie să fii un contributor de o viață să te bucuri de a participa la open source. Ai văzut vreodată o greșeală gramaticală pe un site, și ți-ai dorit ca cineva să o corecteze? Pe un proiect cu sursă deschisă, poți să faci exact acel lucru. Open source ajută oamenii să simtă intervenția lor asupra propriei vieți și asupra a cum experimentează lumea, și aceasta în sine este recompensant.

## Ce înseamnă să contribui

Dacă ești un contributor open source nou, procesul poate fi intimidant. Cum găsești proiectul corect? Dar dacă nu știi să programezi? Dar dacă ceva merge greșit?

Nu te îngrijora! Există o mulțime mare de feluri de a te implica într-un proiect cu sursă deschisă, și câteva sfaturi te vor ajuta să obții cel mai mult din experiența ta.

### Nu trebuie să contribui cu cod

O neînțelegere comună despre contribuirea la open source este că trebuie să contribui cu cod. De fapt, deseori sunt celelalte părți ale unui proiect care sunt [cele mai neglijate și omise](https://github.com/blog/2195-the-shape-of-open-source). Vei face proiectului o _gigantică_ favoare oferindu-te să pășești înăuntru cu aceste tipuri de contribuții!

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/orta?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Am fost renumit pentru munca mea pe CocoaPods, dar marea majoritate a oamenilor nu știu că eu de fapt nu fac nicio muncă reală pe unealta propriu-zisă CocoaPods. Timpul meu pentru proiect este în mare parte cheltuit făcând lucruri precum documentație și lucrul pe marcă.
  </p>
  <p>
    <em>
      I’ve been renowned for my work on CocoaPods, but most people don’t know that I actually don’t do any real work on the CocoaPods tool itself. My time on the project is mostly spent doing things like documentation and working on branding.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @orta, ["Moving to OSS by default"](https://academy.realm.io/posts/orta-therox-moving-to-oss-by-default/)
  </p>
</aside>

Chiar dacă îți place să scrii cod, alte tipuri de contribuții sunt o cale grozavă de a te implica într-un proiect și de a întâlni alți membri ai comunității. Construind aceste relații îți va da oportunități de a lucra pe alte părți ale proiectului.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/brettcannon?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Întâi am luat legătura cu echipa de dezvoltare Python (numită și python-dev) când am trimis email la lista de email-uri în 17 iunie 2002 pentru a-mi accepta patch-ul. Am prins repede bug-ul din sursa deschisă, și am decis să încep să organizez rezumatele email-urilor pentru grup. Ei mi-au dat o scuză grozavă pentru a cere clarificări despre un subiect, dar mai critic am putut observa când cineva indica ceva ce necesita rezolvare.
  </p>
  <p>
    <em>
      I first reached out to the Python development team (aka python-dev) when I emailed the mailing list on June 17, 2002 about accepting my patch. I quickly caught the open source bug, and decided to start curating email digests for the group. They gave me a great excuse to ask for clarifications about a topic, but more critically I was able to notice when someone pointed out something that needed fixing.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @brettcannon, ["Maintainer Stories"](https://github.com/open-source/stories/brettcannon)
  </p>
</aside>

### Îți place să planifici evenimente?

* Organizează ateliere sau întâlniri despre proiect, [precum @fzamperin a făcut pentru NodeSchool](https://github.com/nodeschool/organizers/issues/406)
* Organizează conferința proiectului (dacă au una)
* Ajută membrii comunității să găsească conferința potrivită și să trimită propuneri pentru discursuri

### Îți place să proiectezi?

* Restructurează aspectul pentru a îmbunătăți uzabilitatea proiectului
* Condu o cercetare asupra utilizatorilor pentru a reorganiza și rafina navigarea și meniurile proiectului, [precum sugerează Drupal](https://www.drupal.org/community-initiatives/drupal-core/usability)
* Pune laolaltă un ghid de stil pentru a ajuta proiectul să aibă un aspect visual consistent
* Creează artă pentru tricouri sau o nouă siglă, [precum contribuitorii hapi.js au făcut](https://github.com/hapijs/contrib/issues/68)

### Îți place să scrii?

* Scrie și îmbunătățește documentația proiectului
* Selectează un dosar de exemple arătând cum este folosit proiectul
* Începe un buletin informativ pentru proiect, sau selectează sublinieri din lista de email-uri
* Scrie tutoriale pentru proiect, [cum au făcut contribuitorii PyPA](https://github.com/pypa/python-packaging-user-guide/issues/194)
* Scrie o traducere pentru documentația proiectului

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kittens?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Serios, [documentația] este mega-importantă. Documentația până acum a fost foarte bună și a fost o facilitate grozavă a Babel. Sunt secțiuni care sigur ar putea fi lucrate și chiar adăugarea unui paragraf aici sau acolo este extrem de apreciată.
  </p>
  <p>
    <em>
      Seriously, [documentation] is mega-important. The documentation so far has been great and has been a killer feature of Babel. There are sections that could certainly use some work and even the addition of a paragraph here or there is extremely appreciated.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @kittens, ["Call for contributors"](https://github.com/babel/babel/issues/1347)
  </p>
</aside>

### Îți place să organizezi?

* Fă legături la probleme duplicate, și sugerează noi etichete de probleme, pentru a păstra lucrurile organizate
* Treci prin problemele deschise și sugerează închiderea celor vechi, [cum @nzakas a făcut pentru ESLint](https://github.com/eslint/eslint/issues/6765)
* Cere clarificarea întrebărilor din problemele deschise recent pentru a mișca discuția înainte

### Îți place să programezi?

* Găsește o problemă existentă pentru a o aborda, [precum @dianjin a făcut pentru Leaflet](https://github.com/Leaflet/Leaflet/issues/4528#issuecomment-216520560)
* Întreabă dacă poți ajuta la scrierea unei noi facilități
* Automatizează configurarea proiectului
* Îmbunătățește uneltele și testarea

### Îți place să ajuți oameni?

* Răspunde la întrebări despre proiect pe, de exemplu, Stack Overflow ([ca acest exemplu Postgres](https://stackoverflow.com/questions/18664074/getting-error-peer-authentication-failed-for-user-postgres-when-trying-to-ge)) sau Reddit
* Răspunde la întrebări pentru oameni în probleme deschise
* Ajută la moderarea forumurilor sau a canalelor de conversații

### Îți place să ajuți pe alții să programeze?

* Revizuiește codul din postările celorlalți
* Scrie tutoriale pentru cum poate fi utilizat un proiect
* Oferă-te să mentorezi un alt contributor, [cum a făcut @ereichert pentru @bronzdoc cu Rust](https://github.com/rust-lang/book/issues/123#issuecomment-238049666)

### Nu trebuie obligatoriu să lucrezi pe proiecte software!

În timp ce „open source” se referă deseori la software, poți colabora pe aproape orice. Există cărți, rețete, liste, și cursuri care sunt dezvoltate ca proiecte cu sursă deschisă.

De exemplu:

* @sindresorhus selectează o [listă de liste „grozave”](https://github.com/sindresorhus/awesome)
* @h5bp menține o [listă de potențiale întrebări de interviu](https://github.com/h5bp/Front-end-Developer-Interview-Questions) pentru candidați la poziția de dezvoltatori front-end
* @stuartlynn și @nicole-a-tesla au făcut o [colecție despre adevăruri amuzante despre păsări marine cu cioc mare](https://github.com/stuartlynn/puffin_facts)

Chiar dacă ești un dezvoltator software, lucrând pe un proiect de documentație te poate ajuta să începi în open source. Este deseori mai puțin intimidant să lucrezi pe proiecte care nu includ cod, și procesul de colaborare îți va construi încrederea și experiența.

## Orientându-te către un nou proiect

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/shaunagm?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Dacă mergi la un urmăritor de probleme și lucrurile par confuze, nu ești singur. Aceste unelte cer multe cunoștințe implicite, dar oamenii pot să te ajute să îl navighezi și poți să le pui întrebări.
  </P>
  <p>
    <em>
      If you go to an issue tracker and things seem confusing, it's not just you. These tools require a lot of implicit knowledge, but people can help you navigate it and you can ask them questions.
    </em>
  </P>
  <p markdown="1" class="pquote-credit">
— @shaunagm, ["How to Contribute to Open Source"](https://readwrite.com/2014/10/10/open-source-diversity-how-to-contribute/)
  </p>
</aside>

Pentru orice mai mult decât o corectare gramaticală, contribuind la open source este ca a merge la un grup de străini la o petrecere. Dacă începi să vorbești despre lame, în timp ce ei erau adânc într-o discuție despre peștișori de aur, probabil se vor uita la tine puțin ciudat.

Înainte de a sări orbește cu propriile tale sugestii, începe prin a învăța cum să citești încăperea. Făcând astfel mărești șansele ca ideile tale să fie obsevate și auzite.

### Anatomia unui proiect cu sursă deschisă

Oricare comunitate open source este diferită.

A petrece ani pe un singur proiect cu sursă deschisă înseamnă că ai ajuns să cunoști un singur proiect cu sursă deschisă. Treci la un alt proiect, și poate vei găsi că vocabularul, normele, și stilurile de comunicare sunt complet diferite.

Acestea fiind spuse, multe proiecte cu sursă deschisă urmează o structură organizațională asemănătoare. Înțelegând rolurile diferite din comunitate și procesul în ansamblu te va ajuta să te orientezi rapid către oricare proiect nou.

Un proiect cu sursă deschisă are următoarele tipuri de persoane:

* **Autor:** Persoana/persoanele sau organizația care a creat proiectul
* **Proprietar:** Persoana/persoanele care au proprietate administrativă asupra organizației sau a depozitului (nu întotdeauna același cu autorul original)
* **Întreținători:** Contributori care sunt responsabili pentru a conduce viziunea și a organiza aspectele organizaționale ale proiectului (Ei pot de asemenea fi autori sau proprietari ai proiectului.)
* **Contributori:** Oricine a contribuit cu ceva înapoi la proiect
* **Membrii comunității:** Persoane care folosesc proiectul. Ei ar putea fi activi în conversații sau să-și exprime părerea asupra direcției proiectului

Proiectele mai mari pot de asemenea avea subcomitete sau grupuri de lucru axate pe sarcini diferite, cum ar fi uneltele, triajul, moderarea comunității, și organizarea evenimentelor. Caută pe site-ul unui proiect pentru o pagină „echipa” sau în depozit pentru documentația de guvernare, pentru a găsi această informație.

Un proiect are de asemenea documentație. Aceste fișiere sunt de obicei listate în rădăcina depozitului.

* **LICENSE:** Prin definiție, oricare proiect cu sursă deschisă trebuie să aibă o [licență de sursă deschisă](https://choosealicense.com). Dacă proiectul nu are o licență, el nu este cu sursă deschisă.
* **README:** README-ul este manualul de instrucțiuni care întâmpină noi membri ai comunității la proiect. El explică de ce proiectul este folositor și cum să începi.
* **CONTRIBUTING:** În timp ce README-urile ajută oamenii să _folosească_ proiectul, documentația de contribuire ajută oamenii să _contribuie_ la proiect. Ea explică ce tipuri de contribuții sunt necesare și cum funcționează procesul. În timp ce nu oricare proiect are un fișier CONTRIBUTING, prezența lui semnalează că acesta este un proiect primitor la care să contribui.
* **CODE_OF_CONDUCT:** Codul de conduită stabilește reguli de bază pentru comportamentul asociat al participanților și ajută la facilitarea unui mediu prietenos și primitor. În timp ce nu oricare proiect are un fișier CODE_OF_CONDUCT, prezența lui semnalează că acesta este un proiect primitor la care să contribui.
* **Altă documentație:** Ar putea fi documentație în plus, cum ar fi tutoriale, prezentări, sau politici de guvernare, în special în cazul proiectelor mai mari.

În cele din urmă, proiectele cu sursă deschisă folosesc următoarele unelte pentru organizarea discuțiilor. Citirea prin arhive îți va oferi o imagine bună despre cum gândește și lucrează comunitatea.

* **Urmăritorul de probleme:** Unde oamenii discută problemele legate de proiect.
* **Cereri de pull:** Unde oamenii discută și analizează schimbările în progres.
* **Forumuri de discuții și liste de email-uri:** Unele proiecte pot folosi aceste canale pentru subiecte conversaționale (de exemplu, _"Cum să..."_ sau _"Ce credeți despre..."_ în loc de rapoarte de bug-uri sau cereri de facilități). Alții folosesc urmăritorul de probleme pentru toate conversațiile.
* **Canal sincron de chat:** Unele proiecte utilizează canale de chat (cum ar fi Slack sau IRC) pentru conversații cazuale, colaborări, și schimburi rapide.

## Găsind un proiect la care să contribui

Acum că ți-ai dat seama cum lucrează proiectele cu sursă deschisă, este timpul să găsim un proiect la care să contribui!

Dacă nu ai contribuit niciodată la open source până acum, primește niște sfaturi de la Președintele S.U.A. John F. Kennedy, care a spus odată, _„Întreabă nu ceea ce țara ta poate face pentru tine - întreabă ce poți face tu pentru țara ta.”_

Contribuirea la open source are loc la toate nivelele, de-a lungul proiectelor. Nu trebuie să gândești prea mult care mai exact va fi prima ta contribuție, sau cum va arăta.

În schimb, începe prin a gândi despre proiectele pe care le folosești deja, sau pe care vrei să le folosești. Aceste proiecte la care vei contribui activ sunt acelea la care te vei vedea întorcându-te.

În aceste proiecte, de fiecare dată când te prinzi gândindu-te că ceva ar putea fi mai bine sau diferit, acționează pe baza instinctului.

Open source nu este un club exclusivist; el este făcut din oameni exact ca tine. „Open source” este doar un termen extravagant pentru a trata problemele lumii ca rezolvabile.

Ai putea scana un README sau găsi un link stricat sau o greșeală gramaticală. Sau ești un nou utilizator și ai observat că ceva este stricat, sau o problemă despre care crezi că într-adevăr ar trebui să fie în documentație. În loc de a o ignora sau de a trece mai departe, sau a cere altcuiva să o rezolve, vezi dacă poți ajuta pășind înăuntru. Despre aceasta este tot open source!

> [28% din contribuțiile ocazionale](https://www.igor.pro.br/publica/papers/saner2016.pdf) la open source sunt documentație, cum ar fi o corectare gramaticală, reformatare, sau scrierea unei traduceri.
> 
> [28% of casual contributions](https://www.igor.pro.br/publica/papers/saner2016.pdf) to open source are documentation, such as a typo fix, reformatting, or writing a translation.

Poți de asemenea folosi una dintre următoarele resurse pentru a te ajuta să descoperi și să contribui la noi proiecte:

* [GitHub Explore](https://github.com/explore/)
* [Open Source Friday](https://opensourcefriday.com)
* [First Timers Only](https://www.firsttimersonly.com/)
* [CodeTriage](https://www.codetriage.com/)
* [24 Pull Requests](https://24pullrequests.com/)
* [Up For Grabs](https://up-for-grabs.net/)
* [Contributor-ninja](https://contributor.ninja)
* [First Contributions](https://firstcontributions.github.io)
* [SourceSort](https://web.archive.org/web/20201111233803/https://www.sourcesort.com/)

### O listă de verificare înainte de a contribui

Când ai găsit un proiect la care ai dori să contribui, fă o scanare rapidă pentru a te asigura că proiectul este potrivit pentru a accepta contribuții. Altfel, munca ta grea ar putea să nu primească niciodată un răspuns.

Aici este o listă de verificare la îndemână pentru a evalua dacă un proiect este bun pentru noi contributori.

**Respectă definiția open source**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox1" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox1" class="overflow-hidden d-block text-normal">
  Are o licență? De obicei, există un fișier numit LICENSE în rădăcina depozitului.
  </label>
</div>

**Proiectul acceptă în mod activ contribuțiile**

Uită-te la activitatea de commit-uri pe ramura master. Pe GitHub, poți vedea aceste informații pe pagina principală a depozitului.

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox2" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox2" class="overflow-hidden d-block text-normal">
  Când a fost făcut ultimul commit?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox3" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox3" class="overflow-hidden d-block text-normal">
  Câți contributori are proiectul?
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox4" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox4" class="overflow-hidden d-block text-normal">
  Cât de des se fac commit-uri? (Pe GitHub, poți găsi acest lucru dând clic pe "Commits" în bara de sus.)
  </label>
</div>

Apoi, privește problemele proiectului.

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox5" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox5" class="overflow-hidden d-block text-normal">
    Câte probleme deschise sunt?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox6" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox6" class="overflow-hidden d-block text-normal">
    Întreținătorii răspund rapid la probleme când se deschid?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox7" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox7" class="overflow-hidden d-block text-normal">
    Există o discuție activă asupra problemelor?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox8" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox8" class="overflow-hidden d-block text-normal">
    Sunt problemele recente?
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox9" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox9" class="overflow-hidden d-block text-normal">
    Se închid probleme? (Pe GitHub, dă clic pe secțiunea "closed" pe pagina Issues pentru a vedea problemele închise.)
  </label>
</div>

Acum fă la fel pentru cererile de pull ale proiectului.

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox10" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox10" class="overflow-hidden d-block text-normal">
    Câte cereri deschise de pull sunt?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox20" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox20" class="overflow-hidden d-block text-normal">
    Întreținătorii răspund rapid la cererile de pull când sunt deschise?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox11" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox11" class="overflow-hidden d-block text-normal">
    Există discuție activă asupra cererilor de pull?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox12" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox12" class="overflow-hidden d-block text-normal">
    Sunt cererile de pull recente?
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox13" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox13" class="overflow-hidden d-block text-normal">
    Cât de recent au fost niște cereri de pull îmbinate? (Pe GitHub, dă clic pe secțiunea „closed” pe pagina Pull Requests pentru a vedea PR-uri închise.)
  </label>
</div>

**Proiectul este primitor**

Un proiect prietenos și primitor semnalează că ei vor fi receptivi la noi contributori.

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox14" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox14" class="overflow-hidden d-block text-normal">
    Întreținătorii răspund cu ajutor întrebărilor din probleme?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox15" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox15" class="overflow-hidden d-block text-normal">
    Sunt oamenii prietenoși în probleme, forumul de discuții, și chat (de exemplu, IRC sau Slack)?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox16" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox16" class="overflow-hidden d-block text-normal">
    Cererile de pull sunt analizate de cineva?
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox17" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox17" class="overflow-hidden d-block text-normal">
    Întreținătorii mulțumesc oamenilor pentru contribuțiile lor?
  </label>
</div>

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kfogel?s=180" class="pquote-avatar" alt="avatar">
  <p>
    De fiecare dată când vezi un fir de discuție lung, verifică pe loc răspunsurile dezvoltatorilor principali care vin târziu în discuție. Rezumă ei în mod constructiv, și fac pași să aducă discuția la o decizie rămânând în același timp politicoși? Dacă vezi multe războieli, acesta este deseori un semn că energia merge înspre ceartă în loc de dezvoltare.
  </p>
  <p>
    <em>
      Whenever you see a long thread, spot check responses from core developers coming late in the thread. Are they summarizing constructively, and taking steps to bring the thread to a decision while remaining polite? If you see a lot of flame wars going on, that's often a sign that energy is going into argument instead of into development.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @kfogel, [_Producing OSS_](https://producingoss.com/en/evaluating-oss-projects.html)
  </p>
</aside>

## Cum să trimiți o contribuție?

Ai găsit un proiect care îți place, și ești pregătit să faci o contribuție. În sfârșit! Iată cum să îți pui contribuția în direcția corectă.

### Comunicând în mod eficient

Fie că ești un contributor de o singură dată sau încerci să te alături unei comunități, lucrând cu alții este cea mai importantă abilitate pe care o vei dezvolta în open source.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/shubheksha?s=180" class="pquote-avatar" alt="avatar">
  <p>
    [Ca și contributor nou,] Am realizat repede că trebuia să pun întrebări dacă voiam să fiu capabilă să închid problema. Am frunzărit codul. Odată ce am simțit ce are loc, am cerut mai multă îndrumare. Și iată! Am reușit să rezolv problema după ce am obținut toate detaliile relevante de care aveam nevoie.
  </p>
  <p>
    <em>
      [As a new contributor,] I quickly realized I had to ask questions if I wanted to be able to close the issue. I skimmed through the code base. Once I had some sense of what was going on, I asked for more direction. And voilà! I was able to solve the issue after getting all the relevant details I needed.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @shubheksha, [A Beginner's Very Bumpy Journey Through The World of Open Source](https://www.freecodecamp.org/news/a-beginners-very-bumpy-journey-through-the-world-of-open-source-4d108d540b39/)
  </p>
</aside>

Înainte de a deschide o problemă sau o cerere de pull, sau a întreba în chat, păstrează aceste puncte în minte pentru a-ți ajuta ideile să vină eficient.

**Dă context.** Ajută-i pe ceilalți să ajungă la viteză. Dacă dai peste o eroare, explică ce încerci să faci și cum se poate reproduce. Dacă sugerezi o idee nouă, explică de ce crezi că ar fi folositoare proiectului (nu doar pentru tine!).

> 😇 _"X nu se întâmplă când fac Y"_
>
> 😢 _"X este stricat! Te rog repară-l."_

**Mai întâi fă-ți temele.** Este OK să nu știi lucruri, dar arată că ai încercat. Înainte de a cere ajutor, asigură-te să verifici README-ul proiectului, documentația, problemele (deschise sau închise), lista de email-uri, și caută pe Internet după un răspuns. Oamenii vor aprecia când demonstrezi că încerci să înveți.

> 😇 _"Nu sunt sigur cum să implementez X. Am verificat documentația de ajutor și nu am găsit nicio mențiune."_
>
> 😢 _"Cum fac X?"_

**Păstrează cererile scurte și directe.** Aproape ca la trimiterea unui email, fiecare contribuție, oricât de simplă sau ajutătoare, cere analiza altcuiva. Multe proiecte au mai multe cereri de intrare decât oameni disponibili să ajute. Fii concis. Vei mări șansele ca cineva să te poată ajuta.

> 😇 _"Mi-ar plăcea să scriu un tutorial API."_
>
> 😢 _"Conduceam pe autostradă în ziua anterioară și am oprit pentru alimentare, și atunci am avut această idee grozavă pentru ceva ce noi ar trebui să facem, dar înainte de a explica aceea, dă-mi voie să-ți arăt..."_

**Păstrează toate comunicațiile publice.** Deși este tentant, nu lua legătura cu întreținătorii în mod privat, decât dacă trebuie să împarți informații sensibile (cum ar fi o problemă de securitate sau o violare serioasă a conduitei). Când păstrezi conversația publică, mai mulți oameni pot învăța și beneficia de schimbul tău. Discuțiile pot fi, în sine, contribuții.

> 😇 _(ca un comentariu) "@-întreținător Salut! Cum ar trebui să procedăm cu acest PR?"_
>
> 😢 _(ca un email) "Hei, îmi pare rău că te deranjez prin email, dar mă întrebam dacă ai avut o șansă de a-mi revizui PR-ul"_

**Este OK să pui întrebări (dar ai răbdare!).** Oricine a fost nou în proiect la un moment dat, și chiar contributorii cu experiență trebuie să ajungă la viteză când privesc un proiect nou. În același timp, chiar întreținătorii pe termen lung nu sunt familiari întotdeauna cu oricare parte a proiectului. Arată-le aceeași răbdare pe care ai dori să ți-o arate ei ție.

> 😇 _"Mersi pentru că te-ai uitat la această eroare. Am urmat sugestiile tale. Aici este ieșirea."_
>
> 😢 _"De ce nu-mi poți rezolva problema? Nu este acesta proiectul tău?"_

**Respectă deciziile comunității.** Ideile tale pot diferi de prioritățile și viziunea comunității. Ei ar putea oferi feedback sau decide să nu-ți urmeze ideea. În timp ce ar trebui să discutați și să căutați compromis, întreținătorii trebuie să trăiască cu decizia ta mai mult decât o vei face tu. Dacă nu ești de acord cu direcția lor, tu poți mereu lucra pe propria ta ramură sau să începi propriul tău proiect.

> 😇 _"Sunt dezamăgit că nu puteți susține cazul meu de utilizare, dar după cum ați explicat el afectează doar o porțiune mică din utilizatori, înțeleg de ce. Mersi că m-ai ascultat."_
>
> 😢 _"De ce nu îmi veți susține cazul de utilizare? Este inacceptabil!"_

**Mai presus de toate, păstrează eleganța.** Open source este alcătuit din colaboratori din toată lumea. Contextul se pierde de-a lungul limbilor, culturilor, geografiilor, și fusurilor orare. În plus, comunicarea scrisă face mai dificilă transmiterea unui ton sau a unei dispoziții. Presupune intenții bune în aceste conversații. Este bine să împingi politicos o idee, să ceri mai mult context, sau să îți clarifici poziția mai departe. Doar încearcă să lași internetul un loc mai bun decât cum l-ai găsit.

### Obținerea de context

Înainte de a face orice, realizează o verificare rapidă să te asiguri că ideea ta nu a fost discutată altundeva. Răsfoiește README-ul proiectului, problemele (deschise și închise), lista de email-uri, și Stack Overflow. Nu trebuie să petreci ore trecând prin tot, dar după o căutare rapidă pentru câțiva termeni cheie ajută mult.

Dacă nu-ți poți găsi ideea altundeva, ești pregătit să faci o mutare. Dacă proiectul este pe GitHub, probabil vei comunica deschizând o problemă sau o cerere de pull:

* **Problemele** sunt precum ai începe o conversație sau o discuție
* **Cererile de pull** sunt pentru a începe lucrul pe o soluție
* **Pentru comunicare ușoară,** cum ar fi o întrebare clarificatoare sau de tip cum-să, încercați să întrebați pe Stack Overflow, IRC, Slack, sau alte canale de chat, dacă proiectul are unul

Înainte de a deschide o problemă sau o cerere de pull, verifică documentația de contribuire a proiectului (de obicei un fișier numit CONTRIBUTING, sau în README), pentru a vedea dacă trebuie să incluzi ceva specific. De exemplu, ei îți pot cere să urmezi un șablon, sau să îți ceară să folosești teste.

Dacă dorești să faci o contribuție substanțială, deschide o problemă și întreabă înainte de a lucra pe ea. Este de ajutor să urmăriți proiectul un timp (pe GitHub, [poți da clic pe "Watch"](https://help.github.com/articles/watching-repositories/) pentru a fi anunțat de toate conversațiile), și să începi să cunoști membrii comunității, înainte de a face muncă ce ar putea să nu fie acceptată.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/gaearon?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Vei învăța <em>multe</em> din a alege un singur proiect pe care îl folosești în mod activ, „urmărindu-l” pe GitHub și citind oricare problemă și PR.
  </p>
  <p>
    <em>
      You'll learn <em>a lot</em> from taking a single project you actively use, "watching" it on GitHub and reading every issue and PR.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @gaearon [despre alăturarea la proiecte](https://twitter.com/dan_abramov/status/819555257055322112)
  </p>
</aside>

### Deschiderea unei probleme

De obicei tu ar trebui să deschizi o problemă în următoarele situații:

* Raportezi o eroare pe care nu o poți rezolva singur
* Discutați un subiect de nivel înalt sau o idee (de exemplu, comunitate, viziune sau politici)
* Propui o nouă facilitate sau altă idee de proiect

Sfaturi pentru comunicarea pe probleme:

* **Dacă vezi o problemă deschisă pe care vrei să o abordezi,** comentează la ea pentru a lăsa oamenii să știe că lucrezi pe ea. În acest fel, este mai puțin probabil ca oamenii să îți dubleze munca.
* **Dacă o problemă a fost deschisă cu ceva timp în urmă,** este posibil ca aceasta să fie adresată în altă parte, sau a fost deja rezolvată, deci comentează pentru a cere confirmare înainte de a începe munca.
* **Dacă ai deschis o problemă, dar ți-ai dat seama de răspuns singur mai târziu,** comentează la problemă pentru a lăsa oamenii să știe, apoi închideți problema. Chiar documentarea acestui rezultat este o contribuție la proiect.

### Deschiderea unei cereri de pull

Ar trebui de obicei să deschideți o cerere de pull în următoarele situații:

* Trimiți corectări simple (de exemplu, o greșeală gramaticală, un link nefuncțional sau o eroare evidentă)
* Începi lucrul pe o contribuție care a fost deja cerută, sau pe care ați discutat-o deja, într-o problemă

O cerere de pull nu trebuie să reprezinte muncă finalizată. Este de obicei mai bine să deschizi o cerere de pull mai devreme, astfel încât alții pot să urmărească sau să ofere feedback asupra progresului tău. Doar marcheaz-o ca „WIP” (Work in Progress) în linia de subiect. Poți întotdeauna adăuga mai multe commit-uri mai târziu.

Dacă proiectul este pe GitHub, iată cum trimiți o cerere de pull:

* **[Bifurcă depozitul](https://guides.github.com/activities/forking/)** și clonează-l local. Conectează depozitul local la depozitul „upstream” original prin adăugarea lui ca un remote. Trage înăuntru schimbările din „upstream” des pentru a fii la curent astfel încât când îți trimiți cererea de pull, conflictele de îmbinare vor fi mai puțin probabile. (Vezi instrucțiuni mai detaliate [aici](https://help.github.com/articles/syncing-a-fork/).)
* **[Creează o ramură](https://guides.github.com/introduction/flow/)** pentru editările tale.
* **Referă oricare problemă relevantă** sau documentație justificativă în PR-ul tău (de exemplu, „Closes #37.”)
* **Include capturi de ecran de dinainte și de după** dacă schimbările tale includ diferențe în HTML/CSS. Trage și lasă imaginile în corpul cererii tale de pull.
* **Testează-ți schimbările!** Rulează-ți schimbările prin oricare teste existente și creează noi teste când este necesar. Fie că testele există sau nu, asigură-te că schimbările tale nu strică proiectul existent.
* **Contribuie în stilul proiectului** cât de bine poți. Aceasta poate însemna a folosi indentări, punct și virgulă, sau comentarii în mod diferit față de cum le-ai folosi în propriul tău depozit, dar face mai ușor pentru întreținător să îmbine, altora să înțeleagă și să întrețină în viitor.

Dacă acesta este prima ta cerere de pull, aruncă o privire la [Make a Pull Request](http://makeapullrequest.com/), pe care @kentcdodds l-a creat ca un tutorial video. Poți de asemenea practica facerea de cereri de pull în depozitul [First Contributions](https://github.com/Roshanjossey/first-contributions), creat de @Roshanjossey.

## Ce are loc după ce trimiți o contribuție?

Ai făcut-o! Felicitări pentru că ai devenit un contributor la open source. Sperăm că este prima contribuție din multe.

După ce ai trimis o contribuție, una din următoarele va avea loc:

### 😭 Nu primești un răspuns.

Sperăm că ai [verificat proiectul pentru semne de activitate](#o-listă-de-verificare-înainte-de-a-contribui) înainte de a face o contribuție. Chiar și pe un proiect activ, totuși, este posibil ca a ta contribuție să nu primească un răspuns.

Dacă nu ai primit un răspuns în peste o săptămână, este corect să răspunzi politicos în același fir de discuție, cerând cuiva o analiză. Dacă știi numele persoanei potrivite care să-ți analizeze contribuția, o poți @-menționa în acel fir de discuție.

**Nu** aborda acea persoană în privat; ține minte că comunicarea publică este vitală la proiectele cu sursă deschisă.

Dacă faci un bump politicos și încă nimeni nu răspunde, este posibil ca nimeni să nu răspundă, niciodată. Nu este un sentiment grozav, dar nu-l lăsa să te descurajeze. S-a întâmplat tuturor! Sunt multe motive posibile pentru care tu nu ai primit un răspuns, incluzând circumstanțe personale care ar putea fi în afara controlului tău. Încearcă să găsești un alt proiect sau cale de a contribui. Dacă e ceva, acesta este un bun motiv pentru a nu investi prea mult timp în a face o contribuție înainte ca alți membri ai comunității să fie implicați și sensibili.

### 🚧 Cineva cere schimbări la contribuția ta.

Este obișnuit ca cineva să îți ceară să faci schimbări la contribuția ta, fie că aceasta este feedback în domeniul ideii tale, sau schimbări la codul tău.

Când cineva cere schimbări, fii sensibil. Ei și-au luat din timp pentru a analiza contribuția ta. Deschiderea unui PR și apoi plecarea departe este o formă proastă. Dacă nu știi cum să faci schimbări, cercetează problema, apoi cere ajutor dacă ai nevoie de el.

Dacă nu ai timp să mai lucrezi pe problemă (de exemplu, dacă conversația are loc de câteva luni, și circumstanțele tale s-au schimbat), lasă întreținătorul să știe ca să nu aștepte un răspuns. Altcineva ar putea fi fericit să preia controlul.

### 👎 Contribuția ta nu este acceptată.

Contribuția ta poate fi sau nu acceptată la sfârșit. Sperăm că nu ai pus prea mult efort în ea deja. Dacă nu ești sigur de ce nu a fost acceptată, este perfect rezonabil să întrebi ceri întreținătorului feedback și clarificare. În final, oricum, trebuie să respecți că aceasta este decizia lor. Nu certa și nu deveni ostil. Ești întotdeauna binevenit să bifurci și să lucrezi pe propria ta versiune dacă nu ești de acord!

### 🎉 Contribuția ta este acceptată.

Ura! Ai făcut cu succes o contribuție open source!

## Ai făcut-o!

Fie că ai făcut doar prima ta contribuție open source, sau cauți noi căi de a contribui, sperăm că ești inspirat să acționezi. Chiar dacă contribuția ta nu a fost acceptată, nu uita să spui mersi când un întreținător a pus efort în a te ajuta. Open source este făcut de oameni ca tine: câte o problemă, cerere de pull, un comentariu, sau un bate-palma pas cu pas.
