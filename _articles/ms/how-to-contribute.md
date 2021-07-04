---
lang: ms
title: Cara Menyumbang kepada Sumber Terbuka
description: Ingin menyumbang kepada sumber terbuka? Panduan untuk membuat sumbangan sumber terbuka, untuk pertama kali dan untuk veteran.
class: contribute
toc:
  why-contribute-to-open-source: "Mengapa menyumbang kepada sumber terbuka?"
  what-it-means-to-contribute: "Apa maksudnya menyumbang"
  orienting-yourself-to-a-new-project: "Mengarahkan diri anda ke projek baru"
  finding-a-project-to-contribute-to: "Mencari projek untuk disumbangkan"
  how-to-submit-a-contribution: "Cara menghantar sumbangan"
  what-happens-after-you-submit-a-contribution: "Apa yang berlaku setelah anda menghantar sumbangan"
order: 1
image: /assets/images/cards/contribute.png
related:
  - beginners
  - building
---

## Why contribute to open source?

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/errietta?s=180" class="pquote-avatar" alt="avatar">
  Mengusahakan \ [freenode \] membantu saya memperoleh banyak kemahiran yang kemudian saya gunakan untuk pengajian di universiti dan pekerjaan sebenar saya. Saya fikir mengusahakan projek sumber terbuka membantu saya sama seperti membantu projek!
  <p markdown="1" class="pquote-credit">
— @errietta, ["Why I love contributing to open source software"](https://www.errietta.me/blog/open-source/)
  </p>
</aside>

Menyumbang kepada sumber terbuka boleh menjadi kaedah yang bermanfaat untuk belajar, mengajar, dan membina pengalaman dalam apa sahaja kemahiran yang dapat anda bayangkan.

Mengapa orang menyumbang kepada sumber terbuka? Banyak sebab!

### Perbaiki perisian yang anda percayai

Banyak penyumbang sumber terbuka bermula dengan menjadi pengguna perisian yang mereka sumbangkan. Apabila anda menemui bug dalam perisian sumber terbuka yang anda gunakan, anda mungkin ingin melihat sumbernya untuk melihat apakah anda boleh menambalnya sendiri. Sekiranya demikian, menyumbang kembali adalah cara terbaik untuk memastikan bahawa rakan anda (dan anda sendiri semasa anda mengemas kini ke keluaran seterusnya) akan dapat memanfaatkannya.

### Meningkatkan kemahiran yang ada

Sama ada pengekodan, reka bentuk antara muka pengguna, reka bentuk grafik, penulisan, atau penyusunan, jika anda mencari latihan, ada tugas untuk anda dalam projek sumber terbuka.

### Berjumpa dengan orang yang berminat dengan perkara serupa

Projek sumber terbuka dengan komuniti yang mesra dan mesra membuatkan orang kembali bertahun-tahun. Banyak orang menjalin persahabatan sepanjang hayat melalui penyertaan mereka dalam sumber terbuka, sama ada ia saling bertemu di persidangan atau sembang dalam talian lewat malam mengenai burrito.

### Cari mentor dan ajar orang lain

Bekerja dengan orang lain dalam projek bersama bermaksud anda harus menerangkan bagaimana anda melakukan sesuatu, dan juga meminta bantuan orang lain. Tindakan belajar dan mengajar boleh menjadi aktiviti yang memuaskan bagi semua orang yang terlibat.

### Bina artifak awam yang membantu anda mengembangkan reputasi (dan kerjaya)

Secara definisi, semua karya sumber terbuka anda bersifat umum, yang bermaksud anda mendapat contoh percuma untuk dibawa ke mana sahaja sebagai demonstrasi mengenai apa yang boleh anda lakukan.

### Pelajari kemahiran orang

Sumber terbuka menawarkan peluang untuk mempraktikkan kepemimpinan dan kemahiran pengurusan, seperti menyelesaikan konflik, mengatur pasukan orang, dan mengutamakan pekerjaan.

### Memberi kuasa untuk dapat membuat perubahan, walaupun yang kecil

Anda tidak perlu menjadi penyumbang seumur hidup untuk menikmati berpartisipasi dalam sumber terbuka. Adakah anda pernah melihat kesalahan ketik di laman web, dan berharap ada yang memperbaikinya? Pada projek sumber terbuka, anda boleh melakukannya. Sumber terbuka membantu orang-orang merasa bebas sepanjang hidup mereka dan bagaimana mereka mengalami dunia, dan itu sendiri sangat memuaskan.

## Apa maksudnya menyumbang

Sekiranya anda penyumbang sumber terbuka baru, prosesnya boleh menakutkan. Bagaimana anda mencari projek yang betul? Bagaimana jika anda tidak tahu bagaimana membuat kod? Bagaimana jika ada yang salah?

Tidak perlu risau! Terdapat pelbagai cara untuk terlibat dengan projek sumber terbuka, dan beberapa petua akan membantu anda memanfaatkan sepenuhnya pengalaman anda.

### Anda tidak perlu menyumbang kod

Kesalahpahaman umum mengenai menyumbang kepada sumber terbuka ialah anda perlu menyumbang kod. Sebenarnya, selalunya bahagian lain dari projek itu [most neglected or overlooked](https://github.com/blog/2195-the-shape-of-open-source). Anda akan melaksanakan projek ini dengan menawarkan banyak sumbangan seperti ini!

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/orta?s=180" class="pquote-avatar" alt="avatar">
 Saya terkenal dengan karya saya di CocoaPods, tetapi kebanyakan orang tidak tahu bahawa saya sebenarnya tidak membuat kerja sebenar pada alat CocoaPods itu sendiri. Masa saya dalam projek ini kebanyakannya dihabiskan untuk melakukan perkara seperti dokumentasi dan mengerjakan penjenamaan.
  <p markdown="1" class="pquote-credit">
— @orta, ["Moving to OSS by default"](https://academy.realm.io/posts/orta-therox-moving-to-oss-by-default/)
  </p>
</aside>

Walaupun anda suka menulis kod, jenis sumbangan lain adalah kaedah terbaik untuk terlibat dengan projek dan bertemu dengan ahli komuniti lain. Membina hubungan tersebut akan memberi anda peluang untuk bekerja di bahagian lain projek.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/brettcannon?s=180" class="pquote-avatar" alt="avatar">
  Saya pertama kali menghubungi pasukan pengembangan Python (aka python-dev) ketika saya menghantar e-mel kepada senarai mel pada 17 Jun 2002 mengenai penerimaan tampalan saya. Saya dengan cepat menangkap bug sumber terbuka, dan memutuskan untuk mula menguruskan pencernaan e-mel untuk kumpulan itu. Mereka memberi saya alasan yang baik untuk meminta penjelasan mengenai sesuatu topik, tetapi lebih kritikal saya dapat melihat ketika seseorang menunjukkan sesuatu yang perlu diperbaiki.
  <p markdown="1" class="pquote-credit">
— @brettcannon, ["Maintainer Stories"](https://github.com/open-source/stories/brettcannon)
  </p>
</aside>

### Adakah anda suka merancang acara?

* Mengadakan bengkel atau pertemuan mengenai projek tersebut,[like @fzamperin did for NodeSchool](https://github.com/nodeschool/organizers/issues/406)
* Mengatur persidangan projek (jika ada)
* Membantu ahli komuniti mencari persidangan yang tepat dan mengemukakan cadangan untuk bercakap

### Adakah anda suka merancang?

* Susun semula susun atur untuk meningkatkan kebolehgunaan projek
* Lakukan penyelidikan pengguna untuk menyusun semula dan menyempurnakan navigasi atau menu projek,[like Drupal suggests](https://www.drupal.org/community-initiatives/drupal-core/usability)
* Kumpulkan panduan gaya untuk membantu projek mempunyai reka bentuk visual yang konsisten
* Buat seni untuk t-shirt atau logo baru,[like hapi.js's contributors did](https://github.com/hapijs/contrib/issues/68)

### Adakah anda suka menulis?

* Tulis dan perbaiki dokumentasi projek
* Buat folder contoh yang menunjukkan bagaimana projek itu digunakan
* Mulakan buletin untuk projek ini, atau pilih sorotan dari senarai surat
* Tulis tutorial untuk projek itu,[like PyPA's contributors did](https://github.com/pypa/python-packaging-user-guide/issues/194)
* Tulis terjemahan untuk dokumentasi projek

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kittens?s=180" class="pquote-avatar" alt="avatar">
 Serius, \ [dokumentasi \] sangat penting. Dokumentasi setakat ini hebat dan menjadi ciri pembunuh Babel. Ada bahagian yang tentu dapat menggunakan beberapa karya dan bahkan penambahan perenggan di sini atau di sana sangat dihargai.
  <p markdown="1" class="pquote-credit">
— @kittens, ["Call for contributors"](https://github.com/babel/babel/issues/1347)
  </p>
</aside>

### Adakah anda suka mengatur?

* Pautkan ke masalah pendua, dan cadangkan label terbitan baru, agar segala sesuatu tetap teratur
* Selesaikan masalah terbuka dan cadangkan tutup yang lama,[like @nzakas did for ESLint](https://github.com/eslint/eslint/issues/6765)
*Tanyakan penjelasan mengenai isu yang baru dibuka untuk memajukan perbincangan

### Adakah anda suka membuat kod?

* Cari masalah terbuka untuk mengatasi, [like @dianjin did for Leaflet](https://github.com/Leaflet/Leaflet/issues/4528#issuecomment-216520560)
*Tanya sama ada anda dapat membantu menulis ciri baru
* Automatik penyediaan projek
* Meningkatkan perkakas dan ujian

### Adakah anda suka menolong orang?

* Jawab soalan mengenai projek seperti, Stack Overflow([like this Postgres example](https://stackoverflow.com/questions/18664074/getting-error-peer-authentication-failed-for-user-postgres-when-trying-to-ge)) or Reddit
*Jawab soalan untuk orang yang mempunyai masalah terbuka
* Bantu menyederhanakan papan perbincangan atau saluran perbualan

### Adakah anda suka menolong orang lain membuat kod?

* Semak kod pada kiriman orang lain
* Tulis tutorial bagaimana projek dapat digunakan
* Tawaran untuk mentor penyumbang lain,[like @ereichert did for @bronzdoc on Rust](https://github.com/rust-lang/book/issues/123#issuecomment-238049666)

### Anda tidak hanya perlu mengerjakan projek perisian!

Walaupun "sumber terbuka" sering merujuk kepada perisian, anda boleh berkolaborasi dengan apa sahaja. Terdapat buku, resipi, senarai, dan kelas yang dikembangkan sebagai projek sumber terbuka.

Sebagai contoh:

* @sindresorhus kurate [list of "awesome" lists](https://github.com/sindresorhus/awesome)
* @h5bp mengekalkan [list of potential interview questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions) untuk calon pemaju depan
* @stuartlynn dan @nicole-a-tesla dibuat [collection of fun facts about puffins](https://github.com/stuartlynn/puffin_facts)

Walaupun anda seorang pembangun perisian, mengerjakan projek dokumentasi dapat membantu anda memulakan sumber terbuka. Selalunya kurang menakutkan untuk mengerjakan projek yang tidak melibatkan kod, dan proses kolaborasi akan membina keyakinan dan pengalaman anda.

## Mengarahkan diri anda ke projek baru

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/shaunagm?s=180" class="pquote-avatar" alt="avatar">
  Sekiranya anda pergi ke pelacak masalah dan perkara kelihatan membingungkan, itu bukan hanya anda. Alat ini memerlukan banyak pengetahuan tersirat, tetapi orang dapat menolong anda menavigasi dan anda boleh mengemukakan soalan kepada mereka.
  <p markdown="1" class="pquote-credit">
— @shaunagm, ["How to Contribute to Open Source"](https://readwrite.com/2014/10/10/open-source-diversity-how-to-contribute/)
  </p>
</aside>

Untuk apa-apa yang lebih daripada kesalahan typo, menyumbang kepada sumber terbuka adalah seperti berjalan ke sekumpulan orang asing di pesta. Sekiranya anda mula bercakap tentang llamas, semasa mereka sedang dalam perbincangan mengenai ikan mas, mereka mungkin akan melihat anda sedikit aneh.

Sebelum melompat secara membabi buta dengan cadangan anda sendiri, mulailah dengan belajar membaca ruangan. Melakukannya meningkatkan peluang idea anda diperhatikan dan didengar.

### Anatomi projek sumber terbuka

Setiap komuniti sumber terbuka berbeza.

Menghabiskan bertahun-tahun untuk satu projek sumber terbuka bermakna anda telah mengetahui satu projek sumber terbuka. Pindah ke projek lain, dan anda mungkin mendapati perbendaharaan kata, norma, dan gaya komunikasi sama sekali berbeza.

Yang mengatakan, banyak projek sumber terbuka mengikuti struktur organisasi yang serupa. Memahami peranan masyarakat dan proses keseluruhan akan membantu anda berorientasi dengan cepat ke mana-mana projek baru.

Projek sumber terbuka khas mempunyai jenis orang berikut:

* **Pengarang:** Orang atau organisasi yang membuat projek
* **Pemilik:** Orang yang mempunyai hak milik pentadbiran ke atas organisasi atau repositori (tidak selalu sama dengan pengarang asal)
* **Penyelenggara:** Penyumbang yang bertanggungjawab memacu visi dan mengurus aspek organisasi projek (Mereka juga mungkin pengarang atau pemilik projek.)
* **Penyumbang:** Semua orang yang telah menyumbang sesuatu untuk projek ini
* **Anggota Komuniti:** Orang yang menggunakan projek. Mereka mungkin aktif dalam perbualan atau menyatakan pendapat mereka mengenai arah projek

Projek yang lebih besar mungkin juga mempunyai jawatankuasa kecil atau kumpulan kerja yang berfokus pada tugas yang berbeza, seperti perkakas, percobaan, penyederhanaan masyarakat, dan pengorganisasian acara. Lihat di laman web projek untuk halaman "pasukan", atau di repositori untuk dokumentasi tadbir urus, untuk mendapatkan maklumat ini.

Projek juga mempunyai dokumentasi. Fail-fail ini biasanya disenaraikan di tingkat atas repositori.

* **LICENSE:** Secara definisi, setiap projek sumber terbuka mesti mempunyai[open source license](https://choosealicense.com).Sekiranya projek itu tidak mempunyai lesen, ia bukan sumber terbuka.
* **README:** README adalah manual arahan yang mengalu-alukan ahli komuniti baru untuk projek ini. Ia menerangkan mengapa projek ini berguna dan bagaimana memulakannya.
* **CONTRIBUTING:** Manakala README membantu orang _menggunakan projek, menyumbang dokumen membantu orang _memberi sumbangan_ dalam projek. Ia menerangkan jenis sumbangan apa yang diperlukan dan bagaimana prosesnya berjalan. Walaupun tidak setiap projek mempunyai fail CONTRIBUTING, kehadirannya memberi isyarat bahawa ini adalah projek yang dapat disumbangkan.
* **CODE_OF_CONDUCT:** Kod tingkah laku menetapkan peraturan asas untuk tingkah laku peserta yang berkaitan dan membantu mempermudah persekitaran yang ramah dan mesra. Walaupun tidak setiap projek mempunyai fail CODE_OF_CONDUCT, kehadirannya menunjukkan bahawa ini adalah projek yang baik untuk disumbangkan.
* **Other documentation:** Mungkin ada dokumentasi tambahan, seperti tutorial, panduan, atau dasar pemerintahan, terutama pada proyek yang lebih besar.

Akhirnya, projek sumber terbuka menggunakan alat berikut untuk mengatur perbincangan. Membaca arkib akan memberi anda gambaran yang baik tentang bagaimana masyarakat berfikir dan berfungsi.

* **Issue tracker:** Di mana orang membincangkan masalah yang berkaitan dengan projek.
* **Pull requests:** Tempat orang membincangkan dan mengkaji perubahan yang sedang dilakukan.
* **Discussion forums or mailing lists:** Beberapa projek mungkin menggunakan saluran ini untuk topik perbualan (misalnya, _"Bagaimana saya ..."_ atau _"Apa pendapat anda tentang ..."_ bukannya laporan pepijat atau permintaan ciri). Yang lain menggunakan pelacak masalah untuk semua perbualan.
* **Synchronous chat channel:** Beberapa projek menggunakan saluran sembang (seperti Slack atau IRC) untuk perbualan santai, kolaborasi, dan pertukaran cepat.

## Mencari projek untuk disumbangkan

Sekarang setelah anda mengetahui bagaimana projek sumber terbuka berfungsi, inilah masanya untuk mencari projek untuk disumbangkan!

Sekiranya anda tidak pernah menyumbang kepada sumber terbuka sebelumnya, dapatkan nasihat Presiden A.S. John F. Kennedy, yang pernah berkata, _"Jangan tanya apa yang boleh dilakukan oleh negara anda untuk anda - tanyakan apa yang boleh anda lakukan untuk negara anda."_

Menyumbang kepada sumber terbuka berlaku di semua peringkat, di semua projek. Anda tidak perlu terlalu memikirkan apa sebenarnya sumbangan pertama anda, atau bagaimana bentuknya.

Sebaliknya, mulakan dengan memikirkan projek yang sudah anda gunakan, atau mahu gunakan. Projek yang akan anda sumbangkan secara aktif adalah projek yang anda mahukan.

Dalam projek-projek itu, setiap kali anda merasa berfikir bahawa sesuatu boleh menjadi lebih baik atau berbeza, bertindaklah mengikut naluri anda.

Sumber terbuka bukan kelab eksklusif; ia dibuat oleh orang seperti anda. "Sumber terbuka" hanyalah istilah yang baik untuk menangani masalah dunia sebagai penyelesaian.

Anda mungkin mengimbas README dan mencari pautan yang rosak atau kesalahan ketik. Atau anda pengguna baru dan anda melihat ada sesuatu yang rosak, atau masalah yang anda fikirkan semestinya ada dalam dokumentasi. Daripada mengabaikannya dan terus bergerak, atau meminta orang lain untuk memperbaikinya, lihat sama ada anda dapat membantu dengan memasukkan masuk. Itulah sumber terbuka!

> [28% of casual contributions](https://www.igor.pro.br/publica/papers/saner2016.pdf) untuk sumber terbuka adalah dokumentasi, seperti kesalahan ketik, memformat semula, atau menulis terjemahan.

Sekiranya anda mencari masalah yang ada yang dapat anda perbaiki, setiap projek sumber terbuka mempunyai `/contribute`halaman yang menyoroti masalah mesra pemula yang boleh anda mulakan. Navigasi ke halaman utama repositori di GitHub, dan tambahkan `/contribute` di hujung URL (for example [`https://github.com/facebook/react/contribute`](https://github.com/facebook/react/contribute)).

Anda juga boleh menggunakan salah satu sumber berikut untuk membantu anda menemui dan menyumbang kepada projek baru:

* [GitHub Explore](https://github.com/explore/)
* [Open Source Friday](https://opensourcefriday.com)
* [First Timers Only](https://www.firsttimersonly.com/)
* [CodeTriage](https://www.codetriage.com/)
* [24 Pull Requests](https://24pullrequests.com/)
* [Up For Grabs](https://up-for-grabs.net/)
* [Contributor-ninja](https://contributor.ninja)
* [First Contributions](https://firstcontributions.github.io)
* [SourceSort](https://web.archive.org/web/20201111233803/https://www.sourcesort.com/)

### Senarai semak sebelum anda menyumbang

Apabila anda menemui projek yang ingin anda sumbangkan, lakukan imbasan pantas untuk memastikan bahawa projek tersebut sesuai untuk menerima sumbangan. Jika tidak, kerja keras anda mungkin tidak akan mendapat sambutan.

Berikut adalah senarai semak yang berguna untuk menilai sama ada projek itu baik untuk penyumbang baru.

**Memenuhi definisi sumber terbuka**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox1" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox1" class="overflow-hidden d-block text-normal">
  Adakah ia mempunyai lesen? Biasanya, terdapat fail bernama LICENSE di akar repositori.
  </label>
</div>

**Projek secara aktif menerima sumbangan**

Lihat aktiviti komit di cawangan induk. Di GitHub, anda dapat melihat maklumat ini di laman utama repositori.

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox2" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox2" class="overflow-hidden d-block text-normal">
  Bilakah komitmen terbaru?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox3" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox3" class="overflow-hidden d-block text-normal">
  Berapakah jumlah penyumbang projek ini?
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox4" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox4" class="overflow-hidden d-block text-normal">
  Berapa kerapkah orang melakukan? (Di GitHub, anda boleh mendapatkannya dengan mengklik "Komitmen" di bar atas.)
  </label>
</div>

Seterusnya, perhatikan masalah projek.

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox5" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox5" class="overflow-hidden d-block text-normal">
    Berapa banyak isu terbuka yang ada?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox6" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox6" class="overflow-hidden d-block text-normal">
    Adakah penyelenggara bertindak balas dengan cepat terhadap masalah ketika dibuka?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox7" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox7" class="overflow-hidden d-block text-normal">
    Adakah terdapat perbincangan aktif mengenai isu-isu tersebut?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox8" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox8" class="overflow-hidden d-block text-normal">
    Are the issues recent?
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox9" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox9" class="overflow-hidden d-block text-normal">
    Adakah masalah ditutup? (Di GitHub, klik tab "tertutup" di halaman Isu untuk melihat masalah tertutup.)
  </label>
</div>

Sekarang lakukan perkara yang sama untuk permintaan tarikan projek.

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox10" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox10" class="overflow-hidden d-block text-normal">
    Berapa banyak permintaan tarik terbuka yang ada?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox20" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox20" class="overflow-hidden d-block text-normal">
    Adakah penyelenggara bertindak balas dengan cepat untuk menarik permintaan ketika dibuka?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox11" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox11" class="overflow-hidden d-block text-normal">
    Adakah perbincangan aktif mengenai permintaan tarik?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox12" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox12" class="overflow-hidden d-block text-normal">
    Adakah permintaan tarikan baru-baru ini?
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox13" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox13" class="overflow-hidden d-block text-normal">
    Sejauh mana baru-baru ini permintaan penggabungan digabungkan? (Di GitHub, klik tab "tertutup" di halaman Tarik Permintaan untuk melihat PR tertutup.)
  </label>
</div>

**Projek dialu-alukan**

Projek yang mesra dan mesra memberi isyarat bahawa mereka akan menerima penyumbang baru.

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox14" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox14" class="overflow-hidden d-block text-normal">
    Adakah penyelenggara memberi respons yang baik terhadap soalan dalam masalah?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox15" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox15" class="overflow-hidden d-block text-normal">
    Adakah orang ramah dalam isu, forum perbincangan, dan sembang (misalnya, IRC atau Slack)?
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox16" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox16" class="overflow-hidden d-block text-normal">
    Adakah permintaan tarik disemak?
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox17" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox17" class="overflow-hidden d-block text-normal">
    Adakah penyelenggara mengucapkan terima kasih atas sumbangan mereka?
  </label>
</div>

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kfogel?s=180" class="pquote-avatar" alt="avatar">
  Bila-bila masa anda melihat urutan panjang, periksa jawapan dari pemaju teras yang datang lewat. Adakah mereka merangkum secara konstruktif, dan mengambil langkah-langkah untuk membuat keputusan dengan tetap sopan? Sekiranya anda melihat banyak peperangan api berlaku, itu sering kali menandakan bahawa tenaga akan menjadi hujah dan bukannya menjadi pembangunan.
  <p markdown="1" class="pquote-credit">
— @kfogel, [_Producing OSS_](https://producingoss.com/en/evaluating-oss-projects.html)
  </p>
</aside>

## Cara menghantar sumbangan

Anda telah menjumpai projek yang anda suka, dan anda sudah bersedia untuk memberikan sumbangan. Akhirnya! Inilah cara mendapatkan sumbangan anda dengan cara yang betul.

### Berkomunikasi dengan berkesan

Sama ada anda penyumbang sekali atau cuba menyertai komuniti, bekerja dengan orang lain adalah salah satu kemahiran terpenting yang akan anda kembangkan dalam sumber terbuka.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/shubheksha?s=180" class="pquote-avatar" alt="avatar">
  \ [Sebagai penyumbang baru, \] Saya dengan cepat menyedari bahawa saya harus mengemukakan soalan sekiranya saya mahu menutup masalah ini. Saya melayari asas kod. Setelah mengetahui apa yang sedang berlaku, saya meminta lebih banyak arah. Dan voilà! Saya dapat menyelesaikan masalah ini setelah mendapat semua butiran berkaitan yang saya perlukan.
  <p markdown="1" class="pquote-credit">
— @shubheksha, [A Beginner's Very Bumpy Journey Through The World of Open Source](https://www.freecodecamp.org/news/a-beginners-very-bumpy-journey-through-the-world-of-open-source-4d108d540b39/)
  </p>
</aside>

Sebelum anda membuka masalah atau menarik permintaan, atau mengajukan soalan dalam sembang, ingatlah perkara ini untuk membantu idea anda disampaikan dengan berkesan.

**Beri konteks.** Bantu orang lain dengan pantas. Sekiranya anda mengalami ralat, jelaskan apa yang anda cuba lakukan dan bagaimana menghasilkannya. Sekiranya anda mencadangkan idea baru, jelaskan mengapa anda berpendapat bahawa ia berguna untuk projek ini (bukan hanya untuk anda!).

> 😇 _"X tidak berlaku semasa saya melakukan Y"_
>
> 😢 _"X rosak! Sila perbaiki."_

**Lakukan kerja rumah anda terlebih dahulu.** Tidak perlu mengetahui apa-apa, tetapi tunjukkan bahawa anda telah mencuba. Sebelum meminta bantuan, pastikan untuk memeriksa README, dokumentasi, masalah (terbuka atau tertutup), senarai mel, dan cari di internet untuk mendapatkan jawapan. Orang akan menghargai apabila anda menunjukkan bahawa anda cuba belajar.

> 😇 _"Saya tidak pasti bagaimana melaksanakan X. Saya memeriksa dokumen bantuan dan tidak menemui sebutan."_
>
> 😢 _"Bagaimana saya X?"_

**Jauhkan permintaan pendek dan langsung.** Sama seperti menghantar e-mel, setiap sumbangan, tidak kira seberapa sederhana atau bermanfaat, memerlukan ulasan orang lain. Banyak projek mempunyai lebih banyak permintaan masuk daripada orang yang ada untuk membantu. Bersikap ringkas. Anda akan meningkatkan peluang seseorang dapat menolong anda.

> 😇 _"Saya ingin menulis tutorial API."_
>
> 😢 _"Saya memandu di jalan raya pada suatu hari dan berhenti untuk mencari minyak, dan kemudian saya mempunyai idea yang luar biasa ini untuk sesuatu yang seharusnya kita lakukan, tetapi sebelum saya menerangkannya, izinkan saya menunjukkan kepada anda ..."_

**Jauhkan semua komunikasi untuk umum.** Walaupun menggoda, jangan menghubungi penyelenggara secara tertutup kecuali anda perlu berkongsi maklumat sensitif (seperti masalah keselamatan atau pelanggaran tingkah laku serius). Apabila perbualan anda tetap terbuka, lebih ramai orang dapat belajar dan mendapat faedah daripada pertukaran anda. Perbincangan boleh menjadi sumbangan mereka sendiri.

> 😇 _(sebagai komen) "@ -maintainer Hai! Bagaimana kita harus meneruskan PR ini?"_
>
> 😢 _(sebagai e-mel) "Hai, maaf kerana mengganggu anda melalui e-mel, tetapi saya tertanya-tanya adakah anda berpeluang untuk mengkaji semula PR saya"_

**Tidak apa-apa untuk mengemukakan soalan (tetapi bersabarlah!).** Semua orang baru dalam projek ini pada satu ketika, dan bahkan penyumbang yang berpengalaman perlu terus maju ketika mereka melihat projek baru. Dengan cara yang sama, penyelenggara lama juga tidak selalu mengenal setiap bahagian projek. Tunjukkan kepada mereka kesabaran yang sama seperti yang anda mahukan kepada mereka.

> 😇 _"Terima kasih kerana melihat ralat ini. Saya mengikuti cadangan anda. Inilah hasilnya."_
>
> 😢 _"Mengapa anda tidak dapat menyelesaikan masalah saya? Bukankah ini projek anda?"_

**Hormati keputusan masyarakat.** Idea anda mungkin berbeza dengan keutamaan atau visi masyarakat. Mereka mungkin memberikan maklum balas atau memutuskan untuk tidak meneruskan idea anda. Walaupun anda harus berbincang dan mencari kompromi, penyelenggara harus mematuhi keputusan anda lebih lama daripada yang anda mahukan. Sekiranya anda tidak bersetuju dengan arahan mereka, anda sentiasa boleh menggunakan garpu anda sendiri atau memulakan projek anda sendiri.

> 😇 _"Saya kecewa anda tidak dapat menyokong kes penggunaan saya, tetapi seperti yang anda jelaskan, ini hanya mempengaruhi sebahagian kecil pengguna, saya faham mengapa. Terima kasih kerana mendengar."_
>
> 😢 _"Mengapa anda tidak menyokong kes penggunaan saya? Ini tidak boleh diterima!"_

**Yang terpenting, jaga agar tetap berkelas.** Sumber terbuka terdiri daripada kolaborator dari seluruh dunia. Konteks hilang di seluruh bahasa, budaya, geografi, dan zon waktu. Di samping itu, komunikasi bertulis menjadikannya lebih sukar untuk menyampaikan nada atau mood. Anggap niat baik dalam perbualan ini. Adalah baik untuk menolak idea dengan sopan, meminta lebih banyak konteks, atau memperjelas kedudukan anda. Cubalah tinggalkan internet di tempat yang lebih baik daripada ketika anda menjumpainya.

### Mengumpulkan konteks

Sebelum melakukan apa-apa, lakukan pemeriksaan cepat untuk memastikan idea anda tidak dibincangkan di tempat lain. Skim README projek, isu (terbuka dan tertutup), senarai mel, dan Stack Overflow. Anda tidak perlu menghabiskan berjam-jam untuk menyelesaikan segala-galanya, tetapi pencarian pantas untuk beberapa istilah utama sangat membantu.

Sekiranya anda tidak menemui idea anda di tempat lain, anda sudah bersedia untuk bergerak. Sekiranya projek tersebut berada di GitHub, anda mungkin akan berkomunikasi dengan membuka masalah atau menarik permintaan:

* **Masalah** seperti memulakan perbualan atau perbincangan
* **Permintaan tarik** adalah untuk memulakan kerja penyelesaian
* **Untuk komunikasi ringan,** seperti penjelasan atau pertanyaan bagaimana, cuba tanyakan pada Stack Overflow, IRC, Slack, atau saluran sembang lain, jika projek tersebut memiliki satu

Sebelum anda membuka masalah atau menarik permintaan, periksa dokumen penyumbang projek (biasanya fail yang disebut CONTRIBUTING, atau di README), untuk melihat sama ada anda perlu memasukkan sesuatu yang spesifik. Contohnya, mereka mungkin meminta anda mengikuti templat, atau menghendaki anda menggunakan ujian.

Sekiranya anda ingin memberikan sumbangan yang besar, buka isu yang perlu ditanyakan sebelum mengusahakannya. Sangat berguna untuk menonton projek sebentar (di GitHub, [you can click "Watch"](https://help.github.com/articles/watching-repositories/) untuk diberitahu tentang semua perbualan), dan berkenalan dengan anggota masyarakat, sebelum melakukan pekerjaan yang mungkin tidak diterima.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/gaearon?s=180" class="pquote-avatar" alt="avatar">
  Anda akan belajar <em> banyak </em> dari mengambil satu projek yang anda gunakan secara aktif, "menonton" di GitHub dan membaca setiap isu dan PR.
<p markdown="1" class="pquote-credit">
— @gaearon [on joining projects](https://twitter.com/dan_abramov/status/819555257055322112)
  </p>
</aside>

### Membuka masalah

Anda biasanya harus membuka masalah dalam situasi berikut:

* Laporkan kesalahan yang tidak dapat anda atasi sendiri
* Bincangkan topik atau idea peringkat tinggi (misalnya, komuniti, visi atau dasar)
* Mencadangkan ciri baru atau idea projek lain

Petua untuk berkomunikasi mengenai masalah:

* **Jika anda melihat masalah terbuka yang ingin anda atasi,** beri komen mengenai masalah ini untuk memberi tahu orang bahawa anda sedang mengatasinya. Dengan cara itu, orang kurang menggandakan karya anda.
* **Jika masalah dibuka beberapa saat yang lalu,** ada kemungkinan masalah itu ditangani di tempat lain, atau sudah diselesaikan, jadi beri komen untuk meminta pengesahan sebelum memulakan pekerjaan.
* **Sekiranya anda membuka masalah, tetapi kemudian anda akan mengetahui sendiri jawapannya,** beri komen mengenai masalah ini untuk memberi tahu orang lain, kemudian tutup masalahnya. Malah mendokumentasikan hasil itu adalah sumbangan untuk projek tersebut.

### Membuka permintaan tarik

Anda biasanya harus membuka permintaan tarik dalam situasi berikut:

* Kirimkan perbaikan sepele (contohnya, kesalahan ketik, pautan yang rosak atau ralat yang jelas)
* Mulailah mengusahakan sumbangan yang telah diminta, atau yang telah anda bincangkan, dalam suatu isu

Permintaan tarikan tidak harus mewakili kerja yang telah siap. Biasanya lebih baik membuka permintaan tarik lebih awal, sehingga orang lain dapat menonton atau memberikan maklum balas mengenai kemajuan anda. Cukup tandakan sebagai "WIP" (Work in Progress) di baris subjek. Anda boleh menambah lebih banyak komitmen kemudian.

Sekiranya projek tersebut berada di GitHub, berikut adalah cara mengemukakan permintaan tarik:

* **[Fork the repository](https://guides.github.com/activities/forking/)** dan mengklonnya secara tempatan. Sambungkan tempatan anda ke repositori "hulu" yang asal dengan menambahkannya sebagai alat kawalan jauh. Tarik perubahan dari "hulu" secara berkala sehingga Anda terus mengetahui sehingga ketika anda mengajukan permintaan penarikan, konflik penggabungan cenderung tidak terjadi.(Lihat arahan yang lebih terperinci [here](https://help.github.com/articles/syncing-a-fork/).)
* **[Create a branch](https://guides.github.com/introduction/flow/)** untuk pengeditan anda.
* **Rujuk masalah yang berkaitan** atau dokumentasi sokongan dalam PR anda (misalnya, "Tutup # 37.")
* **Sertakan tangkapan skrin sebelum dan sesudah** jika perubahan anda merangkumi perbezaan dalam HTML / CSS. Seret dan lepaskan gambar ke badan permintaan tarikan anda.
* **Uji perubahan anda!** Jalankan perubahan anda terhadap ujian yang ada jika ada dan buat yang baru bila diperlukan. Sama ada ujian ada atau tidak, pastikan perubahan anda tidak mematahkan projek yang ada.
* **Sumbang dalam gaya projek** dengan sebaik mungkin. Ini mungkin bermaksud menggunakan inden, titik koma atau komen yang berbeza daripada yang anda lakukan di repositori anda sendiri, tetapi memudahkan penyelenggara bergabung, yang lain memahami dan mengekalkannya di masa depan.

Permintaan adalah permintaan pertama anda, periksa [Make a Pull Request](http://makeapullrequest.com/), yang @kentcdodds buat sebagai tutorial video panduan. Anda juga boleh berlatih membuat permintaan tarik di[First Contributions](https://github.com/Roshanjossey/first-contributions) repositori, dibuat oleh @Roshanjossey.

## Apa yang berlaku selepas anda menghantar sumbangan

Kamu lakukan! Selamat menjadi penyumbang sumber terbuka. Kami harap ini adalah yang pertama daripada banyak.

Selepas anda menghantar sumbangan, salah satu perkara berikut akan berlaku:

### 😭 Anda tidak mendapat sambutan.

Semoga anda[memeriksa projek untuk tanda-tanda aktiviti](#senarai-semak-sebelum-anda-menyumbang)sebelum memberi sumbangan. Walaupun pada projek yang aktif, kemungkinan sumbangan anda tidak mendapat sambutan.

Sekiranya anda tidak mendapat sambutan selama lebih dari seminggu, adalah wajar untuk memberi respons dengan sopan dalam utas yang sama, meminta ulasan seseorang. Sekiranya anda mengetahui nama orang yang tepat untuk mengulas sumbangan anda, anda boleh @ -menyebutkannya dalam utas itu.

**Jangan** hubungi orang itu secara peribadi; ingat bahawa komunikasi awam sangat penting untuk projek sumber terbuka.

Sekiranya anda membuat bongkahan yang sopan dan masih tidak ada yang bertindak balas, kemungkinan tidak ada yang akan bertindak balas. Ini bukan perasaan yang hebat, tetapi jangan biarkan itu mengecewakan anda. Ia berlaku kepada semua orang! Terdapat banyak kemungkinan sebab mengapa anda tidak mendapat sambutan, termasuk keadaan peribadi yang mungkin di luar kawalan anda. Cuba cari projek atau cara lain untuk menyumbang. Sekiranya ada, ini adalah alasan yang baik untuk tidak meluangkan terlalu banyak masa untuk membuat sumbangan sebelum anggota masyarakat lain terlibat dan responsif.

### 🚧 Seseorang meminta perubahan pada sumbangan anda.

Sudah biasa anda diminta membuat perubahan pada sumbangan anda, sama ada maklum balas mengenai skop idea anda, atau perubahan pada kod anda.

Apabila seseorang meminta perubahan, bersikap responsif. Mereka telah meluangkan masa untuk menyemak sumbangan anda. Membuka PR dan berjalan jauh adalah bentuk yang buruk. Sekiranya anda tidak tahu bagaimana membuat perubahan, teliti masalahnya, kemudian minta bantuan jika anda memerlukannya.

Sekiranya anda tidak mempunyai masa untuk menyelesaikan masalah ini lagi (contohnya, jika perbualan telah berlangsung selama berbulan-bulan, dan keadaan anda telah berubah), beritahu penyelenggara itu sehingga mereka tidak mengharapkan respons. Orang lain mungkin senang mengambil alih.

### 👎 Sumbangan anda tidak diterima.

Sumbangan anda mungkin atau tidak akan diterima pada akhirnya. Mudah-mudahan anda tidak terlalu banyak mengerjakannya. Sekiranya anda tidak pasti mengapa ia tidak diterima, adalah wajar untuk meminta maklum balas dan penjelasan penyelenggara. Namun, pada akhirnya, anda harus menghormati bahawa ini adalah keputusan mereka. Jangan membantah atau bermusuhan. Anda sentiasa dialu-alukan untuk menggunakan versi anda sendiri sekiranya anda tidak bersetuju!

### contribution Sumbangan anda diterima.

Hore! Anda berjaya memberikan sumbangan sumber terbuka!

## Kamu lakukan!

Sama ada anda baru sahaja memberikan sumbangan sumber terbuka anda, atau anda mencari cara baru untuk menyumbang, kami harap anda terinspirasi untuk mengambil tindakan. Walaupun sumbangan anda tidak diterima, jangan lupa mengucapkan terima kasih ketika penjaga menjaga usaha anda. Sumber terbuka dibuat oleh orang seperti anda: satu isu, permintaan tarik, komen, atau lima tinggi dalam satu masa.
