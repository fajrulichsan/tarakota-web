import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  facebook,
  twitter,
  youtube,
  instagram,
  bgBannerSlider,
} from "../../assets/img/index";

const Banner = () => {
  const socialMediaIcon = [facebook, twitter, youtube, instagram];
  return (
    <div>
      <Slider>
        <div className="hover:cursor-pointer">
          <div
            className="h-[30em] relative"
            style={{
              backgroundImage: `url(${bgBannerSlider})`,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(40.4deg, #E85738 -4.92%, rgba(0, 0, 0, 0) 60.56%)",
              }}
            >
              <div
                className="h-full grid grid-cols-3 px-40 "
                style={{ zIndex: 1 }}
              >
                <h1
                  className="text-5xl col-span-2 flex items-center font-bold text-white tracking-widest"
                  style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                >
                  Cashflow Mengalir dari Program Representatif BisnisTarakota
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;