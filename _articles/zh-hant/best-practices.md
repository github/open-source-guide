---
lang: zh-hant
title: 維護者最佳實踐
description: 身為開源的維護者，如何輕鬆駕馭專案？本指南從文件流程到有效利用社群來展開。
class: best-practices
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
redirect_from: /zh-tw/best-practices/
---

## 身爲一名維護者意味著什麼?

如果你維護著一個非常流行的專案，你可能就會意識到自己寫程式的時間變少，而花費在回答issue的時間越來越多。

在專案的起步階段，你會不斷嘗試著實現自己的新想法，也能夠基於自己想要的作出決定。隨著專案越來越受歡迎，就會發現你大部分的時間都花在了與用戶、貢獻者打交道上。

維護一個專案需要的不僅僅是寫程式的能力。有些時候會有一個你意想不到的的事情要應付，但是這對一個專案的成長也很重要(相對於寫程式來說)，我們收集了一些小技巧來讓你的維護工作變得稍輕鬆些，這些技巧，涉及範圍頗廣，從寫文件到管理社群都有所涉獵。

## 將流程文件化

對於一個專案的維護者來說寫文件是最重要的事情之一。

文件不僅說清楚了你的想法是什麼，還能幫助別人在問問題之前理解你需要什麼和接下在希望做什麼。

將一些東西寫下來，當遇到不符合專案預期的內容時，可以輕鬆的拒絕。同時，它對於人們的參與和提供幫助提供了指導。最有意思的是，撰寫文件的人可能永遠也不知道是誰讀了他寫的文件，或者使用專案。

即使你不想長篇大論，對要點略說一二也比啥都不寫要好。

### 寫下你的專案的發展方向

請在專案啓動時就寫下專案目標，並將之加到 README 文件中，或者創建一個單獨的 **VISION** 文件，其它還能幫助人們瞭解這方面的訊息如專案管理路線圖，最好是也把他們公開。

有一個明確的，用文件表達清晰的願景，能保證專案的走向不會跑偏，同時也能保障不會因爲其他的貢獻者增加的奇怪的需求而使專案變質。

比如，@lord 發現專案有一個明確的願景能夠幫助他決定哪個 PR 值得花時間。作爲一個維護者的新手，他甚至還後悔當他接到第一個關於[slate](https://github.com/lord/slate)PR的時候沒有堅持專案本身的原則。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  我一直都在摸索。我沒有努力尋求一個完整的解決方案。與其採用那種半吊子辦法，我真希望曾經對某些Issue的提出者說："我暫時沒有時間幹這個，但是我會把他放到我的待辦事項中"。
  <p markdown="1" class="pquote-credit">
— @lord, ["開源專案維護者新手的幾點技巧"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### 和大家交流你自己對專案的期望

制定規則是很傷腦筋的。有時候你可能覺得你像是在限制別人的行爲或者說把好玩的東西都搞沒了。

制定了規則，然後嚴格執行，當然啦，好的規則會讓維護者更輕鬆。他們會把你從做自己不願意做的事情中解脫出來。

大多數知道你專案的人對你或者你的處境都是一無所知。他們可能會覺得你做這個專案是有錢拿的，特別是你的專案是他們經常用的而且某種程度上有點依賴的時候。其實你只是在有時候會在專案上花很多時間，但是現在你在忙著安置新工作或者照顧剛出生的兒子。

這些都是再正常不過的事情！所以確保讓別人也知道這些。

如果你維護某個專案是利用空閒時間或者完全自願的，能花多少時間就花多少時間。而不是你覺得專案需要你花多少時間或者別人想讓你花多少時間。

這裡是一些值得你寫進專案裡的東西：

* 怎樣的貢獻會被複查和接受(_需要測試嗎？提Issue有模板嗎？_)
* 你本人會接受什麼類型的貢獻？（_你是不是只希望在某些部分的程式上需要別人的幫助？_）
* 在合適的時候跟進專案（比如說 _如果你在七天之內沒有收到maintainer的回覆，而且依舊沒有其它任何人的回應，那麼就直接找他/她。_）
* 你會在這個專案上話多少時間（比如說 "_我們每星期只會在這個專案上花5個小時_"）

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs)、[CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules)、以及 [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) 均是爲維護者和貢獻者提供了很好的基本規則的專案，乃業內典範。

### 保證交流是公開進行的

不管是什麼時候，保證你的交流是在公共的場所（就是大家都能看到的地方）。如果有人嘗試和你私聊，哪怕是討論一個新的需求或者功能，請禮貌的引導他/她到公共的交流場所，比如郵件列表或者issue tracker。

如果你和別的維護者面談了，或者在私下做了一個很重要的決定，把這些訊息告訴大家，即使只是把你的筆記發上去。

這樣的話，每個人新加入到你們社群的人和已經待了多年的人能夠瞭解到的訊息是一樣的。

## 學會拒絕他人

把所有的事情都寫下來，當然，對你執行你制定的規則的時候客觀分析實際情況也有幫助。

拒絕別人確實不是很好玩，但是也要表現出專業程度，比如使用"你的貢獻不符合這個專案的標準"而不是"我不喜歡你的貢獻"這樣顯得粗魯的語句。

作爲一個維護者，在很多情況下，你都要拒絕別人：不符合專案規則的PR, 某個人脫離了討論的重點，給別人做無關緊要的工作等等。

### 保持友好溝通

你要學會拒絕的最重要的地方就是Issue和PR請求。作爲一個專案的維護者, 你會不可避免的收到你不想接受的建議。

可能某個貢獻並不在專案的範圍或者和你的期望不合。又或者是可能想法很好，但是實現的卻很爛。

不管是什麼原因，在處理這些不符合專案標準的貢獻的時候都要婉轉。

如果你收到了你不想接受的貢獻，你的第一反應可能是忽略或者假裝沒看到。但是這麼做會嚴重傷害到別人而且可能會讓你社群裡的其他貢獻者失去動力。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">
  管理大型開源專案的關鍵就是保證issue活躍。儘量避免讓issue停滯不前。如果你是一個iOS開發者，你會知道<abbr title="提交問題到 Apple 的 Radar bug 跟蹤系統">提交雷達</abbr>是多麼讓人沮喪。你可能過了兩年收到回覆，並被告知要再次使用最新版本的iOS。
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["開源社群黑客增長"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

別因爲自己感到內疚或者想做一個好人就把你不想接受的貢獻繼續保留。隨著時間的流逝，這些你沒有回答的issue和PR會讓你覺得很不爽。

更好的方式是馬上關掉你不想接受的貢獻。如果你的專案已經飽受積壓的issue的折磨，@steveklabnik 可以給你點建議，[如何高效率的解決issue](https://words.steveklabnik.com/how-to-be-an-open-source-gardener)。

第二點，忽略別人的貢獻等於是在社群傳遞了一個負面的信號。讓人感覺提交一個貢獻是蠻恐懼的事情，尤其是對於剛加入的新手來說。即使你不接受他們的貢獻，告訴他們爲什麼然後致謝。這會讓人覺得更舒服。

如果你不想接受某個貢獻：

* **感謝他們** 的貢獻
* **解釋爲什麼他們的貢獻不符合** 專案的需求範圍，然後提供清楚的建議以供改善，如果你可以的話。和藹一點，但同時也要講原則。
* **引用相關的文件，** 如果你有的話。如果你發現你反覆收到你不想接受的貢獻，把他們加到文件以免你重複敘述。

你不需要用超過1-2兩句話來回覆。比如，當一個[celery](https://github.com/celery/celery/)的用戶報告了一個window相關的錯誤，@berkerpeksag 是[這麼](https://github.com/celery/celery/issues/3383)回覆的

![celery screenshot](/assets/images/best-practices/celery.png)

如果你感覺拒絕別人很不好意思，也很正常，其實很多人都是這樣。就像 @jessfraz [說到的](https://blog.jessfraz.com/post/the-art-of-closing/):

> 我和很多來自諸如Mesos, Kubernetes, Chromium等不同開源專案的維護者交流過，他們都異口同聲的覺得做一個維護者最難的就是拒絕你不想要的補丁。

對於不想接受別人的貢獻這件事不要感到愧疚。如 [@shykes](https://github.com/shykes)[所說](https://twitter.com/solomonstre/status/715277134978113536)開源的第一原則就是 _"拒絕是暫時的，接受是永遠的。"_ 當然啦，認同別人的熱情還是一件好事，拒絕他的貢獻和拒絕他這個人是兩碼事。（要做到對事不對人。）

最後，如果一個貢獻不是夠好，你沒任何義務接受它。對那些想對你的專案做貢獻的人保持和藹和積極的態度，但是只能接受那些你確定會讓你的專案變得更好的提交。你說拒絕的次數越多，對你來說拒絕別人就越容易。謹記！

### 保持主動

要想減少你不想接受的貢獻的數量，首先，在你專案的貢獻指南中解釋如何提交貢獻以及怎樣的貢獻會被接受。

如果你收到太多低質量的貢獻，讓那個貢獻者先多做做功課，比如：

* 填寫一個 issue 或者 PR 的模板/清單
* 在提交PR之前先開一個 issue

如果他們不遵從你的規則，馬上關掉 issue 並引用你的文件。

當然啦，這麼搞一開始是不太舒服，但是你主動一點確實對雙方都好。它減少了某個人花了太多時間到一個你不想要的 PR 上的可能性。而且讓你管理起來更輕鬆。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  理論上，在 CONTRIBUTING.md 文件裡面告訴別人在他們開始幹活之前如何更清楚的知道的幹完之後會不會被接受。
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["優雅的關閉 PR "](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

有時候，當你說不的時候，你潛在的貢獻者會感到對你的沮喪或者不爽。如果他們開始找你撕逼了，[採取必要的措施以應對局勢](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items)或者乾脆把他們從你的社群開除，如果他們不打算和你保持建設性的合作關係的話。

### 成爲導師

可能在你的社群裡有人不斷提交一些不符合專案需求的貢獻。對你們雙方來說，不停的拒絕他的提交，會令雙方都很尷尬。

如果你發現有人對你的專案很上心，但是就是需要調教，那就耐心一點。給他解釋明白每次它的提交爲什麼不符合專案需求。嘗試著讓他先做一些簡單一點的事，比如那些標有 _"good first issue"_ 標籤的issue，以此讓他慢慢習慣。如果你有時間的話，考慮教他怎麼完成第一次的貢獻，或者在社區找一個人來負責。

## 有效利用社群

你不需要凡事親力親爲。這就是社群存在的原因！即使你沒有一個活躍的貢獻者社群，但是如果你有很多用戶的話，拉他們來幹活兒。

### 分擔工作量

如果你正在尋找其他人來參與，從身邊的人開始。

當你看到新的貢獻者不停的提交貢獻，通過分配給他們更多任務來表示認可。如果別人願意的話，記錄下別人是怎麼成長爲領導者的過程。

鼓勵別人來[一起管理專案](../building-community/#分享專案的所有權)能很大程度上減輕你的工作量，就像 [@lmccart](https://github.com/lmccart) 在他的專案上做的那樣，[p5.js](https://github.com/processing/p5.js)

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
  我曾經說過，"對，每個人都可以參與進來，你不需要有很多編程的經驗。"當有申請來參加我們的活動的時候，我就在想，這是真的嗎，我說了啥？有將近40個人來了，我雖然不可能和每個人都單獨交談，但是大家一起來了，這說明我說的沒錯。只要有人知道怎麼做了，他們就能教他們的鄰居。
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["開源" 意味著什麼? p5.js 版](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39)
  </p>
</aside>

如果你需要暫時或者永久的離開的專案，請找人來代替你，這並沒有什麼不好意思。

如果別人認同專案的發展方向，給他們提交的權限或者正式把專案所有權轉移給他。如果有人fork了你的專案而且在保持活躍的維護中，考慮在你的原始的倉庫放上這個fork版本的鏈接。如果大家都希望你的專案繼續的話這不失爲一種好辦法

[@progruim](https://github.com/progrium) [發現](https://web.archive.org/web/20151204215958/https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) 由於它給他的專案[Dokku](https://github.com/dokku/dokku)寫一個關於專案發展方向的文件，即使在它離開這個專案後他的那些目標仍然會被實現。

> 我寫了一個wiki來描述我想要啥和爲什麼。不知道爲啥，專案的維護者就開始推動專案朝這個方向發展，這對我來說還是有點驚訝的。他們會絲毫不差的按照我的意願去做這個專案嗎？不總是這樣，但是總是會把專案推動到離我的理想狀態更近的位置。

### 讓別人嘗試他們自己想要的解決方案

如果有貢獻者關於專案有不同的意見，你可以禮貌的鼓勵它在他自己fork版本上繼續工作。

fork一個專案不什麼壞事情。能複製並且修改別人的程式是開源專案最大的好處之一。鼓勵你的社群成員在他自己fork的倉庫上繼續工作，這是在不和你的專案衝突的基礎上，給實現他們的想法最好的出口。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  我迎合80%的用戶需求。但是如果你是那20%中的一個，那麼fork我的專案吧。我不會介意的！我的公開的專案是用來解決那些最常見的問題的。我嘗試著讓別人fork我的專案然後在上面拓展得更加簡單。
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["爲何我關閉了 PR"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

這對於那些強烈的需要某個你沒時間實現的解決方案的用戶來說也是一樣的。提供API或者自定義的鉤子幫助他們更好的實現自己的需求而不需要改動源碼。[@orta](https://github.com/orta)[發現](https://artsy.github.io/blog/2016/07/03/handling-big-projects/)鼓勵在CocoaPods上使用插件導致了很多有趣的想法的誕生。

> 一旦一個專案變大之後，維護者對怎麼增加新程式變得保守是不可避免的事情。你可能很會拒絕別人的需求，但是很多人提的都是合法的需求。所以，你不得不把你的一個工具變成平臺。

## 使用機器人

就像很多工作別人可以幫你做一樣，也有很多工作不需要人來做。因爲有機器可以替代人工，尤其是那些重複、無聊的工作，用好它們能夠讓你的維護生活變得更容易。

### 引進測試和別的檢查來改善你的程式質量

讓你專案自動化的最重要的方法之一就是引進測試。

測試能夠幫助貢獻者自信他們沒有弄壞什麼。測試也讓你複查程式和接受別人的貢獻的過程更加容易。你反應的越多，社群參與的就越多。

設置自動化的測試讓所有新來的貢獻者都可用，而且保證你的測試可以很容易在貢獻者的本地運行。保證所有的程式貢獻者在提交之前都運行你的測試。你還得爲所有的提交設置一個基本的標準。

如果你添加了測試，確保在 CONTRIBUTING 文件裡面解釋他們是怎麼工作的。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">
  我相信測試對所有的程式都是需要的。如果程式被完整的覆蓋了測試，以後就不需要改了。我們只需要在程式崩潰或者需要某個功能的添加程式。不管你在修改什麼，測試對於檢查那些你可能不小心製造的問題都是必須的。
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust 社群的自動化"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### 用工具來自動化日常的維護工作

對於維護一個流行的專案來說，一個好消息是別的維護者也可能遇到過類似的問題而且已經找到一個解決方案。

這裡有[各種各樣的工具](https://github.com/integrations)幫你自動化一部分的維護工作。這裡僅列舉一些常見的例子：

* [semantic-release](https://github.com/semantic-release/semantic-release) 自動化版本發佈
* [mention-bot](https://github.com/facebook/mention-bot) 可能的貢獻者來幫你複查程式
* [Danger](https://github.com/danger/danger) 幫你自動複查程式

對於bug報告和其他常見形式的貢獻，GitHub有[Issue 模版和 Pull Request 模版](https://github.com/blog/2111-issue-and-pull-request-templates), 你可以用來降低溝通成本。你也可以設置[郵件過濾](https://github.com/blog/2203-email-updates-about-your-own-activity)來管理你的郵件提醒。

如果你想更加的先進和高效，程式風格指南和linter能讓你專案收到的貢獻更加規範，而且更容易複查和被接受。

當然啦，如果你的標準太複雜了，反倒會增加了貢獻的難度。所以保證你只添加那些讓每個人工作起來更容易的規則。

如果你不確定用什麼工具，看一看別的流行專案是怎麼做的，特別是和你在一個生態系統的。比如，其他的Node模塊的貢獻流程是怎麼樣的？用相似的工具和方法，能夠讓你專案的貢獻流程對於開發者來說是很熟悉的。

## 不幹了也沒關係

開源專案曾經讓你開心，但可能現在開始讓你不開心了。

可能當你想到你的專案的時候感覺到"亞歷山大"。而同時，issue和PR又紛至沓來。

疲倦在開源工作工作中是一個常見的問題，特別是在維護者中間。作爲一個維護者，你做的開心對專案的生存來說是一個沒有商量餘地的條件。

雖然你不需要跟誰請假，但是也不要拖到自己疲倦不堪的時候纔去度假。[@brettcannon](https://github.com/brettcannon)，一個python的核心開發者，決定在14年的義務勞動之後[休一个月的假](http://www.snarky.ca/why-i-took-october-off-from-oss-volunteering)。

就像其他工作一樣，有規律的休息會讓你對工作保持舒適愉快的心情。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">
  我是WP-CLI的維護者，我發現我需要首先讓自己開心，在開源專案和其他事情之間設定清楚的界限。我發現最好的平衡點就是每週在日常的工作安排中花2-5小時在這上面。這會讓我從感覺太累到保持持續的激情。因爲我給我需要解決的issue表上了優先級，從而我能夠在我認爲重要的事情上有所進展。
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["我的悼文，你現在是一個非常流行的專案的維護者"](https://danielbachhuber.com/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

有時候，當你感覺大家都離不開你的時候，請假去休息是一件蠻困難的事情。甚至你自己會因爲離開而感到愧疚。

在你離開專案的時候儘可能的在用戶和社群中間尋求支持，如果你找到支持你的人，還是休息吧。在你不工作的時候還是要保持和別人交流，這樣人們不會因爲你的失聯而感到奇怪。

休假不僅適用於度假。如果你週末不想做開源專案的工作了，或者在本該工作的時候不想幹活了，和別人說，這樣他們知道什麼時候不該打擾你。

## 首先照顧好自己！

維護一個大型專案時，相比早期的增長階段，是需要更多的不一樣的技能，作爲一個維護者，你會將自己的領導力和個人能力提高一個層次，而這是很少人能體會的到的。但是與此同時，要挑戰管理專案，以及設定清晰的界限。只做你感到舒服的事情，能夠讓你保持開心，活力，高產的狀態。
