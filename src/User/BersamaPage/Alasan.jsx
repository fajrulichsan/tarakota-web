import React, { useState } from "react";
import {
  perjalananKarir,
  leftArrowBgTera,
  leftArrowBgWhite,
  rightArrowBgWhite,
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

  return (
    <div className="px-32 py-20">
      <h1 className="text-4xl text-tera font-bold my-10">
        Nah, kenapa kamu harus bergabung dengan Tarakota melalui Program
        Kemitraan BersamaTarakota?
      </h1>
      <div className="grid grid-cols-2 gap-10">
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
              } w-fit px-3 py-1.5 rounded-full absolute hover:cursor-pointer`}
              onClick={() => setcurrentProgram(data.id)}
              style={{
                border: "6px solid transparent",
                boxShadow: "0px 4px 30px 0px rgba(212, 183, 84, 0.50)",
              }}
            >
              <p className="text-lg font-medium">{data.title}</p>
            </div>
          ))}
        </div>

        <div className="col-span-1 flex items-center">
          <div
            className="w-full p-5 rounded-2xl relative"
            style={{
              background: "#E85738",
              border: "5px solid #F8F3ED",
              boxShadow: "0px 4px 30px 0px rgba(212, 183, 84, 0.50)",
            }}
          >
            <p className="text-xl text-justify text-white">
              {
                programList.find((item) => item.id === currentProgram)
                  .description
              }
            </p>
            <img
              className="w-8 h-8 absolute top-1/2 -translate-y-1/2 -left-4"
              src={leftArrowBgWhite}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alasan;
