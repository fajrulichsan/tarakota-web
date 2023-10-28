import React from "react";
import { Fade } from "react-reveal";

const classList = [
  {
    id: 1,
    title: "BisnisTarakota Mentorship",
    body: "Dalam program mentorship ini, kamu akan diajarin sama mentor-mentor berpengalaman di Tarakota buat dapet ilmu dan panduan dalam bisnis arsitektur.",
  },
  {
    id: 2,
    title: "BisnisTarakota Kickstart",
    body: "Program ini khusus buat kamu yang baru memulai karier di industri arsitektur. Kamu bakal belajar langkah-langkah dasar buat sukses di bisnis ini bareng Tarakota.",
  },
  {
    id: 3,
    title: "BisnisTarakota Product Insight",
    body: "Di sini, kita akan bongkar-bongkar produk-produk arsitektur yang ditawarkan oleh Tarakota. Kamu bakal paham betul apa yang membuat produk-produk Tarakota istimewa.",
  },
  {
    id: 4,
    title: "BisnisTarakota Leadership Mastery",
    body: "Program ini nggak cuma buat jadi pemimpin, tapi jadi pemimpin terbaik. Kamu bakal belajar cara memimpin tim dengan sukses dan membangun jaringan yang kuat dalam Program Representatif BisnisTarakota",
  },
];

const ClassTarakota = () => {
  return (
    <div className="px-5 md:px-20 lg:px-32">
      <Fade bottom>
      <div>
        <h1 className="text-lg md:text-2xl lg:text-4xl text-tera font-bold">
          Ngobrolin Program BisnisTarakota, Bukan yang Biasa-biasa Aja
        </h1>
        <p className="text-sm md:text-lg lg:text-2xl">
          Sebagai seorang representatif arsitektur, kamu bakal dapetin dukungan
          online yang bisa kamu pelajari di mana aja. Ada beberapa kelas keren
          yang bakal kamu ikuti:
        </p>
      </div>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 lg:gap-6 my-4 md:my-6 lg:my-10">
        <Fade bottom>
        {classList.map((data) => (
          <div key={data.id} className={`col-span-1 md:col-span-6 lg:col-span-5 ${data.id % 2 == 1 ? "lg:col-start-2" : ""}`}>
            <div
              className="rounded-xl lg:rounded-3xl p-3 md:p-5 lg:p-8 space-y-1 md:space-y-2 lg:space-y-3"
              style={{
                border: "5px solid #FFF",
                background: "#F9F5EC",
                height : "100%",
                overflow : "hidden",
                boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.08)",
              }}
            >
              <h1 className="text-md md:text-xl lg:text-2xl font-bold text-tera text-center">
                {data.title}
              </h1>
              <p className="text-sm md:text-lg lg:text-xl text-justify">
                {data.body}
              </p>
            </div>
          </div>
        ))}
        </Fade>
      </div>
      <Fade bottom>

      <p className="text-sm md:text-lg lg:text-2xl text-justify">
      Jadi begini, kalau kamu memutuskan untuk gabung bareng kita di Program Representatif BisnisTarakota ini, dunia arsitektur bakal jadi petualangan seru yang siap banget kita eksplor bareng! Di sini, kita nggak cuma tawarin pekerjaan biasa, tapi juga pengalaman belajar yang seru banget sebagai seorang representatif bisnis di industri arsitektur. Nah, inilah yang bakal kamu dapatkan:
      </p>
      </Fade>
    </div>
  );
};

export default ClassTarakota;
