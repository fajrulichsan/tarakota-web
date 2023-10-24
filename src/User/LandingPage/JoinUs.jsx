import React, { useEffect, useRef } from "react";
import { Fade } from "react-reveal";
import bgJoinUs from "../../assets/img/bg-join.svg";

const JoinUs = () => {
  return (
    <div
      className="bg-cover bg-center h-[20em] md:h-[30em] lg:h-[40em] my-10"
      style={{
        backgroundImage: `url(${bgJoinUs})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gradient-to-r grid grid-cols-6 md:grid-cols-12 place-items-center from-black via-transparent h-full space-y-3 text-white px-5 md:px-32 lg:px-20">
        <div className="md:col-span-6 col-span-4">
          <Fade bottom cascade>
          <div className=" text-xl md:text-5xl lg:text-6xl font-bold tracking-widest">
            #MENATABERSAMA
          </div>
          <div className="text-xl md:text-5xl font-bold text-tera tracking-widest">
            TARAKOTA
          </div>
          <div className="text-sm md:text-xl lg:text-2xl md:w-80 font-medium tracking-wide">
            Kami bertujuan untuk menjadi Firma Arsitektur dan Manufaktur
            Furnitur terbesar di Indonesia.
          </div>
          <button className="md:w-40 w-32 py-1  md:py-2 text-xs md:text-base bg-tera text-white rounded-full font-normal hover:bg-orange-800 transition duration-300 tracking-wider mt-5 md:mt-10">
            PESAN SEKARANG
          </button>
          </Fade>
          
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
