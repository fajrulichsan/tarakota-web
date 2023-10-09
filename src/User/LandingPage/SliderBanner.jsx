import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  facebook,
  twitter,
  youtube,
  instagram,
  bgBannerSlider,
  linekdin,
  whatsapp,
} from "../../assets/img/index";

const bannerContentList = [
  {
    id: 1,
    title: "Pelayanan Konsultasi Desain Modern dan Klasik Terbaik.",
    bgImage: bgBannerSlider,
  },
  {
    id: 2,
    title: "Hadir dengan Berbagai Program Bisnis yang Menjanjikan!",
    bgImage: bgBannerSlider,
  },
  {
    id: 3,
    title: "Terpecaya Melayani Custumer dengan Sangat Baik.!",
    bgImage: bgBannerSlider,
  },
];

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
        ))}
      </Slider>
    </div>
  );
};

export default SliderBanner;
