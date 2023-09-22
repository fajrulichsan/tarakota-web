import React from "react";
import { buttonPlayVideo, videoProfileImage } from "../../assets/img/index";

const ProfileVideo = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-12 relative py-6 md:py-32"
      style={{ marginTop: "-7px" }}
    >
      <div className="md:col-span-6 flex items-center md:col-start-2 px-5">
        <div
          className="w-full h-52 md:h-[25em] md:w-[40em]  rounded-2xl flex justify-center items-center hover:cursor-pointer"
          style={{ backgroundImage: `url(${videoProfileImage})`, backgroundSize: 'cover' }}
        >
          <img src={buttonPlayVideo} alt="Play Video" />
        </div>
      </div>

      <div className="md:col-span-3 md:col-start-9 row-start-1 items-center md:flex order-1 md:order-none">
        <div className="text-center md:text-left py-2">
          <h1 className="text-xl md:text-4xl font-bold tracking-wider md:mb-4">TARAKOTA</h1>
          <hr className="border-2 w-10 mx-auto border-orange-500 md:hidden"></hr>
          <div className="h-6 md:border-l-4 border-orange-500 flex items-center">
            <p className="font-medium text-sm md:text-3xl flex-grow px-2">Profile Video</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileVideo;

