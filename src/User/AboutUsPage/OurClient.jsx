import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-reveal";

import { brandsList } from "../../data/Index";

const OurClient = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 680, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-8">
      <Fade bottom cascade>
        <div>
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center tracking-wider">
            Our Client
          </h2>
          <hr className="mx-auto w-28 border-b-2 md:border-b-2 border-tera"></hr>
        </div>
      </Fade>
      
      <Fade bottom>
        <Slider {...settings} className="pt-5 md:pt-12">
          {brandsList.map((brand, index) => (
            <div key={index} className="slideitems-center flex justify-center">
              <img className="mx-auto" src={brand} alt={`Brand ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </Fade>
    </div>
  );
};

export default OurClient;
