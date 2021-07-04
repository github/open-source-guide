---
lang: id
title: Kiat Baik untuk Pengelola
description: Mempermudah hidup Anda sebagai pengelola open source, mulai dari mendokumentasikan proses hingga memberdayakan komunitas Anda.
class: best-practices
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## Apa artinya menjadi pengelola?

Jika Anda mengelola proyek open source yang banyak digunakan oleh orang, Anda mungkin menyadari bahwa Anda semakin sedikit melakukan pemrograman dan lebih banyak menyelesaikan permasalahan.

Pada fase awal proyek, Anda melakukan percobaan dengan ide-ide baru dan membuat keputusan berdasarkan apa yang Anda inginkan. Seiring dengan perkembangan popularitas proyek Anda, Anda akan lebih banyak bekerja dengan pengguna dan kontributor Anda.

Mengelola sebuah proyek membutuhkan lebih dari sekedar membuat kode. Pekerjaan ini seringkali tidak terduga, namun mereka juga sama pentingnya untuk proyek yang terus berkembang. Kami telah mengmpulkan beberapa cara untuk mempermudah hidup Anda, mulai dari mendokumentasikan proses hingga memberdayakan komunitas Anda.

## Mendokumentasikan proses Anda

Menuliskan segala sesuatunya adalah salah satu pekerjaan penting yang bisa Anda lakukan sebagai seorang pengelola.

Dokumentasi tidak hanya mengklarifikasikan pemikiran Anda, namun juga membantu orang lain memahami apa yang Anda perlukan atau harapkan, sebelum mereka mulai bertanya.

Menuliskan dalam bentuk dokumentasi akan mempermudah Anda untuk mengatakan tidak apabila ada yang tidak sesuai dengan ruang lingkup yang sudah ditentukan. Dokumentasi juga mempermudah orang lain untuk bergabung dan mulai membantu. Anda tidak akan pernah tahu siapa saja yang mungkin akan membaca atau menggunakan proyek Anda.

Anda tidak perlu menuliskan dalam bentuk paragraf penuh, bahkan dengan poin-poin saja sudah jauh lebih baik daripada tidak sama sekali.

### Write down your project's vision

### menuliskan visi proyek Anda

Mulailah dengan menuliskan tujuan akhir dari proyek Anda. Tambahkan kedalam dokumen README, atau pisahkan kedalam dokumen VISION. Jika terdapat dokumen lain yang bisa membantu seperti peta perjalanan proyek, maka pastikan dokumen tersebut bersifat publik.

Memiliki visi yang jelas dan terdokumentasi membantu Anda untuk tetap fokus dan juga menghindari perluasan ruang lingkup dari kontribusi orang lain.

Sebagai contoh, @lord menemukan bahwa memiliki visi proyek telah membantu dia dalam menentukan permintaan mana yang perlu ditanggapi. Sebagai seorang pengelola baru, dia menyesal karena tidak bertahan dengan ruang lingkup proyeknya ketika dia menerima feature request pertama untuk [Slate](https://github.com/lord/slate).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  Saya hanya meraba.Saya tidak meluangkan cukup waktu untuk menghadirkan sebuah solusi lengkap. Saya berharap saya pernah menuliskan "Saya tidak punya waktu untuk ini saat ini, tetapi saya akan menambahkannya pada daftar jangka panjang."
  <p markdown="1" class="pquote-credit">
— @lord, ["Tips for new open source maintainers"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Komunikasikan ekspektasi Anda

Aturan bisa menggelisahkan untuk dituliskan. Seringkali Anda merasa mengatur perilaku orang lain atau merusak kesenangan orang lain.

Aturan yang baik, tertulis, dan diterapkan dengan adil akan sangat membantu pengelola. Aturan ini akan menghindarkan Anda dari melakukan sesuatu yangg tidak ingin Anda kerjakan.

Sebagian besar orang yang hadir pada proyek Anda tidak tahu tentang Anda atau situasi Anda. Mereka bisa jadi mengasumsikan bahwa Anda dibayar untuk mengerjakan proyek tersebut, terutama jika mereka menggunakan dan sangat bergantung pada proyek Anda. Mungkin pada suatu masa Anda banyak menghabiskan waktu Anda pada proyek Anda, namun saat ini Anda sibuk dengan pekerjaan baru atau anggota keluarga yang baru.

Semuanya ini normal! Pastikan orang lain mengetahui kondisi ini.

Jika mengelola proyek Anda merupakan pekerjaan paruh waktu atau sepenuhnya sukarela, terbukalah dengan berapa banyak waktu yang Anda miliki. Informasi ini tidak sama dengan berapa banyak waktu yang diperlukan oleh proyek atau berapa banyak waktu yang diinginkan oleh orang lain terhadap Anda.

Berikut adalah beberapa aturan yang layak untuk ditulis:

* Bagai kontribusi akan di-review dan diterima (_Apakah perlu pengujian? Template laporan masalah?_)
* Jenis kontribusi yang Anda terima (_Apakah Anda ingin meminta bantuan pada bagian tertentu dari kode Anda?_)
* Kapan waktu yang tepat untuk melakukan penjajakan ulang (_misalnya. "Anda bisa mengharapkan respon dari pengelola dalam 7 days. Jika Anda belum mendapatkan balasan apapun, silahkan memberikan notifikasi."_)
* Berapa banyak waktu yang Anda habiskan pada proyek (_misalnya. "Kami hanya menghabiskan waktu sekitar 5 jam per minggu pada proyek ini"_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), dan [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) adalah beberapa contoh proyek dengan aturan yang jelas untuk pengelola dan kontributor.

### Pastikan komunikasi terbuka

Jangan lupa untuk mendokumentasikan interaksi Anda. Jika dimungkinkan, pastikan komunikasi terjadi secara terbuka. Jika seseorang berusaha untuk menghubungi Anda secara pribadi untuk mendiskusikan sebuah pengajuan fitur baru atau membutuhkan bantuan, arahkan mereka pada media komunikasi publik secara halus, seperti mailing list atau _issue tracker_.

Jika Anda berjumpa dengan pengelola lain, atau membuat keputusan besar secara pribadi, dokumentasikan hasil diskusinya secara terbuka, meskipun hanya menuliskan notulensi Anda.

Dengan cara itu, setiap orang yang bergabung dengan komunitas Anda akan memiliki informasi yang sama dengan orang-orang yang sudah bertahun-tahun.

## Belajar untuk mengatakan tidak

Anda telah menuliskan segalanya. Idealnya semua orang akan membaca dokumentasi Anda, namun dalam kenyataannya, Anda masih harus mengingatkan orang lain bahwa informasi ini sudah tersedia.

Dengan menuliskan segala sesuatunya, akan sangat membantu ketika Anda perlu menerapkan aturan Anda.

Mengatakan tidak memang tidaklah menyenangkan, tetapi  _"Kontribusi Anda tidak sesuai dengan kriteria proyek ini"_ terasa lebih manusiawi dibandingkan  _"Saya tidak suka kontribusi Anda"_.

Mengatakan tidak juga berlaku pada banyak situasi yang akan Anda jumpai sebagai pengelola: permintaan fitur yang tidak sesuai, seseorang mencoba mengalihkan sebuah diskusi, melakukan pekerjaan yang tidak diperlukan bagi orang lain.

### Pastikan diskusi berjalan dengan ramah

Salah satu tempat terbaik untuk berlatih mengatakan tidak adalah laporan masalah dan antrian pull request. Sebagai pengelola proyek, Anda pasti akan menerima saran yang tidak Anda harapkan.

Mungkin kontribusi tersebut akan mengubah arah proyek atau tidak sesuai dnegan visi Anda. Mungkin idenya bagus, tetapi implementasinya kurang bagus.

Apapun alasannya, sangatlah dimungkinkan untuk menolak kontribusi yang tidak sesuai dengan standar proyek Anda.

Jika Anda menerima kontribusi yang tidak Anda inginkan, reaksi pertama Anda mungkin mengabaikan atau pura-pura tidak melihatnya. Melakukan hal ini bisa melukai perasaan orang lain atau bahkan mengurangi motivasi kontributor lainnya pada komunitas Anda.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">
  Kunci untuk menangani dukungan terhadap proyek open source skala besar adalah memastikan bahwa masalah terus diperhatikan. Cobalah untuk mencegah laporan masalah berhenti. Jika Anda merupakan pengembang ioS, Anda tahu bagaimana frustasinya untuk mengajukan radar. Anda mungkin bisa mendengar balasan 2 tahun kemudian, dan mengatakan untuk mencoba kembali dengan versi terbaru dari iOS.
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Scaling open source communities"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

Jangan biarkan kontribusi yang tidak diinginkan tetap terbuka karena Anda merasa bersalah atau ingin bersikap baik. Pada akhirnya, masalah yang tidak terjawab dan PR akan membuat pekerjaan proyek Anda menjadi lebih berat dan mengintimidasi Anda.

Akan lebih baik untuk langsung menutup kontribusi yang Anda tahu tidak akan diterima. Jika proyek Anda mengalami hambatan yang besar, @steveklabnik memiliki saran untuk [mengatasi laporan masalah secara efisien](https://words.steveklabnik.com/how-to-be-an-open-source-gardener).

Kedua, mengabaikan kontribusi akan mengirimkan sinyal negatif pada komunitas Anda. Berkontribusi pada sebuah proyek bisa jadi menakutkan, apalagi untuk pertama kalinya bagi orang lain. Meskipun Anda tidak menerima kontribusi mereka, akui hasil pekerjaan mereka dan ucapkan terima kasih atas minat mereka. Itu adalah sebuah pujian yang besar!

Jika Anda tidak ingin menerima sebuah kontribusi:

* **Ucapkan terima kasih** atas kontribusi mereka
* **Jelaskan kenapa tidak sesuai** pada ruang lingkup proyek, dan tawarkan saran untuk perbaikan, jika dimungkinkan.
* **Hubungkan dengan dokumentasi relevan**, jika Anda memilikinya. Jika Anda mengamati permintaan yang berulang pada sesuatu yang tidak ingin Anda terima, tambahkan pada dokumentasi Anda.
* **Tutup permintaan**

Anda tidak perlu lebih dari 1-2 kalimat untuk merespon. Sebagai contoh, ketika pengguna [celery](https://github.com/celery/celery/) melaporkan sebuah kesalahan yang berhubungan dengan sistem operasi Windows, @berkerpeksag [menjawab dengan](https://github.com/celery/celery/issues/3383):

![Celery screenshot](/assets/images/best-practices/celery.png)

Jika mengatakan tidak cukup menakutkan bagi Anda, Anda tidak sendirian. Seperti [yang dialami](https://blog.jessfraz.com/post/the-art-of-closing/) @jessfraz:

> Saya telah berbicara dengan beberapa pengelola open source yang berbeda: Mesos, Kubernetes, Chromium, dan mereka semua sepakat bahwa salah satu tugas berat dari pengelola adalah mengatakan "Tidak" pada perbaikan yang tidak Anda inginkan.

Jangan merasa bersalah karena tidak menerima kontribusi seseorang. Aturan pertama dari open source, [menurut](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"Tidak bersifat sementara, ya bersifat selamanya."_ Meskipun memberikan empati pada niat baik orang lain adalah sesuatu yang baik, menolak sebuah kontribusi tidaklah sama dengan menolak orang itu sendiri.

Pada akhirnya, jika sebuah kontribusi kurang baik, Anda tidak harus menerimanya. Bersikaplah baik dan responsif ketika seseorang berkontribusi pada proyek Anda, tetapi hanya menerima ketika Anda percaya bahwa kontribusi itu akan membuat proyek Anda menjadi lebih baik. Semakin sering Anda mengatakan tidak, akan menjadi semakin mudah.

### Bersikaplah Proaktif

Untuk mengurangi jumlah kontribusi yang tidak diharapkan dari awal, jelaskan proses untuk mengajukan dan menerima kontribusi proyek Anda pada panduan kontribusi.

Jika Anda menerima terlalu banyak kontribusi yang kurang baik, pastikan bahwa kontributor telah melakukan beberapa pekerjaan sebelumnya, misalnya:

* Mengisi template/checklist daftar laporan masalah atau PR
* Membuka laporan permasalahan sebelum mengajukan PR

Jika mereka tidak mengikuti aturan Anda, tutup dengan segera dan arahkan pada dokumentasi Anda.

Meskipun pendekatan ini mungkin terasa tidak menyenangkan pada awalnya, bersikap proaktif sebetulnya baik untuk kedua belah pihak. Hal ini mengurangi kesempatan seseorang untuk menghabiskan terlalu banyak waktu pada pull request yang tidak akan Anda terima. Dan juga membuat beban pekerjaan Anda menjadi lebih mudah untuk dikelola.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  Idealnya, jelaskan kepada mereka dan pada dokumen CONTRIBUTING.md bagaimana mereka bisa mendapatkan indikasi yang lebih baik dimasa depan tentang apa yang akan Anda terima atau tolak sebelum mereka mulai bekerja.
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["Kindly Closing Pull Requests"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

Seringkali, ketika Anda mengatakan tidak, kontributor potensial Anda mungkin akan marah atau mengkritisi keputusan Anda. Jika perilaku mereka menjadi tidak menyenangkan, [ambil langkah-langkah untuk menenangkan situasinya](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) atau bahkan hapus mereka dari komunitas Anda, jika mereka tidak berkolaborasi secara konstruktif.

### Memberlakukan pendampingan

Mungkin seseorang pada komunitas Anda secara rutin mengirimkan kontribusi yang tidak sesuai dengan standar proyek Anda. Hal ini bisa membuat frustasi bagi kedua belaj pihak untuk berada pada situasi penolakan berkali-kali.

Jika Anda melihat seseorang sangat berminat pada proyek Anda tetapi membutuhkan sedikit bantuan, bersabarlah. Jelaskan dengan jelas pada setiap situasi kenapa kontribusi mereka tidak memenuhi ekspektasi dari proyek. Cobalah untuk mengarahkan mereka pada tugas yang lebih sederhana, seperti laporan masalah yang ditandai dengan _"kesalahan baik pertama,"_ untuk mendapatkan pengalaman. Jika Anda punya waktu, pertimbangkan untuk mendampingi mereka pada kontribusi pertama mereka, atau cari orang lain pada komunitas yang bersedia mendampinginya.

## Berdayakan komunitas Anda

Anda tidak harus mengerjakan semuanya sendiri. Komunitas proyek Anda ada untuk sebuah alasan! Meskipun Anda belum memiliki komunitas kontributor yang aktif, jika Anda punya banyak pengguna, berdayakan mereka.

### Berbagi beban pekerjaan

Jika Anda mencari orang lain untuk bergabung, mulailah dengan bertanya.

Ketika Anda melihat kontributor baru melakukan kontribusi secara rutin, hargai pekerjaan mereka dengan menawarkan tanggung jawab yang lebih besar. Dokumentasikan bagaimana orang lain bisa menjadi seorang pemimpin.

Doronglah orang lain untuk [berbagi kepemilikan proyek](../building-community/#berbagi-kepemilikan-dari-proyek-anda) dan hal itu bisa mengurangi beban pekerjaan Anda secara drastis, seperti yang ditemukan @lmccart pada proyeknya, [p5.js](https://github.com/processing/p5.js).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
  Saya telah banyak berkata, "Ya, setiap orang bisa terlibat, Anda tidak harus memiliki pengalaman membuat code [...]." Kami mendapati banyak orang mendaftar untuk hadir [pada sebuah acara] dan pada saat itulah saya mulai bertanya: jika hal ini benar, apa yang harus saya katakan? Terdapat lebih dari 40 orang yang hadir, dan saya tidak mungkin duduk bersama-sama dengan masing-masing dari mereka. ...Tetapi orang-orang tersebut hadir, dan semuanya berjalan dengan lancar. Begitu ada satu orang yang berhasil, mereka bisa mengajarkan ke orang lain.
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["What Does "Open Source" Even Mean? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39)
  </p>
</aside>

Jika Anda perlu sedikit menjauh dari proyek Anda, baik sementara atau selamanya, tidak perlu ada rasa malu untuk meminta orang lain untuk meneruskan pekerjaan Anda.

Jika orang lain sangat antusias dengan arah proyek Anda, berikan akses atau serahkan kendali pada orang lain. Jika seseorang melakukan _fork_ terhadap proyek Anda dan mengelolanya secara aktif di tempat lain, pertimbangkan untuk menghubungkan ke proyek tersebut melalui proyek Anda. Sangatlah hebat melihat banyak orang menginginkan proyek Anda terus hidup.!

@progrium [menemukan bahwa](https://web.archive.org/web/20151204215958/https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) dengan mendokumentasikan visi proyeknya, [Dokku](https://github.com/dokku/dokku), membantu tujuannya tetap bertahan meskipun dia sudah meninggalkan proyeknya:

> Saya menuliskan sebuah halaman wiki menjelaskan tentang apa yang saya inginkan dan kenapa. Mengejutkan bagi saya karena pengelola mulai menjalankan proyek sesuai dengan arahan tersebut! Apakah ia melakukannya sesuai dengan apa yang saya kehendaki? Tidak selalu, tetapi ia membawa proyek ini semakin dekat dengan apa yang saya tuliskan.

### Biarkan orang lain membangun solusi yang mereka perlukan

Jika kontributor yang berpotensi memiliki opini yang berbeda tentang apa yang seharusnya dikerjakan oleh proyek Anda, Anda mungkin bisa memberikan semangat untuk mengerjakan pekerjaan mereka melalui proses _fork_.

Melakukan sebuah _fork_ terhadap sebuah proyek bukan berarti sesuatu yang jelek. Mampu menyalin dan memodifikasi sebuah proyek adalah salah satu hal terbaik tentang open source. Menyemangati orang lain untuk bekerja pada hasil fork mereka bisa memberikan ide kreatif yang mereka perlukan, tanpa harus menimbulkan konflik dengan visi proyek Anda.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  Saya melayani 80% contoh kasus. Jika Anda termasuk salah satu yang tdak setuju, silahkan _fork_ pekerjaan saya. Saya tidak akan tersinggung! Proyek publik saya selalu berusaha untuk menyelesaikan masalah yang umum; Saya berusaha untuk membuatnya mudah untuk menyelesaikan masalah yang lebih kompleks dengan cara melakukan fork atau memperluas proyek tersebut.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Why I Close PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

Hal yang sama juga terjadi pada pengguna yang menginginkan solusi dimana Anda tidak mampu membangunnya karena keterbatasan bandwidth. Menawarkan API dan hook bisa membantu orang lain memenuhi kebutuhan mereka, tanpa harus memodifikasi kode secara langsung. @orta [menemukan](https://artsy.github.io/blog/2016/07/03/handling-big-projects/) bahwa mendorong plugin untuk CocoaPods mengarah pada "beberapa ide menarik":

> Sangatlah susah untuk dihindari bahwa ketika sebuah proyek sudah semakin besar, pengelola harus menjadi lebih konsevatif tentang bagaimana mereka memperkenalkan kode baru. Anda menjadi lebih pandai dalam mengatakan "tidak", tetapi banyak orang memiliki kebutuhan yang pasti. Jadi, Anda akan mengubah alat Anda menjadi sebuah platform.

## Manfaatkan robot

Seperti halnya terdapat tugas yang bisa dikerjakan oleh orang lain, juga terdapat tugas yang tidak seharusnya dikerjakan oleh orang. Robot adalah teman Anda. Gunakan mereka untuk mempermudah hidup Anda sebagai pengelola.

### Wajibkan test dan pengujian lainnya untuk meningkatkan kualitas kode Anda

Salah satu cara penting yang bisa dilakukan untuk melakukan otomatisasi proyek Anda adalah dengan menambahkan pengujian otomatis.

Pengujian otomatis membantu kontributor bahwa mereka tidak merusak apapun. Pengujian otomatis juga mempermudah Anda untuk melakukan review dan menerima kontribusi dengan cepat. Semakin cepat Anda merespon, maka komunitas Anda juga akan semakin tertarik.

Lakukan pengaturan untuk pengujian otomatis yang akan berjalan pada semua kontribusi yang masuk, dan pastikan pengujian Anda dapat dilakukan dengan mudah oleh kontributor secara lokal. Pastikan bahwa semua kontribusi kode melewati pengujian Anda sebelum mereka bisa diajukan. Anda perlu menetapkan standar minimal kualitas dari semua pengajuan. [Penggunaan pengujian status](https://help.github.com/articles/about-required-status-checks/) pada GitHub dapat membantu memastikan tidak ada perubahan yang disetujui tanpa melalui pengujian Anda.

Jika Anda menambahkan pengujian, pastikan untuk menjelaskan bagaimana mereka bekerja pada dokumen CONTRIBUTING.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">
  Saya percaya bahwa pengujian otomatis sangat diperlukan untuk semua kode yang dikerjakan orang-orang.  Jika kode tersebut benar, maka tidak diperlukan perubahan - kita hanya menuliskan kode apabila terjadi kesalahan, apakah "crash" atau "kurang fitur". Tanpa memperhatikan perubahan yang Anda lakukan, pengujian otomatis sangatlah penting untuk menangkap regresi kesalahan yang mungkin Anda timbulkan.
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust's Community Automation"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Gunakan perangkat untuk mengotomatisasikan tugas perawatan dasar

Kabar baik tentang mengelola sebuah proyek yang terkenal adalah pengelola lain mungkin sudah mengalami masalah yang sama dan sudah membuat solusinya.

Terdapat [banyak peralatan yang ada](https://github.com/showcases/tools-for-open-source) yang dapat membantu mengotomatisasikan beberapa pekerjaan perawatan. Beberapa contoh diantaranya:

* [semantic-release](https://github.com/semantic-release/semantic-release) mengotomatisasikan rilis Anda
* [mention-bot](https://github.com/facebook/mention-bot) menyebut reviewer untuk pull requests
* [Danger](https://github.com/danger/danger) membantu otomatisasi review kode

Untuk laporan kesalahan dan kontribusi umum lainnya, GitHub telah membuat [template untuk Laporan Masalah dan Pull Request](https://github.com/blog/2111-issue-and-pull-request-templates), yang bisa Anda gunakan untuk meningkatkan komunikasi yang Anda terima. Anda juga bisa mengatur [email filter](https://github.com/blog/2203-email-updates-about-your-own-activity) untuk mengelola notifikasi email Anda.

Jika Anda ingin sedikit lebih canggih, panduan penulisan dan penggunaan lint bisa menstandarisasi kontribusi proyek dan membuatnya lebih mudah untuk melakukan review dan menerimanya.

Namun, jika standar Anda terlalu rumit, hal ini bisa meningkatkan hambatan bagi kontribusi. Pastikan Anda menambah aturan untuk mempermudah hidup orang lain.

Jika Anda tidak yakin harus menggunakan perangkat yang mana, lihat apa yang digunakan oleh proyek lain, terutama pada ekosistem yang sama. Sebagai contoh, apa proses kontribusi untuk modul Node yang lain? Menggunakan perangkat dan pendekatan yang sama akan membuat proses Anda lebih dikenal oleh calon kontributor Anda.

## OK untuk berhenti sejenak

Pekerjaan open source pernah membawa kebahagiaan. Mungkin saat ini mulai membuat Anda merasa bersalah.

Mungkin Anda merasa terlalu terbeban ketika memikirkan proyek Anda. Dan jumlah masalah dan pull request semakin menumpuk.

_Burnout_ adalah masalah yang riil dan dapat terjadi pada pekerjaan open source, terutama pada pengelola. Sebagai seorang pengelola, kebahagiaan Anda adalah sebuah kebutuhan yang tidak dapat ditawar untuk kelangsungan dari proyek open source.

Meski demikian, ambil waktu untuk istirahat! Anda tidak harus menunggu sampai Anda merasa lelah sebelum mengambil liburan. @brettcannon, seorang pengembang inti Python, memutuskan untuk mengambil [liburan satu bulan](http://www.snarky.ca/why-i-took-october-off-from-oss-volunteering) setelah menjalani 14 tahun sebagai sukarelawan OSS.

Sama halnya seperti pekerjaan lainnya, mengambil liburan secara berkala akan membuat Anda segar, bahagia, dan tertarik terhadap pekerjaan Anda.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">
  Dalam mengelola WP-CLI, Saya menemukan bahwa saya perlu membuat diri saya bahagia terlebih dahulu, dan menentukan batas keterlibatan saya dengan jelas. Keseimbangan terbaik yang saya temukan adalah 2-5 jam per minggu sebagai bagian dari jadwal pekerjaan normal saya. Hal ini menjaga keterlibatan saya sebagai sebuah gairah. Karena saya memprioritaskan masalah-masalah yang saya kerjakan, saya bisa membuat kemajuan berkala tentang apa yang saya anggap penting.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["My condolences, you're now the maintainer of a popular open source project"](https://danielbachhuber.com/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

Seringkali, cukup susah untuk berhenti sejenak dari pekerjaan open source karena Anda merasa semua orang membutuhkan Anda. Orang lain mungkin akan membuat Anda merasa bersalah karena mengabaikan pekerjaan ini.

Lakukan yang terbaik untuk mendapatkan dukungan dari pengguna dan komunitas Anda selama Anda meninggalkan proyek. Jika Anda tidak bisa menemukan dukungan yang Anda temukan, tetaplah untuk berhenti sejenak. Pastikan untuk mengkomunikasikan ketika Anda tidak ada, sehingga orang lain tidak bingung dengan tingkat responsif Anda.

Berhenti lebih dari sekedar liburan. Jika Anda tidak melakukan pekerjaan open source pada akhir pekan, atau pada jam kerja, komunikasikan ekspektasi tersebut pada orang lain, sehingga mereka tidak akan menganggu Anda.

## Jaga dirimu terlebih dahulu!

Mengelola proyek yang populer membutuhkan ketrampilan yang berbeda dengan fase awal pertumbuhan proyek, tetapi tidak kalah manfaatnya. Sebagai seorang pengelola, Anda akan berlatih kepemimpinan dan ketrampilan individu pada tingkat dimana tidak banyak orang yang mendapatkan pengalaman tersebut. Meskipun hal itu tidaklah mudah, menentukan batas yang jelas dan hanya mengambil apa yang Anda rasa nyaman akan membuat Anda tetap bahagia, segar, dan produktif.
