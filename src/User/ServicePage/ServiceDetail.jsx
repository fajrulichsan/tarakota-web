import React from "react";
import { bgVisiMisiAboutUs } from "../../assets/img/index";

const ourServis = [
    {
        id : 1,
        title : 'Arsitektur',
        flex : 'flex-row',
        img : bgVisiMisiAboutUs,
        body : "Tarakota menawarkan margin keuntungan yang kompetitif yang akan menjadi sumber pendapatan utama bagi Mitra Experience Center Tarakota. Persentase margin akan berbeda-beda tergantung pada paket Experience Center yang kamu pilih."
    },
    {
        id : 2,
        title : 'Furnitur',
        flex : 'flex-row-reverse',
        img : bgVisiMisiAboutUs,
        body : "Tarakota menawarkan margin keuntungan yang kompetitif yang akan menjadi sumber pendapatan utama bagi Mitra Experience Center Tarakota. Persentase margin akan berbeda-beda tergantung pada paket Experience Center yang kamu pilih."
    },
    {
        id : 3,
        title : 'Interior',
        flex : 'flex-row',
        img : bgVisiMisiAboutUs,
        body : "Tarakota menawarkan margin keuntungan yang kompetitif yang akan menjadi sumber pendapatan utama bagi Mitra Experience Center Tarakota. Persentase margin akan berbeda-beda tergantung pada paket Experience Center yang kamu pilih."
    },
    {
        id : 4,
        title : 'Lanskap',
        flex : 'flex-row-reverse',
        img : bgVisiMisiAboutUs,
        body : "Tarakota menawarkan margin keuntungan yang kompetitif yang akan menjadi sumber pendapatan utama bagi Mitra Experience Center Tarakota. Persentase margin akan berbeda-beda tergantung pada paket Experience Center yang kamu pilih."
    },
    {
        id : 5,
        title : 'Supervisor',
        flex : 'flex-row',
        img : bgVisiMisiAboutUs,
        body : "Tarakota menawarkan margin keuntungan yang kompetitif yang akan menjadi sumber pendapatan utama bagi Mitra Experience Center Tarakota. Persentase margin akan berbeda-beda tergantung pada paket Experience Center yang kamu pilih."
    }
]

const ServiceDetail = () => {
  return (
    <div className="px-20 py-20">
        {ourServis.map((data) => (
           <div key={data.id} className={`flex ${data.flex} justify-evenly items-center my-20`}>
           <div
             className="h-[20em] w-[20em] rounded-2xl"
             style={{ backgroundImage: `url(${data.img})` }}
           ></div>
           <div className="w-1/2">
             <h1
               className={`text-4xl font-extrabold tracking-wider ${data.flex === "flex-row-reverse" ? "text-end" : ""} `}
               style={{ color: "#E85738" }}
             >
               {data.title}
             </h1>
             <div
               className="rounded-xl p-5 mt-5"
               style={{
                 boxShadow: "7px 11px 30px 0px #D4B754",
                 background: "#F8F3ED",
               }}
             >
               <p className="text-2xl">
                 T{data.body}
               </p>
             </div>
           </div>
         </div> 
        ))}
      {/* <div className="flex flex-row justify-evenly items-center">
        <div
          className="h-[20em] w-[20em] rounded-2xl"
          style={{ backgroundImage: `url(${bgVisiMisiAboutUs})` }}
        ></div>
        <div className="w-1/2">
          <h1
            className="text-4xl font-extrabold tracking-wider"
            style={{ color: "#E85738" }}
          >
            Arsitektur
          </h1>
          <div
            className="rounded-xl p-5 mt-5"
            style={{
              boxShadow: "7px 11px 30px 0px #D4B754",
              background: "#F8F3ED",
            }}
          >
            <p className="text-2xl">
              Tarakota menawarkan margin keuntungan yang kompetitif yang akan
              menjadi sumber pendapatan utama bagi Mitra Experience Center
              Tarakota. Persentase margin akan berbeda-beda tergantung pada
              paket Experience Center yang kamu pilih.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ServiceDetail;
