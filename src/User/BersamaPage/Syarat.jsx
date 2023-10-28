import React, {useState, useEffect} from "react";
import { Fragment } from "react";
import {Fade} from "react-reveal"

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
    <Fragment>
      <div
        className="px-5 md:px-20 lg:px-32 py-10 md:py-10 lg:py-20 grid grid-cols-5 md:grid-cols-1 gap-5 mt-6 md:-mt-10"
        style={{ background: "#404042" }}
      >
        <div className="col-span-2 md:col-span-1 flex md:flex-col items-center">
          <Fade bottom>

          <h1 className="text-lg md:text-2xl lg:text-4xl text-center font-semibold text-white">
            Persyaratan Menjadi Mitra Experience Center Tarakota
          </h1>
          <hr className={`w-20 md:w-28 lg:w-60 my-4 mx-auto border-tera border-2  ${isMobile ? "hidden" : ""}`}></hr>
          </Fade>
        </div>
        <div className="col-span-3 md:col-span-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Fade bottom>

            {syaratList.map((data) => (
              <div key={data.id} className="col-span-1">
                <div
                  className="rounded-full shadow-md shadow-gold p-1.5"
                  style={{
                    border: "1px solid #F9F5EC",
                    background: "#F9F5EC",
                  }}
                >
                  <p className="text-xs md:text-md lg:text-xl font-semibold text-center text-tera">
                    {data.title}
                  </p>
                </div>
              </div>
            ))}
            </Fade>
          </div>
        </div>
      </div>
      <Fade bottom>
      <p className="text-md md:text-xl lg:text-4xl py-5 md:my-5 lg:my-10 px-5 md:px-20 lg:px-32 text-tera font-semibold tracking-wider text-justify">
        Kamu tertarik dengan Program Kemitraan BersamaTarakota? Yuk, tanya-tanya
        lebih lanjut! Kamu bisa kirim pertanyaan melalui email
        franchise@tarakota.com atau bisa langsung isi formulir berikut,lho!
      </p>

      </Fade>
    </Fragment>
  );
};

export default Syarat;
