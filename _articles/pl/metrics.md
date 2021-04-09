---
lang: pl
title: Metryki Open Source
description: Podejmuj świadome decyzje, aby pomóc w rozwoju projektu open source, mierząc i śledząc jego sukces.
class: metrics
order: 9
image: /assets/images/cards/metrics.png
related:
  - finding
  - best-practices
---

## Po co mierzyć?

Dane, jeśli są mądrze wykorzystywane, mogą pomóc w podejmowaniu lepszych decyzji jako opiekun oprogramowania typu open source.

Więcej informacji pozwala:

* Dowiedz się, jak użytkownicy reagują na nową funkcję
* Dowiedz się, skąd pochodzą nowi użytkownicy
* Zidentyfikuj i zdecyduj, czy wesprzeć przypadek użycia funkcji odstającej lub funkcjonalność
* Określ popularność swojego projektu
* Zrozum, w jaki sposób używany jest twój projekt
* Zbieraj pieniądze poprzez sponsoring i granty

Na przykład [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Analytics.md) stwierdza, że Google Analytics pomaga im nadać priorytet pracy:

> Homebrew jest oferowany bezpłatnie i jest prowadzony wyłącznie przez wolontariuszy w wolnym czasie. W rezultacie nie mamy zasobów do przeprowadzenia szczegółowych badań użytkowników Homebrew, aby zdecydować, jak najlepiej zaprojektować przyszłe funkcje i nadać priorytet bieżącym pracom. Anonimowe zagregowane analizy użytkowników pozwalają nam nadawać priorytet poprawkom i funkcjom w oparciu o to, jak, gdzie i kiedy ludzie korzystają z Homebrew.

Popularność to nie wszystko. Każdy dostaje się do open source z różnych powodów. Jeśli Twoim celem jako opiekuna oprogramowania typu open source jest pochwalenie się swoją pracą, zachowanie przejrzystości kodu lub po prostu dobra zabawa, wskaźniki mogą nie być dla Ciebie ważne.

Jeśli _jesteś_ zainteresowany zrozumieniem swojego projektu na głębszym poziomie, zapoznaj się ze sposobami analizy jego aktywności.

## Discovery

Zanim ktokolwiek będzie mógł wykorzystać Twój projekt lub wesprzeć go, musi wiedzieć, że on istnieje. Zadaj sobie pytanie: _czy ludzie znajdują ten projekt?_

![Traffic graph](/assets/images/metrics/repo_traffic_graphs_tooltip.png)

Jeśli Twój projekt jest hostowany na GitHub, [możesz zobaczyć](https://help.github.com/articles/about-repository-graphs/#traffic), ile osób wylądowało na twoim projekcie i skąd pochodzi. Na stronie projektu kliknij „Statystyki”, a następnie „Ruch”. Na tej stronie możesz zobaczyć:

* **Łączna liczba wyświetleń strony:** Informuje, ile razy Twój projekt był oglądany

* **Całkowita liczba unikalnych odwiedzających:** Informuje, ile osób obejrzało Twój projekt

* **Witryny odsyłające:** Informują o pochodzeniu użytkowników. Te dane pomogą Ci dowiedzieć się, gdzie dotrzeć do odbiorców i czy działania promocyjne przynoszą efekty.

* **Popularna treść:** Informuje, gdzie odwiedzają Twój projekt, w podziale na wyświetlenia stron i unikalnych użytkowników.

[GitHub stars](https://help.github.com/articles/about-stars/) może również pomóc w zapewnieniu podstawowej miary popularności. Chociaż gwiazdy GitHub niekoniecznie korelują z pobieraniem i użytkowaniem, mogą powiedzieć, ile osób zwraca uwagę na Twoją pracę.

Możesz także chcieć [śledzić wykrywalność w określonych miejscach](https://opensource.com/business/16/6/pirate-metrics): na przykład Google PageRank, ruch z odsyłaczy z witryny Twojego projektu lub skierowania z innych otwartych projekty źródłowe lub strony internetowe.

## Stosowanie

Ludzie znajdują Twój projekt w tej szalonej i szalonej rzeczy, którą nazywamy internetem. Idealnie, gdy zobaczą Twój projekt, poczują się zmuszeni do zrobienia czegoś. Drugie pytanie, które chcesz zadać, to: _czy ludzie korzystają z tego projektu?_

Jeśli używasz menedżera pakietów, takiego jak npm lub RubyGems.org, do rozpowszechniania projektu, możesz być w stanie śledzić pobrania projektu.

Każdy menedżer pakietów może używać nieco innej definicji „pobierania”, a pobieranie niekoniecznie koreluje z instalacjami lub użyciem, ale zapewnia pewną podstawę do porównania. Spróbuj użyć [Libraries.io](https://libraries.io/) do śledzenia statystyk użytkowania wielu popularnych menedżerów pakietów.

Jeśli Twój projekt znajduje się na GitHub, ponownie przejdź do strony „Ruch drogowy”. Możesz użyć [wykres klonowania](https://github.com/blog/1873-clone-graphs), aby zobaczyć, ile razy twój projekt został sklonowany w danym dniu, w podziale na całkowitą liczbę klonów i unikatowych klonerów.

![Clone graph](/assets/images/metrics/clone_graph.png)

Jeśli użycie jest niskie w porównaniu z liczbą osób odkrywających Twój projekt, należy rozważyć dwa problemy. Zarówno:

* Twój projekt nie zmienia liczby odbiorców lub
* Przyciągasz niewłaściwych odbiorców

Na przykład, jeśli Twój projekt wyląduje na pierwszej stronie Hacker News, prawdopodobnie zobaczysz skok w odkrywaniu (ruch), ale niższy współczynnik konwersji, ponieważ docierasz do wszystkich w Hacker News. Jeśli Twój projekt Ruby jest prezentowany na konferencji Ruby, bardziej prawdopodobne jest, że zobaczysz wysoki współczynnik konwersji wśród docelowych odbiorców.

Spróbuj dowiedzieć się, skąd pochodzą Twoi odbiorcy i poproś innych o opinie na stronie projektu, aby dowiedzieć się, z którym z tych dwóch problemów masz do czynienia.

Gdy dowiesz się, że ludzie korzystają z Twojego projektu, możesz spróbować dowiedzieć się, co z nim robią. Czy bazują na nim, rozwodząc kod i dodając funkcje? Czy używają go do nauki czy biznesu?

## Zatrzymywanie

Ludzie znajdują Twój projekt i go używają. Następnym pytaniem, które chcesz sobie zadać, jest: _czy ludzie biorą udział w tym projekcie?_

Nigdy nie jest za wcześnie, aby zacząć myśleć o autorach. Bez udziału innych osób ryzykujesz, że wpadniesz w niezdrową sytuację, w której Twój projekt jest popularny (wiele osób go używa), ale nie jest wspierany (za mało czasu opiekuna na zaspokojenie popytu).

Przechowywanie wymaga również [napływu nowych współautorów](http://blog.abigailcabunoc.com/increasing-developer-engagement-at-mozilla-science-learning-advocacy#contributor-pathways_2), ponieważ wcześniej aktywni współautorzy w końcu przejdą dalej do innych rzeczy.

Przykłady wskaźników społeczności, które warto regularnie śledzić, obejmują:

* **Łączna liczba współpracowników i liczba zatwierdzeń na jednego współpracownika:** Informuje, ilu masz współpracowników i kto jest mniej lub bardziej aktywny. W serwisie GitHub możesz to wyświetlić w sekcji „Statystyki” -> „Współtwórcy”. W tej chwili ten wykres zlicza tylko autorów, którzy zaangażowali się w domyślną gałąź repozytorium.

![Contributor graph](/assets/images/metrics/repo_contributors_specific_graph.png)

* **Po raz pierwszy, nieformalny i powtarzający się współautorzy:** Pomagają śledzić, czy zdobywasz nowych współpracowników i czy wrócą. (Przypadkowi współpracownicy to współautorzy z małą liczbą zatwierdzeń. Niezależnie od tego, czy jest to jeden zatwierdzenie, mniej niż pięć zatwierdzeń, czy coś innego zależy od ciebie.) Bez nowych współpracowników społeczność twojego projektu może stać w stagnacji.

* **Liczba otwartych problemów i otwartych żądań ściągania:** Jeśli te liczby stają się zbyt wysokie, możesz potrzebować pomocy w analizowaniu problemów i przeglądaniu kodu.

* **Liczba _opened_ issues i _opened_ pull requests:** Otwarte problemy oznaczają, że ktoś dba o twój projekt, aby otworzyć problem. Jeśli liczba ta rośnie z czasem, sugeruje to, że ludzie są zainteresowani twoim projektem.

* **Rodzaje wkładów:** Na przykład zatwierdza, naprawia literówki lub błędy lub komentuje problem.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/arfon?s=180" class="pquote-avatar" alt="avatar">
  <i>
  Open source is more than just code. Successful open source projects include code and documentation contributions together with conversations about these changes.
  </i>
  <p markdown="1" class="pquote-credit">
— @arfon, ["The Shape of Open Source"](https://github.com/blog/2195-the-shape-of-open-source)
  </p>
</aside>

## Działalność maintainera

Wreszcie, będziesz chciał zamknąć pętlę, upewniając się, że opiekunowie twojego projektu są w stanie obsłużyć liczbę otrzymanych wkładów. Ostatnie pytanie, które chcesz sobie zadać, brzmi: _czy ja (lub my) odpowiadam na naszą społeczność?_

Niereagujący opiekunowie stają się wąskim gardłem dla projektów typu open source. Jeśli ktoś złoży datek, ale nigdy nie usłyszy od opiekuna, może poczuć się zniechęcony i odejść.

[Badania Mozilli](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) sugeruje, że czas reakcji opiekuna jest kluczowym czynnikiem w zachęcaniu do ponownego udziału.

Rozważ śledzenie, ile czasu zajmuje Tobie (lub innemu opiekunowi) odpowiedź na wkład, niezależnie od tego, czy jest to problem, czy prośba o wycofanie. Odpowiadanie nie wymaga podejmowania działań. Może to być tak proste, jak powiedzenie: _„Dziękujemy za przesłanie! Przejrzę to w ciągu następnego tygodnia.”_

Możesz także zmierzyć czas potrzebny na przejście między etapami procesu wkładu, na przykład:

* Średni czas, przez który problem pozostaje otwarty
* Czy problemy zostaną rozwiązane przez PR
* Czy przestarzałe problemy zostaną zamknięte
* Średni czas na scalenie żądania ściągnięcia

## Używaj 📊 aby uczyć się o ludziach

Zrozumienie wskaźników pomoże ci zbudować aktywny, rozwijający się projekt open source. Nawet jeśli nie śledzisz wszystkich danych na pulpicie nawigacyjnym, skorzystaj z powyższej struktury, aby skoncentrować się na typach zachowań, które pomogą w rozwoju projektu.
