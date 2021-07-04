---
lang: tr
title: Geliştiriciler İçin Örnek Yöntemler
description: Belgelendirme işlemlerinden topluluğunuzu güçlendirmeye kadar açık bir kaynak geliştiricisi olarak hayatınızı kolaylaştırın.
class: best-practices
toc:
  what-does-it-mean-to-be-a-maintainer: Geliştirici olmak ne demektir?
  documenting-your-processes: İşlemlerinizi belgeleme
  learning-to-say-no: Hayır demeyi öğrenme
  leverage-your-community: Topluluğunuzdan yararlanma
  bring-in-the-robots: Robotları kullanın
  its-okay-to-hit-pause: Duraklatmak sorun değildir
order: 5
image: /assets/images/cards/best-practices.png
related:
- metrics
- leadership
---

## Geliştirici olmak ne demektir?

Birçok insanın kullandığı açık kaynak bir projeyi sürdürürseniz, daha az kodladığınızı ve sorunlara daha fazla cevap verdiğinizi fark etmiş olabilirsiniz.

Bir projenin ilk aşamalarında, yeni fikirleri deniyor ve istediğinizi temel alan kararlar alıyorsunuz. Projeniz popülerlik arttıkça, kendinizi kullanıcılar ve katkıda bulunanlarla daha fazla çalışırken bulabilirsiniz.

Bir projeyi sürdürmek kod yazmaktan daha fazlasını gerektirir. Bu görevler genellikle beklenmedik bir durum değildir, ancak büyümekte olan bir proje için son derece önemlidir. Yaşamınızı kolaylaştırmak için, belgeleme işlemlerinden topluluğunuzu güçlendirmeye kadar birkaç yol yöntemi derledik.

## İşlemlerinizi belgeleme

Her şeyi yazı hale getirmek, geliştirici olarak yapabileceğiniz en önemli şeylerden biridir.

Dokümantasyon sadece kendi düşüncelerinizi netleştirmekle kalmaz, diğer kişilerin size sormadan önce neye ihtiyacınız olduğunu veya ne beklediğinizi anlamalarına yardımcı olur.

Bir şeyler yazmak, bir şey sizin kapsamınıza uymadığında hayır demeyi kolaylaştırır. Ayrıca insanların girip yardım etmesini kolaylaştırır. Projenizi kimlerin okuyup kullanabileceğini asla bilemezsiniz.

Geniş paragraflar kullanmasanız da, madde imleri kullanarak not almak bile, yazmaktan daha iyidir.

Belgelerinizi güncel tutmayı unutmayın. Bunu her zaman yapamıyorsanız, eski belgelerinizi silin veya eski olduğunu belirtin; böylece katkıda bulunanlar güncellemelerin memnuniyetle karşılandığını bilir.

### Projenizin vizyonunu yazın

Projenizin hedeflerini yazarak başlayın. Bunları README'nize ekleyin veya VISION adlı ayrı bir dosya oluşturun. Proje yol haritası gibi, yardımcı olabilecek başka çıktılar varsa, bunları da yayınlayabilirsiniz.

Net ve belgelenmiş bir vizyona sahip olmanız odaklanmanızı sağlar ve başkalarının katkılarından "kapsamın sürünmesini" önlemenize yardımcı olur.

Örneğin, @lord, proje vizyonuna sahip olmanın, hangi ihtiyaç için zaman harcamaya ihtiyaç duyulacağını belirlemesine yardımcı olduğunu keşfetti. Yeni bir geliştirici olarak, [Slate](https://github.com/lord/slate) için ilk uzun metraj talebini aldığında, projesinin kapsamına uymadığı için pişmanlık duydu.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  Ben onu karmaşık buldum. Tam bir çözüm bulmak için çaba sarf etmedim. Yarım aşamalı bir çözüm yerine, "Şu an bunun için vaktim yok, ancak uzun vadede yapılacaklar listesine ekleyeceğim" demiş olsaydım keşke.
  <p markdown="1" class="pquote-credit">
— @lord, ["Yeni açık kaynak sağlayıcıları için ipuçları"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Beklentilerinizi iletin

Kurallar yazmak için sinir bozucu olabilir. Bazen başkalarının davranışlarına göz attığınızı ya da tüm eğlenceyi öldürdüğünüzü hissedebilirsiniz.

Ancak, adil bir şekilde yazılmış ve uygulanmış olduğunda, iyi kurallar geliştiricileri güçlendirir. Yapmak istemediğiniz şeyleri yapmaya sürüklenmenizi önlerler.

Projenize rastlayan çoğu kişi sizin hakkınızda veya durumunuz hakkında hiçbir şey bilmiyor olabilir. Üzerinde çalışmak için para aldığınızı varsayabilirler, özellikle düzenli olarak kullandıkları ve güvendikleri bir şeyse. Belki bir noktada projenize çok zaman ayırıyorsunuz, ancak şimdi yeni bir iş veya aile üyesiyle meşgulsünüz.

Bunların hepsi olabilir! Sadece başkalarının da bildiğinden emin ol.

Projenizi yarı zamanlı veya tamamen gönüllü olarak sürdürmekteyseniz, ne kadar vaktiniz olduğu konusunda dürüst olun. Bu, projenin ne kadar zaman gerektirdiğini düşündüğünüzle veya başkalarının ne kadar zaman harcamanızı istediği ile aynı değildir.

Yazmaya değer birkaç kural:

* Bir katkı nasıl gözden geçirilir ve kabul edilir ( _Testlere ihtiyaçları var mı? Bir sorun şablonu var mı?_ )
* Kabul edeceğiniz katkı türleri ( _Kodunuzun yalnızca belirli bir bölümünde yardım mı istiyorsunuz?_ )
* Bekleme süresi ne kadardır (_örneğin, "7 gün içinde bir bakıcıdan bir yanıt bekleyebilirsiniz. O zamana kadar bir şey duymadıysanız, ipliğe ping atmaktan çekinmeyin."_)
* Projeye ne kadar zaman harcıyorsunuz (_örneğin, "Bu projeye haftada sadece 5 saat harcıyoruz"_)

[Jekyll](https://github.com/jekyll/jekyll/tree/HEAD/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules) ve [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) geliştiriciler ve katkıda bulunanlar için temel kuralları olan projelere birkaç örnektir.

### İletişimi herkese açık tutun

Sizin de etkileşimlerinizi belgelemeyi unutmayın. Nerede olursanız olun, projeniz hakkında iletişimi halka açık tutun. Birisi bir özellik isteğini veya destek ihtiyacını tartışmak için sizinle özel olarak iletişim kurmaya çalışırsa, kibarca onları bir posta listesi veya sorun izleyici gibi bir kamu iletişim kanalına yönlendirin.

Diğer geliştiricilerle tanışırsanız veya özel olarak büyük bir karar verirseniz, bu konuşmaları halka açıklayın, yalnızca notlarınızı gönderiyor olsanız bile.

Bu şekilde, topluluğunuza yeni katılan herhangi biri, yıllardır orada olan biriyle aynı bilgilere erişebilecektir.

## Hayır demeyi öğrenme

Her şeyi yazdınız. İdeal olarak, herkes belgelerinizi okur, ancak gerçekte, bu bilginin var olduğunu başkalarına hatırlatmanız gerekecek.

Bununla birlikte, her şeyin yazılı olması, kurallarınızı uygulamanız gerektiğinde durumları kişisellikten uzaklaştırmanıza yardımcı olur.

Hayır demenin eğlenceli olmadığı kesin, ancak "_Katkınız bu projenin ölçütlerine uymuyor_" cevabı "_Katkınızı beğenmedim_" cevabından daha kurumsal hissettiriyor.

Bir geliştirici olarak karşılaşacağınız birçok durum için hayır demek uygundur: Örneğin, kapsama uygun olmayan özellik talepleri, tartışmanın rayından çıkması durumunda, başkaları için gereksiz işler yapılması durumunda.

### Sohbeti dostane tutun

Hayır demeyi uygulayacağınız en önemli yerlerden biri de, sorun ve istek sıralarıdır. Bir proje sorumlusu olarak, çoğunlukla kabul etmek istemediğiniz öneriler alırsınız.

Belki yapılan katkı projenizin kapsamını değiştiriyor veya vizyonunuza uymuyor. Belki fikir iyidir, ancak uygulama zayıftır.

Sebep ne olursa olsun, projenizin standartlarına uymayan katkıları titizlikle ele almak mümkündür.

Kabul etmek istemediğiniz bir katkı alırsanız, ilk tepkiniz bunu görmezden gelmek veya görmemiş gibi yapmak olabilir. Bunu yapmak, diğer kişinin duygularına zarar verebilir ve hatta topluluğunuzdaki diğer potansiyel katılımcıların cesaretini kırabilir.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">
  Büyük ölçekli açık kaynaklı projeler için desteği ele almanın anahtarı sorunları devam ettirmektir. Sorunların taklı kalmasını yaşamaktan kaçının. Bir iOS geliştiricisiyseniz, radar göndermek için ne kadar sinir bozucu olabileceğini bilirsiniz. 2 yıl sonra tekrar duyabilir ve iOS'un en son sürümüyle tekrar denemeniz istenir.
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Açık kaynak topluluklarını ölçeklendirme"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

Kendinizi suçlu hissettiğiniz için veya iyi davranmak istediğiniz için, istenmeyen bir katkıyı açık bırakmayın. Zaman içinde, cevaplanmayan sorunlar ve birleştirme istekleri projeniz üzerinde çalışmayı çok daha stresli ve korkutucu hissettirecektir.

Kabul etmek istemediğinizi bildiğiniz katkıları derhal kapatmak daha iyidir. Projeniz zaten büyük bir birikimden etkilenmişse, @steveklabnik, [sorunların verimli bir şekilde nasıl sıralanacağı](https://words.steveklabnik.com/how-to-be-an-open-source-gardener) konusunda verdiği önerilere bakabilirsiniz.

İkincisi, katkıları görmezden gelmek, topluluğunuz için olumsuz bir sinyal gönderir. Bir projeye katkıda bulunmak, özellikle birinin ilk defa olması durumunda korkutucu olabilir. Katkısını kabul etmeseniz bile, arkasındaki kişiyi kabul edin ve ilgileri için teşekkür ederiz. Onlar için bu büyük bir iltifat olur!

Bir katkıyı kabul etmek istemiyorsanız:

* Katkıdan dolayı **teşekkür edin**.
* **Neden proje kapsamına girmediğini açıklayın** ve mümkünse iyileştirme için net önerilerde bulunun. Nazik ama kararlı olun.
* Varsa, **ilgili belgelere link verin**. Kabul etmek istemediğiniz şeyler için tekrarlanan istekler fark ederseniz, tekrar etmemek için bunları belgelerinize ekleyin.
* **İsteği kapatın.**

Cevap vermek için 1-2 cümleden fazlasına ihtiyacınız yoktur. Örneğin, [kerevizin](https://github.com/celery/celery/) kullanıcısı Windows ile ilgili bir hata bildirdiğinde, @berkerpeksag [verdiği cevap](https://github.com/celery/celery/issues/3383):

![Celery screenshot](/assets/images/best-practices/celery.png)

Eğer hayır deme düşüncesi sizi korkutuyorsa, yalnız değilsiniz. @Jessfraz'ın [söylediği gibi](https://blog.jessfraz.com/post/the-art-of-closing/):

> Birkaç farklı açık kaynaklı projeden, Mesos, Kubernetes, Chromium'dan gelenlerle konuştum ve hepsi de bir geliştirici olmanın en zor kısımlarından birinin yaptığı istemediğiniz yamalar için "Hayır" demek olduğu konusunda hemfikirler.

Birinin katkısını kabul etmek istemediğiniz için suçluluk hissetmeyin. @Shykes'e [göre](https://twitter.com/solomonstre/status/715277134978113536) ilk açık kaynak kuralı: _"Hayır geçici, evet kalıcıdır."_ Başka birinin coşkusunu empati etmek iyi bir şey olsa da, bir katkıyı reddetmek, arkasındaki kişiyi reddetmekle aynı değildir.

Sonuçta, eğer bir katkı yeterince iyi değilse, kabul etme yükümlülüğünüz yoktur. İnsanlar projenize katkıda bulunurken nazik ve duyarlı olun, ancak yalnızca projenizi daha iyi hale getireceğine gerçekten inandığınız değişiklikleri kabul edin. Ne kadar sık hayır demeyi pratik edersen, işin o kadar kolaylaşır. Kesinlikle.

### Proaktif olun

İstenmeyen katkıların hacmini ilk etapta azaltmak için, projenizin katkıda bulunma rehberinde katkı gönderme ve kabul etme sürecini açıklayın.

Çok fazla düşük kaliteli katkı alıyorsanız, katkıda bulunanların önceden biraz çalışma yapmasını isteyin, örneğin:

* Bir sorun veya PR şablonunu veya kontrol listesi doldurma
* PR göndermeden önce bir sorun açma

Kurallarınıza uymuyorlarsa, belgelerinizi referans göstererek sorunu hemen kapatın.

Bu yaklaşım ilk başta kaba görünebilir olsa da proaktif olmak her iki taraf için de iyidir. Birisinin kabul etmeyeceğiniz bir talep boşa saatlerce çalışma yapma riskini azaltır. Ve sizin de iş yükünüzü yönetmeyi kolaylaştırır.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  İdeal olarak, kendilerine işe başlamadan önce bir CONTRIBUTING.md dosyasında gelecekte nelerin kabul edilip edilmeyeceğine dair daha iyi bir gösterge alabileceklerini açıklayın.
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["PR İsteklerini Kırmadan Reddetme"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

Bazen, hayır dediğinizde, katkıda bulunan kişi kararınızdan dolayı kırılabilir veya sizi eleştirebilir. Davranışları düşmanca olursa, yapıcı bir şekilde işbirliği yapmaya istekli olmazlarsa [durumu etkisiz hale getirmek için adımlar atın](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) ve hatta onları topluluğunuzdan çıkarın.

### Mentorluğu benimseyin

Belki de topluluğunuzdaki birileri düzenli olarak projenizin standartlarını karşılamayan katkılar sunar. Her iki tarafın da bu reddedilme süreçlerinden defalarca geçmesi sinir bozucu olabilir.

Birinin projeniz için hevesli olduğunu ancak biraz el vermek gerektirdiğini görürseniz, sabırlı olun. Her durumda katkılarının neden projenin beklentilerini karşılamadığını açık bir şekilde açıklayın. Onları ellerini kirletmek için _"ilk iş için uygun"_ olarak işaretlenmiş bir konu gibi daha kolay veya daha az belirsiz bir işe yönlendirmeyi deneyin. Vaktiniz varsa, ilk katkılarınla onlara mentor olmayı düşünün veya topluluğunuzda mentor olmaya istekli olabilecek başka birini bulun.

## Topluluğunuzdan yararlanma

Her şeyi kendiniz yapmak zorunda değilsiniz. Projenizin topluluğunun olmasının bir nedeni var! Henüz aktif bir katkıda bulunan topluluğunuz olmasa bile, çok fazla kullanıcınız varsa, onları işe dahil edin.

### İş yükünü paylaşın

Başkalarının işe girişmesini istiyorsanız, bu dile getirerek başlayın.

Yeni katılımcılar kazanmanın bir yolu da [yeni katılanlar için kolay çözülebilecek sorunları belirmektir](https://help.github.com/en/articles/helping-new-contributors-find-your-project-with-labels). GitHub bu sorunları platform üzerindeki farklı sayfalarda göstererek farkedilebilir olmalarını sağlayacaktır.

Katkıda bulunan arasında yeni olanları gördüğünüzde, çalışmalarını daha fazla sorumluluk sunarak tanıyın. İsterlerse kendilerinin de yöneticilik rolüne nasıl dönüşebileceğini belgeleyin.

Başkalarını yüreklendirmek ve [projenin sahipliğini paylaşmak](../building-community/#projenizi-paylaşın) kendi iş yükünüzü azaltır. @lmccart kendi projesinde bunu nasıl yaptığını aşağıdaki gibi anlatıyor, [p5.js](https://github.com/processing/p5.js).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
  "Evet, herhangi biri katılabilir, çok fazla kodlama uzmanlığına sahip olmanız gerekmiyor" derdim. İnsanları [bir etkinliğe] katılmak için kaydettirdik ve o zaman gerçekten merak ediyordum: bu nasıl olacak? Ortada 40 kişi olacak ve her biriyle tek tek ilgilenemeyeceğim... Ama insanlar bir araya geldi ve birlikte çalıştı. Bir kişi öğrenir öğrenmez, yanındakine öğretebildi.
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["Açık Kaynak" Gerçekten Ne Demektir? P5.js Sürümü") (https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition -98c02d354b39)
  </p>
</aside>

Projenizden, ara sıra veya kalıcı olarak çıkmanız gerekirse, bir başkasının sizin için üstlenmesini istemek utanılacak bir şey değildir.

Diğer insanlar yeni yön konusunda istekliyse, giriş yapmalarını sağlayın veya resmi olarak bir başkasına kontrolünü verin. Birisi projenizi çatalladı ve aktif olarak başka bir yerde sürdürüyorsa, orijinal projenizdeki çatalda bağlantı kurmayı düşünün. Bu kadar çok insanın projenizin devam etmesini istemesi harika bir şeydir!

@progrium [farkına vardı ki](https://web.archive.org/web/20151204215958/https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/); projesinin ([Dokku](https://github.com/dokku/dokku)) vizyonunu belgelemesi sayesinde kendisi projeden çekilse bile hedefleri canlı kalabildi:

> Ne istediğimi ve neden istediğimi anlatan bir wiki sayfası yazdım. Bir nedenden dolayı, bakıcıların projeyi bu yönde hareket ettirmeye başlaması bana sürpriz oldu! Tam olarak benim istediğim gibi mi oldu? Her zaman değil. Ama yine de projeyi yazdıklarımın yakınına getirdi.

### Başkalarının ihtiyaç duydukları çözümleri inşa etmelerine izin verin

Potansiyel bir katılımcının projenizin ne yapması gerektiği konusunda farklı bir görüşü varsa, onları kendi çatalı üzerinde çalışmaya kibarca teşvik etmek isteyebilirsiniz.

Bir projeyi terk etmek kötü bir şey olmak zorunda değildir. Projeleri kopyalayıp değiştirebilmek, açık kaynak kodlu hakkında en iyi şeylerden biridir. Topluluk üyelerinizi kendi çatalı üzerinde çalışmaya teşvik etmek, projenizin vizyonuyla çelişmeden ihtiyaç duydukları yaratıcı çıkışı sağlayabilir.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  % 80 kullanım durumunda kalıyorum. Eğer tek boynuzlu atlardan birisiyseniz, lütfen işimi hazırlayın. Kırılmayacağım! Kamu projelerim neredeyse her zaman en yaygın sorunları çözme amaçlıdır; İşimi yayarak ya da genişleterek daha derine inmeyi kolaylaştırmaya çalışıyorum.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Neden PR'leri Kapatıyorum"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

Aynı şey, inşa edecek bant genişliğine sahip olmadığınız bir çözümü gerçekten isteyen bir kullanıcı için de geçerlidir. API'ler ve kişiselleştirme kancaları sunmak, kaynağını doğrudan değiştirmek zorunda kalmadan, başkalarının kendi ihtiyaçlarını karşılamasına yardımcı olabilir. @orta, CocoaPod'lar için teşvik edici eklentilerin "en ilginç fikirlerin bazılarına" yol açtığını [gördü](https://artsy.github.io/blog/2016/07/03/handling-big-projects/) :

> Bir proje büyükleştiğinde, bakımcılar yeni kodu nasıl girdikleri konusunda daha muhafazakar hale gelmek neredeyse kaçınılmazdır. Hayır demekte iyisin, ama birçok insanın meşru ihtiyaçları var. Bunun yerine aracınızı bir platforma dönüştürürsünüz.

## Robotları kullanın

Tıpkı diğer insanların size yardımcı olabileceği görevler olduğu gibi, hiçbir insanın yapmaması gereken görevler de vardır. Robotlar senin arkadaşın. Hayatınızı kolaylaştırmak için bunları kullanın.

### Kodunuzun kalitesini yükseltmek için testler ve diğer kontrolleri zorunlu kılın

Projenizi otomatikleştirmenin en önemli yollarından biri de testler eklemektir.

Testler, katkıda bulunanların hiçbir şeyi kırmayacaklarından emin olmalarına yardımcı olur. Ayrıca katkıları hızla incelemenizi ve kabul etmenizi kolaylaştırır. Ne kadar duyarlı olursanız, toplumunuz o kadar adanmış olabilir.

Tüm gelen katkılarda çalışacak otomatik testler ayarlayın ve testlerinizin katılımcılar tarafından kolayca yerel olarak çalıştırılabildiğinden emin olun. Tüm kod katkılarının gönderilmeden önce testlerinizi geçmesini şart koşun. Tüm gönderiler için minimum kalite standardı belirlenmesine yardımcı olmuş olacaksınız. GitHub'daki [zorunlu durum kontrolleri](https://help.github.com/articles/about-required-status-checks/) , testleriniz geçmeden değişiklik yapılmadan birleştirilmemesini sağlayabilir.

Testler eklerseniz, CONTRIBUTING dosyanızda nasıl çalıştıklarını açıkladığınızdan emin olun.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">
  İnsanların üzerinde çalıştığı tüm kodlar için testlerin gerekli olduğuna inanıyorum. Kod tamamen ve tamamen doğru olsaydı, değişikliğe ihtiyaç duymazdı - değişikliklerin yapılması gerektiğine - yalnızca bir şey yanlış olduğunda, "Çöktüğünde" ya da "Böyle ve böyle bir özellikten yoksun" olduğunda kod yazarız. Yaptığınız değişikliklerden bağımsız olarak, testler yanlışlıkla verebileceğiniz herhangi bir zararı yakalamak için gereklidir.
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust'un Topluluk Otomasyonu"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Temel bakım görevlerini otomatikleştirmek için araçlar kullanın

Popüler bir projeyi sürdürmenin iyi haberi, diğer geliştiricilerin de benzer sorunlarla karşı karşıya kalmaları ve bunun için bir çözüm üretmeleridir.

Bakım çalışmalarının bazı yönlerini otomatikleştirmeye yardımcı olacak [çeşitli araçlar vardır](https://github.com/showcases/tools-for-open-source). Birkaç örnek:

* [semantic-release](https://github.com/semantic-release/semantic-release) sürümlerinizi otomatikleştirir
* [mention-bot](https://github.com/facebook/mention-bot) PR talepleri için potansiyel denetçilerden bahseder
* [Danger](https://github.com/danger/danger) kod incelemesini otomatikleştirmeye yardımcı olur
* [no-response](https://github.com/probot/no-response) geliştiricilerin uzun süre yanıt vermediği sorunları kapatır
* [dependabot-preview](https://github.com/marketplace/dependabot-preview) bağımlılık dosyalarınızı her gün eski gereksinimler için kontrol eder ve bulduğu her biri için PR istekleri açar

Hata raporları ve diğer genel katkılar için GitHub, aldığınız iletişimi kolaylaştırmak için oluşturabileceğiniz [Sorun Şablonlarına ve PR İsteği Şablonlarına](https://github.com/blog/2111-issue-and-pull-request-templates) sahiptir. @TalAter sorununuzu ve PR şablonlarınızı yazmanıza yardımcı olmak için [Choose Your Own Adventure](https://www.talater.com/open-source-templates/#/) rehberini geliştirdi.

E-posta bildirimlerinizi yönetmek için, önceliğe göre düzenlemek için [e-posta filtreleri](https://github.com/blog/2203-email-updates-about-your-own-activity) ayarlayabilirsiniz.

Biraz daha gelişmiş olmak istiyorsanız, stil rehberleri ve taslaklar proje katkılarını standartlaştırabilir ve inceleme ve kabul etmeyi kolaylaştırabilir.

Bununla birlikte, standartlarınız çok karmaşıksa, katılımların önüne engel olabilirler. Herkesin hayatını kolaylaştırmak için sadece yeterince kural eklediğinizden emin olun.

Hangi araçları kullanacağınızdan emin değilseniz, özellikle ekosisteminizdeki diğer popüler projelerin neler yaptığına bakın. Örneğin, katılım süreci diğer Node modülleri için nasıl yapılmış? Benzer araçlar ve yaklaşımlar kullanmak, sürecinizi katkıda bulunması olası insanlar için daha tanıdık yapacaktır.

## Duraklatmak sorun değildir

Açık kaynak çalışması bir zamanlar size heyecan ve mutluluk getirmiştir. Ama şimdi size yük veya sorumluluk hissettirmeye başlamış olabilir.

Belki de projelerinizi düşünürken bunalmış veya artan bir korku hissi duyuyorsunuz. Bu arada, sorunlar ve PR talepleri de yığılıyor.

Tükenmişlik, özellikle geliştiriciler arasında açık kaynaklı çalışmalarda gerçek ve yaygın bir konudur. Bir geliştirici olarak mutluluğunuz, açık kaynaklı herhangi bir projenin hayatta kalması için tartışılmaz bir gerekliliktir.

Söylemeye gerek yok ama, ara verin! Tatil yapmak için yanmış hissedene kadar beklemeniz gerekmez. Bir Python çekirdek geliştiricisi olan @brettcannon, 14 yıllık gönüllü OSS çalışmasının ardından [bir ay boyunca tatil](https://snarky.ca/why-i-took-october-off-from-oss-volunteering/) yapmaya karar verdi.

Tıpkı diğer tüm işlerde olduğu gibi, düzenli molalar vermek de işinizi yenileyecek, mutlu ve heyecanlı tutacaktır.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">
  WP-CLI’yı geliştirirken, önce kendimi mutlu etmem gerektiğini ve katılımım konusunda net sınırlar koymam gerektiğini keşfettim. Bulduğum en iyi denge, normal çalışma programımın bir parçası olarak haftada 2-5 saat. Bu benim katılımımı bir tutku olarak kalmasını sağlıyor ve iş gibi hissetmekten koruyor. Üzerinde çalıştığım konulara öncelik verdiğim için, en önemli olduğunu düşündüğüm konuda düzenli ilerleme sağlayabiliyorum.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["Başınız sağolsun, şimdi popüler bir açık kaynak projesinin sorumlusunuz"](https://danielbachhuber.com/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

Bazen, herkesin size ihtiyacı olduğunu düşündüğünüz zamanlarda, bir açık kaynak projesine mola vermek zor olabilir. İnsanlar uzaklaştığınız için sizi suçlu hissettirmeye çalışabilir.

Bir projeden uzaktayken kullanıcılarınız ve topluluğunuz için destek bulmak için elinizden geleni yapın. İhtiyacınız olan desteği bulamazsanız, yine de bir ara verin. Uygun olmadığınız zamanı duyurduğunuzdan emin olun, böylece insanlar yanıt verme konusundaki eksikliğinizden dolayı şaşkınlığa uğramazlar.

Ara vermek, tatillerden daha fazlası için de geçerlidir. Hafta sonları veya mesai saatleri arasında açık kaynak kodlu bir iş yapmak istemiyorsanız, bu beklentinizi başkalarına iletin; böylece sizi rahatsız etmemeleri gerektiğini bilirler.

## İlk önce kendinize iyi bakın!

Popüler bir projeyi sürdürmek, büyümenin önceki aşamalarından farklı beceriler gerektirir, ancak daha az ödüllendirici değildir. Bir geliştirici olarak, birkaç kişinin deneyimleyebileceği bir seviyede liderlik ve kişisel beceriler geliştireceksiniz. Yönetimi her zaman kolay olmamakla birlikte, net sınırlar koymak ve yalnızca neleri yapacağınızı belirlemek sizin mutlu, yenilenmiş ve üretken kalmanıza yardımcı olacaktır.
