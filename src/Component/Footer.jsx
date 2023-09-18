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
    icon : facebookWhite,
    href : "#"
  },
  {
    icon : instagramWhite,
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
    title : "Bersama Tarakota",
    href : "#"
  },
  {
    title : "With you Tarakota",
    href : "#"
  },
  {
    title : "Bangun Tarakota",
    href : "#"
  }
]

const Footer = () => {

  return (
    <footer className="bg-gray-800 relative h-[25em]"  style={{
      borderRadius: "90px 0px 0px 0px"}}>
      <div
        className="absolute inset-0 h-[25em] text-white p-24"
        style={{
          borderRadius: "90px 0px 0px 0px",
          background:
            "linear-gradient(116deg, #E85738 -14.86%, rgba(0, 0, 0, 0.00) 20.3%)",
        }}
      >
        <img src={logo}></img>
        <div className="mx-auto flex flex-wrap justify-evenly mt-10">
          <div className="w-full md:w-1/2 lg:w-1/5 px-4 mb-8">
            <h3 className="text-2xl font-bold mb-4">Produk</h3>
            <ul>
              {productList.map((data, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={data.href}
                    className="text-lg text-gray-400 hover:text-white"
                  >
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/5 px-4 mb-8">
            <h3 className="text-2xl font-bold mb-4">Customer Service</h3>
            <ul>
            {customerServiceList.map((data, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={data.href}
                    className="text-lg text-gray-400 hover:text-white"
                  >
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/5 px-4 mb-8">
            <h3 className="text-2xl font-bold mb-4">Tentang</h3>
            <ul>
            {aboutList.map((data, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={data.href}
                    className="text-lg text-gray-400 hover:text-white"
                  >
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/5 px-4 mb-8">
            <h3 className="text-2xl font-bold mb-4">Kerjasama</h3>
            <ul>
            {kerjasamaList.map((data, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={data.href}
                    className="text-lg text-gray-400 hover:text-white"
                  >
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/5 px-4 mb-8">
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
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
    </footer>
  );
};

export default Footer;
