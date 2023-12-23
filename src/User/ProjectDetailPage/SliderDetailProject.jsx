import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Fade } from "react-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/slider-project.css";

import { projects } from "../../data/Index";
import { bgProjectSlider, leftArrowBgTera } from "../../assets/img/index";

const SliderDetailProject = () => {
  const {id} = useParams();
  const [currentSlide, setCurrentSlide] = useState(0); // Define currentSlide state

  const imageProject = projects.find((item) => item.id == parseInt(id)).image
  // const projects = [
  //   {
  //     id: 1,
  //     title: "Project 1",
  //     description: "Description for Project 1",
  //     image: bgProjectSlider,
  //   },
  //   {
  //     id: 2,
  //     title: "Project 2",
  //     description: "Description for Project 2",
  //     image: bgProjectSlider,
  //   },
  //   {
  //     id: 3,
  //     title: "Project 3",
  //     description: "Description for Project 3",
  //     image: bgProjectSlider,
  //   }
  // ];

  const settings = {
    dots: true,
    infinite: true,
    arrow: false,
    speed: 1000,
    slidesToShow: 3,
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
    <div className="project-slider px-10 md:px-20 lg:px-32 my-10">
      <Fade bottom>

      <Slider {...settings}>
        {imageProject.map((project, index) => (
          <div key={index} className="px-2 md:px-4 rounded-lg">
            <div
              className="w-full rounded-lg relative h-[30em] bg-center bg-cover bg-no-repeat hover:cursor-pointer"
              style={{
                backgroundImage: `url(${project})`,
              }}
            >
            </div>
          </div>
        ))}
      </Slider>
      </Fade>

    </div>
  );
};

export default SliderDetailProject;
