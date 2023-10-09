import React from "react";

const Lokasi = () => {
  return (
    <div className="px-5 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 py-8 md:py-12 lg:py-20 gap-6 md:gap-20">
      <div className="col-span-1 lg:col-span-5 order-2 md:order-1 flex flex-col justify-center items-center lg:col-start-2">
        <h1 className="text-xl md:text-4xl text-center font-bold">Lokasi</h1>
        <p className="text-center px-10 md:px-0 text-sm md:text-lg lg:text-xl mt-2 md:mt-4">
          Eightyeight @Kasablanka Office Tower A Lantai 26 Unit F Jl. Casablanca
          Raya Kav. 88, Kel. Menteng Dalam, Kec. Tebet Kota Jakarta Selatan
          12870
        </p>
      </div>
      <div className="col-span-1 lg:col-span-5 order-1 md:order-2">
        <div className="rounded-2xl h-[20em] md:h-[20em] lg:h-[25em]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3055066291313!2d106.89594507374402!3d-6.223388093764668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3b46b3e81dd%3A0x9d8b0130018bda4f!2sApartemen%20Casablanca%20East%20Residences%20Tower%20CASSA%20(%20D))!5e0!3m2!1sid!2sid!4v1694981047049!5m2!1sid!2sid"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Lokasi;
