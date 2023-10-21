import React from "react";
import emailjs from "emailjs-com";

const formInput = [
  {
    id: 1,
    title: "Nama Lengkap",
    name: "namaLengkap",
    tipe:"text",
    placeholder: "Nama Lengkap",
  },
  {
    id: 2,
    title: "No HP",
    name: "noHp",
    tipe:"number",
    placeholder: "No Hp",
  },
  {
    id: 3,
    title: "Email",
    name: "email",
    tipe:"email",
    placeholder: "Email",
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
    <div className="px-5 md:px-20 lg:px-32 pb-8 md:pb-20">
      <div
        className="rounded-xl md:rounded-3xl p-6 px-8 md:p-10 md:px-16 lg:p-16 lg:px-24 space-y-4 shadow-md shadow-gold"
      >
         <form onSubmit={sendEmail} className="space-y-4">
        {formInput.map((data) => (
          <div key={data.id}>
            <p className="text-sm md:text-lg lg:text-xl">
              {data.title} <span className="text-red-600">*</span>
            </p>
            <input
              name={data.name}
              type={data.tipe}
              className="w-full text-sm md:text-lg lg:text-xl rounded-full h-9 md:h-12 border-2 border-gray-600 px-5 bg-transparent"
              placeholder={data.placeholder}
              required
            ></input>
          </div>
        ))}

          <input name="programTarakota" value="Bersama Tarakota" hidden></input>
          <input name="bangunDisplay" value="block" hidden></input>
          <input name="bisnisDisplay" value="none" hidden></input>
          <input name="bagibagiDisplay" value="none" hidden></input>

        <div className="flex justify-end">
            <button type="submit" className="px-8 w-fit py-1.5 rounded-full bg-tera text-white text-sm md:text-lg lg:text-xl mt-2 md:mt-6"> Submit </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
