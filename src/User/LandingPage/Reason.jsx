import React, { useState } from "react";
import {
  reasonImage,
  previousButton,
  nextButton,
} from "../../assets/img/index";

const carouselData = [
  {
    id: 1,
    title: "Desain Kekinian",
    content:
      "Armada menggunakan interior dan fasilitas premium yang dapat membuat perjalanan Anda lebih nyaman.",
  },
  {
    id: 2,
    title: "Arsitek Ahli",
    content:
      "Armada menggunakan interior dan fasilitas premium yang dapat membuat perjalanan Anda lebih nyaman.",
  },
  {
    id: 3,
    title: "Furnitur Modern",
    content:
      "Armada menggunakan interior dan fasilitas premium yang dapat membuat perjalanan Anda lebih nyaman.",
   },
  {
    id: 4,
    title: "Kualitas Terbaik",
    content:
    "Armada menggunakan interior dan fasilitas premium yang dapat membuat perjalanan Anda lebih nyaman.",
  },
];

const styleCardTesti = {
  borderRadius: "50px",
  border: "4px solid #E85738",
  background: "#F9F5EC",
  boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.08)",
};

const Reason = () => {
  const [currentGroup, setCurrentGroup] = useState(0);

  const nextGroup = () => {
    setCurrentGroup((currentGroup + 1) % Math.ceil(carouselData.length / 2));
  };

  const prevGroup = () => {
    setCurrentGroup(
      (currentGroup - 1 + Math.ceil(carouselData.length / 2)) %
        Math.ceil(carouselData.length / 2)
    );
  };

  return (
    <div className="mx-auto">
      <div className="mx-auto grid grid-cols-4 relative px-20 py-20 ">
        <div
          className="w-60 h-60 bg-cover col-span-1 "
          style={{
            backgroundImage: `url(${reasonImage})`,
            boxShadow: "6px 4px 33px 0px #D4B754",
          }}
        ></div>
        <div className="col-span-3 space-y-9">
          <div>
            <h2 className="text-3xl font-bold text-center tracking-wider">
              Kenapa Harus Memilih "Tarakota" ?
            </h2>
            <hr className="text-3xl w-32 mx-auto font-bold text-center border-b-4 border-orange-500"></hr>
          </div>
          <div className="flex justify-center space-x-5 items-center">
            {carouselData
              .slice(currentGroup * 2, currentGroup * 2 + 2)
              .map((item) => (
                <div
                  key={item.id}
                  className="p-7 h-fit w-[35em]  flex justify-between items-center space-x-5"
                  style={styleCardTesti}
                >
                  <div className="grow w-60 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <hr className="border-2 border-orange-400 w-32"></hr>
                    <div className="relative w-auto">{item.content}</div>
                  </div>
                </div>
              ))}
          </div>
          <div className="center-navigator flex justify-center items-center space-x-2">
            <button onClick={prevGroup}>
              <img src={previousButton} alt="Previous" />
            </button>
            {Array.from({ length: Math.ceil(carouselData.length / 2) }).map(
              (_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 bg-gray-500 rounded-full ${
                    index === currentGroup ? "bg-gray-800" : ""
                  }`}
                  onClick={() => setCurrentGroup(index)}
                ></span>
              )
            )}
            <button onClick={nextGroup}>
              <img src={nextButton} alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
