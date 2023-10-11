import React, { useState, useEffect } from "react";
import {
  perjalananKarir,
  leftArrowBgWhite
} from "../../assets/img/index";

const programList = [
  {
    id: 1,
    title: "Mudah dan Jelas",
    position: "top-0 left-10",
    description:
      "1 Jika kamu memilih BisnisTarakota Franchise Relationship, peranmuadalah mepenghubun antara Tarakota dan calon pemilikfranchise. Kamu akan menjelaskan konsep bisnis franchise Tarakota",
  },
  {
    id: 2,
    title: "Fleksibel dan Terencana",
    position: "top-16 right-0",
    description:
      "1 Jika kamu memilih BisnisTarakota Franchise Relationship, peranmuadalah mepenghubun antara Tarakota dan calon pemilikfranchise. Kamu akan menjelaskan konsep bisnis franchise Tarakota",
  },
  {
    id: 3,
    title: "Promosi Lokal dan Nasional",
    position: "top-40 left-0 ",
    description:
      "2 Jika kamu memilih BisnisTarakota Franchise Relationship, peranmuadalah menjadi penghubung antara Tarakota dan calon pemilik franchise. Kamu akan menjelaskan konsep bisnis  franchise Tarakota",
  },
  {
    id: 4,
    title: "Pelatihan Bersama Tim Tarakota",
    position: "bottom-0 left-0",
    description:
      "3 Jika kamu memilih BisnisTarakota Franchise Relationship, peranmuadalah menjadi penghubung antara Tarakota dan calon pemilikfranchise. Kamu akan menjelaskan konsep bisnis franchise Tarakota",
  },
  {
    id: 5,
    title: "Peluang Bisnis Tambahan",
    position: "bottom-20 right-0",
    description:
      "4 Jika kamu memilih BisnisTarakota Franchise Relationship, peranmuadalah menjadi penghubung antara Tarakota dan calon pemilik franchise. Kamu akan menjelaskan konsep bisnis franchise Tarakota",
  },
];

const Alasan = () => {
  const [currentProgram, setcurrentProgram] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Cek lebar layar untuk menentukan mode mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 680); // Atur breakpoint sesuai kebutuhan
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="px-5 pt-0 pb-5 md:pt-0 lg:pt-20 md:px-20 lg:px-32">
      <h1 className="text-lg md:text-2xl lg:text-4xl text-tera font-bold my-10">
        Nah, kenapa kamu harus bergabung dengan Tarakota melalui Program
        Kemitraan BersamaTarakota?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="col-span-1 relative">
          <div
            className="w-full h-96 bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${perjalananKarir})` }}
          ></div>

          {programList.map((data) => (
            <div
              key={data.id}
              className={`${data.position} ${
                currentProgram === data.id
                  ? "bg-tera text-white"
                  : "bg-[#F9F5EC] text-tera"
              } w-fit px-3 py-1 lg:py-1.5 rounded-full absolute hover:cursor-pointer shadow-md shadow-gold`}
              onClick={() => setcurrentProgram(data.id)}
              style={{
                border: "3px solid transparent",
              }}
            >
              <p className="text-sm md:text-lg font-medium">{data.title}</p>
              <img
                className={`${
                  currentProgram !== data.id ? "hidden" : ""
                } ${isMobile ? "bottom-0 right-1/2 translate-x-3 -rotate-90 translate-y-2" : "top-1/2 -translate-y-2 -right-1 rotate-180"} w-4 h-4 absolute `}
                src={leftArrowBgWhite}
              ></img>
            </div>
          ))}
        </div>

        <div className="col-span-1 flex items-center">
          <div
            className="w-full p-5 rounded-2xl relative shadow-md shadow-gold"
            style={{
              background: "#E85738",
              border: "4px solid #F8F3ED",
            }}
          >
            <p className="text-sm md:text-lg lg:text-xl text-justify text-white">
              {
                programList.find((item) => item.id === currentProgram)
                  .description
              }
            </p>
            <img
              className={`${
                isMobile
                  ? "w-6 h-6 absolute top-0 rotate-90 -translate-y-3 left-1/2"
                  : "w-8 h-8 absolute top-1/2 -translate-y-1/2 -left-4"
              }`}
              src={leftArrowBgWhite}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alasan;
