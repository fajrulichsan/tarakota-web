import React, { useState } from "react";

const jenisInvestasiList = [
  {
    id: 1,
    title: "Barang Fisik",
    body: "Investasi dalam surat berharga, yang nggak lain adalah bukti kepemilikan aset dengan nilai tertentu. Surat-surat berharga ini bisa juga diperdagangkan di pasar keuangan, atau yang kita kenal dengan istilah efek.",
  },
  {
    id: 2,
    title: "Surat Berharga",
    body: "Investasi dalam surat berharga, yang nggak lain adalah bukti kepemilikan aset dengan nilai tertentu. Surat-surat berharga ini bisa juga diperdagangkan di pasar keuangan, atau yang kita kenal dengan istilah efek.",
  },
];

const JenisInvestasi = () => {
  const [currentJenisInvestasi, setcurrentJenisInvestasi] = useState(1);
  return (
    <div className="px-32 py-20">
      <h1 className="text-4xl text-tera font-bold">
        Apa ajasih jenis investasi yang bisa dicoba?
      </h1>
      <p className="text-2xl">
        Secara umum, ada dua jenis produk investasi, yaitu :{" "}
      </p>
      <div className="grid grid-cols-12 gap-1 mt-10">
        {jenisInvestasiList.map((data) => (
            <div className="col-span-6 flex flex-col space-y-2 justify-center items-center px-12">
            <div className="w-fit rounded-full px-12 py-2 border-4 hover:cursor-pointer border-tera"
                onClick={() => setcurrentJenisInvestasi(data.id)}
            >
              <p className="text-xl">{data.title}</p>
            </div>
          </div>
        ))}
        
        {jenisInvestasiList.map((data) => (
            <div className="col-span-6 flex flex-col space-y-2 justify-center items-center px-12">
          <div
            className={`${currentJenisInvestasi !== data.id ? "hidden" : ""} p-10 text-white rounded-2xl relative`}
            style={{
              background: "#404042",
              boxShadow: "7px 11px 30px 0px #D4B754",
            }}
          >
            <p className="text-xl">
              {data.body}
            </p>
            <div className="w-5 h-5 absolute -top-4 left-1/2 -translate-x-2  rounded-full bg-tera"></div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default JenisInvestasi;
