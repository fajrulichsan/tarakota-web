import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/slider-project.css";

import { bangunIntroduction } from "../../assets/img/index";

const carouselData = [
  {
    id: 1,
    title: "Pelatihan Awal yang Gak Bikin Bosen",
    content: [
      "Kita akan bantu kamu bangun pondasi kuat dengan mengenalin kamu sama seluk-beluk dunia arsitektur.",
      "Dan tentu saja, nggak lupa kita bahas juga etika yang penting banget buat sukses di industri ini",
    ],
  },
  {
    id: 2,
    title: "Terus Maju Bersama",
    content: [
      "Kamu akan terus belajar bareng kita. Kita akan ajari kamu cara berkomunikasi yang oke, negosiasi yang jitu, dan gimana caranya membangun hubungan yang asyik sama klien.",
      "Kamu juga bakal jago dalam manajemen proyek arsitektur dan ngerti betul aturan-aturannya.",
    ],
  },
  {
    id: 3,
    title: "Pelatihan Awal yang Gak Bikin Bosen",
    content: [
      "Kita akan bantu kamu bangun pondasi kuat dengan mengenalin kamu sama seluk-beluk dunia arsitektur.",
      "Dan tentu saja, nggak lupa kita bahas juga etika yang penting banget buat sukses di industri ini",
    ],
  },
  {
    id: 4,
    title: "Terus Maju Bersama",
    content: [
      "Kamu akan terus belajar bareng kita. Kita akan ajari kamu cara berkomunikasi yang oke, negosiasi yang jitu, dan gimana caranya membangun hubungan yang asyik sama klien.",
      "Kamu juga bakal jago dalam manajemen proyek arsitektur dan ngerti betul aturan-aturannya.",
    ],
  },
];

const styleCardTesti = {
  border: "5px solid #FFF",
  // boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.08)",
};

const Introduction = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Define currentSlide state

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
          slidesToShow: 1, // Number of slides to show on larger tablets
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-10 py-5 md:py-0 lg:py-16 md:px-20 lg:px-32">
      <Slider {...settings} className="px-2">
        {carouselData.map((item) => (
          <div className="p-2 md:p-4 mx-auto">
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-3 p-5 md:p-8 lg:p-10 lg:px-16 rounded-xl md:rounded-2xl shadow-md shadow-gold"
            >
              <div className="col-span-1 flex items-center justify-center">
                <img className="h-32 md:h-44 lg:h-60" src={bangunIntroduction}></img>
              </div>
              <div className="col-span-1 md:col-span-2 text-2xl flex items-center justify-center">
                <div className="space-y-1 md:space-y-3">
                <p className="text-sm md:text-lg lg:text-2xl text-justify">
                  Kita ngeliat, belakangan ini lagi rame banget, ya, orang-orang
                  ngomongin soal investasi. Ada yang sibuk bahas saham, ada yang
                  mikirin properti, sampe ada yang ngecek harga emas tiap hari.
                </p>
                <p className="text-tera font-semibold text-sm md:text-lg lg:text-2xl ">Semua seru-seru aja sih!</p>
                </div>
               
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <p className="text-sm md:text-lg lg:text-2xl text-justify md:text-center mt-10 mb-5 md:mt-12 lg:mt-16 md:mb-8 lg:mb-10">“<span className="font-bold">Penting banget</span> buat paham betul tentang investasi sebelum nekat terjun ke dalamnya.”</p>

      <Slider {...settings} className="px-2">
        {carouselData.map((item) => (
          <div className="p-2 md:p-4 mx-auto">
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-3 p-5 md:p-8 lg:p-10 lg:px-16 rounded-xl md:rounded-2xl shadow-md shadow-gold"
            >
              <div className="col-span-1 flex items-center justify-center md:order-2">
                <img className="h-32 md:h-44 lg:h-60" src={bangunIntroduction}></img>
              </div>
              <div className="col-span-1 md:col-span-2 text-2xl flex items-center justify-center">
                <div className="space-y-1 md:space-y-3">
                <p className="text-sm md:text-lg lg:text-2xl text-justify">
                  Kita ngeliat, belakangan ini lagi rame banget, ya, orang-orang
                  ngomongin soal investasi. Ada yang sibuk bahas saham, ada yang
                  mikirin properti, sampe ada yang ngecek harga emas tiap hari.
                </p>
                <p className="text-tera font-semibold text-sm md:text-lg lg:text-2xl ">Semua seru-seru aja sih!</p>
                </div>
               
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Introduction;
