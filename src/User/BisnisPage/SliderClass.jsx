import React, { useState, useEffect } from "react";
import {
  profileTestimoni,
  iconTestimoni,
  previousButton,
  nextButton,
} from "../../assets/img/index";

const carouselData = [
  {
    id: 1,
    title: "Pelatihan Awal yang Gak Bikin Bosen",
    content: [
      "Kita akan bantu kamu bangun pondasi kuat dengan mengenalin kamu sama seluk-beluk dunia arsitektur.",
      "Dan tentu saja, nggak lupa kita bahas juga etika yang penting banget buat sukses di industri ini",
    ],
  },
  {
    id: 2,
    title: "Terus Maju Bersama",
    content: [
      "Kamu akan terus belajar bareng kita. Kita akan ajari kamu cara berkomunikasi yang oke, negosiasi yang jitu, dan gimana caranya membangun hubungan yang asyik sama klien.",
      "Kamu juga bakal jago dalam manajemen proyek arsitektur dan ngerti betul aturan-aturannya.",
    ],
  },
];

const styleCardTesti = {
  border: "5px solid #FFF",
  boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.08)",
};

const SliderClass = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
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

  const nextGroup = () => {
    setCurrentGroup(
      (currentGroup + 1) %
        Math.ceil(isMobile ? carouselData.length : carouselData.length / 2)
    );
  };

  const prevGroup = () => {
    setCurrentGroup(
      (currentGroup -
        1 +
        Math.ceil(isMobile ? carouselData.length : carouselData.length / 2)) %
        Math.ceil(isMobile ? carouselData.length : carouselData.length / 2)
    );
  };

  return (
    <div className={`${isMobile ? "py-10" : ""} md:pb-20 `}>
      <div className="mx-auto relative py-5 px-5 md:py-20">
        {isMobile ? ( // Kondisi untuk mode mobile
          <div
            className="md:p-7 p-5 space-x-6 flex rounded-xl"
            style={styleCardTesti}
          >
            <div className="relative grow w-40 ">
              <h3 className="text-xl font-semibold mb-2 md:text-center">
                {carouselData[currentGroup].title}
              </h3>
              <p className="text-xs text-justify">
                {carouselData[currentGroup].content}
              </p>
            </div>
          </div>
        ) : (
          // Kondisi untuk mode desktop
          <div className="flex justify-center space-x-5">
            {carouselData
              .slice(currentGroup * 2, currentGroup * 2 + 2)
              .map((item) => (
                <div
                  key={item.id}
                  className="p-5 px-16 flex justify-between items-center space-x-5 relative rounded-3xl"
                  style={styleCardTesti}
                >
                  <div className="md:w-1/2 lg:w-80 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-2 text-center">
                      {item.title}
                    </h3>
                    <div className="relative text-xl text-justify">
                      <ul className="list-disc">
                        {item.content.map((data) => (
                          <li>{data}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full absolute -top-4 left-1/2 -translate-x-8 bg-tera flex justify-center items-center text-white">
                    {item.id}
                  </div>
                </div>
              ))}
          </div>
        )}
        <div
          className={`${
            isMobile ? "-bottom-4" : ""
          } dot-navigation absolute bottom-0 left-0 right-0 flex justify-center items-center space-x-2`}
        >
          <button onClick={prevGroup}>
            <img
              className={`${isMobile ? "w-6" : ""}`}
              src={previousButton}
              alt="Previous Button"
            />
          </button>
          {Array.from({
            length: Math.ceil(
              isMobile ? carouselData.length : carouselData.length / 2
            ),
          }).map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 bg-gray-500 rounded-full ${
                index === currentGroup ? "bg-gray-800" : ""
              }`}
              onClick={() => setCurrentGroup(index)}
            ></span>
          ))}
          <button onClick={nextGroup}>
            <img
              className={`${isMobile ? "w-6" : ""}`}
              src={nextButton}
              alt="Next Button"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderClass;


