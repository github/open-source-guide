---
lang: ro
title: Codul tău de conduită
description: Facilitează comportamente constructive și sănătoase în comunitate prin adoptarea și impunerea unui cod de conduită.
class: coc
toc:
  why-do-i-need-a-code-of-conduct: "De ce am nevoie de un cod de conduită?"
  establishing-a-code-of-conduct: "Stabilirea unui cod de conduită"
  deciding-how-youll-enforce-your-code-of-conduct: "Decizând cum îți vei impune codul de conduită"
  enforcing-your-code-of-conduct: "Impunerea codului tău de conduită"
  your-responsibilities-as-a-maintainer: "Responsabilitățile tale în calitate de întreținător"
order: 8
image: /assets/images/cards/coc.png
related:
  - building
  - leadership
---

## De ce am nevoie de un cod de conduită?

Un cod de conduită este un document care stabilește așteptări de comportament pentru participanții la proiectul tău. Adoptarea, și aplicarea, unui cod de conduită poate contribui la crearea unei atmosfere sociale pozitive pentru comunitatea ta.

Codurile de conduită ajută la protejarea nu doar a participanților tăi, ci și a ta. Dacă întreții un proiect, ai putea constata că atitudinile neproductive de la alți participanți pot să te facă să te simți stors sau nefericit în legătură cu munca ta de-a lungul timpului.

Un cod de conduită te împuternicește să facilitezi comportament sănătos, constructiv în comunitate. A fi proactiv reduce probabilitatea că tu, sau alții, veți deveni obosiți cu proiectul tău, și te ajută să iei măsuri când cineva face ceva cu care nu ești de acord.

## Stabilirea unui cod de conduită

Încearcă să stabilești un cod de conduită cât mai devreme: în mod ideal, când creezi prima dată proiectul.

Pe lângă comunicarea așteptărilor tale, un cod de conduită descrie următoarele:

* Unde are efect codul de conduită _(doar la probleme și cereri de pull, sau și activități comunitare cum ar fi evenimente?)_
* La cine se aplică codul de conduită _(membrii comunității și întreținători, dar ce se întâmplă cu sponsorii?)_
* Ce se întâmplă dacă cineva încalcă codul de conduită
* Cum poate cineva semnala încălcări

Oricând poți, folosește stadiul cunoscut al tehnicii. [Contributor Covenant](https://contributor-covenant.org/) este un cod de conduită ușor de instalat care este folosit de peste 40.000 de proiecte cu sursă deschisă, inclusiv Kubernetes, Rails, și Swift.

[Codul de conduită Django](https://www.djangoproject.com/conduct/) și [Citizen Code of Conduct](https://web.archive.org/web/20200330154000/http://citizencodeofconduct.org/) sunt de asemenea două exemple bune de coduri de conduită.

Amplasează un fișier CODE_OF_CONDUCT în directorul rădăcină al proiectului tău, și fă-l vizibil pentru comunitatea ta legând către el din fișierele tale CONTRIBUTING sau README.

## Decizând cum îți vei impune codul de conduită

<aside markdown="1" class="pquote">
  <p>
    Un cod de conduită care nu este (sau nu poate fi) impus este mai rău decât absența unui cod de conduită: el trimite mesajul că valorile din codul de conduită nu sunt de fapt importante sau respectate în comunitatea ta.
  </p>
  <p>
    <em>
      A code of conduct that isn't (or can't be) enforced is worse than no code of conduct at all: it sends the message that the values in the code of conduct aren't actually important or respected in your community.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— [Ada Initiative](https://adainitiative.org/2014/02/18/howto-design-a-code-of-conduct-for-your-community/)
  </p>
</aside>

Ar trebui să explici cum codul tău de conduită va fi impus **_înainte_** ca o încălcare să aibă loc. Sunt câteva motive pentru a face astfel:

* El demonstrează că ești serios în legătură cu luarea de măsuri când este necesar.

* Comunitatea ta se va simți asigurată că plângerile sunt de fapt analizate.

* Îți vei asigura comunitatea că procesul de analizare este corect și transparent, dacă vreodată ei se vor găsi investigați pentru o încălcare.

Ar trebui să oferi oamenilor o cale privată (cum ar fi o adresă de email) pentru a raporta o încălcare a codului de conduită și să explici cine primește raportul. Ar putea fi un întreținător, un grup de întreținători, sau un grup de lucru pentru codul de conduită.

Nu uita că cineva ar putea să vrea să raporteze o încălcare despre o persoană care primește aceste rapoarte. În acest caz, dă-le o opțiune să raporteze încălcările altcuiva. De exemplu @ctb și @mr-c [explică despre proiectul lor](https://github.com/dib-lab/khmer/blob/HEAD/CODE_OF_CONDUCT.rst), [khmer](https://github.com/dib-lab/khmer):

> Exemple de comportament abuziv, hărțuitor, sau altfel inacceptabil pot fi raportate scriind email către **khmer-project@idyll.org** care ajung doar la C. Titus Brown și Michael R. Crusoe. Pentru a raporta o problemă care implică pe oricare din aceștia te rugăm să scrii email către **Judi Brown Clarke, Ph.D.** Directorul pentru Diversitate la Centrul BEACON pentru Studiul Evoluției în Acțiune, un Centru NSF pentru Știință și Tehnologie.
>
> Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by emailing **khmer-project@idyll.org** which only goes to C. Titus Brown and Michael R. Crusoe. To report an issue involving either of them please email **Judi Brown Clarke, Ph.D.** the Diversity Director at the BEACON Center for the Study of Evolution in Action, an NSF Center for Science and Technology.

Pentru inspirație, aruncă o privire la [manualul impunerii](https://www.djangoproject.com/conduct/enforcement-manual/) al Django (deși poate nu vei avea nevoie de ceva atât de cuprinzător, depinzând de dimensiunea proiectului tău).

## Impunerea codului tău de conduită

Uneori, în ciuda celor mai bune eforturi ale tale, cineva va face ceva ce încalcă acest cod. Există câteva căi de abordare a comportamentului negativ sau dăunător când apare.

### Adună informații despre situație

Tratează fiecare voce a unui membru al comunității ca pe a ta. Dacă primești un raport cum că cineva a încălcat codul de conduită, ia-l în serios și investighează problema, chiar dacă nu se potrivește cu experiența ta proprie cu acea persoană. Făcând astfel va semnala comunității că le prețuiești perspectiva și ai încredere în judecata lor.

Membrul în cauză al comunității poate fi un recidivist care îi face în mod consecvent pe alții să se simtă inconfortabil, sau ei ar putea să fi spus sau făcut ceva doar o dată. Ambele situații pot fi baza luării de măsuri, depinzând de context.

Înainte de a răspunde, dă-ți timp să înțelegi ce s-a întâmplat. Citește prin comentariile și conversațiile trecute ale acestei persoane pentru a înțelege mai bine cine este și de ce a acționat într-un asemenea mod. Încearcă să culegi perspective, altele decât propria ta perspectivă despre această persoană și comportamentul ei.

<aside markdown="1" class="pquote">
  <p>
    Nu te lăsa tras într-o ceartă. Nu te lăsa distras de a te ocupa cu comportamentul altcuiva înainte de a termina cu problema la îndemână. Concentrează-te pe ce ai nevoie.
  </p>
  <p>
    <em>
      Don’t get pulled into an argument. Don’t get sidetracked into dealing with someone else’s behavior before you’ve finished dealing with the matter at hand. Focus on what you need.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— Stephanie Zvan, ["So You've Got Yourself a Policy. Now What?"](https://the-orbit.net/almostdiamonds/2014/04/10/so-youve-got-yourself-a-policy-now-what/)
  </p>
</aside>

### Ia măsurile corespunzătoare

După colectarea și procesarea de informații suficiente, va trebui să decizi ce să faci. Pe măsură ce consideri următorii tăi pași, ține minte că scopul tău ca moderator este să întreții un mediu sigur, respectuos, și colaborativ. Consideră nu doar cum să te ocupi cu situația în cauză, dar și cum răspunsul tău va afecta comportamentul și așteptările de a merge înainte ale restului comunității.

Când cineva raportează o încălcare a codului de conduită, este sarcina ta, nu a lor, de a o trata. Câteodată, cel/cea care raportează dezvăluie informații cu mare risc pentru cariera, reputația, sau siguranța lor fizică. Forțându-i să se confrunte cu hărțuitorul/oarea ar putea pune persoana care a raportat într-o poziție compromițătoare. Ar trebui să gestionezi comunicarea directă cu persoana în cauză, dacă persoana care raportează nu cere în mod explicit altfel.

Există câteva moduri în care poți răspunde la o încălcare a codului de conduită:

* **Oferă persoanei în cauză o avertizare publică** și explică cum comportamentul ei are un impact negativ asupra celorlalți, preferabil în canalul în care a apărut. Unde este posibil, comunicarea publică transmite restului comunității că iei codul de conduită în serios. Fii bun, dar ferm în comunicarea ta.

* **Ia legătura cu persoana în cauză în mod privat** pentru a explica felul în care comportamentul a avut un impact negativ asupra celorlalți. Ai putea vrea să folosești un canal de comunicare privat dacă situația implică informații personale sensibile. Dacă comunici în privat cu cineva, este o idee bună să trimiți un CC celor care au raportat situația primii, ca să știe că ai luat măsuri. Întreabă persoana care a raportat pentru consimțământ înainte de a le trimite CC.

Uneori, nu se poate ajunge la o soluționare. Persoana în cauză ar putea deveni agresivă sau ostilă când este confruntată sau nu își schimbă comportamentul. În această situație, poate ai vrea să consideri luarea de măsuri mai puternice. De exemplu:

* **Suspendarea persoanei** în cauză din proiect, impusă printr-o interdicție temporară de a participa la oricare aspect al proiectului.

* **Interzicerea permanentă** a persoane din proiect

Interzicerea membrilor ar trebui să nu fie luată cu ușurință și reprezintă o permanentă și ireconciliabilă diferență de perspective. Ar trebui să iei aceste măsuri doar când este clar că nu se poate ajunge la o soluționare.

## Responsabilitățile tale în calitate de întreținător

Un cod de conduită nu este o lege care este impusă arbitrar. Tu ești impunătorul codului de conduită și este responsabilitatea ta să urmezi regulile pe care codul de conduită le stabilește.

În calitate de întreținător stabilești direcțiile de ghidare pentru comunitatea ta și impui aceste direcții în conformitate cu regulile prezentate în codul tău de conduită. Aceasta înseamnă a lua în serios orice raport de încălcare a codului de conduită. Celui care raportează i se datorează o analiză completă și corectă a plângerii lui. Dacă determini că comportamentul pe care el l-a raportat nu este o încălcare, comunică-i aceasta clar și explică de ce nu vei lua măsuri în legătură cu acesta. Ce face el/ea cu aceasta este treaba lui: tolerează comportamentul cu care au avut o problemă, sau se oprește din a face parte din comunitate.

Un raport al comportamentului care nu încalcă _tehnic_ codul de conduită poate totuși indica faptul că este o problemă în comunitatea ta, și ar trebui să investighezi această problemă potențială și să acționezi în consecință. Aceasta ar putea include revizuirea codului tău de conduită pentru a clarifica comportamentele acceptabile și/sau a vorbi cu persoana al cărei comportament a fost raportat și a-i spune că, deși nu a încălcat codul de conduită, ea se apropie de limita a ceea ce este așteptat și îi face pe unii participanți să se simtă neconfortabil.

În cele din urmă, în calitate de întreținător, stabilești și impui standardele pentru comportament acceptabil. Ai abilitatea de a contura valorile comunitare ale proiectului, și participanții așteaptă de la tine să impui aceste valori într-un mod corect și nepărtinitor.

## Încurajează comportamentul pe care vrei să îl vezi în lume 🌎

Când un proiect pare ostil și neprimitor, chiar dacă este doar o persoană cea al cărei comportament este tolerat de ceilalți, riști să pierzi mulți alți contributori, dintre care pe unii nu-i vei întâlni niciodată. Nu este întotdeauna ușor să adopți sau să impui un cod de conduită, dar întreținerea unui mediu primitor va ajuta comunitatea ta să crească.
