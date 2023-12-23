import React from "react";
import { Fragment, useState } from "react";
import { useStateContext } from "../Contexts/ContextProvider";
import emailjs from "emailjs-com";
import Loading from "./Loading";

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
  {
    id: 4,
    title: "Keperluan",
    name: "keperluan",
    tipe: "keperluan",
    placeholder: "Keperluan",
  },
];

const PopupForm = () => {
  const { popupForm, setPopupForm } = useStateContext();
  const [loading, setLoading] = useState(false);
  const { showAlertError, showAlertSuccess } = useStateContext();

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
              showAlertSuccess();
              setLoading(false);
            },
            (error) => {
              console.error("Email sending failed", error);
              showAlertError();
              setLoading(false);
            }
          );
      }
    });
  };

  return (
    <Fragment>
      {loading && <Loading />}
      <div
        className={`${
          popupForm ? "" : "hidden"
        } fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center `}
      >
        <div
          className="w-11/12 md:w-10/12 lg:w-1/2 rounded-2xl shadow-md md:shadow-lg"
          style={{ background: "#F9F5EC" }}
        >
          <div className="relative p-8 md:p-16 lg:px-20 ">
            <h1 className="text-md md:text-xl lg:text-3xl text-center font-semibold">
              Hubungi Kami
            </h1>
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

              <input name="programTarakota" value="Hubungi Kami" hidden></input>
              <input name="hubungiKamiDisplay" value="block" hidden></input>
              <input name="bangunDisplay" value="none" hidden></input>
              <input name="estimasiDisplay" value="none" hidden></input>
              <input name="bisnisDisplay" value="none" hidden></input>
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
            <button
              className="absolute top-10 right-10"
              onClick={() => setPopupForm(!popupForm)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PopupForm;
