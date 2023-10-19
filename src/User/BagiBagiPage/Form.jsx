import React from "react";
import emailjs from "emailjs-com";

const formInput = [
  {
    id: 1,
    title: "Nama Lengkap",
    tipe : "text",
    name: "namaLengkap",
    placeholder: "Nama Lengkap",
  },
  {
    id: 2,
    title: "No HP",
    tipe : "number",
    name: "noHp",
    placeholder: "No Hp",
  },
  {
    id: 3,
    title: "Email",
    tipe : "email",
    name: "email",
    placeholder: "Email",
  },
  {
    id: 4,
    title: "Nominal Investasi yang Direncanakan",
    tipe : "number",
    name: "nominal",
    placeholder: "Nominal",
  }
];


const Form= () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_emizq9q", "template_s5dehgg", e.target, "RHjp-oAmRy8VkGhmc").then(
      (result) => {
        console.log("Email sent successfully", result);

        // You can display a success message to the user or perform other actions here.
      },
      (error) => {
        console.error("Email sending failed", error);

        // You can display an error message to the user or handle the error in another way.
      }
    );
  };

  return (
    <div className="px-5 py-5 md:px-20 lg:px-32 md:py-12 lg:py-20">
      <div
        className="rounded-xl md:rounded-xl lg:rounded-3xl p-8 md:p-12 lg:p-16 md:px-16 lg:px-24 space-y-4 shadow-md shadow-gold"
      >
        <form onSubmit={sendEmail}>
        {formInput.map((data) => (
          <div key={data.id}>
            <p className="text-sm md:text-md lg:text-xl">
              {data.title} <span className="text-red-600">*</span>
            </p>
            <input
              name={data.name}
              type={data.tipe}
              className="w-full text-sm md:text-md lg:text-xl rounded-full h-9 md:h-12 border-2 border-gray-600 px-5 bg-transparent"
              placeholder={data.placeholder}
              required
            ></input>
          </div>
        ))}

          <input name="programTarakota" value="Bagibagi Tarakota" hidden></input>
          <input name="bangunDisplay" value="none" hidden></input>
          <input name="bisnisDisplay" value="none" hidden></input>
          <input name="bagibagiDisplay" value="block" hidden></input>

        <div className="flex justify-end">
            <button type="submit" className="px-8 w-fit py-1.5 rounded-full bg-tera text-white text-sm md:text-md lg:text-xl mt-2 md:mt-3 lg:mt-6"> Submit </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
