import React, { Fragment, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/slider-project.css";

const carouselData = [
  {
    id: 1,
    title: "Melawan Inflasi",
    body: "Dengan investasi, uang kamu bisa terlindungi dari inflasi.",
  },
  {
    id: 2,
    title: "Tambahan Penghasilan",
    body: "Investasi bisa nambahin penghasilan kamu, tanpa harus kerja keras terus-menerus",
  },
  {
    id: 3,
    title: "Mencapai Tujuan Keuangan",
    body: "Investasi bisa bantu kamu cepet nyampein tujuan finansial, seperti beli rumah atau mobil",
  },
  {
    id: 4,
    title: "Kesehatan Mental yang Terjaga",
    body: "Kondisi finansial yang lebih baik bisa bikin pikiran kamu lebih tenang dan bahagia.",
  },
  {
    id: 5,
    title: "Modal yang Bisa Disesuaikan",
    body: " Banyak jenis investasi yang bisa sesuaiin dengan budget kamu.",
  },
  {
    id: 6,
    title: "Kebebasan Finansial",
    body: "Salah satu tujuan akhirnya adalah bisa hidup tanpa harus kerja keras lagi, gara-gara uangnya udah cukup untuk nge-cover semua kebutuhan hidup.",
  },
];

const styleCardTesti = {
  border: "5px solid #FFF",
};

const Introduction = () => {
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
    <Fragment>
    <div className="px-5 py-2 md:py-0 lg:pt-10 lg:pb-10 md:px-20 lg:px-32">
      <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold text-tera">
        Jadi, udah paham kan kenapa investasi itu penting?
      </h1>
      <h1 className="text-lg md:text-2xl lg:text-4xl  font-semibold text-tera">
        Kapan ya sebaiknya memulai investasi?{" "}
      </h1>
      <p className="text-sm md:text-lg lg:text-2xl mt-2">
        Jadi, udah paham kan kenapa investasi itu penting? Kapan ya sebaiknya
        memulai investasi?
      </p>
    </div>
    <div className="px-10 pb-14 md:px-20 md:pt-7 lg:pt-0 lg:px-32 lg:pb-20">
      <Slider {...settings} className="md:px-2">
        {carouselData.map((item) => (
          <div className="p-3 h-[11em] md:h-[14em] lg:h-[15em]">
            <div
              key={item.id}
              className="flex p-5 lg:p-10 relative border-2 border-white rounded-xl md:rounded-2xl lg:rounded-3xl h-full"
              style={styleCardTesti}
            >
              <div className="rounded-lg">
                <h3 className="text-sm md:text-xl lg:text-2xl font-semibold mb-2 text-center">
                  {item.title}
                </h3>
                <div className="relative text-sm md:text-lg lg:text-2xl text-justify">
                  {item.body}
                </div>
              </div>
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-full absolute -top-4 right-1/2 translate-x-5  bg-tera flex justify-center items-center text-white">
                {item.id}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
              </Fragment>
  );
};

export default Introduction;
