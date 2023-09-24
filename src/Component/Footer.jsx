import React from "react";
import {
  facebookWhite,
  twitterWhite,
  youtubeWhite,
  instagramWhite,
  logo,
} from "../assets/img/index";

const productList = [
  {
    title: "Proyek",
    href: "#",
  },
  {
    title: "Estimasi",
    href: "#",
  },
  {
    title: "Kerjasama",
    href: "#",
  },
  {
    title: "Testimoni",
    href: "#",
  },
];

const customerServiceList = [
  {
    title : "+62 852 8006 1520"
  },{
    title : "web@tarakota.com"
  }
]

const aboutList = [
  {
    title : "Perusahaan",
    href : "#"
  },{
    title : "Klien",
    href : "#"
  },{
    title : "Layanan",
    href : "#"
  },{
    title : "Video Profil",
    href : "#"
  }
]

const sosialMediaIcon = [
  {
    icon : instagramWhite,
    href : "#"
  },
  {
    icon : facebookWhite,
    href : "#"
  },
  {
    icon : twitterWhite,
    href : "#"
  },
  {
    icon : youtubeWhite,
    href : "#"
  }
]

const kerjasamaList = [
  {
    title : "BisnisTarakota",
    href : "#"
  },
  {
    title : "BersamaTarakota",
    href : "#"
  },
  {
    title : "BangunTarakota",
    href : "#"
  },
  {
    title : "BagibagiTarakota",
    href : "#"
  }
]

const Footer = () => {

  return (
      <div
        className="h-[25em] md:h-[30em] text-white md:p-20"
        style={{
          background:
            "#1B1B1B",
        }}
      >
        <img className="mx-auto md:mx-0 md:pt-10 pt-10 w-40 md:w-60" src={logo}></img>
        <div className="grid grid-cols-6 md:grid-cols-10 gap-5 mt-5 md:mt-10">
          <div className="col-span-2 md:col-span-2 mx-auto">
            <h3 className="text-md md:text-2xl font-bold md:mb-4">Produk</h3>
            <ul>
              {productList.map((data, index) => (
                <li key={index} className="md:mb-2">
                  <a
                    href={data.href}
                    className="text-sm md:text-lg text-gray-400 hover:text-white"
                  >
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 md:col-span-2 mx-auto">
            <h3 className="text-md md:text-2xl font-bold md:mb-4">Customer Service</h3>
            <ul>
            {customerServiceList.map((data, index) => (
                <li key={index} className="md:mb-2">
                  <a
                    href={data.href}
                    className="text-sm md:text-lg text-gray-400 hover:text-white"
                  >
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 md:col-span-2 mx-auto">
            <h3 className="text-md md:text-2xl font-bold md:mb-4">Tentang</h3>
            <ul>
            {aboutList.map((data, index) => (
                <li key={index} className="md:mb-2">
                  <a
                    href={data.href}
                    className="text-sm md:text-lg text-gray-400 hover:text-white"
                  >
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 col-start-2 md:col-span-2 mx-auto">
            <h3 className="text-md md:text-2xl font-bold md:mb-4">Kerjasama</h3>
            <ul>
            {kerjasamaList.map((data, index) => (
                <li key={index} className="md:mb-2">
                  <a
                    href={data.href}
                    className="text-sm md:text-lg text-gray-400 hover:text-white"
                  >
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 md:col-span-2 mx-auto">
            <h3 className="text-md md:text-2xl font-bold md:mb-4">Follow Us</h3>
            <div className="flex space-x-4">
               {sosialMediaIcon.map((data, index) => (
                <a
                  key={index}
                  href={data.href}
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <img
                    src={data.icon}
                    alt={`Social Media Icon ${index}`}
                    className="w-6"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
