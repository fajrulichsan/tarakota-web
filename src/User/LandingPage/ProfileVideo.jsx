import React from "react";
import bgJoinUs from '../../assets/img/bg-join.svg';
const ProfileVideo = () => {
  return (
    <div className="w-[370px] h-[76.05px] text-21xl text-black bg-white">
      <b className="inline-block w-[370px]">TARAKOTA</b>
      <img
        className="w-1 h-[28.05px] mt-2"
        alt=""
        src={bgJoinUs}
      />
      <div className="text-5xl text-justify inline-block w-[163.75px] h-[18px] transform rotate-0.99 transform-origin-0-0">
        Profile Video
      </div>
    </div>
  );
};

export default ProfileVideo;
