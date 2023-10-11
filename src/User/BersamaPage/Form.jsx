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
  }
];


const Form= () => {
  return (
    <div className="px-5 md:px-20 lg:px-32 pb-8 md:pb-20">
      <div
        className="rounded-xl md:rounded-3xl p-6 px-8 md:p-10 md:px-16 lg:p-16 lg:px-24 space-y-4 shadow-md shadow-gold"
      >
        {formInput.map((data) => (
          <div key={data.id}>
            <p className="text-sm md:text-lg lg:text-xl">
              {data.title} <span className="text-red-600">*</span>
            </p>
            <input
              name={data.name}
              className="w-full text-sm md:text-lg lg:text-xl rounded-full h-9 md:h-12 border-2 border-gray-600 px-5 bg-transparent"
              placeholder={data.placeholder}
            ></input>
          </div>
        ))}

        <div className="flex justify-end">
            <button className="px-8 w-fit py-1.5 rounded-full bg-tera text-white text-sm md:text-lg lg:text-xl mt-2 md:mt-6"> Submit </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
