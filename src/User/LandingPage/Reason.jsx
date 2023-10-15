import React, { useState } from "react";
import { reasonImage } from "../../assets/img/index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/slider-project.css";

const reasonList = [
  {
    id: 1,
    title: "Berpengalaman",
    content:
      "Memiliki pengalaman lebih dari 5 tahun dalam pengembangan bisnis, dan kami terus berupaya mencapai keunggulan dalam segala hal yang kami lakukan.",
  },
  {
    id: 2,
    title: "Tim Arsitek dan Insinyur Terpecaya",
    content:
      "Bekerja tanpa kenal lelah untuk memastikan bahwa setiap proyek yang kami lakukan dilaksanakan dengan sangat presisi dan perhatian terhadap detail.",
  }
];

const styleCardTesti = {
  border: "4px solid #E85738",
  background: "#F9F5EC",
  boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.08)",
};

const Reason = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
          slidesToShow: 1, // Number of slides to show on larger tablets
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto">
      <div className="mx-auto grid grid-cols-12 lg:grid-cols-4 relative px-5 md:px-20 lg:px-32 py-1 md:py-6 lg:py-10 ">
        <div className="col-span-12 mb-4 md:mb-10 lg:mb-20">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-center tracking-wider">
            Kenapa Harus Memilih "Tarakota" ?
          </h2>
          <hr className="text-3xl w-40 mx-auto font-bold text-center border-b-2 md:border-b-4 border-tera"></hr>
        </div>
        <div
          className="col-span-12 md:col-span-4 lg:col-span-1 h-[12em] md:h-full bg-cover bg-center bg-no-repeat shadow-md md:shadow-lg shadow-gold md:shadow-gold "
          style={{
            backgroundImage: `url(${reasonImage})`,
          }}
        ></div>
        <div className="col-span-12 md:col-span-8 lg:col-span-3 px-5 md:px-16 lg:px-8 lg:p-10">
          <Slider {...settings} className="">
            {reasonList.map((item) => (
              <div className="p-5 mt-5 md:mt-0">
                <div className="rounded-xl md:rounded-2xl p-5 h-[12em]" 
                style={styleCardTesti}>
                  <h3 className="text-md lg:text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <hr className="border md:border-2 border-tera w-20 md:w-32 -mt-1"></hr>
                  <div className="relative text-md lg:text-md w-auto text-justify mt-1">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reason;
