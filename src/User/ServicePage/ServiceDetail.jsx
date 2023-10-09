// import React from "react";
// import { bgVisiMisiAboutUs } from "../../assets/img/index";

// const ourServis = [
//     {
//         id : 1,
//         title : 'Arsitektur',
//         flex : 'flex-row',
//         img : bgVisiMisiAboutUs,
//         body : "Tarakota menawarkan margin keuntungan yang kompetitif yang akan menjadi sumber pendapatan utama bagi Mitra Experience Center Tarakota. Persentase margin akan berbeda-beda tergantung pada paket Experience Center yang kamu pilih."
//     },
//     {
//         id : 2,
//         title : 'Furnitur',
//         flex : 'flex-row-reverse',
//         img : bgVisiMisiAboutUs,
//         body : "Tarakota menawarkan margin keuntungan yang kompetitif yang akan menjadi sumber pendapatan utama bagi Mitra Experience Center Tarakota. Persentase margin akan berbeda-beda tergantung pada paket Experience Center yang kamu pilih."
//     },
//     {
//         id : 3,
//         title : 'Interior',
//         flex : 'flex-row',
//         img : bgVisiMisiAboutUs,
//         body : "Tarakota menawarkan margin keuntungan yang kompetitif yang akan menjadi sumber pendapatan utama bagi Mitra Experience Center Tarakota. Persentase margin akan berbeda-beda tergantung pada paket Experience Center yang kamu pilih."
//     },
//     {
//         id : 4,
//         title : 'Lanskap',
//         flex : 'flex-row-reverse',
//         img : bgVisiMisiAboutUs,
//         body : "Tarakota menawarkan margin keuntungan yang kompetitif yang akan menjadi sumber pendapatan utama bagi Mitra Experience Center Tarakota. Persentase margin akan berbeda-beda tergantung pada paket Experience Center yang kamu pilih."
//     },
//     {
//         id : 5,
//         title : 'Supervisor',
//         flex : 'flex-row',
//         img : bgVisiMisiAboutUs,
//         body : "Tarakota menawarkan margin keuntungan yang kompetitif yang akan menjadi sumber pendapatan utama bagi Mitra Experience Center Tarakota. Persentase margin akan berbeda-beda tergantung pada paket Experience Center yang kamu pilih."
//     }
// ]

// const ServiceDetail = () => {
//   return (
//     <div className="lg:px-20 md:py-20 px-5">
//         {ourServis.map((data) => (
//            <div key={data.id} className={`flex ${data.flex} justify-evenly items-center md:my-20`}>
//            <div
//              className="w-[10em] h-[10em] md:h-[20em] md:w-[20em] rounded-2xl"
//              style={{ backgroundImage: `url(${data.img})` }}
//            ></div>
//            <div className="w-2/3 md:w-1/2">
//              <h1
//                className={`text-xl md:text-4xl font-extrabold tracking-wider ${data.flex === "flex-row-reverse" ? "text-end" : ""} `}
//                style={{ color: "#E85738" }}
//              >
//                {data.title}
//              </h1>
//              <div
//                className="rounded-xl p-5 md:mt-5"
//                style={{
//                  boxShadow: "7px 11px 30px 0px #D4B754",
//                  background: "#F8F3ED",
//                }}
//              >
//                <p className="text-md md:text-2xl">
//                  {data.body}
//                </p>
//              </div>
//            </div>
//          </div>
//         ))}
//       {/* <div className="flex flex-row justify-evenly items-center">
//         <div
//           className="h-[20em] w-[20em] rounded-2xl"
//           style={{ backgroundImage: `url(${bgVisiMisiAboutUs})` }}
//         ></div>
//         <div className="w-1/2">
//           <h1
//             className="text-4xl font-extrabold tracking-wider"
//             style={{ color: "#E85738" }}
//           >
//             Arsitektur
//           </h1>
//           <div
//             className="rounded-xl p-5 mt-5"
//             style={{
//               boxShadow: "7px 11px 30px 0px #D4B754",
//               background: "#F8F3ED",
//             }}
//           >
//             <p className="text-2xl">
//               Tarakota menawarkan margin keuntungan yang kompetitif yang akan
//               menjadi sumber pendapatan utama bagi Mitra Experience Center
//               Tarakota. Persentase margin akan berbeda-beda tergantung pada
//               paket Experience Center yang kamu pilih.
//             </p>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default ServiceDetail;

import React, {useState, useEffect} from "react";
import { bgVisiMisiAboutUs } from "../../assets/img/index";

const ourServis = [
  {
    id: 1,
    title: "Arsitektur",
    flex: "flex-row",
    img: bgVisiMisiAboutUs,
    body: "Tarakota menawarkan margin keuntungan yang kompetitif yang akan menjadi sumber pendapatan utama bagi Mitra Experience Center Tarakota. Persentase margin akan berbeda-beda tergantung pada paket Experience Center yang kamu pilih.",
  },
  {
    id: 2,
    title: "Furnitur",
    flex: "flex-row-reverse",
    img: bgVisiMisiAboutUs,
    body: "Tarakota menawarkan margin keuntungan yang kompetitif yang akan menjadi sumber pendapatan utama bagi Mitra Experience Center Tarakota. Persentase margin akan berbeda-beda tergantung pada paket Experience Center yang kamu pilih.",
  },
  {
    id: 3,
    title: "Interior",
    flex: "flex-row",
    img: bgVisiMisiAboutUs,
    body: "Tarakota menawarkan margin keuntungan yang kompetitif yang akan menjadi sumber pendapatan utama bagi Mitra Experience Center Tarakota. Persentase margin akan berbeda-beda tergantung pada paket Experience Center yang kamu pilih.",
  },
  {
    id: 4,
    title: "Lanskap",
    flex: "flex-row-reverse",
    img: bgVisiMisiAboutUs,
    body: "Tarakota menawarkan margin keuntungan yang kompetitif yang akan menjadi sumber pendapatan utama bagi Mitra Experience Center Tarakota. Persentase margin akan berbeda-beda tergantung pada paket Experience Center yang kamu pilih.",
  },
  {
    id: 5,
    title: "Supervisor",
    flex: "flex-row",
    img: bgVisiMisiAboutUs,
    body: "Tarakota menawarkan margin keuntungan yang kompetitif yang akan menjadi sumber pendapatan utama bagi Mitra Experience Center Tarakota. Persentase margin akan berbeda-beda tergantung pada paket Experience Center yang kamu pilih.",
  },
];

const ServiceDetail = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Cek lebar layar untuk menentukan mode mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Atur breakpoint sesuai kebutuhan
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="lg:px-20 py-8 md:py-16 lg:py-20 ">
      {ourServis.map((data) => (
        <div className="grid grid-cols-3 md:grid-cols-12 lg:grid-cols-12 mt-5 px-5 gap-5 lg:gap-20">
          <div className={`col-span-1 md:col-span-4 lg:col-span-4 flex items-center justify-center  ${data.id % 2 === 1 ? "md:col-start-2 lg:col-start-2" : "order-1 lg:order-9"}`}>
            <div
              className="w-[10em] h-[10em] md:w-[15em] md:h-[15em] lg:h-[20em] lg:w-[20em] bg-cover bg-center bg-no-repeat rounded-lg lg:rounded-2xl"
              style={{ backgroundImage: `url(${data.img})` }}
            ></div>
          </div>

          <div className={`col-span-2 md:col-span-6 lg:col-span-6 ${data.id % 2 === 0 ? " md:col-start-2 lg:col-start-2" : ""}`}>
            <div className="">
              <h1
                className={`text-xl md:text-2xl lg:text-4xl font-extrabold tracking-wider ${
                  data.flex === "flex-row-reverse" ? "text-end" : ""
                } `}
                style={{ color: "#E85738" }}
              >
                {data.title}
              </h1>
              <div
                className="rounded-xl shadow-md shadow-gold p-4 md:p-6 md:mt-2 lg:p-8 lg:mt-5"
              >
                <p className="text-xs md:text-lg lg:text-2xl text-justify">{data.body}</p>
              </div>
            </div>
          </div>
        </div>        
      ))}
    </div>
  );
};

export default ServiceDetail;
