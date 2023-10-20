import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/slider-project.css";

import { bgProjectSlider } from "../../assets/img/index";

const ProjectSlider = () => {
  const baseUrl = window.location.origin;
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

  const projects = [
    {
      id: 1,
      title: "INTERIOR",
    },
    {
      id: 2,
      title: "ARSITEKTUR",
    },
    {
      id: 3,
      title: "LANSEKAP",
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
            style={{ display: "inline-block", marginRight: isMobile ? "-5px" : "-5px" }}
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
    <div className="px-10 py-10 lg:py-16 md:px-20 lg:px-32">
      <h1 className="text-lg md:text-3xl lg:text-4xl font-bold text-center tracking-wider">Layanan Kami</h1>
      <hr className="w-24 mx-auto border md:border-2 border-tera md:mt-2"></hr>
      <Slider {...settings} className="mt-10">
        {projects.map((project) => (
          <div key={project.id} className="px-2 md:px-4">
            <div
              className="w-full relative h-[30em] bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${bgProjectSlider})`,
              }}
            >
              <div
                className="absolute inset-0 flex flex-col justify-center items-center"
                style={{
                  background:
                    "linear-gradient(0deg, #E85738 -22.21%, rgba(0, 0, 0, 0.00) 100%)",
                }}
              >
                <div className="text-white p-5">
                  <p className="text-xl font-bold tracking-widest md:text-4xl">{project.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <a href={`${baseUrl}/service`}>
      <div 
      className="w-fit px-10 hover:cursor-pointer py-1 mx-auto text-sm md:text-base mt-8 md:mt-10 lg:mt-8 text-md text-center text-white bg-tera rounded-full"
      >
        More
      </div>
      </a>
      
    </div>
  );
};

export default ProjectSlider;
