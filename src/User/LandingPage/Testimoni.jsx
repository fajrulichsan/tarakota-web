import React, { useState, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/slider-project.css";

import { profileTestimoni, iconTestimoni } from "../../assets/img/index";

const testimoniList = [
    {
      id: 1,
      title: 'George Abraham',
      content: 'Armada menggunakan interior dan fasilitas premium yang dapat membuat perjalanan Anda lebih nyaman.',
    },
    {
      id: 2,
      title: 'George Abraham',
      content: 'Armada menggunakan interior dan fasilitas premium yang dapat membuat perjalanan Anda lebih nyaman.',
    },
    {
      id: 3,
      title: 'Item 3',
      content: 'Armada menggunakan interior dan fasilitas premium yang dapat membuat perjalanan Anda lebih nyaman.',
    
    },
    {
      id: 4,
      title: 'George Abraham',
      content: 'Armada menggunakan interior dan fasilitas premium yang dapat membuat perjalanan Anda lebih nyaman.',
    },
    {
      id: 5,
      title: 'George Abraham',
      content: 'Armada menggunakan interior dan fasilitas premium yang dapat membuat perjalanan Anda lebih nyaman.',
    },
    {
      id: 6,
      title: 'Item 3',
      content: 'Armada menggunakan interior dan fasilitas premium yang dapat membuat perjalanan Anda lebih nyaman.',
    
    },

  ];

  const styleCardTesti = {
  border: '5px solid #FFF',
  background: '#F9F5EC',
  boxShadow: '0px 4px 25px 0px rgba(0, 0, 0, 0.08)',
};

const Testimoni = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 680);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const widthDot = isMobile ? "10px" : "10px";

  const settings = {
    dots: true,
    infinite: true,
    arrow: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: (dots) => (
      <ul style={{ margin: `${isMobile ? "-20px" : "-30px"} 0` }}>
        {dots.map((dot, index) => (
          <li
            key={index}
            style={{ display: "inline-block", marginRight: isMobile ? "-8px" : "-5px"  }}
          >
            {dot}
          </li>
        ))}
      </ul>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: widthDot,
          height: widthDot,
          background: currentSlide === i ? "#D4B754" : "transparent",
          border:
            currentSlide === i ? "2px solid #BABABA" : "2px solid #BABABA",
          borderRadius: "50%",
          marginTop: "-10px",
          transition: "background-color 0.3s ease",
        }}
        className="custom-dot"
      ></div>
    ),
    prevArrow: (
      <div className="slick-arrow custom-prev-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 10 22"
          fill="none"
          stroke="white" 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l-6-6 6-6" />
        </svg>
      </div>
    ),
    nextArrow: (
      <div className="slick-arrow custom-prev-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 18 22"
          fill="none"
          stroke="white" 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    ),
    responsive: [
      {
        breakpoint: 680, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="project-slider px-10 md:px-20 md:mb-20 lg:px-32 lg:mb-20">
    <div className="mt-8 mb-3 md:mt-0 md:mb-8 lg:my-8">
        <h2 className="text-lg md:text-xl xl:text-3xl font-bold text-center tracking-wider">Kata Mereka Tentang Tarakota</h2>
        <hr className="text-3xl w-20 md:w-32 mx-auto font-bold text-center border md:border-b-2 border-tera" />
      </div>
      <Slider {...settings} className="lg:mt-10">
        {testimoniList.map((item) => (
          <div key={item.id} className="p-2 md:px-4">
             <div className="md:p-7 p-5 space-x-6 flex rounded-xl" style={styleCardTesti}>
            <div className='w-20 h-20 md:w-32 md:h-32 rounded-full mx-auto' style={{ backgroundImage: `url(${profileTestimoni})`, backgroundSize: 'cover' }}></div>
            <div className='relative grow w-40'>
            <h3 className="text-xl font-semibold mb-2 md:text-center">{item.title}</h3>
            <p className='text-xs md:text-sm text-justify'>{item.content}</p>
            <img className='absolute w-4 h-4 -top-2 -right-2' src={iconTestimoni} alt="Testimoni Icon" />
            </div>
          </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimoni;
