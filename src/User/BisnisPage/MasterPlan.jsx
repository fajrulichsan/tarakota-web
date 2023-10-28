import React from "react";
import { Fade } from "react-reveal";
import { bangunIntroduction } from "../../assets/img/index";

const MasterPlan = () => {
  return (
    <div className="px-5 md:px-20 lg:px-32 md:mb-5 lg:mb-10">
      <Fade bottom>
        <h1 className="text-lg md:text-2xl lg:text-4xl text-tera text-center font-bold py-3 md:py-14">
          Masterplan Keberhasilan Program BisnisTarakota
        </h1>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10">
        <Fade left>
          <div className="col-span-1">
            <p className="text-sm md:text-lg lg:text-2xl text-justify">
              “Oke, kita akan bahas rahasia kesuksesan kita sebagai
              Representatif BisnisTarakota.{" "}
              <span className="font-bold">
                Syarat utamanya, kamu harus join program BisnisTarakota lewat
                website withu.tarakota.com”
              </span>
            </p>
          </div>
        </Fade>
        <div className="col-span-1 flex justify-center">
          <Fade>
            <div
              className="w-32 h-40 md:w-56 md:h-60 lg:w-72 lg:h-80 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${bangunIntroduction})` }}
            ></div>
          </Fade>
        </div>
        <Fade right>
          <div className="col-span-1 flex flex-col justify-end">
            <p className="text-sm md:text-lg lg:text-2xl text-justify">
              Nah, kita punya <span className="font-bold">rahasia sukses</span>{" "}
              lengkap sebagai{" "}
              <span className="font-bold">Representatif BisnisTarakota.</span>{" "}
              Kita punya bimbingan offline dan online yang super canggih, kayak
              kamu yang lagi nemuin website ini sekarang
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default MasterPlan;
