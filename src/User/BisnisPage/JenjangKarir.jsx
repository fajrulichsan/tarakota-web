import React, { Fragment, useState } from "react";
import { bgBannerSlider } from "../../assets/img/index";

const JenjangKarirList = [
  {
    id: 1,
    title: "Start-Up Scout (SUS)",
    description:
      "Start-Up Scout (SUS) Di level ini, seseorang memulai karirnya di industri arsitektur. Mereka adalah Start-Up Scout yang belajar tentang produk arsitektur, teknik penjualan, dan membangun basis klien awal",
  },
  {
    id: 2,
    title: "Advisory Ace (AA)",
    description:
      "Advisory Ace (AA) Di level ini, seseorang memulai karirnya di industri arsitektur. Mereka adalah Start-Up Scout yang belajar tentang produk arsitektur, teknik penjualan, dan membangun basis klien awal",
  },
  {
    id: 3,
    title: "Team Captain (TC)",
    description:
      "Team Captain (TC) Di level ini, seseorang memulai karirnya di industri arsitektur. Mereka adalah Start-Up Scout yang belajar tentang produk arsitektur, teknik penjualan, dan membangun basis klien awal",
  },
  {
    id: 4,
    title: "Growth Director (GD)",
    description:
      "Growth Director (GD) Di level ini, seseorang memulai karirnya di industri arsitektur. Mereka adalah Start-Up Scout yang belajar tentang produk arsitektur, teknik penjualan, dan membangun basis klien awal",
  },
];

const JenjangKarir = () => {
  const [currentJenjangKarir, setCurrentJenjangKarir] = useState(1);
  return (
    <Fragment>
      <div
        className="w-full h-[20em] relative bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgBannerSlider})` }}
      >
        <div
          className="inset-0 absolute "
          style={{
            background:
              "linear-gradient(92deg, rgba(232, 87, 56, 0.68) -3.7%, rgba(0, 0, 0, 0.00) 87.19%)",
          }}
        ></div>
      </div>
      <div className="px-32 py-20">
        <div className="grid grid-cols-9 gap-20">
          <div className="col-span-6">
            <p className="text-2xl text-justify">
              Jika kamu ngerasa punya semangat buat menjelajahi karir di dunia
              arsitektur yang penuh peluang, ayo kita eksplor lebih dalam
              tentang jenjang karir yang penuh potensi ini. Dari peran 'Start-Up
              Scout' hingga 'Growth Director,' di dunia arsitektur ini, kita
              pake bahasa kekinian buat nggambarkan perjalanan karir seru ini.
              Yuk, kita diskusiin gimana tiap tahapannya bisa bantuin kamu
              menuju sukses!
            </p>
            <div
              className="rounded-2xl p-10 mt-8 relative"
              style={{
                background: "#404042",
                boxShadow: "7px 11px 30px 0px #D4B754",
              }}
            >
              <p className="text-2xl text-white">
                {
                  JenjangKarirList.find(
                    (item) => item.id === currentJenjangKarir
                  ).description
                }
              </p>

              <div className="w-6 h-6 bg-tera rounded-full absolute top-1/2 -translate-y-2 right-0 translate-x-3"></div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex flex-col space-y-6">
              {JenjangKarirList.map((data) => (
                <div
                  key={data.id}
                  className="rounded-full flex justify-center relative hover:cursor-pointer"
                  onClick={() => setCurrentJenjangKarir(data.id)}
                  style={{
                    border: "10px solid #F9F5EC",
                    background: "#F9F5EC",
                    boxShadow: "0px 2px 20px 0px rgba(212, 183, 84, 0.50)",
                  }}
                >
                  <p className="text-2xl text-tera font-semibold">
                    {data.title}
                  </p>
                  {data.id === currentJenjangKarir && (
                    <div className="w-5 h-5 bg-tera rounded-full absolute top-1/2 -translate-y-2 left-0 -translate-x-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default JenjangKarir;
