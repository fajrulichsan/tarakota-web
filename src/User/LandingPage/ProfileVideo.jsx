import React from "react";
import { bgVideoProfile } from "../../assets/img/index";

import Fade from 'react-reveal/Fade';

const ProfileVideo = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-12 relative mt-10 lg:mt-16 py-6 md:py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
      style={{backgroundImage : `url(${bgVideoProfile})` }}
    >
      <div className="md:col-span-7 lg:col-span-6 flex items-center md:col-start-2 lg:col-start-2 px-5">
        <Fade left>
        <div
          className="w-full h-52 md:h-[18em] lg:h-[25em] md:w-[40em]  rounded-2xl flex justify-center items-center hover:cursor-pointer"
        >
          <iframe className="rounded-xl md:rounded-2xl" width="100%" height="100%" src="https://www.youtube.com/embed/BxGmsjd94Wo?si=5yKCeXxm6lsMcR4v" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        </Fade>
      </div>

      <Fade right>
      <div className="hidden md:col-span-3 md:col-start-9 row-start-1 items-center md:flex order-1 md:order-none">
        <div className="text-center md:text-left md:py-2">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-wider md:mb-4">TARAKOTA</h1>
          <hr className="border-2 w-10 mx-auto border-orange-500 md:hidden"></hr>
          <div className="h-6 md:border-l-4 border-tera flex items-center">
            <p className="font-medium text-sm md:text-2xl lg:text-2xl flex-grow px-2">Profile Video</p>
          </div>
        </div>
      </div>
      </Fade>
      
    </div>
  );
};

export default ProfileVideo;

