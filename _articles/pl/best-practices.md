---
lang: pl
title: Najlepsze praktyki dla opiekunów
description: Ułatwienie życia jako opiekuna oprogramowania typu open source, od dokumentowania procesów po wykorzystanie swojej społeczności.
class: best-practices
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## Co to znaczy być opiekunem?

Jeśli prowadzisz projekt typu open source, z którego korzysta wiele osób, być może zauważyłeś, że mniej kodujesz i bardziej reagujesz na problemy.

Na wczesnych etapach projektu eksperymentujesz z nowymi pomysłami i podejmujesz decyzje w oparciu o to, czego chcesz. Gdy Twój projekt zyskuje na popularności, będziesz coraz częściej współpracować z użytkownikami i współpracownikami.

Utrzymanie projektu wymaga czegoś więcej niż kodu. Te zadania są często nieoczekiwane, ale są równie ważne dla rozwijającego się projektu. Zebraliśmy kilka sposobów, aby ułatwić Ci życie, od dokumentowania procesów po wykorzystanie swojej społeczności.

## Dokumentowanie procesów

Zapisywanie rzeczy jest jedną z najważniejszych rzeczy, które możesz zrobić jako opiekun.

Dokumentacja nie tylko wyjaśnia twoje myślenie, ale pomaga innym ludziom zrozumieć, czego potrzebujesz lub oczekujesz, zanim jeszcze zapytają.

Zapisywanie rzeczy ułatwia powiedzenie „nie”, gdy coś nie pasuje do twojego zakresu. Ułatwia także ludziom wskakiwanie i pomoc. Nigdy nie wiadomo, kto może czytać lub korzystać z twojego projektu.

Nawet jeśli nie używasz pełnych akapitów, zapisywanie wypunktowanych punktów jest lepsze, niż w ogóle nie pisanie.

Pamiętaj, aby aktualizować dokumentację. Jeśli nie zawsze możesz to zrobić, usuń nieaktualną dokumentację lub wskaż, że jest nieaktualna, aby współtwórcy wiedzieli, że aktualizacje są mile widziane.

### Zapisz wizję swojego projektu

Zacznij od spisania celów swojego projektu. Dodaj je do README lub utwórz osobny plik o nazwie VISION. Jeśli istnieją inne artefakty, które mogą pomóc, na przykład plan projektu, upublicznij je.

Posiadanie jasnej, udokumentowanej wizji pozwala Ci się skoncentrować i pomaga uniknąć „przesuwania się zakresu” po wkładach innych osób.

Na przykład @lord odkrył, że wizja projektu pomogła mu ustalić, na które prośby spędzić czas. Jako nowy opiekun żałował, że nie trzymał się zakresu swojego projektu, kiedy otrzymał swoją pierwszą prośbę o funkcję [Slate](https://github.com/lord/slate).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  <i>I fumbled it. I didn't put in the effort to come up with a complete solution. Instead of an half-assed solution, I wish I had said "I don't have time for this right now, but I'll add it to the long term nice-to-have list."</i>
  <p markdown="1" class="pquote-credit">
— @lord, ["Tips for new open source maintainers"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Przekaż swoje oczekiwania

Zapisywanie zasad może być denerwujące. Czasami możesz mieć wrażenie, że pilnujesz zachowania innych ludzi lub tracisz całą zabawę.

Napisane i rzetelnie egzekwowane dobre zasady, jednak upoważniają opiekunów. Zapobiegają wciągnięciu cię w robienie rzeczy, których nie chcesz robić.

Większość ludzi, którzy natkną się na twój projekt, nie wie nic o tobie ani twoich okolicznościach. Mogą założyć, że zarabiasz za pracę nad tym, zwłaszcza jeśli jest to coś, z czego regularnie korzystają i na którym polegają. Może w pewnym momencie poświęcisz dużo czasu na swój projekt, ale teraz jesteś zajęty nową pracą lub członkiem rodziny.

Wszystko to jest w porządku! Upewnij się tylko, że inni wiedzą o tym.

Jeśli utrzymywanie projektu jest prowadzone w niepełnym wymiarze godzin lub odbywa się na zasadzie wolontariatu, bądź szczery, ile masz czasu. To nie jest to samo, ile czasu wymaga projekt lub ile czasu inni chcą spędzić.

Oto kilka zasad, które warto zapisać:

* Jak wkład jest sprawdzany i akceptowany (_Czy potrzebują testów? Szablon problemu?_)
* Rodzaje wkładów, które zaakceptujesz (_Czy potrzebujesz pomocy tylko z pewną częścią kodu?_)
* Kiedy należy podjąć dalsze działania (_na przykład: „Możesz oczekiwać odpowiedzi od opiekuna w ciągu 7 dni. Jeśli do tej pory nic nie słyszysz, możesz pingować wątek."_)
* Ile czasu spędzasz na projekcie (_na przykład „Spędzamy tylko około 5 godzin tygodniowo przy tym projekcie”_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), oraz [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) są przykładami projektów z podstawowymi zasadami dla opiekunów i współpracowników.

### Utrzymuj komunikację publiczną

Nie zapomnij też udokumentować swoich interakcji. Gdziekolwiek możesz, informuj publicznie o swoim projekcie. Jeśli ktoś próbuje skontaktować się z tobą prywatnie w celu omówienia prośby o dodanie funkcji lub potrzeby wsparcia, uprzejmie skieruj go do publicznego kanału komunikacji, takiego jak lista mailingowa lub narzędzie do śledzenia problemów.

Jeśli spotykasz się z innymi opiekunami lub podejmujesz poważną decyzję na osobności, udokumentuj te rozmowy publicznie, nawet jeśli to tylko publikowanie notatek.

W ten sposób każdy, kto dołączy do Twojej społeczności, będzie miał dostęp do tych samych informacji, co ktoś, kto był tam od lat.

## Naucz się mówić nie

Zapisałeś wszystko. Idealnie byłoby, gdyby każdy przeczytał twoją dokumentację, ale w rzeczywistości będziesz musiał przypomnieć innym, że ta wiedza istnieje.

Jednak spisanie wszystkiego pomaga zdepersonalizować sytuacje, gdy trzeba egzekwować swoje reguły.

Mówienie 'nie' nie jest łatwe, ale  _"Twój wkład nie spełnia kryteriów tego projektu"_ brzmi mniej personalnie niż _"Nie podoba mi się twój wkład"_.

Powiedzenie „nie” dotyczy wielu sytuacji, w których spotkasz się jako opiekun: żądania funkcji, które nie pasują do zakresu, ktoś wykoleiający dyskusję, wykonujący niepotrzebną pracę dla innych.

### Zachowaj przyjazną rozmowę

Jednym z najważniejszych miejsc, w których ćwiczysz, mówienie „nie”, jest issue i pull request queue. Jako opiekun projektu nieuchronnie otrzymasz sugestie, których nie chcesz zaakceptować.

Może wkład zmienia zakres projektu lub nie pasuje do twojej wizji. Być może pomysł jest dobry, ale wdrożenie jest słabe.

Bez względu na powód, taktycznie można obsługiwać wkłady, które nie spełniają standardów twojego projektu.

Jeśli otrzymasz wkład, którego nie chcesz zaakceptować, pierwszą reakcją może być zignorowanie go lub udawanie, że go nie widziałeś. Może to zaszkodzić uczuciom drugiej osoby, a nawet zdemotywować innych potencjalnych współpracowników w Twojej społeczności.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">
  <i>
  The key to handle support for large-scale open source projects is to keep issues moving. Try to avoid having issues stall. If you're an iOS developer you know how frustrating it can be to submit radars. You might hear back 2 years later, and are told to try again with the latest version of iOS.</i>
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Scaling open source communities"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

Nie zostawiaj niechcianego wkładu otwartego, ponieważ czujesz się winny lub chcesz być miły. Z czasem Twoje problemy i PR bez odpowiedzi sprawią, że praca nad projektem będzie o wiele bardziej stresująca i zastraszająca.

Lepiej natychmiast zamknąć wpisy, o których wiesz, że nie chcesz ich akceptować. Jeśli twój projekt ma już duże zaległości, @steveklabnik ma sugestie dotyczące [jak skutecznie segregować problemy](https://words.steveklabnik.com/how-to-be-an-open-source-gardener).

Po drugie, ignorowanie wkładów wysyła negatywny sygnał do społeczności. Wkład w projekt może być zastraszający, szczególnie jeśli jest to pierwszy raz. Nawet jeśli nie zaakceptujesz ich wkładu, potwierdź osobę, która za tym stoi i podziękuj jej za zainteresowanie. To wielki komplement!

Jeśli nie chcesz przyjmować wkładu:

* **Podziękuj im** za ich wkład
* **Wyjaśnij, dlaczego to nie pasuje** w zakresie projektu i zaoferuj jasne sugestie ulepszeń, jeśli możesz. Bądź miły, ale stanowczy.
* **Link do odpowiedniej dokumentacji**, jeśli ją masz. Jeśli zauważysz powtarzające się prośby o rzeczy, których nie chcesz akceptować, dodaj je do swojej dokumentacji, aby uniknąć powtarzania się.
* **Zamknij request**

Aby odpowiedzieć, nie powinieneś potrzebować więcej niż 1-2 zdań. Na przykład, gdy użytkownik [celery](https://github.com/celery/celery/) zgłosił błąd związany z systemem Windows, @berkerpeksag [odpowiedział z](https://github.com/celery/celery/issues/3383):

![Celery screenshot](/assets/images/best-practices/celery.png)

Jeśli myśl o mówieniu „nie” przeraża cię, nie jesteś sam. Tak jak @jessfraz ['put it'](https://blog.jessfraz.com/post/the-art-of-closing/):

> I've talked to maintainers from several different open source projects, Mesos, Kubernetes, Chromium, and they all agree one of the hardest parts of being a maintainer is saying "No" to patches you don't want.

Nie czuj się winny, że nie chcesz zaakceptować czyichś wkładów. Pierwsza zasada open source, [według](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"'Nie' jest tymczasowe, 'tak' jest na zawsze."_ Chociaż zrozumienie entuzjazmu innej osoby jest dobrą rzeczą, odrzucenie wkładu nie jest tym samym, co odrzucenie osoby stojącej za nim.

Ostatecznie, jeśli wkład nie jest wystarczająco dobry, nie masz obowiązku go zaakceptować. Bądź uprzejmy i elastyczny, gdy ludzie wnoszą swój wkład w projekt, ale akceptuj tylko zmiany, które według ciebie poprawią Twój projekt. Im częściej ćwiczysz mówienie „nie”, tym jest łatwiej. Obiecuję.

### Bądź proaktywny

Aby przede wszystkim zmniejszyć liczbę niechcianych wkładów, wyjaśnij proces składania i przyjmowania wkładów w projekcie w przewodniku.

Jeśli otrzymujesz zbyt wiele wkładów niskiej jakości, poproś, aby autorzy wykonali wcześniej trochę pracy, na przykład:

* Wypełnij problem lub szablon/listę kontrolną PR
* Otwórz problem przed przesłaniem PR

Jeśli nie będą przestrzegać twoich zasad, natychmiast zamknij problem i wskaż dokumentację.

Chociaż takie podejście może początkowo wydawać się niemiłe, bycie proaktywnym jest w rzeczywistości dobre dla obu stron. Zmniejsza to szansę, że ktoś poświęci wiele straconych godzin pracy na żądanie ściągnięcia, którego nie zamierzasz zaakceptować. I ułatwia zarządzanie twoim obciążeniem pracą.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  <i>
  Ideally, explain to them and in a CONTRIBUTING.md file how they can get a better indication in the future on what would or would not be accepted before they begin the work.</i>
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["Kindly Closing Pull Requests"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

Czasami, gdy odmówisz, twój potencjalny współpracownik może się zdenerwować lub skrytykować twoją decyzję. Jeśli ich zachowanie stanie się wrogie, [podejmij kroki w celu rozładowania sytuacji](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) lub nawet usuń ze swojej społeczności, jeśli nie chcą konstruktywnie współpracować.

### Objęcie mentoringiem

Być może ktoś w Twojej społeczności regularnie przesyła materiały, które nie spełniają standardów twojego projektu. Wielokrotne odrzucanie przez obie strony może być frustrujące.

Jeśli widzisz, że ktoś jest entuzjastycznie nastawiony do twojego projektu, ale potrzebuje odrobiny dopracowania, bądź cierpliwy. Wyjaśnij jasno w każdej sytuacji, dlaczego ich wkład nie spełnia oczekiwań projektu. Spróbuj wskazać im łatwiejsze lub mniej dwuznaczne zadanie, takie jak problem oznaczony jako _"good first issue,"_, aby zmoczyć stopy. Jeśli masz czas, zastanów się nad ich mentoringiem poprzez ich pierwszy wkład lub znajdź kogoś w swojej społeczności, kto mógłby być ich mentorem.

## Wykorzystaj swoją społeczność

Nie musisz robić wszystkiego sam. Społeczność twojego projektu istnieje bez powodu! Nawet jeśli nie masz jeszcze aktywnej społeczności współautorów, jeśli masz wielu użytkowników, włącz ich do pracy.

### Udostępnij obciążenie pracą

Jeśli szukasz innych osób, zacznij od pytania.

Jednym ze sposobów na pozyskanie nowych współpracowników jest jawne [label issues które są wystarczająco proste dla początkujących](https://help.github.com/en/articles/helping-new-contributors-find-your-project-with-labels). GitHub wyświetli te problemy w różnych miejscach platformy, zwiększając ich widoczność.

Gdy zobaczysz, że nowi współautorzy wnoszą powtarzający się wkład, rozpoznaj ich pracę, oferując większą odpowiedzialność. Udokumentuj, w jaki sposób inni mogą stać się przywódcami, jeśli chcą.

Zachęcanie innych do [współdzielenia własności projektu](../building-community/#udostępnij-własność-swojego-projektu) może znacznie zmniejszyć własne obciążenie pracą, jak odkrył @lmccart w swoim projekcie, [p5.js](https://github.com/processing/p5.js).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
  <i>
  I’d been saying, "Yeah, anyone can be involved, you don’t have to have a lot of coding expertise [...]." We had people sign up to come [to an event] and that’s when I was really wondering: is this true, what I’ve been saying? There are gonna be 40 people who show up, and it’s not like I can sit with each of them...But people came together, and it just sort of worked. As soon as one person got it, they could teach their neighbor.</i>
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["What Does "Open Source" Even Mean? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39)
  </p>
</aside>

Jeśli musisz odejść od projektu, albo na chwilę, albo na stałe, nie wstydź się poprosić kogoś innego o przejęcie go.

Jeśli inni ludzie entuzjastycznie podchodzą do jego kierunku, daj im dostęp lub formalnie przekaż kontrolę komuś innemu. Jeśli ktoś rozwidlił twój projekt i aktywnie utrzymuje go w innym miejscu, rozważ połączenie z forkiem z oryginalnego projektu. To wspaniałe, że tak wiele osób chce, aby Twój projekt przetrwał!

@progrium [znalazł to](https://web.archive.org/web/20151204215958/https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) dokumentowanie wizji swojego projektu, [Dokku](https://github.com/dokku/dokku), pomógł utrzymać te cele nawet po odejściu z projektu:

> I wrote a wiki page describing what I wanted and why I wanted it. For some reason it came as a surprise to me that the maintainers started moving the project in that direction! Did it happen exactly how I'd do it? Not always. But it still brought the project closer to what I wrote down.

### Pozwól innym zbudować potrzebne im rozwiązania

Jeśli potencjalny współpracownik ma inne zdanie na temat tego, co powinien zrobić Twój projekt, możesz delikatnie zachęcić go do pracy nad własnym forkiem.

Forkowanie projektu nie musi być złą rzeczą. Możliwość kopiowania i modyfikowania projektów jest jedną z najlepszych rzeczy w open source. Zachęcanie członków społeczności do pracy nad własnym forkiem może zapewnić kreatywny rynek, którego potrzebują, bez sprzeczności z wizją projektu.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  <i>
  I cater to the 80% use case. If you are one of the unicorns, please fork my work. I won't get offended! My public projects are almost always meant to solve the most common problems; I try to make it easy to go deeper by either forking my work or extending it.</i>
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Why I Close PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

To samo dotyczy użytkownika, który naprawdę chce rozwiązania, które po prostu nie ma wystarczającej przepustowości do zbudowania. Oferowanie interfejsów API i customization hooks może pomóc innym w zaspokojeniu ich własnych potrzeb, bez konieczności bezpośredniej modyfikacji źródła. @orta [znalazł to](https://artsy.github.io/blog/2016/07/03/handling-big-projects/) zachęcające wtyczki dla CocoaPods doprowadziły do "jednych z najbardziej interesujących pomysłów":

> It's almost inevitable that once a project becomes big, maintainers have to become a lot more conservative about how they introduce new code. You become good at saying "no", but a lot of people have legitimate needs. So, instead you end up converting your tool into a platform.

## Sprowadź roboty

Tak jak istnieją zadania, w których inni mogą ci pomóc, istnieją również zadania, których żaden człowiek nigdy nie powinien wykonywać. Roboty są twoim przyjacielem. Użyj ich, aby ułatwić Ci życie jako opiekunowi.

### Wymagaj testów i innych kontroli w celu poprawy jakości kodu

Jednym z najważniejszych sposobów automatyzacji projektu jest dodanie testów.

Testy pomagają współpracownikom mieć pewność, że niczego nie zniszczą. Ułatwiają także szybkie przeglądanie i przyjmowanie wkładów. Im bardziej jesteś responsywny, tym bardziej zaangażowana może być twoja społeczność.

Skonfiguruj automatyczne testy, które będą przeprowadzane na wszystkich przychodzących kontrybucjach, i upewnij się, że twoje testy mogą być łatwo uruchomione lokalnie przez autorów. Wymagaj, aby wszystkie elementy kodu pomyślnie przeszły testy, zanim będą mogły zostać przesłane. Pomożesz ustalić minimalny standard jakości wszystkich zgłoszeń. [Wymagane kontrole statusu](https://help.github.com/articles/about-required-status-checks/) na GitHub mogą pomóc zapewnić, że żadna zmiana nie zostanie scalona bez pozytywnego wyniku testów.

Jeśli dodasz testy, wyjaśnij, jak działają w pliku CONTRIBUTING.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">
  <i>
  I believe that tests are necessary for all code that people work on. If the code was fully and perfectly correct, it wouldn't need changes – we only write code when something is wrong, whether that's "It crashes" or "It lacks such-and-such a feature". And regardless of the changes you're making, tests are essential for catching any regressions you might accidentally introduce.</i>
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust's Community Automation"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Użyj narzędzi do automatyzacji podstawowych podtrzymujących zadań

Dobra wiadomość o utrzymaniu popularnego projektu polega na tym, że inni opiekunowie prawdopodobnie napotkali podobne problemy i opracowali dla niego rozwiązanie.

Dostępnych jest [wiele dostępnych narzędzi](https://github.com/showcases/tools-for-open-source) aby zautomatyzować niektóre aspekty prac konserwacyjnych. Kilka przykładów:

* [semantic-release](https://github.com/semantic-release/semantic-release) automatyzuje twoje wydania
* [mention-bot](https://github.com/facebook/mention-bot) wymienia potencjalnych recenzentów dla pull requestów
* [Danger](https://github.com/danger/danger) pomaga zautomatyzować code review
* [no-response](https://github.com/probot/no-response) zamyka issues gdzie autor nie odpowiedział na request lub więcej informacji
* [dependabot-preview](https://github.com/marketplace/dependabot-preview) sprawdza pliki zależności każdego dnia pod kątem nieaktualnych wymagań i otwiera indywidualne pull requesty dla każdego, kogo znajdzie

W przypadku raportów o błędach i innych typowych treści GitHub ma [Issue Templates and Pull Request Templates](https://github.com/blog/2111-issue-and-pull-request-templates), które możesz utworzyć, aby usprawnić otrzymywaną komunikację. @TalAter stworzył [Choose Your Own Adventure guide](https://www.talater.com/open-source-templates/#/) aby pomóc Ci napisać swój issue i szablony PR.

Aby zarządzać powiadomieniami e-mail, możesz skonfigurować [filtry e-mail](https://github.com/blog/2203-email-updates-about-your-own-activity) aby organizować według priorytetu.

Jeśli chcesz być nieco bardziej zaawansowany, przewodniki po stylach i strzały mogą ujednolicić wkład projektu i ułatwić jego przeglądanie i akceptowanie.

Jeśli jednak twoje standardy są zbyt skomplikowane, mogą zwiększyć bariery dla wkładu. Upewnij się, że dodajesz tylko wystarczającą liczbę zasad, aby ułatwić wszystkim życie.

Jeśli nie masz pewności, jakich narzędzi użyć, sprawdź, co robią inne popularne projekty, zwłaszcza te w Twoim ekosystemie. Na przykład, jak wygląda proces wkładu dla innych modułów Node? Korzystanie z podobnych narzędzi i podejść sprawi, że proces będzie lepiej znany docelowym współpracownikom.

## Można wcisnąć pauzę

Kiedyś praca open source przyniosła ci radość. Może teraz zaczyna sprawiać, że czujesz się jako unikający lub winny.

Być może czujesz się przytłoczony lub masz coraz większy lęk, gdy myślisz o swoich projektach. W międzyczasie narastają problemy i pull requesty.

Wypalenie jest prawdziwym i wszechobecnym problemem w pracy open source, szczególnie wśród opiekunów. Jako opiekun, twoje szczęście jest niezbywalnym wymogiem przetrwania każdego projektu typu open source.

Chociaż powinno to być oczywiste, zrób sobie przerwę! Nie powinieneś czekać, aż poczujesz się wypalony, zrób wakacje. @brettcannon, główny programista Pythona postanowił wziąć [miesięczne wakacje](https://snarky.ca/why-i-took-october-off-from-oss-volunteering/) po 14 latach wolontariatu OSS.

Podobnie jak w przypadku każdego innego rodzaju pracy, regularne przerwy sprawią, że będziesz odświeżony, szczęśliwy i podekscytowany swoją pracą.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">
  <i>
  In maintaining WP-CLI, I've discovered I need to make myself happy first, and set clear boundaries on my involvement. The best balance I've found is 2-5 hours per week, as a part of my normal work schedule. This keeps my involvement a passion, and from feeling too much like work. Because I prioritize the issues I'm working on, I can make regular progress on what I think is most important.</i>
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["My condolences, you're now the maintainer of a popular open source project"](https://danielbachhuber.com/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

Czasami trudno jest zrobić sobie przerwę w pracy nad oprogramowaniem open source, gdy wydaje się, że wszyscy cię potrzebują. Ludzie mogą nawet próbować sprawić, byś poczuł się winny za odejście.

Staraj się znaleźć wsparcie dla użytkowników i społeczności, gdy jesteś z dala od projektu. Jeśli nie możesz znaleźć potrzebnego wsparcia, zrób sobie przerwę. Komunikuj się, gdy nie będziesz dostępny, aby ludzie nie byli zdezorientowani brakiem reakcji.

Robienie przerw dotyczy nie tylko wakacji. Jeśli nie chcesz wykonywać pracy typu open source w weekendy lub w godzinach pracy, przekaż te oczekiwania innym, aby nie przeszkadzali.

## Najpierw zadbaj o siebie!

Utrzymanie popularnego projektu wymaga innych umiejętności niż wcześniejsze etapy rozwoju, ale jest nie mniej satysfakcjonujące. Jako opiekun ćwiczysz umiejętności przywódcze i osobiste na poziomie, którego niewielu ludzi może doświadczyć. Chociaż nie zawsze jest to łatwe do zarządzania, ustalanie wyraźnych granic i przyjmowanie tylko tego, z czym czujesz się komfortowo, pomoże ci pozostać szczęśliwym, odświeżonym i produktywnym.
