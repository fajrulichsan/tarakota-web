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
            className="h-[40em] md:h-[30em] lg:h-[40em] relative bg-center bg-cover bg-no-repeat"
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
            </div>
            <div className="absolute flex md:justify-end justify-center w-full bottom-0 md:bottom-16 lg:bottom-20">
                <div className="w-fit flex space-x-4 p-1.5 px-8 lg:p-3 lg:px-8 rounded-t-3xl md:rounded-l-full"
                style={{
                  // borderRadius: '30px 30px 0px 0px',
                  background: '#F9F5EC'
                }}
                >
                {socialMediaIcon.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`Social Media Icon ${index}`}
                    className="w-6"
                  />
                ))}
                </div>
            </div>
          </div>
        </div>

      </Slider>
    </div>
  );
};

export default Banner;
