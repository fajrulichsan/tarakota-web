import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderBanner = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Kecepatan transisi
    autoplay: true, // Otomatis berputar
    autoplaySpeed: 3000, // Waktu antara setiap slide dalam milidetik (3000ms = 3 detik)
    beforeChange: (current, next) => setCurrentSlide(next), // Mengupdate state currentSlide
    appendDots: (dots) => (
      <ul style={{ margin: "0" }}>
        {dots.map((dot, index) => (
          <li key={index} style={{ display: "inline-block", marginRight: "5px" }}>
            {dot}
          </li>
        ))}
      </ul>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px", 
          background: currentSlide === i ? "#333" : "transparent", 
          border: currentSlide === i ? "2px solid #333" : "2px solid black", 
          borderRadius: "50%",
          marginTop: "-20px",
          transition: "background-color 0.3s ease",
        }}
        className="custom-dot"
      ></div>
    ),
  };

  return (
    <div>
      <Slider {...settings}>
        <div className='bg-red-200 h-60 hover:cursor-pointer'>
          <h3>Slide 1</h3>
        </div>
        <div className='bg-green-200 h-60 hover:cursor-pointer'>
          <h3>Slide 2</h3>
        </div>
        <div className='bg-blue-200 h-60 hover:cursor-pointer'>
          <h3>Slide 3</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SliderBanner;


