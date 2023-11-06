import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/slider-project.css";
import { Fade } from "react-reveal";

import { dataBagiBagiPage } from "../../data/Index";
import { bangunIntroduction } from "../../assets/img/index";


const styleCardTesti = {
  border: "5px solid #FFF",
};

const Introduction = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);

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
      <ul style={{ margin: `${isMobile ? "-20px" : "-20px"} -20px` }}>
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
      <ul style={{ margin: `${isMobile ? "-20px" : "-20px"} -20px` }}>
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
      <Fade bottom>
        <Slider {...settings1} className="px-2">
          {dataBagiBagiPage.introList.map((item) => (
            <div className="p-2 md:p-4 mx-auto">
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-3 p-5 md:p-8 lg:p-10 lg:px-16 rounded-xl md:rounded-2xl shadow-md shadow-gold h-[20em] md:h-[15em] lg:h-[20em]"
              >
                <div className="col-span-1 flex items-center justify-center">
                  <img
                    className="h-32 md:h-44 lg:h-60"
                    src={bangunIntroduction}
                  ></img>
                </div>
                <div className="col-span-1 md:col-span-2 text-2xl flex items-center justify-center">
                  <div
                    className="space-y-1 md:space-y-3 text-xs md:text-lg lg:text-2xl text-justify"
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Fade>
      <Fade bottom>
        <p className="text-sm md:text-lg lg:text-3xl text-justify md:text-center mt-10 mb-5 md:mt-12 lg:mt-16 md:mb-8 lg:mb-10">
          “<span className="font-bold">Penting banget</span> buat paham betul
          tentang investasi sebelum nekat terjun ke dalamnya.”
        </p>
      </Fade>

      <Fade bottom>
        <Slider {...settings2} className="px-2">
          {dataBagiBagiPage.introList2.map((item) => (
            <div className="p-2 md:p-4 mx-auto">
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-3 p-5 md:p-8 lg:p-10 lg:px-16 rounded-xl md:rounded-2xl shadow-md shadow-gold h-[20em] md:h-[15em] lg:h-[20em]"
              >
                <div className="col-span-1 flex items-center justify-center md:order-2">
                  <img
                    className="h-32 md:h-44 lg:h-60"
                    src={bangunIntroduction}
                  ></img>
                </div>
                <div className="col-span-1 md:col-span-2 text-2xl flex items-center justify-center">
                  <div
                    className="space-y-1 md:space-y-3 text-xs md:text-lg lg:text-2xl text-justify"
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Fade>
    </div>
  );
};

export default Introduction;
