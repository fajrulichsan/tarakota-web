

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/slider-project.css"

import { bgProjectSlider, leftArrowBgTera } from "../../assets/img/index";

const ProjectSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Define currentSlide state

  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description for Project 1",
      image: bgProjectSlider,
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description for Project 2",
      image: bgProjectSlider,
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description for Project 3",
      image: bgProjectSlider,
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description for Project 4",
      image: bgProjectSlider,
    },
    {
      id: 5,
      title: "Project 5",
      description: "Description for Project 5",
      image: bgProjectSlider,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrow:false,
    speed: 500,
    slidesToShow: 3, // Display three slides at a time
    slidesToScroll: 1,
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
      <div
      className="slick-arrow custom-prev-arrow"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>
    </div>
    ),
    nextArrow: (
      <div
      className="slick-arrow custom-prev-arrow"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>
    </div>
    ),
  };

  return (
    <div className="project-slider px-20">
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="px-5">
            <div
              className="w-full h-[35em] bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${bgProjectSlider})`,
              }}
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;

