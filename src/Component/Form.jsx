import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Fade } from "react-reveal";
import "./css/sweetalert.css";
import { Fragment } from "react";
import Loading from "./Loading";
import { useStateContext } from "../Contexts/ContextProvider";

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
    tipe: "email",
    placeholder: "Email",
  },
];

const Form = () => {
  const [loading, setLoading] = useState(false);
  const {showAlertError, showAlertSuccess} = useStateContext()

  const sendEmail = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Kirim Data",
      text: "Pastikan data yang diinputkan benar",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Kembali",
      customClass: {
        container: "custom-swal-container",
        popup: "custom-swal-popup",
        header: "custom-swal-header",
        title: "custom-swal-title",
        content: "custom-swal-content",
        actions: "custom-swal-buttons",
        confirmButton: "custom-swal-confirm",
        cancelButton: "custom-swal-cancel",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        emailjs
          .sendForm(
            "service_emizq9q",
            "template_s5dehgg",
            e.target,
            "RHjp-oAmRy8VkGhmc"
          )
          .then(
            (result) => {
              console.log("Email sent successfully", result);
              setLoading(false);
              showAlertSuccess();
            },
            (error) => {
              console.error("Email sending failed", error);
              setLoading(false);
              showAlertError();
            }
          );
      }
    });
  };

  return (
    <Fragment>
      {loading && <Loading />}
      <Fade bottom>
        <div
          className="mx-5 md:mx-20 lg:mx-32 rounded-2xl mb-10 md:mb-20 shadow-md md:shadow-lg md:shadow-gold shadow-gold"
          style={{ background: "#F9F5EC" }}
        >
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
                    className="w-full text-sm md:text-lg focus:bg-transparent rounded-full h-9 md:h-10 border-2 border-gray-600 px-5 bg-transparent"
                    placeholder={data.placeholder}
                    required
                  ></input>
                </div>
              ))}
              <input name="programTarakota" value="Bangun Tarakot" hidden></input>
              <input name="bangunDisplay" value="block" hidden></input>
              <input name="bisnisDisplay" value="none" hidden></input>
              <input name="estimasiDisplay" value="none" hidden></input>
              <input name="hubungiKamiDisplay" value="none" hidden></input>
              <input name="bagibagiDisplay" value="none" hidden></input>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-tera w-auto px-10 py-1.5 text-sm md:text-lg text-white rounded-full"
                  disabled={loading}
                >
                  {loading ? "Mengirim..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
};

export default Form;
