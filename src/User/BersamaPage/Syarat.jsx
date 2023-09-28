import React from "react";
import { Fragment } from "react";

const syaratList = [
  {
    id: 1,
    title: "Badan Usaha PT (Perseroan Terbatas)",
  },
  {
    id: 2,
    title: "Memiliki Lahan Sesuai Syarat Tarakota",
  },
  {
    id: 3,
    title: "Mematuhi Standar Operasional Tarakota",
  },
];

const Syarat = () => {
  return (
    <Fragment>
      <div className="px-32 py-20" style={{ background: "#404042" }}>
        <h1 className="text-4xl text-center font-semibold text-white">
          Persyaratan Menjadi Mitra Experience Center Tarakota
        </h1>
        <hr className="w-60 my-4 mx-auto border-tera border-2 "></hr>
        <div className="grid grid-cols-12 gap-10 mt-10">
          {syaratList.map((data) => (
            <div key={data.id} className="col-span-4">
              <div
                className="rounded-full"
                style={{
                  boxShadow: "0px 4px 30px 0px rgba(212, 183, 84, 0.50)",
                  border: "10px solid #F9F5EC",
                  background: "#F9F5EC",
                }}
              >
                <p className="text-xl font-semibold text-center text-tera">
                  {data.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-4xl my-20 px-32 text-tera font-semibold tracking-wider">
        Kamu tertarik dengan Program Kemitraan BersamaTarakota? Yuk, tanya-tanya
        lebih lanjut! Kamu bisa kirim pertanyaan melalui email
        franchise@tarakota.com atau bisa langsung isi formulir berikut,lho!
      </p>
    </Fragment>
  );
};

export default Syarat;
