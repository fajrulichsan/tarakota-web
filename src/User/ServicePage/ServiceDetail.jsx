import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import { bgVisiMisiAboutUs } from "../../assets/img/index";
import {dataServicePage} from '../../data/Index'

const ServiceDetail = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Cek lebar layar untuk menentukan mode mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Atur breakpoint sesuai kebutuhan
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="lg:px-20 py-8 md:py-16 lg:py-20 ">
      <Fade bottom>
        {dataServicePage.ourServisList.map((data) => (
          <div className="grid grid-cols-3 md:grid-cols-12 lg:grid-cols-12 mt-5 px-5 gap-2 lg:gap-20">
            <div
              className={`col-span-1 md:col-span-4 lg:col-span-4 flex items-center justify-center lg:mb-10  ${
                data.id % 2 === 1
                  ? "md:col-start-2 lg:col-start-2"
                  : "order-1 lg:order-9"
              }`}
            >
              <div
                className="w-[10em] h-[10em] md:w-[15em] md:h-[15em] lg:h-[20em] lg:w-[20em] bg-cover bg-center bg-no-repeat rounded-lg lg:rounded-2xl"
                style={{ backgroundImage: `url(${data.img})` }}
              ></div>
            </div>

            <div
              className={`col-span-2 md:col-span-6 lg:col-span-6 ${
                data.id % 2 === 0 ? " md:col-start-2 lg:col-start-2" : ""
              }`}
            >
              <div className="">
                <h1
                  className={`text-xl md:text-2xl lg:text-4xl font-extrabold tracking-wider ${
                    data.flex === "flex-row-reverse" ? "text-end" : ""
                  } `}
                  style={{ color: "#E85738" }}
                >
                  {data.title}
                </h1>
                <div className="rounded-xl shadow-md shadow-gold p-4 md:p-6 md:mt-2 lg:p-8 lg:mt-5 text-xs md:text-lg lg:text-xl text-justify">
                  <ul className="list-disc px-3 md:px-5 text-justify">
                    {Array.isArray(data.body)
                      ? data.body.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))
                      : null}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default ServiceDetail;
