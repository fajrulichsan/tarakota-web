import React from "react";
import { bgVisiMisiAboutUs } from "../../assets/img/index";

const GayaSeruBisnis = () => {
  return (
    <div className="px-32 py-20">
      <div className="grid grid-cols-3 space-x-10">
        <div className="col-span-2 flex items-center">
          <div className="w-11/12">
            <p className="text-4xl text-tera font-bold">
              Gaya Seru Jadi Representatif BisnisTarakota yang Sukses!
            </p>
            <p className="text-2xl mt-5 text-justify">
              Supaya bisa dapetin penghasilan tiap bulan yang terus naik, kamu
              harus komitmen jadi Representatif BisnisTarakota yang sukses.
              Caranya gampang, tinggal ikuti semua aturan bisnis yang udah
              disiapin. Cukup tiru cara kerjanya dan terus lakuin sampe sukses
              dan jadi pengalaman
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <div
            className="w-full h-80 rounded-2xl"
            style={{ backgroundImage: `url(${bgVisiMisiAboutUs})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default GayaSeruBisnis;
