import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-reveal";
import "./css/slider-project.css";

const TrikBisnis = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Define currentSlide state

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

  const tipsList = [
    {
      id: 1,
      title: "BisnisTarakota Blueprint",
      body: "Ini adalah panduan lengkap dalam program Representatif BisnisTarakota yang akan membimbing kamu langkah demi langkah dalam membangun bisnis arsitekturmu sendiri. Mulai dari perencanaan bisnis hingga eksekusi, semuanya ada di sini.",
    },
    {
      id: 2,
      title: "BisnisTarakota Fellowship",
      body: "Kamu akan menjadi bagian dari aliansi eksklusif di dalam komunitas BisnisTarakota. Di sini, kamu akan menjalin koneksi dengan rekan-rekan bisnis yang memiliki visi dan misi yang sama. Bersama-sama, kita bisa bergerak lebih cepat menuju kesuksesan.",
    },
    {
      id: 3,
      title: "BisnisTarakota e-Boost",
      body: "Program ini adalah solusi pintar dalam era digital. Kamu akan mendapatkan akses ke berbagai alat online canggih untuk mempercepat promosi dan dukungan bisnismu. Dengan e-Boost, bisnismu akan terasa lebih mudah dan efisien.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrow: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: (dots) => (
      <ul style={{ margin: `${isMobile ? "-20px" : "-20px"} 0` }}>
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
          slidesToShow: 2, // Number of slides to show on larger tablets
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-5 py-5 lg:py-10 md:px-20 lg:px-32">
      <Fade bottom>
        <h1 className="text-tera text-lg md:text-2xl lg:text-4xl text-center font-bold py-3 md:py-12">
          3 Trik Keren Buat Jadi Representatif BisnisTarakota yang Sukses!
        </h1>
      </Fade>
      <Fade bottom>
        <Slider {...settings} className="mx-5">
          {tipsList.map((data) => (
            <div key={data.id} className="px-3">
              <div
                className="text-white p-5 rounded-3xl space-y-3 h-[15em] lg:h-[21em]"
                style={{
                  border: "6px solid #FFF",
                  background: "#1B1B1B",
                  boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.08)",
                  // height: "100%",
                  overflow: "auto",
                }}
              >
                <h1 className="text-lg md:text-xl lg:text-2xl text-center">
                  {data.title}
                </h1>
                <hr className="w-32 mx-auto "></hr>
                <p className="text-sm md:text-md lg:text-lg text-justify">
                  {data.body}
                </p>{" "}
              </div>
            </div>
          ))}
        </Slider>
      </Fade>
    </div>
  );
};

export default TrikBisnis;
