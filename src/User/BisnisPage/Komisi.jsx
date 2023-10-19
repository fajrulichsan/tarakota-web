import React, {useState} from "react";
import { bisnisAlur } from "../../assets/img/index";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/slider-project.css";

const tipsList = [
  {
    id: 1,
    title: "Komisi Super Menggiurkan",
    body: "Semakin sukses kamu, semakin tinggi komisi yang akan mengalir ke rekeningmu. Ini bukan hanya tentang uang, tapi tentang menggapai level finansial yang lebih tinggi.",
  },
  {
    id: 2,
    title: "Paket Perjalanan Mewah",
    body: "Setiap tahun, kamu berkesempatan untuk menjelajahi dunia dengan paket perjalanan mewah, semua biayanya sudah ditanggung. Liburan yang kamu impikan bisa menjadi kenyataan.",
  },
  {
    id: 3,
    title: "Kendaraan Eksklusif",
    body: "Jangan terkejut jika kamu mendapati dirimu naik mobil mewah sebagai hadiah. Prestasi memang dihargai dengan gaya.",
  },{
    id: 4,
    title: "Gadget Keren",
    body: "Dari smartphone terbaru hingga laptop canggih, kami menyediakan perangkat terbaik untuk mendukung kesuksesanmu.",
  },
  {
    id: 5,
    title: "Klub Eksklusif",
    body: "Bergabunglah dalam klub eksklusif dengan akses ke acara eksklusif, restoran, dan pengalaman mewah lainnya.",
  },
  {
    id: 6,
    title: "Tunjangan Kesehatan",
    body: "Kesehatan adalah investasi terbaik. Kami menyediakan tunjangan kesehatan komprehensif untuk merawat dirimu dan keluargamu.",
  },
  {
    id: 7,
    title: "Perlengkapan Branded",
    body: "Kamu akan tampil memukau dengan pakaian dan aksesori bermerk dari.",
  },
];

const Komisi = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    arrow: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: (dots) => (
      <ul style={{ margin: "-20px 0" }}>
        {dots.map((dot, index) => (
          <li
            key={index}
            style={{ display: "inline-block", marginRight: "5px" }}
          >
            {dot}
          </li>
        ))}
      </ul>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "15px",
          height: "15px",
          background: currentSlide === i ? "#D4B754" : "transparent",
          border:
            currentSlide === i ? "2px solid #BABABA" : "2px solid #BABABA",
          borderRadius: "50%",
          marginTop: "-10px",
          transition: "background-color 0.3s ease",
        }}
        className="custom-dot"
      ></div>
    ),
    prevArrow: (
      <div className="slick-arrow custom-prev-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 10 22"
          fill="none"
          stroke="white" // Ganti warna menjadi putih
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l-6-6 6-6" />
        </svg>
      </div>
    ),
    nextArrow: (
      <div className="slick-arrow custom-prev-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 18 22"
          fill="none"
          stroke="white" // Ganti warna menjadi putih
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    ),
    responsive: [
      {
        breakpoint: 680, // Adjust this breakpoint as needed for mobile devices
        settings: {
          slidesToShow: 1, // Number of slides to show on mobile devices
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023, // Adjust this breakpoint as needed for larger tablets
        settings: {
          slidesToShow: 2, // Number of slides to show on larger tablets
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-5 py-5 md:px-20 lg:px-32">
      <div className="rounded-xl md:rounded-3xl p-5 md:p-10 lg:p-16 shadow-md shadow-gold ">
        <p className="text-sm md:text-lg lg:text-2xl text-justify">
          Dalam peran sebagai seorang Representatif BisnisTarakota, kamu akan
          mendapatkan komisi yang besar, yang semakin meningkat seiring dengan
          kenaikan tingkat posismu. Dengan posisi yang lebih tinggi, kamu juga
          memiliki kemampuan untuk mendelegrasikan sebagian pekerjaan kepada tim
          lainnya, sehingga kamu bisa mengoptimalkan pendapatanmu sambil
          memberdayakan timmu untuk meraih kesuksesan bersama. Bergabunglah
          dengan kami sekarang dan raih komisi fantastis yang menanti dengan
          contoh dibawah ini:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mt-4 md:mt-8">
          <div className="col-span-1 md:col-span-6 lg:col-span-4 md:col-start-4 lg:col-start-5">
            <div className="w-full py-2 md:py-3 bg-tera text-white text-center rounded-xl">
              <p className="text-sm md:text-lg lg:text-2xl">
                Tier 1: Komisi 2,5% total pendapatan
              </p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-6 lg:col-span-4 md:col-start-1 lg:col-start-3">
            <div className="w-full py-2 md:py-3 bg-tera text-white text-center rounded-xl">
              <p className="text-sm md:text-lg lg:text-2xl">
                Tier 2: Komisi 1,5% total pendapatan
              </p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-6 lg:col-span-4">
            <div className="w-full py-2 md:py-3 bg-tera text-white text-center rounded-xl">
              <p className="text-sm md:text-lg lg:text-2xl">
                Tier 3: Komisi 1,0% total pendapatan
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="my-20 h-[60em] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bisnisAlur})` }}
      ></div>

      <p className="text-sm md:text-lg lg:text-2xl">
        Jangan pernah lupa, selain penjelasan diatas, disini juga ada begitu
        banyak penghargaan luar biasa yang menanti kamu yang terus berprestasi
        dengan gemilang! Jadilah bagian dari Representatif BisnisTarakota yang
        memahami nilai pencapaianmu dan berikan dirimu kesempatan untuk meraih
        lebih banyak penghargaan dan prestasi yang mengesankan, antara lain:
      </p>

      <Slider {...settings}>
        {tipsList.map((item) => (
          <div key={item.id} className="p-3  ">
            <div className="grid grid-cols-12 gap-2 mt-10">
              <div className="col-span-12 md:col-span-8 lg:col-span-6 md:col-start-3 lg:col-start-4">
                <div
                  className="rounded-xl text-white p-5 md:p-10 lg:p-10 shadow-md shadow-gold"
                  style={{ background: "#404042" }}
                >
                  <p className="text-sm md:text-lg lg:text-xl font-semibold">
                    {item.title}
                  </p>
                  <p className="text-sm md:text-lg lg:text-xl text-justify">
                    {item.body}
                  </p>
                </div>
              </div>
             
            </div>
          </div>
        ))}
      </Slider>
      <div className="col-span-12 md:col-span-10 md:col-start-2 text-2xl py-5 mt-10">
                <p className="text-sm md:text-lg lg:text-2xl text-justify md:text-center">
                  Semua ini adalah hadiah-hadiah yang menunjukkan penghargaan
                  atas dedikasi dan kerja kerasmu.{" "}
                </p>
                <p className="text-sm md:text-lg lg:text-2xl text-justify font-bold md:text-center">
                  Jadilah Representatif BisnisTarakota arsitektur berprestasi
                  dan nikmati manfaat luar biasa ini!
                </p>
              </div>
    </div>
  );
};

export default Komisi;
