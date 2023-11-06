import React from "react";
import {Fade} from 'react-reveal'
import {dataAboutUsPage} from '../../data/Index'


const OurTeam = () => {
  return (
    <div className="my-8 md:my-12 lg:my-20 md:px-20 lg:px-32 ">
      <Fade bottom cascade>
      <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-bold tracking-widest">
        Tim Kami
      </h1>
      <hr className="w-20 lg:w-28 border lg:border-2 border-tera mx-auto"></hr>
      </Fade>
      <div
        className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-11 gap-5 md:gap-2 mt-5 md:mt-6 lg:mt-10
      shadow-lg shadow-gold mx-5 rounded-2xl p-10 md:p-2 md:mx-0 "
      >
        <Fade right cascade>
        {dataAboutUsPage.ourTeamList.map((data) => (
          <div
            className={`col-span-4 lg:col-span-3 md:py-5 lg:py-10 flex justify-center ${
              data.id === 1 ? "lg:col-start-2" : ""
            } `}
          >
            <div className="flex flex-col items-center space-y-3">
              <div
                className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 relative bg-[#E85738] rounded-full bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${data.image})`,
                  backgroundPositionY: "15px",
                }}
              ></div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-semibold md:text-md lg:text-2xl text-center">
                  {data.name}
                </p>
                <p className="font-normal md:text-md lg:text-xl">
                  {data.position}
                </p>
              </div>
            </div>
          </div>
        ))}
        </Fade>
      </div>
    </div>
  );
};

export default OurTeam;
