import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import { facebook, twitter, youtube, instagram, bgBannerSlider } from "../../assets/img/index";

const Banner = () => {
  const socialMediaIcon = [
    facebook,
    twitter,
    youtube,
    instagram,
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
            className="h-[30em] md:h-[35em] lg:h-[40em] relative bg-cover bg-center bg-no-repeat"
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
                className="h-full px-5 md:px-40 flex flex-col items-center justify-center"
                style={{ zIndex: 1 }}
              >
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center text-white tracking-widest" style={{textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                PT. Wook Global Technology
                </h1>
                <p className="text-sm md:text-2xl lg:text-4xl text-white tracking-widest" style={{textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>Architecture Commercia</p>
              </div>
            </div>
          </div>
        </div>

      </Slider>
    </div>
  );
};

export default Banner;
