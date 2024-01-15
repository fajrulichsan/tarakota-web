import {
  facebook,
  youtube,
  instagram,
  landingBanner1,
  landingBanner2,
  landingBanner3,
  landingBanner4,
  linekdin,
  whatsapp,
  landingProject1,
  landingProject2,
  landingProject3,
  landingProject4,
  landingProject5,
  landingProject6,
  airMancur,
  ba,
  cnearc,
  dankos,
  enseval,
  fima,
  forsta,
  kalbe,
  komet,
  kasual,
  oneject,
  wook,
  aboutCEO,
  aboutCTO,
  aboutCFO,
  bgVisiMisiAboutUs,
  img13,
  img133,
  img92,
  img11,
  img12,
  img21,
  img22,
  img23,
  img31,
  img32,
  img33,
  img34,
  img41,
  img42,
  img43,
  img51,
  img52,
  img53,
  img61,
  img62,
  img63,
  img71,
  img72,
  img73,
  img81,
  img82,
  img83,
  img91,
  img93,
  img101,
  img102,
  img103,
  img111,
  img112,
  img113,
  img121,
  img122,
  img123,
  img131,
  img132,
  img141,
  img142,
  img143,
  img151,
  img152,
  img153,
} from "../assets/img/index";


// landing page
const bannerContentList = [
  {
    id: 1,
    title: "Bersama Tarakota, Wujudkan Impian Arsitekturmu!",
    bgImage: landingBanner1,
  },
  {
    id: 2,
    title: "Kreasi Desain Arsitektur Tanpa Batas, Bersama Tarakota.",
    bgImage: landingBanner2,
  },
  {
    id: 3,
    title:
      "Meretas Batasan dalam Arsitektur, Interior, Lanskap, dan Furniture.",
    bgImage: landingBanner3,
  },
  {
    id: 4,
    title: "Inovasi & Keindahan, Kualitas Desain Terbaik di Ujung Jarimu.",
    bgImage: landingBanner4,
  },
];

const sosialMedia = [
  {
    id: 1,
    icon: whatsapp,
    link: "https://api.whatsapp.com/send?phone=6285280061520",
  },
  {
    id: 2,
    icon: instagram,
    link: "https://instagram.com/tarakota.id",
  },
  {
    id: 3,
    icon: youtube,
    link: "https://www.youtube.com/@tataruangkota",
  },
  {
    id: 4,
    icon: facebook,
    link: "https://www.facebook.com/tarakota.id?mibextid=LQQJ4d",
  },
  {
    id: 5,
    icon: linekdin,
    link: "https://www.linkedin.com/company/tarakota/",
  },
];

const projectsSliderList = [
  {
    id: 1,
    title: "Interior",
    description: "Mr. MI",
    image: img11,
  },
  {
    id: 2,
    title: "Interior",
    description: "Mr. HR",
    image: img21,
  },
  {
    id: 15,
    title: "Arsitektur",
    description: "Mr. FM",
    image: img152,
  },
  {
    id: 4,
    title: "Interior",
    description: "Mr. VR",
    image: img41,
  },
  {
    id: 5,
    title: "Interior",
    description: "Mr. RA",
    image: img51,
  },
  {
    id: 6,
    title: "Interior",
    description: "Mr. PA",
    image: img61,
  },
];

const serviceList = [
  {
    id: 1,
    title: "INTERIOR",
    img : img12
  },
  {
    id: 2,
    title: "ARSITEKTUR",
    img :img151
  },
  {
    id: 3,
    title: "LANSEKAP",
    img : img133
  },
];

const reasonList = [
  {
    id: 1,
    title: "Komitmen Penuh pada Inovasi",
    content: "Merancang Masa Depan dengan Profesional.",
  },
  {
    id: 2,
    title: "Ruang Hidup untuk Generasi Anda",
    content: " Desain yang Menyatu dengan Gaya Hidup Milenial.",
  },
  {
    id: 3,
    title: "Pengalaman Lengkap dalam Satu Atap",
    content: "Dari Interior hingga Lanskap, Kami melengkapi Semua.",
  },
  {
    id: 4,
    title: "Mengawasi Setiap Detail",
    content: "Kami Berkomitmen pada Kualitas Terbaik.",
  },
  {
    id: 5,
    title: "Jembatan antara Inovasi dan Kecantikan",
    content: "Tarakota Memadukan Kedua Dunia.",
  },
  {
    id: 6,
    title: "Perancangan Berkelanjutan",
    content: "Kami Memikirkan Masa Depan Bumi Bersama Anda.",
  },
  {
    id: 7,
    title: "Kebebasan untuk Mengekspresikan Diri",
    content:
      "Berkerjasama dengan client menghasilkan desain yang memenuhi kebutuhan, prefensi, dan anggaran.",
  },
  {
    id: 8,
    title: "Handal dan Berpengalaman ",
    content:
      "Arsitek yang kompeten dan berpengalaman serta spesialis dalam arsitektur, interior, furniture dan landscape.",
  },
];

const brandsList = [
  airMancur,
  ba,
  cnearc,
  dankos,
  enseval,
  fima,
  forsta,
  kalbe,
  komet,
  kasual,
  oneject,
  wook,
];


//about us data
const ourTeamList = [
  {
    id: 1,
    name: "Nuryawan Mirsa Adiwicaksono, S.T.",
    position: "CEO",
    image: aboutCEO,
  },
  {
    id: 2,
    name: "Indriyani Oktavia, S.I.Kom.",
    position: "CFO",
    image: aboutCFO,
  },
  {
    id: 3,
    name: "Muhammad Rafif Fajri S.Si M.Si",
    position: "CTO",
    image: aboutCTO,
  },
];


//service page
const ourServisList = [
  {
    id: 1,
    title: "Arsitektur",
    flex: "flex-row",
    img: img11,
    body: [
      "Desain arsitektur inovatif yang disesuaikan dengan preferensi Anda",
      "Perencanaan dan penjadwalan yang komprehensi untuk pelaksanaan yang lancar",
      "Konsultasi ahli untuk memandu Anda melalui seluruh proses",
      "Manajemen proyek yang efisien untuk penyelesaian tepat waktu dan sukses",
    ],
  },
  {
    id: 2,
    title: "Interior",
    flex: "flex-row",
    img: img21,
    body: [
      "Desain interior khusus yang mencerminkan kepribadian dan gaya Anda",
      "Perencanaan ruang yang bijaksana untuk memaksimalkan fungsionalitas dan kenyamanan",
      "Pemilihan bahan, warna, dan finishing untuk tampilan yang kohesif",
      "Kolaborasi dengan kontraktor dan supplier terpercaya untuk menjamin kualitas",
    ],
  },
  {
    id: 3,
    title: "Lanskap",
    flex: "flex-row",
    img: img31,
    body: [
      "Desain lanskap unik yang selaras dengan lingkungan sekitar",
      "Integrasi elemen seperti fitur air, tanaman, dan pencahayaan",
      "Saran ahli tentang praktik berkelanjutan dan solusi ramah lingkungan",
      "Rencana pemeliharaan untuk menjaga ruang luar Anda tetap berkembang sepanjang tahun",
    ],
  },
  {
    id: 4,
    title: "Furnitur",
    flex: "flex-row",
    img: img41,
    body: [
      "Desain furnitur khusus dibuat dengan presisi dan perhatian terhadap detail",
      "Pemilihan bahan dan finishing berkualitas tinggi untuk daya tahan dan daya tarik estetika",
      "Desain fungsional dan ergonomis yang mengoptimalkan ruang tamu atau ruang kerja Anda",
      "Kolaborasi dengan pengrajin terampil untuk mewujudkan visi Anda",
    ],
  },
  {
    id: 5,
    title: "Jasa Pengawas",
    flex: "flex-row",
    img: img51,
    body: [
      "Pengawasan lokasi untuk memantau kemajuan konstruksi dan jaminan kualitas",
      "Inspeksi tepat waktu untuk mengatasi masalah apa pun dengan segera",
      "Koordinasi dengan kontraktor dan pemasok untuk menjaga jadwal proyek",
      "Perhatian terhadap detail untuk memastikan kepatuhan terhadap spesifikasi proyek",
    ],
  },
];


//bagi bagi page
const bagiBagiForm = [
  {
    id: 1,
    title: "Nama Lengkap",
    tipe : "text",
    name: "namaLengkap",
    placeholder: "Nama Lengkap",
  },
  {
    id: 2,
    title: "No HP",
    tipe : "number",
    name: "noHp",
    placeholder: "No Hp",
  },
  {
    id: 3,
    title: "Email",
    tipe : "email",
    name: "email",
    placeholder: "Email",
  },
  {
    id: 4,
    title: "Nominal Investasi yang Direncanakan",
    tipe : "number",
    name: "nominal",
    placeholder: "Nominal",
  }
];

const introList = [
  {
    id: 1,
    body: `<p>
    Kita ngeliat, belakangan ini lagi rame banget, ya, orang-orang
    ngomongin soal investasi. Ada yang sibuk bahas saham, ada yang
    mikirin properti, sampe ada yang ngecek harga emas tiap hari.
  </p>
  <p className="font-semibold" style="color:#E85738; font-weight: 600">Semua seru-seru aja sih!</p>`,
  },
  {
    id: 2,
    body: `<p>Tapi, gak semua orang punya keberanian buat mulai investasi. <span style="font-weight: 600">Kebanyakan dari mereka ngerasa takut kehilangan duitnya</span>.</p>
    <p>Emang sih, takutnya itu wajar banget, soalnya <span style="font-weight: 600">investasi tuh sebaiknya dateng dari diri sendiri, bukan karena tekanan orang</span> lain atau cuma pengen ikutan tren aja.</p>`,
  },
  {
    id: 3,
    body: `<p>Jadi, <span  style="font-weight: 600">investasi itu enggak sekadar soal untung-untungan</span>. Di dunia investasi, kamu mesti ngerelain segala yang kamu punya, gak cuma duit, tapi juga tenaga, pikiran, dan impian finansial kamu.</p>`,
  },
];

const introList2 = [
  {
    id: 1,
    body: `<p>
    Kalo ada yang nawarin investasi dengan omongan, "Santai aja, tinggal serahkan duitnya ke kita, pasti untung," <span style="font-weight: 600">kamu harus hati-hati banget</span>. 
  </p>
  <p className="font-semibold" style="color:#E85738; font-weight: 600">Investasi tuh gak semudah itu!</p>`,
  },
  {
    id: 2,
    body: `<p>Ingat, ada dua hal yang selalu nemenin setiap produk investasi, yaitu <span style="font-weight: 600">risiko dan imbalan</span>, atau yang sering disebut <span style="font-weight: 600">risk and return.</span></p>`,
  },
  {
    id: 3,
    body: `Produk investasi yang nawarin imbalan gede, biasanya punya risiko gede juga. Dan sebaliknya, produk investasi yang risikonya rendah, biasanya imbalannya juga lebih kecil.`,
  },
  {
    id: 4,
    body: `Nah, kenapa penting banget ngerti konsep risk and return ini? Karena investasi itu sesuatu yang sangat personal.<span style="font-weight: 600">Setiap orang punya selera risiko yang beda-beda sesuai tujuan finansial</span> masing-masing, jadi enggak bisa disamain begitu aja.`,
  },
];

const jenisInvestasi = [
  {
    id: 1,
    title: "Barang Fisik",
    body: "Investasi barang fisik tuh kayak beli tanah atau bangunan buat disewain atau dijual lagi, atau beli emas buat jaga-jaga nilai uang kamu, atau mungkin barang antik yang harganya bisa naik di masa depan. Yang penting, kamu bisa pegang dan kendalikan barang-barang itu secara langsung.",
  },
  {
    id: 2,
    title: "Surat Berharga",
    body: "Investasi dalam surat berharga, yang nggak lain adalah bukti kepemilikan aset dengan nilai tertentu. Surat-surat berharga ini bisa juga diperdagangkan di pasar keuangan, atau yang kita kenal dengan istilah efek.",
  },
];

const kelebihanInvestasi = [
  {
    id: 1,
    title: "Melawan Inflasi",
    body: "Dengan investasi, uang kamu bisa terlindungi dari inflasi.",
  },
  {
    id: 2,
    title: "Tambahan Penghasilan",
    body: "Investasi bisa nambahin penghasilan kamu, tanpa harus kerja keras terus-menerus",
  },
  {
    id: 3,
    title: "Mencapai Tujuan Keuangan",
    body: "Investasi bisa bantu kamu cepet nyampein tujuan finansial, seperti beli rumah atau mobil",
  },
  {
    id: 4,
    title: "Kesehatan Mental yang Terjaga",
    body: "Kondisi finansial yang lebih baik bisa bikin pikiran kamu lebih tenang dan bahagia.",
  },
  {
    id: 5,
    title: "Modal yang Bisa Disesuaikan",
    body: " Banyak jenis investasi yang bisa sesuaiin dengan budget kamu.",
  },
  {
    id: 6,
    title: "Kebebasan Finansial",
    body: "Salah satu tujuan akhirnya adalah bisa hidup tanpa harus kerja keras lagi, gara-gara uangnya udah cukup untuk nge-cover semua kebutuhan hidup.",
  },
];


export const dataBagiBagiPage = {
  bagiBagiForm,introList, introList2, jenisInvestasi, kelebihanInvestasi
 }

 export const dataLandingPage = {
  bannerContentList, sosialMedia, projectsSliderList, serviceList, reasonList, brandsList
}

export const dataAboutUsPage = {brandsList, ourTeamList}

export const dataServicePage = {sosialMedia, ourServisList}

export const projects = [
  {
    id: 1,
    name: "Pak M.I",
    description: "Elegant and timeless, studio Fashion Design ini merupakan perpaduan harmonis antara tradisi dan inovasi. Dengan sentuhan Modern Contemporary Classic, kami menciptakan ruang yang menginspirasi, menggabungkan keindahan dan fungsionalitas dalam setiap detailnya. Dalam ruang ini, 'kesan pertama adalah segalanya,' dengan sentuhan klasik yang berpadu sempurna dengan elemen kontemporer yang memberikan nuansa yang segar dan mengagumkan. Setiap sudut adalah cerminan gaya yang memukau dan cermin dari dedikasi kami dalam menciptakan desain yang tak terlupakan. Welcome to a world where fashion meets art, where every fabric and texture tells a story, and where your creativity finds its perfect canvas",
    category: "Residensial",
    location : "Jakarta",
    year : "2022",
    room: "Ruang Keluarga",
    image : [img11,img12,img13]
  },
  {
    id: 2,
    name: "Pak M.I",
    description: "Dapur dan ruang makan yang menawan dengan kitchen set berwarna classic off white and tosca green. Every piece of furniture and accessories dipilih with meticulous care untuk menciptakan harmoni dalam desain. Kami sangat yakin bahwa desain interior harus merefleksikan kepribadian dan gaya hidup pemiliknya. Dalam proyek ini, kami berusaha untuk memberikan special touch yang mampu membuat setiap ruangan menjadi benar-benar unique.",
    category: "Residensial",
    location : "Jakarta",
    year : "2022",
    room: "Ruang Makan",
    image : [img21,img22,img23]
  },
  {
    id: 3,
    name: "Pak M.I",
    description: "Elegant and timeless, studio Fashion Design ini merupakan perpaduan harmonis antara tradisi dan inovasi. Dengan sentuhan Modern Contemporary Classic, kami menciptakan ruang yang menginspirasi, menggabungkan keindahan dan fungsionalitas dalam setiap detailnya. Dalam ruang ini, 'kesan pertama adalah segalanya,' dengan sentuhan klasik yang berpadu sempurna dengan elemen kontemporer yang memberikan nuansa yang segar dan mengagumkan. Setiap sudut adalah cerminan gaya yang memukau dan cermin dari dedikasi kami dalam menciptakan desain yang tak terlupakan. Welcome to a world where fashion meets art, where every fabric and texture tells a story, and where your creativity finds its perfect canvas",
    category: "Residensial",
    location : "Jakarta",
    year: "2022",
    room: "Kamar Tidur",
    image : [img31,img32,img33,img34]
  },
  {
    id: 4,
    name: "Pak M.I",
    description: "Gabungan warna gold yang elegan menciptakan nuansa mewah dan kenyamanan di ruang ini. A comfortable bathroom bukan hanya tempat mandi, tapi juga tempat untuk merawat diri dan relaksasi.",
    category: "Residensial",
    location : "Jakarta",
    year : "2022",
    room: "Kamar Mandi",
    image : [img41,img42,img43]
  },
  {
    id: 5,
    name: "Pak F.A",
    description: "Dapur dan ruang makan yang menawan dengan kitchen set berwarna classic off white and tosca green. Every piece of furniture and accessories dipilih with meticulous care untuk menciptakan harmoni dalam desain. Kami sangat yakin bahwa desain interior harus merefleksikan kepribadian dan gaya hidup pemiliknya. Dalam proyek ini, kami berusaha untuk memberikan special touch yang mampu membuat setiap ruangan menjadi benar-benar unique.",
    category: "Residensial",
    location : "Bekasi",
    year : "2023",
    room: "Ruang Makan",
    image : [img51,img52,img53]
  },
  {
    id: 6,
    name: "Pak H.Y",
    description: "Elegant and timeless, studio Fashion Design ini merupakan perpaduan harmonis antara tradisi dan inovasi. Dengan sentuhan Modern Contemporary Classic, kami menciptakan ruang yang menginspirasi, menggabungkan keindahan dan fungsionalitas dalam setiap detailnya. Dalam ruang ini, 'kesan pertama adalah segalanya,' dengan sentuhan klasik yang berpadu sempurna dengan elemen kontemporer yang memberikan nuansa yang segar dan mengagumkan. Setiap sudut adalah cerminan gaya yang memukau dan cermin dari dedikasi kami dalam menciptakan desain yang tak terlupakan. Welcome to a world where fashion meets art, where every fabric and texture tells a story, and where your creativity finds its perfect canvas.",
    category: "Residensial",
    location : "Jakarta",
    year : "2023",
    room: "Ruang Keluarga",
    image : [img61,img62,img63]
  },
  {
    id: 7,
    name: "Pak H.Y",
    description: "Desain kitchen yang tak hanya memikat mata, tapi juga memberikan kenyamanan dalam setiap momen memasak dan menyajikan hidangan. Kitchen bukan hanya inti dalam arsitektur dan interior, tapi juga jiwa setiap ruang. Dengan TarMin, Anda tak hanya mendapatkan kitchen yang sempurna, tapi juga pengalaman memasak yang tak terlupakan.",
    category: "Residensial",
    location : "Jakarta",
    year : "2023",
    room: "Dapur",
    image : [img71,img72,img73]
  },
  {
    id: 8,
    name: "Buk N.E",
    description: "Elegant and timeless, studio Fashion Design ini merupakan perpaduan harmonis antara tradisi dan inovasi. Dengan sentuhan Modern Contemporary Classic, kami menciptakan ruang yang menginspirasi, menggabungkan keindahan dan fungsionalitas dalam setiap detailnya. Dalam ruang ini, 'kesan pertama adalah segalanya,' dengan sentuhan klasik yang berpadu sempurna dengan elemen kontemporer yang memberikan nuansa yang segar dan mengagumkan. Setiap sudut adalah cerminan gaya yang memukau dan cermin dari dedikasi kami dalam menciptakan desain yang tak terlupakan. Welcome to a world where fashion meets art, where every fabric and texture tells a story, and where your creativity finds its perfect canvas",
    category: "Residensial",
    location : "Jakarta",
    year : "2023",
    room: "Kamar Tidur",
    image : [img81,img82,img83]
  },
  {
    id: 9,
    name: "Pak N.A",
    description: "Dapur dan ruang makan yang menawan dengan kitchen set berwarna classic off white and tosca green. Every piece of furniture and accessories dipilih with meticulous care untuk menciptakan harmoni dalam desain. Kami sangat yakin bahwa desain interior harus merefleksikan kepribadian dan gaya hidup pemiliknya. Dalam proyek ini, kami berusaha untuk memberikan special touch yang mampu membuat setiap ruangan menjadi benar-benar unique.",
    category: "Komersial",
    location : "Tanggerang",
    year : "2022",
    room: "Dapur",
    image : [img91,img92,img93]
  },
  {
    id: 10,
    name: "Pak N.A",
    description: "At this project, kita memahami bahwa mode adalah bahasa universal yang menghubungkan semua orang di seluruh dunia. Dalam setiap detail design interior ini, kita menyelipkan cinta dan semangat. Ruang ini lebih dari sekadar atelier, ini adalah tempat di mana impian dan inspirasi berkumpul. Let's embark on a creative journey together, where the past and the future dance in perfect harmony, creating a timeless masterpiece.",
    category: "Komersial",
    location : "Tanggerang",
    year : "2022",
    room: "Kantor",
    image : [img101,img102,img103]
  },
  {
    id: 11,
    name: "Pak F.R",
    description: "Ruang meeting berkelas tinggi yang memadukan sentuhan klasik dengan kehangatan kayu alami, creating an ambiance that speaks of luxury in every detail.",
    category: "Komersial",
    location : "Jakarta",
    year : "2023",
    room: "Kantor",
    image : [img111,img112,img113]
  },
  {
    id: 12,
    name: "Pak R.K",
    description: "At this project, kita memahami bahwa mode adalah bahasa universal yang menghubungkan semua orang di seluruh dunia. Dalam setiap detail design interior ini, kita menyelipkan cinta dan semangat. Ruang ini lebih dari sekadar atelier, ini adalah tempat di mana impian dan inspirasi berkumpul. Let's embark on a creative journey together, where the past and the future dance in perfect harmony, creating a timeless masterpiece.",
    category: "Komersial",
    location : "Jakarta",
    year : "2022",
    room: "Kantor",
    image : [img121,img122,img123]
  },
  {
    id: 13,
    name: "Pak M.R.H",
    description: "Transformasikan tampilan bangunan Anda dengan keindahan fasade yang memukau! Dengan memberikan sentuhan eksklusif pada setiap detail arsitektur. Keunggulan desain dan bahan berkualitas tinggi untuk menciptakan konstruksi yang tak hanya hebat fungsionalitasnya, tetapi juga memukau mata. Temukan keajaiban fasade bersama Tarakota.",
    category: "Komersial",
    location : "Depok",
    year : "2023",
    room: "Fasade",
    image : [img131,img132,img133]
  },
  {
    id: 14,
    name: " Pak R.D",
    description: "Transformasikan tampilan bangunan Anda dengan keindahan fasade yang memukau! Dengan memberikan sentuhan eksklusif pada setiap detail arsitektur. Keunggulan desain dan bahan berkualitas tinggi untuk menciptakan konstruksi yang tak hanya hebat fungsionalitasnya, tetapi juga memukau mata. Temukan keajaiban fasade bersama Tarakota.",
    category: "Komersial",
    location : "Jakarta",
    year : "2023",
    room: "Fasade",
    image : [img141,img142,img143]
  },
  {
    id: 15,
    name: " Pak F.M",
    description: "Transformasikan tampilan bangunan Anda dengan keindahan fasade yang memukau! Dengan memberikan sentuhan eksklusif pada setiap detail arsitektur. Keunggulan desain dan bahan berkualitas tinggi untuk menciptakan konstruksi yang tak hanya hebat fungsionalitasnya, tetapi juga memukau mata. Temukan keajaiban fasade bersama Tarakota.",
    category: "Komersial",
    location : "Jakarta",
    year : "2023",
    room: "Fasade",
    image : [img151,img152,img153]
  }
]





