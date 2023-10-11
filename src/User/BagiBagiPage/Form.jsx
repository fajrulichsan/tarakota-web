import React from "react";

const formInput = [
  {
    id: 1,
    title: "Nama Lengkap",
    name: "namaLengkap",
    placeholder: "Nama Lengkap",
  },
  {
    id: 2,
    title: "No HP",
    name: "noHp",
    placeholder: "No Hp",
  },
  {
    id: 3,
    title: "Email",
    name: "email",
    placeholder: "Email",
  },
  {
    id: 4,
    title: "Nominal Investasi yang Direncanakan",
    name: "nominal",
    placeholder: "Nominal",
  }
];


const Form= () => {
  return (
    <div className="px-5 py-5 md:px-20 lg:px-32 md:py-12 lg:py-20">
      <div
        className="rounded-xl md:rounded-xl lg:rounded-3xl p-8 md:p-12 lg:p-16 md:px-16 lg:px-24 space-y-4 shadow-md shadow-gold"
      >
        {formInput.map((data) => (
          <div key={data.id}>
            <p className="text-sm md:text-md lg:text-xl">
              {data.title} <span className="text-red-600">*</span>
            </p>
            <input
              name={data.name}
              className="w-full text-sm md:text-md lg:text-xl rounded-full h-9 md:h-12 border-2 border-gray-600 px-5 bg-transparent"
              placeholder={data.placeholder}
            ></input>
          </div>
        ))}

        <div className="flex justify-end">
            <button className="px-8 w-fit py-1.5 rounded-full bg-tera text-white text-sm md:text-md lg:text-xl mt-2 md:mt-3 lg:mt-6"> Submit </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
