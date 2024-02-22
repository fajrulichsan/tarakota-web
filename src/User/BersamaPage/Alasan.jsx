import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import { perjalananKarir, leftArrowBgWhite, bersamaProgram } from "../../assets/img/index";

const programList = [
  {
    id: 1,
    title: "Mudah dan Jelas",
    position: "top-0 left-10",
    description: [
      "Tanpa biaya deposit awal untuk memulai kerjasama.",
      "Mendapatkan margin keuntungan dan insentif yang jelas dan transparan.",
      "Dukungan pelatihan dan pengetahuan bisnis yang komprehensif.",
    ],
  },
  {
    id: 2,
    title: "Fleksibel dan Terencana",
    position: "top-16 right-0",
    description: [
      "Rencana bisnis yang disesuaikan dengan perkembangan pasar yang berkembang.",
      "Analisis lokasi dan investasi yang diberikan berdasarkan perhitungan bersama dengan Tarakota.",
      "Dukungan sebagian peralatan Experience Center dari Tarakota.",
    ],
  },
  {
    id: 3,
    title: "Promosi Lokal dan Nasional",
    position: "top-40 left-0 ",
    description: [
      "Mitra akan aktif dalam semua kegiatan promosi Experience Center Tarakota baik di tingkat nasional maupun lokal.",
      "Terhubung dengan jutaan pelanggan Program Kemitraan BersamaTarakota di seluruh Indonesia.",
      "Fleksibilitas untuk melakukan promosi lokal di Experience Center mitra bersama bisnis lainnya.",
    ],
  },
  {
    id: 4,
    title: "Pelatihan Bersama Tim Tarakota",
    position: "bottom-0 left-0",
    description: [
      "Rencana dan persiapan pembangunan Experience Center yang didukung oleh tim Tarakota.",
      "Program pelatihan terencana dari Tim Pembelajaran Tarakota.",
      "Implementasi standar operasional Experience Center Tarakota yang telah teruji.",
    ],
  },
  {
    id: 5,
    title: "Peluang Bisnis Tambahan",
    position: "bottom-20 right-0",
    description: [
      "Mitra berhak membangun fasilitas tambahan sebagai sumber pendapatan tambahan tanpa biaya tambahan yang dikenakan oleh Tarakota.",
      "Contohnya, kamu bisa membuka Coffee Shop di dalam Experience Center kamu untuk mendapatkan pendapatan tambahan.",
    ],
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
      <Fade bottom>
        <h1 className="text-lg md:text-2xl lg:text-4xl text-tera font-bold my-10">
          Nah, kenapa kamu harus bergabung dengan Tarakota melalui Program
          Kemitraan BersamaTarakota?
        </h1>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Fade bottom>
          <div className="col-span-1 relative ">
            <div
              className="w-64 h-72 md:w-72 md:h-96 bg-cover bg-no-repeat bg-center mx-auto rounded-2xl"
              style={{ backgroundImage: `url(${bersamaProgram})` }}
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
                  className={`${currentProgram !== data.id ? "hidden" : ""} ${
                    isMobile
                      ? "bottom-0 right-1/2 translate-x-3 -rotate-90 translate-y-3"
                      : "top-1/2 -translate-y-2 -right-2 rotate-180"
                  } w-4 h-4 absolute `}
                  src={leftArrowBgWhite}
                ></img>
              </div>
            ))}
          </div>
        </Fade>

        <Fade bottom>
          <div className="col-span-1 flex items-center">
            <div
              className="w-full p-5 rounded-2xl relative shadow-md shadow-gold"
              style={{
                background: "#E85738",
                border: "4px solid #F8F3ED",
              }}
            >
              <ul className="list-decimal px-3 md:px-5 text-justify text-sm md:text-lg lg:text-xl text-white">
                {Array.isArray(
                  programList.find((item) => item.id === currentProgram)
                    .description
                )
                  ? programList
                      .find((item) => item.id === currentProgram)
                      .description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                  : null}
              </ul>
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
        </Fade>
      </div>
    </div>
  );
};

export default Alasan;
