import React from "react";
import {
  facebookWhite,
  youtubeWhite,
  instagramWhite,
  logo,
  linekdin,
  whatsapp,
  whatsappWhite,
  linkedinWhite,
} from "../assets/img/index";
import { Fade } from "react-reveal";

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
    id : 1,
    icon : whatsappWhite,
    link : "https://api.whatsapp.com/send?phone=6285280061520",
  },
  {
    id : 2,
    icon : instagramWhite,
    link : "https://instagram.com/tarakota.id",
  },
  {
    id : 3,
    icon : youtubeWhite,
    link : "https://www.youtube.com/@tataruangkota",
  },
  {
    id : 4,
    icon : facebookWhite,
    link : "https://www.facebook.com/tarakota.id?mibextid=LQQJ4d",
  },
  {
    id : 5,
    icon : linkedinWhite,
    link : "https://www.linkedin.com/company/tarakota/",
  }
]

const kerjasamaList = [
  {
    title : "BisnisTarakota",
    href : "/bisnis-tarakota"
  },
  {
    title : "BersamaTarakota",
    href : "/bersama-tarakota"
  },
  {
    title : "BangunTarakota",
    href : "/bangun-tarakota"
  },
  {
    title : "BagibagiTarakota",
    href : "/bagibagi-tarakota"
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
        <Fade bottom>

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
            <div className="grid grid-cols-3 gap-3">
               {sosialMediaIcon.map((data, index) => (
                <div className="col-span-1 flex items-center">
<a
                  key={index}
                  href={data.link}
                  target="_blank"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <img
                    src={data.icon}
                    alt={`Social Media Icon ${index}`}
                    className="w-6"
                  />
                </a>
                  </div>
                
              ))}
            </div>
          </div>
        </div>
        </Fade>
      </div>
  );
};

export default Footer;
