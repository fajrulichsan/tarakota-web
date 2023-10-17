import React, { useState, useEffect } from "react";
import { perjalananKarir, leftArrowBgWhite } from "../../assets/img/index";

const programList = [
  {
    id: 1,
    title: "BisnisTarakota Financial Relationship",
    position: "top-0 right-0",
    description:
      "Sebagai Representatif BisnisTarakota Financial Relationship, peranmu adalah menjadi penghubung antara Tarakota dan mitra finansial atau investor. Tugas utamamu adalah untuk menjalin kerjasama dalam bidang investasi ekuitas atau pembagian saham Tarakota dengan mitra finansial. Kamu akan membangun relasi yang kuat dengan investor, memahami tujuan investasi mereka, dan mengkoordinasikan dengan Tarakota untuk mengatur kesepakatan investasi yang menguntungkan kedua belah pihak.",
  },
  {
    id: 2,
    title: "BisnisTarakota Client Relationship",
    position: "top-20 left-0 ",
    description:
      "Dalam peran Representatif BisnisTarakota Client Relationship, peranmu adalah menjadi penghubung antara Tarakota dan klien potensial. Kamu akan mencari peluang bisnis baru dan mengidentifikasi calon klien yang sesuai dengan kebutuhan Tarakota. Tugasmu adalah membangun hubungan bisnis yang kuat dengan klien, memahami kebutuhan mereka, dan mengkoordinasikan dengan Tarakota untuk menyediakan solusi yang tepat.",
  },
  {
    id: 3,
    title: "BisnisTarakota Land Property Relationship",
    position: "bottom-0 left-0",
    description:
      "Dalam peran Representatif BisnisTarakota Client Relationship, peranmu adalah menjadi penghubung antara Tarakota dan klien potensial. Kamu akan mencari peluang bisnis baru dan mengidentifikasi calon klien yang sesuai dengan kebutuhan Tarakota. Tugasmu adalah membangun hubungan bisnis yang kuat dengan klien, memahami kebutuhan mereka, dan mengkoordinasikan dengan Tarakota untuk menyediakan solusi yang tepat.",
  },
  {
    id: 4,
    title: "BisnisTarakota Franchise Relationship",
    position: "bottom-20 right-0",
    description:
      "Jika kamu memilih BisnisTarakota Franchise Relationship, peranmu adalah menjadi penghubung antara Tarakota dan calon pemilik franchise. Kamu akan menjelaskan konsep bisnis franchise Tarakota kepada calon pemilik, membantu mereka memahami persyaratan dan prosesnya, serta mengkoordinasikan dengan Tarakota untuk memudahkan proses pembukaan unit bisnis franchise.",
  },
];

const PerjalananKarir = () => {
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
    <div className="py-5 px-5 md:px-20 lg:px-32 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="col-span-1 relative">
          <div
            className="w-full h-60 md:h-80 lg:h-96 bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${perjalananKarir})` }}
          ></div>

          {programList.map((data) => (
            <div
              key={data.id}
              className={`${data.position} ${
                currentProgram === data.id
                  ? "bg-tera text-white"
                  : "bg-[#F9F5EC] text-tera"
              } w-fit px-3 py-1.5 rounded-full absolute hover:cursor-pointer shadow-md shadow-gold`}
              onClick={() => setcurrentProgram(data.id)}
              style={{
                border: "2px solid transparent",
              }}
            >
              <p className="text-sm md:text-md lg:text-lg font-medium">
                {data.title}
              </p>
              <img
                className={`${
                  currentProgram !== data.id ? "hidden" : ""
                } ${isMobile ? "bottom-0 left-1/2 -rotate-90 translate-y-2" : "top-1/2 -translate-y-2 -right-1 rotate-180"} w-4 h-4 absolute `}
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
              border: "5px solid #F8F3ED",
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
      <p className="text-sm md:text-lg lg:text-2xl mt-4 md:mt-10 lg:mt-16 text-justify">
        Masing-masing dari 4 Program BisnisTarakota ini memainkan peran penting
        dalam menjalankan penghubungan antara klien dan perusahaan, membantu
        menciptakan peluang bisnis yang saling menguntungkan. Ini adalah
        kesempatan untuk memanfaatkan keterampilan komunikasi dan kepemimpinanmu
        dalam mengembangkan relasi bisnis yang berhasil.
      </p>
    </div>
  );
};

export default PerjalananKarir;
