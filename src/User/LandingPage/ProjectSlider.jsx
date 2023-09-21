import React, { Fragment } from "react";
import './css/slider.css'

const ProjectSlider = () => {
  return (
    <div className="slider-container h-[30em]">
      <span className="arrow-left"></span>
      <span className="arrow-right"></span>
      <div className="slider" id="slider">
        <div className="slide prev-2">1</div>
        <div className="slide prev-1">2</div>
        <div className="slide active">3</div>
        <div className="slide next-1">4</div>
        <div className="slide next-2">5</div>
        {/* <div className="slide">6</div>
        <div className="slide">7</div>
        <div className="slide">8</div> */}
      </div>
      <div className="dots">
        <span></span>
        <span></span>
        <span className="active"></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default ProjectSlider;
