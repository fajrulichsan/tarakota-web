import React from "react";

const tipsList = [
  {
    id: 1,
    title: "BisnisTarakota Blueprint",
    body: "Ini adalah panduan lengkap dalam program Representatif BisnisTarakota yang akan membimbing kamu langkah demi langkah dalam membangun bisnis arsitekturmu sendiri. Mulai dari perencanaan bisnis hingga eksekusi, semuanya ada di sini.",
  },
  {
    id: 2,
    title: "BisnisTarakota Fellowship",
    body: "Kamu akan menjadi bagian dari aliansi eksklusif di dalam komunitas BisnisTarakota. Di sini, kamu akan menjalin koneksi dengan rekan-rekan bisnis yang memiliki visi dan misi yang sama. Bersama-sama, kita bisa bergerak lebih cepat menuju kesuksesan.",
  },
  {
    id: 3,
    title: "BisnisTarakota e-Boost",
    body: "Program ini adalah solusi pintar dalam era digital. Kamu akan mendapatkan akses ke berbagai alat online canggih untuk mempercepat promosi dan dukungan bisnismu. Dengan e-Boost, bisnismu akan terasa lebih mudah dan efisien.",
  },
];

const TrikBisnis = () => {
  return (
    <div className="px-20 pb-20">
      <h1 className="text-tera text-4xl text-center font-bold py-16">
        3 Trik Keren Buat Jadi Representatif BisnisTarakota yang Sukses!
      </h1>
      <div className="grid grid-cols-3">
        {tipsList.map((data) => (
          <div key={data.id} className="col-span-1 px-5">
            <div
              className="text-white p-10 rounded-3xl space-y-4"
              style={{
                border: "6px solid #FFF",
                background: "#1B1B1B",
                boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.08)",
                height: "100%",
                overflow: "auto",
              }}
            >
              <h1 className="text-3xl text-center">{data.title}</h1>
              <hr className="w-32 mx-auto "></hr>
              <p className="text-xl text-justify">
                {data.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrikBisnis;
