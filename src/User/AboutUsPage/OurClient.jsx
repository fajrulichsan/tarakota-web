import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { airMancur, ba, cnearc, dankos, enseval, fima, forsta, kalbe, komet, kasual, oneject, wook } from '../../assets/img/index';

const OurClient = () => {
  const settings = {
    slidesToShow: 5, // Jumlah slide yang ditampilkan secara default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
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

  const brands = [airMancur, ba, cnearc, dankos, enseval, fima, forsta, kalbe, komet, kasual, oneject, wook];

  return (
    <div className="py-8">
      <div >
        <h2 className='text-xl md:text-2xl lg:text-4xl font-bold text-center tracking-wider'>Our Client</h2>
        <hr className='mx-auto w-28 border-b-2 md:border-b-2 border-tera'></hr>
      </div>
      <Slider {...settings} className="pt-5 md:pt-12">
        {brands.map((brand, index) => (
          <div key={index} className="slideitems-center flex justify-center">
            <img className='mx-auto' src={brand} alt={`Brand ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurClient;

