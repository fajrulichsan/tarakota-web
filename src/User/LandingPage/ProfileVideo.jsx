import React from "react";
import buttonPlayVideo from "../../assets/img/button-play-video.svg";
import videoProfileImage from "../../assets/img/video-profile-image.svg";

const ProfileVideo = () => {
  return (
    <div className="grid grid-cols-4 mt-20 relative">
      <div
        className=" col-span-1 h-[35em]"
        style={{ background: "#E85738" }}
      ></div>
      <div className="col-span-2"></div>
      <div className="absolute top-20 left-60 flex space-x-20 items-center">
        <div
          className="w-[40em] h-[25em] rounded-2xl flex justify-center items-center  hover:cursor-pointer"
          style={{ backgroundImage: `url(${videoProfileImage})` }}
        >
          <img src={buttonPlayVideo} />
        </div>
        <div className="space-y-3">
          <h1 className="text-5xl font-bold tracking-wider">Tarakota</h1>
          <div className="h-6 border-l-4 border-orange-500 flex items-center">
            <p className="font-medium text-3xl flex-grow px-2">Profile Video</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileVideo;
