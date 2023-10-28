import React from "react";
import { bangunIntroduction } from "../../assets/img/index";
import { Fade } from "react-reveal";

const Introduction = () => {
  return (
    <div className="grid grid-cols-2 px-5 md:px-20 lg:px-32 my-10 md:my-16 lg:my-24">
      <Fade bottom>
        <div className="col-span-1 flex justify-center items-center">
          <img className="w-40 md:w-60 lg:w-80" src={bangunIntroduction}></img>
        </div>
        <div className="col-span-1 flex items-center justify-start">
          <p className="text-justify md:text-right text-lg md:text-2xl lg:text-3xl">
            Oh ya, buat teman-teman mediator tanah, kita juga welcome banget
            buat kenalin pemilik tanah ke Tarakota!
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Introduction;
