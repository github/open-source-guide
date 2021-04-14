---
lang: zh-hant
title: 發起一個開源專案
description: 從開源的世界汲取智慧，著手發起開源專案。
class: beginners
order: 2
image: /assets/images/cards/beginner.png
related:
  - finding
  - building
redirect_from: /zh-tw/starting-a-project/
---

## 什麼是開源，爲什麼要開源

所以你在考慮開始參與開源？恭喜！世界讚賞你的貢獻。讓我們來談談開源是什麼，以及人們這樣做。

### "開源"是什麼意思

當一個專案被開源，這意味着**任何人都可以出於任何目的查看，使用，修改和分發你的專案**。 這些權限通過[開源許可](https://opensource.org/licenses)強制實施。

開源是強大的，因爲它降低了事物被採納的障礙，允許想法迅速傳播。

要瞭解它的工作原理，想象你的朋友組織了一場聚餐，而你帶去了一個櫻桃派。

* 每個人都嚐了那個派（_使用_)
* 派的味道棒極了！大家請你分享它的配方（_view_）
* 一個叫 Alex 的朋友是個糕點師，他建議少放點糖（_modify_）
* 一個叫 Lisa 的朋友想要用它作爲下週的晚餐（_distribute_）

相比之下，一個閉源過程就像去一家餐廳訂購一個櫻桃派。你必須爲了吃餅支付費用，餐廳恐怕不會給你他們的食譜。如果你準確地複製了他們的餡餅，並以你自己的名義出售，餐廳可以對你採取措施。

### 人們爲什麼把他們的作品開源？

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/1500684?v=3&s=460" class="pquote-avatar" alt="avatar">
我從開源使用和協作中獲得的最有價值的經驗之一，就是在我面臨許多與其他開發人員相同問題的過程中所建立的聯繫。
  <p markdown="1" class="pquote-credit">
    — @kentcdodds, ["參與開源對我來說太棒了"](https://kentcdodds.com/blog/how-getting-into-open-source-has-been-awesome-for-me)
  </p>
</aside>

個人或組織爲何想要開源一個專案，[有各種各樣的的原因](http://ben.balter.com/2015/11/23/why-open-source/)，例如：

* **協作：** 開源專案可以接受世界各地人們的修改。 例如 [Exercism](https://github.com/exercism/) 就是一個擁有350多個貢獻者的練習平臺。

* **採用和重組：** 任何人幾乎可以出於任何目的使用開源專案。人們甚至可以使用它來構建其他東西。例如，[WordPress](https://github.com/WordPress) 就是派生自一個名爲 [b2](https://github.com/WordPress/book/blob/HEAD/Content/Part%201/2-b2-cafelog.md) 的現有專案。

* **透明度：** 任何人都可以檢查開源專案是否有錯誤或不一致。 透明度對[保加利亞](https://medium.com/@bozhobg/bulgaria-got-a-law-requiring-open-source-98bf626cf70a) 或[美國](https://sourcecode.cio.gov/)等政府，銀行或醫療保健等受監管行業以及 [Let's Encrypt](https://github.com/letsencrypt) 等安全軟件都很重要。

開源並不僅僅限於軟件。您可以開源任何事物，從數據集到書本。查看 [GitHub Explore](https://github.com/explore) 開找找有什麼是你可以開源的。

### 開源是指"免費"嗎

開源最大的吸引之一是它不花錢。 但是，"免費"只是開源的總體價值的一個副產品。

因爲[開源許可證要求](https://opensource.org/osd-annotated)任何人可以幾乎出於任何目使用，修改和共享您的專案，專案本身往往是免費的。 如果該專案花錢使用，任何人也都可以合法地複製和使用免費版本。

因此，大多數開源專案是免費的，但"免費"不是開源定義的一部分。 有些方法可以通過雙重許可或有限功能間接地爲開源專案收費，同時仍然遵守開源的官方定義。

## 我是否應該發起我自己的開源專案

簡單來說，答案是肯定的，因爲無論結果如何，啓動您自己的專案來瞭解開源的工作原理是一個好方法。

如果你從來沒有創建過一個專案，你可能會擔心人們會說什麼，或者是否有人會注意到。 如果這聽起來像你現在的狀態，別擔心，你並不孤獨！

開源工作就像任何其他充滿創意的活動，無論是寫作還是繪畫。 向世界分享你的作品會讓你提心吊膽，但唯有練習能夠讓你的感覺變好的方法 - 即使你沒有觀衆。

如果你還不確信，請花一點時間思考你的目標可能是什麼。

### 設置你的目標

目標可以幫助你弄清該做什麼，不應該說什麼，以及你在哪方面需要其他人的幫助。 首先問自己，_我是爲什麼開源這個專案？_

這個問題沒有標準答案。 對於一個專案你可以有多個目標，或者具有不同目標的不同專案。

如果你唯一的目標是炫耀你的工作，你甚至可能不需要他人的貢獻，甚至在你的 README 中說明這點。但另一方面，如果你需要貢獻者，你會投入時間來使文檔清晰，好讓新的參與者感到歡迎。

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/3520168?v=3&s=460" class="pquote-avatar" alt="avatar">
在某些時候，我創建了一個自己正在使用的自定義 UIAlertView，我決定將它開源。所以我修改它使其更有活力，並把它上傳到了 GitHub。我還寫了我的第一個文檔，解釋給其他開發人員如何在他們的專案中使用它。很可能沒有人會去使用它，因爲它是一個簡單的專案，但我的貢獻讓我感覺很好。
  <p markdown="1" class="pquote-credit">
— @mavris, ["自學的軟件開發者：爲什麼開源對我們那麼重要"](https://medium.com/rocknnull/self-taught-software-engineers-why-open-source-is-important-to-us-fe2a3473a576)
  </p>
</aside>

隨着你的專案增長，你的社群可能不僅需要你的代碼。迴應問題，審查代碼和傳播你的專案都會成爲開源專案中的重要任務。

而你在非編碼的任務上花費的時間將取決於專案的大小和範圍，你應該準備好作爲維護者來自己解決或找人幫助你。

**如果你是公司開源專案的一部分，** 確保你的專案有它需要茁壯成長的內部資源。 你需要確定誰在啓動後負責維護專案，以及如何與你的社群共享這些任務。

如果你需要專門的預算或人員來促進，操作和維護專案，請儘早提出。

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/1857993?v=3&s=460" class="pquote-avatar" alt="avatar">
當你開始開源一個專案時，確保您的管理流程考慮到您專案周圍社群的貢獻和能力很重要。不要害怕讓那些沒有在你的企業中受僱的貢獻者參與專案的關鍵部分 - 尤其如果他們是頻繁的貢獻者的話。
  <p markdown="1" class="pquote-credit">
— @captainsafia, ["所以你想開源一個專案，是嗎？"](https://dev.to/captainsafia/so-you-wanna-open-source-a-project-eh-5779)
  </p>
</aside>

### 加入其他專案

如果你的目標是學習如何與他人合作或瞭解開源的工作方式，請考慮爲現有專案做出貢獻。從你已經使用並喜歡的專案開始。像修復拼寫錯誤或更新文檔簡單的事也能爲專案做出貢獻。

如果你不知道如何開始作爲貢獻者，請查看我們的[如何貢獻開源指南](../how-to-contribute/)。

## 發起自己的開源專案

即使你沒有很好的時間來開源你的工作。你也可以開源一個想法，正在進行中的工作，或是關閉了多年的源碼。

一般來說，如果你樂意於他人對你工作的查看和反饋，你就應該開源你的專案。

無論您決定開展專案的哪個階段，每個專案都應包括以下文檔：

* [Open source license](https://help.github.com/articles/open-source-licensing/#where-does-the-license-live-on-my-repository)
* [README](https://help.github.com/articles/create-a-repo/#commit-your-first-change)
* [Contributing guidelines](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)
* [Code of conduct](../code-of-conduct/)

作爲維護者，這些組件將幫助你交流你的期望，管理貢獻並保護每個人的合法權益（也包括您自己的）。他們能夠大大增加你積極體驗的機會。

如果您的專案在 GitHub 上，則將這些文件放在您的根目錄中，並使用推薦的文件名將有助於 GitHub 識別並自動將其顯示給讀者。

### 選擇一個許可證 (license)

開源許可證保證其他人可以使用，複製，修改和貢獻給您的專案，而不會產生不良後果。 它也可以保護您免受繁瑣的法律影響。**啓動開源專案時，請務必包含許可證。**

法律工作是非常無趣的。但好消息是，您可以將現有許可證複製並粘貼到存儲庫中。只需要花這麼一點時間，就能保護你的辛苦工作。

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/),  和 [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) 都是非常流行的開源許可證， 但你可以選擇[其他選項](https://choosealicense.com).

當你在GitHub上創建新專案時，你可以選擇許可證。包括開源許可證將使你的GitHub專案成爲開源。

![挑選一個許可證](/assets/images/starting-a-project/repository-license-picker.png)

如果您在管理開放源碼專案的法律方面有其他問題或疑慮，我們已經[在這裏](../legal/)介紹了。

### 編寫自述文件

自述文件不僅僅是用於說明如何使用你的專案。他們還可以解釋你的專案爲什麼重要，以及它可以爲你的用戶做什麼。

在您的自述文件中，嘗試回答以下問題：

* 這個專案做什麼？
* 爲什麼這個專案有用？
* 如何開始？
* 如果需要，我可以在哪裏獲得更多的幫助？

您可以使用自己的README回答其他問題，例如處理貢獻，專案的目標以及許可證和歸屬資訊。 如果您不想接受他人的貢獻，或者您的專案尚未準備好作爲產品提供使用，請將這些資訊寫下來。

<aside markdown="1" class="pquote">
  <img src="https://avatars0.githubusercontent.com/u/168572?v=3&s=460" class="pquote-avatar" alt="avatar">
更好的文檔意味着更多的用戶，更少的求助和更多的貢獻者，等等。要記住你的讀者不是你自己。來到專案中的每個人可能有着截然不同的經歷。
  <p markdown="1" class="pquote-credit">
— @tracymakes, ["這樣寫給他人看（視頻）"](https://www.youtube.com/watch?v=8LiV759Bje0&list=PLmV2D6sIiX3U03qc-FPXgLFGFkccCEtfv&index=10)
  </p>
</aside>

有時，人們會因爲覺得專案未完成而不願意撰寫 README，或者他們不希望做出貢獻。這些都是寫一個 README 的很好的理由。

想要獲得更多靈感，請嘗試使用 @18F 的 ["讓 README 可讀"](https://pages.18f.gov/open-source-guide/making-readmes-readable/) 或者 @PurpleBooth 的 [README 模板](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) 來撰寫一個完整的 README。

當你在根目錄中包含一個 README 文件時，GitHub 會自動將其顯示在存儲庫的主頁上。

### 編寫你的貢獻指南

貢獻文件 (CONTRIBUTING file) 告訴你的受衆如何參與你的專案. 例如，你可以包括一下資訊:

* 如何提交錯誤報告（嘗試使用[issue 和 pull request 模板](https://github.com/blog/2111-issue-and-pull-request-templates)）
* 如何建議一個新功能
* 如何配置你的環境和運行測試

除了技術細節， 貢獻文件也是一個供你傳達對貢獻期待的機會， 例如：

* 你在尋求的貢獻類型
* 你專案的路線圖或者版本
* 貢獻者應該（或者不應該）如何與你取得聯繫

溫柔友好的逾期和向貢獻者們提供具體的建議（例如寫文檔或者搭建一個網頁）能夠有效地使新人感到受歡迎並樂於參與其中。

例如，[Active Admin](https://github.com/activeadmin/activeadmin/) 以這樣的方式開始[它的貢獻指南](https://github.com/activeadmin/activeadmin/blob/HEAD/CONTRIBUTING.md)：

> 首先， 非常感謝你考慮爲 Active Admin 貢獻幫助。正式你這樣的人們使得 Active Admin 成爲瞭如此優秀的工具。

在你專案開始的初期，你的貢獻文件可以很簡單。你應該經常解釋如何提交錯誤和文件問題，以及關於如何作出貢獻的技術問題（例如測試）。

隨着時間的推移，你硬弓增加其他常見問題到你的貢獻文件中去。寫下這些資訊意味着問你相同問題的人會越來越少。

想要獲得更多有關編寫貢獻文件的方式，請查閱 @nayafia 的 [貢獻指南模板](https://github.com/nayafia/contributing-template/blob/HEAD/CONTRIBUTING-template.md) 或者 @mozilla 的 ["如何構建 CONTRIBUTION.md"](http://mozillascience.github.io/working-open-workshop/contributing/)。

來你的 README 中鏈接你的 CONTRIBUTING，這樣更多人就能看到他。如果你[在你的專案中放入了 CONTRIBUTING 文件](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)，當一個貢獻者創建 issue 或者開啓一個 pull request 時，GitHub 會自動鏈接你的文件。

![貢獻指南](/assets/images/starting-a-project/Contributing-guidelines.jpg)

### 建立行爲規範

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/11214?v=3&s=460" class="pquote-avatar" alt="avatar">
  我們都有過這樣的關於重複勞動的經驗，無論是維護者試着解釋爲什麼某些事物必須通過某種明確的方式執行，或者是用戶...提出一個簡單的問題。行爲規範成爲一個便利的參考和可鏈接的文檔標明你的團隊會認真對待具有建設性的討論。
  <p markdown="1" class="pquote-credit">
— @mlynch, ["讓開源成爲一個有趣的地方"](https://medium.com/ionic-and-the-mobile-web/making-open-source-a-happier-place-3b90d254f5f#.v4qhl7t7v)
  </p>
</aside>

最後，行爲規範有助於爲你專案的參與者車裏行爲規則。這在你爲社群或者專案推出一個開源專案的時候尤爲有價值。一份行爲幫助你促進健康，有建設性的社群行爲，這也會減輕你作爲維護者的壓力。

更多資訊，請參見 [行爲規範指導](../code-of-conduct/)。

除了傳達你期待參與者**如何**行動，行爲規範也傾向於描述這些期待針對誰，適用於何時，以及對於違規行爲的處理方法。

就像開源許可證一樣，有現成的行爲規範，所以你不必自己編寫。[貢獻者公約](http://contributor-covenant.org/)是一個行之有效的行爲規範，已經被用在[超過4000個開源專案](http://contributor-covenant.org/adopters/)，包括 Kubernetes，Rails，以及 Swift。無論你使用哪一種，你都應該準備好在必要時執行行爲規範。

將文本直接粘貼到專案存儲庫中的 CODE_OF_CONDUCT 文件中。將文件保存在專案的根目錄中，以便輕鬆找到，並從 README 中鏈接到它。

## 爲專案命名及設立品牌

品牌不僅是一個華麗的logo或者易記的專案名。它還關於你如何談論你的專案，以及你想把資訊傳遞給誰。

### 選擇正確的名字

選擇一個容易記住，有創意，能表達專案用意的名字。例如：

* [Sentry](https://github.com/getsentry/sentry) 監控應用程序的崩潰報告
* [Thin](https://github.com/macournoyer/thin) 是一個簡單快速的Ruby web服務器。

如果你的專案是基於一個已存在的專案創建，那麼使用他們的名字作爲你專案名的前綴會幫助你闡述你專案的用途。 (例如 [node-fetch](https://github.com/bitinn/node-fetch)將`window.fetch` 添加到了 Node.js)。

考慮闡明所有。押韻雖然有趣，但是記住玩笑不可能轉變成其它的文化，或者他人與你有不同的經歷。你的一些潛在用戶可能是公司員工，你不能讓他們在工作中很難解釋你的專案！

### 避免命名衝突

[查看是否有同名的開源專案](http://ivantomic.com/projects/ospnc/)，尤其是你分享的是同樣的語言或者生態系統。如果你的名字與一個已存在的知名的專案有衝突，你會讓你的粉絲感到困惑。

如果你想要一個網站，Twitter賬號或者其他特性來展示你的專案，先確保你能得到你想要的名字。理想情況下，爲了美好的未來[現在保留這些名字](https://instantdomainsearch.com/)，即使你現在不想用他們。

確保你的專案名沒有侵權。如果有侵權，可能會有公司要求你的專案下架，或者對你採取法律措施。這樣得不償失。

 你可以查閱[WIPO全球品牌數據庫](http://www.wipo.int/branddb/en/)避免商標衝突。如果你是在公司工作，[法律團隊會幫你做這件事](../legal/)。

最後，去谷歌搜索你的專案名。大家會很容易地找到你的專案嗎？在搜索結果禮是否有你不想讓大家看到的東西？

### 你的寫作（和代碼）如何影響你的品牌

在專案的整個生命週期中，你需要做很多文字工作：READMEs，教程，社群文檔，回覆issues，甚至肯能要處理很多來信和郵件。

是否是官方文檔或者一封普通的郵件，你的書寫風格都是你專案品牌的一部分。考慮你可能會擁有粉絲，以及這是你想傳達的聲音。

<aside markdown="1" class="pquote">
  <img src="https://avatars0.githubusercontent.com/u/11321?v=3&s=460" class="pquote-avatar" alt="avatar">
  我嘗試處理每一個細節，包括：處理郵件，展示示例，友好待人，認真處理大家的issues以及試圖幫助到大家。經過一段時間後，大家可能不再是只問問題，還會幫助我解決其他人的疑問以及給我喜悅，他們模仿我的風格。
  <p markdown="1" class="pquote-credit">
— @janl on [CouchDB](https://github.com/apache/couchdb), ["Sustainable Open Source"](https://web.archive.org/web/20200723213552/https://writing.jan.io/2015/11/20/sustainable-open-source.html)
  </p>
</aside>

使用熱情，通俗易懂的語言（如"他們"，即使是指一個人）能夠讓新來的貢獻者感覺專案非常歡迎他們。使用簡單的語言，因爲你的讀者可能英語不是很好。

除了書寫風格外，你的編碼風格也是你專案品牌的一部分。 [Angular](https://github.com/johnpapa/angular-styleguide) 和 [jQuery](http://contribute.jquery.org/style-guide/js/)是兩個專案代碼風格嚴謹的示例和指南。

當你的專案纔開始時，沒有必要爲專案編寫一份風格指南。你可能會發現你喜歡將不同的編碼風格融入到專案。但是你應該想到你的書寫和編碼風格會吸引或者拒絕不同類型的人。專案的早期是你建立你希望看見的先例的機會。

## 發起專案之前的檢查項

準備好開源你的專案了嗎？有一份幫助檢查清單。檢查所有內容？你準備開始吧！ [點擊 "publish"](https://help.github.com/articles/making-a-private-repository-public/) 以及拍下自己的後背。

**文檔**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox1" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox1" class="overflow-hidden d-block text-normal">
    需要爲專案指定一個開源協議
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox2" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox2" class="overflow-hidden d-block text-normal">
    專案要有基礎文檔 (README, CONTRIBUTING, CODE_OF_CONDUCT)
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox3" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox3" class="overflow-hidden d-block text-normal">
    易記的專案名，指出專案是做什麼的，不能和已存在的專案衝突或者商標侵權
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox4" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox4" class="overflow-hidden d-block text-normal">
    最新的issue隊列，組織和標記清除的issues
  </label>
</div>

**代碼**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox5" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox5" class="overflow-hidden d-block text-normal">
    專案使用一致的代碼風格和明確的功能/方法/可用的名字
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox6" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox6" class="overflow-hidden d-block text-normal">
    註釋清晰的代碼，記錄意圖和邊緣案例
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox7" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox7" class="overflow-hidden d-block text-normal">
    在修改歷史，issues或者 pull requests 中沒有敏感的資訊 (例如 密碼或者其他不能公開的資訊)
  </label>
</div>

**人**

如果你是代表個人：

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox8" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox8" class="overflow-hidden d-block text-normal">
  你已經告訴了你的法律部門，以及/或者理解了你公司（如果你是某一家公司的員工）的開源政策和IP
  </label>
</div>

如果你有一家公司或者組織：

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox9" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox9" class="overflow-hidden d-block text-normal">
    你已經告訴了你的法律部門
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox10" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox10" class="overflow-hidden d-block text-normal">
    你有一個宣佈和促進專案的營銷計劃
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox11" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox11" class="overflow-hidden d-block text-normal">
    一些人被允許管理社群互動（回覆issues，檢查和合併pull requests）
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox12" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox12" class="overflow-hidden d-block text-normal">
    至少有兩人管理訪問專案
  </label>
</div>

## 你做到了

恭喜你開源了你的首個專案。不論結果如何，對開源社群都是一份禮物。隨着每次commit,comment和pull request，你正在爲自己或者他人創造學習和成長的機會。
