import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/slider-project.css";

import { bangunIntroduction } from "../../assets/img/index";

const introList = [
  {
    id: 1,
    body : `<p>
    Kita ngeliat, belakangan ini lagi rame banget, ya, orang-orang
    ngomongin soal investasi. Ada yang sibuk bahas saham, ada yang
    mikirin properti, sampe ada yang ngecek harga emas tiap hari.
  </p>
  <p className="font-semibold" style="color:#E85738; font-weight: 600">Semua seru-seru aja sih!</p>`
  },
  {
    id: 2,
    body :`<p>Tapi, gak semua orang punya keberanian buat mulai investasi. <span style="font-weight: 600">Kebanyakan dari mereka ngerasa takut kehilangan duitnya</span>.</p>
    <p>Emang sih, takutnya itu wajar banget, soalnya <span style="font-weight: 600">investasi tuh sebaiknya dateng dari diri sendiri, bukan karena tekanan orang</span> lain atau cuma pengen ikutan tren aja.</p>`
  },
  {
    id: 3,
    body : `<p>Jadi, <span  style="font-weight: 600">investasi itu enggak sekadar soal untung-untungan</span>. Di dunia investasi, kamu mesti ngerelain segala yang kamu punya, gak cuma duit, tapi juga tenaga, pikiran, dan impian finansial kamu.</p>`
  }
];

const introList2 = [
  {
    id: 1,
    body : `<p>
    Kalo ada yang nawarin investasi dengan omongan, "Santai aja, tinggal serahkan duitnya ke kita, pasti untung," <span style="font-weight: 600">kamu harus hati-hati banget</span>. 
  </p>
  <p className="font-semibold" style="color:#E85738; font-weight: 600">Investasi tuh gak semudah itu!</p>`
  },
  {
    id: 2,
    body :`<p>Ingat, ada dua hal yang selalu nemenin setiap produk investasi, yaitu <span style="font-weight: 600">risiko dan imbalan</span>, atau yang sering disebut <span style="font-weight: 600">risk and return.</span></p>`
  },
  {
    id: 3,
    body : `Produk investasi yang nawarin imbalan gede, biasanya punya risiko gede juga. Dan sebaliknya, produk investasi yang risikonya rendah, biasanya imbalannya juga lebih kecil.`
  },
  {
    id: 4,
    body : `Nah, kenapa penting banget ngerti konsep risk and return ini? Karena investasi itu sesuatu yang sangat personal.<span style="font-weight: 600">Setiap orang punya selera risiko yang beda-beda sesuai tujuan finansial</span> masing-masing, jadi enggak bisa disamain begitu aja.`
  }
];

const styleCardTesti = {
  border: "5px solid #FFF",
  // boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.08)",
};

const Introduction = () => {
  const [currentSlide, setCurrentSlide] = useState(0); 
  const [currentSlide2, setCurrentSlide2] = useState(0);

  const settings1 = {
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

  const settings2 = {
    dots: true,
    infinite: true,
    arrow: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setCurrentSlide2(next),
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
          background: currentSlide2 === i ? "#D4B754" : "transparent",
          border:
            currentSlide2 === i ? "2px solid #BABABA" : "2px solid #BABABA",
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
      <Slider {...settings1} className="px-2">
        {introList.map((item) => (
          <div className="p-2 md:p-4 mx-auto">
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-3 p-5 md:p-8 lg:p-10 lg:px-16 rounded-xl md:rounded-2xl shadow-md shadow-gold h-[20em] md:h-[15em] lg:h-[20em]"
            >
              <div className="col-span-1 flex items-center justify-center">
                <img className="h-32 md:h-44 lg:h-60" src={bangunIntroduction}></img>
              </div>
              <div className="col-span-1 md:col-span-2 text-2xl flex items-center justify-center">
                <div className="space-y-1 md:space-y-3 text-xs md:text-lg lg:text-2xl text-justify" dangerouslySetInnerHTML={{ __html: item.body }}>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <p className="text-sm md:text-lg lg:text-2xl text-justify md:text-center mt-10 mb-5 md:mt-12 lg:mt-16 md:mb-8 lg:mb-10">“<span className="font-bold">Penting banget</span> buat paham betul tentang investasi sebelum nekat terjun ke dalamnya.”</p>

      <Slider {...settings2} className="px-2">
        {introList2.map((item) => (
          <div className="p-2 md:p-4 mx-auto">
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-3 p-5 md:p-8 lg:p-10 lg:px-16 rounded-xl md:rounded-2xl shadow-md shadow-gold h-[20em] md:h-[15em] lg:h-[20em]"
            >
              <div className="col-span-1 flex items-center justify-center md:order-2">
                <img className="h-32 md:h-44 lg:h-60" src={bangunIntroduction}></img>
              </div>
              <div className="col-span-1 md:col-span-2 text-2xl flex items-center justify-center">
                <div className="space-y-1 md:space-y-3 text-xs md:text-lg lg:text-2xl text-justify" dangerouslySetInnerHTML={{ __html: item.body }}>
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
