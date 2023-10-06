import React from "react";
import {
  photo,
  code,
  sosial,
  branding,
  pen,
  grafik,
} from "../../assets/img/digita/index";

const serviceList = [
  {
    Id: 1,
    title: "Photography & Videography",
    body: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet",
    icon: photo,
  },
  {
    Id: 2,
    title: "Website Development",
    body: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet",
    icon: code,
  },
  {
    Id: 3,
    title: "Social Media Management",
    body: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet",
    icon: sosial,
  },
  {
    Id: 4,
    title: "Branding & Visual Identity",
    body: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet",
    icon: branding,
  },
  {
    Id: 5,
    title: "Branding & Visual Identity",
    body: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet",
    icon: pen,
  },
  {
    Id: 6,
    title: "Search Engine Optimization",
    body: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet",
    icon: grafik,
  },
];

const Services = () => {
  return (
    <div className="bg-white px-20 py-20">
      <p className="text-2xl">services</p>
      <p className="text-6xl font-bold">
        One stop solution service to grow business
      </p>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {serviceList.map((data) => (
          <div
            className="col-span-1 space-y-3 p-10 rounded-2xl text-white"
            style={{
              background:
                "var(--Radial-gradient---dark-blue, radial-gradient(98.82% 232.16% at 16.38% -117.48%, #00619E 0.98%, #002135 86.47%))",
            }}
          >
            <img src={data.icon}></img>
            <p className="text-3xl font-semibold">{data.title}</p>
            <p className="text-lg text-justify">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum
              dolor sit ametLorem ipsum dolor sit amet
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
