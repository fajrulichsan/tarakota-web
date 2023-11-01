import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Fade from "react-reveal/Fade";
import { dataLandingPage } from "../../data/Index";

const OurClient = () => {
  const settings = {
    slidesToShow: 5, // Jumlah slide yang ditampilkan secara default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    // focusOnSelect: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1023, // Breakpoint untuk tablet dan perangkat dengan lebar layar yang lebih kecil
        settings: {
          slidesToShow: 3, // Mengubah jumlah slide untuk tablet
        },
      },
      {
        breakpoint: 680, // Breakpoint untuk perangkat mobile
        settings: {
          slidesToShow: 1, // Mengubah jumlah slide untuk perangkat mobile
        },
      },
    ],
  };

  return (
    <div className="pt-16 md:pb-20">
      <div>
        <Fade bottom>
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center tracking-wider">
            Our Client
          </h2>
          <hr className="mx-auto w-20 border-b-2 md:border-b-2 border-tera"></hr>
        </Fade>
      </div>
      <Fade bottom>
        <Slider {...settings} className="pt-5 md:pt-12">
          {dataLandingPage.OurClient.map((brand, index) => (
            <div key={index} className="slideitems-center flex justify-center ">
              <img className="mx-auto" src={brand} alt={`Brand ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </Fade>
    </div>
  );
};

export default OurClient;
