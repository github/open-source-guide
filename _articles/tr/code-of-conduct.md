---
lang: tr
title: Davranış Kurallarınız
description: Bir davranış kuralını benimseyerek ve uygulayarak sağlıklı ve yapıcı topluluk davranışını kolaylaştırın.
class: coc
toc:
  why-do-i-need-a-code-of-conduct: Neden bir davranış kural listesine ihtiyacım var?
  establishing-a-code-of-conduct: Davranış kuralları oluşturmak
  deciding-how-youll-enforce-your-code-of-conduct: Davranış kurallarınızı nasıl uygulayacağınıza karar verme
  enforcing-your-code-of-conduct: Davranış kurallarınızı uygulama
  your-responsibilities-as-a-maintainer: Bir koruyucu olarak sorumluluklarınız
order: 8
image: "/assets/images/cards/coc.png"
related:
  - building
  - leadership
---

## Neden bir davranış kural listesine ihtiyacım var?

Davranış kural listesi, projenizin katılımcıları için davranış beklentilerini belirleyen bir belgedir. Bir davranış kuralını kabul etmek ve uygulamak, topluluğunuz için olumlu bir sosyal atmosfer yaratmanıza yardımcı olabilir.

Davranış kuralları sadece katılımcılarınızı değil kendinizi de korumanıza yardımcı olur. Bir projeyi sürdürürken, diğer katılımcıların verimsiz tutumlarından dolayı zaman içinde çalışmalarınızda kendinizi yorgun veya mutsuz hissedebilirsiniz.

Davranış kuralları, sağlıklı ve yapıcı topluluk davranışını oluşturmanıza yardımcı olur. Proaktif olmak, sizin veya başkalarının projenizde yorulma olasılığını azaltır ve bir kişi aynı fikirde olmadığınız bir şey yaptığında harekete geçmenize yardımcı olur.

## Davranış kural listesini oluşturmak

Mümkün olduğunca en erken zamanda bir davranış kural listesi oluşturmaya çalışın: İdeal olanı, projenizi ilk oluşturduğunuzda bunu yapmanızdır.

Beklentilerinizi iletmenin yanı sıra, bir davranış kural listesi aşağıdakileri de açıklar:

* Davranış kuralları nerede yürürlüğe girer _(sadece sorunlar ve talepler üzerine mi yoksa toplantılar gibi topluluk etkinliklerinde mi?)_?
* Davranış kuralları kimin için geçerlidir _(topluluk üyeleri ve bakıcıları, peki ya sponsorlar?)_?
* Birisi davranış kurallarını ihlal ederse ne olur?
* İhlaller nasıl rapor edilebilir?

Nerede olursanız olun, geçmiş tecrübelerden faydalanın. [Katkıda Bulunanlar Sözleşmesi (Contributor Covenant)](https://contributor-covenant.org/) Kubernet, Rails ve Swift dahil olmak üzere 40.000'den fazla açık kaynaklı proje tarafından kullanılan ortak bir davranış kural listesidir.

[Django Davranış Kuralları](https://www.djangoproject.com/conduct/) ve [Vatandaş Davranış Kuralları](https://web.archive.org/web/20200330154000/http://citizencodeofconduct.org/) da aynı zamanda iki iyi davranış kural listesi örneğidir.

CODE_OF_CONDUCT dosyasını projenizin kök dizinine yerleştirin ve CONTRIBUTING veya README dosyanızdan bağlantılayarak topluluğunuz tarafından görülebilir hale getirin.

## Davranış kurallarınızı nasıl uygulayacağınıza karar verme

<aside markdown="1" class="pquote">
  Uygulanmayan (veya uygulanamayan) bir davranış kural listesi, hiçbir davranış kuralı olmamasından daha kötüdür: davranış kurallarındaki değerlerin, sizin toplumunuzda gerçekten önemli veya saygı duyulmadığı mesajını gönderir.
  <p markdown="1" class="pquote-credit">
- [Ada Girişimi](https://adainitiative.org/2014/02/18/howto-design-a-code-of-conduct-for-your-community/)
  </p>
</aside>

Bir ihlal meydana _gelmeden önce_ davranış kurallarınızın nasıl uygulanacağını açıklamalısınız. Bunu yapmak için birkaç neden var:

* İhtiyaç duyulduğunda harekete geçme konusunda ciddi olduğunuzu gösterir.

* Topluluğunuz şikayetlerin gerçekten gözden geçirildiği konusunda daha güvende hissedecektir.

* Topluluğunuza, inceleme sürecinin adil ve şeffaf olduğunu, kendilerini bir ihlal için araştırıldıklarında güvence altında olduklarını hissettirirsiniz.

İnsanlara davranış kuralları ihlalini bildirebilmeleri için özel bir yol (e-posta adresi gibi) vermelisiniz ve bu raporun kimlere ulaştığını açıklamalısınız. Bu bir kurucu, bir geliştirme grubu veya bir davranış kuralları çalışma grubu olabilir.

Birisinin, bu raporları alan bir kişi hakkındaki ihlali bildirmek isteyebileceğini de unutmayın. Bu durumda, ihlalleri bir başkasına bildirme seçeneği de verin. Örneğin, @ctb ve @mr-c"nin [projeleri üzerinde açıkladıkları gibi](https://github.com/dib-lab/khmer/blob/HEAD/CODE_OF_CONDUCT.rst) , [khmer](https://github.com/dib-lab/khmer) :

> Kötü niyetli, taciz edici veya kabul edilemez davranışların **örnekleri** , yalnızca C. Titus Brown ve Michael R. Crusoe'ye gönderilen **khmer-project@idyll.org adresine** e-posta {strong2}gönderilerek{/strong2} bildirilebilir. İkisini de içeren bir sorunu bildirmek için lütfen {strong3}Judi Brown Clarke, Ph.D.{/strong3} NSAC Bilim ve Teknoloji Merkezi olan, Eylemdeki Evrim Çalışması Merkezi'ndeki BEACON Çeşitlilik Direktörü. *

İlham almak için Django'nun [uygulama kılavuzunu inceleyin](https://www.djangoproject.com/conduct/enforcement-manual/) (ancak projenizin büyüklüğüne bağlı olarak bu kadar kapsamlı bir şeye ihtiyacınız olmayabilir).

## Davranış kurallarınızı güçlendirmek

Bazen, en iyi çabalarınıza rağmen, birileri bu kodu ihlal eden bir şey yapabilir. Olay ortaya çıktığında olumsuz ya da zararlı davranışları ele almanın birkaç yolu vardır.

### Durum hakkında bilgi toplayın

Her topluluğun üyesinin sesine, sizinki kadar önemli verin. Birinin davranış kurallarını ihlal ettiğini bildiren bir rapor alırsanız, ciddiye alın ve bu kişi olan kendi deneyiminize uymasa bile konuyu araştırın. Bunu yapmak, topluluğunuza kendi perspektifine değer verdiğinizi ve kararlarına güvendiğinizi gösterir.

Söz konusu topluluk üyesi, sürekli olarak başkalarını rahatsız hissetmesine neden olan, ya da bir kez bir şey söyleyen veya yapan bir suçlu olabilir. Her ikisi de bağlama bağlı olarak eyleme geçmenin gerekçesi olabilir.

Cevap vermeden önce, neler olduğunu anlamak için biraz zaman harcayın. Kim olduklarını ve neden böyle davrandıklarını daha iyi anlamak için, kişi ya da kişilerin geçmiş yorumlarını ve konuşmalarını okuyun. Bu kişi ve davranışları hakkındaki kendi görüşleriniz dışında başka bakış açıları da toplamaya çalışın.

<aside markdown="1" class="pquote">
  Bir tartışmaya girmeyin. Eldeki konuyla ilgilenmeyi bitirmeden önce başkasının davranışlarıyla başa çıkmayın. İhtiyacınız olana odaklanın.
  <p markdown="1" class="pquote-credit">
- Stephanie Zvan, ["So You've Got Yourself a Policy. Now What?"](https://the-orbit.net/almostdiamonds/2014/04/10/so-youve-got-yourself-a-policy-now-what/)
  </p>
</aside>

### Uygun işlemi yapın

Yeterli bilgiyi topladıktan ve işledikten sonra ne yapacağınıza karar vermeniz gerekir. Sonraki adımlarınızı düşündüğünüz gibi, moderatör olarak hedefinizin güvenli, saygılı ve işbirliğine dayalı bir ortam oluşturmak olduğunu unutmayın. Yalnızca söz konusu durumla nasıl başa çıkacağınızı değil, yanıtınızın topluluğunuzun davranışlarını ve ilerleyişindeki beklentilerini nasıl etkileyeceğini de düşünün.

Birisi bir davranış kuralları ihlali bildirdiğinde, bu durumla yüzleşmesi gereken sizsiniz, bildiren kişi değil. Bazen, ihbar eden kişi kariyer, itibar veya fiziksel güvenlik açısından büyük risk altındaki bilgileri ifşa ediyordur. Onları tacizcileriyle yüzleşmeye zorlamak, ihbar eden kişiyi uzlaşma konumuna getirebilir. İhbar eden açıkça aksini talep etmediği sürece, söz konusu kişiyle doğrudan iletişime geçmelisiniz.

Bir davranış kural ihlaline yanıt vermenin birkaç yolu vardır:

* **Söz konusu kişiye genel bir uyarı verin** ve davranışlarının diğerlerini, nasıl olumsuz etkilediğini tercihen meydana geldiği kanalda açıklayın. Mümkün olan diğer yerlerde de, genel iletişim kanalarında da, davranış kurallarını ciddiye aldığınız toplumun geri kalanına iletir. Kibar olun, ancak iletişiminizde sağlam olun.

* Davranışlarının diğerlerini nasıl olumsuz yönde etkilediğini açıklamak **için ilgili kişiye özel olarak ulaşın**. Durum hassas kişisel bilgiler içeriyorsa, özel bir iletişim kanalı kullanmak isteyebilirsiniz. Biriyle özel olarak iletişim kurarsanız, durumu ilk ihbar eden kişileri CC ile bilgilendirmek iyi bir fikirdir, bu sayede harekete geçtiğinizi bilmiş olurlar. CC'ye eklemeden önce ihbar den kişiden onay isteyin.

Bazen bir çözüme ulaşılamaz. Söz konusu kişi karşı karşıya geldiğinde saldırgan veya düşmanca olabilir veya davranışlarını değiştirmez. Bu durumda, daha güçlü bir işlem yapmayı düşünebilirsiniz. Örneğin:

* Söz konusu kişiyi projedeki herhangi bir şeye katılamayacak şekilde **gecici olarak engelleyebilirsiniz**

* Kişiyi projeden **kalıcı olarak yasaklayabilirsiniz**

Kalıcı olarak yasaklama üyeleri kolayca alınmamalı ve kalıcı uzlaşmaz bir bakış açısı farklılığını temsil etmelidir. Bu önlemleri yalnızca bir çözüme ulaşılamayacağı açıksa almalısınız.

## Proje sahibi olarak sorumluluklarınız

Davranış kuralları, keyfi olarak uygulanan bir yasa değildir. Davranış kurallarının uygulayıcısı sizsiniz ve davranış kurallarının belirlediği kuralları takip etmek de sizin sorumluluğunuzda.

Proje sahibi olarak, topluluğunuz için kılavuz ilkeler belirler ve bu ilkeleri davranış kurallarınızda belirtilen kurallara uygun olarak uygularsınız. Bu, herhangi bir davranış kuralları ihlali raporunu ciddiye almak anlamına gelir. İhbar eden şikayeti hakkında kapsamlı ve adil bir inceleme yapılmasını hak eder. Bildirdikleri davranışların bir ihlal olmadığını belirlerseniz, bunu açıkça belirtin ve neden bu konuda harekete geçmeyeceğinizi açıklayın. Bununla ne yapacakları onlara bağlı: Sorunlu olduğunu düşündükleri davranışlara hoşgörü gösterirler veya topluluktan ayrılabilirler.

_Teknik_ olarak davranış kurallarını ihlal etmeyen bir davranış raporu, toplumunuzda bir sorun olduğunu gösterebilir ve bu olası sorunu araştırmanız ve buna göre davranmanız gerekir. Bu, kabul edilebilir davranışı netleştirmek için davranış kurallarınızı gözden geçirmeyi ve/veya davranışları rapor edilen kişiyle konuşmayı ve davranış kurallarını ihlal etmemelerine rağmen, diğer katılımcıları rahatsız etiğini bildirmeniz gerekebilir.

Sonunda, bir proje sahibi olarak, kabul edilebilir davranış için standartları belirler ve uygularsınız. Projenin topluluk değerlerini şekillendirme yetkiniz var ve katılımcılar bu değerleri adil ve eşit bir şekilde uygulamanızı beklerler.

## Dünyada görmek istediğiniz davranışı teşvik edin 🌎

Bir proje düşmanca veya isteksiz göründüğü zaman, davranışları başkaları tarafından hoş görülebilecek tek bir kişi olsa bile, bazılarıyla hiç karşılaşmadığınız birçok katılımcıyı kaybetme riskiyle karşı karşıya kalırsınız. Bir davranış kural listesini kabul etmek veya uygulamak her zaman kolay değildir, ancak sıcak bir ortamı teşvik etmek topluluğunuzun büyümesine yardımcı olacaktır.
