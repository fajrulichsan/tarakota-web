import React from "react";
import { bangunBanner } from "../../assets/img/index";

const Banner = () => {
  return (
    <div className="px-5 pt-24 pb-7 md:py-20 md:px-20">
      <div
        className="rounded-xl grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-row p-7 md:p-16 shadow-md md:shadow-lg md:shadow-gold shadow-gold"
        // style={{ boxShadow: "7px 11px 30px 0px #D4B754" }}
      >
        <div className="col-span-1">
          <div>
            <p className="text-2xl md:text-4xl font-bold text-tera">Perhatian,</p>
            <p className="text-2xl md:text-4xl font-bold text-tera">Para Pemilik Tanah!</p>
            <p className="text-xl font-extrabold">Hey, Tarakoters!</p>
          </div>
        </div>
        <div className="col-span-1 lg:row-span-2 flex justify-center">
          <div
            className="bg-cover w-11/12 md:w-9/12 lg:w-11/12 h-[12em] md:h-[15em] lg:h-[20em] bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${bangunBanner})` }}
          ></div>
        </div>
        <div className="col-span-1">
          <div className="mt-5 text-sm md:text-lg lg:text-xl">
            <p className="text-justify">
              Nih, ada kabar baik buat kamu yang punya lahan tapi belum tahu
              gimana memaksimalkannya!{" "}
            </p>
            <p className="text-justify">
              <span className="font-extrabold">Program BangunTarakota</span>,
              bekerja sama dengan Tarakota, lagi buka kesempatan nih buat bantu
              kamu wujudin impian punya perumahan atau area komersial keren. Gak
              perlu khawatirin soal biaya, kita bakal nanganin konsep
              pengembangan dan studi kelayakan tanpa harus mengeluarkan kocek
              sepeser pun.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
