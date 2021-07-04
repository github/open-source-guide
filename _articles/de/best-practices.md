---
lang: de
title: Gute Maintainer-Praxis
description: Erleichtern Sie Ihr Leben als Open-Source-Maintainer! Von der Dokumentation von Prozessen bis zum Einsatz Ihrer Community.
class: best-practices
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## Was bedeutet es, eine Software instand zu halten?

Wenn Sie ein Open-Source-Projekt pflegen, welches viele Leute benutzen, haben Sie vielleicht bemerkt, dass Sie weniger programmieren und mehr auf Issues reagieren.

In der Anfangsphase eines Projekts experimentieren Sie mit neuen Ideen und treffen Entscheidungen nach Ihren Wünschen. Da Ihr Projekt immer beliebter wird, werden Sie mehr mit Ihren Benutzer\*innen und Mitwirkenden zusammenarbeiten.

Die Instandhaltung eines Projekts erfordert mehr als nur Code. Diese Aufgaben sind oft unerwartet, aber genauso wichtig für ein wachsendes Projekt. Wir haben einige Möglichkeiten zusammengestellt, um Ihnen das Leben zu erleichtern, von der Dokumentation von Prozessen bis hin zur Nutzung Ihrer Community.

## Dokumentieren Sie Ihre Prozesse

Dinge aufzuschreiben, ist eine der wichtigsten Aufgaben, die Sie als Maintainer\*in erledigt.

Dokumentation verdeutlicht nicht nur Ihr eigenes Denken, sondern macht auch anderen Menschen verständlich, was Sie brauchen oder erwarten, bevor sie überhaupt fragen.

Dinge aufzuschreiben, erleichtert das "Nein" sagen, wenn etwas nicht in Ihren Projektrahmen passt. Es macht es auch einfacher für die Menschen, mitzumachen und zu helfen. Sie wissen nie, wer Ihr Projekt lesen oder nutzen könnte.

Selbst wenn Sie keine vollständigen Absätze niederschreiben: besser Stichworte aufzulisten, als gar nichts zu schreiben.

Denken Sie daran, Ihre Dokumentation auf dem neuesten Stand zu halten. Wenn Sie dies nicht immer tun können, löschen Sie Veraltetes oder markieren es als solches, damit Mitwirkende wissen, dass Updates gerne angenommen werden.

### Schreiben Sie Ihre Projektvision auf

Schreiben Sie zunächst die Ziele Ihres Projekts auf. Fügen Sie sie Ihrer README hinzu oder erstellen Sie eine separate Datei namens VISION. Wenn es andere dafür nützliche Artefakte gibt (z.B. eine Projekt-Roadmap) machen Sie auch diese öffentlich.

Eine klare, dokumentierte Vision hilft Ihnen, sich zu konzentrieren und den "Scope Creep" durch Beiträge anderer zu vermeiden.

Zum Beispiel entdeckte @lord, dass eine Projektvision ihm herauszufinden half, in welche Anfragen er Zeit stecken sollte. Als frisch gebackener Maintainer bedauerte er, dass er sich nicht auf den Kern seines Projekts fokussiert hat, als er seine erste Feature-Anfrage für [Slate](https://github.com/lord/slate) erhielt.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">

  Ich habe es zurechtgefummelt. Ich habe mir nicht die Mühe gemacht, eine komplette Lösung zu finden. Statt einer halbherzigen Lösung wünschte ich, ich hätte gesagt: "Ich habe jetzt keine Zeit dafür, aber ich werde es auf die langfristige Wunschliste setzen."

  _I fumbled it. I didn't put in the effort to come up with a complete solution. Instead of an half-assed solution, I wish I had said "I don't have time for this right now, but I'll add it to the long term nice-to-have list."_

  <p markdown="1" class="pquote-credit">
— @lord, ["Tips for new open source maintainers"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Kommunizieren Sie Ihre Erwartungen

Es kann nervenaufreibend sein, Regeln niederzuschreiben. Manchmal hat man das Gefühl, das Verhalten anderer Leute zu überwachen, oder ein Spaßverderber zu sein.

Allerdings sind niedergeschriebene und fair durchgesetzte Regeln nützlich für Projektbetreuer\*innen. Sie verhindern, dass man in Dinge hineingezogen wird, die man nicht tun will.

Die meisten Menschen, die auf Ihr Projekt stoßen, wissen nichts über Sie oder Ihre Lebensumstände. Sie vermuten vielleicht, dass Sie dafür bezahlt werden, daran zu arbeiten, insbesondere wenn sie Ihr Projekt regelmäßig benutzen und davon abhängig sind. Vielleicht haben Sie mal viel Zeit in Ihr Projekt gesteckt, sind aber jetzt mit einem neuen Job oder Familienmitglied beschäftigt.

All das ist völlig in Ordnung! Stellen Sie nur sicher, dass andere davon erfahren.

Wenn Sie Ihr Projekt in Teilzeit oder auf freiwilliger Basis betreuen, seien Sie ehrlich, wie viel Zeit Ihnen zur Verfügung steht. Die weicht vermutlich von der Zeit ab, die Ihrer Meinung nach für das Projekt benötigt wird, oder die andere erwarten.

Hier sind ein paar Regeln, die es wert sind, aufgeschrieben zu werden:

* Wie ein Beitrag geprüft und akzeptiert wird (_Benötigen sie Tests? Ein Issue-Template?_)
* Die Arten von Beiträgen, die Sie akzeptieren werden (_Wollen Sie nur Hilfe bei einem bestimmten Teil Ihres Codes?_)
* Wenn es angebracht ist, den Vorgang zu verfolgen (z.B. _"Sie können innerhalb von 7 Tagen eine Antwort von einer Betreuerin oder einem Betreuer erwarten. Wenn Sie bis dahin noch nichts gehört haben, können Sie gerne den Thread pingen."_)
* Wie viel Zeit Sie für das Projekt aufwenden (z.B. _"Wir verbringen nur ca. 5 Stunden pro Woche für dieses Projekt"_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules) und [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) bspw. geben ihren Betreuer\*innen und Mitwirkenden nützliche Grundregeln mit.

### Kommunikation öffentlich halten

Vergessen Sie nicht, auch Ihre Interaktionen zu dokumentieren. Wo immer Sie können, halten Sie die Kommunikation über Ihr Projekt öffentlich. Wenn jemand versucht, Sie privat zu kontaktieren, um eine Feature- oder Support-Anfrage zu besprechen, verweisen Sie sich höflich an einen öffentlichen Kommunikationskanal, wie z.B. eine Mailingliste oder einen Issue Tracker.

Wenn Sie sich mit anderen Betreuer\*innen treffen oder eine wichtige Entscheidung privat treffen, dokumentieren Sie diese Gespräche in der Öffentlichkeit, selbst wenn es nur um die Veröffentlichung einer Notiz geht.

Auf diese Weise haben alle Neulinge in Ihrer Community die selben Informationsmöglichkeiten wie Alteingesessene.

## Lernen, "Nein" zu sagen

Sie haben Dinge aufgeschrieben, und im Idealfall würden auch alle Ihre Dokumentation lesen. Allerdings werden Sie in Wirklichkeit andere daran erinnern müssen, dass dieses Wissen existiert.

Alles zu verschriftlichen hilft, persönliche Befindlichkeiten aus Situationen zu entfernen, in denen Sie Ihre Regeln durchsetzen müssen.

"Nein" zu sagen macht keinen Spaß, aber _"Ihr Beitrag entspricht nicht den Kriterien dieses Projekts"_ fühlt sich weniger persönlich an als _"Ich mag Ihren Beitrag nicht"_.

"Nein" zu sagen hilft in viele Situationen, in denen Sie als Maintainer\*in auftreten werden: unnötige Arbeit für andere erledigen, nicht in den Anwendungsbereich passende Feature-Anfragen, jemand zur Ordnung rufen, der eine Diskussion entgleist, usw.

### Das Gespräch freundlich halten

Die wichtigsten Orte, an denen Sie üben werden "Nein" zu sagen, sind Ihr Issue Tracker und die Pull-Request-Liste. Als Projektbetreuer\*in werden Sie unweigerlich Vorschläge erhalten, die Sie nicht akzeptieren wollen.

Vielleicht verändert ein dort eingereichter Beitrag den Umfang Ihres Projekts oder passt nicht zu Ihrer Vision. Vielleicht ist die Idee gut, aber schlecht umgesetzt.

Unabhängig vom Ablehnungsgrund ist es möglich, Beiträge, die nicht den Standards Ihres Projekts entsprechen, taktvoll zu behandeln.

Wenn Sie einen Beitrag erhalten, den Sie nicht annehmen möchten, könnte Ihre erste Reaktion darin bestehen, ihn zu ignorieren oder so zu tun, als ob Sie ihn nicht gesehen hätten. Dies könnte die Gefühle anderer Personen verletzen und sogar andere potenzielle Mitwirkende in Ihrer Gemeinschaft demotivieren.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">

  Der Schlüssel zur Unterstützung großer Open-Source-Projekte liegt darin, die Issues in Bewegung zu halten. Versuchen Sie nicht Issues aufzuschieben. Wenn Sie iOS-Entwickler\*in* sind, wissen Sie, wie frustrierend es sein kann, Radars einzureichen: Sie bekommen 2 Jahre später vielleicht eine Antwort und werden dann angehalten, es nochmal mit der neusten iOS-Version zu probieren.

  _The key to handle support for large-scale open source projects is to keep issues moving. Try to avoid having issues stall. If you're an iOS developer you know how frustrating it can be to submit radars. You might hear back 2 years later, and are told to try again with the latest version of iOS._

  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Scaling open source communities"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

Lassen Sie keinen unerwünschten Beitrag offen, weil Sie sich schuldig fühlen oder nett sein wollen. Im Laufe der Zeit werden unbeantwortete Issues und PRs die Projektarbeit stressiger und einschüchternder machen.

Schließen Sie Beiträge lieber sofort, von denen Sie wissen, dass Sie sie nicht annehmen wollen. Wenn Ihr Projekt bereits unter einem großen Rückstand leidet, hat @steveklabnik Vorschläge für [eine effiziente Behandlung von Issues](https://words.steveklabnik.com/how-to-be-an-open-source-gardener) (Englisch).

Zweitens sendet das Ignorieren von Beiträgen ein negatives Signal an die Gemeinschaft um Ihr Projekt. Einen Projektbeitrag einzureichen, kann einschüchternd sein, besonders für Neulinge. Auch wenn Sie ihren Beitrag nicht annehmen, danken Sie der einreichenden Person für ihr Interesse. Das ist ein großes Kompliment!

Wenn Sie einen Betrag nicht annehmen wollen:

* **Bedanken** Sie sich für den Beitrag.
* **Erklären Sie, warum es nicht in den Rahmen des Projekts passt** und geben Sie klare Verbesserungsvorschläge, wenn Sie dazu in der Lage sind. Seien Sie dabei freundlich, aber bestimmt.
* **Verlinken Sie auf die entsprechende Dokumentation**, wenn Sie diese haben. Wenn Sie wiederholt ähnliche Beiträge bekommen, die Sie nicht akzeptieren wollen, weisen Sie darauf in Ihrer Dokumentation hin, um weitere Wiederholungen zu vermeiden.
* **Schließen Sie die Anfrage**

Sie sollten nicht mehr als 1-2 Sätze benötigen, um zu antworten. Als beispielsweise ein Benutzer von [celery](https://github.com/celery/celery/) einen Windows-bezogenen Fehler meldete, [antwortet](https://github.com/celery/celery/issues/3383) @berkerpeksag mit:

![Celery screenshot](/assets/images/best-practices/celery.png)

Wenn Ihnen der Gedanke, "Nein" zu sagen, Angst macht, sind Sie nicht allein. Wie @jessfraz [es formulierte](https://blog.jessfraz.com/post/the-art-of-closing/):

> Ich habe mit Maintainern aus verschiedenen Open-Source-Projekten gesprochen, Mesos, Kubernetes, Chromium, und sie alle sind sich einig, dass einer der schwierigsten Aufgaben des Maintainertums darin besteht, "Nein" zu Patches zu sagen, die man nicht will.
>
> I've talked to maintainers from several different open source projects, Mesos, Kubernetes, Chromium, and they all agree one of the hardest parts of being a maintainer is saying "No" to patches you don't want.

Fühlen Sie sich nicht schuldig, weil Sie den Beitrag von jemandem nicht annehmen wollen. Die erste Regel in Open-Source-Projekten, [nach](https://twitter.com/solomonstre/status/715277134978113536) @shykes lautet: "'Nein' ist vorübergehend. 'Ja' ist für immer." Obwohl es gut ist, sich in die Begeisterung einer anderen Person hineinzufühlen, ist die Ablehnung eines Beitrags nicht dasselbe wie die Ablehnung der Person dahinter.

Wenn ein Beitrag nicht gut genug ist, sind Sie nicht verpflichtet, ihn anzunehmen. Seien Sie freundlich und reaktionsschnell, wenn Menschen zu Ihrem Projekt beitragen möchten. Aber akzeptieren Sie nur Änderungen, von denen Sie wirklich glauben, dass sie Ihr Projekt verbessern werden. Je öfter Sie "Nein" sagen, desto einfacher wird es. Versprochen.

### Seien Sie proaktiv

Um das Volumen der unerwünschten Beiträge zu reduzieren, erklären Sie den Prozess der Einreichung und Annahme von Beiträgen in einem "Contribution Guide".

Wenn Sie zu viele minderwertige Beiträge erhalten, verlangen Sie zum Beispiel, dass die Mitwirkenden vorher ein wenig Arbeit leisten, z.B.:

* eine Issue- oder PR-Vorlage/-Checkliste ausfüllen
* ein Issue erstellen, bevor sie ein Pull Request einreichen

Wer nicht Ihren Regeln folgt, dessen Issue können Sie sofort schließen und dabei auf Ihre Dokumentation verweisen.

Auch wenn sich dieser Ansatz zunächst unfreundlich anfühlt, ist es für beide Seiten gut, proaktiv zu sein. Es verringert die Chance, dass jemand zu viele Arbeitsstunden in ein Pull Request vergeudete, das Sie nicht akzeptieren werden. Und es macht Ihre Arbeit einfacher zu verwalten.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">

  Im Idealfall erklären Sie ihnen und in einer CONTRIBUTING.md-Datei, wie sie in Zukunft vor Beginn der Arbeit einen besseren Hinweis darauf erhalten können, was Sie akzeptieren würden oder nicht.

  _Ideally, explain to them and in a CONTRIBUTING.md file how they can get a better indication in the future on what would or would not be accepted before they begin the work._

  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["Kindly Closing Pull Requests"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

Manchmal, wenn Sie "Nein" sagen, kann Ihr potenzieller Mitwirkender verärgert sein oder Ihre Entscheidung kritisieren. Wenn deren Verhalten feindselig wird, unternehmen Sie [Schritte, um die Situation zu entschärfen](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) oder entfernen Sie sie sogar aus Ihrer Gemeinschaft, wenn keine Bereitschaft zur konstruktiven Zusammenarbeit erkennbar ist.

### Mentorschaft etablieren

Vielleicht reicht jemand in Ihrer Community regelmäßig Beiträge ein, die nicht den Standards Ihres Projekts entsprechen. Es kann für beide Seiten frustrierend sein, immer wieder Ablehnungen zu erfahren.

Wenn Sie sehen, dass jemand von Ihrem Projekt begeistert ist, aber ein wenig aufpoliert werden muss, haben Sie Geduld. Erklären Sie in jeder Situation deutlich, warum ein Beitrag nicht den Erwartungen des Projekts entspricht. Versuchen Sie, sie auf eine einfachere oder weniger zweideutige Aufgabe hinzuweisen. Beispielsweise ein Problem, das mit _"good first issue"_ gekennzeichnet ist. Wenn Sie die Zeit dazu haben, erwägen Sie folgendes: Die oder den Mitwirkenden durch den ersten Beitragsprozess hindurch anzuleiten oder finden Sie in Ihrer Community jemanden, der/die zu einer solchen Betreuung bereit sein könnte.

## Nutzen Sie Ihre Community

Sie müssen nicht alles selbst machen. Die Gemeinschaft Ihres Projekts existiert aus einem bestimmten Grund! Auch wenn Sie noch keine aktiv Beitragenden haben: Viele Benutzer\*innen können Ihnen bei der Projektarbeit helfen.

### Teilen Sie die Arbeitslast

Wenn Sie auf der Suche nach Mitwirkenden sind, fragen Sie doch einfach mal herum.

Sie können auch [Issues, die für Anfänger einfach genug sind, explizit markieren (Englisch)](https://help.github.com/en/articles/helping-new-contributors-find-your-project-with-labels). GitHub weist auf solche Issues vermehrt hin, sodass beitragswillige Neulinge zu nützlicher Mitarbeit ermuntert werden.

Wenn Sie neue Mitwirkende bemerken, die wiederholt Beiträge leisten, erkennen Sie deren Arbeit an, indem Sie ihnen mehr Verantwortung anbieten. Dokumentieren Sie, wie andere in Führungsrollen hineinwachsen können, wenn sie es wünschen.

Andere zu ermutigen, [sich am Projekt zu beteiligen](../building-community/#teilen-sie-die-eigentümerschaft-an-ihrem-projekt), kann den eigenen Arbeitsaufwand erheblich reduzieren, wie @lmccart in ihrem Projekt [p5.js](https://github.com/processing/p5.js) feststellte.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">

  Ich hatte gesagt: "Ja, jede\*r kann mitmachen. Sie müssen nicht viel Programmiererfahrung haben (...)" Wir hatten Leute, die sich angemeldet haben, um \[zu einer Veranstaltung\] zu kommen und da habe ich mich wirklich gefragt: Ist das wahr, was ich gesagt habe? Es werden 40 Leute auftauchen und es ist nicht so, dass ich bei jedem von ihnen sitzen kann... Aber die Leute kamen zusammen, und es hat einfach funktioniert. Sobald eine Person es verstand, konnte sie ihre\*n Nachbar\*in unterrichten.

  _I'd been saying, "Yeah, anyone can be involved, you don't have to have a lot of coding expertise (...)." We had people sign up to come \[to an event\] and that's when I was really wondering: is this true, what I've been saying? There are gonna be 40 people who show up, and it's not like I can sit with each of them...But people came together, and it just sort of worked. As soon as one person got it, they could teach their neighbor._

  <p markdown="1" class="pquote-credit">
—  @lmccart, ["What Does "Open Source" Even Mean? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39)
  </p>
</aside>

Wenn Sie sich aus Ihrem Projekt zurückziehen müssen (egal ob temporär oder auf Dauer), ist es keine Schande, jemand anders zu bitten, für Sie zu übernehmen.

Wenn andere Leute von Ihrer Projektrichtung begeistert sind, gewähren Sie ihnen Commit-Rechte oder übergeben Sie formell die Kontrolle. Wenn jemand einen Fork Ihres Projektes erstellt hat, und es an anderer Stelle aktiv pflegt, sollten Sie in Erwägung ziehen, aus Ihrem ursprünglichen Projekt heraus auf den Fork zu verweisen. Es ist großartig, dass Menschen Ihr Projekt weiterleben sehen wollen!

@progrium [fand heraus](https://web.archive.org/web/20151204215958/https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) (Englisch), dass es seinem Projekt [Dokku](https://github.com/dokku/dokku) auch nach seinem Rückzug weiter zu leben half, dass er die Vision dokumentiert hatte,

> Ich habe eine Wiki-Seite geschrieben, die beschreibt, was ich wollte und warum ich es wollte. Aus irgendeinem Grund war es für mich eine Überraschung, dass die Maintainer\*innen das Projekt in diese Richtung bewegten! Ist es genau so passiert, wie ich es getan habe? Nicht immer. Aber sie brachten das Projekt trotzdem näher an das heran, was ich aufgeschrieben habe.
>
> I wrote a wiki page describing what I wanted and why I wanted it. For some reason it came as a surprise to me that the maintainers started moving the project in that direction! Did it happen exactly how I'd do it? Not always. But it still brought the project closer to what I wrote down.

### Lassen Sie andere ihre eigenen Lösungen bauen

Wenn ein potenzieller Mitwirkender eine andere Meinung über das Ziel Ihres Projekt hat, sollten Sie ihn oder sie vielleicht sanft ermutigen, an einem eigenem Fork zu arbeiten.

Ein Projekt zu forken, muss keine schlechte Sache sein. Projekte kopieren und modifizieren zu können, ist eine der besten Möglichkeiten, die Open Source mitbringt. Ihre Community-Mitglieder zur Arbeit an eigenen Forks zu ermutigen, kann ein notwendiges Ventil für Kreativität bieten, die nicht mit der Vision Ihres Projekts in Konflikt gerät.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">

  Ich kümmere mich um die normalen Anwendungsfälle. Wenn Du zu den Einhörnern gehörst, bitte forke meine Arbeit. Das nehme ich Dir nicht krumm! Meine öffentlichen Projekte sind fast immer dazu gedacht, die häufigsten Probleme zu lösen. Ich versuche, es anderen leicht zu machen, darauf aufzubauen, indem sie meine Arbeit forken oder erweitern.

  _I cater to the 80% use case. If you are one of the unicorns, please fork my work. I won't get offended! My public projects are almost always meant to solve the most common problems; I try to make it easy to go deeper by either forking my work or extending it._

  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Why I Close PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

Das Gleiche gilt für Benutzer\*innen, die wirklich eine Lösung haben möchten, deren Erstellung Sie einfach nicht leisten können. Das Anbieten von APIs und Plugin-Systemen kann anderen helfen, ihre eigenen Bedürfnisse zu erfüllen, ohne den Quellcode direkt ändern zu müssen. @orta [fand heraus](https://artsy.github.io/blog/2016/07/03/handling-big-projects/), dass Plugins für CocoaPods zu "einigen der interessantesten Ideen" führten:

> Es ist fast unvermeidlich, dass Maintainer, sobald ein Projekt groß wird, viel konservativer werden müssen, was die Einführung von neuem Code angeht. Sie werden gut darin, "Nein" zu sagen, aber viele Menschen haben legitime Bedürfnisse. Verwandeln Sie also Ihr Werkzeug in eine Plattform.
>
> It's almost inevitable that once a project becomes big, maintainers have to become a lot more conservative about how they introduce new code. You become good at saying "no", but a lot of people have legitimate needs. So, instead you end up converting your tool into a platform.

## Delegieren Sie an Bots

So wie es Aufgaben gibt, die andere Menschen Ihnen abnehmen können, gibt es auch Aufgaben, die kein Mensch jemals zu erledigen haben sollte. Bots sind Ihre Freunde. Verwenden Sie sie, um sich Ihr Leben als Maintainer\*in zu erleichtern.

### Verlangen Sie Tests und andere Kontrollen, um die Codequalität zu verbessern.

Eine der wichtigsten Möglichkeiten, wie Sie Ihr Projekt automatisieren können, ist das Hinzufügen von Tests.

Tests geben Mitwirkenden den Mut zu Änderungsvorschlägen, denn sie können nichts (unbemerkt) kaputt machen. Sie erleichtern es sich damit auch selbst, Beiträge schnell zu prüfen und anzunehmen. Je reaktionsschneller Sie sind, desto engagierter kann Ihre Gemeinschaft sein.

Richten Sie automatische Tests ein, die bei allen eingehenden Beiträgen ausgeführt werden und stellen Sie sicher, dass Ihre Tests problemlos lokal von den Mitwirkenden ausgeführt werden können. Verlangen Sie, dass alle Codebeiträge Ihre Tests bestehen, bevor sie eingereicht werden können. Sie sichern einen Mindeststandards für die Qualität aller Einreichungen. [Verpflichtende Status-Checks](https://help.github.com/articles/about-required-status-checks/) auf GitHub können dazu beitragen, dass keine Änderungsvorschläge angenommen werden, die nicht Ihre Tests bestanden werden.

Wenn Sie Tests hinzufügen, erklären Sie deren Funktionsweise in Ihrer CONTRIBUTING-Datei.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">

  Ich glaube, dass Tests für jeden Code, an dem Menschen arbeiten, notwendig sind. Wenn der Code vollständig und vollkommen korrekt wäre, müsste er nicht geändert werden - wir schreiben Code nur, wenn etwas nicht stimmt, sei es "Es stürzt ab" oder "Es fehlt dieses oder jenes Feature". Unabhängig von den Änderungen, die Sie vornehmen, sind Tests unerlässlich, um versehentlich entstandene Regressionen abzufangen.

  _I believe that tests are necessary for all code that people work on. If the code was fully and perfectly correct, it wouldn't need changes – we only write code when something is wrong, whether that's "It crashes" or "It lacks such-and-such a feature". And regardless of the changes you're making, tests are essential for catching any regressions you might accidentally introduce._

  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust's Community Automation"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Automatisieren Sie grundlegende Wartungsaufgaben

Viele Maintainer\*innen populärer Projekte sind mit ähnlichen Problemen konfrontiert, darum gibt es [viele fertig entwickelte Lösung](https://github.com/showcases/tools-for-open-source), die Wartungsarbeiten automatisieren können. Einige Beispiele:

* [semantic-release](https://github.com/semantic-release/semantic-release) automatisiert Ihre Veröffentlichungen
* [mention-bot](https://github.com/facebook/mention-bot) erwähnt potentielle Reviewer für Pull Requests
* [Danger](https://github.com/danger/danger) hilft bei der Automatisierung des Code Review
* [no-response](https://github.com/probot/no-response) schließt Issues deren Autor\*in nicht auf Nachfragen antwortet
* [dependabot-preview](https://github.com/marketplace/dependabot-preview) prüft bekannte Abhängigkeitsdateien täglich und eröffnet Pull Requests, sobald Aktualisierungen verfügbar werden

Für Fehlerberichte und andere allgemeine Beiträge hat GitHub [Issue- und Pull-Request-Templates](https://github.com/blog/2111-issue-and-pull-request-templates), die Sie erstellen können, um die Kommunikation zu optimieren. @TalAter hat einen [Choose Your Own Adventure Guide](https://www.talater.com/open-source-templates/#/) erstellt, der Ihnen beim Schreiben dieser Vorlagen hilft.

Um Ihre E-Mail-Benachrichtigungen zu verwalten, können Sie [E-Mail-Filter](https://github.com/blog/2203-email-updates-about-your-own-activity) so einrichten, dass sie nach Priorität sortiert werden.

Wenn Sie etwas fortgeschrittener werden wollen, können Stilvorgaben und Linter die Projektbeiträge standardisieren, und so leichter überprüf- und akzeptierbar machen.

Wenn Ihre Standards jedoch zu kompliziert sind, erhöht dies möglicherweise die Barriere für Mitwirkende. Stellen Sie sicher, dass Sie nur gerade genug Regeln einführen, um allen das Leben leichter zu machen.

Wenn Sie sich nicht sicher sind, welche Tools Sie verwenden sollen, schauen Sie sich an, was andere beliebte Projekte tun, insbesondere die in Ihrem Ökosystem. Wie sieht beispielsweise der Beitragsprozess für andere Node-Module aus? Durch die Verwendung ähnlicher Tools und Ansätze wird Ihr Prozess auch für Ihre Zielgruppe vertrauter.

## Es ist okay, Pause zu machen

Open-Source-Arbeit hat Ihnen einmal Freude gemacht. Vielleicht bereitet sie Ihnen inzwischen Sorgen oder Schuldgefühle.

Vielleicht fühlen Sie sich überfordert oder spüren eine wachsende Angst, wenn Sie an Ihre Projekte denken. Und in der Zwischenzeit häufen sich die Issues und Pull Requests.

Burnout ist ein echtes und allgegenwärtiges Problem in der Open-Source-Arbeit, vor allem bei Maintainer\*innen. Dabei ist Ihr Wohlbefinden eine unabdingbare Voraussetzung für das Überleben eines jeden Open-Source-Projekts.

Obwohl es gar nicht extra gesagt werden müsste: Machen Sie ruhig mal Urlaub! Sie sollten darauf nicht warten, bis Sie sich ausgebrannt fühlen. @brettcannon, ein Python Core Developer, entschied sich nach 14 Jahren freiwilliger OSS-Arbeit für einen [einmonatigen Urlaub](https://snarky.ca/why-i-took-october-off-from-oss-volunteering/).

Genau wie bei jeder anderen Art von Arbeit, werden Sie durch regelmäßige Pausen ausgeruht, glücklich und wieder gespannt auf Ihre Arbeit sein.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">

  Bei der Pflege von WP-CLI habe ich entdeckt, dass ich mich zuerst glücklich machen und klare Grenzen für mein Engagement setzen muss. Die beste Balance, die ich gefunden habe, sind 2 bis 5 Stunden pro Woche, als Teil meines normalen Arbeitsplanes. So bleibt mein Engagement eine Leidenschaft, und fühlt sich nicht zu sehr nach Arbeit an. Da ich die Themen priorisiere, an denen ich arbeite, kann ich regelmäßig Fortschritte bei mir wichtigen Dingen machen.

  _In maintaining WP-CLI, I've discovered I need to make myself happy first, and set clear boundaries on my involvement. The best balance I've found is 2-5 hours per week, as a part of my normal work schedule. This keeps my involvement a passion, and from feeling too much like work. Because I prioritize the issues I'm working on, I can make regular progress on what I think is most important._

  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["My condolences, you're now the maintainer of a popular open source project"](https://danielbachhuber.com/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

Manchmal kann es schwierig sein, eine Pause von der Open-Source-Arbeit zu machen, wenn es sich so anfühlt, als ob alle Sie brauchen. Vielleicht versuchen die Leute Ihnen für Ihre Abwesenheit Schuldgefühle einzureden.

Tun Sie Ihr Bestes, um Unterstützung für Ihre Benutzer\*innen und die Community zu finden, während Sie von einem Projekt weg sind. Wenn Sie nicht die Unterstützung finden, die Sie brauchen, machen Sie trotzdem eine Pause. Stellen Sie sicher, dass Sie kommunizieren, wann Sie nicht erreichbar sind, damit die Leute nicht durch Ihre mangelnde Reaktionsfähigkeit verwirrt werden.

Pausen gelten nicht nur für den Urlaub. Wenn Sie keine Open-Source-Arbeit am Wochenende oder während der Arbeitszeit machen wollen, teilen Sie diese Erwartungen anderen mit, damit sie Sie nicht stören.

## Achten Sie zuerst auf sich!

Die Aufrechterhaltung eines beliebten Projekts erfordert andere Fähigkeiten als die früheren Phasen des Wachstums, aber es ist nicht weniger lohnend. Als Maintainer\*in üben Sie Führung und persönliche Fähigkeiten auf einem Niveau, das nur wenige Menschen erleben. Es ist zwar nicht immer einfach zu handhaben, aber klare Grenzen zu setzen und nur das zu übernehmen, womit Sie sich wohlfühlen, hilft Ihnen, glücklich, ausgeruht und produktiv zu bleiben.
