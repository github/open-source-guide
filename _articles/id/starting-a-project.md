---
lang: id
title: Memulai Proyek Open Source
description: Pelajari lebih lanjut tentang dunia open source dan bersiap-siap untuk merilis proyek Anda sendiri.
class: beginners
order: 2
image: /assets/images/cards/beginner.png
related:
  - finding
  - building
---

## "Apa" dan "kenapa" open source

Anda berpikir untuk memulai pada open source? Selamat! Dunia ini menghargai kontribusi Anda. Mari kita bicarakan tentang apa itu open source dan kenapa orang-orang melakukannya.

### Apa arti "open source"?

Ketika sebuah proyek bersifat open source, hal itu berarti **setiap orang bisa melihat, menggunakan, memodifikasi, dan mendistribusikan proyek Anda untuk segala tujuan.** Hak akses ini diakui melalui [lisensi open source](https://opensource.org/licenses).

Open source sangatlah berkuasa karena mengurangi hambatan untuk adopsi, memungkinkan ide untuk berkembang dengan pesat.

Untuk memahami bagaimana proses ini bekerja, bayangkan teman Anda sedang makan, dan Anda membawa sebuah pai berisi buah ceri.

* Semua orang mencoba pai (_menggunakan_)
* Pai menjadi viral! Orang menanyakan resepnya kepada Anda, dan Anda berikan (_lihat_)
* Salah seorang teman, Alex, seorang chef pastry, menyarankan untuk mengurangi gula (_modifikasi_)
* Teman lain, Lisa, ingin menggunakannya untuk makan malam minggu depan (_distribusi_)

Sebagai perbandingan, sebuah proses yang tertutup akan seperti dimana Anda pergi ke sebuah rumah makan dan memesan sepotong pai buah ceri. Anda harus membayar untuk memakan potongan tersebut, dan rumah makan tersebut tidak akan memberikan resepnya kepada Anda. Jika Anda membuat salinan utuh pai mereka dan menjualnya dengan nama Anda, rumah makan bisa mengambil sebuah tindakan terhadap Anda.

### Kenapa orang-orang membuka hasil karya mereka?

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kentcdodds?s=180" class="pquote-avatar" alt="avatar">
  Salah satu pengalaman yang paling berharga dengan menggunakan dan berkolaborasi pada open source datang dari relasi yang saya bangun dengan pengembang yang lain ketika menghadapi masalah yang sama seperti yang saya alami.
  <p markdown="1" class="pquote-credit">
— @kentcdodds, ["How getting into Open Source has been awesome for me"](https://kentcdodds.com/blog/how-getting-into-open-source-has-been-awesome-for-me)
  </p>
</aside>

[Terdapat banyak alasan](https://ben.balter.com/2015/11/23/why-open-source/) kenapa seseorang atau sebuah organisasi ingin membuka proyek open source. Beberapa diantaranya meliputi:

* **Kolaborasi:** Proyek open source bisa menerima perubahan dari siapapun juga di seluruh dunia. [Exercism](https://github.com/exercism/), sebagai contoh, adalah kerangka latihan pemrograman dengan lebih dari 350 kontributor.

* **Adopsi dan menggabungkan:** Proyek open source bisa digunakan oleh siapapun untuk hampir semua tujuan. Bahkan bisa digunakan untuk membangun proyek lain. [WordPress](https://github.com/WordPress), sebagai contoh, dimulai dari hasil _fork_ dari proyek yang sudah ada bernama [b2](https://github.com/WordPress/book/blob/HEAD/Content/Part%201/2-b2-cafelog.md).

* **Transparansi:** Setiap orang dapat melihat kesalahan atau inkonsistensi pada proyek open source. Transparansi sangat penting bagi pemerintah seperti [Bulgaria](https://medium.com/@bozhobg/bulgaria-got-a-law-requiring-open-source-98bf626cf70a) atau  [Amerika Serikat](https://sourcecode.cio.gov/), industri yang memiliki regulasi seperti perbankan atau kesehatan, dan perangkat lunak keamanan seperti [Let's Encrypt](https://github.com/letsencrypt).

Open source bukan hanya untuk perangkat lunak saja. Anda bisa membuka tentang apa saja mulai dari kumpulan data hingga buku. Silahkan lihat [GitHub Explore](https://github.com/explore) untuk ide yang dapat Anda buka sebagai open source.

### Apakah open source berarti "bebas biaya"?

Salah satu hal yang menarik dari open source adalah tidak memerlukan biaya. "Bebas biaya", adalah hasil sampingan dari keseluruhan nilai open source.

Karena [lisensi open source mewajibkan](https://opensource.org/osd-annotated) bahwa setiap orang boleh menggunakan, memodifikasi, dan menyebarkan proyek Anda untuk segala tujuan, pada umumnya proyek tersebut bersifat bebas biaya. Jika proyek memerlukan uang untuk bisa menggunakannya, setiap orang boleh membuat salinannya secara legal dan menggunakan versi gratisnya.

Sebagai hasilnya, sebagian besar proyek open source bersifat gratis, tetapi "bebas biaya" bukan bagian dari definisi open source. Terdapat banyak cara untuk menarik dana bagi proyek open source secara tidak langsung  melalui lisensi ganda atau fitur yang terbatas, dan masih tetap sesuai dengan definisi resmi dari open source.

## Perlukah saya merilis proyek open source saya sendiri?

Jawaban singkatnya adalah ya, karena apapun hasilnya, merilis proyek Anda sendiri adalah cara baik untuk belajar bagaimana open source bekerja.

Jika Anda belum pernah membuka proyek Anda sebelumnya, Anda mungkin akan khawatir tentang apa yang akan dikatakan oleh orang lain, atau apakah orang lain akan melihat proyek Anda atau tidak. Jika hal ini sama seperti yang Anda rasakan, Anda tidak sendirian.!

Pekerjaan open source sama seperti aktivitas kreatif lainnya, baik itu menulis maupun melukis. Terkadang bisa menakutkan untuk mempublikasikan hasil pekerjaan Anda kepada dunia, tetapi satu-satunya cara agar lebih baik adalah dengan berlatih - meskipun Anda tidak punya pengguna.

Jika Anda belum yakin, berikan waktu sejenak untuk memikirkan tujuan akhir Anda.

### Menentukan tujuan akhir Anda

Tujuan akhir bisa membantu Anda menentukan apa yang akan dikerjakan, apa yang harus ditolak, dan dimana Anda akan membutuhkan bantuan dari orang lain. Mulailah dengan menanyakan kepada dirinya Anda sendiri,  _kenapa saya membuat proyek saya menjadi open source?_

Tidak ada jawaban benar tunggal pada pertanyaan ini. Anda boleh memiliki banyak tujuan akhir untuk satu proyek tunggal, atau beberapa proyek dengan beberapa tujuan akhir.

Jika tujuan akhir Anda adalah untuk menunjukkan hasil pekerjaan Anda, Anda mungkin tidak perlu adanya kontribusi, dan mungkin bisa saja dituliskan pada dokumen README Anda. Di satu sisi, jika Anda ingin adanya kontributor, Anda harus menginvestasikan waktu untuk dokumentasi yang jelas dan membuat pendatang baru merasa disambut.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mavris?s=180" class="pquote-avatar" alt="avatar">
  Pada suatu titik saya menciptakan UIAlertView hasil modifikasi yang saya gunakan...dan saya memutuskan untuk membuatnya menjadi open source. Lalu saya memodifikasinya menjadi lebih dinamis dan menyimpannya di GitHub. Saya menulis dokumentasi pertama saya dengan menjelaskan kepada pengembang lain bagaimana untuk menggunakannya pada proyek mereka. Mungkin saja tidak ada orang lain yang akan menggunakannya karena merupakan proyek sederhana, tetapi saya memiliki perasaan yang baik tentang kontribusi yang saya lakukan.
  <p markdown="1" class="pquote-credit">
— @mavris, ["Self-taught Software Developers: Why Open Source is important to us"](https://medium.com/rocknnull/self-taught-software-engineers-why-open-source-is-important-to-us-fe2a3473a576)
  </p>
</aside>

Ketika proyek Anda berkembang, komunitas Anda mungkin membutuhkan lebih dari sekedar kode dari Anda. Merespon terhadap laporan masalah, melakukan review terhadap kode, dan mempopulerkan proyek Anda menjadi kegiatan penting dalam proyek open source.

Meskipun jumlah waktu yang Anda habiskan untuk kegiatan yang tidak berhubungan dengan pengembangan akan sangat bergantung dari ukuran dan batasan proyek Anda, Anda harus siap sebagai pengelola untuk menjalaninya atau cari seseorang untuk membantu Anda.

**Jika Anda bagian dari sebuah perusahaan yang membuka proyeknya pada open source,** pastikan proyek Anda memiliki sumber daya internal yang dibutuhkan untuk berkembang. Anda perlu mengindetifikasi siapa yang bertanggung jawab untuk mengelola proyek setelah diluncurkan, dan bagaimana Anda akan mendistribusikan tugas tersebut dengan komunitas.

Jika Anda membutuhkan pendanaan yang permanen atau alokasi staf untuk promosi, operasi, dan pengelolaan proyek, lakukan diskusi di awal.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/captainsafia?s=180" class="pquote-avatar" alt="avatar">
  Ketika Anda mulai untuk membuka proyek Anda pada open source, sangatlah penting untuk memastikan bahwa proses manajemen Anda memperhatikan kontribusi dan kemampuan dari komunitas disekeliling proyek Anda. Jangan takut untuk melibatkan kontributor yang bukan merupakan karyawan sebagai aspek kunci dalam proyek - terutama jika mereka adalah kontributor yang aktif.
  <p markdown="1" class="pquote-credit">
— @captainsafia, ["So you wanna open source a project, eh?"](https://dev.to/captainsafia/so-you-wanna-open-source-a-project-eh-5779)
  </p>
</aside>

### Kontribusi ke proyek lain

Jika tujuan akhir Anda adalah belajar bagaimana berkolaborasi dengan orang lain atau memahami bagaimana open source bekerja, pertimbangkan untuk berkontribusi pada proyek yang sudah ada. Mulailah dengan proyek yang sudah Anda gunakan dan Anda suka. Berkontribusi pada sebuah proyek bisa semudah memperbaiki kesalahan penulisan atau memperbarui dokumentasi.

Jika Anda tidak yakin bagaimana memulai sebagai kontributor, silahkan lihat [Panduan Bagaimana Berkontribusi pada Open Source](../how-to-contribute/).

## Merilis proyek open source Anda

Tidak ada waktu yang sempurna untuk membuka proyek Anda kepada open source. Anda bisa membuat ide Anda, pekerjaan yang sedang dalam pengembangan, atau setelah sekian lama berada dalam lingkungan yang tertutup (_closed source_) menjadi open source.

Secara umum, Anda harus membuka proyek Anda menjadi ketika Anda merasa nyaman ketika orang lain melihat dan memberikan masukan pada pekerjaan Anda.

Tidak perduli pada tahap mana Anda memutuskan untuk membuka proyek Anda, setiap proyek sebaiknya menyediakan dokumentasi berikut:

* [Lisensi open source](https://help.github.com/articles/open-source-licensing/#where-does-the-license-live-on-my-repository)
* [README](https://help.github.com/articles/create-a-repo/#commit-your-first-change)
* [Panduan berkontribusi](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)
* [Kode etik](../code-of-conduct/)

Sebagai pengelola, komponen-komponen tersebut akan membantu Anda mengkomunikasikan ekspektasi, mengelola kontribusi, dan menjaga hak legal dari setiap orang (termasuk Anda sendiri). Dokumen-dokumen tersebut akan meningkatkan peluang Anda secara signifikan untuk mendapatkan pengalaman yang positif.

Jika proyek Anda berada pada GitHub, meletakkan dokumen-dokumen diatas pada direktori induk dengan nama dokumen yang direkomendasikan akan membantu GitHub mengenalinya secara otomatis dan menampilkannya pada pengunjung.

### Memilih sebuah lisensi

Sebuah lisensi open source menjamin bahwa orang lain mampu menggunakan, menyalin, memodifikasi, dan berkontribusi kembali pada proyek Anda tanpa adanya masalah. Lisensi juga menjaga dari masalah legalitas. **Anda harus menyertakan sebuah lisensi ketika Anda merilis sebuah proyek open source.**

Pekerjaan hukum bukan sesuatu yang menyenangkan. Berita baiknya adalah Anda bisa menyalin dan menggunakan lisensi yang sudah ada pada repositori Anda. Proses ini hanya membutuhkan waktu satu menit untuk menjaga hasil kerja keras Anda.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), dan [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) adalah lisensi open source yang paling populer, tetapi [terdapat opsi lain](https://choosealicense.com) yang bisa Anda pilih.

Ketika Anda membuat proyek baru pada GitHub, Anda diberikan pilihan untuk memilih sebuah lisensi. Menyertakan sebuah lisensi open source akan membuat proyek GitHub Anda sebagai open source.

![memilih sebuah lisensi](/assets/images/starting-a-project/repository-license-picker.png)

Jika Anda memiliki pertanyaan lain atau khawatir tentang aspek legalitas tentang mengelola proyek open source, [kami punya solusinya](../legal/).

### Menulis dokumen README

README berisi lebih dari sekedar penjelasan bagaimana menggunakan proyek Anda. Dokumen ini juga menjelaskan kenapa proyek Anda penting, dan apa yang bisa dilakukan oleh pengguna Anda dengan proyek tersebut.

Pada dokumen README, cobalah untuk menjawab pertanyaan berikut:

* Apa yang dilakukan proyek ini?
* Kenapa proyek ini berguna?
* Bagaimana saya memulainya?
* Jika saya membutuhkan bantuan, dimana saya bisa mendapatkannya?

Anda bisa menggunakan README untuk menjawab pertanyaan lainnya, seperti bagaiman Anda akan menangani kontribusi, apa tujuan akhir dari proyek, dan informasi tentang lisensi. Jika Anda tidak ingin menerima kontribusi, atau proyek Anda belum siap untuk produksi, tuliskan informasi ini.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/tracymakes?s=180" class="pquote-avatar" alt="avatar">
  Dokumentasi yang lebih baik berarti lebih banyak pengguna, lebih sedikit bantuan untuk dukungan ke pengguna, dan lebih banyak kontributor. (...) Ingatlah bahwa pembaca bukanlah Anda. Terdapat orang-orang yang datang pada sebuah proyek yang memiliki pengalaman yang sama sekali berbeda.
  <p markdown="1" class="pquote-credit">
— @tracymakes, ["Writing So Your Words Are Read (video)"](https://www.youtube.com/watch?v=8LiV759Bje0&list=PLmV2D6sIiX3U03qc-FPXgLFGFkccCEtfv&index=10)
  </p>
</aside>

Seringkali, banyak orang menghindari untuk menulis README karena mereka merasa bahwa proyek belum selesai, atau mereka tidak menginginkan adanya kontribusi. Berikut ini adalah berbagai alasan bagus bagi Anda untuk menulis dokumen README.

Untuk insipirasi lainnya, Silahkan coba ["Membuat README lebih Terbaca"](https://pages.18f.gov/open-source-guide/making-readmes-readable/) milik @18F atau [Template README](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) milik @PurpleBooth untuk menulis README yang lengkap.

Ketika Anda menyertakan dokumen README pada direktori induk, GitHub akan secara otomatis menampilkannya pada homepage repositori.

### Menulis panduan kontribusi Anda

Sebuah dokumen CONTRIBUTING menjelaskan kepada pengguna tentang bagaimana berpartisipasi pada proyek Anda. Sebagai contoh, Anda mungkin menyertakan informasi tentang:

* Bagaimana membuat laporan kesalahan (cobalah menggunakan [template laporan masalah dan pull request](https://github.com/blog/2111-issue-and-pull-request-templates))
* Bagaimana menyarankan sebuah fitur baru
* Bagaimana melakukan persiapan lingkungan pengembangan dan melakukan pengujian

Selain aspek teknis, dokumen CONTRIBUTING juga merupakan kesempatan untuk mengkomunikasikan harapan Anda untuk kontribusi, misalnya

* Jenis kontribusi yang Anda harapkan
* Rencana jangka panjang atau visi proyek Anda
* Bagaimana kontribusi bisa menghubungi Anda

Menggunakan nada yang bersahabat dan menawarkan tawaran yang spesifik untuk kontribusi (misalnya menuliskan dokumentasi, atau membuat halaman web) bisa membuat pendatang merasa nyaman dan diterima serta tertarik untuk berpartisipasi.

Sebagai contoh, [Active Admin](https://github.com/activeadmin/activeadmin/) memulai [panduan kontribusinya](https://github.com/activeadmin/activeadmin/blob/HEAD/CONTRIBUTING.md) dengan:

> Pertama-tama, terima kasih karena Anda mempertimbangkan untuk berpartisipasi pada Active Admin. Orang-orang seperti Anda yang membuat Active Admin menjadi sebuah perangkat yang hebat.

Pada fase awal dari proyek Anda, dokumen CONTRIBUTING bisa sangat sederhana. Anda perlu menjelaskan bagaimana melaporkan kesalahan dan kebutuhan teknis (seperti pengujian), atau bagaimana cara berkontribusi.

Seiring dengan berjalannya waktu, Anda bisa menambahkan pertanyaan yang paling sering ditanyakan pada dokumen CONTRIBUTING. Menuliskan informasi ini berarti lebih sedikit orang yang akan bertanya pertanyaan yang sama kepada Anda berulang kali.

Untuk bantuan tentang penulisan dokumen CONTRIBUTING, silahkan lihat  [template panduan berkontribusi](https://github.com/nayafia/contributing-template/blob/HEAD/CONTRIBUTING-template.md) milik @nayafia atau ["Bagaimana Membangun Dokumen CONTRIBUTING.md"](https://mozillascience.github.io/working-open-workshop/contributing/) milik @mozilla.

Hubungkan dokumen CONTRIBUTING dari README, sehingga lebih banyak orang yang melihatnya. Jika Anda [meletakkan dokumen CONTRIBUTING pada repositori proyek](https://help.github.com/articles/setting-guidelines-for-repository-contributors/), GitHub akan secara otomatis menghubungkan ke dokumen Anda ketika seorang kontributor membuat sebuah laporan masalah atau membuat pull request.

![panduan kontribusi](/assets/images/starting-a-project/Contributing-guidelines.jpg)

### Membangun kode etik

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mlynch?s=180" class="pquote-avatar" alt="avatar">
  Kita semua pernah memiliki pengalaman dimana kita dihadapkan dengan penyalahgunaan, baik sebagai pengelola yang menjelaskan kenapa sesuatu harus dilakukan dengan cara tertentu, atau sebagai pengguna...bertanya sebuah pertanyaan sederhana. (...) Kode etik merupakan dokumen yang mudah untuk dijadikan referensi yang mengindikasikan bahwa tim Anda sangat memperhatikan wacana yang bersifat membangun.
  <p markdown="1" class="pquote-credit">
— @mlynch, ["Making Open Source a Happier Place"](https://medium.com/ionic-and-the-mobile-web/making-open-source-a-happier-place-3b90d254f5f)
  </p>
</aside>

Akhirnya, sebuah kode etik membantu menentukan aturan perilaku dasar bagi partisipan proyek Anda. Hal ini akan sangat berguna apabila Anda merilis proyek open source untuk sebuah komunitas atau perusahaan. Kode etik memampukan Anda untuk memfasilitasi perilaku yang sehat dan konstruktif, sehingga mengurangi kadar stress Anda sebagai pengelola.

Untuk informasi lebih lanjut, silahkan lihat [Panduan Kode Etik](/code-of-conduct/).

Selain untuk mengkomunikasikan _bagaimana_ Anda mengharapkan partisipan Anda untuk berperilaku, kode etik juga pada umumnya menjelaskan kepada siapa ekspektasi ini berlaku, dan ketika hal itu berlaku, apa yang harus dilakukan apabila terjadi pelanggaran.

Seperti halnya lisensi open source, terdapat banyak standar untuk kode etik, sehingga Anda tidak perlu menuliskannya sendiri. [Contributor Covenant](https://www.contributor-covenant.org/) adalah kode etik siap pakai yang digunakan oleh [lebih dari 40.000 proyek open source](https://www.contributor-covenant.org/adopters), termasuk Kubernetes, Rails, dan Swift. Tanpa memperhatikan teks yang Anda gunakan, Anda harus selalu siap untuk menjalankan kode etik apabila diperlukan.

Salin teks langsung pada dokumen CODE_OF_CONDUCT pada repositori Anda. Letakkan pada direktori induk pada repositori sehingga mudah ditemukan dan hubungkan dari dokumen README.

## Penamaan dan pencitraan proyek Anda

Pencitraan lebih dari sekedar logo yang mengkilap atau nama proyek yang mudah menarik. Pencitraan lebih tentang bagaimana Anda membicarakan proyek Anda dan siapa saja yang menjadi target pesan Anda.

### Memilih nama yang tepat

Pilihlah sebuah nama yang mudah diingat dan memberikan gambaran tentang apa yang dilakukan oleh proyek. Misalnya:

* [Sentry](https://github.com/getsentry/sentry) aplikasi monitoring untuk pelaporan kerusakan sistem
* [Thin](https://github.com/macournoyer/thin) adalah server web Ruby yang cepat dan sederhana

Jika Anda membangun berdasarkan proyek yang sudah ada, menggunakan nama proyek terdahulu sebagai awalan bisa membantu memperjelas apa yang dilakukan proyek Anda (misalnya. [node-fetch](https://github.com/bitinn/node-fetch) menghadirkan `window.fetch` pada Node.js).

Perhatikan masalah kejelasan. Bercanda merupakan sesuatu yang menyenangkan, tetapi perlu diingat bahwa beberapa hal mungkin tidak dapat tersampaikan dengan baik pada budaya yang lain atau orang-orang dengan pengalaman yang berbeda dengan Anda. Sebagian dari calon pengguna Anda mungkin merupakan pegawai kantor: jangan sampai Anda membuat mereka tidak nyaman ketika mereka harus menjelaskan proyek Anda pada ruang lingkup pekerjaan mereka!

### Hindari konflik nama

Cari proyek open source dengan nama yang mirip, terutama jika Anda menggunakan bahasa atau ekosistem yang sama. Jika nama Anda memiliki kesamaan dengan proyek lain yang populer, Anda bisa membuat bingung pengguna Anda.

Jika Anda menginginkan sebuah website, akun Twitter, atau hal lain yang merepresentasikan proyek Anda, pastikan Anda bisa mendapatkan nama yang Anda inginkan. Idealnya, [klaim nama-nama tersebut sekarang](https://instantdomainsearch.com/) agar Anda lega, meskipun Anda belum akan menggunakannya sekarang.

Pastikan nama proyek Anda tidak melanggar merek dagang. Sebuah perusahaan mungkin meminta Anda untuk menghapus proyek Anda dikemudian hari, atau bahkan mengambil jalur hukum terhadap Anda. Resikonya sangatlah tidak sepadan.

Anda bisa melihat [Basis data Merek Global WIPO](http://www.wipo.int/branddb/en/) untuk konflik merek dagang. Jika Anda berada pada sebuah perusahaan, ini adalah satu hal dimana [tim kuasa hukum Anda bisa membantu](../legal/).

Akhirnya, lakukan pencarian di Google untuk nama proyek Anda. Apakah orang bisa menemukan proyek Anda dengan mudah? Apakah nama lain muncul pada hasil pencarian yang tidak Anda inginkan?

### Bagaimana Anda menulis (dan membuat kode) bisa mempengaruhi citra Anda juga!

Pada siklus hidup proyek Anda, Anda akan banyak menulis:  README, tutorial, dokumen komunitas, merespon terhadap laporan masalah, atau bahkan newsletter dan mailing list.

Baik dokumentasi resmi atau email sehari-hari, gaya penulisan Anda merupakan bagian dari citra proyek Anda. Perhatikan bagaimana Anda bisa hadir pada pengguna Anda dan apakah hal itu merupakan pesan yang ingin Anda sampaikan?

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/janl?s=180" class="pquote-avatar" alt="avatar">
  Saya berusaha untuk ikut terlibat pada setiap diskusi pada mailing list, dan memberikan contoh panutan, bertindak baik kepada orang-orang, menganggap masalah mereka sebagai sesuatu yang serius, dan berusaha untuk membantu. Setelah beberapa waktu, orang-orang tidak hanya berhenti karena ada masalah, namun juga ikut membantu, dan mereka mengikuti gaya saya.
  <p markdown="1" class="pquote-credit">
— @janl on [CouchDB](https://github.com/apache/couchdb), ["Sustainable Open Source"](https://web.archive.org/web/20200723213552/https://writing.jan.io/2015/11/20/sustainable-open-source.html)
  </p>
</aside>

Menggunakan bahasa yang hangat, inklusif (seperti "mereka", meskipun mengacu pada satu orang) bisa membuat proyek Anda lebih nyaman bagi kontributor baru. Gunakan bahasa sederhana, karena bisa jadi banyak pengguna Anda bukan merupakan pengguna yang menggunakan bahasa Inggris sehari-harinya.

Selain bagaimana Anda menuliskan kata-kata, gaya pemrograman Anda juga bisa menjadi bagian dari citra proyek Anda. [Angular](https://github.com/johnpapa/angular-styleguide) dan [jQuery](https://contribute.jquery.org/style-guide/js/) adalah dua contoh proyek dengan gaya pemrograman dan panduan yang lengkap.

Tidaklah penting untuk menuliskan gaya penulisan untuk proyek Anda ketika Anda baru memulainya dan Anda mungkin senang untuk mencoba beberapa gaya pemrograman pada proyek Anda. Tetapi Anda perlu mengantisipasi bagaimana penulisan dan pemrograman Anda bisa memikat orang atau malah membuat orang untuk menghindari proyek Anda. Tahap awal dari proyek Anda adalah kesempatan untuk menentukan arah yang Anda tuju.

## Daftar checklist pra-rilis

Sudah siap untuk membuat proyek Anda open source ? Berikut daftar checklist untuk membantu. Anda sudah menyelesaikan semua kotak? Anda sudah siap! [Klik"publish"](https://help.github.com/articles/making-a-private-repository-public/) dan tepuklah diri Anda sendiri.

**Dokumentasi**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox1" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox1" class="overflow-hidden d-block text-normal">
    Project memiliki dokumen LICENSE dengan lisensi open source
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox2" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox2" class="overflow-hidden d-block text-normal">
    Project memiliki dokumentasi dasar (README, CONTRIBUTING, CODE_OF_CONDUCT)
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox3" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox3" class="overflow-hidden d-block text-normal">
    Nama proyek mudah diingat, memberikan ide tentang proyek, dan tidak konflik dengan proyek yang sudah ada atau melanggar merek dagang
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox4" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox4" class="overflow-hidden d-block text-normal">
    Daftar masalah senantiasa baru, dengan masalah terorganisasi dengan baik dan dilabeli
  </label>
</div>

**Kode**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox5" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox5" class="overflow-hidden d-block text-normal">
    Project menggunakan konvensi kode yang konsisten dan nama fungsi/metode/variabel yang jelas
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox6" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox6" class="overflow-hidden d-block text-normal">
    Kode memiliki komentar yang lengkap, mendokumentasikan harapan dan kasus khusus
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox7" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox7" class="overflow-hidden d-block text-normal">
    Tidak ada informasi sensitif pada sejarah revisi, laporan masalah, atau pull requests (misalnya kata sandi atau informasi pribadi lainnya)
  </label>
</div>

**Orang**

Jika Anda perseorangan:

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox8" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox8" class="overflow-hidden d-block text-normal">
  Anda telah mengunjungi kantor hukum dan/atau memahami hak cipta dan kebijakan open source pada perusahaan Anda (jika Anda merupakan karyawan pada sebuah perusahaan)
  </label>
</div>

Jika Anda merupakan perusahaan atau organisasi:

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox9" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox9" class="overflow-hidden d-block text-normal">
    Anda telah berbicara dengan divisi hukum Anda
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox10" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox10" class="overflow-hidden d-block text-normal">
    Anda memiliki perencanaan pemasaran untuk mengumumkan dan mempromosikan proyek
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox11" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox11" class="overflow-hidden d-block text-normal">
    Seseorang memiliki minat untuk mengelola interaksi komunitas (merespon terhadap laporan masalah, melakukan review, dan menggabungkan pull request)
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox12" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox12" class="overflow-hidden d-block text-normal">
    Minimal terdapat dua orang yang memiliki akses administratif pada proyek
  </label>
</div>

## Anda melakukannya!

Selamat atas keberhasilan Anda membuka proyek open source pertama Anda. Tanpa melihat hasil akhirnya, bekerja pada lingkungan publik merupakan anugrah bagi komunitas. Dengan setiap commit, komentar, dan pull request, Anda telah menciptakan peluang bagi Anda sendiri dan orang lain untuk belajar dan berkembang.
