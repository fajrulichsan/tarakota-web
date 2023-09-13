import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  const brands = [
    'https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg',
    'https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg',
    'https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg',
    'https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg',
    'https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg',
    'https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg',
    'https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg',
  ];

  return (
    <div className="py-16">
        <div>
            <h2 className='text-3xl font-bold text-center tracking-wider'>Our Client</h2>
            <hr className=' mx-auto w-20 border-b-4 border-orange-500'></hr>
        </div>
      <Slider {...settings} className="py-10">
        {brands.map((brand, index) => (
          <div key={index} className="slide">
            <img src={brand} alt={`Brand ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurClient;
