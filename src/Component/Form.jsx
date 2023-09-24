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
    title: "No Hp",
    name: "noHp",
    placeholder: "No Hp",
  },
  {
    id: 3,
    title: "Email",
    name: "email",
    placeholder: "Email",
  },
];

const Form = () => {
  return (
    <div
      className="mx-20 rounded-2xl mb-20"
      style={{
        background: "#F9F5EC",
        boxShadow: "7px 11px 30px 0px #D4B754",
      }}
    >
      <div className="space-y-5 py-10 px-20 ">
        {formInput.map((data) => (
          <div key={data.id}>
            <p className="text-xl">
              {data.title} <span className="text-red-600">*</span>
            </p>
            <input
              name={data.name}
              className="w-full text-lg rounded-full h-10 border-2 border-gray-600 px-5 bg-transparent"
              placeholder={data.placeholder}
            ></input>
          </div>
        ))}
        <div className="flex justify-end">
          <button className="bg-tera w-auto px-10 py-1.5 text-white rounded-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
