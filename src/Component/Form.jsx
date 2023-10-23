// import React from "react";

// const formInput = [
//   {
//     id: 1,
//     title: "Nama Lengkap",
//     name: "namaLengkap",
//     placeholder: "Nama Lengkap",
//   },
//   {
//     id: 2,
//     title: "No Hp",
//     name: "noHp",
//     placeholder: "No Hp",
//   },
//   {
//     id: 3,
//     title: "Email",
//     name: "email",
//     placeholder: "Email",
//   },
// ];

// const Form = () => {
//   return (
//     <div
//       className="mx-5  md:mx-20 lg:mx-32 rounded-2xl mb-10 md:mb-20 shadow-md md:shadow-lg md:shadow-gold shadow-gold"
//       style={{
//         background: "#F9F5EC",
//       }}
//     >
//       <div className="space-y-3 md:space-y-5 p-8 md:p-16 lg:px-20 ">
//         {formInput.map((data) => (
//           <div key={data.id}>
//             <p className="text-sm md:text-lg">
//               {data.title} <span className="text-red-600">*</span>
//             </p>
//             <input
//               name={data.name}
//               className="w-full text-sm md:text-lg rounded-full h-9 md:h-10 border-2 border-gray-600 px-5 bg-transparent"
//               placeholder={data.placeholder}
//             ></input>
//           </div>
//         ))}
//         <div className="flex justify-end">
//           <button className="bg-tera w-auto px-10 py-1.5 text-sm md:text-lg text-white rounded-full">
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Form;

import React from "react";
import emailjs from "emailjs-com";

const formInput = [
  {
    id: 1,
    title: "Nama Lengkap",
    name: "namaLengkap",
    tipe: "text",
    placeholder: "Nama Lengkap",
  },
  {
    id: 2,
    title: "No Hp",
    name: "noHp",
    tipe: "number",
    placeholder: "No Hp",
  },
  {
    id: 3,
    title: "Email",
    name: "email",
    tipe:"email",
    placeholder: "Email",
  },
];

const Form = () => {
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
    <div className="mx-5 md:mx-20 lg:mx-32 rounded-2xl mb-10 md:mb-20 shadow-md md:shadow-lg md:shadow-gold shadow-gold" style={{ background: "#F9F5EC" }}>
      <div className="p-8 md:p-16 lg:px-20 ">
        <form onSubmit={sendEmail} className="space-y-3 md:space-y-5 ">
          {formInput.map((data) => (
            <div key={data.id}>
              <p className="text-sm md:text-lg">
                {data.title} <span className="text-red-600">*</span>
              </p>
              <input
                name={data.name}
                type={data.tipe}
                className="w-full text-sm md:text-lg rounded-full h-9 md:h-10 border-2 border-gray-600 px-5 bg-transparent"
                placeholder={data.placeholder}
                required
              ></input>
            </div>
          ))}
          <input name="programTarakota" value="Bangun Tarakota" hidden></input>
          <input name="bangunDisplay" value="block" hidden></input>
          <input name="bisnisDisplay" value="none" hidden></input>
          <input name="bagibagiDisplay" value="none" hidden></input>
          <div className="flex justify-end">
            <button type="submit" className="bg-tera w-auto px-10 py-1.5 text-sm md:text-lg text-white rounded-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
