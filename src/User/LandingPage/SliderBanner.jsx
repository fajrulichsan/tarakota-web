import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import { facebook, twitter, youtube, instagram, bgBannerSlider, linekdin, whatsapp } from "../../assets/img/index";

const SliderBanner = () => {
  const socialMediaIcon = [
    whatsapp,
    instagram,
    twitter,
    youtube,
    facebook,
    linekdin,
  ];
  const [currentSlide, setCurrentSlide] = React.useState(0);

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
            className="h-[40em] relative bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${bgBannerSlider})`,
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
                className="h-full md:w-2/3 px-5 md:px-40 space-y-20 flex flex-col justify-center items-center"
                style={{ zIndex: 1 }}
              >
                <div className="w-full text-left">
                <p className="text-sm text-white font-medium">Arsitektur Komersial</p>
                <p className="text-sm text-white font-medium">Arsitektur Residensial</p>
                </div>
                
                <h1 className="text-4xl font-bold md:text-6xl text-white tracking-wide">
                  The Best Modern Classic Interior Design Consultant
                </h1>
              </div>
              <div className="absolute flex space-x-2 md:space-x-3 p-2 md:p-4 md:px-10 rounded-l-full bottom-16 md:bottom-20 right-0 bg-gray-50">
                {socialMediaIcon.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`Social Media Icon ${index}`}
                    className="w-5 md:w-6"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* image slider 2 */}
        <div className="hover:cursor-pointer">
          <div
            className="h-[40em] relative"
            style={{
              backgroundImage: `url(${bgBannerSlider})`,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(40.4deg, #E85738 -4.92%, rgba(0, 0, 0, 0) 60.56%)",
              }}
            ></div>
            <div className="h-full flex items-center justify-center">
              {/* Konten slide di sini */}
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderBanner;
