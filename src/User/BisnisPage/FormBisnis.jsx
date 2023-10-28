import React from "react";
import emailjs from "emailjs-com";
import {Fade} from 'react-reveal'

const formInput = [
  {
    id: 1,
    title: "Nama Lengkap (sesuai KTP)",
    name: "namaLengkap",
    tipe: "text",
    placeholder: "Nama Lengkap",

  },
  {
    id: 2,
    title: "Nomor Induk Keluarga (NIK) / No KTP",
    name: "noNik",
    tipe: "number",
    placeholder: "No NIK",
  },
  {
    id: 3,
    title: "Alamat Lengkap sesuai KTP",
    name: "alamatLengkap",
    tipe: "text",
    placeholder: "Alamat Lengkap",
  },
  {
    id: 4,
    title: "Alamat Lengkap Domisili",
    name: "alamatLengkapDomisili",
    tipe: "text",
    placeholder: "Alamat Lengkap Domisili",
  },
  {
    id: 5,
    title: "Alamat Email",
    name: "alamatEmail",
    tipe: "email",
    placeholder: "Alamat Email",
  },
  {
    id: 6,
    title: "Nomor Handphone",
    name: "noHp",
    tipe: "number",
    placeholder: "No Hp",
  },
  {
    id: 7,
    title: "No Rekening",
    name: "noRekening",
    tipe: "number",
    placeholder: "No Rekening",
  },
];

const programWithUList = [
  {
    id: 1,
    title: "Representatif Inverstor Relationship",
  },
  {
    id: 2,
    title: "Representatif Client Relationship",
  },
  {
    id: 3,
    title: "Representatif Franchise Relationship",
  },
  {
    id: 4,
    title: "Representatif Land Property Relationship",
  },
];

const bankList = [
  {
    id: 1,
    title: "Bank Central Asia (BCA)",
  },
  {
    id: 2,
    title: "Bank Rakyat Indonesia (BRI)",
  },
  {
    id: 3,
    title: "Bank Mandiri",
  },
];

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
const FormBisnis = () => {
  return (
    <div className="px-5 pb-10 md:px-20 lg:px-32 md:pt-0 md:pb-10 lg:pt-5 lg:pb-20">
      <Fade bottom>

      <div
        className="rounded-xl md:rounded-3xl p-5 px-6 md:p-10 lg:p-16 md:px-12 lg:px-24 shadow-md shadow-gold"
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

          <div className="">
            <p className="text-sm md:text-lg lg:text-xl">
              Bank Rekening <span className="text-red-600">*</span>
            </p>
            {bankList.map((data) => (
              <div key={data.id} className="flex items-center space-x-4">
                <input
                  id={data.title}
                  className="w-4 h-4"
                  name="rekening"
                  type="radio"
                  value={data.title}
                  required
                ></input>
                <label
                  htmlFor={data.title}
                  className="text-sm md:text-lg lg:text-xl"
                >
                  {data.title}
                </label>
              </div>
            ))}

            <div className="flex items-center space-x-4">
              <input
                id="bankLain"
                className="w-4 h-4"
                name="rekening"
                type="radio"
                required
              ></input>
              <label
                htmlFor="bankLain"
                className="text-sm md:text-lg lg:text-xl w-24"
              >
                Yang Lain :
              </label>
              <input className="w-full bg-transparent border-b-2 border-gray-500" name="rekening"></input>
            </div>
          </div>
          <div>
            <p className="text-sm md:text-lg lg:text-xl">
              Cabang <span className="text-red-600">*</span>
            </p>
            <input
              name="cabang"
              className="w-full text-sm md:text-lg lg:text-xl rounded-full h-9 md:h-12 border-2 border-gray-600 px-5 bg-transparent"
              placeholder="Cabang Bank"
              required
            ></input>
          </div>
          <div>
            <p className="text-sm md:text-lg lg:text-xl">
              Nama Pemilik Rekening <span className="text-red-600">*</span>
            </p>
            <input
              name="namaPemilikRekening"
              className="w-full text-sm md:text-lg lg:text-xl rounded-full h-9 md:h-12 border-2 border-gray-600 px-5 bg-transparent"
              placeholder="Nama Pemilik Rekening"
              required
            ></input>
          </div>

          <div className="">
            <p className="text-sm md:text-lg lg:text-xl">
              Program TarakotaWithU yang dipilih{" "}
              <span className="text-red-600">*</span>
            </p>
            {programWithUList.map((data) => (
              <div key={data.id} className="flex items-center space-x-4">
                <input
                  id={data.title}
                  className="w-4 h-4"
                  name="program"
                  value={data.title}
                  type="radio"
                  required
                ></input>
                <label
                  htmlFor={data.title}
                  className="text-sm md:text-lg lg:text-xl"
                >
                  {data.title}
                </label>
              </div>
            ))}
          </div>

          <input name="programTarakota" value="Bisnis Tarakota" hidden></input>
          <input name="bangunDisplay" value="none" hidden></input>
          <input name="bisnisDisplay" value="block" hidden></input>
          <div className="flex justify-end">
            <button className="px-8 w-fit py-1.5 rounded-full bg-tera text-white text-sm md:text-lg lg:text-xl mt-6">
              Submit
            </button>
          </div>
          </form>
      </div>
      </Fade>
    </div>
  );
};

export default FormBisnis;
