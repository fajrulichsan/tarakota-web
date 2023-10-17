
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/slider-project.css";
import { bisnisIntro1 } from "../../assets/img";

const Introduction = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Cek lebar layar untuk menentukan mode mobile
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 680); // Atur breakpoint sesuai kebutuhan
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  const width = isMobile ? "10px" : "15px";

  const tipsList = [
    {
      id: 1,
      body : `<p>Kamu pengen banget ngejar pendapatan besar biar semua impianmu bisa tercapai dalam bisnis arsitektur, dan bebas dari masalah ekonomi, bahkan ketika risiko datang dan duit nggak lagi jadi masalah? </p>
      <p style="color: #E85738">Nah, saatnya kamu kenalan dengan tips sukses mengikuti <span style="font-weight:600">program Representatif BisnisTarakota!</span></p>`
    },
    {
      id: 2,
      body: `<p>Mungkin juga, kamu mau dapetin fasilitas arsitektur keren seperti beli tanah, bangun rumah, dan desain interior, semuanya dibayarin pake komisi <span style="font-weight:600"> program Representatif BisnisTarakota.</span></p>`
    },
    {
      id: 3,
      body: "Ingat, jangan salah pilih ya, karena cuma di tempat kita, kamu bakal dapetin fasilitas dan keuntungan paling canggih dari program Representatif BisnisTarakota.",
    },
  ];

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
            style={{ display: "inline-block", marginRight: isMobile ? "-8px" : "5px" }}
          >
            {dot}
          </li>
        ))}
      </ul>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: width,
          height: width,
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
      <Slider {...settings} className="mx-5">
        {tipsList.map((data) => (
          <div key={data.id} className="px-3">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-5 md:my-7 md:gap-x-10">
              <div className="col-span-1 md:col-span-1 lg:col-span-1 ">
                <div
                  className="w-full h-60 lg:h-80  rounded-2xl bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${bisnisIntro1})` }}
                ></div>
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-center justify-center text-sm md:text-lg lg:text-2xl text-justify" dangerouslySetInnerHTML={{ __html: data.body }}>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Introduction;
