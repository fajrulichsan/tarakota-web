import React, { useState } from "react";

const sumberList = [
  {
    id: 1,
    title: "Turnover Area Sharing",
    body: "Turnover Area Sharing Tarakota menawarkan margin keuntungan yang kompetitif yang akan menjadi sumber pendapatan utama bagi Mitra Experience Center Tarakota. Persentase margin akan berbeda-beda tergantung pada paket Experience Center yang kamu pilih.",
    position: "-bottom-3 -right-3 -translate-x-2",
    colspan: "col-span-6",
    margin: "ml-auto",
  },
  {
    id: 2,
    title: "Penjualan Furniture Mass Product",
    body: "Penjualan Furniture Mass Product Tarakota menawarkan margin keuntungan yang kompetitif yang akan menjadi sumber pendapatan utama bagi Mitra Experience Center Tarakota. Persentase margin akan berbeda-beda tergantung pada paket Experience Center yang kamu pilih.",
    position: "-bottom-3 left-0 -translate-x-2",
    colspan: "col-span-6",
    margin: "mr-auto",
  },
  {
    id: 3,
    title: "Bisnis Non-Arsitektur (NAR)",
    body: "Bisnis Non-Arsitektur (NAR) Tarakota menawarkan margin keuntungan yang kompetitif yang akan menjadi sumber pendapatan utama bagi Mitra Experience Center Tarakota. Persentase margin akan berbeda-beda tergantung pada paket Experience Center yang kamu pilih.",
    position: "-top-3 left-1/2 -translate-x-3",
    colspan: "col-span-12",
    margin: "mx-auto",
  },
];

const SumberPendapatan = () => {
  const [currentSumber, setCurrentSumber] = useState(1);
  return (
    <div className="px-5 py-5 md:px-20 lg:px-32 md:pt-20 md:pb-0 lg:pb-6">
      <h1 className="text-lg md:text-2xl lg:text-4xl text-tera text-center font-bold">
        Tiga Sumber Pendapatan Sebagai Mitra Experience Center Tarakota
      </h1>
      <div className="grid grid-cols-12 gap-6 md:gap-8 mt-4 md:mt-8 lg:mt-10">
        {sumberList.map((data) => (
          <div key={data.id} className={`${data.colspan}` }>
            <div
              className={`rounded-full p-2.5 relative md:w-80 ${data.margin} hover:cursor-pointer shadow-md shadow-gold`}
              onClick={() => setCurrentSumber(data.id)}
              style={{
                border: "1px solid #F8F3ED",
                background: "#F9F5EC",
              }}
            >
              <p className="text-xs md:text-xl font-semibold text-tera text-center">
                {data.title}
              </p>
              <div
                className={`w-5 h-5 md:w-7 md:h-7 flex justify-center items-center text-white absolute bg-tera rounded-full ${data.position}`}
              >
                {currentSumber == data.id ? data.id : ""}
              </div>
            </div>
          </div>
        ))}
        <div className=" col-span-12 md:col-span-8 md:col-start-3 mt-2 ">
          <div
            className="rounded-2xl p-5 md:p-10 relative shadow-md shadow-gold"
            style={{
              background: "#404042",
            }}
          >
            <p className="text-sm md:text-xl text-white text-justify">
              {sumberList.find((item) => item.id === currentSumber).body}
            </p>
            <div
              className={`w-7 h-7 flex justify-center items-center text-white absolute bg-tera rounded-full -top-2 left-0 -translate-x-2`}
            >
              {currentSumber}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SumberPendapatan;
