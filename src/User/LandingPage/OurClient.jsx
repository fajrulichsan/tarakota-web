import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {airMancur, ba, cnearc, dankos, enseval, fima, forsta, kalbe, kasual, komet, oneject, wook} from '../../assets/img/index'

const OurClient = () => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const brands = [airMancur, ba, cnearc, dankos, enseval, fima, forsta, kalbe, komet, kasual, oneject, wook];

  return (
    <div className="py-10">
        <div>
            <h2 className='text-3xl font-bold text-center tracking-wider'>Our Client</h2>
            <hr className=' mx-auto w-20 border-b-4 border-orange-500'></hr>
        </div>
      <Slider {...settings} className="pt-20">
        {brands.map((brand, index) => (
          <div key={index} className="slideitems-center flex justify-center">
            <img className='mx-auto'  src={brand} alt={`Brand ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurClient;
