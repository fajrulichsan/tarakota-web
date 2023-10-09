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
      className="mx-5  md:mx-20 lg:mx-32 rounded-2xl mb-10 md:mb-20 shadow-md md:shadow-lg md:shadow-gold shadow-gold"
      style={{
        background: "#F9F5EC",
      }}
    >
      <div className="space-y-3 md:space-y-5 p-8 md:p-16 lg:px-20 ">
        {formInput.map((data) => (
          <div key={data.id}>
            <p className="text-sm md:text-lg">
              {data.title} <span className="text-red-600">*</span>
            </p>
            <input
              name={data.name}
              className="w-full text-sm md:text-lg rounded-full h-9 md:h-10 border-2 border-gray-600 px-5 bg-transparent"
              placeholder={data.placeholder}
            ></input>
          </div>
        ))}
        <div className="flex justify-end">
          <button className="bg-tera w-auto px-10 py-1.5 text-sm md:text-lg text-white rounded-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
