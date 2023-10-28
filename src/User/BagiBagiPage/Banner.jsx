import React from "react";
import { Fade } from "react-reveal";

const Banner = () => {
  return (
    <div className="px-5 pt-20 md:px-20 lg:px-32 md:pt-24 md:pb-7 lg:pt-28 lg:pb-0">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-1 md:col-span-12 md:col-start-1">
          <div
            className="rounded-2xl md:rounded-3xl p-5 drop-shadow-lg"
            style={{
              border: "3px solid #F8F3ED",
              background: "#E85738",
            }}
          >
            <Fade bottom>
              <p className="text-center text-xl md:text-2xl lg:text-4xl font-medium text-white">
                Mau Jadi Bagian dari Aksi Investasi Tarakota? Yuk, Gampang
                Banget!
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
