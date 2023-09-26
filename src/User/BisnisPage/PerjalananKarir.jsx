import React ,{ useState} from "react";
import {
  perjalananKarir,
  leftArrowBgTera,
  leftArrowBgWhite,
  rightArrowBgWhite,
} from "../../assets/img/index";

const programList = [
  {
    id: 1,
    title: "BisnisTarakota Financial Relationship",
    position: "top-0 right-0",
    description: "1 Jika kamu memilih BisnisTarakota Franchise Relationship, peranmuadalah mepenghubun antara Tarakota dan calon pemilikfranchise. Kamu akan menjelaskan konsep bisnis franchise Tarakota",
  },
  {
    id: 2,
    title: "BisnisTarakota Client Relationship",
    position: "top-20 left-0 ",
    description: "2 Jika kamu memilih BisnisTarakota Franchise Relationship, peranmuadalah menjadi penghubung antara Tarakota dan calon pemilik franchise. Kamu akan menjelaskan konsep bisnis  franchise Tarakota",
  },
  {
    id: 3,
    title: "BisnisTarakota Land Property Relationship",
    position: "bottom-0 left-0",
    description: "3 Jika kamu memilih BisnisTarakota Franchise Relationship, peranmuadalah menjadi penghubung antara Tarakota dan calon pemilikfranchise. Kamu akan menjelaskan konsep bisnis franchise Tarakota",
  },
  {
    id: 4,
    title: "BisnisTarakota Franchise Relationship",
    position: "bottom-20 right-0",
    description: "4 Jika kamu memilih BisnisTarakota Franchise Relationship, peranmuadalah menjadi penghubung antara Tarakota dan calon pemilik franchise. Kamu akan menjelaskan konsep bisnis franchise Tarakota",
  },
];

const PerjalananKarir = () => {
    const [currentProgram, setcurrentProgram] = useState(1)

    return (
    <div className="px-32 py-20">
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-1 relative">
          <div
            className="w-full h-96 bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${perjalananKarir})` }}
          ></div>

          {programList.map((data) => (
            <div
              key={data.id}
              className={`${data.position} ${currentProgram === data.id ? "bg-tera text-white" : "bg-[#F9F5EC] text-tera"} w-fit px-3 py-1.5 rounded-full absolute hover:cursor-pointer`}
              onClick = {() => setcurrentProgram(data.id)}
              style={{
                border: "6px solid transparent",
                boxShadow: "0px 4px 30px 0px rgba(212, 183, 84, 0.50)",
              }}
            >
              <p className="text-lg font-medium">{data.title}</p>
            </div>
          ))}
        </div>

        <div className="col-span-1 flex items-center">
          <div
            className="w-full p-5 rounded-2xl relative"
            style={{
              background: "#E85738",
              border: "5px solid #F8F3ED",
              boxShadow: "0px 4px 30px 0px rgba(212, 183, 84, 0.50)",
            }}
          >
            <p className="text-xl text-justify text-white">
            {programList.find((item) => item.id === currentProgram).description}
            </p>
            <img
              className="w-8 h-8 absolute top-1/2 -translate-y-1/2 -left-4"
              src={leftArrowBgWhite}
            ></img>
          </div>
        </div>
      </div>
      <p className="text-2xl mt-16 text-justify">Masing-masing dari 4 Program BisnisTarakota ini memainkan peran penting dalam menjalankan penghubungan antara klien dan perusahaan, membantu menciptakan peluang bisnis yang saling menguntungkan. Ini adalah kesempatan untuk memanfaatkan keterampilan komunikasi dan kepemimpinanmu dalam mengembangkan relasi bisnis yang berhasil.</p>
    </div>
  );
};

export default PerjalananKarir;
