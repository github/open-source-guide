---
lang: tr
title: Açık Kaynaklı bir Projeye Başlamak
description: Açık kaynak dünyası hakkında daha fazla bilgi edinin ve kendinizi proje başlatmaya hazırlayın.
class: beginners
toc:
  the-what-and-why-of-open-source: Açık kaynağın nediri ve nedeni
  should-i-launch-my-own-open-source-project: Kendi açık kaynak projemi başlatmalı mıyım?
  launching-your-own-open-source-project: Kendi açık kaynak projenizi başlatmak
  naming-and-branding-your-project: Projenizi isimlendirme ve markalama
  your-pre-launch-checklist: Lansman öncesi kontrol listeniz
order: 2
image: "/assets/images/cards/beginner.png"
related:
  - finding
  - building
---

## Açık kaynağın "nedir"i ve "neden"i

Yani açık kaynak kodlu bir projeye başlamayı mı düşünüyorsun? Tebrikler! Dünya katkınızı takdir ediyor. Açık kaynağın ne olduğu ve insanların neden yaptıkları hakkında konuşalım.

### "Açık kaynak" ne demek?

Bir proje açık kaynak olduğunda, **herhangi biri herhangi bir amaç için projenizi görüntüleyebilir, kullanabilir, değiştirebilir ve dağıtabilir.** Bu izinler [açık kaynaklı bir lisans](https://opensource.org/licenses) aracılığıyla uygulanmaktadır.

Açık kaynak güçlüdür çünkü fikirlerin hızla yayılmasına izin vererek, benimseme engellerini azaltır. Ayrıca, kullanıcılara kapalı kaynağa göre kendi bilgisayarlarını ve bilgisayarlarında çalışan işlemleri kontrol etme imkanı da verir. Örneğin, açık kaynak yazılım kullanan bir işletme, yalnızca kapalı kaynak satıcısının ürün kararlarına güvenmek yerine, bir kişiyi yazılımda özel iyileştirmeler yapması için işe alma seçeneğine sahiptir.

_Özgür yazılım_ , _açık kaynak ile_ aynı proje grubunu ifade eder. Bazen [bu terimleri](https://en.wikipedia.org/wiki/Free_and_open-source_software) "ücretsiz ve açık kaynak yazılım" (FOSS) veya "ücretsiz, özgür ve açık kaynak yazılım" (FLOSS) olarak birleştirilir. _Free_ ve  _Libre_ özgürlüğe atıfta bulunur [fiyata değil](#a%C3%A7%C4%B1k-kaynak-%C3%BCcretsiz-anlam%C4%B1na-m%C4%B1-geliyor).

### İnsanlar neden işlerini açık kaynak olarak sunarlar?

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kentcdodds?s=180" class="pquote-avatar" alt="avatar">
  Açık kaynak kullanmaktan ve işbirliği yapmaktan kazandığım en değerli deneyimlerden biri, aynı problemlerle karşı karşıya kalan diğer geliştiricilerle kurduğum ilişkilerden geliyor.
  <p markdown="1" class="pquote-credit">
— @kentcdodds, ["Açık Kaynağa Girmek Benim İçin Nasıl Harika Oldu"](https://kentcdodds.com/blog/how-getting-into-open-source-has-been-awesome-for-me)
  </p>
</aside>

Bir kişinin veya örgütün bir projeyi açmak istemesinin [birçok nedeni](https://ben.balter.com/2015/11/23/why-open-source/) vardır . Bazı örnekler:

* **İşbirliği:** Açık kaynak projeler, dünyadaki herhangi birinden değişiklikleri kabul edebilir. Örneğin, [Exercism](https://github.com/exercism/) 350'den fazla katkıda bulunana sahip bir programlama egzersiz platformudur.

* **Adapte etme ve yeniden tanımlama:** Açık kaynaklı projeler herkes tarafından herhangi bir amaç için kullanılabilir. İnsanlar başka şeyler yapmak için bile kullanabilirler. Örneğin [WordPress](https://github.com/WordPress), [b2](https://github.com/WordPress/book/blob/HEAD/Content/Part%201/2-b2-cafelog.md) adı verilen mevcut bir projenin alt dalı olarak başladı.

* **Şeffaflık:** Açık kaynaklı bir projeyi herkes hata veya tutarsızlık açısından inceleyebilir. Şeffaflık, [Bulgaristan](https://medium.com/@bozhobg/bulgaria-got-a-law-requiring-open-source-98bf626cf70a) veya [ABD](https://sourcecode.cio.gov/) gibi develetler, bankacılık veya sağlık gibi sıkı kurallara bağlı endüstriler ve [Let's Encrypt](https://github.com/letsencrypt) gibi güvenlik yazılımları için önemlidir.

Açık kaynak sadece yazılım için değil. Veri kümelerinden kitaplara kadar her şeyi açık kaynak koduyla açabilirsiniz. Açık kaynak başka neler yapabileceğiniz hakkında fikir edinmek için [GitHub Explore](https://github.com/explore)'a göz atın.

### Açık kaynak "ücretsiz" anlamına mı geliyor?

Açık kaynağın en büyük çekimlerinden biri paraya mal olmamasıdır. Bununla birlikte, "ücretsiz" olması, açık kaynağın toplam değerinin bir yan ürünüdür.

[Açık kaynaklı bir lisans](https://opensource.org/osd-annotated), herkesin projenizi neredeyse her amaç için kullanmasını, değiştirmesini ve paylaşmasını gerektirdiğinden, projelerin kendileri ücretsiz olma eğilimindedir. Projenin kullanımı ücretli olursa, herkes yasal olarak bir kopya çıkarabilir ve bunun yerine ücretsiz sürümü kullanabilir.

Sonuç olarak, çoğu açık kaynak projesi ücretsizdir, ancak "ücretsiz olmak" açık kaynak tanımının bir parçası değildir. Açık kaynak resmi tanımına uymaya devam ederken, açık kaynak projeler için dolaylı olarak çift lisanslama veya sınırlı özelliklerle ücretlendirme yöntemleri vardır.

## Kendi açık kaynak projemi başlatmalı mıyım?

Kısa cevap evet, çünkü sonuç ne olursa olsun, kendi projenizi başlatmak açık kaynakların nasıl çalıştığını öğrenmek için harika bir yoldur.

Daha önce hiç bir projeyi açmadıysanız, insanların ne söyleyeceği veya herhangi birinin fark edip etmeyeceği konusunda gergin olabilirsiniz. Bu senin gibi geliyorsa, yalnız değilsin!

Açık kaynak çalışması, ister yazıyor ister resim yapıyor olsun, diğer tüm yaratıcı etkinliklere benzer. Çalışmanızı dünyayla paylaşmak korkutucu gelebilir, ancak daha iyi olmanın tek yolu, izleyiciniz olmasa bile pratik yapmaktır.

Henüz ikna olmadıysanız, hedeflerinizin ne olabileceğini düşünmek için bir dakikanızı ayırın.

### Hedeflerinizi belirlemek

Hedefler, neyin üzerinde çalışacağınızı, neye hayır diyeceğinizi ve başkalarından nereden yardıma ihtiyacınız olduğunu anlamanıza yardımcı olabilir. Kendinize şunu sorarak başlayın, _neden bu projeye kaynak açıyorum?_

Bu sorunun tek bir doğru cevabı yok. Tek bir proje veya farklı hedeflere sahip farklı projeler için birden fazla hedefiniz olabilir.

Tek amacınız işinizi göstermekse, katkı bile istemeyebilir ve hatta bunu README'nizde bile söyleyebilirsiniz. Öte yandan, katkıda bulunanlar istiyorsanız, açık belgelere ve yeni gelenlerin hoş karşılanmasına zaman ayıracaksınız.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mavris?s=180" class="pquote-avatar" alt="avatar">
  Bir noktada kullandığım özel bir UIAlertView işlevi oluşturdum ... ve onu açık kaynak yapmaya karar verdim. Bu yüzden daha dinamik olacak şekilde değiştirdim ve GitHub'a yükledim. Ayrıca, diğer geliştiricilere projelerinde nasıl kullanılacağını açıklayan ilk belgelerimi de yazdım. Muhtemelen hiç kimse bunu kullanmamıştı çünkü bu basit bir projeydi ama katkım hakkında kendimi iyi hissediyordum.
  <p markdown="1" class="pquote-credit">
— @mavris, ["Self-taught Software Developers: Why Open Source is important to us"](https://medium.com/rocknnull/self-taught-software-engineers-why-open-source-is-important-to-us-fe2a3473a576)
  </p>
</aside>

Projeniz büyüdükçe, topluluğunuzun sizden sadece kod yazmaktan daha fazlasına ihtiyacı olabilir. Sorunlara cevap vermek, kodu gözden geçirmek ve projenizi geliştirmek, açık kaynaklı bir projedeki önemli görevlerdir.

Kodlama yapmayan görevler için harcadığınız zaman, projenizin boyutuna ve kapsamına bağlı olsa da, bunları kendiniz ele almak veya size yardımcı olacak birini bulmak için bir koruyucu olarak hazırlanmalısınız.

**Bir projeye açık kaynak sağlayan bir şirketin parçasıysanız,** projenizi geliştirmek için ihtiyaç duyduğu dahili kaynaklara sahip olduğundan emin olun. Lansmandan sonra projeyi korumaktan kimin sorumlu olduğunu ve bu görevleri topluluğunuzla nasıl paylaşacağınızı belirlemek istersiniz.

Tanıtım, operasyonlar ve projenin bakımı için özel bir bütçeye veya personele ihtiyacınız varsa, bu görüşmeleri erkenden başlatın.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/captainsafia?s=180" class="pquote-avatar" alt="avatar">
  Projeyi açık kaynak yapmaya başladığınızda, yönetim süreçlerinizin projenizin çevresindeki topluluğun katkılarını ve yeteneklerini göz önünde bulundurmasını sağlamak önemlidir. Şirketinizde çalışmayan katılımcıları projenin kilit yönlerine dahil etmekten korkmayın * özellikle de sık sık katkıda bulunanlarsa.
  <p markdown="1" class="pquote-credit">
— @captainsafia, ["So you wanna open source a project, eh?"](https://dev.to/captainsafia/so-you-wanna-open-source-a-project-eh-5779)
  </p>
</aside>

### Diğer projelere katkıda bulunmak

Amacınız başkalarıyla nasıl işbirliği yapabileceğinizi veya açık kaynağın nasıl çalıştığını anlamaksa, mevcut bir projeye katkıda bulunmayı düşünün. Zaten kullandığınız ve sevdiğiniz bir projeyle başlayın. Bir projeye katkıda bulunmak, yazım hatalarını düzeltmek veya belgeleri güncellemek kadar kolay olabilir.

Katkıda bulunmaya nasıl başlayacağınızdan emin değilseniz, [Açık Kaynaklara Nasıl Katkıda Bulunur](../how-to-contribute/) kılavuzumuza göz atın

## Kendi açık kaynak projenizi başlatmak

İşinizi açık kaynak yapmak için mükemmel bir zaman yok. Açık kaynak bir fikir, devam eden bir çalışma veya yıllarca kapalı kaynak olduktan sonra.

Genel olarak konuşursak, başkalarının işinizi görmesini ve işiniz hakkında görüş bildirmesini istediğinizde projenizi açık kaynak yapmalısınız.

Projenizi hangi aşamada açmaya karar verirseniz verin, her proje aşağıdaki belgeleri içermelidir:

* [Açık kaynak lisansı](https://help.github.com/articles/open-source-licensing/#where-does-the-license-live-on-my-repository)
* [README](https://help.github.com/articles/create-a-repo/#commit-your-first-change)
* [Katkıda bulunma kuralları](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)
* [Davranış kuralları](../code-of-conduct/)

Bir geliştirici olarak, bu bileşenler beklentileri iletmenize, katkıları yönetmenize ve herkesin yasal haklarını (kendi haklarınız dahil) korumanıza yardımcı olur. Olumlu bir deneyim yaşama şansınızı önemli ölçüde artırırlar.

Projeniz GitHub'daysa, bu dosyaları önerilen dosya adlarıyla kök dizininize koymak, GitHub'ın bunları tanımasına ve okuyucularınız için otomatik olarak ortaya çıkarmasına yardımcı olur.

### Bir lisans seçimi

Projeniz GitHub'taysa, bu dosyaları önerilen dosya adlarıyla kök dizininize koymak GitHub'ın onları okuyucularınıza tanıtmasına ve otomatik olarak göstermesine yardımcı olacaktır.

Açık kaynaklı lisans, başkalarının projenize yanıt vermeden kullanabileceğini, kopyalayabileceğini, değiştirebileceğini ve katkıda bulunabileceğini garanti eder. Aynı zamanda sizi kötü yasal durumlardan korur. **Açık kaynak kodlu bir proje başlatırken projenize bir lisans eklemelisiniz.**

[MIT](https://choosealicense.com/licenses/mit/) , [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) ve [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) en popüler açık kaynak lisanslarıdır, ancak [aralarından seçim yapabileceğiniz başka seçenekler](https://choosealicense.com) de vardır.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) ve [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) en popüler açık kaynaklı lisanslardır, ancak seçilebilecek [başka seçenekler](https://choosealicense.com) de vardır.

![Pick a license](/assets/images/starting-a-project/repository-license-picker.png)

Açık kaynak kodlu bir projeyi yönetmenin yasal yönleri hakkında başka sorularınız veya endişeleriniz varsa, size yardımcı olacak bir [bölümüz](../legal/) var.

### README Yazma

README'ler, projenizi nasıl kullanılacağını açıklamadan fazlasını yapar. Ayrıca projenizin neden önemli olduğunu ve kullanıcılarınızın bununla neler yapabileceğini açıklarlar.

README'ler projenizi nasıl kullanacağınızı açıklamaktan daha fazlasını yapar. Ayrıca, projenizin neden önemli olduğunu ve kullanıcılarınızın bununla neler yapabileceğini de açıklar.

* Bu proje ne yapıyor?
* Bu proje neden faydalıdır?
* Kullanmaya nasıl başlarım?
* İhtiyacım olursa nereden daha fazla yardım alabilirim?

README'nizi, katkıları nasıl ele aldığınız, projenin hedeflerinin ne olduğu ve lisanslar ve atıfla ilgili bilgiler gibi diğer soruları yanıtlamak için kullanabilirsiniz. Katkıları kabul etmek istemiyorsanız veya projeniz henüz üretime hazır değilse, bu bilgileri not edin.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/tracymakes?s=180" class="pquote-avatar" alt="avatar">
  Daha iyi dokümantasyon, daha fazla kullanıcı, daha az destek talebi ve daha fazla katılımcı anlamına gelir. (...) Okuyucularınızın siz olmadığını unutmayın. Tamamen farklı deneyimleri olan ve projeye gelebilecek insanlar var.
  <p markdown="1" class="pquote-credit">
— @tracymakes, ["Writing So Your Words Are Read (video)"](https://www.youtube.com/watch?v=8LiV759Bje0&amp;list=PLmV2D6sIiX3U03qc-FPXgLFGFkccCEtfv&amp;index=10)
  </p>
</aside>

README'nizi, katkıları nasıl ele aldığınız, projenin amaçlarının ne olduğu ve lisanslar ve atıflar hakkında bilgiler gibi diğer soruları yanıtlamak için kullanabilirsiniz. Katkı kabul etmek istemiyorsanız veya projeniz henüz olgun değilse, bunu mutlaka belirtin.

Bazen, insanlar bir README yazmaktan kaçınırlar çünkü proje bitmemiş gibi hissederler veya katkı kabul etmek istemezler. Bunların hepsi yazmak için çok iyi nedenler.

Daha fazla ilham almak için, eksiksiz bir README yazmak için @dguo'nun ["Make a README" kılavuzunu](https://www.makeareadme.com/) veya @PurpleBooth'ın [README şablonunu](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) kullanmayı deneyin.

### Katkıda bulunma rehberinizi yazmak

Kök dizinine bir README dosyası eklediğinizde, GitHub otomatik olarak depo ana sayfasında görüntüler.

* Hata raporu nasıl gönderilir ([sorun ve istek şablonlarını](https://github.com/blog/2111-issue-and-pull-request-templates) kullanmayı deneyin)
* Yeni bir özellik nasıl önerilir
* Proje ortamı nasıl kurulur ve testler nasıl yapılır

Teknik ayrıntılara ek olarak, bir CONTRIBUTING dosyası, aşağıdakiler gibi katkılar için beklentilerinizi iletme fırsatıdır:

* Aradığınız katkı türleri
* Proje için yol haritanız veya vizyonunuz
* Katkıda bulunanlar sizinle nasıl temasa geçmeli (veya geçmemeli)

Teknik ayrıntılara ek olarak, bir CONTRIBUTING dosyası, aşağıdakiler gibi katkılar için beklentilerinizi iletme fırsatıdır:

Sıcak, arkadaşça bir ton kullanmak ve katkılar için özel önerilerde bulunmak (örneğin, dokümantasyon yazmak veya bir web sitesi yapmak gibi) yeni gelenlerin kendilerini memnun ve istekli hissetmelerini sağlama konusunda yardımcı olabilir.

> Öncelikle, Active Admin’e katkıda bulunduğunuz için teşekkür ederiz. Active Admin'i harika bir araç yapan sizin gibi insanlar.

Projenizin ilk aşamalarında, CONTRIBUTING dosyanız basit olabilir. Hataların veya dosya sorunlarının nasıl bildirileceğini ve katkı sağlamak için teknik gereksinimleri (testler gibi) her zaman açıklamalısınız.

Projenizin ilk aşamalarında, CONTRIBUTING dosyanız basit olabilir. Hataların veya dosya sorunlarının nasıl bildirileceğini ve katkı sağlamak için teknik gereksinimleri (testler gibi) her zaman açıklamalısınız.

Zamanla, CONTRIBUTING dosyanıza sıkça sorulan diğer soruları ekleyebilirsiniz. Bu bilgileri yazmak, daha az kişinin size aynı soruları tekrar soracağı anlamına gelir.

CONTRIBUTING dosyanızı yazarken daha fazla yardım için @nayafia'nın [katkıda bulunma rehber şablonuna](https://github.com/nayafia/contributing-template/blob/HEAD/CONTRIBUTING-template.md) veya @mozilla'nın ["Bir CONTRIBUTING.md Nasıl Oluşturulur"](https://mozillascience.github.io/working-open-workshop/contributing/) makalesine bakabilirsiniz.

README'nizden CONTRIBUTING dosyanıza bağlantı verin, böylece daha çok insan görsün. [CONTRIBUTING dosyasını projenizin deposuna yerleştirirseniz](https://help.github.com/articles/setting-guidelines-for-repository-contributors/), bir katılımcı bir sorun oluşturduğunda veya bir PR açtığında GitHub otomatik olarak dosyanıza bağlanır.

### Davranış kural listesi oluşturmak

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mlynch?s=180" class="pquote-avatar" alt="avatar">
  Hepimiz, muhtemelen bir şeyin neden belirli bir şekilde olması gerektiğini açıklamaya çalışan bir proje sahibi olarak ya da bir kullanıcı olarak basit bir soru gibi sorulan istismarla karşılaştığımız deneyimler yaşadık. (...) Davranış kuralları, ekibinizin yapıcı söylemi çok ciddiye aldığını gösteren, kolayca atıfta bulunulabilir ve bağlanabilir bir belge haline gelir.
  <p markdown="1" class="pquote-credit">
— @mlynch, ["Making Open Source a Happier Place"](https://medium.com/ionic-and-the-mobile-web/making-open-source-a-happier-place-3b90d254f5f)
  </p>
</aside>

Son olarak, bir davranış kural listesi projenizin katılımcı davranışları için temel kurallar koymanıza yardımcı olur. Bir topluluk veya şirket için açık kaynak kodlu bir proje başlatıyorsanız, bu özellikle değerlidir. Davranış kuralları, sağlıklı ve yapıcı topluluk davranışını kolaylaştırmanıza yardımcı olur ve bu da geliştirici olarak stresinizi azaltacaktır.

Daha fazla bilgi için [Davranış Kuralları kılavuzumuza](../code-of-conduct/) göz atın.

Katılımcıların _nasıl_ davranmasını beklediğinizi iletmenin yanı sıra, bir davranış kural listesi de bu beklentilerin kimlere, ne zaman başvuruda bulunduklarına ve bir ihlal meydana geldiğinde ne yapılması gerektiğini açıklamaya meyillidir.

Açık kaynaklı lisanslara benzer şekilde, davranış kuralları için de yeni ortaya çıkan standartlar vardır, bu yüzden kendiniz yazmak zorunda değilsiniz. [Contributor Covenant](https://contributor-covenant.org/), Kubernet, Rails ve Swift dahil olmak üzere [40.000'den fazla açık kaynaklı proje](https://www.contributor-covenant.org/adopters) tarafından kullanılan bir davranış kural listesi şablonudur. Hangi metni kullanırsanız kullanın, gerektiğinde davranış kurallarınızı uygulamak için hazırlıklı olmalısınız.

Açık kaynaklı lisanslara benzer şekilde, davranış kuralları için de yeni ortaya çıkan standartlar vardır, bu yüzden kendiniz yazmak zorunda değilsiniz. [Contributor Covenant](https://contributor-covenant.org/), Kubernet, Rails ve Swift dahil olmak üzere [40.000'den fazla açık kaynaklı proje](https://www.contributor-covenant.org/adopters) tarafından kullanılan bir davranış kural listesi şablonudur. Hangi metni kullanırsanız kullanın, gerektiğinde davranış kurallarınızı uygulamak için hazırlıklı olmalısınız.

## Projenizi isimlendirme ve markalama

Metni doğrudan projenizdeki bir CODE_OF_CONDUCT dosyasına yapıştırın. Dosyayı projenizin kök dizininde tutun, böylece README'nizden kolayca bulabilir ve linkleyebilirsiniz.

### Doğru ismi seçmek

Marka, gösterişli bir logo veya çekici bir proje adından daha fazlasıdır. Projeniz hakkında nasıl konuştuğunuzla ve mesajınızla kime ulaştığınızla ilgilidir.

* [Sentry](https://github.com/getsentry/sentry) çöküş raporlaması için uygulamaları izler
* [Thin](https://github.com/macournoyer/thin) hızlı ve basit bir Ruby web sunucusudur

Mevcut bir projenin üzerine inşa ediyorsanız, adlarını ön ek olarak kullanmak projenizin ne yaptığını netleştirmeye yardımcı olabilir (örneğin, [node-fetch](https://github.com/bitinn/node-fetch) `window.fetch` komutunu getirir).

Mevcut bir projenin üzerine inşa ediyorsanız, adlarını ön ek olarak kullanmak projenizin ne yaptığını netleştirmeye yardımcı olabilir (örneğin, [node-fetch](https://github.com/bitinn/node-fetch) `window.fetch` komutunu getirir).

### Benzersiz isim bulmak

Her şeyden önce netlik düşünün. Püf noktaları eğlencelidir, ancak bazı şakaların diğer kültürlere veya sizden farklı deneyimlere sahip insanlara tercüme edilemeyebileceğini unutmayın. Potansiyel kullanıcılarınızdan bazıları şirket çalışanları olabilir: projenizi işte açıklamak zorunda kaldıklarında onları rahatsız etmek istemezsiniz!

Özellikle aynı dili veya ekosistemi paylaşıyorsanız, [benzer bir adla açık kaynaklı projeleri kontrol edin](http://ivantomic.com/projects/ospnc/). İsminiz popüler bir projeyle örtüşüyorsa, takipçilerinizin kafaları karışabilir.

Bir web sitesi, Twitter hesabı veya projenizi temsil eden diğer özellikleri istiyorsanız, istediğiniz adları aldığınızdan emin olun. İdeal olarak, [bu isimleri](https://instantdomainsearch.com/) henüz kullanmak istemediğiniz zamanlarda bile, rahat etmek için şimdiden alın.

Projenizin adının herhangi bir ticari markayı ihlal etmediğinden emin olun. Bir şirket sizden projenizi kapatmanızı isteyebilir veya hatta aleyhinize yasal işlem başlatabilir. Bu riske değmez.

[WIPO Global Marka Veritabanını](http://www.wipo.int/branddb/en/) ticari marka çakışmaları için kontrol edebilirsiniz. Eğer bir şirketteyseniz, bu [hukuk ekibinizin size yardımcı olabileceği](../legal/) şeylerden biridir.

### Nasıl yazdığın (ve kodladığın) markanı da etkiler!

Projenizin ömrü boyunca birçok yazı yazacaksınız; README'ler, öğretici belgeler, topluluk belgeleri, sorulara cevaplar, belki de haber bültenleri ve posta listeleri.

Projenizin ömrü boyunca birçok yazı yazacaksınız: README'ler, öğretici belgeler, topluluk belgeleri, sorulara cevaplar, belki de haber bültenleri ve posta listeleri.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/janl?s=180" class="pquote-avatar" alt="avatar">
  Posta listesindeki her konuya katılmaya ve örnek davranış göstermeye, insanlara iyi davranmaya, sorunlarını ciddiye almaya ve genel olarak yardımcı olmaya çalıştım. Bir süre sonra, insanlar sadece soru sormakla kalmayıp aynı zamanda yanıtlamada da yardımcı olmak için tarzımı taklit ettiler.
  <p markdown="1" class="pquote-credit">
— [CouchDB](https://github.com/apache/couchdb)'deki @janl, ["Sürdürülebilir Açık Kaynak"](https://web.archive.org/web/20200723213552/https://writing.jan.io/2015/11/20/sustainable-open-source.html)
  </p>
</aside>

Resmi bir belge veya geçici bir e-posta olsun, yazma stiliniz projenizin markasının bir parçasıdır. Hedef kitlenize nasıl sesleneceğinizi ve bunun iletmek istediğiniz ton olup olmadığını düşünün.

Kelimeleri nasıl yazdığınızın ötesinde, kodlama stiliniz de projenizin markasının bir parçası olabilir. [Angular](https://angular.io/guide/styleguide) ve [jQuery](https://contribute.jquery.org/style-guide/js/) titiz kodlama stilleri ve yönergeleri olan projelere iki örnektir.

Kelimeleri nasıl yazdığınızın ötesinde, kodlama stiliniz de projenizin markasının bir parçası olabilir. [Angular](https://angular.io/guide/styleguide) ve [jQuery](https://contribute.jquery.org/style-guide/js/) titiz kodlama stilleri ve yönergeleri olan projelere iki örnektir.

## Lansman öncesi kontrol listeniz

Projenizi açmaya hazır mısınız? İşte size yardımcı olacak bir kontrol listesi. Tüm kutuları işaretleyin? Projeye açmaya hazırsın! ["publish"](https://help.github.com/articles/making-a-private-repository-public/) düğmesine basın ve arkanıza yaslanın.

**Belgeler**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox1" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox1" class="overflow-hidden d-block text-normal">
    Projenin açık kaynak lisanslı LICENSE dosyası var
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox2" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox2" class="overflow-hidden d-block text-normal">
    Proje temel dokümantasyona sahiptir (README, CONTRIBUTING, CODE_OF_CONDUCT)
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox3" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox3" class="overflow-hidden d-block text-normal">
    Adı hatırlamak kolaydır, projenin ne yaptığı hakkında bir fikir verir ve mevcut bir projeyle çelişmez veya ticari markaları ihlal etmez
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox4" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox4" class="overflow-hidden d-block text-normal">
    Sorun listesi, açıkça düzenlenmiş ve etiketlenmiş konularla birlikte güncel
  </label>
</div>

**Kod**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox5" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox5" class="overflow-hidden d-block text-normal">
    Proje tutarlı kod kuralları ve temiz işlev/yöntem/değişken adlarını kullanıyor
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox6" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox6" class="overflow-hidden d-block text-normal">
    Kod açıkça yorumlanmış, amaçları ve aykırı vakaları belgelemektedir.
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox7" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox7" class="overflow-hidden d-block text-normal">
    Revizyon geçmişinde, sorunlarda veya PR isteklerinde (örneğin şifreler veya kamuya açık olmayan diğer bilgiler) hassas bilgi yok
  </label>
</div>

**İnsanlar**

Bireyseniz:

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox8" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox8" class="overflow-hidden d-block text-normal">
    Hukuk departmanıyla konuştunuz ve/veya şirketinizin IP ve açık kaynaklı politikalarını anladınız (eğer bir yerde çalışansanız).
  </label>
</div>

Bir şirket veya kuruluşsanız:

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox9" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox9" class="overflow-hidden d-block text-normal">
    Hukuk departmanınızla konuştunuz
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox10" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox10" class="overflow-hidden d-block text-normal">
    Projeyi duyurmak ve tanıtmak için bir pazarlama planınız var
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox11" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox11" class="overflow-hidden d-block text-normal">
    Birisi topluluk etkileşimlerini yönetmeyi taahhüt eder (sorunlara cevap verme, çekme isteklerini gözden geçirme ve birleştirme)
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox12" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox12" class="overflow-hidden d-block text-normal">
    En az iki kişinin projeye yönetici erişimi var
  </label>
</div>

## Başardınız!

İlk açık kaynak projenizi yayınladığınız için tebrikler. Sonuç ne olursa olsun, açık kaynak çalışmak topluma bir armağandır. Her katkı, yorum ve PR ile kendiniz ve başkalarının öğrenmesi ve büyümesi için fırsatlar yaratıyorsunuz.
