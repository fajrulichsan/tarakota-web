import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-reveal";

import { serviceBanner } from "../../assets/img/index";
import { dataServicePage } from "../../data/Index";
import { useState } from "react";


const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 10000,
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: (dots) => (
      <ul style={{ margin: "0" }}>
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
          marginTop: "-50px",
          transition: "background-color 0.3s ease",
        }}
        className="custom-dot"
      ></div>
    ),
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="hover:cursor-pointer">
          <div
            className="h-[40em] md:h-[30em] lg:h-[40em] relative bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${serviceBanner})`,
            }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(40.4deg, #E85738 -4.92%, rgba(0, 0, 0, 0) 60.56%)",
              }}
            >
              <Fade bottom>
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl text-center font-bold text-white tracking-widest"
                  style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                >
                  Kami Siap Melayani!
                </h1>
              </Fade>
              <div className="absolute flex space-x-2 md:space-x-3 p-2 md:p-3 lg:p-4 md:px-6 lg:px-10 rounded-l-full bottom-16 md:bottom-20 right-0 bg-gray-50">
                <Fade right>
                  {dataServicePage.sosialMedia.map((data) => (
                    <a href={data.link} target="_blank">
                      <img
                        key={data.id}
                        src={data.icon}
                        alt={`Social Media Icon ${data.id}`}
                        className="w-5 md:w-6"
                      />
                    </a>
                  ))}
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
