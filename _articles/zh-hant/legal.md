---
lang: zh-hant
title: 開源的法律保障
description: 對於開源你應該瞭解的法律知識。
class: legal
order: 10
image: /assets/images/cards/legal.png
related:
  - contribute
  - leadership
redirect_from: /zh-tw/legal/
---

## 瞭解開源的法律含義

向世界分享你們具有創造性的工作，這是一個多麼令人激動和有價值的經歷。這也意味著你們必須擔心一堆你們不清楚的法律問題。幸運的是，你們不必從頭開始。我們已經涵蓋了你們的法律需求。（在你們行動前，請確定閱讀了我們的[免責聲明](https://github.com/cnbo/open-source-guide/blob/gh-pages/notices.md)。）

## 爲什麼大家非常擔心有關開源的法律問題

很高興你們提問！當你們行創造性工作（例如寫作，圖形或程式碼）時，默認情況下該作品屬於專有版權（copyright）。也就是說，法律承認你們是你們作品的作者，他人在沒有經得你們同意的情況下不能使用你們的工作。

一般來說，這意味著沒有人可以在沒有你們授權的情況下使用，複製，分發或者修改你們的工作。

然而，開源有著不一樣的情況。因爲作者希望他人使用，修改以及分享他們的工作。但因爲法律默認依然是專有版權（copyright），所以你們需要一個明確說明這些權限的協議。

如果你們不應用開源許可協議，那麼對你們專案做出貢獻的人也都將成爲其工作的專屬版權（copyright）所有者。這意味著沒有人（也包括你們）可以使用，複製，分發後者修改他們的貢獻，

最後，你們的專案可能具有你們不知道的許可證要求的依賴關係。你們的專案社群，或者你們的僱主政策也可能要求你們使用特定的開源許可協議。

## 公開的GitHub專案是開源的嗎

當你們在GitHub上[創建一個新專案](https://help.github.com/articles/creating-a-new-repository/) 時，你們可以選擇將倉庫設置成**private**或者**public**。

![Create repository](/assets/images/legal/repo-create-name.png)

**讓你們的GitHub專案公開與許可你們的專案是不同的。**公開專案是由[GitHub的服務條款](https://help.github.com/en/github/site-policy/github-terms-of-service#3-ownership-of-content-right-to-post-and-license-grants)保護，它允許他人瀏覽以及fork你們的專案，但是沒有權限參與你們的工作。

如果你們想讓他人使用，複製，修改你們的專案，或者參與貢獻你們的專案，那麼你們的專案就需要包含一個開源許可協議。例如，即使你們的專案是公開的，但沒有你們的授權，一些人是不能合法在他們的程式碼中使用你們GitHub專案中的任何部分。

## 請告訴我該如何保護專案

你們很幸運，開源許可協議已經標準化了同時使用簡單。你們可以直接複製粘貼一個已經存在的許可協議到你們的專案裏。

[MIT](https://choosealicense.com/licenses/mit/)，[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)和[GPLv3](https://choosealicense.com/licenses/gpl-3.0/)都是非常流行的開源許可協議，但是也有其它選擇。你們可以在[choosealicense.com](https://choosealicense.com/)上找到這些許可協議的全部文本，同時說明了如何使用他們。

當你們在GitHub上創建了一個新專案，你們會被[要求添加一個許可協議](https://help.github.com/articles/open-source-licensing/)。

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/282759?v=3&s=400" class="pquote-avatar" alt="avatar">
  一個標準化的許可協議可以作爲沒有法律培訓的人員的代理，以準確地知道他們可以和不能用軟件做什麼。除非絕對要求，否則應避免使用定製，修改或非標準術語，這將成爲他人使用程式碼的障礙。
  <p markdown="1" class="pquote-credit">
— @benbalter, ["Everything a government attorney needs to know about open source software&nbsp;licensing"](http://ben.balter.com/2014/10/08/open-source-licensing-for-government-attorneys/)
  </p>
</aside>

## 哪個開源許可協議適合我的專案

如果你們是小白，那麼使用[MIT License](https://choosealicense.com/licenses/mit/)，不容易出錯。它很短，很容易理解，並允許任何人做任何事情，只要他們保留許可證的副本，包括你們的版權聲明。如果你們需要，您們能夠根據不同的許可協議發佈專案。

然而，爲專案選擇合適的開源許可協議這取決於你們。

你們的專案非常可能有（或將有）**依賴**。例如，如果你們開源了一個Node.js的專案，你們將可能使用來自npm（Node Package Manager）的庫。你們依賴的這些庫都有它們自己的開源許可協議。如果他們的許可協議"允許"（對使用，修改和分享給予公共權限，而對有關專案的許可協議沒有要求），這樣你們就可以使用任何你們想要的許可協議。共同允許許可協議包括MIT，Apache 2.0，ISC和BSD。

另一方面，如果你們的依賴中有一個的許可協議是"強硬的copyleft"（他們也給同樣的允許，但條件是有關專案得使用同樣的許可協議），那麼你們的專案將使用與之相同的許可協議。copyleft許可協議包括GPLv2，GPLv3和AGPLv3。

你們也會想到考慮希望你們的社群使用以及貢獻你們的專案：

* **你們是否想讓你們的專案成爲其它專案的依賴？**在你們的相關社群最好儘可能使用最流行的許可協議。例如，[MIT](https://choosealicense.com/licenses/mit/)是[npm libraries](https://libraries.io/npm)使用的最流行的許可協議。
* **你們的專案是否想吸引大企業？**大型企業可能需要所有貢獻者的明確專利許可。在這種情況下，[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)適合你們。
* **你們的專案是否想吸引不願自己的貢獻用於其它同類型軟件的貢獻者？**[GPLv3](https://choosealicense.com/licenses/gpl-3.0/)和[AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)適合你們。

你們的公司可能爲自己的專案準備了特定的許可協議。例如，它可能需要許可許可證，以便公司可以在公司的閉源產品中使用你們的專案。或者你們的公司要求強大的copyleft許可協議同時要求貢獻者贊成，這樣專案只屬於你們公司，沒有人能在有關的軟件中使用你們的專案。或者你們的公司可能有與標準，社會責任或透明度相關的某些需求，其中任何一個都可能需要特定的許可策略。與你們[公司的法律部門](#公司的法律團隊需要知道什麼)談談。

當你們在GitHub上創建了一個新專案，它給你們提供了選擇許可協議的機會。包括上面提到的可以使你們的GitHub專案開源的許可協議。如果你們想要瞭解其他選擇，可以通過查閱[choosealicense.com](https://choosealicense.com)找到適合你們專案（即使它[不是軟體](https://choosealicense.com/non-software/)）的許可協議。

## 如果我想更換專案的許可協議，該怎麼辦

大多數專案絕不需要更換許可協議。但是情況偶爾有變。

例如，隨著你們專案的壯大，它添加了新的依賴或用戶，或者你們的公司改變了策略，或者其他的要求要更換不同的許可協議。如果你們在開始專案的時候沒有添加許可協議，那麼再添加一個許可協議和更換許可協議是一樣的效果。當你們要添加或者更換專案的許可協議時，需要考慮以下三件事：

**這件事很複雜。**確定許可協議的兼容性和合規行，以及誰擁有版權，這會非常快速地變得複雜和混亂。爲新的發佈和貢獻選擇一個新的且合適的許可協議與重新許可已存在的貢獻是不同的。一旦你們有任何想改變許可協議的想法，請首先讓法律團隊知道。即使你們已經或者能獲得可以更換許可協議的權限，請考慮者會給專案的其他用戶和貢獻者帶來怎樣的影響。將更換許可協議視爲"管理事件"，只有通過與專案的利益相關者進行明確的溝通和諮詢，才更有可能順利進行。請謹記，從一開始就爲你們的選擇和使用合適的許可協議。

**你們的專案已經有了許可協議。**如果專案的現有許可證與您要更改的許可證兼容，則可以開始使用新許可證。這是因爲如果A許可協議與B許可協議兼容，你們將遵守A的條款，同時遵守B的條款（但不一定反之亦然）。因此，如果你們目前正在使用許可型的許可協議（例如MIT），則可以更改爲具有更多條件的許可協議，只要你們保留MIT許可協議的副本和任何相關的版權聲明（即繼續遵守MIT許可協議的最低條件）。如果你們現在的許可協議不是許可型的（例如，copyleft或者你們還沒有許可協議）以及你們不是版權的唯一所有者，那麼你們不能將許可協議改爲MIT。基本上，只要是使用的許可型的許可協議，版權所有者能事先更換許可協議。

**你們的專案已經有版權所有者。**如果你們是你們專案的唯一貢獻者，然後你們或者你們的公司是專案版權的唯一所有者。你們可以添加或更換任何你們或者你們公司心儀的許可協議。不然你們需要取得其他版權所有者的同意。他們是誰？他們是已經參與你們專案提交的人。但有些情況是專案版權掌握在這些人的僱主手中。在某些情況下，人們只是做了_微小的_貢獻，但沒有硬性規定，在一些行程式碼下的貢獻不受版權保護。對與這樣的情況該怎麼辦？對於一個相對較小以及年輕的專案來說，取得所有貢獻者對更換許可協議的同意是可行的。。但對於大專案和老專案來說，你們必須尋求很多貢獻者以及他們繼承者的共識。Mozilla花費了多年重新授權Firefox，Thunderbird和相關軟件。

或者，你們可以讓貢獻者事先同意（通過額外的貢獻者協議 - 見下文）在某些條件下更改某些許可協議，這些更改將超過現有的開源許可協議。這會改變許可協議改的複雜性。如果在執行許可協議更改時，你們仍然想要和專案利益相關者進行溝通，你們需要從你們律師那得到更多幫助。

## 我的專案需要額外的貢獻者協議嗎

可能不要。對於大多數的開源專案，一個開源許可協議可作用與所有貢獻者和用戶。

貢獻者協議會給維護者帶來額外的管理工作。這些協議增加了多少工作得取決去專案和實施。簡單的協議可能要求貢獻者確認和點擊，在專案的開源許可協議下他們有權利貢獻。更複雜的協議可能需要法律的審查和貢獻者的僱主的簽字。

此外，貢獻者協議有時被認爲對專案社群不友好。他們也增加了人們參與社群的障礙。

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/328614?v=3&s=460" class="pquote-avatar" alt="avatar">
    我們已經刪除了Node.js的CLA。這樣做降低了Node.js貢獻者的參與門檻，從而吸引更多的貢獻者。
  <p markdown="1" class="pquote-credit">
— @bcantrill, ["Broadening Node.js Contributions"](https://www.joyent.com/blog/broadening-node-js-contributions)
  </p>
</aside>

一些情況下你們可能想要爲你們的專案考慮一個額外的貢獻協議：

* 你們的律師想要所有的貢獻者明確接受貢獻者條款，或者因爲他們覺得只有開源許可協議還遠遠不夠。如果這是唯一的問題，那麼有肯定專案開源許可協議的貢獻者協議就足夠了。[jQuery個人貢獻者許可協議](https://contribute.jquery.org/CLA/)就是一個很好的輕量級的個人貢獻者協議。對於一些專案來說，[Developer Certificate of Origin](https://github.com/probot/dco)是一個很好的先例。
* 你們的專案使用的開放源許可協議不包括明確的專利授權（如MIT），你們需要所有貢獻者的專利授權，這些可能適合用於你們公司的專利組合或者專案的其他貢獻者和用戶。[Apache 個人貢獻者許可協議](https://www.apache.org/licenses/icla.txt)是一種常用的附加貢獻者協議，其具有與Apache許可2.0中的專利許可相同的專利許可。
* 如果你們的專案使用的是copyleft許可協議，但你們也需要分發專案的專有版本。那你們需要每個貢獻者分配版權給你們或者授予你們許可權。[MongoDB貢獻者協議](https://www.mongodb.com/legal/contributor-agreement)就是這中類型的。
* 你們認爲你們的專案在其有效期內需要更換許可協議，以及事先得到貢獻者的同意。

如果您們實需要在您的專案中使用額外的貢獻者協議，請考慮使用諸如CLA助手之類的集成，以最大限度地減少貢獻者的分心。

## 公司的法律團隊需要知道什麼

作爲一名公司的僱員，如果你們在發佈一個開源專案，你們首先需要讓法律團隊知道。
即使只是一個個人專案，請考慮讓他們知道。你們可能和公司有一個"員工知識產權協議"，這給了公司一些對你們專案的控制權，特別是當專案和公司的業務有著很多的聯繫或者你們使用公司的資源發展專案。你們的公司_應該_很容易給們許可，也許已經通過一個員工友好的知識產權協議或公司政策。如果不是這樣，你麼可以談判（例如，解釋你們的專案爲公司的專業學習和發展目標服務），或者你們在找到一個更好的公司前停止你們專案的工作。

**如果你們的開源專案是爲了你們的公司，**絕對需要讓他們知道。根據公司的業務需求和專業知識，你們的法律團隊可能已經制定了有關開放源程式碼許可協議（以及可能還有其他貢獻者協議）的政策，以確保您的專案符合其依賴關係的許可協議。如果不是這樣，你們和他們很幸運！你們的法律團隊應該渴望與你們合作，把這個東西搞清楚。你們需要思考這些事：

* **第三方資源：**你們的專案有其他人創建的依賴或者使用他人的程式碼？如果這些是開源專案，你們需要遵守第三方資源的開源許可協議。首先，選擇與第三方資源的開放源許可協議一起使用的許可協議（見上文）。如果你們的專案修改或者發佈第三方開源資源，那麼你們法律團隊還想知道你們符合第三方開源許可協議的其他條件，例如保留版權聲明。如果你們使用了其他沒有開源許可協議的程式碼，那麼你們可能會要求第三方資源的維護者[添加一個開源許可協議](https://choosealicense.com/no-license/#for-users)，要是你們得不到許可，你們只能停止使用他們的程式碼。

* **商業機密：**請考慮專案中是否有公司不想對外公開的東西。如果是這樣的話，你們只能開源專案的一部分，得保護好公司的商業機密。

* **專利：**你們公司是否申請了與你們專案有關的專利？如果開源源程式碼，這會對公司的專利進行[公開披露](https://en.wikipedia.org/wiki/Public_disclosure)。可悲的是，你們可能被要求等待（或者公司會重新思考應用程序）。如果你們期望從擁有大量專利組合的公司的員工那裏得到貢獻，們的法律團隊可能希望你們使用來自貢獻者的明確專利授權的許可協議（例如Apache 2.0或GPLv3）或其他貢獻者協議（見上文）。

* **商標：**認真檢查你們的專案名[沒有與已經存在的商標衝突](https://github.com/liadbiz/opensource-contribute-guide-chinise/blob/HEAD/github-open-source-guide-02.md#避免命名衝突)。如果你們將自己公司的商標用於專案，請檢查它有沒有造成衝突。[FOSSmarks](http://fossmarks.org/)是在自由和開源專案的背景下理解商標的實用指南。

* **隱私：**你們的專案是否收集了用戶數據並存儲到公司的服務器？你們的法律團隊可以幫助你們遵守公司政策和外部法規。

如果你們發佈了公司的第一開源專案，爲了能通過，以上這些綽綽有餘（不要擔心，大多數專案不會引起重大關注）。
長期來說，們的法律團隊可以做更多的事情，以幫助公司從開源中獲得更多，並保持安全：

* **員工貢獻策略：**考慮制定一個公司策略，指明你們的員工如何爲開源專案貢獻。明確的政策將減少你們員工的迷惑，並幫助他們爲公司的最佳利益向開源專案做貢獻，無論是作爲他們工作的一部分還是在自由時間。Rackspace的[Model IP和開源貢獻策略](https://processmechanics.com/2015/07/23/a-model-ip-and-open-source-contribution-policy/)就是很好的示例。

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/214698?v=3&s=400" class="pquote-avatar" alt="avatar">
  放棄與補丁相關的只是產權以構建員工知識庫和信譽。它表明，公司關心員工的發展，以及讓員工有種被賦權和自主的感覺。所有這些好處還導致更高的士氣和更好地保留員工。
  <p markdown="1" class="pquote-credit">
— @vanl, ["A Model IP and Open Source Contribution Policy"](https://processmechanics.com/2015/07/23/a-model-ip-and-open-source-contribution-policy/)
  </p>
</aside>

* **發佈什麼：**[（幾乎） 所有？](http://tom.preston-werner.com/2011/11/22/open-source-everything.html)如果你們的法律團隊瞭解並投資於你們公司的開源策略，他們將是你們最好的幫助，而不是阻礙你們的努力。
* **合規性：**即使你們公司沒有發佈任何開源專案，他們也會使用別人的開源軟件。[意識和過程](https://www.linuxfoundation.org/blog/2015/06/why-companies-that-use-open-source-need-a-compliance-program/)可以避免麻煩，產品延遲發佈和訴訟。

<aside markdown="1" class="pquote">
  組織必須具有適合["允許"和"copyleft"]類別的許可協議和合規性策略。首先，記錄適用於你們所使用的開源軟件的許可條款（包括子組件和依賴項）。
  <p markdown="1" class="pquote-credit">
— Heather Meeker, ["Open Source Software: Compliance Basics And Best Practices"](https://techcrunch.com/2012/12/14/open-source-software-compliance-basics-and-best-practices/)
  </p>
</aside>

* **專利：**你們的公司可能希望加入[開放發明網絡](http://www.openinventionnetwork.com/)，一個共享的專利防禦池，以保護成員使用主要開源專案，或探索其他替代專利許可。

* **管理：**特別是當如果將專案轉移到公司以外的法律實體是有意義的。
