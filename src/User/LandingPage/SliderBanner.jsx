import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/slider-project.css";

import {
  facebook,
  twitter,
  youtube,
  instagram,
  landingBanner1,
  landingBanner2,
  landingBanner3,
  landingBanner4,
  linekdin,
  whatsapp,
} from "../../assets/img/index";

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
    id : 1,
    icon : whatsapp,
    link : "https://api.whatsapp.com/send?phone=6285280061520",
  },
  {
    id : 2,
    icon : instagram,
    link : "https://instagram.com/tarakota.id",
  },
  {
    id : 3,
    icon : youtube,
    link : "https://www.youtube.com/@tataruangkota",
  },
  {
    id : 4,
    icon : facebook,
    link : "https://www.facebook.com/tarakota.id?mibextid=LQQJ4d",
  },
  {
    id : 5,
    icon : linekdin,
    link : "https://www.linkedin.com/company/tarakota/",
  }
]

const SliderBanner = () => {
  const socialMediaIcon = [whatsapp, instagram, youtube, facebook, linekdin];
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Cek lebar layar untuk menentukan mode mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 680); // Atur breakpoint sesuai kebutuhan
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const widthDot = isMobile ? "10px" : "10px";

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 10000,
    paddingLeft: 10,
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: (dots) => (
      <ul style={{ margin: "0" }}>
        {dots.map((dot, index) => (
          <li
            key={index}
            style={{
              display: "inline-block",
              marginRight: isMobile ? "-5px" : "-5px",
            }}
          >
            {dot}
          </li>
        ))}
      </ul>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: widthDot,
          height: widthDot,
          background: currentSlide === i ? "#D4B754" : "transparent",
          border:
            currentSlide === i ? "2px solid #BABABA" : "2px solid #BABABA",
          borderRadius: "50%",
          marginTop: "-50px",
          transition: "background-color 0.3s ease",
        }}
        className="custom-dot"
      ></div>
    ),
    // prevArrow: (
    //   <div className="slick-arrow custom-prev-arrow ">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="24"
    //       height="24"
    //       viewBox="0 0 10 22"
    //       fill="none"
    //       stroke="white" // Ganti warna menjadi putih
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     >
    //       <path d="M9 18l-6-6 6-6" />
    //     </svg>
    //   </div>
    // ),
    // nextArrow: (
    //   <div className="slick-arrow custom-prev-arrow" >
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="24"
    //       height="24"
    //       viewBox="0 0 18 22"
    //       fill="none"
    //       stroke="white" // Ganti warna menjadi putih
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     >
    //       <path d="M9 18l6-6-6-6" />
    //     </svg>
    //   </div>
    // ),
  };

  return (
    <div>
      <Slider {...settings} arrows={false}>
        {bannerContentList.map((data) => (
          <div key={data.id} className="hover:cursor-grab">
            <div
              className="h-[40em] relative bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${data.bgImage})`,
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(40.4deg, #E85738 -4.92%, rgba(0, 0, 0, 0) 60.56%)",
                }}
              >
                <div
                  className="h-full md:w-10/12 lg:w-2/3 px-5 md:px-20 lg:px-32 space-y-10 md:space-y-16 lg:space-y-20 flex flex-col justify-center items-center"
                  style={{ zIndex: 1 }}
                >
                  <div className="w-full flex space-x-6 text-left">
                    <p className="text-md md:text-2xl text-white font-medium">
                      Arsitektur Komersial
                    </p>
                    <p className="text-md md:text-2xl text-white font-medium">
                      Arsitektur Residensial
                    </p>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold lg:text-6xl text-white tracking-wide">
                    {data.title}
                  </h1>
                </div>
                <div className="absolute flex space-x-2 md:space-x-3 p-2 md:p-3 lg:p-4 md:px-6 lg:px-10 rounded-l-full bottom-16 md:bottom-20 right-0 bg-gray-50">
                  {sosialMedia.map((data) => (
                    <a href={data.link} target="_blank">
                      <img
                        key={data.id}
                        src={data.icon}
                        alt={`Social Media Icon ${data.id}`}
                        className="w-5 md:w-6"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderBanner;
