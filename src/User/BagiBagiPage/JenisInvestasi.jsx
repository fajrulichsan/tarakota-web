import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
const jenisInvestasiList = [
  {
    id: 1,
    title: "Barang Fisik",
    body: "Investasi barang fisik tuh kayak beli tanah atau bangunan buat disewain atau dijual lagi, atau beli emas buat jaga-jaga nilai uang kamu, atau mungkin barang antik yang harganya bisa naik di masa depan. Yang penting, kamu bisa pegang dan kendalikan barang-barang itu secara langsung.",
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
    <div className="px-5 pt-10 pb-3 md:pt-16 md:pb-4 md:px-20 lg:px-32  lg:py-8">
      <h1 className="text-lg md:text-2xl lg:text-4xl text-tera font-bold">
        Apa ajasih jenis investasi yang bisa dicoba?
      </h1>
      <p className="text-sm md:text-lg lg:text-2xl">
        Secara umum, ada dua jenis produk investasi, yaitu :{" "}
      </p>
      <div className="grid grid-cols-12 gap-1 mt-4 md:mt-10">
        {jenisInvestasiList.map((data) => (
          <div className="col-span-6 relative flex flex-col space-y-2 justify-center items-center px-12">
            <div
              className="w-40 md:w-52 flex justify-center rounded-full  md:px-12 py-2 md:py-2 border-2 md:border-4 hover:cursor-pointer border-tera"
              onClick={() => setcurrentJenisInvestasi(data.id)}
            >
              <p className="text-sm md:text-lg lg:text-xl">{data.title}</p>
            </div>
            <div
              className={`${
                currentJenisInvestasi === data.id ? "" : "hidden"
              } p-0.5 md:p-1 flex justify-center absolute -bottom-3 left-1/2 -translate-x-3  rounded-full bg-tera`}
            >
              <FontAwesomeIcon
                icon={faChevronUp}
                rotation={180}
                size="md"
                style={{ color: "#ffffff" }}
              />
            </div>
          </div>
        ))}

        <div className="col-span-12 md:col-span-10 lg:col-span-8 md:col-start-2 lg:col-start-3 mt-8 md:mt-10 flex flex-col space-y-2 justify-center items-center md:px-12">
          <div
            className={`p-5 md:p-10 drop-shadow-lg md:shadow-lg shadow-gold text-white rounded-lg md:rounded-2xl relative`}
            style={{
              background: "#404042",
            }}
          >
            <p className="text-sm md:text-lg lg:text-xl text-justify">
              {
                jenisInvestasiList.find(
                  (item) => item.id === currentJenisInvestasi
                ).body
              }
            </p>
            <div className="p-1 md:p-2 flex justify-center absolute -top-4 left-10 -translate-x-2  rounded-full bg-tera">
              <FontAwesomeIcon
                icon={faChevronUp}
                rotation={180}
                size="1x"
                style={{ color: "#ffffff" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm md:text-lg lg:text-2xl text-justify mt-5 md:mt-7 lg:mt-10">
        <p>
          Salah satu jenis investasi dalam surat berharga itu adalah investasi
          dalam <span className="font-bold">saham</span>, yang pasti kamu udah pada tau.
        </p>
        <p>Dengan saham, kamu punya
          potongan kecil dari perusahaan tersebut. <span className="font-bold">Keren, kan?</span></p>
        <p>
          Tapi, pertanyaannya, bisnis apa yang mau kamu punya? <span className="font-bold">Pastinya bisnis
          yang punya prospek cerah dan bisa tumbuh besar lagi.</span>
        </p>
      </div>
    </div>
  );
};

export default JenisInvestasi;
