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
    <div className="px-32 py-20">
      <div
        className="rounded-3xl p-16 px-24 space-y-4"
        style={{
          boxShadow: "7px 11px 30px 0px #D4B754",
        }}
      >
        {formInput.map((data) => (
          <div key={data.id}>
            <p className="text-xl">
              {data.title} <span className="text-red-600">*</span>
            </p>
            <input
              name={data.name}
              className="w-full text-xl rounded-full h-12 border-2 border-gray-600 px-5 bg-transparent"
              placeholder={data.placeholder}
            ></input>
          </div>
        ))}

        <div className="flex justify-end">
            <button className="px-8 w-fit py-1.5 rounded-full bg-tera text-white text-xl mt-6"> Submit </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
