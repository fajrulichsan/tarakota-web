
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/slider-project.css";

const carouselData = [
  {
    id: 1,
    title: "Pelatihan Awal yang Gak Bikin Bosen",
    content: [
      "Kita akan bantu kamu bangun pondasi kuat dengan mengenalin kamu sama seluk-beluk dunia arsitektur.",
      "Dan tentu saja, nggak lupa kita bahas juga etika yang penting banget buat sukses di industri ini",
    ],
  },
  {
    id: 2,
    title: "Terus Maju Bersama",
    content: [
      "Kamu akan terus belajar bareng kita. Kita akan ajari kamu cara berkomunikasi yang oke, negosiasi yang jitu, dan gimana caranya membangun hubungan yang asyik sama klien.",
      "Kamu juga bakal jago dalam manajemen proyek arsitektur dan ngerti betul aturan-aturannya.",
    ],
  },
  {
    id: 3,
    title: "Pelatihan Awal yang Gak Bikin Bosen",
    content: [
      "Kita akan bantu kamu bangun pondasi kuat dengan mengenalin kamu sama seluk-beluk dunia arsitektur.",
      "Dan tentu saja, nggak lupa kita bahas juga etika yang penting banget buat sukses di industri ini",
    ],
  },
  {
    id: 4,
    title: "Terus Maju Bersama",
    content: [
      "Kamu akan terus belajar bareng kita. Kita akan ajari kamu cara berkomunikasi yang oke, negosiasi yang jitu, dan gimana caranya membangun hubungan yang asyik sama klien.",
      "Kamu juga bakal jago dalam manajemen proyek arsitektur dan ngerti betul aturan-aturannya.",
    ],
  },
];

const styleCardTesti = {
  border: "5px solid #FFF",
  // boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.08)",
};

const ProjectSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Define currentSlide state

  
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
      <ul style={{ margin: "-20px 0" }}>
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
          stroke="white" // Ganti warna menjadi putih
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
          stroke="white" // Ganti warna menjadi putih
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
        breakpoint: 680, // Adjust this breakpoint as needed for mobile devices
        settings: {
          slidesToShow: 1, // Number of slides to show on mobile devices
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023, // Adjust this breakpoint as needed for larger tablets
        settings: {
          slidesToShow: 2, // Number of slides to show on larger tablets
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-10 py-5 lg:py-16 md:px-20 lg:px-32">
      <Slider {...settings} className="">
        {carouselData.map((item) => (
          <div className="p-3 h-[18em] md:h-[23em] lg:h-[18em]">
              <div
                  key={item.id}
                  className="flex p-5 lg:p-10 relative border-2 border-white rounded-2xl md:rounded-3xl h-full"
                  style={styleCardTesti}
                >
                  <div className="rounded-lg">
                    <h3 className="test-md md:text-xl lg:text-2xl font-semibold mb-2 text-center">
                      {item.title}
                    </h3>
                    <div className="relative text-xl text-justify">
                      <ul className="list-disc px-3">
                        {item.content.map((data) => (
                          <li className="text-sm md:text-lg lg:text-xl">{data}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full absolute -top-4 right-1/2 translate-x-5  bg-tera flex justify-center items-center text-white">
                    {item.id}
                  </div>
                </div>
          </div>
              
              ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;


