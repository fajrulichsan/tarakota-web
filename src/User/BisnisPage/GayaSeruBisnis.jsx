import React from "react";
import { Fade } from "react-reveal";
import { bgVisiMisiAboutUs, img102 } from "../../assets/img/index";

const GayaSeruBisnis = () => {
  return (
    <div className="px-5 py-10 md:px-20 lg:px-32 md:py-20">
      <div className="grid grid-cols-2 md:grid-cols-3 space-x-3 md:space-x-6 lg:space-x-10">
        <Fade left>
          <div className="col-span-1 md:col-span-2 flex items-center">
            <div className="lg:w-11/12">
              <p className="text-lg md:text-2xl lg:text-4xl text-tera font-bold">
                Gaya Seru Jadi Representatif BisnisTarakota yang Sukses!
              </p>
              <p className="text-sm md:text-lg lg:text-2xl mt-1 md:mt-3 lg:mt-5 text-justify">
                Supaya bisa dapetin penghasilan tiap bulan yang terus naik, kamu
                harus komitmen jadi Representatif BisnisTarakota yang sukses.
                Caranya gampang, tinggal ikuti semua aturan bisnis yang udah
                disiapin. Cukup tiru cara kerjanya dan terus lakuin sampe sukses
                dan jadi pengalaman
              </p>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="col-span-1 flex items-center">
            <div
              className="w-full h-60 h:72 lg:h-80 rounded-2xl bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${img102})` }}
            ></div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default GayaSeruBisnis;
