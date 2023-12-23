import React, { Fragment, useState } from "react";
import emailjs from "emailjs-com";
import Loading from "../../Component/Loading";
import { useStateContext } from "../../Contexts/ContextProvider";
import { Fade } from "react-reveal";

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
    title: "No HP",
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
  const { showAlertSuccess, showAlertError } = useStateContext();

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
      <div className="px-5 md:px-20 lg:px-32 pb-8 md:pb-20">
        <Fade bottom>
          <div className="rounded-xl md:rounded-3xl p-6 px-8 md:p-10 md:px-16 lg:p-16 lg:px-24 space-y-4 shadow-md shadow-gold">
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

              <input
                name="programTarakota"
                value="Bersama Tarakota"
                hidden
              ></input>
              <input name="bangunDisplay" value="block" hidden></input>
              <input name="bisnisDisplay" value="none" hidden></input>
              <input name="bagibagiDisplay" value="none" hidden></input>
              <input name="estimasiDisplay" value="none" hidden></input>
              <input name="hubungiKamiDisplay" value="none" hidden></input>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 w-fit py-1.5 rounded-full bg-tera text-white text-sm md:text-lg lg:text-xl mt-2 md:mt-6"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Fade>
      </div>
    </Fragment>
  );
};

export default Form;
