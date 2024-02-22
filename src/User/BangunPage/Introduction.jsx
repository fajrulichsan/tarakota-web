import React from "react";
import { img82 } from "../../assets/img/index";
import { Fade } from "react-reveal";

const Introduction = () => {
  return (
    <div className="grid grid-cols-2 px-5 md:px-20 lg:px-32 my-10 md:my-16 lg:my-24">
      <Fade bottom>
        <div className="col-span-1 flex justify-center items-center">
          <div className="w-32 h-32 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-cover bg-center rounded-full"
            style={{ backgroundImage: `url(${img82})` }}
          >
          </div>
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
